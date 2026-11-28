<!-- Business Use Cases: grouped by PQI type -->
<div style="color: #1f2937;">
<p style="margin: 0 0 24px 0; font-size: 15px; line-height: 1.65; color: #374151;">PQI supports two kinds of work: <strong>documents</strong> that carry dossier content between sponsors and regulators, and <strong>data exchange</strong> between sponsors, contract manufacturers and laboratories. The use cases below are grouped by PQI type, so you can see what each step up the ladder adds.</p>


<section style="margin-bottom: 36px; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px">
<div style="background: #fff; border: 1px solid #dbe3ef; border-top: 4px solid #003087; border-radius: 10px; padding: 20px 22px; display: flex; flex-direction: column; gap: 8px">
<div style="font-size: 12px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: #003087">Sponsor ↔ Regulator</div>
<div style="font-size: 20px; font-weight: 700; color: #0f172a">PQI documents (Types 1–4)</div>
<p style="margin: 0; font-size: 14px; line-height: 1.6; color: #4b5563">One FHIR document per CTD template: Module 2.3 plus one per level-3 heading of Module 3.2. Documents travel together in a document collection and are versioned one by one.</p>
<div style="font-size: 13px; color: #374151"><a href="build.html">Build a PQI document</a> · <a href="build_lifecycle.html">Lifecycle</a></div>
</div>
<div style="background: #fff; border: 1px solid #dbe3ef; border-top: 4px solid #0e7490; border-radius: 10px; padding: 20px 22px; display: flex; flex-direction: column; gap: 8px">
<div style="font-size: 12px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: #0e7490">Sponsor ↔ CMO / Laboratory</div>
<div style="font-size: 20px; font-weight: 700; color: #0f172a">Domain Bundles</div>
<p style="margin: 0; font-size: 14px; line-height: 1.6; color: #4b5563">Collections of one kind of quality data, such as a stability study, a specification or the organizations involved. This data is what Types 2–4 documents reference and, in Type 4, are generated from.</p>
<div style="font-size: 13px; color: #374151"><a href="domains.html">Domains overview</a></div>
</div>
</section>

<section style="margin-bottom: 36px; background: #fff; border: 1px solid #dbe3ef; border-radius: 10px; padding: 20px 22px; display: flex; flex-direction: column; gap: 14px">
<div style="font-size: 18px; font-weight: 700; color: #0f172a">Start here</div>
<div style="display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 12px">
<a href="#type-1" style="display: flex; flex-direction: column; gap: 4px; border: 1px solid #c7d2fe; background: #eef2ff; border-radius: 8px; padding: 12px 14px; color: #1e3a8a"><span style="font-size: 14px; font-weight: 700">Sponsor regulatory affairs</span><span style="font-size: 12.5px; font-weight: 400; color: #374151">First structured submission, reuse across markets, CPID</span></a>
<a href="#type-3" style="display: flex; flex-direction: column; gap: 4px; border: 1px solid #c7d2fe; background: #eef2ff; border-radius: 8px; padding: 12px 14px; color: #1e3a8a"><span style="font-size: 14px; font-weight: 700">Authoring-tool vendor</span><span style="font-size: 12.5px; font-weight: 400; color: #374151">Templates (Type 1), linking (Type 3), generation (Type 4)</span></a>
<a href="#type-4" style="display: flex; flex-direction: column; gap: 4px; border: 1px solid #c7d2fe; background: #eef2ff; border-radius: 8px; padding: 12px 14px; color: #1e3a8a"><span style="font-size: 14px; font-weight: 700">CMO or testing lab</span><span style="font-size: 12.5px; font-weight: 400; color: #374151">Stability and specification data in domain Bundles</span></a>
<a href="#regulator" style="display: flex; flex-direction: column; gap: 4px; border: 1px solid #c7d2fe; background: #eef2ff; border-radius: 8px; padding: 12px 14px; color: #1e3a8a"><span style="font-size: 14px; font-weight: 700">Regulator</span><span style="font-size: 12.5px; font-weight: 400; color: #374151">Triage, comparison and review from claim to data</span></a>
</div>
</section>

