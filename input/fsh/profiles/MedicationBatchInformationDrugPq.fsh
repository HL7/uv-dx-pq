Profile: MedicationBatchInformationDrugPq
Parent: Medication
Id: Medication-batch-information-drug-pq
Title: "Medication - Batch Information Drug PQ"
Description: "This Medication profile represents information about the batches that underwent testing or analysis."
* ^meta.versionId = "7"
* ^meta.lastUpdated = "2022-12-21T12:40:35.255+00:00"
* ^meta.source = "#sich1CqFymSjQpNT"
* ^status = #active
* code MS
* code.extension contains
    ExtensionMedicationDefinitionPq named medication-definition 0..* MS and
    ExtensionPackageDefinitionPq named package-definition 0..* MS
* code.extension[package-definition] only ExtensionPackageDefinitionPq
* code.extension[package-definition] ^sliceName = "package-definition"
* code.extension[package-definition] ^short = "package-definition"
* code.extension[package-definition] ^mustSupport = true
* batch MS
* batch.extension contains
    MedManufacturingBatch named manufacturing-batch-weight 0..* MS and
    ExtensionBatchNumberOfItemsPq named manufacturing-batch-number-of-items 0..* MS and
    ExtensionActualYieldPq named actual-yield 0..* MS and
    ExtensionActualYieldUnfilteredPq named actual-yield-unfiltered 0..* MS and
    ExtensionBatchReleaseDatePq named batch-release-date 0..* MS and
    ExtensionFormulationNumberPq named formulation-number 0..* MS and
    ExtensionBatchDesignationPq named batch-designation 0..* MS and
    ExtensionBatchNumberOfVialsPq named batch-number-of-vials 0..* MS and
    ExtensionBatchNumberOfFullShelvesPq named batch-number-of-full-shelves 0..* MS and
    ExtensionBatchNumberOfPartialShelvesPq named batch-number-of-partial-shelves 0..* MS and
    ExtensionBatchSubstanceBatchPq named batch-substance-batch 0..* MS and
    ExtensionTargetFillWeightPq named target-fill-weight 0..* MS and
    ExtensionManufacturingProcessPq named manufacturing-process 0..* MS and
    ExtensionPackagingDatePq named packaging-date 0..* MS and
    ExtensionPackagingSitePq named packaging-site 0..* MS
* batch.extension[manufacturing-batch-weight] ^short = "manufacturing-batch-weight"
* batch.extension[manufacturing-batch-number-of-items] ^short = "manufacturing-batch-number-of-items"
* batch.extension[actual-yield] ^short = "actual-yield"
* batch.extension[actual-yield-unfiltered] ^short = "actual-yield-unfiltered"
* batch.extension[batch-release-date] ^short = "batch-release-date"
* batch.extension[formulation-number] ^short = "formulation-number"
* batch.extension[batch-designation] ^short = "batch-designation"
* batch.extension[batch-number-of-vials] ^short = "batch-number-of-vials"
* batch.extension[batch-number-of-full-shelves] ^short = "batch-number-of-full-shelves"
* batch.extension[batch-number-of-partial-shelves] ^short = "batch-number-of-partial-shelves"
* batch.extension[batch-substance-batch] ^short = "batch-substance-batch"
* batch.extension[target-fill-weight] ^short = "target-fill-weight"
* batch.extension[manufacturing-process] ^short = "manufacturing-process"
* batch.extension[packaging-date] ^short = "packaging-date"
* batch.extension[packaging-site] ^short = "packaging-site"