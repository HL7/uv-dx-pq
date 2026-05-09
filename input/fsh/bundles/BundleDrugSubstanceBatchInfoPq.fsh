Profile: BundleDrugSubstanceBatchInfoPq
Parent: Bundle
Id: Bundle-drug-substance-batch-info-pq
Title: "Bundle – Drug Substance Batch Information PQ"
Description: "Batch/Lot Information domain: This Bundle profile represents the structured data used in CTD section 3.2.S.4 Control of Drug Substance, subsection 3.2.S.4.4 Batch Analyses."
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
    Component-Substance 1..* and
    Actual-Batch-Substance 1..* and
    Organizations 1..*
* entry[Component-Substance].resource only SubstanceDefinitionComponentSubstanceDrugPq
* entry[Actual-Batch-Substance].resource only SubstanceDrugPq
* entry[Organizations].resource only OrganizationDrugPq