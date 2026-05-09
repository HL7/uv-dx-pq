Profile: BundleDrugProductSpecificationPq
Parent: Bundle
Id: Bundle-drug-product-specification-pq
Title: "Bundle – Drug Product Specification PQ"
Description: "Specification domain: This Bundle profile represents the structured data used in CTD section 3.2.P.5 Control of Drug Product, subsection 3.2.P.5.1 Specification(s)."
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
    Drug-Ingredient 1..* and
    Component-Substance 1..* and
    Protocol 1..1 and
    Test-Method 1..* and
    Organization 1..*
* entry[Product-Identification].resource only MedicinalProductDefinitionDrugProductPq
* entry[Drug-Ingredient].resource only IngredientDrugPq
* entry[Component-Substance].resource only SubstanceDefinitionComponentSubstanceDrugPq
* entry[Protocol].resource only PlanDefinitionDrugPq
* entry[Test-Method].resource only ObservationDefinitionTestMethodPq
* entry[Organization].resource only OrganizationDrugPq