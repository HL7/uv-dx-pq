The HTML rendering below shows a synthetic CMC data example for Common Technical Document (CTD) Module 3: Quality, section 3.2.P.5 Control of Drug Product, subsection 3.2.P.5.5 Characterisation of Impurities. 

The section 3.2.S.3 Characterisation, subsection 3.2.S.3.2 Impurities, is similar.

<html>
<body>
<div class="greyable">
<div class="controls remove"><span> </span><span class="button" onclick="toggleSummary(this)" title="summary view">summary on</span><span> </span><span class="button" onclick="toggleCodes(this)" title="details of code systems">show codes</span><span> </span><span class="button" onclick="toggleDebug(this)" title="extra technical info">show debug</span><span style="float:right; margin-right:3px;"><span class="buttonNoUnderlineHidden" onclick="toggleLowerControls(this)"><sup title="expand this"> v </sup></span><span class="buttonNoUnderline" onclick="toggleRemove(this)"><sup title="close this">x</sup></span></span><span> </span><span class="button" onclick="toggleRemoveTask(this)" title="details of tasks for changes">hide task</span><span> </span><span class="button" onclick="toggleRemoveProvenance(this)" title="details of provenance for changes">hide provenance</span><span> </span><span class="button" onclick="toggleRemoveTables(this)" title="tabular data">hide tables</span><br><span> </span><span class="button" onclick="toggleDarkMode(this)" title="darkened display">dark mode</span><span> </span><span class="button" onclick="toggleApplyGreyscale(this)" title="grey and white display">greyscale</span><span> </span><span class="button" onclick="toggleBlackAndWhite(this,false)" title="black and white display">b&amp;w</span><span> </span><span class="button" onclick="togglePlainMode(this);" title="plain text display">text only</span></div>
<div class="divBody">
<div class="debugOffBorder">
<div class="bundleBorder">
<div class="debugOff">
<div class="bundle"><a class="plainLink"><span class="bold" title="Bundle (id: product-impurities)
Profile: http://accumulus.org/fhir/dx-cmc/impurities 

<Bundle>
    <id value=&quot;product-impurities&quot;/>
    <meta>
        <profile value=&quot;http://accumulus.org/fhir/dx-cmc/impurities&quot;/>
    </meta>
    <type value=&quot;collection&quot;/>
    <entry>
        <fullUrl value=&quot;urn:uuid:6f4a3311-92c5-2b4a-533e-76341e414c63&quot;/>
        <resource>
            <DiagnosticReport>
                <!-- <id value=&quot;studyResultsReport&quot;/>-->
                <id value=&quot;diagnosticreport-product-impurities&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/DiagnosticReport-stability-study-results-dxpq&quot;/>
                </meta>
                <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tabulateBatchImpurities&quot;>
                    <valueBoolean value=&quot;true&quot;/>
                </extension>
                <identifier>
                    <system value=&quot;https://eudract.europa.eu/example/identifier&quot;/>
                    <value value=&quot;ABC1234&quot;/>
                </identifier>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/reportType&quot;/>
                        <code value=&quot;111&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                </code>
                <effectiveDateTime value=&quot;2020-12&quot;/>
                <!-- start of impurity test -->
                <performer>
                    <reference value=&quot;Organization/tester&quot;/>
                </performer>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impCd&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impCd-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impCd-3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impPb&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impPb-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impPb-3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impAs&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impAs-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impAs-3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impHg&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impHg-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impHg-3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impCo&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impCo-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impCo-3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impV&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impV-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impV-3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impNi&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impNi-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impNi-3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impCu&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impCu-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impCu-3&quot;/>
                </result>
                <conclusion value=&quot;1. Elemental Impurities - No elemental impurities are intentionally added during the manufacturing of drug product...&quot;/>
            </DiagnosticReport>
        </resource>
    </entry>
    <!-- Section 11 - Stability Study - Results -->
    <entry>
        <fullUrl value=&quot;urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51&quot;/>
        <resource>
            <Medication>
                <id value=&quot;medication-actual-batch&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <!-- todo consider change this be the MID? -->
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                            <!--reference value=&quot;urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d5&quot;/-->
                        </valueReference>
                    </extension>
                </code>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <!-- #158 -->
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <!-- #153 -->
                    <lotNumber value=&quot;33445&quot;/>
                </batch>
            </Medication>
        </resource>
    </entry>
    <!-- Section 8 - Batch or Lot Information (another batch 2 of 3) -->
    <entry>
        <fullUrl value=&quot;urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc&quot;/>
        <resource>
            <Medication>
                <id value=&quot;medication-actual-batch-2&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>
                    </extension>
                </code>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <lotNumber value=&quot;33446&quot;/>
                </batch>
            </Medication>
        </resource>
    </entry>
    <!-- Section 8 - Batch or Lot Information (another batch 3 of 3) -->
    <entry>
        <fullUrl value=&quot;urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06&quot;/>
        <resource>
            <Medication>
                <id value=&quot;medication-actual-batch-3&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>
                    </extension>
                </code>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <lotNumber value=&quot;33447&quot;/>
                </batch>
            </Medication>
        </resource>
    </entry>
    <!-- Section 4.1 - Manufacturer -->
    <entry>
        <fullUrl value=&quot;urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a&quot;/>
        <resource>
            <Organization>
                <id value=&quot;manufacturer&quot;/>
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>
                </identifier>
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;/>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>
                    </address>
                </contact>
            </Organization>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:ab7997fa-7b46-1175-3f01-6f6997f7878a&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impCd&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;5&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;66586000&quot;/>
                            <display value=&quot;Cadmium (substance)&quot;/>
                        </coding>
                        <text value=&quot;Cd&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:4052f28b-64a2-392d-35e4-ec8e912434d2&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impCd-2&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-2&quot;/>
                </subject>
                <valueString value=&quot;ND&quot;/>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;66586000&quot;/>
                            <display value=&quot;Cadmium (substance)&quot;/>
                        </coding>
                        <text value=&quot;Cd&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:34ebc51d-8105-0589-3c8d-e7aa6bd0a06c&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impCd-3&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-3&quot;/>
                </subject>
                <valueString value=&quot;ND&quot;/>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;66586000&quot;/>
                            <display value=&quot;Cadmium (substance)&quot;/>
                        </coding>
                        <text value=&quot;Cd&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:2940bf11-05bf-6ce2-3c64-457d0d1f9913&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impPb&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch&quot;/>
                </subject>
                <valueString value=&quot;ND&quot;/>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;88488004&quot;/>
                            <display value=&quot;Lead (substance)&quot;/>
                        </coding>
                        <text value=&quot;Pb&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:332b1e76-6f70-2b4e-5d0c-f22a0e042d3e&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impPb-2&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-2&quot;/>
                </subject>
                <valueString value=&quot;ND&quot;/>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;88488004&quot;/>
                            <display value=&quot;Lead (substance)&quot;/>
                        </coding>
                        <text value=&quot;Pb&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:f0a13a3b-2e8b-594f-6874-6050511e4c57&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impPb-3&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-3&quot;/>
                </subject>
                <valueString value=&quot;ND&quot;/>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;88488004&quot;/>
                            <display value=&quot;Lead (substance)&quot;/>
                        </coding>
                        <text value=&quot;Pb&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:7fe7ccd7-6449-0186-2282-3eeb4cf6a795&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impAs&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;10&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;47809000&quot;/>
                            <display value=&quot;Arsenic (substance)&quot;/>
                        </coding>
                        <text value=&quot;As&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:be016630-8754-7414-9014-21e020ad66c6&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impAs-2&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;10&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;47809000&quot;/>
                            <display value=&quot;Arsenic (substance)&quot;/>
                        </coding>
                        <text value=&quot;As&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:92568f68-78f3-908c-6935-ff5f3d574dd6&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impAs-3&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;5&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;47809000&quot;/>
                            <display value=&quot;Arsenic (substance)&quot;/>
                        </coding>
                        <text value=&quot;As&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:7fe7ccd7-6449-0186-2282-3eeb4cf6a796&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impHg&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch&quot;/>
                </subject>
                <valueString value=&quot;ND&quot;/>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;45262002&quot;/>
                            <display value=&quot;Mercury (substance)&quot;/>
                        </coding>
                        <text value=&quot;Hg&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:be016630-8754-7414-9014-21e020ad66c7&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impHg-2&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;10&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;45262002&quot;/>
                            <display value=&quot;Mercury (substance)&quot;/>
                        </coding>
                        <text value=&quot;Hg&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:92568f68-78f3-908c-6935-ff5f3d574dd7&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impHg-3&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-3&quot;/>
                </subject>
                <valueString value=&quot;ND&quot;/>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;45262002&quot;/>
                            <display value=&quot;Mercury (substance)&quot;/>
                        </coding>
                        <text value=&quot;Hg&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:a0ba0f6d-8ec0-846a-a70d-f6bca6d01a12&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impCo&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;50&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;54808007&quot;/>
                            <display value=&quot;Cobalt (substance)&quot;/>
                        </coding>
                        <text value=&quot;Co&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:d8533dcb-03f8-5997-6ccf-4f9b6f7a5745&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impCo-2&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;50&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;54808007&quot;/>
                            <display value=&quot;Cobalt (substance)&quot;/>
                        </coding>
                        <text value=&quot;Co&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:7cec19a2-34a7-6b80-3d60-083b2cc64fcb&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impCo-3&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;50&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;54808007&quot;/>
                            <display value=&quot;Cobalt (substance)&quot;/>
                        </coding>
                        <text value=&quot;Co&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:27aa47fd-7964-4f96-6495-b2bec7f160e7&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impV&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;10&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;18925001&quot;/>
                            <display value=&quot;Vanadium (substance)&quot;/>
                        </coding>
                        <text value=&quot;V&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:6a78bcde-4781-226c-946e-a4b6915c1899&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impV-2&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;10&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;18925001&quot;/>
                            <display value=&quot;Vanadium (substance)&quot;/>
                        </coding>
                        <text value=&quot;V&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:f9f11088-7527-947c-3d3f-e71b32e13c78&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impV-3&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;10&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;18925001&quot;/>
                            <display value=&quot;Vanadium (substance)&quot;/>
                        </coding>
                        <text value=&quot;V&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:27aa47fd-7964-4f96-6495-b2bec7f160e8&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impNi&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch&quot;/>
                </subject>
                <valueString value=&quot;ND&quot;/>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;33396006&quot;/>
                            <display value=&quot;Nickel (substance)&quot;/>
                        </coding>
                        <text value=&quot;Ni&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:6a78bcde-4781-226c-946e-a4b6915c1890&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impNi-2&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-2&quot;/>
                </subject>
                <valueString value=&quot;ND&quot;/>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;33396006&quot;/>
                            <display value=&quot;Nickel (substance)&quot;/>
                        </coding>
                        <text value=&quot;Ni&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:f9f11088-7527-947c-3d3f-e71b32e13c79&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impNi-3&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-3&quot;/>
                </subject>
                <valueString value=&quot;ND&quot;/>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;33396006&quot;/>
                            <display value=&quot;Nickel (substance)&quot;/>
                        </coding>
                        <text value=&quot;Ni&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:27aa47fd-7964-4f96-6495-b2bec7f160e9&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impCu&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;250&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;66925006&quot;/>
                            <display value=&quot;Copper (substance)&quot;/>
                        </coding>
                        <text value=&quot;Cu&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:6a78bcde-4781-226c-946e-a4b6915c189A&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impCu-2&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;223&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;66925006&quot;/>
                            <display value=&quot;Copper (substance)&quot;/>
                        </coding>
                        <text value=&quot;Cu&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:f9f11088-7527-947c-3d3f-e71b32e13c70&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impCu-3&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;199&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;66925006&quot;/>
                            <display value=&quot;Copper (substance)&quot;/>
                        </coding>
                        <text value=&quot;Cu&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;fec78d02-1ec2-48ac-bab3-5ed8b6adf9a3&quot;/>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;substance-cadmium-unlinked&quot;/>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/substancePropertyType&quot;/>
                            <code value=&quot;impurityClassificationMCP&quot;/>
                            <display value=&quot;Impurity Classification - Mutagenic and Carcinogenic Potential&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Class 1&quot;/>
                    </valueCodeableConcept>
                </property>
                <code>
                    <code>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;66586000&quot;/>
                            <display value=&quot;Cadmium (substance)&quot;/>
                        </coding>
                    </code>
                </code>
            </SubstanceDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;fec78d02-1ec2-48ac-bab3-5ed8b6adf9a4&quot;/>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;substance-lead-unlinked&quot;/>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/substancePropertyType&quot;/>
                            <code value=&quot;impurityClassificationMCP&quot;/>
                            <display value=&quot;Impurity Classification - Mutagenic and Carcinogenic Potential&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Class 1&quot;/>
                    </valueCodeableConcept>
                </property>
                <code>
                    <code>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;88488004&quot;/>
                            <display value=&quot;Lead (substance)&quot;/>
                        </coding>
                    </code>
                </code>
            </SubstanceDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;fec78d02-1ec2-48ac-bab3-5ed8b6adf9a5&quot;/>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;substance-arsenic-unlinked&quot;/>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/substancePropertyType&quot;/>
                            <code value=&quot;impurityClassificationMCP&quot;/>
                            <display value=&quot;Impurity Classification - Mutagenic and Carcinogenic Potential&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Class 1&quot;/>
                    </valueCodeableConcept>
                </property>
                <code>
                    <code>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;47809000&quot;/>
                            <display value=&quot;Arsenic (substance)&quot;/>
                        </coding>
                    </code>
                </code>
            </SubstanceDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;fec78d02-1ec2-48ac-bab3-5ed8b6adf9a6&quot;/>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;substance-mercury-unlinked&quot;/>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/substancePropertyType&quot;/>
                            <code value=&quot;impurityClassificationMCP&quot;/>
                            <display value=&quot;Impurity Classification - Mutagenic and Carcinogenic Potential&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Class 1&quot;/>
                    </valueCodeableConcept>
                </property>
                <code>
                    <code>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;45262002&quot;/>
                            <display value=&quot;Mercury (substance)&quot;/>
                        </coding>
                    </code>
                </code>
            </SubstanceDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;fec78d02-1ec2-48ac-bab3-5ed8b6adf9a7&quot;/>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;substance-cobalt-unlinked&quot;/>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/substancePropertyType&quot;/>
                            <code value=&quot;impurityClassificationMCP&quot;/>
                            <display value=&quot;Impurity Classification - Mutagenic and Carcinogenic Potential&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Class 2&quot;/>
                    </valueCodeableConcept>
                </property>
                <code>
                    <code>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;54808007&quot;/>
                            <display value=&quot;Cobalt (substance)&quot;/>
                        </coding>
                    </code>
                </code>
            </SubstanceDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;fec78d02-1ec2-48ac-bab3-5ed8b6adf9a8&quot;/>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;substance-vanadium-unlinked&quot;/>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/substancePropertyType&quot;/>
                            <code value=&quot;impurityClassificationMCP&quot;/>
                            <display value=&quot;Impurity Classification - Mutagenic and Carcinogenic Potential&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Class 2&quot;/>
                    </valueCodeableConcept>
                </property>
                <code>
                    <code>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;18925001&quot;/>
                            <display value=&quot;Vanadium (substance)&quot;/>
                        </coding>
                    </code>
                </code>
            </SubstanceDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;fec78d02-1ec2-48ac-bab3-5ed8b6adf9a9&quot;/>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;substance-nickel-unlinked&quot;/>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/substancePropertyType&quot;/>
                            <code value=&quot;impurityClassificationMCP&quot;/>
                            <display value=&quot;Impurity Classification - Mutagenic and Carcinogenic Potential&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Class 2&quot;/>
                    </valueCodeableConcept>
                </property>
                <code>
                    <code>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;33396006&quot;/>
                            <display value=&quot;Nickel (substance)&quot;/>
                        </coding>
                    </code>
                </code>
            </SubstanceDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;fec78d02-1ec2-48ac-bab3-5ed8b6adf9a0&quot;/>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;substance-copper-unlinked&quot;/>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/substancePropertyType&quot;/>
                            <code value=&quot;impurityClassificationMCP&quot;/>
                            <display value=&quot;Impurity Classification - Mutagenic and Carcinogenic Potential&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Class 3&quot;/>
                    </valueCodeableConcept>
                </property>
                <code>
                    <code>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;66925006&quot;/>
                            <display value=&quot;Copper (substance)&quot;/>
                        </coding>
                    </code>
                </code>
            </SubstanceDefinition>
        </resource>
    </entry>
    <!-- MedicinalProductDefinition - the main resource in any product scenario -->
    <entry>
        <fullUrl value=&quot;urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d5&quot;/>
        <resource>
            <!-- Section 1.1 - DP Identification -->
            <MedicinalProductDefinition>
                <id value=&quot;medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                <description value=&quot;Textual description of the product&quot;/>
                <combinedPharmaceuticalDoseForm>
                    <coding>
                        <system value=&quot;https://spor.ema.europa.eu/v1/lists/200000000004&quot;/>
                        <code value=&quot;100000073667&quot;/>
                        <display value=&quot;Gastro-resistant tablet&quot;/>
                    </coding>
                </combinedPharmaceuticalDoseForm>
                <route>
                    <coding>
                        <system value=&quot;https://spor.ema.europa.eu/v1/lists/100000073345&quot;/>
                        <code value=&quot;100000073619&quot;/>
                        <display value=&quot;Oral use&quot;/>
                    </coding>
                </route>
                <name>
                    <productName value=&quot;Stelbat Tablets, 20mg&quot;/>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/productNameType&quot;/>
                            <code value=&quot;1234&quot;/>
                            <display value=&quot;Proprietary&quot;/>
                        </coding>
                    </type>
                    <part>
                        <part value=&quot;20mg&quot;/>
                        <type>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/medicinal-product-name-part-type&quot;/>
                                <code value=&quot;StrengthPart&quot;/>
                                <display value=&quot;Strength part&quot;/>
                            </coding>
                        </type>
                    </part>
                </name>
            </MedicinalProductDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:e3d2bc19-2f10-2b4d-1741-e4135fe612a9&quot;/>
        <resource>
            <Organization>
                <id value=&quot;tester&quot;/>
                <identifier>
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3007270600&quot;/>
                    <!-- could also use assigner here, for #74 -->
                </identifier>
                <name value=&quot;Advanced Analytical Testing Laboratories Inc.&quot;/>
                <contact>
                    <address>
                        <line value=&quot;30 Silverline Drive&quot;/>
                        <city value=&quot;North Brunswick&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08902&quot;/>
                        <country value=&quot;USA&quot;/>
                    </address>
                </contact>
            </Organization>
        </resource>
    </entry>" id="Bundle-product-impurities">Bundle</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/bundle.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/bundle.html#tt-uml">R5</a>]</span><div class="debugOff">id: product-impurities</div>
<div class="debugOff"></div>
<div><span title="
<Bundle>
    ...
    <type value=&quot;collection&quot;>">Type: </span><span><span>collection</span></span></div>
</div>
</div>
<div class="org indent"><span class="bold">Impurities Report - Product, on Stelbat Tablets, 20mg</span><br><br style="line-height:6px;"><div ondblclick="summaryHandler(event)" class="indent summaryUnit comp"><a class="plainLink"><span class="bold" title="DiagnosticReport (id: diagnosticreport-product-impurities)(fullUrl: urn:uuid:6f4a3311-92c5-2b4a-533e-76341e414c63)
Profile: http://hl7.org/fhir/uv/dx-pq/StructureDefinition/DiagnosticReport-stability-study-results-dxpq 

<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                <!-- <id value=&quot;studyResultsReport&quot;/>-->
                <id value=&quot;diagnosticreport-product-impurities&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/DiagnosticReport-stability-study-results-dxpq&quot;/>
                </meta>
                <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tabulateBatchImpurities&quot;>
                    <valueBoolean value=&quot;true&quot;/>
                </extension>
                <identifier>
                    <system value=&quot;https://eudract.europa.eu/example/identifier&quot;/>
                    <value value=&quot;ABC1234&quot;/>
                </identifier>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/reportType&quot;/>
                        <code value=&quot;111&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                </code>
                <effectiveDateTime value=&quot;2020-12&quot;/>
                <!-- start of impurity test -->
                <performer>
                    <reference value=&quot;Organization/tester&quot;/>
                </performer>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impCd&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impCd-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impCd-3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impPb&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impPb-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impPb-3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impAs&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impAs-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impAs-3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impHg&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impHg-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impHg-3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impCo&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impCo-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impCo-3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impV&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impV-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impV-3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impNi&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impNi-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impNi-3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impCu&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impCu-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-impCu-3&quot;/>
                </result>
                <conclusion value=&quot;1. Elemental Impurities - No elemental impurities are intentionally added during the manufacturing of drug product...&quot;/>" id="DiagnosticReport-diagnosticreport-product-impurities">Diagnostic Report<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                <code>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/reportType&quot;/>
                        <code value=&quot;111&quot;/>
                        <display value=&quot;Impurities&quot;/>">Impurities<span class="greyOff"> [111]</span><span class="greyOff"> (http://accumulus.org/fhir/code/reportType)</span></span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/diagnosticreport.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/diagnosticreport.html#tt-uml">R5</a>]</span><div class="debugOff">id: diagnosticreport-product-impurities</div>
<div class="debugOff"> fullUrl: urn:uuid:6f4a3311-92c5-2b4a-533e-76341e414c63</div>
<div class="debugOff"></div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <identifier>
                    <system value=&quot;https://eudract.europa.eu/example/identifier&quot;/>
                    <value value=&quot;ABC1234&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <identifier>
                    <system value=&quot;https://eudract.europa.eu/example/identifier&quot;/>
                    <value value=&quot;ABC1234&quot;/>">ABC1234<span class="greyOff"> (https://eudract.europa.eu/example/identifier)</span></span></div>
</div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <effectiveDateTime value=&quot;2020-12&quot;>">Date: 2020-12</span></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <status value=&quot;final&quot;>">Status: </span><span>final</span></div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/reportType&quot;/>
                        <code value=&quot;111&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                <code>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/reportType&quot;/>
                        <code value=&quot;111&quot;/>
                        <display value=&quot;Impurities&quot;/>">Impurities<span class="greyOff"> [111]</span><span class="greyOff"> (http://accumulus.org/fhir/code/reportType)</span></span></span></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <conclusion value=&quot;1. Elemental Impurities - No elemental impurities are intentionally added during the manufacturing of drug product...&quot;>">Conclusion: </span><span>1. Elemental Impurities - No elemental impurities are intentionally added during the manufacturing of drug product...</span></div>
