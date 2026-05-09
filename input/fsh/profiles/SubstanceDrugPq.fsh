Profile: SubstanceDrugPq
Parent: Substance
Id: Substance-drug-pq
Title: "Substance - Drug PQ"
Description: "This Substance profile represents identifying information about an actual batch of substance (an instance)."
* ^status = #active
* extension contains
    MedManufacturingBatch named medication-manufacturingBatch 0..* MS and
    ExtensionBatchReleaseDatePq named batch-release-date 0..* MS and
    ExtensionBatchRetestDatePq named batch-retest-date 0..* MS and
    ExtensionManufacturingProcessPq named manufacturing-process 0..* MS and
    ExtensionActualYieldPq named actual-yield 0..* MS and
    ExtensionBatchDerivedFromPq named batch-derived-from 0..* MS
* extension[medication-manufacturingBatch] ^short = "medication-manufacturingBatch"
* extension[batch-release-date] ^short = "batch-release-date"
* extension[batch-retest-date] ^short = "batch-retest-date"
* extension[manufacturing-process] ^short = "manufacturing-process"
* extension[actual-yield] ^short = "actual-yield"
* extension[batch-derived-from] ^short = "batch-derived-from"
* identifier MS
* status MS