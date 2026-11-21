<!-- PQI BUILD — Validate and QA -->
<div style="background:#eff6ff; border:1px solid #bfdbfe; border-left:4px solid #2563eb; border-radius:8px; padding:12px 18px; margin-bottom:24px; font-size:.85em; color:#1e40af; display:flex; gap:10px; align-items:flex-start;">
  <span style="flex-shrink:0; font-size:1em;">🛡️</span>
  <span><strong>Design principle:</strong> profiles carry the structural rules, and quality checks live in external validation apps.</span>
</div>
<h3 style="font-size:1.35em; font-weight:700; color:#111827; margin-bottom:8px;">Validate a document</h3>
<p style="color:#374151; font-size:.94em; line-height:1.7; margin-bottom:16px;">Validate each document Bundle against the profile of its type, and a collection against <a href="StructureDefinition-Bundle-document-collection-pq.html" style="color:#2563eb; font-weight:600;">BundleDocumentCollectionPq</a>, with the <a href="https://confluence.hl7.org/display/FHIR/Using+the+FHIR+Validator" style="color:#2563eb; font-weight:600;">HL7 FHIR Validator</a>.</p>
<pre style="background:#0f172a; color:#e2e8f0; border-radius:8px; padding:14px 16px; font-size:.76em; line-height:1.6; overflow-x:auto; margin-bottom:14px;"><code>java -jar validator_cli.jar my-document.json -version 5.0.0 \
  -ig hl7.fhir.uv.pharm-quality#current \
  -profile http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-document-type1-pq</code></pre>
<div style="display:grid; grid-template-columns:repeat(5,1fr); gap:10px; margin-bottom:24px;">
  <div style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:6px; padding:12px 14px; text-align:center;">
    <div style="font-size:1.3em; margin-bottom:6px;">1️⃣</div>
    <div style="font-size:.78em; font-weight:700; color:#111827; margin-bottom:4px;">Type 1</div>
    <div style="font-size:.76em; color:#6b7280;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">Bundle-document-type1-pq</code></div>
  </div>
  <div style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:6px; padding:12px 14px; text-align:center;">
    <div style="font-size:1.3em; margin-bottom:6px;">2️⃣</div>
    <div style="font-size:.78em; font-weight:700; color:#111827; margin-bottom:4px;">Type 2</div>
    <div style="font-size:.76em; color:#6b7280;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">Bundle-document-type2-pq</code></div>
  </div>
  <div style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:6px; padding:12px 14px; text-align:center;">
    <div style="font-size:1.3em; margin-bottom:6px;">3️⃣</div>
    <div style="font-size:.78em; font-weight:700; color:#111827; margin-bottom:4px;">Type 3</div>
    <div style="font-size:.76em; color:#6b7280;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">Bundle-document-type3-pq</code></div>
  </div>
  <div style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:6px; padding:12px 14px; text-align:center;">
    <div style="font-size:1.3em; margin-bottom:6px;">4️⃣</div>
    <div style="font-size:.78em; font-weight:700; color:#111827; margin-bottom:4px;">Type 4</div>
    <div style="font-size:.76em; color:#6b7280;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">Bundle-document-type4-pq</code></div>
  </div>
  <div style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:6px; padding:12px 14px; text-align:center;">
    <div style="font-size:1.3em; margin-bottom:6px;">📦</div>
    <div style="font-size:.78em; font-weight:700; color:#111827; margin-bottom:4px;">Collection</div>
    <div style="font-size:.76em; color:#6b7280;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">Bundle-document-collection-pq</code></div>
  </div>
