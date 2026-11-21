<!-- PQI TYPE 1 — Build Guide | Target: business/regulatory users -->
<!-- PRE-REQUISITES -->
<div id="prerequisites" style="margin-bottom:32px;">
<h3 style="font-size:1.35em; font-weight:700; color:#111827; margin-bottom:6px;">Before You Start</h3>
<p style="color:#6b7280; font-size:.92em; margin-bottom:20px;">Have these three things ready before building a PQI document.</p>
<div style="display:grid; grid-template-columns:repeat(3,1fr); gap:12px; margin-bottom:8px;">
  <div style="background:#fff; border:1px solid #e5e7eb; border-top:3px solid #2563eb; border-radius:8px; padding:16px 18px;">
    <div style="font-size:1.3em; margin-bottom:6px;">📖</div>
    <div style="font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#9ca3af; margin-bottom:4px;">Step A</div>
    <div style="font-weight:700; color:#111827; margin-bottom:6px; font-size:.95em;">Read the Build overview</div>
    <div style="font-size:.84em; color:#6b7280; line-height:1.6;">Understand the four PQI types, <a href="build.html#document-granularity" style="color:#2563eb; font-weight:600;">document granularity</a> and coded section headings.</div>
  </div>
  <div style="background:#fff; border:1px solid #e5e7eb; border-top:3px solid #0891b2; border-radius:8px; padding:16px 18px;">
    <div style="font-size:1.3em; margin-bottom:6px;">🗂️</div>
    <div style="font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#9ca3af; margin-bottom:4px;">Step B</div>
    <div style="font-weight:700; color:#111827; margin-bottom:6px; font-size:.95em;">Get the template</div>
    <div style="font-size:.84em; color:#6b7280; line-height:1.6;">The ICH M4Q(R1) headings, or a regulator's template built on them (e.g. Health Canada QOS-CE, QOS-B, CPID-CE, CPID-B).</div>
  </div>
  <div style="background:#fff; border:1px solid #e5e7eb; border-top:3px solid #7c3aed; border-radius:8px; padding:16px 18px;">
    <div style="font-size:1.3em; margin-bottom:6px;">🛠️</div>
    <div style="font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#9ca3af; margin-bottom:4px;">Step C</div>
    <div style="font-weight:700; color:#111827; margin-bottom:6px; font-size:.95em;">Get a converter</div>
    <div style="font-size:.84em; color:#6b7280; line-height:1.6;">A structured authoring tool or converter from Word to the FHIR XHTML narrative subset.</div>
  </div>
</div>
</div>
<hr style="border:none; border-top:1px solid #e5e7eb; margin:28px 0;"/>
<!-- WHAT IS TYPE 1 -->
<h3 style="font-size:1.35em; font-weight:700; color:#111827; margin-bottom:8px;">What is PQI Type 1?</h3>
<p style="color:#374151; font-size:.94em; line-height:1.7; margin-bottom:16px;">A PQI Type 1 document is the digital equivalent of a Module 2.3 Quality Overall Summary, or of one level-3 Module 3.2 heading, converted 1:1 into a FHIR document. It keeps the ICH M4Q(R1) headings, the full narrative, tables and images, so the document is machine-readable while remaining human-readable. It is the easiest path to a structured document.</p>
<div style="margin-bottom:8px;"><span style="font-size:.75em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#9ca3af;">You will create these FHIR resources</span></div>
<div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:28px;">
  <span style="background:#eff6ff; border:1px solid #bfdbfe; color:#1d4ed8; font-size:.78em; font-weight:600; padding:4px 12px; border-radius:99px;">📦 Bundle</span>
  <span style="background:#f0fdfa; border:1px solid #99f6e4; color:#0f766e; font-size:.78em; font-weight:600; padding:4px 12px; border-radius:99px;">📄 Composition</span>
  <span style="background:#faf5ff; border:1px solid #e9d5ff; color:#7e22ce; font-size:.78em; font-weight:600; padding:4px 12px; border-radius:99px;">🖼️ Binary (images)</span>
  <span style="background:#fffbeb; border:1px solid #fde68a; color:#b45309; font-size:.78em; font-weight:600; padding:4px 12px; border-radius:99px;">🏷️ DocumentReference (figures)</span>
