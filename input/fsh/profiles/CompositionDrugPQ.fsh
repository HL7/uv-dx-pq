Profile: CompositionDrugPQ
Parent: Composition
Id: Composition-drug-pq
Title: "Composition - Drug PQ"
Description: "This Composition profile represents narrative text necessary for pharmaceutical quality (PQ) data exchange."
* ^status = #active
* id MS
* status MS
* type MS
* subject only Reference(MedicinalProductDefinitionDrugProductPq)
* subject MS
* date MS
* author only Reference(OrganizationDrugPq)
* author MS
* title MS
* section MS