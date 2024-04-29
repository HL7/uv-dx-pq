The HTML rendering below shows a synthetic Quality data example for Common Technical Document (CTD) Module 3: Quality, section 3.2.S.4 Control of Drug Substance, subsection 3.2.S.4.4 Batch Analyses.
<html>
<body>
<div class="divBody">
<p>
						This is the same data as in the example files here in <a href="Bundle-bundle-drug-substance-batch-info-pq-ex1.xml.html">xml</a> and in <a href="Bundle-bundle-drug-substance-batch-info-pq-ex1.json.html">json</a>, presented for easier viewing.
						Hovering on words below will show the corresponding sections of the underlying data.
					</p>
</div>
<div class="greyable">
<div class="divBody">
<div style="position:relative" class="summaryUnit">
<div class="debugOffBorder">
<div class="bundleBorder">
<div class="debugOff">
<div class="bundle"><a class="plainLink"><span class="bold" title="Bundle (id: bundle-drug-substance-batch-info-pq-ex1)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-drug-substance-batch-info-pq 

<Bundle>
    <id value=&quot;bundle-drug-substance-batch-info-pq-ex1&quot;/>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-drug-substance-batch-info-pq&quot;/>
    </meta>
    <type value=&quot;collection&quot;/>
    <entry>
        <fullUrl value=&quot;urn:uuid:8dae93e0-048d-35a4-71ea-7c603184a130&quot;/>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;substance1&quot;/>
                <manufacturer>
                    <reference value=&quot;Organization/substance-manufacturer&quot;/>
                </manufacturer>
                <name>
                    <name value=&quot;Stelbatolol&quot;/>
                </name>
            </SubstanceDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:3d399cbc-244e-9b5f-838b-b7daa0489330&quot;/>
        <resource>
            <Organization>
                <id value=&quot;substance-manufacturer&quot;/>
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3003040516&quot;/>
                </identifier>
                <active value=&quot;true&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;drug-substance-manufacture&quot;/>
                        <display value=&quot;Drug Substance Manufacture&quot;/>
                    </coding>
                </type>
                <name value=&quot;AAA Molybdenum Products, Inc.&quot;/>
                <contact>
                    <address>
                        <line value=&quot;7233 W 116th Pl&quot;/>
                        <line value=&quot;Ste C&quot;/>
                        <city value=&quot;Broomfield&quot;/>
                        <state value=&quot;Colorado&quot;/>
                        <postalCode value=&quot;80020&quot;/>
                        <country value=&quot;USA&quot;/>
                    </address>
                </contact>
            </Organization>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:87ef899b-14dd-26b7-7416-7ec1d01b62a1&quot;/>
        <resource>
            <Substance>
                <id value=&quot;substance-dxpq-ex1&quot;/>
                <!-- was actual-batch-substance -->
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2020-01&quot;/>
                    </extension>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;120&quot;/>
                            <unit value=&quot;kg&quot;/>
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;batchUtilization&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl&quot;/>
                                <code value=&quot;C133990&quot;/>
                                <display value=&quot;Commercial&quot;/>
                            </coding>
                            <text value=&quot;Production&quot;/>
                        </valueCodeableConcept>
                    </extension>
                    <extension url=&quot;assignedManufacturer&quot;>
                        <valueReference>
                            <reference value=&quot;Organization/substance-manufacturer&quot;/>
                        </valueReference>
                    </extension>
                </extension>
                <!-- local extensions -->
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-pq&quot;>
                    <valueDateTime value=&quot;2019-09-08&quot;/>
                </extension>
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-retest-date-pq&quot;>
                    <valueDateTime value=&quot;2022-09-08&quot;/>
                </extension>
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-process-pq&quot;>
                    <valueReference>
                        <display value=&quot;Process 1.1&quot;/>
                    </valueReference>
                </extension>
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-pq&quot;>
                    <valueQuantity>
                        <value value=&quot;4.8&quot;/>
                        <unit value=&quot;kg&quot;/>
                    </valueQuantity>
                </extension>
                <identifier>
                    <value value=&quot;CAT1&quot;/>
                </identifier>
                <instance value=&quot;true&quot;/>
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/substance1&quot;/>
                    </reference>
                </code>
            </Substance>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:6412c5d4-1b7d-8405-85dc-75dbaa300ea4&quot;/>
        <resource>
            <Substance>
                <id value=&quot;actual-batch-substance-2&quot;/>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2020-02&quot;/>
                    </extension>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;120&quot;/>
                            <unit value=&quot;kg&quot;/>
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;batchUtilization&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl&quot;/>
                                <code value=&quot;C133990&quot;/>
                                <display value=&quot;Commercial&quot;/>
                            </coding>
                            <text value=&quot;Production&quot;/>
                        </valueCodeableConcept>
                    </extension>
                    <extension url=&quot;assignedManufacturer&quot;>
                        <valueReference>
                            <reference value=&quot;Organization/substance-manufacturer&quot;/>
                        </valueReference>
                    </extension>
                </extension>
                <!-- local extensions -->
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-pq&quot;>
                    <valueDateTime value=&quot;2019-09-08&quot;/>
                </extension>
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-retest-date-pq&quot;>
                    <valueDateTime value=&quot;2022-09-08&quot;/>
                </extension>
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-pq&quot;>
                    <valueQuantity>
                        <value value=&quot;4.8&quot;/>
                        <unit value=&quot;kg&quot;/>
                    </valueQuantity>
                </extension>
                <identifier>
                    <value value=&quot;CAT2&quot;/>
                </identifier>
                <instance value=&quot;true&quot;/>
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/substance1&quot;/>
                    </reference>
                </code>
            </Substance>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:ef17cff1-6586-a4a4-9168-2602140548d7&quot;/>
        <resource>
            <Substance>
                <id value=&quot;actual-batch-substance-3&quot;/>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2020-03&quot;/>
                    </extension>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;120&quot;/>
                            <unit value=&quot;kg&quot;/>
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;batchUtilization&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl&quot;/>
                                <code value=&quot;C133990&quot;/>
                                <display value=&quot;Commercial&quot;/>
                            </coding>
                            <text value=&quot;Production&quot;/>
                        </valueCodeableConcept>
                    </extension>
                    <extension url=&quot;assignedManufacturer&quot;>
                        <valueReference>
                            <reference value=&quot;Organization/substance-manufacturer&quot;/>
                        </valueReference>
                    </extension>
                </extension>
                <!-- local extensions -->
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-pq&quot;>
                    <valueDateTime value=&quot;2019-09-08&quot;/>
                </extension>
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-retest-date-pq&quot;>
                    <valueDateTime value=&quot;2022-09-08&quot;/>
                </extension>
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-pq&quot;>
                    <valueQuantity>
                        <value value=&quot;4.8&quot;/>
                        <unit value=&quot;kg&quot;/>
                    </valueQuantity>
                </extension>
                <identifier>
                    <value value=&quot;CAT3&quot;/>
                </identifier>
                <instance value=&quot;true&quot;/>
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/substance1&quot;/>
                    </reference>
                </code>
            </Substance>
        </resource>
    </entry>" id="Bundle-bundle-drug-substance-batch-info-pq-ex1">Bundle</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/bundle.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/bundle.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/bundle.html#tt-uml">R6</a>]</span><div class="debugOff">id: bundle-drug-substance-batch-info-pq-ex1</div>
