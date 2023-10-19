### Objective
Provide details about manufacturing process validation protocols and results.

### Component Diagram
<table>
<tr><td><img src="process_validation_FHIR_resources [2023-07-28 Rik].png" width="850"/></td></tr>
</table>

### Description of Components
**Medicinal Product Definition**: The drug product (Stelbat tablets, 20mg)

**Ingredient**: The API (stelbatalol) or the ingredients that make up the DP

**Substance Definition**: Chemical or biological details about substance(s) associated with the API (molecular weight, molecular formula, stereochemistry, protein or nucleic acid subunits)

**Medication**: Describes the batches that underwent testing

**Plan Definition**: Describes the process validation test protocol

**Activity Definition**: Contains the Observation Definition resources that establish the list of tests and their acceptance criteria

**Observation Definition**: Each individual test and acceptance criteria; also test grouping

**Observation**: The results of a specific test mentioned in the Observation Definition

**Diagnostic Report**: Contains all rest results as a group and captures conclusions

### Examples
<html>
<body>
<p><b>Synthetic CMC samples</b> (PDF):</p>
<ul>
<li>3.2.S.2 Manufacture </li>
<ul>
<li><a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.S.2.5_Process_Validation_and-or_Evaluation.pdf ">3.2.S.2.5 Process Validation and/or Evaluation</a></li></ul>
<li>3.2.P.3 Manufacture</li>
<ul>
<li><a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.P.3.5_Process_Validation.pdf ">3.2.P.3.5 Process Validation and/or Evaluation</a></li>
<li><a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.P3.5_Process_Validation_and-or_Evaluation_BIO.pdf ">3.2.P.3.5 Process Validation and/or Evaluation - Biologic Example</a></li></ul></ul>
<p><b>HTML rendering</b> of Synthetic CMC data:</p>
<ul><li><a href="process_valid_rend_s.html">Drug Substance Process Validation</a> </li>
<li><a href="process_valid_rend_p.html">Drug Product Process Validation</a> </li>
<li><a href="process_valid_rend_pb.html">Drug Product Process Validation - Biologic</a></li></ul>

<p><b>FHIR XML/JSON</b> validated Bundle example in this guide:</p>
<ul><li><a href="https://build.fhir.org/ig/HL7/uv-dx-pq/branches/master/Bundle-bundle-product-process-validation-dxpq-ex1.html">Bundle - Product Process Validation dx-PQ - Example 1</a></li></ul>
</body>
</html>