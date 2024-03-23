This implementation guide defines resources to support many scenarios. The following use cases are provided to facilitate implementers understanding how to use and apply this guide. These examples are based on the assumption that the manufacturer owns or has access to the data repository (storage server) that houses test results that are structured in conformance with this implementation guide.

### Stability (new to 18 months)
A sponsor plans to create a new stability study for a medicinal product with a proposed shelf-life of 18 months at 5 °C, with supporting stability data. Using a FHIR-based exchange mechanism, the sponsor takes the following approach:

**Step 1: Develop product details**

Using the [Global Substance Registration System (G-SRS)](https://gsrs.ncats.nih.gov/ginas/app/beta/) as a reference, the sponsor builds a list of Substance Definition and Ingredient resources to support the creation of a Medicinal Product Definition resource. For each medicinal product, the sponsor creates a list of Medication resources for each applicable batch.

Together, the medicinal product, ingredients, substances, and batch details provide a detailed account of what is about to be tested in this stability study. 

The resources associated with the medicinal products, ingredients, substances, and batch details only need to be created once. Once created they form a library of content that can be versioned and reused as needed for the stability use case or other use cases where needed.

**Step 2: Develop tests details**

Create a library of tests by creating one ObservationDefinition resource per test. E.g., Identification, Assay by HPLC, Dissolution. The ObservationDefinition resource includes details such as the name, identifier, method, and test criteria. As noted above, once the library of tests has been created, that content can be versioned and reused as needed.

Create an ActivityDefinition resource as a means of grouping all of the tests needed for the study.

**Step 3: Develop the stability study**

Create a PlanDefinition resource to create the stability study itself to define such details as study objective, time point description, statistical model.

**Step 4: Send stability study to testing lab**

The sponsor creates a bundle of the stability study and sends the Bundle to the testing lab (whether that is an internal department or external organization) that will conduct the study and collect the results. The Bundle is sent to the lab via RESTful API (application programming interfaces).

The testing lab receives the Stability Study Bundle via RESTful API, their systems automatically parse the contents, notifies the relevant personnel of the request, and displays the study details.

The testing lab conducts the stability study as per the study details and collects the results.

**Step 5: Return stability study results to the sponsor**

The testing lab creates a collection of Observation resources to capture the results of each test. The testing lab also uses the DiagnosticReport resource to capture additional conclusions or other details about the study results.

The testing lab creates a Bundle resource and returns the results to the sponsor via RESTful API.

**Step 6: Receive results of the stability study tests**

The sponsor’s system receives the Bundle with the results via RESTful API. Their system parses the Bundle contents, notifies the relevant personnel that the results have arrived, and displays the study details.

**Step 7: Develop final stability study report**

The sponsor creates a final study report by creating a DiagnosticReport resource to capture their conclusions and any other necessary details.

If needed, this complete stability study can be bundled and transformed into an output format that is acceptable to any given national regulator responsible for the authorization of medicinal products; e.g., XML, JSON, PDF or Word.


### Stability Update (18 to 24 months)
A sponsor plans to submit a request to a health authority to update the shelf life for their medicinal product from 18 months at 5 °C to 24 months at 5 °C, with supporting stability data to provide rationale for the change. Using a FHIR-based exchange mechanism, the sponsor takes the following approach:

**Step 1: Acquire previously used stability study data from the library**

From the pharmaceutical Quality data repository (or library), the sponsor pulls up the previously submitted Stability Bundle.

**Step 2: Update**

The sponsor decides to use the previously submitted Bundle as is, except for the following sections which need to be updated for the new information. The sponsor updates the following sections to include the new information needed to support the stability:
- Medication
- Stability Study
- Specimen Storage
- Stability Test Result

The sponsor’s Quality data repository creates new versions of the existing resources. This facilitates the sponsor’s ability to perform tracking and lifecycle management activities on what data is available, where it was used or submitted, and its status.

**Step 3: Send to regulator**

The stability update can be bundled and transformed into an output format that is acceptable to any given national regulator responsible for the authorization of medicinal products; e.g., XML, JSON, PDF or Word.

The sponsor submits the updated Stability Bundle to the health authority for review (refer to local regulatory guidance for detail on acceptable submission requirements and methods).

**Step 4: Receive health authority receipt notification**

The regulator confirms receipt of the update.

**Step 5: Receive health authority questions**

The sponsor receives questions from the health authority on the updated Bundle submitted, asking for additional data to support the change. Specifically, the health authority asked the manufacturer to include additional microbiological testing in the drug product specifications to support the extended shelf life.

**Step 6: Update resources**

From the Quality data repository, the sponsor updates the Specification Bundle for Drug Product, adding the new test method with its acceptance criteria.

**Step 7: Send response to regulator questions**

The updated Specification Bundle is submitted in response to the regulator’s request.

**Step 8: Receive regulator approval**

The regulator provides notice that the specification change and shelf-life extension are approved. From there, the sponsor can take the necessary steps to update the status of the dataset in their Quality repository.


### Test Specification Change
A sponsor plans to execute a change in the drug substance identity method and acceptance criteria, which will necessitate a change in the drug substance specification. The sponsor will send the details of the desired change to a contract manufacturing partner (CMO) to conduct the change assessment. To build the change request in FHIR, as described above in the previous examples, the sponsor will need to download and update the Specification Bundle before submitting it to the CMO.

**Step 1: Acquire previously used data from the library**
To assist with the process of updating the Bundle, the sponsor can access the ObservationDefinition resources that serve as a comprehensive list of analytical procedures and test methods that will be maintained in a public repository, which can be pulled into the Quality Profile Library. Sponsors can access the test library via RESTful API, select the desired tests needed for their specification, and download them into their local repository.

**Step 2: Build test specification**

To build the test specification, the sponsor may choose from the menu of individual tests in the library of ObservationDefinition, PlanDefinition, MedicinalProductDefinition, Ingredient, and SubstanceDefinition resources to initiate build of a custom specification. For example, for a specification related to identity testing, the sponsor can select from a list of common compendial analytical procedures (select examples include: HPLC, cell-based assay, and gene-based assay) and edit the ObservationDefinition resource parameters accordingly. 

Alternatively, the sponsor could choose from a selection of prefabricated specifications that already contain recommended test methods and acceptance criteria. For non-compendial methods, a new library entry may need to be created in the sponsors’ local terminology repository.

**Step 3: Send specification to CMO**

Once the specification is created according to the sponsors’ need, it can be packaged into a bundle and sent to the CMO via RESTful API to run the change assessment for the new specification. 

**Step 4: Return test results to sponsor**

The test results would be sent back to the sponsor in the same FHIR format via RESTful API, and the sponsor would update the Specification and Batch Analyses bundles with any additional contextual information or metadata. 

**Step 5: Send to regulator**
Once the data has been deemed ready for health authority review, the data can be transformed to meet national regulatory requirements and submitted to a health authority for review.

### Facility Change
Organization or facility information can be repetitive and challenging to manage throughout a product’s lifecycle and across jurisdictions, as global regulators may have different addresses and/or facility identifiers on file. In this scenario, a sponsor company wants to document a change to a testing facility’s address that is captured in the Organization resource.

**Step 1: Acquire previously used data from the library**

As described previously, the sponsor can download the Organization resource from a library.

**Step 2: Update resources**

Update the information contained within the relevant Organization resource(s). E.g., create a new version to capture a new name; add alias names for this organization in a different language; show a change in address, or add additional identifiers.

The sponsor may update the information for internal or external audit tracking of facilities. Similar to the Specification bundle, the Organization Bundle may leverage auto-population capabilities based on connectivity to external databases containing Organization information, such as the EMA’s Organisation Management Service (OMS) or U.S. FDA’s Data Dashboard. The Organization profile within the Quality Library can contain all identifiers and addresses for a given site, and specific attributes (e.g., SPOR Organisation ID, Firm Establishment Identifier (FEI), Data Universal Number System (DUNS) number) can be pulled into Bundles on an as-needed basis to support both global information management as well as compliance with regional requirements. This functionality reduces or eliminates the need for manual entry, drives consistency, and allows for reuse of information across Bundles.

**Step 3: Send or receive Organization data**

The updated Organization resource(s) can now be sent to an external party (CMO, regulator, or others) using RESTful API. 
