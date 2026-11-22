<!-- HERO -->
<div style="text-align:center; padding:48px 20px 36px;">
  <div style="font-size:.75em; font-weight:700; text-transform:uppercase; letter-spacing:.22em; color:#003087; margin-bottom:16px;">HL7 FHIR R5 · BR&R Work Group</div>
  <h1 style="font-size:2.4em; font-weight:800; line-height:1.15; margin-bottom:16px; color:#111827;">Pharmaceutical Quality,<br/><span style="background:linear-gradient(135deg,#003087,#2563eb); -webkit-background-clip:text; -webkit-text-fill-color:transparent;">structured.</span></h1>
  <p style="font-size:1.05em; color:#6b7280; max-width:540px; margin:0 auto 32px; line-height:1.55;">A universal FHIR specification for creating and exchanging structured pharmaceutical quality data internationally — between biopharmaceutical companies, their partners and national regulators.</p>
  <a href="build.html" style="display:inline-block; background:#003087; color:#fff; padding:14px 28px; border-radius:8px; font-weight:700; font-size:1em; text-decoration:none;">Get Started</a>
</div>

<!-- EXAMPLE STRIP -->
<div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); border-top:1px solid #e5e7eb; border-bottom:1px solid #e5e7eb;">
  <a href="Bundle-bundle-document-collection-pq-sakura-bloom-type1.html" style="text-decoration:none; display:block; padding:28px 22px; border-right:1px solid #e5e7eb; text-align:center;">
    <div style="width:52px; height:52px; border-radius:50%; background:#eff6ff; display:flex; align-items:center; justify-content:center; margin:0 auto 14px; font-size:1.4em;">📄</div>
    <div style="font-weight:700; color:#111827; margin-bottom:6px;">Structured CMC document</div>
    <div style="font-size:.82em; color:#6b7280; line-height:1.5; margin:0 auto 14px; max-width:230px;">Your Word CMC document as a FHIR document, with every CTD heading coded.</div>
    <span style="display:inline-block; background:#003087; color:#fff; font-size:.8em; font-weight:600; padding:7px 18px; border-radius:6px;">See an example →</span>
  </a>
  <a href="Bundle-bundle-document-collection-pq-sakura-bloom-type3.html" style="text-decoration:none; display:block; padding:28px 22px; border-right:1px solid #e5e7eb; text-align:center;">
    <div style="width:52px; height:52px; border-radius:50%; background:#eff6ff; display:flex; align-items:center; justify-content:center; margin:0 auto 14px; font-size:1.4em;">🔗</div>
    <div style="font-weight:700; color:#111827; margin-bottom:6px;">Linked quality data</div>
    <div style="font-size:.82em; color:#6b7280; line-height:1.5; margin:0 auto 14px; max-width:230px;">Narrative that links to structured stability, batch and specification data.</div>
    <span style="display:inline-block; background:#003087; color:#fff; font-size:.8em; font-weight:600; padding:7px 18px; border-radius:6px;">See an example →</span>
  </a>
  <a href="Bundle-bundle-document-collection-pq-sakura-bloom-type4.html" style="text-decoration:none; display:block; padding:28px 22px; border-right:1px solid #e5e7eb; text-align:center;">
    <div style="width:52px; height:52px; border-radius:50%; background:#eff6ff; display:flex; align-items:center; justify-content:center; margin:0 auto 14px; font-size:1.4em;">🧬</div>
    <div style="font-weight:700; color:#111827; margin-bottom:6px;">Data-first CMC</div>
    <div style="font-size:.82em; color:#6b7280; line-height:1.5; margin:0 auto 14px; max-width:230px;">Structured data replaces narrative wherever it carries the content.</div>
    <span style="display:inline-block; background:#003087; color:#fff; font-size:.8em; font-weight:600; padding:7px 18px; border-radius:6px;">See an example →</span>
  </a>
</div>
<div style="text-align:center; padding:14px 0 8px;"><a href="build.html" style="color:#003087; font-weight:600; font-size:.88em; text-decoration:none;">Explore the four PQI types →</a></div>

