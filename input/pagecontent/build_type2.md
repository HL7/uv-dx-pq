<!-- PQI TYPE 2 — Build Guide | Target: business/regulatory users -->
<div style="background:#eff6ff; border:1px solid #bfdbfe; border-left:4px solid #2563eb; border-radius:8px; padding:12px 18px; margin-bottom:24px; font-size:.85em; color:#1e40af; display:flex; gap:10px; align-items:flex-start;">
  <span style="flex-shrink:0; font-size:1em;">📋</span>
  <span><strong>Before you start:</strong> you need a <a href="build_type1.html" style="color:#1e40af; font-weight:600;">Type 1 document</a> and an export of the product master data from your RIM or IDMP/SPOR system.</span>
</div>
<!-- WHAT IS TYPE 2 -->
<h3 style="font-size:1.35em; font-weight:700; color:#111827; margin-bottom:8px;">What is PQI Type 2?</h3>
<p style="color:#374151; font-size:.94em; line-height:1.7; margin-bottom:16px;">A PQI Type 2 document keeps the Type 1 narrative unchanged and adds the product's master data as resources in the same Bundle. This is the identity and regulatory context a reviewer or a RIM system needs before reading any CMC detail.</p>
<div style="margin-bottom:8px;"><span style="font-size:.75em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#9ca3af;">You will create these FHIR resources</span></div>
<div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:28px;">
  <span style="background:#eff6ff; border:1px solid #bfdbfe; color:#1d4ed8; font-size:.78em; font-weight:600; padding:4px 12px; border-radius:99px;">📦 Bundle</span>
  <span style="background:#f0fdfa; border:1px solid #99f6e4; color:#0f766e; font-size:.78em; font-weight:600; padding:4px 12px; border-radius:99px;">📄 Composition</span>
  <span style="background:#fff1f2; border:1px solid #fecdd3; color:#be123c; font-size:.78em; font-weight:600; padding:4px 12px; border-radius:99px;">💊 MedicinalProductDefinition</span>
  <span style="background:#fffbeb; border:1px solid #fde68a; color:#b45309; font-size:.78em; font-weight:600; padding:4px 12px; border-radius:99px;">🧪 ManufacturedItemDefinition</span>
  <span style="background:#fffbeb; border:1px solid #fde68a; color:#b45309; font-size:.78em; font-weight:600; padding:4px 12px; border-radius:99px;">💉 AdministrableProductDefinition</span>
  <span style="background:#f8fafc; border:1px solid #e2e8f0; color:#334155; font-size:.78em; font-weight:600; padding:4px 12px; border-radius:99px;">📦 PackagedProductDefinition</span>
  <span style="background:#f0fdf4; border:1px solid #bbf7d0; color:#15803d; font-size:.78em; font-weight:600; padding:4px 12px; border-radius:99px;">⚗️ Ingredient</span>
  <span style="background:#f0fdf4; border:1px solid #bbf7d0; color:#15803d; font-size:.78em; font-weight:600; padding:4px 12px; border-radius:99px;">🧬 SubstanceDefinition</span>
  <span style="background:#faf5ff; border:1px solid #e9d5ff; color:#7e22ce; font-size:.78em; font-weight:600; padding:4px 12px; border-radius:99px;">🏭 Organization</span>
  <span style="background:#eff6ff; border:1px solid #bfdbfe; color:#1d4ed8; font-size:.78em; font-weight:600; padding:4px 12px; border-radius:99px;">📜 RegulatedAuthorization</span>