</div>
<hr style="border:none; border-top:1px solid #e5e7eb; margin:28px 0;"/>
<h3 style="font-size:1.35em; font-weight:700; color:#111827; margin-bottom:6px;">Invariants</h3>
<p style="font-size:.88em; color:#374151; line-height:1.7; margin-bottom:12px;">Checked by the validator.</p>
<table style="width:100%; border-collapse:collapse; font-size:.84em; margin-bottom:24px;">
  <thead><tr style="background:#003087; color:#fff;"><th style="padding:9px 12px; border:1px solid #d0d0d0; text-align:left; width:22%;">Id</th><th style="padding:9px 12px; border:1px solid #d0d0d0; text-align:left;">Rule</th><th style="padding:9px 12px; border:1px solid #d0d0d0; text-align:left; width:12%;">Types</th></tr></thead>
  <tbody>
    <tr><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-doc-1</code></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">The first entry of the document Bundle is the Composition</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">1–4</td></tr>
    <tr style="background:#f9fafb;"><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-sec-0</code></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Every top-level section is coded from <a href="CodeSystem-ctd-section-pq.html" style="color:#2563eb; font-weight:600;">CtdSectionPq</a></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">1–4</td></tr>
    <tr><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-sec-1</code></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">A sub-section's code sits under its parent's code (3.2.R sub-sections exempt)</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">1–4</td></tr>
    <tr style="background:#f9fafb;"><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-sec-2</code></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Sibling sections are unique by code, focus and title</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">1–4</td></tr>
    <tr><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-gran-1</code></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">A Module 3.2 Composition has one CTD top-level section, from <code style="font-family:monospace; font-size:.8em; color:#0891b2;">vs-ctd-document-root-pq</code></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">1–4</td></tr>
    <tr style="background:#f9fafb;"><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-foc-1</code></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">focus</code> only on repeatable headings</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">1–4</td></tr>
    <tr><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-foc-3</code></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">The focus target is never also an entry of the same section</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">1–4</td></tr>
    <tr style="background:#f9fafb;"><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-foc-2</code></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Repeated headings each carry a focus</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">2–4</td></tr>
    <tr><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-txt-1</code></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Every leaf section has narrative</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">1–3</td></tr>
    <tr style="background:#f9fafb;"><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-t1-1</code></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Section entries reference only image DocumentReferences</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">1</td></tr>
    <tr><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-t2-1</code></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">CTD sections reference only image DocumentReferences</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">2</td></tr>
    <tr style="background:#f9fafb;"><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-t3-1</code></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Entries of sections with authored narrative carry a <code style="font-family:monospace; font-size:.8em; color:#0891b2;">textLink</code></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">3–4</td></tr>
    <tr><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-t4-1</code></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Only replaceable headings may omit authored narrative</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">4</td></tr>
    <tr style="background:#f9fafb;"><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-t4-org</code> … <code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-t4-stab</code></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Entries of replaceable headings resolve to the allowed resource types</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">4</td></tr>
    <tr><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-gran-2</code></td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">A document collection holds only document Bundles</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">collection</td></tr>
  </tbody>
