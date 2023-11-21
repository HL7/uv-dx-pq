The HTML rendering below shows a synthetic Quality data example for Common Technical Document (CTD) Module 3: Quality, section 3.2.P.5 Control of Drug Product, subsection 3.2.P.5.4 Batch Analyses.<html>
<body>
<div class="greyable">
<div class="controls remove"><span> </span><span class="button" onclick="toggleSummary(this)" title="summary view">summary on</span><span> </span><span class="button" onclick="toggleCodes(this)" title="details of code systems">show codes</span><span> </span><span class="button" onclick="toggleDebug(this)" title="extra technical info">show debug</span><span style="float:right; margin-right:3px;"><span class="buttonNoUnderlineHidden" onclick="toggleLowerControls(this)"><sup title="expand this"> v </sup></span><span class="buttonNoUnderline" onclick="toggleRemove(this)"><sup title="close this">x</sup></span></span><span> </span><span class="button" onclick="toggleRemoveTask(this)" title="details of tasks for changes">hide task</span><span> </span><span class="button" onclick="toggleRemoveProvenance(this)" title="details of provenance for changes">hide provenance</span><span> </span><span class="button" onclick="toggleRemoveTables(this)" title="tabular data">hide tables</span><br><span> </span><span class="button" onclick="toggleDarkMode(this)" title="darkened display">dark mode</span><span> </span><span class="button" onclick="toggleApplyGreyscale(this)" title="grey and white display">greyscale</span><span> </span><span class="button" onclick="toggleBlackAndWhite(this,false)" title="black and white display">b&amp;w</span><span> </span><span class="button" onclick="togglePlainMode(this);" title="plain text display">text only</span></div>
<div class="divBody">
<div style="position:relative" class="summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOffBorder">
<div class="bundleBorder">
<div class="debugOff">
<div class="bundle"><a class="plainLink"><span class="bold" title="Bundle (id: bundle-batch-info-dxpq-ex1-prod)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-batch-info-dxpq 

