### Objective
Provide details about batch(es) of the  drug substance and drug product with identifiers.

### Component Diagram
<table>
<tr><td>  </td></tr>
</table>
 
### Description of Components
**Medication**: Describes the batches that underwent stability testing

**Medicinal Product Definition**: The drug product (Stelbat tablets, 20mg)

**Organization** (not illustrated above): The company/site that performed the testing or manufacturing

**Substance Definition**: Chemical or biological details about substance(s) associated with the active ingredient (molecular weight, molecular formula, stereochemistry, protein or nucleic acid subunits) 

**Substance**: Identifying information about an actual batch of substance (an instance)


### Examples
**CTD section samples** (PDF):
- 3.2.P.5 Control of Drug Product
    - <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.P.5.4_Batch_Analyses.pdf ">3.2.P.5.4 Batch Analyses</a>
- 3.2.S.4 Control of Drug Substance
    - <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.S.4.4_Batch_Analyses.pdf ">3.2.S.4.4 Batch Analyses</a>

**HTML rendering** of synthetic CTD data:
- <a href="batch_info_rend_p.html">Drug Product Batch or Lot Information</a>
- <a href="batch_info_rend_s.html">Drug Substance Batch or Lot Information</a>

**FHIR XML/JSON** profiles and validated Bundle examples in this guide, see [Artifacts Index: Batch or Lot Information](artifacts.html#batch-or-lot-information)