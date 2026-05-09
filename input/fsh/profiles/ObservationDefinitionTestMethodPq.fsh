Profile: ObservationDefinitionTestMethodPq
Parent: ObservationDefinition
Id: ObservationDefinition-test-method-drug-pq
Title: "ObservationDefinition - Test Method PQ"
Description: "This ObservationDefinition profile represents information about pharmaceutical quality (PQ) tests and acceptance criteria."
* ^status = #active
* title.extension contains ExtensionTestCommentPq named test-comment-title 0..1 MS
* title.extension[test-comment-title] ^short = "test-comment-title"
* code MS
* code from VsTestMethodPQ (preferred)
* method MS
* specimen MS
* device only Reference(DeviceDefinition or Device)
* device MS
* qualifiedValue MS
* qualifiedValue.extension contains
    ExtensionQualifiedValueTextPq named qualified-value-text 0..* MS and
    ExtensionQualifiedValueDisplayPq named qualified-value-display 0..* MS and
    ExtensionQualifiedValueTargetPq named qualified-value-target 0..* MS and
    ExtensionQualifiedValueCriticalityPq named qualified-value-criticality 0..* MS
* qualifiedValue.extension[qualified-value-text] ^short = "qualified-value-text"
* qualifiedValue.extension[qualified-value-display] ^short = "qualified-value-display"
* qualifiedValue.extension[qualified-value-target] ^short = "qualified-value-target"
* qualifiedValue.extension[qualified-value-criticality] ^short = "qualified-value-criticality"
* qualifiedValue.appliesTo.extension contains ExtensionTestCommentPq named test-comment 0..1 MS
* qualifiedValue.appliesTo.extension[test-comment] ^short = "test-comment"
* qualifiedValue.range MS
* qualifiedValue.range.extension contains ExtensionQualifiedValueTargetPq named qualified-value-target 0..1 MS
* qualifiedValue.range.extension[qualified-value-target] ^short = "qualified-value-target"
* hasMember MS