<div style="background:#eff6ff; border:1px solid #bfdbfe; border-left:4px solid #2563eb; border-radius:8px; padding:12px 18px; margin-bottom:24px; font-size:.85em; color:#1e40af; display:flex; gap:10px; align-items:flex-start;">
  <span style="flex-shrink:0;">📋</span>
  <span>This implementation guide defines resources to support many scenarios. The following use cases facilitate understanding of how to use and apply this guide. These examples assume the manufacturer owns or has access to a data repository housing test results structured per this IG.</span>
</div>

<h2 style="font-size:1.2em; font-weight:700; color:#111827; margin-bottom:16px;">Select a Use Case</h2>
<div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-bottom:36px;">
  <a href="#stability-new" style="text-decoration:none; background:#fff; border:1px solid #bfdbfe; border-left:4px solid #2563eb; border-radius:8px; padding:16px 20px; display:block;">
    <div style="font-weight:700; color:#111827; margin-bottom:4px;">🧪 Stability (New to 18 months)</div>
    <div style="font-size:.82em; color:#6b7280;">Create a new stability study with structured data for a proposed 18-month shelf-life.</div>
  </a>
  <a href="#stability-update" style="text-decoration:none; background:#fff; border:1px solid #bbf7d0; border-left:4px solid #10b981; border-radius:8px; padding:16px 20px; display:block;">
    <div style="font-weight:700; color:#111827; margin-bottom:4px;">🔄 Stability Update (18 to 24 months)</div>
    <div style="font-size:.82em; color:#6b7280;">Extend shelf-life from 18 to 24 months with updated stability data.</div>
  </a>
  <a href="#spec-change" style="text-decoration:none; background:#fff; border:1px solid #e9d5ff; border-left:4px solid #8b5cf6; border-radius:8px; padding:16px 20px; display:block;">
    <div style="font-weight:700; color:#111827; margin-bottom:4px;">📋 Test Specification Change</div>
    <div style="font-size:.82em; color:#6b7280;">Update a drug substance identity method and acceptance criteria.</div>
  </a>
  <a href="#facility-change" style="text-decoration:none; background:#fff; border:1px solid #fde68a; border-left:4px solid #d97706; border-radius:8px; padding:16px 20px; display:block;">
    <div style="font-weight:700; color:#111827; margin-bottom:4px;">🏭 Facility Change</div>
    <div style="font-size:.82em; color:#6b7280;">Document a change to a testing facility's address in the Organization resource.</div>
  </a>
</div>

<hr style="border:none; border-top:1px solid #e5e7eb; margin:0 0 32px;"/>

<!-- USE CASE 1: STABILITY NEW -->
<h2 id="stability-new" style="font-size:1.35em; font-weight:700; color:#111827; margin-bottom:20px;">Stability (New to 18 months)</h2>
<p style="color:#374151; font-size:.92em; line-height:1.7; margin-bottom:20px;">A sponsor plans to create a new stability study for a medicinal product with a proposed shelf-life of 18 months at 5 °C, with supporting stability data.</p>

<div style="display:flex; gap:16px; margin-bottom:20px; align-items:flex-start;">
  <div style="flex-shrink:0; width:36px; height:36px; border-radius:50%; background:#003087; color:#fff; display:flex; align-items:center; justify-content:center; font-size:.85em; font-weight:700; margin-top:2px;">1</div>
  <div style="flex:1; background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden;">
    <div style="padding:14px 20px 10px; border-bottom:1px solid #e5e7eb; background:#f9fafb;"><div style="font-weight:700; color:#111827; font-size:.97em;">Develop product details</div></div>
    <div style="padding:14px 20px;">
      <p style="font-size:.88em; color:#374151; line-height:1.7; margin:0;">Using the <a href="https://gsrs.ncats.nih.gov/ginas/app/beta/" style="color:#003087; font-weight:600;">G-SRS</a> as a reference, build SubstanceDefinition, Ingredient, MedicinalProductDefinition, and Medication resources. These form a reusable library that can be versioned and reused across use cases.</p>
    </div>
  </div>
