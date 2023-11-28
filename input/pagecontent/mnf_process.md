
Manufacturing process description and details about unit operations, process parameters, and in-process controls.

### Product 
<table>
<tr><td><img src="manufacturing_process_FHIR_resources.png" width="750"/></td></tr>
</table>

#### Resources
<table>

<tr><td>MedicinalProductDefinition</td><td>The drug product (Stelbat tablets, 20mg)</td></tr> 
<tr><td>Ingredient</td><td>The active ingredient (stelbatalol) or the ingredients that make up the drug substance or product</td></tr> 
<tr><td>Substance Definition</td><td>Details about the substance associated with the product ingredients, or those that participate in the steps of the manufacturing process</td></tr> 
<tr><td>Plan Definition</td><td>Describes the manufacturing process protocol. Includes "action" steps, parameters, and output criteria</td></tr> 
<tr><td>DeviceDefinition</td><td>Information about devices/equipment used in the manufacturing</td></tr> 
<tr><td>DocumentReference</td><td>(not shown) Link to images, about process steps for example</td></tr> 

</table>

#### Examples
**eCTD section synthetic source data samples** (PDF):
- 3.2.P.3 Manufacture
    - <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.P.3.3_Description_Manufacturing.pdf ">3.2.P.3.3 Description of Manufacturing Process and Process Controls</a>

**XML and JSON examples** of synthetic CTD data:
- <a href="Bundle-bundle-product-manufacturing-pq-ex1.xml.html">Product Manufacturing Process example XML</a>
- <a href="Bundle-bundle-product-manufacturing-pq-ex1.json.html">Product Manufacturing Process example JSON</a>

**HTML presentation example** of synthetic CTD data:
- <a href="mnf_process_rend_p.html">Product Manufacturing Process</a>

### Substance
<table>
<tr><td><img src="substance_manufacturing_process_resources.png" width="750"/></td></tr>
</table>
  
#### Resources
<table>

<tr><td>SubstanceDefinition</td><td>Details about the substance being manufactured, or those that participate in the steps of the manufacturing process</td></tr> 
<tr><td>PlanDefinition</td><td>Describes the manufacturing process protocol. Includes "action" steps, parameters, and output criteria</td></tr> 

</table>

#### Examples
**CTD section samples** (PDF):
- 3.2.S.2 Manufacture
    - <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.S.2.2_Description_Manufacturing.pdf ">3.2.S.2.2 Description of Manufacturing Process and Process Controls</a>


**XML and JSON examples** of synthetic CTD data:
- <a href="Bundle-bundle-product-manufacturing-pq-ex2-sub.xml.html">Substance Manufacturing Process example XML</a>
- <a href="Bundle-bundle-product-manufacturing-pq-ex2-sub.json.html">Substance Manufacturing Process example JSON</a>

**HTML presentation example** of synthetic CTD data:
- <a href="mnf_process_rend_s.html">Substance Manufacturing Process</a>

### Profiles 
See [Artifacts Index: Manufacturing Process](artifacts.html#manufacturing-process)
