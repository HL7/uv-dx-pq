<!-- PQI TYPE 3 — Build Guide | Target: authoring tool vendors, sponsors -->
<div style="background:#eff6ff; border:1px solid #bfdbfe; border-left:4px solid #2563eb; border-radius:8px; padding:12px 18px; margin-bottom:24px; font-size:.85em; color:#1e40af; display:flex; gap:10px; align-items:flex-start;">
  <span style="flex-shrink:0; font-size:1em;">📋</span>
  <span><strong>Before you start:</strong> you need a <a href="build_type2.html" style="color:#1e40af; font-weight:600;">Type 2 document</a>, the PQI domain resources the narrative discusses, and a mapping from the narrative to those resources.</span>
</div>
<h3 style="font-size:1.35em; font-weight:700; color:#111827; margin-bottom:8px;">What is PQI Type 3?</h3>
<p style="color:#374151; font-size:.94em; line-height:1.7; margin-bottom:16px;">A PQI Type 3 document keeps every section's authored narrative and links it to PQI resources, so a reviewer can move from a sentence straight to the data behind it. A human can still read the document without the links.</p>
<div style="margin-bottom:8px;"><span style="font-size:.75em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#9ca3af;">Adds any PQI domain resource</span></div>
<div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:28px;">
  <span style="background:#eff6ff; border:1px solid #bfdbfe; color:#1d4ed8; font-size:.78em; font-weight:600; padding:4px 12px; border-radius:99px;">📋 PlanDefinition</span>
  <span style="background:#f0fdfa; border:1px solid #99f6e4; color:#0f766e; font-size:.78em; font-weight:600; padding:4px 12px; border-radius:99px;">🎯 ObservationDefinition</span>
  <span style="background:#f0fdf4; border:1px solid #bbf7d0; color:#15803d; font-size:.78em; font-weight:600; padding:4px 12px; border-radius:99px;">📊 Observation</span>
  <span style="background:#f0fdf4; border:1px solid #bbf7d0; color:#15803d; font-size:.78em; font-weight:600; padding:4px 12px; border-radius:99px;">📑 DiagnosticReport</span>
  <span style="background:#fff1f2; border:1px solid #fecdd3; color:#be123c; font-size:.78em; font-weight:600; padding:4px 12px; border-radius:99px;">💊 Medication (batches)</span>
  <span style="background:#fffbeb; border:1px solid #fde68a; color:#b45309; font-size:.78em; font-weight:600; padding:4px 12px; border-radius:99px;">⚗️ Substance</span>
  <span style="background:#faf5ff; border:1px solid #e9d5ff; color:#7e22ce; font-size:.78em; font-weight:600; padding:4px 12px; border-radius:99px;">🧫 Specimen / SpecimenDefinition</span>
  <span style="background:#f8fafc; border:1px solid #e2e8f0; color:#334155; font-size:.78em; font-weight:600; padding:4px 12px; border-radius:99px;">⚙️ DeviceDefinition</span>
  <span style="background:#f8fafc; border:1px solid #e2e8f0; color:#334155; font-size:.78em; font-weight:600; padding:4px 12px; border-radius:99px;">🗒️ ActivityDefinition</span>
