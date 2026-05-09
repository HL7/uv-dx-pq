Profile: SpecimenDrugPq
Parent: Specimen
Id: Specimen-drug-pq
Title: "Specimen - Drug PQ"
Description: "This Specimen profile represents identifying information about an individual specimen (an instance)."
* ^status = #active
* subject MS
* processing MS
* processing.time[x].extension contains ExtensionBatchStorageDurationPq named batch-storage-duration 0..* MS