<!-- ABOUT -->
<h2 style="font-size:1.5em; font-weight:800; color:#111827; margin:40px 0 10px;">About this IG</h2>
<p style="font-size:.94em; color:#374151; line-height:1.7; margin:0 0 14px;">The chemistry, manufacturing and controls (CMC) part of a dossier is still written and exchanged as Word and PDF documents under the ICH CTD headings. The data inside them, such as test results, specifications and batch details, is retyped, copied and checked by hand every time it moves between a sponsor, its manufacturing and testing partners, its systems, and the regulators who review it.</p>
<p style="font-size:.94em; color:#374151; line-height:1.7; margin:0 0 14px;">This guide defines one international FHIR standard for pharmaceutical quality information (PQI). It breaks CMC content into 14 <a href="domains.html" style="color:#003087; font-weight:600;">domains</a> of reusable, structured components, so the same data can be exchanged, combined and reused instead of retyped.</p>
<p style="font-size:.94em; color:#374151; line-height:1.7; margin:0 0 14px;"><strong>PQI supports regulatory submissions as well as industry data exchange.</strong> The same structured CMC data a sponsor exchanges with its partners can go to national regulators. This is what makes the algorithmic, data-driven regulatory exchange described under <a href="#strategic-goals" style="color:#003087; font-weight:600;">Strategic Goals</a> possible: content assembled automatically from source systems, reviewed with the help of analytics and AI, and reused across submissions and regions.</p>
<p style="font-size:.94em; color:#374151; line-height:1.7; margin:0 0 14px;">Adoption is staged. Four <a href="build.html" style="color:#003087; font-weight:600;">PQI types</a> take you from a near 1:1 FHIR copy of a Word CMC document (Type 1) to a data-first document where structured data replaces redundant narrative (Type 4), so you can start with what you have today and move up one document at a time.</p>
<p style="font-size:.92em; color:#374151; line-height:1.7; margin-bottom:24px;">This implementation guide is based upon <strong>FHIR version 5.0.0</strong> and is a <strong>Universal Realm Specification</strong>. It organizes pharmaceutical quality data into <a href="domains.html" style="color:#003087; font-weight:600;">14 domains</a> designed to maximize structured data use and deliver benefits in flexibility, efficiency, and data reuse.</p>

<hr style="border:none; border-top:1px solid #e5e7eb; margin:32px 0;"/>

<!-- SCOPE -->
<h2 style="font-size:1.3em; font-weight:700; color:#111827; margin-bottom:12px;">Scope</h2>

<div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:14px; margin-bottom:32px;">
  <div style="background:#ecfdf5; border:1px solid #a7f3d0; border-radius:8px; padding:16px;">
    <div style="font-weight:700; color:#065f46; margin-bottom:8px; font-size:.9em;">✅ In scope</div>
    <ul style="font-size:.85em; color:#064e3b; line-height:1.55; margin:0; padding-left:18px;">
      <li style="margin-bottom:6px;"><strong>Medicinal products regulated as drugs:</strong> small and large molecules, including functional and non-functional packaging components</li>
      <li style="margin-bottom:6px;"><strong>Lifecycle:</strong> developmental and authorized medicinal products</li>
      <li style="margin-bottom:6px;"><strong>Regulatory submissions:</strong> structured CMC content for submission to, and review by, health authorities</li>
      <li style="margin-bottom:6px;"><strong>Industry data exchange:</strong> within a biopharmaceutical company or between companies</li>
      <li style="margin-bottom:6px;"><strong>Users:</strong> pharmaceutical manufacturers, regulatory affairs teams, and national regulators</li>
    </ul>
  </div>
  <div style="background:#fef2f2; border:1px solid #fecaca; border-radius:8px; padding:16px;">
    <div style="font-weight:700; color:#991b1b; margin-bottom:8px; font-size:.9em;">🔜 Out of scope</div>
    <ul style="font-size:.85em; color:#7f1d1d; line-height:1.55; margin:0 0 10px; padding-left:18px;">
      <li style="margin-bottom:6px;"><strong>Products regulated as devices</strong></li>
      <li style="margin-bottom:6px;"><strong>Veterinary medicinal products</strong></li>
    </ul>
    <p style="font-size:.82em; color:#7f1d1d; line-height:1.5; margin:0;">These are out of scope for version 1.0.0 and may be brought in scope in future versions.</p>
  </div>
</div>

