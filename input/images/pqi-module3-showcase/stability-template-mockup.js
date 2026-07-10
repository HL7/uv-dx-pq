(() => {
  const PROFILE = "http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-drug-stability-pq";
  const BASE = "http://example-server.com/fhir";

  const VOCAB = {
    orgTypes: [
      { code: "drug-product-manufacture", display: "Drug Product Manufacture" },
      { code: "drug-substance-manufacture", display: "Drug Substance Manufacture" },
      { code: "analytical-testing-stability", display: "Analytical Testing - Stability" },
      { code: "analytical-testing-release", display: "Analytical Testing - Release" },
      { code: "packaging", display: "Packaging" }
    ],
    doseForms: [
      "Gastro-resistant tablet",
      "Film-coated tablet",
      "Capsule, hard",
      "Solution for injection",
      "Powder for solution for injection"
    ],
    storageConditions: [
      { code: "lt-25-60", label: "Long-term 25°C/60% RH", instruction: "25°C/60% RH", arm: "Long-Term" },
      { code: "lt-30-65", label: "Long-term 30°C/65% RH", instruction: "30°C/65% RH", arm: "Long-Term" },
      { code: "lt-30-75", label: "Long-term 30°C/75% RH", instruction: "30°C/75% RH", arm: "Long-Term" },
      { code: "acc-40-75", label: "Accelerated 40°C/75% RH", instruction: "40°C/75% RH", arm: "Accelerated" },
      { code: "int-30-65", label: "Intermediate 30°C/65% RH", instruction: "30°C/65% RH", arm: "Intermediate" }
    ],
    timePoints: [
      { code: "0", label: "Initial (0 months)", months: 0 },
      { code: "3", label: "3 months", months: 3 },
      { code: "6", label: "6 months", months: 6 },
      { code: "9", label: "9 months", months: 9 },
      { code: "12", label: "12 months", months: 12 },
      { code: "18", label: "18 months", months: 18 },
      { code: "24", label: "24 months", months: 24 },
      { code: "36", label: "36 months", months: 36 }
    ],
    tests: [
      { code: "description", label: "Description", valueType: "codeable", unit: null, limit: null },
      { code: "assay", label: "Assay", valueType: "quantity", unit: "%", limit: "90–110%" },
      { code: "degradation", label: "Degradation Products", valueType: "quantity", unit: "% w/w", limit: "≤ 0.8% (any); ≤ 2.3% (total)" },
      { code: "water", label: "Water Content", valueType: "quantity", unit: "% w/w", limit: "≤ 0.2%" },
      { code: "micro", label: "Microbiological Quality", valueType: "codeable", unit: null, limit: "Complies" },
      { code: "uniformity", label: "Uniformity of dosage units", valueType: "codeable", unit: null, limit: "Complies" }
    ],
    batteries: [
      { code: "XYZ", label: "XYZ — full battery (Description, Degradation, Water, Micro, Uniformity)", tests: ["description","degradation","water","micro","uniformity"] },
      { code: "XY", label: "XY — Description, Degradation, Micro", tests: ["description","degradation","micro"] },
      { code: "X", label: "X — Description, Degradation, Water", tests: ["description","degradation","water"] }
    ],
    orientations: [
      { code: "horizontal", display: "Horizontal" },
      { code: "vertical", display: "Vertical" }
    ],
    reportTypes: [
      "Stability Study Report",
      "Stability Study Report - 18 months"
    ],
    reportStatuses: ["preliminary", "final", "amended", "appended"],
    timePointDescriptions: [
      { code: "Delayed Start Code", display: "Delayed Start Code" },
      { code: "on-schedule", display: "On schedule (text)" }
    ],
    complyOptions: ["Complies", "Does not comply"]
  };

  const STEPS = [
    { id: "identity", title: "Study identity", hint: "Product, orgs, batches" },
    { id: "protocol", title: "Protocol matrix", hint: "Conditions & pull points" },
    { id: "methods", title: "Test methods", hint: "Acceptance criteria" },
    { id: "specimens", title: "Specimens", hint: "Storage & orientation" },
    { id: "results", title: "Results grid", hint: "Batch × condition × time" },
    { id: "report", title: "Stability report", hint: "Conclusion & model" },
    { id: "review", title: "Review & export", hint: "Completeness check" }
  ];

  function uid() {
    if (crypto.randomUUID) return crypto.randomUUID();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
      const r = Math.random() * 16 | 0;
      const v = c === "x" ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  function emptyState() {
    return {
      product: {
        name: "",
        doseForm: "",
        strength: "",
        substanceName: ""
      },
      organizations: [
        { id: uid(), name: "", type: "drug-product-manufacture" },
        { id: uid(), name: "", type: "analytical-testing-stability" }
      ],
      batches: [
        { id: uid(), lotNumber: "", manufacturingDate: "", releaseDate: "" }
      ],
      protocol: {
        title: "Stability Monitoring Program",
        description: "",
        conditions: ["lt-25-60", "acc-40-75"],
        timePoints: ["0", "3", "6", "12"],
        defaultBattery: "XYZ",
        schedule: {}
      },
      methods: VOCAB.tests.map(t => ({
        code: t.code,
        label: t.label,
        enabled: ["description","degradation","water","micro","uniformity"].includes(t.code),
        valueType: t.valueType,
        unit: t.unit || "",
        acceptance: t.limit || ""
      })),
      specimens: {
        orientation: "horizontal",
        containerDescription: "HDPE bottle with standard closure",
        notes: ""
      },
      results: [],
      report: {
        identifier: "",
        status: "final",
        reportType: "Stability Study Report",
        effective: "",
        timePointDescription: "Delayed Start Code",
        timePointText: "",
        statisticalModel: "",
        conclusion: ""
      }
    };
  }

  function sampleState() {
    const s = emptyState();
    s.product = {
      name: "Stelbat Tablets, 20mg",
      doseForm: "Gastro-resistant tablet",
      strength: "20 mg",
      substanceName: "Stelbatolol"
    };
    s.organizations = [
      { id: "033ce81d-5f0d-7a3e-93d3-fc64e122a1fd", name: "AAA Pharmaceutical, Inc.", type: "drug-product-manufacture" },
      { id: "49d2f0c0-4b28-9271-8aaf-2996a8b9739c", name: "AAA Molybdenum Products, Inc.", type: "drug-substance-manufacture" },
      { id: "2dd49242-4bf1-9ec1-5f1e-22ba8d4d5ccc", name: "MySite", type: "packaging" },
      { id: "e3d2bc19-2f10-2b4d-1741-e4135fe612a9", name: "Advanced Analytical Testing Laboratories Inc.", type: "analytical-testing-stability" }
    ];
    s.batches = [
      { id: "7ef62d57-7cc6-9211-66d6-abc7e096093c", lotNumber: "33445", manufacturingDate: "2020-06", releaseDate: "2019-09-08" },
      { id: "8306cfc5-158f-1a53-a683-048b226060d9", lotNumber: "33446", manufacturingDate: "2020-06", releaseDate: "2019-09-08" },
      { id: "f54d4666-7ae3-4e30-8c5a-6d13838c4f3b", lotNumber: "33447", manufacturingDate: "2020-06", releaseDate: "2019-09-08" }
    ];
    s.protocol = {
      title: "Stability Monitoring Program",
      description: "Narrative description of Stability Study for Stelbat Tablets, 20 mg",
      conditions: ["lt-25-60", "acc-40-75"],
      timePoints: ["0", "3", "6", "9", "12", "18", "24"],
      defaultBattery: "XYZ",
      schedule: {
        "lt-25-60|0": "XYZ",
        "lt-25-60|3": "X",
        "lt-25-60|6": "X",
        "lt-25-60|9": "X",
        "lt-25-60|12": "XY",
        "lt-25-60|18": "XY",
        "lt-25-60|24": "XY",
        "acc-40-75|0": "XYZ",
        "acc-40-75|3": "X",
        "acc-40-75|6": "X"
      }
    };
    s.specimens = {
      orientation: "horizontal",
      containerDescription: "Standard closure",
      notes: "Samples stored horizontally per protocol."
    };
    s.report = {
      identifier: "ABC1234",
      status: "final",
      reportType: "Stability Study Report - 18 months",
      effective: "2020-12",
      timePointDescription: "Delayed Start Code",
      timePointText: "Refrigerated delayed testing",
      statisticalModel: "information about statistical model utilized to interpret stability study results",
      conclusion: "The samples have been assessed and the conclusion is that the shelf life can be 18 months."
    };
    syncResults(s, true);
    // Prefill a few representative result cells from the golden example
    const fill = (lot, cond, tp, test, value) => {
      const row = s.results.find(r => r.lotNumber === lot && r.condition === cond && r.timePoint === tp && r.test === test);
      if (row) row.value = value;
    };
    fill("33445", "lt-25-60", "0", "description", "Complies");
    fill("33445", "lt-25-60", "0", "degradation", "0.101");
    fill("33445", "lt-25-60", "0", "water", "0.05");
    fill("33445", "lt-25-60", "0", "micro", "Complies");
    fill("33445", "lt-25-60", "0", "uniformity", "Complies");
    fill("33446", "lt-25-60", "0", "description", "Complies");
    fill("33446", "lt-25-60", "0", "degradation", "0.1");
    fill("33446", "lt-25-60", "0", "micro", "Complies");
    fill("33447", "lt-25-60", "0", "description", "Complies");
    fill("33447", "lt-25-60", "0", "degradation", "0.1");
    fill("33445", "lt-25-60", "18", "description", "Complies");
    fill("33445", "lt-25-60", "18", "degradation", "0.118");
    fill("33445", "acc-40-75", "3", "description", "Complies");
    fill("33445", "acc-40-75", "3", "degradation", "0.143");
    return s;
  }

  function scheduleKey(condition, timePoint) {
    return `${condition}|${timePoint}`;
  }

  function batteryFor(state, condition, timePoint) {
    const key = scheduleKey(condition, timePoint);
    return state.protocol.schedule[key] || state.protocol.defaultBattery || "XYZ";
  }

  function testsForBattery(code) {
    const b = VOCAB.batteries.find(x => x.code === code) || VOCAB.batteries[0];
    return b.tests.slice();
  }

  function syncResults(state, preserveValues = true) {
    const prev = new Map();
    if (preserveValues) {
      for (const r of state.results) {
        prev.set(`${r.lotNumber}|${r.condition}|${r.timePoint}|${r.test}`, r.value);
      }
    }
    const next = [];
    for (const batch of state.batches) {
      if (!batch.lotNumber) continue;
      for (const cond of state.protocol.conditions) {
        for (const tp of state.protocol.timePoints) {
          const battery = batteryFor(state, cond, tp);
          if (battery === "-") continue;
          for (const test of testsForBattery(battery)) {
            const method = state.methods.find(m => m.code === test);
            if (method && !method.enabled) continue;
            const key = `${batch.lotNumber}|${cond}|${tp}|${test}`;
            next.push({
              lotNumber: batch.lotNumber,
              batchId: batch.id,
              condition: cond,
              timePoint: tp,
              battery,
              test,
              value: prev.get(key) || ""
            });
          }
        }
      }
    }
    state.results = next;
  }

  let state = sampleState();
  let currentStep = 0;

  const el = {
    nav: document.getElementById("stepNav"),
    panel: document.getElementById("stepPanel"),
    preview: document.getElementById("bundlePreview"),
    previewMeta: document.getElementById("previewMeta"),
    chips: document.getElementById("statusChips"),
    toast: document.getElementById("toast")
  };

  function toast(msg) {
    el.toast.textContent = msg;
    el.toast.classList.add("show");
    setTimeout(() => el.toast.classList.remove("show"), 2200);
  }

  function optionHtml(list, selected, valueKey = "code", labelKey = "display") {
    if (typeof list[0] === "string") {
      return list.map(v => `<option value="${escapeAttr(v)}" ${v === selected ? "selected" : ""}>${escapeHtml(v)}</option>`).join("");
    }
    return list.map(v => {
      const val = v[valueKey];
      const lab = v[labelKey] || v.label || val;
      return `<option value="${escapeAttr(val)}" ${val === selected ? "selected" : ""}>${escapeHtml(lab)}</option>`;
    }).join("");
  }

  function escapeHtml(s) {
    return String(s ?? "").replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;" }[c]));
  }
  function escapeAttr(s) { return escapeHtml(s); }

  function renderNav() {
    const completeness = stepCompleteness();
    el.nav.innerHTML = STEPS.map((s, i) => `
      <button type="button" class="step-btn ${i === currentStep ? "active" : ""} ${completeness[i] ? "complete" : ""}" data-step="${i}">
        <span class="num">${i + 1}</span>
        <span>
          <span class="label">${s.title}</span>
          <span class="hint">${s.hint}</span>
        </span>
      </button>
    `).join("");
    el.nav.querySelectorAll(".step-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        currentStep = Number(btn.dataset.step);
        render();
      });
    });
  }

  function renderStatus() {
    const checks = validateAll();
    const pass = checks.filter(c => c.ok).length;
    const bundle = buildBundle();
    el.chips.innerHTML = `
      <span class="chip ${pass === checks.length ? "ok" : "warn"}">${pass}/${checks.length} checks</span>
      <span class="chip">${bundle.entry.length} resources</span>
      <span class="chip">Step ${currentStep + 1}/${STEPS.length}</span>
    `;
  }

  function navButtons() {
    return `
      <div class="nav-bar">
        <button type="button" class="btn btn-ghost" id="prevStep" ${currentStep === 0 ? "disabled" : ""}>← Previous</button>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <button type="button" class="btn btn-ghost" id="refreshPreview">Refresh preview</button>
          ${currentStep < STEPS.length - 1
            ? `<button type="button" class="btn btn-ok" id="nextStep">Next →</button>`
            : `<button type="button" class="btn btn-accent" id="exportStep">Export Bundle JSON</button>`}
        </div>
      </div>
    `;
  }

  function bindNavButtons() {
    document.getElementById("prevStep")?.addEventListener("click", () => { currentStep--; render(); });
    document.getElementById("nextStep")?.addEventListener("click", () => { currentStep++; render(); });
    document.getElementById("exportStep")?.addEventListener("click", exportBundle);
    document.getElementById("refreshPreview")?.addEventListener("click", () => { updatePreview(); toast("Preview refreshed"); });
  }

  function renderIdentity() {
    const p = state.product;
    return `
      <div class="panel-head">
        <div>
          <h2>1. Study identity</h2>
          <p>Identify the drug product, active substance, responsible organizations, and stability batches. These become MedicinalProductDefinition, SubstanceDefinition, Organization, Medication, Ingredient, and Substance entries.</p>
        </div>
        <span class="badge">Required</span>
      </div>
      <p class="note">Tip: Start here before protocol design. At least one product manufacturer and one stability testing lab are required for a compliant package.</p>
      <div class="grid">
        <label class="field">Product name <span class="req">*</span>
          <span class="fhir">MedicinalProductDefinition.name.productName</span>
          <input type="text" data-path="product.name" value="${escapeAttr(p.name)}" placeholder="e.g. Stelbat Tablets, 20mg" />
        </label>
        <label class="field">Dose form <span class="req">*</span>
          <span class="fhir">MedicinalProductDefinition.combinedPharmaceuticalDoseForm</span>
          <select data-path="product.doseForm">${optionHtml(VOCAB.doseForms, p.doseForm)}</select>
        </label>
        <label class="field">Strength <span class="req">*</span>
          <span class="fhir">Ingredient.substance.strength (narrative)</span>
          <input type="text" data-path="product.strength" value="${escapeAttr(p.strength)}" placeholder="20 mg" />
        </label>
        <label class="field">Active substance name <span class="req">*</span>
          <span class="fhir">SubstanceDefinition.name</span>
          <input type="text" data-path="product.substanceName" value="${escapeAttr(p.substanceName)}" placeholder="e.g. Stelbatolol" />
        </label>
      </div>

      <div class="section-card">
        <h3>Organizations <button type="button" class="icon-btn" id="addOrg">+ Add</button></h3>
        <div class="table-wrap">
          <table class="data">
            <thead><tr><th>Name</th><th>Type</th><th></th></tr></thead>
            <tbody>
              ${state.organizations.map((o, i) => `
                <tr>
                  <td><input type="text" data-org-name="${i}" value="${escapeAttr(o.name)}" placeholder="Organization name" /></td>
                  <td><select data-org-type="${i}">${optionHtml(VOCAB.orgTypes, o.type)}</select></td>
                  <td><button type="button" class="icon-btn danger" data-del-org="${i}" ${state.organizations.length <= 1 ? "disabled" : ""}>Remove</button></td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>

      <div class="section-card">
        <h3>Batches / lots <button type="button" class="icon-btn" id="addBatch">+ Add batch</button></h3>
        <div class="table-wrap">
          <table class="data">
            <thead><tr><th>Lot number</th><th>Manufacturing date</th><th>Release date</th><th></th></tr></thead>
            <tbody>
              ${state.batches.map((b, i) => `
                <tr>
                  <td><input type="text" data-batch-lot="${i}" value="${escapeAttr(b.lotNumber)}" placeholder="33445" /></td>
                  <td><input type="month" data-batch-mfg="${i}" value="${escapeAttr(b.manufacturingDate)}" /></td>
                  <td><input type="date" data-batch-rel="${i}" value="${escapeAttr(b.releaseDate)}" /></td>
                  <td><button type="button" class="icon-btn danger" data-del-batch="${i}" ${state.batches.length <= 1 ? "disabled" : ""}>Remove</button></td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
      ${navButtons()}
    `;
  }

  function renderProtocol() {
    const pr = state.protocol;
    return `
      <div class="panel-head">
        <div>
          <h2>2. Protocol matrix</h2>
          <p>Define storage conditions, pull time-points, and which test battery runs at each cell. This drives PlanDefinition and ActivityDefinition resources.</p>
        </div>
        <span class="badge">QMS → PlanDefinition</span>
      </div>
      <div class="grid">
        <label class="field span-2">Protocol title <span class="req">*</span>
          <span class="fhir">PlanDefinition.title</span>
          <input type="text" data-path="protocol.title" value="${escapeAttr(pr.title)}" />
        </label>
        <label class="field span-2">Protocol description
          <span class="fhir">PlanDefinition.description</span>
          <textarea data-path="protocol.description">${escapeHtml(pr.description)}</textarea>
        </label>
        <label class="field span-2">Storage conditions <span class="req">*</span>
          <span class="fhir">PlanDefinition.action + SpecimenDefinition.handling.instruction</span>
          <div class="check-row">
            ${VOCAB.storageConditions.map(c => `
              <label><input type="checkbox" data-cond="${c.code}" ${pr.conditions.includes(c.code) ? "checked" : ""} /> ${escapeHtml(c.label)}</label>
            `).join("")}
          </div>
        </label>
        <label class="field span-2">Time-points <span class="req">*</span>
          <span class="fhir">PlanDefinition.action.timingTiming</span>
          <div class="check-row">
            ${VOCAB.timePoints.map(t => `
              <label><input type="checkbox" data-tp="${t.code}" ${pr.timePoints.includes(t.code) ? "checked" : ""} /> ${escapeHtml(t.label)}</label>
            `).join("")}
          </div>
        </label>
        <label class="field">Default battery
          <span class="fhir">ActivityDefinition / ObservationDefinition set</span>
          <select data-path="protocol.defaultBattery">${optionHtml(VOCAB.batteries, pr.defaultBattery, "code", "label")}</select>
        </label>
      </div>

      <div class="section-card">
        <h3>Condition × time-point battery schedule</h3>
        <p class="note" style="margin-top:0">Choose battery X / XY / XYZ per cell (mirrors the IG example protocol). Leave as default if unchanged.</p>
        <div class="table-wrap">
          <table class="data">
            <thead>
              <tr>
                <th>Condition</th>
                ${pr.timePoints.map(tp => {
                  const t = VOCAB.timePoints.find(x => x.code === tp);
                  return `<th>${escapeHtml(t ? t.label : tp)}</th>`;
                }).join("")}
              </tr>
            </thead>
            <tbody>
              ${pr.conditions.map(cond => {
                const c = VOCAB.storageConditions.find(x => x.code === cond);
                return `<tr>
                  <td><strong>${escapeHtml(c ? c.label : cond)}</strong></td>
                  ${pr.timePoints.map(tp => {
                    const key = scheduleKey(cond, tp);
                    const val = pr.schedule[key] || pr.defaultBattery;
                    return `<td>
                      <select data-sched="${escapeAttr(key)}">
                        ${optionHtml(VOCAB.batteries, val, "code", "code")}
                        <option value="-" ${val === "-" ? "selected" : ""}>—</option>
                      </select>
                    </td>`;
                  }).join("")}
                </tr>`;
              }).join("")}
            </tbody>
          </table>
        </div>
      </div>
      ${navButtons()}
    `;
  }

  function renderMethods() {
    return `
      <div class="panel-head">
        <div>
          <h2>3. Test methods & acceptance criteria</h2>
          <p>Enable the analytical tests included in your batteries and record acceptance criteria. These become ObservationDefinition resources.</p>
        </div>
        <span class="badge">LIMS methods</span>
      </div>
      <div class="table-wrap">
        <table class="data">
          <thead>
            <tr><th>Include</th><th>Test</th><th>Value type</th><th>Unit</th><th>Acceptance criteria</th></tr>
          </thead>
          <tbody>
            ${state.methods.map((m, i) => `
              <tr>
                <td><input type="checkbox" data-method-on="${i}" ${m.enabled ? "checked" : ""} /></td>
                <td><strong>${escapeHtml(m.label)}</strong><div class="fhir">${escapeHtml(m.code)}</div></td>
                <td>${escapeHtml(m.valueType)}</td>
                <td><input type="text" data-method-unit="${i}" value="${escapeAttr(m.unit)}" ${m.valueType !== "quantity" ? "disabled" : ""} /></td>
                <td><input type="text" data-method-acc="${i}" value="${escapeAttr(m.acceptance)}" placeholder="e.g. ≤ 0.2%" /></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
      ${navButtons()}
    `;
  }

  function renderSpecimens() {
    const sp = state.specimens;
    return `
      <div class="panel-head">
        <div>
          <h2>4. Specimens & storage setup</h2>
          <p>Describe how samples are stored and oriented. SpecimenDefinition entries are created per selected storage condition; Specimen entries are created per batch × condition.</p>
        </div>
        <span class="badge">Lab notebooks</span>
      </div>
      <div class="grid">
        <label class="field">Container orientation <span class="req">*</span>
          <span class="fhir">Extension-container-orientation-pq</span>
          <select data-path="specimens.orientation">${optionHtml(VOCAB.orientations, sp.orientation)}</select>
        </label>
        <label class="field">Container / closure description
          <span class="fhir">Medication batch container / Specimen</span>
          <input type="text" data-path="specimens.containerDescription" value="${escapeAttr(sp.containerDescription)}" />
        </label>
        <label class="field span-2">Handling notes
          <span class="fhir">SpecimenDefinition.typeTested.handling.instruction (supplement)</span>
          <textarea data-path="specimens.notes">${escapeHtml(sp.notes)}</textarea>
        </label>
      </div>
      <div class="section-card">
        <h3>Storage conditions that will generate SpecimenDefinitions</h3>
        <ul>
          ${state.protocol.conditions.map(code => {
            const c = VOCAB.storageConditions.find(x => x.code === code);
            return `<li><strong>${escapeHtml(c.label)}</strong> — instruction “${escapeHtml(c.instruction)}”</li>`;
          }).join("")}
        </ul>
      </div>
      ${navButtons()}
    `;
  }

  function renderResults() {
    syncResults(state, true);
    const grouped = {};
    for (const r of state.results) {
      const g = `${r.condition}|${r.timePoint}|${r.lotNumber}`;
      (grouped[g] ||= []).push(r);
    }
    const keys = Object.keys(grouped).sort();
    return `
      <div class="panel-head">
        <div>
          <h2>5. Results grid</h2>
          <p>Enter measured values for each batch × condition × time-point. Parent Observations group child test results via <code>hasMember</code>.</p>
        </div>
        <span class="badge">LIMS results</span>
      </div>
      <p class="note">${state.results.length} result cells generated from protocol × batches × enabled methods. Empty cells are still exported as pending observations.</p>
      ${keys.length === 0 ? `<p class="note">Add batches, conditions, and time-points first.</p>` : ""}
      ${keys.map(key => {
        const rows = grouped[key];
        const [cond, tp, lot] = key.split("|");
        const c = VOCAB.storageConditions.find(x => x.code === cond);
        const t = VOCAB.timePoints.find(x => x.code === tp);
        return `
          <div class="section-card">
            <h3>${escapeHtml(lot)} · ${escapeHtml(c ? c.label : cond)} · ${escapeHtml(t ? t.label : tp)}
              <span class="badge">Battery ${escapeHtml(rows[0].battery)}</span>
            </h3>
            <div class="table-wrap">
              <table class="data">
                <thead><tr><th>Test</th><th>Value</th><th>Unit / options</th></tr></thead>
                <tbody>
                  ${rows.map(r => {
                    const method = state.methods.find(m => m.code === r.test);
                    const idx = state.results.indexOf(r);
                    if (method?.valueType === "codeable") {
                      return `<tr>
                        <td>${escapeHtml(method.label)}</td>
                        <td><select data-result="${idx}">
                          <option value="">— select —</option>
                          ${optionHtml(VOCAB.complyOptions, r.value)}
                        </select></td>
                        <td class="fhir">CodeableConcept.text</td>
                      </tr>`;
                    }
                    return `<tr>
                      <td>${escapeHtml(method?.label || r.test)}</td>
                      <td><input type="text" data-result="${idx}" value="${escapeAttr(r.value)}" placeholder="numeric value" /></td>
                      <td>${escapeHtml(method?.unit || "")}</td>
                    </tr>`;
                  }).join("")}
                </tbody>
              </table>
            </div>
          </div>
        `;
      }).join("")}
      ${navButtons()}
    `;
  }

  function renderReport() {
    const r = state.report;
    return `
      <div class="panel-head">
        <div>
          <h2>6. Stability report</h2>
          <p>Capture the DiagnosticReport header: status, report type, statistical model, orientation, and shelf-life conclusion.</p>
        </div>
        <span class="badge">DiagnosticReport</span>
      </div>
      <div class="grid">
        <label class="field">Report identifier
          <span class="fhir">DiagnosticReport.identifier</span>
          <input type="text" data-path="report.identifier" value="${escapeAttr(r.identifier)}" placeholder="ABC1234" />
        </label>
        <label class="field">Status <span class="req">*</span>
          <span class="fhir">DiagnosticReport.status</span>
          <select data-path="report.status">${optionHtml(VOCAB.reportStatuses, r.status)}</select>
        </label>
        <label class="field">Report type <span class="req">*</span>
          <span class="fhir">DiagnosticReport.code</span>
          <select data-path="report.reportType">${optionHtml(VOCAB.reportTypes, r.reportType)}</select>
        </label>
        <label class="field">Effective (study start) <span class="req">*</span>
          <span class="fhir">DiagnosticReport.effectiveDateTime</span>
          <input type="month" data-path="report.effective" value="${escapeAttr(r.effective)}" />
        </label>
        <label class="field">Time-point description
          <span class="fhir">Extension-time-point-description-pq</span>
          <select data-path="report.timePointDescription">${optionHtml(VOCAB.timePointDescriptions, r.timePointDescription)}</select>
        </label>
        <label class="field">Time-point text
          <span class="fhir">valueCodeableConcept.text</span>
          <input type="text" data-path="report.timePointText" value="${escapeAttr(r.timePointText)}" placeholder="Refrigerated delayed testing" />
        </label>
        <label class="field span-2">Statistical model
          <span class="fhir">Extension-statistical-model-pq</span>
          <textarea data-path="report.statisticalModel">${escapeHtml(r.statisticalModel)}</textarea>
        </label>
        <label class="field span-2">Conclusion / shelf-life statement <span class="req">*</span>
          <span class="fhir">DiagnosticReport.conclusion</span>
          <textarea data-path="report.conclusion">${escapeHtml(r.conclusion)}</textarea>
        </label>
      </div>
      ${navButtons()}
    `;
  }

  function renderReview() {
    const checks = validateAll();
    const bundle = buildBundle();
    const sliceCounts = countSlices(bundle);
    return `
      <div class="panel-head">
        <div>
          <h2>7. Review & export</h2>
          <p>Confirm required Bundle slices are present, then download a collection Bundle ready for validation against <code>Bundle-drug-stability-pq</code>.</p>
        </div>
        <span class="badge">Bundle assembly</span>
      </div>
      <ul class="checklist">
        ${checks.map(c => `
          <li class="${c.ok ? "pass" : "fail"}">
            <span class="dot"></span>
            <span><strong>${escapeHtml(c.label)}</strong><br/><span style="color:var(--muted);font-size:0.84rem;">${escapeHtml(c.detail)}</span></span>
          </li>
        `).join("")}
      </ul>
      <div class="section-card">
        <h3>Slice inventory (profile cardinalities)</h3>
        <div class="table-wrap">
          <table class="data">
            <thead><tr><th>Slice</th><th>Count</th><th>Profile min</th></tr></thead>
            <tbody>
              ${Object.entries(sliceCounts).map(([k, v]) => `
                <tr><td>${escapeHtml(k)}</td><td>${v.count}</td><td>${v.min}</td></tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
      <div class="nav-bar">
        <button type="button" class="btn btn-ghost" id="prevStep">← Previous</button>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <button type="button" class="btn btn-ghost" id="btnValidate">Re-check</button>
          <button type="button" class="btn btn-accent" id="exportStep">Export Bundle JSON</button>
        </div>
      </div>
    `;
  }

  function renderPanel() {
    const renderers = [renderIdentity, renderProtocol, renderMethods, renderSpecimens, renderResults, renderReport, renderReview];
    el.panel.innerHTML = renderers[currentStep]();
    bindPanelEvents();
    bindNavButtons();
    decorateCTD(STEPS[currentStep].id);
    document.getElementById("btnValidate")?.addEventListener("click", () => { render(); toast("Checks updated"); });
  }

  function setPath(path, value) {
    const parts = path.split(".");
    let obj = state;
    for (let i = 0; i < parts.length - 1; i++) obj = obj[parts[i]];
    obj[parts[parts.length - 1]] = value;
  }

  function bindPanelEvents() {
    el.panel.querySelectorAll("[data-path]").forEach(input => {
      const handler = () => {
        setPath(input.dataset.path, input.value);
        if (input.dataset.path.startsWith("protocol.")) syncResults(state, true);
        updatePreview();
        renderStatus();
      };
      input.addEventListener("change", handler);
      input.addEventListener("input", handler);
    });

    el.panel.querySelectorAll("[data-org-name]").forEach(input => {
      input.addEventListener("input", () => {
        state.organizations[Number(input.dataset.orgName)].name = input.value;
        updatePreview(); renderStatus();
      });
    });
    el.panel.querySelectorAll("[data-org-type]").forEach(input => {
      input.addEventListener("change", () => {
        state.organizations[Number(input.dataset.orgType)].type = input.value;
        updatePreview(); renderStatus();
      });
    });
    document.getElementById("addOrg")?.addEventListener("click", () => {
      state.organizations.push({ id: uid(), name: "", type: "analytical-testing-stability" });
      render();
    });
    el.panel.querySelectorAll("[data-del-org]").forEach(btn => {
      btn.addEventListener("click", () => {
        state.organizations.splice(Number(btn.dataset.delOrg), 1);
        render();
      });
    });

    el.panel.querySelectorAll("[data-batch-lot]").forEach(input => {
      input.addEventListener("input", () => {
        state.batches[Number(input.dataset.batchLot)].lotNumber = input.value;
        syncResults(state, true);
        updatePreview(); renderStatus();
      });
    });
    el.panel.querySelectorAll("[data-batch-mfg]").forEach(input => {
      input.addEventListener("change", () => {
        state.batches[Number(input.dataset.batchMfg)].manufacturingDate = input.value;
        updatePreview();
      });
    });
    el.panel.querySelectorAll("[data-batch-rel]").forEach(input => {
      input.addEventListener("change", () => {
        state.batches[Number(input.dataset.batchRel)].releaseDate = input.value;
        updatePreview();
      });
    });
    document.getElementById("addBatch")?.addEventListener("click", () => {
      state.batches.push({ id: uid(), lotNumber: "", manufacturingDate: "", releaseDate: "" });
      syncResults(state, true);
      render();
    });
    el.panel.querySelectorAll("[data-del-batch]").forEach(btn => {
      btn.addEventListener("click", () => {
        state.batches.splice(Number(btn.dataset.delBatch), 1);
        syncResults(state, true);
        render();
      });
    });

    el.panel.querySelectorAll("[data-cond]").forEach(input => {
      input.addEventListener("change", () => {
        const code = input.dataset.cond;
        if (input.checked) {
          if (!state.protocol.conditions.includes(code)) state.protocol.conditions.push(code);
        } else {
          state.protocol.conditions = state.protocol.conditions.filter(c => c !== code);
        }
        syncResults(state, true);
        render();
      });
    });
    el.panel.querySelectorAll("[data-tp]").forEach(input => {
      input.addEventListener("change", () => {
        const code = input.dataset.tp;
        if (input.checked) {
          if (!state.protocol.timePoints.includes(code)) state.protocol.timePoints.push(code);
          state.protocol.timePoints.sort((a, b) => Number(a) - Number(b));
        } else {
          state.protocol.timePoints = state.protocol.timePoints.filter(t => t !== code);
        }
        syncResults(state, true);
        render();
      });
    });
    el.panel.querySelectorAll("[data-sched]").forEach(input => {
      input.addEventListener("change", () => {
        state.protocol.schedule[input.dataset.sched] = input.value;
        syncResults(state, true);
        updatePreview(); renderStatus();
      });
    });

    el.panel.querySelectorAll("[data-method-on]").forEach(input => {
      input.addEventListener("change", () => {
        state.methods[Number(input.dataset.methodOn)].enabled = input.checked;
        syncResults(state, true);
        updatePreview(); renderStatus();
      });
    });
    el.panel.querySelectorAll("[data-method-unit]").forEach(input => {
      input.addEventListener("input", () => {
        state.methods[Number(input.dataset.methodUnit)].unit = input.value;
      });
    });
    el.panel.querySelectorAll("[data-method-acc]").forEach(input => {
      input.addEventListener("input", () => {
        state.methods[Number(input.dataset.methodAcc)].acceptance = input.value;
      });
    });

    el.panel.querySelectorAll("[data-result]").forEach(input => {
      const handler = () => {
        state.results[Number(input.dataset.result)].value = input.value;
        updatePreview(); renderStatus();
      };
      input.addEventListener("change", handler);
      input.addEventListener("input", handler);
    });
  }

  function stepCompleteness() {
    const v = validateAll();
    const by = Object.fromEntries(v.map(x => [x.id, x.ok]));
    return [
      by.product && by.orgs && by.batches,
      by.protocol,
      by.methods,
      by.specimens,
      by.results,
      by.report,
      v.every(x => x.ok)
    ];
  }

  function validateAll() {
    const hasStabilityLab = state.organizations.some(o => o.type === "analytical-testing-stability" && o.name.trim());
    const hasMfg = state.organizations.some(o => o.type === "drug-product-manufacture" && o.name.trim());
    const batchesOk = state.batches.some(b => b.lotNumber.trim());
    const methodsOk = state.methods.some(m => m.enabled);
    const filledResults = state.results.filter(r => String(r.value).trim() !== "").length;
    return [
      { id: "product", ok: !!(state.product.name && state.product.doseForm && state.product.substanceName && state.product.strength), label: "Product identity complete", detail: "Name, dose form, strength, and substance name are required." },
      { id: "orgs", ok: hasMfg && hasStabilityLab, label: "Organizations present", detail: "Need at least one Drug Product Manufacture and one Analytical Testing - Stability organization." },
      { id: "batches", ok: batchesOk, label: "At least one batch/lot", detail: "Medication batch entries require a lot number." },
      { id: "protocol", ok: state.protocol.title && state.protocol.conditions.length > 0 && state.protocol.timePoints.length > 0, label: "Protocol matrix defined", detail: "Title, ≥1 storage condition, and ≥1 time-point required." },
      { id: "methods", ok: methodsOk, label: "Test methods enabled", detail: "Enable at least one ObservationDefinition test method." },
      { id: "specimens", ok: !!state.specimens.orientation, label: "Specimen orientation set", detail: "Container orientation extension is required on the report." },
      { id: "results", ok: state.results.length > 0, label: "Results grid generated", detail: filledResults ? `${filledResults}/${state.results.length} cells populated (empty cells export as pending).` : "Generate cells by completing identity + protocol." },
      { id: "report", ok: !!(state.report.status && state.report.reportType && state.report.effective && state.report.conclusion), label: "Report header complete", detail: "Status, type, effective date, and conclusion are required." }
    ];
  }

  function coding(system, code, display) {
    return { coding: [{ system, code, display: display || code }], text: display || code };
  }

  function ref(type, id) {
    return { reference: `${type}/${id}` };
  }

  function entryOf(resource) {
    return {
      fullUrl: `urn:uuid:${resource.id}`,
      resource
    };
  }

  function buildBundle() {
    syncResults(state, true);
    const ids = {
      mpd: "mpd-" + (state.product.name || "product").toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 24) + "-" + uid().slice(0, 8),
      substanceDef: uid(),
      ingredient: uid(),
      plan: uid(),
      report: uid()
    };
    // Stable-ish ids when sample loaded with known org/batch ids
    ids.mpd = uid();

    const orgByType = (type) => state.organizations.find(o => o.type === type && o.name.trim());
    const tester = orgByType("analytical-testing-stability") || state.organizations[0];
    const manufacturer = orgByType("drug-product-manufacture") || state.organizations[0];

    const organizations = state.organizations.filter(o => o.name.trim()).map(o => {
      const vt = VOCAB.orgTypes.find(x => x.code === o.type);
      return {
        resourceType: "Organization",
        id: o.id,
        meta: { profile: ["http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Organization-drug-pq"] },
        name: o.name,
        type: [coding("http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type", o.type, vt?.display)]
      };
    });

    const substanceDef = {
      resourceType: "SubstanceDefinition",
      id: ids.substanceDef,
      meta: { profile: ["http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/SubstanceDefinition-component-substance-drug-pq"] },
      name: [{ name: state.product.substanceName || "Active substance" }]
    };

    const mpd = {
      resourceType: "MedicinalProductDefinition",
      id: ids.mpd,
      meta: { profile: ["http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/MedicinalProductDefinition-drug-product-pq"] },
      name: [{ productName: state.product.name || "Untitled product" }],
      combinedPharmaceuticalDoseForm: { text: state.product.doseForm || "tablet" }
    };

    const ingredient = {
      resourceType: "Ingredient",
      id: ids.ingredient,
      meta: { profile: ["http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Ingredient-drug-pq"] },
      status: "active",
      for: [ref("MedicinalProductDefinition", ids.mpd)],
      role: { text: "active" },
      substance: {
        code: { reference: ref("SubstanceDefinition", ids.substanceDef) },
        strength: [{ text: state.product.strength || undefined }].filter(s => s.text)
      }
    };

    const medications = state.batches.filter(b => b.lotNumber.trim()).map(b => {
      const med = {
        resourceType: "Medication",
        id: b.id,
        meta: { profile: ["http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Medication-batch-information-drug-pq"] },
        code: {
          extension: [{
            url: "http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-pq",
            valueReference: ref("MedicinalProductDefinition", ids.mpd)
          }]
        },
        batch: {
          lotNumber: b.lotNumber,
          extension: []
        }
      };
      if (b.manufacturingDate) {
        med.batch.extension.push({
          url: "http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch",
          extension: [{ url: "manufacturingDate", valueDateTime: b.manufacturingDate }]
        });
      }
      if (b.releaseDate) {
        med.extension = [{
          url: "http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-pq",
          valueDateTime: b.releaseDate
        }];
      }
      return med;
    });

    const substances = medications.map(m => ({
      resourceType: "Substance",
      id: uid(),
      meta: { profile: ["http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq"] },
      code: { concept: { text: state.product.substanceName || "Drug substance batch" } },
      extension: [{
        url: "http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-pq",
        valueReference: ref("Medication", m.id)
      }]
    }));

    const specimenDefs = state.protocol.conditions.map(code => {
      const c = VOCAB.storageConditions.find(x => x.code === code);
      return {
        resourceType: "SpecimenDefinition",
        id: uid(),
        meta: { profile: ["http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/SpecimenDefinition-drug-pq"] },
        url: `${BASE}/SpecimenDefinition/${code}`,
        status: "active",
        typeTested: [{
          preference: "preferred",
          handling: [{ instruction: c ? c.instruction : code }]
        }]
      };
    });
    const specimenDefByCond = Object.fromEntries(state.protocol.conditions.map((c, i) => [c, specimenDefs[i].id]));

    const specimens = [];
    for (const med of medications) {
      for (const cond of state.protocol.conditions) {
        specimens.push({
          resourceType: "Specimen",
          id: uid(),
          meta: { profile: ["http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Specimen-drug-pq"] },
          status: "available",
          type: { text: VOCAB.storageConditions.find(x => x.code === cond)?.instruction || cond },
          subject: ref("Medication", med.id),
          extension: [{
            url: "http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-container-orientation-pq",
            valueCodeableConcept: coding(
              "http://terminology.hl7.org/CodeSystem/container-orientation",
              state.specimens.orientation,
              VOCAB.orientations.find(o => o.code === state.specimens.orientation)?.display
            )
          }]
        });
      }
    }

    const obsDefs = state.methods.filter(m => m.enabled).map(m => {
      const od = {
        resourceType: "ObservationDefinition",
        id: uid(),
        meta: { profile: ["http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/ObservationDefinition-test-method-pq"] },
        url: `${BASE}/ObservationDefinition/${m.code}`,
        status: "active",
        title: m.label,
        code: { text: m.label }
      };
      if (m.acceptance) {
        od.qualifiedValue = [{ condition: m.acceptance }];
      }
      return od;
    });
    const obsDefByTest = Object.fromEntries(
      state.methods.filter(m => m.enabled).map((m, i) => [m.code, obsDefs[i]])
    );

    // ActivityDefinitions: one per schedule cell that is not "-"
    const activityDefs = [];
    const activityByCell = {};
    for (const cond of state.protocol.conditions) {
      for (const tp of state.protocol.timePoints) {
        const battery = batteryFor(state, cond, tp);
        if (battery === "-") continue;
        const c = VOCAB.storageConditions.find(x => x.code === cond);
        const tests = testsForBattery(battery).filter(t => obsDefByTest[t]);
        const ad = {
          resourceType: "ActivityDefinition",
          id: uid(),
          meta: { profile: ["http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/ActivityDefinition-drug-test-pq"] },
          url: `${BASE}/ActivityDefinition/${cond}-${tp}-${battery}`,
          status: "active",
          title: `${c ? c.arm : cond} - ${c ? c.instruction : cond} - ${battery}`,
          observationRequirement: tests.map(t => `${BASE}/ObservationDefinition/${t}`)
        };
        activityDefs.push(ad);
        activityByCell[scheduleKey(cond, tp)] = ad;
      }
    }

    // PlanDefinition hierarchy
    const planActions = [];
    const byArm = {};
    for (const cond of state.protocol.conditions) {
      const c = VOCAB.storageConditions.find(x => x.code === cond);
      const arm = c?.arm || "Study arm";
      (byArm[arm] ||= []).push(cond);
    }
    for (const [arm, conds] of Object.entries(byArm)) {
      const armAction = {
        title: arm,
        description: conds.map(code => VOCAB.storageConditions.find(x => x.code === code)?.instruction).join("; "),
        action: []
      };
      for (const cond of conds) {
        for (const tp of state.protocol.timePoints) {
          const ad = activityByCell[scheduleKey(cond, tp)];
          if (!ad) continue;
          const t = VOCAB.timePoints.find(x => x.code === tp);
          const months = t ? t.months : Number(tp);
          armAction.action.push({
            title: months === 0 ? "Initial" : String(months),
            timingTiming: {
              repeat: {
                boundsRange: {
                  low: { value: months, unit: "months", system: "http://unitsofmeasure.org", code: "mo" },
                  high: { value: months, unit: "months", system: "http://unitsofmeasure.org", code: "mo" }
                },
                frequency: 1
              }
            },
            action: [{
              title: batteryFor(state, cond, tp),
              definitionCanonical: ad.url
            }]
          });
        }
      }
      planActions.push(armAction);
    }

    const plan = {
      resourceType: "PlanDefinition",
      id: ids.plan,
      meta: { profile: ["http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/PlanDefinition-drug-pq"] },
      url: `${BASE}/PlanDefinition/${ids.plan}`,
      title: state.protocol.title || "Stability Study Protocol",
      type: coding("http://terminology.hl7.org/CodeSystem/pharmaceutical-plan-type", "1244588", "Stability Study Protocol"),
      status: "active",
      subjectReference: ref("MedicinalProductDefinition", ids.mpd),
      description: state.protocol.description || undefined,
      action: [{
        title: `Stability Test Protocol for ${state.product.name || "product"}`,
        action: planActions
      }]
    };

    // Observations: parent per batch×condition×timePoint with contained children
    const parentObservations = [];
    const groups = {};
    for (const r of state.results) {
      const g = `${r.batchId}|${r.condition}|${r.timePoint}`;
      (groups[g] ||= []).push(r);
    }
    for (const [g, rows] of Object.entries(groups)) {
      const [batchId, condition, timePoint] = g.split("|");
      const med = medications.find(m => m.id === batchId);
      const c = VOCAB.storageConditions.find(x => x.code === condition);
      const t = VOCAB.timePoints.find(x => x.code === timePoint);
      const parentId = uid();
      const contained = rows.map(r => {
        const method = state.methods.find(m => m.code === r.test);
        const child = {
          resourceType: "Observation",
          id: uid(),
          meta: { profile: ["http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Observation-test-result-drug-pq"] },
          status: r.value ? "final" : "preliminary",
          code: { text: method?.label || r.test },
          subject: med ? ref("Medication", med.id) : undefined
        };
        if (method?.valueType === "quantity" && r.value !== "") {
          const num = Number(r.value);
          child.valueQuantity = {
            value: Number.isFinite(num) ? num : undefined,
            unit: method.unit || undefined,
            system: "http://unitsofmeasure.org"
          };
          if (!Number.isFinite(num)) child.valueString = r.value;
        } else if (r.value) {
          child.valueCodeableConcept = { text: r.value };
        }
        return child;
      });
      parentObservations.push({
        resourceType: "Observation",
        id: parentId,
        meta: { profile: ["http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Observation-test-result-drug-pq"] },
        status: contained.every(c => c.status === "final") ? "final" : "preliminary",
        code: {
          text: `Test Components - ${c ? c.label : condition} - ${t ? t.label : timePoint} (${rows[0].battery})`
        },
        subject: med ? ref("Medication", med.id) : undefined,
        effectiveDateTime: state.report.effective ? `${state.report.effective}-01` : undefined,
        hasMember: contained.map(c => ({ reference: `#${c.id}` })),
        contained
      });
    }

    const orientation = VOCAB.orientations.find(o => o.code === state.specimens.orientation);
    const report = {
      resourceType: "DiagnosticReport",
      id: ids.report,
      meta: { profile: ["http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/DiagnosticReport-analysis-drug-pq"] },
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/workflow-triggeredBy",
          valueReference: ref("PlanDefinition", ids.plan)
        },
        {
          url: "http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-statistical-model-pq",
          valueCodeableConcept: { text: state.report.statisticalModel || "Statistical model not specified" }
        },
        {
          url: "http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-container-orientation-pq",
          valueCodeableConcept: coding(
            "http://terminology.hl7.org/CodeSystem/container-orientation",
            state.specimens.orientation,
            orientation?.display
          )
        }
      ],
      status: state.report.status || "final",
      code: coding(
        "http://terminology.hl7.org/CodeSystem/pharmaceutical-report-type",
        state.report.reportType,
        state.report.reportType
      ),
      effectiveDateTime: state.report.effective || undefined,
      performer: tester ? [ref("Organization", tester.id)] : undefined,
      result: parentObservations.map(o => ref("Observation", o.id)),
      conclusion: state.report.conclusion || undefined
    };
    if (state.report.identifier) {
      report.identifier = [{ system: "https://eudract.europa.eu/example/identifier", value: state.report.identifier }];
    }
    if (state.report.effective && state.report.timePointDescription) {
      report._effectiveDateTime = {
        extension: [{
          url: "http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-time-point-description-pq",
          valueCodeableConcept: {
            coding: [{
              system: "http://terminology.hl7.org/CodeSystem/time-point-description",
              code: state.report.timePointDescription,
              display: state.report.timePointDescription
            }],
            text: state.report.timePointText || state.report.timePointDescription
          }
        }]
      };
    }

    const resources = [
      report,
      plan,
      mpd,
      ingredient,
      substanceDef,
      ...organizations,
      ...medications,
      ...substances,
      ...specimenDefs,
      ...specimens,
      ...activityDefs,
      ...obsDefs,
      ...parentObservations
    ];

    return {
      resourceType: "Bundle",
      id: "bundle-drug-stability-pq-pilot",
      meta: { profile: [PROFILE] },
      type: "collection",
      timestamp: new Date().toISOString(),
      entry: resources.map(entryOf),
      _pilot: {
        generatedBy: "PQI Stability Template Mockup",
        productTrack: "drug-product",
        profile: PROFILE,
        note: "MVP collection Bundle for pilot authoring. Validate with the HL7 FHIR validator against hl7.fhir.uv.pharm-quality."
      }
    };
  }

  function countSlices(bundle) {
    const counts = {
      "Product-Identification (MedicinalProductDefinition)": { count: 0, min: "0..1" },
      "Drug-Ingredient (Ingredient)": { count: 0, min: "0..*" },
      "Component-Substance (SubstanceDefinition)": { count: 0, min: "1..*" },
      "Specimen-Definition": { count: 0, min: "1..*" },
      "Batch-Lot-Information (Medication)": { count: 0, min: "0..*" },
      "Actual-Batch-Substance (Substance)": { count: 0, min: "1..*" },
      "Actual-Batch-Specimen (Specimen)": { count: 0, min: "1..*" },
      "Protocol (PlanDefinition)": { count: 0, min: "1..1" },
      "Test-Set (ActivityDefinition)": { count: 0, min: "1..*" },
      "Test-Method (ObservationDefinition)": { count: 0, min: "1..*" },
      "Report (DiagnosticReport)": { count: 0, min: "1..*" },
      "Result-Observations (Observation)": { count: 0, min: "1..*" },
      "Organization": { count: 0, min: "1..*" }
    };
    for (const e of bundle.entry) {
      const rt = e.resource.resourceType;
      if (rt === "MedicinalProductDefinition") counts["Product-Identification (MedicinalProductDefinition)"].count++;
      if (rt === "Ingredient") counts["Drug-Ingredient (Ingredient)"].count++;
      if (rt === "SubstanceDefinition") counts["Component-Substance (SubstanceDefinition)"].count++;
      if (rt === "SpecimenDefinition") counts["Specimen-Definition"].count++;
      if (rt === "Medication") counts["Batch-Lot-Information (Medication)"].count++;
      if (rt === "Substance") counts["Actual-Batch-Substance (Substance)"].count++;
      if (rt === "Specimen") counts["Actual-Batch-Specimen (Specimen)"].count++;
      if (rt === "PlanDefinition") counts["Protocol (PlanDefinition)"].count++;
      if (rt === "ActivityDefinition") counts["Test-Set (ActivityDefinition)"].count++;
      if (rt === "ObservationDefinition") counts["Test-Method (ObservationDefinition)"].count++;
      if (rt === "DiagnosticReport") counts["Report (DiagnosticReport)"].count++;
      if (rt === "Observation") counts["Result-Observations (Observation)"].count++;
      if (rt === "Organization") counts["Organization"].count++;
    }
    return counts;
  }

  function updatePreview() {
    const bundle = buildBundle();
    const json = JSON.stringify(bundle, null, 2);
    el.preview.textContent = json;
    el.previewMeta.innerHTML = `
      <span>${bundle.entry.length} entries</span>
      <span>·</span>
      <span>type=${bundle.type}</span>
      <span>·</span>
      <span>${PROFILE.split("/").pop()}</span>
    `;
    return bundle;
  }

  function exportBundle() {
    const bundle = updatePreview();
    const blob = new Blob([JSON.stringify(bundle, null, 2)], { type: "application/fhir+json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `bundle-drug-stability-pq-${(state.product.name || "pilot").replace(/[^a-z0-9]+/gi, "-").toLowerCase()}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
    toast("Bundle JSON downloaded");
  }

  async function copyBundle() {
    const bundle = updatePreview();
    try {
      await navigator.clipboard.writeText(JSON.stringify(bundle, null, 2));
      toast("JSON copied to clipboard");
    } catch {
      toast("Copy failed — use Export instead");
    }
  }

  // ---------- CTD crosswalk (Option A) ----------
  const CTD_STEP = {
    identity: "3.2.P.1 · 3.2.S.1",
    protocol: "3.2.P.8.1 · 3.2.P.8.2",
    methods: "3.2.P.5.1 · 3.2.P.5.2",
    specimens: "3.2.P.7",
    results: "3.2.P.8.3",
    report: "3.2.P.8.1",
    review: "3.2.P.8"
  };
  const CTD_BY_PATH = {
    "MedicinalProductDefinition.name.productName": "3.2.P.1",
    "MedicinalProductDefinition.combinedPharmaceuticalDoseForm": "3.2.P.1",
    "Ingredient.substance.strength (narrative)": "3.2.P.1",
    "SubstanceDefinition.name": "3.2.S.1.1",
    "PlanDefinition.title": "3.2.P.8.1",
    "PlanDefinition.description": "3.2.P.8.1",
    "PlanDefinition.action + SpecimenDefinition.handling.instruction": "3.2.P.8.1",
    "PlanDefinition.action.timingTiming": "3.2.P.8.1",
    "ActivityDefinition / ObservationDefinition set": "3.2.P.5.2",
    "Extension-container-orientation-pq": "3.2.P.7",
    "Medication batch container / Specimen": "3.2.P.7",
    "SpecimenDefinition.typeTested.handling.instruction (supplement)": "3.2.P.7",
    "DiagnosticReport.identifier": "3.2.P.8.1",
    "DiagnosticReport.status": "3.2.P.8.1",
    "DiagnosticReport.code": "3.2.P.8.1",
    "DiagnosticReport.effectiveDateTime": "3.2.P.8.1",
    "Extension-time-point-description-pq": "3.2.P.8.1",
    "valueCodeableConcept.text": "3.2.P.8.1",
    "Extension-statistical-model-pq": "3.2.P.8.1",
    "DiagnosticReport.conclusion": "3.2.P.8.1",
    // method codes (rendered as .fhir in the methods table)
    "description": "3.2.P.5.1",
    "assay": "3.2.P.5.1",
    "degradation": "3.2.P.5.5",
    "water": "3.2.P.5.1",
    "micro": "3.2.P.5.1",
    "uniformity": "3.2.P.5.1"
  };
  function ctdForPath(path, stepId) {
    if (CTD_BY_PATH[path]) return CTD_BY_PATH[path];
    return (CTD_STEP[stepId] || "").split("·")[0].trim();
  }
  function decorateCTD(stepId) {
    const h2 = el.panel.querySelector(".panel-head h2");
    if (h2 && CTD_STEP[stepId] && !h2.querySelector(".ctd-sec")) {
      const b = document.createElement("span");
      b.className = "ctd-sec";
      b.textContent = "§ " + CTD_STEP[stepId];
      b.title = "CTD section";
      h2.appendChild(b);
    }
    el.panel.querySelectorAll(".fhir").forEach(f => {
      if (f.tagName === "TD" || f.closest(".refline")) return;
      const ctd = ctdForPath(f.textContent.trim(), stepId);
      const line = document.createElement("span");
      line.className = "refline";
      f.parentNode.insertBefore(line, f);
      if (ctd) {
        const c = document.createElement("span");
        c.className = "ctd-chip";
        c.textContent = "§ " + ctd;
        c.title = "CTD section " + ctd;
        line.appendChild(c);
      }
      line.appendChild(f);
    });
  }

  // ---------- View mode + annotation toggle ----------
  let viewMode = "dashboard";
  let annotMode = "both";
  function applyAnnot() {
    document.querySelector(".app").setAttribute("data-annot", annotMode);
    document.querySelectorAll("#annotSwitch button").forEach(b => b.classList.toggle("on", b.dataset.annot === annotMode));
  }
  function setView(v) {
    viewMode = v;
    document.querySelectorAll("#viewSwitch button").forEach(b => b.classList.toggle("on", b.dataset.view === v));
    const layoutEl = document.querySelector(".layout");
    const paperEl = document.getElementById("paperView");
    if (v === "paper") { layoutEl.style.display = "none"; paperEl.style.display = "block"; paperEl.hidden = false; renderPaper(); }
    else { paperEl.style.display = "none"; layoutEl.style.display = ""; }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ---------- Paper / CTD dossier view ----------
  function renderPaper() {
    const paper = document.getElementById("paperView");
    if (!paper) return;
    syncResults(state, true);
    const p = state.product;
    const r = state.report;
    const prod = p.name || "Untitled product";
    const conds = state.protocol.conditions;
    const tps = state.protocol.timePoints;
    const condLabel = (c) => (VOCAB.storageConditions.find(x => x.code === c) || {}).label || c;
    const tpLabel = (t) => { const o = VOCAB.timePoints.find(x => x.code === t); return o ? o.label : (t + " mo"); };
    const methodLabel = (code) => (state.methods.find(m => m.code === code) || {}).label || code;
    const batches = state.batches.filter(b => b.lotNumber.trim());
    const content = [];

    content.push({ toc: "3.2.P.8.1 Stability Summary &amp; Conclusions", html: `
      <h2 class="doc"><span class="doc-num">3.2.P.8.1</span> Stability Summary &amp; Conclusions</h2>
      <table class="doc"><tbody>
        <tr><th>Product</th><td>${escapeHtml(prod)}</td></tr>
        <tr><th>Report identifier</th><td>${escapeHtml(r.identifier || "—")}</td></tr>
        <tr><th>Report type</th><td>${escapeHtml(r.reportType || "—")}</td></tr>
        <tr><th>Status</th><td>${escapeHtml(r.status || "—")}</td></tr>
        <tr><th>Effective (study start)</th><td>${escapeHtml(r.effective || "—")}</td></tr>
      </tbody></table>
      <h3 class="doc">Conclusion</h3>
      <p class="doc">${escapeHtml(r.conclusion || "No conclusion recorded.")}</p>
      <h3 class="doc">Statistical evaluation</h3>
      <p class="doc">${escapeHtml(r.statisticalModel || "Not specified.")}${r.timePointText ? " (" + escapeHtml(r.timePointText) + ")" : ""}</p>
      <p class="doc-src">Source: DiagnosticReport.conclusion · Extension-statistical-model-pq (ICH Q1E)</p>
    ` });

    content.push({ toc: "3.2.P.8.1 Stability Protocol", html: `
      <h2 class="doc"><span class="doc-num">3.2.P.8.1</span> Stability Protocol</h2>
      <p class="doc"><strong>${escapeHtml(state.protocol.title || "Stability protocol")}</strong></p>
      ${state.protocol.description ? `<p class="doc">${escapeHtml(state.protocol.description)}</p>` : ""}
      <h3 class="doc">Test schedule — storage condition × time-point (battery)</h3>
      <table class="doc">
        <thead><tr><th>Storage condition</th>${tps.map(t => `<th>${escapeHtml(tpLabel(t))}</th>`).join("")}</tr></thead>
        <tbody>
          ${conds.map(c => `<tr><td>${escapeHtml(condLabel(c))}</td>${tps.map(t => { const bt = batteryFor(state, c, t); return `<td>${bt === "-" ? "—" : escapeHtml(bt)}</td>`; }).join("")}</tr>`).join("")}
        </tbody>
      </table>
      <p class="doc-src">Source: PlanDefinition.action.timingTiming · ActivityDefinition</p>
    ` });

    batches.forEach(b => {
      const lot = b.lotNumber;
      const perCond = conds.map(c => {
        const tests = [];
        state.results.forEach(x => { if (x.lotNumber === lot && x.condition === c && !tests.includes(x.test)) tests.push(x.test); });
        if (!tests.length) return "";
        return `
          <h3 class="doc">${escapeHtml(condLabel(c))}</h3>
          <table class="doc">
            <thead><tr><th>Test</th>${tps.map(t => `<th>${escapeHtml(tpLabel(t))}</th>`).join("")}</tr></thead>
            <tbody>
              ${tests.map(test => `<tr><td>${escapeHtml(methodLabel(test))}</td>${tps.map(t => {
                const cell = state.results.find(x => x.lotNumber === lot && x.condition === c && x.timePoint === t && x.test === test);
                return `<td>${cell && String(cell.value).trim() !== "" ? escapeHtml(cell.value) : "·"}</td>`;
              }).join("")}</tr>`).join("")}
            </tbody>
          </table>`;
      }).join("");
      content.push({ toc: `3.2.P.8.3 Stability Data — Batch ${escapeHtml(lot)}`, html: `
        <h2 class="doc"><span class="doc-num">3.2.P.8.3</span> Stability Data — Batch ${escapeHtml(lot)}</h2>
        <p class="doc">Manufactured ${escapeHtml(b.manufacturingDate || "—")} · released ${escapeHtml(b.releaseDate || "—")}</p>
        ${perCond || `<p class="doc">No results recorded for this batch.</p>`}
        <p class="doc-src">Source: Observation-test-result-drug-pq (parent → hasMember children)</p>
      ` });
    });

    content.push({ toc: "Supporting information — 3.2.P.1 / 3.2.P.3.1 / 3.2.P.5.1", html: `
      <h2 class="doc">Supporting information</h2>
      <h3 class="doc"><span class="doc-num">3.2.P.1</span> Description &amp; Composition</h3>
      <table class="doc"><tbody>
        <tr><th>Product name</th><td>${escapeHtml(p.name || "—")}</td></tr>
        <tr><th>Dose form</th><td>${escapeHtml(p.doseForm || "—")}</td></tr>
        <tr><th>Strength</th><td>${escapeHtml(p.strength || "—")}</td></tr>
        <tr><th>Active substance (3.2.S.1.1)</th><td>${escapeHtml(p.substanceName || "—")}</td></tr>
      </tbody></table>
      <h3 class="doc"><span class="doc-num">3.2.P.3.1</span> Manufacturers &amp; testing sites</h3>
      <table class="doc">
        <thead><tr><th>Organization</th><th>Role</th></tr></thead>
        <tbody>${state.organizations.filter(o => o.name.trim()).map(o => `<tr><td>${escapeHtml(o.name)}</td><td>${escapeHtml((VOCAB.orgTypes.find(x => x.code === o.type) || {}).display || o.type)}</td></tr>`).join("")}</tbody>
      </table>
      <h3 class="doc"><span class="doc-num">3.2.P.5.1</span> Specification — methods &amp; acceptance criteria</h3>
      <table class="doc">
        <thead><tr><th>Test</th><th>Acceptance criteria</th><th>Unit</th></tr></thead>
        <tbody>${state.methods.filter(m => m.enabled).map(m => `<tr><td>${escapeHtml(m.label)}</td><td>${escapeHtml(m.acceptance || "—")}</td><td>${escapeHtml(m.unit || "")}</td></tr>`).join("")}</tbody>
      </table>
    ` });

    const cover = { html: `
      <h2 class="doc"><span class="doc-num">3.2.P.8</span> Stability</h2>
      <p class="doc"><strong>${escapeHtml(prod)}</strong>${p.strength ? " · " + escapeHtml(p.strength) : ""}${p.doseForm ? " · " + escapeHtml(p.doseForm) : ""}</p>
      <p class="doc">Common Technical Document — Module 3.2.P.8, generated from the structured FHIR stability bundle for subject-matter-expert review.</p>
      <h3 class="doc">Contents</h3>
      ${content.map((pg, i) => `<div class="toc-row"><span>${pg.toc}</span><span>${i + 2}</span></div>`).join("")}
    ` };

    const all = [cover, ...content];
    const total = all.length;
    const sheets = all.map((pg, i) => `
      <section class="sheet">
        <div class="run-head"><span>Module 3.2.P.8 — Stability</span><span>${escapeHtml(prod)}</span></div>
        <div class="sheet-body">${pg.html}</div>
        <div class="run-foot"><span>Confidential — for SME review</span><span>Page ${i + 1} of ${total}</span></div>
      </section>
    `).join("");

    paper.innerHTML = `
      <div class="paper-controls">
        <button class="btn btn-ghost" type="button" id="btnPrint">🖨 Print / Save as PDF</button>
        <span>Paginated CTD dossier view — generated from the current data. Switch back with “▤ Dashboard”.</span>
      </div>
      <div class="paper-pages">${sheets}</div>
    `;
    document.getElementById("btnPrint")?.addEventListener("click", () => window.print());
  }

  function render() {
    renderNav();
    renderPanel();
    renderStatus();
    updatePreview();
    if (viewMode === "paper") renderPaper();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  document.getElementById("btnLoadSample").addEventListener("click", () => {
    state = sampleState();
    currentStep = 0;
    render();
    toast("Stelbat sample loaded");
  });
  document.getElementById("btnClear").addEventListener("click", () => {
    state = emptyState();
    syncResults(state, false);
    currentStep = 0;
    render();
    toast("Form cleared");
  });
  document.getElementById("btnExport").addEventListener("click", exportBundle);
  document.getElementById("btnCopy").addEventListener("click", copyBundle);

  document.getElementById("viewSwitch").addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (b) setView(b.dataset.view);
  });
  document.getElementById("annotSwitch").addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (b) { annotMode = b.dataset.annot; applyAnnot(); }
  });
  applyAnnot();

  render();
})();