<section id="type-1" style="margin-bottom: 36px; display: flex; flex-direction: column; gap: 14px">
<div style="display: flex; align-items: center; gap: 12px"><span style="background: #1d4ed8; color: #fff; font-weight: 700; font-size: 13px; border-radius: 999px; padding: 4px 12px">Type 1</span><h3 style="margin: 0; font-size: 24px; color: #0f172a">Structured document</h3><span style="font-size: 14px; color: #4b5563">Word template converted to coded FHIR sections with narrative</span></div>
<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px">

<article style="background: #fff; border: 1px solid #dbe3ef; border-radius: 10px; padding: 18px 20px; display: flex; flex-direction: column; gap: 10px">
<h4 style="margin: 0; font-size: 17px; color: #0f172a">Author a first submission in structured form</h4>
<p style="margin: 0; font-size: 13.5px; line-height: 1.6; color: #4b5563"><strong style="color: #1f2937">Actors:</strong> sponsor, authoring tool. <strong style="color: #1f2937">Starting point:</strong> Module 2.3 and 3.2 in Word.</p>
<ol style="margin: 0; padding-left: 20px; font-size: 13.5px; line-height: 1.7; color: #374151"><li>Load the 20 blank <a href="build_type1.html">PQI Type 1 templates</a> into the authoring tool.</li><li>Author each document under its coded headings, images as Binary entries.</li><li>Validate each document against its Type 1 profile.</li><li>Send the documents together in a <a href="StructureDefinition-Bundle-document-collection-pq.html">document collection</a>.</li></ol>
<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; font-size: 12.5px; line-height: 1.5"><div style="background: #f1f5f9; border-radius: 6px; padding: 8px 10px"><strong>Sponsor:</strong> no data repository needed to start.</div><div style="background: #f1f5f9; border-radius: 6px; padding: 8px 10px"><strong>Regulator:</strong> every section is coded and machine-findable.</div></div>
</article>

<article style="background: #fff; border: 1px solid #dbe3ef; border-radius: 10px; padding: 18px 20px; display: flex; flex-direction: column; gap: 10px">
<h4 style="margin: 0; font-size: 17px; color: #0f172a">Reuse one document across markets</h4>
<p style="margin: 0; font-size: 13.5px; line-height: 1.6; color: #4b5563"><strong style="color: #1f2937">Actors:</strong> sponsor, several regulators. <strong style="color: #1f2937">Starting point:</strong> an approved 3.2.P.3 Manufacture document.</p>
<ol style="margin: 0; padding-left: 20px; font-size: 13.5px; line-height: 1.7; color: #374151"><li>Send the same 3.2.P.3 document, unchanged, to each regulator.</li><li>Replace only what differs by market, e.g. 3.2.P.1 for a local formulation, and 3.2.R.</li><li>Keep one version history per document across all markets.</li></ol>
<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; font-size: 12.5px; line-height: 1.5"><div style="background: #f1f5f9; border-radius: 6px; padding: 8px 10px"><strong>Sponsor:</strong> author once, maintain once.</div><div style="background: #f1f5f9; border-radius: 6px; padding: 8px 10px"><strong>Regulator:</strong> supports reliance and work-sharing on identical content.</div></div>
</article>

<article id="regulator" style="background: #fff; border: 1px solid #dbe3ef; border-radius: 10px; padding: 18px 20px; display: flex; flex-direction: column; gap: 10px">
<h4 style="margin: 0; font-size: 17px; color: #0f172a">Regulator triage</h4>
<p style="margin: 0; font-size: 13.5px; line-height: 1.6; color: #4b5563"><strong style="color: #1f2937">Actors:</strong> regulator intake and review teams. <strong style="color: #1f2937">Starting point:</strong> a received document collection.</p>
<ol style="margin: 0; padding-left: 20px; font-size: 13.5px; line-height: 1.7; color: #374151"><li>Categorize each document by its CTD heading code.</li><li>Route it to the right review team.</li><li>Compare it with its previous version (<code>relatesTo</code>).</li><li>Assign a risk rating to what changed.</li></ol>
<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; font-size: 12.5px; line-height: 1.5"><div style="background: #f1f5f9; border-radius: 6px; padding: 8px 10px"><strong>Sponsor:</strong> faster, more predictable review.</div><div style="background: #f1f5f9; border-radius: 6px; padding: 8px 10px"><strong>Regulator:</strong> automated workflows from Type 1 on.</div></div>
</article>

