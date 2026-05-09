Instance: observation-test-result-lt25c-i1-description
InstanceOf: Observation
Usage: #example
* meta.profile = "http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Observation-test-result-drug-pq"
* status = #final
* code = $cs-local-codes-drug-pq-example#DESC "Description"
* code.text = "Description"
* subject = Reference(medication-batch-information-drug-pq-ex1)
* effectiveDateTime = "2023-01-01T12:00:00Z"
* performer = Reference(organization-drug-pq-ex1)
* valueCodeableConcept.text = "Complies"