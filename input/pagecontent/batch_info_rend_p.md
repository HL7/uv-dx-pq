The HTML rendering below shows a synthetic Quality data example for Common Technical Document (CTD) Module 3: Quality, section 3.2.P.5 Control of Drug Product, subsection 3.2.P.5.4 Batch Analyses.
<html>
<body>
<div class="divBody">
<p>
						This is the same data as in the example files here in <a href="Bundle-bundle-drug-product-batch-info-pq-ex1.xml.html">xml</a> and in <a href="Bundle-bundle-drug-product-batch-info-pq-ex1.json.html">json</a>, presented for easier viewing.
						Hovering on words below will show the corresponding sections of the underlying data.
					</p>
</div>
<div class="greyable">
<div class="divBody">
<div style="position:relative" class="summaryUnit">
<div class="debugOffBorder">
<div class="bundleBorder">
<div class="debugOff">
<div class="bundle"><a class="plainLink"><span class="bold" title="Bundle (id: bundle-drug-product-batch-info-pq-ex1)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-drug-product-batch-info-pq 

<Bundle>
    <!-- Product Batch Info -->
    <id value=&quot;bundle-drug-product-batch-info-pq-ex1&quot;/>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-drug-product-batch-info-pq&quot;/>
    </meta>
    <type value=&quot;collection&quot;/>
    <!-- Section 8 - Batch or Lot Information (batch 1 of 3) -->
    <entry>
        <fullUrl value=&quot;urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51&quot;/>
        <resource>
            <Medication>
                <id value=&quot;medication-actual-batch&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-pq&quot;>
                        <valueReference>
                            <!-- todo consider change this be the MID? -->
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>
                    </extension>
                </code>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;manufacturingDate&quot;>
                            <valueDateTime value=&quot;2020-06&quot;/>
                        </extension>
                        <extension url=&quot;batchQuantity&quot;>
                            <valueQuantity>
                                <value value=&quot;100100&quot;/>
                                <unit value=&quot;tablets&quot;/>
                            </valueQuantity>
                        </extension>
                        <extension url=&quot;batchUtilization&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl&quot;/>
                                    <code value=&quot;C185328&quot;/>
                                    <display value=&quot;Stability Study&quot;/>
                                </coding>
                                <text value=&quot;PPQ / Stability&quot;/>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                        <extension url=&quot;container&quot;>
                            <extension url=&quot;closureSystemDescription&quot;>
                                <valueString value=&quot;100 cc HDPE Bottle 2 g desiccant&quot;/>
                            </extension>
                        </extension>
                        <!-- local extensions -->
                    </extension>
                    <!-- local extensions now outside the batch -->
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-pq&quot;>
                        <valueDateTime value=&quot;2019-09-08&quot;/>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-pq&quot;>
                        <valueQuantity>
                            <value value=&quot;4.8&quot;/>
                            <unit value=&quot;kg&quot;/>
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-date-pq&quot;>
                        <valueDateTime value=&quot;2020-08&quot;/>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-site-pq&quot;>
                        <valueReference>
                            <reference value=&quot;Organization/packaging&quot;/>
                        </valueReference>
                    </extension>
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
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-pq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>
                    </extension>
                </code>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;manufacturingDate&quot;>
                            <valueDateTime value=&quot;2020-06&quot;/>
                        </extension>
                        <extension url=&quot;batchQuantity&quot;>
                            <valueQuantity>
                                <value value=&quot;100050&quot;/>
                                <unit value=&quot;tablets&quot;/>
                            </valueQuantity>
                        </extension>
                        <extension url=&quot;batchUtilization&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl&quot;/>
                                    <code value=&quot;C185328&quot;/>
                                    <display value=&quot;Stability Study&quot;/>
                                </coding>
                                <text value=&quot;PPQ / Stability&quot;/>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                        <extension url=&quot;container&quot;>
                            <extension url=&quot;closureSystemDescription&quot;>
                                <valueString value=&quot;100 cc HDPE Bottle 2 g desiccant&quot;/>
                            </extension>
                        </extension>
                        <!-- local extensions -->
                    </extension>
                    <!-- local extensions (now outside the batch) -->
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-pq&quot;>
                        <valueQuantity>
                            <value value=&quot;4.8&quot;/>
                            <unit value=&quot;kg&quot;/>
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-pq&quot;>
                        <valueDateTime value=&quot;2019-09-08&quot;/>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-date-pq&quot;>
                        <valueDateTime value=&quot;2020-08&quot;/>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-site-pq&quot;>
                        <valueReference>
                            <reference value=&quot;Organization/packaging&quot;/>
                        </valueReference>
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
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-pq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>
                    </extension>
                </code>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;manufacturingDate&quot;>
                            <valueDateTime value=&quot;2020-06&quot;/>
                        </extension>
                        <extension url=&quot;batchQuantity&quot;>
                            <valueQuantity>
                                <value value=&quot;100125&quot;/>
                                <unit value=&quot;tablets&quot;/>
                            </valueQuantity>
                        </extension>
                        <extension url=&quot;batchUtilization&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl&quot;/>
                                    <code value=&quot;C185328&quot;/>
                                    <display value=&quot;Stability Study&quot;/>
                                </coding>
                                <text value=&quot;PPQ / Stability&quot;/>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                        <extension url=&quot;container&quot;>
                            <extension url=&quot;closureSystemDescription&quot;>
                                <valueString value=&quot;100 cc HDPE Bottle 2 g desiccant&quot;/>
                            </extension>
                        </extension>
                        <!-- local extensions -->
                    </extension>
                    <!-- local extensions (now outside the batch) -->
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-pq&quot;>
                        <valueDateTime value=&quot;2019-09-08&quot;/>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-date-pq&quot;>
                        <valueDateTime value=&quot;2020-08&quot;/>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-site-pq&quot;>
                        <valueReference>
                            <reference value=&quot;Organization/packaging&quot;/>
                        </valueReference>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-pq&quot;>
                        <valueQuantity>
                            <value value=&quot;4.8&quot;/>
                            <unit value=&quot;kg&quot;/>
                        </valueQuantity>
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
                <active value=&quot;true&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;drug-product-manufacture&quot;/>
                        <display value=&quot;Drug Product Manufacture&quot;/>
                    </coding>
                </type>
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
        <fullUrl value=&quot;urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b07&quot;/>
        <resource>
            <Organization>
                <id value=&quot;packaging&quot;/>
                <identifier>
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3008816891&quot;/>
                </identifier>
                <active value=&quot;true&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;packaging&quot;/>
                        <display value=&quot;Packaging&quot;/>
                    </coding>
                </type>
                <name value=&quot;MySite&quot;/>
            </Organization>
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
                        <system value=&quot;http://standardterms.edqm.eu&quot;/>
                        <code value=&quot;10225000&quot;/>
                        <display value=&quot;Gastro-resistant tablet&quot;/>
                    </coding>
                </combinedPharmaceuticalDoseForm>
                <route>
                    <coding>
                        <system value=&quot;http://standardterms.edqm.eu&quot;/>
                        <code value=&quot;20053000&quot;/>
                        <display value=&quot;Oral use&quot;/>
                    </coding>
                </route>
                <name>
                    <productName value=&quot;Stelbat Tablets, 20mg&quot;/>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-productNameType-pq-example&quot;/>
                            <code value=&quot;Proprietary&quot;/>
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
    </entry>" id="Bundle-bundle-drug-product-batch-info-pq-ex1">Bundle</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/bundle.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/bundle.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/bundle.html#tt-uml">R6</a>]</span><div class="debugOff">id: bundle-drug-product-batch-info-pq-ex1</div>
