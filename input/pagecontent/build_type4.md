### Who this is for

Sponsors whose quality data lives in LIMS, MES or QMS systems and can be generated directly as PQI resources. In PQI Type 4 the resources become the record: sections whose content is fully expressed by resources drop their authored narrative and keep only `section.entry`. Sections that carry argument or justification keep linked narrative, exactly as in [Type 3](build_type3.html).

### Replaceable headings

Only the headings in [vs-ctd-replaceable-pq](ValueSet-vs-ctd-replaceable-pq.html) may omit authored narrative. Their entries must resolve to these resource types (image DocumentReferences are always allowed), each conforming to the PQI profile used by the matching domain Bundle:

| Heading | Content | Entries resolve to | Domain profile reused | Invariant |
|---|---|---|---|---|
| 3.2.S.2.1 / 3.2.P.3.1 | Manufacturer(s) | Organization | [Organizations](organizations.html) | `pqi-t4-org` |
| 3.2.S.1.1–3.2.S.1.3 | Nomenclature, structure, general properties | SubstanceDefinition | [Composition](composition.html) / [Identification](identification.html) | `pqi-t4-gen` |
| 3.2.P.1 | Description and composition | MedicinalProductDefinition, ManufacturedItemDefinition, AdministrableProductDefinition, Ingredient | [Composition](composition.html) | `pqi-t4-comp` |
| 3.2.P.3.2 | Batch formula | Medication | [Batch Formula](batch_formula.html) | `pqi-t4-bf` |
| 3.2.S.4.1 / 3.2.P.5.1 | Specification (table part) | PlanDefinition, ObservationDefinition | [Drug Specification](drug_specification.html) | `pqi-t4-spec` |
| 3.2.S.4.4 / 3.2.P.5.4 | Batch analyses | DiagnosticReport, Observation, Medication, Substance | [Batch Analysis](batch_anal.html) | `pqi-t4-ba` |
| 3.2.S.5 / 3.2.P.6 | Reference standards | Substance | [Identification](identification.html) | `pqi-t4-rs` |
| 3.2.S.6 / 3.2.P.7 | Container closure system | PackagedProductDefinition | [Container Closure System](container.html) | `pqi-t4-ccs` |
| 3.2.S.7.3 / 3.2.P.8.3 | Stability data | DiagnosticReport, Observation, Specimen | [Stability Study](stability.html) | `pqi-t4-stab` |

These stay narrative (Type 3 rules): 3.2.P.2 Pharmaceutical development, 3.2.S.4.5 / 3.2.P.5.6 Justification of specification, 3.2.S.7.1 / 3.2.P.8.1 Stability summary and conclusions, and the discussion parts of 3.2.S.2.2, 3.2.P.3.3 and 3.2.P.3.5.

### Steps

1. Set `Composition.category` to `type-4`.
2. Generate the resources for each replaceable heading from the source systems, conforming to the PQI profiles.
3. In each replaced section, list the resources in `entry` and either omit `text` or replace it with a **generated** narrative (`status = generated`). Producers SHOULD add the generated narrative, so that a generic FHIR viewer can still render the document.
4. A section can be **mixed**: in 3.2.P.5.1, for example, the specification table becomes `PlanDefinition` + `ObservationDefinition` while the justification paragraph stays as narrative with `textLink`.
5. Keep every other section as in Type 3.

Receivers SHALL treat the resources, not a generated narrative, as authoritative.

### Side by side: 3.2.P.3.1 Manufacturer(s)

| Type | `text` | `entry` |
|---|---|---|
| 1 | "The drug product is manufactured by Sakura Pharma Ltd, Osaka…" | none |
| 3 | Same text, with `<span id="s3-2-p-3-1-mfr-1">` | `Organization`, with `textLink` (`htmlid` = `s3-2-p-3-1-mfr-1`) |
| 4 | Absent, or generated from the Organizations | `Organization` (one per site) |

### Profiles and rules

* [BundleDocumentType4Pq](StructureDefinition-Bundle-document-type4-pq.html) and [CompositionType4Pq](StructureDefinition-Composition-type4-pq.html)
* Invariants: the Type 3 set (narrative required only where it is not replaced), plus `pqi-t4-1` and the per-heading invariants above

### Checklist

- [ ] Only replaceable headings omit authored narrative
- [ ] Every replaced section has entries of the allowed types
- [ ] Generated narrative, where present, has `status = generated`
- [ ] Sections with argument or justification keep linked narrative
