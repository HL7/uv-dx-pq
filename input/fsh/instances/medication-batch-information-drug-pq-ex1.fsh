Instance: medication-batch-information-drug-pq-ex1
InstanceOf: Medication
Usage: #example
* meta.profile = "http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Medication-batch-information-drug-pq"
* code.extension.url = "http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-pq"
* code.extension.valueReference = Reference(MedicinalProductDefinition/medicinalproductdefinition-drug-product-pq-ex1)
* batch.extension[0].extension[0].url = "manufacturingDate"
* batch.extension[=].extension[=].valueDateTime = "2020-06"
* batch.extension[=].extension[+].url = "batchQuantity"
* batch.extension[=].extension[=].valueQuantity.value = 100100
* batch.extension[=].extension[=].valueQuantity.unit = "tablets"
* batch.extension[=].extension[+].url = "batchUtilization"
* batch.extension[=].extension[=].valueCodeableConcept.coding = $Thesaurus.owl#C133990 "Commercial"
* batch.extension[=].extension[=].valueCodeableConcept.text = "Production"
* batch.extension[=].extension[+].url = "assignedManufacturer"
* batch.extension[=].extension[=].valueReference = Reference(organization-drug-pq-ex1)
* batch.extension[=].extension[+].extension.url = "closureSystemDescription"
* batch.extension[=].extension[=].extension.valueString = "100 cc HDPE Bottle 2 g desiccant"
* batch.extension[=].extension[=].url = "container"
* batch.extension[=].url = "http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch"
* batch.extension[+].url = "http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-pq"
* batch.extension[=].valueDateTime = "2019-09-08"
* batch.extension[+].url = "http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-designation-pq"
* batch.extension[=].valueCodeableConcept.coding = $batch-designation#maximum "Maximum"
* batch.extension[=].valueCodeableConcept.text = "Maximum"
* batch.extension[+].url = "http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-number-of-vials-pq"
* batch.extension[=].valuePositiveInt = 3
* batch.extension[+].url = "http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-substance-batch-pq"
* batch.extension[=].valueReference = Reference(substance-drug-pq-ex1)
* batch.extension[+].url = "http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-date-pq"
* batch.extension[=].valueDateTime = "2020-08"
* batch.extension[+].url = "http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-site-pq"
* batch.extension[=].valueReference = Reference(organization-drug-pq-ex1)
* batch.extension[+].url = "http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-pq"
* batch.extension[=].valueQuantity.value = 4.81
* batch.extension[=].valueQuantity.unit = "kg"
* batch.extension[+].url = "http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-unfiltered-pq"
* batch.extension[=].valueQuantity.value = 4.91
* batch.extension[=].valueQuantity.unit = "kg"
* batch.extension[+].url = "http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-target-fill-weight-pq"
* batch.extension[=].valueQuantity.value = 30
* batch.extension[=].valueQuantity.unit = "g"
* batch.lotNumber = "33445"
