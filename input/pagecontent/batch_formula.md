### Objective
Provide details about drug product master batch properties and formula.

### Component Diagram
<table>
<tr><td><img src="product_batch_formula.png" width="700"/></td></tr>
</table>
 
### Description of Components
**Ingredient**: The active ingredient (stelbatalol) or the ingredients that make up the drug substance or product

**Medication**: Describes the batches that underwent stability testing

**Medicinal Product Definition**: The drug product (Stelbat tablets, 20mg)

**Substance Definition**: Chemical or biological details about substance(s) associated with the active ingredient (molecular weight, molecular formula, stereochemistry, protein or nucleic acid subunits) 

### Examples
**CTD section samples** (PDF):
- 3.2.P.3 Manufacture</li>
    - <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.P.3.2_Batch_Formula.pdf ">3.2.P.3.2 Batch Formula</a>

**HTML rendering** of synthetic CTD data:
- <a href="batch_formula_rend_p.html">Drug Product Batch Formula</a>

**FHIR XML/JSON** profiles and validated Bundle examples in this guide, see [Artifacts Index: Batch Formula](artifacts.html#batch-formula)