<div class="debugOff"></div>
<div class="debugOff"><span title="
<Bundle>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-drug-product-batch-info-pq&quot;>">Profile: </span><span title="
<Bundle>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-drug-product-batch-info-pq&quot;>">http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-drug-product-batch-info-pq</span></div>
<div><span title="
<Bundle>
    ...
    <type value=&quot;collection&quot;>">Type: </span><span title="
<Bundle>
    ...
    <type value=&quot;collection&quot;>"><span>collection</span></span></div>
</div>
</div>
<div>
<div class="org indent"><span class="bold">Batch Information - Product, on Stelbat Tablets, 20mg</span><br><br style="line-height:6px;"><div class="htmlTableRemove"><span>Details of Batches</span><br style="line-height:6px;"><div class="indent-no-border"><span class="debugOff">Batches Table</span><br style="line-height:6px;"><table class="rounded-corners white" id="tabularModeTable" style="width:70%;">
<tr>
<td><b>Drug Product Batch Number</b></td>
<td class="centred">33445</td>
<td class="centred">33446</td>
<td class="centred">33447</td>
</tr>
<tr>
<td>Batch Size (Tablets)</td>
<td class="centred" title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;batchQuantity&quot;>
                            <valueQuantity>
                                <value value=&quot;100100&quot;>">100100</td>
<td class="centred" title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;batchQuantity&quot;>
                            <valueQuantity>
                                <value value=&quot;100050&quot;>">100050</td>
<td class="centred" title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;batchQuantity&quot;>
                            <valueQuantity>
                                <value value=&quot;100125&quot;>">100125</td>
</tr>
<tr>
<td>Scale</td>
<td class="centred" title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;batchUtilization&quot;>
                            <valueCodeableConcept>
                                <text value=&quot;PPQ / Stability&quot;>">PPQ / Stability</td>
<td class="centred" title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;batchUtilization&quot;>
                            <valueCodeableConcept>
                                <text value=&quot;PPQ / Stability&quot;>">PPQ / Stability</td>
<td class="centred" title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;batchUtilization&quot;>
                            <valueCodeableConcept>
                                <text value=&quot;PPQ / Stability&quot;>">PPQ / Stability</td>
</tr>
<tr>
<td>Site of Manufacture</td>
<td class="centred" title="Organization (id: manufacturer)(fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a)

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
                <active value=&quot;true&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;drug-product-manufacture&quot;/>
                        <display value=&quot;Drug Product Manufacture&quot;/>
                    </coding>
                </type>
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;/>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>
                    </address>
                </contact>">AAA Pharmaceutical, Inc., Lumberton</td>
<td class="centred" title="Organization (id: manufacturer)(fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a)

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
                <active value=&quot;true&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;drug-product-manufacture&quot;/>
                        <display value=&quot;Drug Product Manufacture&quot;/>
                    </coding>
                </type>
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;/>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>
                    </address>
                </contact>">AAA Pharmaceutical, Inc., Lumberton</td>
<td class="centred" title="Organization (id: manufacturer)(fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a)

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
                <active value=&quot;true&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;drug-product-manufacture&quot;/>
                        <display value=&quot;Drug Product Manufacture&quot;/>
                    </coding>
                </type>
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;/>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>
                    </address>
                </contact>">AAA Pharmaceutical, Inc., Lumberton</td>
</tr>
<tr>
<td>Date of Manufacture</td>
<td class="centred" title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;manufacturingDate&quot;>
                            <valueDateTime value=&quot;2020-06&quot;>">2020-06</td>
<td class="centred" title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;manufacturingDate&quot;>
                            <valueDateTime value=&quot;2020-06&quot;>">2020-06</td>
<td class="centred" title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;manufacturingDate&quot;>
                            <valueDateTime value=&quot;2020-06&quot;>">2020-06</td>
</tr>
</table>
</div>
</div><br style="line-height:6px;"></div>
<div class="org indent"><span class="bold">Subjects of Batch Information</span><br><br style="line-height:6px;"><div class="indent mpd summaryUnit"><a class="plainLink"><span class="bold" title="MedicinalProductDefinition (id: medicinalproductdefinition-drug-product-dxpq-ex1)(fullUrl: urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d5)

<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                <id value=&quot;medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                <description value=&quot;Textual description of the product&quot;/>
                <combinedPharmaceuticalDoseForm>
                    <coding>
                        <system value=&quot;http://standardterms.edqm.eu&quot;/>
                        <code value=&quot;10225000&quot;/>
                        <display value=&quot;Gastro-resistant tablet&quot;/>
                    </coding>
                </combinedPharmaceuticalDoseForm>
                <route>
                    <coding>
                        <system value=&quot;http://standardterms.edqm.eu&quot;/>
                        <code value=&quot;20053000&quot;/>
                        <display value=&quot;Oral use&quot;/>
                    </coding>
                </route>
                <name>
                    <productName value=&quot;Stelbat Tablets, 20mg&quot;/>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-productNameType-pq-example&quot;/>
                            <code value=&quot;Proprietary&quot;/>
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
                </name>" id="MedicinalProductDefinition-medicinalproductdefinition-drug-product-dxpq-ex1">Product</span></a><span class="summaryHiddenOff"><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/medicinalproductdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/medicinalproductdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/medicinalproductdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: medicinalproductdefinition-drug-product-dxpq-ex1</div>