<article style="background: #fff; border: 1px solid #dbe3ef; border-radius: 10px; padding: 18px 20px; display: flex; flex-direction: column; gap: 10px">
<h4 style="margin: 0; font-size: 17px; color: #0f172a">Regional document: Health Canada CPID</h4>
<p style="margin: 0; font-size: 13.5px; line-height: 1.6; color: #4b5563"><strong style="color: #1f2937">Actors:</strong> sponsor, Health Canada. <strong style="color: #1f2937">Starting point:</strong> the CPID-CE or CPID-B Word template.</p>
<ol style="margin: 0; padding-left: 20px; font-size: 13.5px; line-height: 1.7; color: #374151"><li>Start from the blank <a href="build_cpid_ca.html">CPID template</a>.</li><li>Fill each heading; each is mapped to the Module 3.2 heading it condenses.</li><li>Send a new CPID version with each change, linked to the previous one.</li></ol>
<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; font-size: 12.5px; line-height: 1.5"><div style="background: #f1f5f9; border-radius: 6px; padding: 8px 10px"><strong>Sponsor:</strong> CPID traceable to its 3.2 source.</div><div style="background: #f1f5f9; border-radius: 6px; padding: 8px 10px"><strong>Regulator:</strong> an inspection reference that can be checked against 3.2.</div></div>
</article>
</div>
</section>

<section id="type-2" style="margin-bottom: 36px; display: flex; flex-direction: column; gap: 14px">
<div style="display: flex; align-items: center; gap: 12px"><span style="background: #0e7490; color: #fff; font-weight: 700; font-size: 13px; border-radius: 999px; padding: 4px 12px">Type 2</span><h3 style="margin: 0; font-size: 24px; color: #0f172a">Document + product data</h3><span style="font-size: 14px; color: #4b5563">Product, packaging and organizations as resources</span></div>
<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px">
<article style="background: #fff; border: 1px solid #dbe3ef; border-radius: 10px; padding: 18px 20px; display: flex; flex-direction: column; gap: 10px">
<h4 style="margin: 0; font-size: 17px; color: #0f172a">One product, many documents</h4>
<p style="margin: 0; font-size: 13.5px; line-height: 1.6; color: #4b5563"><strong style="color: #1f2937">Actors:</strong> sponsor (RIM or IDMP system). <strong style="color: #1f2937">Starting point:</strong> product master data.</p>
<ol style="margin: 0; padding-left: 20px; font-size: 13.5px; line-height: 1.7; color: #374151"><li>Define MedicinalProductDefinition, packaging, ingredients and organizations once.</li><li>List them in the Product data section of each <a href="build_type2.html">Type 2</a> document.</li><li>Keep the same identifiers in every document of the collection.</li></ol>
<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; font-size: 12.5px; line-height: 1.5"><div style="background: #f1f5f9; border-radius: 6px; padding: 8px 10px"><strong>Sponsor:</strong> no retyping of product data.</div><div style="background: #f1f5f9; border-radius: 6px; padding: 8px 10px"><strong>Regulator:</strong> link documents to its product register.</div></div>
</article>
<article style="background: #fff; border: 1px solid #dbe3ef; border-radius: 10px; padding: 18px 20px; display: flex; flex-direction: column; gap: 10px">
<h4 style="margin: 0; font-size: 17px; color: #0f172a">Facility change <span style="font-size: 12px; font-weight: 600; color: #4b5563">(current use case, reframed)</span></h4>
<p style="margin: 0; font-size: 13.5px; line-height: 1.6; color: #4b5563"><strong style="color: #1f2937">Actors:</strong> sponsor, regulator. <strong style="color: #1f2937">Starting point:</strong> a testing site changes address.</p>
<ol style="margin: 0; padding-left: 20px; font-size: 13.5px; line-height: 1.7; color: #374151"><li>Update the Organization resource: name, address, identifiers (e.g. SPOR, FEI, DUNS).</li><li>Find every document that references it.</li><li>Send new versions of only those documents.</li></ol>
<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; font-size: 12.5px; line-height: 1.5"><div style="background: #f1f5f9; border-radius: 6px; padding: 8px 10px"><strong>Sponsor:</strong> one change, consistent everywhere.</div><div style="background: #f1f5f9; border-radius: 6px; padding: 8px 10px"><strong>Regulator:</strong> site data matches inspection records.</div></div>
</article>
</div>
</section>

