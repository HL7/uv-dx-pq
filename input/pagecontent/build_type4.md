<!-- PQI TYPE 4 — Build Guide | Target: sponsors with LIMS / MES / QMS data -->
<div style="background:#eff6ff; border:1px solid #bfdbfe; border-left:4px solid #2563eb; border-radius:8px; padding:12px 18px; margin-bottom:24px; font-size:.85em; color:#1e40af; display:flex; gap:10px; align-items:flex-start;">
  <span style="flex-shrink:0; font-size:1em;">📋</span>
  <span><strong>Before you start:</strong> you need a <a href="build_type3.html" style="color:#1e40af; font-weight:600;">Type 3 document</a> and source systems (LIMS, MES, QMS, RIM) that can generate PQI resources.</span>
</div>
<h3 style="font-size:1.35em; font-weight:700; color:#111827; margin-bottom:8px;">What is PQI Type 4?</h3>
<p style="color:#374151; font-size:.94em; line-height:1.7; margin-bottom:16px;">In a PQI Type 4 document the resources become the record. Sections whose content is fully expressed by resources drop their authored narrative and keep only <code style="font-family:monospace; font-size:.8em; color:#0891b2;">section.entry</code>. Sections that carry argument or justification keep linked narrative, exactly as in Type 3.</p>
<div style="display:grid; grid-template-columns:repeat(3,1fr); gap:12px; margin-bottom:14px;">
  <div style="background:#fff; border:1px solid #e5e7eb; border-top:3px solid #16a34a; border-radius:8px; padding:16px 18px;">
    <div style="font-size:1.3em; margin-bottom:6px;">🧬</div>
    <div style="font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#9ca3af; margin-bottom:4px;">Replaced</div>
    <div style="font-weight:700; color:#111827; margin-bottom:6px; font-size:.95em;">Data-first sections</div>
    <div style="font-size:.84em; color:#6b7280; line-height:1.6;">Manufacturers, specifications, batch analyses, container closure, stability data… carried by resources alone.</div>
  </div>
  <div style="background:#fff; border:1px solid #e5e7eb; border-top:3px solid #7c3aed; border-radius:8px; padding:16px 18px;">
    <div style="font-size:1.3em; margin-bottom:6px;">✍️</div>
    <div style="font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#9ca3af; margin-bottom:4px;">Kept</div>
    <div style="font-weight:700; color:#111827; margin-bottom:6px; font-size:.95em;">Narrative sections</div>
    <div style="font-size:.84em; color:#6b7280; line-height:1.6;">Pharmaceutical development, justifications, stability conclusions: authored narrative with textLink.</div>
  </div>
  <div style="background:#fff; border:1px solid #e5e7eb; border-top:3px solid #d97706; border-radius:8px; padding:16px 18px;">
    <div style="font-size:1.3em; margin-bottom:6px;">🔀</div>
    <div style="font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#9ca3af; margin-bottom:4px;">Mixed</div>
    <div style="font-weight:700; color:#111827; margin-bottom:6px; font-size:.95em;">Both in one section</div>
    <div style="font-size:.84em; color:#6b7280; line-height:1.6;">E.g. 3.2.P.5.1: the specification table becomes resources, the justification stays as text.</div>
  </div>
