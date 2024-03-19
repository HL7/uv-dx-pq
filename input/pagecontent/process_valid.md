
Details about manufacturing process validation protocols and results.

### Product 
<table>
<tr><td><img src="process_validation_FHIR_resources.png" width="850"/></td></tr>
</table>


#### Resources

<table>

<tr><td>MedicinalProductDefinition</td><td>The drug product (Stelbat tablets, 20mg)</td></tr>
<tr><td>Ingredient</td><td>The active ingredient (stelbatalol) or the ingredients that make up the drug product</td></tr>
<tr><td>SubstanceDefinition</td><td>Chemical or biological details about substance(s) associated with the ingredient</td></tr>
<tr><td>Medication</td><td>Describes the batches that underwent testing</td></tr>
<tr><td>PlanDefinition</td><td>Describes the process validation protocol</td></tr>
<tr><td>ObservationDefinition</td><td>Each individual test and acceptance criteria; also used to group closely related tests</td></tr>
<tr><td>ActivityDefinition</td><td>Used to group tests such as by timings</td></tr>
<tr><td>Observation</td><td>The results of a specific test mentioned in the ObservationDefinition</td></tr>
<tr><td>DiagnosticReport</td><td>Contains all results as a group and captures conclusions</td></tr>
<tr><td>Organization</td><td>(not illustrated above): The company/site that performed the testing or manufacturing</td></tr>
<tr><td>Procedure</td><td>(not illustrated above): Records the actual performance of a manufacturing step, so that measurements can be recorded via Observations (e.g., “hold time”, “bioburden”)</td></tr>

<tr><td>Substance</td><td>Identifying information about an actual batch of substance (an instance)</td></tr>
</table>

#### Examples
**CTD section synthetic source data samples** (PDF):
- 3.2.P.3 Manufacture
    - <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.P.3.5_Process_Validation.pdf ">3.2.P.3.5 Process Validation and/or Evaluation</a>
    - <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.P.3.5_Process_Validation_and-or_Evaluation_BIO.pdf ">3.2.P.3.5 Process Validation and/or Evaluation - Biologic Example</a>

**XML and JSON examples** of synthetic quality data:
- <a href="Bundle-bundle-product-process-validation-pq-ex1.xml.html">Product Process Validation example XML</a>
- <a href="Bundle-bundle-product-process-validation-pq-ex1.json.html">Product Process Validation example JSON</a>
- <a href="Bundle-bundle-product-process-validation-pq-ex3-prod-bio.xml.html">Product Process Validation Biological example XML</a>
- <a href="Bundle-bundle-product-process-validation-pq-ex3-prod-bio.json.html">Product Process Validation Biological example JSON</a>

**HTML presentation example** of synthetic quality data:
- <a href="process_valid_rend_p.html">Drug Product Process Validation</a>
- <a href="process_valid_rend_pb.html">Drug Product Process Validation - Biologic</a>

Note that HTML examples represent ways to create human-readable output using structured quality data (see section 1.2 Scope).


### Substance
<table>
<tr><td><img src="substance_process_validation_resources.png" width="850"/></td></tr>
</table>

#### Resources
<table>

<tr><td>SubstanceDefinition</td><td>Chemical or biological details about substance(s) associated with the ingredient</td></tr>
<tr><td>Substance</td><td>Identifying information about an actual batch of substance (an instance)</td></tr>
<tr><td>PlanDefinition</td><td>Describes the process validation protocol</td></tr>
<tr><td>ObservationDefinition</td><td>Each individual test and acceptance criteria; also used to group closely related tests</td></tr>
<tr><td>ActivityDefinition</td><td>Used to group tests such as by timings</td></tr>
<tr><td>Observation</td><td>The results of a specific test mentioned in the ObservationDefinition</td></tr>
<tr><td>DiagnosticReport</td><td>Contains all results as a group and captures conclusions</td></tr>
<tr><td>Organization</td><td>(not illustrated above): The company/site that performed the testing or manufacturing</td></tr>

</table>

#### Examples
**CTD section synthetic source data samples** (PDF):
- 3.2.S.2 Manufacture
    - <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.S.2.5_Process_Validation_and-or_Evaluation.pdf ">3.2.S.2.5 Process Validation and/or Evaluation</a>

**XML and JSON examples** of synthetic quality data:
- <a href="Bundle-bundle-product-process-validation-pq-ex2-sub.xml.html">Substance Process Validation example XML</a>
- <a href="Bundle-bundle-product-process-validation-pq-ex2-sub.json.html">Substance Process Validation example JSON</a>

**HTML presentation example** of synthetic quality data:
- <a href="process_valid_rend_s.html">Substance Process Validation</a> - Note that HTML examples represent ways to create human-readable output using structured quality data (see section 1.2 Scope).

### Profiles 
See [Artifacts Index: Process Validation](artifacts.html#process-validation)