<div class="debugOff"> fullUrl: urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d5</div></span><div class="summaryHiddenOff"></div><span class="summaryShowsOff"><b> - </b></span><span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                ...
                <name>
                    <productName value=&quot;Stelbat Tablets, 20mg&quot;/>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-productNameType-pq-example&quot;/>
                            <code value=&quot;Proprietary&quot;/>
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
                    </part>" class="bold"><span class="summaryHiddenOff">Name: </span><span>Stelbat Tablets, 20mg</span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                <name>
                    ...
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-productNameType-pq-example&quot;/>
                            <code value=&quot;Proprietary&quot;/>
                            <display value=&quot;Proprietary&quot;/>
                        </coding>">Name type: </span><span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                <name>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-productNameType-pq-example&quot;/>
                            <code value=&quot;Proprietary&quot;/>
                            <display value=&quot;Proprietary&quot;/>">Proprietary<span class="greyOff"> [Proprietary]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-productNameType-pq-example)</span></span></div>
<div title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                <name>
                    ...
                    <part>
                        <part value=&quot;20mg&quot;/>
                        <type>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/medicinal-product-name-part-type&quot;/>
                                <code value=&quot;StrengthPart&quot;/>
                                <display value=&quot;Strength part&quot;/>
                            </coding>
                        </type>"><span>Strength name part: </span><span>20mg</span></div>
</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                ...
                <description value=&quot;Textual description of the product&quot;>">Description: </span><span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                ...
                <description value=&quot;Textual description of the product&quot;>">Textual description of the product</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                ...
                <route>
                    <coding>
                        <system value=&quot;http://standardterms.edqm.eu&quot;/>
                        <code value=&quot;20053000&quot;/>
                        <display value=&quot;Oral use&quot;/>
                    </coding>">Route of Administration: </span><span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                <route>
                    <coding>
                        <system value=&quot;http://standardterms.edqm.eu&quot;/>
                        <code value=&quot;20053000&quot;/>
                        <display value=&quot;Oral use&quot;/>">Oral use<span class="greyOff"> [20053000]</span><span class="greyOff"> (http://standardterms.edqm.eu)</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                ...
                <combinedPharmaceuticalDoseForm>
                    <coding>
                        <system value=&quot;http://standardterms.edqm.eu&quot;/>
                        <code value=&quot;10225000&quot;/>
                        <display value=&quot;Gastro-resistant tablet&quot;/>
                    </coding>">Dose Form (combination of all parts): </span><span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                <combinedPharmaceuticalDoseForm>
                    <coding>
                        <system value=&quot;http://standardterms.edqm.eu&quot;/>
                        <code value=&quot;10225000&quot;/>
                        <display value=&quot;Gastro-resistant tablet&quot;/>">Gastro-resistant tablet<span class="greyOff"> [10225000]</span><span class="greyOff"> (http://standardterms.edqm.eu)</span></span></div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="indent mpdl2 summaryUnit"><span title="Medication resource extension linking back to MedicinalProductDefinition: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-pq">Batch Instance</span><div class="indent med summaryUnit"><sup class="rotate-left" title="arrow indicates that this Medication resource points back to the parent MedicinalProductDefinition, instead of being linked forwards from it - via extension http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-pq">↸</sup><span class="debugOff">arrow indicates that this Medication resource points back to the parent MedicinalProductDefinition, instead of being linked forwards from it - via extension http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-pq<br></span><a class="plainLink"><span class="bold" title="Medication (id: medication-actual-batch)(fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51)