<Bundle>
    <!-- Product Batch Info -->
    <id value=&quot;bundle-batch-info-dxpq-ex1-prod&quot;/>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-batch-info-dxpq&quot;/>
    </meta>
    <type value=&quot;collection&quot;/>
    <!-- Section 8 - Batch or Lot Information (batch 1 of 3) -->
    <entry>
        <fullUrl value=&quot;urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51&quot;/>
        <resource>
            <Medication>
                <id value=&quot;medication-actual-batch&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <!-- todo consider change this be the MID? -->
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                            <!--reference value=&quot;urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d5&quot;/-->
                        </valueReference>
                    </extension>
                </code>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-dxpq&quot;>
                            <valueDateTime value=&quot;2019-09-08&quot;/>
                            <!-- #171 -->
                        </extension>
                        <!-- removed extension for substance batch -->
                        <!--extension url=&quot;http://accumulus.org/fhir/extension/batchSubstanceBatch&quot;>
                    		<valueReference>
                    			<reference value=&quot;Substance/actual-batch-substance&quot;/>
                    		</valueReference>                   
                    	</extension-->
                        <extension url=&quot;manufacturingDate&quot;>
                            <!-- #157 -->
                            <valueDateTime value=&quot;2020-06&quot;/>
                        </extension>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-date-dxpq&quot;>
                            <!-- #159 -->
                            <valueDateTime value=&quot;2020-08&quot;/>
                        </extension>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-site-dxpq&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/packaging&quot;/>
                            </valueReference>
                        </extension>
                        <extension url=&quot;batchQuantity&quot;>
                            <valueQuantity>
                                <!-- #26 -->
                                <!-- #155 -->
                                <!-- need to see if one of these needs changing -->
                                <value value=&quot;100100&quot;/>
                                <unit value=&quot;tablets&quot;/>
                            </valueQuantity>
                        </extension>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-dxpq&quot;>
                            <valueQuantity>
                                <!-- #160 -->
                                <value value=&quot;4.8&quot;/>
                                <unit value=&quot;kg&quot;/>
                            </valueQuantity>
                        </extension>
                        <extension url=&quot;batchUtilization&quot;>
                            <!-- #159 -->
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/pqcmc-batch-utilization-terminology&quot;/>
                                    <code value=&quot;C185328&quot;/>
                                    <display value=&quot;Stability Study&quot;/>
                                </coding>
                                <text value=&quot;PPQ / Stability&quot;/>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <!-- #158 -->
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                        <extension url=&quot;container&quot;>
                            <extension url=&quot;closureSystemDescription&quot;>
                                <valueString value=&quot;100 cc HDPE Bottle 2 g desiccant&quot;/>
                            </extension>
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
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>
                    </extension>
                </code>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-dxpq&quot;>
                            <valueDateTime value=&quot;2019-09-08&quot;/>
                        </extension>
                        <!-- removed extension for substance batch -->
                        <!--extension url=&quot;http://accumulus.org/fhir/extension/batchSubstanceBatch&quot;>
                    		<valueReference>
                    			<reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                    		</valueReference>                   
                    	</extension-->
                        <extension url=&quot;manufacturingDate&quot;>
                            <valueDateTime value=&quot;2020-06&quot;/>
                        </extension>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-date-dxpq&quot;>
                            <valueDateTime value=&quot;2020-08&quot;/>
                        </extension>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-site-dxpq&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/packaging&quot;/>
                            </valueReference>
                        </extension>
                        <extension url=&quot;batchQuantity&quot;>
                            <valueQuantity>
                                <value value=&quot;100050&quot;/>
                                <unit value=&quot;tablets&quot;/>
                            </valueQuantity>
                        </extension>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-dxpq&quot;>
                            <valueQuantity>
                                <value value=&quot;4.8&quot;/>
                                <unit value=&quot;kg&quot;/>
                            </valueQuantity>
                        </extension>
                        <extension url=&quot;batchUtilization&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/pqcmc-batch-utilization-terminology&quot;/>
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
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>
                    </extension>
                </code>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-dxpq&quot;>
                            <valueDateTime value=&quot;2019-09-08&quot;/>
                        </extension>
                        <!-- removed extension for substance batch -->
                        <!--extension url=&quot;http://accumulus.org/fhir/extension/batchSubstanceBatch&quot;>
                    		<valueReference>
                    			<reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                    		</valueReference>                   
                    	</extension-->
                        <extension url=&quot;manufacturingDate&quot;>
                            <valueDateTime value=&quot;2020-06&quot;/>
                        </extension>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-date-dxpq&quot;>
                            <valueDateTime value=&quot;2020-08&quot;/>
                        </extension>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-site-dxpq&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/packaging&quot;/>
                            </valueReference>
                        </extension>
                        <extension url=&quot;batchQuantity&quot;>
                            <valueQuantity>
                                <value value=&quot;100125&quot;/>
                                <unit value=&quot;tablets&quot;/>
                            </valueQuantity>
                        </extension>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-dxpq&quot;>
                            <valueQuantity>
                                <value value=&quot;4.8&quot;/>
                                <unit value=&quot;kg&quot;/>
                            </valueQuantity>
                        </extension>
                        <extension url=&quot;batchUtilization&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/pqcmc-batch-utilization-terminology&quot;/>
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
        <fullUrl value=&quot;urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b07&quot;/>
        <resource>
            <Organization>
                <id value=&quot;packaging&quot;/>
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
                            <system value=&quot;http://example.org/fhir/code/productNameType&quot;/>
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
    </entry>" id="Bundle-bundle-batch-info-dxpq-ex1-prod">Bundle</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/bundle.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/bundle.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/bundle.html#tt-uml">R6</a>]</span><div class="debugOff">id: bundle-batch-info-dxpq-ex1-prod</div>
<div class="debugOff"></div>
<div class="debugOff"><span title="
<Bundle>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-batch-info-dxpq&quot;>">Profile: </span><span>http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-batch-info-dxpq</span></div>
<div><span title="
<Bundle>
    ...
    <type value=&quot;collection&quot;>">Type: </span><span><span>collection</span></span></div>
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
<td>Manufacturing Process</td>
<td class="centred"></td>
<td class="centred"></td>
<td class="centred"></td>
</table>
</div>
</div><br style="line-height:6px;"></div>
<div class="org indent"><span class="bold">Subjects of Batch Information</span><br><br style="line-height:6px;"><div ondblclick="summaryHandler(event)" class="indent mpd summaryUnit"><a class="plainLink"><span class="bold" title="MedicinalProductDefinition (id: medicinalproductdefinition-drug-product-dxpq-ex1)(fullUrl: urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d5)

