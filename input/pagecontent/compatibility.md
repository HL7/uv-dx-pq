<!-- DOMAIN HEADER -->
<div style="background:#f9fafb; border:1px solid #e5e7eb; border-left:4px solid #6366f1; border-radius:8px; padding:16px 20px; margin-bottom:24px;">
  <div style="font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#6366f1; margin-bottom:4px;">Domain 14</div>
  <div style="font-weight:700; color:#111827; font-size:1.1em; margin-bottom:6px;">Compatibility</div>
</div>

Details about compatibility studies and results.

### Product 

<table>
<tr><td><img src="compatibility_FHIR_resources.png" width="750"/></td></tr>
</table>
 
#### Resources
<table>
<tr><td>MedicinalProductDefinition</td><td>The drug product (Stelbat tablets, 20mg)</td></tr>
<tr><td>Medication</td><td>Describes the batches that underwent testing</td></tr>
<tr><td>Ingredient</td><td>The active ingredient (stelbatalol) or the ingredients that make up the drug product</td></tr>
<tr><td>SubstanceDefinition</td><td>Chemical or biological details about substance(s) associated with the ingredient</td></tr>
<tr><td>PlanDefinition</td><td>Describes the compatibility analysis protocol</td></tr>
<tr><td>ObservationDefinition</td><td>Each individual  test and acceptance criteria; also used to group tests</td></tr>
<tr><td>Observation</td><td>The results of a specific test mentioned in the ObservationDefinition</td></tr>
<tr><td>DiagnosticReport</td><td>Contains all results as a group and captures conclusions</td></tr>
</table>

### Examples
**CTD section samples** (PDF):
- 3.2.P.2 Pharmaceutical Development
    - <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.P.2.6_Compatibility.pdf ">3.2.P.2.6 Compatibility</a>

**XML and JSON examples** of synthetic quality data:
- <a href="Bundle-bundle-drug-product-compatibility-pq-ex1.xml.html">Product Compatibility example XML</a>
- <a href="Bundle-bundle-drug-product-compatibility-pq-ex1.json.html">Product Compatibility example JSON</a>

**HTML rendering** of synthetic quality data:
- <a href="compatibility_rend_p.html">Drug Product Compatibility</a>  - Note that HTML examples represent ways to create human-readable output using structured quality data (see section 1.2 Scope).

### Profiles 
See [Artifacts Index: Domain Bundle Profiles](artifacts.html#domain-bundle-profiles)
