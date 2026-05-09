Profile: BundleDrugProductBatchInfoPq
Parent: Bundle
Id: Bundle-drug-product-batch-info-pq
Title: "Bundle – drug Product Batch Information PQ"
Description: "Batch/Lot Information domain: This Bundle profile represents the structured data used in CTD section 3.2.P.5 Control of Drug Product, subsection 3.2.P.5.4 Batch Analyses."
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
    Batch-Lot-Information 1..* and
    Organizations 1..*
* entry[Product-Identification].resource only MedicinalProductDefinitionDrugProductPq
* entry[Batch-Lot-Information].resource only MedicationBatchInformationDrugPq
* entry[Organizations].resource only OrganizationDrugPq