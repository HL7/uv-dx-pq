<!-- DOMAIN HEADER -->
<div style="margin-bottom:32px;">
  <div style="font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#2563eb; margin-bottom:4px;">Domain 12</div>
  <h2 style="font-size:1.7em; font-weight:800; color:#111827; margin-bottom:10px; margin-top:0;">Stability Study</h2>
  <p style="font-size:.95em; color:#6b7280; line-height:1.6; max-width:640px;">
    Stability studies are critical for establishing the shelf-life and storage conditions of pharmaceutical products. This domain standardizes the exchange of stability study designs, conditions, batch testing results, degradation trends, and final conclusions using structured FHIR resources.
  </p>
</div>

<hr style="border:none; border-top:1px solid #e5e7eb; margin:0 0 32px;"/>

<!-- IMPLEMENTATION PIPELINE OVERVIEW -->
<div style="margin-bottom:48px;">
  <h2 style="font-size:1.4em; font-weight:800; color:#111827; margin-bottom:8px;">How to Build a Stability Bundle</h2>
  <p style="font-size:.9em; color:#6b7280; line-height:1.6; max-width:720px; margin-bottom:24px;">
    Think of creating a Stability Bundle like a <strong>manufacturing line for data</strong>. Raw data enters from your source systems, gets fabricated into standardized FHIR resources, wired together with references, packaged into a Bundle, and delivered to downstream consumers. Follow the five stations below.
  </p>

  <img src="stability-pipeline-overview.png" style="width:100%; max-width:900px; border-radius:10px; border:1px solid #e5e7eb; box-shadow:0 4px 12px rgba(0,0,0,0.06); margin-bottom:32px;" alt="Stability Bundle Pipeline — 5 Station Overview"/>

  <!-- Station 1 -->
  <div style="background:#f5f3ff; border:1px solid #ddd6fe; border-left:4px solid #6366f1; border-radius:10px; padding:20px 24px; margin-bottom:16px;">
    <div style="display:flex; align-items:center; gap:12px; margin-bottom:12px;">
      <span style="background:#6366f1; color:#fff; font-weight:800; font-size:.85em; padding:4px 12px; border-radius:999px;">Station 1</span>
      <h3 style="margin:0; font-size:1.05em; font-weight:700; color:#4338ca;">Raw Materials — Gather Source Data</h3>
    </div>
    <p style="font-size:.85em; color:#4b5563; line-height:1.6; margin:0 0 12px;">
      Collect data from your laboratory and quality systems. You need four categories of information:
    </p>
    <table style="font-size:.82em; width:100%; border-collapse:collapse; background:#fff; border-radius:6px; overflow:hidden; border:1px solid #e5e7eb;">
      <tr style="border-bottom:1px solid #e5e7eb;">
        <td style="padding:8px 12px; font-weight:600; color:#6366f1; width:25%;">🧪 LIMS</td>
        <td style="padding:8px 12px; color:#4b5563;">Test results (assay values, impurity levels, water content), test method references, acceptance criteria limits</td>
      </tr>
      <tr style="border-bottom:1px solid #e5e7eb;">
        <td style="padding:8px 12px; font-weight:600; color:#6366f1;">📋 QMS</td>
        <td style="padding:8px 12px; color:#4b5563;">Stability study protocol, time-point schedule (0, 3, 6, 9, 12, 18, 24 months), storage condition assignments</td>
      </tr>
      <tr style="border-bottom:1px solid #e5e7eb;">
        <td style="padding:8px 12px; font-weight:600; color:#6366f1;">🏢 ERP / MDM</td>
        <td style="padding:8px 12px; color:#4b5563;">Product master data, batch/lot numbers, substance identity, organization (manufacturer/tester) details</td>
      </tr>
      <tr>
        <td style="padding:8px 12px; font-weight:600; color:#6366f1;">🔬 Lab Notebooks</td>
        <td style="padding:8px 12px; color:#4b5563;">Specimen handling instructions, storage conditions (25°C/60% RH, 40°C/75% RH), container orientation</td>
      </tr>
    </table>
  </div>

  <!-- Station 2 -->
  <div style="background:#eff6ff; border:1px solid #bfdbfe; border-left:4px solid #3b82f6; border-radius:10px; padding:20px 24px; margin-bottom:16px;">
    <div style="display:flex; align-items:center; gap:12px; margin-bottom:12px;">
      <span style="background:#3b82f6; color:#fff; font-weight:800; font-size:.85em; padding:4px 12px; border-radius:999px;">Station 2</span>
      <h3 style="margin:0; font-size:1.05em; font-weight:700; color:#1d4ed8;">Resource Fabrication — Create FHIR Resources</h3>
    </div>
    <p style="font-size:.85em; color:#4b5563; line-height:1.6; margin:0 0 12px;">
      Map each category of source data into its corresponding FHIR resource type. Build each resource <strong>independently</strong> and validate it against its profile before moving on. The stability domain uses the following resource types:
    </p>
    <div style="display:flex; justify-content:space-between; align-items:center; background:#fff; border:1px solid #bfdbfe; border-radius:8px; padding:16px;">
      <div>
        <h4 style="margin:0; font-size:.95em; color:#1e40af; font-weight:700;">Resource Population Guide</h4>
        <p style="margin:4px 0 0; font-size:.85em; color:#4b5563;">Detailed field-level mapping instructions and FSH examples for all 11 required resource types.</p>
      </div>
      <a href="stability-resource-guide.html" style="background:#2563eb; color:#fff; padding:8px 16px; border-radius:6px; font-weight:600; font-size:.85em; text-decoration:none; white-space:nowrap;">View Fabrication Guide &rarr;</a>
    </div>
    <p style="font-size:.82em; color:#6b7280; line-height:1.6; margin:12px 0 0;">
      <strong>Tip:</strong> Start with the leaf-level resources (Organization, SpecimenDefinition, ObservationDefinition) and work upward. These have no outbound dependencies.
    </p>
  </div>

  <!-- Station 3 -->
  <div style="background:#ecfdf5; border:1px solid #a7f3d0; border-left:4px solid #10b981; border-radius:10px; padding:20px 24px; margin-bottom:16px;">
    <div style="display:flex; align-items:center; gap:12px; margin-bottom:12px;">
      <span style="background:#10b981; color:#fff; font-weight:800; font-size:.85em; padding:4px 12px; border-radius:999px;">Station 3</span>
      <h3 style="margin:0; font-size:1.05em; font-weight:700; color:#047857;">Reference Wiring — Connect Resources Together</h3>
    </div>
    <p style="font-size:.85em; color:#4b5563; line-height:1.6; margin:0 0 12px;">
      Wire <code>Reference()</code> and <code>canonical</code> links between your resources to form a connected graph. The key connections are:
    </p>
    <table style="font-size:.82em; width:100%; border-collapse:collapse; background:#fff; border-radius:6px; overflow:hidden; border:1px solid #e5e7eb;">
      <tr style="border-bottom:1px solid #e5e7eb; background:#f0fdf4;">
        <th style="padding:8px 12px; text-align:left; color:#065f46;">From</th>
        <th style="padding:8px 12px; text-align:left; color:#065f46;">Link Element</th>
        <th style="padding:8px 12px; text-align:left; color:#065f46;">To</th>
      </tr>
      <tr style="border-bottom:1px solid #e5e7eb;">
        <td style="padding:8px 12px; font-weight:600;">DiagnosticReport</td>
        <td style="padding:8px 12px;"><code>triggeredBy</code></td>
        <td style="padding:8px 12px;">PlanDefinition (the study protocol)</td>
      </tr>
      <tr style="border-bottom:1px solid #e5e7eb;">
        <td style="padding:8px 12px; font-weight:600;">DiagnosticReport</td>
        <td style="padding:8px 12px;"><code>result[]</code></td>
        <td style="padding:8px 12px;">Observation (parent results per time-point)</td>
      </tr>
      <tr style="border-bottom:1px solid #e5e7eb;">
        <td style="padding:8px 12px; font-weight:600;">DiagnosticReport</td>
        <td style="padding:8px 12px;"><code>performer</code></td>
        <td style="padding:8px 12px;">Organization (testing laboratory)</td>
      </tr>
      <tr style="border-bottom:1px solid #e5e7eb;">
        <td style="padding:8px 12px; font-weight:600;">PlanDefinition</td>
        <td style="padding:8px 12px;"><code>action.definitionCanonical</code></td>
        <td style="padding:8px 12px;">ActivityDefinition (test activity at each time-point)</td>
      </tr>
      <tr style="border-bottom:1px solid #e5e7eb;">
        <td style="padding:8px 12px; font-weight:600;">ActivityDefinition</td>
        <td style="padding:8px 12px;"><code>observationRequirement</code></td>
        <td style="padding:8px 12px;">ObservationDefinition (test battery X, Y, Z)</td>
      </tr>
      <tr style="border-bottom:1px solid #e5e7eb;">
        <td style="padding:8px 12px; font-weight:600;">Observation (parent)</td>
        <td style="padding:8px 12px;"><code>hasMember[]</code></td>
        <td style="padding:8px 12px;">Observation (individual test results)</td>
      </tr>
      <tr>
        <td style="padding:8px 12px; font-weight:600;">Observation</td>
        <td style="padding:8px 12px;"><code>specimen</code>, <code>subject</code></td>
        <td style="padding:8px 12px;">Specimen, Medication (batch info)</td>
      </tr>
    </table>
  </div>

  <!-- Station 4 -->
  <div style="background:#fffbeb; border:1px solid #fde68a; border-left:4px solid #f59e0b; border-radius:10px; padding:20px 24px; margin-bottom:16px;">
    <div style="display:flex; align-items:center; gap:12px; margin-bottom:12px;">
      <span style="background:#f59e0b; color:#000; font-weight:800; font-size:.85em; padding:4px 12px; border-radius:999px;">Station 4</span>
      <h3 style="margin:0; font-size:1.05em; font-weight:700; color:#92400e;">Bundle Assembly — Package the Resources</h3>
    </div>
    <p style="font-size:.85em; color:#4b5563; line-height:1.6; margin:0 0 12px;">
      Assemble all wired resources into a single <code>Bundle</code> of type <code>collection</code>, conforming to the <a href="StructureDefinition-Bundle-drug-stability-pq.html">BundleDrugStabilityPq</a> profile. The profile requires <strong>at least 12 entries</strong> across 13 named slices:
    </p>
    <div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:12px;">
      <span style="background:#fef3c7; color:#92400e; font-size:.75em; font-weight:600; padding:4px 10px; border-radius:4px;">Report (1..*)</span>
      <span style="background:#fef3c7; color:#92400e; font-size:.75em; font-weight:600; padding:4px 10px; border-radius:4px;">Protocol (1..1)</span>
      <span style="background:#fef3c7; color:#92400e; font-size:.75em; font-weight:600; padding:4px 10px; border-radius:4px;">Test-Set (1..*)</span>
      <span style="background:#fef3c7; color:#92400e; font-size:.75em; font-weight:600; padding:4px 10px; border-radius:4px;">Test-Method (1..*)</span>
      <span style="background:#fef3c7; color:#92400e; font-size:.75em; font-weight:600; padding:4px 10px; border-radius:4px;">Result-Observations (1..*)</span>
      <span style="background:#fef3c7; color:#92400e; font-size:.75em; font-weight:600; padding:4px 10px; border-radius:4px;">Specimen-Definition (1..*)</span>
      <span style="background:#fef3c7; color:#92400e; font-size:.75em; font-weight:600; padding:4px 10px; border-radius:4px;">Actual-Batch-Substance (1..*)</span>
      <span style="background:#fef3c7; color:#92400e; font-size:.75em; font-weight:600; padding:4px 10px; border-radius:4px;">Actual-Batch-Specimen (1..*)</span>
      <span style="background:#fef3c7; color:#92400e; font-size:.75em; font-weight:600; padding:4px 10px; border-radius:4px;">Component-Substance (1..*)</span>
      <span style="background:#fef3c7; color:#92400e; font-size:.75em; font-weight:600; padding:4px 10px; border-radius:4px;">Organization (1..*)</span>
      <span style="background:#fff7ed; color:#9a3412; font-size:.75em; font-weight:500; padding:4px 10px; border-radius:4px; border:1px dashed #fdba74;">Product-Identification (0..1)</span>
      <span style="background:#fff7ed; color:#9a3412; font-size:.75em; font-weight:500; padding:4px 10px; border-radius:4px; border:1px dashed #fdba74;">Drug-Ingredient (0..*)</span>
      <span style="background:#fff7ed; color:#9a3412; font-size:.75em; font-weight:500; padding:4px 10px; border-radius:4px; border:1px dashed #fdba74;">Batch-Lot-Information (0..*)</span>
    </div>
    <p style="font-size:.82em; color:#6b7280; margin:0;">
      Each entry must include a <code>fullUrl</code> and a <code>resource</code>. Validate with <code>sushi .</code> and confirm <strong>0 errors</strong> before proceeding.
    </p>
  </div>

  <!-- Station 5 -->
  <div style="background:#faf5ff; border:1px solid #e9d5ff; border-left:4px solid #a855f7; border-radius:10px; padding:20px 24px; margin-bottom:16px;">
    <div style="display:flex; align-items:center; gap:12px; margin-bottom:12px;">
      <span style="background:#a855f7; color:#fff; font-weight:800; font-size:.85em; padding:4px 12px; border-radius:999px;">Station 5</span>
      <h3 style="margin:0; font-size:1.05em; font-weight:700; color:#7c3aed;">Delivery — Ship to Consumers</h3>
    </div>
    <p style="font-size:.85em; color:#4b5563; line-height:1.6; margin:0 0 12px;">
      Your validated Bundle is now ready for downstream consumption. Common delivery targets include:
    </p>
    <table style="font-size:.82em; width:100%; border-collapse:collapse; background:#fff; border-radius:6px; overflow:hidden; border:1px solid #e5e7eb;">
      <tr style="border-bottom:1px solid #e5e7eb;">
        <td style="padding:8px 12px; font-weight:600; color:#7c3aed; width:30%;">HTML Showcase</td>
        <td style="padding:8px 12px; color:#4b5563;">Transform the Bundle JSON/XML into a human-readable stability report with trend charts, protocol matrices, and results tables — <a href="pqi-module3-showcase/stability-product.html">see live example</a>.</td>
      </tr>
      <tr>
        <td style="padding:8px 12px; font-weight:600; color:#7c3aed;">FHIR R5 API</td>
        <td style="padding:8px 12px; color:#4b5563;">POST the Bundle to a FHIR server for regulatory submission, cross-study aggregation, or integration with downstream analytical systems.</td>
      </tr>
    </table>
  </div>