<Bundle>
    <entry>
        <resource>
            <Medication>
                <id value=&quot;medication-actual-batch&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-pq&quot;>
                        <valueReference>
                            <!-- todo consider change this be the MID? -->
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>
                    </extension>
                </code>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;manufacturingDate&quot;>
                            <valueDateTime value=&quot;2020-06&quot;/>
                        </extension>
                        <extension url=&quot;batchQuantity&quot;>
                            <valueQuantity>
                                <value value=&quot;100100&quot;/>
                                <unit value=&quot;tablets&quot;/>
                            </valueQuantity>
                        </extension>
                        <extension url=&quot;batchUtilization&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl&quot;/>
                                    <code value=&quot;C185328&quot;/>
                                    <display value=&quot;Stability Study&quot;/>
                                </coding>
                                <text value=&quot;PPQ / Stability&quot;/>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                        <extension url=&quot;container&quot;>
                            <extension url=&quot;closureSystemDescription&quot;>
                                <valueString value=&quot;100 cc HDPE Bottle 2 g desiccant&quot;/>
                            </extension>
                        </extension>
                        <!-- local extensions -->
                    </extension>
                    <!-- local extensions now outside the batch -->
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-pq&quot;>
                        <valueDateTime value=&quot;2019-09-08&quot;/>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-pq&quot;>
                        <valueQuantity>
                            <value value=&quot;4.8&quot;/>
                            <unit value=&quot;kg&quot;/>
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-date-pq&quot;>
                        <valueDateTime value=&quot;2020-08&quot;/>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-site-pq&quot;>
                        <valueReference>
                            <reference value=&quot;Organization/packaging&quot;/>
                        </valueReference>
                    </extension>
                    <lotNumber value=&quot;33445&quot;/>
                </batch>" id="Medication-medication-actual-batch">Medication</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/medication.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/medication.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/medication.html#tt-uml">R6</a>]</span><div class="debugOff">id: medication-actual-batch</div><div class="debugOff"> fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51</div><span class="summaryShowsOff"><b> - 33445</b></span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-pq&quot;>
                        <valueReference>
                            <!-- todo consider change this be the MID? -->
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>">Definition</span>: Stelbat Tablets, 20mg (<a href="#MedicinalProductDefinition-medicinalproductdefinition-drug-product-dxpq-ex1" title="click to see target - id=medicinalproductdefinition-drug-product-dxpq-ex1">MedicinalProductDefinition</a>)<span class="debugOff"> id: medicinalproductdefinition-drug-product-dxpq-ex1</span></div><div class="summaryHiddenOff"><div class="indent medl2 summaryUnit"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                ...
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;manufacturingDate&quot;>
                            <valueDateTime value=&quot;2020-06&quot;/>
                        </extension>
                        <extension url=&quot;batchQuantity&quot;>
                            <valueQuantity>
                                <value value=&quot;100100&quot;/>
                                <unit value=&quot;tablets&quot;/>
                            </valueQuantity>
                        </extension>
                        <extension url=&quot;batchUtilization&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl&quot;/>
                                    <code value=&quot;C185328&quot;/>
                                    <display value=&quot;Stability Study&quot;/>
                                </coding>
                                <text value=&quot;PPQ / Stability&quot;/>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                        <extension url=&quot;container&quot;>
                            <extension url=&quot;closureSystemDescription&quot;>
                                <valueString value=&quot;100 cc HDPE Bottle 2 g desiccant&quot;/>
                            </extension>
                        </extension>
                        <!-- local extensions -->
                    </extension>
                    <!-- local extensions now outside the batch -->
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-pq&quot;>
                        <valueDateTime value=&quot;2019-09-08&quot;/>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-pq&quot;>
                        <valueQuantity>
                            <value value=&quot;4.8&quot;/>
                            <unit value=&quot;kg&quot;/>
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-date-pq&quot;>
                        <valueDateTime value=&quot;2020-08&quot;/>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-site-pq&quot;>
                        <valueReference>
                            <reference value=&quot;Organization/packaging&quot;/>
                        </valueReference>
                    </extension>
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
                        <extension url=&quot;manufacturingDate&quot;>
                            <valueDateTime value=&quot;2020-06&quot;/>
                        </extension>
                        <extension url=&quot;batchQuantity&quot;>
                            <valueQuantity>
                                <value value=&quot;100100&quot;/>
                                <unit value=&quot;tablets&quot;/>
                            </valueQuantity>
                        </extension>
                        <extension url=&quot;batchUtilization&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl&quot;/>
                                    <code value=&quot;C185328&quot;/>
                                    <display value=&quot;Stability Study&quot;/>
                                </coding>
                                <text value=&quot;PPQ / Stability&quot;/>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                        <extension url=&quot;container&quot;>
                            <extension url=&quot;closureSystemDescription&quot;>
                                <valueString value=&quot;100 cc HDPE Bottle 2 g desiccant&quot;/>
                            </extension>
                        </extension>
                        <!-- local extensions -->">Manufacturing</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;manufacturingDate&quot;>
                            <valueDateTime value=&quot;2020-06&quot;>">Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;manufacturingDate&quot;>
                            <valueDateTime value=&quot;2020-06&quot;>">2020-06</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-pq&quot;>
                        <valueDateTime value=&quot;2019-09-08&quot;>">Release Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-pq&quot;>
                        <valueDateTime value=&quot;2019-09-08&quot;>">2019-09-08</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-date-pq&quot;>
                        <valueDateTime value=&quot;2020-08&quot;>">Packaging Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-date-pq&quot;>
                        <valueDateTime value=&quot;2020-08&quot;>">2020-08</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;batchQuantity&quot;>
                            <valueQuantity>
                                <value value=&quot;100100&quot;/>
                                <unit value=&quot;tablets&quot;/>">Quantity: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;batchQuantity&quot;>
                            <valueQuantity>
                                <value value=&quot;100100&quot;/>
                                <unit value=&quot;tablets&quot;/>">100100 tablets</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-pq&quot;>
                        <valueQuantity>
                            <value value=&quot;4.8&quot;/>
                            <unit value=&quot;kg&quot;/>">Actual Yield: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-pq&quot;>
                        <valueQuantity>
                            <value value=&quot;4.8&quot;/>
                            <unit value=&quot;kg&quot;/>">4.8 kg</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        ...
                        <extension url=&quot;batchUtilization&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl&quot;/>
                                    <code value=&quot;C185328&quot;/>
                                    <display value=&quot;Stability Study&quot;/>
                                </coding>
                                <text value=&quot;PPQ / Stability&quot;/>
                            </valueCodeableConcept>">Utilization: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        ...
                        <extension url=&quot;batchUtilization&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl&quot;/>
                                    <code value=&quot;C185328&quot;/>
                                    <display value=&quot;Stability Study&quot;/>
                                </coding>
                                <text value=&quot;PPQ / Stability&quot;/>
                            </valueCodeableConcept>"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;batchUtilization&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl&quot;/>
                                    <code value=&quot;C185328&quot;/>
                                    <display value=&quot;Stability Study&quot;/>">Stability Study<span class="greyOff"> [C185328]</span><span class="greyOff"> (http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl)</span></span><span style="white-space:normal;"> - Text: PPQ / Stability</span></span></div><div class="indent medl4"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        ...
                        <extension url=&quot;container&quot;>
                            <extension url=&quot;closureSystemDescription&quot;>
                                <valueString value=&quot;100 cc HDPE Bottle 2 g desiccant&quot;/>
                            </extension>">Container</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;container&quot;>
                            <extension url=&quot;closureSystemDescription&quot;>
                                <valueString value=&quot;100 cc HDPE Bottle 2 g desiccant&quot;/>">Closure System: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;container&quot;>
                            <extension url=&quot;closureSystemDescription&quot;>
                                <valueString value=&quot;100 cc HDPE Bottle 2 g desiccant&quot;/>"><span>100 cc HDPE Bottle 2 g desiccant</span></span></div></div><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        ...
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>">Manufacturer</span><div class="indent org summaryUnit"><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-2 fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-3 fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: manufacturer)(fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a)

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
                <active value=&quot;true&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;drug-product-manufacture&quot;/>
                        <display value=&quot;Drug Product Manufacture&quot;/>
                    </coding>
                </type>
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;/>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>
                    </address>
                </contact>" id="Organization-manufacturer">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/organization.html#tt-uml">R6</a>]</span><div class="debugOff">id: manufacturer</div><div class="debugOff"> fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a</div><span class="summaryShowsOff"> - AAA Pharmaceutical, Inc.</span><div class="summaryHiddenOff"><div><span title="
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
                    <value value=&quot;3010027650&quot;/>">3010027650<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span></div><div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <active value=&quot;true&quot;>">Active: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <active value=&quot;true&quot;>"><span>true</span></span></div></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;>">Name: </span><span>AAA Pharmaceutical, Inc.</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;drug-product-manufacture&quot;/>
                        <display value=&quot;Drug Product Manufacture&quot;/>
                    </coding>">Type: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;drug-product-manufacture&quot;/>
                        <display value=&quot;Drug Product Manufacture&quot;/>">Drug Product Manufacture<span class="greyOff"> [drug-product-manufacture]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type)</span></span></div><div class="indent org2">
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
                        <country value=&quot;USA&quot;>">USA</span></div></div></div></div></span></div><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    ...
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-site-pq&quot;>
                        <valueReference>
                            <reference value=&quot;Organization/packaging&quot;/>
                        </valueReference>">Packager</span><div class="indent org summaryUnit"><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-2 fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-3 fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: packaging)(fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b07)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <id value=&quot;packaging&quot;/>
                <identifier>
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3008816891&quot;/>
                </identifier>
                <active value=&quot;true&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;packaging&quot;/>
                        <display value=&quot;Packaging&quot;/>
                    </coding>
                </type>
                <name value=&quot;MySite&quot;/>" id="Organization-packaging">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/organization.html#tt-uml">R6</a>]</span><div class="debugOff">id: packaging</div><div class="debugOff"> fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b07</div><span class="summaryShowsOff"> - MySite</span><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3008816891&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3008816891&quot;/>">3008816891<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span></div><div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <active value=&quot;true&quot;>">Active: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <active value=&quot;true&quot;>"><span>true</span></span></div></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;MySite&quot;>">Name: </span><span>MySite</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;packaging&quot;/>
                        <display value=&quot;Packaging&quot;/>
                    </coding>">Type: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;packaging&quot;/>
                        <display value=&quot;Packaging&quot;/>">Packaging<span class="greyOff"> [packaging]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type)</span></span></div></div></div></span></div></div></div></div><div class="indent med summaryUnit"><sup class="rotate-left" title="arrow indicates that this Medication resource points back to the parent MedicinalProductDefinition, instead of being linked forwards from it - via extension http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-pq">↸</sup><span class="debugOff">arrow indicates that this Medication resource points back to the parent MedicinalProductDefinition, instead of being linked forwards from it - via extension http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-pq<br></span><a class="plainLink"><span class="bold" title="Medication (id: medication-actual-batch-2)(fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc)

