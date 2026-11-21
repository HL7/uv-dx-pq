### Who this is for

Sponsors and regulators whose Module 2.3 and Module 3.2 content lives in Word or PDF, and who want the easiest path to a structured document. PQI Type 1 is a 1:1 conversion of the ICH M4Q(R1) template and its content into a FHIR document.

### What you need

* The template: the ICH M4Q(R1) headings, or a regulator's template built on them (e.g. Health Canada QOS-CE, QOS-B, CPID-CE, CPID-B).
* The content: the Word document for one Module 2.3 QOS, or for one level-3 Module 3.2 heading.
* A converter from Word to the FHIR XHTML narrative subset.
* The starter files: the [Module 2.3 skeleton](Bundle-bundle-document-type1-pq-m23-r1-skeleton.html) and the [Module 3.2 skeleton collection](Bundle-bundle-document-collection-pq-m32-r1-skeleton.html), which contain every M4Q(R1) heading, coded, with no content.

### Steps

1. **Pick the document.** One document for Module 2.3; one document per level-3 Module 3.2 heading (see [Document granularity](build.html#document-granularity)). Set `Composition.type` to `m2-3-qos` or `m3-2-quality` from [PqiDocumentType](CodeSystem-pqi-document-type.html), and `Composition.category` to `type-1`.
2. **Copy the heading tree.** Start from the skeleton for that heading. Every heading of the template appears, in order, as a `section` with its [CtdSectionPq](CodeSystem-ctd-section-pq.html) code and title. Headings marked "Not applicable" keep their section and narrative, as in the Word original.
3. **Convert the content** of each heading into `section.text` (`status = additional`), following the mapping rules below. Every leaf section has narrative.
4. **Add the images.** For each image, add a `Binary` entry with the image bytes and a `DocumentReference` entry ([DocumentReferenceDrugPq](StructureDefinition-DocumentReference-drug-pq.html)) with the figure type and caption, and `content.attachment` pointing at the Binary with contentType, size and hash. Show the image in the narrative as `<img src="Binary/[id]"/>` and add the DocumentReference to `section.entry`. Nothing goes in `Composition.contained`. Images go in at full resolution.
5. **Fill the header.** Product name in `subject.display`, applicant in `author.display`, `date`, `title`, `status`.
6. **Assemble the Bundle**: `type = document`, an `identifier`, a `timestamp`, the Composition first, then the Binary and DocumentReference entries. Nothing else.
7. **Group documents** that are sent together in a [BundleDocumentCollectionPq](StructureDefinition-Bundle-document-collection-pq.html).

### Word-to-XHTML mapping rules

| Word content | In the narrative |
|---|---|
| Paragraphs, lists, bold, italic, sub/superscript | The matching XHTML elements |
| Tables, including merged cells | XHTML tables (`colspan` / `rowspan`) |
| Footnotes | Paragraphs at the end of the section |
| Cross-references | In-document anchors |
| Images | `<img src="Binary/[id]"/>` plus `Binary` and `DocumentReference` entries |
| Tracked changes | The [ePI tracked-changes method](https://build.fhir.org/ig/HL7/emedicinal-product-info/en/tracked-changes.html): insert/delete anchors in the narrative plus an annotations section |
| Text boxes | Not supported: their content must sit in the body text |
| Styling (portrait/landscape, font, font size, text colour, table shading and borders) | Not carried in the narrative; style sheets apply it |

### Worked example

The skeleton for 3.2.P.3 shows the shape of a Type 1 document. With content, the 3.2.P.3.3 section and its process flow diagram look like this:

```json
{
  "title": "Description of Manufacturing Process and Process Controls",
  "code": { "coding": [{ "system": "http://hl7.org/fhir/uv/pharm-quality/CodeSystem/ctd-section-pq", "code": "3.2.P.3.3" }] },
  "text": {
    "status": "additional",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p>The tablets are manufactured by …</p><img src=\"Binary/img-3-2-p-3-3-flow\"/></div>"
  },
  "entry": [{ "reference": "DocumentReference/fig-3-2-p-3-3-flow" }]
}
```

Worked examples based on the ICH Sakura Bloom mock-up will be added at every type. The full set of templates and examples will be published in the GitHub parking lot.

### Profiles and rules

* [BundleDocumentType1Pq](StructureDefinition-Bundle-document-type1-pq.html) and [CompositionType1Pq](StructureDefinition-Composition-type1-pq.html)
* Invariants: `pqi-doc-1`, `pqi-sec-0`, `pqi-sec-1`, `pqi-sec-2`, `pqi-gran-1`, `pqi-txt-1`, `pqi-t1-1` (see [Validate and QA](build_validate.html))

### Checklist

- [ ] One document per Module 2.3, or per level-3 Module 3.2 heading
- [ ] Every template heading present, in order, coded and titled
- [ ] Every leaf section has narrative
- [ ] Every image is a `Binary` + `DocumentReference` pair, shown with `<img src="Binary/[id]"/>`
- [ ] No contained resources and no other resources in the Bundle
- [ ] Repeated 2.3.S / 2.3.P sections have distinct titles

### Moving to the next type

[Type 2](build_type2.html) keeps the Type 1 narrative unchanged and adds the product's master data.
