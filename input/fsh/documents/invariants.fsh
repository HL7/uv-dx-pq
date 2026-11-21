// PQI document-type invariants.
// Design principle: profiles carry the structural rules, and quality checks live in external validation.
// Rules that FHIRPath cannot check reliably (narrative ids, image references) are conformance rules
// stated on the Build pages and enforced by implementers' validation apps.

Invariant: pqi-doc-1
Description: "The first entry of a PQI document Bundle is the Composition."
Severity: #error
Expression: "entry.first().resource.is(Composition)"

Invariant: pqi-sec-0
Description: "Every top-level section is coded from the CTD Quality Section Headings PQ CodeSystem."
Severity: #error
Expression: "section.all(code.coding.where(system = 'http://hl7.org/fhir/uv/pharm-quality/CodeSystem/ctd-section-pq').exists())"

Invariant: pqi-sec-1
Description: "A sub-section's CTD code sits under its parent's CTD code (keeps the template hierarchy). Sub-sections of 3.2.R, and of sections not coded from ctd-section-pq, carry the regulator's own headings and are exempt."
Severity: #error
Expression: "code.coding.where(system = 'http://hl7.org/fhir/uv/pharm-quality/CodeSystem/ctd-section-pq').empty() or code.coding.where(system = 'http://hl7.org/fhir/uv/pharm-quality/CodeSystem/ctd-section-pq' and code = '3.2.R').exists() or section.all(code.coding.where(system = 'http://hl7.org/fhir/uv/pharm-quality/CodeSystem/ctd-section-pq').exists() and code.coding.where(system = 'http://hl7.org/fhir/uv/pharm-quality/CodeSystem/ctd-section-pq').code.first().startsWith(%context.code.coding.where(system = 'http://hl7.org/fhir/uv/pharm-quality/CodeSystem/ctd-section-pq').code.first()))"

Invariant: pqi-sec-2
Description: "Sibling sections are unique by code, focus and title: a heading repeats only with a different focus (Types 2-4) or title (Type 1)."
Severity: #error
Expression: "section.select(code.coding.code.first() & '|' & focus.reference & '|' & title).isDistinct()"

Invariant: pqi-foc-1
Description: "section.focus is used only on repeatable container headings (vs-ctd-repeatable-pq)."
Severity: #error
Expression: "focus.exists() implies code.memberOf('http://hl7.org/fhir/uv/pharm-quality/ValueSet/vs-ctd-repeatable-pq')"

Invariant: pqi-foc-2
Description: "When a repeatable heading appears more than once among sibling sections, every repeat has a focus."
Severity: #error
Expression: "section.where(code.memberOf('http://hl7.org/fhir/uv/pharm-quality/ValueSet/vs-ctd-repeatable-pq')).select(code.coding.code.first()).isDistinct() or section.where(code.memberOf('http://hl7.org/fhir/uv/pharm-quality/ValueSet/vs-ctd-repeatable-pq')).all(focus.exists())"

Invariant: pqi-foc-3
Description: "The focus of a section is never also an entry of the same section."
Severity: #error
Expression: "focus.exists() implies entry.where(reference = %context.focus.reference).empty()"

Invariant: pqi-gran-1
Description: "A Module 3.2 Composition has exactly one CTD top-level section (besides the optional Product data section), coded from vs-ctd-document-root-pq."
Severity: #error
Expression: "type.coding.where(code = 'm3-2-quality').exists() implies (section.where(code.coding.where(code = 'pqi-product-data').empty()).count() = 1 and section.where(code.coding.where(code = 'pqi-product-data').empty()).first().code.memberOf('http://hl7.org/fhir/uv/pharm-quality/ValueSet/vs-ctd-document-root-pq'))"

Invariant: pqi-gran-2
Description: "A PQI document collection holds only document Bundles."
Severity: #error
Expression: "entry.all(resource.is(Bundle) and resource.as(Bundle).type = 'document')"

Invariant: pqi-txt-1
Description: "Every leaf section (a section without sub-sections) has narrative."
Severity: #error
Expression: "repeat(section).where(section.empty()).all(text.exists())"

Invariant: pqi-t1-1
Description: "In a PQI Type 1 document, section entries only reference image DocumentReferences."
Severity: #error
Expression: "repeat(section).entry.all(resolve() is DocumentReference)"

Invariant: pqi-t2-1
Description: "In a PQI Type 2 document, CTD sections only reference image DocumentReferences; all other resources are listed in the Product data section."
Severity: #error
Expression: "repeat(section).where(code.coding.where(code = 'pqi-product-data').empty()).entry.all(resolve() is DocumentReference)"

Invariant: pqi-t3-1
Description: "In a section with authored narrative, every entry other than an image DocumentReference carries a textLink to the span(s) of narrative that discuss it."
Severity: #error
Expression: "(text.exists() and text.status != 'generated') implies entry.where((resolve() is DocumentReference).not()).all(extension('http://hl7.org/fhir/StructureDefinition/textLink').exists())"