<div class="summaryHiddenOff">
<div class="indent compl2"><span title="
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <performer>
                    <reference value=&quot;Organization/tester&quot;/>">Performer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (DiagnosticReport/performer, id: diagnosticreport-product-impurities fullUrl: urn:uuid:6f4a3311-92c5-2b4a-533e-76341e414c63)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: tester)(fullUrl: urn:uuid:e3d2bc19-2f10-2b4d-1741-e4135fe612a9)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <id value=&quot;tester&quot;/>
                <identifier>
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3007270600&quot;/>
                    <!-- could also use assigner here, for #74 -->
                </identifier>
                <name value=&quot;Advanced Analytical Testing Laboratories Inc.&quot;/>
                <contact>
                    <address>
                        <line value=&quot;30 Silverline Drive&quot;/>
                        <city value=&quot;North Brunswick&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08902&quot;/>
                        <country value=&quot;USA&quot;/>
                    </address>
                </contact>" id="Organization-tester">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a>]</span><div class="debugOff">id: tester</div><div class="debugOff"> fullUrl: urn:uuid:e3d2bc19-2f10-2b4d-1741-e4135fe612a9</div><span class="summaryShowsOff"> - Advanced Analytical Testing Laboratories Inc.</span><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3007270600&quot;/>
                    <!-- could also use assigner here, for #74 -->">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3007270600&quot;/>
                    <!-- could also use assigner here, for #74 -->">3007270600<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span></div></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;Advanced Analytical Testing Laboratories Inc.&quot;>">Name: </span><span>Advanced Analytical Testing Laboratories Inc.</span></div><div class="indent org2">
					Contact
					<div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;30 Silverline Drive&quot;/>
                        <city value=&quot;North Brunswick&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08902&quot;/>
                        <country value=&quot;USA&quot;/>">Address: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;30 Silverline Drive&quot;>">30 Silverline Drive</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <city value=&quot;North Brunswick&quot;>">North Brunswick</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <state value=&quot;New Jersey&quot;>">New Jersey</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <postalCode value=&quot;08902&quot;>">08902</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <country value=&quot;USA&quot;>">USA</span></div></div></div></div>
</div>
</div>
<div class="htmlTableRemove"><span class="indent debugOff">Results Table</span><br style="line-height:6px;"><div class="indent-no-border"><br style="line-height:6px;"><table class="rounded-corners white" id="tabularModeTable" style="width:70%;">
<tr>
<th rowspan="2">Batch Number</th>
<th rowspan="2">Strength</th>
<th rowspan="2">Manufacturing Site</th>
<th colspan="4">Class 1</th>
<th colspan="3">Class 2</th>
<th colspan="1">Class 3</th>
</tr>
<tr>
<th>Cd (ppm)</th>
<th>Pb (ppm)</th>
<th>As (ppm)</th>
<th>Hg (ppm)</th>
<th>Co (ppm)</th>
<th>V (ppm)</th>
<th>Ni (ppm)</th>
<th>Cu (ppm)</th>
</tr>
<tr>
<td class="centred">33445</td>
<td class="centred">20mg</td>
<td class="centred">AAA Pharmaceutical, Inc. (New Jersey, USA)</td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;5&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>">&lt;5</span><span class="greyOff"> [[ppm]] (http://unitsofmeasure.org)</span></td>
<td class="centred">ND*</td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;10&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>">&lt;10</span><span class="greyOff"> [[ppm]] (http://unitsofmeasure.org)</span></td>
<td class="centred">ND*</td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;50&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>">&lt;50</span><span class="greyOff"> [[ppm]] (http://unitsofmeasure.org)</span></td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;10&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>">&lt;10</span><span class="greyOff"> [[ppm]] (http://unitsofmeasure.org)</span></td>
<td class="centred">ND*</td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;250&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>">250</span><span class="greyOff"> [[ppm]] (http://unitsofmeasure.org)</span></td>
</tr>
<tr>
<td class="centred">33446</td>
<td class="centred">20mg</td>
<td class="centred">AAA Pharmaceutical, Inc. (New Jersey, USA)</td>
<td class="centred">ND*</td>
<td class="centred">ND*</td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;10&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>">&lt;10</span><span class="greyOff"> [[ppm]] (http://unitsofmeasure.org)</span></td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;10&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>">&lt;10</span><span class="greyOff"> [[ppm]] (http://unitsofmeasure.org)</span></td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;50&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>">&lt;50</span><span class="greyOff"> [[ppm]] (http://unitsofmeasure.org)</span></td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;10&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>">&lt;10</span><span class="greyOff"> [[ppm]] (http://unitsofmeasure.org)</span></td>
<td class="centred">ND*</td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;223&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>">223</span><span class="greyOff"> [[ppm]] (http://unitsofmeasure.org)</span></td>
</tr>
<tr>
<td class="centred">33447</td>
<td class="centred">20mg</td>
<td class="centred">AAA Pharmaceutical, Inc. (New Jersey, USA)</td>
<td class="centred">ND*</td>
<td class="centred">ND*</td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;5&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>">&lt;5</span><span class="greyOff"> [[ppm]] (http://unitsofmeasure.org)</span></td>
<td class="centred">ND*</td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;50&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>">&lt;50</span><span class="greyOff"> [[ppm]] (http://unitsofmeasure.org)</span></td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;10&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>">&lt;10</span><span class="greyOff"> [[ppm]] (http://unitsofmeasure.org)</span></td>
<td class="centred">ND*</td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;199&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>">199</span><span class="greyOff"> [[ppm]] (http://unitsofmeasure.org)</span></td>
</tr>
</table><span>*ND, not detected</span></div><br style="line-height:6px;"></div>
<div class="indent compText summaryUnit"><span title="
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-impCd&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-impCd-2&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-impCd-3&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-impPb&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-impPb-2&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-impPb-3&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-impAs&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-impAs-2&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-impAs-3&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-impHg&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-impHg-2&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-impHg-3&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-impCo&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-impCo-2&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-impCo-3&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-impV&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-impV-2&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-impV-3&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-impNi&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-impNi-2&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-impNi-3&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-impCu&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-impCu-2&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-impCu-3&quot;/>">Result</span><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: diagnosticreport-product-impurities fullUrl: urn:uuid:6f4a3311-92c5-2b4a-533e-76341e414c63)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationDegradation-impCd)(fullUrl: urn:uuid:ab7997fa-7b46-1175-3f01-6f6997f7878a)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impCd&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;5&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;66586000&quot;/>
                            <display value=&quot;Cadmium (substance)&quot;/>
                        </coding>
                        <text value=&quot;Cd&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationDegradation-impCd">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a>]</span><div class="debugOff">id: observationDegradation-impCd</div><div class="debugOff"> fullUrl: urn:uuid:ab7997fa-7b46-1175-3f01-6f6997f7878a</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <status value=&quot;final&quot;>">Status: </span><span>final</span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;5&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;5&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>">&lt;5 ppm</span><span class="greyOff"> [[ppm]] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch&quot;/>">Subject</span><div class="indent med summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCd fullUrl: urn:uuid:ab7997fa-7b46-1175-3f01-6f6997f7878a)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impPb fullUrl: urn:uuid:2940bf11-05bf-6ce2-3c64-457d0d1f9913)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impAs fullUrl: urn:uuid:7fe7ccd7-6449-0186-2282-3eeb4cf6a795)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impHg fullUrl: urn:uuid:7fe7ccd7-6449-0186-2282-3eeb4cf6a796)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCo fullUrl: urn:uuid:a0ba0f6d-8ec0-846a-a70d-f6bca6d01a12)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impV fullUrl: urn:uuid:27aa47fd-7964-4f96-6495-b2bec7f160e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impNi fullUrl: urn:uuid:27aa47fd-7964-4f96-6495-b2bec7f160e8)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCu fullUrl: urn:uuid:27aa47fd-7964-4f96-6495-b2bec7f160e9)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Medication (id: medication-actual-batch)(fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51)

<Bundle>
    <entry>
        <resource>
            <Medication>
                <id value=&quot;medication-actual-batch&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <!-- todo consider change this be the MID? -->
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                            <!--reference value=&quot;urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d5&quot;/-->
                        </valueReference>
                    </extension>
                </code>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <!-- #158 -->
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <!-- #153 -->
                    <lotNumber value=&quot;33445&quot;/>
                </batch>" id="Medication-medication-actual-batch">Medication</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/medication.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/medication.html#tt-uml">R5</a>]</span><div class="debugOff">id: medication-actual-batch</div><div class="debugOff"> fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51</div><span class="summaryShowsOff"><b> - 33445</b></span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <!-- todo consider change this be the MID? -->
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                            <!--reference value=&quot;urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d5&quot;/-->
                        </valueReference>">Definition</span>: Stelbat Tablets, 20mg (<a href="#MedicinalProductDefinition-medicinalproductdefinition-drug-product-dxpq-ex1" title="click to see target - id=medicinalproductdefinition-drug-product-dxpq-ex1">MedicinalProductDefinition</a>)<span class="debugOff"> id: medicinalproductdefinition-drug-product-dxpq-ex1</span></div><div class="summaryHiddenOff"><div class="indent medl2 summaryUnit"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                ...
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <!-- #158 -->
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <!-- #153 -->
                    <lotNumber value=&quot;33445&quot;/>">Batch</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    ...
                    <lotNumber value=&quot;33445&quot;>">Lot Number: </span><span>33445</span></div><div class="summaryHiddenOff"><div class="indent medl3"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <!-- #158 -->
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>">Manufacturing</span><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <!-- #158 -->
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>">Manufacturer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-2 fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-3 fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: manufacturer)(fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <id value=&quot;manufacturer&quot;/>
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>
                </identifier>
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;/>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>
                    </address>
                </contact>" id="Organization-manufacturer">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a>]</span><div class="debugOff">id: manufacturer</div><div class="debugOff"> fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a</div><span class="summaryShowsOff"> - AAA Pharmaceutical, Inc.</span><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">3010027650<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span></div></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;>">Name: </span><span>AAA Pharmaceutical, Inc.</span></div><div class="indent org2">
					Contact
					<div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>">Address: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;>">681 Main Street</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <city value=&quot;Lumberton&quot;>">Lumberton</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <state value=&quot;New Jersey&quot;>">New Jersey</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <postalCode value=&quot;08048&quot;>">08048</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <country value=&quot;USA&quot;>">USA</span></div></div></div></div></span></div></div></div></div></div></div><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;66586000&quot;/>
                            <display value=&quot;Cadmium (substance)&quot;/>
                        </coding>
                        <text value=&quot;Cd&quot;/>
                    </valueCodeableConcept>">
		Component
		<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;66586000&quot;/>
                            <display value=&quot;Cadmium (substance)&quot;/>
                        </coding>
                        <text value=&quot;Cd&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;66586000&quot;/>
                            <display value=&quot;Cadmium (substance)&quot;/>">Cadmium (substance)<span class="greyOff"> [66586000]</span><span class="greyOff"> (http://snomed.info/sct)</span></span><span style="white-space:normal;"> - Text: Cd</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: diagnosticreport-product-impurities fullUrl: urn:uuid:6f4a3311-92c5-2b4a-533e-76341e414c63)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationDegradation-impCd-2)(fullUrl: urn:uuid:4052f28b-64a2-392d-35e4-ec8e912434d2)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impCd-2&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-2&quot;/>
                </subject>
                <valueString value=&quot;ND&quot;/>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;66586000&quot;/>
                            <display value=&quot;Cadmium (substance)&quot;/>
                        </coding>
                        <text value=&quot;Cd&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationDegradation-impCd-2">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a>]</span><div class="debugOff">id: observationDegradation-impCd-2</div><div class="debugOff"> fullUrl: urn:uuid:4052f28b-64a2-392d-35e4-ec8e912434d2</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <status value=&quot;final&quot;>">Status: </span><span>final</span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueString value=&quot;ND&quot;>"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueString value=&quot;ND&quot;>">Value: </span><span>ND</span></div></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-2&quot;/>">Subject</span><div class="indent med summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCd-2 fullUrl: urn:uuid:4052f28b-64a2-392d-35e4-ec8e912434d2)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impPb-2 fullUrl: urn:uuid:332b1e76-6f70-2b4e-5d0c-f22a0e042d3e)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impAs-2 fullUrl: urn:uuid:be016630-8754-7414-9014-21e020ad66c6)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impHg-2 fullUrl: urn:uuid:be016630-8754-7414-9014-21e020ad66c7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCo-2 fullUrl: urn:uuid:d8533dcb-03f8-5997-6ccf-4f9b6f7a5745)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impV-2 fullUrl: urn:uuid:6a78bcde-4781-226c-946e-a4b6915c1899)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impNi-2 fullUrl: urn:uuid:6a78bcde-4781-226c-946e-a4b6915c1890)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCu-2 fullUrl: urn:uuid:6a78bcde-4781-226c-946e-a4b6915c189A)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Medication (id: medication-actual-batch-2)(fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc)

<Bundle>
    <entry>
        <resource>
            <Medication>
                <id value=&quot;medication-actual-batch-2&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>
                    </extension>
                </code>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <lotNumber value=&quot;33446&quot;/>
                </batch>" id="Medication-medication-actual-batch-2">Medication</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/medication.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/medication.html#tt-uml">R5</a>]</span><div class="debugOff">id: medication-actual-batch-2</div><div class="debugOff"> fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc</div><span class="summaryShowsOff"><b> - 33446</b></span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>">Definition</span>: Stelbat Tablets, 20mg (<a href="#MedicinalProductDefinition-medicinalproductdefinition-drug-product-dxpq-ex1" title="click to see target - id=medicinalproductdefinition-drug-product-dxpq-ex1">MedicinalProductDefinition</a>)<span class="debugOff"> id: medicinalproductdefinition-drug-product-dxpq-ex1</span></div><div class="summaryHiddenOff"><div class="indent medl2 summaryUnit"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                ...
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <lotNumber value=&quot;33446&quot;/>">Batch</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    ...
                    <lotNumber value=&quot;33446&quot;>">Lot Number: </span><span>33446</span></div><div class="summaryHiddenOff"><div class="indent medl3"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>">Manufacturing</span><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>">Manufacturer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-2 fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-3 fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: manufacturer)(fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <id value=&quot;manufacturer&quot;/>
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>
                </identifier>
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;/>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>
                    </address>
                </contact>" id="Organization-manufacturer">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a>]</span><div class="debugOff">id: manufacturer</div><div class="debugOff"> fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a</div><span class="summaryShowsOff"> - AAA Pharmaceutical, Inc.</span><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">3010027650<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span></div></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;>">Name: </span><span>AAA Pharmaceutical, Inc.</span></div><div class="indent org2">
					Contact
					<div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>">Address: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;>">681 Main Street</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <city value=&quot;Lumberton&quot;>">Lumberton</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <state value=&quot;New Jersey&quot;>">New Jersey</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <postalCode value=&quot;08048&quot;>">08048</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <country value=&quot;USA&quot;>">USA</span></div></div></div></div></span></div></div></div></div></div></div><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;66586000&quot;/>
                            <display value=&quot;Cadmium (substance)&quot;/>
                        </coding>
                        <text value=&quot;Cd&quot;/>
                    </valueCodeableConcept>">
		Component
		<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;66586000&quot;/>
                            <display value=&quot;Cadmium (substance)&quot;/>
                        </coding>
                        <text value=&quot;Cd&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;66586000&quot;/>
                            <display value=&quot;Cadmium (substance)&quot;/>">Cadmium (substance)<span class="greyOff"> [66586000]</span><span class="greyOff"> (http://snomed.info/sct)</span></span><span style="white-space:normal;"> - Text: Cd</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: diagnosticreport-product-impurities fullUrl: urn:uuid:6f4a3311-92c5-2b4a-533e-76341e414c63)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationDegradation-impCd-3)(fullUrl: urn:uuid:34ebc51d-8105-0589-3c8d-e7aa6bd0a06c)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impCd-3&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-3&quot;/>
                </subject>
                <valueString value=&quot;ND&quot;/>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;66586000&quot;/>
                            <display value=&quot;Cadmium (substance)&quot;/>
                        </coding>
                        <text value=&quot;Cd&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationDegradation-impCd-3">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a>]</span><div class="debugOff">id: observationDegradation-impCd-3</div><div class="debugOff"> fullUrl: urn:uuid:34ebc51d-8105-0589-3c8d-e7aa6bd0a06c</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <status value=&quot;final&quot;>">Status: </span><span>final</span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueString value=&quot;ND&quot;>"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueString value=&quot;ND&quot;>">Value: </span><span>ND</span></div></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-3&quot;/>">Subject</span><div class="indent med summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCd-3 fullUrl: urn:uuid:34ebc51d-8105-0589-3c8d-e7aa6bd0a06c)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impPb-3 fullUrl: urn:uuid:f0a13a3b-2e8b-594f-6874-6050511e4c57)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impAs-3 fullUrl: urn:uuid:92568f68-78f3-908c-6935-ff5f3d574dd6)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impHg-3 fullUrl: urn:uuid:92568f68-78f3-908c-6935-ff5f3d574dd7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCo-3 fullUrl: urn:uuid:7cec19a2-34a7-6b80-3d60-083b2cc64fcb)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impV-3 fullUrl: urn:uuid:f9f11088-7527-947c-3d3f-e71b32e13c78)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impNi-3 fullUrl: urn:uuid:f9f11088-7527-947c-3d3f-e71b32e13c79)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCu-3 fullUrl: urn:uuid:f9f11088-7527-947c-3d3f-e71b32e13c70)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Medication (id: medication-actual-batch-3)(fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06)

<Bundle>
    <entry>
        <resource>
            <Medication>
                <id value=&quot;medication-actual-batch-3&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>
                    </extension>
                </code>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <lotNumber value=&quot;33447&quot;/>
                </batch>" id="Medication-medication-actual-batch-3">Medication</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/medication.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/medication.html#tt-uml">R5</a>]</span><div class="debugOff">id: medication-actual-batch-3</div><div class="debugOff"> fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06</div><span class="summaryShowsOff"><b> - 33447</b></span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>">Definition</span>: Stelbat Tablets, 20mg (<a href="#MedicinalProductDefinition-medicinalproductdefinition-drug-product-dxpq-ex1" title="click to see target - id=medicinalproductdefinition-drug-product-dxpq-ex1">MedicinalProductDefinition</a>)<span class="debugOff"> id: medicinalproductdefinition-drug-product-dxpq-ex1</span></div><div class="summaryHiddenOff"><div class="indent medl2 summaryUnit"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                ...
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <lotNumber value=&quot;33447&quot;/>">Batch</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    ...
                    <lotNumber value=&quot;33447&quot;>">Lot Number: </span><span>33447</span></div><div class="summaryHiddenOff"><div class="indent medl3"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>">Manufacturing</span><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>">Manufacturer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-2 fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-3 fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: manufacturer)(fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <id value=&quot;manufacturer&quot;/>
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>
                </identifier>
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;/>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>
                    </address>
                </contact>" id="Organization-manufacturer">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a>]</span><div class="debugOff">id: manufacturer</div><div class="debugOff"> fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a</div><span class="summaryShowsOff"> - AAA Pharmaceutical, Inc.</span><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">3010027650<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span></div></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;>">Name: </span><span>AAA Pharmaceutical, Inc.</span></div><div class="indent org2">
					Contact
					<div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>">Address: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;>">681 Main Street</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <city value=&quot;Lumberton&quot;>">Lumberton</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <state value=&quot;New Jersey&quot;>">New Jersey</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <postalCode value=&quot;08048&quot;>">08048</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <country value=&quot;USA&quot;>">USA</span></div></div></div></div></span></div></div></div></div></div></div><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;66586000&quot;/>
                            <display value=&quot;Cadmium (substance)&quot;/>
                        </coding>
                        <text value=&quot;Cd&quot;/>
                    </valueCodeableConcept>">
		Component
		<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;66586000&quot;/>
                            <display value=&quot;Cadmium (substance)&quot;/>
                        </coding>
                        <text value=&quot;Cd&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;66586000&quot;/>
                            <display value=&quot;Cadmium (substance)&quot;/>">Cadmium (substance)<span class="greyOff"> [66586000]</span><span class="greyOff"> (http://snomed.info/sct)</span></span><span style="white-space:normal;"> - Text: Cd</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: diagnosticreport-product-impurities fullUrl: urn:uuid:6f4a3311-92c5-2b4a-533e-76341e414c63)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationDegradation-impPb)(fullUrl: urn:uuid:2940bf11-05bf-6ce2-3c64-457d0d1f9913)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impPb&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch&quot;/>
                </subject>
                <valueString value=&quot;ND&quot;/>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;88488004&quot;/>
                            <display value=&quot;Lead (substance)&quot;/>
                        </coding>
                        <text value=&quot;Pb&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationDegradation-impPb">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a>]</span><div class="debugOff">id: observationDegradation-impPb</div><div class="debugOff"> fullUrl: urn:uuid:2940bf11-05bf-6ce2-3c64-457d0d1f9913</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <status value=&quot;final&quot;>">Status: </span><span>final</span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueString value=&quot;ND&quot;>"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueString value=&quot;ND&quot;>">Value: </span><span>ND</span></div></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch&quot;/>">Subject</span><div class="indent med summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCd fullUrl: urn:uuid:ab7997fa-7b46-1175-3f01-6f6997f7878a)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impPb fullUrl: urn:uuid:2940bf11-05bf-6ce2-3c64-457d0d1f9913)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impAs fullUrl: urn:uuid:7fe7ccd7-6449-0186-2282-3eeb4cf6a795)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impHg fullUrl: urn:uuid:7fe7ccd7-6449-0186-2282-3eeb4cf6a796)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCo fullUrl: urn:uuid:a0ba0f6d-8ec0-846a-a70d-f6bca6d01a12)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impV fullUrl: urn:uuid:27aa47fd-7964-4f96-6495-b2bec7f160e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impNi fullUrl: urn:uuid:27aa47fd-7964-4f96-6495-b2bec7f160e8)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCu fullUrl: urn:uuid:27aa47fd-7964-4f96-6495-b2bec7f160e9)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Medication (id: medication-actual-batch)(fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51)

