Instance: observation-test-result-lt25c-i1-degradation-imp3
InstanceOf: Observation
Usage: #example
* meta.profile = "http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Observation-test-result-drug-pq"
* status = #final
* code = $cs-local-codes-drug-pq-example#DGP "Degradation Products"
* code.text = "Degradation Products"
* subject = Reference(medication-batch-information-drug-pq-ex1)
* effectiveDateTime = "2023-01-01T12:00:00Z"
* performer = Reference(organization-drug-pq-ex1)
* valueQuantity = 0.201 '%' "% w/w"
* component.code = $cs-local-codes-drug-pq-example#IMP "Impurity"
* component.valueCodeableConcept.text = "Impurity 3"