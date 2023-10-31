### Objective
Provides details about a stability study, including protocol (tests and acceptance criteria), test results, and drug substance or drug product batches involved in the testing.

### Component Diagram
<table>
<tr><td><img src="stability_FHIR_resources [2023-07-28 Rik].png" width="850"/></td></tr>
</table>

### Description of Components
**Medicinal Product Definition**: The drug product (Stelbat tablets, 20mg)

**Ingredient**: The active ingredient (stelbatalol) or the ingredients that make up the drug substance or product

**Substance Definition**: Chemical or biological details about substance(s) associated with the active ingredient (molecular weight, molecular formula, stereochemistry, protein or nucleic acid subunits) 

**Medication**: Describes the batches that underwent stability testing

**Plan Definition**: Describes the stability study protocol

**Activity Definition**: Contains the Observation Definition resources that establish the list of tests and their acceptance criteria

**Observation Definition**: Each individual stability test and their acceptance criteria; also used to group tests

**Observation**: The results of a specific test mentioned in the Observation Definition

**Specimen Definition**: Describes the storage conditions and duration for each test

**Diagnostic Report**: Contains all rest results as a group and captures conclusions


### Examples
<html>
<body>
<p><b>CTD section samples </b> (PDF):</p>
<ul>
<li>3.2.S.7 Stability </li>
<ul><li><a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.S.7.3_Stability_Data.pdf ">3.2.S.7.3 Stability Data</a></li></ul>

<li>3.2.P.8 Stability </li>
<ul><li><a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.P.8.3_Stability_Data.pdf ">3.2.P.8.3 Stability Data</a></li></ul>
</ul>
<p><b>HTML rendering</b> of synthetic CTD data:</p>
<ul><li><a href="stability_rend_s.html">Drug Substance Stability</a> </li>
<li><a href="stability_rend_p.html">Drug Product Stability</a> </li></ul>

<p><b>FHIR XML/JSON</b> validated Bundle example in this guide:</p>
<ul><li><a href="https://build.fhir.org/ig/HL7/uv-dx-pq/branches/master/Bundle-bundle-drug-substance-stability-dxpq-ex1.html">Bundle – Drug Substance Stability dx-PQ - Example 1</a></li>
<li><a href="https://build.fhir.org/ig/HL7/uv-dx-pq/branches/master/Bundle-bundle-drug-product-stability-dxpq-ex1.html">Bundle – Drug Product Stability dx-PQ - Example 1</a></li>
</ul>
</body>
</html>