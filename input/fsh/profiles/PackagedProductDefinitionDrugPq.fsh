Profile: PackagedProductDefinitionDrugPq
Parent: PackagedProductDefinition
Id: PackagedProductDefinition-drug-pq
Title: "PackagedProductDefinition - Drug PQ"
Description: "This PackagedProductDefinition profile represents information about the packaging for a drug product or drug substance."
* ^status = #active
* type MS
* type from PackageType (preferred)
* packageFor MS
* description MS
* packaging MS
* packaging.type MS
* packaging.type from PackagingType (preferred)
* packaging.type ^binding.extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName"
* packaging.type ^binding.extension.valueString = "PackagingType"
* packaging.type ^binding.description = "A high level categorisation of a package."
* packaging.material MS
* packaging.material from PackageMaterial (preferred)
* packaging.material ^binding.extension.url = "http://hl7.org/fhir/StructureDefinition/elementdefinition-bindingName"
* packaging.material ^binding.extension.valueString = "PackageMaterial"
* packaging.material ^binding.description = "A material used in the construction of packages and their components."
* packaging.shelfLifeStorage MS
* packaging.manufacturer MS
* packaging.property MS
* packaging.property.type MS
* packaging.property.type from VsPackagePropertyPQ (preferred)
* packaging.property.value[x] only CodeableConcept or Quantity or date or boolean or Attachment
* packaging.property.value[x] MS
* packaging.property.valueCodeableConcept only CodeableConcept
* packaging.property.valueCodeableConcept MS
* packaging.property.valueCodeableConcept from VsGradePQ (preferred)
* packaging.property.valueCodeableConcept ^sliceName = "valueCodeableConcept"
* packaging.property.valueCodeableConcept ^binding.extension.extension[0].url = "purpose"
* packaging.property.valueCodeableConcept ^binding.extension.extension[=].valueCode = #extensible
* packaging.property.valueCodeableConcept ^binding.extension.extension[+].url = "valueSet"
* packaging.property.valueCodeableConcept ^binding.extension.extension[=].valueCanonical = "http://hl7.org/fhir/uv/pharm-quality/ValueSet/vs-color-pq"
* packaging.property.valueCodeableConcept ^binding.extension.url = "http://hl7.org/fhir/tools/StructureDefinition/additional-binding"
* packaging.property.valueQuantity only Quantity
* packaging.property.valueQuantity MS
* packaging.property.valueQuantity ^sliceName = "valueQuantity"
* packaging.property.valueQuantity.system = "http://unitsofmeasure.org"
* packaging.property.valueQuantity.code from UnitsOfMeasureCaseSensitive (required)
* packaging.property.valueQuantity.code ^binding.description = "UCUM codes for unit"
* packaging.property.valueBoolean only boolean
* packaging.property.valueBoolean MS
* packaging.property.valueBoolean ^sliceName = "valueBoolean"
* packaging.containedItem MS
* packaging.containedItem.amount MS
* packaging.packaging MS
* packaging.packaging ^contentReference = "#PackagedProductDefinition.packaging"