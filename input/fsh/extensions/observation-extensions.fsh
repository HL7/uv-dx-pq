Extension: ExtensionQualifiedValueCriticalityPq
Id: Extension-qualified-value-criticality-pq
Title: "Extension - Qualified Value Criticality PQ"
Description: "A measure of how important the control value of this process step is"
Context: ObservationDefinition.qualifiedValue
* value[x] only CodeableConcept
* value[x] from VsQualifiedValueCriticalityPQ (example)

Extension: ExtensionQualifiedValueDisplayPq
Id: Extension-qualified-value-display-pq
Title: "Extension - Qualified Value Display PQ"
Description: "A displayable version of a qualified value, formatted for showing to a user"
Context: ObservationDefinition.qualifiedValue
* value[x] only string

Extension: ExtensionQualifiedValueTargetPq
Id: Extension-qualified-value-target-pq
Title: "Extension - Qualified Value Target PQ"
Description: "A target, desired, amount for a qualified value, from within the allowable range"
Context: ObservationDefinition.qualifiedValue, ObservationDefinition.qualifiedValue.range
* value[x] only Quantity

Extension: ExtensionQualifiedValueTextPq
Id: Extension-qualified-value-text-pq
Title: "Extension - Qualified Value Text PQ"
Description: "A string based acceptable range description"
Context: ObservationDefinition.qualifiedValue
* value[x] only string

Extension: ExtensionTestCommentPq
Id: Extension-test-comment-pq
Title: "Extension - Test Comment PQ"
Description: "A textual comment that further describes an aspect of a test requirement"
Context: ObservationDefinition.qualifiedValue.appliesTo.text, ObservationDefinition.title
* value[x] only string