</div>

<hr style="border:none; border-top:1px solid #e5e7eb; margin:0 0 32px;"/>

<!-- DRUG PRODUCT SECTION -->
<div style="margin-bottom:48px;">
  <h2 style="font-size:1.4em; font-weight:800; color:#111827; margin-bottom:16px;">Drug Product Stability (3.2.P.8)</h2>
  
  <div style="display:grid; grid-template-columns:1fr 1fr; gap:24px;">
    
    <!-- Left Column: Architecture -->
    <div style="background:#fff; border:1px solid #e5e7eb; border-radius:10px; padding:24px;">
      <h3 style="font-size:1.1em; font-weight:700; color:#111827; margin-bottom:16px; margin-top:0;">Resource Architecture</h3>
      <img src="stability_FHIR_resources.png" style="width:100%; border-radius:6px; margin-bottom:16px; border:1px solid #e5e7eb;" alt="Product Stability Architecture"/>
      
      <div style="overflow-x:auto;">
        <table style="font-size:.85em; width:100%; border-collapse:collapse;">
          <tr style="border-bottom:1px solid #e5e7eb;">
            <td style="padding:8px 4px; font-weight:600; color:#2563eb;">DiagnosticReport</td>
            <td style="padding:8px 4px; color:#4b5563;">Contains all results as a group and captures overall conclusions.</td>
          </tr>
          <tr style="border-bottom:1px solid #e5e7eb;">
            <td style="padding:8px 4px; font-weight:600; color:#2563eb;">PlanDefinition</td>
            <td style="padding:8px 4px; color:#4b5563;">Describes the stability study protocol design and conditions.</td>
          </tr>
          <tr style="border-bottom:1px solid #e5e7eb;">
            <td style="padding:8px 4px; font-weight:600; color:#2563eb;">ObservationDefinition</td>
            <td style="padding:8px 4px; color:#4b5563;">Defines individual test methods and acceptance criteria.</td>
          </tr>
          <tr style="border-bottom:1px solid #e5e7eb;">
            <td style="padding:8px 4px; font-weight:600; color:#2563eb;">Observation</td>
            <td style="padding:8px 4px; color:#4b5563;">Captures the specific test results at given timepoints.</td>
          </tr>
          <tr>
            <td style="padding:8px 4px; font-weight:600; color:#2563eb;">MedicinalProductDefinition</td>
            <td style="padding:8px 4px; color:#4b5563;">The drug product (e.g., Stelbat tablets, 20mg).</td>
          </tr>
        </table>
      </div>
    </div>
    
    <!-- Right Column: Interactive Showcase & Examples -->
    <div style="display:flex; flex-direction:column; gap:16px;">
      
      <!-- Feature Card: HTML Showcase -->
      <div style="background:linear-gradient(135deg,#eff6ff,#f0fdf4); border:1px solid #bfdbfe; border-radius:10px; padding:24px; position:relative; overflow:hidden;">
        <div style="font-size:2em; margin-bottom:12px;">📈</div>
        <h3 style="font-size:1.15em; font-weight:800; color:#1e40af; margin-bottom:8px; margin-top:0;">Interactive Showcase</h3>
        <p style="font-size:.85em; color:#1e3a8a; line-height:1.6; margin-bottom:16px;">
          Experience how computable FHIR quality data can be dynamically rendered into premium, human-readable stability reports with trend visualizations and protocol matrices.
        </p>
        <a href="pqi-module3-showcase/stability-product.html" target="_blank" style="display:inline-block; background:#2563eb; color:#fff; padding:10px 20px; border-radius:6px; font-weight:600; font-size:.9em; text-decoration:none;">View Product Showcase &rarr;</a>
      </div>

      <!-- Card: Raw Data Examples -->
      <div style="background:#fff; border:1px solid #e5e7eb; border-radius:10px; padding:20px;">
        <h3 style="font-size:1em; font-weight:700; color:#111827; margin-bottom:12px; margin-top:0;">Technical Artifacts</h3>
        
        <div style="margin-bottom:12px;">
          <div style="font-size:.75em; font-weight:700; text-transform:uppercase; color:#6b7280; margin-bottom:6px;">FHIR Bundles</div>
          <a href="Bundle-bundle-drug-stability-pq-ex1-prod.html" style="display:inline-block; background:#f3f4f6; color:#374151; font-size:.8em; padding:4px 10px; border-radius:4px; text-decoration:none; margin-right:6px; margin-bottom:6px;">XML Instance</a>
          <a href="Bundle-bundle-drug-stability-pq-ex1-prod.html" style="display:inline-block; background:#f3f4f6; color:#374151; font-size:.8em; padding:4px 10px; border-radius:4px; text-decoration:none;">JSON Instance</a>
        </div>
        
        <div>
          <div style="font-size:.75em; font-weight:700; text-transform:uppercase; color:#6b7280; margin-bottom:6px;">Source Data (CTD PDF)</div>
          <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.P.8.1_Stability_Summary_and_Conclusions.pdf" style="display:block; color:#2563eb; font-size:.85em; text-decoration:none; margin-bottom:4px;">📄 3.2.P.8.1 Summary & Conclusions</a>
          <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.P.8.3_Stability_Data.pdf" style="display:block; color:#2563eb; font-size:.85em; text-decoration:none;">📄 3.2.P.8.3 Stability Data</a>
        </div>
      </div>
      
    </div>
  </div>
