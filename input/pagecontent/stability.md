Details about a stability study including stability study design (tests and acceptance criteria), drug substance or drug product batches involved, test results, and conclusion.

### Product 

<table>
<tr><td><img src="stability_FHIR_resources.png" width="800"/></td></tr>
</table>


#### Resources
<table>

<tr><td>MedicinalProductDefinition</td><td>The drug product (Stelbat tablets, 20mg)</td></tr>
<tr><td>Ingredient</td><td>The active ingredient (stelbatalol) or the ingredients that make up the drug product</td></tr>
<tr><td>SubstanceDefinition</td><td>Chemical or biological details about substance(s) associated with the ingredient</td></tr>
<tr><td>Medication</td><td>Describes the batches that underwent stability testing</td></tr>
<tr><td>PlanDefinition</td><td>Describes the stability study protocol</td></tr>
<tr><td>ActivityDefinition</td><td>Used to group tests such as by timings</td></tr>
<tr><td>ObservationDefinition</td><td>Each individual test and acceptance criteria; also used to group closely related tests</td></tr>
<tr><td>Specimen</td><td>(not illustrated above) Identifying information about an individual specimen (an instance)</td></tr>
<tr><td>Observation</td><td>The results of a specific test mentioned in the ObservationDefinition</td></tr>
<tr><td>DiagnosticReport</td><td>Contains all results as a group and captures conclusions</td></tr>
<tr><td>Organization</td><td>(not illustrated above) The company/site that performed the testing or manufacturing</td></tr>

</table>

#### Examples
**eCTD section synthetic source data samples** (PDF):
- 3.2.P.8 Stability
  - <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.P.8.1_Stability_Summary_and_Conclusions.pdf ">3.2.P.8.1 Stability Summary and Conclusions</a>
  - <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.P.8.3_Stability_Data.pdf ">3.2.P.8.3 Stability Data</a>

**XML and JSON examples** of synthetic CTD data:
- <a href="Bundle-bundle-drug-stability-pq-ex1-prod.xml.html">Product Stability example XML</a>
- <a href="Bundle-bundle-drug-stability-pq-ex1-prod.json.html">Product Stability example JSON</a>

**HTML presentation example** of synthetic CTD data:
- <a href="stability_rend_p.html">Drug Product Stability</a>

### Substance
<table>
<tr><td><img src="stability_substance_FHIR_resources.png" width="800"/></td></tr>
</table>


#### Resources
<table>

<tr><td>SubstanceDefinition</td><td>The substance being tested</td></tr>
<tr><td>Substance</td><td>Identifying information about an actual batch of substance being tested (an instance)</td></tr>
<tr><td>PlanDefinition</td><td>Describes the stability study protocol</td></tr>
<tr><td>ActivityDefinition</td><td>Used to group tests such as by timings</td></tr>
<tr><td>ObservationDefinition</td><td>Each individual test and acceptance criteria; also used to group closely related tests</td></tr>
<tr><td>SpecificationDefinition</td><td>Describes the storage conditions and duration for each test</td></tr>
<tr><td>Specimen</td><td>(not illustrated above) Identifying information about an individual specimen (an instance)</td></tr>
<tr><td>Observation</td><td>The results of a specific test mentioned in the ObservationDefinition</td></tr>
<tr><td>DiagnosticReport</td><td>Contains all results as a group and captures conclusions</td></tr>
<tr><td>Organization</td><td>(not illustrated above) The company/site that performed the testing or manufacturing</td></tr>

<tr><td>Substance</td><td>Identifying information about an actual batch of substance (an instance)</td></tr>
</table>
#### Examples
**eCTD section synthetic source data samples** (PDF):
- 3.2.S.7 Stability
  - <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.S.7.1_Stability_Summary_and_Conclusions.pdf ">3.2.S.7.1 Stability Summary and Conclusions</a>
  - <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.S.7.3_Stability_Data.pdf ">3.2.S.7.3 Stability Data</a>

**XML and JSON examples** of synthetic CTD data:
- <a href="Bundle-bundle-drug-stability-pq-ex2-sub.xml.html">Substance Stability example XML</a>
- <a href="Bundle-bundle-drug-stability-pq-ex2-sub.json.html">Substance Stability example JSON</a>

**HTML presentation example** of synthetic CTD data:
- <a href="stability_rend_s.html">Drug Substance Stability</a>

### Profiles 
See [Artifacts Index: Stability Study](artifacts.html#stability-study)