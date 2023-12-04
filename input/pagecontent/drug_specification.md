Details about drug substance or drug product release and stability specification (tests, acceptance criteria).

### Product 
<table>
<tr><td><img src="specification_FHIR_resources.png" width="600"/></td></tr>
</table>
#### Resources

<table>
<tr><td>MedicinalProductDefinition</td><td>The drug product (Stelbat tablets, 20mg)</td></tr>

<tr><td>Ingredient</td><td>The active ingredient (stelbatalol) or the ingredients that make up the drug product</td></tr>
<tr><td>SubstanceDefinition</td><td>Chemical or biological details about substance(s) associated with the ingredient</td></tr>
<tr><td>PlanDefinition</td><td>Describes the specification set of tests</td></tr>
<tr><td>ObservationDefinition</td><td>Each individual test and acceptance criteria; also used to group closely related tests</td></tr>

<tr><td>Organization</td><td>(not illustrated above): The company/site that performed the testing or manufacturing</td></tr>


</table>
#### Examples
**eCTD section synthetic source data samples** (PDF):
- 3.2.P.5 Control of Drug Product
  - <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2P.5.1_Specification(s).pdf ">3.2.P.5.1 Specification(s)</a>

**XML and JSON examples** of synthetic CTD data:
- <a href="Bundle-bundle-drug-product-specification-pq-ex1.xml.html">Product Specification example XML</a>
- <a href="Bundle-bundle-drug-product-specification-pq-ex1.json.html">Product Specification example JSON</a>

**HTML presentation example** of synthetic CTD data:
- <a href="drug_specification_rend_p.html">Product Specification</a>

### Substance
<table>
<tr><td><img src="substance_specification_resources.png" width="600"/></td></tr>
</table>
 
#### Resources
<table>
<tr><td>SubstanceDefinition</td><td>The substance which this is a specification for</td></tr>

<tr><td>PlanDefinition</td><td>Describes the specification set of tests</td></tr>
<tr><td>ObservationDefinition</td><td>Each individual test and acceptance criteria; also used to group closely related tests</td></tr>
</table>

#### Examples
**eCTD section synthetic source data samples** (PDF):
- 3.2.S.4 Control of Drug Substance
  - <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.S.4.1_Specification.pdf ">3.2.S.4.1 Specification</a>

**XML and JSON examples** of synthetic CTD data:
- <a href="Bundle-bundle-drug-substance-specification-pq-ex1.xml.html">Substance Specification example XML</a>
- <a href="Bundle-bundle-drug-substance-specification-pq-ex1.json.html">Substance Specification example JSON</a>

**HTML presentation example** of synthetic CTD data:
- <a href="drug_specification_rend_s.html">Substance Specification</a>

### Profiles 
See [Artifacts Index: Drug Specification](artifacts.html#drug-specification)