<section id="type-3" style="margin-bottom: 36px; display: flex; flex-direction: column; gap: 14px">
<div style="display: flex; align-items: center; gap: 12px"><span style="background: #6d28d9; color: #fff; font-weight: 700; font-size: 13px; border-radius: 999px; padding: 4px 12px">Type 3</span><h3 style="margin: 0; font-size: 24px; color: #0f172a">Linked document</h3><span style="font-size: 14px; color: #4b5563">Narrative linked to the resources it discusses</span></div>
<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px">
<article style="background: #fff; border: 1px solid #dbe3ef; border-radius: 10px; padding: 18px 20px; display: flex; flex-direction: column; gap: 10px">
<h4 style="margin: 0; font-size: 17px; color: #0f172a">Specification change <span style="font-size: 12px; font-weight: 600; color: #4b5563">(current use case, reframed)</span></h4>
<p style="margin: 0; font-size: 13.5px; line-height: 1.6; color: #4b5563"><strong style="color: #1f2937">Actors:</strong> sponsor, CMO, regulator. <strong style="color: #1f2937">Starting point:</strong> a new identity method and acceptance criterion.</p>
<ol style="margin: 0; padding-left: 20px; font-size: 13.5px; line-height: 1.7; color: #374151"><li>Update the ObservationDefinition and PlanDefinition; share them with the CMO.</li><li>Link the 3.2.S.4.1 narrative to the changed test with <code>textLink</code> (<a href="build_type3.html">Type 3</a>).</li><li>Send the new 3.2.S.4.1 version, linked to the one it replaces.</li></ol>
<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; font-size: 12.5px; line-height: 1.5"><div style="background: #f1f5f9; border-radius: 6px; padding: 8px 10px"><strong>Sponsor:</strong> the same specification at CMO and regulator.</div><div style="background: #f1f5f9; border-radius: 6px; padding: 8px 10px"><strong>Regulator:</strong> sees exactly which test changed.</div></div>
</article>
<article style="background: #fff; border: 1px solid #dbe3ef; border-radius: 10px; padding: 18px 20px; display: flex; flex-direction: column; gap: 10px">
<h4 style="margin: 0; font-size: 17px; color: #0f172a">Reviewer goes from claim to data</h4>
<p style="margin: 0; font-size: 13.5px; line-height: 1.6; color: #4b5563"><strong style="color: #1f2937">Actors:</strong> regulator reviewer. <strong style="color: #1f2937">Starting point:</strong> a Type 3 document.</p>
<ol style="margin: 0; padding-left: 20px; font-size: 13.5px; line-height: 1.7; color: #374151"><li>Read a statement in the narrative, e.g. “all batches met the specification”.</li><li>Click the text link to open the batch results it points to.</li><li>Query the same data across products.</li></ol>
<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; font-size: 12.5px; line-height: 1.5"><div style="background: #f1f5f9; border-radius: 6px; padding: 8px 10px"><strong>Sponsor:</strong> fewer questions from review.</div><div style="background: #f1f5f9; border-radius: 6px; padding: 8px 10px"><strong>Regulator:</strong> verify claims without searching appendices.</div></div>
</article>
</div>
</section>

