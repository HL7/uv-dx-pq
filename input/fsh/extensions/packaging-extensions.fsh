Extension: ExtensionPackagingDatePq
Id: Extension-packaging-date-pq
Title: "Extension - Packaging Date PQ"
Description: "The date when the batch was packaged"
Context: Medication.batch
* value[x] only dateTime

Extension: ExtensionPackagingSitePq
Id: Extension-packaging-site-pq
Title: "Extension - Packaging Site PQ"
Description: "The organization that packaged this batch (reference to an Organization)"
Context: Medication.batch
* value[x] only Reference(OrganizationDrugPq)

Extension: ExtensionContainerOrientationPq
Id: Extension-container-orientation-pq
Title: "Extension - Container Orientation PQ"
Description: "The spatial orientation of the container when tested, for instance horizontal or vertical"
Context: DiagnosticReport
* ^meta.versionId = "7"
* ^meta.lastUpdated = "2023-01-11T01:05:33.310+00:00"
* ^meta.source = "#Foor8aj0PDmWtY76"
* value[x] only CodeableConcept
* value[x] from VsContainerOrientationPQ (example)

Extension: ExtensionImpurityOriginPq
Id: Extension-impurity-origin-pq
Title: "Extension - Impurity Origin PQ"
Description: "The source of this impurity"
Context: SubstanceDefinition.relationship
* value[x] only CodeableConcept
* value[x] from VsImpurityOriginPQ (example)