</div>
<div style="display:flex; gap:16px; margin-bottom:20px; align-items:flex-start;">
  <div style="flex-shrink:0; width:36px; height:36px; border-radius:50%; background:#003087; color:#fff; display:flex; align-items:center; justify-content:center; font-size:.85em; font-weight:700; margin-top:2px;">2</div>
  <div style="flex:1; background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden;">
    <div style="padding:14px 20px 10px; border-bottom:1px solid #e5e7eb; background:#f9fafb;"><div style="font-weight:700; color:#111827; font-size:.97em;">Develop test details</div></div>
    <div style="padding:14px 20px;">
      <p style="font-size:.88em; color:#374151; line-height:1.7; margin:0;">Create a library of tests as ObservationDefinition resources (e.g., Identification, Assay by HPLC, Dissolution). Group all tests into an ActivityDefinition resource.</p>
    </div>
  </div>
</div>
<div style="display:flex; gap:16px; margin-bottom:20px; align-items:flex-start;">
  <div style="flex-shrink:0; width:36px; height:36px; border-radius:50%; background:#003087; color:#fff; display:flex; align-items:center; justify-content:center; font-size:.85em; font-weight:700; margin-top:2px;">3</div>
  <div style="flex:1; background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden;">
    <div style="padding:14px 20px 10px; border-bottom:1px solid #e5e7eb; background:#f9fafb;"><div style="font-weight:700; color:#111827; font-size:.97em;">Develop the stability study</div></div>
    <div style="padding:14px 20px;">
      <p style="font-size:.88em; color:#374151; line-height:1.7; margin:0;">Create a PlanDefinition resource to define study objective, time point description, and statistical model.</p>
    </div>
  </div>
</div>
<div style="display:flex; gap:16px; margin-bottom:20px; align-items:flex-start;">
  <div style="flex-shrink:0; width:36px; height:36px; border-radius:50%; background:#003087; color:#fff; display:flex; align-items:center; justify-content:center; font-size:.85em; font-weight:700; margin-top:2px;">4</div>
  <div style="flex:1; background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden;">
    <div style="padding:14px 20px 10px; border-bottom:1px solid #e5e7eb; background:#f9fafb;"><div style="font-weight:700; color:#111827; font-size:.97em;">Send stability study to testing lab</div></div>
    <div style="padding:14px 20px;">
      <p style="font-size:.88em; color:#374151; line-height:1.7; margin:0;">Bundle the stability study and send it to the testing lab via RESTful API. The lab receives, parses, and conducts the study.</p>
    </div>
  </div>
</div>
<div style="display:flex; gap:16px; margin-bottom:20px; align-items:flex-start;">
  <div style="flex-shrink:0; width:36px; height:36px; border-radius:50%; background:#003087; color:#fff; display:flex; align-items:center; justify-content:center; font-size:.85em; font-weight:700; margin-top:2px;">5</div>
  <div style="flex:1; background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden;">
    <div style="padding:14px 20px 10px; border-bottom:1px solid #e5e7eb; background:#f9fafb;"><div style="font-weight:700; color:#111827; font-size:.97em;">Return results to the sponsor</div></div>
    <div style="padding:14px 20px;">
      <p style="font-size:.88em; color:#374151; line-height:1.7; margin:0;">The lab creates Observation resources for each test result and a DiagnosticReport for conclusions. Results are bundled and returned via API.</p>
    </div>
  </div>
</div>
<div style="display:flex; gap:16px; margin-bottom:20px; align-items:flex-start;">
  <div style="flex-shrink:0; width:36px; height:36px; border-radius:50%; background:#003087; color:#fff; display:flex; align-items:center; justify-content:center; font-size:.85em; font-weight:700; margin-top:2px;">6</div>
  <div style="flex:1; background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden;">
    <div style="padding:14px 20px 10px; border-bottom:1px solid #e5e7eb; background:#f9fafb;"><div style="font-weight:700; color:#111827; font-size:.97em;">Receive results</div></div>
    <div style="padding:14px 20px;">
      <p style="font-size:.88em; color:#374151; line-height:1.7; margin:0;">The sponsor's system receives the Bundle via API, parses it, notifies personnel, and displays the results.</p>
    </div>
  </div>