</div>
<!-- RESOURCE CHAIN VISUAL -->
<div style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:8px; padding:18px 20px; margin-bottom:28px;">
  <div style="font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#9ca3af; margin-bottom:12px;">How the Type 1 resources connect</div>
  <div style="font-size:.8em;">
    <div style="margin-bottom:8px;"><span style="background:#eff6ff; border:1px solid #bfdbfe; color:#1d4ed8; padding:5px 12px; border-radius:6px; font-weight:600;">Bundle (document)</span></div>
    <div style="border-left:2px solid #e5e7eb; margin-left:14px; padding-left:14px; margin-bottom:8px; line-height:2.4;"><span style="color:#6b7280; font-size:.85em; font-style:italic; margin-right:8px;">contains</span><span style="background:#f0fdfa; border:1px solid #99f6e4; color:#0f766e; padding:5px 12px; border-radius:6px; font-weight:600;">Composition</span> <span style="background:#faf5ff; border:1px solid #e9d5ff; color:#7e22ce; padding:5px 12px; border-radius:6px; font-weight:600;">Binary</span> <span style="background:#fffbeb; border:1px solid #fde68a; color:#b45309; padding:5px 12px; border-radius:6px; font-weight:600;">DocumentReference</span></div>
    <div style="border-left:2px solid #e5e7eb; margin-left:38px; padding-left:14px; margin-bottom:8px; line-height:2.4;"><span style="color:#6b7280; font-size:.85em; font-style:italic; margin-right:8px;">section.entry references</span><span style="background:#fffbeb; border:1px solid #fde68a; color:#b45309; padding:5px 12px; border-radius:6px; font-weight:600;">DocumentReference</span></div>
    <div style="border-left:2px solid #e5e7eb; margin-left:62px; padding-left:14px; margin-bottom:8px; line-height:2.4;"><span style="color:#6b7280; font-size:.85em; font-style:italic; margin-right:8px;">attachment points at</span><span style="background:#faf5ff; border:1px solid #e9d5ff; color:#7e22ce; padding:5px 12px; border-radius:6px; font-weight:600;">Binary</span></div>
  </div>
</div>
<hr style="border:none; border-top:1px solid #e5e7eb; margin:28px 0;"/>
<h3 style="font-size:1.35em; font-weight:700; color:#111827; margin-bottom:20px;">Step-by-Step Workflow</h3>
<!-- STEP 1 -->
<div style="display:flex; gap:16px; margin-bottom:20px; align-items:flex-start;">
  <div style="flex-shrink:0; width:36px; height:36px; border-radius:50%; background:#003087; color:#fff; display:flex; align-items:center; justify-content:center; font-size:.85em; font-weight:700; margin-top:2px;">1</div>
  <div style="flex:1; background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden;">
    <div style="padding:14px 20px 10px; border-bottom:1px solid #e5e7eb; background:#f9fafb;"><div style="font-weight:700; color:#111827; font-size:.97em;">Pick the document and template</div></div>
    <div style="padding:14px 20px;">
<p style="font-size:.88em; color:#374151; line-height:1.7; margin-bottom:14px;">One document for Module 2.3; one document per level-3 Module 3.2 heading. Your answers drive the document's core metadata.</p>
<table style="width:100%; border-collapse:collapse; font-size:.84em; margin-bottom:14px;">
  <thead><tr style="background:#003087; color:#fff;"><th style="padding:9px 12px; border:1px solid #d0d0d0; text-align:left; width:40%;">Question</th><th style="padding:9px 12px; border:1px solid #d0d0d0; text-align:left;">Drives this field</th></tr></thead>
  <tbody>
    <tr><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Module 2.3 QOS or a Module 3.2 heading?</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">Composition.type</code> = <code style="font-family:monospace; font-size:.8em; color:#0891b2;">m2-3-qos</code> or <code style="font-family:monospace; font-size:.8em; color:#0891b2;">m3-2-quality</code> (<a href="CodeSystem-pqi-document-type.html" style="color:#2563eb; font-weight:600;">PqiDocumentType</a>)</td></tr>
    <tr style="background:#f9fafb;"><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Which maturity type?</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">Composition.category</code> = <code style="font-family:monospace; font-size:.8em; color:#0891b2;">type-1</code> (<a href="CodeSystem-pqi-maturity-type.html" style="color:#2563eb; font-weight:600;">PqiMaturityType</a>)</td></tr>
    <tr><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Which drug substance or drug product?</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">Composition.subject.display</code> (product name, manufacturer or dosage form)</td></tr>
    <tr style="background:#f9fafb;"><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Which applicant?</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">Composition.author.display</code></td></tr>
  </tbody>
