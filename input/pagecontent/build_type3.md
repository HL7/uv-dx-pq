### Who this is for

Vendors of CMC authoring tools, and sponsors who want reviewers to move from a sentence in the narrative straight to the data behind it. PQI Type 3 keeps every section's authored narrative and links it to PQI resources. A human can still read the document without the links.

### What you need

* A [Type 2](build_type2.html) document.
* The PQI domain resources the narrative discusses, each conforming to its PQI profile: `PlanDefinition` (specifications, processes, protocols), `ObservationDefinition` (tests and acceptance criteria), `Observation` / `DiagnosticReport` (batch analysis, stability), `Medication` (batches), `Substance`, `Specimen`, `SpecimenDefinition`, `DeviceDefinition`, `ActivityDefinition`, `DocumentReference`.
* A mapping from the narrative to those resources.

### Steps

1. Set `Composition.category` to `type-3`.
2. **Anchor the narrative.** Give each passage that discusses a resource a stable `id`, e.g. `<span id="s3-2-p-3-1-mfr-1">Sakura Pharma Ltd, Osaka</span>`. A convention such as `<section>-<kind>-<n>` keeps ids unique within the document.
3. **List the resources** a section discusses in that section's `entry`. Resources that no CTD section discusses stay in the Product data section.
4. **Link each entry** to its narrative span(s) with the core [textLink](https://hl7.org/fhir/extensions/StructureDefinition-textLink.html) extension on `section.entry`: `htmlid` holds the `id` of each span that discusses the resource (1..*), and `data` repeats the entry's reference (a more specific path can point at one element, e.g. an acceptance criterion inside an `ObservationDefinition`). Every entry in a section with authored narrative carries a link, except image DocumentReferences.
5. Add the resources to the Bundle.

```json
{
  "title": "Manufacturer(s)",
  "code": { "coding": [{ "system": "http://hl7.org/fhir/uv/pharm-quality/CodeSystem/ctd-section-pq", "code": "3.2.P.3.1" }] },
  "text": {
    "status": "additional",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p>The drug product is manufactured by <span id=\"s3-2-p-3-1-mfr-1\">Sakura Pharma Ltd, Osaka</span>.</p></div>"
  },
  "entry": [{
    "extension": [{
      "url": "http://hl7.org/fhir/StructureDefinition/textLink",
      "extension": [
        { "url": "htmlid", "valueString": "s3-2-p-3-1-mfr-1" },
        { "url": "data", "valueUri": "Organization/org-dp-mfr-1" }
      ]
    }],
    "reference": "Organization/org-dp-mfr-1"
  }]
}
```

> **Note:** the core `textLink` extension (FHIR Extensions Pack 5.3.0) is currently defined for `Narrative` only, at most once. FMG has confirmed it will be updated to allow this use (0..*). Until that release, validators may report the extension context on `section.entry`.

### Which resources each heading usually links to

| Heading | Typical entries |
|---|---|
| 3.2.S.1 / 3.2.P.1 | SubstanceDefinition; MedicinalProductDefinition, ManufacturedItemDefinition, Ingredient |
| 3.2.S.2.1 / 3.2.P.3.1 | Organization |
| 3.2.S.2.2 / 3.2.P.3.3 | PlanDefinition (process), DeviceDefinition, ObservationDefinition (CPP / IPC), DocumentReference (flow diagram) |
| 3.2.P.3.2 | Medication (batch formula) |
| 3.2.S.4.1 / 3.2.P.5.1 | PlanDefinition (specification), ObservationDefinition (tests and acceptance criteria) |
| 3.2.S.4.2 / 3.2.P.5.2 | PlanDefinition (analytical procedure) |
| 3.2.S.4.4 / 3.2.P.5.4 | DiagnosticReport, Observation, Medication / Substance (batches) |
| 3.2.S.5 / 3.2.P.6 | Substance (reference standards) |
| 3.2.S.6 / 3.2.P.7 | PackagedProductDefinition |
| 3.2.S.7 / 3.2.P.8 | PlanDefinition (stability protocol), DiagnosticReport, Observation, Specimen |

### Profiles and rules

* [BundleDocumentType3Pq](StructureDefinition-Bundle-document-type3-pq.html) and [CompositionType3Pq](StructureDefinition-Composition-type3-pq.html)
* Invariants: the Type 2 set (except `pqi-t2-1`), plus `pqi-t3-1`
* Conformance rule (checked by external validation): every `textLink.htmlid` is an `id` that exists in the same section's narrative.

### Checklist

- [ ] Every section keeps its authored narrative
- [ ] Every discussed resource is an entry of the section that discusses it
- [ ] Every such entry has a `textLink` whose `htmlid` values exist in the section narrative
- [ ] Every resource conforms to its PQI profile

### Moving to the next type

[Type 4](build_type4.html) lets sections that are fully carried by resources drop their authored narrative.