<Bundle>
    <entry>
        <resource>
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
                            <system value=&quot;http://example.org/fhir/code/productNameType&quot;/>
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
                            <system value=&quot;http://example.org/fhir/code/productNameType&quot;/>
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
                            <system value=&quot;http://example.org/fhir/code/productNameType&quot;/>
                            <code value=&quot;1234&quot;/>
                            <display value=&quot;Proprietary&quot;/>
                        </coding>">Name type: </span><span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                <name>
                    <type>
                        <coding>
                            <system value=&quot;http://example.org/fhir/code/productNameType&quot;/>
                            <code value=&quot;1234&quot;/>
                            <display value=&quot;Proprietary&quot;/>">Proprietary<span class="greyOff"> [1234]</span><span class="greyOff"> (http://example.org/fhir/code/productNameType)</span></span></div>
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
                <description value=&quot;Textual description of the product&quot;>">Description: </span><span>Textual description of the product</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                ...
                <route>
                    <coding>
                        <system value=&quot;https://spor.ema.europa.eu/v1/lists/100000073345&quot;/>
                        <code value=&quot;100000073619&quot;/>
                        <display value=&quot;Oral use&quot;/>
                    </coding>">Route of Administration: </span><span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                <route>
                    <coding>
                        <system value=&quot;https://spor.ema.europa.eu/v1/lists/100000073345&quot;/>
                        <code value=&quot;100000073619&quot;/>
                        <display value=&quot;Oral use&quot;/>">Oral use<span class="greyOff"> [100000073619]</span><span class="greyOff"> (https://spor.ema.europa.eu/v1/lists/100000073345)</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                ...
                <combinedPharmaceuticalDoseForm>
                    <coding>
                        <system value=&quot;https://spor.ema.europa.eu/v1/lists/200000000004&quot;/>
                        <code value=&quot;100000073667&quot;/>
                        <display value=&quot;Gastro-resistant tablet&quot;/>
                    </coding>">Dose Form (combination of all parts): </span><span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                <combinedPharmaceuticalDoseForm>
                    <coding>
                        <system value=&quot;https://spor.ema.europa.eu/v1/lists/200000000004&quot;/>
                        <code value=&quot;100000073667&quot;/>
                        <display value=&quot;Gastro-resistant tablet&quot;/>">Gastro-resistant tablet<span class="greyOff"> [100000073667]</span><span class="greyOff"> (https://spor.ema.europa.eu/v1/lists/200000000004)</span></span></div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="indent mpdl2 summaryUnit"><span title="Medication resource extension linking back to MedicinalProductDefinition: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-dxpq">Batch Instance</span><div class="indent med summaryUnit" ondblclick="summaryHandler(event)"><sup class="rotate-left" title="arrow indicates that this Medication resource points back to the parent MedicinalProductDefinition, instead of being linked forwards from it - via extension http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-dxpq">↸</sup><span class="debugOff">arrow indicates that this Medication resource points back to the parent MedicinalProductDefinition, instead of being linked forwards from it - via extension http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-dxpq<br></span><a class="plainLink"><span class="bold" title="Medication (id: medication-actual-batch)(fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51)