</table>
<div style="background:#fffbeb; border:1px solid #fde68a; border-left:3px solid #d97706; border-radius:6px; padding:10px 14px; margin-bottom:10px; font-size:.82em; color:#78350f; display:flex; gap:10px; align-items:flex-start;">
  <span style="flex-shrink:0;">💡</span>
  <span><strong>Start from a skeleton:</strong> the <a href="Bundle-bundle-document-type1-pq-m23-r1-skeleton.html" style="color:#92400e; font-weight:600;">Module 2.3 skeleton</a> and the <a href="Bundle-bundle-document-collection-pq-m32-r1-skeleton.html" style="color:#92400e; font-weight:600;">Module 3.2 skeleton collection</a> contain every M4Q(R1) heading, coded, with no content.</span>
</div>
    </div>
  </div>
</div>
<!-- STEP 2 -->
<div style="display:flex; gap:16px; margin-bottom:20px; align-items:flex-start;">
  <div style="flex-shrink:0; width:36px; height:36px; border-radius:50%; background:#003087; color:#fff; display:flex; align-items:center; justify-content:center; font-size:.85em; font-weight:700; margin-top:2px;">2</div>
  <div style="flex:1; background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden;">
    <div style="padding:14px 20px 10px; border-bottom:1px solid #e5e7eb; background:#f9fafb;"><div style="font-weight:700; color:#111827; font-size:.97em;">Copy the heading tree</div></div>
    <div style="padding:14px 20px;">
<p style="font-size:.88em; color:#374151; line-height:1.7; margin-bottom:14px;">Every heading of the template appears, in order, as a <code style="font-family:monospace; font-size:.8em; color:#0891b2;">section</code> with its <a href="CodeSystem-ctd-section-pq.html" style="color:#2563eb; font-weight:600;">CtdSectionPq</a> code and title. Headings marked "Not applicable" keep their section and narrative, as in the Word original.</p>
<div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:14px;">
  <div style="border:1px solid #e5e7eb; border-radius:8px; overflow:hidden;">
    <div style="padding:7px 12px; background:#f9fafb; border-bottom:1px solid #e5e7eb;"><span style="font-size:.7em; font-weight:700; text-transform:uppercase; color:#374151;">Word: headings</span></div>
    <div style="padding:10px 12px; font-size:.8em; color:#374151; line-height:1.8;"><strong>3.2.P.3 MANUFACTURE</strong><br/>3.2.P.3.1 Manufacturer(s)<br/>3.2.P.3.2 Batch Formula<br/>3.2.P.3.3 Description of Manufacturing Process…</div>
  </div>
  <div style="border:1px solid #bbf7d0; border-radius:8px; overflow:hidden;">
    <div style="padding:7px 12px; background:#f0fdf4; border-bottom:1px solid #bbf7d0;"><span style="font-size:.7em; font-weight:700; text-transform:uppercase; color:#15803d;">✓ PQI: coded sections</span></div>
    <div style="padding:10px 12px; font-size:.76em; font-family:ui-monospace,'SF Mono',monospace; color:#374151; line-height:1.9;"><span style="color:#0891b2;">&lt;section code="3.2.P.3"&gt;</span><br/>&nbsp;&nbsp;<span style="color:#2563eb;">&lt;section code="3.2.P.3.1"/&gt;</span><br/>&nbsp;&nbsp;<span style="color:#2563eb;">&lt;section code="3.2.P.3.2"/&gt;</span><br/>&nbsp;&nbsp;<span style="color:#2563eb;">&lt;section code="3.2.P.3.3"/&gt;</span><br/><span style="color:#0891b2;">&lt;/section&gt;</span></div>
  </div>
