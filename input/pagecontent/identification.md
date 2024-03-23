Details about the drug substance and drug product nomenclature; structure; physicochemical properties; and manufacture.

### Product 
 
#### Drug Product
<table>
<tr><td><img src="identification_FHIR_resources.png" width="400"/></td></tr>
</table>

##### Resources
<table>
<tr><td>Composition</td><td>Narrative text section(s)</td></tr> 
<tr><td>MedicinalProductDefinition</td><td>The drug product (Stelbat tablets, 20mg)</td></tr> 
<tr><td>ManufacturedItemDefinition</td><td>Information about the physical packaged medication item, such as a tablet or capsule</td></tr> 
<tr><td>Composition</td><td>Textual information about the product</td></tr> 
</table>

#### Examples
**CTD section synthetic source data samples** (PDF):

- 3.2.P.2 Pharmaceutical Development
  - <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.P.2.2_Drug_Product.pdf ">3.2.P.2.2 Drug Product</a>

**XML and JSON examples** of synthetic quality data:
- <a href="Bundle-bundle-drug-product-pq-ex1.xml.html">Product Identification example XML</a>
- <a href="Bundle-bundle-drug-product-pq-ex1.json.html">Product Identification example JSON</a>

**HTML presentation example** of synthetic quality data:
- <a href="identification_rend_p1.html">Product Identification</a>  - Note that HTML examples represent ways to create human-readable output using structured quality data (see section 1.2 Scope).

#### Drug Product Microbiological Attributes
<table>
<tr><td><img src="microbial_attributes_resources.png" width="450"/></td></tr>
</table>

#### Resources

<table>
<tr><td>MedicinalProductDefinition</td><td>The drug product (Stelbat tablets, 20mg)</td></tr> 
<tr><td>Medication</td><td>Describes the batches of the product that underwent testing</td></tr>
<tr><td>DiagnosticReport</td><td>Contains all rest results as a group and captures conclusions</td></tr> 
<tr><td>Observation</td><td>The results of a specific test mentioned in the Observation Definition</td></tr> 
</table>

#### Examples
**CTD section synthetic source data samples** (PDF):

- 3.2.P.2 Pharmaceutical Development
  - <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.P.2.5_Microbiological_Attributes.pdf ">3.2.P.2.5 Microbiological Attributes</a>

**XML and JSON examples** of synthetic quality data:
- <a href="Bundle-bundle-drug-product-microbiological-attributes-pq-ex1.xml.html">Product Microbiological Attributes Report example XML</a>
- <a href="Bundle-bundle-drug-product-microbiological-attributes-pq-ex1.json.html">Product Microbiological Attributes Report example JSON</a>

**HTML presentation example** of synthetic quality data:
- <a href="identification_rend_p2.html">Product Microbiological Attributes</a>  - Note that HTML examples represent ways to create human-readable output using structured quality data (see section 1.2 Scope).

#### Drug Product Excipients
<table>
<tr><td><img src="product_excipients.png" width="600"/></td></tr>
</table>

#### Resources
<table>
<tr><td>MedicinalProductDefinition</td><td>The drug product (Stelbat tablets, 20mg)</td></tr> 
<tr><td>Ingredient</td><td>The excipients that make up the drug product</td></tr> 
<tr><td>Organization</td><td>The company that manufactures the excipients</td></tr> 
<tr><td>Substance Definition</td><td>Chemical or biological details about substance(s) associated with the ingredient</td></tr> 
</table>

#### Examples
**CTD section synthetic source data samples** (PDF):

- 3.2.P.4 Control of Excipients
  - <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.P.4.5_Excipients_of_Human_or_Animal_Origin.pdf ">3.2.P.4.5 Excipients of Human or Animal Origin</a>
  - <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.P.4.6_Novel_Excipients.pdf ">3.2.P.4.6 Novel Excipients</a>

**XML and JSON examples** of synthetic quality data:
- <a href="Bundle-bundle-drug-product-excipients-pq-ex1.xml.html">Product Excipients example XML</a>
- <a href="Bundle-bundle-drug-product-excipients-pq-ex1.json.html">Product Excipients example JSON</a>

**HTML presentation example** of synthetic quality data:
- <a href="identification_rend_p3.html">Product Excipients</a>  - Note that HTML examples represent ways to create human-readable output using structured quality data (see section 1.2 Scope).

### Substance

#### Drug Substance General Properties
<table>
<tr><td><img src="general_properties_substance.png" width="350"/></td></tr>
</table>
<table>
<tr><td>Substance Definition</td><td>Properties of the substance</td></tr> 
</table>

#### Examples
**CTD section synthetic source data samples** (PDF):

- 3.2.S.1 General Information
  - <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.S.1.3_General_Properties.pdf">3.2.S.1.3 General Properties</a>

**XML and JSON examples** of synthetic quality data:
- <a href="Bundle-bundle-drug-substance-general-properties-pq-ex1.xml.html">Substance General Properties example XML</a>
- <a href="Bundle-bundle-drug-substance-general-properties-pq-ex1.json.html">Substance General Properties example XML</a>

**HTML presentation example** of synthetic quality data:
- <a href="identification_rend_s2.html">Substance General Properties</a>  - Note that HTML examples represent ways to create human-readable output using structured quality data (see section 1.2 Scope).


#### Drug Substance: Elucidation of Structure
<table>
<tr><td><img src="substance_characterization_resources.png" width="700"/></td></tr>
</table>

<table>
<tr><td>SubstanceDefinition</td><td>The substance being characterized</td></tr> 
<tr><td>Substance</td><td>Identifying information about an actual batch of substance (an instance)</td></tr> 
<tr><td>PlanDefinition</td><td>Describes the tests for the characterization</td></tr> 
<tr><td>ObservationDefinition</td><td>Each individual stability test and their acceptance criteria</td></tr> 
<tr><td>Observation</td><td>The results of a specific test mentioned in the ObservationDefinition</td></tr> 
<tr><td>DiagnosticReport</td><td>Contains all rest results as a group and captures conclusions</td></tr> 
<tr><td>Organization</td><td>(not illustrated above): The company/site that performed the testing or manufacturing</td></tr> 
</table>

#### Examples
**CTD section synthetic source data samples** (PDF):

- 3.2.S.3 Characterisation
  - <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.S.3.1_Elucidation_of_Structure_and_Other_Characteristics.pdf">3.2.S.3.1 Elucidation of Structure and Other Characteristics</a>

**XML and JSON examples** of synthetic quality data:
- <a href="Bundle-bundle-drug-substance-characterization-pq-ex1.xml.html">Substance Characterisation example XML</a>
- <a href="Bundle-bundle-drug-substance-characterization-pq-ex1.json.html">Substance Characterisation example XML</a>

**HTML presentation example** of synthetic quality data:
- <a href="identification_rend_s1.html">Substance Characterisation: Elucidation of Structure</a>  - Note that HTML examples represent ways to create human-readable output using structured quality data (see section 1.2 Scope).

### Profiles 
See [Artifacts Index: Domain Bundle Profiles](artifacts.html#domain-bundle-profiles)