<Bundle>
    <entry>
        <resource>
            <Medication>
                <id value=&quot;medication-actual-batch-2&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-pq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>
                    </extension>
                </code>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;manufacturingDate&quot;>
                            <valueDateTime value=&quot;2020-06&quot;/>
                        </extension>
                        <extension url=&quot;batchQuantity&quot;>
                            <valueQuantity>
                                <value value=&quot;100050&quot;/>
                                <unit value=&quot;tablets&quot;/>
                            </valueQuantity>
                        </extension>
                        <extension url=&quot;batchUtilization&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl&quot;/>
                                    <code value=&quot;C185328&quot;/>
                                    <display value=&quot;Stability Study&quot;/>
                                </coding>
                                <text value=&quot;PPQ / Stability&quot;/>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                        <extension url=&quot;container&quot;>
                            <extension url=&quot;closureSystemDescription&quot;>
                                <valueString value=&quot;100 cc HDPE Bottle 2 g desiccant&quot;/>
                            </extension>
                        </extension>
                        <!-- local extensions -->
                    </extension>
                    <!-- local extensions (now outside the batch) -->
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-pq&quot;>
                        <valueQuantity>
                            <value value=&quot;4.8&quot;/>
                            <unit value=&quot;kg&quot;/>
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-pq&quot;>
                        <valueDateTime value=&quot;2019-09-08&quot;/>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-date-pq&quot;>
                        <valueDateTime value=&quot;2020-08&quot;/>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-site-pq&quot;>
                        <valueReference>
                            <reference value=&quot;Organization/packaging&quot;/>
                        </valueReference>
                    </extension>
                    <lotNumber value=&quot;33446&quot;/>
                </batch>" id="Medication-medication-actual-batch-2">Medication</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/medication.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/medication.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/medication.html#tt-uml">R6</a>]</span><div class="debugOff">id: medication-actual-batch-2</div><div class="debugOff"> fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc</div><span class="summaryShowsOff"><b> - 33446</b></span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-pq&quot;>
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
                        <extension url=&quot;manufacturingDate&quot;>
                            <valueDateTime value=&quot;2020-06&quot;/>
                        </extension>
                        <extension url=&quot;batchQuantity&quot;>
                            <valueQuantity>
                                <value value=&quot;100050&quot;/>
                                <unit value=&quot;tablets&quot;/>
                            </valueQuantity>
                        </extension>
                        <extension url=&quot;batchUtilization&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl&quot;/>
                                    <code value=&quot;C185328&quot;/>
                                    <display value=&quot;Stability Study&quot;/>
                                </coding>
                                <text value=&quot;PPQ / Stability&quot;/>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                        <extension url=&quot;container&quot;>
                            <extension url=&quot;closureSystemDescription&quot;>
                                <valueString value=&quot;100 cc HDPE Bottle 2 g desiccant&quot;/>
                            </extension>
                        </extension>
                        <!-- local extensions -->
                    </extension>
                    <!-- local extensions (now outside the batch) -->
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-pq&quot;>
                        <valueQuantity>
                            <value value=&quot;4.8&quot;/>
                            <unit value=&quot;kg&quot;/>
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-pq&quot;>
                        <valueDateTime value=&quot;2019-09-08&quot;/>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-date-pq&quot;>
                        <valueDateTime value=&quot;2020-08&quot;/>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-site-pq&quot;>
                        <valueReference>
                            <reference value=&quot;Organization/packaging&quot;/>
                        </valueReference>
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
                        <extension url=&quot;manufacturingDate&quot;>
                            <valueDateTime value=&quot;2020-06&quot;/>
                        </extension>
                        <extension url=&quot;batchQuantity&quot;>
                            <valueQuantity>
                                <value value=&quot;100050&quot;/>
                                <unit value=&quot;tablets&quot;/>
                            </valueQuantity>
                        </extension>
                        <extension url=&quot;batchUtilization&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl&quot;/>
                                    <code value=&quot;C185328&quot;/>
                                    <display value=&quot;Stability Study&quot;/>
                                </coding>
                                <text value=&quot;PPQ / Stability&quot;/>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                        <extension url=&quot;container&quot;>
                            <extension url=&quot;closureSystemDescription&quot;>
                                <valueString value=&quot;100 cc HDPE Bottle 2 g desiccant&quot;/>
                            </extension>
                        </extension>
                        <!-- local extensions -->">Manufacturing</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;manufacturingDate&quot;>
                            <valueDateTime value=&quot;2020-06&quot;>">Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;manufacturingDate&quot;>
                            <valueDateTime value=&quot;2020-06&quot;>">2020-06</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-pq&quot;>
                        <valueDateTime value=&quot;2019-09-08&quot;>">Release Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-pq&quot;>
                        <valueDateTime value=&quot;2019-09-08&quot;>">2019-09-08</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-date-pq&quot;>
                        <valueDateTime value=&quot;2020-08&quot;>">Packaging Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-date-pq&quot;>
                        <valueDateTime value=&quot;2020-08&quot;>">2020-08</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;batchQuantity&quot;>
                            <valueQuantity>
                                <value value=&quot;100050&quot;/>
                                <unit value=&quot;tablets&quot;/>">Quantity: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;batchQuantity&quot;>
                            <valueQuantity>
                                <value value=&quot;100050&quot;/>
                                <unit value=&quot;tablets&quot;/>">100050 tablets</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-pq&quot;>
                        <valueQuantity>
                            <value value=&quot;4.8&quot;/>
                            <unit value=&quot;kg&quot;/>">Actual Yield: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-pq&quot;>
                        <valueQuantity>
                            <value value=&quot;4.8&quot;/>
                            <unit value=&quot;kg&quot;/>">4.8 kg</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        ...
                        <extension url=&quot;batchUtilization&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl&quot;/>
                                    <code value=&quot;C185328&quot;/>
                                    <display value=&quot;Stability Study&quot;/>
                                </coding>
                                <text value=&quot;PPQ / Stability&quot;/>
                            </valueCodeableConcept>">Utilization: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        ...
                        <extension url=&quot;batchUtilization&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl&quot;/>
                                    <code value=&quot;C185328&quot;/>
                                    <display value=&quot;Stability Study&quot;/>
                                </coding>
                                <text value=&quot;PPQ / Stability&quot;/>
                            </valueCodeableConcept>"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;batchUtilization&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl&quot;/>
                                    <code value=&quot;C185328&quot;/>
                                    <display value=&quot;Stability Study&quot;/>">Stability Study<span class="greyOff"> [C185328]</span><span class="greyOff"> (http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl)</span></span><span style="white-space:normal;"> - Text: PPQ / Stability</span></span></div><div class="indent medl4"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        ...
                        <extension url=&quot;container&quot;>
                            <extension url=&quot;closureSystemDescription&quot;>
                                <valueString value=&quot;100 cc HDPE Bottle 2 g desiccant&quot;/>
                            </extension>">Container</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;container&quot;>
                            <extension url=&quot;closureSystemDescription&quot;>
                                <valueString value=&quot;100 cc HDPE Bottle 2 g desiccant&quot;/>">Closure System: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;container&quot;>
                            <extension url=&quot;closureSystemDescription&quot;>
                                <valueString value=&quot;100 cc HDPE Bottle 2 g desiccant&quot;/>"><span>100 cc HDPE Bottle 2 g desiccant</span></span></div></div><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        ...
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>">Manufacturer</span><div class="indent org summaryUnit"><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-2 fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-3 fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: manufacturer)(fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a)

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
                <active value=&quot;true&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;drug-product-manufacture&quot;/>
                        <display value=&quot;Drug Product Manufacture&quot;/>
                    </coding>
                </type>
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;/>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>
                    </address>
                </contact>" id="Organization-manufacturer">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/organization.html#tt-uml">R6</a>]</span><div class="debugOff">id: manufacturer</div><div class="debugOff"> fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a</div><span class="summaryShowsOff"> - AAA Pharmaceutical, Inc.</span><div class="summaryHiddenOff"><div><span title="
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
                    <value value=&quot;3010027650&quot;/>">3010027650<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span></div><div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <active value=&quot;true&quot;>">Active: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <active value=&quot;true&quot;>"><span>true</span></span></div></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;>">Name: </span><span>AAA Pharmaceutical, Inc.</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;drug-product-manufacture&quot;/>
                        <display value=&quot;Drug Product Manufacture&quot;/>
                    </coding>">Type: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;drug-product-manufacture&quot;/>
                        <display value=&quot;Drug Product Manufacture&quot;/>">Drug Product Manufacture<span class="greyOff"> [drug-product-manufacture]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type)</span></span></div><div class="indent org2">
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
                        <country value=&quot;USA&quot;>">USA</span></div></div></div></div></span></div><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    ...
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-site-pq&quot;>
                        <valueReference>
                            <reference value=&quot;Organization/packaging&quot;/>
                        </valueReference>">Packager</span><div class="indent org summaryUnit"><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-2 fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-3 fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: packaging)(fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b07)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <id value=&quot;packaging&quot;/>
                <identifier>
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3008816891&quot;/>
                </identifier>
                <active value=&quot;true&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;packaging&quot;/>
                        <display value=&quot;Packaging&quot;/>
                    </coding>
                </type>
                <name value=&quot;MySite&quot;/>" id="Organization-packaging">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/organization.html#tt-uml">R6</a>]</span><div class="debugOff">id: packaging</div><div class="debugOff"> fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b07</div><span class="summaryShowsOff"> - MySite</span><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3008816891&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3008816891&quot;/>">3008816891<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span></div><div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <active value=&quot;true&quot;>">Active: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <active value=&quot;true&quot;>"><span>true</span></span></div></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;MySite&quot;>">Name: </span><span>MySite</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;packaging&quot;/>
                        <display value=&quot;Packaging&quot;/>
                    </coding>">Type: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;packaging&quot;/>
                        <display value=&quot;Packaging&quot;/>">Packaging<span class="greyOff"> [packaging]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type)</span></span></div></div></div></span></div></div></div></div><div class="indent med summaryUnit"><sup class="rotate-left" title="arrow indicates that this Medication resource points back to the parent MedicinalProductDefinition, instead of being linked forwards from it - via extension http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-pq">↸</sup><span class="debugOff">arrow indicates that this Medication resource points back to the parent MedicinalProductDefinition, instead of being linked forwards from it - via extension http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-pq<br></span><a class="plainLink"><span class="bold" title="Medication (id: medication-actual-batch-3)(fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06)