</div>
<div style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:8px; padding:18px 20px; margin-bottom:28px;">
  <div style="font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#9ca3af; margin-bottom:12px;">How Type 3 links narrative and data</div>
  <div style="font-size:.8em;">
    <div style="margin-bottom:8px;"><span style="background:#f0fdfa; border:1px solid #99f6e4; color:#0f766e; padding:5px 12px; border-radius:6px; font-weight:600;">section.text</span></div>
    <div style="border-left:2px solid #e5e7eb; margin-left:14px; padding-left:14px; margin-bottom:8px; line-height:2.4;"><span style="color:#6b7280; font-size:.85em; font-style:italic; margin-right:8px;">span id</span><span style="background:#f8fafc; border:1px solid #e2e8f0; color:#334155; padding:5px 12px; border-radius:6px; font-weight:600;">&lt;span id="s3-2-p-3-1-mfr-1"&gt;</span></div>
    <div style="margin-bottom:8px;"><span style="background:#eff6ff; border:1px solid #bfdbfe; color:#1d4ed8; padding:5px 12px; border-radius:6px; font-weight:600;">section.entry</span></div>
    <div style="border-left:2px solid #e5e7eb; margin-left:14px; padding-left:14px; margin-bottom:8px; line-height:2.4;"><span style="color:#6b7280; font-size:.85em; font-style:italic; margin-right:8px;">textLink.htmlid</span><span style="background:#f8fafc; border:1px solid #e2e8f0; color:#334155; padding:5px 12px; border-radius:6px; font-weight:600;">s3-2-p-3-1-mfr-1</span></div>
    <div style="border-left:2px solid #e5e7eb; margin-left:14px; padding-left:14px; margin-bottom:8px; line-height:2.4;"><span style="color:#6b7280; font-size:.85em; font-style:italic; margin-right:8px;">reference / textLink.data</span><span style="background:#faf5ff; border:1px solid #e9d5ff; color:#7e22ce; padding:5px 12px; border-radius:6px; font-weight:600;">Organization/org-dp-mfr-1</span></div>
  </div>
</div>
<hr style="border:none; border-top:1px solid #e5e7eb; margin:28px 0;"/>
<h3 style="font-size:1.35em; font-weight:700; color:#111827; margin-bottom:20px;">Step-by-Step Workflow</h3>
<!-- STEP 1 -->
<div style="display:flex; gap:16px; margin-bottom:20px; align-items:flex-start;">
  <div style="flex-shrink:0; width:36px; height:36px; border-radius:50%; background:#003087; color:#fff; display:flex; align-items:center; justify-content:center; font-size:.85em; font-weight:700; margin-top:2px;">1</div>
  <div style="flex:1; background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden;">
    <div style="padding:14px 20px 10px; border-bottom:1px solid #e5e7eb; background:#f9fafb;"><div style="font-weight:700; color:#111827; font-size:.97em;">Start from the Type 2 document</div></div>
    <div style="padding:14px 20px;">
<p style="font-size:.88em; color:#374151; line-height:1.7; margin-bottom:10px;">Set <code style="font-family:monospace; font-size:.8em; color:#0891b2;">Composition.category</code> to <code style="font-family:monospace; font-size:.8em; color:#0891b2;">type-3</code>.</p>
    </div>
  </div>
</div>
<!-- STEP 2 -->
<div style="display:flex; gap:16px; margin-bottom:20px; align-items:flex-start;">
  <div style="flex-shrink:0; width:36px; height:36px; border-radius:50%; background:#003087; color:#fff; display:flex; align-items:center; justify-content:center; font-size:.85em; font-weight:700; margin-top:2px;">2</div>
  <div style="flex:1; background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden;">
    <div style="padding:14px 20px 10px; border-bottom:1px solid #e5e7eb; background:#f9fafb;"><div style="font-weight:700; color:#111827; font-size:.97em;">Anchor the narrative</div></div>
    <div style="padding:14px 20px;">
<p style="font-size:.88em; color:#374151; line-height:1.7; margin-bottom:14px;">Give each passage that discusses a resource a stable <code style="font-family:monospace; font-size:.8em; color:#0891b2;">id</code>, e.g. <code style="font-family:monospace; font-size:.8em; color:#0891b2;">&lt;span id="s3-2-p-3-1-mfr-1"&gt;Sakura Pharma Ltd, Osaka&lt;/span&gt;</code>.</p>
<div style="background:#fffbeb; border:1px solid #fde68a; border-left:3px solid #d97706; border-radius:6px; padding:10px 14px; margin-bottom:10px; font-size:.82em; color:#78350f; display:flex; gap:10px; align-items:flex-start;">
  <span style="flex-shrink:0;">💡</span>
  <span><strong>Id convention:</strong> <code style="font-family:monospace; font-size:.8em; color:#0891b2;">&lt;section&gt;-&lt;kind&gt;-&lt;n&gt;</code> keeps ids unique within the document and readable in review tools.</span>
