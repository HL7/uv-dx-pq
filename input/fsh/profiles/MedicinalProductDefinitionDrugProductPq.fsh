Profile: MedicinalProductDefinitionDrugProductPq
Parent: MedicinalProductDefinition
Id: MedicinalProductDefinition-drug-product-pq
Title: "MedicinalProductDefinition - Drug Product PQ"
Description: "This MedicinalProductDefinition profile represents information that identifies the drug product."
* ^meta.versionId = "13"
* ^meta.lastUpdated = "2023-01-02T14:45:07.672+00:00"
* ^meta.source = "#9DaoKzOUalt0bLJS"
* ^status = #active
* identifier MS
* combinedPharmaceuticalDoseForm MS
* combinedPharmaceuticalDoseForm from MedicineDoseFormEDQM (preferred)
* combinedPharmaceuticalDoseForm ^binding.description = "EDQM (European Directorate for the Quality of Medicines and Healthcare) Dose Form codes."
* route from MedicineRouteOfAdministrationEDQM (preferred)
* route ^binding.description = "EDQM (European Directorate for the Quality of Medicines and Healthcare) Route of Administration codes."
* name MS
* name.type MS
* name.type from VsProductNameTypePQ (preferred)
* characteristic.extension contains ExtensionSubstancePropertyRangePq named substance-property-range 0..1 MS
* characteristic.extension[substance-property-range] ^short = "substance-property-range"
* characteristic.type from MedicinalProductCharacteristicType (preferred)
* characteristic.type ^binding.description = "Example codes for MedicinalProduct.characteristic.type"
* characteristic.value[x] ^slicing.discriminator.type = #type
* characteristic.value[x] ^slicing.discriminator.path = "$this"
* characteristic.value[x] ^slicing.rules = #closed
* characteristic.valueQuantity only Quantity
* characteristic.valueQuantity ^sliceName = "valueQuantity"
* characteristic.valueQuantity.system = "http://unitsofmeasure.org"
* characteristic.valueQuantity.code from UnitsOfMeasureCaseSensitive (required)
* characteristic.valueQuantity.code ^binding.description = "UCUM codes for unit"
* characteristic.valueCodeableConcept only CodeableConcept
* characteristic.valueCodeableConcept ^sliceName = "valueCodeableConcept"