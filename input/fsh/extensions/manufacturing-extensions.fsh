Extension: ExtensionFormulationNumberPq
Id: Extension-formulation-number-pq
Title: "Extension - Formulation Number PQ"
Description: "An identifying number for the particular substance formulation in the batch"
Context: Medication, Medication.batch, Medication.batch.extension, Bundle.entry.resource
* value[x] only string

Extension: ExtensionHistoryOfProcessPq
Id: Extension-history-of-process-pq
Title: "Extension - History of Process PQ"
Description: "A textual description of the previous versions, decisions and development of this process"
Context: PlanDefinition
* value[x] only markdown or string

Extension: ExtensionManufacturingParticipantPq
Id: Extension-manufacturing-participant-pq
Title: "Extension - Manufacturing Participant PQ"
Description: "A reference to a substance that takes part in a process step"
Context: PlanDefinition.action.participant.typeReference, PlanDefinition.action.action.participant.typeReference
* value[x] only Reference(SubstanceDefinitionComponentSubstanceDrugPq)

Extension: ExtensionManufacturingProcessPq
Id: Extension-manufacturing-process-pq
Title: "Extension - Manufacturing Process PQ"
Description: "A reference to the process of manufacture of this batch (PlanDefinition)"
Context: Bundle.entry.resource, Medication.batch, Substance
* value[x] only Reference(PlanDefinitionDrugPq)

Extension: ExtensionMedicationDefinitionPq
Id: Extension-medication-definition-pq
Title: "Extension - Medication Definition PQ"
Description: "The MedicinalProductDefinition that corresponds to a medication"
Context: Medication.code
* value[x] only Reference(MedicinalProductDefinitionDrugProductPq)

Extension: ExtensionNovelExcipientPq
Id: Extension-novel-excipient-pq
Title: "Extension - Novel Excipient PQ"
Description: "Whether or not an excipient (inactive ingredient) in a product is considered 'novel'"
Context: Ingredient
* value[x] only boolean

Extension: ExtensionPackageDefinitionPq
Id: Extension-package-definition-pq
Title: "Extension - Package Definition PQ"
Description: "A reference to the packaging for a medication (PackagedProductDefinition)"
Context: Medication.code
* value[x] only Reference

Extension: ExtensionSiteUtilizationPq
Id: Extension-site-utilization-pq
Title: "Extension - Site Utilization PQ"
Description: "The role that the site performs, in the overall context of manufacturing"
Context: SubstanceDefinition.manufacturer
* value[x] only Coding
* value[x] from VsProductSiteUtilizationPQ (example)

