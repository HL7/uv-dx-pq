Details about test methods used to analyze substances and products, including compendial and non-compendial testing.

### Product 


<table>
<tr><td><img src="analytical procedures.png" width="600"/></td></tr>
</table>

#### Resources
<table>

<tr><td>MedicinalProductDefinition</td><td>The drug product (Stelbat tablets, 20mg)</td></tr>
<tr><td>SubstanceDefinition</td><td>Substances used during the analysis process</td></tr>
<tr><td>PlanDefinition</td><td>Describes the analysis process</td></tr>
<tr><td>SpecimenDefinition</td><td>Describes the storage conditions and duration for each test</td></tr>
<tr><td>Observation Definition</td><td>Each individual analysis test and acceptance criteria; also used to group tests</td></tr>
</table>

#### Examples
**eCTD section synthetic source data samples** (PDF):
- 3.2.P.5 Control of Drug Product
    - <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.P.5.2_Analytical_Procedures-G1113-Assay-ID-Deg-Sample-Prep.pdf ">3.2.P.5.2 Analytical Procedures</a>

**XML and JSON examples** of synthetic CTD data:
- <a href="Bundle-bundle-analytical-procedure-pq-ex1-prod.xml.html">Product Analytical Procedure example XML</a>
- <a href="Bundle-bundle-analytical-procedure-pq-ex1-prod.json.html">Product Analytical Procedure example JSON</a>

**HTML presentation examples** of synthetic CTD data:
- <a href="anal_proc_rend_p.html">Drug Product Analytical Procedures</a>

### Substance
<table>
<tr><td><img src="substance_analytical_procedures.png" width="600"/></td></tr>

</table>
 
#### Resources
<table>

<tr><td>SubstanceDefinition</td><td>Substances to be analyzed and also ones used during the analysis process</td></tr>
<tr><td>PlanDefinition</td><td>Describes the analysis process</td></tr>
<tr><td>DeviceDefinition</td><td>Devices/equipment used during testing</td></tr>
<tr><td>SpecimenDefinition</td><td>Describes the storage conditions and duration for each test</td></tr>
<tr><td>Observation Definition</td><td>Each individual analysis test and acceptance criteria; also used to group tests</td></tr>
</table>

#### Examples
**CTD section samples** (PDF):
- 3.2.S.4 Control of Drug Substance
    - <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.S.4.2_Analytical_Procedures-G1112-PSD-Method.pdf ">3.2.S.4.2 Analytical Procedures</a>

**XML and JSON examples** of synthetic CTD data:
- <a href="Bundle-bundle-analytical-procedure-pq-ex2-sub.xml.html">Substance Analytical Procedure example XML</a>
- <a href="Bundle-bundle-analytical-procedure-pq-ex2-sub.json.html">Substance Analytical Procedure example JSON</a>

**HTML rendering** of synthetic CTD data:
- <a href="anal_proc_rend_s.html">Drug Substance Analytical Procedures</a>

### Profiles 
See [Artifacts Index: Analytical Procedure](artifacts.html#analytical-procedures)
