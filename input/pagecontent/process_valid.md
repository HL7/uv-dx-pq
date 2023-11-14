### Objective
Provide details about manufacturing process validation protocols and results.

### Component Diagram
<table>
<tr><td><img src="process_validation_FHIR_resources [2023-07-28 Rik].png" width="850"/></td></tr>
</table>

### Description of Components
**Activity Definition**: Contains the Observation Definition resources that establish the list of tests and their acceptance criteria

**DeviceDefinition**: Information about devices/equipment used testing or manufacture

**Diagnostic Report**: Contains all rest results as a group and captures conclusions

**Ingredient**: The active ingredient (stelbatalol) or the ingredients that make up the drug substance or product

**Medication**: Describes the batches that underwent testing

**Medicinal Product Definition**: The drug product (Stelbat tablets, 20mg)

**Observation Definition**: Each individual test and acceptance criteria; also test grouping

**Observation**: The results of a specific test mentioned in the Observation Definition

**Organization** (not illustrated above): The company/site that performed the testing or manufacturing

**Plan Definition**: Describes the process validation test protocol

**Substance Definition**: Chemical or biological details about substance(s) associated with the active ingredient (molecular weight, molecular formula, stereochemistry, protein or nucleic acid subunits)

**Substance**: Identifying information about an actual batch of substance (an instance)

### Examples
**CTD section samples** (PDF):
- 3.2.P.3 Manufacture
    - <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.P.3.5_Process_Validation.pdf ">3.2.P.3.5 Process Validation and/or Evaluation</a>
    - <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.P3.5_Process_Validation_and-or_Evaluation_BIO.pdf ">3.2.P.3.5 Process Validation and/or Evaluation - Biologic Example</a>
- 3.2.S.2 Manufacture
    - <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.S.2.5_Process_Validation_and-or_Evaluation.pdf ">3.2.S.2.5 Process Validation and/or Evaluation</a>

**HTML rendering** of synthetic CTD data:
- <a href="process_valid_rend_p.html">Drug Product Process Validation</a>
- <a href="process_valid_rend_pb.html">Drug Product Process Validation - Biologic</a>
- <a href="process_valid_rend_s.html">Drug Substance Process Validation</a>

**FHIR XML/JSON** profiles and validated Bundle examples in this guide, see [Artifacts Index: Process Validation](artifacts.html#process-validation)