<hr style="border:none; border-top:1px solid #e5e7eb; margin:0 0 32px;"/>

<!-- HOW IT WORKS -->
<h2 style="font-size:1.5em; font-weight:800; color:#111827; margin:40px 0 10px;">How it works</h2>
<p style="font-size:.95em; color:#6b7280; margin:0 0 20px; line-height:1.55;">Start with the CMC documents you have and add structure one step at a time. Each step is a PQI type.</p>
<div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(170px,1fr)); gap:12px; margin-bottom:12px;">
  <a href="build_type1.html" style="text-decoration:none; background:#f9fafb; border:1px solid #e5e7eb; border-radius:10px; padding:18px; display:flex; flex-direction:column; gap:6px;">
    <div style="font-size:1.3em;">📄</div>
    <div style="font-size:.72em; font-weight:700; letter-spacing:.1em; text-transform:uppercase; color:#6b7280;">Step 1</div>
    <div style="font-weight:700; color:#003087;">Convert the document</div>
    <div style="font-size:.82em; color:#4b5563; line-height:1.5;">Type 1: turn a Word CMC document into a FHIR document with coded CTD headings. All content is kept.</div>
  </a>
  <a href="build_type2.html" style="text-decoration:none; background:#f9fafb; border:1px solid #e5e7eb; border-radius:10px; padding:18px; display:flex; flex-direction:column; gap:6px;">
    <div style="font-size:1.3em;">🏷️</div>
    <div style="font-size:.72em; font-weight:700; letter-spacing:.1em; text-transform:uppercase; color:#6b7280;">Step 2</div>
    <div style="font-weight:700; color:#003087;">Add product data</div>
    <div style="font-size:.82em; color:#4b5563; line-height:1.5;">Type 2: add product, packaging, organization, substance and authorization data.</div>
  </a>
  <a href="build_type3.html" style="text-decoration:none; background:#f9fafb; border:1px solid #e5e7eb; border-radius:10px; padding:18px; display:flex; flex-direction:column; gap:6px;">
    <div style="font-size:1.3em;">🔗</div>
    <div style="font-size:.72em; font-weight:700; letter-spacing:.1em; text-transform:uppercase; color:#6b7280;">Step 3</div>
    <div style="font-weight:700; color:#003087;">Link to quality data</div>
    <div style="font-size:.82em; color:#4b5563; line-height:1.5;">Type 3: link key phrases in the narrative to structured domain data with full detail.</div>
  </a>
  <a href="build_type4.html" style="text-decoration:none; background:#f9fafb; border:1px solid #e5e7eb; border-radius:10px; padding:18px; display:flex; flex-direction:column; gap:6px;">
    <div style="font-size:1.3em;">🧬</div>
    <div style="font-size:.72em; font-weight:700; letter-spacing:.1em; text-transform:uppercase; color:#6b7280;">Step 4</div>
    <div style="font-weight:700; color:#003087;">Let data lead</div>
    <div style="font-size:.82em; color:#4b5563; line-height:1.5;">Type 4: structured data becomes the section and replaces narrative that only repeats it.</div>
  </a>
  <a href="build_validate.html" style="text-decoration:none; background:#f9fafb; border:1px solid #e5e7eb; border-radius:10px; padding:18px; display:flex; flex-direction:column; gap:6px;">
    <div style="font-size:1.3em;">✅</div>
    <div style="font-size:.72em; font-weight:700; letter-spacing:.1em; text-transform:uppercase; color:#6b7280;">Step 5</div>
    <div style="font-weight:700; color:#003087;">Validate and exchange</div>
    <div style="font-size:.82em; color:#4b5563; line-height:1.5;">Check the document against the profiles and QA rules, then share it with partners, systems and regulators.</div>
  </a>
</div>
<div style="padding:4px 0 8px;"><a href="build.html" style="color:#003087; font-weight:600; font-size:.88em; text-decoration:none;">Read the full walkthrough →</a></div>

<!-- WHY ADOPT PQI -->
<div style="text-align:center; padding:48px 20px 16px;">
  <h2 style="font-size:1.5em; font-weight:800; color:#111827; margin-bottom:10px;">Why adopt PQI</h2>
  <p style="font-size:.95em; color:#6b7280; max-width:540px; margin:0 auto 36px; line-height:1.55;">Move from unstructured PDFs and Word documents to a real-time, structured data model.</p>
