Profile: CompositionDrugPQ
Parent: Composition
Id: Composition-drug-pq
Title: "Composition - Drug PQ"
Description: "This Composition profile represents narrative text necessary for pharmaceutical quality (PQ) data exchange. It is the text-section building block of the domain Bundles (e.g. BundleDrugProductPq). CTD Module 2.3 and Module 3.2 documents use the PQI Type 1-4 Composition profiles instead (see the Build pages)."
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