<!-- PQI BUILD — Overview | Target: business/regulatory users -->
<div style="background:#eff6ff; border:1px solid #bfdbfe; border-left:4px solid #2563eb; border-radius:8px; padding:12px 18px; margin-bottom:24px; font-size:.85em; color:#1e40af; display:flex; gap:10px; align-items:flex-start;">
  <span style="flex-shrink:0; font-size:1em;">📋</span>
  <span><strong>New to PQI?</strong> Start with a Type 1 document: convert your Module 2.3 or Module 3 Word document into a FHIR document with coded CTD headings, then move up one type at a time.</span>
</div>
<p style="color:#374151; font-size:.94em; line-height:1.7; margin-bottom:16px;">Most quality dossiers are still authored as Word documents under the ICH M4Q headings. The <strong>Build</strong> section shows how to move from there, one step at a time, to fully structured pharmaceutical quality data. Each step is a <strong>PQI type</strong> (maturity level), and each type is a FHIR document: a <code style="font-family:monospace; font-size:.8em; color:#0891b2;">Bundle</code> of type <code style="font-family:monospace; font-size:.8em; color:#0891b2;">document</code> whose first entry is a <code style="font-family:monospace; font-size:.8em; color:#0891b2;">Composition</code>.</p>
<h3 style="font-size:1.35em; font-weight:700; color:#111827; margin-bottom:12px;">Select your implementation path</h3>
<div style="display:grid; grid-template-columns:repeat(4,1fr); gap:12px; margin-bottom:24px;">
  <a href="build_type1.html" style="text-decoration:none; background:#fff; border:1px solid #e5e7eb; border-top:3px solid #2563eb; border-radius:8px; padding:16px 18px; display:block;">
    <div style="font-size:1.3em; margin-bottom:6px;">📄</div>
    <div style="font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#9ca3af; margin-bottom:4px;">Type 1</div>
    <div style="font-weight:700; color:#111827; margin-bottom:6px;">Structured document</div>
    <div style="font-size:.82em; color:#6b7280; line-height:1.5;">CTD headings coded, narrative and images as in the Word document.</div>
  </a>
  <a href="build_type2.html" style="text-decoration:none; background:#fff; border:1px solid #e5e7eb; border-top:3px solid #0891b2; border-radius:8px; padding:16px 18px; display:block;">
    <div style="font-size:1.3em; margin-bottom:6px;">🏷️</div>
    <div style="font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#9ca3af; margin-bottom:4px;">Type 2</div>
    <div style="font-weight:700; color:#111827; margin-bottom:6px;">Document + product data</div>
    <div style="font-size:.82em; color:#6b7280; line-height:1.5;">Adds product, packaging, organization, substance and authorization resources.</div>
  </a>
  <a href="build_type3.html" style="text-decoration:none; background:#fff; border:1px solid #e5e7eb; border-top:3px solid #7c3aed; border-radius:8px; padding:16px 18px; display:block;">
    <div style="font-size:1.3em; margin-bottom:6px;">🔗</div>
    <div style="font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#9ca3af; margin-bottom:4px;">Type 3</div>
    <div style="font-weight:700; color:#111827; margin-bottom:6px;">Linked document</div>
    <div style="font-size:.82em; color:#6b7280; line-height:1.5;">Links each section's narrative to the PQI resources it discusses.</div>
  </a>
  <a href="build_type4.html" style="text-decoration:none; background:#fff; border:1px solid #e5e7eb; border-top:3px solid #16a34a; border-radius:8px; padding:16px 18px; display:block;">
    <div style="font-size:1.3em; margin-bottom:6px;">🧬</div>
    <div style="font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#9ca3af; margin-bottom:4px;">Type 4</div>
    <div style="font-weight:700; color:#111827; margin-bottom:6px;">Data-first document</div>
    <div style="font-size:.82em; color:#6b7280; line-height:1.5;">Resources replace narrative where they carry the content.</div>
  </a>
