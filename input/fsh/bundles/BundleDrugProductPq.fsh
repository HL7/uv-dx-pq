Profile: BundleDrugProductPq
Parent: Bundle
Id: Bundle-drug-product-pq
Title: "Bundle - Drug Product PQ"
Description: "Identification domain: This Bundle profile represents the structured data used in CTD section 3.2.P.2 Pharmaceutical Development, subsection 3.2.P.2.2 Drug Product."
* identifier MS
* type = #collection
* type MS
* type ^short = "collection"
* timestamp MS
* entry MS
* entry ^slicing.discriminator.type = #type
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry contains
    Product-Identification 1..1 and
    Packaged-Item 1..* and
    Text-Section 1..* and
    Organization 1..*
* entry[Product-Identification].resource only MedicinalProductDefinitionDrugProductPq
* entry[Packaged-Item].resource only ManufacturedItemDefinitionDrugPq
* entry[Text-Section].resource only CompositionDrugPQ
* entry[Organization].resource only OrganizationDrugPq