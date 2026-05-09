Instance: observation-test-result-longterm25c-initial-1
InstanceOf: Observation
Usage: #example
* meta.profile = "http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Observation-test-result-drug-pq"
* extension.url = "http://hl7.org/fhir/StructureDefinition/workflow-triggeredBy"
* extension.valueReference = Reference(activitydefinition-test-drug-pq-ex1)
* status = #final
* code.text = "Test Components - Long-term 25C etc - Initial (XYZ)"
* subject = Reference(medication-batch-information-drug-pq-ex1)
* effectiveDateTime = "2023-01-01T12:00:00Z"
* performer = Reference(organization-drug-pq-ex1)
* specimen = Reference(specimen-drug-pq-ex1)
* hasMember[0] = Reference(observation-test-result-lt25c-i1-description)
* hasMember[+] = Reference(observation-test-result-lt25c-i1-degradation-imp1)
* hasMember[+] = Reference(observation-test-result-lt25c-i1-degradation-imp2)
* hasMember[+] = Reference(observation-test-result-lt25c-i1-degradation-imp3)
* hasMember[+] = Reference(observation-test-result-lt25c-i1-degradation-imp-unspecified)
* hasMember[+] = Reference(observation-test-result-lt25c-i1-degradation-imp-total)
* hasMember[+] = Reference(observation-test-result-lt25c-i1-water)
* hasMember[+] = Reference(observation-test-result-lt25c-i1-microbiological)
* hasMember[+] = Reference(observation-test-result-lt25c-i1-uniformity)