<section id="type-4" style="margin-bottom: 36px; display: flex; flex-direction: column; gap: 14px">
<div style="display: flex; align-items: center; gap: 12px"><span style="background: #15803d; color: #fff; font-weight: 700; font-size: 13px; border-radius: 999px; padding: 4px 12px">Type 4</span><h3 style="margin: 0; font-size: 24px; color: #0f172a">Data-first document</h3><span style="font-size: 14px; color: #4b5563">Replaceable sections generated from source systems</span></div>
<article style="background: #fff; border: 1px solid #dbe3ef; border-radius: 10px; padding: 18px 20px; display: flex; flex-direction: column; gap: 14px">
<h4 style="margin: 0; font-size: 17px; color: #0f172a">Stability study and shelf-life extension (18 → 24 months) <span style="font-size: 12px; font-weight: 600; color: #4b5563">(both current stability use cases, merged)</span></h4>
<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px">
<div style="display: flex; flex-direction: column; gap: 6px"><div style="font-size: 12px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: #0e7490">Data exchange (domain Bundles)</div><ol style="margin: 0; padding-left: 20px; font-size: 13.5px; line-height: 1.7; color: #374151"><li>Sponsor defines the study (PlanDefinition) and tests (ObservationDefinition).</li><li>The lab runs the study and returns Observations and a DiagnosticReport.</li><li>At 24 months the lab returns the new time points.</li></ol></div>
<div style="display: flex; flex-direction: column; gap: 6px"><div style="font-size: 12px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: #15803d">Documents (Type 4)</div><ol style="margin: 0; padding-left: 20px; font-size: 13.5px; line-height: 1.7; color: #374151"><li>Generate 3.2.P.8.3 Stability Data from the results (<a href="build_type4.html">Type 4</a>); no retyped tables.</li><li>Update the shelf-life in 3.2.P.8.1 and its linked narrative.</li><li>Send only the new 3.2.P.8 version; the other 19 documents are unchanged.</li></ol></div>
</div>
<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; font-size: 12.5px; line-height: 1.5"><div style="background: #f1f5f9; border-radius: 6px; padding: 8px 10px"><strong>Sponsor:</strong> results flow from LIMS to dossier without transcription.</div><div style="background: #f1f5f9; border-radius: 6px; padding: 8px 10px"><strong>Regulator:</strong> trend and compare stability data directly.</div></div>
</article>
</section>

<section id="lifecycle" style="margin-bottom: 36px; display: flex; flex-direction: column; gap: 16px">
<div style="display: flex; align-items: center; gap: 12px"><span style="background: #0f172a; color: #fff; font-weight: 700; font-size: 13px; border-radius: 999px; padding: 4px 12px">All types</span><h3 style="margin: 0; font-size: 24px; color: #0f172a">Lifecycle</h3></div>
<p style="margin: 0; font-size: 15px; line-height: 1.65; color: #374151; max-width: 860px">Each PQI document is versioned on its own, using the same approach as electronic Product Information (ePI). A post-approval change replaces only the documents it touches, so one collection can hold documents at different versions and at different types. The full rules are on the <a href="build_lifecycle.html">Lifecycle</a> page of the Build tab.</p>
<div style="display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px">
<div style="background: #fff; border: 1px solid #dbe3ef; border-radius: 10px; padding: 16px 18px; display: flex; flex-direction: column; gap: 8px"><div style="font-size: 15px; font-weight: 700; color: #0f172a">Identifiers</div><ul style="margin: 0; padding-left: 18px; font-size: 13px; line-height: 1.65; color: #374151"><li><code>Bundle.identifier</code> stays the same across all versions of one document.</li><li><code>Composition.identifier</code> is new for each version.</li><li><code>Composition.version</code> counts up: 1, 2, 3…</li></ul></div>
<div style="background: #fff; border: 1px solid #dbe3ef; border-radius: 10px; padding: 16px 18px; display: flex; flex-direction: column; gap: 8px"><div style="font-size: 15px; font-weight: 700; color: #0f172a">Status</div><ul style="margin: 0; padding-left: 18px; font-size: 13px; line-height: 1.65; color: #374151"><li><code>preliminary</code>: draft under review</li><li><code>final</code>: approved</li><li><code>deprecated</code>: superseded or withdrawn</li><li><code>cancelled</code>: draft abandoned</li><li><code>entered-in-error</code>: ignore</li></ul></div>
<div style="background: #fff; border: 1px solid #dbe3ef; border-radius: 10px; padding: 16px 18px; display: flex; flex-direction: column; gap: 8px"><div style="font-size: 15px; font-weight: 700; color: #0f172a">relatesTo</div><ul style="margin: 0; padding-left: 18px; font-size: 13px; line-height: 1.65; color: #374151"><li><code>derived-from</code>: a new draft starts from an approved version</li><li><code>replaces</code>: supersedes an earlier version</li><li><code>amends</code>: merges parallel changes</li><li><code>retracts</code>: withdraws a version</li></ul></div>
</div>

