### Objective
Provides details about a stability study that includes test, test criteria, test results, and the batches of medicinal product subject to testing.

### Component Diagram
<table><tr><td><img src="stability_FHIR_resources [2023-07-28 Rik].png" /></td></tr></table>

### Description of Components
**Medicinal Product Definition**: The drug product (Stelbat tablets, 20mg)

**Ingredient**: The API (stelbatalol) or the ingredients that make up the DP

**Substance Definition**: Chemical or biological details about substance(s) associated with the API (molecular weight, molecular formula, stereochemistry, protein or nucleic acid subunits) 

**Medication**: Describes the batches that underwent stability testing

**Plan Definition**: Describes the stability study protocol

**Activity Definition**: Contains the Observation Definition resources that establish the list of tests and their acceptance criteria

**Observation Definition**: Each individual stability test and their acceptance criteria; also used to group tests

**Observation**: The results of a specific test mentioned in the Observation Definition

**Specimen Definition**: Describes the storage conditions and duration for each test

**Diagnostic Report**: Contains all rest results as a group and captures conclusions


### Typical Steps
1. Select Ingredients
2. Select Substances
3. Select Medicinal Product
4. Select individual tests and acceptance criteria
5. Select storage conditions
6. Populate stability study details
7. Select Batch references
8. Populate test results
9. Populate final report with conclusions


### Examples
<html>
  <body>
<p><b>Synthetic CMC sample</b> (PDF): <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/32P8.3StabilityReport.pdf">32P8.3StabilityReport.pdf</a>.</p>
      </body>
</html>

**HTML Version of the sample**: [link to sub-page]

**FHIR XML/JSON** (links to validated Bundle examples in this IG):
* [Bundle – Drug Substance Stability dx-PQ - Example 1](https://build.fhir.org/ig/HL7/uv-dx-pq/branches/master/Bundle-bundle-drug-substance-stability-dxpq-ex1.html)
* [Bundle – Drug Product Stability dx-PQ - Example 1](https://build.fhir.org/ig/HL7/uv-dx-pq/branches/master/Bundle-bundle-drug-product-stability-dxpq-ex1.html)


<html>
  <body>
<p>Open a PDF file <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/32P8.3StabilityReport.pdf">example 32P8.3StabilityReport.pdf with absolute URL to GitHub, raw .pdf</a>.</p>
      </body>
</html>


### Heading 2
Basic text...

Bullet List:
* A
* B
* C

**Bold text**
*Italics text*

**Links**
The [US Core Patient](http://hl7.org/fhir/us/core/StructureDefinition-us-core-patient.html) profile requires ...
