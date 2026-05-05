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
    'DiagnosticReport': {
        title: 'Diagnostic Report: Study Results',
        details: [
            { k: 'Resource Type', v: 'DiagnosticReport' },
            { k: 'Status', v: 'Final' },
            { k: 'Category', v: 'Laboratory' },
            { k: 'Code', v: 'Stability Study Results' },
            { k: 'Subject', v: 'Stelbatolol 20mg' },
            { k: 'Effective Date', v: '2023-10-12T09:15:00Z' }
        ],
        json: `{
  "resourceType": "DiagnosticReport",
  "id": "diagnosticreport-analysis-drug-pq-stability-prod",
  "status": "final",
  "category": [{
    "coding": [{
      "system": "http://terminology.hl7.org/CodeSystem/v2-0074",
      "code": "LAB",
      "display": "Laboratory"
    }]
  }],
  "code": {
    "coding": [{
      "system": "http://loinc.org",
      "code": "62402-3",
      "display": "Stability study report"
    }]
  },
  "subject": {
    "reference": "MedicinalProductDefinition/Stelbatolol-20mg"
  }
}`
    },
    'PlanDefinition': {
        title: 'Plan Definition: Stability Protocol',
        details: [
            { k: 'Resource Type', v: 'PlanDefinition' },
            { k: 'Status', v: 'Active' },
            { k: 'Title', v: 'Stability Study Protocol' },
            { k: 'Version', v: '1.0.0' },
            { k: 'Type', v: 'Testing Protocol' }
        ],
        json: `{
  "resourceType": "PlanDefinition",
  "id": "c96cb248-1408-79fc-1f47-b17a6b2e4b54",
  "url": "http://example.org/PlanDefinition/stability-protocol",
  "status": "active",
  "title": "Stability Study Protocol for Stelbatolol",
  "type": {
    "coding": [{
      "system": "http://terminology.hl7.org/CodeSystem/plan-definition-type",
      "code": "testing-protocol"
    }]
  }
}`
    },
    'Specimen': {
        title: 'Specimen: Stability Sample',
        details: [
            { k: 'Resource Type', v: 'Specimen' },
            { k: 'Status', v: 'Available' },
            { k: 'Type', v: 'Drug Product Sample' },
            { k: 'Collection Date', v: '2020-12-01' },
            { k: 'Condition', v: '25°C / 60% RH' }
        ],
        json: `{
  "resourceType": "Specimen",
  "id": "3a0cde98-4a73-6d67-1dfc-08e3fc9646a2",
  "status": "available",
  "type": {
    "text": "Drug Product Sample (Batch B1)"
  },
  "collection": {
    "collectedDateTime": "2020-12-01T10:00:00Z"
  },
  "condition": [{
    "text": "Stored at 25°C / 60% RH for 18 months"
  }]
}`
    },
    'Observation': {
        title: 'Observation: Test Result',
        details: [
            { k: 'Resource Type', v: 'Observation' },
            { k: 'Status', v: 'Final' },
            { k: 'Code', v: 'Total Degradation' },
            { k: 'Value', v: '1.20 % w/w' },
            { k: 'Interpretation', v: 'Normal (Pass)' }
        ],
        json: `{
  "resourceType": "Observation",
  "id": "observation-test-result-lt25c-i1-degradation-impTotal",
  "status": "final",
  "code": {
    "text": "Total Degradation Products"
  },
  "valueQuantity": {
    "value": 1.20,
    "unit": "%",
    "system": "http://unitsofmeasure.org",
    "code": "%"
  },
  "interpretation": [{
    "coding": [{
      "system": "http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation",
      "code": "N",
      "display": "Normal"
    }]
  }]
}`
    }
};

function openDrawer(resourceType) {
    const data = resourceData[resourceType];
    if (!data) return;

    document.getElementById('drawer-title').innerText = data.title;
    
    let html = '<table class="kv-table"><tbody>';
    data.details.forEach(item => {
        html += `<tr><td>${item.k}</td><td>${item.v}</td></tr>`;
    });
    html += '</tbody></table>';
    
    html += '<h4 style="margin-top:2rem; margin-bottom:0.5rem; color:var(--text-secondary);">FHIR JSON Source</h4>';
    html += `<pre class="json-viewer"><code>${data.json}</code></pre>`;

    document.getElementById('drawer-content').innerHTML = html;
    
    document.getElementById('drawer-overlay').classList.add('open');
    document.getElementById('resource-drawer').classList.add('open');
}

function closeDrawer() {
    document.getElementById('drawer-overlay').classList.remove('open');
    document.getElementById('resource-drawer').classList.remove('open');
}
