Profile: BundleContainerClosureSystemPq
Parent: Bundle
Id: Bundle-container-closure-system-pq
Title: "Bundle – Container Closure System PQ"
Description: "Container Closure System domain: This Bundle profile represents the structured data in CTD sections 3.2.P.7 Container Closure System and 3.2.S.6 Container Closure System."
* identifier MS
* type = #collection
* type MS
* type ^short = "collection"
* timestamp MS
* entry 3.. MS
* entry ^slicing.discriminator.type = #type
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry contains
    Product-Identification 0..1 and
    Drug-Ingredient 0..* and
    Component-Substance 0..* and
    Protocol 0..* and
    Test-Method 0..* and
    Package-Definition 1..* and
    Packaged-Item 0..*
* entry[Product-Identification].resource only MedicinalProductDefinitionDrugProductPq
* entry[Drug-Ingredient].resource only IngredientDrugPq
* entry[Component-Substance].resource only SubstanceDefinitionComponentSubstanceDrugPq
* entry[Protocol].resource only PlanDefinitionDrugPq
* entry[Test-Method].resource only ObservationDefinitionTestMethodPq
* entry[Package-Definition].resource only PackagedProductDefinitionDrugPq
* entry[Packaged-Item].resource only ManufacturedItemDefinitionDrugPq