<div class="debugOff"></div>
<div class="debugOff"><span title="
<Bundle>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-drug-substance-batch-info-pq&quot;>">Profile: </span><span title="
<Bundle>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-drug-substance-batch-info-pq&quot;>">http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-drug-substance-batch-info-pq</span></div>
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
<div class="org indent"><span class="bold">Batch Information - Substance, on Stelbatolol</span><br><br style="line-height:6px;"></div>
<div class="org indent"><span class="bold">Subjects of Batch Information</span><br><br style="line-height:6px;"><div class="indent sbd summaryUnit">
<div class="debugOff"><span>Found a parent (Substance/code, id: substance-dxpq-ex1 fullUrl: urn:uuid:87ef899b-14dd-26b7-7416-7ec1d01b62a1)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Substance/code, id: actual-batch-substance-2 fullUrl: urn:uuid:6412c5d4-1b7d-8405-85dc-75dbaa300ea4)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Substance/code, id: actual-batch-substance-3 fullUrl: urn:uuid:ef17cff1-6586-a4a4-9168-2602140548d7)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: substance1)(fullUrl: urn:uuid:8dae93e0-048d-35a4-71ea-7c603184a130)

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;substance1&quot;/>
                <manufacturer>
                    <reference value=&quot;Organization/substance-manufacturer&quot;/>
                </manufacturer>
                <name>
                    <name value=&quot;Stelbatolol&quot;/>
                </name>" id="SubstanceDefinition-substance1">Substance</span></a><span class="summaryShowsOff"><b> - Stelbatolol</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substancedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: substance1</div>
<div class="debugOff"> fullUrl: urn:uuid:8dae93e0-048d-35a4-71ea-7c603184a130</div>
<div class="summaryHiddenOff">
<div class="indent sbddetails">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <name>
                    <name value=&quot;Stelbatolol&quot;>">Name: </span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <name>
                    <name value=&quot;Stelbatolol&quot;>"><span>Stelbatolol</span></span></div>
</div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff">
<div class="indent sbddetails2"><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                ...
                <manufacturer>
                    <reference value=&quot;Organization/substance-manufacturer&quot;/>">Manufacturer</span><div class="indent org summaryUnit">