</div>
<div style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:8px; padding:18px 20px; margin-bottom:28px;">
  <div style="font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#9ca3af; margin-bottom:12px;">How the Type 2 resources connect</div>
  <div style="font-size:.8em;">
    <div style="margin-bottom:8px;"><span style="background:#f0fdfa; border:1px solid #99f6e4; color:#0f766e; padding:5px 12px; border-radius:6px; font-weight:600;">Composition</span></div>
    <div style="border-left:2px solid #e5e7eb; margin-left:14px; padding-left:14px; margin-bottom:8px; line-height:2.4;"><span style="color:#6b7280; font-size:.85em; font-style:italic; margin-right:8px;">subject</span><span style="background:#fff1f2; border:1px solid #fecdd3; color:#be123c; padding:5px 12px; border-radius:6px; font-weight:600;">MedicinalProductDefinition</span> <span style="background:#f0fdf4; border:1px solid #bbf7d0; color:#15803d; padding:5px 12px; border-radius:6px; font-weight:600;">or SubstanceDefinition (3.2.S)</span></div>
    <div style="border-left:2px solid #e5e7eb; margin-left:14px; padding-left:14px; margin-bottom:8px; line-height:2.4;"><span style="color:#6b7280; font-size:.85em; font-style:italic; margin-right:8px;">author</span><span style="background:#faf5ff; border:1px solid #e9d5ff; color:#7e22ce; padding:5px 12px; border-radius:6px; font-weight:600;">Organization (applicant)</span></div>
    <div style="border-left:2px solid #e5e7eb; margin-left:14px; padding-left:14px; margin-bottom:8px; line-height:2.4;"><span style="color:#6b7280; font-size:.85em; font-style:italic; margin-right:8px;">section pqi-product-data lists</span><span style="background:#fffbeb; border:1px solid #fde68a; color:#b45309; padding:5px 12px; border-radius:6px; font-weight:600;">ManufacturedItemDefinition</span> <span style="background:#fffbeb; border:1px solid #fde68a; color:#b45309; padding:5px 12px; border-radius:6px; font-weight:600;">AdministrableProductDefinition</span> <span style="background:#f8fafc; border:1px solid #e2e8f0; color:#334155; padding:5px 12px; border-radius:6px; font-weight:600;">PackagedProductDefinition</span> <span style="background:#f0fdf4; border:1px solid #bbf7d0; color:#15803d; padding:5px 12px; border-radius:6px; font-weight:600;">Ingredient</span> <span style="background:#faf5ff; border:1px solid #e9d5ff; color:#7e22ce; padding:5px 12px; border-radius:6px; font-weight:600;">Organization</span> <span style="background:#eff6ff; border:1px solid #bfdbfe; color:#1d4ed8; padding:5px 12px; border-radius:6px; font-weight:600;">RegulatedAuthorization</span></div>
    <div style="border-left:2px solid #e5e7eb; margin-left:14px; padding-left:14px; margin-bottom:8px; line-height:2.4;"><span style="color:#6b7280; font-size:.85em; font-style:italic; margin-right:8px;">CTD sections reference</span><span style="background:#f8fafc; border:1px solid #e2e8f0; color:#334155; padding:5px 12px; border-radius:6px; font-weight:600;">image DocumentReferences only</span></div>
  </div>
</div>
<h3 style="font-size:1.35em; font-weight:700; color:#111827; margin-bottom:12px;">Resources added</h3>
<table style="width:100%; border-collapse:collapse; font-size:.84em; margin-bottom:24px;">
  <thead><tr style="background:#003087; color:#fff;"><th style="padding:9px 12px; border:1px solid #d0d0d0; text-align:left; width:50%;">Content</th><th style="padding:9px 12px; border:1px solid #d0d0d0; text-align:left;">Profile</th></tr></thead>
  <tbody>
    <tr><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Drug product identity, strength, dose form, route</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><a href="StructureDefinition-MedicinalProductDefinition-drug-product-pq.html" style="color:#2563eb; font-weight:600;">MedicinalProductDefinitionDrugProductPq</a></td></tr>
    <tr style="background:#f9fafb;"><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Manufactured item (e.g. tablet core and coat)</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><a href="StructureDefinition-ManufacturedItemDefinition-drug-pq.html" style="color:#2563eb; font-weight:600;">ManufacturedItemDefinitionDrugPq</a></td></tr>
    <tr><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Administrable product (dose form and route as given, including reconstitution); optional</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><a href="StructureDefinition-AdministrableProductDefinition-drug-pq.html" style="color:#2563eb; font-weight:600;">AdministrableProductDefinitionPq</a></td></tr>
    <tr style="background:#f9fafb;"><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Packaging and container closure</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><a href="StructureDefinition-PackagedProductDefinition-drug-pq.html" style="color:#2563eb; font-weight:600;">PackagedProductDefinitionDrugPq</a></td></tr>
    <tr><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Qualitative and quantitative composition</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><a href="StructureDefinition-Ingredient-drug-pq.html" style="color:#2563eb; font-weight:600;">IngredientDrugPq</a></td></tr>
    <tr style="background:#f9fafb;"><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Drug substance, excipients, impurities</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><a href="StructureDefinition-SubstanceDefinition-component-substance-drug-pq.html" style="color:#2563eb; font-weight:600;">SubstanceDefinitionComponentSubstanceDrugPq</a></td></tr>
    <tr><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Applicant, manufacturers, test sites, packagers</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><a href="StructureDefinition-Organization-drug-pq.html" style="color:#2563eb; font-weight:600;">OrganizationDrugPq</a></td></tr>
    <tr style="background:#f9fafb;"><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;">Marketing authorization or application</td><td style="padding:9px 12px; border:1px solid #d0d0d0; vertical-align:top;"><a href="StructureDefinition-RegulatedAuthorization-drug-pq.html" style="color:#2563eb; font-weight:600;">RegulatedAuthorizationPq</a></td></tr>
  </tbody>