</div>
<h3 style="font-size:1.35em; font-weight:700; color:#111827; margin-bottom:12px;">The four types at a glance</h3>
<table style="width:100%; border-collapse:collapse; font-size:.84em; margin-bottom:14px;">
  <thead><tr style="background:#003087; color:#fff;"><th style="padding:9px 12px; border:1px solid #d0d0d0; text-align:left; width:18%;"></th><th style="padding:9px 12px; border:1px solid #d0d0d0; text-align:left;">Type 1</th><th style="padding:9px 12px; border:1px solid #d0d0d0; text-align:left;">Type 2</th><th style="padding:9px 12px; border:1px solid #d0d0d0; text-align:left;">Type 3</th><th style="padding:9px 12px; border:1px solid #d0d0d0; text-align:left;">Type 4</th></tr></thead>
  <tbody>
    <tr><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><strong>Bundle profile</strong></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><a href="StructureDefinition-Bundle-document-type1-pq.html" style="color:#2563eb; font-weight:600;">BundleDocumentType1Pq</a></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><a href="StructureDefinition-Bundle-document-type2-pq.html" style="color:#2563eb; font-weight:600;">BundleDocumentType2Pq</a></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><a href="StructureDefinition-Bundle-document-type3-pq.html" style="color:#2563eb; font-weight:600;">BundleDocumentType3Pq</a></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><a href="StructureDefinition-Bundle-document-type4-pq.html" style="color:#2563eb; font-weight:600;">BundleDocumentType4Pq</a></td></tr>
    <tr style="background:#f9fafb;"><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><strong>Composition profile</strong></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><a href="StructureDefinition-Composition-type1-pq.html" style="color:#2563eb; font-weight:600;">CompositionType1Pq</a></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><a href="StructureDefinition-Composition-type2-pq.html" style="color:#2563eb; font-weight:600;">CompositionType2Pq</a></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><a href="StructureDefinition-Composition-type3-pq.html" style="color:#2563eb; font-weight:600;">CompositionType3Pq</a></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><a href="StructureDefinition-Composition-type4-pq.html" style="color:#2563eb; font-weight:600;">CompositionType4Pq</a></td></tr>
    <tr><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><strong>Section headings</strong></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">M4Q(R1) template, coded</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Same</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Same</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Same</td></tr>
    <tr style="background:#f9fafb;"><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><strong>Section narrative</strong></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Required, authored</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Required, authored</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Required, with <code style="font-family:monospace; font-size:.8em; color:#0891b2;">id</code> anchors</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Optional on replaceable headings</td></tr>
    <tr><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><strong>Images</strong></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">Binary</code> + <code style="font-family:monospace; font-size:.8em; color:#0891b2;">DocumentReference</code> entries</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Same</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Same</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Same</td></tr>
    <tr style="background:#f9fafb;"><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><strong>Other resources</strong></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">None</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Product, packaging, organizations, substances, authorization</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Type 2 + any PQI domain resource</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Same as Type 3</td></tr>
    <tr><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><strong><code style="font-family:monospace; font-size:.8em; color:#0891b2;">section.entry</code></strong></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Image DocumentReferences only</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Product data section, plus images</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Any CTD section, linked to the narrative with <code style="font-family:monospace; font-size:.8em; color:#0891b2;">textLink</code></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Any CTD section; sole content of replaceable sections</td></tr>
    <tr style="background:#f9fafb;"><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><strong>Effort</strong></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Convert the Word template</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">+ map master data</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">+ link narrative to data</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">+ generate data from source systems</td></tr>
  </tbody>
</table>
<p style="font-size:.88em; color:#374151; line-height:1.7; margin-bottom:24px;">Each type builds on the one before, so tooling and examples can be layered.</p>
<h3 style="font-size:1.35em; font-weight:700; color:#111827; margin-bottom:12px;">Which type should I build?</h3>
<table style="width:100%; border-collapse:collapse; font-size:.84em; margin-bottom:24px;">
  <thead><tr style="background:#003087; color:#fff;"><th style="padding:9px 12px; border:1px solid #d0d0d0; text-align:left; width:65%;">You are…</th><th style="padding:9px 12px; border:1px solid #d0d0d0; text-align:left;">Start with</th></tr></thead>
  <tbody>
    <tr><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">A sponsor whose Module 2.3 and Module 3 live in Word</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><a href="build_type1.html" style="color:#2563eb; font-weight:600;">Type 1</a></td></tr>
    <tr style="background:#f9fafb;"><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">A sponsor with a RIM or IDMP system holding product master data</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><a href="build_type2.html" style="color:#2563eb; font-weight:600;">Type 2</a></td></tr>
    <tr><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">A vendor of CMC authoring tools</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><a href="build_type3.html" style="color:#2563eb; font-weight:600;">Type 3</a></td></tr>
    <tr style="background:#f9fafb;"><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">A sponsor whose quality data lives in LIMS, MES or QMS systems</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><a href="build_type4.html" style="color:#2563eb; font-weight:600;">Type 4</a></td></tr>
  </tbody>