</div>
    </div>
  </div>
</div>
<!-- STEP 3 -->
<div style="display:flex; gap:16px; margin-bottom:20px; align-items:flex-start;">
  <div style="flex-shrink:0; width:36px; height:36px; border-radius:50%; background:#003087; color:#fff; display:flex; align-items:center; justify-content:center; font-size:.85em; font-weight:700; margin-top:2px;">3</div>
  <div style="flex:1; background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden;">
    <div style="padding:14px 20px 10px; border-bottom:1px solid #e5e7eb; background:#f9fafb;"><div style="font-weight:700; color:#111827; font-size:.97em;">List the resources each section discusses</div></div>
    <div style="padding:14px 20px;">
<p style="font-size:.88em; color:#374151; line-height:1.7; margin-bottom:14px;">Add the resources a section discusses to that section's <code style="font-family:monospace; font-size:.8em; color:#0891b2;">entry</code>. Resources that no CTD section discusses stay in the Product data section.</p>
<table style="width:100%; border-collapse:collapse; font-size:.84em; margin-bottom:14px;">
  <thead><tr style="background:#003087; color:#fff;"><th style="padding:9px 12px; border:1px solid #d0d0d0; text-align:left; width:28%;">Heading</th><th style="padding:9px 12px; border:1px solid #d0d0d0; text-align:left;">Typical entries</th></tr></thead>
  <tbody>
    <tr><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">3.2.S.1 / 3.2.P.1</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">SubstanceDefinition; MedicinalProductDefinition, ManufacturedItemDefinition, Ingredient</td></tr>
    <tr style="background:#f9fafb;"><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">3.2.S.2.1 / 3.2.P.3.1</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Organization</td></tr>
    <tr><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">3.2.S.2.2 / 3.2.P.3.3</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">PlanDefinition (process), DeviceDefinition, ObservationDefinition (CPP / IPC), DocumentReference (flow diagram)</td></tr>
    <tr style="background:#f9fafb;"><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">3.2.P.3.2</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Medication (batch formula)</td></tr>
    <tr><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">3.2.S.4.1 / 3.2.P.5.1</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">PlanDefinition (specification), ObservationDefinition (tests and acceptance criteria)</td></tr>
    <tr style="background:#f9fafb;"><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">3.2.S.4.2 / 3.2.P.5.2</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">PlanDefinition (analytical procedure)</td></tr>
    <tr><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">3.2.S.4.4 / 3.2.P.5.4</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">DiagnosticReport, Observation, Medication / Substance (batches)</td></tr>
    <tr style="background:#f9fafb;"><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">3.2.S.5 / 3.2.P.6</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Substance (reference standards)</td></tr>
    <tr><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">3.2.S.6 / 3.2.P.7</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">PackagedProductDefinition</td></tr>
    <tr style="background:#f9fafb;"><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">3.2.S.7 / 3.2.P.8</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">PlanDefinition (stability protocol), DiagnosticReport, Observation, Specimen</td></tr>
  </tbody>
</table>
    </div>
  </div>
</div>
<!-- STEP 4 -->
<div style="display:flex; gap:16px; margin-bottom:20px; align-items:flex-start;">
  <div style="flex-shrink:0; width:36px; height:36px; border-radius:50%; background:#003087; color:#fff; display:flex; align-items:center; justify-content:center; font-size:.85em; font-weight:700; margin-top:2px;">4</div>
  <div style="flex:1; background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden;">
    <div style="padding:14px 20px 10px; border-bottom:1px solid #e5e7eb; background:#f9fafb;"><div style="font-weight:700; color:#111827; font-size:.97em;">Link each entry with textLink</div></div>
    <div style="padding:14px 20px;">