</table>
<hr style="border:none; border-top:1px solid #e5e7eb; margin:28px 0;"/>
<h3 style="font-size:1.35em; font-weight:700; color:#111827; margin-bottom:6px;">Quality checks for validation apps</h3>
<p style="font-size:.88em; color:#374151; line-height:1.7; margin-bottom:14px;">These conformance rules cannot be checked reliably with FHIRPath, so validation apps SHALL check them:</p>
<div style="display:grid; grid-template-columns:repeat(3,1fr); gap:12px; margin-bottom:24px;">
  <div style="background:#fff; border:1px solid #e5e7eb; border-top:3px solid #dc2626; border-radius:8px; padding:16px 18px;">
    <div style="font-size:1.3em; margin-bottom:6px;">🖼️</div>
    <div style="font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#9ca3af; margin-bottom:4px;">Error</div>
    <div style="font-weight:700; color:#111827; margin-bottom:6px; font-size:.95em;">Images</div>
    <div style="font-size:.84em; color:#6b7280; line-height:1.6;">Every <code style="font-family:monospace; font-size:.8em; color:#0891b2;">&lt;img src="Binary/[id]"/&gt;</code> resolves to a <code style="font-family:monospace; font-size:.8em; color:#0891b2;">Binary</code> entry in the same Bundle with an <code style="font-family:monospace; font-size:.8em; color:#0891b2;">image/*</code> contentType, described by a DocumentReference listed in the section that shows it.</div>
  </div>
  <div style="background:#fff; border:1px solid #e5e7eb; border-top:3px solid #dc2626; border-radius:8px; padding:16px 18px;">
    <div style="font-size:1.3em; margin-bottom:6px;">🔗</div>
    <div style="font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#9ca3af; margin-bottom:4px;">Error</div>
    <div style="font-weight:700; color:#111827; margin-bottom:6px; font-size:.95em;">Broken links</div>
    <div style="font-size:.84em; color:#6b7280; line-height:1.6;">Every <code style="font-family:monospace; font-size:.8em; color:#0891b2;">textLink.htmlid</code> is an <code style="font-family:monospace; font-size:.8em; color:#0891b2;">id</code> that exists in the same section's narrative.</div>
  </div>
  <div style="background:#fff; border:1px solid #e5e7eb; border-top:3px solid #d97706; border-radius:8px; padding:16px 18px;">
    <div style="font-size:1.3em; margin-bottom:6px;">🧷</div>
    <div style="font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#9ca3af; margin-bottom:4px;">Warning</div>
    <div style="font-weight:700; color:#111827; margin-bottom:6px; font-size:.95em;">Orphan ids</div>
    <div style="font-size:.84em; color:#6b7280; line-height:1.6;">Every span <code style="font-family:monospace; font-size:.8em; color:#0891b2;">id</code> in a Type 3 or Type 4 narrative is pointed at by an entry.</div>
  </div>
  <div style="background:#fff; border:1px solid #e5e7eb; border-top:3px solid #d97706; border-radius:8px; padding:16px 18px;">
    <div style="font-size:1.3em; margin-bottom:6px;">🧾</div>
    <div style="font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#9ca3af; margin-bottom:4px;">Warning</div>
    <div style="font-weight:700; color:#111827; margin-bottom:6px; font-size:.95em;">Heading completeness</div>
    <div style="font-size:.84em; color:#6b7280; line-height:1.6;">Every heading of the template appears under the document's root heading.</div>
  </div>
  <div style="background:#fff; border:1px solid #e5e7eb; border-top:3px solid #d97706; border-radius:8px; padding:16px 18px;">
    <div style="font-size:1.3em; margin-bottom:6px;">🪪</div>
    <div style="font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#9ca3af; margin-bottom:4px;">Warning</div>
    <div style="font-weight:700; color:#111827; margin-bottom:6px; font-size:.95em;">Shared identifiers</div>
    <div style="font-size:.84em; color:#6b7280; line-height:1.6;">A resource that appears in several documents of a collection has the same identifier in each.</div>
  </div>
</div>
<hr style="border:none; border-top:1px solid #e5e7eb; margin:28px 0;"/>
<h3 style="font-size:1.35em; font-weight:700; color:#111827; margin-bottom:12px;">Common errors</h3>
<table style="width:100%; border-collapse:collapse; font-size:.84em; margin-bottom:24px;">
  <thead><tr style="background:#003087; color:#fff;"><th style="padding:9px 12px; border:1px solid #d0d0d0; text-align:left; width:22%;">Error</th><th style="padding:9px 12px; border:1px solid #d0d0d0; text-align:left;">Fix</th></tr></thead>
  <tbody>
    <tr><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-gran-1</code> fails</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">The document spans several level-3 headings: split it, and send the documents together in a collection</td></tr>
    <tr style="background:#f9fafb;"><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-sec-1</code> fails</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">A section is nested under the wrong heading: check the code against the <a href="CodeSystem-ctd-section-pq.html" style="color:#2563eb; font-weight:600;">CtdSectionPq</a> hierarchy</td></tr>
    <tr><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-sec-2</code> fails</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">A heading is repeated without a distinct focus (Types 2–4) or title (Type 1)</td></tr>
    <tr style="background:#f9fafb;"><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-t2-1</code> fails</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">A resource is referenced from a CTD section in Type 2: move it to the Product data section, or build Type 3</td></tr>
    <tr><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-t3-1</code> fails</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">An entry has no <code style="font-family:monospace; font-size:.8em; color:#0891b2;">textLink</code>: anchor the passage that discusses it</td></tr>
    <tr style="background:#f9fafb;"><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-t4-1</code> fails</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">A non-replaceable section has no authored narrative: restore the narrative</td></tr>
  </tbody>
</table>
<hr style="border:none; border-top:1px solid #e5e7eb; margin:28px 0;"/>
<h3 style="font-size:1.1em; font-weight:700; color:#111827; margin-bottom:12px;">What's next?</h3>
<div style="display:grid; grid-template-columns:1fr 1fr; gap:14px;">
  <a href="build.html" style="text-decoration:none; background:#f9fafb; border:1px solid #e5e7eb; border-radius:8px; padding:16px 20px; display:block;">
    <div style="font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#6b7280; margin-bottom:4px;">Reference</div>
    <div style="font-weight:700; color:#111827; margin-bottom:4px;">Build Overview</div>
    <div style="font-size:.82em; color:#6b7280;">Return to the overview of all four PQI types and how they relate.</div>
  </a>
</div>