</div>
<div style="display:flex; gap:16px; margin-bottom:28px; align-items:flex-start;">
  <div style="flex-shrink:0; width:36px; height:36px; border-radius:50%; background:#003087; color:#fff; display:flex; align-items:center; justify-content:center; font-size:.85em; font-weight:700; margin-top:2px;">7</div>
  <div style="flex:1; background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden;">
    <div style="padding:14px 20px 10px; border-bottom:1px solid #e5e7eb; background:#f9fafb;"><div style="font-weight:700; color:#111827; font-size:.97em;">Develop final study report</div></div>
    <div style="padding:14px 20px;">
      <p style="font-size:.88em; color:#374151; line-height:1.7; margin:0;">Create a final DiagnosticReport with conclusions. The complete stability study can be transformed into any output format acceptable to national regulators.</p>
    </div>
  </div>
</div>

<hr style="border:none; border-top:1px solid #e5e7eb; margin:28px 0;"/>

<!-- USE CASE 2: STABILITY UPDATE -->
<h2 id="stability-update" style="font-size:1.35em; font-weight:700; color:#111827; margin-bottom:20px;">Stability Update (18 to 24 months)</h2>
<p style="color:#374151; font-size:.92em; line-height:1.7; margin-bottom:20px;">A sponsor plans to update the shelf life from 18 months to 24 months at 5 °C, with supporting stability data.</p>

<div style="display:flex; gap:16px; margin-bottom:20px; align-items:flex-start;">
  <div style="flex-shrink:0; width:36px; height:36px; border-radius:50%; background:#10b981; color:#fff; display:flex; align-items:center; justify-content:center; font-size:.85em; font-weight:700; margin-top:2px;">1</div>
  <div style="flex:1; background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden;">
    <div style="padding:14px 20px 10px; border-bottom:1px solid #e5e7eb; background:#f9fafb;"><div style="font-weight:700; color:#111827; font-size:.97em;">Acquire previously used stability study data</div></div>
    <div style="padding:14px 20px;"><p style="font-size:.88em; color:#374151; line-height:1.7; margin:0;">Pull up the previously submitted Stability Bundle from the pharmaceutical quality data repository.</p></div>
  </div>
</div>
<div style="display:flex; gap:16px; margin-bottom:20px; align-items:flex-start;">
  <div style="flex-shrink:0; width:36px; height:36px; border-radius:50%; background:#10b981; color:#fff; display:flex; align-items:center; justify-content:center; font-size:.85em; font-weight:700; margin-top:2px;">2</div>
  <div style="flex:1; background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden;">
    <div style="padding:14px 20px 10px; border-bottom:1px solid #e5e7eb; background:#f9fafb;"><div style="font-weight:700; color:#111827; font-size:.97em;">Update resources</div></div>
    <div style="padding:14px 20px;"><p style="font-size:.88em; color:#374151; line-height:1.7; margin:0;">Update Medication, Stability Study, Specimen Storage, and Stability Test Result resources. The repository creates new versions for tracking and lifecycle management.</p></div>
  </div>
</div>
<div style="display:flex; gap:16px; margin-bottom:20px; align-items:flex-start;">
  <div style="flex-shrink:0; width:36px; height:36px; border-radius:50%; background:#10b981; color:#fff; display:flex; align-items:center; justify-content:center; font-size:.85em; font-weight:700; margin-top:2px;">3</div>
  <div style="flex:1; background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden;">
    <div style="padding:14px 20px 10px; border-bottom:1px solid #e5e7eb; background:#f9fafb;"><div style="font-weight:700; color:#111827; font-size:.97em;">Send to regulator</div></div>
    <div style="padding:14px 20px;"><p style="font-size:.88em; color:#374151; line-height:1.7; margin:0;">Transform the Bundle into an acceptable submission format and submit to the health authority.</p></div>
  </div>
</div>
<div style="display:flex; gap:16px; margin-bottom:20px; align-items:flex-start;">
  <div style="flex-shrink:0; width:36px; height:36px; border-radius:50%; background:#10b981; color:#fff; display:flex; align-items:center; justify-content:center; font-size:.85em; font-weight:700; margin-top:2px;">4</div>
  <div style="flex:1; background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden;">
    <div style="padding:14px 20px 10px; border-bottom:1px solid #e5e7eb; background:#f9fafb;"><div style="font-weight:700; color:#111827; font-size:.97em;">Respond to regulator questions</div></div>
    <div style="padding:14px 20px;"><p style="font-size:.88em; color:#374151; line-height:1.7; margin:0;">If the health authority requests additional data (e.g., microbiological testing), update the Specification Bundle and resubmit.</p></div>
  </div>
