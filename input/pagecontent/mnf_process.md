### Objective
Provide a manufacturing process overview and details about unit operations, process parameters, and in-process controls.

### Component Diagram
<table>
<tr><td><img src="manufacturing_process_FHIR_resources [2023-07-28 Rik].png" width="850"/></td></tr>
</table>
 
### Description of Components
**Medicinal Product Definition**: The drug product (Stelbat tablets, 20mg)

**Ingredient**: The active ingredient (stelbatalol) or the ingredients that make up the drug substance or product

**Substance Definition**: Chemical or biological details about the substance(s) associated with the active ingredient (molecular weight, molecular formula, stereochemistry, protein or nucleic acid subunits)

**Plan Definition**: Describes the manufacturing process protocol

### Examples
<html>
<body>
<p><b>CTD section samples </b> (PDF):</p>
<ul>
<li>3.2.S.2 Manufacture</li>
<ul><li><a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.S.2.2_Description_Manufacturing.pdf ">3.2.S.2.2 Description of Manufacturing Process and Process Controls</a></li></ul>
<li>3.2.P.3 Manufacture</li>
<ul><li><a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.P.3.3_Description_Manufacturing.pdf ">3.2.P.3.3 Description of Manufacturing Process and Process Controls</a></li></ul>
</ul>
<p><b>HTML rendering</b> of synthetic CTD data:</p>
<ul><li><a href="mnf_process_rend_s.html">Drug Substance Manufacturing Process</a> </li>
<li><a href="mnf_process_rend_p.html">Drug Product Manufacturing Process</a> </li></ul>
<p><b>FHIR XML/JSON</b> validated Bundle example in this guide:</p>
<ul><li><a href="https://build.fhir.org/ig/HL7/uv-dx-pq/branches/master/Bundle-bundle-product-manufacturing-dxpq-ex1.html">Bundle - Product Manufacturing dx-PQ - Example 1</a></li>
</ul>
</body>
</html>
