### Objective
Provide details about test methods used to analyze drug substances and drug products including  compendial and non-compendial testing.

### Component Diagram
<table>
<tr><td><img src="analytical procedures.png" width="850"/></td></tr>
</table>
 
### Description of Components
**Medicinal Product Definition**: The drug product (Stelbat tablets, 20mg)

**Substance Definition**: Chemical or biological details about substance(s) associated with the API (molecular weight, molecular formula, stereochemistry, protein or nucleic acid subunits)

**Plan Definition**: Describes the test protocol

**Observation Definition**: Each individual test and acceptance criteria; also test grouping

**Specimen Definition**: Describes the storage conditions and duration for each test

### Examples
<html>
<body>
<p><b>Synthetic CMC samples</b> (PDF):</p>
<ul>
<li>3.2.S.4 Control of Drug Substance</li>
<ul><li><a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.S.4.2_Analytical_Procedures-G1112-PSD-Method.pdf ">3.2.S.4.2 Analytical Procedures</a></li></ul>

<li>3.2.P.5 Control of Drug Product</li>
<ul><li><a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.P.5.2_Analytical_Procedures-G1113-Assay-ID-Deg-Sample-Prep.pdf ">3.2.P.5.2 Analytical Procedures</a></li></ul>
</ul>
<p><b>HTML rendering</b> of Synthetic CMC data:</p>
<ul><li><a href="anal_proc_rend_s.html">Drug Substance Analytical Procedures</a> </li>
<li><a href="anal_proc_rend_p.html">Drug Product Analytical Procedures</a> </li></ul>

<p><b>FHIR XML/JSON</b> validated Bundle example in this guide:</p>
<ul><li><a href="https://build.fhir.org/ig/HL7/uv-dx-pq/branches/master/Bundle-bundle-analytical-procedure-dxpq-ex2-sub.html">Bundle – Analytical Procedure dx-PQ - Example 2, drug substance</a></li>
<li><a href="https://build.fhir.org/ig/HL7/uv-dx-pq/branches/master/Bundle-bundle-analytical-procedure-dxpq-ex1-prod.html">Bundle – Analytical Procedure dx-PQ - Example 1, drug product</a></li>
</ul>
</body>
</html>