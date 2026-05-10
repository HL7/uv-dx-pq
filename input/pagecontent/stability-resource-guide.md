<!-- DOMAIN HEADER -->
<div style="margin-bottom:32px;">
  <div style="font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#2563eb; margin-bottom:4px;">Domain 12 • Station 2</div>
  <h2 style="font-size:1.7em; font-weight:800; color:#111827; margin-bottom:10px; margin-top:0;">Resource Fabrication Guide</h2>
  <p style="font-size:.95em; color:#6b7280; line-height:1.6; max-width:800px;">
    This guide details how to map source data from your LIMS, QMS, and ERP systems into the core FHIR resources required for the Stability Study Bundle. 
    Follow these recipes to ensure your instances pass profile validation.
  </p>
  <a href="stability.html" style="display:inline-flex; align-items:center; gap:6px; margin-top:8px; font-size:.85em; font-weight:600; color:#2563eb; text-decoration:none; background:#eff6ff; padding:6px 12px; border-radius:6px;">&larr; Back to Pipeline Overview</a>
</div>

<hr style="border:none; border-top:1px solid #e5e7eb; margin:0 0 32px;"/>

<div style="display:flex; flex-direction:column; gap:32px; margin-bottom:48px;">

  <!-- SECTION 1: Master Data & Entities -->
  <div>
    <h3 style="font-size:1.25em; font-weight:800; color:#111827; margin-bottom:16px; border-bottom:2px solid #e5e7eb; padding-bottom:8px;">1. Master Data & Entities</h3>
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(340px, 1fr)); gap:20px;">
      
      <!-- Organization -->
      <div style="background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden; box-shadow:0 2px 4px rgba(0,0,0,0.02);">
        <div style="background:#f8fafc; border-bottom:1px solid #e5e7eb; padding:12px 16px;">
          <h4 style="margin:0; font-size:1.05em; font-weight:700; color:#0f172a;">Organization</h4>
          <div style="font-size:.75em; color:#64748b; margin-top:4px; font-family:monospace;">Testing Lab & Manufacturer</div>
        </div>
        <div style="padding:16px;">
          <div style="margin-bottom:12px; font-size:.85em;">
            <span style="font-weight:600; color:#334155;">Purpose:</span> <span style="color:#475569;">Identifies entities responsible for manufacturing and testing.</span><br/>
            <span style="font-weight:600; color:#334155;">Source:</span> <span style="color:#059669; font-weight:600; background:#d1fae5; padding:2px 6px; border-radius:4px; font-size:.9em;">ERP / MDM</span>
          </div>
          <table style="font-size:.8em; width:100%; border-collapse:collapse; background:#f8fafc; border:1px solid #e2e8f0; border-radius:4px;">
            <tr style="border-bottom:1px solid #e2e8f0; background:#f1f5f9;"><th style="padding:6px 8px; text-align:left; color:#334155;">Field</th><th style="padding:6px 8px; text-align:left; color:#334155;">Example FSH Mapping</th></tr>
            <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:6px 8px; font-family:monospace; color:#2563eb;">identifier</td><td style="padding:6px 8px; color:#475569;"><code>* identifier.value = "3003040516"</code></td></tr>
            <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:6px 8px; font-family:monospace; color:#2563eb;">type</td><td style="padding:6px 8px; color:#475569;"><code>* type = $pharm-org-type#drug-substance-manufacture</code></td></tr>
            <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:6px 8px; font-family:monospace; color:#2563eb;">name</td><td style="padding:6px 8px; color:#475569;"><code>* name = "AAA Molybdenum Products, Inc."</code></td></tr>
            <tr><td style="padding:6px 8px; font-family:monospace; color:#2563eb;">contact.address</td><td style="padding:6px 8px; color:#475569;"><code>* contact.address.city = "Broomfield"</code></td></tr>
          </table>
        </div>
      </div>

      <!-- Substance / Medication -->
      <div style="background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden; box-shadow:0 2px 4px rgba(0,0,0,0.02);">
        <div style="background:#f8fafc; border-bottom:1px solid #e5e7eb; padding:12px 16px;">
          <h4 style="margin:0; font-size:1.05em; font-weight:700; color:#0f172a;">Substance / Medication</h4>
          <div style="font-size:.75em; color:#64748b; margin-top:4px; font-family:monospace;">Batch Information</div>
        </div>
        <div style="padding:16px;">
          <div style="margin-bottom:12px; font-size:.85em;">
            <span style="font-weight:600; color:#334155;">Purpose:</span> <span style="color:#475569;">Identifies the specific manufactured batch being tested.</span><br/>
            <span style="font-weight:600; color:#334155;">Source:</span> <span style="color:#059669; font-weight:600; background:#d1fae5; padding:2px 6px; border-radius:4px; font-size:.9em;">ERP / MES</span>
          </div>
          <table style="font-size:.8em; width:100%; border-collapse:collapse; background:#f8fafc; border:1px solid #e2e8f0; border-radius:4px;">
            <tr style="border-bottom:1px solid #e2e8f0; background:#f1f5f9;"><th style="padding:6px 8px; text-align:left; color:#334155;">Field</th><th style="padding:6px 8px; text-align:left; color:#334155;">Example FSH Mapping</th></tr>
            <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:6px 8px; font-family:monospace; color:#2563eb;">code</td><td style="padding:6px 8px; color:#475569;"><code>* code.extension.valueReference = Reference(...)</code></td></tr>
            <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:6px 8px; font-family:monospace; color:#2563eb;">batch.lotNumber</td><td style="padding:6px 8px; color:#475569;"><code>* batch.lotNumber = "33445"</code></td></tr>
            <tr><td style="padding:6px 8px; font-family:monospace; color:#2563eb;">batch.extension</td><td style="padding:6px 8px; color:#475569;"><code>* batch.extension[...url="manufacturingDate"].valueDateTime = "2020-06"</code></td></tr>
          </table>
        </div>
      </div>

    </div>
  </div>

  <!-- SECTION 2: Study Protocol & Setup -->
  <div>
    <h3 style="font-size:1.25em; font-weight:800; color:#111827; margin-bottom:16px; border-bottom:2px solid #e5e7eb; padding-bottom:8px;">2. Study Protocol & Setup</h3>
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(340px, 1fr)); gap:20px;">
      
      <!-- PlanDefinition -->
      <div style="background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden; box-shadow:0 2px 4px rgba(0,0,0,0.02);">
        <div style="background:#f0fdf4; border-bottom:1px solid #bbf7d0; padding:12px 16px;">
          <h4 style="margin:0; font-size:1.05em; font-weight:700; color:#166534;">PlanDefinition</h4>
          <div style="font-size:.75em; color:#15803d; margin-top:4px; font-family:monospace;">Study Protocol</div>
        </div>
        <div style="padding:16px;">
          <div style="margin-bottom:12px; font-size:.85em;">
            <span style="font-weight:600; color:#334155;">Purpose:</span> <span style="color:#475569;">Overarching stability study design, grouping all activities.</span><br/>
            <span style="font-weight:600; color:#334155;">Source:</span> <span style="color:#1d4ed8; font-weight:600; background:#dbeafe; padding:2px 6px; border-radius:4px; font-size:.9em;">QMS Protocol</span>
          </div>
          <table style="font-size:.8em; width:100%; border-collapse:collapse; background:#f8fafc; border:1px solid #e2e8f0; border-radius:4px;">
            <tr style="border-bottom:1px solid #e2e8f0; background:#f1f5f9;"><th style="padding:6px 8px; text-align:left; color:#334155;">Field</th><th style="padding:6px 8px; text-align:left; color:#334155;">Example FSH Mapping</th></tr>
            <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:6px 8px; font-family:monospace; color:#2563eb;">title</td><td style="padding:6px 8px; color:#475569;"><code>* title = "Stability Study Protocol for Stelbat"</code></td></tr>
            <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:6px 8px; font-family:monospace; color:#2563eb;">status</td><td style="padding:6px 8px; color:#475569;"><code>* status = #active</code></td></tr>
            <tr><td style="padding:6px 8px; font-family:monospace; color:#2563eb;">action</td><td style="padding:6px 8px; color:#475569;"><code>* action[0].definitionCanonical = Canonical(...)</code></td></tr>
          </table>
        </div>
      </div>

      <!-- ActivityDefinition -->
      <div style="background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden; box-shadow:0 2px 4px rgba(0,0,0,0.02);">
        <div style="background:#f0fdf4; border-bottom:1px solid #bbf7d0; padding:12px 16px;">
          <h4 style="margin:0; font-size:1.05em; font-weight:700; color:#166534;">ActivityDefinition</h4>
          <div style="font-size:.75em; color:#15803d; margin-top:4px; font-family:monospace;">Test Schedule</div>
        </div>
        <div style="padding:16px;">
          <div style="margin-bottom:12px; font-size:.85em;">
            <span style="font-weight:600; color:#334155;">Purpose:</span> <span style="color:#475569;">Defines *when* tests are performed (schedule time-points).</span><br/>
            <span style="font-weight:600; color:#334155;">Source:</span> <span style="color:#1d4ed8; font-weight:600; background:#dbeafe; padding:2px 6px; border-radius:4px; font-size:.9em;">QMS Protocol</span>
          </div>
          <table style="font-size:.8em; width:100%; border-collapse:collapse; background:#f8fafc; border:1px solid #e2e8f0; border-radius:4px;">
            <tr style="border-bottom:1px solid #e2e8f0; background:#f1f5f9;"><th style="padding:6px 8px; text-align:left; color:#334155;">Field</th><th style="padding:6px 8px; text-align:left; color:#334155;">Example FSH Mapping</th></tr>
            <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:6px 8px; font-family:monospace; color:#2563eb;">timingTiming</td><td style="padding:6px 8px; color:#475569;"><code>* timingTiming.event = "2021-03-01"</code></td></tr>
            <tr><td style="padding:6px 8px; font-family:monospace; color:#2563eb;">observationRequirement</td><td style="padding:6px 8px; color:#475569;"><code>* observationRequirement = Reference(ObsDef)</code></td></tr>
          </table>
        </div>
      </div>

      <!-- ObservationDefinition -->
      <div style="background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden; box-shadow:0 2px 4px rgba(0,0,0,0.02);">
        <div style="background:#f0fdf4; border-bottom:1px solid #bbf7d0; padding:12px 16px;">
          <h4 style="margin:0; font-size:1.05em; font-weight:700; color:#166534;">ObservationDefinition</h4>
          <div style="font-size:.75em; color:#15803d; margin-top:4px; font-family:monospace;">Test Methods & Limits</div>
        </div>
        <div style="padding:16px;">
          <div style="margin-bottom:12px; font-size:.85em;">
            <span style="font-weight:600; color:#334155;">Purpose:</span> <span style="color:#475569;">Defines the assay, test method, and acceptance criteria limits.</span><br/>
            <span style="font-weight:600; color:#334155;">Source:</span> <span style="color:#7c3aed; font-weight:600; background:#f3e8ff; padding:2px 6px; border-radius:4px; font-size:.9em;">LIMS / QMS</span>
          </div>
          <table style="font-size:.8em; width:100%; border-collapse:collapse; background:#f8fafc; border:1px solid #e2e8f0; border-radius:4px;">
            <tr style="border-bottom:1px solid #e2e8f0; background:#f1f5f9;"><th style="padding:6px 8px; text-align:left; color:#334155;">Field</th><th style="padding:6px 8px; text-align:left; color:#334155;">Example FSH Mapping</th></tr>
            <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:6px 8px; font-family:monospace; color:#2563eb;">code</td><td style="padding:6px 8px; color:#475569;"><code>* code = $loinc#3142-7</code></td></tr>
            <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:6px 8px; font-family:monospace; color:#2563eb;">method</td><td style="padding:6px 8px; color:#475569;"><code>* method.text = "Karl Fischer Titration"</code></td></tr>
            <tr><td style="padding:6px 8px; font-family:monospace; color:#2563eb;">qualifiedInterval</td><td style="padding:6px 8px; color:#475569;"><code>* qualifiedInterval.range.high = 2.0 '%'</code></td></tr>
          </table>
        </div>
      </div>

      <!-- SpecimenDefinition -->
      <div style="background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden; box-shadow:0 2px 4px rgba(0,0,0,0.02);">
        <div style="background:#f0fdf4; border-bottom:1px solid #bbf7d0; padding:12px 16px;">
          <h4 style="margin:0; font-size:1.05em; font-weight:700; color:#166534;">SpecimenDefinition</h4>
          <div style="font-size:.75em; color:#15803d; margin-top:4px; font-family:monospace;">Storage Conditions</div>
        </div>
        <div style="padding:16px;">
          <div style="margin-bottom:12px; font-size:.85em;">
            <span style="font-weight:600; color:#334155;">Purpose:</span> <span style="color:#475569;">Defines environmental conditions for sample storage.</span><br/>
            <span style="font-weight:600; color:#334155;">Source:</span> <span style="color:#1d4ed8; font-weight:600; background:#dbeafe; padding:2px 6px; border-radius:4px; font-size:.9em;">QMS Protocol</span>
          </div>
          <table style="font-size:.8em; width:100%; border-collapse:collapse; background:#f8fafc; border:1px solid #e2e8f0; border-radius:4px;">
            <tr style="border-bottom:1px solid #e2e8f0; background:#f1f5f9;"><th style="padding:6px 8px; text-align:left; color:#334155;">Field</th><th style="padding:6px 8px; text-align:left; color:#334155;">Example FSH Mapping</th></tr>
            <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:6px 8px; font-family:monospace; color:#2563eb;">typeTested.preference</td><td style="padding:6px 8px; color:#475569;"><code>* typeTested.preference = #preferred</code></td></tr>
            <tr><td style="padding:6px 8px; font-family:monospace; color:#2563eb;">typeTested.handling</td><td style="padding:6px 8px; color:#475569;"><code>* typeTested.handling.instruction = "25°C/60% RH"</code></td></tr>
          </table>
        </div>
      </div>

    </div>
  </div>

  <!-- SECTION 3: Execution & Results -->
  <div>
    <h3 style="font-size:1.25em; font-weight:800; color:#111827; margin-bottom:16px; border-bottom:2px solid #e5e7eb; padding-bottom:8px;">3. Execution & Results</h3>
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(340px, 1fr)); gap:20px;">
      
      <!-- Specimen -->
      <div style="background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden; box-shadow:0 2px 4px rgba(0,0,0,0.02);">
        <div style="background:#eff6ff; border-bottom:1px solid #bfdbfe; padding:12px 16px;">
          <h4 style="margin:0; font-size:1.05em; font-weight:700; color:#1d4ed8;">Specimen</h4>
          <div style="font-size:.75em; color:#2563eb; margin-top:4px; font-family:monospace;">Actual Samples</div>
        </div>
        <div style="padding:16px;">
          <div style="margin-bottom:12px; font-size:.85em;">
            <span style="font-weight:600; color:#334155;">Purpose:</span> <span style="color:#475569;">Represents physical samples pulled and placed in storage.</span><br/>
            <span style="font-weight:600; color:#334155;">Source:</span> <span style="color:#7c3aed; font-weight:600; background:#f3e8ff; padding:2px 6px; border-radius:4px; font-size:.9em;">LIMS</span>
          </div>
          <table style="font-size:.8em; width:100%; border-collapse:collapse; background:#f8fafc; border:1px solid #e2e8f0; border-radius:4px;">
            <tr style="border-bottom:1px solid #e2e8f0; background:#f1f5f9;"><th style="padding:6px 8px; text-align:left; color:#334155;">Field</th><th style="padding:6px 8px; text-align:left; color:#334155;">Example FSH Mapping</th></tr>
            <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:6px 8px; font-family:monospace; color:#2563eb;">collection</td><td style="padding:6px 8px; color:#475569;"><code>* collection.collectedDateTime = "2020-12-01"</code></td></tr>
            <tr><td style="padding:6px 8px; font-family:monospace; color:#2563eb;">processing.description</td><td style="padding:6px 8px; color:#475569;"><code>* processing[1].description = "25°C/60% RH"</code></td></tr>
          </table>
        </div>
      </div>

      <!-- Observation -->
      <div style="background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden; box-shadow:0 2px 4px rgba(0,0,0,0.02);">
        <div style="background:#eff6ff; border-bottom:1px solid #bfdbfe; padding:12px 16px;">
          <h4 style="margin:0; font-size:1.05em; font-weight:700; color:#1d4ed8;">Observation</h4>
          <div style="font-size:.75em; color:#2563eb; margin-top:4px; font-family:monospace;">Test Results</div>
        </div>
        <div style="padding:16px;">
          <div style="margin-bottom:12px; font-size:.85em;">
            <span style="font-weight:600; color:#334155;">Purpose:</span> <span style="color:#475569;">The actual results generated by the lab at a specific time-point.</span><br/>
            <span style="font-weight:600; color:#334155;">Source:</span> <span style="color:#7c3aed; font-weight:600; background:#f3e8ff; padding:2px 6px; border-radius:4px; font-size:.9em;">LIMS</span>
          </div>
          <table style="font-size:.8em; width:100%; border-collapse:collapse; background:#f8fafc; border:1px solid #e2e8f0; border-radius:4px;">
            <tr style="border-bottom:1px solid #e2e8f0; background:#f1f5f9;"><th style="padding:6px 8px; text-align:left; color:#334155;">Field</th><th style="padding:6px 8px; text-align:left; color:#334155;">Example FSH Mapping</th></tr>
            <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:6px 8px; font-family:monospace; color:#2563eb;">status</td><td style="padding:6px 8px; color:#475569;"><code>* status = #final</code></td></tr>
            <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:6px 8px; font-family:monospace; color:#2563eb;">value[x]</td><td style="padding:6px 8px; color:#475569;"><code>* valueQuantity = 1.5 '%'</code></td></tr>
            <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:6px 8px; font-family:monospace; color:#2563eb;">hasMember</td><td style="padding:6px 8px; color:#475569;"><code>* hasMember[0] = Reference(...)</code></td></tr>
            <tr><td style="padding:6px 8px; font-family:monospace; color:#2563eb;">specimen / subject</td><td style="padding:6px 8px; color:#475569;"><code>* specimen = Reference(Specimen)</code></td></tr>
          </table>
        </div>
      </div>

      <!-- DiagnosticReport -->
      <div style="background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden; box-shadow:0 2px 4px rgba(0,0,0,0.02);">
        <div style="background:#eff6ff; border-bottom:1px solid #bfdbfe; padding:12px 16px;">
          <h4 style="margin:0; font-size:1.05em; font-weight:700; color:#1d4ed8;">DiagnosticReport</h4>
          <div style="font-size:.75em; color:#2563eb; margin-top:4px; font-family:monospace;">Final Report</div>
        </div>
        <div style="padding:16px;">
          <div style="margin-bottom:12px; font-size:.85em;">
            <span style="font-weight:600; color:#334155;">Purpose:</span> <span style="color:#475569;">Packages all results, protocols, and conclusions into one report.</span><br/>
            <span style="font-weight:600; color:#334155;">Source:</span> <span style="color:#0f766e; font-weight:600; background:#ccfbf1; padding:2px 6px; border-radius:4px; font-size:.9em;">QMS / LIMS</span>
          </div>
          <table style="font-size:.8em; width:100%; border-collapse:collapse; background:#f8fafc; border:1px solid #e2e8f0; border-radius:4px;">
            <tr style="border-bottom:1px solid #e2e8f0; background:#f1f5f9;"><th style="padding:6px 8px; text-align:left; color:#334155;">Field</th><th style="padding:6px 8px; text-align:left; color:#334155;">Example FSH Mapping</th></tr>
            <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:6px 8px; font-family:monospace; color:#2563eb;">status</td><td style="padding:6px 8px; color:#475569;"><code>* status = #final</code></td></tr>
            <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:6px 8px; font-family:monospace; color:#2563eb;">basedOn</td><td style="padding:6px 8px; color:#475569;"><code>* basedOn = Reference(PlanDef)</code></td></tr>
            <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:6px 8px; font-family:monospace; color:#2563eb;">result</td><td style="padding:6px 8px; color:#475569;"><code>* result[0] = Reference(Obs)</code></td></tr>
            <tr><td style="padding:6px 8px; font-family:monospace; color:#2563eb;">conclusion</td><td style="padding:6px 8px; color:#475569;"><code>* conclusion = "Complies..."</code></td></tr>
          </table>
        </div>
      </div>

    </div>
  </div>

</div>