</div>
<h3 style="font-size:1.35em; font-weight:700; color:#111827; margin-bottom:12px;">Replaceable headings</h3>
<p style="font-size:.88em; color:#374151; line-height:1.7; margin-bottom:14px;">Only the headings in <a href="ValueSet-vs-ctd-replaceable-pq.html" style="color:#2563eb; font-weight:600;">vs-ctd-replaceable-pq</a> may omit authored narrative. Their entries must resolve to these resource types (image DocumentReferences are always allowed):</p>
<table style="width:100%; border-collapse:collapse; font-size:.84em; margin-bottom:14px;">
  <thead><tr style="background:#003087; color:#fff;"><th style="padding:9px 12px; border:1px solid #d0d0d0; text-align:left; width:17%;">Heading</th><th style="padding:9px 12px; border:1px solid #d0d0d0; text-align:left; width:20%;">Content</th><th style="padding:9px 12px; border:1px solid #d0d0d0; text-align:left;">Entries resolve to</th><th style="padding:9px 12px; border:1px solid #d0d0d0; text-align:left; width:15%;">Domain reused</th><th style="padding:9px 12px; border:1px solid #d0d0d0; text-align:left; width:12%;">Invariant</th></tr></thead>
  <tbody>
    <tr><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">3.2.S.2.1 / 3.2.P.3.1</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Manufacturer(s)</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Organization</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><a href="organizations.html" style="color:#2563eb; font-weight:600;">Organizations</a></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-t4-org</code></td></tr>
    <tr style="background:#f9fafb;"><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">3.2.S.1.1–3.2.S.1.3</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Nomenclature, structure, general properties</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">SubstanceDefinition</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><a href="identification.html" style="color:#2563eb; font-weight:600;">Identification</a></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-t4-gen</code></td></tr>
    <tr><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">3.2.P.1</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Description and composition</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">MedicinalProductDefinition, ManufacturedItemDefinition, AdministrableProductDefinition, Ingredient</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><a href="composition.html" style="color:#2563eb; font-weight:600;">Composition</a></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-t4-comp</code></td></tr>
    <tr style="background:#f9fafb;"><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">3.2.P.3.2</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Batch formula</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Medication</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><a href="batch_formula.html" style="color:#2563eb; font-weight:600;">Batch Formula</a></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-t4-bf</code></td></tr>
    <tr><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">3.2.S.4.1 / 3.2.P.5.1</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Specification (table part)</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">PlanDefinition, ObservationDefinition</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><a href="drug_specification.html" style="color:#2563eb; font-weight:600;">Drug Specification</a></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-t4-spec</code></td></tr>
    <tr style="background:#f9fafb;"><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">3.2.S.4.4 / 3.2.P.5.4</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Batch analyses</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">DiagnosticReport, Observation, Medication, Substance</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><a href="batch_anal.html" style="color:#2563eb; font-weight:600;">Batch Analysis</a></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-t4-ba</code></td></tr>
    <tr><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">3.2.S.5 / 3.2.P.6</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Reference standards</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Substance</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><a href="identification.html" style="color:#2563eb; font-weight:600;">Identification</a></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-t4-rs</code></td></tr>
    <tr style="background:#f9fafb;"><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">3.2.S.6 / 3.2.P.7</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Container closure system</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">PackagedProductDefinition</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><a href="container.html" style="color:#2563eb; font-weight:600;">Container Closure System</a></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-t4-ccs</code></td></tr>
    <tr><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">3.2.S.7.3 / 3.2.P.8.3</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Stability data</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">DiagnosticReport, Observation, Specimen</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><a href="stability.html" style="color:#2563eb; font-weight:600;">Stability Study</a></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-t4-stab</code></td></tr>
  </tbody>
</table>
<div style="background:#faf5ff; border:1px solid #e9d5ff; border-left:4px solid #7c3aed; border-radius:8px; padding:14px 18px; margin-bottom:24px;">
  <div style="font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#6d28d9; margin-bottom:6px;">These stay narrative</div>
  <div style="font-size:.88em; color:#4c1d95; line-height:1.7; margin:0;">3.2.P.2 Pharmaceutical development, 3.2.S.4.5 / 3.2.P.5.6 Justification of specification, 3.2.S.7.1 / 3.2.P.8.1 Stability summary and conclusions, and the discussion parts of 3.2.S.2.2, 3.2.P.3.3 and 3.2.P.3.5 follow the Type 3 rules.</div>
</div>
<hr style="border:none; border-top:1px solid #e5e7eb; margin:28px 0;"/>
<h3 style="font-size:1.35em; font-weight:700; color:#111827; margin-bottom:20px;">Step-by-Step Workflow</h3>
<!-- STEP 1 -->
<div style="display:flex; gap:16px; margin-bottom:20px; align-items:flex-start;">
  <div style="flex-shrink:0; width:36px; height:36px; border-radius:50%; background:#003087; color:#fff; display:flex; align-items:center; justify-content:center; font-size:.85em; font-weight:700; margin-top:2px;">1</div>
  <div style="flex:1; background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden;">
    <div style="padding:14px 20px 10px; border-bottom:1px solid #e5e7eb; background:#f9fafb;"><div style="font-weight:700; color:#111827; font-size:.97em;">Start from the Type 3 document</div></div>
    <div style="padding:14px 20px;">