<Bundle>
    <entry>
        <resource>
            <Medication>
                <id value=&quot;medication-actual-batch-3&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-pq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>
                    </extension>
                </code>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;manufacturingDate&quot;>
                            <valueDateTime value=&quot;2020-06&quot;/>
                        </extension>
                        <extension url=&quot;batchQuantity&quot;>
                            <valueQuantity>
                                <value value=&quot;100125&quot;/>
                                <unit value=&quot;tablets&quot;/>
                            </valueQuantity>
                        </extension>
                        <extension url=&quot;batchUtilization&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl&quot;/>
                                    <code value=&quot;C185328&quot;/>
                                    <display value=&quot;Stability Study&quot;/>
                                </coding>
                                <text value=&quot;PPQ / Stability&quot;/>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                        <extension url=&quot;container&quot;>
                            <extension url=&quot;closureSystemDescription&quot;>
                                <valueString value=&quot;100 cc HDPE Bottle 2 g desiccant&quot;/>
                            </extension>
                        </extension>
                        <!-- local extensions -->
                    </extension>
                    <!-- local extensions (now outside the batch) -->
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-pq&quot;>
                        <valueDateTime value=&quot;2019-09-08&quot;/>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-date-pq&quot;>
                        <valueDateTime value=&quot;2020-08&quot;/>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-site-pq&quot;>
                        <valueReference>
                            <reference value=&quot;Organization/packaging&quot;/>
                        </valueReference>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-pq&quot;>
                        <valueQuantity>
                            <value value=&quot;4.8&quot;/>
                            <unit value=&quot;kg&quot;/>
                        </valueQuantity>
                    </extension>
                    <lotNumber value=&quot;33447&quot;/>
                </batch>" id="Medication-medication-actual-batch-3">Medication</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/medication.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/medication.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/medication.html#tt-uml">R6</a>]</span><div class="debugOff">id: medication-actual-batch-3</div><div class="debugOff"> fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06</div><span class="summaryShowsOff"><b> - 33447</b></span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-pq&quot;>
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
                        <extension url=&quot;manufacturingDate&quot;>
                            <valueDateTime value=&quot;2020-06&quot;/>
                        </extension>
                        <extension url=&quot;batchQuantity&quot;>
                            <valueQuantity>
                                <value value=&quot;100125&quot;/>
                                <unit value=&quot;tablets&quot;/>
                            </valueQuantity>
                        </extension>
                        <extension url=&quot;batchUtilization&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl&quot;/>
                                    <code value=&quot;C185328&quot;/>
                                    <display value=&quot;Stability Study&quot;/>
                                </coding>
                                <text value=&quot;PPQ / Stability&quot;/>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                        <extension url=&quot;container&quot;>
                            <extension url=&quot;closureSystemDescription&quot;>
                                <valueString value=&quot;100 cc HDPE Bottle 2 g desiccant&quot;/>
                            </extension>
                        </extension>
                        <!-- local extensions -->
                    </extension>
                    <!-- local extensions (now outside the batch) -->
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-pq&quot;>
                        <valueDateTime value=&quot;2019-09-08&quot;/>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-date-pq&quot;>
                        <valueDateTime value=&quot;2020-08&quot;/>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-site-pq&quot;>
                        <valueReference>
                            <reference value=&quot;Organization/packaging&quot;/>
                        </valueReference>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-pq&quot;>
                        <valueQuantity>
                            <value value=&quot;4.8&quot;/>
                            <unit value=&quot;kg&quot;/>
                        </valueQuantity>
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
                        <extension url=&quot;manufacturingDate&quot;>
                            <valueDateTime value=&quot;2020-06&quot;/>
                        </extension>
                        <extension url=&quot;batchQuantity&quot;>
                            <valueQuantity>
                                <value value=&quot;100125&quot;/>
                                <unit value=&quot;tablets&quot;/>
                            </valueQuantity>
                        </extension>
                        <extension url=&quot;batchUtilization&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl&quot;/>
                                    <code value=&quot;C185328&quot;/>
                                    <display value=&quot;Stability Study&quot;/>
                                </coding>
                                <text value=&quot;PPQ / Stability&quot;/>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                        <extension url=&quot;container&quot;>
                            <extension url=&quot;closureSystemDescription&quot;>
                                <valueString value=&quot;100 cc HDPE Bottle 2 g desiccant&quot;/>
                            </extension>
                        </extension>
                        <!-- local extensions -->">Manufacturing</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;manufacturingDate&quot;>
                            <valueDateTime value=&quot;2020-06&quot;>">Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;manufacturingDate&quot;>
                            <valueDateTime value=&quot;2020-06&quot;>">2020-06</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-pq&quot;>
                        <valueDateTime value=&quot;2019-09-08&quot;>">Release Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-pq&quot;>
                        <valueDateTime value=&quot;2019-09-08&quot;>">2019-09-08</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-date-pq&quot;>
                        <valueDateTime value=&quot;2020-08&quot;>">Packaging Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-date-pq&quot;>
                        <valueDateTime value=&quot;2020-08&quot;>">2020-08</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;batchQuantity&quot;>
                            <valueQuantity>
                                <value value=&quot;100125&quot;/>
                                <unit value=&quot;tablets&quot;/>">Quantity: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;batchQuantity&quot;>
                            <valueQuantity>
                                <value value=&quot;100125&quot;/>
                                <unit value=&quot;tablets&quot;/>">100125 tablets</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-pq&quot;>
                        <valueQuantity>
                            <value value=&quot;4.8&quot;/>
                            <unit value=&quot;kg&quot;/>">Actual Yield: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-pq&quot;>
                        <valueQuantity>
                            <value value=&quot;4.8&quot;/>
                            <unit value=&quot;kg&quot;/>">4.8 kg</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        ...
                        <extension url=&quot;batchUtilization&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl&quot;/>
                                    <code value=&quot;C185328&quot;/>
                                    <display value=&quot;Stability Study&quot;/>
                                </coding>
                                <text value=&quot;PPQ / Stability&quot;/>
                            </valueCodeableConcept>">Utilization: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        ...
                        <extension url=&quot;batchUtilization&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl&quot;/>
                                    <code value=&quot;C185328&quot;/>
                                    <display value=&quot;Stability Study&quot;/>
                                </coding>
                                <text value=&quot;PPQ / Stability&quot;/>
                            </valueCodeableConcept>"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;batchUtilization&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl&quot;/>
                                    <code value=&quot;C185328&quot;/>
                                    <display value=&quot;Stability Study&quot;/>">Stability Study<span class="greyOff"> [C185328]</span><span class="greyOff"> (http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl)</span></span><span style="white-space:normal;"> - Text: PPQ / Stability</span></span></div><div class="indent medl4"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        ...
                        <extension url=&quot;container&quot;>
                            <extension url=&quot;closureSystemDescription&quot;>
                                <valueString value=&quot;100 cc HDPE Bottle 2 g desiccant&quot;/>
                            </extension>">Container</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;container&quot;>
                            <extension url=&quot;closureSystemDescription&quot;>
                                <valueString value=&quot;100 cc HDPE Bottle 2 g desiccant&quot;/>">Closure System: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;container&quot;>
                            <extension url=&quot;closureSystemDescription&quot;>
                                <valueString value=&quot;100 cc HDPE Bottle 2 g desiccant&quot;/>"><span>100 cc HDPE Bottle 2 g desiccant</span></span></div></div><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        ...
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>">Manufacturer</span><div class="indent org summaryUnit"><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-2 fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-3 fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: manufacturer)(fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a)

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
                <active value=&quot;true&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;drug-product-manufacture&quot;/>
                        <display value=&quot;Drug Product Manufacture&quot;/>
                    </coding>
                </type>
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;/>
                <contact>
                    <address>
                        <line value=&quot;681 Main Street&quot;/>
                        <city value=&quot;Lumberton&quot;/>
                        <state value=&quot;New Jersey&quot;/>
                        <postalCode value=&quot;08048&quot;/>
                        <country value=&quot;USA&quot;/>
                    </address>
                </contact>" id="Organization-manufacturer">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/organization.html#tt-uml">R6</a>]</span><div class="debugOff">id: manufacturer</div><div class="debugOff"> fullUrl: urn:uuid:0102bca4-46c1-a6bf-1025-cd403fee710a</div><span class="summaryShowsOff"> - AAA Pharmaceutical, Inc.</span><div class="summaryHiddenOff"><div><span title="
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
                    <value value=&quot;3010027650&quot;/>">3010027650<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span></div><div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <active value=&quot;true&quot;>">Active: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <active value=&quot;true&quot;>"><span>true</span></span></div></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;>">Name: </span><span>AAA Pharmaceutical, Inc.</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;drug-product-manufacture&quot;/>
                        <display value=&quot;Drug Product Manufacture&quot;/>
                    </coding>">Type: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;drug-product-manufacture&quot;/>
                        <display value=&quot;Drug Product Manufacture&quot;/>">Drug Product Manufacture<span class="greyOff"> [drug-product-manufacture]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type)</span></span></div><div class="indent org2">
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
                        <country value=&quot;USA&quot;>">USA</span></div></div></div></div></span></div><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    ...
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-site-pq&quot;>
                        <valueReference>
                            <reference value=&quot;Organization/packaging&quot;/>
                        </valueReference>">Packager</span><div class="indent org summaryUnit"><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-2 fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-3 fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: packaging)(fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b07)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <id value=&quot;packaging&quot;/>
                <identifier>
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3008816891&quot;/>
                </identifier>
                <active value=&quot;true&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;packaging&quot;/>
                        <display value=&quot;Packaging&quot;/>
                    </coding>
                </type>
                <name value=&quot;MySite&quot;/>" id="Organization-packaging">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/organization.html#tt-uml">R6</a>]</span><div class="debugOff">id: packaging</div><div class="debugOff"> fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b07</div><span class="summaryShowsOff"> - MySite</span><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3008816891&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3008816891&quot;/>">3008816891<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span></div><div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <active value=&quot;true&quot;>">Active: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <active value=&quot;true&quot;>"><span>true</span></span></div></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;MySite&quot;>">Name: </span><span>MySite</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;packaging&quot;/>
                        <display value=&quot;Packaging&quot;/>
                    </coding>">Type: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;packaging&quot;/>
                        <display value=&quot;Packaging&quot;/>">Packaging<span class="greyOff"> [packaging]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type)</span></span></div></div></div></span></div></div></div></div>
