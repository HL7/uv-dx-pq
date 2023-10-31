### Objective
Provide details about impurity identification and characterization.

### Component Diagram
<table>
<tr><td><img src="impurities_FHIR_resources.png" width="850"/></td></tr>
</table>
 
### Description of Components
**Medicinal Product Definition**: The drug product (Stelbat tablets, 20mg)

**Substance Definition**: Chemical or biological details about substance(s) associated with the active ingredient (molecular weight, molecular formula, stereochemistry, protein or nucleic acid subunits)

**Medication**: Describes the batches that underwent testing

**Observation**: The results of a specific test

**Diagnostic Report**: Contains all rest results as a group and captures conclusions

**Organization**: The company/site that performed the testing or manufacturing

### Examples
<html>
<body>
<p><b>CTD section samples </b> (PDF):</p>
<ul>
<li>3.2.S.3 Characterisation</li>
<ul><li><a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.S.3.2_Impurities.pdf ">3.2.S.3.2 Impurities</a></li></ul>
<li>3.2.P.5 Control of Drug Product</li>
<ul><li><a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.P.5.5_Characterisation_of_Impurities.pdf ">3.2.P.5.5 Characterisation of Impurities</a></li></ul>
</ul>
<p><b>HTML rendering</b> of synthetic CTD data:</p>
<ul><li><a href="impurities_rend_p.html">Drug Product Impurities</a> </li></ul>

<p><b>FHIR XML/JSON</b> validated Bundle example in this guide</p>
<ul><li><a href="https://build.fhir.org/ig/HL7/uv-dx-pq/branches/master/Bundle-bundle-product-impurities-dxpq-ex1.html">Bundle - Product Impurities dx-PQ - Example 1</a></li>
</ul>
</body>
</html>