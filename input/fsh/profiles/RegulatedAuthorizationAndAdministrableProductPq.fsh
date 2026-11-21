Profile: RegulatedAuthorizationPq
Parent: RegulatedAuthorization
Id: RegulatedAuthorization-drug-pq
Title: "RegulatedAuthorization - Drug PQ"
Description: "The marketing authorization or application for the drug product that a PQI document describes (PQI Type 2 and above)."
* ^status = #active
* identifier 1..* MS
* identifier ^short = "Authorization or application number"
* subject 1..* MS
* subject only Reference(MedicinalProductDefinitionDrugProductPq)
* type 1..1 MS
* region MS
* status 1..1 MS
* statusDate MS
* holder MS
* holder only Reference(OrganizationDrugPq)
* regulator MS
* regulator only Reference(OrganizationDrugPq)

Profile: AdministrableProductDefinitionPq
Parent: AdministrableProductDefinition
Id: AdministrableProductDefinition-drug-pq
Title: "AdministrableProductDefinition - Drug PQ"
Description: "The drug product as administered to the patient (administrable dose form and route), including any transformation of the manufactured item such as reconstitution (PQI Type 2 and above). Optional: for a product given as manufactured, such as a plain tablet, it repeats the manufactured item."
* ^status = #active
* status MS
* formOf MS
* formOf only Reference(MedicinalProductDefinitionDrugProductPq)
* administrableDoseForm 1..1 MS
* producedFrom MS
* producedFrom only Reference(ManufacturedItemDefinitionDrugPq)
* routeOfAdministration MS
* routeOfAdministration.code MS
