<!-- DOMAIN HEADER -->
<div style="margin-bottom:32px;">
  <div style="font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#2563eb; margin-bottom:4px;">Domain 12</div>
  <h2 style="font-size:1.7em; font-weight:800; color:#111827; margin-bottom:10px; margin-top:0;">Stability Study</h2>
  <p style="font-size:.95em; color:#6b7280; line-height:1.6; max-width:640px;">
    Stability studies are critical for establishing the shelf-life and storage conditions of pharmaceutical products. This domain standardizes the exchange of stability study designs, conditions, batch testing results, degradation trends, and final conclusions using structured FHIR resources.
  </p>
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