<div style="background: #fff; border: 1px solid #dbe3ef; border-radius: 10px; padding: 18px 20px; display: flex; flex-direction: column; gap: 12px">
<div style="font-size: 15px; font-weight: 700; color: #0f172a">Example: one product, three events</div>
<div style="overflow-x: auto">
<table style="width: 100%; border-collapse: collapse; font-size: 13px; min-width: 760px">
<thead><tr style="background: #003087; color: #fff; text-align: left"><th style="padding: 8px 10px">Event</th><th style="padding: 8px 10px">Documents sent</th><th style="padding: 8px 10px">Version · status</th><th style="padding: 8px 10px">relatesTo</th></tr></thead>
<tbody>
<tr><td style="padding: 8px 10px; border-bottom: 1px solid #e5e7eb">Initial submission</td><td style="padding: 8px 10px; border-bottom: 1px solid #e5e7eb">All 20, in one collection</td><td style="padding: 8px 10px; border-bottom: 1px solid #e5e7eb">v1 preliminary → v1 final</td><td style="padding: 8px 10px; border-bottom: 1px solid #e5e7eb">none</td></tr>
<tr style="background: #f8fafc"><td style="padding: 8px 10px; border-bottom: 1px solid #e5e7eb">Shelf-life extension</td><td style="padding: 8px 10px; border-bottom: 1px solid #e5e7eb">3.2.P.8 only</td><td style="padding: 8px 10px; border-bottom: 1px solid #e5e7eb">v2 preliminary → v2 final</td><td style="padding: 8px 10px; border-bottom: 1px solid #e5e7eb">derived-from v1, then replaces v1</td></tr>
<tr><td style="padding: 8px 10px; border-bottom: 1px solid #e5e7eb">Parallel site change</td><td style="padding: 8px 10px; border-bottom: 1px solid #e5e7eb">3.2.P.3 and 3.2.P.8</td><td style="padding: 8px 10px; border-bottom: 1px solid #e5e7eb">3.2.P.8 v3 final</td><td style="padding: 8px 10px; border-bottom: 1px solid #e5e7eb">amends v2 (merge)</td></tr>
<tr style="background: #f8fafc"><td style="padding: 8px 10px">Withdrawal of a strength</td><td style="padding: 8px 10px">3.2.P.1</td><td style="padding: 8px 10px">v1 deprecated</td><td style="padding: 8px 10px">retracts v1</td></tr>
</tbody>
</table>
</div>
<p style="margin: 0; font-size: 12.5px; color: #4b5563">Figures for initial approval, parallel variations with merge, and withdrawal: see <a href="build_lifecycle.html">Lifecycle</a>.</p>
</div>
</section>

<section style="margin-bottom: 36px; background: #fff; border: 1px solid #dbe3ef; border-radius: 10px; padding: 18px 20px; display: flex; flex-direction: column; gap: 12px">
<div style="font-size: 15px; font-weight: 700; color: #0f172a">Where the current use cases went</div>
<div style="overflow-x: auto">
<table style="width: 100%; border-collapse: collapse; font-size: 13px; min-width: 600px">
<thead><tr style="text-align: left; color: #374151"><th style="padding: 6px 10px; border-bottom: 2px solid #dbe3ef">Current</th><th style="padding: 6px 10px; border-bottom: 2px solid #dbe3ef">New</th></tr></thead>
<tbody>
<tr><td style="padding: 6px 10px; border-bottom: 1px solid #e5e7eb">Stability (New to 18 months)</td><td style="padding: 6px 10px; border-bottom: 1px solid #e5e7eb">Type 4: stability study and shelf-life extension</td></tr>
<tr><td style="padding: 6px 10px; border-bottom: 1px solid #e5e7eb">Stability Update (18 to 24 months)</td><td style="padding: 6px 10px; border-bottom: 1px solid #e5e7eb">Type 4, same use case, plus the Lifecycle example</td></tr>
<tr><td style="padding: 6px 10px; border-bottom: 1px solid #e5e7eb">Test Specification Change</td><td style="padding: 6px 10px; border-bottom: 1px solid #e5e7eb">Type 3: specification change</td></tr>
<tr><td style="padding: 6px 10px">Facility Change</td><td style="padding: 6px 10px">Type 2: facility change</td></tr>
</tbody>
</table>
</div>
</section>
</div>