</table>
<hr style="border:none; border-top:1px solid #e5e7eb; margin:28px 0;"/>
<h3 style="font-size:1.35em; font-weight:700; color:#111827; margin-bottom:20px;">Step-by-Step Workflow</h3>
<!-- STEP 1 -->
<div style="display:flex; gap:16px; margin-bottom:20px; align-items:flex-start;">
  <div style="flex-shrink:0; width:36px; height:36px; border-radius:50%; background:#003087; color:#fff; display:flex; align-items:center; justify-content:center; font-size:.85em; font-weight:700; margin-top:2px;">1</div>
  <div style="flex:1; background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden;">
    <div style="padding:14px 20px 10px; border-bottom:1px solid #e5e7eb; background:#f9fafb;"><div style="font-weight:700; color:#111827; font-size:.97em;">Start from the Type 1 document</div></div>
    <div style="padding:14px 20px;">
<p style="font-size:.88em; color:#374151; line-height:1.7; margin-bottom:10px;">Set <code style="font-family:monospace; font-size:.8em; color:#0891b2;">Composition.category</code> to <code style="font-family:monospace; font-size:.8em; color:#0891b2;">type-2</code>. The narrative and images stay exactly as they are.</p>
    </div>
  </div>
</div>
<!-- STEP 2 -->
<div style="display:flex; gap:16px; margin-bottom:20px; align-items:flex-start;">
  <div style="flex-shrink:0; width:36px; height:36px; border-radius:50%; background:#003087; color:#fff; display:flex; align-items:center; justify-content:center; font-size:.85em; font-weight:700; margin-top:2px;">2</div>
  <div style="flex:1; background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden;">
    <div style="padding:14px 20px 10px; border-bottom:1px solid #e5e7eb; background:#f9fafb;"><div style="font-weight:700; color:#111827; font-size:.97em;">Reference the product and the applicant</div></div>
    <div style="padding:14px 20px;">
<p style="font-size:.88em; color:#374151; line-height:1.7; margin-bottom:10px;">Point <code style="font-family:monospace; font-size:.8em; color:#0891b2;">Composition.subject</code> at the <code style="font-family:monospace; font-size:.8em; color:#0891b2;">MedicinalProductDefinition</code> (or, in a 3.2.S document, at the drug substance <code style="font-family:monospace; font-size:.8em; color:#0891b2;">SubstanceDefinition</code>), and <code style="font-family:monospace; font-size:.8em; color:#0891b2;">Composition.author</code> at the applicant <code style="font-family:monospace; font-size:.8em; color:#0891b2;">Organization</code>.</p>
    </div>
  </div>
</div>
<!-- STEP 3 -->
<div style="display:flex; gap:16px; margin-bottom:20px; align-items:flex-start;">
  <div style="flex-shrink:0; width:36px; height:36px; border-radius:50%; background:#003087; color:#fff; display:flex; align-items:center; justify-content:center; font-size:.85em; font-weight:700; margin-top:2px;">3</div>
  <div style="flex:1; background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden;">
    <div style="padding:14px 20px 10px; border-bottom:1px solid #e5e7eb; background:#f9fafb;"><div style="font-weight:700; color:#111827; font-size:.97em;">Add the Product data section</div></div>
    <div style="padding:14px 20px;">
<p style="font-size:.88em; color:#374151; line-height:1.7; margin-bottom:14px;">Add a first top-level section coded <code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-product-data</code>. Its <code style="font-family:monospace; font-size:.8em; color:#0891b2;">entry</code> lists every other product data resource; its <code style="font-family:monospace; font-size:.8em; color:#0891b2;">text</code> is generated (<code style="font-family:monospace; font-size:.8em; color:#0891b2;">status = generated</code>), e.g. a summary table of product, packs, sites and authorizations.</p>
<div style="background:#fef2f2; border:1px solid #fecaca; border-left:3px solid #dc2626; border-radius:6px; padding:10px 14px; margin-bottom:10px; font-size:.82em; color:#7f1d1d; display:flex; gap:10px; align-items:flex-start;">
  <span style="flex-shrink:0;">⚠️</span>
  <span><strong>Keep the CTD sections as in Type 1:</strong> in Type 2 they still reference only image DocumentReferences. Linking resources to CTD sections is <a href="build_type3.html" style="color:#7f1d1d; font-weight:600;">Type 3</a>.</span>
