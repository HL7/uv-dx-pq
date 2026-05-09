Instance: plandefinition-drug-pq-ex5-stability-study-protocol
InstanceOf: PlanDefinition
Usage: #example
* meta.profile = "http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/PlanDefinition-drug-pq"
* url = "http://example-server.com/fhir/PlanDefinition/plandefinition-drug-pq-ex5-stability-study-protocol"
* title = "Stability Monitoring Program"
* type = $pharmaceutical-plan-type#1244588 "Stability Study Protocol"
* status = #active
* subjectReference = Reference(MedicinalProductDefinition/medicinalproductdefinition-drug-product-pq-ex1)
* description = "Narrative description of Stability Study"
* action.title = "Stability Test Protocol for Long-term and Accelerated Storage of Stelbat Tablets, 20 mg"
* action.action.title = "Long-Term"
* action.action.description = "25°C/60% RH"
* action.action.action.title = "Initial"
* action.action.action.timingTiming.repeat.boundsRange.low = 0 'mo' "months"
* action.action.action.timingTiming.repeat.boundsRange.high = 0 'mo' "months"
* action.action.action.timingTiming.repeat.frequency = 1
* action.action.action.action.title = "XYZ"
* action.action.action.action.definitionCanonical = "http://example-server.com/fhir/ActivityDefinition/4bfe1ee8-91ed-5c1b-3045-c749bb9d1d90"
