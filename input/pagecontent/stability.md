### Objective
Provide details about a stability study including stability study design (tests and acceptance criteria), drug substance or drug product batches involved, test results, and conclusion.

### Component Diagram
Product:
<table>
<tr><td><img src="stability_FHIR_resources.png" width="850"/></td></tr>
</table>
Substance:
<table>
<tr><td><img src="stability_substance_FHIR_resources.png" width="850"/></td></tr>
</table>


### Description of Components
**Activity Definition**: Contains the Observation Definition resources that establish the list of tests and their acceptance criteria

**Diagnostic Report**: Contains all rest results as a group and captures conclusions

**Ingredient**: The active ingredient (stelbatalol) or the ingredients that make up the drug substance or product

**Medication**: Describes the batches that underwent stability testing

**Medicinal Product Definition**: The drug product (Stelbat tablets, 20mg)

**Observation Definition**: Each individual stability test and their acceptance criteria; also used to group tests

**Observation**: The results of a specific test mentioned in the Observation Definition

**Organization** (not illustrated above): The company/site that performed the testing or manufacturing

**Plan Definition**: Describes the stability study protocol

**Specimen Definition**: Describes the storage conditions and duration for each test

**Specimen**: Identifying information about an individual specimen (an instance)

**Substance Definition**: Chemical or biological details about substance(s) associated with the active ingredient (molecular weight, molecular formula, stereochemistry, protein or nucleic acid subunits) 

**Substance**: Identifying information about an actual batch of aubstance (an instance)

### Examples
**CTD section samples** (PDF):
- 3.2.P.8 Stability
  - <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.P.8.1_Stability_Summary_and_Conclusions.pdf ">3.2.P.8.1 Stability Summary and Conclusions</a>
  - <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.P.8.3_Stability_Data.pdf ">3.2.P.8.3 Stability Data</a>
- 3.2.S.7 Stability
  - <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.S.7.1_Stability_Summary_and_Conclusions.pdf ">3.2.S.7.1 Stability Summary and Conclusions</a>
  - <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.S.7.3_Stability_Data.pdf ">3.2.S.7.3 Stability Data</a>

**HTML rendering** of synthetic CTD data:
- <a href="stability_rend_p.html">Drug Product Stability</a>
- <a href="stability_rend_s.html">Drug Substance Stability</a>

**FHIR XML/JSON** profiles and validated Bundle examples in this guide, see [Artifacts Index: Stability Study](artifacts.html#stability-study)