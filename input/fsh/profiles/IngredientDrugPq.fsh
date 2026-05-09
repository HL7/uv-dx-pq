Profile: IngredientDrugPq
Parent: Ingredient
Id: Ingredient-drug-pq
Title: "Ingredient - Drug Pq"
Description: "This Ingredient profile represents the active ingredient(s) of a drug substance or product. It references one SubstanceDefinition resource and can include the strength or concentration of that substance."
* ^status = #active
* extension contains
    ExtensionNovelExcipientPq named novel-excipient 0..1 MS and
    ExtensionSuitabilityForUsePq named suitability-for-use 0..1 MS
* extension[novel-excipient] ^short = "novel-excipient"
* extension[suitability-for-use] ^short = "suitability-for-use"
* identifier MS
* role from IngredientRole (preferred)
* role ^binding.description = "A classification of the ingredient identifying its purpose within the product,\n         e.g. active, inactive."
* role.extension contains DataAbsentReason named data-absent-reason 0..1 MS
* role.extension[data-absent-reason] ^short = "data-absent-reason"
* function from VsIngredientFunctionPQ (preferred)
* function ^binding.description = "A classification of the ingredient identifying its precise purpose(s) in the drug product. This extends the Ingredient.role to add more detail. Example: antioxidant, alkalizing agent."
* substance.code only CodeableReference(SubstanceDefinitionComponentSubstanceDrugPq)
* substance.code MS
* substance.code ^short = "Ingredient Substance"
* substance.strength.referenceStrength MS