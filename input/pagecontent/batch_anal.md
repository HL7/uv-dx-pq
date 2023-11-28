Details about drug substance and drug product batch release testing and results.

### Product 

<table>
<tr><td><img src="batch_analysis_FHIR_resources.png" width="700"/></td></tr>
</table>

#### Resources
<table>
<tr><td>MedicinalProductDefinition</td><td>The drug product (Stelbat tablets, 20mg)</td></tr>
<tr><td>Medication</td><td>Describes the batches that underwent testing</td></tr>
<tr><td>Ingredient</td><td>The active ingredient (stelbatalol) or the ingredients that make up the drug product</td></tr>
<tr><td>SubstanceDefinition</td><td>Chemical or biological details about substance(s) associated with the ingredient</td></tr>
<tr><td>PlanDefinition</td><td>Describes the batch analysis protocol</td></tr>
<tr><td>ObservationDefinition</td><td>Each individual  test and acceptance criteria; also used to group tests</td></tr>
<tr><td>Observation</td><td>The results of a specific test mentioned in the ObservationDefinition</td></tr>
<tr><td>DiagnosticReport</td><td>Contains all results as a group and captures conclusions</td></tr>
<tr><td>Organization</td><td>(not illustrated above): The company/site that performed the testing or manufacturing</td></tr>
</table>

### Examples
**CTD section samples** (PDF):
- 3.2.P.5 Control of Drug Product
    - <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.P.5.4_Batch_Analyses.pdf ">3.2.P.5.4 Batch Analyses</a>

**XML and JSON examples** of synthetic CTD data:
- <a href="Bundle-bundle-batch-analysis-pq-ex1-prod.xml.html">Product Batch Analysis example XML</a>
- <a href="Bundle-bundle-batch-analysis-pq-ex1-prod.json.html">Product Batch Analysis example JSON</a>

**HTML rendering** of synthetic CTD data:
- <a href="batch_anal_rend_p.html">Product Batch Analysis</a>


### Substance
<table>
<tr><td><img src=" substance_batch_analysis_resources.png" width="700"/></td></tr>
</table>
 

#### Resources
<table>
<tr><td>SubstanceDefinition</td><td>The substance being tested</td></tr>
<tr><td>Substance</td><td>Identifying information about an actual batch of substance being tested (an instance)</td></tr>
<tr><td>PlanDefinition</td><td>Describes the batch analysis protocol</td></tr>
<tr><td>ObservationDefinition</td><td>Each individual  test and acceptance criteria; also used to group tests</td></tr>
<tr><td>Observation</td><td>The results of a specific test mentioned in the ObservationDefinition</td></tr>
<tr><td>DiagnosticReport</td><td>Contains all results as a group and captures conclusions</td></tr>
<tr><td>Organization</td><td>(not illustrated above): The company/site that performed the testing or manufacturing</td></tr>
</table>
#### Examples
**eCTD section synthetic source data samples** (PDF):
- 3.2.S.4 Control of Drug Substance
    - <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.S.4.4_Batch_Analyses.pdf ">3.2.S.4.4 Batch Analyses</a>

**XML and JSON examples** of synthetic CTD data:
- <a href="Bundle-bundle-batch-analysis-pq-ex2-sub.xml.html">Substance Batch Analysis example XML</a>
- <a href="Bundle-bundle-batch-analysis-pq-ex2-sub.json.html">Substance Batch Analysis example JSON</a>

**HTML presentation example** of synthetic CTD data:
- <a href="batch_anal_rend_s.html">Substance Batch Analyses</a>

### Profiles 
See [Artifacts Index: Batch Analysis](artifacts.html#batch-analysis)