</div>
<div style="background:#fffbeb; border:1px solid #fde68a; border-left:3px solid #d97706; border-radius:6px; padding:10px 14px; margin-bottom:10px; font-size:.82em; color:#78350f; display:flex; gap:10px; align-items:flex-start;">
  <span style="flex-shrink:0;">💡</span>
  <span><strong>Repeated headings:</strong> where 2.3.S or 2.3.P repeats (several drug substances or products), give each repeat a distinct <code style="font-family:monospace; font-size:.8em; color:#0891b2;">section.title</code>, e.g. "2.3.S Drug Substance – Sakuramil".</span>
</div>
    </div>
  </div>
</div>
<!-- STEP 3 -->
<div style="display:flex; gap:16px; margin-bottom:20px; align-items:flex-start;">
  <div style="flex-shrink:0; width:36px; height:36px; border-radius:50%; background:#003087; color:#fff; display:flex; align-items:center; justify-content:center; font-size:.85em; font-weight:700; margin-top:2px;">3</div>
  <div style="flex:1; background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden;">
    <div style="padding:14px 20px 10px; border-bottom:1px solid #e5e7eb; background:#f9fafb;"><div style="font-weight:700; color:#111827; font-size:.97em;">Convert the content to narrative</div></div>
    <div style="padding:14px 20px;">
<p style="font-size:.88em; color:#374151; line-height:1.7; margin-bottom:14px;">Put the content of each heading into <code style="font-family:monospace; font-size:.8em; color:#0891b2;">section.text</code> (<code style="font-family:monospace; font-size:.8em; color:#0891b2;">status = additional</code>). Every leaf section has narrative.</p>
<div style="background:#fefce8; border:1px solid #fef08a; border-left:4px solid #eab308; border-radius:8px; padding:14px 18px; margin-bottom:16px;">
  <div style="font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#854d0e; margin-bottom:6px;">Formatting vs. Styling</div>
  <div style="font-size:.88em; color:#713f12; line-height:1.7; margin:0;"><strong>Embedded formatting is required</strong> for structure and meaning (headings, lists, bold, italics, tables). <strong>Styling is never embedded</strong>: page orientation, fonts, font sizes, text colour, table shading and borders are applied by style sheets.</div>
</div>
<table style="width:100%; border-collapse:collapse; font-size:.84em; margin-bottom:14px;">
  <thead><tr style="background:#003087; color:#fff;"><th style="padding:9px 12px; border:1px solid #d0d0d0; text-align:left; width:40%;">Word content</th><th style="padding:9px 12px; border:1px solid #d0d0d0; text-align:left;">In the narrative</th></tr></thead>
  <tbody>
    <tr><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Paragraphs, lists, bold, italic, sub/superscript</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">The matching XHTML elements</td></tr>
    <tr style="background:#f9fafb;"><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Tables, including merged cells</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">XHTML tables (<code style="font-family:monospace; font-size:.8em; color:#0891b2;">colspan</code> / <code style="font-family:monospace; font-size:.8em; color:#0891b2;">rowspan</code>)</td></tr>
    <tr><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Footnotes</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Paragraphs at the end of the section</td></tr>
    <tr style="background:#f9fafb;"><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Cross-references</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">In-document anchors</td></tr>
    <tr><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Tracked changes</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">The <a href="https://build.fhir.org/ig/HL7/emedicinal-product-info/en/tracked-changes.html" style="color:#2563eb; font-weight:600;">ePI tracked-changes method</a>: insert/delete anchors plus an annotations section</td></tr>
    <tr style="background:#f9fafb;"><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Text boxes</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><span style="color:#b91c1c; font-weight:600;">Not supported</span>: move their content into the body text</td></tr>
  </tbody>
</table>
    </div>
  </div>
</div>
<!-- STEP 4 -->
<div style="display:flex; gap:16px; margin-bottom:20px; align-items:flex-start;">
  <div style="flex-shrink:0; width:36px; height:36px; border-radius:50%; background:#003087; color:#fff; display:flex; align-items:center; justify-content:center; font-size:.85em; font-weight:700; margin-top:2px;">4</div>
  <div style="flex:1; background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden;">
    <div style="padding:14px 20px 10px; border-bottom:1px solid #e5e7eb; background:#f9fafb;"><div style="font-weight:700; color:#111827; font-size:.97em;">Add images as Binary + DocumentReference</div></div>
    <div style="padding:14px 20px;">