</div>
<div style="display:flex; gap:16px; margin-bottom:28px; align-items:flex-start;">
  <div style="flex-shrink:0; width:36px; height:36px; border-radius:50%; background:#10b981; color:#fff; display:flex; align-items:center; justify-content:center; font-size:.85em; font-weight:700; margin-top:2px;">5</div>
  <div style="flex:1; background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden;">
    <div style="padding:14px 20px 10px; border-bottom:1px solid #e5e7eb; background:#f9fafb;"><div style="font-weight:700; color:#111827; font-size:.97em;">Receive approval</div></div>
    <div style="padding:14px 20px;"><p style="font-size:.88em; color:#374151; line-height:1.7; margin:0;">The regulator approves the specification change and shelf-life extension. Update the dataset status in your Quality repository.</p></div>
  </div>
</div>

<hr style="border:none; border-top:1px solid #e5e7eb; margin:28px 0;"/>

<!-- USE CASE 3: SPEC CHANGE -->
<h2 id="spec-change" style="font-size:1.35em; font-weight:700; color:#111827; margin-bottom:20px;">Test Specification Change</h2>
<p style="color:#374151; font-size:.92em; line-height:1.7; margin-bottom:20px;">A sponsor plans to execute a change in the drug substance identity method and acceptance criteria, sending the change request to a CMO.</p>

<div style="display:flex; gap:16px; margin-bottom:20px; align-items:flex-start;">
  <div style="flex-shrink:0; width:36px; height:36px; border-radius:50%; background:#8b5cf6; color:#fff; display:flex; align-items:center; justify-content:center; font-size:.85em; font-weight:700; margin-top:2px;">1</div>
  <div style="flex:1; background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden;">
    <div style="padding:14px 20px 10px; border-bottom:1px solid #e5e7eb; background:#f9fafb;"><div style="font-weight:700; color:#111827; font-size:.97em;">Acquire data from the library</div></div>
    <div style="padding:14px 20px;"><p style="font-size:.88em; color:#374151; line-height:1.7; margin:0;">Access the ObservationDefinition resources (analytical procedures and test methods) from the public repository via RESTful API.</p></div>
  </div>
</div>
<div style="display:flex; gap:16px; margin-bottom:20px; align-items:flex-start;">
  <div style="flex-shrink:0; width:36px; height:36px; border-radius:50%; background:#8b5cf6; color:#fff; display:flex; align-items:center; justify-content:center; font-size:.85em; font-weight:700; margin-top:2px;">2</div>
  <div style="flex:1; background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden;">
    <div style="padding:14px 20px 10px; border-bottom:1px solid #e5e7eb; background:#f9fafb;"><div style="font-weight:700; color:#111827; font-size:.97em;">Build test specification</div></div>
    <div style="padding:14px 20px;"><p style="font-size:.88em; color:#374151; line-height:1.7; margin:0;">Select from common compendial procedures (HPLC, cell-based assay, gene-based assay) or prefabricated specifications. Edit ObservationDefinition parameters as needed.</p></div>
  </div>
</div>
<div style="display:flex; gap:16px; margin-bottom:20px; align-items:flex-start;">
  <div style="flex-shrink:0; width:36px; height:36px; border-radius:50%; background:#8b5cf6; color:#fff; display:flex; align-items:center; justify-content:center; font-size:.85em; font-weight:700; margin-top:2px;">3</div>
  <div style="flex:1; background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden;">
    <div style="padding:14px 20px 10px; border-bottom:1px solid #e5e7eb; background:#f9fafb;"><div style="font-weight:700; color:#111827; font-size:.97em;">Send specification to CMO &amp; receive results</div></div>
    <div style="padding:14px 20px;"><p style="font-size:.88em; color:#374151; line-height:1.7; margin:0;">Package the specification into a Bundle and send to the CMO via API. Test results are returned in the same FHIR format.</p></div>
  </div>