<div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: substance1 fullUrl: urn:uuid:8dae93e0-048d-35a4-71ea-7c603184a130)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Substance/valueReference, id: substance-dxpq-ex1 fullUrl: urn:uuid:87ef899b-14dd-26b7-7416-7ec1d01b62a1)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Substance/valueReference, id: actual-batch-substance-2 fullUrl: urn:uuid:6412c5d4-1b7d-8405-85dc-75dbaa300ea4)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Substance/valueReference, id: actual-batch-substance-3 fullUrl: urn:uuid:ef17cff1-6586-a4a4-9168-2602140548d7)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: substance-manufacturer)(fullUrl: urn:uuid:3d399cbc-244e-9b5f-838b-b7daa0489330)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <id value=&quot;substance-manufacturer&quot;/>
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3003040516&quot;/>
                </identifier>
                <active value=&quot;true&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;drug-substance-manufacture&quot;/>
                        <display value=&quot;Drug Substance Manufacture&quot;/>
                    </coding>
                </type>
                <name value=&quot;AAA Molybdenum Products, Inc.&quot;/>
                <contact>
                    <address>
                        <line value=&quot;7233 W 116th Pl&quot;/>
                        <line value=&quot;Ste C&quot;/>
                        <city value=&quot;Broomfield&quot;/>
                        <state value=&quot;Colorado&quot;/>
                        <postalCode value=&quot;80020&quot;/>
                        <country value=&quot;USA&quot;/>
                    </address>
                </contact>" id="Organization-substance-manufacturer">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/organization.html#tt-uml">R6</a>]</span><div class="debugOff">id: substance-manufacturer</div>
<div class="debugOff"> fullUrl: urn:uuid:3d399cbc-244e-9b5f-838b-b7daa0489330</div><span class="summaryShowsOff"> - AAA Molybdenum Products, Inc.</span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3003040516&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3003040516&quot;/>">3003040516<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span></div>
<div class="debugOff"><span title="
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
                <active value=&quot;true&quot;>"><span>true</span></span></div>
</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;AAA Molybdenum Products, Inc.&quot;>">Name: </span><span>AAA Molybdenum Products, Inc.</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;drug-substance-manufacture&quot;/>
                        <display value=&quot;Drug Substance Manufacture&quot;/>
                    </coding>">Type: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;drug-substance-manufacture&quot;/>
                        <display value=&quot;Drug Substance Manufacture&quot;/>">Drug Substance Manufacture<span class="greyOff"> [drug-substance-manufacture]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type)</span></span></div>
<div class="indent org2">
					Contact
					<div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;7233 W 116th Pl&quot;/>
                        <line value=&quot;Ste C&quot;/>
                        <city value=&quot;Broomfield&quot;/>
                        <state value=&quot;Colorado&quot;/>
                        <postalCode value=&quot;80020&quot;/>
                        <country value=&quot;USA&quot;/>">Address: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;7233 W 116th Pl&quot;>">7233 W 116th Pl</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <line value=&quot;Ste C&quot;>">Ste C</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <city value=&quot;Broomfield&quot;>">Broomfield</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <state value=&quot;Colorado&quot;>">Colorado</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <postalCode value=&quot;80020&quot;>">80020</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <country value=&quot;USA&quot;>">USA</span></div>
</div>
</div>
</div>
</div>
</div>
<div class="summaryHiddenOff"></div>
<div class="indent sbddetails"><span title="Substance resource extension linking back to SubstanceDefinition: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-pq">Batch Instance</span><div class="indent sbd summaryUnit"><a class="plainLink"><span class="bold" title="Substance (id: substance-dxpq-ex1)(fullUrl: urn:uuid:87ef899b-14dd-26b7-7416-7ec1d01b62a1)