<Bundle>
    <entry>
        <resource>
            <Medication>
                <id value=&quot;medication-actual-batch&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <!-- todo consider change this be the MID? -->
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                            <!--reference value=&quot;urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d5&quot;/-->
                        </valueReference>
                    </extension>
                </code>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <!-- #158 -->
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <!-- #153 -->
                    <lotNumber value=&quot;33445&quot;/>
                </batch>" id="Medication-medication-actual-batch">Medication</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/medication.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/medication.html#tt-uml">R5</a>]</span><div class="debugOff">id: medication-actual-batch</div><div class="debugOff"> fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51</div><span class="summaryShowsOff"><b> - 33445</b></span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <!-- todo consider change this be the MID? -->
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                            <!--reference value=&quot;urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d5&quot;/-->
                        </valueReference>">Definition</span>: Stelbat Tablets, 20mg (<a href="#MedicinalProductDefinition-medicinalproductdefinition-drug-product-dxpq-ex1" title="click to see target - id=medicinalproductdefinition-drug-product-dxpq-ex1">MedicinalProductDefinition</a>)<span class="debugOff"> id: medicinalproductdefinition-drug-product-dxpq-ex1</span></div><div class="summaryHiddenOff"><div class="indent medl2 summaryUnit"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                ...
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <!-- #158 -->
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <!-- #153 -->
                    <lotNumber value=&quot;33445&quot;/>">Batch</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    ...
                    <lotNumber value=&quot;33445&quot;>">Lot Number: </span><span>33445</span></div><div class="summaryHiddenOff"><div class="indent medl3"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <!-- #158 -->
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>">Manufacturing</span><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <!-- #158 -->
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>">Manufacturer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-2 fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-3 fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: manufacturer)(fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <id value=&quot;manufacturer&quot;/>
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>
                </identifier>
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;/>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>
                    </address>
                </contact>" id="Organization-manufacturer">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a>]</span><div class="debugOff">id: manufacturer</div><div class="debugOff"> fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a</div><span class="summaryShowsOff"> - AAA Pharmaceutical, Inc.</span><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">3010027650<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span></div></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;>">Name: </span><span>AAA Pharmaceutical, Inc.</span></div><div class="indent org2">
					Contact
					<div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>">Address: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;>">681 Main Street</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <city value=&quot;Lumberton&quot;>">Lumberton</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <state value=&quot;New Jersey&quot;>">New Jersey</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <postalCode value=&quot;08048&quot;>">08048</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <country value=&quot;USA&quot;>">USA</span></div></div></div></div></span></div></div></div></div></div></div><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;88488004&quot;/>
                            <display value=&quot;Lead (substance)&quot;/>
                        </coding>
                        <text value=&quot;Pb&quot;/>
                    </valueCodeableConcept>">
		Component
		<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;88488004&quot;/>
                            <display value=&quot;Lead (substance)&quot;/>
                        </coding>
                        <text value=&quot;Pb&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;88488004&quot;/>
                            <display value=&quot;Lead (substance)&quot;/>">Lead (substance)<span class="greyOff"> [88488004]</span><span class="greyOff"> (http://snomed.info/sct)</span></span><span style="white-space:normal;"> - Text: Pb</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: diagnosticreport-product-impurities fullUrl: urn:uuid:6f4a3311-92c5-2b4a-533e-76341e414c63)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationDegradation-impPb-2)(fullUrl: urn:uuid:332b1e76-6f70-2b4e-5d0c-f22a0e042d3e)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impPb-2&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-2&quot;/>
                </subject>
                <valueString value=&quot;ND&quot;/>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;88488004&quot;/>
                            <display value=&quot;Lead (substance)&quot;/>
                        </coding>
                        <text value=&quot;Pb&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationDegradation-impPb-2">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a>]</span><div class="debugOff">id: observationDegradation-impPb-2</div><div class="debugOff"> fullUrl: urn:uuid:332b1e76-6f70-2b4e-5d0c-f22a0e042d3e</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <status value=&quot;final&quot;>">Status: </span><span>final</span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueString value=&quot;ND&quot;>"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueString value=&quot;ND&quot;>">Value: </span><span>ND</span></div></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-2&quot;/>">Subject</span><div class="indent med summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCd-2 fullUrl: urn:uuid:4052f28b-64a2-392d-35e4-ec8e912434d2)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impPb-2 fullUrl: urn:uuid:332b1e76-6f70-2b4e-5d0c-f22a0e042d3e)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impAs-2 fullUrl: urn:uuid:be016630-8754-7414-9014-21e020ad66c6)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impHg-2 fullUrl: urn:uuid:be016630-8754-7414-9014-21e020ad66c7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCo-2 fullUrl: urn:uuid:d8533dcb-03f8-5997-6ccf-4f9b6f7a5745)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impV-2 fullUrl: urn:uuid:6a78bcde-4781-226c-946e-a4b6915c1899)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impNi-2 fullUrl: urn:uuid:6a78bcde-4781-226c-946e-a4b6915c1890)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCu-2 fullUrl: urn:uuid:6a78bcde-4781-226c-946e-a4b6915c189A)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Medication (id: medication-actual-batch-2)(fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc)

<Bundle>
    <entry>
        <resource>
            <Medication>
                <id value=&quot;medication-actual-batch-2&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>
                    </extension>
                </code>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <lotNumber value=&quot;33446&quot;/>
                </batch>" id="Medication-medication-actual-batch-2">Medication</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/medication.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/medication.html#tt-uml">R5</a>]</span><div class="debugOff">id: medication-actual-batch-2</div><div class="debugOff"> fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc</div><span class="summaryShowsOff"><b> - 33446</b></span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>">Definition</span>: Stelbat Tablets, 20mg (<a href="#MedicinalProductDefinition-medicinalproductdefinition-drug-product-dxpq-ex1" title="click to see target - id=medicinalproductdefinition-drug-product-dxpq-ex1">MedicinalProductDefinition</a>)<span class="debugOff"> id: medicinalproductdefinition-drug-product-dxpq-ex1</span></div><div class="summaryHiddenOff"><div class="indent medl2 summaryUnit"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                ...
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <lotNumber value=&quot;33446&quot;/>">Batch</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    ...
                    <lotNumber value=&quot;33446&quot;>">Lot Number: </span><span>33446</span></div><div class="summaryHiddenOff"><div class="indent medl3"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>">Manufacturing</span><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>">Manufacturer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-2 fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-3 fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: manufacturer)(fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <id value=&quot;manufacturer&quot;/>
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>
                </identifier>
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;/>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>
                    </address>
                </contact>" id="Organization-manufacturer">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a>]</span><div class="debugOff">id: manufacturer</div><div class="debugOff"> fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a</div><span class="summaryShowsOff"> - AAA Pharmaceutical, Inc.</span><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">3010027650<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span></div></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;>">Name: </span><span>AAA Pharmaceutical, Inc.</span></div><div class="indent org2">
					Contact
					<div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>">Address: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;>">681 Main Street</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <city value=&quot;Lumberton&quot;>">Lumberton</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <state value=&quot;New Jersey&quot;>">New Jersey</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <postalCode value=&quot;08048&quot;>">08048</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <country value=&quot;USA&quot;>">USA</span></div></div></div></div></span></div></div></div></div></div></div><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;88488004&quot;/>
                            <display value=&quot;Lead (substance)&quot;/>
                        </coding>
                        <text value=&quot;Pb&quot;/>
                    </valueCodeableConcept>">
		Component
		<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;88488004&quot;/>
                            <display value=&quot;Lead (substance)&quot;/>
                        </coding>
                        <text value=&quot;Pb&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;88488004&quot;/>
                            <display value=&quot;Lead (substance)&quot;/>">Lead (substance)<span class="greyOff"> [88488004]</span><span class="greyOff"> (http://snomed.info/sct)</span></span><span style="white-space:normal;"> - Text: Pb</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: diagnosticreport-product-impurities fullUrl: urn:uuid:6f4a3311-92c5-2b4a-533e-76341e414c63)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationDegradation-impPb-3)(fullUrl: urn:uuid:f0a13a3b-2e8b-594f-6874-6050511e4c57)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impPb-3&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-3&quot;/>
                </subject>
                <valueString value=&quot;ND&quot;/>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;88488004&quot;/>
                            <display value=&quot;Lead (substance)&quot;/>
                        </coding>
                        <text value=&quot;Pb&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationDegradation-impPb-3">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a>]</span><div class="debugOff">id: observationDegradation-impPb-3</div><div class="debugOff"> fullUrl: urn:uuid:f0a13a3b-2e8b-594f-6874-6050511e4c57</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <status value=&quot;final&quot;>">Status: </span><span>final</span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueString value=&quot;ND&quot;>"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueString value=&quot;ND&quot;>">Value: </span><span>ND</span></div></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-3&quot;/>">Subject</span><div class="indent med summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCd-3 fullUrl: urn:uuid:34ebc51d-8105-0589-3c8d-e7aa6bd0a06c)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impPb-3 fullUrl: urn:uuid:f0a13a3b-2e8b-594f-6874-6050511e4c57)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impAs-3 fullUrl: urn:uuid:92568f68-78f3-908c-6935-ff5f3d574dd6)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impHg-3 fullUrl: urn:uuid:92568f68-78f3-908c-6935-ff5f3d574dd7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCo-3 fullUrl: urn:uuid:7cec19a2-34a7-6b80-3d60-083b2cc64fcb)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impV-3 fullUrl: urn:uuid:f9f11088-7527-947c-3d3f-e71b32e13c78)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impNi-3 fullUrl: urn:uuid:f9f11088-7527-947c-3d3f-e71b32e13c79)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCu-3 fullUrl: urn:uuid:f9f11088-7527-947c-3d3f-e71b32e13c70)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Medication (id: medication-actual-batch-3)(fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06)

<Bundle>
    <entry>
        <resource>
            <Medication>
                <id value=&quot;medication-actual-batch-3&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>
                    </extension>
                </code>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <lotNumber value=&quot;33447&quot;/>
                </batch>" id="Medication-medication-actual-batch-3">Medication</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/medication.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/medication.html#tt-uml">R5</a>]</span><div class="debugOff">id: medication-actual-batch-3</div><div class="debugOff"> fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06</div><span class="summaryShowsOff"><b> - 33447</b></span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>">Definition</span>: Stelbat Tablets, 20mg (<a href="#MedicinalProductDefinition-medicinalproductdefinition-drug-product-dxpq-ex1" title="click to see target - id=medicinalproductdefinition-drug-product-dxpq-ex1">MedicinalProductDefinition</a>)<span class="debugOff"> id: medicinalproductdefinition-drug-product-dxpq-ex1</span></div><div class="summaryHiddenOff"><div class="indent medl2 summaryUnit"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                ...
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <lotNumber value=&quot;33447&quot;/>">Batch</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    ...
                    <lotNumber value=&quot;33447&quot;>">Lot Number: </span><span>33447</span></div><div class="summaryHiddenOff"><div class="indent medl3"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>">Manufacturing</span><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>">Manufacturer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-2 fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-3 fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: manufacturer)(fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <id value=&quot;manufacturer&quot;/>
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>
                </identifier>
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;/>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>
                    </address>
                </contact>" id="Organization-manufacturer">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a>]</span><div class="debugOff">id: manufacturer</div><div class="debugOff"> fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a</div><span class="summaryShowsOff"> - AAA Pharmaceutical, Inc.</span><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">3010027650<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span></div></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;>">Name: </span><span>AAA Pharmaceutical, Inc.</span></div><div class="indent org2">
					Contact
					<div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>">Address: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;>">681 Main Street</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <city value=&quot;Lumberton&quot;>">Lumberton</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <state value=&quot;New Jersey&quot;>">New Jersey</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <postalCode value=&quot;08048&quot;>">08048</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <country value=&quot;USA&quot;>">USA</span></div></div></div></div></span></div></div></div></div></div></div><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;88488004&quot;/>
                            <display value=&quot;Lead (substance)&quot;/>
                        </coding>
                        <text value=&quot;Pb&quot;/>
                    </valueCodeableConcept>">
		Component
		<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;88488004&quot;/>
                            <display value=&quot;Lead (substance)&quot;/>
                        </coding>
                        <text value=&quot;Pb&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;88488004&quot;/>
                            <display value=&quot;Lead (substance)&quot;/>">Lead (substance)<span class="greyOff"> [88488004]</span><span class="greyOff"> (http://snomed.info/sct)</span></span><span style="white-space:normal;"> - Text: Pb</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: diagnosticreport-product-impurities fullUrl: urn:uuid:6f4a3311-92c5-2b4a-533e-76341e414c63)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationDegradation-impAs)(fullUrl: urn:uuid:7fe7ccd7-6449-0186-2282-3eeb4cf6a795)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impAs&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;10&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;47809000&quot;/>
                            <display value=&quot;Arsenic (substance)&quot;/>
                        </coding>
                        <text value=&quot;As&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationDegradation-impAs">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a>]</span><div class="debugOff">id: observationDegradation-impAs</div><div class="debugOff"> fullUrl: urn:uuid:7fe7ccd7-6449-0186-2282-3eeb4cf6a795</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <status value=&quot;final&quot;>">Status: </span><span>final</span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;10&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;10&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>">&lt;10 ppm</span><span class="greyOff"> [[ppm]] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch&quot;/>">Subject</span><div class="indent med summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCd fullUrl: urn:uuid:ab7997fa-7b46-1175-3f01-6f6997f7878a)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impPb fullUrl: urn:uuid:2940bf11-05bf-6ce2-3c64-457d0d1f9913)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impAs fullUrl: urn:uuid:7fe7ccd7-6449-0186-2282-3eeb4cf6a795)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impHg fullUrl: urn:uuid:7fe7ccd7-6449-0186-2282-3eeb4cf6a796)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCo fullUrl: urn:uuid:a0ba0f6d-8ec0-846a-a70d-f6bca6d01a12)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impV fullUrl: urn:uuid:27aa47fd-7964-4f96-6495-b2bec7f160e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impNi fullUrl: urn:uuid:27aa47fd-7964-4f96-6495-b2bec7f160e8)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCu fullUrl: urn:uuid:27aa47fd-7964-4f96-6495-b2bec7f160e9)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Medication (id: medication-actual-batch)(fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51)

<Bundle>
    <entry>
        <resource>
            <Medication>
                <id value=&quot;medication-actual-batch&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <!-- todo consider change this be the MID? -->
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                            <!--reference value=&quot;urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d5&quot;/-->
                        </valueReference>
                    </extension>
                </code>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <!-- #158 -->
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <!-- #153 -->
                    <lotNumber value=&quot;33445&quot;/>
                </batch>" id="Medication-medication-actual-batch">Medication</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/medication.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/medication.html#tt-uml">R5</a>]</span><div class="debugOff">id: medication-actual-batch</div><div class="debugOff"> fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51</div><span class="summaryShowsOff"><b> - 33445</b></span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <!-- todo consider change this be the MID? -->
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                            <!--reference value=&quot;urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d5&quot;/-->
                        </valueReference>">Definition</span>: Stelbat Tablets, 20mg (<a href="#MedicinalProductDefinition-medicinalproductdefinition-drug-product-dxpq-ex1" title="click to see target - id=medicinalproductdefinition-drug-product-dxpq-ex1">MedicinalProductDefinition</a>)<span class="debugOff"> id: medicinalproductdefinition-drug-product-dxpq-ex1</span></div><div class="summaryHiddenOff"><div class="indent medl2 summaryUnit"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                ...
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <!-- #158 -->
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <!-- #153 -->
                    <lotNumber value=&quot;33445&quot;/>">Batch</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    ...
                    <lotNumber value=&quot;33445&quot;>">Lot Number: </span><span>33445</span></div><div class="summaryHiddenOff"><div class="indent medl3"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <!-- #158 -->
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>">Manufacturing</span><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <!-- #158 -->
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>">Manufacturer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-2 fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-3 fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: manufacturer)(fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <id value=&quot;manufacturer&quot;/>
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>
                </identifier>
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;/>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>
                    </address>
                </contact>" id="Organization-manufacturer">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a>]</span><div class="debugOff">id: manufacturer</div><div class="debugOff"> fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a</div><span class="summaryShowsOff"> - AAA Pharmaceutical, Inc.</span><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">3010027650<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span></div></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;>">Name: </span><span>AAA Pharmaceutical, Inc.</span></div><div class="indent org2">
					Contact
					<div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>">Address: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;>">681 Main Street</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <city value=&quot;Lumberton&quot;>">Lumberton</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <state value=&quot;New Jersey&quot;>">New Jersey</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <postalCode value=&quot;08048&quot;>">08048</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <country value=&quot;USA&quot;>">USA</span></div></div></div></div></span></div></div></div></div></div></div><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;47809000&quot;/>
                            <display value=&quot;Arsenic (substance)&quot;/>
                        </coding>
                        <text value=&quot;As&quot;/>
                    </valueCodeableConcept>">
		Component
		<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;47809000&quot;/>
                            <display value=&quot;Arsenic (substance)&quot;/>
                        </coding>
                        <text value=&quot;As&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;47809000&quot;/>
                            <display value=&quot;Arsenic (substance)&quot;/>">Arsenic (substance)<span class="greyOff"> [47809000]</span><span class="greyOff"> (http://snomed.info/sct)</span></span><span style="white-space:normal;"> - Text: As</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: diagnosticreport-product-impurities fullUrl: urn:uuid:6f4a3311-92c5-2b4a-533e-76341e414c63)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationDegradation-impAs-2)(fullUrl: urn:uuid:be016630-8754-7414-9014-21e020ad66c6)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impAs-2&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;10&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;47809000&quot;/>
                            <display value=&quot;Arsenic (substance)&quot;/>
                        </coding>
                        <text value=&quot;As&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationDegradation-impAs-2">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a>]</span><div class="debugOff">id: observationDegradation-impAs-2</div><div class="debugOff"> fullUrl: urn:uuid:be016630-8754-7414-9014-21e020ad66c6</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <status value=&quot;final&quot;>">Status: </span><span>final</span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;10&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;10&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>">&lt;10 ppm</span><span class="greyOff"> [[ppm]] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-2&quot;/>">Subject</span><div class="indent med summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCd-2 fullUrl: urn:uuid:4052f28b-64a2-392d-35e4-ec8e912434d2)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impPb-2 fullUrl: urn:uuid:332b1e76-6f70-2b4e-5d0c-f22a0e042d3e)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impAs-2 fullUrl: urn:uuid:be016630-8754-7414-9014-21e020ad66c6)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impHg-2 fullUrl: urn:uuid:be016630-8754-7414-9014-21e020ad66c7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCo-2 fullUrl: urn:uuid:d8533dcb-03f8-5997-6ccf-4f9b6f7a5745)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impV-2 fullUrl: urn:uuid:6a78bcde-4781-226c-946e-a4b6915c1899)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impNi-2 fullUrl: urn:uuid:6a78bcde-4781-226c-946e-a4b6915c1890)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCu-2 fullUrl: urn:uuid:6a78bcde-4781-226c-946e-a4b6915c189A)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Medication (id: medication-actual-batch-2)(fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc)

<Bundle>
    <entry>
        <resource>
            <Medication>
                <id value=&quot;medication-actual-batch-2&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>
                    </extension>
                </code>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <lotNumber value=&quot;33446&quot;/>
                </batch>" id="Medication-medication-actual-batch-2">Medication</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/medication.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/medication.html#tt-uml">R5</a>]</span><div class="debugOff">id: medication-actual-batch-2</div><div class="debugOff"> fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc</div><span class="summaryShowsOff"><b> - 33446</b></span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>">Definition</span>: Stelbat Tablets, 20mg (<a href="#MedicinalProductDefinition-medicinalproductdefinition-drug-product-dxpq-ex1" title="click to see target - id=medicinalproductdefinition-drug-product-dxpq-ex1">MedicinalProductDefinition</a>)<span class="debugOff"> id: medicinalproductdefinition-drug-product-dxpq-ex1</span></div><div class="summaryHiddenOff"><div class="indent medl2 summaryUnit"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                ...
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <lotNumber value=&quot;33446&quot;/>">Batch</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    ...
                    <lotNumber value=&quot;33446&quot;>">Lot Number: </span><span>33446</span></div><div class="summaryHiddenOff"><div class="indent medl3"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>">Manufacturing</span><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>">Manufacturer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-2 fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-3 fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: manufacturer)(fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <id value=&quot;manufacturer&quot;/>
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>
                </identifier>
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;/>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>
                    </address>
                </contact>" id="Organization-manufacturer">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a>]</span><div class="debugOff">id: manufacturer</div><div class="debugOff"> fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a</div><span class="summaryShowsOff"> - AAA Pharmaceutical, Inc.</span><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">3010027650<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span></div></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;>">Name: </span><span>AAA Pharmaceutical, Inc.</span></div><div class="indent org2">
					Contact
					<div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>">Address: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;>">681 Main Street</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <city value=&quot;Lumberton&quot;>">Lumberton</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <state value=&quot;New Jersey&quot;>">New Jersey</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <postalCode value=&quot;08048&quot;>">08048</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <country value=&quot;USA&quot;>">USA</span></div></div></div></div></span></div></div></div></div></div></div><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;47809000&quot;/>
                            <display value=&quot;Arsenic (substance)&quot;/>
                        </coding>
                        <text value=&quot;As&quot;/>
                    </valueCodeableConcept>">
		Component
		<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;47809000&quot;/>
                            <display value=&quot;Arsenic (substance)&quot;/>
                        </coding>
                        <text value=&quot;As&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;47809000&quot;/>
                            <display value=&quot;Arsenic (substance)&quot;/>">Arsenic (substance)<span class="greyOff"> [47809000]</span><span class="greyOff"> (http://snomed.info/sct)</span></span><span style="white-space:normal;"> - Text: As</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: diagnosticreport-product-impurities fullUrl: urn:uuid:6f4a3311-92c5-2b4a-533e-76341e414c63)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationDegradation-impAs-3)(fullUrl: urn:uuid:92568f68-78f3-908c-6935-ff5f3d574dd6)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impAs-3&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;5&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;47809000&quot;/>
                            <display value=&quot;Arsenic (substance)&quot;/>
                        </coding>
                        <text value=&quot;As&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationDegradation-impAs-3">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a>]</span><div class="debugOff">id: observationDegradation-impAs-3</div><div class="debugOff"> fullUrl: urn:uuid:92568f68-78f3-908c-6935-ff5f3d574dd6</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <status value=&quot;final&quot;>">Status: </span><span>final</span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;5&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;5&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>">&lt;5 ppm</span><span class="greyOff"> [[ppm]] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-3&quot;/>">Subject</span><div class="indent med summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCd-3 fullUrl: urn:uuid:34ebc51d-8105-0589-3c8d-e7aa6bd0a06c)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impPb-3 fullUrl: urn:uuid:f0a13a3b-2e8b-594f-6874-6050511e4c57)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impAs-3 fullUrl: urn:uuid:92568f68-78f3-908c-6935-ff5f3d574dd6)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impHg-3 fullUrl: urn:uuid:92568f68-78f3-908c-6935-ff5f3d574dd7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCo-3 fullUrl: urn:uuid:7cec19a2-34a7-6b80-3d60-083b2cc64fcb)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impV-3 fullUrl: urn:uuid:f9f11088-7527-947c-3d3f-e71b32e13c78)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impNi-3 fullUrl: urn:uuid:f9f11088-7527-947c-3d3f-e71b32e13c79)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCu-3 fullUrl: urn:uuid:f9f11088-7527-947c-3d3f-e71b32e13c70)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Medication (id: medication-actual-batch-3)(fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06)

