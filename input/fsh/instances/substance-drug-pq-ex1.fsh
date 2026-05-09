Instance: substance-drug-pq-ex1
InstanceOf: Substance
Usage: #example
* meta.profile = "http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq"
* extension[0].extension[0].url = "manufacturingDate"
* extension[=].extension[=].valueDateTime = "2019-09-07"
* extension[=].extension[+].url = "batchQuantity"
* extension[=].extension[=].valueQuantity.value = 5
* extension[=].extension[=].valueQuantity.unit = "kg"
* extension[=].extension[+].url = "batchUtilization"
* extension[=].extension[=].valueCodeableConcept = $Thesaurus.owl#C133991 "Development"
* extension[=].extension[+].url = "assignedManufacturer"
* extension[=].extension[=].valueReference = Reference(organization-drug-pq-ex1)
* extension[=].url = "http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch"
* extension[+].url = "http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-pq"
* extension[=].valueDateTime = "2019-09-08"
* extension[+].url = "http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-retest-date-pq"
* extension[=].valueDateTime = "2022-09-08"
* extension[+].url = "http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-pq"
* extension[=].valueQuantity.value = 4.8
* extension[=].valueQuantity.unit = "kg"
* identifier.value = "CAT1"
* instance = false

* code.concept.text = "Substance"
