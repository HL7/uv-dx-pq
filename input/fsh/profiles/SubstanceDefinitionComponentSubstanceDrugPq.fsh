Profile: SubstanceDefinitionComponentSubstanceDrugPq
Parent: SubstanceDefinition
Id: SubstanceDefinition-component-substance-drug-pq
Title: "SubstanceDefinition - Component Substance Drug PQ"
Description: "This SubstanceDefinition profile represents the chemical or biological details about a substance associated with an active ingredient (molecular weight, molecular formula, stereochemistry, protein or nucleic acid subunits)."
* ^status = #active
* grade MS
* informationSource MS
* manufacturer only Reference(OrganizationDrugPq)
* manufacturer MS
* manufacturer.extension contains ExtensionSiteUtilizationPq named site-utilization 0..* MS
* property MS
* property.extension contains
    ExtensionSubstancePropertyRangePq named substance-property-range 0..* MS and
    ExtensionSubstancePropertyParameterPq named substance-property-parameter 0..* MS
* property.extension[substance-property-range] ^short = "substance-property-range"
* property.extension[substance-property-parameter] ^short = "substance-property-parameter"
* property.type MS
* property.type from VsSubstancePropertyPQ (preferred)
* property.value[x] MS
* property.value[x] from VsSubstancePropertyValuePQ (preferred)
* name MS
* relationship MS
* relationship.extension contains ExtensionImpurityOriginPq named impurity-origin 0..* MS
* relationship.extension[impurity-origin] ^short = "impurity-origin"
* relationship.type MS
* relationship.type from VsImpurityTypePQ (preferred)
* sourceMaterial MS