<p style="font-size:.88em; color:#374151; line-height:1.7; margin-bottom:14px;">Add the core <a href="https://hl7.org/fhir/extensions/StructureDefinition-textLink.html" style="color:#2563eb; font-weight:600;">textLink</a> extension to each <code style="font-family:monospace; font-size:.8em; color:#0891b2;">section.entry</code>: <code style="font-family:monospace; font-size:.8em; color:#0891b2;">htmlid</code> holds the <code style="font-family:monospace; font-size:.8em; color:#0891b2;">id</code> of each span that discusses the resource, and <code style="font-family:monospace; font-size:.8em; color:#0891b2;">data</code> repeats the entry's reference. A more specific path can point at one element, e.g. an acceptance criterion inside an <code style="font-family:monospace; font-size:.8em; color:#0891b2;">ObservationDefinition</code>. Every entry in a section with authored narrative carries a link, except image DocumentReferences.</p>
<pre style="background:#0f172a; color:#e2e8f0; border-radius:8px; padding:14px 16px; font-size:.76em; line-height:1.6; overflow-x:auto; margin-bottom:14px;"><code>{
  "title": "Manufacturer(s)",
  "code": { "coding": [{ "system": "http://hl7.org/fhir/uv/pharm-quality/CodeSystem/ctd-section-pq", "code": "3.2.P.3.1" }] },
  "text": {
    "status": "additional",
    "div": "&lt;div xmlns=\"http://www.w3.org/1999/xhtml\"&gt;&lt;p&gt;The drug product is manufactured by &lt;span id=\"s3-2-p-3-1-mfr-1\"&gt;Sakura Pharma Ltd, Osaka&lt;/span&gt;.&lt;/p&gt;&lt;/div&gt;"
  },
  "entry": [{
    "extension": [{
      "url": "http://hl7.org/fhir/StructureDefinition/textLink",
      "extension": [
        { "url": "htmlid", "valueString": "s3-2-p-3-1-mfr-1" },
        { "url": "data", "valueUri": "Organization/org-dp-mfr-1" }
      ]
    }],
    "reference": "Organization/org-dp-mfr-1"
  }]
}</code></pre>
<div style="background:#fffbeb; border:1px solid #fde68a; border-left:3px solid #d97706; border-radius:6px; padding:10px 14px; margin-bottom:10px; font-size:.82em; color:#78350f; display:flex; gap:10px; align-items:flex-start;">
  <span style="flex-shrink:0;">💡</span>
  <span><strong>Extension status:</strong> the core <code style="font-family:monospace; font-size:.8em; color:#0891b2;">textLink</code> extension (FHIR Extensions Pack 5.3.0) is currently defined for <code style="font-family:monospace; font-size:.8em; color:#0891b2;">Narrative</code> only, at most once. FMG has confirmed it will be updated to allow this use (0..*). Until that release, validators may report the extension context on <code style="font-family:monospace; font-size:.8em; color:#0891b2;">section.entry</code>.</span>
</div>
    </div>
  </div>
</div>
<!-- STEP 5 -->
<div style="display:flex; gap:16px; margin-bottom:28px; align-items:flex-start;">
  <div style="flex-shrink:0; width:36px; height:36px; border-radius:50%; background:#003087; color:#fff; display:flex; align-items:center; justify-content:center; font-size:.85em; font-weight:700; margin-top:2px;">5</div>
  <div style="flex:1; background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden;">
    <div style="padding:14px 20px 10px; border-bottom:1px solid #e5e7eb; background:#f9fafb;"><div style="font-weight:700; color:#111827; font-size:.97em;">Add the resources and validate</div></div>
    <div style="padding:14px 20px;">
