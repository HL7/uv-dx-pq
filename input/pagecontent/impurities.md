
Details about impurity identification and characterization.

### Product 

<table>
<tr><td><img src="impurities_FHIR_resources.png" width="600"/></td></tr>
</table>
 
#### Resources
<table>
<tr><td>MedicinalProductDefinition</td><td>The drug product (Stelbat tablets, 20mg)</td></tr>  
<tr><td>SubstanceDefinition</td><td>The documented impurites</td></tr>
<tr><td>Medication</td><td>Describes the batches of the product that underwent testing for impurities</td></tr>
<tr><td>Observation</td><td>The results of testing for impurities in the batches</td></tr>
<tr><td>Organization</td><td>The company/site that performed the testing, or manufactured the batch</td></tr>
<tr><td>DiagnosticReport</td><td>Contains all results as a group, with conclusions</td></tr>
</table>

#### Examples
**eCTD section synthetic source data samples** (PDF):
- 3.2.P.5 Control of Drug Product
    - <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.P.5.5_Characterisation_of_Impurities.pdf ">3.2.P.5.5 Characterisation of Impurities</a>

**XML and JSON examples** of synthetic CTD data:
- <a href="Bundle-bundle-product-impurities-pq-ex1.xml.html">Product Impurities example XML</a>
- <a href="Bundle-bundle-product-impurities-pq-ex1.json.html">Product Impurities example JSON</a>

**HTML presentation example** of synthetic CTD data:
- <a href="impurities_rend_p.html">Product Impurities example HTML</a>

### Substance
<table>
<tr><td><img src="impurities_substance_resources.png" width="700"/></td></tr>
</table>

#### Resources
<table>
<tr><td>SubstanceDefinition</td><td>The substance itself and its impurities as substances</td></tr>
<tr><td>DocumentReference</td><td>Image files e.g. for molecular structure</td></tr>
</table>

#### Examples

**eCTD section synthetic source data samples** (PDF):
- 3.2.S.3 Characterisation
    - <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.S.3.2_Impurities.pdf ">3.2.S.3.2 Impurities</a>

**XML and JSON examples** of synthetic CTD data:
- <a href="Bundle-bundle-product-impurities-pq-ex2-sub.xml.html">Substance Impurities example XML</a>
- <a href="Bundle-bundle-product-impurities-pq-ex2-sub.json.html">Substance Impurities example JSON</a>

**HTML presentation example** of synthetic CTD data:
- <a href="impurities_rend_s.html">Substance Impurities example HTML</a>

### Profiles 
See [Artifacts Index: Impurities](artifacts.html#impurities)
