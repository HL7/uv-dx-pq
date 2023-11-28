Provide details about drug substance and drug product components, materials, and Quality reference standards.

### Product Composition
<table>
<tr><td><img src="product_description_and_composition.png" width="500"/></td></tr>
</table>

#### Resources
<table>
 
<tr><td>MedicinalProductDefinition</td><td>The drug product (Stelbat tablets, 20mg)</td></tr>  
<tr><td>Ingredient</td><td>The active ingredient (stelbatalol) and other ingredients that make up the product</td></tr> 
<tr><td>SubstanceDefinition</td><td>The documented impurites</td></tr>
<tr><td>PackagedProductDefinition</td><td>Information about the packaging for the product</td></tr>

</table>
#### Examples
**eCTD section synthetic source data samples** (PDF):
- <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.P.1_Description_Composition.pdf ">3.2.P.1 Description and Composition of the Drug Product</a>

**XML and JSON examples** of synthetic CTD data:
- <a href="Bundle-bundle-drug-product-composition-pq-ex1.xml.html">Product Composition example XML</a>
- <a href="Bundle-bundle-drug-product-composition-pq-ex1.json.html">Product Composition example JSON</a>

**HTML presentation example** of synthetic CTD data:
- <a href="composition_rend_s.html">Drug Substance Reference Standards or Materials</a>


### Drug Reference Standards

<table>
<tr><td><img src="reference_standards_substance_resources.png" width="700"/></td></tr>
</table>

#### Resources
<table>
<tr><td>SubstanceDefinition</td><td>The substance for which reference standards are being established</td></tr>
<tr><td>Substance</td><td>Identifying information about an actual batch of substance (an instance)</td></tr>
<tr><td>PlanDefinition</td><td>Describes the reference standards set of tests</td></tr>
<tr><td>ObservationDefinition</td><td>Each individual test and acceptance criteria</td></tr>
<tr><td>Observation</td><td>The results of a specific test mentioned in the ObservationDefinition</td></tr>
<tr><td>DiagnosticReport</td><td>Contains all results as a group and captures conclusions</td></tr>
<tr><td>Organization</td><td>(not illustrated above): The company/site that performed the testing or manufacturing</td></tr>
</table>


#### Examples
**eCTD section synthetic source data samples** (PDF):
- <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.S.5_Reference_Standards_or_Materials.pdf ">3.2.S.5 Reference Standards or Materials</a> (3.2.P.6 Reference Standards or Materials is similar.)

**XML and JSON examples** of synthetic CTD data:
- <a href="Bundle-bundle-drug-reference-standards-pq-ex2-sub.xml.html"> Substance Reference Standards or Materials example XML</a>
- <a href="Bundle-bundle-drug-reference-standards-pq-ex2-sub.json.html">Substance Reference Standards or Materials example JSON</a>

**HTML presentation example** of synthetic CTD data:
- <a href="composition_rend_s.html">Substance Reference Standards or Materials</a>

### Profiles 
See [Artifacts Index: Composition](artifacts.html#composition)