</table>
<hr style="border:none; border-top:1px solid #e5e7eb; margin:28px 0;"/>
<h3 id="document-granularity" style="font-size:1.35em; font-weight:700; color:#111827; margin-bottom:8px;">Document granularity</h3>
<p style="color:#374151; font-size:.94em; line-height:1.7; margin-bottom:16px;">The IG fixes how a dossier is cut into documents; implementers do not choose. That lets a document be reused unchanged across markets, and replaced on its own when one part changes.</p>
<div style="display:grid; grid-template-columns:repeat(3,1fr); gap:12px; margin-bottom:14px;">
  <div style="background:#fff; border:1px solid #e5e7eb; border-top:3px solid #2563eb; border-radius:8px; padding:16px 18px;">
    <div style="font-size:1.3em; margin-bottom:6px;">🧾</div>
    <div style="font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#9ca3af; margin-bottom:4px;">Module 2.3</div>
    <div style="font-weight:700; color:#111827; margin-bottom:6px; font-size:.95em;">One document</div>
    <div style="font-size:.84em; color:#6b7280; line-height:1.6;">A single Quality Overall Summary document with one top-level section coded <code style="font-family:monospace; font-size:.8em; color:#0891b2;">2.3</code>.</div>
  </div>
  <div style="background:#fff; border:1px solid #e5e7eb; border-top:3px solid #0891b2; border-radius:8px; padding:16px 18px;">
    <div style="font-size:1.3em; margin-bottom:6px;">🗂️</div>
    <div style="font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#9ca3af; margin-bottom:4px;">Module 3.2</div>
    <div style="font-weight:700; color:#111827; margin-bottom:6px; font-size:.95em;">One document per level-3 heading</div>
    <div style="font-size:.84em; color:#6b7280; line-height:1.6;">3.2.S.1–3.2.S.7 per drug substance (and manufacturer), 3.2.P.1–3.2.P.8 per drug product, 3.2.A.1–3.2.A.3 per item, 3.2.R per region.</div>
  </div>
  <div style="background:#fff; border:1px solid #e5e7eb; border-top:3px solid #7c3aed; border-radius:8px; padding:16px 18px;">
    <div style="font-size:1.3em; margin-bottom:6px;">📦</div>
    <div style="font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#9ca3af; margin-bottom:4px;">Sent together</div>
    <div style="font-weight:700; color:#111827; margin-bottom:6px; font-size:.95em;">Document collection</div>
    <div style="font-size:.84em; color:#6b7280; line-height:1.6;">Any group of documents is sent as a <a href="StructureDefinition-Bundle-document-collection-pq.html" style="color:#2563eb; font-weight:600;">BundleDocumentCollectionPq</a>. Documents in one collection can be at different types.</div>
  </div>
</div>
<div style="background:#eff6ff; border:1px solid #bfdbfe; border-left:4px solid #2563eb; border-radius:8px; padding:14px 18px; margin-bottom:16px;">
  <div style="font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#1d4ed8; margin-bottom:6px;">⚡ Reuse across markets</div>
  <div style="font-size:.88em; color:#1e40af; line-height:1.7; margin:0;">The same manufacturing process means the same <strong>3.2.P.3</strong> document everywhere; a market-specific formulation means a different <strong>3.2.P.1</strong> for that market. One drug substance plus one drug product is 15 documents (7 + 8), plus any 3.2.A and 3.2.R documents.</div>
</div>
<ul style="font-size:.88em; color:#374151; line-height:1.8; margin:0 0 10px 0; padding-left:20px;"><li>Each Module 3.2 document has exactly one CTD top-level section, coded from <a href="ValueSet-vs-ctd-document-root-pq.html" style="color:#2563eb; font-weight:600;">vs-ctd-document-root-pq</a>, and names its drug substance or drug product in <code style="font-family:monospace; font-size:.8em; color:#0891b2;">Composition.subject</code>.</li><li>Lower-level headings (e.g. 3.2.P.3.1) stay as sections inside their document. Small documents (e.g. 3.2.S.5) are never merged, and one document never spans several level-3 headings.</li><li>Documents in one collection can be at different types, e.g. 3.2.P.3 at Type 4 next to 3.2.P.2 at Type 1, so maturity can grow one document at a time.</li><li>Resources that appear in several documents keep the same identifiers, so links between documents resolve by identifier, not by Bundle-local id.</li><li>How documents and collections are exchanged is out of scope for now.</li></ul>
<hr style="border:none; border-top:1px solid #e5e7eb; margin:28px 0;"/>
<h3 id="section-headings" style="font-size:1.35em; font-weight:700; color:#111827; margin-bottom:8px;">Section headings</h3>
<p style="color:#374151; font-size:.94em; line-height:1.7; margin-bottom:16px;">Sections are coded with <a href="CodeSystem-ctd-section-pq.html" style="color:#2563eb; font-weight:600;">CtdSectionPq</a>, which holds the ICH M4Q(R1) headings of Module 2.3 and Module 3.2. M4Q(R1) is final and implemented; M4Q(R2) is still a draft, so its headings will be added once ICH finalizes it. For 3.2.R only the top-level heading is coded: sub-sections carry the regulator's own headings.</p>
<div style="background:#fefce8; border:1px solid #fef08a; border-left:4px solid #eab308; border-radius:8px; padding:14px 18px; margin-bottom:16px;">
  <div style="font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#854d0e; margin-bottom:6px;">Focus vs. entry</div>
  <div style="font-size:.88em; color:#713f12; line-height:1.7; margin:0;">A heading that can repeat inside one document (2.3.S per drug substance, 2.3.P per drug product, listed in <a href="ValueSet-vs-ctd-repeatable-pq.html" style="color:#d97706; font-weight:600;">vs-ctd-repeatable-pq</a>) is repeated as a sibling section. From Type 2 on, each repeat names what it is about in <code style="font-family:monospace; font-size:.8em; color:#0891b2;">section.focus</code>; in Type 1 the repeats are told apart by <code style="font-family:monospace; font-size:.8em; color:#0891b2;">section.title</code>. <strong>Focus says what a whole section is about, entry says what data is in it.</strong> The focus target never also appears in the same section's entries.</div>
