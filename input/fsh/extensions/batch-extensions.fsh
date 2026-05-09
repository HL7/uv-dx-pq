Extension: ExtensionActualYieldPq
Id: Extension-actual-yield-pq
Title: "Extension - Actual Yield PQ"
Description: "The actual weight of a batch"
Context: Bundle.entry.resource, Medication.batch, Substance
* value[x] only Quantity

Extension: ExtensionActualYieldUnfilteredPq
Id: Extension-actual-yield-unfiltered-pq
Title: "Extension - Actual Yield Unfiltered PQ"
Description: "The actual weight of a batch, before filtering"
Context: Medication.batch
* value[x] only Quantity

Extension: ExtensionBatchDerivedFromPq
Id: Extension-batch-derived-from-pq
Title: "Extension - Batch Derived From PQ"
Description: "A reference to another batch that this batch is derived from"
Context: Substance
* value[x] only Reference

Extension: ExtensionBatchDesignationPq
Id: Extension-batch-designation-pq
Title: "Extension - Batch Designation PQ"
Description: "A batch's type in terms of its general size"
Context: Medication.batch
* value[x] only CodeableConcept
* value[x] from VsBatchDesignationPQ (example)

Extension: ExtensionBatchNumberOfFullShelvesPq
Id: Extension-batch-number-of-full-shelves-pq
Title: "Extension - Batch Number of Full Shelves PQ"
Description: "The count of full shelves from which batches are selected for testing"
Context: Medication.batch
* value[x] only positiveInt

Extension: ExtensionBatchNumberOfItemsPq
Id: Extension-batch-number-of-items-pq
Title: "Extension - Batch Number of Items PQ"
Description: "The number of items (e.g., tablets) produced in a manufacturing batch."
Context: Medication.batch
* value[x] only Quantity

Extension: ExtensionBatchNumberOfPartialShelvesPq
Id: Extension-batch-number-of-partial-shelves-pq
Title: "Extension - Batch Number of Partial Shelves PQ"
Description: "The number of partially filled shelves from which batches are selected for testing"
Context: Medication.batch
* value[x] only positiveInt

Extension: ExtensionBatchNumberOfVialsPq
Id: Extension-batch-number-of-vials-pq
Title: "Extension - Batch Number of Vials PQ"
Description: "The count of vials selected for testing"
Context: Medication.batch
* value[x] only positiveInt

Extension: ExtensionBatchReleaseDatePq
Id: Extension-batch-release-date-pq
Title: "Extension - Batch Release Date PQ"
Description: "The date when a batch was made available"
Context: Medication.batch, Bundle.entry.resource, Substance
* value[x] only dateTime

Extension: ExtensionBatchRetestDatePq
Id: Extension-batch-retest-date-pq
Title: "Extension - Batch Retest Date PQ"
Description: "The date that a batch is due to be tested again"
Context: Bundle.entry.resource, Substance
* value[x] only dateTime

Extension: ExtensionBatchStorageDurationPq
Id: Extension-batch-storage-duration-pq
Title: "Extension - Batch Storage Duration PQ"
Description: "The length of time for which a batch is stored, before being tested"
Context: Specimen.processing.timePeriod
* value[x] only Duration

Extension: ExtensionBatchSubstanceBatchPq
Id: Extension-batch-substance-batch-pq
Title: "Extension - Batch Substance Batch PQ"
Description: "A reference to a substance that this batch consists of"
Context: Medication.batch
* value[x] only Reference(SubstanceDrugPq)

