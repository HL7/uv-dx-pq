Profile: PlanDefinitionDrugPq
Parent: PlanDefinition
Id: PlanDefinition-drug-pq
Title: "PlanDefinition - Drug PQ"
Description: "This PlanDefinition profile represents a protocol, analytical procedure, manufacturing process, or other workflow definition used in pharmaceutical quality (PQ) data gathering."
* ^status = #active
* extension contains
    ExtensionPlanDocumentReferencePq named plan-document-reference 0..* MS and
    ExtensionHistoryOfProcessPq named history-of-process 0..* MS
* extension[plan-document-reference] ^short = "plan-document-reference"
* extension[plan-document-reference] ^min = 0
* extension[history-of-process] ^short = "history-of-process"
* extension[history-of-process] ^min = 0
* identifier MS
* version MS
* title MS
* type MS
* type from VsPlanTypePQ (extensible)
* status MS
* subject[x] MS
* jurisdiction MS
* effectivePeriod MS
* goal MS
* goal.category MS
* goal.category from VsEquipmentClassPQ (preferred)
* goal.priority only CodeableConcept
* goal.priority MS
* goal.priority from VsGoalPriorityPQ (preferred)
* goal.priority ^short = "high-priority | medium-priority | low-priority"
* actor.option.role from VsTestCategoryPQ (preferred)
* action MS
* action.extension contains
    ExtensionProcessParametersPq named process-parameters 0..* MS and
    ExtensionProcessStepScalePq named process-step-scale 0..* MS
* action.extension[process-parameters] ^short = "process-parameters"
* action.extension[process-step-scale] ^short = "process-step-scale"
* action.code MS
* action.code from ActionCode (preferred)
* action.code ^binding.extension[0].extension[0].url = "purpose"
* action.code ^binding.extension[=].extension[=].valueCode = #extensible
* action.code ^binding.extension[=].extension[+].url = "valueSet"
* action.code ^binding.extension[=].extension[=].valueCanonical = "http://hl7.org/fhir/uv/pharm-quality/ValueSet/vs-manufacturingStep-pq"
* action.code ^binding.extension[=].url = "http://hl7.org/fhir/tools/StructureDefinition/additional-binding"
* action.code ^binding.extension[+].extension[0].url = "purpose"
* action.code ^binding.extension[=].extension[=].valueCode = #extensible
* action.code ^binding.extension[=].extension[+].url = "valueSet"
* action.code ^binding.extension[=].extension[=].valueCanonical = "http://hl7.org/fhir/uv/pharm-quality/ValueSet/vs-characterizationStep-pq"
* action.code ^binding.extension[=].url = "http://hl7.org/fhir/tools/StructureDefinition/additional-binding"
* action.code ^binding.extension[+].extension[0].url = "purpose"
* action.code ^binding.extension[=].extension[=].valueCode = #extensible
* action.code ^binding.extension[=].extension[+].url = "valueSet"
* action.code ^binding.extension[=].extension[=].valueCanonical = "http://hl7.org/fhir/uv/pharm-quality/ValueSet/vs-specification-type-pq"
* action.code ^binding.extension[=].url = "http://hl7.org/fhir/tools/StructureDefinition/additional-binding"
* action.participant.extension contains ExtensionManufacturingParticipantPq named manufacturing-participant 0..* MS
* action.participant.role MS
* action.participant.role from VsManufacturingParticipantRolePQ (preferred)