Extension: ExtensionPlanDocumentReferencePq
Id: Extension-plan-document-reference-pq
Title: "Extension - Plan Document Reference PQ"
Description: "A link to a document or image that describes the process of this plan"
Context: PlanDefinition
* value[x] only Reference($DocumentReference-drug-pq)

Extension: ExtensionProcessStepScalePq
Id: Extension-process-step-scale-pq
Title: "Extension - Process Step Scale PQ"
Description: "A scale size description that applies to a process step, such as 'production' or 'laboratory'"
Context: PlanDefinition.action
* value[x] only Coding
* value[x] from VsManufacturingStepScalePQ (example)

Extension: ExtensionStatisticalModelPq
Id: Extension-statistical-model-pq
Title: "Extension - Statistical Model PQ"
Description: "Information about the statistical model utilized to interpret results"
Context: DiagnosticReport
* ^meta.versionId = "4"
* ^meta.lastUpdated = "2023-01-12T21:49:20.688+00:00"
* ^meta.source = "#U0MqteWpkVIsAL5q"
* value[x] only CodeableConcept

Extension: ExtensionSuitabilityForUsePq
Id: Extension-suitability-for-use-pq
Title: "Extension - Suitability for Use PQ"
Description: "Whether an excipient is considered suitable for use in this product or item"
Context: Ingredient
* value[x] only string

Extension: ExtensionTargetFillWeightPq
Id: Extension-target-fill-weight-pq
Title: "Extension Target Fill Weight PQ"
Description: "The desired amount of substance in each item to be made from the batch (e.g., a vial)"
Context: Medication.batch
* value[x] only Quantity

Extension: ExtensionProcessParametersPq
Id: Extension-process-parameters-pq
Title: "Extension - Process Parameters PQ"
Description: "A property value or setting that this process step must use, e.g., a certain temperature or duration"
Context: PlanDefinition.action, PlanDefinition.action.action
* extension 1..
* extension ^slicing.discriminator.type = #value
* extension ^slicing.discriminator.path = "url"
* extension ^slicing.rules = #open
* extension contains
    parameter 0..* MS and
    value 0..* MS and
    valueText 0..* MS
* extension[parameter] only Extension
* extension[parameter].value[x] only CodeableConcept
* extension[parameter].value[x] from VsProcessParameterPQ (example)
* extension[value] only Extension
* extension[value].value[x] only Quantity
* extension[valueText] only Extension
* extension[valueText].value[x] only string

Extension: ExtensionSubstancePropertyParameterPq
Id: Extension-substance-property-parameter-pq
Title: "Extension - Substance Property Parameter PQ"
Description: "A parameter to a substance property, such as the concentration or pH at which the property value applies"
Context: SubstanceDefinition.property
* extension 1..
* extension ^slicing.discriminator.type = #value
* extension ^slicing.discriminator.path = "url"
* extension ^slicing.rules = #open
* extension contains
    parameter 0..* MS and
    value 0..* MS
* extension[parameter] only Extension
* extension[parameter].value[x] only Coding
* extension[value] only Extension
* extension[value].value[x] only Quantity

Extension: ExtensionSubstancePropertyRangePq
Id: Extension-substance-property-range-pq
Title: "Extension - Substance Property Range PQ"
Description: "Allows a characteristic or property to use a range datatype, instead of a single value"
Context: MedicinalProductDefinition.characteristic, SubstanceDefinition.property, Bundle.entry.resource
* value[x] only Range

Extension: ExtensionTimePointDescriptionPq
Id: Extension-time-point-description-pq
Title: "Extension - Time Point Description PQ"
Description: "A code that further describes a time point, such as 'delayed start'"
Context: Bundle.entry.resource, DiagnosticReport, DiagnosticReport.effective[x], dateTime
* value[x] only CodeableConcept
* value[x] from VsTimePointDescriptionPQ (example)

