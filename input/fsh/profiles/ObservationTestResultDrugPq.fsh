Profile: ObservationTestResultDrugPq
Parent: Observation
Id: Observation-test-result-drug-pq
Title: "Observation - Test Result Drug PQ"
Description: "This Observation profile represents the result of a specific test defined by an ObservationDefinition resource."
* ^meta.versionId = "5"
* ^meta.lastUpdated = "2022-12-21T15:45:12.730+00:00"
* ^meta.source = "#85sGshju1xdy9VCv"
* extension contains TriggeredBy named workflow-triggeredBy 0..* MS
* extension[workflow-triggeredBy] ^short = "workflow-triggeredBy"
* status MS
* code MS
* code from VsDevicePropertyPQ (preferred)
* value[x] only Quantity or CodeableConcept or string or boolean or integer or Range or Ratio or SampledData or time or dateTime or Period or Attachment
* value[x] MS