<Bundle>
    <entry>
        <resource>
            <Medication>
                <id value=&quot;medication-actual-batch-3&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>
                    </extension>
                </code>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <lotNumber value=&quot;33447&quot;/>
                </batch>" id="Medication-medication-actual-batch-3">Medication</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/medication.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/medication.html#tt-uml">R5</a>]</span><div class="debugOff">id: medication-actual-batch-3</div><div class="debugOff"> fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06</div><span class="summaryShowsOff"><b> - 33447</b></span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>">Definition</span>: Stelbat Tablets, 20mg (<a href="#MedicinalProductDefinition-medicinalproductdefinition-drug-product-dxpq-ex1" title="click to see target - id=medicinalproductdefinition-drug-product-dxpq-ex1">MedicinalProductDefinition</a>)<span class="debugOff"> id: medicinalproductdefinition-drug-product-dxpq-ex1</span></div><div class="summaryHiddenOff"><div class="indent medl2 summaryUnit"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                ...
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <lotNumber value=&quot;33447&quot;/>">Batch</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    ...
                    <lotNumber value=&quot;33447&quot;>">Lot Number: </span><span>33447</span></div><div class="summaryHiddenOff"><div class="indent medl3"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>">Manufacturing</span><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>">Manufacturer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-2 fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-3 fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: manufacturer)(fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <id value=&quot;manufacturer&quot;/>
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>
                </identifier>
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;/>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>
                    </address>
                </contact>" id="Organization-manufacturer">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a>]</span><div class="debugOff">id: manufacturer</div><div class="debugOff"> fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a</div><span class="summaryShowsOff"> - AAA Pharmaceutical, Inc.</span><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">3010027650<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span></div></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;>">Name: </span><span>AAA Pharmaceutical, Inc.</span></div><div class="indent org2">
					Contact
					<div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>">Address: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;>">681 Main Street</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <city value=&quot;Lumberton&quot;>">Lumberton</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <state value=&quot;New Jersey&quot;>">New Jersey</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <postalCode value=&quot;08048&quot;>">08048</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <country value=&quot;USA&quot;>">USA</span></div></div></div></div></span></div></div></div></div></div></div><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;47809000&quot;/>
                            <display value=&quot;Arsenic (substance)&quot;/>
                        </coding>
                        <text value=&quot;As&quot;/>
                    </valueCodeableConcept>">
		Component
		<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;47809000&quot;/>
                            <display value=&quot;Arsenic (substance)&quot;/>
                        </coding>
                        <text value=&quot;As&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;47809000&quot;/>
                            <display value=&quot;Arsenic (substance)&quot;/>">Arsenic (substance)<span class="greyOff"> [47809000]</span><span class="greyOff"> (http://snomed.info/sct)</span></span><span style="white-space:normal;"> - Text: As</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: diagnosticreport-product-impurities fullUrl: urn:uuid:6f4a3311-92c5-2b4a-533e-76341e414c63)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationDegradation-impHg)(fullUrl: urn:uuid:7fe7ccd7-6449-0186-2282-3eeb4cf6a796)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impHg&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch&quot;/>
                </subject>
                <valueString value=&quot;ND&quot;/>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;45262002&quot;/>
                            <display value=&quot;Mercury (substance)&quot;/>
                        </coding>
                        <text value=&quot;Hg&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationDegradation-impHg">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a>]</span><div class="debugOff">id: observationDegradation-impHg</div><div class="debugOff"> fullUrl: urn:uuid:7fe7ccd7-6449-0186-2282-3eeb4cf6a796</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <status value=&quot;final&quot;>">Status: </span><span>final</span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueString value=&quot;ND&quot;>"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueString value=&quot;ND&quot;>">Value: </span><span>ND</span></div></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch&quot;/>">Subject</span><div class="indent med summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCd fullUrl: urn:uuid:ab7997fa-7b46-1175-3f01-6f6997f7878a)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impPb fullUrl: urn:uuid:2940bf11-05bf-6ce2-3c64-457d0d1f9913)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impAs fullUrl: urn:uuid:7fe7ccd7-6449-0186-2282-3eeb4cf6a795)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impHg fullUrl: urn:uuid:7fe7ccd7-6449-0186-2282-3eeb4cf6a796)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCo fullUrl: urn:uuid:a0ba0f6d-8ec0-846a-a70d-f6bca6d01a12)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impV fullUrl: urn:uuid:27aa47fd-7964-4f96-6495-b2bec7f160e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impNi fullUrl: urn:uuid:27aa47fd-7964-4f96-6495-b2bec7f160e8)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCu fullUrl: urn:uuid:27aa47fd-7964-4f96-6495-b2bec7f160e9)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Medication (id: medication-actual-batch)(fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51)

<Bundle>
    <entry>
        <resource>
            <Medication>
                <id value=&quot;medication-actual-batch&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <!-- todo consider change this be the MID? -->
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                            <!--reference value=&quot;urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d5&quot;/-->
                        </valueReference>
                    </extension>
                </code>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <!-- #158 -->
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <!-- #153 -->
                    <lotNumber value=&quot;33445&quot;/>
                </batch>" id="Medication-medication-actual-batch">Medication</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/medication.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/medication.html#tt-uml">R5</a>]</span><div class="debugOff">id: medication-actual-batch</div><div class="debugOff"> fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51</div><span class="summaryShowsOff"><b> - 33445</b></span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <!-- todo consider change this be the MID? -->
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                            <!--reference value=&quot;urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d5&quot;/-->
                        </valueReference>">Definition</span>: Stelbat Tablets, 20mg (<a href="#MedicinalProductDefinition-medicinalproductdefinition-drug-product-dxpq-ex1" title="click to see target - id=medicinalproductdefinition-drug-product-dxpq-ex1">MedicinalProductDefinition</a>)<span class="debugOff"> id: medicinalproductdefinition-drug-product-dxpq-ex1</span></div><div class="summaryHiddenOff"><div class="indent medl2 summaryUnit"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                ...
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <!-- #158 -->
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <!-- #153 -->
                    <lotNumber value=&quot;33445&quot;/>">Batch</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    ...
                    <lotNumber value=&quot;33445&quot;>">Lot Number: </span><span>33445</span></div><div class="summaryHiddenOff"><div class="indent medl3"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <!-- #158 -->
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>">Manufacturing</span><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <!-- #158 -->
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>">Manufacturer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-2 fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-3 fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: manufacturer)(fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <id value=&quot;manufacturer&quot;/>
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>
                </identifier>
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;/>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>
                    </address>
                </contact>" id="Organization-manufacturer">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a>]</span><div class="debugOff">id: manufacturer</div><div class="debugOff"> fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a</div><span class="summaryShowsOff"> - AAA Pharmaceutical, Inc.</span><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">3010027650<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span></div></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;>">Name: </span><span>AAA Pharmaceutical, Inc.</span></div><div class="indent org2">
					Contact
					<div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>">Address: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;>">681 Main Street</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <city value=&quot;Lumberton&quot;>">Lumberton</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <state value=&quot;New Jersey&quot;>">New Jersey</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <postalCode value=&quot;08048&quot;>">08048</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <country value=&quot;USA&quot;>">USA</span></div></div></div></div></span></div></div></div></div></div></div><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;45262002&quot;/>
                            <display value=&quot;Mercury (substance)&quot;/>
                        </coding>
                        <text value=&quot;Hg&quot;/>
                    </valueCodeableConcept>">
		Component
		<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;45262002&quot;/>
                            <display value=&quot;Mercury (substance)&quot;/>
                        </coding>
                        <text value=&quot;Hg&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;45262002&quot;/>
                            <display value=&quot;Mercury (substance)&quot;/>">Mercury (substance)<span class="greyOff"> [45262002]</span><span class="greyOff"> (http://snomed.info/sct)</span></span><span style="white-space:normal;"> - Text: Hg</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: diagnosticreport-product-impurities fullUrl: urn:uuid:6f4a3311-92c5-2b4a-533e-76341e414c63)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationDegradation-impHg-2)(fullUrl: urn:uuid:be016630-8754-7414-9014-21e020ad66c7)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impHg-2&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;10&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;45262002&quot;/>
                            <display value=&quot;Mercury (substance)&quot;/>
                        </coding>
                        <text value=&quot;Hg&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationDegradation-impHg-2">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a>]</span><div class="debugOff">id: observationDegradation-impHg-2</div><div class="debugOff"> fullUrl: urn:uuid:be016630-8754-7414-9014-21e020ad66c7</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <status value=&quot;final&quot;>">Status: </span><span>final</span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;10&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;10&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>">&lt;10 ppm</span><span class="greyOff"> [[ppm]] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-2&quot;/>">Subject</span><div class="indent med summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCd-2 fullUrl: urn:uuid:4052f28b-64a2-392d-35e4-ec8e912434d2)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impPb-2 fullUrl: urn:uuid:332b1e76-6f70-2b4e-5d0c-f22a0e042d3e)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impAs-2 fullUrl: urn:uuid:be016630-8754-7414-9014-21e020ad66c6)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impHg-2 fullUrl: urn:uuid:be016630-8754-7414-9014-21e020ad66c7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCo-2 fullUrl: urn:uuid:d8533dcb-03f8-5997-6ccf-4f9b6f7a5745)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impV-2 fullUrl: urn:uuid:6a78bcde-4781-226c-946e-a4b6915c1899)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impNi-2 fullUrl: urn:uuid:6a78bcde-4781-226c-946e-a4b6915c1890)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCu-2 fullUrl: urn:uuid:6a78bcde-4781-226c-946e-a4b6915c189A)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Medication (id: medication-actual-batch-2)(fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc)

<Bundle>
    <entry>
        <resource>
            <Medication>
                <id value=&quot;medication-actual-batch-2&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>
                    </extension>
                </code>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <lotNumber value=&quot;33446&quot;/>
                </batch>" id="Medication-medication-actual-batch-2">Medication</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/medication.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/medication.html#tt-uml">R5</a>]</span><div class="debugOff">id: medication-actual-batch-2</div><div class="debugOff"> fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc</div><span class="summaryShowsOff"><b> - 33446</b></span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>">Definition</span>: Stelbat Tablets, 20mg (<a href="#MedicinalProductDefinition-medicinalproductdefinition-drug-product-dxpq-ex1" title="click to see target - id=medicinalproductdefinition-drug-product-dxpq-ex1">MedicinalProductDefinition</a>)<span class="debugOff"> id: medicinalproductdefinition-drug-product-dxpq-ex1</span></div><div class="summaryHiddenOff"><div class="indent medl2 summaryUnit"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                ...
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <lotNumber value=&quot;33446&quot;/>">Batch</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    ...
                    <lotNumber value=&quot;33446&quot;>">Lot Number: </span><span>33446</span></div><div class="summaryHiddenOff"><div class="indent medl3"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>">Manufacturing</span><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>">Manufacturer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-2 fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-3 fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: manufacturer)(fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <id value=&quot;manufacturer&quot;/>
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>
                </identifier>
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;/>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>
                    </address>
                </contact>" id="Organization-manufacturer">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a>]</span><div class="debugOff">id: manufacturer</div><div class="debugOff"> fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a</div><span class="summaryShowsOff"> - AAA Pharmaceutical, Inc.</span><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">3010027650<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span></div></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;>">Name: </span><span>AAA Pharmaceutical, Inc.</span></div><div class="indent org2">
					Contact
					<div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>">Address: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;>">681 Main Street</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <city value=&quot;Lumberton&quot;>">Lumberton</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <state value=&quot;New Jersey&quot;>">New Jersey</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <postalCode value=&quot;08048&quot;>">08048</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <country value=&quot;USA&quot;>">USA</span></div></div></div></div></span></div></div></div></div></div></div><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;45262002&quot;/>
                            <display value=&quot;Mercury (substance)&quot;/>
                        </coding>
                        <text value=&quot;Hg&quot;/>
                    </valueCodeableConcept>">
		Component
		<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;45262002&quot;/>
                            <display value=&quot;Mercury (substance)&quot;/>
                        </coding>
                        <text value=&quot;Hg&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;45262002&quot;/>
                            <display value=&quot;Mercury (substance)&quot;/>">Mercury (substance)<span class="greyOff"> [45262002]</span><span class="greyOff"> (http://snomed.info/sct)</span></span><span style="white-space:normal;"> - Text: Hg</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: diagnosticreport-product-impurities fullUrl: urn:uuid:6f4a3311-92c5-2b4a-533e-76341e414c63)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationDegradation-impHg-3)(fullUrl: urn:uuid:92568f68-78f3-908c-6935-ff5f3d574dd7)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impHg-3&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-3&quot;/>
                </subject>
                <valueString value=&quot;ND&quot;/>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;45262002&quot;/>
                            <display value=&quot;Mercury (substance)&quot;/>
                        </coding>
                        <text value=&quot;Hg&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationDegradation-impHg-3">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a>]</span><div class="debugOff">id: observationDegradation-impHg-3</div><div class="debugOff"> fullUrl: urn:uuid:92568f68-78f3-908c-6935-ff5f3d574dd7</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <status value=&quot;final&quot;>">Status: </span><span>final</span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueString value=&quot;ND&quot;>"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueString value=&quot;ND&quot;>">Value: </span><span>ND</span></div></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-3&quot;/>">Subject</span><div class="indent med summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCd-3 fullUrl: urn:uuid:34ebc51d-8105-0589-3c8d-e7aa6bd0a06c)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impPb-3 fullUrl: urn:uuid:f0a13a3b-2e8b-594f-6874-6050511e4c57)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impAs-3 fullUrl: urn:uuid:92568f68-78f3-908c-6935-ff5f3d574dd6)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impHg-3 fullUrl: urn:uuid:92568f68-78f3-908c-6935-ff5f3d574dd7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCo-3 fullUrl: urn:uuid:7cec19a2-34a7-6b80-3d60-083b2cc64fcb)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impV-3 fullUrl: urn:uuid:f9f11088-7527-947c-3d3f-e71b32e13c78)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impNi-3 fullUrl: urn:uuid:f9f11088-7527-947c-3d3f-e71b32e13c79)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCu-3 fullUrl: urn:uuid:f9f11088-7527-947c-3d3f-e71b32e13c70)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Medication (id: medication-actual-batch-3)(fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06)

<Bundle>
    <entry>
        <resource>
            <Medication>
                <id value=&quot;medication-actual-batch-3&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>
                    </extension>
                </code>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <lotNumber value=&quot;33447&quot;/>
                </batch>" id="Medication-medication-actual-batch-3">Medication</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/medication.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/medication.html#tt-uml">R5</a>]</span><div class="debugOff">id: medication-actual-batch-3</div><div class="debugOff"> fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06</div><span class="summaryShowsOff"><b> - 33447</b></span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>">Definition</span>: Stelbat Tablets, 20mg (<a href="#MedicinalProductDefinition-medicinalproductdefinition-drug-product-dxpq-ex1" title="click to see target - id=medicinalproductdefinition-drug-product-dxpq-ex1">MedicinalProductDefinition</a>)<span class="debugOff"> id: medicinalproductdefinition-drug-product-dxpq-ex1</span></div><div class="summaryHiddenOff"><div class="indent medl2 summaryUnit"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                ...
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <lotNumber value=&quot;33447&quot;/>">Batch</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    ...
                    <lotNumber value=&quot;33447&quot;>">Lot Number: </span><span>33447</span></div><div class="summaryHiddenOff"><div class="indent medl3"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>">Manufacturing</span><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>">Manufacturer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-2 fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-3 fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: manufacturer)(fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <id value=&quot;manufacturer&quot;/>
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>
                </identifier>
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;/>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>
                    </address>
                </contact>" id="Organization-manufacturer">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a>]</span><div class="debugOff">id: manufacturer</div><div class="debugOff"> fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a</div><span class="summaryShowsOff"> - AAA Pharmaceutical, Inc.</span><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">3010027650<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span></div></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;>">Name: </span><span>AAA Pharmaceutical, Inc.</span></div><div class="indent org2">
					Contact
					<div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>">Address: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;>">681 Main Street</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <city value=&quot;Lumberton&quot;>">Lumberton</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <state value=&quot;New Jersey&quot;>">New Jersey</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <postalCode value=&quot;08048&quot;>">08048</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <country value=&quot;USA&quot;>">USA</span></div></div></div></div></span></div></div></div></div></div></div><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;45262002&quot;/>
                            <display value=&quot;Mercury (substance)&quot;/>
                        </coding>
                        <text value=&quot;Hg&quot;/>
                    </valueCodeableConcept>">
		Component
		<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;45262002&quot;/>
                            <display value=&quot;Mercury (substance)&quot;/>
                        </coding>
                        <text value=&quot;Hg&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;45262002&quot;/>
                            <display value=&quot;Mercury (substance)&quot;/>">Mercury (substance)<span class="greyOff"> [45262002]</span><span class="greyOff"> (http://snomed.info/sct)</span></span><span style="white-space:normal;"> - Text: Hg</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: diagnosticreport-product-impurities fullUrl: urn:uuid:6f4a3311-92c5-2b4a-533e-76341e414c63)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationDegradation-impCo)(fullUrl: urn:uuid:a0ba0f6d-8ec0-846a-a70d-f6bca6d01a12)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impCo&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;50&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;54808007&quot;/>
                            <display value=&quot;Cobalt (substance)&quot;/>
                        </coding>
                        <text value=&quot;Co&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationDegradation-impCo">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a>]</span><div class="debugOff">id: observationDegradation-impCo</div><div class="debugOff"> fullUrl: urn:uuid:a0ba0f6d-8ec0-846a-a70d-f6bca6d01a12</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <status value=&quot;final&quot;>">Status: </span><span>final</span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;50&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;50&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>">&lt;50 ppm</span><span class="greyOff"> [[ppm]] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch&quot;/>">Subject</span><div class="indent med summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCd fullUrl: urn:uuid:ab7997fa-7b46-1175-3f01-6f6997f7878a)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impPb fullUrl: urn:uuid:2940bf11-05bf-6ce2-3c64-457d0d1f9913)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impAs fullUrl: urn:uuid:7fe7ccd7-6449-0186-2282-3eeb4cf6a795)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impHg fullUrl: urn:uuid:7fe7ccd7-6449-0186-2282-3eeb4cf6a796)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCo fullUrl: urn:uuid:a0ba0f6d-8ec0-846a-a70d-f6bca6d01a12)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impV fullUrl: urn:uuid:27aa47fd-7964-4f96-6495-b2bec7f160e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impNi fullUrl: urn:uuid:27aa47fd-7964-4f96-6495-b2bec7f160e8)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCu fullUrl: urn:uuid:27aa47fd-7964-4f96-6495-b2bec7f160e9)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Medication (id: medication-actual-batch)(fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51)

<Bundle>
    <entry>
        <resource>
            <Medication>
                <id value=&quot;medication-actual-batch&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <!-- todo consider change this be the MID? -->
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                            <!--reference value=&quot;urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d5&quot;/-->
                        </valueReference>
                    </extension>
                </code>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <!-- #158 -->
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <!-- #153 -->
                    <lotNumber value=&quot;33445&quot;/>
                </batch>" id="Medication-medication-actual-batch">Medication</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/medication.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/medication.html#tt-uml">R5</a>]</span><div class="debugOff">id: medication-actual-batch</div><div class="debugOff"> fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51</div><span class="summaryShowsOff"><b> - 33445</b></span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <!-- todo consider change this be the MID? -->
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                            <!--reference value=&quot;urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d5&quot;/-->
                        </valueReference>">Definition</span>: Stelbat Tablets, 20mg (<a href="#MedicinalProductDefinition-medicinalproductdefinition-drug-product-dxpq-ex1" title="click to see target - id=medicinalproductdefinition-drug-product-dxpq-ex1">MedicinalProductDefinition</a>)<span class="debugOff"> id: medicinalproductdefinition-drug-product-dxpq-ex1</span></div><div class="summaryHiddenOff"><div class="indent medl2 summaryUnit"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                ...
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <!-- #158 -->
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <!-- #153 -->
                    <lotNumber value=&quot;33445&quot;/>">Batch</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    ...
                    <lotNumber value=&quot;33445&quot;>">Lot Number: </span><span>33445</span></div><div class="summaryHiddenOff"><div class="indent medl3"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <!-- #158 -->
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>">Manufacturing</span><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <!-- #158 -->
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>">Manufacturer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-2 fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-3 fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: manufacturer)(fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <id value=&quot;manufacturer&quot;/>
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>
                </identifier>
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;/>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>
                    </address>
                </contact>" id="Organization-manufacturer">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a>]</span><div class="debugOff">id: manufacturer</div><div class="debugOff"> fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a</div><span class="summaryShowsOff"> - AAA Pharmaceutical, Inc.</span><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">3010027650<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span></div></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;>">Name: </span><span>AAA Pharmaceutical, Inc.</span></div><div class="indent org2">
					Contact
					<div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>">Address: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;>">681 Main Street</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <city value=&quot;Lumberton&quot;>">Lumberton</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <state value=&quot;New Jersey&quot;>">New Jersey</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <postalCode value=&quot;08048&quot;>">08048</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <country value=&quot;USA&quot;>">USA</span></div></div></div></div></span></div></div></div></div></div></div><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;54808007&quot;/>
                            <display value=&quot;Cobalt (substance)&quot;/>
                        </coding>
                        <text value=&quot;Co&quot;/>
                    </valueCodeableConcept>">
		Component
		<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;54808007&quot;/>
                            <display value=&quot;Cobalt (substance)&quot;/>
                        </coding>
                        <text value=&quot;Co&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;54808007&quot;/>
                            <display value=&quot;Cobalt (substance)&quot;/>">Cobalt (substance)<span class="greyOff"> [54808007]</span><span class="greyOff"> (http://snomed.info/sct)</span></span><span style="white-space:normal;"> - Text: Co</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: diagnosticreport-product-impurities fullUrl: urn:uuid:6f4a3311-92c5-2b4a-533e-76341e414c63)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationDegradation-impCo-2)(fullUrl: urn:uuid:d8533dcb-03f8-5997-6ccf-4f9b6f7a5745)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impCo-2&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;50&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;54808007&quot;/>
                            <display value=&quot;Cobalt (substance)&quot;/>
                        </coding>
                        <text value=&quot;Co&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationDegradation-impCo-2">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a>]</span><div class="debugOff">id: observationDegradation-impCo-2</div><div class="debugOff"> fullUrl: urn:uuid:d8533dcb-03f8-5997-6ccf-4f9b6f7a5745</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <status value=&quot;final&quot;>">Status: </span><span>final</span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;50&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;50&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>">&lt;50 ppm</span><span class="greyOff"> [[ppm]] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-2&quot;/>">Subject</span><div class="indent med summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCd-2 fullUrl: urn:uuid:4052f28b-64a2-392d-35e4-ec8e912434d2)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impPb-2 fullUrl: urn:uuid:332b1e76-6f70-2b4e-5d0c-f22a0e042d3e)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impAs-2 fullUrl: urn:uuid:be016630-8754-7414-9014-21e020ad66c6)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impHg-2 fullUrl: urn:uuid:be016630-8754-7414-9014-21e020ad66c7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCo-2 fullUrl: urn:uuid:d8533dcb-03f8-5997-6ccf-4f9b6f7a5745)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impV-2 fullUrl: urn:uuid:6a78bcde-4781-226c-946e-a4b6915c1899)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impNi-2 fullUrl: urn:uuid:6a78bcde-4781-226c-946e-a4b6915c1890)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCu-2 fullUrl: urn:uuid:6a78bcde-4781-226c-946e-a4b6915c189A)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Medication (id: medication-actual-batch-2)(fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc)

