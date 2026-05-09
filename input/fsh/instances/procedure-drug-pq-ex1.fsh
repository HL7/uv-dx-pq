Instance: procedure-drug-pq-ex1
InstanceOf: Procedure
Usage: #example
* meta.profile = "http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Procedure-drug-pq"
* identifier.value = "Run 1"
* status = #completed
* code = $cs-local-codes-drug-pq-example#MediaChallengeRun "Media Challenge Run"
* subject.extension.url = "http://hl7.org/fhir/StructureDefinition/alternate-reference"
* subject.extension.valueReference = Reference(MedicinalProductDefinition/medicinalproductdefinition-drug-product-pq-ex1)
* subject.display = "Drug product"