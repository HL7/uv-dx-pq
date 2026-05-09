Profile: BundleOrganizationsPq
Parent: Bundle
Id: Bundle-organizations-pq
Title: "Bundle - Organizations PQ"
Description: "Organizations domain: This Bundle profile represents the structured data used in CTD section 3.2.P.3 Manufacture, subsection 3.2.P.3.1 Manufacturer(s) and CTD section 3.2.S.2 Manufacture, subsection 3.2.S.2.1 Manufacturer(s)."
* identifier MS
* type = #collection
* type MS
* type ^short = "collection"
* timestamp MS
* entry MS
* entry ^slicing.discriminator.type = #type
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry contains Organization 1..*
* entry[Organization].resource only OrganizationDrugPq