<Bundle>
    <entry>
        <resource>
            <Medication>
                <id value=&quot;medication-actual-batch-2&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>
                    </extension>
                </code>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <lotNumber value=&quot;33446&quot;/>
                </batch>" id="Medication-medication-actual-batch-2">Medication</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/medication.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/medication.html#tt-uml">R5</a>]</span><div class="debugOff">id: medication-actual-batch-2</div><div class="debugOff"> fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc</div><span class="summaryShowsOff"><b> - 33446</b></span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>">Definition</span>: Stelbat Tablets, 20mg (<a href="#MedicinalProductDefinition-medicinalproductdefinition-drug-product-dxpq-ex1" title="click to see target - id=medicinalproductdefinition-drug-product-dxpq-ex1">MedicinalProductDefinition</a>)<span class="debugOff"> id: medicinalproductdefinition-drug-product-dxpq-ex1</span></div><div class="summaryHiddenOff"><div class="indent medl2 summaryUnit"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                ...
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <lotNumber value=&quot;33446&quot;/>">Batch</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    ...
                    <lotNumber value=&quot;33446&quot;>">Lot Number: </span><span>33446</span></div><div class="summaryHiddenOff"><div class="indent medl3"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>">Manufacturing</span><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>">Manufacturer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-2 fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-3 fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: manufacturer)(fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <id value=&quot;manufacturer&quot;/>
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>
                </identifier>
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;/>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>
                    </address>
                </contact>" id="Organization-manufacturer">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a>]</span><div class="debugOff">id: manufacturer</div><div class="debugOff"> fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a</div><span class="summaryShowsOff"> - AAA Pharmaceutical, Inc.</span><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">3010027650<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span></div></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;>">Name: </span><span>AAA Pharmaceutical, Inc.</span></div><div class="indent org2">
					Contact
					<div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>">Address: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;>">681 Main Street</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <city value=&quot;Lumberton&quot;>">Lumberton</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <state value=&quot;New Jersey&quot;>">New Jersey</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <postalCode value=&quot;08048&quot;>">08048</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <country value=&quot;USA&quot;>">USA</span></div></div></div></div></span></div></div></div></div></div></div><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;54808007&quot;/>
                            <display value=&quot;Cobalt (substance)&quot;/>
                        </coding>
                        <text value=&quot;Co&quot;/>
                    </valueCodeableConcept>">
		Component
		<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;54808007&quot;/>
                            <display value=&quot;Cobalt (substance)&quot;/>
                        </coding>
                        <text value=&quot;Co&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;54808007&quot;/>
                            <display value=&quot;Cobalt (substance)&quot;/>">Cobalt (substance)<span class="greyOff"> [54808007]</span><span class="greyOff"> (http://snomed.info/sct)</span></span><span style="white-space:normal;"> - Text: Co</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: diagnosticreport-product-impurities fullUrl: urn:uuid:6f4a3311-92c5-2b4a-533e-76341e414c63)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationDegradation-impCo-3)(fullUrl: urn:uuid:7cec19a2-34a7-6b80-3d60-083b2cc64fcb)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impCo-3&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;50&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;54808007&quot;/>
                            <display value=&quot;Cobalt (substance)&quot;/>
                        </coding>
                        <text value=&quot;Co&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationDegradation-impCo-3">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a>]</span><div class="debugOff">id: observationDegradation-impCo-3</div><div class="debugOff"> fullUrl: urn:uuid:7cec19a2-34a7-6b80-3d60-083b2cc64fcb</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <status value=&quot;final&quot;>">Status: </span><span>final</span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;50&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;50&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>">&lt;50 ppm</span><span class="greyOff"> [[ppm]] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-3&quot;/>">Subject</span><div class="indent med summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCd-3 fullUrl: urn:uuid:34ebc51d-8105-0589-3c8d-e7aa6bd0a06c)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impPb-3 fullUrl: urn:uuid:f0a13a3b-2e8b-594f-6874-6050511e4c57)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impAs-3 fullUrl: urn:uuid:92568f68-78f3-908c-6935-ff5f3d574dd6)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impHg-3 fullUrl: urn:uuid:92568f68-78f3-908c-6935-ff5f3d574dd7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCo-3 fullUrl: urn:uuid:7cec19a2-34a7-6b80-3d60-083b2cc64fcb)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impV-3 fullUrl: urn:uuid:f9f11088-7527-947c-3d3f-e71b32e13c78)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impNi-3 fullUrl: urn:uuid:f9f11088-7527-947c-3d3f-e71b32e13c79)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCu-3 fullUrl: urn:uuid:f9f11088-7527-947c-3d3f-e71b32e13c70)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Medication (id: medication-actual-batch-3)(fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06)

<Bundle>
    <entry>
        <resource>
            <Medication>
                <id value=&quot;medication-actual-batch-3&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>
                    </extension>
                </code>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <lotNumber value=&quot;33447&quot;/>
                </batch>" id="Medication-medication-actual-batch-3">Medication</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/medication.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/medication.html#tt-uml">R5</a>]</span><div class="debugOff">id: medication-actual-batch-3</div><div class="debugOff"> fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06</div><span class="summaryShowsOff"><b> - 33447</b></span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>">Definition</span>: Stelbat Tablets, 20mg (<a href="#MedicinalProductDefinition-medicinalproductdefinition-drug-product-dxpq-ex1" title="click to see target - id=medicinalproductdefinition-drug-product-dxpq-ex1">MedicinalProductDefinition</a>)<span class="debugOff"> id: medicinalproductdefinition-drug-product-dxpq-ex1</span></div><div class="summaryHiddenOff"><div class="indent medl2 summaryUnit"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                ...
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <lotNumber value=&quot;33447&quot;/>">Batch</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    ...
                    <lotNumber value=&quot;33447&quot;>">Lot Number: </span><span>33447</span></div><div class="summaryHiddenOff"><div class="indent medl3"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>">Manufacturing</span><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>">Manufacturer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-2 fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-3 fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: manufacturer)(fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <id value=&quot;manufacturer&quot;/>
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>
                </identifier>
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;/>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>
                    </address>
                </contact>" id="Organization-manufacturer">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a>]</span><div class="debugOff">id: manufacturer</div><div class="debugOff"> fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a</div><span class="summaryShowsOff"> - AAA Pharmaceutical, Inc.</span><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">3010027650<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span></div></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;>">Name: </span><span>AAA Pharmaceutical, Inc.</span></div><div class="indent org2">
					Contact
					<div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>">Address: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;>">681 Main Street</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <city value=&quot;Lumberton&quot;>">Lumberton</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <state value=&quot;New Jersey&quot;>">New Jersey</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <postalCode value=&quot;08048&quot;>">08048</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <country value=&quot;USA&quot;>">USA</span></div></div></div></div></span></div></div></div></div></div></div><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;54808007&quot;/>
                            <display value=&quot;Cobalt (substance)&quot;/>
                        </coding>
                        <text value=&quot;Co&quot;/>
                    </valueCodeableConcept>">
		Component
		<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;54808007&quot;/>
                            <display value=&quot;Cobalt (substance)&quot;/>
                        </coding>
                        <text value=&quot;Co&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;54808007&quot;/>
                            <display value=&quot;Cobalt (substance)&quot;/>">Cobalt (substance)<span class="greyOff"> [54808007]</span><span class="greyOff"> (http://snomed.info/sct)</span></span><span style="white-space:normal;"> - Text: Co</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: diagnosticreport-product-impurities fullUrl: urn:uuid:6f4a3311-92c5-2b4a-533e-76341e414c63)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationDegradation-impV)(fullUrl: urn:uuid:27aa47fd-7964-4f96-6495-b2bec7f160e7)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impV&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;10&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;18925001&quot;/>
                            <display value=&quot;Vanadium (substance)&quot;/>
                        </coding>
                        <text value=&quot;V&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationDegradation-impV">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a>]</span><div class="debugOff">id: observationDegradation-impV</div><div class="debugOff"> fullUrl: urn:uuid:27aa47fd-7964-4f96-6495-b2bec7f160e7</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <status value=&quot;final&quot;>">Status: </span><span>final</span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;10&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;10&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>">&lt;10 ppm</span><span class="greyOff"> [[ppm]] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch&quot;/>">Subject</span><div class="indent med summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCd fullUrl: urn:uuid:ab7997fa-7b46-1175-3f01-6f6997f7878a)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impPb fullUrl: urn:uuid:2940bf11-05bf-6ce2-3c64-457d0d1f9913)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impAs fullUrl: urn:uuid:7fe7ccd7-6449-0186-2282-3eeb4cf6a795)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impHg fullUrl: urn:uuid:7fe7ccd7-6449-0186-2282-3eeb4cf6a796)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCo fullUrl: urn:uuid:a0ba0f6d-8ec0-846a-a70d-f6bca6d01a12)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impV fullUrl: urn:uuid:27aa47fd-7964-4f96-6495-b2bec7f160e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impNi fullUrl: urn:uuid:27aa47fd-7964-4f96-6495-b2bec7f160e8)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCu fullUrl: urn:uuid:27aa47fd-7964-4f96-6495-b2bec7f160e9)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Medication (id: medication-actual-batch)(fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51)

<Bundle>
    <entry>
        <resource>
            <Medication>
                <id value=&quot;medication-actual-batch&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <!-- todo consider change this be the MID? -->
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                            <!--reference value=&quot;urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d5&quot;/-->
                        </valueReference>
                    </extension>
                </code>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <!-- #158 -->
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <!-- #153 -->
                    <lotNumber value=&quot;33445&quot;/>
                </batch>" id="Medication-medication-actual-batch">Medication</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/medication.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/medication.html#tt-uml">R5</a>]</span><div class="debugOff">id: medication-actual-batch</div><div class="debugOff"> fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51</div><span class="summaryShowsOff"><b> - 33445</b></span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <!-- todo consider change this be the MID? -->
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                            <!--reference value=&quot;urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d5&quot;/-->
                        </valueReference>">Definition</span>: Stelbat Tablets, 20mg (<a href="#MedicinalProductDefinition-medicinalproductdefinition-drug-product-dxpq-ex1" title="click to see target - id=medicinalproductdefinition-drug-product-dxpq-ex1">MedicinalProductDefinition</a>)<span class="debugOff"> id: medicinalproductdefinition-drug-product-dxpq-ex1</span></div><div class="summaryHiddenOff"><div class="indent medl2 summaryUnit"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                ...
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <!-- #158 -->
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <!-- #153 -->
                    <lotNumber value=&quot;33445&quot;/>">Batch</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    ...
                    <lotNumber value=&quot;33445&quot;>">Lot Number: </span><span>33445</span></div><div class="summaryHiddenOff"><div class="indent medl3"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <!-- #158 -->
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>">Manufacturing</span><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <!-- #158 -->
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>">Manufacturer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-2 fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-3 fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: manufacturer)(fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <id value=&quot;manufacturer&quot;/>
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>
                </identifier>
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;/>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>
                    </address>
                </contact>" id="Organization-manufacturer">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a>]</span><div class="debugOff">id: manufacturer</div><div class="debugOff"> fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a</div><span class="summaryShowsOff"> - AAA Pharmaceutical, Inc.</span><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">3010027650<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span></div></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;>">Name: </span><span>AAA Pharmaceutical, Inc.</span></div><div class="indent org2">
					Contact
					<div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>">Address: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;>">681 Main Street</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <city value=&quot;Lumberton&quot;>">Lumberton</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <state value=&quot;New Jersey&quot;>">New Jersey</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <postalCode value=&quot;08048&quot;>">08048</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <country value=&quot;USA&quot;>">USA</span></div></div></div></div></span></div></div></div></div></div></div><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;18925001&quot;/>
                            <display value=&quot;Vanadium (substance)&quot;/>
                        </coding>
                        <text value=&quot;V&quot;/>
                    </valueCodeableConcept>">
		Component
		<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;18925001&quot;/>
                            <display value=&quot;Vanadium (substance)&quot;/>
                        </coding>
                        <text value=&quot;V&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;18925001&quot;/>
                            <display value=&quot;Vanadium (substance)&quot;/>">Vanadium (substance)<span class="greyOff"> [18925001]</span><span class="greyOff"> (http://snomed.info/sct)</span></span><span style="white-space:normal;"> - Text: V</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: diagnosticreport-product-impurities fullUrl: urn:uuid:6f4a3311-92c5-2b4a-533e-76341e414c63)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationDegradation-impV-2)(fullUrl: urn:uuid:6a78bcde-4781-226c-946e-a4b6915c1899)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impV-2&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;10&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;18925001&quot;/>
                            <display value=&quot;Vanadium (substance)&quot;/>
                        </coding>
                        <text value=&quot;V&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationDegradation-impV-2">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a>]</span><div class="debugOff">id: observationDegradation-impV-2</div><div class="debugOff"> fullUrl: urn:uuid:6a78bcde-4781-226c-946e-a4b6915c1899</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <status value=&quot;final&quot;>">Status: </span><span>final</span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;10&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;10&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>">&lt;10 ppm</span><span class="greyOff"> [[ppm]] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-2&quot;/>">Subject</span><div class="indent med summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCd-2 fullUrl: urn:uuid:4052f28b-64a2-392d-35e4-ec8e912434d2)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impPb-2 fullUrl: urn:uuid:332b1e76-6f70-2b4e-5d0c-f22a0e042d3e)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impAs-2 fullUrl: urn:uuid:be016630-8754-7414-9014-21e020ad66c6)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impHg-2 fullUrl: urn:uuid:be016630-8754-7414-9014-21e020ad66c7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCo-2 fullUrl: urn:uuid:d8533dcb-03f8-5997-6ccf-4f9b6f7a5745)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impV-2 fullUrl: urn:uuid:6a78bcde-4781-226c-946e-a4b6915c1899)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impNi-2 fullUrl: urn:uuid:6a78bcde-4781-226c-946e-a4b6915c1890)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCu-2 fullUrl: urn:uuid:6a78bcde-4781-226c-946e-a4b6915c189A)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Medication (id: medication-actual-batch-2)(fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc)

<Bundle>
    <entry>
        <resource>
            <Medication>
                <id value=&quot;medication-actual-batch-2&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>
                    </extension>
                </code>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <lotNumber value=&quot;33446&quot;/>
                </batch>" id="Medication-medication-actual-batch-2">Medication</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/medication.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/medication.html#tt-uml">R5</a>]</span><div class="debugOff">id: medication-actual-batch-2</div><div class="debugOff"> fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc</div><span class="summaryShowsOff"><b> - 33446</b></span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>">Definition</span>: Stelbat Tablets, 20mg (<a href="#MedicinalProductDefinition-medicinalproductdefinition-drug-product-dxpq-ex1" title="click to see target - id=medicinalproductdefinition-drug-product-dxpq-ex1">MedicinalProductDefinition</a>)<span class="debugOff"> id: medicinalproductdefinition-drug-product-dxpq-ex1</span></div><div class="summaryHiddenOff"><div class="indent medl2 summaryUnit"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                ...
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <lotNumber value=&quot;33446&quot;/>">Batch</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    ...
                    <lotNumber value=&quot;33446&quot;>">Lot Number: </span><span>33446</span></div><div class="summaryHiddenOff"><div class="indent medl3"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>">Manufacturing</span><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>">Manufacturer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-2 fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-3 fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: manufacturer)(fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <id value=&quot;manufacturer&quot;/>
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>
                </identifier>
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;/>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>
                    </address>
                </contact>" id="Organization-manufacturer">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a>]</span><div class="debugOff">id: manufacturer</div><div class="debugOff"> fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a</div><span class="summaryShowsOff"> - AAA Pharmaceutical, Inc.</span><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">3010027650<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span></div></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;>">Name: </span><span>AAA Pharmaceutical, Inc.</span></div><div class="indent org2">
					Contact
					<div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>">Address: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;>">681 Main Street</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <city value=&quot;Lumberton&quot;>">Lumberton</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <state value=&quot;New Jersey&quot;>">New Jersey</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <postalCode value=&quot;08048&quot;>">08048</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <country value=&quot;USA&quot;>">USA</span></div></div></div></div></span></div></div></div></div></div></div><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;18925001&quot;/>
                            <display value=&quot;Vanadium (substance)&quot;/>
                        </coding>
                        <text value=&quot;V&quot;/>
                    </valueCodeableConcept>">
		Component
		<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;18925001&quot;/>
                            <display value=&quot;Vanadium (substance)&quot;/>
                        </coding>
                        <text value=&quot;V&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;18925001&quot;/>
                            <display value=&quot;Vanadium (substance)&quot;/>">Vanadium (substance)<span class="greyOff"> [18925001]</span><span class="greyOff"> (http://snomed.info/sct)</span></span><span style="white-space:normal;"> - Text: V</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: diagnosticreport-product-impurities fullUrl: urn:uuid:6f4a3311-92c5-2b4a-533e-76341e414c63)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationDegradation-impV-3)(fullUrl: urn:uuid:f9f11088-7527-947c-3d3f-e71b32e13c78)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impV-3&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;10&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;18925001&quot;/>
                            <display value=&quot;Vanadium (substance)&quot;/>
                        </coding>
                        <text value=&quot;V&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationDegradation-impV-3">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a>]</span><div class="debugOff">id: observationDegradation-impV-3</div><div class="debugOff"> fullUrl: urn:uuid:f9f11088-7527-947c-3d3f-e71b32e13c78</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <status value=&quot;final&quot;>">Status: </span><span>final</span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;10&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;10&quot;/>
                    <comparator value=&quot;<&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>">&lt;10 ppm</span><span class="greyOff"> [[ppm]] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-3&quot;/>">Subject</span><div class="indent med summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCd-3 fullUrl: urn:uuid:34ebc51d-8105-0589-3c8d-e7aa6bd0a06c)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impPb-3 fullUrl: urn:uuid:f0a13a3b-2e8b-594f-6874-6050511e4c57)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impAs-3 fullUrl: urn:uuid:92568f68-78f3-908c-6935-ff5f3d574dd6)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impHg-3 fullUrl: urn:uuid:92568f68-78f3-908c-6935-ff5f3d574dd7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCo-3 fullUrl: urn:uuid:7cec19a2-34a7-6b80-3d60-083b2cc64fcb)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impV-3 fullUrl: urn:uuid:f9f11088-7527-947c-3d3f-e71b32e13c78)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impNi-3 fullUrl: urn:uuid:f9f11088-7527-947c-3d3f-e71b32e13c79)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCu-3 fullUrl: urn:uuid:f9f11088-7527-947c-3d3f-e71b32e13c70)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Medication (id: medication-actual-batch-3)(fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06)

<Bundle>
    <entry>
        <resource>
            <Medication>
                <id value=&quot;medication-actual-batch-3&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>
                    </extension>
                </code>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <lotNumber value=&quot;33447&quot;/>
                </batch>" id="Medication-medication-actual-batch-3">Medication</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/medication.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/medication.html#tt-uml">R5</a>]</span><div class="debugOff">id: medication-actual-batch-3</div><div class="debugOff"> fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06</div><span class="summaryShowsOff"><b> - 33447</b></span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>">Definition</span>: Stelbat Tablets, 20mg (<a href="#MedicinalProductDefinition-medicinalproductdefinition-drug-product-dxpq-ex1" title="click to see target - id=medicinalproductdefinition-drug-product-dxpq-ex1">MedicinalProductDefinition</a>)<span class="debugOff"> id: medicinalproductdefinition-drug-product-dxpq-ex1</span></div><div class="summaryHiddenOff"><div class="indent medl2 summaryUnit"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                ...
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <lotNumber value=&quot;33447&quot;/>">Batch</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    ...
                    <lotNumber value=&quot;33447&quot;>">Lot Number: </span><span>33447</span></div><div class="summaryHiddenOff"><div class="indent medl3"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>">Manufacturing</span><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>">Manufacturer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-2 fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-3 fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: manufacturer)(fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <id value=&quot;manufacturer&quot;/>
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>
                </identifier>
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;/>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>
                    </address>
                </contact>" id="Organization-manufacturer">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a>]</span><div class="debugOff">id: manufacturer</div><div class="debugOff"> fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a</div><span class="summaryShowsOff"> - AAA Pharmaceutical, Inc.</span><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">3010027650<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span></div></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;>">Name: </span><span>AAA Pharmaceutical, Inc.</span></div><div class="indent org2">
					Contact
					<div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>">Address: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;>">681 Main Street</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <city value=&quot;Lumberton&quot;>">Lumberton</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <state value=&quot;New Jersey&quot;>">New Jersey</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <postalCode value=&quot;08048&quot;>">08048</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <country value=&quot;USA&quot;>">USA</span></div></div></div></div></span></div></div></div></div></div></div><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;18925001&quot;/>
                            <display value=&quot;Vanadium (substance)&quot;/>
                        </coding>
                        <text value=&quot;V&quot;/>
                    </valueCodeableConcept>">
		Component
		<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;18925001&quot;/>
                            <display value=&quot;Vanadium (substance)&quot;/>
                        </coding>
                        <text value=&quot;V&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;18925001&quot;/>
                            <display value=&quot;Vanadium (substance)&quot;/>">Vanadium (substance)<span class="greyOff"> [18925001]</span><span class="greyOff"> (http://snomed.info/sct)</span></span><span style="white-space:normal;"> - Text: V</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: diagnosticreport-product-impurities fullUrl: urn:uuid:6f4a3311-92c5-2b4a-533e-76341e414c63)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationDegradation-impNi)(fullUrl: urn:uuid:27aa47fd-7964-4f96-6495-b2bec7f160e8)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impNi&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch&quot;/>
                </subject>
                <valueString value=&quot;ND&quot;/>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;33396006&quot;/>
                            <display value=&quot;Nickel (substance)&quot;/>
                        </coding>
                        <text value=&quot;Ni&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationDegradation-impNi">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a>]</span><div class="debugOff">id: observationDegradation-impNi</div><div class="debugOff"> fullUrl: urn:uuid:27aa47fd-7964-4f96-6495-b2bec7f160e8</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <status value=&quot;final&quot;>">Status: </span><span>final</span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueString value=&quot;ND&quot;>"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueString value=&quot;ND&quot;>">Value: </span><span>ND</span></div></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch&quot;/>">Subject</span><div class="indent med summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCd fullUrl: urn:uuid:ab7997fa-7b46-1175-3f01-6f6997f7878a)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impPb fullUrl: urn:uuid:2940bf11-05bf-6ce2-3c64-457d0d1f9913)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impAs fullUrl: urn:uuid:7fe7ccd7-6449-0186-2282-3eeb4cf6a795)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impHg fullUrl: urn:uuid:7fe7ccd7-6449-0186-2282-3eeb4cf6a796)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCo fullUrl: urn:uuid:a0ba0f6d-8ec0-846a-a70d-f6bca6d01a12)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impV fullUrl: urn:uuid:27aa47fd-7964-4f96-6495-b2bec7f160e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impNi fullUrl: urn:uuid:27aa47fd-7964-4f96-6495-b2bec7f160e8)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCu fullUrl: urn:uuid:27aa47fd-7964-4f96-6495-b2bec7f160e9)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Medication (id: medication-actual-batch)(fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51)

<Bundle>
    <entry>
        <resource>
            <Medication>
                <id value=&quot;medication-actual-batch&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <!-- todo consider change this be the MID? -->
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                            <!--reference value=&quot;urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d5&quot;/-->
                        </valueReference>
                    </extension>
                </code>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <!-- #158 -->
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <!-- #153 -->
                    <lotNumber value=&quot;33445&quot;/>
                </batch>" id="Medication-medication-actual-batch">Medication</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/medication.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/medication.html#tt-uml">R5</a>]</span><div class="debugOff">id: medication-actual-batch</div><div class="debugOff"> fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51</div><span class="summaryShowsOff"><b> - 33445</b></span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <!-- todo consider change this be the MID? -->
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                            <!--reference value=&quot;urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d5&quot;/-->
                        </valueReference>">Definition</span>: Stelbat Tablets, 20mg (<a href="#MedicinalProductDefinition-medicinalproductdefinition-drug-product-dxpq-ex1" title="click to see target - id=medicinalproductdefinition-drug-product-dxpq-ex1">MedicinalProductDefinition</a>)<span class="debugOff"> id: medicinalproductdefinition-drug-product-dxpq-ex1</span></div><div class="summaryHiddenOff"><div class="indent medl2 summaryUnit"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                ...
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <!-- #158 -->
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <!-- #153 -->
                    <lotNumber value=&quot;33445&quot;/>">Batch</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    ...
                    <lotNumber value=&quot;33445&quot;>">Lot Number: </span><span>33445</span></div><div class="summaryHiddenOff"><div class="indent medl3"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <!-- #158 -->
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>">Manufacturing</span><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <!-- #158 -->
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>">Manufacturer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-2 fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-3 fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: manufacturer)(fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <id value=&quot;manufacturer&quot;/>
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>
                </identifier>
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;/>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>
                    </address>
                </contact>" id="Organization-manufacturer">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a>]</span><div class="debugOff">id: manufacturer</div><div class="debugOff"> fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a</div><span class="summaryShowsOff"> - AAA Pharmaceutical, Inc.</span><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">3010027650<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span></div></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;>">Name: </span><span>AAA Pharmaceutical, Inc.</span></div><div class="indent org2">
					Contact
					<div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>">Address: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;>">681 Main Street</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <city value=&quot;Lumberton&quot;>">Lumberton</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <state value=&quot;New Jersey&quot;>">New Jersey</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <postalCode value=&quot;08048&quot;>">08048</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <country value=&quot;USA&quot;>">USA</span></div></div></div></div></span></div></div></div></div></div></div><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;33396006&quot;/>
                            <display value=&quot;Nickel (substance)&quot;/>
                        </coding>
                        <text value=&quot;Ni&quot;/>
                    </valueCodeableConcept>">
		Component
		<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;33396006&quot;/>
                            <display value=&quot;Nickel (substance)&quot;/>
                        </coding>
                        <text value=&quot;Ni&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;33396006&quot;/>
                            <display value=&quot;Nickel (substance)&quot;/>">Nickel (substance)<span class="greyOff"> [33396006]</span><span class="greyOff"> (http://snomed.info/sct)</span></span><span style="white-space:normal;"> - Text: Ni</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: diagnosticreport-product-impurities fullUrl: urn:uuid:6f4a3311-92c5-2b4a-533e-76341e414c63)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationDegradation-impNi-2)(fullUrl: urn:uuid:6a78bcde-4781-226c-946e-a4b6915c1890)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impNi-2&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-2&quot;/>
                </subject>
                <valueString value=&quot;ND&quot;/>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;33396006&quot;/>
                            <display value=&quot;Nickel (substance)&quot;/>
                        </coding>
                        <text value=&quot;Ni&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationDegradation-impNi-2">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a>]</span><div class="debugOff">id: observationDegradation-impNi-2</div><div class="debugOff"> fullUrl: urn:uuid:6a78bcde-4781-226c-946e-a4b6915c1890</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <status value=&quot;final&quot;>">Status: </span><span>final</span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueString value=&quot;ND&quot;>"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueString value=&quot;ND&quot;>">Value: </span><span>ND</span></div></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-2&quot;/>">Subject</span><div class="indent med summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCd-2 fullUrl: urn:uuid:4052f28b-64a2-392d-35e4-ec8e912434d2)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impPb-2 fullUrl: urn:uuid:332b1e76-6f70-2b4e-5d0c-f22a0e042d3e)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impAs-2 fullUrl: urn:uuid:be016630-8754-7414-9014-21e020ad66c6)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impHg-2 fullUrl: urn:uuid:be016630-8754-7414-9014-21e020ad66c7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCo-2 fullUrl: urn:uuid:d8533dcb-03f8-5997-6ccf-4f9b6f7a5745)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impV-2 fullUrl: urn:uuid:6a78bcde-4781-226c-946e-a4b6915c1899)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impNi-2 fullUrl: urn:uuid:6a78bcde-4781-226c-946e-a4b6915c1890)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCu-2 fullUrl: urn:uuid:6a78bcde-4781-226c-946e-a4b6915c189A)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Medication (id: medication-actual-batch-2)(fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc)

