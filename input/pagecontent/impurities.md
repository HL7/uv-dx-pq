### Objective
Provide details about impurity identification and characterization.

### Component Diagram
<table>
<tr><td><img src="impurities_FHIR_resources.png" width="850"/></td></tr>
</table>
 
### Description of Components
**Medicinal Product Definition**: The drug product (Stelbat tablets, 20mg)

**Substance Definition**: Chemical or biological details about substance(s) associated with the active ingredient (molecular weight, molecular formula, stereochemistry, protein or nucleic acid subunits)

**Medication**: Describes the batches that underwent testing

**Observation**: The results of a specific test

**Diagnostic Report**: Contains all rest results as a group and captures conclusions

**Organization**: The company/site that performed the testing or manufacturing

### Examples
**CTD section samples** (PDF):
- 3.2.P.5 Control of Drug Product
    - <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.P.5.5_Characterisation_of_Impurities.pdf ">3.2.P.5.5 Characterisation of Impurities</a>
- 3.2.S.3 Characterisation
    - <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.S.3.2_Impurities.pdf ">3.2.S.3.2 Impurities</a>

**HTML rendering** of synthetic CTD data:
- <a href="impurities_rend_p.html">Drug Product Impurities</a>
- <a href="impurities_rend_s.html">Drug Substance Impurities</a>
- 
**FHIR XML/JSON** profiles and validated Bundle examples in this guide, see [Artifacts Index: Impurities](artifacts.html#impurities)