<p style="font-size:.88em; color:#374151; line-height:1.7; margin-bottom:14px;">Images are separate Bundle entries, not contained resources, so the Composition stays light and images load separately. Images go in at full resolution.</p>
<div style="display:grid; grid-template-columns:repeat(3,1fr); gap:10px; margin-bottom:14px;">
  <div style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:6px; padding:12px 14px; text-align:center;">
    <div style="font-size:1.3em; margin-bottom:6px;">🖼️</div>
    <div style="font-size:.78em; font-weight:700; color:#111827; margin-bottom:4px;">A. Binary</div>
    <div style="font-size:.76em; color:#6b7280;">Add a <code style="font-family:monospace; font-size:.8em; color:#0891b2;">Binary</code> entry with the image bytes and an <code style="font-family:monospace; font-size:.8em; color:#0891b2;">image/*</code> contentType</div>
  </div>
  <div style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:6px; padding:12px 14px; text-align:center;">
    <div style="font-size:1.3em; margin-bottom:6px;">🏷️</div>
    <div style="font-size:.78em; font-weight:700; color:#111827; margin-bottom:4px;">B. DocumentReference</div>
    <div style="font-size:.76em; color:#6b7280;">Add a <a href="StructureDefinition-DocumentReference-drug-pq.html" style="color:#2563eb; font-weight:600;">DocumentReferenceDrugPq</a> with figure type, caption, and an attachment pointing at the Binary (contentType, size, hash)</div>
  </div>
  <div style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:6px; padding:12px 14px; text-align:center;">
    <div style="font-size:1.3em; margin-bottom:6px;">🔗</div>
    <div style="font-size:.78em; font-weight:700; color:#111827; margin-bottom:4px;">C. Show & reference</div>
    <div style="font-size:.76em; color:#6b7280;">Show it with <code style="font-family:monospace; font-size:.8em; color:#0891b2;">&lt;img src="Binary/[id]"/&gt;</code> and add the DocumentReference to <code style="font-family:monospace; font-size:.8em; color:#0891b2;">section.entry</code></div>
  </div>
</div>
<div style="background:#fffbeb; border:1px solid #fde68a; border-left:3px solid #d97706; border-radius:6px; padding:10px 14px; margin-bottom:10px; font-size:.82em; color:#78350f; display:flex; gap:10px; align-items:flex-start;">
  <span style="flex-shrink:0;">💡</span>
  <span><strong>Shared images:</strong> an image used in two documents is copied into both, with the same identifier, so each document stays self-contained.</span>
</div>
    </div>
  </div>
</div>
<!-- STEP 5 -->
<div style="display:flex; gap:16px; margin-bottom:28px; align-items:flex-start;">
  <div style="flex-shrink:0; width:36px; height:36px; border-radius:50%; background:#003087; color:#fff; display:flex; align-items:center; justify-content:center; font-size:.85em; font-weight:700; margin-top:2px;">5</div>
  <div style="flex:1; background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden;">
    <div style="padding:14px 20px 10px; border-bottom:1px solid #e5e7eb; background:#f9fafb;"><div style="font-weight:700; color:#111827; font-size:.97em;">Assemble the Bundle and validate</div></div>
    <div style="padding:14px 20px;">
<p style="font-size:.88em; color:#374151; line-height:1.7; margin-bottom:14px;">Wrap the Composition, Binary and DocumentReference entries in a <code style="font-family:monospace; font-size:.8em; color:#0891b2;">Bundle</code> of <code style="font-family:monospace; font-size:.8em; color:#0891b2;">type: document</code>. Nothing else goes in a Type 1 Bundle.</p>
<table style="width:100%; border-collapse:collapse; font-size:.84em; margin-bottom:14px;">
  <thead><tr style="background:#003087; color:#fff;"><th style="padding:9px 12px; border:1px solid #d0d0d0; text-align:left; width:30%;">Bundle field</th><th style="padding:9px 12px; border:1px solid #d0d0d0; text-align:left;">What to enter</th></tr></thead>
  <tbody>
    <tr><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">identifier</code></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">A unique document identifier</td></tr>
    <tr style="background:#f9fafb;"><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">type</code></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Always <strong>document</strong></td></tr>
    <tr><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">timestamp</code></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Date/time the Bundle was assembled (ISO 8601)</td></tr>
    <tr style="background:#f9fafb;"><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">entry[0]</code></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Must be the Composition; Binary and DocumentReference entries follow</td></tr>
  </tbody>
</table>
<div style="background:#dcfce7; border:1px solid #bbf7d0; border-left:3px solid #16a34a; border-radius:6px; padding:10px 14px; margin-bottom:10px; font-size:.82em; color:#14532d; display:flex; gap:10px; align-items:flex-start;">
  <span style="flex-shrink:0;">✅</span>
  <span><strong>Validate:</strong> run the Bundle against <a href="StructureDefinition-Bundle-document-type1-pq.html" style="color:#15803d; font-weight:600;">BundleDocumentType1Pq</a>. See <a href="build_validate.html" style="color:#15803d; font-weight:600;">Validate and QA</a> for the invariants and quality checks.</span>
</div>
    </div>
  </div>
</div>
<!-- STEP 6 -->
<div style="display:flex; gap:16px; margin-bottom:28px; align-items:flex-start;">
  <div style="flex-shrink:0; width:36px; height:36px; border-radius:50%; background:#003087; color:#fff; display:flex; align-items:center; justify-content:center; font-size:.85em; font-weight:700; margin-top:2px;">6</div>
  <div style="flex:1; background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden;">
    <div style="padding:14px 20px 10px; border-bottom:1px solid #e5e7eb; background:#f9fafb;"><div style="font-weight:700; color:#111827; font-size:.97em;">Group documents that are sent together</div></div>
    <div style="padding:14px 20px;">
<p style="font-size:.88em; color:#374151; line-height:1.7; margin-bottom:10px;">Send a full Module 3.2, or any subset of documents, as a <a href="StructureDefinition-Bundle-document-collection-pq.html" style="color:#2563eb; font-weight:600;">BundleDocumentCollectionPq</a>. Related documents can also point to each other with <code style="font-family:monospace; font-size:.8em; color:#0891b2;">Composition.relatesTo</code>.</p>
<div style="background:#eff6ff; border:1px solid #bfdbfe; border-left:4px solid #2563eb; border-radius:8px; padding:14px 18px; margin-bottom:16px;">
  <div style="font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#1d4ed8; margin-bottom:6px;">📏 Granularity rule</div>
  <div style="font-size:.88em; color:#1e40af; line-height:1.7; margin:0;">Never merge several level-3 headings into one Composition, and never merge small documents into larger ones. See <a href="build.html#document-granularity" style="color:#1d4ed8; font-weight:600;">Document granularity</a>.</div>
</div>
    </div>
  </div>
</div>
<hr style="border:none; border-top:1px solid #e5e7eb; margin:28px 0;"/>
<h3 style="font-size:1.35em; font-weight:700; color:#111827; margin-bottom:12px;">Worked example</h3>
<p style="font-size:.88em; color:#374151; line-height:1.7; margin-bottom:10px;">With content, the 3.2.P.3.3 section and its process flow diagram look like this:</p>
<pre style="background:#0f172a; color:#e2e8f0; border-radius:8px; padding:14px 16px; font-size:.76em; line-height:1.6; overflow-x:auto; margin-bottom:14px;"><code>{
  "title": "Description of Manufacturing Process and Process Controls",
  "code": { "coding": [{ "system": "http://hl7.org/fhir/uv/pharm-quality/CodeSystem/ctd-section-pq", "code": "3.2.P.3.3" }] },
  "text": {
    "status": "additional",
    "div": "&lt;div xmlns=\"http://www.w3.org/1999/xhtml\"&gt;&lt;p&gt;The tablets are manufactured by …&lt;/p&gt;&lt;img src=\"Binary/img-3-2-p-3-3-flow\"/&gt;&lt;/div&gt;"
  },
  "entry": [{ "reference": "DocumentReference/fig-3-2-p-3-3-flow" }]
}</code></pre>
<div style="background:#fffbeb; border:1px solid #fde68a; border-left:3px solid #d97706; border-radius:6px; padding:10px 14px; margin-bottom:10px; font-size:.82em; color:#78350f; display:flex; gap:10px; align-items:flex-start;">
  <span style="flex-shrink:0;">💡</span>
  <span><strong>Examples:</strong> worked examples based on the ICH Sakura Bloom mock-up will be added at every type. The full set of templates and examples will be published in the GitHub parking lot.</span>
</div>
<hr style="border:none; border-top:1px solid #e5e7eb; margin:28px 0;"/>
<h3 style="font-size:1.35em; font-weight:700; color:#111827; margin-bottom:12px;">Checklist</h3>
<div style="background:#fff; border:1px solid #e5e7eb; border-radius:8px; padding:14px 20px; margin-bottom:16px;">
  <div style="font-size:.88em; color:#374151; line-height:1.6; padding:5px 0; border-bottom:1px dashed #f1f5f9;"><span style="color:#16a34a; font-weight:700; margin-right:8px;">☐</span>One document per Module 2.3, or per level-3 Module 3.2 heading</div>
  <div style="font-size:.88em; color:#374151; line-height:1.6; padding:5px 0; border-bottom:1px dashed #f1f5f9;"><span style="color:#16a34a; font-weight:700; margin-right:8px;">☐</span>Every template heading present, in order, coded and titled</div>
  <div style="font-size:.88em; color:#374151; line-height:1.6; padding:5px 0; border-bottom:1px dashed #f1f5f9;"><span style="color:#16a34a; font-weight:700; margin-right:8px;">☐</span>Every leaf section has narrative; no embedded styling</div>
  <div style="font-size:.88em; color:#374151; line-height:1.6; padding:5px 0; border-bottom:1px dashed #f1f5f9;"><span style="color:#16a34a; font-weight:700; margin-right:8px;">☐</span>Every image is a <code style="font-family:monospace; font-size:.8em; color:#0891b2;">Binary</code> + <code style="font-family:monospace; font-size:.8em; color:#0891b2;">DocumentReference</code> pair, shown with <code style="font-family:monospace; font-size:.8em; color:#0891b2;">&lt;img src="Binary/[id]"/&gt;</code></div>
  <div style="font-size:.88em; color:#374151; line-height:1.6; padding:5px 0; border-bottom:1px dashed #f1f5f9;"><span style="color:#16a34a; font-weight:700; margin-right:8px;">☐</span>No contained resources and no other resources in the Bundle</div>
  <div style="font-size:.88em; color:#374151; line-height:1.6; padding:5px 0; border-bottom:1px dashed #f1f5f9;"><span style="color:#16a34a; font-weight:700; margin-right:8px;">☐</span>Repeated 2.3.S / 2.3.P sections have distinct titles</div>
</div>
<p style="font-size:.88em; color:#374151; line-height:1.7; margin-bottom:10px;">Profiles: <a href="StructureDefinition-Bundle-document-type1-pq.html" style="color:#2563eb; font-weight:600;">BundleDocumentType1Pq</a>, <a href="StructureDefinition-Composition-type1-pq.html" style="color:#2563eb; font-weight:600;">CompositionType1Pq</a>. Invariants: <code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-doc-1</code>, <code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-sec-0</code>, <code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-sec-1</code>, <code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-sec-2</code>, <code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-gran-1</code>, <code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-foc-1</code>, <code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-foc-3</code>, <code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-txt-1</code>, <code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-t1-1</code>.</p>
<hr style="border:none; border-top:1px solid #e5e7eb; margin:28px 0;"/>
<h3 style="font-size:1.1em; font-weight:700; color:#111827; margin-bottom:12px;">What's next?</h3>
<div style="display:grid; grid-template-columns:1fr 1fr; gap:14px;">
  <a href="build_type2.html" style="text-decoration:none; background:#fff; border:1px solid #bfdbfe; border-left:4px solid #2563eb; border-radius:8px; padding:16px 20px; display:block;">
    <div style="font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#2563eb; margin-bottom:4px;">Next →</div>
    <div style="font-weight:700; color:#111827; margin-bottom:4px;">Type 2 Document + product data</div>
    <div style="font-size:.82em; color:#6b7280;">Keep the narrative and add the product's master data: product, packaging, organizations, substances and authorization.</div>
  </a>
  <a href="build.html" style="text-decoration:none; background:#f9fafb; border:1px solid #e5e7eb; border-radius:8px; padding:16px 20px; display:block;">
    <div style="font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#6b7280; margin-bottom:4px;">Reference</div>
    <div style="font-weight:700; color:#111827; margin-bottom:4px;">Build Overview</div>
    <div style="font-size:.82em; color:#6b7280;">Return to the overview of all four PQI types and how they relate.</div>
  </a>
</div>