<Bundle>
    <entry>
        <resource>
            <Medication>
                <id value=&quot;medication-actual-batch-2&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>
                    </extension>
                </code>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <lotNumber value=&quot;33446&quot;/>
                </batch>" id="Medication-medication-actual-batch-2">Medication</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/medication.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/medication.html#tt-uml">R5</a>]</span><div class="debugOff">id: medication-actual-batch-2</div><div class="debugOff"> fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc</div><span class="summaryShowsOff"><b> - 33446</b></span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>">Definition</span>: Stelbat Tablets, 20mg (<a href="#MedicinalProductDefinition-medicinalproductdefinition-drug-product-dxpq-ex1" title="click to see target - id=medicinalproductdefinition-drug-product-dxpq-ex1">MedicinalProductDefinition</a>)<span class="debugOff"> id: medicinalproductdefinition-drug-product-dxpq-ex1</span></div><div class="summaryHiddenOff"><div class="indent medl2 summaryUnit"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                ...
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <lotNumber value=&quot;33446&quot;/>">Batch</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    ...
                    <lotNumber value=&quot;33446&quot;>">Lot Number: </span><span>33446</span></div><div class="summaryHiddenOff"><div class="indent medl3"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>">Manufacturing</span><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>">Manufacturer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-2 fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-3 fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: manufacturer)(fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <id value=&quot;manufacturer&quot;/>
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>
                </identifier>
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;/>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>
                    </address>
                </contact>" id="Organization-manufacturer">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a>]</span><div class="debugOff">id: manufacturer</div><div class="debugOff"> fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a</div><span class="summaryShowsOff"> - AAA Pharmaceutical, Inc.</span><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">3010027650<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span></div></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;>">Name: </span><span>AAA Pharmaceutical, Inc.</span></div><div class="indent org2">
					Contact
					<div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>">Address: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;>">681 Main Street</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <city value=&quot;Lumberton&quot;>">Lumberton</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <state value=&quot;New Jersey&quot;>">New Jersey</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <postalCode value=&quot;08048&quot;>">08048</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <country value=&quot;USA&quot;>">USA</span></div></div></div></div></span></div></div></div></div></div></div><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;33396006&quot;/>
                            <display value=&quot;Nickel (substance)&quot;/>
                        </coding>
                        <text value=&quot;Ni&quot;/>
                    </valueCodeableConcept>">
		Component
		<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;33396006&quot;/>
                            <display value=&quot;Nickel (substance)&quot;/>
                        </coding>
                        <text value=&quot;Ni&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;33396006&quot;/>
                            <display value=&quot;Nickel (substance)&quot;/>">Nickel (substance)<span class="greyOff"> [33396006]</span><span class="greyOff"> (http://snomed.info/sct)</span></span><span style="white-space:normal;"> - Text: Ni</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: diagnosticreport-product-impurities fullUrl: urn:uuid:6f4a3311-92c5-2b4a-533e-76341e414c63)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationDegradation-impNi-3)(fullUrl: urn:uuid:f9f11088-7527-947c-3d3f-e71b32e13c79)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impNi-3&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-3&quot;/>
                </subject>
                <valueString value=&quot;ND&quot;/>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;33396006&quot;/>
                            <display value=&quot;Nickel (substance)&quot;/>
                        </coding>
                        <text value=&quot;Ni&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationDegradation-impNi-3">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a>]</span><div class="debugOff">id: observationDegradation-impNi-3</div><div class="debugOff"> fullUrl: urn:uuid:f9f11088-7527-947c-3d3f-e71b32e13c79</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <status value=&quot;final&quot;>">Status: </span><span>final</span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueString value=&quot;ND&quot;>"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueString value=&quot;ND&quot;>">Value: </span><span>ND</span></div></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-3&quot;/>">Subject</span><div class="indent med summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCd-3 fullUrl: urn:uuid:34ebc51d-8105-0589-3c8d-e7aa6bd0a06c)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impPb-3 fullUrl: urn:uuid:f0a13a3b-2e8b-594f-6874-6050511e4c57)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impAs-3 fullUrl: urn:uuid:92568f68-78f3-908c-6935-ff5f3d574dd6)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impHg-3 fullUrl: urn:uuid:92568f68-78f3-908c-6935-ff5f3d574dd7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCo-3 fullUrl: urn:uuid:7cec19a2-34a7-6b80-3d60-083b2cc64fcb)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impV-3 fullUrl: urn:uuid:f9f11088-7527-947c-3d3f-e71b32e13c78)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impNi-3 fullUrl: urn:uuid:f9f11088-7527-947c-3d3f-e71b32e13c79)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCu-3 fullUrl: urn:uuid:f9f11088-7527-947c-3d3f-e71b32e13c70)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Medication (id: medication-actual-batch-3)(fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06)

<Bundle>
    <entry>
        <resource>
            <Medication>
                <id value=&quot;medication-actual-batch-3&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>
                    </extension>
                </code>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <lotNumber value=&quot;33447&quot;/>
                </batch>" id="Medication-medication-actual-batch-3">Medication</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/medication.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/medication.html#tt-uml">R5</a>]</span><div class="debugOff">id: medication-actual-batch-3</div><div class="debugOff"> fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06</div><span class="summaryShowsOff"><b> - 33447</b></span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>">Definition</span>: Stelbat Tablets, 20mg (<a href="#MedicinalProductDefinition-medicinalproductdefinition-drug-product-dxpq-ex1" title="click to see target - id=medicinalproductdefinition-drug-product-dxpq-ex1">MedicinalProductDefinition</a>)<span class="debugOff"> id: medicinalproductdefinition-drug-product-dxpq-ex1</span></div><div class="summaryHiddenOff"><div class="indent medl2 summaryUnit"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                ...
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <lotNumber value=&quot;33447&quot;/>">Batch</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    ...
                    <lotNumber value=&quot;33447&quot;>">Lot Number: </span><span>33447</span></div><div class="summaryHiddenOff"><div class="indent medl3"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>">Manufacturing</span><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>">Manufacturer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-2 fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-3 fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: manufacturer)(fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <id value=&quot;manufacturer&quot;/>
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>
                </identifier>
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;/>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>
                    </address>
                </contact>" id="Organization-manufacturer">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a>]</span><div class="debugOff">id: manufacturer</div><div class="debugOff"> fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a</div><span class="summaryShowsOff"> - AAA Pharmaceutical, Inc.</span><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">3010027650<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span></div></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;>">Name: </span><span>AAA Pharmaceutical, Inc.</span></div><div class="indent org2">
					Contact
					<div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>">Address: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;>">681 Main Street</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <city value=&quot;Lumberton&quot;>">Lumberton</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <state value=&quot;New Jersey&quot;>">New Jersey</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <postalCode value=&quot;08048&quot;>">08048</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <country value=&quot;USA&quot;>">USA</span></div></div></div></div></span></div></div></div></div></div></div><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;33396006&quot;/>
                            <display value=&quot;Nickel (substance)&quot;/>
                        </coding>
                        <text value=&quot;Ni&quot;/>
                    </valueCodeableConcept>">
		Component
		<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;33396006&quot;/>
                            <display value=&quot;Nickel (substance)&quot;/>
                        </coding>
                        <text value=&quot;Ni&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;33396006&quot;/>
                            <display value=&quot;Nickel (substance)&quot;/>">Nickel (substance)<span class="greyOff"> [33396006]</span><span class="greyOff"> (http://snomed.info/sct)</span></span><span style="white-space:normal;"> - Text: Ni</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: diagnosticreport-product-impurities fullUrl: urn:uuid:6f4a3311-92c5-2b4a-533e-76341e414c63)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationDegradation-impCu)(fullUrl: urn:uuid:27aa47fd-7964-4f96-6495-b2bec7f160e9)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impCu&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;250&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;66925006&quot;/>
                            <display value=&quot;Copper (substance)&quot;/>
                        </coding>
                        <text value=&quot;Cu&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationDegradation-impCu">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a>]</span><div class="debugOff">id: observationDegradation-impCu</div><div class="debugOff"> fullUrl: urn:uuid:27aa47fd-7964-4f96-6495-b2bec7f160e9</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <status value=&quot;final&quot;>">Status: </span><span>final</span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;250&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;250&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>">250 ppm</span><span class="greyOff"> [[ppm]] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch&quot;/>">Subject</span><div class="indent med summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCd fullUrl: urn:uuid:ab7997fa-7b46-1175-3f01-6f6997f7878a)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impPb fullUrl: urn:uuid:2940bf11-05bf-6ce2-3c64-457d0d1f9913)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impAs fullUrl: urn:uuid:7fe7ccd7-6449-0186-2282-3eeb4cf6a795)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impHg fullUrl: urn:uuid:7fe7ccd7-6449-0186-2282-3eeb4cf6a796)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCo fullUrl: urn:uuid:a0ba0f6d-8ec0-846a-a70d-f6bca6d01a12)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impV fullUrl: urn:uuid:27aa47fd-7964-4f96-6495-b2bec7f160e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impNi fullUrl: urn:uuid:27aa47fd-7964-4f96-6495-b2bec7f160e8)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCu fullUrl: urn:uuid:27aa47fd-7964-4f96-6495-b2bec7f160e9)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Medication (id: medication-actual-batch)(fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51)

<Bundle>
    <entry>
        <resource>
            <Medication>
                <id value=&quot;medication-actual-batch&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <!-- todo consider change this be the MID? -->
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                            <!--reference value=&quot;urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d5&quot;/-->
                        </valueReference>
                    </extension>
                </code>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <!-- #158 -->
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <!-- #153 -->
                    <lotNumber value=&quot;33445&quot;/>
                </batch>" id="Medication-medication-actual-batch">Medication</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/medication.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/medication.html#tt-uml">R5</a>]</span><div class="debugOff">id: medication-actual-batch</div><div class="debugOff"> fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51</div><span class="summaryShowsOff"><b> - 33445</b></span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <!-- todo consider change this be the MID? -->
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                            <!--reference value=&quot;urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d5&quot;/-->
                        </valueReference>">Definition</span>: Stelbat Tablets, 20mg (<a href="#MedicinalProductDefinition-medicinalproductdefinition-drug-product-dxpq-ex1" title="click to see target - id=medicinalproductdefinition-drug-product-dxpq-ex1">MedicinalProductDefinition</a>)<span class="debugOff"> id: medicinalproductdefinition-drug-product-dxpq-ex1</span></div><div class="summaryHiddenOff"><div class="indent medl2 summaryUnit"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                ...
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <!-- #158 -->
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <!-- #153 -->
                    <lotNumber value=&quot;33445&quot;/>">Batch</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    ...
                    <lotNumber value=&quot;33445&quot;>">Lot Number: </span><span>33445</span></div><div class="summaryHiddenOff"><div class="indent medl3"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <!-- #158 -->
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>">Manufacturing</span><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <!-- #158 -->
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>">Manufacturer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-2 fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-3 fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: manufacturer)(fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <id value=&quot;manufacturer&quot;/>
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>
                </identifier>
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;/>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>
                    </address>
                </contact>" id="Organization-manufacturer">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a>]</span><div class="debugOff">id: manufacturer</div><div class="debugOff"> fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a</div><span class="summaryShowsOff"> - AAA Pharmaceutical, Inc.</span><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">3010027650<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span></div></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;>">Name: </span><span>AAA Pharmaceutical, Inc.</span></div><div class="indent org2">
					Contact
					<div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>">Address: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;>">681 Main Street</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <city value=&quot;Lumberton&quot;>">Lumberton</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <state value=&quot;New Jersey&quot;>">New Jersey</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <postalCode value=&quot;08048&quot;>">08048</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <country value=&quot;USA&quot;>">USA</span></div></div></div></div></span></div></div></div></div></div></div><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;66925006&quot;/>
                            <display value=&quot;Copper (substance)&quot;/>
                        </coding>
                        <text value=&quot;Cu&quot;/>
                    </valueCodeableConcept>">
		Component
		<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;66925006&quot;/>
                            <display value=&quot;Copper (substance)&quot;/>
                        </coding>
                        <text value=&quot;Cu&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;66925006&quot;/>
                            <display value=&quot;Copper (substance)&quot;/>">Copper (substance)<span class="greyOff"> [66925006]</span><span class="greyOff"> (http://snomed.info/sct)</span></span><span style="white-space:normal;"> - Text: Cu</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: diagnosticreport-product-impurities fullUrl: urn:uuid:6f4a3311-92c5-2b4a-533e-76341e414c63)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationDegradation-impCu-2)(fullUrl: urn:uuid:6a78bcde-4781-226c-946e-a4b6915c189A)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impCu-2&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;223&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;66925006&quot;/>
                            <display value=&quot;Copper (substance)&quot;/>
                        </coding>
                        <text value=&quot;Cu&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationDegradation-impCu-2">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a>]</span><div class="debugOff">id: observationDegradation-impCu-2</div><div class="debugOff"> fullUrl: urn:uuid:6a78bcde-4781-226c-946e-a4b6915c189A</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <status value=&quot;final&quot;>">Status: </span><span>final</span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;223&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;223&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>">223 ppm</span><span class="greyOff"> [[ppm]] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-2&quot;/>">Subject</span><div class="indent med summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCd-2 fullUrl: urn:uuid:4052f28b-64a2-392d-35e4-ec8e912434d2)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impPb-2 fullUrl: urn:uuid:332b1e76-6f70-2b4e-5d0c-f22a0e042d3e)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impAs-2 fullUrl: urn:uuid:be016630-8754-7414-9014-21e020ad66c6)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impHg-2 fullUrl: urn:uuid:be016630-8754-7414-9014-21e020ad66c7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCo-2 fullUrl: urn:uuid:d8533dcb-03f8-5997-6ccf-4f9b6f7a5745)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impV-2 fullUrl: urn:uuid:6a78bcde-4781-226c-946e-a4b6915c1899)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impNi-2 fullUrl: urn:uuid:6a78bcde-4781-226c-946e-a4b6915c1890)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCu-2 fullUrl: urn:uuid:6a78bcde-4781-226c-946e-a4b6915c189A)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Medication (id: medication-actual-batch-2)(fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc)

<Bundle>
    <entry>
        <resource>
            <Medication>
                <id value=&quot;medication-actual-batch-2&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>
                    </extension>
                </code>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <lotNumber value=&quot;33446&quot;/>
                </batch>" id="Medication-medication-actual-batch-2">Medication</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/medication.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/medication.html#tt-uml">R5</a>]</span><div class="debugOff">id: medication-actual-batch-2</div><div class="debugOff"> fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc</div><span class="summaryShowsOff"><b> - 33446</b></span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>">Definition</span>: Stelbat Tablets, 20mg (<a href="#MedicinalProductDefinition-medicinalproductdefinition-drug-product-dxpq-ex1" title="click to see target - id=medicinalproductdefinition-drug-product-dxpq-ex1">MedicinalProductDefinition</a>)<span class="debugOff"> id: medicinalproductdefinition-drug-product-dxpq-ex1</span></div><div class="summaryHiddenOff"><div class="indent medl2 summaryUnit"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                ...
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <lotNumber value=&quot;33446&quot;/>">Batch</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    ...
                    <lotNumber value=&quot;33446&quot;>">Lot Number: </span><span>33446</span></div><div class="summaryHiddenOff"><div class="indent medl3"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>">Manufacturing</span><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>">Manufacturer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-2 fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-3 fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: manufacturer)(fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <id value=&quot;manufacturer&quot;/>
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>
                </identifier>
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;/>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>
                    </address>
                </contact>" id="Organization-manufacturer">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a>]</span><div class="debugOff">id: manufacturer</div><div class="debugOff"> fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a</div><span class="summaryShowsOff"> - AAA Pharmaceutical, Inc.</span><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">3010027650<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span></div></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;>">Name: </span><span>AAA Pharmaceutical, Inc.</span></div><div class="indent org2">
					Contact
					<div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>">Address: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;>">681 Main Street</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <city value=&quot;Lumberton&quot;>">Lumberton</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <state value=&quot;New Jersey&quot;>">New Jersey</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <postalCode value=&quot;08048&quot;>">08048</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <country value=&quot;USA&quot;>">USA</span></div></div></div></div></span></div></div></div></div></div></div><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;66925006&quot;/>
                            <display value=&quot;Copper (substance)&quot;/>
                        </coding>
                        <text value=&quot;Cu&quot;/>
                    </valueCodeableConcept>">
		Component
		<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;66925006&quot;/>
                            <display value=&quot;Copper (substance)&quot;/>
                        </coding>
                        <text value=&quot;Cu&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;66925006&quot;/>
                            <display value=&quot;Copper (substance)&quot;/>">Copper (substance)<span class="greyOff"> [66925006]</span><span class="greyOff"> (http://snomed.info/sct)</span></span><span style="white-space:normal;"> - Text: Cu</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: diagnosticreport-product-impurities fullUrl: urn:uuid:6f4a3311-92c5-2b4a-533e-76341e414c63)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationDegradation-impCu-3)(fullUrl: urn:uuid:f9f11088-7527-947c-3d3f-e71b32e13c70)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-impCu-3&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;199&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;66925006&quot;/>
                            <display value=&quot;Copper (substance)&quot;/>
                        </coding>
                        <text value=&quot;Cu&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationDegradation-impCu-3">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a>]</span><div class="debugOff">id: observationDegradation-impCu-3</div><div class="debugOff"> fullUrl: urn:uuid:f9f11088-7527-947c-3d3f-e71b32e13c70</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <status value=&quot;final&quot;>">Status: </span><span>final</span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                    <text value=&quot;Degradation Products&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Degradation Products</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;199&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;199&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>">199 ppm</span><span class="greyOff"> [[ppm]] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-3&quot;/>">Subject</span><div class="indent med summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCd-3 fullUrl: urn:uuid:34ebc51d-8105-0589-3c8d-e7aa6bd0a06c)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impPb-3 fullUrl: urn:uuid:f0a13a3b-2e8b-594f-6874-6050511e4c57)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impAs-3 fullUrl: urn:uuid:92568f68-78f3-908c-6935-ff5f3d574dd6)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impHg-3 fullUrl: urn:uuid:92568f68-78f3-908c-6935-ff5f3d574dd7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCo-3 fullUrl: urn:uuid:7cec19a2-34a7-6b80-3d60-083b2cc64fcb)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impV-3 fullUrl: urn:uuid:f9f11088-7527-947c-3d3f-e71b32e13c78)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impNi-3 fullUrl: urn:uuid:f9f11088-7527-947c-3d3f-e71b32e13c79)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-impCu-3 fullUrl: urn:uuid:f9f11088-7527-947c-3d3f-e71b32e13c70)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Medication (id: medication-actual-batch-3)(fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06)

<Bundle>
    <entry>
        <resource>
            <Medication>
                <id value=&quot;medication-actual-batch-3&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>
                    </extension>
                </code>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <lotNumber value=&quot;33447&quot;/>
                </batch>" id="Medication-medication-actual-batch-3">Medication</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/medication.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/medication.html#tt-uml">R5</a>]</span><div class="debugOff">id: medication-actual-batch-3</div><div class="debugOff"> fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06</div><span class="summaryShowsOff"><b> - 33447</b></span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>">Definition</span>: Stelbat Tablets, 20mg (<a href="#MedicinalProductDefinition-medicinalproductdefinition-drug-product-dxpq-ex1" title="click to see target - id=medicinalproductdefinition-drug-product-dxpq-ex1">MedicinalProductDefinition</a>)<span class="debugOff"> id: medicinalproductdefinition-drug-product-dxpq-ex1</span></div><div class="summaryHiddenOff"><div class="indent medl2 summaryUnit"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                ...
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                    </extension>
                    <lotNumber value=&quot;33447&quot;/>">Batch</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    ...
                    <lotNumber value=&quot;33447&quot;>">Lot Number: </span><span>33447</span></div><div class="summaryHiddenOff"><div class="indent medl3"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>">Manufacturing</span><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>">Manufacturer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-2 fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-3 fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: manufacturer)(fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <id value=&quot;manufacturer&quot;/>
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>
                </identifier>
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;/>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>
                    </address>
                </contact>" id="Organization-manufacturer">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a>]</span><div class="debugOff">id: manufacturer</div><div class="debugOff"> fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a</div><span class="summaryShowsOff"> - AAA Pharmaceutical, Inc.</span><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3010027650&quot;/>">3010027650<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span></div></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;>">Name: </span><span>AAA Pharmaceutical, Inc.</span></div><div class="indent org2">
					Contact
					<div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>">Address: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;>">681 Main Street</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <city value=&quot;Lumberton&quot;>">Lumberton</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <state value=&quot;New Jersey&quot;>">New Jersey</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <postalCode value=&quot;08048&quot;>">08048</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <country value=&quot;USA&quot;>">USA</span></div></div></div></div></span></div></div></div></div></div></div><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;66925006&quot;/>
                            <display value=&quot;Copper (substance)&quot;/>
                        </coding>
                        <text value=&quot;Cu&quot;/>
                    </valueCodeableConcept>">
		Component
		<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;66925006&quot;/>
                            <display value=&quot;Copper (substance)&quot;/>
                        </coding>
                        <text value=&quot;Cu&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;66925006&quot;/>
                            <display value=&quot;Copper (substance)&quot;/>">Copper (substance)<span class="greyOff"> [66925006]</span><span class="greyOff"> (http://snomed.info/sct)</span></span><span style="white-space:normal;"> - Text: Cu</span></div></div><div class="summaryHiddenOff"></div></div>
