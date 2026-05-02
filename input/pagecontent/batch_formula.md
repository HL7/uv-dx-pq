<!-- DOMAIN HEADER -->
<div style="background:#f9fafb; border:1px solid #e5e7eb; border-left:4px solid #8b5cf6; border-radius:8px; padding:16px 20px; margin-bottom:24px;">
  <div style="font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.1em; color:#8b5cf6; margin-bottom:4px;">Domain 7</div>
  <div style="font-weight:700; color:#111827; font-size:1.1em; margin-bottom:6px;">Batch Formula</div>
</div>

Details about drug product master batch properties and formula.

### Product 

<table>
<tr><td><img src="product_batch_formula.png" width="700"/></td></tr>
</table>
 
#### Resources
<table>
<tr><td>MedicinalProductDefinition</td><td>The drug product (Stelbat tablets, 20mg)</td></tr>  
<tr><td>Medication</td><td>Describes the batch instances themselves, and quantities of ingredients</td></tr>
<tr><td>Substance</td><td>The substance used as in ingredient for this batch</td></tr>
<tr><td>SubstanceDefinition</td><td>Chemical or biological details about substance(s) associated with the ingredient</td></tr>
</table>

### Examples
**CTD section samples** (PDF):
- 3.2.P.3 Manufacture
    - <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.P.3.2_Batch_Formula.pdf ">3.2.P.3.2 Batch Formula</a>

**XML and JSON examples** of synthetic quality data:
- <a href="Bundle-bundle-batch-formula-pq-ex1.xml.html">Batch Formula example XML</a>
- <a href="Bundle-bundle-batch-formula-pq-ex1.json.html">Batch Formula example JSON</a>

**HTML rendering** of synthetic quality data:
- <a href="batch_formula_rend_p.html">Drug Product Batch Formula</a>  - Note that HTML examples represent ways to create human-readable output using structured quality data (see section 1.2 Scope).

### Profiles 
See [Artifacts Index: Domain Bundle Profiles](artifacts.html#domain-bundle-profiles)