<Bundle>
    <entry>
        <resource>
            <Medication>
                <id value=&quot;medication-actual-batch&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <!-- todo consider change this be the MID? -->
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                            <!--reference value=&quot;urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d5&quot;/-->
                        </valueReference>
                    </extension>
                </code>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-dxpq&quot;>
                            <valueDateTime value=&quot;2019-09-08&quot;/>
                            <!-- #171 -->
                        </extension>
                        <!-- removed extension for substance batch -->
                        <!--extension url=&quot;http://accumulus.org/fhir/extension/batchSubstanceBatch&quot;>
                    		<valueReference>
                    			<reference value=&quot;Substance/actual-batch-substance&quot;/>
                    		</valueReference>                   
                    	</extension-->
                        <extension url=&quot;manufacturingDate&quot;>
                            <!-- #157 -->
                            <valueDateTime value=&quot;2020-06&quot;/>
                        </extension>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-date-dxpq&quot;>
                            <!-- #159 -->
                            <valueDateTime value=&quot;2020-08&quot;/>
                        </extension>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-site-dxpq&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/packaging&quot;/>
                            </valueReference>
                        </extension>
                        <extension url=&quot;batchQuantity&quot;>
                            <valueQuantity>
                                <!-- #26 -->
                                <!-- #155 -->
                                <!-- need to see if one of these needs changing -->
                                <value value=&quot;100100&quot;/>
                                <unit value=&quot;tablets&quot;/>
                            </valueQuantity>
                        </extension>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-dxpq&quot;>
                            <valueQuantity>
                                <!-- #160 -->
                                <value value=&quot;4.8&quot;/>
                                <unit value=&quot;kg&quot;/>
                            </valueQuantity>
                        </extension>
                        <extension url=&quot;batchUtilization&quot;>
                            <!-- #159 -->
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/pqcmc-batch-utilization-terminology&quot;/>
                                    <code value=&quot;C185328&quot;/>
                                    <display value=&quot;Stability Study&quot;/>
                                </coding>
                                <text value=&quot;PPQ / Stability&quot;/>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <!-- #158 -->
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                        <extension url=&quot;container&quot;>
                            <extension url=&quot;closureSystemDescription&quot;>
                                <valueString value=&quot;100 cc HDPE Bottle 2 g desiccant&quot;/>
                            </extension>
                        </extension>
                    </extension>
                    <!-- #153 -->
                    <lotNumber value=&quot;33445&quot;/>
                </batch>" id="Medication-medication-actual-batch">Medication</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/medication.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/medication.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/medication.html#tt-uml">R6</a>]</span><div class="debugOff">id: medication-actual-batch</div><div class="debugOff"> fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51</div><span class="summaryShowsOff"><b> - 33445</b></span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-dxpq&quot;>
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
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-dxpq&quot;>
                            <valueDateTime value=&quot;2019-09-08&quot;/>
                            <!-- #171 -->
                        </extension>
                        <!-- removed extension for substance batch -->
                        <!--extension url=&quot;http://accumulus.org/fhir/extension/batchSubstanceBatch&quot;>
                    		<valueReference>
                    			<reference value=&quot;Substance/actual-batch-substance&quot;/>
                    		</valueReference>                   
                    	</extension-->
                        <extension url=&quot;manufacturingDate&quot;>
                            <!-- #157 -->
                            <valueDateTime value=&quot;2020-06&quot;/>
                        </extension>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-date-dxpq&quot;>
                            <!-- #159 -->
                            <valueDateTime value=&quot;2020-08&quot;/>
                        </extension>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-site-dxpq&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/packaging&quot;/>
                            </valueReference>
                        </extension>
                        <extension url=&quot;batchQuantity&quot;>
                            <valueQuantity>
                                <!-- #26 -->
                                <!-- #155 -->
                                <!-- need to see if one of these needs changing -->
                                <value value=&quot;100100&quot;/>
                                <unit value=&quot;tablets&quot;/>
                            </valueQuantity>
                        </extension>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-dxpq&quot;>
                            <valueQuantity>
                                <!-- #160 -->
                                <value value=&quot;4.8&quot;/>
                                <unit value=&quot;kg&quot;/>
                            </valueQuantity>
                        </extension>
                        <extension url=&quot;batchUtilization&quot;>
                            <!-- #159 -->
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/pqcmc-batch-utilization-terminology&quot;/>
                                    <code value=&quot;C185328&quot;/>
                                    <display value=&quot;Stability Study&quot;/>
                                </coding>
                                <text value=&quot;PPQ / Stability&quot;/>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <!-- #158 -->
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                        <extension url=&quot;container&quot;>
                            <extension url=&quot;closureSystemDescription&quot;>
                                <valueString value=&quot;100 cc HDPE Bottle 2 g desiccant&quot;/>
                            </extension>
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
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-dxpq&quot;>
                            <valueDateTime value=&quot;2019-09-08&quot;/>
                            <!-- #171 -->
                        </extension>
                        <!-- removed extension for substance batch -->
                        <!--extension url=&quot;http://accumulus.org/fhir/extension/batchSubstanceBatch&quot;>
                    		<valueReference>
                    			<reference value=&quot;Substance/actual-batch-substance&quot;/>
                    		</valueReference>                   
                    	</extension-->
                        <extension url=&quot;manufacturingDate&quot;>
                            <!-- #157 -->
                            <valueDateTime value=&quot;2020-06&quot;/>
                        </extension>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-date-dxpq&quot;>
                            <!-- #159 -->
                            <valueDateTime value=&quot;2020-08&quot;/>
                        </extension>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-site-dxpq&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/packaging&quot;/>
                            </valueReference>
                        </extension>
                        <extension url=&quot;batchQuantity&quot;>
                            <valueQuantity>
                                <!-- #26 -->
                                <!-- #155 -->
                                <!-- need to see if one of these needs changing -->
                                <value value=&quot;100100&quot;/>
                                <unit value=&quot;tablets&quot;/>
                            </valueQuantity>
                        </extension>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-dxpq&quot;>
                            <valueQuantity>
                                <!-- #160 -->
                                <value value=&quot;4.8&quot;/>
                                <unit value=&quot;kg&quot;/>
                            </valueQuantity>
                        </extension>
                        <extension url=&quot;batchUtilization&quot;>
                            <!-- #159 -->
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/pqcmc-batch-utilization-terminology&quot;/>
                                    <code value=&quot;C185328&quot;/>
                                    <display value=&quot;Stability Study&quot;/>
                                </coding>
                                <text value=&quot;PPQ / Stability&quot;/>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;assignedManufacturer&quot;>
                            <valueReference>
                                <!-- #158 -->
                                <reference value=&quot;Organization/manufacturer&quot;/>
                            </valueReference>
                        </extension>
                        <extension url=&quot;container&quot;>
                            <extension url=&quot;closureSystemDescription&quot;>
                                <valueString value=&quot;100 cc HDPE Bottle 2 g desiccant&quot;/>
                            </extension>
                        </extension>">Manufacturing</span><div><span title="
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
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-dxpq&quot;>
                            <valueDateTime value=&quot;2019-09-08&quot;>">Release Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-dxpq&quot;>
                            <valueDateTime value=&quot;2019-09-08&quot;>">2019-09-08</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-date-dxpq&quot;>
                            <valueDateTime value=&quot;2020-08&quot;>">Packaging Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-date-dxpq&quot;>
                            <valueDateTime value=&quot;2020-08&quot;>">2020-08</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;batchQuantity&quot;>
                            <valueQuantity>
                                <!-- #26 -->
                                <!-- #155 -->
                                <!-- need to see if one of these needs changing -->
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
                                <!-- #26 -->
                                <!-- #155 -->
                                <!-- need to see if one of these needs changing -->
                                <value value=&quot;100100&quot;/>
                                <unit value=&quot;tablets&quot;/>">100100 tablets</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-dxpq&quot;>
                            <valueQuantity>
                                <!-- #160 -->
                                <value value=&quot;4.8&quot;/>
                                <unit value=&quot;kg&quot;/>">Actual Yield: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-dxpq&quot;>
                            <valueQuantity>
                                <!-- #160 -->
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
                            <!-- #159 -->
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/pqcmc-batch-utilization-terminology&quot;/>
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
                        <extension url=&quot;batchUtilization&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/pqcmc-batch-utilization-terminology&quot;/>
                                    <code value=&quot;C185328&quot;/>
                                    <display value=&quot;Stability Study&quot;/>">Stability Study<span class="greyOff"> [C185328]</span><span class="greyOff"> (http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/pqcmc-batch-utilization-terminology)</span></span><span style="white-space:normal;"> - Text: PPQ / Stability</span></div><div class="indent medl4"><span title="
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
                                <valueString value=&quot;100 cc HDPE Bottle 2 g desiccant&quot;/>">Closure System: </span><span>100 cc HDPE Bottle 2 g desiccant</span></div></div><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        ...
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
                        <country value=&quot;USA&quot;>">USA</span></div></div></div></div></span><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        ...
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-site-dxpq&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/packaging&quot;/>
                            </valueReference>">Packager</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-2 fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-3 fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: packaging)(fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b07)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <id value=&quot;packaging&quot;/>
                <name value=&quot;MySite&quot;/>" id="Organization-packaging">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/organization.html#tt-uml">R6</a>]</span><div class="debugOff">id: packaging</div><div class="debugOff"> fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b07</div><span class="summaryShowsOff"> - MySite</span><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;MySite&quot;>">Name: </span><span>MySite</span></div></div></div></span></div></div></div></div></div><div class="indent med summaryUnit" ondblclick="summaryHandler(event)"><sup class="rotate-left" title="arrow indicates that this Medication resource points back to the parent MedicinalProductDefinition, instead of being linked forwards from it - via extension http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-dxpq">↸</sup><span class="debugOff">arrow indicates that this Medication resource points back to the parent MedicinalProductDefinition, instead of being linked forwards from it - via extension http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-dxpq<br></span><a class="plainLink"><span class="bold" title="Medication (id: medication-actual-batch-2)(fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc)