<Bundle>
    <entry>
        <resource>
            <Substance>
                <id value=&quot;substance-dxpq-ex1&quot;/>
                <!-- was actual-batch-substance -->
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2020-01&quot;/>
                    </extension>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;120&quot;/>
                            <unit value=&quot;kg&quot;/>
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;batchUtilization&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl&quot;/>
                                <code value=&quot;C133990&quot;/>
                                <display value=&quot;Commercial&quot;/>
                            </coding>
                            <text value=&quot;Production&quot;/>
                        </valueCodeableConcept>
                    </extension>
                    <extension url=&quot;assignedManufacturer&quot;>
                        <valueReference>
                            <reference value=&quot;Organization/substance-manufacturer&quot;/>
                        </valueReference>
                    </extension>
                </extension>
                <!-- local extensions -->
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-pq&quot;>
                    <valueDateTime value=&quot;2019-09-08&quot;/>
                </extension>
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-retest-date-pq&quot;>
                    <valueDateTime value=&quot;2022-09-08&quot;/>
                </extension>
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-process-pq&quot;>
                    <valueReference>
                        <display value=&quot;Process 1.1&quot;/>
                    </valueReference>
                </extension>
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-pq&quot;>
                    <valueQuantity>
                        <value value=&quot;4.8&quot;/>
                        <unit value=&quot;kg&quot;/>
                    </valueQuantity>
                </extension>
                <identifier>
                    <value value=&quot;CAT1&quot;/>
                </identifier>
                <instance value=&quot;true&quot;/>
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/substance1&quot;/>
                    </reference>
                </code>" id="Substance-substance-dxpq-ex1">Substance</span></a><span class="summaryShowsOff"><b> - CAT1</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substance.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substance.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substance.html#tt-uml">R6</a>]</span><div class="debugOff">id: substance-dxpq-ex1</div><div class="debugOff"> fullUrl: urn:uuid:87ef899b-14dd-26b7-7416-7ec1d01b62a1</div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <instance value=&quot;true&quot;>">Instance: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <instance value=&quot;true&quot;>"><span>true</span></span></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;CAT1&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;CAT1&quot;/>">CAT1</span></div><div><div class="indent sbddetails"><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/substance1&quot;/>
                    </reference>">Definition: </span>Stelbatolol (<a href="#SubstanceDefinition-substance1" title="click to see target - id=substance1">SubstanceDefinition</a>)<span class="debugOff"> id: substance1</span></span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2020-01&quot;/>
                    </extension>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;120&quot;/>
                            <unit value=&quot;kg&quot;/>
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;batchUtilization&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl&quot;/>
                                <code value=&quot;C133990&quot;/>
                                <display value=&quot;Commercial&quot;/>
                            </coding>
                            <text value=&quot;Production&quot;/>
                        </valueCodeableConcept>
                    </extension>
                    <extension url=&quot;assignedManufacturer&quot;>
                        <valueReference>
                            <reference value=&quot;Organization/substance-manufacturer&quot;/>
                        </valueReference>
                    </extension>">Manufacturing</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2020-01&quot;>">Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2020-01&quot;>">2020-01</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-pq&quot;>
                    <valueDateTime value=&quot;2019-09-08&quot;>">Release Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-pq&quot;>
                    <valueDateTime value=&quot;2019-09-08&quot;>">2019-09-08</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-retest-date-pq&quot;>
                    <valueDateTime value=&quot;2022-09-08&quot;>">Retest Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-retest-date-pq&quot;>
                    <valueDateTime value=&quot;2022-09-08&quot;>">2022-09-08</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;120&quot;/>
                            <unit value=&quot;kg&quot;/>">Quantity: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;120&quot;/>
                            <unit value=&quot;kg&quot;/>">120 kg</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-pq&quot;>
                    <valueQuantity>
                        <value value=&quot;4.8&quot;/>
                        <unit value=&quot;kg&quot;/>">Actual Yield: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-pq&quot;>
                    <valueQuantity>
                        <value value=&quot;4.8&quot;/>
                        <unit value=&quot;kg&quot;/>">4.8 kg</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    ...
                    <extension url=&quot;batchUtilization&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl&quot;/>
                                <code value=&quot;C133990&quot;/>
                                <display value=&quot;Commercial&quot;/>
                            </coding>
                            <text value=&quot;Production&quot;/>
                        </valueCodeableConcept>">Utilization: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    ...
                    <extension url=&quot;batchUtilization&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl&quot;/>
                                <code value=&quot;C133990&quot;/>
                                <display value=&quot;Commercial&quot;/>
                            </coding>
                            <text value=&quot;Production&quot;/>
                        </valueCodeableConcept>"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchUtilization&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl&quot;/>
                                <code value=&quot;C133990&quot;/>
                                <display value=&quot;Commercial&quot;/>">Commercial<span class="greyOff"> [C133990]</span><span class="greyOff"> (http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl)</span></span><span style="white-space:normal;"> - Text: Production</span></span></div><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    ...
                    <extension url=&quot;assignedManufacturer&quot;>
                        <valueReference>
                            <reference value=&quot;Organization/substance-manufacturer&quot;/>
                        </valueReference>">Manufacturer</span><div class="indent org summaryUnit"><div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: substance1 fullUrl: urn:uuid:8dae93e0-048d-35a4-71ea-7c603184a130)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Substance/valueReference, id: substance-dxpq-ex1 fullUrl: urn:uuid:87ef899b-14dd-26b7-7416-7ec1d01b62a1)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Substance/valueReference, id: actual-batch-substance-2 fullUrl: urn:uuid:6412c5d4-1b7d-8405-85dc-75dbaa300ea4)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Substance/valueReference, id: actual-batch-substance-3 fullUrl: urn:uuid:ef17cff1-6586-a4a4-9168-2602140548d7)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: substance-manufacturer)(fullUrl: urn:uuid:3d399cbc-244e-9b5f-838b-b7daa0489330)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <id value=&quot;substance-manufacturer&quot;/>
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3003040516&quot;/>
                </identifier>
                <active value=&quot;true&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;drug-substance-manufacture&quot;/>
                        <display value=&quot;Drug Substance Manufacture&quot;/>
                    </coding>
                </type>
                <name value=&quot;AAA Molybdenum Products, Inc.&quot;/>
                <contact>
                    <address>
                        <line value=&quot;7233 W 116th Pl&quot;/>
                        <line value=&quot;Ste C&quot;/>
                        <city value=&quot;Broomfield&quot;/>
                        <state value=&quot;Colorado&quot;/>
                        <postalCode value=&quot;80020&quot;/>
                        <country value=&quot;USA&quot;/>
                    </address>
                </contact>" id="Organization-substance-manufacturer">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/organization.html#tt-uml">R6</a>]</span><div class="debugOff">id: substance-manufacturer</div><div class="debugOff"> fullUrl: urn:uuid:3d399cbc-244e-9b5f-838b-b7daa0489330</div><span class="summaryShowsOff"> - AAA Molybdenum Products, Inc.</span><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3003040516&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3003040516&quot;/>">3003040516<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span></div><div class="debugOff"><span title="
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
                <name value=&quot;AAA Molybdenum Products, Inc.&quot;>">Name: </span><span>AAA Molybdenum Products, Inc.</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;drug-substance-manufacture&quot;/>
                        <display value=&quot;Drug Substance Manufacture&quot;/>
                    </coding>">Type: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;drug-substance-manufacture&quot;/>
                        <display value=&quot;Drug Substance Manufacture&quot;/>">Drug Substance Manufacture<span class="greyOff"> [drug-substance-manufacture]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type)</span></span></div><div class="indent org2">
					Contact
					<div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;7233 W 116th Pl&quot;/>
                        <line value=&quot;Ste C&quot;/>
                        <city value=&quot;Broomfield&quot;/>
                        <state value=&quot;Colorado&quot;/>
                        <postalCode value=&quot;80020&quot;/>
                        <country value=&quot;USA&quot;/>">Address: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;7233 W 116th Pl&quot;>">7233 W 116th Pl</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <line value=&quot;Ste C&quot;>">Ste C</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <city value=&quot;Broomfield&quot;>">Broomfield</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <state value=&quot;Colorado&quot;>">Colorado</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <postalCode value=&quot;80020&quot;>">80020</span>, <span title="
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
            <Substance>
                ...
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-process-pq&quot;>
                    <valueReference>
                        <display value=&quot;Process 1.1&quot;/>
                    </valueReference>">Manufacturing Process</span><div><div class="indent org"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-process-pq&quot;>
                    <valueReference>
                        <display value=&quot;Process 1.1&quot;>">Display: Process 1.1</span></div></div></span></div></div><div class="indent sbd summaryUnit"><a class="plainLink"><span class="bold" title="Substance (id: actual-batch-substance-2)(fullUrl: urn:uuid:6412c5d4-1b7d-8405-85dc-75dbaa300ea4)

