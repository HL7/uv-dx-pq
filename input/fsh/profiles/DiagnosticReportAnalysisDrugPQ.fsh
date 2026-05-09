Profile: DiagnosticReportAnalysisDrugPQ
Parent: DiagnosticReport
Id: DiagnosticReport-analysis-drug-pq
Title: "DiagnosticReport - Analysis Drug PQ"
Description: "This DiagnosticReport profile represents results from a batch analysis, stability study, characterization study, impurities analysis, manufacturing process validation study, etc."
* ^status = #active
* contained MS
* extension contains
    TriggeredBy named workflow-triggeredBy 0..* MS and
    ExtensionStatisticalModelPq named statistical-model 0..* MS and
    ExtensionContainerOrientationPq named container-orientation 0..* MS
* extension[workflow-triggeredBy] ^short = "A ‘step’ dictated within the protocol."
* extension[workflow-triggeredBy] ^definition = "A ‘step’ dictated within the protocol."
* extension[statistical-model] ^short = "Information about the statistical model utilized to interpret results."
* extension[statistical-model] ^definition = "Information about the statistical model utilized to interpret results."
* extension[container-orientation] ^short = "The spatial orientaton of the container when tested, for instance horizontal or vertical."
* extension[container-orientation] ^definition = "The spatial orientaton of the container when tested, for instance horizontal or vertical."
* identifier MS
* status MS
* code MS
* code from VsReportTypePQ (preferred)
* effective[x] MS
* effective[x].extension contains ExtensionTimePointDescriptionPq named extension-time-point-description 0..1 MS
* effective[x].extension[extension-time-point-description] ^short = "A code that further describes a time point, such as ‘delayed start’."
* effective[x].extension[extension-time-point-description] ^definition = "A code that further describes a time point, such as ‘delayed start’."
* performer MS
* result only Reference(ObservationTestResultDrugPq)
* result MS
* conclusion MS