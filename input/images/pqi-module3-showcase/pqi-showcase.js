// Theme Toggle Logic
function toggleTheme() {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    document.getElementById('theme-icon').textContent = next === 'dark' ? '☀️' : '🌙';
}

// Tab Logic
function switchTab(tabId) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    event.target.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

// Drawer Logic
const resourceData = {
  "DiagnosticReport/diagnosticreport-analysis-drug-pq-stability-prod": {
    "title": "DiagnosticReport: diagnosticreport-analysis-drug-pq-stability-prod",
    "details": [
      {
        "k": "Resource Type",
        "v": "DiagnosticReport"
      },
      {
        "k": "ID",
        "v": "diagnosticreport-analysis-drug-pq-stability-prod"
      },
      {
        "k": "Status",
        "v": "final"
      },
      {
        "k": "Code",
        "v": "Stability Study Report - 18 months"
      }
    ],
    "json": "{\n  \"id\": \"diagnosticreport-analysis-drug-pq-stability-prod\",\n  \"meta\": {\n    \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/DiagnosticReport-analysis-drug-pq\"\n  },\n  \"extension\": [\n    {\n      \"valueReference\": {\n        \"reference\": \"PlanDefinition/c96cb248-1408-79fc-1f47-b17a6b2e4b54\"\n      }\n    },\n    {\n      \"valueCodeableConcept\": {\n        \"text\": \"information about statistical model utilized to interpret stability study results\"\n      }\n    },\n    {\n      \"valueCodeableConcept\": {\n        \"coding\": {\n          \"system\": \"http://terminology.hl7.org/CodeSystem/container-orientation\",\n          \"code\": \"horizontal\",\n          \"display\": \"horizontal\"\n        },\n        \"text\": \"Horizontal\"\n      }\n    }\n  ],\n  \"identifier\": {\n    \"system\": \"https://eudract.europa.eu/example/identifier\",\n    \"value\": \"ABC1234\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://terminology.hl7.org/CodeSystem/pharmaceutical-report-type\",\n      \"code\": \"Stability Study Report - 18 months\",\n      \"display\": \"Stability Study Report - 18 months\"\n    }\n  },\n  \"effectiveDateTime\": \"2020-12\",\n  \"performer\": {\n    \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n  },\n  \"result\": [\n    {\n      \"reference\": \"Observation/6fabbf78-9678-8030-485f-b149956308d5\"\n    },\n    {\n      \"reference\": \"Observation/74535cc6-5232-5ab5-81cf-167a480795e5\"\n    },\n    {\n      \"reference\": \"Observation/8bf75da1-9221-66fe-6725-c64cb45a57e6\"\n    },\n    {\n      \"reference\": \"Observation/e803ad6d-0cb3-87dd-6af1-4b88c654a47c\"\n    },\n    {\n      \"reference\": \"Observation/3519f84a-2889-90a0-a6b7-ff2f1be66a73\"\n    },\n    {\n      \"reference\": \"Observation/2ef362f1-0b65-3578-7f06-fbd74a24694a\"\n    },\n    {\n      \"reference\": \"Observation/72e0640b-094b-909e-5268-3dee92af4bbd\"\n    }\n  ],\n  \"conclusion\": \"The samples have been assessed and the conclusion is that the shelf life can be 18 months.\",\n  \"resourceType\": \"DiagnosticReport\"\n}"
  },
  "PlanDefinition/c96cb248-1408-79fc-1f47-b17a6b2e4b54": {
    "title": "PlanDefinition: c96cb248-1408-79fc-1f47-b17a6b2e4b54",
    "details": [
      {
        "k": "Resource Type",
        "v": "PlanDefinition"
      },
      {
        "k": "ID",
        "v": "c96cb248-1408-79fc-1f47-b17a6b2e4b54"
      },
      {
        "k": "Status",
        "v": "active"
      }
    ],
    "json": "{\n  \"id\": \"c96cb248-1408-79fc-1f47-b17a6b2e4b54\",\n  \"meta\": {\n    \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/PlanDefinition-drug-pq\"\n  },\n  \"url\": \"http://example-server.com/fhir/PlanDefinition/c96cb248-1408-79fc-1f47-b17a6b2e4b54\",\n  \"title\": \"Stability Monitoring Program\",\n  \"type\": {\n    \"coding\": {\n      \"system\": \"http://terminology.hl7.org/CodeSystem/pharmaceutical-plan-type\",\n      \"code\": \"1244588\",\n      \"display\": \"Stability Study Protocol\"\n    }\n  },\n  \"status\": \"active\",\n  \"subjectReference\": {\n    \"reference\": \"MedicinalProductDefinition/a0694a7a-aafa-4cbe-8135-c788a9a4d3d5\"\n  },\n  \"description\": \"Narrative description of Stability Study\",\n  \"action\": {\n    \"title\": \"Stability Test Protocol for Long-term and Accelerated Storage of Stelbat Tablets, 20 mg\",\n    \"action\": [\n      {\n        \"title\": \"Long-Term\",\n        \"description\": \"25\\u00b0C/60% RH\",\n        \"action\": [\n          {\n            \"title\": \"Initial\",\n            \"timingTiming\": {\n              \"repeat\": {\n                \"boundsRange\": {\n                  \"low\": {\n                    \"value\": \"0\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  },\n                  \"high\": {\n                    \"value\": \"0\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  }\n                },\n                \"frequency\": \"1\"\n              }\n            },\n            \"action\": {\n              \"title\": \"XYZ\",\n              \"definitionCanonical\": \"http://example-server.com/fhir/ActivityDefinition/4bfe1ee8-91ed-5c1b-3045-c749bb9d1d90\"\n            }\n          },\n          {\n            \"title\": \"3\",\n            \"timingTiming\": {\n              \"repeat\": {\n                \"boundsRange\": {\n                  \"low\": {\n                    \"value\": \"3\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  },\n                  \"high\": {\n                    \"value\": \"3\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  }\n                },\n                \"frequency\": \"1\"\n              }\n            },\n            \"action\": {\n              \"title\": \"X\",\n              \"definitionCanonical\": \"http://example-server.com/fhir/ActivityDefinition/610ca25c-6126-6117-8d4d-9458ccc33ce2\"\n            }\n          },\n          {\n            \"title\": \"6\",\n            \"timingTiming\": {\n              \"repeat\": {\n                \"boundsRange\": {\n                  \"low\": {\n                    \"value\": \"6\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  },\n                  \"high\": {\n                    \"value\": \"6\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  }\n                },\n                \"frequency\": \"1\"\n              }\n            },\n            \"action\": {\n              \"title\": \"X\",\n              \"definitionCanonical\": \"http://example-server.com/fhir/ActivityDefinition/d99c1b63-2d32-4887-8157-525cc8ae4732\"\n            }\n          },\n          {\n            \"title\": \"9\",\n            \"timingTiming\": {\n              \"repeat\": {\n                \"boundsRange\": {\n                  \"low\": {\n                    \"value\": \"9\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  },\n                  \"high\": {\n                    \"value\": \"9\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  }\n                },\n                \"frequency\": \"1\"\n              }\n            },\n            \"action\": {\n              \"title\": \"X\",\n              \"definitionCanonical\": \"http://example-server.com/fhir/ActivityDefinition/38704856-0acf-95f0-000f-a933b6862fa0\"\n            }\n          },\n          {\n            \"title\": \"12\",\n            \"timingTiming\": {\n              \"repeat\": {\n                \"boundsRange\": {\n                  \"low\": {\n                    \"value\": \"12\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  },\n                  \"high\": {\n                    \"value\": \"12\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  }\n                },\n                \"frequency\": \"1\"\n              }\n            },\n            \"action\": {\n              \"title\": \"XY\",\n              \"definitionCanonical\": \"http://example-server.com/fhir/ActivityDefinition/f19a68b0-4ba1-7288-635e-12783035935b\"\n            }\n          },\n          {\n            \"title\": \"18\",\n            \"timingTiming\": {\n              \"repeat\": {\n                \"boundsRange\": {\n                  \"low\": {\n                    \"value\": \"18\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  },\n                  \"high\": {\n                    \"value\": \"18\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  }\n                },\n                \"frequency\": \"1\"\n              }\n            },\n            \"action\": {\n              \"title\": \"XY\",\n              \"definitionCanonical\": \"http://example-server.com/fhir/ActivityDefinition/ce2df6ab-5087-435c-35cb-a84572e756a2\"\n            }\n          },\n          {\n            \"title\": \"24\",\n            \"timingTiming\": {\n              \"repeat\": {\n                \"boundsRange\": {\n                  \"low\": {\n                    \"value\": \"24\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  },\n                  \"high\": {\n                    \"value\": \"24\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  }\n                },\n                \"frequency\": \"1\"\n              }\n            },\n            \"action\": {\n              \"title\": \"XY\",\n              \"definitionCanonical\": \"http://example-server.com/fhir/ActivityDefinition/cf2df6ab-5087-435c-35cb-a84572e756a2\"\n            }\n          }\n        ]\n      },\n      {\n        \"title\": \"Accelerated\",\n        \"description\": \"40\\u00b0C/75% RH\",\n        \"action\": [\n          {\n            \"title\": \"Initial\",\n            \"timingTiming\": {\n              \"repeat\": {\n                \"boundsRange\": {\n                  \"low\": {\n                    \"value\": \"0\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  },\n                  \"high\": {\n                    \"value\": \"0\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  }\n                },\n                \"frequency\": \"1\"\n              }\n            },\n            \"action\": {\n              \"title\": \"XYZ\",\n              \"definitionCanonical\": \"http://example-server.com/fhir/ActivityDefinition/6b96124b-1a44-0b6b-6783-d6c49360230b\"\n            }\n          },\n          {\n            \"title\": \"3\",\n            \"timingTiming\": {\n              \"repeat\": {\n                \"boundsRange\": {\n                  \"low\": {\n                    \"value\": \"3\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  },\n                  \"high\": {\n                    \"value\": \"3\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  }\n                },\n                \"frequency\": \"1\"\n              }\n            },\n            \"action\": {\n              \"title\": \"X\",\n              \"definitionCanonical\": \"http://example-server.com/fhir/ActivityDefinition/096e3f32-798e-6792-76ad-4ea783521c50\"\n            }\n          },\n          {\n            \"title\": \"6\",\n            \"timingTiming\": {\n              \"repeat\": {\n                \"boundsRange\": {\n                  \"low\": {\n                    \"value\": \"6\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  },\n                  \"high\": {\n                    \"value\": \"6\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  }\n                },\n                \"frequency\": \"1\"\n              }\n            },\n            \"action\": {\n              \"title\": \"X\",\n              \"definitionCanonical\": \"http://example-server.com/fhir/ActivityDefinition/77f86b13-8193-3df7-8362-ab5e79ba541d\"\n            }\n          },\n          {\n            \"title\": \"9\",\n            \"timingTiming\": {\n              \"repeat\": {\n                \"boundsRange\": {\n                  \"low\": {\n                    \"value\": \"9\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  },\n                  \"high\": {\n                    \"value\": \"9\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  }\n                },\n                \"frequency\": \"1\"\n              }\n            },\n            \"action\": {\n              \"title\": \"-\"\n            }\n          },\n          {\n            \"title\": \"12\",\n            \"timingTiming\": {\n              \"repeat\": {\n                \"boundsRange\": {\n                  \"low\": {\n                    \"value\": \"12\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  },\n                  \"high\": {\n                    \"value\": \"12\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  }\n                },\n                \"frequency\": \"1\"\n              }\n            },\n            \"action\": {\n              \"title\": \"-\"\n            }\n          },\n          {\n            \"title\": \"18\",\n            \"timingTiming\": {\n              \"repeat\": {\n                \"boundsRange\": {\n                  \"low\": {\n                    \"value\": \"18\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  },\n                  \"high\": {\n                    \"value\": \"18\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  }\n                },\n                \"frequency\": \"1\"\n              }\n            },\n            \"action\": {\n              \"title\": \"-\"\n            }\n          },\n          {\n            \"title\": \"24\",\n            \"timingTiming\": {\n              \"repeat\": {\n                \"boundsRange\": {\n                  \"low\": {\n                    \"value\": \"24\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  },\n                  \"high\": {\n                    \"value\": \"24\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  }\n                },\n                \"frequency\": \"1\"\n              }\n            },\n            \"action\": {\n              \"title\": \"-\"\n            }\n          }\n        ]\n      }\n    ]\n  },\n  \"resourceType\": \"PlanDefinition\"\n}"
  },
  "SpecimenDefinition/3a0cde98-4a73-6d67-1dfc-08e3fc9646a2": {
    "title": "SpecimenDefinition: 3a0cde98-4a73-6d67-1dfc-08e3fc9646a2",
    "details": [
      {
        "k": "Resource Type",
        "v": "SpecimenDefinition"
      },
      {
        "k": "ID",
        "v": "3a0cde98-4a73-6d67-1dfc-08e3fc9646a2"
      },
      {
        "k": "Status",
        "v": "active"
      }
    ],
    "json": "{\n  \"id\": \"3a0cde98-4a73-6d67-1dfc-08e3fc9646a2\",\n  \"meta\": {\n    \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/SpecimenDefinition-drug-pq\"\n  },\n  \"url\": \"http://example-server.com/fhir/SpecimenDefinition/3a0cde98-4a73-6d67-1dfc-08e3fc9646a2\",\n  \"status\": \"active\",\n  \"typeTested\": {\n    \"preference\": \"preferred\",\n    \"handling\": {\n      \"instruction\": \"25\\u00b0C/60% RH\"\n    }\n  },\n  \"resourceType\": \"SpecimenDefinition\"\n}"
  },
  "ActivityDefinition/610ca25c-6126-6117-8d4d-9458ccc33ce2": {
    "title": "ActivityDefinition: 610ca25c-6126-6117-8d4d-9458ccc33ce2",
    "details": [
      {
        "k": "Resource Type",
        "v": "ActivityDefinition"
      },
      {
        "k": "ID",
        "v": "610ca25c-6126-6117-8d4d-9458ccc33ce2"
      },
      {
        "k": "Status",
        "v": "active"
      }
    ],
    "json": "{\n  \"id\": \"610ca25c-6126-6117-8d4d-9458ccc33ce2\",\n  \"meta\": {\n    \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/ActivityDefinition-test-drug-pq\"\n  },\n  \"url\": \"http://example-server.com/fhir/ActivityDefinition/610ca25c-6126-6117-8d4d-9458ccc33ce2\",\n  \"title\": \"Long-term - 25\\u00b0C/60% RH - X\",\n  \"status\": \"active\",\n  \"observationRequirement\": \"http://example-server.com/fhir/ObservationDefinition/d1d252cf-9d58-43a0-85f6-56a7f7f92774\",\n  \"resourceType\": \"ActivityDefinition\"\n}"
  },
  "ActivityDefinition/d99c1b63-2d32-4887-8157-525cc8ae4732": {
    "title": "ActivityDefinition: d99c1b63-2d32-4887-8157-525cc8ae4732",
    "details": [
      {
        "k": "Resource Type",
        "v": "ActivityDefinition"
      },
      {
        "k": "ID",
        "v": "d99c1b63-2d32-4887-8157-525cc8ae4732"
      },
      {
        "k": "Status",
        "v": "active"
      }
    ],
    "json": "{\n  \"id\": \"d99c1b63-2d32-4887-8157-525cc8ae4732\",\n  \"meta\": {\n    \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/ActivityDefinition-test-drug-pq\"\n  },\n  \"url\": \"http://example-server.com/fhir/ActivityDefinition/d99c1b63-2d32-4887-8157-525cc8ae4732\",\n  \"title\": \"Long-term - 25\\u00b0C/60% RH - X\",\n  \"status\": \"active\",\n  \"observationRequirement\": \"http://example-server.com/fhir/ObservationDefinition/d1d252cf-9d58-43a0-85f6-56a7f7f92774\",\n  \"resourceType\": \"ActivityDefinition\"\n}"
  },
  "ActivityDefinition/38704856-0acf-95f0-000f-a933b6862fa0": {
    "title": "ActivityDefinition: 38704856-0acf-95f0-000f-a933b6862fa0",
    "details": [
      {
        "k": "Resource Type",
        "v": "ActivityDefinition"
      },
      {
        "k": "ID",
        "v": "38704856-0acf-95f0-000f-a933b6862fa0"
      },
      {
        "k": "Status",
        "v": "active"
      }
    ],
    "json": "{\n  \"id\": \"38704856-0acf-95f0-000f-a933b6862fa0\",\n  \"meta\": {\n    \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/ActivityDefinition-test-drug-pq\"\n  },\n  \"url\": \"http://example-server.com/fhir/ActivityDefinition/38704856-0acf-95f0-000f-a933b6862fa0\",\n  \"title\": \"Long-term - 25\\u00b0C/60% RH - X\",\n  \"status\": \"active\",\n  \"observationRequirement\": \"http://example-server.com/fhir/ObservationDefinition/d1d252cf-9d58-43a0-85f6-56a7f7f92774\",\n  \"resourceType\": \"ActivityDefinition\"\n}"
  },
  "ActivityDefinition/4bfe1ee8-91ed-5c1b-3045-c749bb9d1d90": {
    "title": "ActivityDefinition: 4bfe1ee8-91ed-5c1b-3045-c749bb9d1d90",
    "details": [
      {
        "k": "Resource Type",
        "v": "ActivityDefinition"
      },
      {
        "k": "ID",
        "v": "4bfe1ee8-91ed-5c1b-3045-c749bb9d1d90"
      },
      {
        "k": "Status",
        "v": "active"
      }
    ],
    "json": "{\n  \"id\": \"4bfe1ee8-91ed-5c1b-3045-c749bb9d1d90\",\n  \"meta\": {\n    \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/ActivityDefinition-test-drug-pq\"\n  },\n  \"url\": \"http://example-server.com/fhir/ActivityDefinition/4bfe1ee8-91ed-5c1b-3045-c749bb9d1d90\",\n  \"title\": \"Long-term - 25\\u00b0C/60% RH - XYZ\",\n  \"status\": \"active\",\n  \"observationRequirement\": [\n    \"http://example-server.com/fhir/ObservationDefinition/d1d252cf-9d58-43a0-85f6-56a7f7f92774\",\n    \"http://example-server.com/fhir/ObservationDefinition/b62b9524-53af-84ae-1071-2867a2169851\",\n    \"http://example-server.com/fhir/ObservationDefinition/363384c8-0d79-5ff0-5538-4933f99d6409\"\n  ],\n  \"resourceType\": \"ActivityDefinition\"\n}"
  },
  "ActivityDefinition/f19a68b0-4ba1-7288-635e-12783035935b": {
    "title": "ActivityDefinition: f19a68b0-4ba1-7288-635e-12783035935b",
    "details": [
      {
        "k": "Resource Type",
        "v": "ActivityDefinition"
      },
      {
        "k": "ID",
        "v": "f19a68b0-4ba1-7288-635e-12783035935b"
      },
      {
        "k": "Status",
        "v": "active"
      }
    ],
    "json": "{\n  \"id\": \"f19a68b0-4ba1-7288-635e-12783035935b\",\n  \"meta\": {\n    \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/ActivityDefinition-test-drug-pq\"\n  },\n  \"url\": \"http://example-server.com/fhir/ActivityDefinition/f19a68b0-4ba1-7288-635e-12783035935b\",\n  \"title\": \"Long-term - 25\\u00b0C/60% RH - XY\",\n  \"status\": \"active\",\n  \"observationRequirement\": [\n    \"http://example-server.com/fhir/ObservationDefinition/d1d252cf-9d58-43a0-85f6-56a7f7f92774\",\n    \"http://example-server.com/fhir/ObservationDefinition/b62b9524-53af-84ae-1071-2867a2169851\"\n  ],\n  \"resourceType\": \"ActivityDefinition\"\n}"
  },
  "ActivityDefinition/ce2df6ab-5087-435c-35cb-a84572e756a2": {
    "title": "ActivityDefinition: ce2df6ab-5087-435c-35cb-a84572e756a2",
    "details": [
      {
        "k": "Resource Type",
        "v": "ActivityDefinition"
      },
      {
        "k": "ID",
        "v": "ce2df6ab-5087-435c-35cb-a84572e756a2"
      },
      {
        "k": "Status",
        "v": "active"
      }
    ],
    "json": "{\n  \"id\": \"ce2df6ab-5087-435c-35cb-a84572e756a2\",\n  \"meta\": {\n    \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/ActivityDefinition-test-drug-pq\"\n  },\n  \"url\": \"http://example-server.com/fhir/ActivityDefinition/ce2df6ab-5087-435c-35cb-a84572e756a2\",\n  \"title\": \"Long-term - 25\\u00b0C/60% RH - XY\",\n  \"status\": \"active\",\n  \"observationRequirement\": [\n    \"http://example-server.com/fhir/ObservationDefinition/d1d252cf-9d58-43a0-85f6-56a7f7f92774\",\n    \"http://example-server.com/fhir/ObservationDefinition/b62b9524-53af-84ae-1071-2867a2169851\"\n  ],\n  \"resourceType\": \"ActivityDefinition\"\n}"
  },
  "ActivityDefinition/cf2df6ab-5087-435c-35cb-a84572e756a2": {
    "title": "ActivityDefinition: cf2df6ab-5087-435c-35cb-a84572e756a2",
    "details": [
      {
        "k": "Resource Type",
        "v": "ActivityDefinition"
      },
      {
        "k": "ID",
        "v": "cf2df6ab-5087-435c-35cb-a84572e756a2"
      },
      {
        "k": "Status",
        "v": "active"
      }
    ],
    "json": "{\n  \"id\": \"cf2df6ab-5087-435c-35cb-a84572e756a2\",\n  \"meta\": {\n    \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/ActivityDefinition-test-drug-pq\"\n  },\n  \"url\": \"http://example-server.com/fhir/ActivityDefinition/cf2df6ab-5087-435c-35cb-a84572e756a2\",\n  \"title\": \"Long-term - 25\\u00b0C/60% RH - XY\",\n  \"status\": \"active\",\n  \"observationRequirement\": [\n    \"http://example-server.com/fhir/ObservationDefinition/d1d252cf-9d58-43a0-85f6-56a7f7f92774\",\n    \"http://example-server.com/fhir/ObservationDefinition/b62b9524-53af-84ae-1071-2867a2169851\"\n  ],\n  \"resourceType\": \"ActivityDefinition\"\n}"
  },
  "ObservationDefinition/d1d252cf-9d58-43a0-85f6-56a7f7f92774": {
    "title": "ObservationDefinition: d1d252cf-9d58-43a0-85f6-56a7f7f92774",
    "details": [
      {
        "k": "Resource Type",
        "v": "ObservationDefinition"
      },
      {
        "k": "ID",
        "v": "d1d252cf-9d58-43a0-85f6-56a7f7f92774"
      },
      {
        "k": "Status",
        "v": "active"
      },
      {
        "k": "Code",
        "v": "Battery of tests 'X' at 25\u00b0C/60% RH"
      }
    ],
    "json": "{\n  \"id\": \"d1d252cf-9d58-43a0-85f6-56a7f7f92774\",\n  \"meta\": {\n    \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/ObservationDefinition-test-method-drug-pq\"\n  },\n  \"url\": \"http://example-server.com/fhir/ObservationDefinition/d1d252cf-9d58-43a0-85f6-56a7f7f92774\",\n  \"title\": \"X\",\n  \"status\": \"active\",\n  \"code\": {\n    \"text\": \"Battery of tests 'X' at 25\\u00b0C/60% RH\"\n  },\n  \"specimen\": {\n    \"reference\": \"SpecimenDefinition/3a0cde98-4a73-6d67-1dfc-08e3fc9646a2\"\n  },\n  \"hasMember\": [\n    {\n      \"reference\": \"ObservationDefinition/1178fc31-0cfd-8c60-0b5b-9ae2850c6774\"\n    },\n    {\n      \"reference\": \"ObservationDefinition/2c5683d6-6e94-825b-056a-129a04c95e2f\"\n    },\n    {\n      \"reference\": \"ObservationDefinition/186eb33e-a01d-4252-166c-b5ba5e8a697c\"\n    }\n  ],\n  \"resourceType\": \"ObservationDefinition\"\n}"
  },
  "ObservationDefinition/1178fc31-0cfd-8c60-0b5b-9ae2850c6774": {
    "title": "ObservationDefinition: 1178fc31-0cfd-8c60-0b5b-9ae2850c6774",
    "details": [
      {
        "k": "Resource Type",
        "v": "ObservationDefinition"
      },
      {
        "k": "ID",
        "v": "1178fc31-0cfd-8c60-0b5b-9ae2850c6774"
      },
      {
        "k": "Status",
        "v": "active"
      },
      {
        "k": "Code",
        "v": "Description"
      }
    ],
    "json": "{\n  \"id\": \"1178fc31-0cfd-8c60-0b5b-9ae2850c6774\",\n  \"meta\": {\n    \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/ObservationDefinition-test-method-drug-pq\"\n  },\n  \"url\": \"http://example-server.com/fhir/ObservationDefinition/1178fc31-0cfd-8c60-0b5b-9ae2850c6774\",\n  \"title\": \"Description\",\n  \"status\": \"active\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"DESC\",\n      \"display\": \"Description\"\n    },\n    \"text\": \"Description\"\n  },\n  \"qualifiedValue\": {\n    \"extension\": {\n      \"valueString\": \"An orange film-coated tablet, debossed with 175 on one side\"\n    }\n  },\n  \"resourceType\": \"ObservationDefinition\"\n}"
  },
  "ObservationDefinition/2c5683d6-6e94-825b-056a-129a04c95e2f": {
    "title": "ObservationDefinition: 2c5683d6-6e94-825b-056a-129a04c95e2f",
    "details": [
      {
        "k": "Resource Type",
        "v": "ObservationDefinition"
      },
      {
        "k": "ID",
        "v": "2c5683d6-6e94-825b-056a-129a04c95e2f"
      },
      {
        "k": "Status",
        "v": "active"
      },
      {
        "k": "Code",
        "v": "Degradation Products"
      }
    ],
    "json": "{\n  \"id\": \"2c5683d6-6e94-825b-056a-129a04c95e2f\",\n  \"meta\": {\n    \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/ObservationDefinition-test-method-drug-pq\"\n  },\n  \"url\": \"http://example-server.com/fhir/ObservationDefinition/2c5683d6-6e94-825b-056a-129a04c95e2f\",\n  \"title\": \"Degradation Products by HPLC (% w/w)\",\n  \"status\": \"active\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"DGP\",\n      \"display\": \"Degradation Products\"\n    }\n  },\n  \"qualifiedValue\": [\n    {\n      \"appliesTo\": {\n        \"text\": \"Impurity 1\"\n      },\n      \"range\": {\n        \"high\": {\n          \"value\": \"0.8\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        }\n      }\n    },\n    {\n      \"appliesTo\": {\n        \"text\": \"Impurity 2\"\n      },\n      \"range\": {\n        \"high\": {\n          \"value\": \"0.4\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        }\n      }\n    },\n    {\n      \"appliesTo\": {\n        \"text\": \"Impurity 3\"\n      },\n      \"range\": {\n        \"high\": {\n          \"value\": \"0.4\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        }\n      }\n    },\n    {\n      \"appliesTo\": {\n        \"text\": \"Any Unspecified Degradation Impurity\"\n      },\n      \"range\": {\n        \"high\": {\n          \"value\": \"0.2\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        }\n      }\n    },\n    {\n      \"appliesTo\": {\n        \"text\": \"Total Degradation Impurities\"\n      },\n      \"range\": {\n        \"high\": {\n          \"value\": \"2.3\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        }\n      }\n    }\n  ],\n  \"component\": {\n    \"code\": {\n      \"coding\": {\n        \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n        \"code\": \"IMP\",\n        \"display\": \"Impurity\"\n      }\n    }\n  },\n  \"resourceType\": \"ObservationDefinition\"\n}"
  },
  "ObservationDefinition/186eb33e-a01d-4252-166c-b5ba5e8a697c": {
    "title": "ObservationDefinition: 186eb33e-a01d-4252-166c-b5ba5e8a697c",
    "details": [
      {
        "k": "Resource Type",
        "v": "ObservationDefinition"
      },
      {
        "k": "ID",
        "v": "186eb33e-a01d-4252-166c-b5ba5e8a697c"
      },
      {
        "k": "Status",
        "v": "active"
      },
      {
        "k": "Code",
        "v": "Water Content"
      }
    ],
    "json": "{\n  \"id\": \"186eb33e-a01d-4252-166c-b5ba5e8a697c\",\n  \"meta\": {\n    \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/ObservationDefinition-test-method-drug-pq\"\n  },\n  \"url\": \"http://example-server.com/fhir/ObservationDefinition/186eb33e-a01d-4252-166c-b5ba5e8a697c\",\n  \"title\": \"Water Content (% w/w) (Mean)\",\n  \"status\": \"active\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"WaterContent\",\n      \"display\": \"Water Content\"\n    },\n    \"text\": \"Water Content\"\n  },\n  \"qualifiedValue\": {\n    \"range\": {\n      \"high\": {\n        \"value\": \"0.2\",\n        \"unit\": \"% w/w\",\n        \"system\": \"http://unitsofmeasure.org\",\n        \"code\": \"%\"\n      }\n    }\n  },\n  \"resourceType\": \"ObservationDefinition\"\n}"
  },
  "ObservationDefinition/b62b9524-53af-84ae-1071-2867a2169851": {
    "title": "ObservationDefinition: b62b9524-53af-84ae-1071-2867a2169851",
    "details": [
      {
        "k": "Resource Type",
        "v": "ObservationDefinition"
      },
      {
        "k": "ID",
        "v": "b62b9524-53af-84ae-1071-2867a2169851"
      },
      {
        "k": "Status",
        "v": "active"
      },
      {
        "k": "Code",
        "v": "Battery of tests 'Y' at 25\u00b0C/60% RH"
      }
    ],
    "json": "{\n  \"id\": \"b62b9524-53af-84ae-1071-2867a2169851\",\n  \"meta\": {\n    \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/ObservationDefinition-test-method-drug-pq\"\n  },\n  \"url\": \"http://example-server.com/fhir/ObservationDefinition/b62b9524-53af-84ae-1071-2867a2169851\",\n  \"title\": \"Y\",\n  \"status\": \"active\",\n  \"code\": {\n    \"text\": \"Battery of tests 'Y' at 25\\u00b0C/60% RH\"\n  },\n  \"specimen\": {\n    \"reference\": \"SpecimenDefinition/3a0cde98-4a73-6d67-1dfc-08e3fc9646a2\"\n  },\n  \"hasMember\": {\n    \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n  },\n  \"resourceType\": \"ObservationDefinition\"\n}"
  },
  "ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e": {
    "title": "ObservationDefinition: 73d9d304-a0b8-31b6-1165-346563b9305e",
    "details": [
      {
        "k": "Resource Type",
        "v": "ObservationDefinition"
      },
      {
        "k": "ID",
        "v": "73d9d304-a0b8-31b6-1165-346563b9305e"
      },
      {
        "k": "Status",
        "v": "active"
      },
      {
        "k": "Code",
        "v": "Impurities"
      }
    ],
    "json": "{\n  \"id\": \"73d9d304-a0b8-31b6-1165-346563b9305e\",\n  \"url\": \"http://example-server.com/fhir/ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\",\n  \"title\": \"Drug-related Impurities Content by LC (% w/w)\",\n  \"status\": \"active\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"Impurities\",\n      \"display\": \"Impurities\"\n    }\n  },\n  \"qualifiedValue\": [\n    {\n      \"appliesTo\": {\n        \"text\": \"Impurity\"\n      },\n      \"range\": {\n        \"high\": {\n          \"value\": \"0.5\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        }\n      }\n    },\n    {\n      \"appliesTo\": {\n        \"text\": \"Impurity 2\"\n      },\n      \"range\": {\n        \"high\": {\n          \"value\": \"0.52\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        }\n      }\n    },\n    {\n      \"appliesTo\": {\n        \"text\": \"Any Unspecified Impurity\"\n      },\n      \"range\": {\n        \"high\": {\n          \"value\": \"0.10\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        }\n      }\n    },\n    {\n      \"appliesTo\": {\n        \"text\": \"Total Impurities\"\n      },\n      \"range\": {\n        \"high\": {\n          \"value\": \"2.0\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        }\n      }\n    }\n  ],\n  \"component\": {\n    \"code\": {\n      \"coding\": {\n        \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n        \"code\": \"IMP\",\n        \"display\": \"Impurity\"\n      }\n    }\n  },\n  \"resourceType\": \"ObservationDefinition\"\n}"
  },
  "ObservationDefinition/363384c8-0d79-5ff0-5538-4933f99d6409": {
    "title": "ObservationDefinition: 363384c8-0d79-5ff0-5538-4933f99d6409",
    "details": [
      {
        "k": "Resource Type",
        "v": "ObservationDefinition"
      },
      {
        "k": "ID",
        "v": "363384c8-0d79-5ff0-5538-4933f99d6409"
      },
      {
        "k": "Status",
        "v": "active"
      },
      {
        "k": "Code",
        "v": "Battery of tests 'Z' at 25\u00b0C/60% RH"
      }
    ],
    "json": "{\n  \"id\": \"363384c8-0d79-5ff0-5538-4933f99d6409\",\n  \"meta\": {\n    \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/ObservationDefinition-test-method-drug-pq\"\n  },\n  \"url\": \"http://example-server.com/fhir/ObservationDefinition/363384c8-0d79-5ff0-5538-4933f99d6409\",\n  \"title\": \"Z\",\n  \"status\": \"active\",\n  \"code\": {\n    \"text\": \"Battery of tests 'Z' at 25\\u00b0C/60% RH\"\n  },\n  \"specimen\": {\n    \"reference\": \"SpecimenDefinition/3a0cde98-4a73-6d67-1dfc-08e3fc9646a2\"\n  },\n  \"hasMember\": {\n    \"reference\": \"ObservationDefinition/ef781c18-8e86-7859-209b-469ee9ad42d8\"\n  },\n  \"resourceType\": \"ObservationDefinition\"\n}"
  },
  "ObservationDefinition/ef781c18-8e86-7859-209b-469ee9ad42d8": {
    "title": "ObservationDefinition: ef781c18-8e86-7859-209b-469ee9ad42d8",
    "details": [
      {
        "k": "Resource Type",
        "v": "ObservationDefinition"
      },
      {
        "k": "ID",
        "v": "ef781c18-8e86-7859-209b-469ee9ad42d8"
      },
      {
        "k": "Status",
        "v": "active"
      },
      {
        "k": "Code",
        "v": "uniformity of dosage units (by weight)"
      }
    ],
    "json": "{\n  \"id\": \"ef781c18-8e86-7859-209b-469ee9ad42d8\",\n  \"meta\": {\n    \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/ObservationDefinition-test-method-drug-pq\"\n  },\n  \"url\": \"http://example-server.com/fhir/ObservationDefinition/ef781c18-8e86-7859-209b-469ee9ad42d8\",\n  \"title\": \"Uniformity of dosage\",\n  \"status\": \"active\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"uniformity-dosage\",\n      \"display\": \"uniformity of dosage units (by weight)\"\n    },\n    \"text\": \"uniformity of dosage units (by weight)\"\n  },\n  \"qualifiedValue\": {\n    \"extension\": {\n      \"valueString\": \"Complies\"\n    }\n  },\n  \"resourceType\": \"ObservationDefinition\"\n}"
  },
  "SpecimenDefinition/e95109ac-5ef9-1723-3506-2ef2f2e33d87": {
    "title": "SpecimenDefinition: e95109ac-5ef9-1723-3506-2ef2f2e33d87",
    "details": [
      {
        "k": "Resource Type",
        "v": "SpecimenDefinition"
      },
      {
        "k": "ID",
        "v": "e95109ac-5ef9-1723-3506-2ef2f2e33d87"
      },
      {
        "k": "Status",
        "v": "active"
      }
    ],
    "json": "{\n  \"id\": \"e95109ac-5ef9-1723-3506-2ef2f2e33d87\",\n  \"url\": \"http://example-server.com/fhir/SpecimenDefinition/e95109ac-5ef9-1723-3506-2ef2f2e33d87\",\n  \"status\": \"active\",\n  \"typeTested\": {\n    \"preference\": \"preferred\",\n    \"handling\": {\n      \"instruction\": \"40\\u00b0C/75% RH\"\n    }\n  },\n  \"resourceType\": \"SpecimenDefinition\"\n}"
  },
  "ActivityDefinition/096e3f32-798e-6792-76ad-4ea783521c50": {
    "title": "ActivityDefinition: 096e3f32-798e-6792-76ad-4ea783521c50",
    "details": [
      {
        "k": "Resource Type",
        "v": "ActivityDefinition"
      },
      {
        "k": "ID",
        "v": "096e3f32-798e-6792-76ad-4ea783521c50"
      },
      {
        "k": "Status",
        "v": "active"
      }
    ],
    "json": "{\n  \"id\": \"096e3f32-798e-6792-76ad-4ea783521c50\",\n  \"meta\": {\n    \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/ActivityDefinition-test-drug-pq\"\n  },\n  \"url\": \"http://example-server.com/fhir/ActivityDefinition/096e3f32-798e-6792-76ad-4ea783521c50\",\n  \"title\": \"Accelerated - 40\\u00b0C/70% RH - X\",\n  \"status\": \"active\",\n  \"observationRequirement\": \"http://example-server.com/fhir/ObservationDefinition/792ae02e-5ba3-13d1-8cc2-fd24a22f7f0b\",\n  \"resourceType\": \"ActivityDefinition\"\n}"
  },
  "ActivityDefinition/77f86b13-8193-3df7-8362-ab5e79ba541d": {
    "title": "ActivityDefinition: 77f86b13-8193-3df7-8362-ab5e79ba541d",
    "details": [
      {
        "k": "Resource Type",
        "v": "ActivityDefinition"
      },
      {
        "k": "ID",
        "v": "77f86b13-8193-3df7-8362-ab5e79ba541d"
      },
      {
        "k": "Status",
        "v": "active"
      }
    ],
    "json": "{\n  \"id\": \"77f86b13-8193-3df7-8362-ab5e79ba541d\",\n  \"meta\": {\n    \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/ActivityDefinition-test-drug-pq\"\n  },\n  \"url\": \"http://example-server.com/fhir/ActivityDefinition/77f86b13-8193-3df7-8362-ab5e79ba541d\",\n  \"title\": \"Accelerated - 40\\u00b0C/70% RH - X\",\n  \"status\": \"active\",\n  \"observationRequirement\": \"http://example-server.com/fhir/ObservationDefinition/792ae02e-5ba3-13d1-8cc2-fd24a22f7f0b\",\n  \"resourceType\": \"ActivityDefinition\"\n}"
  },
  "ActivityDefinition/6b96124b-1a44-0b6b-6783-d6c49360230b": {
    "title": "ActivityDefinition: 6b96124b-1a44-0b6b-6783-d6c49360230b",
    "details": [
      {
        "k": "Resource Type",
        "v": "ActivityDefinition"
      },
      {
        "k": "ID",
        "v": "6b96124b-1a44-0b6b-6783-d6c49360230b"
      },
      {
        "k": "Status",
        "v": "active"
      }
    ],
    "json": "{\n  \"id\": \"6b96124b-1a44-0b6b-6783-d6c49360230b\",\n  \"meta\": {\n    \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/ActivityDefinition-test-drug-pq\"\n  },\n  \"url\": \"http://example-server.com/fhir/ActivityDefinition/6b96124b-1a44-0b6b-6783-d6c49360230b\",\n  \"title\": \"Accelerated - 40\\u00b0C/70% RH - XYZ\",\n  \"status\": \"active\",\n  \"observationRequirement\": [\n    \"http://example-server.com/fhir/ObservationDefinition/792ae02e-5ba3-13d1-8cc2-fd24a22f7f0b\",\n    \"http://example-server.com/fhir/ObservationDefinition/58cb0710-0ee6-1b7a-2a64-61a01df95ac2\",\n    \"http://example-server.com/fhir/ObservationDefinition/9bc183ee-6017-789b-8a6f-6a5c339f9ae0\"\n  ],\n  \"resourceType\": \"ActivityDefinition\"\n}"
  },
  "ObservationDefinition/792ae02e-5ba3-13d1-8cc2-fd24a22f7f0b": {
    "title": "ObservationDefinition: 792ae02e-5ba3-13d1-8cc2-fd24a22f7f0b",
    "details": [
      {
        "k": "Resource Type",
        "v": "ObservationDefinition"
      },
      {
        "k": "ID",
        "v": "792ae02e-5ba3-13d1-8cc2-fd24a22f7f0b"
      },
      {
        "k": "Status",
        "v": "active"
      },
      {
        "k": "Code",
        "v": "Battery of tests 'X' at 40\u00b0C/75% RH"
      }
    ],
    "json": "{\n  \"id\": \"792ae02e-5ba3-13d1-8cc2-fd24a22f7f0b\",\n  \"meta\": {\n    \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/ObservationDefinition-test-method-drug-pq\"\n  },\n  \"url\": \"http://example-server.com/fhir/ObservationDefinition/792ae02e-5ba3-13d1-8cc2-fd24a22f7f0b\",\n  \"title\": \"X\",\n  \"status\": \"active\",\n  \"code\": {\n    \"text\": \"Battery of tests 'X' at 40\\u00b0C/75% RH\"\n  },\n  \"specimen\": {\n    \"reference\": \"SpecimenDefinition/e95109ac-5ef9-1723-3506-2ef2f2e33d87\"\n  },\n  \"hasMember\": [\n    {\n      \"reference\": \"ObservationDefinition/1178fc31-0cfd-8c60-0b5b-9ae2850c6774\"\n    },\n    {\n      \"reference\": \"ObservationDefinition/186eb33e-a01d-4252-166c-b5ba5e8a697c\"\n    }\n  ],\n  \"resourceType\": \"ObservationDefinition\"\n}"
  },
  "ObservationDefinition/58cb0710-0ee6-1b7a-2a64-61a01df95ac2": {
    "title": "ObservationDefinition: 58cb0710-0ee6-1b7a-2a64-61a01df95ac2",
    "details": [
      {
        "k": "Resource Type",
        "v": "ObservationDefinition"
      },
      {
        "k": "ID",
        "v": "58cb0710-0ee6-1b7a-2a64-61a01df95ac2"
      },
      {
        "k": "Status",
        "v": "active"
      },
      {
        "k": "Code",
        "v": "Battery of tests 'Y' at 40\u00b0C/75% RH"
      }
    ],
    "json": "{\n  \"id\": \"58cb0710-0ee6-1b7a-2a64-61a01df95ac2\",\n  \"meta\": {\n    \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/ObservationDefinition-test-method-drug-pq\"\n  },\n  \"url\": \"http://example-server.com/fhir/ObservationDefinition/58cb0710-0ee6-1b7a-2a64-61a01df95ac2\",\n  \"title\": \"Y\",\n  \"status\": \"active\",\n  \"code\": {\n    \"text\": \"Battery of tests 'Y' at 40\\u00b0C/75% RH\"\n  },\n  \"specimen\": {\n    \"reference\": \"SpecimenDefinition/e95109ac-5ef9-1723-3506-2ef2f2e33d87\"\n  },\n  \"hasMember\": {\n    \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n  },\n  \"resourceType\": \"ObservationDefinition\"\n}"
  },
  "ObservationDefinition/9bc183ee-6017-789b-8a6f-6a5c339f9ae0": {
    "title": "ObservationDefinition: 9bc183ee-6017-789b-8a6f-6a5c339f9ae0",
    "details": [
      {
        "k": "Resource Type",
        "v": "ObservationDefinition"
      },
      {
        "k": "ID",
        "v": "9bc183ee-6017-789b-8a6f-6a5c339f9ae0"
      },
      {
        "k": "Status",
        "v": "active"
      },
      {
        "k": "Code",
        "v": "Battery of tests 'Z' at 25\u00b0C/60% RH"
      }
    ],
    "json": "{\n  \"id\": \"9bc183ee-6017-789b-8a6f-6a5c339f9ae0\",\n  \"meta\": {\n    \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/ObservationDefinition-test-method-drug-pq\"\n  },\n  \"url\": \"http://example-server.com/fhir/ObservationDefinition/9bc183ee-6017-789b-8a6f-6a5c339f9ae0\",\n  \"title\": \"Z\",\n  \"status\": \"active\",\n  \"code\": {\n    \"text\": \"Battery of tests 'Z' at 25\\u00b0C/60% RH\"\n  },\n  \"specimen\": {\n    \"reference\": \"SpecimenDefinition/e95109ac-5ef9-1723-3506-2ef2f2e33d87\"\n  },\n  \"hasMember\": {\n    \"reference\": \"ObservationDefinition/ef781c18-8e86-7859-209b-469ee9ad42d8\"\n  },\n  \"resourceType\": \"ObservationDefinition\"\n}"
  },
  "Specimen/b664977d-799d-a1ce-928a-5def2a9955bd": {
    "title": "Specimen: b664977d-799d-a1ce-928a-5def2a9955bd",
    "details": [
      {
        "k": "Resource Type",
        "v": "Specimen"
      },
      {
        "k": "ID",
        "v": "b664977d-799d-a1ce-928a-5def2a9955bd"
      }
    ],
    "json": "{\n  \"id\": \"b664977d-799d-a1ce-928a-5def2a9955bd\",\n  \"meta\": {\n    \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Specimen-drug-pq\"\n  },\n  \"collection\": {\n    \"collectedDateTime\": \"2020-12-01\"\n  },\n  \"processing\": [\n    {\n      \"description\": \"No storage\"\n    },\n    {\n      \"description\": \"25\\u00b0C/60% RH\"\n    }\n  ],\n  \"resourceType\": \"Specimen\"\n}"
  },
  "Specimen/b664977d-799d-a1ce-928a-5def2a9955be": {
    "title": "Specimen: b664977d-799d-a1ce-928a-5def2a9955be",
    "details": [
      {
        "k": "Resource Type",
        "v": "Specimen"
      },
      {
        "k": "ID",
        "v": "b664977d-799d-a1ce-928a-5def2a9955be"
      }
    ],
    "json": "{\n  \"id\": \"b664977d-799d-a1ce-928a-5def2a9955be\",\n  \"meta\": {\n    \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Specimen-drug-pq\"\n  },\n  \"collection\": {\n    \"collectedDateTime\": \"2020-12-02\"\n  },\n  \"processing\": [\n    {\n      \"description\": \"No storage\"\n    },\n    {\n      \"description\": \"25\\u00b0C/60% RH\"\n    }\n  ],\n  \"resourceType\": \"Specimen\"\n}"
  },
  "Specimen/b664977d-799d-a1ce-928b-5def2a9955be": {
    "title": "Specimen: b664977d-799d-a1ce-928b-5def2a9955be",
    "details": [
      {
        "k": "Resource Type",
        "v": "Specimen"
      },
      {
        "k": "ID",
        "v": "b664977d-799d-a1ce-928b-5def2a9955be"
      }
    ],
    "json": "{\n  \"id\": \"b664977d-799d-a1ce-928b-5def2a9955be\",\n  \"meta\": {\n    \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Specimen-drug-pq\"\n  },\n  \"collection\": {\n    \"collectedDateTime\": \"2020-12-03\"\n  },\n  \"processing\": [\n    {\n      \"description\": \"No storage\"\n    },\n    {\n      \"description\": \"25\\u00b0C/60% RH\"\n    }\n  ],\n  \"resourceType\": \"Specimen\"\n}"
  },
  "Observation/6fabbf78-9678-8030-485f-b149956308d5": {
    "title": "Observation: 6fabbf78-9678-8030-485f-b149956308d5",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "6fabbf78-9678-8030-485f-b149956308d5"
      },
      {
        "k": "Status",
        "v": "final"
      },
      {
        "k": "Code",
        "v": "Test Components - Long-term 25C etc - Initial (XYZ)"
      }
    ],
    "json": "{\n  \"id\": \"6fabbf78-9678-8030-485f-b149956308d5\",\n  \"meta\": {\n    \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Observation-test-result-drug-pq\"\n  },\n  \"contained\": [\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm25C-initial-1-Description\",\n        \"meta\": {\n          \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Observation-test-result-drug-pq\"\n        },\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/1178fc31-0cfd-8c60-0b5b-9ae2850c6774\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"DESC\",\n            \"display\": \"Description\"\n          },\n          \"text\": \"Description\"\n        },\n        \"subject\": {\n          \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n        },\n        \"valueCodeableConcept\": {\n          \"text\": \"Complies\"\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"observation-test-result-lt25c-i1-degradation-imp1\",\n        \"meta\": {\n          \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Observation-test-result-drug-pq\"\n        },\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/2c5683d6-6e94-825b-056a-129a04c95e2f\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"DGP\",\n            \"display\": \"Degradation Products\"\n          },\n          \"text\": \"Degradation Products\"\n        },\n        \"subject\": {\n          \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.101\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        },\n        \"component\": {\n          \"code\": {\n            \"coding\": {\n              \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n              \"code\": \"IMP\",\n              \"display\": \"Impurity\"\n            }\n          },\n          \"valueCodeableConcept\": {\n            \"text\": \"Impurity 1\"\n          }\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm25C-initial-1-Degradation-imp2\",\n        \"meta\": {\n          \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Observation-test-result-drug-pq\"\n        },\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/2c5683d6-6e94-825b-056a-129a04c95e2f\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"DGP\",\n            \"display\": \"Degradation Products\"\n          },\n          \"text\": \"Degradation Products\"\n        },\n        \"subject\": {\n          \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.201\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        },\n        \"component\": {\n          \"code\": {\n            \"coding\": {\n              \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n              \"code\": \"IMP\",\n              \"display\": \"Impurity\"\n            }\n          },\n          \"valueCodeableConcept\": {\n            \"text\": \"Impurity 2\"\n          }\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm25C-initial-1-Degradation-imp3\",\n        \"meta\": {\n          \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Observation-test-result-drug-pq\"\n        },\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/2c5683d6-6e94-825b-056a-129a04c95e2f\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"DGP\",\n            \"display\": \"Degradation Products\"\n          },\n          \"text\": \"Degradation Products\"\n        },\n        \"subject\": {\n          \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.201\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        },\n        \"component\": {\n          \"code\": {\n            \"coding\": {\n              \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n              \"code\": \"IMP\",\n              \"display\": \"Impurity\"\n            }\n          },\n          \"valueCodeableConcept\": {\n            \"text\": \"Impurity 3\"\n          }\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm25C-initial-1-Degradation-impUnspecified\",\n        \"meta\": {\n          \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Observation-test-result-drug-pq\"\n        },\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/2c5683d6-6e94-825b-056a-129a04c95e2f\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"DGP\",\n            \"display\": \"Degradation Products\"\n          },\n          \"text\": \"Degradation Products\"\n        },\n        \"subject\": {\n          \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.101\",\n          \"comparator\": \"<\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        },\n        \"component\": {\n          \"code\": {\n            \"coding\": {\n              \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n              \"code\": \"IMP\",\n              \"display\": \"Impurity\"\n            }\n          },\n          \"valueCodeableConcept\": {\n            \"text\": \"Any Unspecified Degradation Impurity\"\n          }\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm25C-initial-1-Degradation-impTotal\",\n        \"meta\": {\n          \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Observation-test-result-drug-pq\"\n        },\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/2c5683d6-6e94-825b-056a-129a04c95e2f\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"DGP\",\n            \"display\": \"Degradation Products\"\n          },\n          \"text\": \"Degradation Products\"\n        },\n        \"subject\": {\n          \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.801\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        },\n        \"component\": {\n          \"code\": {\n            \"coding\": {\n              \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n              \"code\": \"IMP\",\n              \"display\": \"Impurity\"\n            }\n          },\n          \"valueCodeableConcept\": {\n            \"text\": \"Total Degradation Impurities\"\n          }\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm25C-initial-1-Water\",\n        \"meta\": {\n          \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Observation-test-result-drug-pq\"\n        },\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/186eb33e-a01d-4252-166c-b5ba5e8a697c\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"WaterContent\",\n            \"display\": \"Water Content\"\n          }\n        },\n        \"subject\": {\n          \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.1501\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm25C-initial-1-Microbiological\",\n        \"meta\": {\n          \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Observation-test-result-drug-pq\"\n        },\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"Microbiological Quality\",\n            \"display\": \"Microbiological Quality\"\n          }\n        },\n        \"subject\": {\n          \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n        },\n        \"valueCodeableConcept\": {\n          \"text\": \"Complies\"\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm25C-initial-1-Uniformity\",\n        \"meta\": {\n          \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Observation-test-result-drug-pq\"\n        },\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/ef781c18-8e86-7859-209b-469ee9ad42d8\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"uniformity-dosage\",\n            \"display\": \"Uniformity of dosage units (by weight)\"\n          }\n        },\n        \"subject\": {\n          \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n        },\n        \"valueCodeableConcept\": {\n          \"text\": \"Complies\"\n        }\n      }\n    }\n  ],\n  \"extension\": {\n    \"valueReference\": {\n      \"reference\": \"ActivityDefinition/4bfe1ee8-91ed-5c1b-3045-c749bb9d1d90\"\n    }\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"text\": \"Test Components - Long-term 25C etc - Initial (XYZ)\"\n  },\n  \"subject\": {\n    \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n  },\n  \"specimen\": {\n    \"reference\": \"Specimen/b664977d-799d-a1ce-928a-5def2a9955bd\"\n  },\n  \"hasMember\": [\n    {\n      \"reference\": \"#LongTerm25C-initial-1-Description\"\n    },\n    {\n      \"reference\": \"#observation-test-result-lt25c-i1-degradation-imp1\"\n    },\n    {\n      \"reference\": \"#LongTerm25C-initial-1-Degradation-imp2\"\n    },\n    {\n      \"reference\": \"#LongTerm25C-initial-1-Degradation-imp3\"\n    },\n    {\n      \"reference\": \"#LongTerm25C-initial-1-Degradation-impUnspecified\"\n    },\n    {\n      \"reference\": \"#LongTerm25C-initial-1-Degradation-impTotal\"\n    },\n    {\n      \"reference\": \"#LongTerm25C-initial-1-Water\"\n    },\n    {\n      \"reference\": \"#LongTerm25C-initial-1-Microbiological\"\n    },\n    {\n      \"reference\": \"#LongTerm25C-initial-1-Uniformity\"\n    }\n  ],\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/74535cc6-5232-5ab5-81cf-167a480795e5": {
    "title": "Observation: 74535cc6-5232-5ab5-81cf-167a480795e5",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "74535cc6-5232-5ab5-81cf-167a480795e5"
      },
      {
        "k": "Status",
        "v": "final"
      },
      {
        "k": "Code",
        "v": "Test Components - Long-term 25C etc - Initial (XYZ)"
      }
    ],
    "json": "{\n  \"id\": \"74535cc6-5232-5ab5-81cf-167a480795e5\",\n  \"contained\": [\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm25C-initial-2-Description\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/1178fc31-0cfd-8c60-0b5b-9ae2850c6774\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"DESC\",\n            \"display\": \"Description\"\n          },\n          \"text\": \"Description\"\n        },\n        \"subject\": {\n          \"reference\": \"Medication/8306cfc5-158f-1a53-a683-048b226060d9\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n        },\n        \"valueCodeableConcept\": {\n          \"text\": \"Complies\"\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm25C-initial-2-Degradation\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/2c5683d6-6e94-825b-056a-129a04c95e2f\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"DGP\",\n            \"display\": \"Degradation Products\"\n          },\n          \"text\": \"Degradation Products\"\n        },\n        \"subject\": {\n          \"reference\": \"Medication/8306cfc5-158f-1a53-a683-048b226060d9\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.1\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm25C-initial-2-Microbiological\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"Microbiological Quality\",\n            \"display\": \"Microbiological Quality\"\n          }\n        },\n        \"subject\": {\n          \"reference\": \"Medication/8306cfc5-158f-1a53-a683-048b226060d9\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n        },\n        \"valueString\": \"Complies\"\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm25C-initial-2-Uniformity\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/ef781c18-8e86-7859-209b-469ee9ad42d8\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"uniformity-dosage\",\n            \"display\": \"Uniformity of dosage units (by weight)\"\n          }\n        },\n        \"subject\": {\n          \"reference\": \"Medication/8306cfc5-158f-1a53-a683-048b226060d9\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n        },\n        \"valueCodeableConcept\": {\n          \"text\": \"Complies\"\n        }\n      }\n    }\n  ],\n  \"extension\": {\n    \"valueReference\": {\n      \"reference\": \"ActivityDefinition/4bfe1ee8-91ed-5c1b-3045-c749bb9d1d90\"\n    }\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"text\": \"Test Components - Long-term 25C etc - Initial (XYZ)\"\n  },\n  \"subject\": {\n    \"reference\": \"Medication/8306cfc5-158f-1a53-a683-048b226060d9\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n  },\n  \"specimen\": {\n    \"reference\": \"Specimen/b664977d-799d-a1ce-928a-5def2a9955be\"\n  },\n  \"hasMember\": [\n    {\n      \"reference\": \"#LongTerm25C-initial-2-Description\"\n    },\n    {\n      \"reference\": \"#LongTerm25C-initial-2-Degradation\"\n    },\n    {\n      \"reference\": \"#LongTerm25C-initial-2-Microbiological\"\n    },\n    {\n      \"reference\": \"#LongTerm25C-initial-2-Uniformity\"\n    }\n  ],\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/8bf75da1-9221-66fe-6725-c64cb45a57e6": {
    "title": "Observation: 8bf75da1-9221-66fe-6725-c64cb45a57e6",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "8bf75da1-9221-66fe-6725-c64cb45a57e6"
      },
      {
        "k": "Status",
        "v": "final"
      },
      {
        "k": "Code",
        "v": "Test Components - Long-term 25C etc - Initial (XYZ)"
      }
    ],
    "json": "{\n  \"id\": \"8bf75da1-9221-66fe-6725-c64cb45a57e6\",\n  \"contained\": [\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm25C-initial-3-Description\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/1178fc31-0cfd-8c60-0b5b-9ae2850c6774\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"DESC\",\n            \"display\": \"Description\"\n          },\n          \"text\": \"Description\"\n        },\n        \"subject\": {\n          \"reference\": \"Medication/f54d4666-7ae3-4e30-8c5a-6d13838c4f3b\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n        },\n        \"valueCodeableConcept\": {\n          \"text\": \"Complies\"\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm25C-initial-3-Degradation\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/2c5683d6-6e94-825b-056a-129a04c95e2f\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"DGP\",\n            \"display\": \"Degradation Products\"\n          },\n          \"text\": \"Degradation Products\"\n        },\n        \"subject\": {\n          \"reference\": \"Medication/f54d4666-7ae3-4e30-8c5a-6d13838c4f3b\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.1\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm25C-initial-3-Microbiological\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"Microbiological Quality\",\n            \"display\": \"Microbiological Quality\"\n          }\n        },\n        \"subject\": {\n          \"reference\": \"Medication/f54d4666-7ae3-4e30-8c5a-6d13838c4f3b\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n        },\n        \"valueCodeableConcept\": {\n          \"text\": \"Complies\"\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm25C-initial-3-Uniformity\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/ef781c18-8e86-7859-209b-469ee9ad42d8\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"uniformity-dosage\",\n            \"display\": \"Uniformity of dosage units (by weight)\"\n          }\n        },\n        \"subject\": {\n          \"reference\": \"Medication/f54d4666-7ae3-4e30-8c5a-6d13838c4f3b\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n        },\n        \"valueCodeableConcept\": {\n          \"text\": \"Complies\"\n        }\n      }\n    }\n  ],\n  \"extension\": {\n    \"valueReference\": {\n      \"reference\": \"ActivityDefinition/4bfe1ee8-91ed-5c1b-3045-c749bb9d1d90\"\n    }\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"text\": \"Test Components - Long-term 25C etc - Initial (XYZ)\"\n  },\n  \"subject\": {\n    \"reference\": \"Medication/f54d4666-7ae3-4e30-8c5a-6d13838c4f3b\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n  },\n  \"specimen\": {\n    \"reference\": \"Specimen/b664977d-799d-a1ce-928b-5def2a9955be\"\n  },\n  \"hasMember\": [\n    {\n      \"reference\": \"#LongTerm25C-initial-3-Description\"\n    },\n    {\n      \"reference\": \"#LongTerm25C-initial-3-Degradation\"\n    },\n    {\n      \"reference\": \"#LongTerm25C-initial-3-Microbiological\"\n    },\n    {\n      \"reference\": \"#LongTerm25C-initial-3-Uniformity\"\n    }\n  ],\n  \"resourceType\": \"Observation\"\n}"
  },
  "Specimen/18826818-10c4-972c-618e-01694ff06c78": {
    "title": "Specimen: 18826818-10c4-972c-618e-01694ff06c78",
    "details": [
      {
        "k": "Resource Type",
        "v": "Specimen"
      },
      {
        "k": "ID",
        "v": "18826818-10c4-972c-618e-01694ff06c78"
      }
    ],
    "json": "{\n  \"id\": \"18826818-10c4-972c-618e-01694ff06c78\",\n  \"collection\": {\n    \"collectedDateTime\": \"2020-12-01\"\n  },\n  \"processing\": [\n    {\n      \"description\": \"Store for 18 months\",\n      \"timePeriod\": {\n        \"extension\": {\n          \"valueDuration\": {\n            \"value\": \"18\",\n            \"unit\": \"month\"\n          }\n        },\n        \"start\": \"2020-12\",\n        \"end\": \"2022-06\"\n      }\n    },\n    {\n      \"description\": \"25\\u00b0C/60% RH\"\n    }\n  ],\n  \"resourceType\": \"Specimen\"\n}"
  },
  "Specimen/18826818-10c4-972c-618e-01694ff06c88": {
    "title": "Specimen: 18826818-10c4-972c-618e-01694ff06c88",
    "details": [
      {
        "k": "Resource Type",
        "v": "Specimen"
      },
      {
        "k": "ID",
        "v": "18826818-10c4-972c-618e-01694ff06c88"
      }
    ],
    "json": "{\n  \"id\": \"18826818-10c4-972c-618e-01694ff06c88\",\n  \"collection\": {\n    \"collectedDateTime\": \"2020-12-02\"\n  },\n  \"processing\": [\n    {\n      \"description\": \"Store for 18 months\",\n      \"timePeriod\": {\n        \"extension\": {\n          \"valueDuration\": {\n            \"value\": \"18\",\n            \"unit\": \"month\"\n          }\n        },\n        \"start\": \"2020-12\",\n        \"end\": \"2022-06\"\n      }\n    },\n    {\n      \"description\": \"25\\u00b0C/60% RH\"\n    }\n  ],\n  \"resourceType\": \"Specimen\"\n}"
  },
  "Specimen/18826818-10c4-972c-618e-01694ff06c89": {
    "title": "Specimen: 18826818-10c4-972c-618e-01694ff06c89",
    "details": [
      {
        "k": "Resource Type",
        "v": "Specimen"
      },
      {
        "k": "ID",
        "v": "18826818-10c4-972c-618e-01694ff06c89"
      }
    ],
    "json": "{\n  \"id\": \"18826818-10c4-972c-618e-01694ff06c89\",\n  \"collection\": {\n    \"collectedDateTime\": \"2020-12-03\"\n  },\n  \"processing\": [\n    {\n      \"description\": \"Store for 18 months\",\n      \"timePeriod\": {\n        \"extension\": {\n          \"valueDuration\": {\n            \"value\": \"18\",\n            \"unit\": \"month\"\n          }\n        },\n        \"start\": \"2020-12\",\n        \"end\": \"2022-06\"\n      }\n    },\n    {\n      \"description\": \"25\\u00b0C/60% RH\"\n    }\n  ],\n  \"resourceType\": \"Specimen\"\n}"
  },
  "Observation/e803ad6d-0cb3-87dd-6af1-4b88c654a47c": {
    "title": "Observation: e803ad6d-0cb3-87dd-6af1-4b88c654a47c",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "e803ad6d-0cb3-87dd-6af1-4b88c654a47c"
      },
      {
        "k": "Status",
        "v": "final"
      },
      {
        "k": "Code",
        "v": "Test Components - Long-term 25C etc - 18 months (XY)"
      }
    ],
    "json": "{\n  \"id\": \"e803ad6d-0cb3-87dd-6af1-4b88c654a47c\",\n  \"contained\": [\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm25C-18m-1-Description\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/1178fc31-0cfd-8c60-0b5b-9ae2850c6774\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"DESC\",\n            \"display\": \"Description\"\n          },\n          \"text\": \"Description\"\n        },\n        \"subject\": {\n          \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n        },\n        \"valueCodeableConcept\": {\n          \"text\": \"Complies\"\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm25C-18m-1-Degradation-imp1\",\n        \"meta\": {\n          \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Observation-test-result-drug-pq\"\n        },\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/2c5683d6-6e94-825b-056a-129a04c95e2f\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"DGP\",\n            \"display\": \"Degradation Products\"\n          },\n          \"text\": \"Degradation Products\"\n        },\n        \"subject\": {\n          \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.118\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        },\n        \"component\": {\n          \"code\": {\n            \"coding\": {\n              \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n              \"code\": \"IMP\",\n              \"display\": \"Impurity\"\n            }\n          },\n          \"valueCodeableConcept\": {\n            \"text\": \"Impurity 1\"\n          }\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm25C-18m-1-Degradation-imp2\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/2c5683d6-6e94-825b-056a-129a04c95e2f\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"DGP\",\n            \"display\": \"Degradation Products\"\n          },\n          \"text\": \"Degradation Products\"\n        },\n        \"subject\": {\n          \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.218\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        },\n        \"component\": {\n          \"code\": {\n            \"coding\": {\n              \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n              \"code\": \"IMP\",\n              \"display\": \"Impurity\"\n            }\n          },\n          \"valueCodeableConcept\": {\n            \"text\": \"Impurity 2\"\n          }\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm25C-18m-1-Degradation-imp3\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/2c5683d6-6e94-825b-056a-129a04c95e2f\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"DGP\",\n            \"display\": \"Degradation Products\"\n          },\n          \"text\": \"Degradation Products\"\n        },\n        \"subject\": {\n          \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.218\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        },\n        \"component\": {\n          \"code\": {\n            \"coding\": {\n              \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n              \"code\": \"IMP\",\n              \"display\": \"Impurity\"\n            }\n          },\n          \"valueCodeableConcept\": {\n            \"text\": \"Impurity 3\"\n          }\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm25C-18m-1-Degradation-impUnspecified\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/2c5683d6-6e94-825b-056a-129a04c95e2f\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"DGP\",\n            \"display\": \"Degradation Products\"\n          },\n          \"text\": \"Degradation Products\"\n        },\n        \"subject\": {\n          \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.118\",\n          \"comparator\": \"<\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        },\n        \"component\": {\n          \"code\": {\n            \"coding\": {\n              \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n              \"code\": \"IMP\",\n              \"display\": \"Impurity\"\n            }\n          },\n          \"valueCodeableConcept\": {\n            \"text\": \"Any Unspecified Degradation Impurity\"\n          }\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm25C-18m-1-Degradation-impTotal\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/2c5683d6-6e94-825b-056a-129a04c95e2f\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"DGP\",\n            \"display\": \"Degradation Products\"\n          },\n          \"text\": \"Degradation Products\"\n        },\n        \"subject\": {\n          \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.818\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        },\n        \"component\": {\n          \"code\": {\n            \"coding\": {\n              \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n              \"code\": \"IMP\",\n              \"display\": \"Impurity\"\n            }\n          },\n          \"valueCodeableConcept\": {\n            \"text\": \"Total Degradation Impurities\"\n          }\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm25C-18m-1-Water\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/186eb33e-a01d-4252-166c-b5ba5e8a697c\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"WaterContent\",\n            \"display\": \"Water Content\"\n          }\n        },\n        \"subject\": {\n          \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.1518\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm25C-18m-1-Microbiological\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"Microbiological Quality\",\n            \"display\": \"Microbiological Quality\"\n          }\n        },\n        \"subject\": {\n          \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n        },\n        \"valueString\": \"Complies\"\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm25C-18m-1-Uniformity\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/ef781c18-8e86-7859-209b-469ee9ad42d8\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"uniformity-dosage\",\n            \"display\": \"Uniformity of dosage units (by weight)\"\n          }\n        },\n        \"subject\": {\n          \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n        },\n        \"valueCodeableConcept\": {\n          \"text\": \"Complies\"\n        }\n      }\n    }\n  ],\n  \"extension\": {\n    \"valueReference\": {\n      \"reference\": \"ActivityDefinition/ce2df6ab-5087-435c-35cb-a84572e756a2\"\n    }\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"text\": \"Test Components - Long-term 25C etc - 18 months (XY)\"\n  },\n  \"subject\": {\n    \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n  },\n  \"specimen\": {\n    \"reference\": \"Specimen/18826818-10c4-972c-618e-01694ff06c78\"\n  },\n  \"hasMember\": [\n    {\n      \"reference\": \"#LongTerm25C-18m-1-Description\"\n    },\n    {\n      \"reference\": \"#LongTerm25C-18m-1-Degradation-imp1\"\n    },\n    {\n      \"reference\": \"#LongTerm25C-18m-1-Degradation-imp2\"\n    },\n    {\n      \"reference\": \"#LongTerm25C-18m-1-Degradation-imp3\"\n    },\n    {\n      \"reference\": \"#LongTerm25C-18m-1-Degradation-impUnspecified\"\n    },\n    {\n      \"reference\": \"#LongTerm25C-18m-1-Degradation-impTotal\"\n    },\n    {\n      \"reference\": \"#LongTerm25C-18m-1-Water\"\n    },\n    {\n      \"reference\": \"#LongTerm25C-18m-1-Microbiological\"\n    },\n    {\n      \"reference\": \"#LongTerm25C-18m-1-Uniformity\"\n    }\n  ],\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/3519f84a-2889-90a0-a6b7-ff2f1be66a73": {
    "title": "Observation: 3519f84a-2889-90a0-a6b7-ff2f1be66a73",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "3519f84a-2889-90a0-a6b7-ff2f1be66a73"
      },
      {
        "k": "Status",
        "v": "final"
      },
      {
        "k": "Code",
        "v": "Test Components - Long-term 25C etc - 18 months (XY)"
      }
    ],
    "json": "{\n  \"id\": \"3519f84a-2889-90a0-a6b7-ff2f1be66a73\",\n  \"contained\": [\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm25C-18m-2-Description\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/1178fc31-0cfd-8c60-0b5b-9ae2850c6774\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"DESC\",\n            \"display\": \"Description\"\n          },\n          \"text\": \"Description\"\n        },\n        \"subject\": {\n          \"reference\": \"Medication/8306cfc5-158f-1a53-a683-048b226060d9\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n        },\n        \"valueCodeableConcept\": {\n          \"text\": \"Complies\"\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm25C-18m-2-Microbiological\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"Microbiological Quality\",\n            \"display\": \"Microbiological Quality\"\n          }\n        },\n        \"subject\": {\n          \"reference\": \"Medication/8306cfc5-158f-1a53-a683-048b226060d9\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n        },\n        \"valueString\": \"Does not comply\"\n      }\n    }\n  ],\n  \"extension\": {\n    \"valueReference\": {\n      \"reference\": \"ActivityDefinition/ce2df6ab-5087-435c-35cb-a84572e756a2\"\n    }\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"text\": \"Test Components - Long-term 25C etc - 18 months (XY)\"\n  },\n  \"subject\": {\n    \"reference\": \"Medication/8306cfc5-158f-1a53-a683-048b226060d9\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n  },\n  \"specimen\": {\n    \"reference\": \"Specimen/18826818-10c4-972c-618e-01694ff06c88\"\n  },\n  \"hasMember\": [\n    {\n      \"reference\": \"#LongTerm25C-18m-2-Description\"\n    },\n    {\n      \"reference\": \"#LongTerm25C-18m-2-Microbiological\"\n    }\n  ],\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/2ef362f1-0b65-3578-7f06-fbd74a24694a": {
    "title": "Observation: 2ef362f1-0b65-3578-7f06-fbd74a24694a",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "2ef362f1-0b65-3578-7f06-fbd74a24694a"
      },
      {
        "k": "Status",
        "v": "final"
      },
      {
        "k": "Code",
        "v": "Test Components - Long-term 25C etc - 18 months (XY)"
      }
    ],
    "json": "{\n  \"id\": \"2ef362f1-0b65-3578-7f06-fbd74a24694a\",\n  \"contained\": [\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm25C-18m-3-Description\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/1178fc31-0cfd-8c60-0b5b-9ae2850c6774\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"DESC\",\n            \"display\": \"Description\"\n          },\n          \"text\": \"Description\"\n        },\n        \"subject\": {\n          \"reference\": \"Medication/f54d4666-7ae3-4e30-8c5a-6d13838c4f3b\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n        },\n        \"valueCodeableConcept\": {\n          \"text\": \"Complies\"\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm25C-18m-3-Microbiological\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"Microbiological Quality\",\n            \"display\": \"Microbiological Quality\"\n          }\n        },\n        \"subject\": {\n          \"reference\": \"Medication/f54d4666-7ae3-4e30-8c5a-6d13838c4f3b\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n        },\n        \"valueString\": \"Does not comply\"\n      }\n    }\n  ],\n  \"extension\": {\n    \"valueReference\": {\n      \"reference\": \"ActivityDefinition/ce2df6ab-5087-435c-35cb-a84572e756a2\"\n    }\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"text\": \"Test Components - Long-term 25C etc - 18 months (XY)\"\n  },\n  \"subject\": {\n    \"reference\": \"Medication/f54d4666-7ae3-4e30-8c5a-6d13838c4f3b\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n  },\n  \"specimen\": {\n    \"reference\": \"Specimen/18826818-10c4-972c-618e-01694ff06c89\"\n  },\n  \"hasMember\": [\n    {\n      \"reference\": \"#LongTerm25C-18m-3-Description\"\n    },\n    {\n      \"reference\": \"#LongTerm25C-18m-3-Microbiological\"\n    }\n  ],\n  \"resourceType\": \"Observation\"\n}"
  },
  "Specimen/8a7771db-5cc0-33f8-966a-b2f792bf5785": {
    "title": "Specimen: 8a7771db-5cc0-33f8-966a-b2f792bf5785",
    "details": [
      {
        "k": "Resource Type",
        "v": "Specimen"
      },
      {
        "k": "ID",
        "v": "8a7771db-5cc0-33f8-966a-b2f792bf5785"
      }
    ],
    "json": "{\n  \"id\": \"8a7771db-5cc0-33f8-966a-b2f792bf5785\",\n  \"collection\": {\n    \"collectedDateTime\": \"2020-12-01\"\n  },\n  \"processing\": [\n    {\n      \"description\": \"Store for 3 months\",\n      \"timePeriod\": {\n        \"extension\": {\n          \"valueDuration\": {\n            \"value\": \"18\",\n            \"unit\": \"month\"\n          }\n        },\n        \"start\": \"2020-12\",\n        \"end\": \"2021-03\"\n      }\n    },\n    {\n      \"description\": \"40\\u00b0C/75% RH\"\n    }\n  ],\n  \"resourceType\": \"Specimen\"\n}"
  },
  "Observation/72e0640b-094b-909e-5268-3dee92af4bbd": {
    "title": "Observation: 72e0640b-094b-909e-5268-3dee92af4bbd",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "72e0640b-094b-909e-5268-3dee92af4bbd"
      },
      {
        "k": "Status",
        "v": "final"
      },
      {
        "k": "Code",
        "v": "Test Components - Accelerated 40C etc - 3 Months (X)"
      }
    ],
    "json": "{\n  \"id\": \"72e0640b-094b-909e-5268-3dee92af4bbd\",\n  \"contained\": [\n    {\n      \"Observation\": {\n        \"id\": \"Accelerated40C-3-1-Description\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/1178fc31-0cfd-8c60-0b5b-9ae2850c6774\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"DESC\",\n            \"display\": \"Description\"\n          },\n          \"text\": \"Description\"\n        },\n        \"subject\": {\n          \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n        },\n        \"valueCodeableConcept\": {\n          \"text\": \"Complies\"\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"Accelerated40C-3-1-Degradation-imp1\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/2c5683d6-6e94-825b-056a-129a04c95e2f\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"DGP\",\n            \"display\": \"Degradation Products\"\n          },\n          \"text\": \"Degradation Products\"\n        },\n        \"subject\": {\n          \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.143\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        },\n        \"component\": {\n          \"code\": {\n            \"coding\": {\n              \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n              \"code\": \"IMP\",\n              \"display\": \"Impurity\"\n            }\n          },\n          \"valueCodeableConcept\": {\n            \"text\": \"Impurity 1\"\n          }\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"Accelerated40C-3-1-Degradation-imp2\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/2c5683d6-6e94-825b-056a-129a04c95e2f\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"DGP\",\n            \"display\": \"Degradation Products\"\n          },\n          \"text\": \"Degradation Products\"\n        },\n        \"subject\": {\n          \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.243\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        },\n        \"component\": {\n          \"code\": {\n            \"coding\": {\n              \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n              \"code\": \"IMP\",\n              \"display\": \"Impurity\"\n            }\n          },\n          \"valueCodeableConcept\": {\n            \"text\": \"Impurity 2\"\n          }\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"Accelerated40C-3-1-Degradation-imp3\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/2c5683d6-6e94-825b-056a-129a04c95e2f\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"DGP\",\n            \"display\": \"Degradation Products\"\n          },\n          \"text\": \"Degradation Products\"\n        },\n        \"subject\": {\n          \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.201\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        },\n        \"component\": {\n          \"code\": {\n            \"coding\": {\n              \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n              \"code\": \"IMP\",\n              \"display\": \"Impurity\"\n            }\n          },\n          \"valueCodeableConcept\": {\n            \"text\": \"Impurity 3\"\n          }\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"Accelerated40C-3-1-Degradation-impUnspecified\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/2c5683d6-6e94-825b-056a-129a04c95e2f\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"DGP\",\n            \"display\": \"Degradation Products\"\n          },\n          \"text\": \"Degradation Products\"\n        },\n        \"subject\": {\n          \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.101\",\n          \"comparator\": \"<\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        },\n        \"component\": {\n          \"code\": {\n            \"coding\": {\n              \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n              \"code\": \"IMP\",\n              \"display\": \"Impurity\"\n            }\n          },\n          \"valueCodeableConcept\": {\n            \"text\": \"Any Unspecified Degradation Impurity\"\n          }\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"Accelerated40C-3-1-Degradation-impTotal\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/2c5683d6-6e94-825b-056a-129a04c95e2f\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"DGP\",\n            \"display\": \"Degradation Products\"\n          },\n          \"text\": \"Degradation Products\"\n        },\n        \"subject\": {\n          \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.801\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        },\n        \"component\": {\n          \"code\": {\n            \"coding\": {\n              \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n              \"code\": \"IMP\",\n              \"display\": \"Impurity\"\n            }\n          },\n          \"valueCodeableConcept\": {\n            \"text\": \"Total Degradation Impurities\"\n          }\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"Accelerated40C-3-1-Water\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/186eb33e-a01d-4252-166c-b5ba5e8a697c\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"WaterContent\",\n            \"display\": \"Water Content\"\n          }\n        },\n        \"subject\": {\n          \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.1501\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"Accelerated40C-3-1-Microbiological\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"Microbiological Quality\",\n            \"display\": \"Microbiological Quality\"\n          }\n        },\n        \"subject\": {\n          \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n        },\n        \"valueCodeableConcept\": {\n          \"text\": \"Complies\"\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"Accelerated40C-3-1-Uniformity\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/ef781c18-8e86-7859-209b-469ee9ad42d8\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"uniformity-dosage\",\n            \"display\": \"Uniformity of dosage units (by weight)\"\n          }\n        },\n        \"subject\": {\n          \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n        },\n        \"valueCodeableConcept\": {\n          \"text\": \"Complies\"\n        }\n      }\n    }\n  ],\n  \"extension\": {\n    \"valueReference\": {\n      \"reference\": \"ActivityDefinition/096e3f32-798e-6792-76ad-4ea783521c50\"\n    }\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"text\": \"Test Components - Accelerated 40C etc - 3 Months (X)\"\n  },\n  \"subject\": {\n    \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n  },\n  \"specimen\": {\n    \"reference\": \"Specimen/8a7771db-5cc0-33f8-966a-b2f792bf5785\"\n  },\n  \"hasMember\": [\n    {\n      \"reference\": \"#Accelerated40C-3-1-Description\"\n    },\n    {\n      \"reference\": \"#Accelerated40C-3-1-Degradation-imp1\"\n    },\n    {\n      \"reference\": \"#Accelerated40C-3-1-Degradation-imp2\"\n    },\n    {\n      \"reference\": \"#Accelerated40C-3-1-Degradation-imp3\"\n    },\n    {\n      \"reference\": \"#Accelerated40C-3-1-Degradation-impUnspecified\"\n    },\n    {\n      \"reference\": \"#Accelerated40C-3-1-Degradation-impTotal\"\n    },\n    {\n      \"reference\": \"#Accelerated40C-3-1-Water\"\n    },\n    {\n      \"reference\": \"#Accelerated40C-3-1-Microbiological\"\n    },\n    {\n      \"reference\": \"#Accelerated40C-3-1-Uniformity\"\n    }\n  ],\n  \"resourceType\": \"Observation\"\n}"
  },
  "Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c": {
    "title": "Medication: 7ef62d57-7cc6-9211-66d6-abc7e096093c",
    "details": [
      {
        "k": "Resource Type",
        "v": "Medication"
      },
      {
        "k": "ID",
        "v": "7ef62d57-7cc6-9211-66d6-abc7e096093c"
      }
    ],
    "json": "{\n  \"id\": \"7ef62d57-7cc6-9211-66d6-abc7e096093c\",\n  \"meta\": {\n    \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Medication-batch-information-drug-pq\"\n  },\n  \"code\": {\n    \"extension\": {\n      \"valueReference\": {\n        \"reference\": \"MedicinalProductDefinition/a0694a7a-aafa-4cbe-8135-c788a9a4d3d5\"\n      }\n    }\n  },\n  \"batch\": {\n    \"extension\": [\n      {\n        \"extension\": [\n          {\n            \"valueDateTime\": \"2020-06\"\n          },\n          {\n            \"valueQuantity\": {\n              \"value\": \"100100\",\n              \"unit\": \"tablets\"\n            }\n          },\n          {\n            \"valueCodeableConcept\": {\n              \"coding\": {\n                \"system\": \"http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl\",\n                \"code\": \"C133990\",\n                \"display\": \"Commercial\"\n              },\n              \"text\": \"Production\"\n            }\n          },\n          {\n            \"valueReference\": {\n              \"reference\": \"Organization/49d2f0c0-4b28-9271-8aaf-2996a8b9739c\"\n            }\n          },\n          {\n            \"extension\": [\n              {\n                \"valueCodeableConcept\": {\n                  \"text\": \"100 cc HDPE Bottle 2 g desiccant\"\n                }\n              },\n              {\n                \"valueString\": \"Standard closure\"\n              }\n            ]\n          }\n        ]\n      },\n      {\n        \"valueDateTime\": \"2019-09-08\"\n      },\n      {\n        \"valueReference\": {\n          \"reference\": \"Substance/fc078762-81c5-5656-9744-13c7ad1e595b\"\n        }\n      },\n      {\n        \"valueDateTime\": \"2020-08\"\n      },\n      {\n        \"valueReference\": {\n          \"reference\": \"Organization/2dd49242-4bf1-9ec1-5f1e-22ba8d4d5ccc\"\n        }\n      },\n      {\n        \"valueQuantity\": {\n          \"value\": \"4.8\",\n          \"unit\": \"kg\"\n        }\n      }\n    ],\n    \"lotNumber\": \"33445\"\n  },\n  \"resourceType\": \"Medication\"\n}"
  },
  "Medication/8306cfc5-158f-1a53-a683-048b226060d9": {
    "title": "Medication: 8306cfc5-158f-1a53-a683-048b226060d9",
    "details": [
      {
        "k": "Resource Type",
        "v": "Medication"
      },
      {
        "k": "ID",
        "v": "8306cfc5-158f-1a53-a683-048b226060d9"
      }
    ],
    "json": "{\n  \"id\": \"8306cfc5-158f-1a53-a683-048b226060d9\",\n  \"code\": {\n    \"extension\": {\n      \"valueReference\": {\n        \"reference\": \"MedicinalProductDefinition/a0694a7a-aafa-4cbe-8135-c788a9a4d3d5\"\n      }\n    }\n  },\n  \"batch\": {\n    \"extension\": [\n      {\n        \"extension\": [\n          {\n            \"valueDateTime\": \"2020-06\"\n          },\n          {\n            \"valueQuantity\": {\n              \"value\": \"100050\",\n              \"unit\": \"tablets\"\n            }\n          },\n          {\n            \"valueCodeableConcept\": {\n              \"coding\": {\n                \"system\": \"http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl\",\n                \"code\": \"C133990\",\n                \"display\": \"Commercial\"\n              },\n              \"text\": \"Production\"\n            }\n          },\n          {\n            \"valueReference\": {\n              \"reference\": \"Organization/033ce81d-5f0d-7a3e-93d3-fc64e122a1fd\"\n            }\n          },\n          {\n            \"extension\": {\n              \"valueCodeableConcept\": {\n                \"text\": \"100 cc HDPE Bottle 2 g desiccant\"\n              }\n            }\n          }\n        ]\n      },\n      {\n        \"valueDateTime\": \"2019-09-08\"\n      },\n      {\n        \"valueReference\": {\n          \"reference\": \"Substance/cb31d747-2338-88d5-342c-8e9c097e4dad\"\n        }\n      },\n      {\n        \"valueDateTime\": \"2020-08\"\n      },\n      {\n        \"valueReference\": {\n          \"reference\": \"Organization/2dd49242-4bf1-9ec1-5f1e-22ba8d4d5ccc\"\n        }\n      },\n      {\n        \"valueQuantity\": {\n          \"value\": \"4.8\",\n          \"unit\": \"kg\"\n        }\n      }\n    ],\n    \"lotNumber\": \"33446\"\n  },\n  \"resourceType\": \"Medication\"\n}"
  },
  "Medication/f54d4666-7ae3-4e30-8c5a-6d13838c4f3b": {
    "title": "Medication: f54d4666-7ae3-4e30-8c5a-6d13838c4f3b",
    "details": [
      {
        "k": "Resource Type",
        "v": "Medication"
      },
      {
        "k": "ID",
        "v": "f54d4666-7ae3-4e30-8c5a-6d13838c4f3b"
      }
    ],
    "json": "{\n  \"id\": \"f54d4666-7ae3-4e30-8c5a-6d13838c4f3b\",\n  \"code\": {\n    \"extension\": {\n      \"valueReference\": {\n        \"reference\": \"MedicinalProductDefinition/a0694a7a-aafa-4cbe-8135-c788a9a4d3d5\"\n      }\n    }\n  },\n  \"batch\": {\n    \"extension\": [\n      {\n        \"extension\": [\n          {\n            \"valueDateTime\": \"2020-06\"\n          },\n          {\n            \"valueQuantity\": {\n              \"value\": \"100125\",\n              \"unit\": \"tablets\"\n            }\n          },\n          {\n            \"valueCodeableConcept\": {\n              \"coding\": {\n                \"system\": \"http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl\",\n                \"code\": \"C133990\",\n                \"display\": \"Commercial\"\n              },\n              \"text\": \"Production\"\n            }\n          },\n          {\n            \"valueReference\": {\n              \"reference\": \"Organization/033ce81d-5f0d-7a3e-93d3-fc64e122a1fd\"\n            }\n          },\n          {\n            \"extension\": {\n              \"valueCodeableConcept\": {\n                \"text\": \"100 cc HDPE Bottle 2 g desiccant\"\n              }\n            }\n          }\n        ]\n      },\n      {\n        \"valueDateTime\": \"2019-09-08\"\n      },\n      {\n        \"valueReference\": {\n          \"reference\": \"Substance/1551f97b-6f6d-825e-1fb3-44b0b090808c\"\n        }\n      },\n      {\n        \"valueDateTime\": \"2020-08\"\n      },\n      {\n        \"valueReference\": {\n          \"reference\": \"Organization/2dd49242-4bf1-9ec1-5f1e-22ba8d4d5ccc\"\n        }\n      },\n      {\n        \"valueQuantity\": {\n          \"value\": \"4.8\",\n          \"unit\": \"kg\"\n        }\n      }\n    ],\n    \"lotNumber\": \"33447\"\n  },\n  \"resourceType\": \"Medication\"\n}"
  },
  "Organization/033ce81d-5f0d-7a3e-93d3-fc64e122a1fd": {
    "title": "Organization: 033ce81d-5f0d-7a3e-93d3-fc64e122a1fd",
    "details": [
      {
        "k": "Resource Type",
        "v": "Organization"
      },
      {
        "k": "ID",
        "v": "033ce81d-5f0d-7a3e-93d3-fc64e122a1fd"
      }
    ],
    "json": "{\n  \"id\": \"033ce81d-5f0d-7a3e-93d3-fc64e122a1fd\",\n  \"identifier\": {\n    \"system\": \"urn:oid:2.16.840.1.113883.4.82\",\n    \"value\": \"3010027650\"\n  },\n  \"active\": \"true\",\n  \"type\": {\n    \"coding\": {\n      \"system\": \"http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type\",\n      \"code\": \"drug-product-manufacture\",\n      \"display\": \"Drug Product Manufacture\"\n    }\n  },\n  \"name\": \"AAA Pharmaceutical, Inc.\",\n  \"contact\": {\n    \"address\": {\n      \"line\": \"681 Main Street\",\n      \"city\": \"Lumberton\",\n      \"state\": \"New Jersey\",\n      \"postalCode\": \"08048\",\n      \"country\": \"USA\"\n    }\n  },\n  \"resourceType\": \"Organization\"\n}"
  },
  "Organization/2dd49242-4bf1-9ec1-5f1e-22ba8d4d5ccc": {
    "title": "Organization: 2dd49242-4bf1-9ec1-5f1e-22ba8d4d5ccc",
    "details": [
      {
        "k": "Resource Type",
        "v": "Organization"
      },
      {
        "k": "ID",
        "v": "2dd49242-4bf1-9ec1-5f1e-22ba8d4d5ccc"
      }
    ],
    "json": "{\n  \"id\": \"2dd49242-4bf1-9ec1-5f1e-22ba8d4d5ccc\",\n  \"identifier\": {\n    \"system\": \"urn:oid:2.16.840.1.113883.4.82\",\n    \"value\": \"3008816891\"\n  },\n  \"active\": \"true\",\n  \"type\": {\n    \"coding\": {\n      \"system\": \"http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type\",\n      \"code\": \"packaging\",\n      \"display\": \"Packaging\"\n    }\n  },\n  \"name\": \"MySite\",\n  \"resourceType\": \"Organization\"\n}"
  },
  "Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9": {
    "title": "Organization: e3d2bc19-2f10-2b4d-1741-e4135fe612a9",
    "details": [
      {
        "k": "Resource Type",
        "v": "Organization"
      },
      {
        "k": "ID",
        "v": "e3d2bc19-2f10-2b4d-1741-e4135fe612a9"
      }
    ],
    "json": "{\n  \"id\": \"e3d2bc19-2f10-2b4d-1741-e4135fe612a9\",\n  \"identifier\": {\n    \"system\": \"urn:oid:2.16.840.1.113883.4.82\",\n    \"value\": \"3007270600\"\n  },\n  \"active\": \"true\",\n  \"type\": {\n    \"coding\": {\n      \"system\": \"http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type\",\n      \"code\": \"analytical-testing-stability\",\n      \"display\": \"Analytical Testing - Stability\"\n    }\n  },\n  \"name\": \"Advanced Analytical Testing Laboratories Inc.\",\n  \"contact\": {\n    \"address\": {\n      \"line\": \"30 Silverline Drive\",\n      \"city\": \"North Brunswick\",\n      \"state\": \"New Jersey\",\n      \"postalCode\": \"08902\",\n      \"country\": \"USA\"\n    }\n  },\n  \"resourceType\": \"Organization\"\n}"
  },
  "MedicinalProductDefinition/a0694a7a-aafa-4cbe-8135-c788a9a4d3d5": {
    "title": "MedicinalProductDefinition: a0694a7a-aafa-4cbe-8135-c788a9a4d3d5",
    "details": [
      {
        "k": "Resource Type",
        "v": "MedicinalProductDefinition"
      },
      {
        "k": "ID",
        "v": "a0694a7a-aafa-4cbe-8135-c788a9a4d3d5"
      }
    ],
    "json": "{\n  \"id\": \"a0694a7a-aafa-4cbe-8135-c788a9a4d3d5\",\n  \"meta\": {\n    \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/MedicinalProductDefinition-drug-product-pq\"\n  },\n  \"description\": \"Textual description of the product\",\n  \"combinedPharmaceuticalDoseForm\": {\n    \"coding\": {\n      \"system\": \"http://standardterms.edqm.eu\",\n      \"code\": \"10225000\",\n      \"display\": \"Gastro-resistant tablet\"\n    }\n  },\n  \"route\": {\n    \"coding\": {\n      \"system\": \"http://standardterms.edqm.eu\",\n      \"code\": \"20053000\",\n      \"display\": \"Oral use\"\n    }\n  },\n  \"name\": {\n    \"productName\": \"Stelbat Tablets, 20mg\",\n    \"type\": {\n      \"coding\": {\n        \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-productNameType-pq-example\",\n        \"code\": \"Proprietary\",\n        \"display\": \"Proprietary\"\n      }\n    },\n    \"part\": {\n      \"part\": \"20mg\",\n      \"type\": {\n        \"coding\": {\n          \"system\": \"http://hl7.org/fhir/medicinal-product-name-part-type\",\n          \"code\": \"StrengthPart\",\n          \"display\": \"Strength part\"\n        }\n      }\n    }\n  },\n  \"resourceType\": \"MedicinalProductDefinition\"\n}"
  },
  "Ingredient/a0694a7a-aafa-4cbe-8135-c788a9a4d3d6": {
    "title": "Ingredient: a0694a7a-aafa-4cbe-8135-c788a9a4d3d6",
    "details": [
      {
        "k": "Resource Type",
        "v": "Ingredient"
      },
      {
        "k": "ID",
        "v": "a0694a7a-aafa-4cbe-8135-c788a9a4d3d6"
      },
      {
        "k": "Status",
        "v": "active"
      }
    ],
    "json": "{\n  \"id\": \"a0694a7a-aafa-4cbe-8135-c788a9a4d3d6\",\n  \"meta\": {\n    \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Ingredient-drug-pq\"\n  },\n  \"status\": \"active\",\n  \"for\": {\n    \"reference\": \"MedicinalProductDefinition/a0694a7a-aafa-4cbe-8135-c788a9a4d3d5\"\n  },\n  \"role\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/ingredient-role\",\n      \"code\": \"100000072072\",\n      \"display\": \"Active\"\n    }\n  },\n  \"substance\": {\n    \"code\": {\n      \"reference\": {\n        \"reference\": \"SubstanceDefinition/57a9af63-315d-1585-a261-0e337b289390\"\n      }\n    }\n  },\n  \"resourceType\": \"Ingredient\"\n}"
  },
  "SubstanceDefinition/57a9af63-315d-1585-a261-0e337b289390": {
    "title": "SubstanceDefinition: 57a9af63-315d-1585-a261-0e337b289390",
    "details": [
      {
        "k": "Resource Type",
        "v": "SubstanceDefinition"
      },
      {
        "k": "ID",
        "v": "57a9af63-315d-1585-a261-0e337b289390"
      }
    ],
    "json": "{\n  \"id\": \"57a9af63-315d-1585-a261-0e337b289390\",\n  \"meta\": {\n    \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/SubstanceDefinition-component-substance-drug-pq\"\n  },\n  \"manufacturer\": {\n    \"reference\": \"Organization/49d2f0c0-4b28-9271-8aaf-2996a8b9739c\"\n  },\n  \"name\": {\n    \"name\": \"Stelbatolol\"\n  },\n  \"resourceType\": \"SubstanceDefinition\"\n}"
  },
  "Organization/49d2f0c0-4b28-9271-8aaf-2996a8b9739c": {
    "title": "Organization: 49d2f0c0-4b28-9271-8aaf-2996a8b9739c",
    "details": [
      {
        "k": "Resource Type",
        "v": "Organization"
      },
      {
        "k": "ID",
        "v": "49d2f0c0-4b28-9271-8aaf-2996a8b9739c"
      }
    ],
    "json": "{\n  \"id\": \"49d2f0c0-4b28-9271-8aaf-2996a8b9739c\",\n  \"meta\": {\n    \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Organization-drug-pq\"\n  },\n  \"identifier\": {\n    \"system\": \"urn:oid:2.16.840.1.113883.4.82\",\n    \"value\": \"3003040516\"\n  },\n  \"active\": \"true\",\n  \"type\": {\n    \"coding\": {\n      \"system\": \"http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type\",\n      \"code\": \"drug-substance-manufacture\",\n      \"display\": \"Drug Substance Manufacture\"\n    }\n  },\n  \"name\": \"AAA Molybdenum Products, Inc.\",\n  \"contact\": {\n    \"address\": {\n      \"line\": [\n        \"7233 W 116th Pl\",\n        \"Ste C\"\n      ],\n      \"city\": \"Broomfield\",\n      \"state\": \"Colorado\",\n      \"postalCode\": \"80020\",\n      \"country\": \"USA\"\n    }\n  },\n  \"resourceType\": \"Organization\"\n}"
  },
  "Substance/fc078762-81c5-5656-9744-13c7ad1e595b": {
    "title": "Substance: fc078762-81c5-5656-9744-13c7ad1e595b",
    "details": [
      {
        "k": "Resource Type",
        "v": "Substance"
      },
      {
        "k": "ID",
        "v": "fc078762-81c5-5656-9744-13c7ad1e595b"
      }
    ],
    "json": "{\n  \"id\": \"fc078762-81c5-5656-9744-13c7ad1e595b\",\n  \"meta\": {\n    \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq\"\n  },\n  \"extension\": [\n    {\n      \"extension\": [\n        {\n          \"valueDateTime\": \"2019-09-07\"\n        },\n        {\n          \"valueQuantity\": {\n            \"value\": \"5\",\n            \"unit\": \"kg\"\n          }\n        },\n        {\n          \"valueCodeableConcept\": {\n            \"coding\": {\n              \"system\": \"http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl\",\n              \"code\": \"C133991\",\n              \"display\": \"Development\"\n            }\n          }\n        },\n        {\n          \"valueReference\": {\n            \"reference\": \"Organization/49d2f0c0-4b28-9271-8aaf-2996a8b9739c\"\n          }\n        }\n      ]\n    },\n    {\n      \"valueDateTime\": \"2019-09-08\"\n    },\n    {\n      \"valueDateTime\": \"2022-09-08\"\n    },\n    {\n      \"valueQuantity\": {\n        \"value\": \"4.8\",\n        \"unit\": \"kg\"\n      }\n    }\n  ],\n  \"identifier\": {\n    \"value\": \"CAT1\"\n  },\n  \"instance\": \"true\",\n  \"code\": {\n    \"reference\": {\n      \"reference\": \"SubstanceDefinition/57a9af63-315d-1585-a261-0e337b289390\"\n    }\n  },\n  \"resourceType\": \"Substance\"\n}"
  },
  "Substance/cb31d747-2338-88d5-342c-8e9c097e4dad": {
    "title": "Substance: cb31d747-2338-88d5-342c-8e9c097e4dad",
    "details": [
      {
        "k": "Resource Type",
        "v": "Substance"
      },
      {
        "k": "ID",
        "v": "cb31d747-2338-88d5-342c-8e9c097e4dad"
      }
    ],
    "json": "{\n  \"id\": \"cb31d747-2338-88d5-342c-8e9c097e4dad\",\n  \"extension\": [\n    {\n      \"extension\": [\n        {\n          \"valueDateTime\": \"2019-09-07\"\n        },\n        {\n          \"valueQuantity\": {\n            \"value\": \"5\",\n            \"unit\": \"kg\"\n          }\n        },\n        {\n          \"valueCodeableConcept\": {\n            \"coding\": {\n              \"system\": \"http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl\",\n              \"code\": \"C133991\",\n              \"display\": \"Development\"\n            }\n          }\n        },\n        {\n          \"valueReference\": {\n            \"reference\": \"Organization/49d2f0c0-4b28-9271-8aaf-2996a8b9739c\"\n          }\n        }\n      ]\n    },\n    {\n      \"valueDateTime\": \"2019-09-08\"\n    },\n    {\n      \"valueDateTime\": \"2022-09-08\"\n    },\n    {\n      \"valueQuantity\": {\n        \"value\": \"4.8\",\n        \"unit\": \"kg\"\n      }\n    }\n  ],\n  \"identifier\": {\n    \"value\": \"CAT2\"\n  },\n  \"instance\": \"true\",\n  \"code\": {\n    \"reference\": {\n      \"reference\": \"SubstanceDefinition/57a9af63-315d-1585-a261-0e337b289390\"\n    }\n  },\n  \"resourceType\": \"Substance\"\n}"
  },
  "Substance/1551f97b-6f6d-825e-1fb3-44b0b090808c": {
    "title": "Substance: 1551f97b-6f6d-825e-1fb3-44b0b090808c",
    "details": [
      {
        "k": "Resource Type",
        "v": "Substance"
      },
      {
        "k": "ID",
        "v": "1551f97b-6f6d-825e-1fb3-44b0b090808c"
      }
    ],
    "json": "{\n  \"id\": \"1551f97b-6f6d-825e-1fb3-44b0b090808c\",\n  \"extension\": [\n    {\n      \"extension\": [\n        {\n          \"valueDateTime\": \"2019-09-07\"\n        },\n        {\n          \"valueQuantity\": {\n            \"value\": \"5\",\n            \"unit\": \"kg\"\n          }\n        },\n        {\n          \"valueCodeableConcept\": {\n            \"coding\": {\n              \"system\": \"http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl\",\n              \"code\": \"C133991\",\n              \"display\": \"Development\"\n            }\n          }\n        },\n        {\n          \"valueReference\": {\n            \"reference\": \"Organization/49d2f0c0-4b28-9271-8aaf-2996a8b9739c\"\n          }\n        }\n      ]\n    },\n    {\n      \"valueDateTime\": \"2019-09-08\"\n    },\n    {\n      \"valueDateTime\": \"2022-09-08\"\n    },\n    {\n      \"valueQuantity\": {\n        \"value\": \"4.8\",\n        \"unit\": \"kg\"\n      }\n    }\n  ],\n  \"identifier\": {\n    \"value\": \"CAT3\"\n  },\n  \"instance\": \"true\",\n  \"code\": {\n    \"reference\": {\n      \"reference\": \"SubstanceDefinition/57a9af63-315d-1585-a261-0e337b289390\"\n    }\n  },\n  \"resourceType\": \"Substance\"\n}"
  },
  "Observation/LongTerm25C-initial-1-Description": {
    "title": "Observation: LongTerm25C-initial-1-Description",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm25C-initial-1-Description"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm25C-initial-1-Description\",\n  \"meta\": {\n    \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Observation-test-result-drug-pq\"\n  },\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/1178fc31-0cfd-8c60-0b5b-9ae2850c6774\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"DESC\",\n      \"display\": \"Description\"\n    },\n    \"text\": \"Description\"\n  },\n  \"subject\": {\n    \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n  },\n  \"valueCodeableConcept\": {\n    \"text\": \"Complies\"\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/observation-test-result-lt25c-i1-degradation-imp1": {
    "title": "Observation: observation-test-result-lt25c-i1-degradation-imp1",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "observation-test-result-lt25c-i1-degradation-imp1"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"observation-test-result-lt25c-i1-degradation-imp1\",\n  \"meta\": {\n    \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Observation-test-result-drug-pq\"\n  },\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/2c5683d6-6e94-825b-056a-129a04c95e2f\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"DGP\",\n      \"display\": \"Degradation Products\"\n    },\n    \"text\": \"Degradation Products\"\n  },\n  \"subject\": {\n    \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.101\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"component\": {\n    \"code\": {\n      \"coding\": {\n        \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n        \"code\": \"IMP\",\n        \"display\": \"Impurity\"\n      }\n    },\n    \"valueCodeableConcept\": {\n      \"text\": \"Impurity 1\"\n    }\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm25C-initial-1-Degradation-imp2": {
    "title": "Observation: LongTerm25C-initial-1-Degradation-imp2",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm25C-initial-1-Degradation-imp2"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm25C-initial-1-Degradation-imp2\",\n  \"meta\": {\n    \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Observation-test-result-drug-pq\"\n  },\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/2c5683d6-6e94-825b-056a-129a04c95e2f\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"DGP\",\n      \"display\": \"Degradation Products\"\n    },\n    \"text\": \"Degradation Products\"\n  },\n  \"subject\": {\n    \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.201\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"component\": {\n    \"code\": {\n      \"coding\": {\n        \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n        \"code\": \"IMP\",\n        \"display\": \"Impurity\"\n      }\n    },\n    \"valueCodeableConcept\": {\n      \"text\": \"Impurity 2\"\n    }\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm25C-initial-1-Degradation-imp3": {
    "title": "Observation: LongTerm25C-initial-1-Degradation-imp3",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm25C-initial-1-Degradation-imp3"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm25C-initial-1-Degradation-imp3\",\n  \"meta\": {\n    \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Observation-test-result-drug-pq\"\n  },\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/2c5683d6-6e94-825b-056a-129a04c95e2f\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"DGP\",\n      \"display\": \"Degradation Products\"\n    },\n    \"text\": \"Degradation Products\"\n  },\n  \"subject\": {\n    \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.201\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"component\": {\n    \"code\": {\n      \"coding\": {\n        \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n        \"code\": \"IMP\",\n        \"display\": \"Impurity\"\n      }\n    },\n    \"valueCodeableConcept\": {\n      \"text\": \"Impurity 3\"\n    }\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm25C-initial-1-Degradation-impUnspecified": {
    "title": "Observation: LongTerm25C-initial-1-Degradation-impUnspecified",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm25C-initial-1-Degradation-impUnspecified"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm25C-initial-1-Degradation-impUnspecified\",\n  \"meta\": {\n    \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Observation-test-result-drug-pq\"\n  },\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/2c5683d6-6e94-825b-056a-129a04c95e2f\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"DGP\",\n      \"display\": \"Degradation Products\"\n    },\n    \"text\": \"Degradation Products\"\n  },\n  \"subject\": {\n    \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.101\",\n    \"comparator\": \"<\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"component\": {\n    \"code\": {\n      \"coding\": {\n        \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n        \"code\": \"IMP\",\n        \"display\": \"Impurity\"\n      }\n    },\n    \"valueCodeableConcept\": {\n      \"text\": \"Any Unspecified Degradation Impurity\"\n    }\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm25C-initial-1-Degradation-impTotal": {
    "title": "Observation: LongTerm25C-initial-1-Degradation-impTotal",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm25C-initial-1-Degradation-impTotal"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm25C-initial-1-Degradation-impTotal\",\n  \"meta\": {\n    \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Observation-test-result-drug-pq\"\n  },\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/2c5683d6-6e94-825b-056a-129a04c95e2f\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"DGP\",\n      \"display\": \"Degradation Products\"\n    },\n    \"text\": \"Degradation Products\"\n  },\n  \"subject\": {\n    \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.801\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"component\": {\n    \"code\": {\n      \"coding\": {\n        \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n        \"code\": \"IMP\",\n        \"display\": \"Impurity\"\n      }\n    },\n    \"valueCodeableConcept\": {\n      \"text\": \"Total Degradation Impurities\"\n    }\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm25C-initial-1-Water": {
    "title": "Observation: LongTerm25C-initial-1-Water",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm25C-initial-1-Water"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm25C-initial-1-Water\",\n  \"meta\": {\n    \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Observation-test-result-drug-pq\"\n  },\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/186eb33e-a01d-4252-166c-b5ba5e8a697c\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"WaterContent\",\n      \"display\": \"Water Content\"\n    }\n  },\n  \"subject\": {\n    \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.1501\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm25C-initial-1-Microbiological": {
    "title": "Observation: LongTerm25C-initial-1-Microbiological",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm25C-initial-1-Microbiological"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm25C-initial-1-Microbiological\",\n  \"meta\": {\n    \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Observation-test-result-drug-pq\"\n  },\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"Microbiological Quality\",\n      \"display\": \"Microbiological Quality\"\n    }\n  },\n  \"subject\": {\n    \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n  },\n  \"valueCodeableConcept\": {\n    \"text\": \"Complies\"\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm25C-initial-1-Uniformity": {
    "title": "Observation: LongTerm25C-initial-1-Uniformity",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm25C-initial-1-Uniformity"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm25C-initial-1-Uniformity\",\n  \"meta\": {\n    \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Observation-test-result-drug-pq\"\n  },\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/ef781c18-8e86-7859-209b-469ee9ad42d8\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"uniformity-dosage\",\n      \"display\": \"Uniformity of dosage units (by weight)\"\n    }\n  },\n  \"subject\": {\n    \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n  },\n  \"valueCodeableConcept\": {\n    \"text\": \"Complies\"\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm25C-initial-2-Description": {
    "title": "Observation: LongTerm25C-initial-2-Description",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm25C-initial-2-Description"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm25C-initial-2-Description\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/1178fc31-0cfd-8c60-0b5b-9ae2850c6774\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"DESC\",\n      \"display\": \"Description\"\n    },\n    \"text\": \"Description\"\n  },\n  \"subject\": {\n    \"reference\": \"Medication/8306cfc5-158f-1a53-a683-048b226060d9\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n  },\n  \"valueCodeableConcept\": {\n    \"text\": \"Complies\"\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm25C-initial-2-Degradation": {
    "title": "Observation: LongTerm25C-initial-2-Degradation",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm25C-initial-2-Degradation"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm25C-initial-2-Degradation\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/2c5683d6-6e94-825b-056a-129a04c95e2f\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"DGP\",\n      \"display\": \"Degradation Products\"\n    },\n    \"text\": \"Degradation Products\"\n  },\n  \"subject\": {\n    \"reference\": \"Medication/8306cfc5-158f-1a53-a683-048b226060d9\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.1\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm25C-initial-2-Microbiological": {
    "title": "Observation: LongTerm25C-initial-2-Microbiological",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm25C-initial-2-Microbiological"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm25C-initial-2-Microbiological\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"Microbiological Quality\",\n      \"display\": \"Microbiological Quality\"\n    }\n  },\n  \"subject\": {\n    \"reference\": \"Medication/8306cfc5-158f-1a53-a683-048b226060d9\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n  },\n  \"valueString\": \"Complies\",\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm25C-initial-2-Uniformity": {
    "title": "Observation: LongTerm25C-initial-2-Uniformity",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm25C-initial-2-Uniformity"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm25C-initial-2-Uniformity\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/ef781c18-8e86-7859-209b-469ee9ad42d8\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"uniformity-dosage\",\n      \"display\": \"Uniformity of dosage units (by weight)\"\n    }\n  },\n  \"subject\": {\n    \"reference\": \"Medication/8306cfc5-158f-1a53-a683-048b226060d9\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n  },\n  \"valueCodeableConcept\": {\n    \"text\": \"Complies\"\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm25C-initial-3-Description": {
    "title": "Observation: LongTerm25C-initial-3-Description",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm25C-initial-3-Description"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm25C-initial-3-Description\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/1178fc31-0cfd-8c60-0b5b-9ae2850c6774\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"DESC\",\n      \"display\": \"Description\"\n    },\n    \"text\": \"Description\"\n  },\n  \"subject\": {\n    \"reference\": \"Medication/f54d4666-7ae3-4e30-8c5a-6d13838c4f3b\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n  },\n  \"valueCodeableConcept\": {\n    \"text\": \"Complies\"\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm25C-initial-3-Degradation": {
    "title": "Observation: LongTerm25C-initial-3-Degradation",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm25C-initial-3-Degradation"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm25C-initial-3-Degradation\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/2c5683d6-6e94-825b-056a-129a04c95e2f\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"DGP\",\n      \"display\": \"Degradation Products\"\n    },\n    \"text\": \"Degradation Products\"\n  },\n  \"subject\": {\n    \"reference\": \"Medication/f54d4666-7ae3-4e30-8c5a-6d13838c4f3b\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.1\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm25C-initial-3-Microbiological": {
    "title": "Observation: LongTerm25C-initial-3-Microbiological",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm25C-initial-3-Microbiological"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm25C-initial-3-Microbiological\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"Microbiological Quality\",\n      \"display\": \"Microbiological Quality\"\n    }\n  },\n  \"subject\": {\n    \"reference\": \"Medication/f54d4666-7ae3-4e30-8c5a-6d13838c4f3b\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n  },\n  \"valueCodeableConcept\": {\n    \"text\": \"Complies\"\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm25C-initial-3-Uniformity": {
    "title": "Observation: LongTerm25C-initial-3-Uniformity",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm25C-initial-3-Uniformity"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm25C-initial-3-Uniformity\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/ef781c18-8e86-7859-209b-469ee9ad42d8\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"uniformity-dosage\",\n      \"display\": \"Uniformity of dosage units (by weight)\"\n    }\n  },\n  \"subject\": {\n    \"reference\": \"Medication/f54d4666-7ae3-4e30-8c5a-6d13838c4f3b\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n  },\n  \"valueCodeableConcept\": {\n    \"text\": \"Complies\"\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm25C-18m-1-Description": {
    "title": "Observation: LongTerm25C-18m-1-Description",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm25C-18m-1-Description"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm25C-18m-1-Description\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/1178fc31-0cfd-8c60-0b5b-9ae2850c6774\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"DESC\",\n      \"display\": \"Description\"\n    },\n    \"text\": \"Description\"\n  },\n  \"subject\": {\n    \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n  },\n  \"valueCodeableConcept\": {\n    \"text\": \"Complies\"\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm25C-18m-1-Degradation-imp1": {
    "title": "Observation: LongTerm25C-18m-1-Degradation-imp1",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm25C-18m-1-Degradation-imp1"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm25C-18m-1-Degradation-imp1\",\n  \"meta\": {\n    \"profile\": \"http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Observation-test-result-drug-pq\"\n  },\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/2c5683d6-6e94-825b-056a-129a04c95e2f\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"DGP\",\n      \"display\": \"Degradation Products\"\n    },\n    \"text\": \"Degradation Products\"\n  },\n  \"subject\": {\n    \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.118\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"component\": {\n    \"code\": {\n      \"coding\": {\n        \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n        \"code\": \"IMP\",\n        \"display\": \"Impurity\"\n      }\n    },\n    \"valueCodeableConcept\": {\n      \"text\": \"Impurity 1\"\n    }\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm25C-18m-1-Degradation-imp2": {
    "title": "Observation: LongTerm25C-18m-1-Degradation-imp2",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm25C-18m-1-Degradation-imp2"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm25C-18m-1-Degradation-imp2\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/2c5683d6-6e94-825b-056a-129a04c95e2f\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"DGP\",\n      \"display\": \"Degradation Products\"\n    },\n    \"text\": \"Degradation Products\"\n  },\n  \"subject\": {\n    \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.218\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"component\": {\n    \"code\": {\n      \"coding\": {\n        \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n        \"code\": \"IMP\",\n        \"display\": \"Impurity\"\n      }\n    },\n    \"valueCodeableConcept\": {\n      \"text\": \"Impurity 2\"\n    }\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm25C-18m-1-Degradation-imp3": {
    "title": "Observation: LongTerm25C-18m-1-Degradation-imp3",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm25C-18m-1-Degradation-imp3"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm25C-18m-1-Degradation-imp3\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/2c5683d6-6e94-825b-056a-129a04c95e2f\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"DGP\",\n      \"display\": \"Degradation Products\"\n    },\n    \"text\": \"Degradation Products\"\n  },\n  \"subject\": {\n    \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.218\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"component\": {\n    \"code\": {\n      \"coding\": {\n        \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n        \"code\": \"IMP\",\n        \"display\": \"Impurity\"\n      }\n    },\n    \"valueCodeableConcept\": {\n      \"text\": \"Impurity 3\"\n    }\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm25C-18m-1-Degradation-impUnspecified": {
    "title": "Observation: LongTerm25C-18m-1-Degradation-impUnspecified",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm25C-18m-1-Degradation-impUnspecified"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm25C-18m-1-Degradation-impUnspecified\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/2c5683d6-6e94-825b-056a-129a04c95e2f\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"DGP\",\n      \"display\": \"Degradation Products\"\n    },\n    \"text\": \"Degradation Products\"\n  },\n  \"subject\": {\n    \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.118\",\n    \"comparator\": \"<\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"component\": {\n    \"code\": {\n      \"coding\": {\n        \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n        \"code\": \"IMP\",\n        \"display\": \"Impurity\"\n      }\n    },\n    \"valueCodeableConcept\": {\n      \"text\": \"Any Unspecified Degradation Impurity\"\n    }\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm25C-18m-1-Degradation-impTotal": {
    "title": "Observation: LongTerm25C-18m-1-Degradation-impTotal",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm25C-18m-1-Degradation-impTotal"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm25C-18m-1-Degradation-impTotal\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/2c5683d6-6e94-825b-056a-129a04c95e2f\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"DGP\",\n      \"display\": \"Degradation Products\"\n    },\n    \"text\": \"Degradation Products\"\n  },\n  \"subject\": {\n    \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.818\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"component\": {\n    \"code\": {\n      \"coding\": {\n        \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n        \"code\": \"IMP\",\n        \"display\": \"Impurity\"\n      }\n    },\n    \"valueCodeableConcept\": {\n      \"text\": \"Total Degradation Impurities\"\n    }\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm25C-18m-1-Water": {
    "title": "Observation: LongTerm25C-18m-1-Water",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm25C-18m-1-Water"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm25C-18m-1-Water\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/186eb33e-a01d-4252-166c-b5ba5e8a697c\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"WaterContent\",\n      \"display\": \"Water Content\"\n    }\n  },\n  \"subject\": {\n    \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.1518\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm25C-18m-1-Microbiological": {
    "title": "Observation: LongTerm25C-18m-1-Microbiological",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm25C-18m-1-Microbiological"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm25C-18m-1-Microbiological\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"Microbiological Quality\",\n      \"display\": \"Microbiological Quality\"\n    }\n  },\n  \"subject\": {\n    \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n  },\n  \"valueString\": \"Complies\",\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm25C-18m-1-Uniformity": {
    "title": "Observation: LongTerm25C-18m-1-Uniformity",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm25C-18m-1-Uniformity"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm25C-18m-1-Uniformity\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/ef781c18-8e86-7859-209b-469ee9ad42d8\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"uniformity-dosage\",\n      \"display\": \"Uniformity of dosage units (by weight)\"\n    }\n  },\n  \"subject\": {\n    \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n  },\n  \"valueCodeableConcept\": {\n    \"text\": \"Complies\"\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm25C-18m-2-Description": {
    "title": "Observation: LongTerm25C-18m-2-Description",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm25C-18m-2-Description"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm25C-18m-2-Description\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/1178fc31-0cfd-8c60-0b5b-9ae2850c6774\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"DESC\",\n      \"display\": \"Description\"\n    },\n    \"text\": \"Description\"\n  },\n  \"subject\": {\n    \"reference\": \"Medication/8306cfc5-158f-1a53-a683-048b226060d9\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n  },\n  \"valueCodeableConcept\": {\n    \"text\": \"Complies\"\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm25C-18m-2-Microbiological": {
    "title": "Observation: LongTerm25C-18m-2-Microbiological",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm25C-18m-2-Microbiological"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm25C-18m-2-Microbiological\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"Microbiological Quality\",\n      \"display\": \"Microbiological Quality\"\n    }\n  },\n  \"subject\": {\n    \"reference\": \"Medication/8306cfc5-158f-1a53-a683-048b226060d9\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n  },\n  \"valueString\": \"Does not comply\",\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm25C-18m-3-Description": {
    "title": "Observation: LongTerm25C-18m-3-Description",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm25C-18m-3-Description"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm25C-18m-3-Description\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/1178fc31-0cfd-8c60-0b5b-9ae2850c6774\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"DESC\",\n      \"display\": \"Description\"\n    },\n    \"text\": \"Description\"\n  },\n  \"subject\": {\n    \"reference\": \"Medication/f54d4666-7ae3-4e30-8c5a-6d13838c4f3b\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n  },\n  \"valueCodeableConcept\": {\n    \"text\": \"Complies\"\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm25C-18m-3-Microbiological": {
    "title": "Observation: LongTerm25C-18m-3-Microbiological",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm25C-18m-3-Microbiological"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm25C-18m-3-Microbiological\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"Microbiological Quality\",\n      \"display\": \"Microbiological Quality\"\n    }\n  },\n  \"subject\": {\n    \"reference\": \"Medication/f54d4666-7ae3-4e30-8c5a-6d13838c4f3b\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n  },\n  \"valueString\": \"Does not comply\",\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/Accelerated40C-3-1-Description": {
    "title": "Observation: Accelerated40C-3-1-Description",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "Accelerated40C-3-1-Description"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"Accelerated40C-3-1-Description\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/1178fc31-0cfd-8c60-0b5b-9ae2850c6774\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"DESC\",\n      \"display\": \"Description\"\n    },\n    \"text\": \"Description\"\n  },\n  \"subject\": {\n    \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n  },\n  \"valueCodeableConcept\": {\n    \"text\": \"Complies\"\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/Accelerated40C-3-1-Degradation-imp1": {
    "title": "Observation: Accelerated40C-3-1-Degradation-imp1",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "Accelerated40C-3-1-Degradation-imp1"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"Accelerated40C-3-1-Degradation-imp1\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/2c5683d6-6e94-825b-056a-129a04c95e2f\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"DGP\",\n      \"display\": \"Degradation Products\"\n    },\n    \"text\": \"Degradation Products\"\n  },\n  \"subject\": {\n    \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.143\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"component\": {\n    \"code\": {\n      \"coding\": {\n        \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n        \"code\": \"IMP\",\n        \"display\": \"Impurity\"\n      }\n    },\n    \"valueCodeableConcept\": {\n      \"text\": \"Impurity 1\"\n    }\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/Accelerated40C-3-1-Degradation-imp2": {
    "title": "Observation: Accelerated40C-3-1-Degradation-imp2",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "Accelerated40C-3-1-Degradation-imp2"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"Accelerated40C-3-1-Degradation-imp2\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/2c5683d6-6e94-825b-056a-129a04c95e2f\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"DGP\",\n      \"display\": \"Degradation Products\"\n    },\n    \"text\": \"Degradation Products\"\n  },\n  \"subject\": {\n    \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.243\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"component\": {\n    \"code\": {\n      \"coding\": {\n        \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n        \"code\": \"IMP\",\n        \"display\": \"Impurity\"\n      }\n    },\n    \"valueCodeableConcept\": {\n      \"text\": \"Impurity 2\"\n    }\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/Accelerated40C-3-1-Degradation-imp3": {
    "title": "Observation: Accelerated40C-3-1-Degradation-imp3",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "Accelerated40C-3-1-Degradation-imp3"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"Accelerated40C-3-1-Degradation-imp3\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/2c5683d6-6e94-825b-056a-129a04c95e2f\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"DGP\",\n      \"display\": \"Degradation Products\"\n    },\n    \"text\": \"Degradation Products\"\n  },\n  \"subject\": {\n    \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.201\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"component\": {\n    \"code\": {\n      \"coding\": {\n        \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n        \"code\": \"IMP\",\n        \"display\": \"Impurity\"\n      }\n    },\n    \"valueCodeableConcept\": {\n      \"text\": \"Impurity 3\"\n    }\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/Accelerated40C-3-1-Degradation-impUnspecified": {
    "title": "Observation: Accelerated40C-3-1-Degradation-impUnspecified",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "Accelerated40C-3-1-Degradation-impUnspecified"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"Accelerated40C-3-1-Degradation-impUnspecified\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/2c5683d6-6e94-825b-056a-129a04c95e2f\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"DGP\",\n      \"display\": \"Degradation Products\"\n    },\n    \"text\": \"Degradation Products\"\n  },\n  \"subject\": {\n    \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.101\",\n    \"comparator\": \"<\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"component\": {\n    \"code\": {\n      \"coding\": {\n        \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n        \"code\": \"IMP\",\n        \"display\": \"Impurity\"\n      }\n    },\n    \"valueCodeableConcept\": {\n      \"text\": \"Any Unspecified Degradation Impurity\"\n    }\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/Accelerated40C-3-1-Degradation-impTotal": {
    "title": "Observation: Accelerated40C-3-1-Degradation-impTotal",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "Accelerated40C-3-1-Degradation-impTotal"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"Accelerated40C-3-1-Degradation-impTotal\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/2c5683d6-6e94-825b-056a-129a04c95e2f\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"DGP\",\n      \"display\": \"Degradation Products\"\n    },\n    \"text\": \"Degradation Products\"\n  },\n  \"subject\": {\n    \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.801\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"component\": {\n    \"code\": {\n      \"coding\": {\n        \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n        \"code\": \"IMP\",\n        \"display\": \"Impurity\"\n      }\n    },\n    \"valueCodeableConcept\": {\n      \"text\": \"Total Degradation Impurities\"\n    }\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/Accelerated40C-3-1-Water": {
    "title": "Observation: Accelerated40C-3-1-Water",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "Accelerated40C-3-1-Water"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"Accelerated40C-3-1-Water\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/186eb33e-a01d-4252-166c-b5ba5e8a697c\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"WaterContent\",\n      \"display\": \"Water Content\"\n    }\n  },\n  \"subject\": {\n    \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.1501\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/Accelerated40C-3-1-Microbiological": {
    "title": "Observation: Accelerated40C-3-1-Microbiological",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "Accelerated40C-3-1-Microbiological"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"Accelerated40C-3-1-Microbiological\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"Microbiological Quality\",\n      \"display\": \"Microbiological Quality\"\n    }\n  },\n  \"subject\": {\n    \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n  },\n  \"valueCodeableConcept\": {\n    \"text\": \"Complies\"\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/Accelerated40C-3-1-Uniformity": {
    "title": "Observation: Accelerated40C-3-1-Uniformity",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "Accelerated40C-3-1-Uniformity"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"Accelerated40C-3-1-Uniformity\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/ef781c18-8e86-7859-209b-469ee9ad42d8\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"uniformity-dosage\",\n      \"display\": \"Uniformity of dosage units (by weight)\"\n    }\n  },\n  \"subject\": {\n    \"reference\": \"Medication/7ef62d57-7cc6-9211-66d6-abc7e096093c\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/e3d2bc19-2f10-2b4d-1741-e4135fe612a9\"\n  },\n  \"valueCodeableConcept\": {\n    \"text\": \"Complies\"\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "DiagnosticReport/studyResultsReport": {
    "title": "DiagnosticReport: studyResultsReport",
    "details": [
      {
        "k": "Resource Type",
        "v": "DiagnosticReport"
      },
      {
        "k": "ID",
        "v": "studyResultsReport"
      },
      {
        "k": "Status",
        "v": "final"
      },
      {
        "k": "Code",
        "v": "Stability Study Report"
      }
    ],
    "json": "{\n  \"id\": \"studyResultsReport\",\n  \"extension\": [\n    {\n      \"valueReference\": {\n        \"reference\": \"PlanDefinition/c3973835-10ca-0796-0a26-aa8afafc9c5b\"\n      }\n    },\n    {\n      \"valueCodeableConcept\": {\n        \"text\": \"information about statistical model utilized to interpret stability study results\"\n      }\n    },\n    {\n      \"valueCodeableConcept\": {\n        \"coding\": {\n          \"system\": \"http://terminology.hl7.org/CodeSystem/container-orientation\",\n          \"code\": \"horizontal\",\n          \"display\": \"horizontal\"\n        },\n        \"text\": \"Horizontal\"\n      }\n    }\n  ],\n  \"identifier\": {\n    \"system\": \"https://eudract.europa.eu/example/identifier\",\n    \"value\": \"PLO555\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://terminology.hl7.org/CodeSystem/pharmaceutical-report-type\",\n      \"code\": \"Stability Study Report\",\n      \"display\": \"Stability Study Report\"\n    }\n  },\n  \"effectiveDateTime\": \"2019-09-08\",\n  \"performer\": {\n    \"reference\": \"Organization/6049d921-9935-90b7-4efc-894a66483c00\"\n  },\n  \"result\": [\n    {\n      \"reference\": \"Observation/588a6787-0454-55ef-0b8a-4c8941b6976c\"\n    },\n    {\n      \"reference\": \"Observation/930c7f69-2546-7148-2069-b3be3a755edf\"\n    },\n    {\n      \"reference\": \"Observation/8070745c-30c4-a52e-41fd-600a913578d4\"\n    },\n    {\n      \"reference\": \"Observation/f16113fe-27e7-0aa2-6787-9415f5051900\"\n    },\n    {\n      \"reference\": \"Observation/1b25eb25-9149-02f6-9676-c87f90c64904\"\n    },\n    {\n      \"reference\": \"Observation/004ed877-7729-834e-3b6b-a2cf4bdb2377\"\n    },\n    {\n      \"reference\": \"Observation/f958e1e9-6023-4e39-2ffe-a9c8f135a2dd\"\n    }\n  ],\n  \"conclusion\": \"The samples have been assessed and the conclusion is...\",\n  \"resourceType\": \"DiagnosticReport\"\n}"
  },
  "PlanDefinition/c3973835-10ca-0796-0a26-aa8afafc9c5b": {
    "title": "PlanDefinition: c3973835-10ca-0796-0a26-aa8afafc9c5b",
    "details": [
      {
        "k": "Resource Type",
        "v": "PlanDefinition"
      },
      {
        "k": "ID",
        "v": "c3973835-10ca-0796-0a26-aa8afafc9c5b"
      },
      {
        "k": "Status",
        "v": "active"
      }
    ],
    "json": "{\n  \"id\": \"c3973835-10ca-0796-0a26-aa8afafc9c5b\",\n  \"url\": \"http://example-server.com/fhir/PlanDefinition/c3973835-10ca-0796-0a26-aa8afafc9c5b\",\n  \"title\": \"Stability Monitoring Program\",\n  \"type\": {\n    \"coding\": {\n      \"system\": \"http://terminology.hl7.org/CodeSystem/pharmaceutical-plan-type\",\n      \"code\": \"1244588\",\n      \"display\": \"Stability Study Protocol\"\n    }\n  },\n  \"status\": \"active\",\n  \"subjectReference\": {\n    \"reference\": \"SubstanceDefinition/2e3a85b5-790a-a108-3627-edf0ec6f1210\"\n  },\n  \"description\": \"Description of the study study plan which includes tests, time points, storage conditions, method\",\n  \"action\": {\n    \"title\": \"Stability Test Protocol for Long-term and Accelerated Storage of Stelbatolol\",\n    \"action\": [\n      {\n        \"title\": \"Long-Term\",\n        \"description\": \"30\\u00b0C/65% RH\",\n        \"action\": [\n          {\n            \"title\": \"Initial\",\n            \"timingTiming\": {\n              \"repeat\": {\n                \"boundsRange\": {\n                  \"low\": {\n                    \"value\": \"0\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  },\n                  \"high\": {\n                    \"value\": \"0\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  }\n                },\n                \"frequency\": \"1\"\n              }\n            },\n            \"action\": {\n              \"title\": \"XY\",\n              \"definitionCanonical\": \"http://example-server.com/fhir/ActivityDefinition/10d7b693-7a0e-2f71-9a10-642e5a0a5d42\"\n            }\n          },\n          {\n            \"title\": \"3\",\n            \"timingTiming\": {\n              \"repeat\": {\n                \"boundsRange\": {\n                  \"low\": {\n                    \"value\": \"3\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  },\n                  \"high\": {\n                    \"value\": \"3\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  }\n                },\n                \"frequency\": \"1\"\n              }\n            },\n            \"action\": {\n              \"title\": \"X\",\n              \"definitionCanonical\": \"http://example-server.com/fhir/ActivityDefinition/480a61f8-14b3-233e-8e5f-7f0db9696a1e\"\n            }\n          },\n          {\n            \"title\": \"6\",\n            \"timingTiming\": {\n              \"repeat\": {\n                \"boundsRange\": {\n                  \"low\": {\n                    \"value\": \"6\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  },\n                  \"high\": {\n                    \"value\": \"6\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  }\n                },\n                \"frequency\": \"1\"\n              }\n            },\n            \"action\": {\n              \"title\": \"X\",\n              \"definitionCanonical\": \"http://example-server.com/fhir/ActivityDefinition/bee486c4-6ab5-6293-4114-d4be24f303d3\"\n            }\n          },\n          {\n            \"title\": \"9\",\n            \"timingTiming\": {\n              \"repeat\": {\n                \"boundsRange\": {\n                  \"low\": {\n                    \"value\": \"9\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  },\n                  \"high\": {\n                    \"value\": \"9\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  }\n                },\n                \"frequency\": \"1\"\n              }\n            },\n            \"action\": {\n              \"title\": \"X\",\n              \"definitionCanonical\": \"http://example-server.com/fhir/ActivityDefinition/99893d3c-520c-8d7b-6d73-f46b1a662201\"\n            }\n          },\n          {\n            \"title\": \"12\",\n            \"timingTiming\": {\n              \"repeat\": {\n                \"boundsRange\": {\n                  \"low\": {\n                    \"value\": \"12\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  },\n                  \"high\": {\n                    \"value\": \"12\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  }\n                },\n                \"frequency\": \"1\"\n              }\n            },\n            \"action\": {\n              \"title\": \"X\",\n              \"definitionCanonical\": \"http://example-server.com/fhir/ActivityDefinition/b3254b8e-6fc3-88d3-7d38-0afcf13c4f67\"\n            }\n          },\n          {\n            \"title\": \"18\",\n            \"timingTiming\": {\n              \"repeat\": {\n                \"boundsRange\": {\n                  \"low\": {\n                    \"value\": \"18\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  },\n                  \"high\": {\n                    \"value\": \"18\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  }\n                },\n                \"frequency\": \"1\"\n              }\n            },\n            \"action\": {\n              \"title\": \"X\",\n              \"definitionCanonical\": \"http://example-server.com/fhir/ActivityDefinition/c9b53a46-2f61-7b3f-5780-5f5c79a47f12\"\n            }\n          },\n          {\n            \"title\": \"24\",\n            \"timingTiming\": {\n              \"repeat\": {\n                \"boundsRange\": {\n                  \"low\": {\n                    \"value\": \"24\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  },\n                  \"high\": {\n                    \"value\": \"24\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  }\n                },\n                \"frequency\": \"1\"\n              }\n            },\n            \"action\": {\n              \"title\": \"X\",\n              \"definitionCanonical\": \"http://example-server.com/fhir/ActivityDefinition/d6f7de9d-57a5-6a2c-1c2f-0d65718860f2\"\n            }\n          },\n          {\n            \"title\": \"36\",\n            \"timingTiming\": {\n              \"repeat\": {\n                \"boundsRange\": {\n                  \"low\": {\n                    \"value\": \"36\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  },\n                  \"high\": {\n                    \"value\": \"36\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  }\n                },\n                \"frequency\": \"1\"\n              }\n            },\n            \"action\": {\n              \"title\": \"(X)\",\n              \"requiredBehavior\": \"could\",\n              \"definitionCanonical\": \"http://example-server.com/fhir/ActivityDefinition/75073965-82eb-407d-34cf-3a7767a38149\"\n            }\n          }\n        ]\n      },\n      {\n        \"title\": \"Accelerated\",\n        \"description\": \"40\\u00b0C/75% RH\",\n        \"action\": [\n          {\n            \"title\": \"Initial\",\n            \"timingTiming\": {\n              \"repeat\": {\n                \"boundsRange\": {\n                  \"low\": {\n                    \"value\": \"0\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  },\n                  \"high\": {\n                    \"value\": \"0\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  }\n                },\n                \"frequency\": \"1\"\n              }\n            },\n            \"action\": {\n              \"title\": \"XY\",\n              \"definitionCanonical\": \"http://example-server.com/fhir/ActivityDefinition/1b43a536-3c29-3427-0b93-e35866ef8495\"\n            }\n          },\n          {\n            \"title\": \"3\",\n            \"timingTiming\": {\n              \"repeat\": {\n                \"boundsRange\": {\n                  \"low\": {\n                    \"value\": \"3\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  },\n                  \"high\": {\n                    \"value\": \"3\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  }\n                },\n                \"frequency\": \"1\"\n              }\n            },\n            \"action\": {\n              \"title\": \"X\",\n              \"definitionCanonical\": \"http://example-server.com/fhir/ActivityDefinition/8a453cd8-1ac3-4c86-48c3-3e5ea9ee76a9\"\n            }\n          },\n          {\n            \"title\": \"6\",\n            \"timingTiming\": {\n              \"repeat\": {\n                \"boundsRange\": {\n                  \"low\": {\n                    \"value\": \"6\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  },\n                  \"high\": {\n                    \"value\": \"6\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  }\n                },\n                \"frequency\": \"1\"\n              }\n            },\n            \"action\": {\n              \"title\": \"X\",\n              \"definitionCanonical\": \"http://example-server.com/fhir/ActivityDefinition/cf2f00df-971f-0bab-8768-4251b1ad0817\"\n            }\n          },\n          {\n            \"title\": \"9\",\n            \"timingTiming\": {\n              \"repeat\": {\n                \"boundsRange\": {\n                  \"low\": {\n                    \"value\": \"9\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  },\n                  \"high\": {\n                    \"value\": \"9\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  }\n                },\n                \"frequency\": \"1\"\n              }\n            },\n            \"action\": {\n              \"title\": \"-\"\n            }\n          },\n          {\n            \"title\": \"12\",\n            \"timingTiming\": {\n              \"repeat\": {\n                \"boundsRange\": {\n                  \"low\": {\n                    \"value\": \"12\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  },\n                  \"high\": {\n                    \"value\": \"12\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  }\n                },\n                \"frequency\": \"1\"\n              }\n            },\n            \"action\": {\n              \"title\": \"-\"\n            }\n          },\n          {\n            \"title\": \"18\",\n            \"timingTiming\": {\n              \"repeat\": {\n                \"boundsRange\": {\n                  \"low\": {\n                    \"value\": \"18\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  },\n                  \"high\": {\n                    \"value\": \"18\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  }\n                },\n                \"frequency\": \"1\"\n              }\n            },\n            \"action\": {\n              \"title\": \"-\"\n            }\n          },\n          {\n            \"title\": \"24\",\n            \"timingTiming\": {\n              \"repeat\": {\n                \"boundsRange\": {\n                  \"low\": {\n                    \"value\": \"24\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  },\n                  \"high\": {\n                    \"value\": \"24\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  }\n                },\n                \"frequency\": \"1\"\n              }\n            },\n            \"action\": {\n              \"title\": \"-\"\n            }\n          },\n          {\n            \"title\": \"36\",\n            \"timingTiming\": {\n              \"repeat\": {\n                \"boundsRange\": {\n                  \"low\": {\n                    \"value\": \"36\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  },\n                  \"high\": {\n                    \"value\": \"36\",\n                    \"unit\": \"months\",\n                    \"system\": \"http://unitsofmeasure.org\",\n                    \"code\": \"mo\"\n                  }\n                },\n                \"frequency\": \"1\"\n              }\n            },\n            \"action\": {\n              \"title\": \"-\"\n            }\n          }\n        ]\n      }\n    ]\n  },\n  \"resourceType\": \"PlanDefinition\"\n}"
  },
  "SpecimenDefinition/643d8b44-71f4-2b58-07e8-51c22b294b25": {
    "title": "SpecimenDefinition: 643d8b44-71f4-2b58-07e8-51c22b294b25",
    "details": [
      {
        "k": "Resource Type",
        "v": "SpecimenDefinition"
      },
      {
        "k": "ID",
        "v": "643d8b44-71f4-2b58-07e8-51c22b294b25"
      },
      {
        "k": "Status",
        "v": "active"
      }
    ],
    "json": "{\n  \"id\": \"643d8b44-71f4-2b58-07e8-51c22b294b25\",\n  \"url\": \"http://example-server.com/fhir/SpecimenDefinition/643d8b44-71f4-2b58-07e8-51c22b294b25\",\n  \"status\": \"active\",\n  \"typeTested\": {\n    \"preference\": \"preferred\",\n    \"handling\": {\n      \"instruction\": \"30\\u00b0C/65% RH\"\n    }\n  },\n  \"resourceType\": \"SpecimenDefinition\"\n}"
  },
  "ActivityDefinition/10d7b693-7a0e-2f71-9a10-642e5a0a5d42": {
    "title": "ActivityDefinition: 10d7b693-7a0e-2f71-9a10-642e5a0a5d42",
    "details": [
      {
        "k": "Resource Type",
        "v": "ActivityDefinition"
      },
      {
        "k": "ID",
        "v": "10d7b693-7a0e-2f71-9a10-642e5a0a5d42"
      },
      {
        "k": "Status",
        "v": "active"
      }
    ],
    "json": "{\n  \"id\": \"10d7b693-7a0e-2f71-9a10-642e5a0a5d42\",\n  \"url\": \"http://example-server.com/fhir/ActivityDefinition/10d7b693-7a0e-2f71-9a10-642e5a0a5d42\",\n  \"title\": \"Long-term - 30\\u00b0C/65% RH - XY\",\n  \"status\": \"active\",\n  \"observationRequirement\": [\n    \"http://example-server.com/fhir/ObservationDefinition/18762cff-9e29-6e71-1184-e9202fee8cba\",\n    \"http://example-server.com/fhir/ObservationDefinition/31abea79-81da-17f8-9d8c-94e9bb75876e\"\n  ],\n  \"resourceType\": \"ActivityDefinition\"\n}"
  },
  "ActivityDefinition/480a61f8-14b3-233e-8e5f-7f0db9696a1e": {
    "title": "ActivityDefinition: 480a61f8-14b3-233e-8e5f-7f0db9696a1e",
    "details": [
      {
        "k": "Resource Type",
        "v": "ActivityDefinition"
      },
      {
        "k": "ID",
        "v": "480a61f8-14b3-233e-8e5f-7f0db9696a1e"
      },
      {
        "k": "Status",
        "v": "active"
      }
    ],
    "json": "{\n  \"id\": \"480a61f8-14b3-233e-8e5f-7f0db9696a1e\",\n  \"url\": \"http://example-server.com/fhir/ActivityDefinition/480a61f8-14b3-233e-8e5f-7f0db9696a1e\",\n  \"title\": \"Long-term - 30\\u00b0C/65% RH - X\",\n  \"status\": \"active\",\n  \"observationRequirement\": \"http://example-server.com/fhir/ObservationDefinition/18762cff-9e29-6e71-1184-e9202fee8cba\",\n  \"resourceType\": \"ActivityDefinition\"\n}"
  },
  "ActivityDefinition/bee486c4-6ab5-6293-4114-d4be24f303d3": {
    "title": "ActivityDefinition: bee486c4-6ab5-6293-4114-d4be24f303d3",
    "details": [
      {
        "k": "Resource Type",
        "v": "ActivityDefinition"
      },
      {
        "k": "ID",
        "v": "bee486c4-6ab5-6293-4114-d4be24f303d3"
      },
      {
        "k": "Status",
        "v": "active"
      }
    ],
    "json": "{\n  \"id\": \"bee486c4-6ab5-6293-4114-d4be24f303d3\",\n  \"url\": \"http://example-server.com/fhir/ActivityDefinition/bee486c4-6ab5-6293-4114-d4be24f303d3\",\n  \"title\": \"Long-term - 30\\u00b0C/65% RH - X\",\n  \"status\": \"active\",\n  \"observationRequirement\": \"http://example-server.com/fhir/ObservationDefinition/18762cff-9e29-6e71-1184-e9202fee8cba\",\n  \"resourceType\": \"ActivityDefinition\"\n}"
  },
  "ActivityDefinition/99893d3c-520c-8d7b-6d73-f46b1a662201": {
    "title": "ActivityDefinition: 99893d3c-520c-8d7b-6d73-f46b1a662201",
    "details": [
      {
        "k": "Resource Type",
        "v": "ActivityDefinition"
      },
      {
        "k": "ID",
        "v": "99893d3c-520c-8d7b-6d73-f46b1a662201"
      },
      {
        "k": "Status",
        "v": "active"
      }
    ],
    "json": "{\n  \"id\": \"99893d3c-520c-8d7b-6d73-f46b1a662201\",\n  \"url\": \"http://example-server.com/fhir/ActivityDefinition/99893d3c-520c-8d7b-6d73-f46b1a662201\",\n  \"title\": \"Long-term - 30\\u00b0C/65% RH - X\",\n  \"status\": \"active\",\n  \"observationRequirement\": \"http://example-server.com/fhir/ObservationDefinition/18762cff-9e29-6e71-1184-e9202fee8cba\",\n  \"resourceType\": \"ActivityDefinition\"\n}"
  },
  "ActivityDefinition/b3254b8e-6fc3-88d3-7d38-0afcf13c4f67": {
    "title": "ActivityDefinition: b3254b8e-6fc3-88d3-7d38-0afcf13c4f67",
    "details": [
      {
        "k": "Resource Type",
        "v": "ActivityDefinition"
      },
      {
        "k": "ID",
        "v": "b3254b8e-6fc3-88d3-7d38-0afcf13c4f67"
      },
      {
        "k": "Status",
        "v": "active"
      }
    ],
    "json": "{\n  \"id\": \"b3254b8e-6fc3-88d3-7d38-0afcf13c4f67\",\n  \"url\": \"http://example-server.com/fhir/ActivityDefinition/b3254b8e-6fc3-88d3-7d38-0afcf13c4f67\",\n  \"title\": \"Long-term - 30\\u00b0C/65% RH - X\",\n  \"status\": \"active\",\n  \"observationRequirement\": \"http://example-server.com/fhir/ObservationDefinition/18762cff-9e29-6e71-1184-e9202fee8cba\",\n  \"resourceType\": \"ActivityDefinition\"\n}"
  },
  "ActivityDefinition/c9b53a46-2f61-7b3f-5780-5f5c79a47f12": {
    "title": "ActivityDefinition: c9b53a46-2f61-7b3f-5780-5f5c79a47f12",
    "details": [
      {
        "k": "Resource Type",
        "v": "ActivityDefinition"
      },
      {
        "k": "ID",
        "v": "c9b53a46-2f61-7b3f-5780-5f5c79a47f12"
      },
      {
        "k": "Status",
        "v": "active"
      }
    ],
    "json": "{\n  \"id\": \"c9b53a46-2f61-7b3f-5780-5f5c79a47f12\",\n  \"url\": \"http://example-server.com/fhir/ActivityDefinition/c9b53a46-2f61-7b3f-5780-5f5c79a47f12\",\n  \"title\": \"Long-term - 30\\u00b0C/65% RH - X\",\n  \"status\": \"active\",\n  \"observationRequirement\": \"http://example-server.com/fhir/ObservationDefinition/18762cff-9e29-6e71-1184-e9202fee8cba\",\n  \"resourceType\": \"ActivityDefinition\"\n}"
  },
  "ActivityDefinition/d6f7de9d-57a5-6a2c-1c2f-0d65718860f2": {
    "title": "ActivityDefinition: d6f7de9d-57a5-6a2c-1c2f-0d65718860f2",
    "details": [
      {
        "k": "Resource Type",
        "v": "ActivityDefinition"
      },
      {
        "k": "ID",
        "v": "d6f7de9d-57a5-6a2c-1c2f-0d65718860f2"
      },
      {
        "k": "Status",
        "v": "active"
      }
    ],
    "json": "{\n  \"id\": \"d6f7de9d-57a5-6a2c-1c2f-0d65718860f2\",\n  \"url\": \"http://example-server.com/fhir/ActivityDefinition/d6f7de9d-57a5-6a2c-1c2f-0d65718860f2\",\n  \"title\": \"Long-term - 30\\u00b0C/65% RH - X\",\n  \"status\": \"active\",\n  \"observationRequirement\": \"http://example-server.com/fhir/ObservationDefinition/18762cff-9e29-6e71-1184-e9202fee8cba\",\n  \"resourceType\": \"ActivityDefinition\"\n}"
  },
  "ActivityDefinition/75073965-82eb-407d-34cf-3a7767a38149": {
    "title": "ActivityDefinition: 75073965-82eb-407d-34cf-3a7767a38149",
    "details": [
      {
        "k": "Resource Type",
        "v": "ActivityDefinition"
      },
      {
        "k": "ID",
        "v": "75073965-82eb-407d-34cf-3a7767a38149"
      },
      {
        "k": "Status",
        "v": "active"
      }
    ],
    "json": "{\n  \"id\": \"75073965-82eb-407d-34cf-3a7767a38149\",\n  \"url\": \"http://example-server.com/fhir/ActivityDefinition/75073965-82eb-407d-34cf-3a7767a38149\",\n  \"title\": \"Long-term - 30\\u00b0C/65% RH - X\",\n  \"status\": \"active\",\n  \"observationRequirement\": \"http://example-server.com/fhir/ObservationDefinition/18762cff-9e29-6e71-1184-e9202fee8cba\",\n  \"resourceType\": \"ActivityDefinition\"\n}"
  },
  "ObservationDefinition/18762cff-9e29-6e71-1184-e9202fee8cba": {
    "title": "ObservationDefinition: 18762cff-9e29-6e71-1184-e9202fee8cba",
    "details": [
      {
        "k": "Resource Type",
        "v": "ObservationDefinition"
      },
      {
        "k": "ID",
        "v": "18762cff-9e29-6e71-1184-e9202fee8cba"
      },
      {
        "k": "Status",
        "v": "active"
      },
      {
        "k": "Code",
        "v": "Battery of tests 'X' at 30\u00b0C/65% RH"
      }
    ],
    "json": "{\n  \"id\": \"18762cff-9e29-6e71-1184-e9202fee8cba\",\n  \"url\": \"http://example-server.com/fhir/ObservationDefinition/18762cff-9e29-6e71-1184-e9202fee8cba\",\n  \"title\": \"X\",\n  \"status\": \"active\",\n  \"code\": {\n    \"text\": \"Battery of tests 'X' at 30\\u00b0C/65% RH\"\n  },\n  \"specimen\": {\n    \"reference\": \"SpecimenDefinition/643d8b44-71f4-2b58-07e8-51c22b294b25\"\n  },\n  \"hasMember\": [\n    {\n      \"reference\": \"ObservationDefinition/559ffdc3-349b-a4a3-a651-ce2715f08d69\"\n    },\n    {\n      \"reference\": \"ObservationDefinition/7943795a-2abe-666f-545f-133e23b97119\"\n    },\n    {\n      \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n    }\n  ],\n  \"resourceType\": \"ObservationDefinition\"\n}"
  },
  "ObservationDefinition/559ffdc3-349b-a4a3-a651-ce2715f08d69": {
    "title": "ObservationDefinition: 559ffdc3-349b-a4a3-a651-ce2715f08d69",
    "details": [
      {
        "k": "Resource Type",
        "v": "ObservationDefinition"
      },
      {
        "k": "ID",
        "v": "559ffdc3-349b-a4a3-a651-ce2715f08d69"
      },
      {
        "k": "Status",
        "v": "active"
      },
      {
        "k": "Code",
        "v": "Description"
      }
    ],
    "json": "{\n  \"id\": \"559ffdc3-349b-a4a3-a651-ce2715f08d69\",\n  \"url\": \"http://example-server.com/fhir/ObservationDefinition/559ffdc3-349b-a4a3-a651-ce2715f08d69\",\n  \"title\": \"Description\",\n  \"status\": \"active\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"DESC\",\n      \"display\": \"Description\"\n    },\n    \"text\": \"Description\"\n  },\n  \"qualifiedValue\": {\n    \"extension\": {\n      \"valueString\": \"A white to brown powder\"\n    }\n  },\n  \"resourceType\": \"ObservationDefinition\"\n}"
  },
  "ObservationDefinition/7943795a-2abe-666f-545f-133e23b97119": {
    "title": "ObservationDefinition: 7943795a-2abe-666f-545f-133e23b97119",
    "details": [
      {
        "k": "Resource Type",
        "v": "ObservationDefinition"
      },
      {
        "k": "ID",
        "v": "7943795a-2abe-666f-545f-133e23b97119"
      },
      {
        "k": "Status",
        "v": "active"
      },
      {
        "k": "Code",
        "v": "Assay (% w/w) (Mean)"
      }
    ],
    "json": "{\n  \"id\": \"7943795a-2abe-666f-545f-133e23b97119\",\n  \"url\": \"http://example-server.com/fhir/ObservationDefinition/7943795a-2abe-666f-545f-133e23b97119\",\n  \"title\": \"Assay (% w/w) (Mean)\",\n  \"status\": \"active\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"ASSAY\",\n      \"display\": \"Assay\"\n    },\n    \"text\": \"Assay (% w/w) (Mean)\"\n  },\n  \"qualifiedValue\": {\n    \"range\": {\n      \"low\": {\n        \"value\": \"98\",\n        \"unit\": \"% w/w\",\n        \"system\": \"http://unitsofmeasure.org\",\n        \"code\": \"%\"\n      },\n      \"high\": {\n        \"value\": \"102\",\n        \"unit\": \"% w/w\",\n        \"system\": \"http://unitsofmeasure.org\",\n        \"code\": \"%\"\n      }\n    }\n  },\n  \"resourceType\": \"ObservationDefinition\"\n}"
  },
  "ObservationDefinition/31abea79-81da-17f8-9d8c-94e9bb75876e": {
    "title": "ObservationDefinition: 31abea79-81da-17f8-9d8c-94e9bb75876e",
    "details": [
      {
        "k": "Resource Type",
        "v": "ObservationDefinition"
      },
      {
        "k": "ID",
        "v": "31abea79-81da-17f8-9d8c-94e9bb75876e"
      },
      {
        "k": "Status",
        "v": "active"
      },
      {
        "k": "Code",
        "v": "Battery of tests 'Y' at 30\u00b0C/65% RH"
      }
    ],
    "json": "{\n  \"id\": \"31abea79-81da-17f8-9d8c-94e9bb75876e\",\n  \"url\": \"http://example-server.com/fhir/ObservationDefinition/31abea79-81da-17f8-9d8c-94e9bb75876e\",\n  \"title\": \"Y\",\n  \"status\": \"active\",\n  \"code\": {\n    \"text\": \"Battery of tests 'Y' at 30\\u00b0C/65% RH\"\n  },\n  \"specimen\": {\n    \"reference\": \"SpecimenDefinition/643d8b44-71f4-2b58-07e8-51c22b294b25\"\n  },\n  \"hasMember\": {\n    \"reference\": \"ObservationDefinition/6b96124b-1a44-0b6b-6783-d6c49360230b\"\n  },\n  \"resourceType\": \"ObservationDefinition\"\n}"
  },
  "ObservationDefinition/6b96124b-1a44-0b6b-6783-d6c49360230b": {
    "title": "ObservationDefinition: 6b96124b-1a44-0b6b-6783-d6c49360230b",
    "details": [
      {
        "k": "Resource Type",
        "v": "ObservationDefinition"
      },
      {
        "k": "ID",
        "v": "6b96124b-1a44-0b6b-6783-d6c49360230b"
      },
      {
        "k": "Status",
        "v": "active"
      },
      {
        "k": "Code",
        "v": "Identification"
      }
    ],
    "json": "{\n  \"id\": \"6b96124b-1a44-0b6b-6783-d6c49360230b\",\n  \"url\": \"http://example-server.com/fhir/ObservationDefinition/6b96124b-1a44-0b6b-6783-d6c49360230b\",\n  \"title\": \"Identification\",\n  \"status\": \"active\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"IDT\",\n      \"display\": \"Identification\"\n    },\n    \"text\": \"Identification\"\n  },\n  \"qualifiedValue\": {\n    \"extension\": {\n      \"valueString\": \"Complies\"\n    }\n  },\n  \"resourceType\": \"ObservationDefinition\"\n}"
  },
  "SpecimenDefinition/306637ec-1041-80e8-8e77-e7ca814253e1": {
    "title": "SpecimenDefinition: 306637ec-1041-80e8-8e77-e7ca814253e1",
    "details": [
      {
        "k": "Resource Type",
        "v": "SpecimenDefinition"
      },
      {
        "k": "ID",
        "v": "306637ec-1041-80e8-8e77-e7ca814253e1"
      },
      {
        "k": "Status",
        "v": "active"
      }
    ],
    "json": "{\n  \"id\": \"306637ec-1041-80e8-8e77-e7ca814253e1\",\n  \"url\": \"http://example-server.com/fhir/SpecimenDefinition/306637ec-1041-80e8-8e77-e7ca814253e1\",\n  \"status\": \"active\",\n  \"typeTested\": {\n    \"preference\": \"preferred\",\n    \"handling\": {\n      \"instruction\": \"40\\u00b0C/75% RH\"\n    }\n  },\n  \"resourceType\": \"SpecimenDefinition\"\n}"
  },
  "ActivityDefinition/1b43a536-3c29-3427-0b93-e35866ef8495": {
    "title": "ActivityDefinition: 1b43a536-3c29-3427-0b93-e35866ef8495",
    "details": [
      {
        "k": "Resource Type",
        "v": "ActivityDefinition"
      },
      {
        "k": "ID",
        "v": "1b43a536-3c29-3427-0b93-e35866ef8495"
      },
      {
        "k": "Status",
        "v": "active"
      }
    ],
    "json": "{\n  \"id\": \"1b43a536-3c29-3427-0b93-e35866ef8495\",\n  \"url\": \"http://example-server.com/fhir/ActivityDefinition/1b43a536-3c29-3427-0b93-e35866ef8495\",\n  \"title\": \"Accelerated - 40\\u00b0C/70% RH - XY\",\n  \"status\": \"active\",\n  \"observationRequirement\": [\n    \"http://example-server.com/fhir/ObservationDefinition/35fa7b97-98d3-35d3-5672-4ab1047d57fc\",\n    \"http://example-server.com/fhir/ObservationDefinition/accb8802-4223-61e2-8c79-2282e22a2bb6\"\n  ],\n  \"resourceType\": \"ActivityDefinition\"\n}"
  },
  "ActivityDefinition/8a453cd8-1ac3-4c86-48c3-3e5ea9ee76a9": {
    "title": "ActivityDefinition: 8a453cd8-1ac3-4c86-48c3-3e5ea9ee76a9",
    "details": [
      {
        "k": "Resource Type",
        "v": "ActivityDefinition"
      },
      {
        "k": "ID",
        "v": "8a453cd8-1ac3-4c86-48c3-3e5ea9ee76a9"
      },
      {
        "k": "Status",
        "v": "active"
      }
    ],
    "json": "{\n  \"id\": \"8a453cd8-1ac3-4c86-48c3-3e5ea9ee76a9\",\n  \"url\": \"http://example-server.com/fhir/ActivityDefinition/8a453cd8-1ac3-4c86-48c3-3e5ea9ee76a9\",\n  \"title\": \"Accelerated - 40\\u00b0C/70% RH - X\",\n  \"status\": \"active\",\n  \"observationRequirement\": \"http://example-server.com/fhir/ObservationDefinition/35fa7b97-98d3-35d3-5672-4ab1047d57fc\",\n  \"resourceType\": \"ActivityDefinition\"\n}"
  },
  "ActivityDefinition/cf2f00df-971f-0bab-8768-4251b1ad0817": {
    "title": "ActivityDefinition: cf2f00df-971f-0bab-8768-4251b1ad0817",
    "details": [
      {
        "k": "Resource Type",
        "v": "ActivityDefinition"
      },
      {
        "k": "ID",
        "v": "cf2f00df-971f-0bab-8768-4251b1ad0817"
      },
      {
        "k": "Status",
        "v": "active"
      }
    ],
    "json": "{\n  \"id\": \"cf2f00df-971f-0bab-8768-4251b1ad0817\",\n  \"url\": \"http://example-server.com/fhir/ActivityDefinition/cf2f00df-971f-0bab-8768-4251b1ad0817\",\n  \"title\": \"Accelerated - 40\\u00b0C/70% RH - X\",\n  \"status\": \"active\",\n  \"observationRequirement\": \"http://example-server.com/fhir/ObservationDefinition/35fa7b97-98d3-35d3-5672-4ab1047d57fc\",\n  \"resourceType\": \"ActivityDefinition\"\n}"
  },
  "ObservationDefinition/35fa7b97-98d3-35d3-5672-4ab1047d57fc": {
    "title": "ObservationDefinition: 35fa7b97-98d3-35d3-5672-4ab1047d57fc",
    "details": [
      {
        "k": "Resource Type",
        "v": "ObservationDefinition"
      },
      {
        "k": "ID",
        "v": "35fa7b97-98d3-35d3-5672-4ab1047d57fc"
      },
      {
        "k": "Status",
        "v": "active"
      },
      {
        "k": "Code",
        "v": "Battery of tests 'X' at 40\u00b0C/75% RH"
      }
    ],
    "json": "{\n  \"id\": \"35fa7b97-98d3-35d3-5672-4ab1047d57fc\",\n  \"url\": \"http://example-server.com/fhir/ObservationDefinition/35fa7b97-98d3-35d3-5672-4ab1047d57fc\",\n  \"title\": \"X\",\n  \"status\": \"active\",\n  \"code\": {\n    \"text\": \"Battery of tests 'X' at 40\\u00b0C/75% RH\"\n  },\n  \"specimen\": {\n    \"reference\": \"SpecimenDefinition/306637ec-1041-80e8-8e77-e7ca814253e1\"\n  },\n  \"hasMember\": [\n    {\n      \"reference\": \"ObservationDefinition/559ffdc3-349b-a4a3-a651-ce2715f08d69\"\n    },\n    {\n      \"reference\": \"ObservationDefinition/7943795a-2abe-666f-545f-133e23b97119\"\n    }\n  ],\n  \"resourceType\": \"ObservationDefinition\"\n}"
  },
  "ObservationDefinition/accb8802-4223-61e2-8c79-2282e22a2bb6": {
    "title": "ObservationDefinition: accb8802-4223-61e2-8c79-2282e22a2bb6",
    "details": [
      {
        "k": "Resource Type",
        "v": "ObservationDefinition"
      },
      {
        "k": "ID",
        "v": "accb8802-4223-61e2-8c79-2282e22a2bb6"
      },
      {
        "k": "Status",
        "v": "active"
      },
      {
        "k": "Code",
        "v": "Battery of tests 'Y' at 40\u00b0C/75% RH"
      }
    ],
    "json": "{\n  \"id\": \"accb8802-4223-61e2-8c79-2282e22a2bb6\",\n  \"url\": \"http://example-server.com/fhir/ObservationDefinition/accb8802-4223-61e2-8c79-2282e22a2bb6\",\n  \"title\": \"Y\",\n  \"status\": \"active\",\n  \"code\": {\n    \"text\": \"Battery of tests 'Y' at 40\\u00b0C/75% RH\"\n  },\n  \"specimen\": {\n    \"reference\": \"SpecimenDefinition/306637ec-1041-80e8-8e77-e7ca814253e1\"\n  },\n  \"hasMember\": {\n    \"reference\": \"ObservationDefinition/6b96124b-1a44-0b6b-6783-d6c49360230b\"\n  },\n  \"resourceType\": \"ObservationDefinition\"\n}"
  },
  "Specimen/6a5354bf-602c-99f1-324b-0bb5f7e06cd5": {
    "title": "Specimen: 6a5354bf-602c-99f1-324b-0bb5f7e06cd5",
    "details": [
      {
        "k": "Resource Type",
        "v": "Specimen"
      },
      {
        "k": "ID",
        "v": "6a5354bf-602c-99f1-324b-0bb5f7e06cd5"
      }
    ],
    "json": "{\n  \"id\": \"6a5354bf-602c-99f1-324b-0bb5f7e06cd5\",\n  \"collection\": {\n    \"collectedDateTime\": \"2020-06\"\n  },\n  \"processing\": [\n    {\n      \"description\": \"No storage\"\n    },\n    {\n      \"description\": \"25\\u00b0C/60% RH\"\n    }\n  ],\n  \"resourceType\": \"Specimen\"\n}"
  },
  "Observation/588a6787-0454-55ef-0b8a-4c8941b6976c": {
    "title": "Observation: 588a6787-0454-55ef-0b8a-4c8941b6976c",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "588a6787-0454-55ef-0b8a-4c8941b6976c"
      },
      {
        "k": "Status",
        "v": "final"
      },
      {
        "k": "Code",
        "v": "Test Components - Long-term 25C etc - Initial (XYZ)"
      }
    ],
    "json": "{\n  \"id\": \"588a6787-0454-55ef-0b8a-4c8941b6976c\",\n  \"contained\": [\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm30C-initial-1-Description\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/559ffdc3-349b-a4a3-a651-ce2715f08d69\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"DESC\",\n            \"display\": \"Description\"\n          },\n          \"text\": \"Description\"\n        },\n        \"subject\": {\n          \"reference\": \"Substance/a3fdc23b-6c16-2e65-481e-3fc895b37b87\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueCodeableConcept\": {\n          \"text\": \"Complies\"\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm30C-initial-1-Impurity1\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"DGP\",\n            \"display\": \"Degradation Products\"\n          },\n          \"text\": \"Degradation Products\"\n        },\n        \"subject\": {\n          \"reference\": \"Substance/a3fdc23b-6c16-2e65-481e-3fc895b37b87\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.1\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        },\n        \"component\": {\n          \"code\": {\n            \"coding\": {\n              \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n              \"code\": \"IMP\",\n              \"display\": \"Impurity\"\n            }\n          },\n          \"valueCodeableConcept\": {\n            \"text\": \"Impurity\"\n          }\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm30C-initial-1-Impurity2\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"Impurities\",\n            \"display\": \"Impurities\"\n          },\n          \"text\": \"Impurities\"\n        },\n        \"subject\": {\n          \"reference\": \"Substance/a3fdc23b-6c16-2e65-481e-3fc895b37b87\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.2\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        },\n        \"component\": {\n          \"code\": {\n            \"coding\": {\n              \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n              \"code\": \"IMP\",\n              \"display\": \"Impurity\"\n            }\n          },\n          \"valueCodeableConcept\": {\n            \"text\": \"Impurity 2\"\n          }\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm30C-initial-1-ImpurityUnspecified\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"Impurities\",\n            \"display\": \"Impurities\"\n          },\n          \"text\": \"Impurities\"\n        },\n        \"subject\": {\n          \"reference\": \"Substance/a3fdc23b-6c16-2e65-481e-3fc895b37b87\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.05\",\n          \"comparator\": \"<\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        },\n        \"component\": {\n          \"code\": {\n            \"coding\": {\n              \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n              \"code\": \"IMP\",\n              \"display\": \"Impurity\"\n            }\n          },\n          \"valueCodeableConcept\": {\n            \"text\": \"Any Unspecified Impurity\"\n          }\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm30C-initial-1-ImpurityTotal\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"Impurities\",\n            \"display\": \"Impurities\"\n          },\n          \"text\": \"Impurities\"\n        },\n        \"subject\": {\n          \"reference\": \"Substance/a3fdc23b-6c16-2e65-481e-3fc895b37b87\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.8\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        },\n        \"component\": {\n          \"code\": {\n            \"coding\": {\n              \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n              \"code\": \"IMP\",\n              \"display\": \"Impurity\"\n            }\n          },\n          \"valueCodeableConcept\": {\n            \"text\": \"Total Impurities\"\n          }\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm30C-initial-1-Assay\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/7943795a-2abe-666f-545f-133e23b97119\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"ASSAY\",\n            \"display\": \"Assay\"\n          }\n        },\n        \"subject\": {\n          \"reference\": \"Substance/a3fdc23b-6c16-2e65-481e-3fc895b37b87\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.15\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm30C-initial-1-Identification\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/6b96124b-1a44-0b6b-6783-d6c49360230b\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"IDT\",\n            \"display\": \"Identification\"\n          },\n          \"text\": \"Identification\"\n        },\n        \"subject\": {\n          \"reference\": \"Substance/a3fdc23b-6c16-2e65-481e-3fc895b37b87\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueCodeableConcept\": {\n          \"text\": \"Complies\"\n        }\n      }\n    }\n  ],\n  \"extension\": {\n    \"valueReference\": {\n      \"reference\": \"ActivityDefinition/10d7b693-7a0e-2f71-9a10-642e5a0a5d42\"\n    }\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"text\": \"Test Components - Long-term 25C etc - Initial (XYZ)\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/a3fdc23b-6c16-2e65-481e-3fc895b37b87\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"specimen\": {\n    \"reference\": \"Specimen/6a5354bf-602c-99f1-324b-0bb5f7e06cd5\"\n  },\n  \"hasMember\": [\n    {\n      \"reference\": \"#LongTerm30C-initial-1-Description\"\n    },\n    {\n      \"reference\": \"#LongTerm30C-initial-1-Assay\"\n    },\n    {\n      \"reference\": \"#LongTerm30C-initial-1-Impurity1\"\n    },\n    {\n      \"reference\": \"#LongTerm30C-initial-1-Impurity2\"\n    },\n    {\n      \"reference\": \"#LongTerm30C-initial-1-ImpurityUnspecified\"\n    },\n    {\n      \"reference\": \"#LongTerm30C-initial-1-ImpurityTotal\"\n    },\n    {\n      \"reference\": \"#LongTerm30C-initial-1-Identification\"\n    }\n  ],\n  \"resourceType\": \"Observation\"\n}"
  },
  "Specimen/3b550915-4467-83d3-340f-9bd6d2857191": {
    "title": "Specimen: 3b550915-4467-83d3-340f-9bd6d2857191",
    "details": [
      {
        "k": "Resource Type",
        "v": "Specimen"
      },
      {
        "k": "ID",
        "v": "3b550915-4467-83d3-340f-9bd6d2857191"
      }
    ],
    "json": "{\n  \"id\": \"3b550915-4467-83d3-340f-9bd6d2857191\",\n  \"collection\": {\n    \"collectedDateTime\": \"2020-06\"\n  },\n  \"processing\": [\n    {\n      \"description\": \"No storage\"\n    },\n    {\n      \"description\": \"25\\u00b0C/60% RH\"\n    }\n  ],\n  \"resourceType\": \"Specimen\"\n}"
  },
  "Observation/930c7f69-2546-7148-2069-b3be3a755edf": {
    "title": "Observation: 930c7f69-2546-7148-2069-b3be3a755edf",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "930c7f69-2546-7148-2069-b3be3a755edf"
      },
      {
        "k": "Status",
        "v": "final"
      },
      {
        "k": "Code",
        "v": "Test Components - Long-term 25C etc - Initial (XYZ)"
      }
    ],
    "json": "{\n  \"id\": \"930c7f69-2546-7148-2069-b3be3a755edf\",\n  \"contained\": [\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm30C-initial-2-Description\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/559ffdc3-349b-a4a3-a651-ce2715f08d69\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"DESC\",\n            \"display\": \"Description\"\n          },\n          \"text\": \"Description\"\n        },\n        \"subject\": {\n          \"reference\": \"Substance/cbcecab6-374c-396f-29be-877da7285e8d\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueCodeableConcept\": {\n          \"text\": \"Complies\"\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm30C-initial-2-Degradation-imp1\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"DGP\",\n            \"display\": \"Degradation Products\"\n          },\n          \"text\": \"Degradation Products\"\n        },\n        \"subject\": {\n          \"reference\": \"Substance/cbcecab6-374c-396f-29be-877da7285e8d\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.12\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        },\n        \"component\": {\n          \"code\": {\n            \"coding\": {\n              \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n              \"code\": \"IMP\",\n              \"display\": \"Impurity\"\n            }\n          },\n          \"valueCodeableConcept\": {\n            \"text\": \"Impurity\"\n          }\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm30C-initial-2-Degradation-imp2\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"Impurities\",\n            \"display\": \"Impurities\"\n          },\n          \"text\": \"Impurities\"\n        },\n        \"subject\": {\n          \"reference\": \"Substance/cbcecab6-374c-396f-29be-877da7285e8d\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.22\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        },\n        \"component\": {\n          \"code\": {\n            \"coding\": {\n              \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n              \"code\": \"IMP\",\n              \"display\": \"Impurity\"\n            }\n          },\n          \"valueCodeableConcept\": {\n            \"text\": \"Impurity 2\"\n          }\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm30C-initial-2-Degradation-impUnspecified\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"Impurities\",\n            \"display\": \"Impurities\"\n          },\n          \"text\": \"Impurities\"\n        },\n        \"subject\": {\n          \"reference\": \"Substance/cbcecab6-374c-396f-29be-877da7285e8d\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.052\",\n          \"comparator\": \"<\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        },\n        \"component\": {\n          \"code\": {\n            \"coding\": {\n              \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n              \"code\": \"IMP\",\n              \"display\": \"Impurity\"\n            }\n          },\n          \"valueCodeableConcept\": {\n            \"text\": \"Any Unspecified Impurity\"\n          }\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm30C-initial-2-Degradation-impTotal\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"Impurities\",\n            \"display\": \"Impurities\"\n          },\n          \"text\": \"Impurities\"\n        },\n        \"subject\": {\n          \"reference\": \"Substance/cbcecab6-374c-396f-29be-877da7285e8d\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.82\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        },\n        \"component\": {\n          \"code\": {\n            \"coding\": {\n              \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n              \"code\": \"IMP\",\n              \"display\": \"Impurity\"\n            }\n          },\n          \"valueCodeableConcept\": {\n            \"text\": \"Total Impurities\"\n          }\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm30C-initial-2-Assay\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/7943795a-2abe-666f-545f-133e23b97119\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"ASSAY\",\n            \"display\": \"Assay\"\n          }\n        },\n        \"subject\": {\n          \"reference\": \"Substance/cbcecab6-374c-396f-29be-877da7285e8d\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.152\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm30C-initial-2-Identification\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/6b96124b-1a44-0b6b-6783-d6c49360230b\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"IDT\",\n            \"display\": \"Identification\"\n          },\n          \"text\": \"Identification\"\n        },\n        \"subject\": {\n          \"reference\": \"Substance/cbcecab6-374c-396f-29be-877da7285e8d\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueCodeableConcept\": {\n          \"text\": \"Does not comply\"\n        }\n      }\n    }\n  ],\n  \"extension\": {\n    \"valueReference\": {\n      \"reference\": \"ActivityDefinition/10d7b693-7a0e-2f71-9a10-642e5a0a5d42\"\n    }\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"text\": \"Test Components - Long-term 25C etc - Initial (XYZ)\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/cbcecab6-374c-396f-29be-877da7285e8d\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"specimen\": {\n    \"reference\": \"Specimen/3b550915-4467-83d3-340f-9bd6d2857191\"\n  },\n  \"hasMember\": [\n    {\n      \"reference\": \"#LongTerm30C-initial-2-Description\"\n    },\n    {\n      \"reference\": \"#LongTerm30C-initial-2-Assay\"\n    },\n    {\n      \"reference\": \"#LongTerm30C-initial-2-Degradation-imp1\"\n    },\n    {\n      \"reference\": \"#LongTerm30C-initial-2-Degradation-imp2\"\n    },\n    {\n      \"reference\": \"#LongTerm30C-initial-2-Degradation-impUnspecified\"\n    },\n    {\n      \"reference\": \"#LongTerm30C-initial-2-Degradation-impTotal\"\n    },\n    {\n      \"reference\": \"#LongTerm30C-initial-2-Identification\"\n    }\n  ],\n  \"resourceType\": \"Observation\"\n}"
  },
  "Specimen/b1726ce3-8bb5-403e-2e9b-f5d79cc716f9": {
    "title": "Specimen: b1726ce3-8bb5-403e-2e9b-f5d79cc716f9",
    "details": [
      {
        "k": "Resource Type",
        "v": "Specimen"
      },
      {
        "k": "ID",
        "v": "b1726ce3-8bb5-403e-2e9b-f5d79cc716f9"
      }
    ],
    "json": "{\n  \"id\": \"b1726ce3-8bb5-403e-2e9b-f5d79cc716f9\",\n  \"collection\": {\n    \"collectedDateTime\": \"2020-06\"\n  },\n  \"processing\": [\n    {\n      \"description\": \"No storage\"\n    },\n    {\n      \"description\": \"25\\u00b0C/60% RH\"\n    }\n  ],\n  \"resourceType\": \"Specimen\"\n}"
  },
  "Observation/8070745c-30c4-a52e-41fd-600a913578d4": {
    "title": "Observation: 8070745c-30c4-a52e-41fd-600a913578d4",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "8070745c-30c4-a52e-41fd-600a913578d4"
      },
      {
        "k": "Status",
        "v": "final"
      },
      {
        "k": "Code",
        "v": "Test Components - Long-term 25C etc - Initial (XYZ)"
      }
    ],
    "json": "{\n  \"id\": \"8070745c-30c4-a52e-41fd-600a913578d4\",\n  \"contained\": [\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm30C-initial-3-Description\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/559ffdc3-349b-a4a3-a651-ce2715f08d69\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"DESC\",\n            \"display\": \"Description\"\n          },\n          \"text\": \"Description\"\n        },\n        \"subject\": {\n          \"reference\": \"Substance/ae1f3b4c-4f14-1460-6903-7260959ea2cd\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueCodeableConcept\": {\n          \"text\": \"Complies\"\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm30C-initial-3-Degradation-imp1\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"DGP\",\n            \"display\": \"Degradation Products\"\n          },\n          \"text\": \"Degradation Products\"\n        },\n        \"subject\": {\n          \"reference\": \"Substance/ae1f3b4c-4f14-1460-6903-7260959ea2cd\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.12\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        },\n        \"component\": {\n          \"code\": {\n            \"coding\": {\n              \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n              \"code\": \"IMP\",\n              \"display\": \"Impurity\"\n            }\n          },\n          \"valueCodeableConcept\": {\n            \"text\": \"Impurity\"\n          }\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm30C-initial-3-Degradation-imp2\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"Impurities\",\n            \"display\": \"Impurities\"\n          },\n          \"text\": \"Impurities\"\n        },\n        \"subject\": {\n          \"reference\": \"Substance/ae1f3b4c-4f14-1460-6903-7260959ea2cd\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.22\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        },\n        \"component\": {\n          \"code\": {\n            \"coding\": {\n              \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n              \"code\": \"IMP\",\n              \"display\": \"Impurity\"\n            }\n          },\n          \"valueCodeableConcept\": {\n            \"text\": \"Impurity 2\"\n          }\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm30C-initial-3-Degradation-impUnspecified\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"Impurities\",\n            \"display\": \"Impurities\"\n          },\n          \"text\": \"Impurities\"\n        },\n        \"subject\": {\n          \"reference\": \"Substance/ae1f3b4c-4f14-1460-6903-7260959ea2cd\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.052\",\n          \"comparator\": \"<\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        },\n        \"component\": {\n          \"code\": {\n            \"coding\": {\n              \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n              \"code\": \"IMP\",\n              \"display\": \"Impurity\"\n            }\n          },\n          \"valueCodeableConcept\": {\n            \"text\": \"Any Unspecified Impurity\"\n          }\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm30C-initial-3-Degradation-impTotal\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"Impurities\",\n            \"display\": \"Impurities\"\n          },\n          \"text\": \"Impurities\"\n        },\n        \"subject\": {\n          \"reference\": \"Substance/ae1f3b4c-4f14-1460-6903-7260959ea2cd\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.82\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        },\n        \"component\": {\n          \"code\": {\n            \"coding\": {\n              \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n              \"code\": \"IMP\",\n              \"display\": \"Impurity\"\n            }\n          },\n          \"valueCodeableConcept\": {\n            \"text\": \"Total Impurities\"\n          }\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm30C-initial-3-Assay\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/7943795a-2abe-666f-545f-133e23b97119\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"ASSAY\",\n            \"display\": \"Assay\"\n          }\n        },\n        \"subject\": {\n          \"reference\": \"Substance/ae1f3b4c-4f14-1460-6903-7260959ea2cd\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.152\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm30C-initial-3-Identification\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/6b96124b-1a44-0b6b-6783-d6c49360230b\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"IDT\",\n            \"display\": \"Identification\"\n          },\n          \"text\": \"Identification\"\n        },\n        \"subject\": {\n          \"reference\": \"Substance/ae1f3b4c-4f14-1460-6903-7260959ea2cd\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueCodeableConcept\": {\n          \"text\": \"Does not comply\"\n        }\n      }\n    }\n  ],\n  \"extension\": {\n    \"valueReference\": {\n      \"reference\": \"ActivityDefinition/10d7b693-7a0e-2f71-9a10-642e5a0a5d42\"\n    }\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"text\": \"Test Components - Long-term 25C etc - Initial (XYZ)\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/ae1f3b4c-4f14-1460-6903-7260959ea2cd\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"specimen\": {\n    \"reference\": \"Specimen/b1726ce3-8bb5-403e-2e9b-f5d79cc716f9\"\n  },\n  \"hasMember\": [\n    {\n      \"reference\": \"#LongTerm30C-initial-3-Description\"\n    },\n    {\n      \"reference\": \"#LongTerm30C-initial-3-Assay\"\n    },\n    {\n      \"reference\": \"#LongTerm30C-initial-3-Degradation-imp1\"\n    },\n    {\n      \"reference\": \"#LongTerm30C-initial-3-Degradation-imp2\"\n    },\n    {\n      \"reference\": \"#LongTerm30C-initial-3-Degradation-impUnspecified\"\n    },\n    {\n      \"reference\": \"#LongTerm30C-initial-3-Degradation-impTotal\"\n    },\n    {\n      \"reference\": \"#LongTerm30C-initial-3-Identification\"\n    }\n  ],\n  \"resourceType\": \"Observation\"\n}"
  },
  "Specimen/7aa5fdea-17d7-29f1-1ed4-5c05eb62285a": {
    "title": "Specimen: 7aa5fdea-17d7-29f1-1ed4-5c05eb62285a",
    "details": [
      {
        "k": "Resource Type",
        "v": "Specimen"
      },
      {
        "k": "ID",
        "v": "7aa5fdea-17d7-29f1-1ed4-5c05eb62285a"
      }
    ],
    "json": "{\n  \"id\": \"7aa5fdea-17d7-29f1-1ed4-5c05eb62285a\",\n  \"collection\": {\n    \"collectedDateTime\": \"2020-06\"\n  },\n  \"processing\": [\n    {\n      \"description\": \"Store for 18 months\",\n      \"timePeriod\": {\n        \"extension\": {\n          \"valueDuration\": {\n            \"value\": \"18\",\n            \"unit\": \"month\"\n          }\n        },\n        \"start\": \"2020-12\",\n        \"end\": \"2022-06\"\n      }\n    },\n    {\n      \"description\": \"30\\u00b0C/65% RH\"\n    }\n  ],\n  \"resourceType\": \"Specimen\"\n}"
  },
  "Specimen/872a645f-120e-44c0-62c0-9be05acf543b": {
    "title": "Specimen: 872a645f-120e-44c0-62c0-9be05acf543b",
    "details": [
      {
        "k": "Resource Type",
        "v": "Specimen"
      },
      {
        "k": "ID",
        "v": "872a645f-120e-44c0-62c0-9be05acf543b"
      }
    ],
    "json": "{\n  \"id\": \"872a645f-120e-44c0-62c0-9be05acf543b\",\n  \"collection\": {\n    \"collectedDateTime\": \"2020-06\"\n  },\n  \"processing\": [\n    {\n      \"description\": \"Store for 18 months\",\n      \"timePeriod\": {\n        \"extension\": {\n          \"valueDuration\": {\n            \"value\": \"18\",\n            \"unit\": \"month\"\n          }\n        },\n        \"start\": \"2020-12\",\n        \"end\": \"2022-06\"\n      }\n    },\n    {\n      \"description\": \"30\\u00b0C/65% RH\"\n    }\n  ],\n  \"resourceType\": \"Specimen\"\n}"
  },
  "Specimen/7c06a03c-9cf7-2e1b-a236-d60038f1439b": {
    "title": "Specimen: 7c06a03c-9cf7-2e1b-a236-d60038f1439b",
    "details": [
      {
        "k": "Resource Type",
        "v": "Specimen"
      },
      {
        "k": "ID",
        "v": "7c06a03c-9cf7-2e1b-a236-d60038f1439b"
      }
    ],
    "json": "{\n  \"id\": \"7c06a03c-9cf7-2e1b-a236-d60038f1439b\",\n  \"collection\": {\n    \"collectedDateTime\": \"2020-06\"\n  },\n  \"processing\": [\n    {\n      \"description\": \"Store for 18 months\",\n      \"timePeriod\": {\n        \"extension\": {\n          \"valueDuration\": {\n            \"value\": \"18\",\n            \"unit\": \"month\"\n          }\n        },\n        \"start\": \"2020-12\",\n        \"end\": \"2022-06\"\n      }\n    },\n    {\n      \"description\": \"30\\u00b0C/65% RH\"\n    }\n  ],\n  \"resourceType\": \"Specimen\"\n}"
  },
  "Observation/f16113fe-27e7-0aa2-6787-9415f5051900": {
    "title": "Observation: f16113fe-27e7-0aa2-6787-9415f5051900",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "f16113fe-27e7-0aa2-6787-9415f5051900"
      },
      {
        "k": "Status",
        "v": "final"
      },
      {
        "k": "Code",
        "v": "Long-term - 30\u00b0C/65% RH - 18 months (X)"
      }
    ],
    "json": "{\n  \"id\": \"f16113fe-27e7-0aa2-6787-9415f5051900\",\n  \"contained\": [\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm30C-18m-1-Description\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/559ffdc3-349b-a4a3-a651-ce2715f08d69\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"DESC\",\n            \"display\": \"Description\"\n          },\n          \"text\": \"Description\"\n        },\n        \"subject\": {\n          \"reference\": \"Substance/a3fdc23b-6c16-2e65-481e-3fc895b37b87\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueCodeableConcept\": {\n          \"text\": \"Complies\"\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm30C-18m-1-Impurity1\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"DGP\",\n            \"display\": \"Degradation Products\"\n          },\n          \"text\": \"Degradation Products\"\n        },\n        \"subject\": {\n          \"reference\": \"Substance/a3fdc23b-6c16-2e65-481e-3fc895b37b87\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.118\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        },\n        \"component\": {\n          \"code\": {\n            \"coding\": {\n              \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n              \"code\": \"IMP\",\n              \"display\": \"Impurity\"\n            }\n          },\n          \"valueCodeableConcept\": {\n            \"text\": \"Impurity\"\n          }\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm30C-18m-1-Impurity2\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"Impurities\",\n            \"display\": \"Impurities\"\n          },\n          \"text\": \"Impurities\"\n        },\n        \"subject\": {\n          \"reference\": \"Substance/a3fdc23b-6c16-2e65-481e-3fc895b37b87\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.218\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        },\n        \"component\": {\n          \"code\": {\n            \"coding\": {\n              \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n              \"code\": \"IMP\",\n              \"display\": \"Impurity\"\n            }\n          },\n          \"valueCodeableConcept\": {\n            \"text\": \"Impurity 2\"\n          }\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm30C-18m-1-ImpurityUnspecified\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"Impurities\",\n            \"display\": \"Impurities\"\n          },\n          \"text\": \"Impurities\"\n        },\n        \"subject\": {\n          \"reference\": \"Substance/a3fdc23b-6c16-2e65-481e-3fc895b37b87\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.0518\",\n          \"comparator\": \"<\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        },\n        \"component\": {\n          \"code\": {\n            \"coding\": {\n              \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n              \"code\": \"IMP\",\n              \"display\": \"Impurity\"\n            }\n          },\n          \"valueCodeableConcept\": {\n            \"text\": \"Any Unspecified Impurity\"\n          }\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm30C-18m-1-ImpurityTotal\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"Impurities\",\n            \"display\": \"Impurities\"\n          },\n          \"text\": \"Impurities\"\n        },\n        \"subject\": {\n          \"reference\": \"Substance/a3fdc23b-6c16-2e65-481e-3fc895b37b87\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.818\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        },\n        \"component\": {\n          \"code\": {\n            \"coding\": {\n              \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n              \"code\": \"IMP\",\n              \"display\": \"Impurity\"\n            }\n          },\n          \"valueCodeableConcept\": {\n            \"text\": \"Total Impurities\"\n          }\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm30C-18m-1-Assay\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/7943795a-2abe-666f-545f-133e23b97119\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"ASSAY\",\n            \"display\": \"Assay\"\n          }\n        },\n        \"subject\": {\n          \"reference\": \"Substance/a3fdc23b-6c16-2e65-481e-3fc895b37b87\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.118\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm30C-18m-1-Identification\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/6b96124b-1a44-0b6b-6783-d6c49360230b\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"IDT\",\n            \"display\": \"Identification\"\n          },\n          \"text\": \"Identification\"\n        },\n        \"subject\": {\n          \"reference\": \"Substance/a3fdc23b-6c16-2e65-481e-3fc895b37b87\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueCodeableConcept\": {\n          \"text\": \"Complies\"\n        }\n      }\n    }\n  ],\n  \"extension\": {\n    \"valueReference\": {\n      \"reference\": \"ActivityDefinition/c9b53a46-2f61-7b3f-5780-5f5c79a47f12\"\n    }\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"text\": \"Long-term - 30\\u00b0C/65% RH - 18 months (X)\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/a3fdc23b-6c16-2e65-481e-3fc895b37b87\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"specimen\": {\n    \"reference\": \"Specimen/7aa5fdea-17d7-29f1-1ed4-5c05eb62285a\"\n  },\n  \"hasMember\": [\n    {\n      \"reference\": \"#LongTerm30C-18m-1-Description\"\n    },\n    {\n      \"reference\": \"#LongTerm30C-18m-1-Assay\"\n    },\n    {\n      \"reference\": \"#LongTerm30C-18m-1-Impurity1\"\n    },\n    {\n      \"reference\": \"#LongTerm30C-18m-1-Impurity2\"\n    },\n    {\n      \"reference\": \"#LongTerm30C-18m-1-ImpurityUnspecified\"\n    },\n    {\n      \"reference\": \"#LongTerm30C-18m-1-ImpurityTotal\"\n    },\n    {\n      \"reference\": \"#LongTerm30C-18m-1-Identification\"\n    }\n  ],\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/1b25eb25-9149-02f6-9676-c87f90c64904": {
    "title": "Observation: 1b25eb25-9149-02f6-9676-c87f90c64904",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "1b25eb25-9149-02f6-9676-c87f90c64904"
      },
      {
        "k": "Status",
        "v": "final"
      },
      {
        "k": "Code",
        "v": "Long-term - 30\u00b0C/65% RH - 18 months (X)"
      }
    ],
    "json": "{\n  \"id\": \"1b25eb25-9149-02f6-9676-c87f90c64904\",\n  \"contained\": [\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm30C-18m-2-Description\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/559ffdc3-349b-a4a3-a651-ce2715f08d69\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"DESC\",\n            \"display\": \"Description\"\n          },\n          \"text\": \"Description\"\n        },\n        \"subject\": {\n          \"reference\": \"Substance/cbcecab6-374c-396f-29be-877da7285e8d\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueCodeableConcept\": {\n          \"text\": \"Complies\"\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm30C-18m-2-Impurity1\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"DGP\",\n            \"display\": \"Degradation Products\"\n          },\n          \"text\": \"Degradation Products\"\n        },\n        \"subject\": {\n          \"reference\": \"Substance/cbcecab6-374c-396f-29be-877da7285e8d\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.118\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        },\n        \"component\": {\n          \"code\": {\n            \"coding\": {\n              \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n              \"code\": \"IMP\",\n              \"display\": \"Impurity\"\n            }\n          },\n          \"valueCodeableConcept\": {\n            \"text\": \"Impurity\"\n          }\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm30C-18m-2-Impurity2\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"Impurities\",\n            \"display\": \"Impurities\"\n          },\n          \"text\": \"Impurities\"\n        },\n        \"subject\": {\n          \"reference\": \"Substance/cbcecab6-374c-396f-29be-877da7285e8d\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.218\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        },\n        \"component\": {\n          \"code\": {\n            \"coding\": {\n              \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n              \"code\": \"IMP\",\n              \"display\": \"Impurity\"\n            }\n          },\n          \"valueCodeableConcept\": {\n            \"text\": \"Impurity 2\"\n          }\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm30C-18m-2-ImpurityUnspecified\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"Impurities\",\n            \"display\": \"Impurities\"\n          },\n          \"text\": \"Impurities\"\n        },\n        \"subject\": {\n          \"reference\": \"Substance/cbcecab6-374c-396f-29be-877da7285e8d\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.0518\",\n          \"comparator\": \"<\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        },\n        \"component\": {\n          \"code\": {\n            \"coding\": {\n              \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n              \"code\": \"IMP\",\n              \"display\": \"Impurity\"\n            }\n          },\n          \"valueCodeableConcept\": {\n            \"text\": \"Any Unspecified Impurity\"\n          }\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm30C-18m-2-ImpurityTotal\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"Impurities\",\n            \"display\": \"Impurities\"\n          },\n          \"text\": \"Impurities\"\n        },\n        \"subject\": {\n          \"reference\": \"Substance/cbcecab6-374c-396f-29be-877da7285e8d\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.818\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        },\n        \"component\": {\n          \"code\": {\n            \"coding\": {\n              \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n              \"code\": \"IMP\",\n              \"display\": \"Impurity\"\n            }\n          },\n          \"valueCodeableConcept\": {\n            \"text\": \"Total Impurities\"\n          }\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm30C-18m-2-Assay\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/7943795a-2abe-666f-545f-133e23b97119\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"ASSAY\",\n            \"display\": \"Assay\"\n          }\n        },\n        \"subject\": {\n          \"reference\": \"Substance/cbcecab6-374c-396f-29be-877da7285e8d\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.118\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm30C-18m-2-Identification\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/6b96124b-1a44-0b6b-6783-d6c49360230b\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"IDT\",\n            \"display\": \"Identification\"\n          },\n          \"text\": \"Identification\"\n        },\n        \"subject\": {\n          \"reference\": \"Substance/cbcecab6-374c-396f-29be-877da7285e8d\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueCodeableConcept\": {\n          \"text\": \"Complies\"\n        }\n      }\n    }\n  ],\n  \"extension\": {\n    \"valueReference\": {\n      \"reference\": \"ActivityDefinition/c9b53a46-2f61-7b3f-5780-5f5c79a47f12\"\n    }\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"text\": \"Long-term - 30\\u00b0C/65% RH - 18 months (X)\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/cbcecab6-374c-396f-29be-877da7285e8d\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"specimen\": {\n    \"reference\": \"Specimen/872a645f-120e-44c0-62c0-9be05acf543b\"\n  },\n  \"hasMember\": [\n    {\n      \"reference\": \"#LongTerm30C-18m-2-Description\"\n    },\n    {\n      \"reference\": \"#LongTerm30C-18m-2-Assay\"\n    },\n    {\n      \"reference\": \"#LongTerm30C-18m-2-Impurity1\"\n    },\n    {\n      \"reference\": \"#LongTerm30C-18m-2-Impurity2\"\n    },\n    {\n      \"reference\": \"#LongTerm30C-18m-2-ImpurityUnspecified\"\n    },\n    {\n      \"reference\": \"#LongTerm30C-18m-2-ImpurityTotal\"\n    },\n    {\n      \"reference\": \"#LongTerm30C-18m-2-Identification\"\n    }\n  ],\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/004ed877-7729-834e-3b6b-a2cf4bdb2377": {
    "title": "Observation: 004ed877-7729-834e-3b6b-a2cf4bdb2377",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "004ed877-7729-834e-3b6b-a2cf4bdb2377"
      },
      {
        "k": "Status",
        "v": "final"
      },
      {
        "k": "Code",
        "v": "Long-term - 30\u00b0C/65% RH - 18 months (X)"
      }
    ],
    "json": "{\n  \"id\": \"004ed877-7729-834e-3b6b-a2cf4bdb2377\",\n  \"contained\": [\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm30C-18m-3-Description\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/559ffdc3-349b-a4a3-a651-ce2715f08d69\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"DESC\",\n            \"display\": \"Description\"\n          },\n          \"text\": \"Description\"\n        },\n        \"subject\": {\n          \"reference\": \"Substance/ae1f3b4c-4f14-1460-6903-7260959ea2cd\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueCodeableConcept\": {\n          \"text\": \"Complies\"\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm30C-18m-3-Impurity1\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"DGP\",\n            \"display\": \"Degradation Products\"\n          },\n          \"text\": \"Degradation Products\"\n        },\n        \"subject\": {\n          \"reference\": \"Substance/ae1f3b4c-4f14-1460-6903-7260959ea2cd\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.118\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        },\n        \"component\": {\n          \"code\": {\n            \"coding\": {\n              \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n              \"code\": \"IMP\",\n              \"display\": \"Impurity\"\n            }\n          },\n          \"valueCodeableConcept\": {\n            \"text\": \"Impurity\"\n          }\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm30C-18m-3-Impurity2\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"Impurities\",\n            \"display\": \"Impurities\"\n          },\n          \"text\": \"Impurities\"\n        },\n        \"subject\": {\n          \"reference\": \"Substance/ae1f3b4c-4f14-1460-6903-7260959ea2cd\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.218\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        },\n        \"component\": {\n          \"code\": {\n            \"coding\": {\n              \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n              \"code\": \"IMP\",\n              \"display\": \"Impurity\"\n            }\n          },\n          \"valueCodeableConcept\": {\n            \"text\": \"Impurity 2\"\n          }\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm30C-18m-3-ImpurityUnspecified\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"Impurities\",\n            \"display\": \"Impurities\"\n          },\n          \"text\": \"Impurities\"\n        },\n        \"subject\": {\n          \"reference\": \"Substance/ae1f3b4c-4f14-1460-6903-7260959ea2cd\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.0518\",\n          \"comparator\": \"<\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        },\n        \"component\": {\n          \"code\": {\n            \"coding\": {\n              \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n              \"code\": \"IMP\",\n              \"display\": \"Impurity\"\n            }\n          },\n          \"valueCodeableConcept\": {\n            \"text\": \"Any Unspecified Impurity\"\n          }\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm30C-18m-3-ImpurityTotal\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"Impurities\",\n            \"display\": \"Impurities\"\n          },\n          \"text\": \"Impurities\"\n        },\n        \"subject\": {\n          \"reference\": \"Substance/ae1f3b4c-4f14-1460-6903-7260959ea2cd\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.818\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        },\n        \"component\": {\n          \"code\": {\n            \"coding\": {\n              \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n              \"code\": \"IMP\",\n              \"display\": \"Impurity\"\n            }\n          },\n          \"valueCodeableConcept\": {\n            \"text\": \"Total Impurities\"\n          }\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm30C-18m-3-Assay\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/7943795a-2abe-666f-545f-133e23b97119\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"ASSAY\",\n            \"display\": \"Assay\"\n          }\n        },\n        \"subject\": {\n          \"reference\": \"Substance/ae1f3b4c-4f14-1460-6903-7260959ea2cd\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.118\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"LongTerm30C-18m-3-Identification\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/6b96124b-1a44-0b6b-6783-d6c49360230b\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"IDT\",\n            \"display\": \"Identification\"\n          },\n          \"text\": \"Identification\"\n        },\n        \"subject\": {\n          \"reference\": \"Substance/ae1f3b4c-4f14-1460-6903-7260959ea2cd\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueCodeableConcept\": {\n          \"text\": \"Complies\"\n        }\n      }\n    }\n  ],\n  \"extension\": {\n    \"valueReference\": {\n      \"reference\": \"ActivityDefinition/c9b53a46-2f61-7b3f-5780-5f5c79a47f12\"\n    }\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"text\": \"Long-term - 30\\u00b0C/65% RH - 18 months (X)\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/ae1f3b4c-4f14-1460-6903-7260959ea2cd\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"specimen\": {\n    \"reference\": \"Specimen/7c06a03c-9cf7-2e1b-a236-d60038f1439b\"\n  },\n  \"hasMember\": [\n    {\n      \"reference\": \"#LongTerm30C-18m-3-Description\"\n    },\n    {\n      \"reference\": \"#LongTerm30C-18m-3-Assay\"\n    },\n    {\n      \"reference\": \"#LongTerm30C-18m-3-Impurity1\"\n    },\n    {\n      \"reference\": \"#LongTerm30C-18m-3-Impurity2\"\n    },\n    {\n      \"reference\": \"#LongTerm30C-18m-3-ImpurityUnspecified\"\n    },\n    {\n      \"reference\": \"#LongTerm30C-18m-3-ImpurityTotal\"\n    },\n    {\n      \"reference\": \"#LongTerm30C-18m-3-Identification\"\n    }\n  ],\n  \"resourceType\": \"Observation\"\n}"
  },
  "Specimen/b04c9321-069c-4da8-8ed0-86337ea22c30": {
    "title": "Specimen: b04c9321-069c-4da8-8ed0-86337ea22c30",
    "details": [
      {
        "k": "Resource Type",
        "v": "Specimen"
      },
      {
        "k": "ID",
        "v": "b04c9321-069c-4da8-8ed0-86337ea22c30"
      }
    ],
    "json": "{\n  \"id\": \"b04c9321-069c-4da8-8ed0-86337ea22c30\",\n  \"collection\": {\n    \"collectedDateTime\": \"2020-06\"\n  },\n  \"processing\": [\n    {\n      \"description\": \"No storage\"\n    },\n    {\n      \"description\": \"40\\u00b0C/75% RH\"\n    }\n  ],\n  \"resourceType\": \"Specimen\"\n}"
  },
  "Observation/f958e1e9-6023-4e39-2ffe-a9c8f135a2dd": {
    "title": "Observation: f958e1e9-6023-4e39-2ffe-a9c8f135a2dd",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "f958e1e9-6023-4e39-2ffe-a9c8f135a2dd"
      },
      {
        "k": "Status",
        "v": "final"
      },
      {
        "k": "Code",
        "v": "Accelerated - 40\u00b0C/67% RH - 3 months (X)"
      }
    ],
    "json": "{\n  \"id\": \"f958e1e9-6023-4e39-2ffe-a9c8f135a2dd\",\n  \"contained\": [\n    {\n      \"Observation\": {\n        \"id\": \"Accelerated40C-3m-1-Description\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/559ffdc3-349b-a4a3-a651-ce2715f08d69\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"DESC\",\n            \"display\": \"Description\"\n          },\n          \"text\": \"Description\"\n        },\n        \"subject\": {\n          \"reference\": \"Substance/a3fdc23b-6c16-2e65-481e-3fc895b37b87\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueCodeableConcept\": {\n          \"text\": \"Doesn't comply\"\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"Accelerated40C-3m-1-Impurity1\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"DGP\",\n            \"display\": \"Degradation Products\"\n          },\n          \"text\": \"Degradation Products\"\n        },\n        \"subject\": {\n          \"reference\": \"Substance/a3fdc23b-6c16-2e65-481e-3fc895b37b87\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.113\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        },\n        \"component\": {\n          \"code\": {\n            \"coding\": {\n              \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n              \"code\": \"IMP\",\n              \"display\": \"Impurity\"\n            }\n          },\n          \"valueCodeableConcept\": {\n            \"text\": \"Impurity\"\n          }\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"Accelerated40C-3m-1-Impurity2\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"Impurities\",\n            \"display\": \"Impurities\"\n          },\n          \"text\": \"Impurities\"\n        },\n        \"subject\": {\n          \"reference\": \"Substance/a3fdc23b-6c16-2e65-481e-3fc895b37b87\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.213\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        },\n        \"component\": {\n          \"code\": {\n            \"coding\": {\n              \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n              \"code\": \"IMP\",\n              \"display\": \"Impurity\"\n            }\n          },\n          \"valueCodeableConcept\": {\n            \"text\": \"Impurity 2\"\n          }\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"Accelerated40C-3m-1-ImpurityUnspecified\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"Impurities\",\n            \"display\": \"Impurities\"\n          },\n          \"text\": \"Impurities\"\n        },\n        \"subject\": {\n          \"reference\": \"Substance/a3fdc23b-6c16-2e65-481e-3fc895b37b87\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.0513\",\n          \"comparator\": \"<\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        },\n        \"component\": {\n          \"code\": {\n            \"coding\": {\n              \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n              \"code\": \"IMP\",\n              \"display\": \"Impurity\"\n            }\n          },\n          \"valueCodeableConcept\": {\n            \"text\": \"Any Unspecified Impurity\"\n          }\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"Accelerated40C-3m-1-ImpurityTotal\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"Impurities\",\n            \"display\": \"Impurities\"\n          },\n          \"text\": \"Impurities\"\n        },\n        \"subject\": {\n          \"reference\": \"Substance/ae1f3b4c-4f14-1460-6903-7260959ea2cd\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.813\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        },\n        \"component\": {\n          \"code\": {\n            \"coding\": {\n              \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n              \"code\": \"IMP\",\n              \"display\": \"Impurity\"\n            }\n          },\n          \"valueCodeableConcept\": {\n            \"text\": \"Total Impurities\"\n          }\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"Accelerated40C-3m-1-Assay\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/7943795a-2abe-666f-545f-133e23b97119\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"ASSAY\",\n            \"display\": \"Assay\"\n          }\n        },\n        \"subject\": {\n          \"reference\": \"Substance/ae1f3b4c-4f14-1460-6903-7260959ea2cd\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueQuantity\": {\n          \"value\": \"0.113\",\n          \"unit\": \"% w/w\",\n          \"system\": \"http://unitsofmeasure.org\",\n          \"code\": \"%\"\n        }\n      }\n    },\n    {\n      \"Observation\": {\n        \"id\": \"Accelerated40C-3m-1-Identification\",\n        \"instantiatesReference\": {\n          \"reference\": \"ObservationDefinition/6b96124b-1a44-0b6b-6783-d6c49360230b\"\n        },\n        \"status\": \"final\",\n        \"code\": {\n          \"coding\": {\n            \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n            \"code\": \"IDT\",\n            \"display\": \"Identification\"\n          },\n          \"text\": \"Identification\"\n        },\n        \"subject\": {\n          \"reference\": \"Substance/ae1f3b4c-4f14-1460-6903-7260959ea2cd\"\n        },\n        \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n        \"performer\": {\n          \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n        },\n        \"valueCodeableConcept\": {\n          \"text\": \"Complies\"\n        }\n      }\n    }\n  ],\n  \"extension\": {\n    \"valueReference\": {\n      \"reference\": \"ActivityDefinition/8a453cd8-1ac3-4c86-48c3-3e5ea9ee76a9\"\n    }\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"text\": \"Accelerated - 40\\u00b0C/67% RH - 3 months (X)\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/a3fdc23b-6c16-2e65-481e-3fc895b37b87\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"specimen\": {\n    \"reference\": \"Specimen/b04c9321-069c-4da8-8ed0-86337ea22c30\"\n  },\n  \"hasMember\": [\n    {\n      \"reference\": \"#Accelerated40C-3m-1-Description\"\n    },\n    {\n      \"reference\": \"#Accelerated40C-3m-1-Assay\"\n    },\n    {\n      \"reference\": \"#Accelerated40C-3m-1-Impurity1\"\n    },\n    {\n      \"reference\": \"#Accelerated40C-3m-1-Impurity2\"\n    },\n    {\n      \"reference\": \"#Accelerated40C-3m-1-ImpurityUnspecified\"\n    },\n    {\n      \"reference\": \"#Accelerated40C-3m-1-ImpurityTotal\"\n    },\n    {\n      \"reference\": \"#Accelerated40C-3m-1-Identification\"\n    }\n  ],\n  \"resourceType\": \"Observation\"\n}"
  },
  "Organization/62c1b1b4-8d15-26d2-57f9-25a2f60b6181": {
    "title": "Organization: 62c1b1b4-8d15-26d2-57f9-25a2f60b6181",
    "details": [
      {
        "k": "Resource Type",
        "v": "Organization"
      },
      {
        "k": "ID",
        "v": "62c1b1b4-8d15-26d2-57f9-25a2f60b6181"
      }
    ],
    "json": "{\n  \"id\": \"62c1b1b4-8d15-26d2-57f9-25a2f60b6181\",\n  \"identifier\": {\n    \"system\": \"urn:oid:2.16.840.1.113883.4.82\",\n    \"value\": \"3003040516\"\n  },\n  \"active\": \"true\",\n  \"type\": {\n    \"coding\": {\n      \"system\": \"http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type\",\n      \"code\": \"drug-substance-manufacture\",\n      \"display\": \"Drug Substance Manufacture\"\n    }\n  },\n  \"name\": \"AAA Molybdenum Products, Inc.\",\n  \"contact\": {\n    \"address\": {\n      \"line\": [\n        \"7233 W 116th Pl\",\n        \"Ste C\"\n      ],\n      \"city\": \"Broomfield\",\n      \"state\": \"Colorado\",\n      \"postalCode\": \"80020\",\n      \"country\": \"USA\"\n    }\n  },\n  \"resourceType\": \"Organization\"\n}"
  },
  "Organization/6049d921-9935-90b7-4efc-894a66483c00": {
    "title": "Organization: 6049d921-9935-90b7-4efc-894a66483c00",
    "details": [
      {
        "k": "Resource Type",
        "v": "Organization"
      },
      {
        "k": "ID",
        "v": "6049d921-9935-90b7-4efc-894a66483c00"
      }
    ],
    "json": "{\n  \"id\": \"6049d921-9935-90b7-4efc-894a66483c00\",\n  \"identifier\": {\n    \"system\": \"urn:oid:2.16.840.1.113883.4.82\",\n    \"value\": \"3007270600\"\n  },\n  \"active\": \"true\",\n  \"type\": {\n    \"coding\": {\n      \"system\": \"http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type\",\n      \"code\": \"analytical-testing-stability\",\n      \"display\": \"Analytical Testing - Stability\"\n    }\n  },\n  \"name\": \"Advanced Analytical Testing Laboratories Inc.\",\n  \"contact\": {\n    \"address\": {\n      \"line\": \"30 Silverline Drive\",\n      \"city\": \"North Brunswick\",\n      \"state\": \"New Jersey\",\n      \"postalCode\": \"08902\",\n      \"country\": \"USA\"\n    }\n  },\n  \"resourceType\": \"Organization\"\n}"
  },
  "SubstanceDefinition/2e3a85b5-790a-a108-3627-edf0ec6f1210": {
    "title": "SubstanceDefinition: 2e3a85b5-790a-a108-3627-edf0ec6f1210",
    "details": [
      {
        "k": "Resource Type",
        "v": "SubstanceDefinition"
      },
      {
        "k": "ID",
        "v": "2e3a85b5-790a-a108-3627-edf0ec6f1210"
      }
    ],
    "json": "{\n  \"id\": \"2e3a85b5-790a-a108-3627-edf0ec6f1210\",\n  \"identifier\": {\n    \"system\": \"http://example.company.org/companySubstanceIdentifier\",\n    \"value\": \"4444455555\"\n  },\n  \"manufacturer\": {\n    \"extension\": {\n      \"valueCoding\": {\n        \"system\": \"http://terminology.hl7.org/CodeSystem/product-site-utilization-type\",\n        \"code\": \"Release stability\",\n        \"display\": \"Release stability\"\n      }\n    },\n    \"reference\": \"Organization/62c1b1b4-8d15-26d2-57f9-25a2f60b6181\"\n  },\n  \"name\": {\n    \"name\": \"Stelbatolol\"\n  },\n  \"resourceType\": \"SubstanceDefinition\"\n}"
  },
  "Organization/e2359a4e-3091-23f8-2242-87e701830d55": {
    "title": "Organization: e2359a4e-3091-23f8-2242-87e701830d55",
    "details": [
      {
        "k": "Resource Type",
        "v": "Organization"
      },
      {
        "k": "ID",
        "v": "e2359a4e-3091-23f8-2242-87e701830d55"
      }
    ],
    "json": "{\n  \"id\": \"e2359a4e-3091-23f8-2242-87e701830d55\",\n  \"identifier\": {\n    \"system\": \"urn:oid:2.16.840.1.113883.4.82\",\n    \"value\": \"3003040516\"\n  },\n  \"active\": \"true\",\n  \"type\": {\n    \"coding\": {\n      \"system\": \"http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type\",\n      \"code\": \"drug-substance-manufacture\",\n      \"display\": \"Drug Substance Manufacture\"\n    }\n  },\n  \"name\": \"AAA Molybdenum Products, Inc.\",\n  \"contact\": {\n    \"address\": {\n      \"line\": [\n        \"7233 W 116th Pl\",\n        \"Ste C\"\n      ],\n      \"city\": \"Broomfield\",\n      \"state\": \"Colorado\",\n      \"postalCode\": \"80020\",\n      \"country\": \"USA\"\n    }\n  },\n  \"resourceType\": \"Organization\"\n}"
  },
  "Organization/378fbe5f-5926-3a5c-4c64-5428df877b08": {
    "title": "Organization: 378fbe5f-5926-3a5c-4c64-5428df877b08",
    "details": [
      {
        "k": "Resource Type",
        "v": "Organization"
      },
      {
        "k": "ID",
        "v": "378fbe5f-5926-3a5c-4c64-5428df877b08"
      }
    ],
    "json": "{\n  \"id\": \"378fbe5f-5926-3a5c-4c64-5428df877b08\",\n  \"identifier\": {\n    \"system\": \"urn:oid:2.16.840.1.113883.4.82\",\n    \"value\": \"3007270600\"\n  },\n  \"active\": \"true\",\n  \"type\": {\n    \"coding\": {\n      \"system\": \"http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type\",\n      \"code\": \"analytical-testing-stability\",\n      \"display\": \"Analytical Testing - Stability\"\n    }\n  },\n  \"name\": \"Testing Lab\",\n  \"resourceType\": \"Organization\"\n}"
  },
  "Substance/a3fdc23b-6c16-2e65-481e-3fc895b37b87": {
    "title": "Substance: a3fdc23b-6c16-2e65-481e-3fc895b37b87",
    "details": [
      {
        "k": "Resource Type",
        "v": "Substance"
      },
      {
        "k": "ID",
        "v": "a3fdc23b-6c16-2e65-481e-3fc895b37b87"
      }
    ],
    "json": "{\n  \"id\": \"a3fdc23b-6c16-2e65-481e-3fc895b37b87\",\n  \"extension\": [\n    {\n      \"extension\": [\n        {\n          \"valueDateTime\": \"2020-01\"\n        },\n        {\n          \"valueQuantity\": {\n            \"value\": \"120\",\n            \"unit\": \"kg\"\n          }\n        },\n        {\n          \"valueCodeableConcept\": {\n            \"coding\": {\n              \"system\": \"http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl\",\n              \"code\": \"C133990\",\n              \"display\": \"Commercial\"\n            },\n            \"text\": \"Production\"\n          }\n        },\n        {\n          \"valueReference\": {\n            \"reference\": \"Organization/e2359a4e-3091-23f8-2242-87e701830d55\"\n          }\n        },\n        {\n          \"extension\": {\n            \"valueCodeableConcept\": {\n              \"text\": \"packaged in LDPE bags within HDPE drums\"\n            }\n          }\n        }\n      ]\n    },\n    {\n      \"valueDateTime\": \"2019-09-08\"\n    },\n    {\n      \"valueDateTime\": \"2022-09-08\"\n    },\n    {\n      \"valueQuantity\": {\n        \"value\": \"4.8\",\n        \"unit\": \"kg\"\n      }\n    }\n  ],\n  \"identifier\": {\n    \"value\": \"CAT1\"\n  },\n  \"instance\": \"true\",\n  \"code\": {\n    \"reference\": {\n      \"reference\": \"SubstanceDefinition/2e3a85b5-790a-a108-3627-edf0ec6f1210\"\n    }\n  },\n  \"resourceType\": \"Substance\"\n}"
  },
  "Substance/cbcecab6-374c-396f-29be-877da7285e8d": {
    "title": "Substance: cbcecab6-374c-396f-29be-877da7285e8d",
    "details": [
      {
        "k": "Resource Type",
        "v": "Substance"
      },
      {
        "k": "ID",
        "v": "cbcecab6-374c-396f-29be-877da7285e8d"
      }
    ],
    "json": "{\n  \"id\": \"cbcecab6-374c-396f-29be-877da7285e8d\",\n  \"extension\": [\n    {\n      \"extension\": [\n        {\n          \"valueDateTime\": \"2020-02\"\n        },\n        {\n          \"valueQuantity\": {\n            \"value\": \"120\",\n            \"unit\": \"kg\"\n          }\n        },\n        {\n          \"valueCodeableConcept\": {\n            \"coding\": {\n              \"system\": \"http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl\",\n              \"code\": \"C133990\",\n              \"display\": \"Commercial\"\n            },\n            \"text\": \"Production\"\n          }\n        },\n        {\n          \"valueReference\": {\n            \"reference\": \"Organization/e2359a4e-3091-23f8-2242-87e701830d55\"\n          }\n        }\n      ]\n    },\n    {\n      \"valueDateTime\": \"2019-09-08\"\n    },\n    {\n      \"valueDateTime\": \"2022-09-08\"\n    },\n    {\n      \"valueQuantity\": {\n        \"value\": \"4.8\",\n        \"unit\": \"kg\"\n      }\n    }\n  ],\n  \"identifier\": {\n    \"value\": \"CAT2\"\n  },\n  \"instance\": \"true\",\n  \"code\": {\n    \"reference\": {\n      \"reference\": \"SubstanceDefinition/2e3a85b5-790a-a108-3627-edf0ec6f1210\"\n    }\n  },\n  \"resourceType\": \"Substance\"\n}"
  },
  "Substance/ae1f3b4c-4f14-1460-6903-7260959ea2cd": {
    "title": "Substance: ae1f3b4c-4f14-1460-6903-7260959ea2cd",
    "details": [
      {
        "k": "Resource Type",
        "v": "Substance"
      },
      {
        "k": "ID",
        "v": "ae1f3b4c-4f14-1460-6903-7260959ea2cd"
      }
    ],
    "json": "{\n  \"id\": \"ae1f3b4c-4f14-1460-6903-7260959ea2cd\",\n  \"extension\": [\n    {\n      \"extension\": [\n        {\n          \"valueDateTime\": \"2020-03\"\n        },\n        {\n          \"valueQuantity\": {\n            \"value\": \"120\",\n            \"unit\": \"kg\"\n          }\n        },\n        {\n          \"valueCodeableConcept\": {\n            \"coding\": {\n              \"system\": \"http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl\",\n              \"code\": \"C133990\",\n              \"display\": \"Commercial\"\n            },\n            \"text\": \"Production\"\n          }\n        },\n        {\n          \"valueReference\": {\n            \"reference\": \"Organization/e2359a4e-3091-23f8-2242-87e701830d55\"\n          }\n        }\n      ]\n    },\n    {\n      \"valueDateTime\": \"2019-09-08\"\n    },\n    {\n      \"valueDateTime\": \"2022-09-08\"\n    },\n    {\n      \"valueQuantity\": {\n        \"value\": \"4.8\",\n        \"unit\": \"kg\"\n      }\n    }\n  ],\n  \"identifier\": {\n    \"value\": \"CAT3\"\n  },\n  \"instance\": \"true\",\n  \"code\": {\n    \"reference\": {\n      \"reference\": \"SubstanceDefinition/2e3a85b5-790a-a108-3627-edf0ec6f1210\"\n    }\n  },\n  \"resourceType\": \"Substance\"\n}"
  },
  "Observation/LongTerm30C-initial-1-Description": {
    "title": "Observation: LongTerm30C-initial-1-Description",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm30C-initial-1-Description"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm30C-initial-1-Description\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/559ffdc3-349b-a4a3-a651-ce2715f08d69\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"DESC\",\n      \"display\": \"Description\"\n    },\n    \"text\": \"Description\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/a3fdc23b-6c16-2e65-481e-3fc895b37b87\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueCodeableConcept\": {\n    \"text\": \"Complies\"\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm30C-initial-1-Impurity1": {
    "title": "Observation: LongTerm30C-initial-1-Impurity1",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm30C-initial-1-Impurity1"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm30C-initial-1-Impurity1\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"DGP\",\n      \"display\": \"Degradation Products\"\n    },\n    \"text\": \"Degradation Products\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/a3fdc23b-6c16-2e65-481e-3fc895b37b87\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.1\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"component\": {\n    \"code\": {\n      \"coding\": {\n        \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n        \"code\": \"IMP\",\n        \"display\": \"Impurity\"\n      }\n    },\n    \"valueCodeableConcept\": {\n      \"text\": \"Impurity\"\n    }\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm30C-initial-1-Impurity2": {
    "title": "Observation: LongTerm30C-initial-1-Impurity2",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm30C-initial-1-Impurity2"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm30C-initial-1-Impurity2\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"Impurities\",\n      \"display\": \"Impurities\"\n    },\n    \"text\": \"Impurities\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/a3fdc23b-6c16-2e65-481e-3fc895b37b87\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.2\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"component\": {\n    \"code\": {\n      \"coding\": {\n        \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n        \"code\": \"IMP\",\n        \"display\": \"Impurity\"\n      }\n    },\n    \"valueCodeableConcept\": {\n      \"text\": \"Impurity 2\"\n    }\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm30C-initial-1-ImpurityUnspecified": {
    "title": "Observation: LongTerm30C-initial-1-ImpurityUnspecified",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm30C-initial-1-ImpurityUnspecified"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm30C-initial-1-ImpurityUnspecified\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"Impurities\",\n      \"display\": \"Impurities\"\n    },\n    \"text\": \"Impurities\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/a3fdc23b-6c16-2e65-481e-3fc895b37b87\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.05\",\n    \"comparator\": \"<\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"component\": {\n    \"code\": {\n      \"coding\": {\n        \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n        \"code\": \"IMP\",\n        \"display\": \"Impurity\"\n      }\n    },\n    \"valueCodeableConcept\": {\n      \"text\": \"Any Unspecified Impurity\"\n    }\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm30C-initial-1-ImpurityTotal": {
    "title": "Observation: LongTerm30C-initial-1-ImpurityTotal",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm30C-initial-1-ImpurityTotal"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm30C-initial-1-ImpurityTotal\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"Impurities\",\n      \"display\": \"Impurities\"\n    },\n    \"text\": \"Impurities\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/a3fdc23b-6c16-2e65-481e-3fc895b37b87\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.8\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"component\": {\n    \"code\": {\n      \"coding\": {\n        \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n        \"code\": \"IMP\",\n        \"display\": \"Impurity\"\n      }\n    },\n    \"valueCodeableConcept\": {\n      \"text\": \"Total Impurities\"\n    }\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm30C-initial-1-Assay": {
    "title": "Observation: LongTerm30C-initial-1-Assay",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm30C-initial-1-Assay"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm30C-initial-1-Assay\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/7943795a-2abe-666f-545f-133e23b97119\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"ASSAY\",\n      \"display\": \"Assay\"\n    }\n  },\n  \"subject\": {\n    \"reference\": \"Substance/a3fdc23b-6c16-2e65-481e-3fc895b37b87\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.15\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm30C-initial-1-Identification": {
    "title": "Observation: LongTerm30C-initial-1-Identification",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm30C-initial-1-Identification"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm30C-initial-1-Identification\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/6b96124b-1a44-0b6b-6783-d6c49360230b\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"IDT\",\n      \"display\": \"Identification\"\n    },\n    \"text\": \"Identification\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/a3fdc23b-6c16-2e65-481e-3fc895b37b87\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueCodeableConcept\": {\n    \"text\": \"Complies\"\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm30C-initial-2-Description": {
    "title": "Observation: LongTerm30C-initial-2-Description",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm30C-initial-2-Description"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm30C-initial-2-Description\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/559ffdc3-349b-a4a3-a651-ce2715f08d69\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"DESC\",\n      \"display\": \"Description\"\n    },\n    \"text\": \"Description\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/cbcecab6-374c-396f-29be-877da7285e8d\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueCodeableConcept\": {\n    \"text\": \"Complies\"\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm30C-initial-2-Degradation-imp1": {
    "title": "Observation: LongTerm30C-initial-2-Degradation-imp1",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm30C-initial-2-Degradation-imp1"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm30C-initial-2-Degradation-imp1\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"DGP\",\n      \"display\": \"Degradation Products\"\n    },\n    \"text\": \"Degradation Products\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/cbcecab6-374c-396f-29be-877da7285e8d\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.12\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"component\": {\n    \"code\": {\n      \"coding\": {\n        \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n        \"code\": \"IMP\",\n        \"display\": \"Impurity\"\n      }\n    },\n    \"valueCodeableConcept\": {\n      \"text\": \"Impurity\"\n    }\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm30C-initial-2-Degradation-imp2": {
    "title": "Observation: LongTerm30C-initial-2-Degradation-imp2",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm30C-initial-2-Degradation-imp2"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm30C-initial-2-Degradation-imp2\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"Impurities\",\n      \"display\": \"Impurities\"\n    },\n    \"text\": \"Impurities\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/cbcecab6-374c-396f-29be-877da7285e8d\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.22\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"component\": {\n    \"code\": {\n      \"coding\": {\n        \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n        \"code\": \"IMP\",\n        \"display\": \"Impurity\"\n      }\n    },\n    \"valueCodeableConcept\": {\n      \"text\": \"Impurity 2\"\n    }\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm30C-initial-2-Degradation-impUnspecified": {
    "title": "Observation: LongTerm30C-initial-2-Degradation-impUnspecified",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm30C-initial-2-Degradation-impUnspecified"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm30C-initial-2-Degradation-impUnspecified\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"Impurities\",\n      \"display\": \"Impurities\"\n    },\n    \"text\": \"Impurities\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/cbcecab6-374c-396f-29be-877da7285e8d\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.052\",\n    \"comparator\": \"<\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"component\": {\n    \"code\": {\n      \"coding\": {\n        \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n        \"code\": \"IMP\",\n        \"display\": \"Impurity\"\n      }\n    },\n    \"valueCodeableConcept\": {\n      \"text\": \"Any Unspecified Impurity\"\n    }\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm30C-initial-2-Degradation-impTotal": {
    "title": "Observation: LongTerm30C-initial-2-Degradation-impTotal",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm30C-initial-2-Degradation-impTotal"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm30C-initial-2-Degradation-impTotal\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"Impurities\",\n      \"display\": \"Impurities\"\n    },\n    \"text\": \"Impurities\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/cbcecab6-374c-396f-29be-877da7285e8d\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.82\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"component\": {\n    \"code\": {\n      \"coding\": {\n        \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n        \"code\": \"IMP\",\n        \"display\": \"Impurity\"\n      }\n    },\n    \"valueCodeableConcept\": {\n      \"text\": \"Total Impurities\"\n    }\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm30C-initial-2-Assay": {
    "title": "Observation: LongTerm30C-initial-2-Assay",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm30C-initial-2-Assay"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm30C-initial-2-Assay\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/7943795a-2abe-666f-545f-133e23b97119\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"ASSAY\",\n      \"display\": \"Assay\"\n    }\n  },\n  \"subject\": {\n    \"reference\": \"Substance/cbcecab6-374c-396f-29be-877da7285e8d\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.152\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm30C-initial-2-Identification": {
    "title": "Observation: LongTerm30C-initial-2-Identification",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm30C-initial-2-Identification"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm30C-initial-2-Identification\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/6b96124b-1a44-0b6b-6783-d6c49360230b\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"IDT\",\n      \"display\": \"Identification\"\n    },\n    \"text\": \"Identification\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/cbcecab6-374c-396f-29be-877da7285e8d\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueCodeableConcept\": {\n    \"text\": \"Does not comply\"\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm30C-initial-3-Description": {
    "title": "Observation: LongTerm30C-initial-3-Description",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm30C-initial-3-Description"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm30C-initial-3-Description\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/559ffdc3-349b-a4a3-a651-ce2715f08d69\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"DESC\",\n      \"display\": \"Description\"\n    },\n    \"text\": \"Description\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/ae1f3b4c-4f14-1460-6903-7260959ea2cd\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueCodeableConcept\": {\n    \"text\": \"Complies\"\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm30C-initial-3-Degradation-imp1": {
    "title": "Observation: LongTerm30C-initial-3-Degradation-imp1",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm30C-initial-3-Degradation-imp1"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm30C-initial-3-Degradation-imp1\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"DGP\",\n      \"display\": \"Degradation Products\"\n    },\n    \"text\": \"Degradation Products\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/ae1f3b4c-4f14-1460-6903-7260959ea2cd\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.12\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"component\": {\n    \"code\": {\n      \"coding\": {\n        \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n        \"code\": \"IMP\",\n        \"display\": \"Impurity\"\n      }\n    },\n    \"valueCodeableConcept\": {\n      \"text\": \"Impurity\"\n    }\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm30C-initial-3-Degradation-imp2": {
    "title": "Observation: LongTerm30C-initial-3-Degradation-imp2",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm30C-initial-3-Degradation-imp2"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm30C-initial-3-Degradation-imp2\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"Impurities\",\n      \"display\": \"Impurities\"\n    },\n    \"text\": \"Impurities\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/ae1f3b4c-4f14-1460-6903-7260959ea2cd\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.22\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"component\": {\n    \"code\": {\n      \"coding\": {\n        \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n        \"code\": \"IMP\",\n        \"display\": \"Impurity\"\n      }\n    },\n    \"valueCodeableConcept\": {\n      \"text\": \"Impurity 2\"\n    }\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm30C-initial-3-Degradation-impUnspecified": {
    "title": "Observation: LongTerm30C-initial-3-Degradation-impUnspecified",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm30C-initial-3-Degradation-impUnspecified"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm30C-initial-3-Degradation-impUnspecified\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"Impurities\",\n      \"display\": \"Impurities\"\n    },\n    \"text\": \"Impurities\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/ae1f3b4c-4f14-1460-6903-7260959ea2cd\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.052\",\n    \"comparator\": \"<\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"component\": {\n    \"code\": {\n      \"coding\": {\n        \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n        \"code\": \"IMP\",\n        \"display\": \"Impurity\"\n      }\n    },\n    \"valueCodeableConcept\": {\n      \"text\": \"Any Unspecified Impurity\"\n    }\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm30C-initial-3-Degradation-impTotal": {
    "title": "Observation: LongTerm30C-initial-3-Degradation-impTotal",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm30C-initial-3-Degradation-impTotal"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm30C-initial-3-Degradation-impTotal\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"Impurities\",\n      \"display\": \"Impurities\"\n    },\n    \"text\": \"Impurities\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/ae1f3b4c-4f14-1460-6903-7260959ea2cd\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.82\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"component\": {\n    \"code\": {\n      \"coding\": {\n        \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n        \"code\": \"IMP\",\n        \"display\": \"Impurity\"\n      }\n    },\n    \"valueCodeableConcept\": {\n      \"text\": \"Total Impurities\"\n    }\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm30C-initial-3-Assay": {
    "title": "Observation: LongTerm30C-initial-3-Assay",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm30C-initial-3-Assay"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm30C-initial-3-Assay\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/7943795a-2abe-666f-545f-133e23b97119\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"ASSAY\",\n      \"display\": \"Assay\"\n    }\n  },\n  \"subject\": {\n    \"reference\": \"Substance/ae1f3b4c-4f14-1460-6903-7260959ea2cd\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.152\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm30C-initial-3-Identification": {
    "title": "Observation: LongTerm30C-initial-3-Identification",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm30C-initial-3-Identification"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm30C-initial-3-Identification\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/6b96124b-1a44-0b6b-6783-d6c49360230b\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"IDT\",\n      \"display\": \"Identification\"\n    },\n    \"text\": \"Identification\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/ae1f3b4c-4f14-1460-6903-7260959ea2cd\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueCodeableConcept\": {\n    \"text\": \"Does not comply\"\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm30C-18m-1-Description": {
    "title": "Observation: LongTerm30C-18m-1-Description",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm30C-18m-1-Description"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm30C-18m-1-Description\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/559ffdc3-349b-a4a3-a651-ce2715f08d69\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"DESC\",\n      \"display\": \"Description\"\n    },\n    \"text\": \"Description\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/a3fdc23b-6c16-2e65-481e-3fc895b37b87\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueCodeableConcept\": {\n    \"text\": \"Complies\"\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm30C-18m-1-Impurity1": {
    "title": "Observation: LongTerm30C-18m-1-Impurity1",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm30C-18m-1-Impurity1"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm30C-18m-1-Impurity1\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"DGP\",\n      \"display\": \"Degradation Products\"\n    },\n    \"text\": \"Degradation Products\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/a3fdc23b-6c16-2e65-481e-3fc895b37b87\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.118\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"component\": {\n    \"code\": {\n      \"coding\": {\n        \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n        \"code\": \"IMP\",\n        \"display\": \"Impurity\"\n      }\n    },\n    \"valueCodeableConcept\": {\n      \"text\": \"Impurity\"\n    }\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm30C-18m-1-Impurity2": {
    "title": "Observation: LongTerm30C-18m-1-Impurity2",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm30C-18m-1-Impurity2"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm30C-18m-1-Impurity2\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"Impurities\",\n      \"display\": \"Impurities\"\n    },\n    \"text\": \"Impurities\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/a3fdc23b-6c16-2e65-481e-3fc895b37b87\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.218\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"component\": {\n    \"code\": {\n      \"coding\": {\n        \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n        \"code\": \"IMP\",\n        \"display\": \"Impurity\"\n      }\n    },\n    \"valueCodeableConcept\": {\n      \"text\": \"Impurity 2\"\n    }\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm30C-18m-1-ImpurityUnspecified": {
    "title": "Observation: LongTerm30C-18m-1-ImpurityUnspecified",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm30C-18m-1-ImpurityUnspecified"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm30C-18m-1-ImpurityUnspecified\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"Impurities\",\n      \"display\": \"Impurities\"\n    },\n    \"text\": \"Impurities\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/a3fdc23b-6c16-2e65-481e-3fc895b37b87\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.0518\",\n    \"comparator\": \"<\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"component\": {\n    \"code\": {\n      \"coding\": {\n        \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n        \"code\": \"IMP\",\n        \"display\": \"Impurity\"\n      }\n    },\n    \"valueCodeableConcept\": {\n      \"text\": \"Any Unspecified Impurity\"\n    }\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm30C-18m-1-ImpurityTotal": {
    "title": "Observation: LongTerm30C-18m-1-ImpurityTotal",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm30C-18m-1-ImpurityTotal"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm30C-18m-1-ImpurityTotal\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"Impurities\",\n      \"display\": \"Impurities\"\n    },\n    \"text\": \"Impurities\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/a3fdc23b-6c16-2e65-481e-3fc895b37b87\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.818\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"component\": {\n    \"code\": {\n      \"coding\": {\n        \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n        \"code\": \"IMP\",\n        \"display\": \"Impurity\"\n      }\n    },\n    \"valueCodeableConcept\": {\n      \"text\": \"Total Impurities\"\n    }\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm30C-18m-1-Assay": {
    "title": "Observation: LongTerm30C-18m-1-Assay",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm30C-18m-1-Assay"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm30C-18m-1-Assay\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/7943795a-2abe-666f-545f-133e23b97119\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"ASSAY\",\n      \"display\": \"Assay\"\n    }\n  },\n  \"subject\": {\n    \"reference\": \"Substance/a3fdc23b-6c16-2e65-481e-3fc895b37b87\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.118\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm30C-18m-1-Identification": {
    "title": "Observation: LongTerm30C-18m-1-Identification",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm30C-18m-1-Identification"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm30C-18m-1-Identification\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/6b96124b-1a44-0b6b-6783-d6c49360230b\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"IDT\",\n      \"display\": \"Identification\"\n    },\n    \"text\": \"Identification\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/a3fdc23b-6c16-2e65-481e-3fc895b37b87\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueCodeableConcept\": {\n    \"text\": \"Complies\"\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm30C-18m-2-Description": {
    "title": "Observation: LongTerm30C-18m-2-Description",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm30C-18m-2-Description"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm30C-18m-2-Description\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/559ffdc3-349b-a4a3-a651-ce2715f08d69\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"DESC\",\n      \"display\": \"Description\"\n    },\n    \"text\": \"Description\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/cbcecab6-374c-396f-29be-877da7285e8d\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueCodeableConcept\": {\n    \"text\": \"Complies\"\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm30C-18m-2-Impurity1": {
    "title": "Observation: LongTerm30C-18m-2-Impurity1",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm30C-18m-2-Impurity1"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm30C-18m-2-Impurity1\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"DGP\",\n      \"display\": \"Degradation Products\"\n    },\n    \"text\": \"Degradation Products\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/cbcecab6-374c-396f-29be-877da7285e8d\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.118\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"component\": {\n    \"code\": {\n      \"coding\": {\n        \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n        \"code\": \"IMP\",\n        \"display\": \"Impurity\"\n      }\n    },\n    \"valueCodeableConcept\": {\n      \"text\": \"Impurity\"\n    }\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm30C-18m-2-Impurity2": {
    "title": "Observation: LongTerm30C-18m-2-Impurity2",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm30C-18m-2-Impurity2"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm30C-18m-2-Impurity2\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"Impurities\",\n      \"display\": \"Impurities\"\n    },\n    \"text\": \"Impurities\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/cbcecab6-374c-396f-29be-877da7285e8d\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.218\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"component\": {\n    \"code\": {\n      \"coding\": {\n        \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n        \"code\": \"IMP\",\n        \"display\": \"Impurity\"\n      }\n    },\n    \"valueCodeableConcept\": {\n      \"text\": \"Impurity 2\"\n    }\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm30C-18m-2-ImpurityUnspecified": {
    "title": "Observation: LongTerm30C-18m-2-ImpurityUnspecified",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm30C-18m-2-ImpurityUnspecified"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm30C-18m-2-ImpurityUnspecified\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"Impurities\",\n      \"display\": \"Impurities\"\n    },\n    \"text\": \"Impurities\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/cbcecab6-374c-396f-29be-877da7285e8d\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.0518\",\n    \"comparator\": \"<\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"component\": {\n    \"code\": {\n      \"coding\": {\n        \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n        \"code\": \"IMP\",\n        \"display\": \"Impurity\"\n      }\n    },\n    \"valueCodeableConcept\": {\n      \"text\": \"Any Unspecified Impurity\"\n    }\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm30C-18m-2-ImpurityTotal": {
    "title": "Observation: LongTerm30C-18m-2-ImpurityTotal",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm30C-18m-2-ImpurityTotal"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm30C-18m-2-ImpurityTotal\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"Impurities\",\n      \"display\": \"Impurities\"\n    },\n    \"text\": \"Impurities\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/cbcecab6-374c-396f-29be-877da7285e8d\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.818\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"component\": {\n    \"code\": {\n      \"coding\": {\n        \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n        \"code\": \"IMP\",\n        \"display\": \"Impurity\"\n      }\n    },\n    \"valueCodeableConcept\": {\n      \"text\": \"Total Impurities\"\n    }\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm30C-18m-2-Assay": {
    "title": "Observation: LongTerm30C-18m-2-Assay",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm30C-18m-2-Assay"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm30C-18m-2-Assay\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/7943795a-2abe-666f-545f-133e23b97119\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"ASSAY\",\n      \"display\": \"Assay\"\n    }\n  },\n  \"subject\": {\n    \"reference\": \"Substance/cbcecab6-374c-396f-29be-877da7285e8d\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.118\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm30C-18m-2-Identification": {
    "title": "Observation: LongTerm30C-18m-2-Identification",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm30C-18m-2-Identification"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm30C-18m-2-Identification\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/6b96124b-1a44-0b6b-6783-d6c49360230b\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"IDT\",\n      \"display\": \"Identification\"\n    },\n    \"text\": \"Identification\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/cbcecab6-374c-396f-29be-877da7285e8d\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueCodeableConcept\": {\n    \"text\": \"Complies\"\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm30C-18m-3-Description": {
    "title": "Observation: LongTerm30C-18m-3-Description",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm30C-18m-3-Description"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm30C-18m-3-Description\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/559ffdc3-349b-a4a3-a651-ce2715f08d69\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"DESC\",\n      \"display\": \"Description\"\n    },\n    \"text\": \"Description\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/ae1f3b4c-4f14-1460-6903-7260959ea2cd\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueCodeableConcept\": {\n    \"text\": \"Complies\"\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm30C-18m-3-Impurity1": {
    "title": "Observation: LongTerm30C-18m-3-Impurity1",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm30C-18m-3-Impurity1"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm30C-18m-3-Impurity1\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"DGP\",\n      \"display\": \"Degradation Products\"\n    },\n    \"text\": \"Degradation Products\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/ae1f3b4c-4f14-1460-6903-7260959ea2cd\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.118\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"component\": {\n    \"code\": {\n      \"coding\": {\n        \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n        \"code\": \"IMP\",\n        \"display\": \"Impurity\"\n      }\n    },\n    \"valueCodeableConcept\": {\n      \"text\": \"Impurity\"\n    }\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm30C-18m-3-Impurity2": {
    "title": "Observation: LongTerm30C-18m-3-Impurity2",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm30C-18m-3-Impurity2"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm30C-18m-3-Impurity2\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"Impurities\",\n      \"display\": \"Impurities\"\n    },\n    \"text\": \"Impurities\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/ae1f3b4c-4f14-1460-6903-7260959ea2cd\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.218\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"component\": {\n    \"code\": {\n      \"coding\": {\n        \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n        \"code\": \"IMP\",\n        \"display\": \"Impurity\"\n      }\n    },\n    \"valueCodeableConcept\": {\n      \"text\": \"Impurity 2\"\n    }\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm30C-18m-3-ImpurityUnspecified": {
    "title": "Observation: LongTerm30C-18m-3-ImpurityUnspecified",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm30C-18m-3-ImpurityUnspecified"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm30C-18m-3-ImpurityUnspecified\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"Impurities\",\n      \"display\": \"Impurities\"\n    },\n    \"text\": \"Impurities\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/ae1f3b4c-4f14-1460-6903-7260959ea2cd\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.0518\",\n    \"comparator\": \"<\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"component\": {\n    \"code\": {\n      \"coding\": {\n        \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n        \"code\": \"IMP\",\n        \"display\": \"Impurity\"\n      }\n    },\n    \"valueCodeableConcept\": {\n      \"text\": \"Any Unspecified Impurity\"\n    }\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm30C-18m-3-ImpurityTotal": {
    "title": "Observation: LongTerm30C-18m-3-ImpurityTotal",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm30C-18m-3-ImpurityTotal"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm30C-18m-3-ImpurityTotal\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"Impurities\",\n      \"display\": \"Impurities\"\n    },\n    \"text\": \"Impurities\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/ae1f3b4c-4f14-1460-6903-7260959ea2cd\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.818\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"component\": {\n    \"code\": {\n      \"coding\": {\n        \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n        \"code\": \"IMP\",\n        \"display\": \"Impurity\"\n      }\n    },\n    \"valueCodeableConcept\": {\n      \"text\": \"Total Impurities\"\n    }\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm30C-18m-3-Assay": {
    "title": "Observation: LongTerm30C-18m-3-Assay",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm30C-18m-3-Assay"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm30C-18m-3-Assay\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/7943795a-2abe-666f-545f-133e23b97119\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"ASSAY\",\n      \"display\": \"Assay\"\n    }\n  },\n  \"subject\": {\n    \"reference\": \"Substance/ae1f3b4c-4f14-1460-6903-7260959ea2cd\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.118\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/LongTerm30C-18m-3-Identification": {
    "title": "Observation: LongTerm30C-18m-3-Identification",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "LongTerm30C-18m-3-Identification"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"LongTerm30C-18m-3-Identification\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/6b96124b-1a44-0b6b-6783-d6c49360230b\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"IDT\",\n      \"display\": \"Identification\"\n    },\n    \"text\": \"Identification\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/ae1f3b4c-4f14-1460-6903-7260959ea2cd\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueCodeableConcept\": {\n    \"text\": \"Complies\"\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/Accelerated40C-3m-1-Description": {
    "title": "Observation: Accelerated40C-3m-1-Description",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "Accelerated40C-3m-1-Description"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"Accelerated40C-3m-1-Description\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/559ffdc3-349b-a4a3-a651-ce2715f08d69\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"DESC\",\n      \"display\": \"Description\"\n    },\n    \"text\": \"Description\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/a3fdc23b-6c16-2e65-481e-3fc895b37b87\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueCodeableConcept\": {\n    \"text\": \"Doesn't comply\"\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/Accelerated40C-3m-1-Impurity1": {
    "title": "Observation: Accelerated40C-3m-1-Impurity1",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "Accelerated40C-3m-1-Impurity1"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"Accelerated40C-3m-1-Impurity1\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"DGP\",\n      \"display\": \"Degradation Products\"\n    },\n    \"text\": \"Degradation Products\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/a3fdc23b-6c16-2e65-481e-3fc895b37b87\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.113\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"component\": {\n    \"code\": {\n      \"coding\": {\n        \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n        \"code\": \"IMP\",\n        \"display\": \"Impurity\"\n      }\n    },\n    \"valueCodeableConcept\": {\n      \"text\": \"Impurity\"\n    }\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/Accelerated40C-3m-1-Impurity2": {
    "title": "Observation: Accelerated40C-3m-1-Impurity2",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "Accelerated40C-3m-1-Impurity2"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"Accelerated40C-3m-1-Impurity2\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"Impurities\",\n      \"display\": \"Impurities\"\n    },\n    \"text\": \"Impurities\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/a3fdc23b-6c16-2e65-481e-3fc895b37b87\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.213\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"component\": {\n    \"code\": {\n      \"coding\": {\n        \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n        \"code\": \"IMP\",\n        \"display\": \"Impurity\"\n      }\n    },\n    \"valueCodeableConcept\": {\n      \"text\": \"Impurity 2\"\n    }\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/Accelerated40C-3m-1-ImpurityUnspecified": {
    "title": "Observation: Accelerated40C-3m-1-ImpurityUnspecified",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "Accelerated40C-3m-1-ImpurityUnspecified"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"Accelerated40C-3m-1-ImpurityUnspecified\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"Impurities\",\n      \"display\": \"Impurities\"\n    },\n    \"text\": \"Impurities\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/a3fdc23b-6c16-2e65-481e-3fc895b37b87\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.0513\",\n    \"comparator\": \"<\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"component\": {\n    \"code\": {\n      \"coding\": {\n        \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n        \"code\": \"IMP\",\n        \"display\": \"Impurity\"\n      }\n    },\n    \"valueCodeableConcept\": {\n      \"text\": \"Any Unspecified Impurity\"\n    }\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/Accelerated40C-3m-1-ImpurityTotal": {
    "title": "Observation: Accelerated40C-3m-1-ImpurityTotal",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "Accelerated40C-3m-1-ImpurityTotal"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"Accelerated40C-3m-1-ImpurityTotal\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/73d9d304-a0b8-31b6-1165-346563b9305e\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"Impurities\",\n      \"display\": \"Impurities\"\n    },\n    \"text\": \"Impurities\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/ae1f3b4c-4f14-1460-6903-7260959ea2cd\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.813\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"component\": {\n    \"code\": {\n      \"coding\": {\n        \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n        \"code\": \"IMP\",\n        \"display\": \"Impurity\"\n      }\n    },\n    \"valueCodeableConcept\": {\n      \"text\": \"Total Impurities\"\n    }\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/Accelerated40C-3m-1-Assay": {
    "title": "Observation: Accelerated40C-3m-1-Assay",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "Accelerated40C-3m-1-Assay"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"Accelerated40C-3m-1-Assay\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/7943795a-2abe-666f-545f-133e23b97119\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"ASSAY\",\n      \"display\": \"Assay\"\n    }\n  },\n  \"subject\": {\n    \"reference\": \"Substance/ae1f3b4c-4f14-1460-6903-7260959ea2cd\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueQuantity\": {\n    \"value\": \"0.113\",\n    \"unit\": \"% w/w\",\n    \"system\": \"http://unitsofmeasure.org\",\n    \"code\": \"%\"\n  },\n  \"resourceType\": \"Observation\"\n}"
  },
  "Observation/Accelerated40C-3m-1-Identification": {
    "title": "Observation: Accelerated40C-3m-1-Identification",
    "details": [
      {
        "k": "Resource Type",
        "v": "Observation"
      },
      {
        "k": "ID",
        "v": "Accelerated40C-3m-1-Identification"
      },
      {
        "k": "Note",
        "v": "Contained Resource"
      }
    ],
    "json": "{\n  \"id\": \"Accelerated40C-3m-1-Identification\",\n  \"instantiatesReference\": {\n    \"reference\": \"ObservationDefinition/6b96124b-1a44-0b6b-6783-d6c49360230b\"\n  },\n  \"status\": \"final\",\n  \"code\": {\n    \"coding\": {\n      \"system\": \"http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example\",\n      \"code\": \"IDT\",\n      \"display\": \"Identification\"\n    },\n    \"text\": \"Identification\"\n  },\n  \"subject\": {\n    \"reference\": \"Substance/ae1f3b4c-4f14-1460-6903-7260959ea2cd\"\n  },\n  \"effectiveDateTime\": \"2023-01-01T12:00:00Z\",\n  \"performer\": {\n    \"reference\": \"Organization/378fbe5f-5926-3a5c-4c64-5428df877b08\"\n  },\n  \"valueCodeableConcept\": {\n    \"text\": \"Complies\"\n  },\n  \"resourceType\": \"Observation\"\n}"
  }
};

function renderJSONTree(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return `<span style="color: var(--accent-primary); word-break: break-all;">${obj}</span>`;
    }
    
    let html = '<div style="margin-left: 1rem; border-left: 1px dashed var(--border-color); padding-left: 0.75rem; margin-top: 0.25rem; margin-bottom: 0.25rem;">';
    if (Array.isArray(obj)) {
        obj.forEach((item, index) => {
            html += `<div style="margin-bottom: 0.25rem;"><span style="color: var(--text-secondary); font-size: 0.75rem;">[${index}]</span> ${renderJSONTree(item)}</div>`;
        });
    } else {
        for (const [key, value] of Object.entries(obj)) {
            html += `<div style="margin-bottom: 0.25rem;"><span style="font-weight: 600; color: var(--text-primary);">${key}:</span> ${renderJSONTree(value)}</div>`;
        }
    }
    html += '</div>';
    return html;
}

function openDrawer(resourceType) {
    const data = resourceData[resourceType];
    if (!data) {
        // Fallback if not found
        document.getElementById('drawer-title').innerText = resourceType;
        document.getElementById('drawer-content').innerHTML = '<p>Resource details not available.</p>';
        document.getElementById('drawer-overlay').classList.add('open');
        document.getElementById('resource-drawer').classList.add('open');
        return;
    }

    document.getElementById('drawer-title').innerText = data.title;
    
    let html = '<table class="kv-table"><tbody>';
    data.details.forEach(item => {
        html += `<tr><td>${item.k}</td><td>${item.v}</td></tr>`;
    });
    html += '</tbody></table>';
    
    html += '<h4 style="margin-top:1.5rem; margin-bottom:1rem; color:var(--text-primary); font-size: 1.1rem;">Structured JSON View</h4>';
    html += `<div style="background: var(--bg-secondary); padding: 1rem 1rem 1rem 0; border-radius: 8px; border: 1px solid var(--border-color); font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; overflow-x: auto;">`;
    try {
        const jsonObj = JSON.parse(data.json);
        html += renderJSONTree(jsonObj);
    } catch(e) {
        html += '<p>Error parsing JSON</p>';
    }
    html += `</div>`;
    
    html += '<h4 style="margin-top:2.5rem; margin-bottom:0.5rem; color:var(--text-secondary);">FHIR JSON Source</h4>';
    html += `<pre class="json-viewer"><code>${data.json}</code></pre>`;

    document.getElementById('drawer-content').innerHTML = html;
    
    document.getElementById('drawer-overlay').classList.add('open');
    document.getElementById('resource-drawer').classList.add('open');
}

function closeDrawer() {
    document.getElementById('drawer-overlay').classList.remove('open');
    document.getElementById('resource-drawer').classList.remove('open');
}
