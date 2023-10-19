### Objective
Provide details about drug substance and drug product batch release testing and results.

### Component Diagram
<table>
<tr><td><img src="batch_analysis_FHIR_resources.png" width="850"/></td></tr>
</table>
 
### Description of Components
**Medicinal Product Definition**: The drug product (Stelbat tablets, 20mg)

**Ingredient**: The API (stelbatalol) or the ingredients that make up the DP

**Substance Definition**: Chemical or biological details about substance(s) associated with the API (molecular weight, molecular formula, stereochemistry, protein or nucleic acid subunits)

**Medication**: Describes the batches that underwent testing

**Plan Definition**: Describes the test protocol

**Activity Definition**: Contains the Observation Definition resources that establish the list of tests and their acceptance criteria

**Observation Definition**: Each individual test and acceptance criteria; also test grouping

**Observation**: The results of a specific test mentioned in the Observation Definition

**Diagnostic Report**: Contains all rest results as a group and captures conclusions

### Examples
<html>
<body>
<p><b>Synthetic CMC samples</b> (PDF):</p>
<ul>
<li>3.2.S.4 Control of Drug Substance</li>
<ul><li><a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.S.4.4_Batch_Analyses.pdf ">3.2.S.4.4 Batch Analyses</a></li></ul>

<li>3.2.P.5 Control of Drug Product</li>
<ul><li><a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.P.5.4_Batch_Analyses.pdf ">3.2.P.5.4 Batch Analyses</a></li></ul>
</ul>
<p><b>HTML rendering</b> of Synthetic CMC data:</p>
<ul><li><a href="batch_anal_rend_s.html">Drug Substance Batch Analyses</a> </li>
<li><a href="batch_anal_rend_p.html">Drug Product Batch Analyses</a> </li></ul>

<p><b>FHIR XML/JSON</b> validated Bundle example in this guide:</p>
<ul><li><a href="https://build.fhir.org/ig/HL7/uv-dx-pq/branches/master/Bundle-bundle-drug-substance-stability-dxpq-ex1.html">Bundle – Batch Analysis dx-PQ - Example 2, substance</a></li>
<li><a href="https://build.fhir.org/ig/HL7/uv-dx-pq/branches/master/Bundle-bundle-drug-product-stability-dxpq-ex1.html">Bundle – Batch Analysis dx-PQ - Example 1, product</a></li>
</ul>
</body>
</html>