</div>

<div style="display:grid; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); gap:16px; margin-bottom:48px;">
  <div style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:10px; padding:24px;">
    <div style="font-size:1.4em; margin-bottom:10px;">♻️</div>
    <div style="font-weight:700; color:#003087; margin-bottom:6px;">Maximum Data Reuse</div>
    <p style="font-size:.88em; color:#4b5563; line-height:1.6; margin:0;">Granular, discrete components — like individual tests — can be centrally maintained, version-controlled, and reused across stability studies, specifications, and products.</p>
  </div>
  <div style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:10px; padding:24px;">
    <div style="font-size:1.4em; margin-bottom:10px;">⚡</div>
    <div style="font-weight:700; color:#003087; margin-bottom:6px;">Real-Time Data Exchange</div>
    <p style="font-size:.88em; color:#4b5563; line-height:1.6; margin:0;">Reduce pharmaceutical data exchange timelines from months to minutes using FHIR APIs. Enable high-frequency, high-volume data flows between sponsors, partners and regulators.</p>
  </div>
  <div style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:10px; padding:24px;">
    <div style="font-size:1.4em; margin-bottom:10px;">🤖</div>
    <div style="font-weight:700; color:#003087; margin-bottom:6px;">AI &amp; Data Science Ready</div>
    <p style="font-size:.88em; color:#4b5563; line-height:1.6; margin:0;">Structured CMC data can be analysed by AI to check content, anticipate regulators' questions and help draft responses, as well as for data science and ontologies.</p>
  </div>
</div>

<hr style="border:none; border-top:1px solid #e5e7eb; margin:0 0 32px;"/>

<!-- BACKGROUND -->
<!-- STRATEGIC GOALS -->
<h2 id="strategic-goals" style="font-size:1.3em; font-weight:700; color:#111827; margin-bottom:12px;">Strategic Goals</h2>

<p style="font-size:.92em; color:#374151; line-height:1.7; margin-bottom:12px;">Pharmaceutical quality data is growing faster than a document-centric regulatory system can handle. Today, CMC content moves as unstructured files, under inconsistent submission formats, through channels that range from AS2 gateways to email and physical media. The data is hard to find, hard to reuse, and slow to review.</p>
<p style="font-size:.92em; color:#374151; line-height:1.7; margin-bottom:12px;"><a href="https://doi.org/10.1016/j.ijpharm.2026.127195" style="color:#003087; font-weight:600;">Abernathy et al. (2026)</a> show that a different model already works. Using FHIR PQI data models, they connected different sponsor systems, turned CMC data into machine-readable FHIR resources, and exposed it through standard APIs, so regulatory submission content could be assembled automatically. Once the data is structured, AI can analyse it, anticipate regulators' questions and help draft responses.</p>
<ul style="font-size:.92em; color:#374151; line-height:1.6; margin:0 0 16px; padding-left:20px;">
<li style="margin-bottom:6px;"><strong>From episodic to continuous:</strong> document submissions give way to ongoing, data-driven collaboration between sponsors and regulators.</li>
<li style="margin-bottom:6px;"><strong>From months to hours:</strong> one largely manual reliance pilot cut the global CMC change timeline from 3–5 years to 6–9 months; algorithmic exchange can shrink critical regulatory communication to days, hours or even minutes.</li>
<li style="margin-bottom:6px;"><strong>Patients first:</strong> every day saved in regulatory exchange is a day sooner that patients can access new medicines.</li>
</ul>
<p style="font-size:.92em; color:#374151; line-height:1.7; margin-bottom:12px;">PQI provides the common data model this depends on, giving sponsors, partners and national regulators one FHIR structure for CMC data. The industry is entering a third era of regulatory exchange:</p>
<div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:14px; margin-bottom:24px;">
  <div style="background:#fff; border:1px solid #e5e7eb; border-top:3px solid #9ca3af; border-radius:8px; padding:18px 20px;">
    <div style="font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#9ca3af; margin-bottom:4px;">Era 1 · Pre-2003</div>
    <div style="font-weight:700; color:#111827; margin-bottom:6px;">Paper Documents</div>
    <div style="font-size:.82em; color:#6b7280; line-height:1.5;">Printed, published into binders, delivered to health authorities via courier. Manual, effort-intensive processes.</div>
  </div>
  <div style="background:#fff; border:1px solid #e5e7eb; border-top:3px solid #2563eb; border-radius:8px; padding:18px 20px;">
    <div style="font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#2563eb; margin-bottom:4px;">Era 2 · 2003–2023</div>
    <div style="font-weight:700; color:#111827; margin-bottom:6px;">Electronic Documents</div>
    <div style="font-size:.82em; color:#6b7280; line-height:1.5;">PDFs and Word files submitted via electronic gateways. Increased throughput but still limited by document-centric processes.</div>
  </div>
  <div style="background:#fff; border:1px solid #e5e7eb; border-top:3px solid #003087; border-radius:8px; padding:18px 20px;">
    <div style="font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#003087; margin-bottom:4px;">Era 3 · Post-2023</div>
    <div style="font-weight:700; color:#111827; margin-bottom:6px;">Algorithmic Data Exchange</div>
    <div style="font-size:.82em; color:#6b7280; line-height:1.5;">Structured FHIR data exchanged through APIs, with algorithms and AI assembling, checking and reviewing content. Continuous collaboration between sponsors and regulators.</div>
  </div>
