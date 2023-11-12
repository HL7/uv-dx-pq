### Objective
Provide details about drug substance and drug product batch release testing and results.

### Component Diagram
<table>
<tr><td><img src="batch_analysis_FHIR_resources.png" width="850"/></td></tr>
</table>
 
### Description of Components
**Medicinal Product Definition**: The drug product (Stelbat tablets, 20mg)

**Ingredient**: The active ingredient (stelbatalol) or the ingredients that make up the drug substance or product

**Substance Definition**: Chemical or biological details about substance(s) associated with the active ingredient (molecular weight, molecular formula, stereochemistry, protein or nucleic acid subunits)

**Medication**: Describes the batches that underwent testing

**Plan Definition**: Describes the test protocol

**Activity Definition**: Contains the Observation Definition resources that establish the list of tests and their acceptance criteria

**Observation Definition**: Each individual test and acceptance criteria; also test grouping

**Observation**: The results of a specific test mentioned in the Observation Definition

**Diagnostic Report**: Contains all rest results as a group and captures conclusions

### Examples
**CTD section samples** (PDF):
- 3.2.P.5 Control of Drug Product
    - <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.P.5.4_Batch_Analyses.pdf ">3.2.P.5.4 Batch Analyses</a>
- 3.2.S.4 Control of Drug Substance
    - <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.S.4.4_Batch_Analyses.pdf ">3.2.S.4.4 Batch Analyses</a>

**HTML rendering** of synthetic CTD data:
- <a href="batch_anal_rend_p.html">Drug Product Batch Analyses</a>
- <a href="batch_anal_rend_s.html">Drug Substance Batch Analyses</a>

**FHIR XML/JSON** profiles and validated Bundle examples in this guide, see [Artifacts Index: Batch Analysis](artifacts.html#batch-analysis)