</div>
<hr style="border:none; border-top:1px solid #e5e7eb; margin:28px 0;"/>
<h3 style="font-size:1.35em; font-weight:700; color:#111827; margin-bottom:8px;">How the types relate to the domain Bundles</h3>
<p style="color:#374151; font-size:.94em; line-height:1.7; margin-bottom:16px;">The <a href="domains.html" style="color:#2563eb; font-weight:600;">domain</a> collection Bundles (e.g. <a href="organizations.html" style="color:#2563eb; font-weight:600;">Organizations</a>, <a href="stability.html" style="color:#2563eb; font-weight:600;">Stability Study</a>) remain the way to exchange one kind of quality data. In Types 2–4 the same resource profiles appear inside documents, and in Type 4 they become the content model of the sections whose narrative they replace.</p>
<div style="background:#eff6ff; border:1px solid #bfdbfe; border-left:4px solid #2563eb; border-radius:8px; padding:14px 18px; margin-bottom:16px;">
  <div style="font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#1d4ed8; margin-bottom:6px;">🛡️ Design principle</div>
  <div style="font-size:.88em; color:#1e40af; line-height:1.7; margin:0;">Profiles carry the structural rules, and quality checks live in external validation. Rules that FHIRPath cannot check reliably – such as narrative anchors and image references – are stated as conformance rules and enforced by implementers' validation apps. See <a href="build_validate.html" style="color:#1d4ed8; font-weight:600;">Validate and QA</a>.</div>
</div>
<hr style="border:none; border-top:1px solid #e5e7eb; margin:28px 0;"/>
<h3 style="font-size:1.1em; font-weight:700; color:#111827; margin-bottom:12px;">What's next?</h3>
<div style="display:grid; grid-template-columns:1fr 1fr; gap:14px;">
  <a href="build_type1.html" style="text-decoration:none; background:#fff; border:1px solid #bfdbfe; border-left:4px solid #2563eb; border-radius:8px; padding:16px 20px; display:block;">
    <div style="font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#2563eb; margin-bottom:4px;">Next →</div>
    <div style="font-weight:700; color:#111827; margin-bottom:4px;">Type 1 Structured document</div>
    <div style="font-size:.82em; color:#6b7280;">Convert your Module 2.3 or Module 3 Word document into a FHIR document with coded CTD headings.</div>
  </a>
  <a href="build_validate.html" style="text-decoration:none; background:#f9fafb; border:1px solid #e5e7eb; border-radius:8px; padding:16px 20px; display:block;">
    <div style="font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#6b7280; margin-bottom:4px;">Reference</div>
    <div style="font-weight:700; color:#111827; margin-bottom:4px;">Validate and QA</div>
    <div style="font-size:.82em; color:#6b7280;">Validator commands, invariants and the quality checks for validation apps.</div>
  </a>
</div>
<div style="background:#fffbeb; border:1px solid #fde68a; border-left:3px solid #d97706; border-radius:6px; padding:10px 14px; margin-bottom:10px; font-size:.82em; color:#78350f; display:flex; gap:10px; align-items:flex-start;">
  <span style="flex-shrink:0;">💡</span>
  <span><strong>Synthetic example data:</strong> the worked examples in this guide are fictitious. They use synthetic data from the ICH M4Q(R2) Sakura Bloom mock-up, the FDA example Quality Overall Summaries and the HL7 FHIR PQI team. They do not describe a real product, company or authorization, and every document is labelled as test data (HTEST).</span>
</div>
