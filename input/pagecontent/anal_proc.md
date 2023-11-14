### Objective
Provide details about test methods used to analyze drug substances and drug products including compendial and non-compendial testing.

### Component Diagram
<table>
<tr><td><img src="analytical procedures.png" width="850"/></td></tr>
</table>
 
### Description of Components
**DeviceDefinition**: Information about devices/equipment used testing or manufacture

**Medicinal Product Definition**: The drug product (Stelbat tablets, 20mg)

**Observation Definition**: Each individual stability test and their acceptance criteria; also used to group tests

**Plan Definition**: Describes the stability study protocol

**Specimen Definition**: Describes the storage conditions and duration for each test

**Substance Definition**: Chemical or biological details about substance(s) associated with the active ingredient (molecular weight, molecular formula, stereochemistry, protein or nucleic acid subunits) 

### Examples
**CTD section samples** (PDF):
- 3.2.P.5 Control of Drug Product
    - <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.P.5.2_Analytical_Procedures-G1113-Assay-ID-Deg-Sample-Prep.pdf ">3.2.P.5.2 Analytical Procedures</a>
- 3.2.S.4 Control of Drug Substance
    - <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.S.4.2_Analytical_Procedures-G1112-PSD-Method.pdf ">3.2.S.4.2 Analytical Procedures</a>

**HTML rendering** of synthetic CTD data:
- <a href="anal_proc_rend_p.html">Drug Product Analytical Procedures</a>
- <a href="anal_proc_rend_s.html">Drug Substance Analytical Procedures</a>

**FHIR XML/JSON** profiles and validated Bundle examples in this guide, see [Artifacts Index: Analytical Procedure](artifacts.html#analytical-procedures)
