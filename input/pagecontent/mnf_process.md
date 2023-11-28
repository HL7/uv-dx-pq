### Objective
Provide a manufacturing process description and details about unit operations, process parameters, and in-process controls.

### Component Diagram
Product:
<table>
<tr><td><img src="manufacturing_process_FHIR_resources.png" width="750"/></td></tr>
</table>

Substance:
<table>
<tr><td><img src="substance_manufacturing_process_resources.png" width="750"/></td></tr>
</table>
  
### Description of Components
**DeviceDefinition**: Information about devices/equipment used testing or manufacture

**Document Reference**: Document(s) of any kind, including a diagram or image

**Ingredient**: The active ingredient (stelbatalol) or the ingredients that make up the drug substance or product

**Medicinal Product Definition**: The drug product (Stelbat tablets, 20mg)

**Organization** (not illustrated above): The company/site that performed the testing or manufacturing

**Plan Definition**: Describes the manufacturing process protocol

**Substance Definition**: Chemical or biological details about the substance(s) associated with the active ingredient (molecular weight, molecular formula, stereochemistry, protein or nucleic acid subunits)

### Examples
**CTD section samples** (PDF):
- 3.2.P.3 Manufacture
    - <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.P.3.3_Description_Manufacturing.pdf ">3.2.P.3.3 Description of Manufacturing Process and Process Controls</a>
- 3.2.S.2 Manufacture
    - <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.S.2.2_Description_Manufacturing.pdf ">3.2.S.2.2 Description of Manufacturing Process and Process Controls</a>

**HTML rendering** of synthetic CTD data:
- <a href="mnf_process_rend_p.html">Drug Product Manufacturing Process</a>
- <a href="mnf_process_rend_s.html">Drug Substance Manufacturing Process</a>

**FHIR XML/JSON** profiles and validated Bundle examples in this guide, see [Artifacts Index: Manufacturing Process](artifacts.html#manufacturing-process)