</div>
    </div>
  </div>
</div>
<!-- STEP 4 -->
<div style="display:flex; gap:16px; margin-bottom:20px; align-items:flex-start;">
  <div style="flex-shrink:0; width:36px; height:36px; border-radius:50%; background:#003087; color:#fff; display:flex; align-items:center; justify-content:center; font-size:.85em; font-weight:700; margin-top:2px;">4</div>
  <div style="flex:1; background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden;">
    <div style="padding:14px 20px 10px; border-bottom:1px solid #e5e7eb; background:#f9fafb;"><div style="font-weight:700; color:#111827; font-size:.97em;">Set focus on repeated headings</div></div>
    <div style="padding:14px 20px;">
<p style="font-size:.88em; color:#374151; line-height:1.7; margin-bottom:14px;">Where 2.3.S or 2.3.P repeats in the Module 2.3 document, set <code style="font-family:monospace; font-size:.8em; color:#0891b2;">section.focus</code> on each repeat to its drug substance or drug product.</p>
<div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:14px;">
  <div style="border:1px solid #e5e7eb; border-radius:8px; overflow:hidden;">
    <div style="padding:7px 12px; background:#f9fafb; border-bottom:1px solid #e5e7eb;"><span style="font-size:.7em; font-weight:700; text-transform:uppercase; color:#374151;">Type 1: title only</span></div>
    <div style="padding:10px 12px; font-size:.8em; color:#374151; line-height:1.8;">2.3.S Drug Substance – Sakuramil<br/>2.3.S Drug Substance – Compound B</div>
  </div>
  <div style="border:1px solid #bbf7d0; border-radius:8px; overflow:hidden;">
    <div style="padding:7px 12px; background:#f0fdf4; border-bottom:1px solid #bbf7d0;"><span style="font-size:.7em; font-weight:700; text-transform:uppercase; color:#15803d;">✓ Type 2: focus</span></div>
    <div style="padding:10px 12px; font-size:.76em; font-family:ui-monospace,'SF Mono',monospace; color:#374151; line-height:1.9;"><span style="color:#0891b2;">&lt;section code="2.3.S"&gt;</span> focus → SubstanceDefinition/sakuramil<br/><span style="color:#0891b2;">&lt;section code="2.3.S"&gt;</span> focus → SubstanceDefinition/compound-b</div>
  </div>
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
<p style="font-size:.88em; color:#374151; line-height:1.7; margin-bottom:14px;">Add the resources to the Bundle. Use the same identifiers in every document that carries the same resource.</p>
<div style="background:#dcfce7; border:1px solid #bbf7d0; border-left:3px solid #16a34a; border-radius:6px; padding:10px 14px; margin-bottom:10px; font-size:.82em; color:#14532d; display:flex; gap:10px; align-items:flex-start;">
  <span style="flex-shrink:0;">✅</span>
  <span><strong>Validate:</strong> run the Bundle against <a href="StructureDefinition-Bundle-document-type2-pq.html" style="color:#15803d; font-weight:600;">BundleDocumentType2Pq</a>.</span>
</div>
    </div>
  </div>
</div>
<div style="background:#f0fdf4; border:1px solid #bbf7d0; border-left:4px solid #16a34a; border-radius:8px; padding:14px 18px; margin-bottom:16px;">
  <div style="font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#15803d; margin-bottom:6px;">♻️ Maintain product data once</div>
  <div style="font-size:.88em; color:#14532d; line-height:1.7; margin:0;">The same <code style="font-family:monospace; font-size:.8em; color:#0891b2;">MedicinalProductDefinition</code>, <code style="font-family:monospace; font-size:.8em; color:#0891b2;">PackagedProductDefinition</code>, <code style="font-family:monospace; font-size:.8em; color:#0891b2;">AdministrableProductDefinition</code> and <code style="font-family:monospace; font-size:.8em; color:#0891b2;">Organization</code> instances can be shared with IDMP submissions.</div>
