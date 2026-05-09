Profile: ManufacturedItemDefinitionDrugPq
Parent: ManufacturedItemDefinition
Id: ManufacturedItemDefinition-drug-pq
Title: "ManufacturedItemDefinition - Drug PQ"
Description: "This ManufacturedItemDefinition profile represents information about the physical packaged medication item, such as a tablet or capsule."
* ^status = #active
* status MS
* manufacturedDoseForm MS
* manufacturedDoseForm.extension contains DataAbsentReason named data-absent-reason 0..1 MS
* manufacturedDoseForm.extension[data-absent-reason] ^short = "data-absent-reason"
* property.type MS
* property.type from VsManufacturedItemPropertyPQ (preferred)