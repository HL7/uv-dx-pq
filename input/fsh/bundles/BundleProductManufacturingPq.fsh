Profile: BundleProductManufacturingPq
Parent: Bundle
Id: Bundle-product-manufacturing-pq
Title: "Bundle - Product Manufacturing PQ"
Description: "Manufacturing Process domain: This Bundle profile represents the structured data used in CTD section 3.2.P.3 Manufacture, subsection 3.2.P.3.3 Description of Manufacturing Process and Process Controls and CTD section 3.2.S.2 Manufacture, subsection 3.2.S.2.2 Description of Manufacturing Process and Process Controls."
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
    Product-Definition 0..1 and
    Drug-Ingredient 0..* and
    Component-Substance 1..* and
    Protocol 1..1 and
    Test-Device 1..* and
    Process-Diagram 1..* and
    Organization 1..*
* entry[Product-Definition].resource only MedicinalProductDefinitionDrugProductPq
* entry[Drug-Ingredient].resource only IngredientDrugPq
* entry[Component-Substance].resource only SubstanceDefinitionComponentSubstanceDrugPq
* entry[Protocol].resource only PlanDefinitionDrugPq
* entry[Test-Device].resource only DeviceDefinitionDrugPq
* entry[Process-Diagram].resource only $DocumentReference-drug-pq
* entry[Organization].resource only OrganizationDrugPq