</div>

***Figure: Advancement of the Submission and Decision-Making Ecosystems***
<table><tr><td><img src="pharm_industry_timeline.png" /></td></tr></table>

<p style="font-size:.8em; color:#6b7280; line-height:1.6; margin:8px 0 24px;">Reference: Abernathy MJ, Algorri M, Anderson C, Juneja M. Life-saving therapies to patients in hours – the new algorithmic digital regulatory exchange model. <em>International Journal of Pharmaceutics</em>. 2026;702:127195. <a href="https://doi.org/10.1016/j.ijpharm.2026.127195" style="color:#003087;">https://doi.org/10.1016/j.ijpharm.2026.127195</a></p>

<hr style="border:none; border-top:1px solid #e5e7eb; margin:0 0 32px;"/>

<!-- GOVERNANCE -->
<h2 style="font-size:1.5em; font-weight:800; color:#111827; margin:40px 0 10px;">Governance and participation</h2>
<p style="font-size:.88em; color:#374151; line-height:1.7; margin-bottom:16px;">This guide is developed by the HL7 Biomedical Research and Regulation Work Group. See <a href="acknowledgements.html" style="color:#003087; font-weight:600;">Acknowledgements</a> for the project team and contributors, and the <a href="https://confluence.hl7.org/spaces/BRR/pages/161072930/Pharmaceutical+Quality+Information+PQI" style="color:#003087; font-weight:600;">PQI project page</a> to get involved.</p>

<!-- FEEDBACK -->
<h3 style="font-size:1.1em; font-weight:700; color:#111827; margin:20px 0 10px;">Providing Feedback</h3>
<p style="font-size:.88em; color:#374151; line-height:1.7; margin-bottom:8px;">Please suggest improvements and provide notes about issues through <a href="https://jira.hl7.org/" style="color:#003087; font-weight:600;">HL7's Jira Software</a> (free account and log-in required).</p>
<p style="font-size:.88em; color:#374151; line-height:1.7; margin-bottom:8px;">HL7's Confluence pages provide guidance on submitting <a href="https://confluence.hl7.org/display/HL7/Specification+Feedback#SpecificationFeedback-newSubmittingnewfeedback" style="color:#003087; font-weight:600;">Specification Feedback</a> in Jira.</p>
<p style="font-size:.88em; color:#374151; line-height:1.7;">See also the HL7 FHIR Community Chat <a href="https://chat.fhir.org/#narrow/stream/394867-Pharm-Quality-Industry-IG" style="color:#003087; font-weight:600;">Zulip stream: Pharm Quality Industry IG</a> for discussion about this FHIR IG.</p>

<!-- TECHNICAL NOTES -->
### Cross Version Analysis
*(None available.)*

{% include cross-version-analysis.xhtml %}

### Dependency Table

{% include dependency-table.xhtml %}

### Global Profiles Table

{% include globals-table.xhtml %}

### IP Statements

{% include ip-statements.xhtml %}
