Profile: BundleDrugProductExcipientsPq
Parent: Bundle
Id: Bundle-drug-product-excipients-pq
Title: "Bundle – Drug Product Excipients PQ"
Description: "Identification domain: This Bundle profile represents the structured data used in CTD section 3.2.P.4 Control of Excipients, subsections 3.2.P.4.5 Excipients of Human or Animal Origin and 3.2.P.4.6 Novel Excipients."
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
    Organization 1..*
* entry[Product-Identification].resource only MedicinalProductDefinitionDrugProductPq
* entry[Drug-Ingredient].resource only IngredientDrugPq
* entry[Component-Substance].resource only SubstanceDefinitionComponentSubstanceDrugPq
* entry[Organization].resource only OrganizationDrugPq