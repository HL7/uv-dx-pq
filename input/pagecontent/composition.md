### Objective
Provide details about drug substance and drug product components, materials, and Quality reference standards.

### Component Diagram
Product Composition:
<table>
<tr><td><img src="product_description_and_composition.png" width="500"/></td></tr>
</table>
<table>
Reference Standards:
<tr><td><img src="reference_standards_substance_resources.png" width="700"/></td></tr>
</table>
 
### Description of Components
#### Drug Product Composition
**Medicinal Product Definition**: The drug product (Stelbat tablets, 20mg)

**Ingredient**: The active ingredient (stelbatalol) and other ingredients that make up the product

**SubstanceDefinition**: Substances that make up the ingredients of this product 

**PackagedProductDefinition**: Information about the packaging for the product


#### Drug Reference Standards
**SubstanceDefinition**: The substance for which reference standards are being established 

**Substance**: Identifying information about an actual batch of substance (an instance)

**PlanDefinition**: Describes the reference standards set of tests

**ObservationDefinition**: Each individual reference test and acceptance criteria

**Observation**: The results of a specific test, as mentioned in the ObservationDefinition

**DiagnosticReport**: Contains all results as a group and captures conclusions

**Organization**: The company/site that performed the testing or manufacturing (not illustrated)



### Examples
**CTD section samples** (PDF):
- <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.P.1_Description_Composition.pdf ">3.2.P.1 Description and Composition of the Drug Product</a>
- <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.S.5_Reference_Standards_or_Materials.pdf ">3.2.S.5 Reference Standards or Materials</a> (3.2.P.6 Reference Standards or Materials is similar.)

**XML/JOSN rendering** of synthetic CTD data:
- <a href="Bundle-bundle-drug-product-composition-pq-ex1.html">Drug Product Composition</a>
- <a href="Bundle-bundle-drug-reference-standards-pq-ex2-sub.html">Drug Substance Reference Standards or Materials</a>

**HTML rendering** of synthetic CTD data:
- <a href="composition_rend_p.html">Drug Product Composition</a>
- <a href="composition_rend_s.html">Drug Substance Reference Standards or Materials</a>

**FHIR XML/JSON** profiles and validated Bundle examples in this guide, see [Artifacts Index: Composition](artifacts.html#composition)