<Bundle>
    <entry>
        <resource>
            <Substance>
                <id value=&quot;actual-batch-substance-2&quot;/>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2020-02&quot;/>
                    </extension>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;120&quot;/>
                            <unit value=&quot;kg&quot;/>
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;batchUtilization&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl&quot;/>
                                <code value=&quot;C133990&quot;/>
                                <display value=&quot;Commercial&quot;/>
                            </coding>
                            <text value=&quot;Production&quot;/>
                        </valueCodeableConcept>
                    </extension>
                    <extension url=&quot;assignedManufacturer&quot;>
                        <valueReference>
                            <reference value=&quot;Organization/substance-manufacturer&quot;/>
                        </valueReference>
                    </extension>
                </extension>
                <!-- local extensions -->
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-pq&quot;>
                    <valueDateTime value=&quot;2019-09-08&quot;/>
                </extension>
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-retest-date-pq&quot;>
                    <valueDateTime value=&quot;2022-09-08&quot;/>
                </extension>
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-pq&quot;>
                    <valueQuantity>
                        <value value=&quot;4.8&quot;/>
                        <unit value=&quot;kg&quot;/>
                    </valueQuantity>
                </extension>
                <identifier>
                    <value value=&quot;CAT2&quot;/>
                </identifier>
                <instance value=&quot;true&quot;/>
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/substance1&quot;/>
                    </reference>
                </code>" id="Substance-actual-batch-substance-2">Substance</span></a><span class="summaryShowsOff"><b> - CAT2</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substance.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substance.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substance.html#tt-uml">R6</a>]</span><div class="debugOff">id: actual-batch-substance-2</div><div class="debugOff"> fullUrl: urn:uuid:6412c5d4-1b7d-8405-85dc-75dbaa300ea4</div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <instance value=&quot;true&quot;>">Instance: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <instance value=&quot;true&quot;>"><span>true</span></span></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;CAT2&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;CAT2&quot;/>">CAT2</span></div><div><div class="indent sbddetails"><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/substance1&quot;/>
                    </reference>">Definition: </span>Stelbatolol (<a href="#SubstanceDefinition-substance1" title="click to see target - id=substance1">SubstanceDefinition</a>)<span class="debugOff"> id: substance1</span></span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2020-02&quot;/>
                    </extension>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;120&quot;/>
                            <unit value=&quot;kg&quot;/>
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;batchUtilization&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl&quot;/>
                                <code value=&quot;C133990&quot;/>
                                <display value=&quot;Commercial&quot;/>
                            </coding>
                            <text value=&quot;Production&quot;/>
                        </valueCodeableConcept>
                    </extension>
                    <extension url=&quot;assignedManufacturer&quot;>
                        <valueReference>
                            <reference value=&quot;Organization/substance-manufacturer&quot;/>
                        </valueReference>
                    </extension>">Manufacturing</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2020-02&quot;>">Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2020-02&quot;>">2020-02</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-pq&quot;>
                    <valueDateTime value=&quot;2019-09-08&quot;>">Release Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-pq&quot;>
                    <valueDateTime value=&quot;2019-09-08&quot;>">2019-09-08</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-retest-date-pq&quot;>
                    <valueDateTime value=&quot;2022-09-08&quot;>">Retest Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-retest-date-pq&quot;>
                    <valueDateTime value=&quot;2022-09-08&quot;>">2022-09-08</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;120&quot;/>
                            <unit value=&quot;kg&quot;/>">Quantity: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;120&quot;/>
                            <unit value=&quot;kg&quot;/>">120 kg</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-pq&quot;>
                    <valueQuantity>
                        <value value=&quot;4.8&quot;/>
                        <unit value=&quot;kg&quot;/>">Actual Yield: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-pq&quot;>
                    <valueQuantity>
                        <value value=&quot;4.8&quot;/>
                        <unit value=&quot;kg&quot;/>">4.8 kg</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    ...
                    <extension url=&quot;batchUtilization&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl&quot;/>
                                <code value=&quot;C133990&quot;/>
                                <display value=&quot;Commercial&quot;/>
                            </coding>
                            <text value=&quot;Production&quot;/>
                        </valueCodeableConcept>">Utilization: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    ...
                    <extension url=&quot;batchUtilization&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl&quot;/>
                                <code value=&quot;C133990&quot;/>
                                <display value=&quot;Commercial&quot;/>
                            </coding>
                            <text value=&quot;Production&quot;/>
                        </valueCodeableConcept>"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchUtilization&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl&quot;/>
                                <code value=&quot;C133990&quot;/>
                                <display value=&quot;Commercial&quot;/>">Commercial<span class="greyOff"> [C133990]</span><span class="greyOff"> (http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl)</span></span><span style="white-space:normal;"> - Text: Production</span></span></div><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    ...
                    <extension url=&quot;assignedManufacturer&quot;>
                        <valueReference>
                            <reference value=&quot;Organization/substance-manufacturer&quot;/>
                        </valueReference>">Manufacturer</span><div class="indent org summaryUnit"><div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: substance1 fullUrl: urn:uuid:8dae93e0-048d-35a4-71ea-7c603184a130)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Substance/valueReference, id: substance-dxpq-ex1 fullUrl: urn:uuid:87ef899b-14dd-26b7-7416-7ec1d01b62a1)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Substance/valueReference, id: actual-batch-substance-2 fullUrl: urn:uuid:6412c5d4-1b7d-8405-85dc-75dbaa300ea4)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Substance/valueReference, id: actual-batch-substance-3 fullUrl: urn:uuid:ef17cff1-6586-a4a4-9168-2602140548d7)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: substance-manufacturer)(fullUrl: urn:uuid:3d399cbc-244e-9b5f-838b-b7daa0489330)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <id value=&quot;substance-manufacturer&quot;/>
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3003040516&quot;/>
                </identifier>
                <active value=&quot;true&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;drug-substance-manufacture&quot;/>
                        <display value=&quot;Drug Substance Manufacture&quot;/>
                    </coding>
                </type>
                <name value=&quot;AAA Molybdenum Products, Inc.&quot;/>
                <contact>
                    <address>
                        <line value=&quot;7233 W 116th Pl&quot;/>
                        <line value=&quot;Ste C&quot;/>
                        <city value=&quot;Broomfield&quot;/>
                        <state value=&quot;Colorado&quot;/>
                        <postalCode value=&quot;80020&quot;/>
                        <country value=&quot;USA&quot;/>
                    </address>
                </contact>" id="Organization-substance-manufacturer">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/organization.html#tt-uml">R6</a>]</span><div class="debugOff">id: substance-manufacturer</div><div class="debugOff"> fullUrl: urn:uuid:3d399cbc-244e-9b5f-838b-b7daa0489330</div><span class="summaryShowsOff"> - AAA Molybdenum Products, Inc.</span><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3003040516&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3003040516&quot;/>">3003040516<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span></div><div class="debugOff"><span title="
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
                <name value=&quot;AAA Molybdenum Products, Inc.&quot;>">Name: </span><span>AAA Molybdenum Products, Inc.</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;drug-substance-manufacture&quot;/>
                        <display value=&quot;Drug Substance Manufacture&quot;/>
                    </coding>">Type: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;drug-substance-manufacture&quot;/>
                        <display value=&quot;Drug Substance Manufacture&quot;/>">Drug Substance Manufacture<span class="greyOff"> [drug-substance-manufacture]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type)</span></span></div><div class="indent org2">
					Contact
					<div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;7233 W 116th Pl&quot;/>
                        <line value=&quot;Ste C&quot;/>
                        <city value=&quot;Broomfield&quot;/>
                        <state value=&quot;Colorado&quot;/>
                        <postalCode value=&quot;80020&quot;/>
                        <country value=&quot;USA&quot;/>">Address: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;7233 W 116th Pl&quot;>">7233 W 116th Pl</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <line value=&quot;Ste C&quot;>">Ste C</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <city value=&quot;Broomfield&quot;>">Broomfield</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <state value=&quot;Colorado&quot;>">Colorado</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <postalCode value=&quot;80020&quot;>">80020</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <country value=&quot;USA&quot;>">USA</span></div></div></div></div></span></div></div></div><div class="indent sbd summaryUnit"><a class="plainLink"><span class="bold" title="Substance (id: actual-batch-substance-3)(fullUrl: urn:uuid:ef17cff1-6586-a4a4-9168-2602140548d7)