<p style="font-size:.88em; color:#374151; line-height:1.7; margin-bottom:10px;">Set <code style="font-family:monospace; font-size:.8em; color:#0891b2;">Composition.category</code> to <code style="font-family:monospace; font-size:.8em; color:#0891b2;">type-4</code>.</p>
    </div>
  </div>
</div>
<!-- STEP 2 -->
<div style="display:flex; gap:16px; margin-bottom:20px; align-items:flex-start;">
  <div style="flex-shrink:0; width:36px; height:36px; border-radius:50%; background:#003087; color:#fff; display:flex; align-items:center; justify-content:center; font-size:.85em; font-weight:700; margin-top:2px;">2</div>
  <div style="flex:1; background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden;">
    <div style="padding:14px 20px 10px; border-bottom:1px solid #e5e7eb; background:#f9fafb;"><div style="font-weight:700; color:#111827; font-size:.97em;">Generate the resources from source systems</div></div>
    <div style="padding:14px 20px;">
<p style="font-size:.88em; color:#374151; line-height:1.7; margin-bottom:10px;">Generate the resources for each replaceable heading, conforming to the PQI profiles used by the matching domain Bundle.</p>
    </div>
  </div>
</div>
<!-- STEP 3 -->
<div style="display:flex; gap:16px; margin-bottom:20px; align-items:flex-start;">
  <div style="flex-shrink:0; width:36px; height:36px; border-radius:50%; background:#003087; color:#fff; display:flex; align-items:center; justify-content:center; font-size:.85em; font-weight:700; margin-top:2px;">3</div>
  <div style="flex:1; background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden;">
    <div style="padding:14px 20px 10px; border-bottom:1px solid #e5e7eb; background:#f9fafb;"><div style="font-weight:700; color:#111827; font-size:.97em;">Replace the narrative of replaceable sections</div></div>
    <div style="padding:14px 20px;">
<p style="font-size:.88em; color:#374151; line-height:1.7; margin-bottom:14px;">In each replaced section, list the resources in <code style="font-family:monospace; font-size:.8em; color:#0891b2;">entry</code> and either omit <code style="font-family:monospace; font-size:.8em; color:#0891b2;">text</code> or replace it with a <strong>generated</strong> narrative (<code style="font-family:monospace; font-size:.8em; color:#0891b2;">status = generated</code>).</p>
<div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:14px;">
  <div style="border:1px solid #e5e7eb; border-radius:8px; overflow:hidden;">
    <div style="padding:7px 12px; background:#f9fafb; border-bottom:1px solid #e5e7eb;"><span style="font-size:.7em; font-weight:700; text-transform:uppercase; color:#374151;">Type 1 / 3: authored</span></div>
    <div style="padding:10px 12px; font-size:.8em; color:#374151; line-height:1.8;"><strong>3.2.P.3.1 Manufacturer(s)</strong><br/>The drug product is manufactured by Sakura Pharma Ltd, Osaka, and packaged by …</div>
  </div>
  <div style="border:1px solid #bbf7d0; border-radius:8px; overflow:hidden;">
    <div style="padding:7px 12px; background:#f0fdf4; border-bottom:1px solid #bbf7d0;"><span style="font-size:.7em; font-weight:700; text-transform:uppercase; color:#15803d;">✓ Type 4: data-first</span></div>
    <div style="padding:10px 12px; font-size:.76em; font-family:ui-monospace,'SF Mono',monospace; color:#374151; line-height:1.9;"><span style="color:#0891b2;">&lt;section code="3.2.P.3.1"&gt;</span><br/>&nbsp;&nbsp;<span style="color:#9ca3af;">text: absent or generated</span><br/>&nbsp;&nbsp;<span style="color:#16a34a;">entry → Organization/mfr-osaka</span><br/>&nbsp;&nbsp;<span style="color:#16a34a;">entry → Organization/packager</span><br/><span style="color:#0891b2;">&lt;/section&gt;</span></div>
  </div>
</div>
<div style="background:#fffbeb; border:1px solid #fde68a; border-left:3px solid #d97706; border-radius:6px; padding:10px 14px; margin-bottom:10px; font-size:.82em; color:#78350f; display:flex; gap:10px; align-items:flex-start;">
  <span style="flex-shrink:0;">💡</span>
  <span><strong>Generated narrative:</strong> producers SHOULD add it, so that a generic FHIR viewer can still render the document. Receivers SHALL treat the resources, not the generated narrative, as authoritative.</span>
