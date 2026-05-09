Profile: BundleDrugSubstanceSpecificationPq
Parent: Bundle
Id: Bundle-drug-substance-specification-pq
Title: "Bundle – Drug Substance Specification PQ"
Description: "Specification domain: This Bundle profile represents the structured data used in CTD section 3.2.S.4 Control of Drug Substance, subsection 3.2.S.4.1 Specification."
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
    Protocol 1..1 and
    Test-Method 1..* and
    Organization 1..*
* entry[Component-Substance].resource only SubstanceDefinitionComponentSubstanceDrugPq
* entry[Protocol].resource only PlanDefinitionDrugPq
* entry[Test-Method].resource only ObservationDefinitionTestMethodPq
* entry[Organization].resource only OrganizationDrugPq