</div>
<div></div>
</div>
</div>
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

    /* Rik - consolas works better if text has to align but doesn't look so good.
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
    .indent-right {
        margin-right:0.7em;
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

    .white { background-Color:white }

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
    .mpdl4 { background-Color:#fff6d9 }
    .mpdl5 { background-Color:#fffaeb }

    .task { background-Color:#fcb568 }
    .task2 { background-Color:#ffd8ad }
    .task3 { background-Color:#ffdfbd }

    .proc { background-Color:#fcb568 }
    .procl2 { background-Color:#ffd8ad }
    .procl3 { background-Color:#ffdfbd }

    .prov { background-Color:#b4b4b4 }

    .cui { background-Color:#d9d2e9 }
    .cuidetails { background-Color:#e6e1f0 }
    .cuidetails2 { background-Color:#ebe9f0 }

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

    .ppd { background-Color:#b6d7a8; width:70%; }
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
    .imml2 { background-Color: #afcedb }
    .imml3 { background-Color: #bde1f0 }

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

    .supplyDel { background-Color:#5dded8 }
    .supplyDell2 { background-Color:#93ede9 }

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

	.noUnderline { text-decoration: none; color: inherit; }
	.noUnderline:hover { text-decoration: underline; color: revert; }

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

    .resetDebug { visibility:visible; }

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
	
    .json-key { color:#000096 }
    .json-string { color:#994328 }
    .json-number { color:blue }
    .json-boolean { color:red }
    .json-null { color:green }
	
	th { background-color: #81BEF7; }
	td { padding: 3px; font:10pt 'Verdana'; }
	th { padding: 3px; font:10pt 'Verdana'; } /* seems to need setting explicitly, on site */

	.raised-border-td {
	  position: relative;
	}
	.raised-border-td::before {
	  content: "";
	  position: absolute;
	  top: -1px; /* Raise the border by 1px */
	  left: 0;
	  width: 100%;
	  border-top: 1px solid #000; /* 1px solid black border on the top */
	}
	
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
	</style><!--
		Status information:
		First resource in bundle:Medication
		Single resource bundle:false
		Single resource bundle Not Patient Or Bundle:false
		Single resource Not Patient:false
		Patient document:false
		General Bundle:false
		Not patient related:true
		=>Patient Centric Mode:false
		SubstanceDef Centric Mode:false
		Assumed profile:-->
</html>
