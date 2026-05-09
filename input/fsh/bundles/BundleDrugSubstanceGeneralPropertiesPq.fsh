Profile: BundleDrugSubstanceGeneralPropertiesPq
Parent: Bundle
Id: Bundle-drug-substance-general-properties-pq
Title: "Bundle – Drug Substance General Properties PQ"
Description: "Identification domain: This Bundle profile represents the structured data used in CTD section 3.2.S.1 General Information, subsection 3.2.S.1.3 General Properties."
* identifier MS
* type = #collection
* type MS
* type ^short = "collection"
* timestamp MS
* entry MS
* entry ^slicing.discriminator.type = #type
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry contains Component-Substance 1..*
* entry[Component-Substance].resource only SubstanceDefinitionComponentSubstanceDrugPq