</div>

<hr style="border:none; border-top:1px solid #e5e7eb; margin:0 0 32px;"/>

<!-- DRUG SUBSTANCE SECTION -->
<div style="margin-bottom:48px;">
  <h2 style="font-size:1.4em; font-weight:800; color:#111827; margin-bottom:16px;">Drug Substance Stability (3.2.S.7)</h2>
  
  <div style="display:grid; grid-template-columns:1fr 1fr; gap:24px;">
    
    <!-- Left Column: Architecture -->
    <div style="background:#fff; border:1px solid #e5e7eb; border-radius:10px; padding:24px;">
      <h3 style="font-size:1.1em; font-weight:700; color:#111827; margin-bottom:16px; margin-top:0;">Resource Architecture</h3>
      <img src="stability_substance_FHIR_resources.png" style="width:100%; border-radius:6px; margin-bottom:16px; border:1px solid #e5e7eb;" alt="Substance Stability Architecture"/>
      
      <div style="overflow-x:auto;">
        <table style="font-size:.85em; width:100%; border-collapse:collapse;">
          <tr style="border-bottom:1px solid #e5e7eb;">
            <td style="padding:8px 4px; font-weight:600; color:#10b981;">DiagnosticReport</td>
            <td style="padding:8px 4px; color:#4b5563;">Contains all results as a group and captures overall conclusions.</td>
          </tr>
          <tr style="border-bottom:1px solid #e5e7eb;">
            <td style="padding:8px 4px; font-weight:600; color:#10b981;">SpecificationDefinition</td>
            <td style="padding:8px 4px; color:#4b5563;">Describes the storage conditions and duration for each test.</td>
          </tr>
          <tr style="border-bottom:1px solid #e5e7eb;">
            <td style="padding:8px 4px; font-weight:600; color:#10b981;">ObservationDefinition</td>
            <td style="padding:8px 4px; color:#4b5563;">Defines individual test methods and acceptance criteria.</td>
          </tr>
          <tr style="border-bottom:1px solid #e5e7eb;">
            <td style="padding:8px 4px; font-weight:600; color:#10b981;">Observation</td>
            <td style="padding:8px 4px; color:#4b5563;">Captures the specific test results at given timepoints.</td>
          </tr>
          <tr>
            <td style="padding:8px 4px; font-weight:600; color:#10b981;">SubstanceDefinition</td>
            <td style="padding:8px 4px; color:#4b5563;">The substance being tested.</td>
          </tr>
        </table>
      </div>
    </div>
    
    <!-- Right Column: Interactive Showcase & Examples -->
    <div style="display:flex; flex-direction:column; gap:16px;">
      
      <!-- Feature Card: HTML Showcase -->
      <div style="background:linear-gradient(135deg,#ecfdf5,#f0fdf4); border:1px solid #a7f3d0; border-radius:10px; padding:24px; position:relative; overflow:hidden;">
        <div style="font-size:2em; margin-bottom:12px;">🧪</div>
        <h3 style="font-size:1.15em; font-weight:800; color:#065f46; margin-bottom:8px; margin-top:0;">Interactive Showcase</h3>
        <p style="font-size:.85em; color:#064e3b; line-height:1.6; margin-bottom:16px;">
          View the high-fidelity presentation of Drug Substance stability testing, featuring animated impurity trend charts and automated limits validation.
        </p>
        <a href="pqi-module3-showcase/stability-substance.html" target="_blank" style="display:inline-block; background:#10b981; color:#fff; padding:10px 20px; border-radius:6px; font-weight:600; font-size:.9em; text-decoration:none;">View Substance Showcase &rarr;</a>
      </div>

      <!-- Card: Raw Data Examples -->
      <div style="background:#fff; border:1px solid #e5e7eb; border-radius:10px; padding:20px;">
        <h3 style="font-size:1em; font-weight:700; color:#111827; margin-bottom:12px; margin-top:0;">Technical Artifacts</h3>
        
        <div style="margin-bottom:12px;">
          <div style="font-size:.75em; font-weight:700; text-transform:uppercase; color:#6b7280; margin-bottom:6px;">FHIR Bundles</div>
          <a href="Bundle-bundle-drug-stability-pq-ex2-sub.html" style="display:inline-block; background:#f3f4f6; color:#374151; font-size:.8em; padding:4px 10px; border-radius:4px; text-decoration:none; margin-right:6px; margin-bottom:6px;">XML Instance</a>
          <a href="Bundle-bundle-drug-stability-pq-ex2-sub.html" style="display:inline-block; background:#f3f4f6; color:#374151; font-size:.8em; padding:4px 10px; border-radius:4px; text-decoration:none;">JSON Instance</a>
        </div>
        
        <div>
          <div style="font-size:.75em; font-weight:700; text-transform:uppercase; color:#6b7280; margin-bottom:6px;">Source Data (CTD PDF)</div>
          <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.S.7.1_Stability_Summary_and_Conclusions.pdf" style="display:block; color:#10b981; font-size:.85em; text-decoration:none; margin-bottom:4px;">📄 3.2.S.7.1 Summary & Conclusions</a>
          <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.S.7.3_Stability_Data.pdf" style="display:block; color:#10b981; font-size:.85em; text-decoration:none;">📄 3.2.S.7.3 Stability Data</a>
        </div>
      </div>
      
    </div>
  </div>
</div>

<hr style="border:none; border-top:1px solid #e5e7eb; margin:0 0 32px;"/>

### Profiles 
See [Artifacts Index: Domain Bundle Profiles](artifacts.html#domain-bundle-profiles)
