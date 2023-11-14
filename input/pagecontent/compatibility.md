### Objective
Provide details about compatibility studies and results.

### Component Diagram
<table>
<tr><td>  </td></tr>
</table>
 
### Description of Components
**Diagnostic Report**: Contains all rest results as a group and captures conclusions

**Medication**: Describes the batches that underwent stability testing

**Medicinal Product Definition**: The drug product (Stelbat tablets, 20mg)

**Observation Definition**: Each individual stability test and their acceptance criteria; also used to group tests

**Observation**: The results of a specific test mentioned in the Observation Definition

**Organization**: The company/site that performed the testing or manufacturing

**Plan Definition**: Describes the stability study protocol

### Examples
**CTD section samples** (PDF):
- 3.2.P.2 Pharmaceutical Development
    - <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.P.2.6_Compatibility.pdf ">3.2.P.2.6 Compatibility</a>

**HTML rendering** of synthetic CTD data:
- <a href="compatibility_rend_p.html">Drug Product Compatibility</a>

**FHIR XML/JSON** profiles and validated Bundle examples in this guide, see [Artifacts Index: Compatibility](artifacts.html#compatibility)