</div>
<div style="background:#fffbeb; border:1px solid #fde68a; border-left:3px solid #d97706; border-radius:6px; padding:10px 14px; margin-bottom:10px; font-size:.82em; color:#78350f; display:flex; gap:10px; align-items:flex-start;">
  <span style="flex-shrink:0;">💡</span>
  <span><strong>Example:</strong> <a href="Bundle-bundle-document-collection-pq-sakura-bloom-type2.html" style="color:#92400e; font-weight:600;">Sakura Bloom Type 2 collection</a> — 3.2.P.3, 3.2.P.7 and 3.2.R (US) from the ICH Sakura Bloom mock-up. Each document adds a subject, an author and a Product data section; the drug product documents include a made-up US marketing authorization. All example data is synthetic, drawn from the ICH Sakura Bloom mock-up, the FDA example Quality Overall Summaries and the HL7 FHIR PQI team’s example data; anything none of these provide is marked as synthetic where it appears.</span>
</div>
<hr style="border:none; border-top:1px solid #e5e7eb; margin:28px 0;"/>
<h3 style="font-size:1.35em; font-weight:700; color:#111827; margin-bottom:12px;">Checklist</h3>
<div style="background:#fff; border:1px solid #e5e7eb; border-radius:8px; padding:14px 20px; margin-bottom:16px;">
  <div style="font-size:.88em; color:#374151; line-height:1.6; padding:5px 0; border-bottom:1px dashed #f1f5f9;"><span style="color:#16a34a; font-weight:700; margin-right:8px;">☐</span><code style="font-family:monospace; font-size:.8em; color:#0891b2;">subject</code> and <code style="font-family:monospace; font-size:.8em; color:#0891b2;">author</code> reference resources in the Bundle</div>
  <div style="font-size:.88em; color:#374151; line-height:1.6; padding:5px 0; border-bottom:1px dashed #f1f5f9;"><span style="color:#16a34a; font-weight:700; margin-right:8px;">☐</span>One Product data section, first, with generated narrative, listing every product data resource</div>
  <div style="font-size:.88em; color:#374151; line-height:1.6; padding:5px 0; border-bottom:1px dashed #f1f5f9;"><span style="color:#16a34a; font-weight:700; margin-right:8px;">☐</span>CTD sections reference only image DocumentReferences</div>
  <div style="font-size:.88em; color:#374151; line-height:1.6; padding:5px 0; border-bottom:1px dashed #f1f5f9;"><span style="color:#16a34a; font-weight:700; margin-right:8px;">☐</span>Repeated 2.3.S / 2.3.P sections carry <code style="font-family:monospace; font-size:.8em; color:#0891b2;">section.focus</code></div>
  <div style="font-size:.88em; color:#374151; line-height:1.6; padding:5px 0; border-bottom:1px dashed #f1f5f9;"><span style="color:#16a34a; font-weight:700; margin-right:8px;">☐</span>Shared resources keep the same identifiers across documents</div>
</div>
<p style="font-size:.88em; color:#374151; line-height:1.7; margin-bottom:10px;">Profiles: <a href="StructureDefinition-Bundle-document-type2-pq.html" style="color:#2563eb; font-weight:600;">BundleDocumentType2Pq</a>, <a href="StructureDefinition-Composition-type2-pq.html" style="color:#2563eb; font-weight:600;">CompositionType2Pq</a>. Invariants: the Type 1 set (except <code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-t1-1</code> and <code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-t1-2</code>), plus <code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-foc-2</code>, <code style="font-family:monospace; font-size:.8em; color:#0891b2;">pqi-t2-1</code>.</p>
<hr style="border:none; border-top:1px solid #e5e7eb; margin:28px 0;"/>
<h3 style="font-size:1.1em; font-weight:700; color:#111827; margin-bottom:12px;">What's next?</h3>
<div style="display:grid; grid-template-columns:1fr 1fr; gap:14px;">
  <a href="build_type3.html" style="text-decoration:none; background:#fff; border:1px solid #bfdbfe; border-left:4px solid #2563eb; border-radius:8px; padding:16px 20px; display:block;">
    <div style="font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#2563eb; margin-bottom:4px;">Next →</div>
    <div style="font-weight:700; color:#111827; margin-bottom:4px;">Type 3 Linked document</div>
    <div style="font-size:.82em; color:#6b7280;">Link each section's narrative to the PQI resources it discusses.</div>
  </a>
  <a href="build.html" style="text-decoration:none; background:#f9fafb; border:1px solid #e5e7eb; border-radius:8px; padding:16px 20px; display:block;">
    <div style="font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#6b7280; margin-bottom:4px;">Reference</div>
    <div style="font-weight:700; color:#111827; margin-bottom:4px;">Build Overview</div>
    <div style="font-size:.82em; color:#6b7280;">Return to the overview of all four PQI types and how they relate.</div>
  </a>
</div>