</div>
<div style="display:flex; gap:16px; margin-bottom:28px; align-items:flex-start;">
  <div style="flex-shrink:0; width:36px; height:36px; border-radius:50%; background:#8b5cf6; color:#fff; display:flex; align-items:center; justify-content:center; font-size:.85em; font-weight:700; margin-top:2px;">4</div>
  <div style="flex:1; background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden;">
    <div style="padding:14px 20px 10px; border-bottom:1px solid #e5e7eb; background:#f9fafb;"><div style="font-weight:700; color:#111827; font-size:.97em;">Send to regulator</div></div>
    <div style="padding:14px 20px;"><p style="font-size:.88em; color:#374151; line-height:1.7; margin:0;">Transform the data to meet national requirements and submit to the health authority for review.</p></div>
  </div>
</div>

<hr style="border:none; border-top:1px solid #e5e7eb; margin:28px 0;"/>

<!-- USE CASE 4: FACILITY CHANGE -->
<h2 id="facility-change" style="font-size:1.35em; font-weight:700; color:#111827; margin-bottom:20px;">Facility Change</h2>
<p style="color:#374151; font-size:.92em; line-height:1.7; margin-bottom:20px;">A sponsor wants to document a change to a testing facility's address in the Organization resource.</p>

<div style="display:flex; gap:16px; margin-bottom:20px; align-items:flex-start;">
  <div style="flex-shrink:0; width:36px; height:36px; border-radius:50%; background:#d97706; color:#fff; display:flex; align-items:center; justify-content:center; font-size:.85em; font-weight:700; margin-top:2px;">1</div>
  <div style="flex:1; background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden;">
    <div style="padding:14px 20px 10px; border-bottom:1px solid #e5e7eb; background:#f9fafb;"><div style="font-weight:700; color:#111827; font-size:.97em;">Acquire Organization data from the library</div></div>
    <div style="padding:14px 20px;"><p style="font-size:.88em; color:#374151; line-height:1.7; margin:0;">Download the Organization resource from the quality data library.</p></div>
  </div>
</div>
<div style="display:flex; gap:16px; margin-bottom:20px; align-items:flex-start;">
  <div style="flex-shrink:0; width:36px; height:36px; border-radius:50%; background:#d97706; color:#fff; display:flex; align-items:center; justify-content:center; font-size:.85em; font-weight:700; margin-top:2px;">2</div>
  <div style="flex:1; background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden;">
    <div style="padding:14px 20px 10px; border-bottom:1px solid #e5e7eb; background:#f9fafb;"><div style="font-weight:700; color:#111827; font-size:.97em;">Update resources</div></div>
    <div style="padding:14px 20px;">
      <p style="font-size:.88em; color:#374151; line-height:1.7; margin-bottom:10px;">Update the Organization resource(s) — new name, alias, address, or additional identifiers (e.g., SPOR ID, FEI, DUNS).</p>
      <div style="background:#fffbeb; border:1px solid #fde68a; border-left:3px solid #d97706; border-radius:6px; padding:10px 14px; font-size:.82em; color:#78350f; display:flex; gap:10px; align-items:flex-start;">
        <span style="flex-shrink:0;">💡</span>
        <span><strong>Tip:</strong> The Organization profile can leverage auto-population from external databases such as EMA's OMS or U.S. FDA's Data Dashboard, reducing manual entry and driving consistency.</span>
      </div>
    </div>
  </div>
</div>
<div style="display:flex; gap:16px; margin-bottom:28px; align-items:flex-start;">
  <div style="flex-shrink:0; width:36px; height:36px; border-radius:50%; background:#d97706; color:#fff; display:flex; align-items:center; justify-content:center; font-size:.85em; font-weight:700; margin-top:2px;">3</div>
  <div style="flex:1; background:#fff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden;">
    <div style="padding:14px 20px 10px; border-bottom:1px solid #e5e7eb; background:#f9fafb;"><div style="font-weight:700; color:#111827; font-size:.97em;">Send or receive Organization data</div></div>
    <div style="padding:14px 20px;"><p style="font-size:.88em; color:#374151; line-height:1.7; margin:0;">The updated Organization resource(s) can be sent to an external party (CMO, regulator, or others) using RESTful API.</p></div>
  </div>
</div>
