### Objective
Provide details about drug substances and drug products with names and identifiers; structure & structure characterization; physico-chemical properties; and dosage form & characterization (for drug products)

### Component Diagram
<table>
<tr><td><img src="identification_FHIR_resources.png" width="850"/></td></tr>
</table>
 
### Description of Components
**Medicinal Product Definition**: The drug product (Stelbat tablets, 20mg)

**Ingredient**: The API (stelbatalol) or the ingredients that make up the DP

**Substance Definition**: Chemical or biological details about substance(s) associated with the API (molecular weight, molecular formula, stereochemistry, protein or nucleic acid subunits)

**Packaged Product Definition**: The packaging for the drug product


### Examples
<html>
<body>
<p><b>Synthetic CMC samples</b> (PDF):</p>
<ul>
<li>3.2.S.1 General Information</li>
<li>3.2.P.1 Description and Composition of the Drug Product</li>
<ul><li><a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.P.1_Description_Composition.pdf ">3.2.P.5.5 Characterisation of Impurities</a></li></ul>
</ul>
<p><b>FHIR XML/JSON</b> validated Bundle example in this guide:</p>
<ul><li><a href="MedicinalProductDefinition-medicinalproductdefinition-drug-product-dxpq-ex1.html">MedicinalProductDefinition - Drug Product dx-PQ - Example 1</a></li>
</ul>
</body>
</html>