<Bundle>
    <entry>
        <resource>
            <Substance>
                <id value=&quot;actual-batch-substance-3&quot;/>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2020-03&quot;/>
                    </extension>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;120&quot;/>
                            <unit value=&quot;kg&quot;/>
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;batchUtilization&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl&quot;/>
                                <code value=&quot;C133990&quot;/>
                                <display value=&quot;Commercial&quot;/>
                            </coding>
                            <text value=&quot;Production&quot;/>
                        </valueCodeableConcept>
                    </extension>
                    <extension url=&quot;assignedManufacturer&quot;>
                        <valueReference>
                            <reference value=&quot;Organization/substance-manufacturer&quot;/>
                        </valueReference>
                    </extension>
                </extension>
                <!-- local extensions -->
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-pq&quot;>
                    <valueDateTime value=&quot;2019-09-08&quot;/>
                </extension>
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-retest-date-pq&quot;>
                    <valueDateTime value=&quot;2022-09-08&quot;/>
                </extension>
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-pq&quot;>
                    <valueQuantity>
                        <value value=&quot;4.8&quot;/>
                        <unit value=&quot;kg&quot;/>
                    </valueQuantity>
                </extension>
                <identifier>
                    <value value=&quot;CAT3&quot;/>
                </identifier>
                <instance value=&quot;true&quot;/>
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/substance1&quot;/>
                    </reference>
                </code>" id="Substance-actual-batch-substance-3">Substance</span></a><span class="summaryShowsOff"><b> - CAT3</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substance.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substance.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substance.html#tt-uml">R6</a>]</span><div class="debugOff">id: actual-batch-substance-3</div><div class="debugOff"> fullUrl: urn:uuid:ef17cff1-6586-a4a4-9168-2602140548d7</div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <instance value=&quot;true&quot;>">Instance: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <instance value=&quot;true&quot;>"><span>true</span></span></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;CAT3&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;CAT3&quot;/>">CAT3</span></div><div><div class="indent sbddetails"><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/substance1&quot;/>
                    </reference>">Definition: </span>Stelbatolol (<a href="#SubstanceDefinition-substance1" title="click to see target - id=substance1">SubstanceDefinition</a>)<span class="debugOff"> id: substance1</span></span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2020-03&quot;/>
                    </extension>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;120&quot;/>
                            <unit value=&quot;kg&quot;/>
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;batchUtilization&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl&quot;/>
                                <code value=&quot;C133990&quot;/>
                                <display value=&quot;Commercial&quot;/>
                            </coding>
                            <text value=&quot;Production&quot;/>
                        </valueCodeableConcept>
                    </extension>
                    <extension url=&quot;assignedManufacturer&quot;>
                        <valueReference>
                            <reference value=&quot;Organization/substance-manufacturer&quot;/>
                        </valueReference>
                    </extension>">Manufacturing</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2020-03&quot;>">Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2020-03&quot;>">2020-03</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-pq&quot;>
                    <valueDateTime value=&quot;2019-09-08&quot;>">Release Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-pq&quot;>
                    <valueDateTime value=&quot;2019-09-08&quot;>">2019-09-08</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-retest-date-pq&quot;>
                    <valueDateTime value=&quot;2022-09-08&quot;>">Retest Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-retest-date-pq&quot;>
                    <valueDateTime value=&quot;2022-09-08&quot;>">2022-09-08</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;120&quot;/>
                            <unit value=&quot;kg&quot;/>">Quantity: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;120&quot;/>
                            <unit value=&quot;kg&quot;/>">120 kg</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-pq&quot;>
                    <valueQuantity>
                        <value value=&quot;4.8&quot;/>
                        <unit value=&quot;kg&quot;/>">Actual Yield: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-pq&quot;>
                    <valueQuantity>
                        <value value=&quot;4.8&quot;/>
                        <unit value=&quot;kg&quot;/>">4.8 kg</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    ...
                    <extension url=&quot;batchUtilization&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl&quot;/>
                                <code value=&quot;C133990&quot;/>
                                <display value=&quot;Commercial&quot;/>
                            </coding>
                            <text value=&quot;Production&quot;/>
                        </valueCodeableConcept>">Utilization: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    ...
                    <extension url=&quot;batchUtilization&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl&quot;/>
                                <code value=&quot;C133990&quot;/>
                                <display value=&quot;Commercial&quot;/>
                            </coding>
                            <text value=&quot;Production&quot;/>
                        </valueCodeableConcept>"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchUtilization&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl&quot;/>
                                <code value=&quot;C133990&quot;/>
                                <display value=&quot;Commercial&quot;/>">Commercial<span class="greyOff"> [C133990]</span><span class="greyOff"> (http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl)</span></span><span style="white-space:normal;"> - Text: Production</span></span></div><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    ...
                    <extension url=&quot;assignedManufacturer&quot;>
                        <valueReference>
                            <reference value=&quot;Organization/substance-manufacturer&quot;/>
                        </valueReference>">Manufacturer</span><div class="indent org summaryUnit"><div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: substance1 fullUrl: urn:uuid:8dae93e0-048d-35a4-71ea-7c603184a130)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Substance/valueReference, id: substance-dxpq-ex1 fullUrl: urn:uuid:87ef899b-14dd-26b7-7416-7ec1d01b62a1)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Substance/valueReference, id: actual-batch-substance-2 fullUrl: urn:uuid:6412c5d4-1b7d-8405-85dc-75dbaa300ea4)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Substance/valueReference, id: actual-batch-substance-3 fullUrl: urn:uuid:ef17cff1-6586-a4a4-9168-2602140548d7)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: substance-manufacturer)(fullUrl: urn:uuid:3d399cbc-244e-9b5f-838b-b7daa0489330)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <id value=&quot;substance-manufacturer&quot;/>
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3003040516&quot;/>
                </identifier>
                <active value=&quot;true&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;drug-substance-manufacture&quot;/>
                        <display value=&quot;Drug Substance Manufacture&quot;/>
                    </coding>
                </type>
                <name value=&quot;AAA Molybdenum Products, Inc.&quot;/>
                <contact>
                    <address>
                        <line value=&quot;7233 W 116th Pl&quot;/>
                        <line value=&quot;Ste C&quot;/>
                        <city value=&quot;Broomfield&quot;/>
                        <state value=&quot;Colorado&quot;/>
                        <postalCode value=&quot;80020&quot;/>
                        <country value=&quot;USA&quot;/>
                    </address>
                </contact>" id="Organization-substance-manufacturer">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/organization.html#tt-uml">R6</a>]</span><div class="debugOff">id: substance-manufacturer</div><div class="debugOff"> fullUrl: urn:uuid:3d399cbc-244e-9b5f-838b-b7daa0489330</div><span class="summaryShowsOff"> - AAA Molybdenum Products, Inc.</span><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3003040516&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3003040516&quot;/>">3003040516<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span></div><div class="debugOff"><span title="
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
                <name value=&quot;AAA Molybdenum Products, Inc.&quot;>">Name: </span><span>AAA Molybdenum Products, Inc.</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;drug-substance-manufacture&quot;/>
                        <display value=&quot;Drug Substance Manufacture&quot;/>
                    </coding>">Type: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;drug-substance-manufacture&quot;/>
                        <display value=&quot;Drug Substance Manufacture&quot;/>">Drug Substance Manufacture<span class="greyOff"> [drug-substance-manufacture]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type)</span></span></div><div class="indent org2">
					Contact
					<div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;7233 W 116th Pl&quot;/>
                        <line value=&quot;Ste C&quot;/>
                        <city value=&quot;Broomfield&quot;/>
                        <state value=&quot;Colorado&quot;/>
                        <postalCode value=&quot;80020&quot;/>
                        <country value=&quot;USA&quot;/>">Address: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        <line value=&quot;7233 W 116th Pl&quot;>">7233 W 116th Pl</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <line value=&quot;Ste C&quot;>">Ste C</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <city value=&quot;Broomfield&quot;>">Broomfield</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <state value=&quot;Colorado&quot;>">Colorado</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <postalCode value=&quot;80020&quot;>">80020</span>, <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <contact>
                    <address>
                        ...
                        <country value=&quot;USA&quot;>">USA</span></div></div></div></div></span></div></div></div>
</div>
<div class="summaryHiddenOff"></div>
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
		First resource in bundle:SubstanceDefinition
		Single resource bundle:false
		Single resource bundle Not Patient Or Bundle:false
		Single resource Not Patient:false
		Patient document:false
		General Bundle:false
		Not patient related:true
		=>Patient Centric Mode:false
		SubstanceDef Centric Mode:true
		Assumed profile:-->
</html>