</div>
</div>
<div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)"><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: substance-cadmium-unlinked)(fullUrl: fec78d02-1ec2-48ac-bab3-5ed8b6adf9a3)

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;substance-cadmium-unlinked&quot;/>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/substancePropertyType&quot;/>
                            <code value=&quot;impurityClassificationMCP&quot;/>
                            <display value=&quot;Impurity Classification - Mutagenic and Carcinogenic Potential&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Class 1&quot;/>
                    </valueCodeableConcept>
                </property>
                <code>
                    <code>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;66586000&quot;/>
                            <display value=&quot;Cadmium (substance)&quot;/>
                        </coding>
                    </code>
                </code>" id="SubstanceDefinition-substance-cadmium-unlinked">Substance</span></a><span class="summaryShowsOff"><b></b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a>]</span><div class="debugOff">id: substance-cadmium-unlinked</div>
<div class="debugOff"> fullUrl: fec78d02-1ec2-48ac-bab3-5ed8b6adf9a3</div>
<div>
<div class="indent sbddetails">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <code>
                    <code>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;66586000&quot;/>
                            <display value=&quot;Cadmium (substance)&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <code>
                    <code>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;66586000&quot;/>
                            <display value=&quot;Cadmium (substance)&quot;/>">Cadmium (substance)<span class="greyOff"> [66586000]</span><span class="greyOff"> (http://snomed.info/sct)</span></span></span></div>
</div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff">
<div class="summaryHiddenOff">
<div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                ...
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/substancePropertyType&quot;/>
                            <code value=&quot;impurityClassificationMCP&quot;/>
                            <display value=&quot;Impurity Classification - Mutagenic and Carcinogenic Potential&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Class 1&quot;/>
                    </valueCodeableConcept>">Property</span><div class="indent sbddetails2">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/substancePropertyType&quot;/>
                            <code value=&quot;impurityClassificationMCP&quot;/>
                            <display value=&quot;Impurity Classification - Mutagenic and Carcinogenic Potential&quot;/>
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/substancePropertyType&quot;/>
                            <code value=&quot;impurityClassificationMCP&quot;/>
                            <display value=&quot;Impurity Classification - Mutagenic and Carcinogenic Potential&quot;/>">Impurity Classification - Mutagenic and Carcinogenic Potential<span class="greyOff"> [impurityClassificationMCP]</span><span class="greyOff"> (http://accumulus.org/fhir/code/substancePropertyType)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueCodeableConcept>
                        <text value=&quot;Class 1&quot;/>">Value: <span style="white-space:normal;">Class 1</span></span></div>
</div>
</div>
</div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
</div>
<div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)"><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: substance-lead-unlinked)(fullUrl: fec78d02-1ec2-48ac-bab3-5ed8b6adf9a4)

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;substance-lead-unlinked&quot;/>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/substancePropertyType&quot;/>
                            <code value=&quot;impurityClassificationMCP&quot;/>
                            <display value=&quot;Impurity Classification - Mutagenic and Carcinogenic Potential&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Class 1&quot;/>
                    </valueCodeableConcept>
                </property>
                <code>
                    <code>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;88488004&quot;/>
                            <display value=&quot;Lead (substance)&quot;/>
                        </coding>
                    </code>
                </code>" id="SubstanceDefinition-substance-lead-unlinked">Substance</span></a><span class="summaryShowsOff"><b></b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a>]</span><div class="debugOff">id: substance-lead-unlinked</div>
<div class="debugOff"> fullUrl: fec78d02-1ec2-48ac-bab3-5ed8b6adf9a4</div>
<div>
<div class="indent sbddetails">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <code>
                    <code>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;88488004&quot;/>
                            <display value=&quot;Lead (substance)&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <code>
                    <code>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;88488004&quot;/>
                            <display value=&quot;Lead (substance)&quot;/>">Lead (substance)<span class="greyOff"> [88488004]</span><span class="greyOff"> (http://snomed.info/sct)</span></span></span></div>
</div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff">
<div class="summaryHiddenOff">
<div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                ...
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/substancePropertyType&quot;/>
                            <code value=&quot;impurityClassificationMCP&quot;/>
                            <display value=&quot;Impurity Classification - Mutagenic and Carcinogenic Potential&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Class 1&quot;/>
                    </valueCodeableConcept>">Property</span><div class="indent sbddetails2">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/substancePropertyType&quot;/>
                            <code value=&quot;impurityClassificationMCP&quot;/>
                            <display value=&quot;Impurity Classification - Mutagenic and Carcinogenic Potential&quot;/>
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/substancePropertyType&quot;/>
                            <code value=&quot;impurityClassificationMCP&quot;/>
                            <display value=&quot;Impurity Classification - Mutagenic and Carcinogenic Potential&quot;/>">Impurity Classification - Mutagenic and Carcinogenic Potential<span class="greyOff"> [impurityClassificationMCP]</span><span class="greyOff"> (http://accumulus.org/fhir/code/substancePropertyType)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueCodeableConcept>
                        <text value=&quot;Class 1&quot;/>">Value: <span style="white-space:normal;">Class 1</span></span></div>
</div>
</div>
</div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
</div>
<div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)"><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: substance-arsenic-unlinked)(fullUrl: fec78d02-1ec2-48ac-bab3-5ed8b6adf9a5)

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;substance-arsenic-unlinked&quot;/>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/substancePropertyType&quot;/>
                            <code value=&quot;impurityClassificationMCP&quot;/>
                            <display value=&quot;Impurity Classification - Mutagenic and Carcinogenic Potential&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Class 1&quot;/>
                    </valueCodeableConcept>
                </property>
                <code>
                    <code>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;47809000&quot;/>
                            <display value=&quot;Arsenic (substance)&quot;/>
                        </coding>
                    </code>
                </code>" id="SubstanceDefinition-substance-arsenic-unlinked">Substance</span></a><span class="summaryShowsOff"><b></b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a>]</span><div class="debugOff">id: substance-arsenic-unlinked</div>
<div class="debugOff"> fullUrl: fec78d02-1ec2-48ac-bab3-5ed8b6adf9a5</div>
<div>
<div class="indent sbddetails">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <code>
                    <code>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;47809000&quot;/>
                            <display value=&quot;Arsenic (substance)&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <code>
                    <code>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;47809000&quot;/>
                            <display value=&quot;Arsenic (substance)&quot;/>">Arsenic (substance)<span class="greyOff"> [47809000]</span><span class="greyOff"> (http://snomed.info/sct)</span></span></span></div>
</div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff">
<div class="summaryHiddenOff">
<div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                ...
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/substancePropertyType&quot;/>
                            <code value=&quot;impurityClassificationMCP&quot;/>
                            <display value=&quot;Impurity Classification - Mutagenic and Carcinogenic Potential&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Class 1&quot;/>
                    </valueCodeableConcept>">Property</span><div class="indent sbddetails2">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/substancePropertyType&quot;/>
                            <code value=&quot;impurityClassificationMCP&quot;/>
                            <display value=&quot;Impurity Classification - Mutagenic and Carcinogenic Potential&quot;/>
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/substancePropertyType&quot;/>
                            <code value=&quot;impurityClassificationMCP&quot;/>
                            <display value=&quot;Impurity Classification - Mutagenic and Carcinogenic Potential&quot;/>">Impurity Classification - Mutagenic and Carcinogenic Potential<span class="greyOff"> [impurityClassificationMCP]</span><span class="greyOff"> (http://accumulus.org/fhir/code/substancePropertyType)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueCodeableConcept>
                        <text value=&quot;Class 1&quot;/>">Value: <span style="white-space:normal;">Class 1</span></span></div>
</div>
</div>
</div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
</div>
<div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)"><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: substance-mercury-unlinked)(fullUrl: fec78d02-1ec2-48ac-bab3-5ed8b6adf9a6)

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;substance-mercury-unlinked&quot;/>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/substancePropertyType&quot;/>
                            <code value=&quot;impurityClassificationMCP&quot;/>
                            <display value=&quot;Impurity Classification - Mutagenic and Carcinogenic Potential&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Class 1&quot;/>
                    </valueCodeableConcept>
                </property>
                <code>
                    <code>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;45262002&quot;/>
                            <display value=&quot;Mercury (substance)&quot;/>
                        </coding>
                    </code>
                </code>" id="SubstanceDefinition-substance-mercury-unlinked">Substance</span></a><span class="summaryShowsOff"><b></b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a>]</span><div class="debugOff">id: substance-mercury-unlinked</div>
<div class="debugOff"> fullUrl: fec78d02-1ec2-48ac-bab3-5ed8b6adf9a6</div>
<div>
<div class="indent sbddetails">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <code>
                    <code>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;45262002&quot;/>
                            <display value=&quot;Mercury (substance)&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <code>
                    <code>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;45262002&quot;/>
                            <display value=&quot;Mercury (substance)&quot;/>">Mercury (substance)<span class="greyOff"> [45262002]</span><span class="greyOff"> (http://snomed.info/sct)</span></span></span></div>
</div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff">
<div class="summaryHiddenOff">
<div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                ...
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/substancePropertyType&quot;/>
                            <code value=&quot;impurityClassificationMCP&quot;/>
                            <display value=&quot;Impurity Classification - Mutagenic and Carcinogenic Potential&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Class 1&quot;/>
                    </valueCodeableConcept>">Property</span><div class="indent sbddetails2">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/substancePropertyType&quot;/>
                            <code value=&quot;impurityClassificationMCP&quot;/>
                            <display value=&quot;Impurity Classification - Mutagenic and Carcinogenic Potential&quot;/>
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/substancePropertyType&quot;/>
                            <code value=&quot;impurityClassificationMCP&quot;/>
                            <display value=&quot;Impurity Classification - Mutagenic and Carcinogenic Potential&quot;/>">Impurity Classification - Mutagenic and Carcinogenic Potential<span class="greyOff"> [impurityClassificationMCP]</span><span class="greyOff"> (http://accumulus.org/fhir/code/substancePropertyType)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueCodeableConcept>
                        <text value=&quot;Class 1&quot;/>">Value: <span style="white-space:normal;">Class 1</span></span></div>
</div>
</div>
</div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
</div>
<div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)"><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: substance-cobalt-unlinked)(fullUrl: fec78d02-1ec2-48ac-bab3-5ed8b6adf9a7)

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;substance-cobalt-unlinked&quot;/>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/substancePropertyType&quot;/>
                            <code value=&quot;impurityClassificationMCP&quot;/>
                            <display value=&quot;Impurity Classification - Mutagenic and Carcinogenic Potential&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Class 2&quot;/>
                    </valueCodeableConcept>
                </property>
                <code>
                    <code>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;54808007&quot;/>
                            <display value=&quot;Cobalt (substance)&quot;/>
                        </coding>
                    </code>
                </code>" id="SubstanceDefinition-substance-cobalt-unlinked">Substance</span></a><span class="summaryShowsOff"><b></b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a>]</span><div class="debugOff">id: substance-cobalt-unlinked</div>
<div class="debugOff"> fullUrl: fec78d02-1ec2-48ac-bab3-5ed8b6adf9a7</div>
<div>
<div class="indent sbddetails">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <code>
                    <code>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;54808007&quot;/>
                            <display value=&quot;Cobalt (substance)&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <code>
                    <code>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;54808007&quot;/>
                            <display value=&quot;Cobalt (substance)&quot;/>">Cobalt (substance)<span class="greyOff"> [54808007]</span><span class="greyOff"> (http://snomed.info/sct)</span></span></span></div>
</div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff">
<div class="summaryHiddenOff">
<div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                ...
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/substancePropertyType&quot;/>
                            <code value=&quot;impurityClassificationMCP&quot;/>
                            <display value=&quot;Impurity Classification - Mutagenic and Carcinogenic Potential&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Class 2&quot;/>
                    </valueCodeableConcept>">Property</span><div class="indent sbddetails2">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/substancePropertyType&quot;/>
                            <code value=&quot;impurityClassificationMCP&quot;/>
                            <display value=&quot;Impurity Classification - Mutagenic and Carcinogenic Potential&quot;/>
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/substancePropertyType&quot;/>
                            <code value=&quot;impurityClassificationMCP&quot;/>
                            <display value=&quot;Impurity Classification - Mutagenic and Carcinogenic Potential&quot;/>">Impurity Classification - Mutagenic and Carcinogenic Potential<span class="greyOff"> [impurityClassificationMCP]</span><span class="greyOff"> (http://accumulus.org/fhir/code/substancePropertyType)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueCodeableConcept>
                        <text value=&quot;Class 2&quot;/>">Value: <span style="white-space:normal;">Class 2</span></span></div>
</div>
</div>
</div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
</div>
<div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)"><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: substance-vanadium-unlinked)(fullUrl: fec78d02-1ec2-48ac-bab3-5ed8b6adf9a8)

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;substance-vanadium-unlinked&quot;/>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/substancePropertyType&quot;/>
                            <code value=&quot;impurityClassificationMCP&quot;/>
                            <display value=&quot;Impurity Classification - Mutagenic and Carcinogenic Potential&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Class 2&quot;/>
                    </valueCodeableConcept>
                </property>
                <code>
                    <code>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;18925001&quot;/>
                            <display value=&quot;Vanadium (substance)&quot;/>
                        </coding>
                    </code>
                </code>" id="SubstanceDefinition-substance-vanadium-unlinked">Substance</span></a><span class="summaryShowsOff"><b></b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a>]</span><div class="debugOff">id: substance-vanadium-unlinked</div>
<div class="debugOff"> fullUrl: fec78d02-1ec2-48ac-bab3-5ed8b6adf9a8</div>
<div>
<div class="indent sbddetails">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <code>
                    <code>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;18925001&quot;/>
                            <display value=&quot;Vanadium (substance)&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <code>
                    <code>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;18925001&quot;/>
                            <display value=&quot;Vanadium (substance)&quot;/>">Vanadium (substance)<span class="greyOff"> [18925001]</span><span class="greyOff"> (http://snomed.info/sct)</span></span></span></div>
</div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff">
<div class="summaryHiddenOff">
<div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                ...
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/substancePropertyType&quot;/>
                            <code value=&quot;impurityClassificationMCP&quot;/>
                            <display value=&quot;Impurity Classification - Mutagenic and Carcinogenic Potential&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Class 2&quot;/>
                    </valueCodeableConcept>">Property</span><div class="indent sbddetails2">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/substancePropertyType&quot;/>
                            <code value=&quot;impurityClassificationMCP&quot;/>
                            <display value=&quot;Impurity Classification - Mutagenic and Carcinogenic Potential&quot;/>
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/substancePropertyType&quot;/>
                            <code value=&quot;impurityClassificationMCP&quot;/>
                            <display value=&quot;Impurity Classification - Mutagenic and Carcinogenic Potential&quot;/>">Impurity Classification - Mutagenic and Carcinogenic Potential<span class="greyOff"> [impurityClassificationMCP]</span><span class="greyOff"> (http://accumulus.org/fhir/code/substancePropertyType)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueCodeableConcept>
                        <text value=&quot;Class 2&quot;/>">Value: <span style="white-space:normal;">Class 2</span></span></div>
</div>
</div>
</div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
</div>
<div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)"><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: substance-nickel-unlinked)(fullUrl: fec78d02-1ec2-48ac-bab3-5ed8b6adf9a9)

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;substance-nickel-unlinked&quot;/>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/substancePropertyType&quot;/>
                            <code value=&quot;impurityClassificationMCP&quot;/>
                            <display value=&quot;Impurity Classification - Mutagenic and Carcinogenic Potential&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Class 2&quot;/>
                    </valueCodeableConcept>
                </property>
                <code>
                    <code>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;33396006&quot;/>
                            <display value=&quot;Nickel (substance)&quot;/>
                        </coding>
                    </code>
                </code>" id="SubstanceDefinition-substance-nickel-unlinked">Substance</span></a><span class="summaryShowsOff"><b></b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a>]</span><div class="debugOff">id: substance-nickel-unlinked</div>
<div class="debugOff"> fullUrl: fec78d02-1ec2-48ac-bab3-5ed8b6adf9a9</div>
<div>
<div class="indent sbddetails">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <code>
                    <code>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;33396006&quot;/>
                            <display value=&quot;Nickel (substance)&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <code>
                    <code>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;33396006&quot;/>
                            <display value=&quot;Nickel (substance)&quot;/>">Nickel (substance)<span class="greyOff"> [33396006]</span><span class="greyOff"> (http://snomed.info/sct)</span></span></span></div>
</div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff">
<div class="summaryHiddenOff">
<div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                ...
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/substancePropertyType&quot;/>
                            <code value=&quot;impurityClassificationMCP&quot;/>
                            <display value=&quot;Impurity Classification - Mutagenic and Carcinogenic Potential&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Class 2&quot;/>
                    </valueCodeableConcept>">Property</span><div class="indent sbddetails2">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/substancePropertyType&quot;/>
                            <code value=&quot;impurityClassificationMCP&quot;/>
                            <display value=&quot;Impurity Classification - Mutagenic and Carcinogenic Potential&quot;/>
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/substancePropertyType&quot;/>
                            <code value=&quot;impurityClassificationMCP&quot;/>
                            <display value=&quot;Impurity Classification - Mutagenic and Carcinogenic Potential&quot;/>">Impurity Classification - Mutagenic and Carcinogenic Potential<span class="greyOff"> [impurityClassificationMCP]</span><span class="greyOff"> (http://accumulus.org/fhir/code/substancePropertyType)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueCodeableConcept>
                        <text value=&quot;Class 2&quot;/>">Value: <span style="white-space:normal;">Class 2</span></span></div>
</div>
</div>
</div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
</div>
<div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)"><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: substance-copper-unlinked)(fullUrl: fec78d02-1ec2-48ac-bab3-5ed8b6adf9a0)

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;substance-copper-unlinked&quot;/>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/substancePropertyType&quot;/>
                            <code value=&quot;impurityClassificationMCP&quot;/>
                            <display value=&quot;Impurity Classification - Mutagenic and Carcinogenic Potential&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Class 3&quot;/>
                    </valueCodeableConcept>
                </property>
                <code>
                    <code>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;66925006&quot;/>
                            <display value=&quot;Copper (substance)&quot;/>
                        </coding>
                    </code>
                </code>" id="SubstanceDefinition-substance-copper-unlinked">Substance</span></a><span class="summaryShowsOff"><b></b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a>]</span><div class="debugOff">id: substance-copper-unlinked</div>
<div class="debugOff"> fullUrl: fec78d02-1ec2-48ac-bab3-5ed8b6adf9a0</div>
<div>
<div class="indent sbddetails">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <code>
                    <code>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;66925006&quot;/>
                            <display value=&quot;Copper (substance)&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <code>
                    <code>
                        <coding>
                            <system value=&quot;http://snomed.info/sct&quot;/>
                            <code value=&quot;66925006&quot;/>
                            <display value=&quot;Copper (substance)&quot;/>">Copper (substance)<span class="greyOff"> [66925006]</span><span class="greyOff"> (http://snomed.info/sct)</span></span></span></div>
</div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff">
<div class="summaryHiddenOff">
<div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                ...
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/substancePropertyType&quot;/>
                            <code value=&quot;impurityClassificationMCP&quot;/>
                            <display value=&quot;Impurity Classification - Mutagenic and Carcinogenic Potential&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Class 3&quot;/>
                    </valueCodeableConcept>">Property</span><div class="indent sbddetails2">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/substancePropertyType&quot;/>
                            <code value=&quot;impurityClassificationMCP&quot;/>
                            <display value=&quot;Impurity Classification - Mutagenic and Carcinogenic Potential&quot;/>
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/substancePropertyType&quot;/>
                            <code value=&quot;impurityClassificationMCP&quot;/>
                            <display value=&quot;Impurity Classification - Mutagenic and Carcinogenic Potential&quot;/>">Impurity Classification - Mutagenic and Carcinogenic Potential<span class="greyOff"> [impurityClassificationMCP]</span><span class="greyOff"> (http://accumulus.org/fhir/code/substancePropertyType)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueCodeableConcept>
                        <text value=&quot;Class 3&quot;/>">Value: <span style="white-space:normal;">Class 3</span></span></div>
</div>
</div>
</div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
</div>
</div>
</div>
</div>
<div class="debugOff"></div>
</div>
</div>
</body>
<style>