<p style="font-size:.88em; color:#374151; line-height:1.7; margin-bottom:14px;">Add the resources to the Bundle; each conforms to its PQI profile.</p>
<div style="background:#dcfce7; border:1px solid #bbf7d0; border-left:3px solid #16a34a; border-radius:6px; padding:10px 14px; margin-bottom:10px; font-size:.82em; color:#14532d; display:flex; gap:10px; align-items:flex-start;">
  <span style="flex-shrink:0;">✅</span>
  <span><strong>Validate:</strong> run the Bundle against <a href="StructureDefinition-Bundle-document-type3-pq.html" style="color:#15803d; font-weight:600;">BundleDocumentType3Pq</a>. Validation apps also check that every <code style="font-family:monospace; font-size:.8em; color:#0891b2;">textLink.htmlid</code> exists in the section narrative.</span>
</div>
    </div>
  </div>
</div>
<hr style="border:none; border-top:1px solid #e5e7eb; margin:28px 0;"/>
<h3 style="font-size:1.35em; font-weight:700; color:#111827; margin-bottom:12px;">Checklist</h3>
<div style="background:#fff; border:1px solid #e5e7eb; border-radius:8px; padding:14px 20px; margin-bottom:16px;">
  <div style="font-size:.88em; color:#374151; line-height:1.6; padding:5px 0; border-bottom:1px dashed #f1f5f9;"><span style="color:#16a34a; font-weight:700; margin-right:8px;">☐</span>Every section keeps its authored narrative</div>
  <div style="font-size:.88em; color:#374151; line-height:1.6; padding:5px 0; border-bottom:1px dashed #f1f5f9;"><span style="color:#16a34a; font-weight:700; margin-right:8px;">☐</span>Every discussed resource is an entry of the section that discusses it</div>
  <div style="font-size:.88em; color:#374151; line-height:1.6; padding:5px 0; border-bottom:1px dashed #f1f5f9;"><span style="color:#16a34a; font-weight:700; margin-right:8px;">☐</span>Every such entry has a <code style="font-family:monospace; font-size:.8em; color:#0891b2;">textLink</code> whose <code style="font-family:monospace; font-size:.8em; color:#0891b2;">htmlid</code> values exist in the section narrative</div>
  <div style="font-size:.88em; color:#374151; line-height:1.6; padding:5px 0; border-bottom:1px dashed #f1f5f9;"><span style="color:#16a34a; font-weight:700; margin-right:8px;">☐</span>Every resource conforms to its PQI profile</div>
</div>
<p style="font-size:.88em; color:#374151; line-height:1.7; margin-bottom:10px;">Profiles: <a href="StructureDefinition-Bundle-document-type3-pq.html" style="color:#2563eb; font-weight:600;">BundleDocumentType3Pq</a>, <a href="StructureDefinition-Composition-type3-pq.html" style="color:#2563eb; font-weight:600;">CompositionType3Pq</a>. Invariants: the Type 2 set (except <code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-t2-1</code>), plus <code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-t3-1</code>.</p>
<hr style="border:none; border-top:1px solid #e5e7eb; margin:28px 0;"/>
<h3 style="font-size:1.1em; font-weight:700; color:#111827; margin-bottom:12px;">What's next?</h3>
<div style="display:grid; grid-template-columns:1fr 1fr; gap:14px;">
  <a href="build_type4.html" style="text-decoration:none; background:#fff; border:1px solid #bfdbfe; border-left:4px solid #2563eb; border-radius:8px; padding:16px 20px; display:block;">
    <div style="font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#2563eb; margin-bottom:4px;">Next →</div>
    <div style="font-weight:700; color:#111827; margin-bottom:4px;">Type 4 Data-first document</div>
    <div style="font-size:.82em; color:#6b7280;">Let sections that are fully carried by resources drop their authored narrative.</div>
  </a>
  <a href="build.html" style="text-decoration:none; background:#f9fafb; border:1px solid #e5e7eb; border-radius:8px; padding:16px 20px; display:block;">
    <div style="font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#6b7280; margin-bottom:4px;">Reference</div>
    <div style="font-weight:700; color:#111827; margin-bottom:4px;">Build Overview</div>
    <div style="font-size:.82em; color:#6b7280;">Return to the overview of all four PQI types and how they relate.</div>
  </a>
</div>