</div>
    </div>
  </div>
</div>
<!-- STEP 4 -->
<div style="display:flex; gap:16px; margin-bottom:20px; align-items:flex-start;">
  <div style="flex-shrink:0; width:36px; height:36px; border-radius:50%; background:#003087; color:#fff; display:flex; align-items:center; justify-content:center; font-size:.85em; font-weight:700; margin-top:2px;">4</div>
  <div style="flex:1; background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden;">
    <div style="padding:14px 20px 10px; border-bottom:1px solid #e5e7eb; background:#f9fafb;"><div style="font-weight:700; color:#111827; font-size:.97em;">Handle mixed sections</div></div>
    <div style="padding:14px 20px;">
<p style="font-size:.88em; color:#374151; line-height:1.7; margin-bottom:10px;">A section can keep some narrative: in 3.2.P.5.1, the specification table becomes <code style="font-family:monospace; font-size:.8em; color:#0891b2;">PlanDefinition</code> + <code style="font-family:monospace; font-size:.8em; color:#0891b2;">ObservationDefinition</code> while the justification paragraph stays as narrative with <code style="font-family:monospace; font-size:.8em; color:#0891b2;">textLink</code>.</p>
    </div>
  </div>
</div>
<!-- STEP 5 -->
<div style="display:flex; gap:16px; margin-bottom:28px; align-items:flex-start;">
  <div style="flex-shrink:0; width:36px; height:36px; border-radius:50%; background:#003087; color:#fff; display:flex; align-items:center; justify-content:center; font-size:.85em; font-weight:700; margin-top:2px;">5</div>
  <div style="flex:1; background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden;">
    <div style="padding:14px 20px 10px; border-bottom:1px solid #e5e7eb; background:#f9fafb;"><div style="font-weight:700; color:#111827; font-size:.97em;">Keep the other sections and validate</div></div>
    <div style="padding:14px 20px;">
<p style="font-size:.88em; color:#374151; line-height:1.7; margin-bottom:14px;">Every other section stays as in Type 3.</p>
<div style="background:#dcfce7; border:1px solid #bbf7d0; border-left:3px solid #16a34a; border-radius:6px; padding:10px 14px; margin-bottom:10px; font-size:.82em; color:#14532d; display:flex; gap:10px; align-items:flex-start;">
  <span style="flex-shrink:0;">✅</span>
  <span><strong>Validate:</strong> run the Bundle against <a href="StructureDefinition-Bundle-document-type4-pq.html" style="color:#15803d; font-weight:600;">BundleDocumentType4Pq</a>.</span>
</div>
    </div>
  </div>
</div>
<hr style="border:none; border-top:1px solid #e5e7eb; margin:28px 0;"/>
<h3 style="font-size:1.35em; font-weight:700; color:#111827; margin-bottom:12px;">Side by side: 3.2.P.3.1 Manufacturer(s)</h3>
<table style="width:100%; border-collapse:collapse; font-size:.84em; margin-bottom:24px;">
  <thead><tr style="background:#003087; color:#fff;"><th style="padding:9px 12px; border:1px solid #d0d0d0; text-align:left; width:10%;">Type</th><th style="padding:9px 12px; border:1px solid #d0d0d0; text-align:left;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">text</code></th><th style="padding:9px 12px; border:1px solid #d0d0d0; text-align:left;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">entry</code></th></tr></thead>
  <tbody>
    <tr><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><strong>1</strong></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">"The drug product is manufactured by Sakura Pharma Ltd, Osaka…"</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">none</td></tr>
    <tr style="background:#f9fafb;"><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><strong>3</strong></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Same text, with <code style="font-family:monospace; font-size:.8em; color:#0891b2;">&lt;span id="s3-2-p-3-1-mfr-1"&gt;</code></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">Organization</code>, with <code style="font-family:monospace; font-size:.8em; color:#0891b2;">textLink</code> (<code style="font-family:monospace; font-size:.8em; color:#0891b2;">htmlid</code> = <code style="font-family:monospace; font-size:.8em; color:#0891b2;">s3-2-p-3-1-mfr-1</code>)</td></tr>
    <tr><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><strong>4</strong></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Absent, or generated from the Organizations</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">Organization</code> (one per site)</td></tr>
  </tbody>
