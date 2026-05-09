Instance: diagnosticreport-analysis-drug-pq-stability-prod
InstanceOf: DiagnosticReport
Usage: #example
* meta.profile = "http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/DiagnosticReport-analysis-drug-pq"
* extension[0].url = "http://hl7.org/fhir/StructureDefinition/workflow-triggeredBy"
* extension[=].valueReference = Reference(plandefinition-drug-pq-ex5-stability-study-protocol)
* extension[+].url = "http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-statistical-model-pq"
* extension[=].valueCodeableConcept.text = "information about statistical model utilized to interpret stability study results"
* extension[+].url = "http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-container-orientation-pq"
* extension[=].valueCodeableConcept = $container-orientation#horizontal "horizontal"
* extension[=].valueCodeableConcept.text = "Horizontal"
* identifier.system = "https://eudract.europa.eu/example/identifier"
* identifier.value = "ABC1234"
* status = #final
* code = $pharmaceutical-report-type#"Stability Study Report - 18 months" "Stability Study Report - 18 months"
* effectiveDateTime.extension.url = "http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-time-point-description-pq"
* effectiveDateTime.extension.valueCodeableConcept = $time-point-description#"Delayed Start Code" "Delayed Start Code"
* effectiveDateTime.extension.valueCodeableConcept.text = "Refrigerated delayed testing"
* effectiveDateTime = "2020-12"
* performer = Reference(organization-drug-pq-ex1)
* result = Reference(observation-test-result-longterm25c-initial-1)
* conclusion = "The samples have been assessed for initial period; no shelf life determined."
