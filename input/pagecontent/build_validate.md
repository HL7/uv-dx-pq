### Validate a document

Validate each document Bundle against the profile of its type, and a collection against [BundleDocumentCollectionPq](StructureDefinition-Bundle-document-collection-pq.html), with the [HL7 FHIR Validator](https://confluence.hl7.org/display/FHIR/Using+the+FHIR+Validator):

```
java -jar validator_cli.jar my-document.json -version 5.0.0 \
  -ig hl7.fhir.uv.pharm-quality#current \
  -profile http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-document-type1-pq
```

Use `Bundle-document-type2-pq`, `Bundle-document-type3-pq`, `Bundle-document-type4-pq` or `Bundle-document-collection-pq` for the other types.

### Invariants

Profiles carry the structural rules; these invariants are checked by the validator.

| Id | Rule | Types |
|---|---|---|
| `pqi-doc-1` | The first entry of the document Bundle is the Composition | 1–4 |
| `pqi-sec-0` | Every top-level section is coded from [CtdSectionPq](CodeSystem-ctd-section-pq.html) | 1–4 |
| `pqi-sec-1` | A sub-section's code sits under its parent's code (3.2.R sub-sections exempt) | 1–4 |
| `pqi-sec-2` | Sibling sections are unique by code, focus and title | 1–4 |
| `pqi-gran-1` | A Module 3.2 Composition has one CTD top-level section, from `vs-ctd-document-root-pq` | 1–4 |
| `pqi-foc-1` | `focus` only on repeatable headings | 1–4 |
| `pqi-foc-3` | The focus target is never also an entry of the same section | 1–4 |
| `pqi-foc-2` | Repeated headings each carry a focus | 2–4 |
| `pqi-txt-1` | Every leaf section has narrative | 1–3 |
| `pqi-t1-1` | Section entries reference only image DocumentReferences | 1 |
| `pqi-t2-1` | CTD sections reference only image DocumentReferences | 2 |
| `pqi-t3-1` | Entries of sections with authored narrative carry a `textLink` | 3–4 |
| `pqi-t4-1` | Only replaceable headings may omit authored narrative | 4 |
| `pqi-t4-org` … `pqi-t4-stab` | Entries of replaceable headings resolve to the allowed resource types | 4 |
| `pqi-gran-2` | A document collection holds only document Bundles | collection |

### Quality checks for validation apps

Quality checks live in external validation. These conformance rules cannot be checked reliably with FHIRPath, so validation apps SHALL check them:

* **Images:** every `<img src="Binary/[id]"/>` resolves to a `Binary` entry in the same Bundle with an `image/*` contentType, and every image Binary is described by a DocumentReference listed in the section that shows it.
* **Broken links (error):** every `textLink.htmlid` is an `id` that exists in the same section's narrative.
* **Orphan ids (warning):** every span `id` in a Type 3 or Type 4 narrative is pointed at by an entry.
* **Heading completeness (warning):** every heading of the template appears under the document's root heading.
* **Shared identifiers:** a resource that appears in several documents of a collection has the same identifier in each.

### Common errors

| Error | Fix |
|---|---|
| `pqi-gran-1` fails | The document spans several level-3 headings: split it, and send the documents together in a collection |
| `pqi-sec-1` fails | A section is nested under the wrong heading: check the code against the [CtdSectionPq](CodeSystem-ctd-section-pq.html) hierarchy |
| `pqi-sec-2` fails | A heading is repeated without a distinct focus (Types 2–4) or title (Type 1) |
| `pqi-t2-1` fails | A resource is referenced from a CTD section in Type 2: move it to the Product data section, or build Type 3 |
| `pqi-t3-1` fails | An entry has no `textLink`: anchor the passage that discusses it |
| `pqi-t4-1` fails | A non-replaceable section has no authored narrative: restore the narrative |
