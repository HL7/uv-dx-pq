Profile: ActivityDefinitionDrugTestPq
Parent: ActivityDefinition
Id: ActivityDefinition-test-drug-pq
Title: "ActivityDefinition - Test Drug PQ"
Description: "This ActivityDefinition profile represents a set of tests and their acceptance criteria through the contained ObservationDefinition resources."
* ^status = #active
* status MS
* observationRequirement only Canonical(ObservationDefinitionTestMethodPq)
* observationRequirement MS