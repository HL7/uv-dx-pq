Profile: ProcedureDrugPq
Parent: Procedure
Id: Procedure-drug-pq
Title: "Procedure - Drug PQ"
Description: "This Procedure profile represents the actual performance of a manufacturing step, so that measurements can be recorded (via Observations), such as the actual “hold time” used, or the “bioburden” at the beginning or end of the step. The Procedure may record which device was used in the performance of a manufacturing step."
* ^status = #active
* identifier MS
* status MS
* code MS
* code from VsProcessValidationProcedurePQ (preferred)
* subject MS
* subject.extension contains http://hl7.org/fhir/StructureDefinition/alternate-reference named alternate-reference 0..* MS
* performer MS