</table>
<div style="background:#fffbeb; border:1px solid #fde68a; border-left:3px solid #d97706; border-radius:6px; padding:10px 14px; margin-bottom:10px; font-size:.82em; color:#78350f; display:flex; gap:10px; align-items:flex-start;">
  <span style="flex-shrink:0;">💡</span>
  <span><strong>Example:</strong> <a href="Bundle-bundle-document-collection-pq-sakura-bloom-type4.html" style="color:#92400e; font-weight:600;">Sakura Bloom Type 4 collection</a> — 3.2.P.3, 3.2.P.7 and 3.2.R (US) from the ICH Sakura Bloom mock-up. 3.2.P.7 is carried by PackagedProductDefinition resources with generated narrative. All example data is synthetic, drawn from the ICH Sakura Bloom mock-up, the FDA example Quality Overall Summaries and the HL7 FHIR PQI team’s example data; anything none of these provide is marked as synthetic where it appears.</span>
</div>
<h3 style="font-size:1.35em; font-weight:700; color:#111827; margin-bottom:12px;">Checklist</h3>
<div style="background:#fff; border:1px solid #e5e7eb; border-radius:8px; padding:14px 20px; margin-bottom:16px;">
  <div style="font-size:.88em; color:#374151; line-height:1.6; padding:5px 0; border-bottom:1px dashed #f1f5f9;"><span style="color:#16a34a; font-weight:700; margin-right:8px;">☐</span>Only replaceable headings omit authored narrative</div>
  <div style="font-size:.88em; color:#374151; line-height:1.6; padding:5px 0; border-bottom:1px dashed #f1f5f9;"><span style="color:#16a34a; font-weight:700; margin-right:8px;">☐</span>Every replaced section has entries of the allowed types</div>
  <div style="font-size:.88em; color:#374151; line-height:1.6; padding:5px 0; border-bottom:1px dashed #f1f5f9;"><span style="color:#16a34a; font-weight:700; margin-right:8px;">☐</span>Generated narrative, where present, has <code style="font-family:monospace; font-size:.8em; color:#0891b2;">status = generated</code></div>
  <div style="font-size:.88em; color:#374151; line-height:1.6; padding:5px 0; border-bottom:1px dashed #f1f5f9;"><span style="color:#16a34a; font-weight:700; margin-right:8px;">☐</span>Sections with argument or justification keep linked narrative</div>
</div>
<p style="font-size:.88em; color:#374151; line-height:1.7; margin-bottom:10px;">Profiles: <a href="StructureDefinition-Bundle-document-type4-pq.html" style="color:#2563eb; font-weight:600;">BundleDocumentType4Pq</a>, <a href="StructureDefinition-Composition-type4-pq.html" style="color:#2563eb; font-weight:600;">CompositionType4Pq</a>. Invariants: the Type 3 set (narrative required only where it is not replaced), plus <code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-t4-1</code> and the per-heading invariants above.</p>
<hr style="border:none; border-top:1px solid #e5e7eb; margin:28px 0;"/>
<h3 style="font-size:1.1em; font-weight:700; color:#111827; margin-bottom:12px;">What's next?</h3>
<div style="display:grid; grid-template-columns:1fr 1fr; gap:14px;">
  <a href="build_validate.html" style="text-decoration:none; background:#fff; border:1px solid #bfdbfe; border-left:4px solid #2563eb; border-radius:8px; padding:16px 20px; display:block;">
    <div style="font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#2563eb; margin-bottom:4px;">Next →</div>
    <div style="font-weight:700; color:#111827; margin-bottom:4px;">Validate and QA</div>
    <div style="font-size:.82em; color:#6b7280;">Validator commands, invariants, and the quality checks for validation apps.</div>
  </a>
  <a href="build.html" style="text-decoration:none; background:#f9fafb; border:1px solid #e5e7eb; border-radius:8px; padding:16px 20px; display:block;">
    <div style="font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#6b7280; margin-bottom:4px;">Reference</div>
    <div style="font-weight:700; color:#111827; margin-bottom:4px;">Build Overview</div>
    <div style="font-size:.82em; color:#6b7280;">Return to the overview of all four PQI types and how they relate.</div>
  </a>
</div>
