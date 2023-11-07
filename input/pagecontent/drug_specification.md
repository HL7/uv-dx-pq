### Objective
Provide details about drug substance or drug product release and stability specification (tests, acceptance criteria).

### Component Diagram
<table>
<tr><td><img src="specification_FHIR_resources [2023-07-29 Rik].png" width="850"/></td></tr>
</table>
 
### Description of Components
**Medicinal Product Definition**: The drug product (Stelbat tablets, 20mg)

**Ingredient**: The active ingredient (stelbatalol) or the ingredients that make up the drug substance or product

**Substance Definition**: Chemical or biological details about substance(s) associated with the active ingredient (molecular weight, molecular formula, stereochemistry, protein or nucleic acid subunits)

**Observation Definition**: Each individual test and acceptance criteria; also test grouping

**Plan Definition**: Describes the drug substance or drug product specification

### Examples
<html>
<body>
<p><b>CTD section samples </b> (PDF):</p>
<ul>
<li>3.2.S.4 Control of Drug Substance</li>
<ul><li><a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.S.4.1_Specification.pdf ">3.2.S.4.1 Specification</a></li></ul>
<li>3.2.P.5 Control of Drug Product</li>
<ul><li><a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2P.5.1_Specification(s).pdf ">3.2.P.5.1 Specification(s)</a></li></ul>
</ul>
<p><b>HTML rendering</b> of synthetic CTD data:</p>
<ul><li><a href="drug_specification_rend_s.html">Drug Substance Specification</a> </li>
<li><a href="drug_specification_rend_p.html">Drug Product Specification</a> </li></ul>

<p><b>FHIR XML/JSON</b> validated Bundle example in this guide:</p>
<ul><li><a href="https://build.fhir.org/ig/HL7/uv-dx-pq/branches/master/Bundle-bundle-drug-substance-specification-dxpq-ex1.html">Bundle – Drug Substance Specification dx-PQ - Example 1</a></li>
<li><a href="https://build.fhir.org/ig/HL7/uv-dx-pq/branches/master/Bundle-bundle-drug-product-specification-dxpq-ex1.html">Bundle – Drug Product Specification dx-PQ - Example 1</a></li>
</ul>
</body>
</html>