Invariant: pqi-t4-1
Description: "Only replaceable headings (vs-ctd-replaceable-pq) may omit authored narrative, and a section without authored narrative has entries (or sub-sections, or is the Product data section)."
Severity: #error
Expression: "(text.empty() or text.status = 'generated') implies (section.exists() or code.coding.where(code = 'pqi-product-data').exists() or (code.memberOf('http://hl7.org/fhir/uv/pharm-quality/ValueSet/vs-ctd-replaceable-pq') and entry.exists()))"

// Type 4: what the entries of each replaceable heading resolve to (image DocumentReferences are always allowed).

Invariant: pqi-t4-org
Description: "3.2.S.2.1 / 3.2.P.3.1 Manufacturer(s) entries resolve to Organization."
Severity: #error
Expression: "repeat(section).where(code.coding.where(system = 'http://hl7.org/fhir/uv/pharm-quality/CodeSystem/ctd-section-pq' and (code = '3.2.S.2.1' or code = '3.2.P.3.1')).exists()).entry.all(resolve() is Organization or resolve() is DocumentReference)"

Invariant: pqi-t4-gen
Description: "3.2.S.1.1-3.2.S.1.3 entries resolve to SubstanceDefinition."
Severity: #error
Expression: "repeat(section).where(code.coding.where(system = 'http://hl7.org/fhir/uv/pharm-quality/CodeSystem/ctd-section-pq' and (code = '3.2.S.1.1' or code = '3.2.S.1.2' or code = '3.2.S.1.3')).exists()).entry.all(resolve() is SubstanceDefinition or resolve() is DocumentReference)"

Invariant: pqi-t4-comp
Description: "3.2.P.1 Description and composition entries resolve to MedicinalProductDefinition, ManufacturedItemDefinition, AdministrableProductDefinition or Ingredient."
Severity: #error
Expression: "repeat(section).where(code.coding.where(system = 'http://hl7.org/fhir/uv/pharm-quality/CodeSystem/ctd-section-pq' and code = '3.2.P.1').exists()).entry.all(resolve() is MedicinalProductDefinition or resolve() is ManufacturedItemDefinition or resolve() is AdministrableProductDefinition or resolve() is Ingredient or resolve() is DocumentReference)"

Invariant: pqi-t4-bf
Description: "3.2.P.3.2 Batch formula entries resolve to Medication."
Severity: #error
Expression: "repeat(section).where(code.coding.where(system = 'http://hl7.org/fhir/uv/pharm-quality/CodeSystem/ctd-section-pq' and code = '3.2.P.3.2').exists()).entry.all(resolve() is Medication or resolve() is DocumentReference)"

Invariant: pqi-t4-spec
Description: "3.2.S.4.1 / 3.2.P.5.1 Specification entries resolve to PlanDefinition or ObservationDefinition."
Severity: #error
Expression: "repeat(section).where(code.coding.where(system = 'http://hl7.org/fhir/uv/pharm-quality/CodeSystem/ctd-section-pq' and (code = '3.2.S.4.1' or code = '3.2.P.5.1')).exists()).entry.all(resolve() is PlanDefinition or resolve() is ObservationDefinition or resolve() is DocumentReference)"

Invariant: pqi-t4-ba
Description: "3.2.S.4.4 / 3.2.P.5.4 Batch analyses entries resolve to DiagnosticReport, Observation, Medication or Substance."
Severity: #error
Expression: "repeat(section).where(code.coding.where(system = 'http://hl7.org/fhir/uv/pharm-quality/CodeSystem/ctd-section-pq' and (code = '3.2.S.4.4' or code = '3.2.P.5.4')).exists()).entry.all(resolve() is DiagnosticReport or resolve() is Observation or resolve() is Medication or resolve() is Substance or resolve() is DocumentReference)"

Invariant: pqi-t4-rs
Description: "3.2.S.5 / 3.2.P.6 Reference standards entries resolve to Substance."
Severity: #error
Expression: "repeat(section).where(code.coding.where(system = 'http://hl7.org/fhir/uv/pharm-quality/CodeSystem/ctd-section-pq' and (code = '3.2.S.5' or code = '3.2.P.6')).exists()).entry.all(resolve() is Substance or resolve() is DocumentReference)"

Invariant: pqi-t4-ccs
Description: "3.2.S.6 / 3.2.P.7 Container closure system entries resolve to PackagedProductDefinition."
Severity: #error
Expression: "repeat(section).where(code.coding.where(system = 'http://hl7.org/fhir/uv/pharm-quality/CodeSystem/ctd-section-pq' and (code = '3.2.S.6' or code = '3.2.P.7')).exists()).entry.all(resolve() is PackagedProductDefinition or resolve() is DocumentReference)"

Invariant: pqi-t4-stab
Description: "3.2.S.7.3 / 3.2.P.8.3 Stability data entries resolve to DiagnosticReport, Observation or Specimen."
Severity: #error
Expression: "repeat(section).where(code.coding.where(system = 'http://hl7.org/fhir/uv/pharm-quality/CodeSystem/ctd-section-pq' and (code = '3.2.S.7.3' or code = '3.2.P.8.3')).exists()).entry.all(resolve() is DiagnosticReport or resolve() is Observation or resolve() is Specimen or resolve() is DocumentReference)"
