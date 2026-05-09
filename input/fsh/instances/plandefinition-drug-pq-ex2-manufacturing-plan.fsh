Instance: plandefinition-drug-pq-ex2-manufacturing-plan
InstanceOf: PlanDefinition
Usage: #example
* meta.profile = "http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/PlanDefinition-drug-pq"
* meta.tag = $v3-ObservationValue#SUBSETTED
* extension.url = "http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-history-of-process-pq"
* extension.valueMarkdown = "This can be text about the history"
* url = "http://example-server.com/fhir/PlanDefinition/plandefinition-drug-pq-ex2-manufacturing-plan"
* title = "Process 1.0"
* type.coding[0] = $plan-definition-type#workflow-definition "Workflow Definition"
* type.coding[+] = $pharmaceutical-plan-type#manufacturing-process "Manufacturing Process"
* status = #active
* subjectReference = Reference(MedicinalProductDefinition/medicinalproductdefinition-drug-product-pq-ex1)
* description = "Narrative description of manufacturing process (5)"
* goal[0].id = "goal-control-pH"
* goal[=].category = $pharmaceutical-test-category#C123456 "Physical Property"
* goal[=].description.text = "Controls - pH"
* goal[=].priority = $cs-goalPriority-pq-example#critical "Critical"
* goal[=].target.measure = $cs-local-codes-drug-pq-example#pH "pH"
* goal[=].target.measure.text = "pH must be in range 6.9 to 7.1"
* goal[=].target.detailRange.low.value = 6.9
* goal[=].target.detailRange.low.unit = "pH"
* goal[=].target.detailRange.high.value = 7.1
* goal[=].target.detailRange.high.unit = "pH"
* goal[+].id = "goal-control-water-content"
* goal[=].category = $pharmaceutical-test-category#C123456 "Physical Property"
* goal[=].description.text = "Controls - Water Content"
* goal[=].priority = $cs-goalPriority-pq-example#critical "Critical"
* goal[=].target.measure = $cs-local-codes-drug-pq-example#WaterContent "Water content"
* goal[=].target.measure.text = "Under 2%"
* goal[=].target.detailRange.high.value = 2
* goal[=].target.detailRange.high.unit = "%"
* goal[+].id = "goal-control-particle-size"
* goal[=].category = $pharmaceutical-test-category#C123456 "Physical Property"
* goal[=].description.text = "Controls - Particle Size"
* goal[=].priority = $cs-goalPriority-pq-example#critical "Critical"
* goal[=].target.measure = $cs-local-codes-drug-pq-example#particle-size "Particle Size"
* goal[=].target.measure.text = "Under 200 microns"
* goal[=].target.detailRange.high.value = 200
* goal[=].target.detailRange.high.unit = "microns"