<Bundle>
    <entry>
        <resource>
            <Medication>
                <id value=&quot;medication-actual-batch-2&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>
                    </extension>
                </code>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-dxpq&quot;>
                            <valueDateTime value=&quot;2019-09-08&quot;/>
                        </extension>
                        <!-- removed extension for substance batch -->
                        <!--extension url=&quot;http://accumulus.org/fhir/extension/batchSubstanceBatch&quot;>
                    		<valueReference>
                    			<reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                    		</valueReference>                   
                    	</extension-->
                        <extension url=&quot;manufacturingDate&quot;>
                            <valueDateTime value=&quot;2020-06&quot;/>
                        </extension>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-date-dxpq&quot;>
                            <valueDateTime value=&quot;2020-08&quot;/>
                        </extension>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-site-dxpq&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/packaging&quot;/>
                            </valueReference>
                        </extension>
                        <extension url=&quot;batchQuantity&quot;>
                            <valueQuantity>
                                <value value=&quot;100050&quot;/>
                                <unit value=&quot;tablets&quot;/>
                            </valueQuantity>
                        </extension>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-dxpq&quot;>
                            <valueQuantity>
                                <value value=&quot;4.8&quot;/>
                                <unit value=&quot;kg&quot;/>
                            </valueQuantity>
                        </extension>
                        <extension url=&quot;batchUtilization&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/pqcmc-batch-utilization-terminology&quot;/>
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
                    </extension>
                    <lotNumber value=&quot;33446&quot;/>
                </batch>" id="Medication-medication-actual-batch-2">Medication</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/medication.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/medication.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/medication.html#tt-uml">R6</a>]</span><div class="debugOff">id: medication-actual-batch-2</div><div class="debugOff"> fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc</div><span class="summaryShowsOff"><b> - 33446</b></span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-dxpq&quot;>
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
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-dxpq&quot;>
                            <valueDateTime value=&quot;2019-09-08&quot;/>
                        </extension>
                        <!-- removed extension for substance batch -->
                        <!--extension url=&quot;http://accumulus.org/fhir/extension/batchSubstanceBatch&quot;>
                    		<valueReference>
                    			<reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                    		</valueReference>                   
                    	</extension-->
                        <extension url=&quot;manufacturingDate&quot;>
                            <valueDateTime value=&quot;2020-06&quot;/>
                        </extension>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-date-dxpq&quot;>
                            <valueDateTime value=&quot;2020-08&quot;/>
                        </extension>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-site-dxpq&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/packaging&quot;/>
                            </valueReference>
                        </extension>
                        <extension url=&quot;batchQuantity&quot;>
                            <valueQuantity>
                                <value value=&quot;100050&quot;/>
                                <unit value=&quot;tablets&quot;/>
                            </valueQuantity>
                        </extension>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-dxpq&quot;>
                            <valueQuantity>
                                <value value=&quot;4.8&quot;/>
                                <unit value=&quot;kg&quot;/>
                            </valueQuantity>
                        </extension>
                        <extension url=&quot;batchUtilization&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/pqcmc-batch-utilization-terminology&quot;/>
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
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-dxpq&quot;>
                            <valueDateTime value=&quot;2019-09-08&quot;/>
                        </extension>
                        <!-- removed extension for substance batch -->
                        <!--extension url=&quot;http://accumulus.org/fhir/extension/batchSubstanceBatch&quot;>
                    		<valueReference>
                    			<reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                    		</valueReference>                   
                    	</extension-->
                        <extension url=&quot;manufacturingDate&quot;>
                            <valueDateTime value=&quot;2020-06&quot;/>
                        </extension>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-date-dxpq&quot;>
                            <valueDateTime value=&quot;2020-08&quot;/>
                        </extension>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-site-dxpq&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/packaging&quot;/>
                            </valueReference>
                        </extension>
                        <extension url=&quot;batchQuantity&quot;>
                            <valueQuantity>
                                <value value=&quot;100050&quot;/>
                                <unit value=&quot;tablets&quot;/>
                            </valueQuantity>
                        </extension>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-dxpq&quot;>
                            <valueQuantity>
                                <value value=&quot;4.8&quot;/>
                                <unit value=&quot;kg&quot;/>
                            </valueQuantity>
                        </extension>
                        <extension url=&quot;batchUtilization&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/pqcmc-batch-utilization-terminology&quot;/>
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
                        </extension>">Manufacturing</span><div><span title="
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
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-dxpq&quot;>
                            <valueDateTime value=&quot;2019-09-08&quot;>">Release Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-dxpq&quot;>
                            <valueDateTime value=&quot;2019-09-08&quot;>">2019-09-08</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-date-dxpq&quot;>
                            <valueDateTime value=&quot;2020-08&quot;>">Packaging Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-date-dxpq&quot;>
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
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-dxpq&quot;>
                            <valueQuantity>
                                <value value=&quot;4.8&quot;/>
                                <unit value=&quot;kg&quot;/>">Actual Yield: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-dxpq&quot;>
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
                                    <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/pqcmc-batch-utilization-terminology&quot;/>
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
                        <extension url=&quot;batchUtilization&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/pqcmc-batch-utilization-terminology&quot;/>
                                    <code value=&quot;C185328&quot;/>
                                    <display value=&quot;Stability Study&quot;/>">Stability Study<span class="greyOff"> [C185328]</span><span class="greyOff"> (http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/pqcmc-batch-utilization-terminology)</span></span><span style="white-space:normal;"> - Text: PPQ / Stability</span></div><div class="indent medl4"><span title="
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
                                <valueString value=&quot;100 cc HDPE Bottle 2 g desiccant&quot;/>">Closure System: </span><span>100 cc HDPE Bottle 2 g desiccant</span></div></div><div></div><span><span title="
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
                        <country value=&quot;USA&quot;>">USA</span></div></div></div></div></span><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        ...
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-site-dxpq&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/packaging&quot;/>
                            </valueReference>">Packager</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-2 fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-3 fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: packaging)(fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b07)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <id value=&quot;packaging&quot;/>
                <name value=&quot;MySite&quot;/>" id="Organization-packaging">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/organization.html#tt-uml">R6</a>]</span><div class="debugOff">id: packaging</div><div class="debugOff"> fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b07</div><span class="summaryShowsOff"> - MySite</span><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;MySite&quot;>">Name: </span><span>MySite</span></div></div></div></span></div></div></div></div></div><div class="indent med summaryUnit" ondblclick="summaryHandler(event)"><sup class="rotate-left" title="arrow indicates that this Medication resource points back to the parent MedicinalProductDefinition, instead of being linked forwards from it - via extension http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-dxpq">↸</sup><span class="debugOff">arrow indicates that this Medication resource points back to the parent MedicinalProductDefinition, instead of being linked forwards from it - via extension http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-dxpq<br></span><a class="plainLink"><span class="bold" title="Medication (id: medication-actual-batch-3)(fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06)

