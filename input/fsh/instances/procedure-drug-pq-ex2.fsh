Instance: procedure-drug-pq-ex2
InstanceOf: Procedure
Usage: #example
* meta.profile = "http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Procedure-drug-pq"
* contained[0] = device-nosubject
* contained[+] = DDLyo1
* status = #completed
* code = $cs-local-codes-drug-pq-example#LyophilizationHomogeneneity "Lyophilization Homogeneneity"
* subject.extension.url = "http://hl7.org/fhir/StructureDefinition/alternate-reference"
* subject.extension.valueReference = Reference(medication-batch-information-drug-pq-ex1)
* subject.display = "Drug batch"
* performer.actor = Reference(device-nosubject) "Lyo 1"