@media all {

    /* consolas works better if text has to align but doesn't look so good.
       text size adjust gives better scaling on mobile devices, and also overrides default behaviour where
       only "full with" text gets scaled (so some divs do, and others dont) 150% looks ok on iPad Safari, but too big on iPad Chrome */
    .divBody { font:10pt 'Verdana'; margin-right:1.5em; margin-top:0.5em; -webkit-text-size-adjust:150%; }

    .indent {
        margin-left:1em; 	/* controls line to line indent */
        text-indent:-1em; 	/* moves text back to right, so that other parts of the div are still at the left */
        margin-right:1em;
        text-indent:0em;
        margin-right:0em;
        margin-top:0.2em;
        margin-bottom:-0.1em;
        padding-bottom:0.1em; /* at bottom of text */
        background-Color:#E6E0E1;
        border:2px solid white;
	    transform:translate(-2px, -2px);
	    border-radius: 5px;
	    visibility:visible; /* this is so that the outer border doesn't hide these */
    }
    .indent-no-border {
        margin-left:1em; 	/* controls line to line indent */
        text-indent:-1em; 	/* moves text back to right, so that other parts of the div are still at the left */
        margin-right:1em;
        text-indent:0em;
        margin-right:0em;
        margin-top:0.2em;
        margin-bottom:-0.1em;
        padding-bottom:0.1em; /* at bottom of text */
	    transform:translate(-2px, -2px);
		visibility:visible;
    }
	.bundle { background-Color: #e0dede }
    .bundleBorder {
        border:2px solid #cfcfcf;
	    border-radius: 5px;
	    margin: -1px;
        background-Color: #e0dede;
    }
    .visible { visibility:visible }

    .modifierExtension { font-weight:bold; color:red; }

    .pat { background-Color:#ffe699 }
    .patl2 { background-Color:#fae8b1 }
    .patl3 { background-Color:#fff1c7 }
    .patl4 { background-Color:#fff4d4 }
    
    .body { background-Color:#e3cd8a }
    .bodyl2 { background-Color:#e0cf99 }

    .comp { background-Color:#F5DEB3 }
    .compl2 { background-Color:#f5e4c4 }
    .compl3 { background-Color:#f5e8d0 }
    .compText { background-Color:#f5e8d0 }

    .mpd { background-Color:#ffe699 }
    .mpdl2 { background-Color:#fcebb6 }
    .mpdl3 { background-Color:#fcf0ca }

    .task { background-Color:#fcb568 }
    .task2 { background-Color:#ffd8ad }
    .task3 { background-Color:#ffdfbd }

    .proc { background-Color:#fcb568 }
    .procl2 { background-Color:#ffd8ad }
    .procl3 { background-Color:#ffdfbd }

    .prov { background-Color:#b4b4b4 }

    .cui { background-Color:#d9d2e9 }
    .cuidetails { background-Color:#e6e1f0 }

    .sbd,.hcs { background-Color:#affad5 }
    .sbddetails,.hcsl2 { background-Color:#c7fce2 }
    .sbddetails2,.hcsl3 { background-Color:#d4fae8 }
    .sbddetails3 { background-Color:#e3fcf0 }

    .apd { background-Color:#d5a6bd; word-wrap:break-all; }
    .apdl2 { background-Color:#e3c5d4; }
    .apdl3 { background-Color:#edd1df; }

    .allergy { background-Color:#d5a6bd; }
    .allergyl2 { background-Color:#d6bcc9; }
    .allergyl3 { background-Color:#d9cad1; }
    .allergyl4 { background-Color:#d9d4d6; }

    .adverseEvent { background-Color:#d6bcc9; }
    .adverseEventl2 { background-Color:#d9cad1; }
    .adverseEventl3 { background-Color:#d9d4d6; }

    .ppd { background-Color:#b6d7a8; width:60%; }
    .ppdl2, .ppdpackage { background-Color:#c2deb6 }
    .ppdl3, .ppdpackageitem { background-Color:#daf0d1 }
    .ppdl4  { background-Color:#e4f2df }

    .obs { background-Color:#b6d7a8; width:75%; }
    .obsl2 { background-Color:#c2deb6 }
    .obsl3 { background-Color:#d4ebca }

    .obsDef { background-Color:#93ad87; width:75%; }
    .obsDefl2 { background-Color:#a8c79b; }
    .obsDefl3 { background-Color:#b6d7a8; }

    .enc { background-Color:#d8f7a3 }
    .encl2 { background-Color: #e1fcb3 }
    .encl3 { background-Color:#e7ffbd }

    .prr { background-Color:#bfbfbf }
    .prrl2 { background-Color:#cfcfcf }
    
    .orgdark { background-Color:#bfbfbf }
    .file { background-Color:#bfbfbf }

    .pra { background-Color:#cfcfcf }
    .org { background-Color:#cfcfcf }
    .act { background-Color:#cfcfcf }
    .plan { background-Color:#cfcfcf }

    .imm { background-Color:#83bdd6 }
    .imml2 { background-Color: #98c5d9 }
    .imml3 { background-Color: #afcedb }

    .org2,.act2,.pral2,.planl2 { background-Color:#dfdfdf }
    .loc { background-Color:#dfdfdf }
    .org3,.act3,.planl3 { background-Color:#ededed }
	.org4,.act4,.planl4 { background-Color:#f2f2f2 }
	.org5 { background-Color:#f7f7f7 }

    .man {  background-Color:#a4c1f4 }
    .manl2 { background-Color:#c2d7fc }
    .manl3 { background-Color:#d9e7ff }
    .manl4 { background-Color:#e8f1ff }
    .manl5 { background-Color:#f5f9ff }

    .med {  background-Color:#a4c1f4 }
    .medl2 { background-Color:#b8cef5 }
    .medl3 { background-Color:#cedcf5 }
    .medl4 { background-Color:#dfe7f7 }

    .ing { background-Color:#f4cccc }
    .ingsub { background-Color:#f7d7d7 }
    .ingsubstr { background-Color:#fce3e3 }
    .ingrefsub { background-Color:#ffeded }

    .subd { background-Color:#b4a7d6 }
    .regauth { background-Color:#82e0dc }
    .regauthl2 { background-Color:#98ebe7 }
    .regauthcase { background-Color:#98ebe7 }
    .regauthcaseapp { background-Color:#aaf2ef }

    .medreq { background-Color:#82e0dc }
    .medreql2 { background-Color:#98ebe7 }

    .medstat { background-Color:#82e0dc }
    .medstatl2 { background-Color:#c2fffc }
    .medstatl3 { background-Color:#d4fffd }
    .medstatl4 { background-Color:#e8fcfc }
    .medstatl5 { background-Color:#f2fcfc }

    .serviceReq { background-Color:#c2fffc }
    .serviceReql2 { background-Color:#d4fffd }
    .serviceReql3 { background-Color:#e8fcfc }
    .serviceReql4 { background-Color:#f2fcfc }

	.cond { background-Color:#f4cccc }
    .condl2 { background-Color:#f5dcdc }
    .condl3 { background-Color:#f5e6e6 }

    .devd { background-Color:#b7b7b7 }
    .devdl2 { background-Color:#cfcfcf }
    .devdl3  { background-Color:#e3e3e3 }

    .flag { background-Color:#fffd8f }
    .flagl2 { background-Color:#fffda1 }
    .flagl3 { background-Color:#fcfbb6 }

    .consent { background-Color:#ffb68f }
    .consentl2 { background-Color:#fcc7ac }
    .consentl3 { background-Color: #ffd3bd }
    .consentl4 { background-Color: #ffe0d1 }

	.openButton { width: 12px;
					position: absolute;
        			top: 0px;
       				right: 2px;
       				color:white;
       				visibility:hidden }

 	div:has(div.summaryHidden) > span.openButton { visibility:visible }

    .grey { color:dimgray  }
    .greyOff { color:dimgray; display:none  }
    .debug { color:#990000  }
    .debugOff { display:none }
    .debugBorder { visibility:visible }
    .debugOffBorder { visibility:hidden }

    .summaryHiddenOff { }
    .summaryHidden { display:none }
    .summaryShowsOff { display:none }
    .summaryShows { }

    .remove,.imageRemove,.commentRemove,.provenanceRemove,.taskRemove,.htmlTableRemove { }
    .removeOff,.imageRemoveOff,.commentRemoveOff,.provenanceRemoveOff,.taskRemoveOff,.htmlTableRemoveOff { display:none }

	.controls { position: sticky;
				top:8px;
				float:right;
				clear:right;
				width:290px;
				overflow: hidden;
				height:18px;
				border: solid 1px grey;
				border-radius: 5px;
				margin-right: 23px;
				z-index:99;
				background-Color:#ffe699;
				font:10pt 'Verdana';
	}

	.image { position: sticky;
				top:8px;
				float:right;
				clear:right;
				border: solid 1px grey;
				border-radius: 5px;
				padding: 2px;
				z-index:99;
				margin-right: 23px;
				background-color:white;
				font:10pt 'Verdana';
	}

	.comment { position: sticky;
				top:8px;
				width:297.5px;
				border-radius: 5px;
				float:right;
				clear:right;
				border: solid 1px grey;
				z-index:99;
				margin-right: 23px;
				padding-left: 8px;
				background-color:white;
				font:10pt 'Verdana';
	}
	.instanceComment { text-decoration-line: underline;
					   text-decoration-style: dotted;
					   text-decoration-color: red; cursor: help; }

	.narrativeLink { text-decoration-line: underline;
					   text-decoration-style: dotted;
					   text-decoration-color: green; }
					   
    .bold { font-weight:bold; }
    .italic { font-style:italic; }

	.hand { cursor: pointer; }
    .button { text-decoration:underline; cursor: pointer; color:gray; }
    .buttonLabel { color:gray; }
    .buttonNoUnderline { cursor: pointer; color:gray; }
    .buttonNoUnderlineHidden { cursor: pointer; color:#ffe699; }
    .buttonNoUnderlineHidden:hover { color:gray; }

	sup { cursor: default; }
	.rotate-left { transform: rotate(-90deg) }

	.plainLink  { text-decoration: none; color: inherit; }
	.plainLink:visited { text-decoration: none; color: inherit; }

	.greyScale { -moz-filter:grayscale(100%);webkit-filter:grayscale(100%);filter:gray;filter:grayscale(100%) }
	
	th { background-color: #81BEF7; }
	td { padding: 3px; }
	th { padding: 3px; font:10pt 'Verdana'; } /* seems to need setting explicitly, on site */
	table.rounded-corners {
	 	/* Change these properties */
	 	--border: 1px solid black;
	 	border-radius: 5px;
		font:10pt 'Verdana';
	
	 	/* Don't change these properties */
	 	border-spacing: 0;
	 	border-collapse: separate;
	 	border: var(--border);
	 	overflow: hidden;
	}
	table.white { background-color:white; }
	
	/* Apply a border to the right of all but the last column */
	table.rounded-corners th:not(:last-child),
	table.rounded-corners td:not(:last-child) {
	 border-right: var(--border);
	}
	
	/* Apply a border to the bottom of all but the last row */
	table.rounded-corners>thead>tr:not(:last-child)>th,
	table.rounded-corners>thead>tr:not(:last-child)>td,
	table.rounded-corners>tbody>tr:not(:last-child)>th,
	table.rounded-corners>tbody>tr:not(:last-child)>td,
	table.rounded-corners>tfoot>tr:not(:last-child)>th,
	table.rounded-corners>tfoot>tr:not(:last-child)>td,
	table.rounded-corners>tr:not(:last-child)>td,
	table.rounded-corners>tr:not(:last-child)>th,
	table.rounded-corners>thead:not(:last-child),
	table.rounded-corners>tbody:not(:last-child),
	table.rounded-corners>tfoot:not(:last-child) {
	 border-bottom: var(--border);
	}
	td.centred { text-align:center; }
}
	</style><SCRIPT><!--

		window.onload=function()
		{
			// first stop spans being clickable, so they can be double clicked to select text, without triggering summary mode
			var nodesSpan = document.querySelectorAll("span");
			for (var i=0; i < nodesSpan.length; i++) {
				var node = nodesSpan[i];
				node.ondblclick = function() { event.stopPropagation(); };
			}
			
			// add a hidden plus to anything that is a summary unit
			var nodes = document.querySelectorAll(".summaryUnit"); // header from tabular mode
			for (var i=0; i < nodes.length; i++) {
				var node = nodes[i];
				var span = document.createElement('span');
            	span.textContent = '+';
            	span.title = 'This element is summarised - click to expand (or double-click the element background)';
            	span.className = 'openButton summaryUnit';
            	span.style.cursor = 'pointer';
            	node.prepend(span);
            	span.onclick = function() { summaryHandlerParent(event); };
			}

			// allow certain sections to load summarised
			var nodesIs = document.querySelectorAll(".initialSummary");
			for (var i=0; i < nodesIs.length; i++) {
				var node = nodesIs[i];
				toggleSummaryItem(node);
			}

		}

		function togglePlainMode(item)
		{
			toggleBlackAndWhite(item, true);
		}
		
		function toggleBlackAndWhite(item, plain = false)
		{
			handleBlackAndWhite(document.getElementsByClassName("greyable")[0]);
	
			var nodesTh = document.querySelectorAll("th"); // header from tabular mode
			for (var i=0; i < nodesTh.length; i++) {
				var node = nodesTh[i];
				if (getComputedStyle(node).backgroundColor == 'rgb(255, 255, 255)')
					node.style.backgroundColor = '#81BEF7'; // blue. should not be hard coded
				else
					node.style.backgroundColor = 'white';
			}

			// not clear why this is needed if have "greyable" above
			var nodes = document.getElementsByClassName("indent");
			for (var i=0; i < nodes.length; i++) {
				var node = nodes[i];
				if (getComputedStyle(node).borderColor == 'rgb(255, 255, 255)') // this will fail if another mode has changed it
				{
					if (plain!=true) // leave at white - so it disappears in effect
						node.style.borderColor = '#686868'; // grey
				}
				else
					node.style.borderColor = 'white';
			}
		}
		function handleBlackAndWhite(item)
		{
			var nodes = item.childNodes	;
			for (var i=0; i < nodes.length; i++) {
				var node = nodes[i];
			    if (node.nodeName.toLowerCase() == 'div')
			    {
					if (node.hasAttribute('oldStyle')) // undo b&w
					{
      					node.style.background = node.getAttribute('oldStyle');
						node.removeAttribute('oldStyle');
					}
					else
					{
						node.setAttribute('oldStyle', getComputedStyle(node).backgroundColor);
      					node.style.background = 'white';
					}
			     }
			     handleBlackAndWhite(node);
		     }
		}
		function toggleDarkMode(item)
		{
			var htmlElement = document.getElementsByTagName("html")[0];

			// make sure B&W mode isn't on because this messes up if it is (but the other way around does work)
			if (document.querySelectorAll('[oldStyle]').length!=0)
				return;

			var label = document.getElementById('renderTextLabel');
			var input = document.getElementById('renderInputfield');
			var inputPaste = document.getElementById('renderInputfieldPaste');
			//var renderLabel = document.getElementById('renderLabel'); // this is styled by the app, not here
			var img = document.getElementById('imgFhirLogo');
			var table = document.getElementById('tabularModeTable');

			// detect starting as white
			if ( getComputedStyle(htmlElement).backgroundColor == "rgba(0, 0, 0, 0)" ||   // what happens at first (strangely)
				 getComputedStyle(htmlElement).backgroundColor == "rgb(255, 255, 255)" || // what happens after we set to "black"
				 getComputedStyle(htmlElement).backgroundColor == "" ) 		
			{
				htmlElement.style.backgroundColor = 'black';
				if (label) label.style.color = 'gray';
				if (img) img.classList.add ('greyScale');
				if (input) input.style.backgroundColor = 'gray';
				if (inputPaste) inputPaste.style.backgroundColor = 'gray';
				if (table) {
					table.style.color = 'gray';
					table.style.borderColor = 'gray';
					var td = table.getElementsByTagName("td");
			  		for (i = 0; i < td.length; i++)
					    td[i].style.borderColor = "gray";
				}
			}
			else
			{
				htmlElement.style.backgroundColor = 'white';
				if (label) label.style.color = 'black';
				//if (renderLabel) renderLabel.style.color = 'black';
				if (input) input.style.backgroundColor = 'white';
				if (inputPaste) inputPaste.style.backgroundColor = 'white';
				if (img) img.classList.remove ('greyScale');
				if (table) {
					table.style.color = 'black';
					table.style.borderColor = 'black';
					var td = table.getElementsByTagName("td");
			  		for (i = 0; i < td.length; i++)
					    td[i].style.borderColor = "black";
				}
			}
			// tried using a brightness filter but it doesn't work, because it must change text etc too.

			var nodes = document.querySelectorAll('.indent, .bundle, .bundleBorder, .controls, .renderInputfield');
			for (var i=0; i < nodes.length; i++)
			{
				var node = nodes[i];
				if (node.hasAttribute('oldBrightColour')) // undo dark mode
				{
    				node.style.backgroundColor = node.getAttribute('oldBrightColour');
					node.removeAttribute('oldBrightColour');
    				node.style.borderColor = node.getAttribute('oldBrightBorder');
					node.removeAttribute('oldBrightBorder');
				}
				else
				{
					var colourRGB = getComputedStyle(node).backgroundColor; // but some browsers may not give it as RGB?
					var borderRGB = getComputedStyle(node).borderColor;
					var darkerColour = lightenDarkenColor(rgb2hex(colourRGB), -50);
					var darkerBorder = lightenDarkenColor(rgb2hex(borderRGB), -50);
					node.setAttribute('oldBrightColour', colourRGB);
					node.setAttribute('oldBrightBorder', borderRGB);
					node.style.backgroundColor = darkerColour;
					node.style.borderColor = darkerBorder;
				}
			}
			var textXMLnodes = document.querySelectorAll('.text');
			for (var i=0; i < textXMLnodes.length; i++)
			{
				var node = textXMLnodes[i];
				if (node.hasAttribute('oldDarkText')) // undo dark mode
				{
    				node.style.color = node.getAttribute('oldDarkText');
					node.removeAttribute('oldDarkText');
				}
				else
				{
					var colourRGB = getComputedStyle(node).color; // but some browsers may not give it as RGB?
					var lighterColour = 'grey';
					node.setAttribute('oldDarkText', colourRGB);
					node.style.color = lighterColour;
				}
			}
		}

		function rgb2hex(rgb)
		{
		    if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;
		
		    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
		    function hex(x) {
		        return ("0" + parseInt(x).toString(16)).slice(-2);
		    }
		    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
		}

		function lightenDarkenColor(col,amt) {
		    var usePound = false;
		    if ( col[0] == "#" ) {
		        col = col.slice(1);
		        usePound = true;
		    }
		
		    var num = parseInt(col,16);
		
		    var r = (num >> 16) + amt;
		
		    if ( r > 255 ) r = 255;
		    else if  (r < 0) r = 0;
		
		    var b = ((num >> 8) & 0x00FF) + amt;
		
		    if ( b > 255 ) b = 255;
		    else if  (b < 0) b = 0;
		
		    var g = (num & 0x0000FF) + amt;
		
		    if ( g > 255 ) g = 255;
		    else if  ( g < 0 ) g = 0;
		
		    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
		}

		function toggleSummary(item)
		{
			toggleSummaryItem(document);
			
			if (item.innerHTML=='summary off')
				item.innerHTML='summary on';
			else
				item.innerHTML='summary off';
		}

		function toggleSummaryItem(item)
		{
			var els = item.querySelectorAll('.summaryHiddenOff');

			for (i = 0; i < els.length; i++) {
   		 		els[i].className = 'summaryHiddenTemp';
			}
			els = item.querySelectorAll('.summaryHidden'), i;
			for (i = 0; i < els.length; i++) {
   		 		els[i].className = 'summaryHiddenOff';
			}
			els = item.querySelectorAll('.summaryHiddenTemp'), i;
			for (i = 0; i < els.length; i++) {
   		 		els[i].className = 'summaryHidden';
			}
			var els = item.querySelectorAll('.summaryShowsOff'), i;
			for (i = 0; i < els.length; i++) {
   		 		els[i].className = 'summaryShowsTemp';
			}
			els = item.querySelectorAll('.summaryShows'), i;
			for (i = 0; i < els.length; i++) {
   		 		els[i].className = 'summaryShowsOff';
			}
			els = item.querySelectorAll('.summaryShowsTemp'), i;
			for (i = 0; i < els.length; i++) {
   		 		els[i].className = 'summaryShows';
			}
		}

		function toggleCodes(item)
		{
			var els = document.querySelectorAll('.greyOff'), i;
			for (i = 0; i < els.length; i++) {
   		 		els[i].className = 'greyTemp';
			}
			els = document.querySelectorAll('.grey'), i;
			for (i = 0; i < els.length; i++) {
   		 		els[i].className = 'greyOff';
			}
			els = document.querySelectorAll('.greyTemp'), i;
			for (i = 0; i < els.length; i++) {
   		 		els[i].className = 'grey';
			}
			if (item.innerHTML=='hide codes')
				item.innerHTML='show codes';
			else
				item.innerHTML='hide codes';
		}
		function toggleDebug(item)
		{
			var els = document.querySelectorAll('.debugOff'), i;
			for (i = 0; i < els.length; i++) {
   		 		els[i].className = 'debugTemp';
			}
			els = document.querySelectorAll('.debug'), i;
			for (i = 0; i < els.length; i++) {
   		 		els[i].className = 'debugOff';
			}
			els = document.querySelectorAll('.debugTemp'), i;
			for (i = 0; i < els.length; i++) {
   		 		els[i].className = 'debug';
			}

			els = document.querySelectorAll('.debugOffBorder'), i;
			for (i = 0; i < els.length; i++) {
   		 		els[i].className = 'debugTemp';
			}
			els = document.querySelectorAll('.debugBorder'), i;
			for (i = 0; i < els.length; i++) {
   		 		els[i].className = 'debugOffBorder';
			}
			els = document.querySelectorAll('.debugTemp'), i;
			for (i = 0; i < els.length; i++) {
   		 		els[i].className = 'debugBorder';
			}

			if (item.innerHTML=='hide debug')
				item.innerHTML='show debug';
			else
				item.innerHTML='hide debug';
		}
		function debugIsActive()
		{
			if (document.getElementsByClassName('debug')[0])
				return true;
			else
				return false;
		}
		function summaryIsActive()
		{
			if (document.getElementsByClassName('summaryHidden')[0])
				return true;
			else
				return false;
		}
		function codeViewIsActive()
		{
			if (document.getElementsByClassName('grey')[0])
				return true;
			else
				return false;
		}

		function toggleRemove(item)
		{
			var els = document.querySelectorAll('.removeOff'), i;
			for (i = 0; i < els.length; i++) {
   		 		els[i].className = 'removeTemp';
			}
			els = document.querySelectorAll('.remove'), i;
			for (i = 0; i < els.length; i++) {
   		 		els[i].className = 'removeOff';
			}
			els = document.querySelectorAll('.removeTemp'), i;
			for (i = 0; i < els.length; i++) {
   		 		els[i].className = 'remove';
			}
		}
		function toggleRemoveProvenance(item)
		{
			toggleRemoveStyle('provenance');
			if (item.innerHTML=='hide provenance')
				item.innerHTML='show provenance';
			else
				item.innerHTML='hide provenance';
		}
		function toggleRemoveTask(item)
		{
			toggleRemoveStyle('task');
			if (item.innerHTML=='hide task')
				item.innerHTML='show task';
			else
				item.innerHTML='hide task';
		}
		function toggleRemoveTables(item)
		{
			toggleRemoveStyle('htmlTable');
			if (item.innerHTML=='hide tables')
				item.innerHTML='show tables';
			else
				item.innerHTML='hide tables';
		}
		function toggleApplyGreyscale(item)
		{
			var element = document.getElementsByClassName("greyable")[0];
			if (element.style.cssText.includes("grayscale"))
				element.style.cssText = "";
			else
				element.style.cssText = "-moz-filter:grayscale(100%);webkit-filter:grayscale(100%);filter:gray;filter:grayscale(100%)";
		}
		function toggleRemoveImage(item)
		{
			toggleRemoveStyle('image');
		}
		function toggleRemoveComment(item)
		{
			toggleRemoveStyle('comment');
		}
		function toggleRemoveStyle(style)
		{
			var els = document.querySelectorAll('.'+style+'RemoveOff'), i;
			for (i = 0; i < els.length; i++) {
   		 		els[i].className = style+'RemoveTemp';
			}
			els = document.querySelectorAll('.'+style+'Remove'), i;
			for (i = 0; i < els.length; i++) {
   		 		els[i].className = style+'RemoveOff';
			}
			els = document.querySelectorAll('.'+style+'RemoveTemp'), i;
			for (i = 0; i < els.length; i++) {
   		 		els[i].className = style+'Remove';
			}
		}
		function toggleLowerControls(item)
		{
			var elements = document.getElementsByClassName("controls"); // because span is clicked, not the "item"
			if (item.textContent.includes('v') && (elements[0].style.height === ''||elements[0].style.height == "18px"))
			{
				//item.innerHTML = "<sup title='shrink this''>v</sup>";
		 		//elements[0].style.height = "36px";
		 		elements[0].style.height = "54px";
			}
			else
			{
				//item.innerHTML = "<sup title='expand this'>v&nbsp;</sup>";
		 		elements[0].style.height = "18px";
			}
		}

		function summaryHandler(event)
		{
			summaryHandlerCore(event,event.target);		
   		}
		function summaryHandlerParent(event)
		{
			summaryHandlerCore(event,event.target.parentElement);
		}
		function summaryHandlerCore(event,itemToUse)
		{
			// start from parent-or-self that has "summaryUnit" class
			if (itemToUse.classList.contains('summaryUnit')==false)
				itemToUse = findAncestor(event.target,'summaryUnit');
			toggleSummaryItem (itemToUse);
		    event.cancelBubble = true;
		    if (event.stopPropagation) event.stopPropagation();
		}
		function findAncestor (el, cls)
		{
		    while ((el = el.parentElement) && !el.classList.contains(cls));
		    return el;
		}

      --></SCRIPT><!--
		(Thanks for reading this far - Rik :-)
		Status information:
		First resource in bundle:DiagnosticReport
		Single resource bundle:false
		Single resource bundle Not Patient Or Bundle:false
		Single resource Not Patient:false
		Patient document:false
		General Bundle:false
		Not patient related:true
		=>Patient Centric Mode:false
		SubstanceDef Centric Mode:false--></html>