<Bundle>
    <entry>
        <resource>
            <Medication>
                <id value=&quot;medication-actual-batch-3&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-dxpq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>
                    </extension>
                </code>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-dxpq&quot;>
                            <valueDateTime value=&quot;2019-09-08&quot;/>
                        </extension>
                        <!-- removed extension for substance batch -->
                        <!--extension url=&quot;http://accumulus.org/fhir/extension/batchSubstanceBatch&quot;>
                    		<valueReference>
                    			<reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                    		</valueReference>                   
                    	</extension-->
                        <extension url=&quot;manufacturingDate&quot;>
                            <valueDateTime value=&quot;2020-06&quot;/>
                        </extension>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-date-dxpq&quot;>
                            <valueDateTime value=&quot;2020-08&quot;/>
                        </extension>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-site-dxpq&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/packaging&quot;/>
                            </valueReference>
                        </extension>
                        <extension url=&quot;batchQuantity&quot;>
                            <valueQuantity>
                                <value value=&quot;100125&quot;/>
                                <unit value=&quot;tablets&quot;/>
                            </valueQuantity>
                        </extension>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-dxpq&quot;>
                            <valueQuantity>
                                <value value=&quot;4.8&quot;/>
                                <unit value=&quot;kg&quot;/>
                            </valueQuantity>
                        </extension>
                        <extension url=&quot;batchUtilization&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/pqcmc-batch-utilization-terminology&quot;/>
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
                    </extension>
                    <lotNumber value=&quot;33447&quot;/>
                </batch>" id="Medication-medication-actual-batch-3">Medication</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/medication.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/medication.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/medication.html#tt-uml">R6</a>]</span><div class="debugOff">id: medication-actual-batch-3</div><div class="debugOff"> fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06</div><span class="summaryShowsOff"><b> - 33447</b></span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-dxpq&quot;>
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
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-dxpq&quot;>
                            <valueDateTime value=&quot;2019-09-08&quot;/>
                        </extension>
                        <!-- removed extension for substance batch -->
                        <!--extension url=&quot;http://accumulus.org/fhir/extension/batchSubstanceBatch&quot;>
                    		<valueReference>
                    			<reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                    		</valueReference>                   
                    	</extension-->
                        <extension url=&quot;manufacturingDate&quot;>
                            <valueDateTime value=&quot;2020-06&quot;/>
                        </extension>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-date-dxpq&quot;>
                            <valueDateTime value=&quot;2020-08&quot;/>
                        </extension>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-site-dxpq&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/packaging&quot;/>
                            </valueReference>
                        </extension>
                        <extension url=&quot;batchQuantity&quot;>
                            <valueQuantity>
                                <value value=&quot;100125&quot;/>
                                <unit value=&quot;tablets&quot;/>
                            </valueQuantity>
                        </extension>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-dxpq&quot;>
                            <valueQuantity>
                                <value value=&quot;4.8&quot;/>
                                <unit value=&quot;kg&quot;/>
                            </valueQuantity>
                        </extension>
                        <extension url=&quot;batchUtilization&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/pqcmc-batch-utilization-terminology&quot;/>
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
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-dxpq&quot;>
                            <valueDateTime value=&quot;2019-09-08&quot;/>
                        </extension>
                        <!-- removed extension for substance batch -->
                        <!--extension url=&quot;http://accumulus.org/fhir/extension/batchSubstanceBatch&quot;>
                    		<valueReference>
                    			<reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                    		</valueReference>                   
                    	</extension-->
                        <extension url=&quot;manufacturingDate&quot;>
                            <valueDateTime value=&quot;2020-06&quot;/>
                        </extension>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-date-dxpq&quot;>
                            <valueDateTime value=&quot;2020-08&quot;/>
                        </extension>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-site-dxpq&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/packaging&quot;/>
                            </valueReference>
                        </extension>
                        <extension url=&quot;batchQuantity&quot;>
                            <valueQuantity>
                                <value value=&quot;100125&quot;/>
                                <unit value=&quot;tablets&quot;/>
                            </valueQuantity>
                        </extension>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-dxpq&quot;>
                            <valueQuantity>
                                <value value=&quot;4.8&quot;/>
                                <unit value=&quot;kg&quot;/>
                            </valueQuantity>
                        </extension>
                        <extension url=&quot;batchUtilization&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/pqcmc-batch-utilization-terminology&quot;/>
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
                        </extension>">Manufacturing</span><div><span title="
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
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-dxpq&quot;>
                            <valueDateTime value=&quot;2019-09-08&quot;>">Release Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-dxpq&quot;>
                            <valueDateTime value=&quot;2019-09-08&quot;>">2019-09-08</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-date-dxpq&quot;>
                            <valueDateTime value=&quot;2020-08&quot;>">Packaging Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-date-dxpq&quot;>
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
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-dxpq&quot;>
                            <valueQuantity>
                                <value value=&quot;4.8&quot;/>
                                <unit value=&quot;kg&quot;/>">Actual Yield: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-dxpq&quot;>
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
                                    <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/pqcmc-batch-utilization-terminology&quot;/>
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
                        <extension url=&quot;batchUtilization&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/pqcmc-batch-utilization-terminology&quot;/>
                                    <code value=&quot;C185328&quot;/>
                                    <display value=&quot;Stability Study&quot;/>">Stability Study<span class="greyOff"> [C185328]</span><span class="greyOff"> (http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/pqcmc-batch-utilization-terminology)</span></span><span style="white-space:normal;"> - Text: PPQ / Stability</span></div><div class="indent medl4"><span title="
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
                                <valueString value=&quot;100 cc HDPE Bottle 2 g desiccant&quot;/>">Closure System: </span><span>100 cc HDPE Bottle 2 g desiccant</span></div></div><div></div><span><span title="
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
                        <country value=&quot;USA&quot;>">USA</span></div></div></div></div></span><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        ...
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-packaging-site-dxpq&quot;>
                            <valueReference>
                                <reference value=&quot;Organization/packaging&quot;/>
                            </valueReference>">Packager</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-2 fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Medication/valueReference, id: medication-actual-batch-3 fullUrl: urn:uuid:c6f5fadd-62e6-3a01-93d9-b3b182f67d06)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: packaging)(fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b07)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <id value=&quot;packaging&quot;/>
                <name value=&quot;MySite&quot;/>" id="Organization-packaging">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/organization.html#tt-uml">R6</a>]</span><div class="debugOff">id: packaging</div><div class="debugOff"> fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b07</div><span class="summaryShowsOff"> - MySite</span><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;MySite&quot;>">Name: </span><span>MySite</span></div></div></div></span></div></div></div></div></div>
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
<style onLoad="resolveGlobalLinksThatCanBeLocal();">

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
			var nodes = document.querySelectorAll(".summaryUnit");
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

		function resolveGlobalLinksThatCanBeLocal()
		{
			var nodes = document.querySelectorAll('.external-link');
			for (var i=0; i < nodes.length; i++) {
				var node = nodes[i];
				var href = node.href;
   				var urlPath = href.split('?url=').pop();
   				if (urlPath != href) {
   					var localId = node.getAttribute("localLink");
	   				var localElement = document.getElementById(localId);
	   				if (localElement) { 	   					// replace global href with local one if it exists (doesn't check if it is a true global link)
	   					node.href= '#' + localId;
	   					node.removeAttribute("localLink");
	   					node.removeAttribute("class"); // remove the external-link class
	   					node.title = node.title.replace(" (via server)"," (in page)");
	   				}
			   	 }
    			}
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
		First resource in bundle:Medication
		Single resource bundle:false
		Single resource bundle Not Patient Or Bundle:false
		Single resource Not Patient:false
		Patient document:false
		General Bundle:false
		Not patient related:true
		=>Patient Centric Mode:false
		SubstanceDef Centric Mode:false
		Assumed profile:--></html>
