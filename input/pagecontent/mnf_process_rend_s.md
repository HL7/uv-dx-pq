The HTML rendering below shows a synthetic Quality data example for Common Technical Document (CTD) Module 3: Quality, section 3.2.S.2 Manufacture, subsection 3.2.S.2.2 Description of Manufacturing Process and Process Controls.
<html>
<body>
<div class="divBody">
<p>
						This is the same data as in the example files here in <a href="Bundle-bundle-product-manufacturing-pq-ex2-sub.xml.html">xml</a> and in <a href="Bundle-bundle-product-manufacturing-pq-ex2-sub.json.html">json</a>, presented for easier viewing.
						Hovering on words below will show the corresponding sections of the underlying data.
					</p>
</div>
<div class="greyable">
<div class="divBody">
<div style="position:relative" class="summaryUnit">
<div class="debugOffBorder">
<div class="bundleBorder">
<div class="debugOff">
<div class="bundle"><a class="plainLink"><span class="bold" title="Bundle (id: bundle-product-manufacturing-pq-ex2-sub)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-product-manufacturing-pq 

<Bundle>
    <id value=&quot;bundle-product-manufacturing-pq-ex2-sub&quot;/>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-product-manufacturing-pq&quot;/>
    </meta>
    <type value=&quot;collection&quot;/>
    <entry>
        <fullUrl value=&quot;urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a&quot;/>
        <resource>
            <PlanDefinition>
                <id value=&quot;manufacturingProcess-unlinked&quot;/>
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-plan-document-reference-pq&quot;>
                    <valueReference>
                        <!-- Process flow diagram -->
                        <!-- or could be a Binary -->
                        <reference value=&quot;DocumentReference/DocumentReference-process-flow-diagram-dxpq-ex1&quot;/>
                    </valueReference>
                </extension>
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-history-of-process-pq&quot;>
                    <valueMarkdown value=&quot;This can be text about the history&quot;/>
                </extension>
                <url value=&quot;http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-plan-type&quot;/>
                        <code value=&quot;manufacturing-process&quot;/>
                        <display value=&quot;Manufacturing Process&quot;/>
                    </coding>
                </type>
                <status value=&quot;active&quot;/>
                <subjectReference>
                    <reference value=&quot;SubstanceDefinition/substance1&quot;/>
                </subjectReference>
                <description value=&quot;Narrative description of substance manufacturing process&quot;/>
                <goal id=&quot;goal-control-pH&quot;>
                    <category>
                        <coding>
                            <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-test-category&quot;/>
                            <code value=&quot;C123456&quot;/>
                            <display value=&quot;Physical Property&quot;/>
                        </coding>
                    </category>
                    <description>
                        <text value=&quot;Controls - pH&quot;/>
                        <!-- this is mandatory, even though we don't really want it -->
                    </description>
                    <priority>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-goalPriority-pq-example&quot;/>
                            <code value=&quot;critical&quot;/>
                            <display value=&quot;Critical&quot;/>
                        </coding>
                    </priority>
                    <target>
                        <measure>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                                <code value=&quot;pH&quot;/>
                                <display value=&quot;pH&quot;/>
                            </coding>
                            <text value=&quot;Long description of the acceptance criteria - pH must be in range 6.9 to 7.1&quot;/>
                        </measure>
                        <!--detailString value=&quot;can also be a string&quot;-->
                        <detailRange>
                            <low>
                                <value value=&quot;6.9&quot;/>
                                <unit value=&quot;pH&quot;/>
                            </low>
                            <high>
                                <value value=&quot;7.1&quot;/>
                                <unit value=&quot;pH&quot;/>
                            </high>
                        </detailRange>
                    </target>
                </goal>
                <goal id=&quot;goal-control-temp&quot;>
                    <category>
                        <coding>
                            <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-test-category&quot;/>
                            <code value=&quot;C123456&quot;/>
                            <display value=&quot;Physical Property&quot;/>
                        </coding>
                    </category>
                    <description>
                        <text value=&quot;Controls - Temperature&quot;/>
                        <!-- this is mandatory, even though we don't really want it -->
                    </description>
                    <priority>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-goalPriority-pq-example&quot;/>
                            <code value=&quot;non-critical&quot;/>
                            <display value=&quot;Non-critical&quot;/>
                        </coding>
                    </priority>
                    <target>
                        <measure>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                                <code value=&quot;TEMP&quot;/>
                                <display value=&quot;Temperature&quot;/>
                            </coding>
                            <text value=&quot;Long description of the control value - Temperature must be below 150°C&quot;/>
                        </measure>
                        <!--detailString value=&quot;can also be a string&quot;-->
                        <detailRange>
                            <high>
                                <value value=&quot;150&quot;/>
                                <unit value=&quot;°C&quot;/>
                                <system value=&quot;http://unitsofmeasure.org&quot;/>
                                <code value=&quot;Cel&quot;/>
                            </high>
                        </detailRange>
                    </target>
                </goal>
                <!-- outer action is the whole thing, if needed -->
                <action>
                    <code>
                        <coding>
                            <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-step&quot;/>
                            <code value=&quot;overall process&quot;/>
                            <display value=&quot;Overall Process&quot;/>
                        </coding>
                        <text value=&quot;overall process&quot;/>
                    </code>
                    <action>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-step-scale-pq&quot;>
                            <valueCoding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-step-scale&quot;/>
                                <code value=&quot;PROD&quot;/>
                                <display value=&quot;Production Scale&quot;/>
                            </valueCoding>
                        </extension>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                            <extension url=&quot;parameter&quot;>
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                        <code value=&quot;SPEED&quot;/>
                                        <display value=&quot;Mix speed&quot;/>
                                    </coding>
                                </valueCodeableConcept>
                            </extension>
                            <extension url=&quot;value&quot;>
                                <valueQuantity>
                                    <value value=&quot;1500&quot;/>
                                    <unit value=&quot;rpm&quot;/>
                                </valueQuantity>
                            </extension>
                        </extension>
                        <prefix value=&quot;1&quot;/>
                        <description value=&quot;Description of this step&quot;/>
                        <code>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-step&quot;/>
                                <code value=&quot;particleSizeReduction&quot;/>
                                <display value=&quot;Particle Size Reduction&quot;/>
                            </coding>
                            <!--text value=&quot;Step 2 in the process - free text is possible&quot;/-->
                        </code>
                        <documentation>
                            <type value=&quot;specification-of&quot;/>
                            <resourceReference>
                                <reference value=&quot;DocumentReference/DocumentReference-image&quot;/>
                            </resourceReference>
                        </documentation>
                        <goalId value=&quot;goal-control-pH&quot;/>
                        <goalId value=&quot;goal-control-temp&quot;/>
                        <participant>
                            <typeReference>
                                <!-- this is new in R5 and is not in R4B -->
                                <reference value=&quot;DeviceDefinition/impeller&quot;/>
                            </typeReference>
                            <role>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-manufacturing-equipment-class&quot;/>
                                    <code value=&quot;Compression Milling&quot;/>
                                    <display value=&quot;Compression Milling&quot;/>
                                </coding>
                            </role>
                        </participant>
                        <participant>
                            <typeReference>
                                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                    <valueReference>
                                        <reference value=&quot;SubstanceDefinition/startingMaterial&quot;/>
                                    </valueReference>
                                </extension>
                                <display value=&quot;Starting Material&quot;/>
                                <!-- added to suppress warning caused by the lack of a true reference, due to it being in extension -->
                            </typeReference>
                            <role>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                    <code value=&quot;StartingMaterial&quot;/>
                                    <display value=&quot;Starting Material&quot;/>
                                </coding>
                            </role>
                        </participant>
                        <participant>
                            <typeReference>
                                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                    <valueReference>
                                        <reference value=&quot;SubstanceDefinition/processingMaterial&quot;/>
                                    </valueReference>
                                </extension>
                                <display value=&quot;Processing Material&quot;/>
                                <!-- added to suppress warning caused by the lack of a true reference, due to it being in extension -->
                            </typeReference>
                            <role>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                    <code value=&quot;ProcessingMaterial&quot;/>
                                    <display value=&quot;Processing Material&quot;/>
                                </coding>
                            </role>
                        </participant>
                        <participant>
                            <typeReference>
                                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                    <valueReference>
                                        <reference value=&quot;SubstanceDefinition/resultingMaterial&quot;/>
                                    </valueReference>
                                </extension>
                                <display value=&quot;Resulting Material&quot;/>
                                <!-- added to suppress warning caused by the lack of a true reference, due to it being in extension -->
                            </typeReference>
                            <role>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                    <code value=&quot;ResultingMaterial&quot;/>
                                    <display value=&quot;Resulting Material&quot;/>
                                </coding>
                            </role>
                        </participant>
                        <!--action>
                            <code>
                                <text value=&quot;Control&quot;/>
                            </code>
                            <definitionCanonical value=&quot;ObservationDefinition/ControlPH&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Control&quot;/>
                            </code>
                            <definitionCanonical value=&quot;ObservationDefinition/ControlTemperature&quot;/>
                        </action-->
                    </action>
                </action>
            </PlanDefinition>
        </resource>
    </entry>
    <!-- Section 5.2 - Unit Operation/Equipment Information -->
    <entry>
        <fullUrl value=&quot;urn:uuid:82a39a18-91cf-a19d-76c1-a9e8bad9494c&quot;/>
        <resource>
            <DeviceDefinition>
                <id value=&quot;impeller&quot;/>
                <deviceName>
                    <name value=&quot;Rotating Impeller with 1.5mm screen&quot;/>
                    <type value=&quot;registered-name&quot;/>
                </deviceName>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://terminology.hl7.org/CodeSystem/device-property&quot;/>
                            <code value=&quot;Maximum Speed&quot;/>
                            <display value=&quot;Maximum Speed&quot;/>
                        </coding>
                    </type>
                    <valueQuantity>
                        <value value=&quot;5000&quot;/>
                        <unit value=&quot;RPM&quot;/>
                    </valueQuantity>
                </property>
            </DeviceDefinition>
        </resource>
    </entry>
    <!-- Section 5.1 - Manufacturing Process Overview - Process Flow Diagram -->
    <entry>
        <fullUrl value=&quot;urn:uuid:74d4c070-6596-8252-8ad9-afa515a41feb&quot;/>
        <resource>
            <DocumentReference>
                <id value=&quot;DocumentReference-process-flow-diagram-dxpq-ex1&quot;/>
                <meta>
                    <versionId value=&quot;1&quot;/>
                    <lastUpdated value=&quot;2023-01-12T17:57:08.898+00:00&quot;/>
                    <source value=&quot;#n4xHiP0iat7deVDt&quot;/>
                </meta>
                <identifier>
                    <system value=&quot;http://example.org/fhir/identifier/document&quot;/>
                    <value value=&quot;FLOW-001&quot;/>
                </identifier>
                <status value=&quot;current&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/diagram-type&quot;/>
                        <code value=&quot;ProcessFlowDiagram&quot;/>
                        <display value=&quot;Process Flow Diagram&quot;/>
                    </coding>
                </type>
                <content>
                    <attachment>
                        <url value=&quot;https://example.org/docStore/flow-001&quot;/>
                    </attachment>
                </content>
            </DocumentReference>
        </resource>
    </entry>
    <!-- Section 5.1 - Manufacturing Process Overview - Process Flow Diagram -->
    <entry>
        <fullUrl value=&quot;urn:uuid:74d4c070-6596-8252-8ad9-afa515a41fef&quot;/>
        <resource>
            <DocumentReference>
                <id value=&quot;DocumentReference-image&quot;/>
                <status value=&quot;current&quot;/>
                <content>
                    <attachment>
                        <url value=&quot;https://www.accumulus.org/wp-content/uploads/2022/05/Accumulus_Logo_horizontal.png&quot;/>
                    </attachment>
                </content>
            </DocumentReference>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:c458791f-7cb8-428e-83f7-8a205f821152&quot;/>
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
        <fullUrl value=&quot;urn:uuid:9fe98cfa-9245-8313-0fc5-d15e613b5d6d&quot;/>
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
        <fullUrl value=&quot;urn:uuid:c458791f-7cb8-428e-83f7-8a205f821153&quot;/>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;startingMaterial&quot;/>
                <manufacturer>
                    <reference value=&quot;Organization/substance-manufacturer&quot;/>
                </manufacturer>
                <name>
                    <name value=&quot;Stelbatosubstance&quot;/>
                </name>
            </SubstanceDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:c458791f-7cb8-428e-83f7-8a205f821154&quot;/>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;resultingMaterial&quot;/>
                <name>
                    <name value=&quot;Resultothane&quot;/>
                </name>
            </SubstanceDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:c458791f-7cb8-428e-83f7-8a205f821155&quot;/>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;processingMaterial&quot;/>
                <manufacturer>
                    <reference value=&quot;Organization/substance-manufacturer&quot;/>
                </manufacturer>
                <name>
                    <name value=&quot;Processohol&quot;/>
                </name>
            </SubstanceDefinition>
        </resource>
    </entry>" id="Bundle-bundle-product-manufacturing-pq-ex2-sub">Bundle</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/bundle.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/bundle.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/bundle.html#tt-uml">R6</a>]</span><div class="debugOff">id: bundle-product-manufacturing-pq-ex2-sub</div>
<div class="debugOff"></div>
<div class="debugOff"><span title="
<Bundle>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-product-manufacturing-pq&quot;>">Profile: </span><span title="
<Bundle>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-product-manufacturing-pq&quot;>">http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-product-manufacturing-pq</span></div>
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
<div class="indent plan summaryUnit"><a class="plainLink"><span class="bold" title="PlanDefinition (id: manufacturingProcess-unlinked)(fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a)

<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <id value=&quot;manufacturingProcess-unlinked&quot;/>
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-plan-document-reference-pq&quot;>
                    <valueReference>
                        <!-- Process flow diagram -->
                        <!-- or could be a Binary -->
                        <reference value=&quot;DocumentReference/DocumentReference-process-flow-diagram-dxpq-ex1&quot;/>
                    </valueReference>
                </extension>
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-history-of-process-pq&quot;>
                    <valueMarkdown value=&quot;This can be text about the history&quot;/>
                </extension>
                <url value=&quot;http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-plan-type&quot;/>
                        <code value=&quot;manufacturing-process&quot;/>
                        <display value=&quot;Manufacturing Process&quot;/>
                    </coding>
                </type>
                <status value=&quot;active&quot;/>
                <subjectReference>
                    <reference value=&quot;SubstanceDefinition/substance1&quot;/>
                </subjectReference>
                <description value=&quot;Narrative description of substance manufacturing process&quot;/>
                <goal id=&quot;goal-control-pH&quot;>
                    <category>
                        <coding>
                            <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-test-category&quot;/>
                            <code value=&quot;C123456&quot;/>
                            <display value=&quot;Physical Property&quot;/>
                        </coding>
                    </category>
                    <description>
                        <text value=&quot;Controls - pH&quot;/>
                        <!-- this is mandatory, even though we don't really want it -->
                    </description>
                    <priority>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-goalPriority-pq-example&quot;/>
                            <code value=&quot;critical&quot;/>
                            <display value=&quot;Critical&quot;/>
                        </coding>
                    </priority>
                    <target>
                        <measure>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                                <code value=&quot;pH&quot;/>
                                <display value=&quot;pH&quot;/>
                            </coding>
                            <text value=&quot;Long description of the acceptance criteria - pH must be in range 6.9 to 7.1&quot;/>
                        </measure>
                        <!--detailString value=&quot;can also be a string&quot;-->
                        <detailRange>
                            <low>
                                <value value=&quot;6.9&quot;/>
                                <unit value=&quot;pH&quot;/>
                            </low>
                            <high>
                                <value value=&quot;7.1&quot;/>
                                <unit value=&quot;pH&quot;/>
                            </high>
                        </detailRange>
                    </target>
                </goal>
                <goal id=&quot;goal-control-temp&quot;>
                    <category>
                        <coding>
                            <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-test-category&quot;/>
                            <code value=&quot;C123456&quot;/>
                            <display value=&quot;Physical Property&quot;/>
                        </coding>
                    </category>
                    <description>
                        <text value=&quot;Controls - Temperature&quot;/>
                        <!-- this is mandatory, even though we don't really want it -->
                    </description>
                    <priority>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-goalPriority-pq-example&quot;/>
                            <code value=&quot;non-critical&quot;/>
                            <display value=&quot;Non-critical&quot;/>
                        </coding>
                    </priority>
                    <target>
                        <measure>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                                <code value=&quot;TEMP&quot;/>
                                <display value=&quot;Temperature&quot;/>
                            </coding>
                            <text value=&quot;Long description of the control value - Temperature must be below 150°C&quot;/>
                        </measure>
                        <!--detailString value=&quot;can also be a string&quot;-->
                        <detailRange>
                            <high>
                                <value value=&quot;150&quot;/>
                                <unit value=&quot;°C&quot;/>
                                <system value=&quot;http://unitsofmeasure.org&quot;/>
                                <code value=&quot;Cel&quot;/>
                            </high>
                        </detailRange>
                    </target>
                </goal>
                <!-- outer action is the whole thing, if needed -->
                <action>
                    <code>
                        <coding>
                            <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-step&quot;/>
                            <code value=&quot;overall process&quot;/>
                            <display value=&quot;Overall Process&quot;/>
                        </coding>
                        <text value=&quot;overall process&quot;/>
                    </code>
                    <action>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-step-scale-pq&quot;>
                            <valueCoding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-step-scale&quot;/>
                                <code value=&quot;PROD&quot;/>
                                <display value=&quot;Production Scale&quot;/>
                            </valueCoding>
                        </extension>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                            <extension url=&quot;parameter&quot;>
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                        <code value=&quot;SPEED&quot;/>
                                        <display value=&quot;Mix speed&quot;/>
                                    </coding>
                                </valueCodeableConcept>
                            </extension>
                            <extension url=&quot;value&quot;>
                                <valueQuantity>
                                    <value value=&quot;1500&quot;/>
                                    <unit value=&quot;rpm&quot;/>
                                </valueQuantity>
                            </extension>
                        </extension>
                        <prefix value=&quot;1&quot;/>
                        <description value=&quot;Description of this step&quot;/>
                        <code>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-step&quot;/>
                                <code value=&quot;particleSizeReduction&quot;/>
                                <display value=&quot;Particle Size Reduction&quot;/>
                            </coding>
                            <!--text value=&quot;Step 2 in the process - free text is possible&quot;/-->
                        </code>
                        <documentation>
                            <type value=&quot;specification-of&quot;/>
                            <resourceReference>
                                <reference value=&quot;DocumentReference/DocumentReference-image&quot;/>
                            </resourceReference>
                        </documentation>
                        <goalId value=&quot;goal-control-pH&quot;/>
                        <goalId value=&quot;goal-control-temp&quot;/>
                        <participant>
                            <typeReference>
                                <!-- this is new in R5 and is not in R4B -->
                                <reference value=&quot;DeviceDefinition/impeller&quot;/>
                            </typeReference>
                            <role>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-manufacturing-equipment-class&quot;/>
                                    <code value=&quot;Compression Milling&quot;/>
                                    <display value=&quot;Compression Milling&quot;/>
                                </coding>
                            </role>
                        </participant>
                        <participant>
                            <typeReference>
                                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                    <valueReference>
                                        <reference value=&quot;SubstanceDefinition/startingMaterial&quot;/>
                                    </valueReference>
                                </extension>
                                <display value=&quot;Starting Material&quot;/>
                                <!-- added to suppress warning caused by the lack of a true reference, due to it being in extension -->
                            </typeReference>
                            <role>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                    <code value=&quot;StartingMaterial&quot;/>
                                    <display value=&quot;Starting Material&quot;/>
                                </coding>
                            </role>
                        </participant>
                        <participant>
                            <typeReference>
                                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                    <valueReference>
                                        <reference value=&quot;SubstanceDefinition/processingMaterial&quot;/>
                                    </valueReference>
                                </extension>
                                <display value=&quot;Processing Material&quot;/>
                                <!-- added to suppress warning caused by the lack of a true reference, due to it being in extension -->
                            </typeReference>
                            <role>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                    <code value=&quot;ProcessingMaterial&quot;/>
                                    <display value=&quot;Processing Material&quot;/>
                                </coding>
                            </role>
                        </participant>
                        <participant>
                            <typeReference>
                                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                    <valueReference>
                                        <reference value=&quot;SubstanceDefinition/resultingMaterial&quot;/>
                                    </valueReference>
                                </extension>
                                <display value=&quot;Resulting Material&quot;/>
                                <!-- added to suppress warning caused by the lack of a true reference, due to it being in extension -->
                            </typeReference>
                            <role>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                    <code value=&quot;ResultingMaterial&quot;/>
                                    <display value=&quot;Resulting Material&quot;/>
                                </coding>
                            </role>
                        </participant>
                        <!--action>
                            <code>
                                <text value=&quot;Control&quot;/>
                            </code>
                            <definitionCanonical value=&quot;ObservationDefinition/ControlPH&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Control&quot;/>
                            </code>
                            <definitionCanonical value=&quot;ObservationDefinition/ControlTemperature&quot;/>
                        </action-->
                    </action>
                </action>" id="PlanDefinition-manufacturingProcess-unlinked">Plan</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/plandefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/plandefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/plandefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: manufacturingProcess-unlinked</div>
<div class="debugOff"> fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a</div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <description value=&quot;Narrative description of substance manufacturing process&quot;>">Description: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <description value=&quot;Narrative description of substance manufacturing process&quot;>">Narrative description of substance manufacturing process</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-plan-type&quot;/>
                        <code value=&quot;manufacturing-process&quot;/>
                        <display value=&quot;Manufacturing Process&quot;/>
                    </coding>">Type: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-plan-type&quot;/>
                        <code value=&quot;manufacturing-process&quot;/>
                        <display value=&quot;Manufacturing Process&quot;/>">Manufacturing Process<span class="greyOff"> [manufacturing-process]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/pharmaceutical-plan-type)</span></span></div>
<div class="summaryHiddenOff">
<div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <status value=&quot;active&quot;>">Status: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <status value=&quot;active&quot;>"><span>active</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-history-of-process-pq&quot;>
                    <valueMarkdown value=&quot;This can be text about the history&quot;/>">History: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-history-of-process-pq&quot;>
                    <valueMarkdown value=&quot;This can be text about the history&quot;/>"><span>This can be text about the history</span></span></div>
</div>
<div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <id value=&quot;manufacturingProcess-unlinked&quot;/>
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-plan-document-reference-pq&quot;>
                    <valueReference>
                        <!-- Process flow diagram -->
                        <!-- or could be a Binary -->
                        <reference value=&quot;DocumentReference/DocumentReference-process-flow-diagram-dxpq-ex1&quot;/>
                    </valueReference>
                </extension>
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-history-of-process-pq&quot;>
                    <valueMarkdown value=&quot;This can be text about the history&quot;/>
                </extension>
                <url value=&quot;http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-plan-type&quot;/>
                        <code value=&quot;manufacturing-process&quot;/>
                        <display value=&quot;Manufacturing Process&quot;/>
                    </coding>
                </type>
                <status value=&quot;active&quot;/>
                <subjectReference>
                    <reference value=&quot;SubstanceDefinition/substance1&quot;/>
                </subjectReference>
                <description value=&quot;Narrative description of substance manufacturing process&quot;/>
                <goal id=&quot;goal-control-pH&quot;>
                    <category>
                        <coding>
                            <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-test-category&quot;/>
                            <code value=&quot;C123456&quot;/>
                            <display value=&quot;Physical Property&quot;/>
                        </coding>
                    </category>
                    <description>
                        <text value=&quot;Controls - pH&quot;/>
                        <!-- this is mandatory, even though we don't really want it -->
                    </description>
                    <priority>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-goalPriority-pq-example&quot;/>
                            <code value=&quot;critical&quot;/>
                            <display value=&quot;Critical&quot;/>
                        </coding>
                    </priority>
                    <target>
                        <measure>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                                <code value=&quot;pH&quot;/>
                                <display value=&quot;pH&quot;/>
                            </coding>
                            <text value=&quot;Long description of the acceptance criteria - pH must be in range 6.9 to 7.1&quot;/>
                        </measure>
                        <!--detailString value=&quot;can also be a string&quot;-->
                        <detailRange>
                            <low>
                                <value value=&quot;6.9&quot;/>
                                <unit value=&quot;pH&quot;/>
                            </low>
                            <high>
                                <value value=&quot;7.1&quot;/>
                                <unit value=&quot;pH&quot;/>
                            </high>
                        </detailRange>
                    </target>
                </goal>
                <goal id=&quot;goal-control-temp&quot;>
                    <category>
                        <coding>
                            <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-test-category&quot;/>
                            <code value=&quot;C123456&quot;/>
                            <display value=&quot;Physical Property&quot;/>
                        </coding>
                    </category>
                    <description>
                        <text value=&quot;Controls - Temperature&quot;/>
                        <!-- this is mandatory, even though we don't really want it -->
                    </description>
                    <priority>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-goalPriority-pq-example&quot;/>
                            <code value=&quot;non-critical&quot;/>
                            <display value=&quot;Non-critical&quot;/>
                        </coding>
                    </priority>
                    <target>
                        <measure>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                                <code value=&quot;TEMP&quot;/>
                                <display value=&quot;Temperature&quot;/>
                            </coding>
                            <text value=&quot;Long description of the control value - Temperature must be below 150°C&quot;/>
                        </measure>
                        <!--detailString value=&quot;can also be a string&quot;-->
                        <detailRange>
                            <high>
                                <value value=&quot;150&quot;/>
                                <unit value=&quot;°C&quot;/>
                                <system value=&quot;http://unitsofmeasure.org&quot;/>
                                <code value=&quot;Cel&quot;/>
                            </high>
                        </detailRange>
                    </target>
                </goal>
                <!-- outer action is the whole thing, if needed -->
                <action>
                    <code>
                        <coding>
                            <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-step&quot;/>
                            <code value=&quot;overall process&quot;/>
                            <display value=&quot;Overall Process&quot;/>
                        </coding>
                        <text value=&quot;overall process&quot;/>
                    </code>
                    <action>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-step-scale-pq&quot;>
                            <valueCoding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-step-scale&quot;/>
                                <code value=&quot;PROD&quot;/>
                                <display value=&quot;Production Scale&quot;/>
                            </valueCoding>
                        </extension>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                            <extension url=&quot;parameter&quot;>
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                        <code value=&quot;SPEED&quot;/>
                                        <display value=&quot;Mix speed&quot;/>
                                    </coding>
                                </valueCodeableConcept>
                            </extension>
                            <extension url=&quot;value&quot;>
                                <valueQuantity>
                                    <value value=&quot;1500&quot;/>
                                    <unit value=&quot;rpm&quot;/>
                                </valueQuantity>
                            </extension>
                        </extension>
                        <prefix value=&quot;1&quot;/>
                        <description value=&quot;Description of this step&quot;/>
                        <code>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-step&quot;/>
                                <code value=&quot;particleSizeReduction&quot;/>
                                <display value=&quot;Particle Size Reduction&quot;/>
                            </coding>
                            <!--text value=&quot;Step 2 in the process - free text is possible&quot;/-->
                        </code>
                        <documentation>
                            <type value=&quot;specification-of&quot;/>
                            <resourceReference>
                                <reference value=&quot;DocumentReference/DocumentReference-image&quot;/>
                            </resourceReference>
                        </documentation>
                        <goalId value=&quot;goal-control-pH&quot;/>
                        <goalId value=&quot;goal-control-temp&quot;/>
                        <participant>
                            <typeReference>
                                <!-- this is new in R5 and is not in R4B -->
                                <reference value=&quot;DeviceDefinition/impeller&quot;/>
                            </typeReference>
                            <role>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-manufacturing-equipment-class&quot;/>
                                    <code value=&quot;Compression Milling&quot;/>
                                    <display value=&quot;Compression Milling&quot;/>
                                </coding>
                            </role>
                        </participant>
                        <participant>
                            <typeReference>
                                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                    <valueReference>
                                        <reference value=&quot;SubstanceDefinition/startingMaterial&quot;/>
                                    </valueReference>
                                </extension>
                                <display value=&quot;Starting Material&quot;/>
                                <!-- added to suppress warning caused by the lack of a true reference, due to it being in extension -->
                            </typeReference>
                            <role>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                    <code value=&quot;StartingMaterial&quot;/>
                                    <display value=&quot;Starting Material&quot;/>
                                </coding>
                            </role>
                        </participant>
                        <participant>
                            <typeReference>
                                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                    <valueReference>
                                        <reference value=&quot;SubstanceDefinition/processingMaterial&quot;/>
                                    </valueReference>
                                </extension>
                                <display value=&quot;Processing Material&quot;/>
                                <!-- added to suppress warning caused by the lack of a true reference, due to it being in extension -->
                            </typeReference>
                            <role>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                    <code value=&quot;ProcessingMaterial&quot;/>
                                    <display value=&quot;Processing Material&quot;/>
                                </coding>
                            </role>
                        </participant>
                        <participant>
                            <typeReference>
                                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                    <valueReference>
                                        <reference value=&quot;SubstanceDefinition/resultingMaterial&quot;/>
                                    </valueReference>
                                </extension>
                                <display value=&quot;Resulting Material&quot;/>
                                <!-- added to suppress warning caused by the lack of a true reference, due to it being in extension -->
                            </typeReference>
                            <role>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                    <code value=&quot;ResultingMaterial&quot;/>
                                    <display value=&quot;Resulting Material&quot;/>
                                </coding>
                            </role>
                        </participant>
                        <!--action>
                            <code>
                                <text value=&quot;Control&quot;/>
                            </code>
                            <definitionCanonical value=&quot;ObservationDefinition/ControlPH&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Control&quot;/>
                            </code>
                            <definitionCanonical value=&quot;ObservationDefinition/ControlTemperature&quot;/>
                        </action-->
                    </action>
                </action>">Subject</span><div class="indent sbd summaryUnit"><div class="debugOff"><span>Found a parent (PlanDefinition/subjectReference, id: manufacturingProcess-unlinked fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265aurl (canonical): http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: substance1)(fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821152)

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
                </name>" id="SubstanceDefinition-substance1">Substance</span></a><span class="summaryShowsOff"><b> - Stelbatolol</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substancedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: substance1</div><div class="debugOff"> fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821152</div><div class="summaryHiddenOff"><div class="indent sbddetails"><div><span title="
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
                    <name value=&quot;Stelbatolol&quot;>"><span>Stelbatolol</span></span></div></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div class="indent sbddetails2"><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                ...
                <manufacturer>
                    <reference value=&quot;Organization/substance-manufacturer&quot;/>">Manufacturer</span><div class="indent org summaryUnit"><div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: substance1 fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821152)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: startingMaterial fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821153)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: processingMaterial fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821155)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: substance-manufacturer)(fullUrl: urn:uuid:9fe98cfa-9245-8313-0fc5-d15e613b5d6d)

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
                </contact>" id="Organization-substance-manufacturer">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/organization.html#tt-uml">R6</a>]</span><div class="debugOff">id: substance-manufacturer</div><div class="debugOff"> fullUrl: urn:uuid:9fe98cfa-9245-8313-0fc5-d15e613b5d6d</div><span class="summaryShowsOff"> - AAA Molybdenum Products, Inc.</span><div class="summaryHiddenOff"><div><span title="
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
                        <country value=&quot;USA&quot;>">USA</span></div></div></div></div></div></div><div class="summaryHiddenOff"></div></div></span><div class="indent org summaryUnit">
<div class="debugOff"><span>Found a parent (PlanDefinition/valueReference, id: manufacturingProcess-unlinked fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265aurl (canonical): http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="DocumentReference (id: DocumentReference-process-flow-diagram-dxpq-ex1)(fullUrl: urn:uuid:74d4c070-6596-8252-8ad9-afa515a41feb)
Version: 1
Updated: 2023-01-12T17:57:08.898+00:00

<Bundle>
    <entry>
        <resource>
            <DocumentReference>
                <id value=&quot;DocumentReference-process-flow-diagram-dxpq-ex1&quot;/>
                <meta>
                    <versionId value=&quot;1&quot;/>
                    <lastUpdated value=&quot;2023-01-12T17:57:08.898+00:00&quot;/>
                    <source value=&quot;#n4xHiP0iat7deVDt&quot;/>
                </meta>
                <identifier>
                    <system value=&quot;http://example.org/fhir/identifier/document&quot;/>
                    <value value=&quot;FLOW-001&quot;/>
                </identifier>
                <status value=&quot;current&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/diagram-type&quot;/>
                        <code value=&quot;ProcessFlowDiagram&quot;/>
                        <display value=&quot;Process Flow Diagram&quot;/>
                    </coding>
                </type>
                <content>
                    <attachment>
                        <url value=&quot;https://example.org/docStore/flow-001&quot;/>
                    </attachment>
                </content>" id="DocumentReference-DocumentReference-process-flow-diagram-dxpq-ex1">Document</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/documentreference.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/documentreference.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/documentreference.html#tt-uml">R6</a>]</span><div class="debugOff">id: DocumentReference-process-flow-diagram-dxpq-ex1</div>
<div class="debugOff"> fullUrl: urn:uuid:74d4c070-6596-8252-8ad9-afa515a41feb</div>
<div class="debugOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <DocumentReference>
                <meta>
                    <versionId value=&quot;1&quot;>">Version: </span><span title="
<Bundle>
    <entry>
        <resource>
            <DocumentReference>
                <meta>
                    <versionId value=&quot;1&quot;>">1</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <DocumentReference>
                <meta>
                    ...
                    <lastUpdated value=&quot;2023-01-12T17:57:08.898+00:00&quot;>">Updated: </span><span title="
<Bundle>
    <entry>
        <resource>
            <DocumentReference>
                <meta>
                    ...
                    <lastUpdated value=&quot;2023-01-12T17:57:08.898+00:00&quot;>">2023-01-12 Time: 17:57:08.898+00:00</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <DocumentReference>
                <meta>
                    ...
                    <source value=&quot;#n4xHiP0iat7deVDt&quot;>">Source: </span><span title="
<Bundle>
    <entry>
        <resource>
            <DocumentReference>
                <meta>
                    ...
                    <source value=&quot;#n4xHiP0iat7deVDt&quot;>">#n4xHiP0iat7deVDt</span></div>
</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <DocumentReference>
                ...
                <identifier>
                    <system value=&quot;http://example.org/fhir/identifier/document&quot;/>
                    <value value=&quot;FLOW-001&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <DocumentReference>
                ...
                <identifier>
                    <system value=&quot;http://example.org/fhir/identifier/document&quot;/>
                    <value value=&quot;FLOW-001&quot;/>">FLOW-001<span class="greyOff"> (http://example.org/fhir/identifier/document)</span></span></div>
<div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <DocumentReference>
                ...
                <status value=&quot;current&quot;>">Status: </span><span title="
<Bundle>
    <entry>
        <resource>
            <DocumentReference>
                ...
                <status value=&quot;current&quot;>"><span>current</span></span></div>
</div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <DocumentReference>
                ...
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/diagram-type&quot;/>
                        <code value=&quot;ProcessFlowDiagram&quot;/>
                        <display value=&quot;Process Flow Diagram&quot;/>
                    </coding>">Type: </span><span title="
<Bundle>
    <entry>
        <resource>
            <DocumentReference>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/diagram-type&quot;/>
                        <code value=&quot;ProcessFlowDiagram&quot;/>
                        <display value=&quot;Process Flow Diagram&quot;/>">Process Flow Diagram<span class="greyOff"> [ProcessFlowDiagram]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/diagram-type)</span></span></div>
<div class="summaryHiddenOff">
				Content
				<div class="indent org2">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <DocumentReference>
                <content>
                    <attachment>
                        <url value=&quot;https://example.org/docStore/flow-001&quot;>">url: </span><span title="
<Bundle>
    <entry>
        <resource>
            <DocumentReference>
                <content>
                    <attachment>
                        <url value=&quot;https://example.org/docStore/flow-001&quot;>">https://example.org/docStore/flow-001</span></div>
</div>
</div>
</div>
<div class="indent summaryUnit planl2"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <action>
                    <code>
                        <coding>
                            <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-step&quot;/>
                            <code value=&quot;overall process&quot;/>
                            <display value=&quot;Overall Process&quot;/>
                        </coding>
                        <text value=&quot;overall process&quot;/>
                    </code>
                    <action>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-step-scale-pq&quot;>
                            <valueCoding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-step-scale&quot;/>
                                <code value=&quot;PROD&quot;/>
                                <display value=&quot;Production Scale&quot;/>
                            </valueCoding>
                        </extension>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                            <extension url=&quot;parameter&quot;>
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                        <code value=&quot;SPEED&quot;/>
                                        <display value=&quot;Mix speed&quot;/>
                                    </coding>
                                </valueCodeableConcept>
                            </extension>
                            <extension url=&quot;value&quot;>
                                <valueQuantity>
                                    <value value=&quot;1500&quot;/>
                                    <unit value=&quot;rpm&quot;/>
                                </valueQuantity>
                            </extension>
                        </extension>
                        <prefix value=&quot;1&quot;/>
                        <description value=&quot;Description of this step&quot;/>
                        <code>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-step&quot;/>
                                <code value=&quot;particleSizeReduction&quot;/>
                                <display value=&quot;Particle Size Reduction&quot;/>
                            </coding>
                            <!--text value=&quot;Step 2 in the process - free text is possible&quot;/-->
                        </code>
                        <documentation>
                            <type value=&quot;specification-of&quot;/>
                            <resourceReference>
                                <reference value=&quot;DocumentReference/DocumentReference-image&quot;/>
                            </resourceReference>
                        </documentation>
                        <goalId value=&quot;goal-control-pH&quot;/>
                        <goalId value=&quot;goal-control-temp&quot;/>
                        <participant>
                            <typeReference>
                                <!-- this is new in R5 and is not in R4B -->
                                <reference value=&quot;DeviceDefinition/impeller&quot;/>
                            </typeReference>
                            <role>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-manufacturing-equipment-class&quot;/>
                                    <code value=&quot;Compression Milling&quot;/>
                                    <display value=&quot;Compression Milling&quot;/>
                                </coding>
                            </role>
                        </participant>
                        <participant>
                            <typeReference>
                                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                    <valueReference>
                                        <reference value=&quot;SubstanceDefinition/startingMaterial&quot;/>
                                    </valueReference>
                                </extension>
                                <display value=&quot;Starting Material&quot;/>
                                <!-- added to suppress warning caused by the lack of a true reference, due to it being in extension -->
                            </typeReference>
                            <role>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                    <code value=&quot;StartingMaterial&quot;/>
                                    <display value=&quot;Starting Material&quot;/>
                                </coding>
                            </role>
                        </participant>
                        <participant>
                            <typeReference>
                                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                    <valueReference>
                                        <reference value=&quot;SubstanceDefinition/processingMaterial&quot;/>
                                    </valueReference>
                                </extension>
                                <display value=&quot;Processing Material&quot;/>
                                <!-- added to suppress warning caused by the lack of a true reference, due to it being in extension -->
                            </typeReference>
                            <role>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                    <code value=&quot;ProcessingMaterial&quot;/>
                                    <display value=&quot;Processing Material&quot;/>
                                </coding>
                            </role>
                        </participant>
                        <participant>
                            <typeReference>
                                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                    <valueReference>
                                        <reference value=&quot;SubstanceDefinition/resultingMaterial&quot;/>
                                    </valueReference>
                                </extension>
                                <display value=&quot;Resulting Material&quot;/>
                                <!-- added to suppress warning caused by the lack of a true reference, due to it being in extension -->
                            </typeReference>
                            <role>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                    <code value=&quot;ResultingMaterial&quot;/>
                                    <display value=&quot;Resulting Material&quot;/>
                                </coding>
                            </role>
                        </participant>
                        <!--action>
                            <code>
                                <text value=&quot;Control&quot;/>
                            </code>
                            <definitionCanonical value=&quot;ObservationDefinition/ControlPH&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Control&quot;/>
                            </code>
                            <definitionCanonical value=&quot;ObservationDefinition/ControlTemperature&quot;/>
                        </action-->
                    </action>"><a id="urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a"><span>Action</span></a><span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <code>
                        <coding>
                            <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-step&quot;/>
                            <code value=&quot;overall process&quot;/>
                            <display value=&quot;Overall Process&quot;/>">Overall Process<span class="greyOff"> [overall process]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/manufacturing-step)</span></span><span style="white-space:normal;"> - Text: overall process</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <code>
                        <coding>
                            <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-step&quot;/>
                            <code value=&quot;overall process&quot;/>
                            <display value=&quot;Overall Process&quot;/>
                        </coding>
                        <text value=&quot;overall process&quot;/>">Code: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <code>
                        <coding>
                            <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-step&quot;/>
                            <code value=&quot;overall process&quot;/>
                            <display value=&quot;Overall Process&quot;/>">Overall Process<span class="greyOff"> [overall process]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/manufacturing-step)</span></span><span style="white-space:normal;"> - Text: overall process</span></div>
</div>
<div class="indent summaryUnit planl2"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <action>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-step-scale-pq&quot;>
                            <valueCoding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-step-scale&quot;/>
                                <code value=&quot;PROD&quot;/>
                                <display value=&quot;Production Scale&quot;/>
                            </valueCoding>
                        </extension>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                            <extension url=&quot;parameter&quot;>
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                        <code value=&quot;SPEED&quot;/>
                                        <display value=&quot;Mix speed&quot;/>
                                    </coding>
                                </valueCodeableConcept>
                            </extension>
                            <extension url=&quot;value&quot;>
                                <valueQuantity>
                                    <value value=&quot;1500&quot;/>
                                    <unit value=&quot;rpm&quot;/>
                                </valueQuantity>
                            </extension>
                        </extension>
                        <prefix value=&quot;1&quot;/>
                        <description value=&quot;Description of this step&quot;/>
                        <code>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-step&quot;/>
                                <code value=&quot;particleSizeReduction&quot;/>
                                <display value=&quot;Particle Size Reduction&quot;/>
                            </coding>
                            <!--text value=&quot;Step 2 in the process - free text is possible&quot;/-->
                        </code>
                        <documentation>
                            <type value=&quot;specification-of&quot;/>
                            <resourceReference>
                                <reference value=&quot;DocumentReference/DocumentReference-image&quot;/>
                            </resourceReference>
                        </documentation>
                        <goalId value=&quot;goal-control-pH&quot;/>
                        <goalId value=&quot;goal-control-temp&quot;/>
                        <participant>
                            <typeReference>
                                <!-- this is new in R5 and is not in R4B -->
                                <reference value=&quot;DeviceDefinition/impeller&quot;/>
                            </typeReference>
                            <role>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-manufacturing-equipment-class&quot;/>
                                    <code value=&quot;Compression Milling&quot;/>
                                    <display value=&quot;Compression Milling&quot;/>
                                </coding>
                            </role>
                        </participant>
                        <participant>
                            <typeReference>
                                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                    <valueReference>
                                        <reference value=&quot;SubstanceDefinition/startingMaterial&quot;/>
                                    </valueReference>
                                </extension>
                                <display value=&quot;Starting Material&quot;/>
                                <!-- added to suppress warning caused by the lack of a true reference, due to it being in extension -->
                            </typeReference>
                            <role>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                    <code value=&quot;StartingMaterial&quot;/>
                                    <display value=&quot;Starting Material&quot;/>
                                </coding>
                            </role>
                        </participant>
                        <participant>
                            <typeReference>
                                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                    <valueReference>
                                        <reference value=&quot;SubstanceDefinition/processingMaterial&quot;/>
                                    </valueReference>
                                </extension>
                                <display value=&quot;Processing Material&quot;/>
                                <!-- added to suppress warning caused by the lack of a true reference, due to it being in extension -->
                            </typeReference>
                            <role>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                    <code value=&quot;ProcessingMaterial&quot;/>
                                    <display value=&quot;Processing Material&quot;/>
                                </coding>
                            </role>
                        </participant>
                        <participant>
                            <typeReference>
                                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                    <valueReference>
                                        <reference value=&quot;SubstanceDefinition/resultingMaterial&quot;/>
                                    </valueReference>
                                </extension>
                                <display value=&quot;Resulting Material&quot;/>
                                <!-- added to suppress warning caused by the lack of a true reference, due to it being in extension -->
                            </typeReference>
                            <role>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                    <code value=&quot;ResultingMaterial&quot;/>
                                    <display value=&quot;Resulting Material&quot;/>
                                </coding>
                            </role>
                        </participant>
                        <!--action>
                            <code>
                                <text value=&quot;Control&quot;/>
                            </code>
                            <definitionCanonical value=&quot;ObservationDefinition/ControlPH&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Control&quot;/>
                            </code>
                            <definitionCanonical value=&quot;ObservationDefinition/ControlTemperature&quot;/>
                        </action-->"><a id="urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a"><span>Action</span></a><span class="summaryShowsOff"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        ...
                        <prefix value=&quot;1&quot;>"> - 1</span> - <span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <code>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-step&quot;/>
                                <code value=&quot;particleSizeReduction&quot;/>
                                <display value=&quot;Particle Size Reduction&quot;/>">Particle Size Reduction<span class="greyOff"> [particleSizeReduction]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/manufacturing-step)</span></span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        ...
                        <prefix value=&quot;1&quot;>">Step (prefix): </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        ...
                        <prefix value=&quot;1&quot;>">1</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        ...
                        <code>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-step&quot;/>
                                <code value=&quot;particleSizeReduction&quot;/>
                                <display value=&quot;Particle Size Reduction&quot;/>
                            </coding>
                            <!--text value=&quot;Step 2 in the process - free text is possible&quot;/-->">Code: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <code>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-step&quot;/>
                                <code value=&quot;particleSizeReduction&quot;/>
                                <display value=&quot;Particle Size Reduction&quot;/>">Particle Size Reduction<span class="greyOff"> [particleSizeReduction]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/manufacturing-step)</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        ...
                        <description value=&quot;Description of this step&quot;>">Description: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        ...
                        <description value=&quot;Description of this step&quot;>">Description of this step</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-step-scale-pq&quot;>
                            <valueCoding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-step-scale&quot;/>
                                <code value=&quot;PROD&quot;/>
                                <display value=&quot;Production Scale&quot;/>
                            </valueCoding>">Scale: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-step-scale-pq&quot;>
                            <valueCoding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-step-scale&quot;/>
                                <code value=&quot;PROD&quot;/>
                                <display value=&quot;Production Scale&quot;/>
                            </valueCoding>"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-step-scale-pq&quot;>
                            <valueCoding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-step-scale&quot;/>
                                <code value=&quot;PROD&quot;/>
                                <display value=&quot;Production Scale&quot;/>">Production Scale<span class="greyOff"> [PROD]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/manufacturing-step-scale)</span></span></span></div>
<div class="summaryHiddenOff" title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        ...
                        <goalId value=&quot;goal-control-pH&quot;>">
<div class="summaryHiddenOff">
<div class="indent planl2"><a id="goal-goal-control-pH"><span title="id: goal-control-pH
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <goal id=&quot;goal-control-pH&quot;>
                    <category>
                        <coding>
                            <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-test-category&quot;/>
                            <code value=&quot;C123456&quot;/>
                            <display value=&quot;Physical Property&quot;/>
                        </coding>
                    </category>
                    <description>
                        <text value=&quot;Controls - pH&quot;/>
                        <!-- this is mandatory, even though we don't really want it -->
                    </description>
                    <priority>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-goalPriority-pq-example&quot;/>
                            <code value=&quot;critical&quot;/>
                            <display value=&quot;Critical&quot;/>
                        </coding>
                    </priority>
                    <target>
                        <measure>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                                <code value=&quot;pH&quot;/>
                                <display value=&quot;pH&quot;/>
                            </coding>
                            <text value=&quot;Long description of the acceptance criteria - pH must be in range 6.9 to 7.1&quot;/>
                        </measure>
                        <!--detailString value=&quot;can also be a string&quot;-->
                        <detailRange>
                            <low>
                                <value value=&quot;6.9&quot;/>
                                <unit value=&quot;pH&quot;/>
                            </low>
                            <high>
                                <value value=&quot;7.1&quot;/>
                                <unit value=&quot;pH&quot;/>
                            </high>
                        </detailRange>
                    </target>">Goal</span><span> (goal-control-pH</span>)</a><div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <goal id=&quot;goal-control-pH&quot;>
                    ...
                    <description>
                        <text value=&quot;Controls - pH&quot;/>
                        <!-- this is mandatory, even though we don't really want it -->">Description: </span><span style="white-space:normal;">Controls - pH</span></div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <goal id=&quot;goal-control-pH&quot;>
                    <category>
                        <coding>
                            <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-test-category&quot;/>
                            <code value=&quot;C123456&quot;/>
                            <display value=&quot;Physical Property&quot;/>
                        </coding>">Category: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <goal id=&quot;goal-control-pH&quot;>
                    <category>
                        <coding>
                            <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-test-category&quot;/>
                            <code value=&quot;C123456&quot;/>
                            <display value=&quot;Physical Property&quot;/>">Physical Property<span class="greyOff"> [C123456]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/pharmaceutical-test-category)</span></span></div>
</div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <goal id=&quot;goal-control-pH&quot;>
                    ...
                    <priority>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-goalPriority-pq-example&quot;/>
                            <code value=&quot;critical&quot;/>
                            <display value=&quot;Critical&quot;/>
                        </coding>">Priority: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <goal id=&quot;goal-control-pH&quot;>
                    <priority>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-goalPriority-pq-example&quot;/>
                            <code value=&quot;critical&quot;/>
                            <display value=&quot;Critical&quot;/>">Critical<span class="greyOff"> [critical]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-goalPriority-pq-example)</span></span></div>
<div class="indent planl3"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <goal id=&quot;goal-control-pH&quot;>
                    ...
                    <target>
                        <measure>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                                <code value=&quot;pH&quot;/>
                                <display value=&quot;pH&quot;/>
                            </coding>
                            <text value=&quot;Long description of the acceptance criteria - pH must be in range 6.9 to 7.1&quot;/>
                        </measure>
                        <!--detailString value=&quot;can also be a string&quot;-->
                        <detailRange>
                            <low>
                                <value value=&quot;6.9&quot;/>
                                <unit value=&quot;pH&quot;/>
                            </low>
                            <high>
                                <value value=&quot;7.1&quot;/>
                                <unit value=&quot;pH&quot;/>
                            </high>
                        </detailRange>">Target</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <goal id=&quot;goal-control-pH&quot;>
                    <target>
                        <measure>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                                <code value=&quot;pH&quot;/>
                                <display value=&quot;pH&quot;/>
                            </coding>
                            <text value=&quot;Long description of the acceptance criteria - pH must be in range 6.9 to 7.1&quot;/>">Measure: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <goal id=&quot;goal-control-pH&quot;>
                    <target>
                        <measure>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                                <code value=&quot;pH&quot;/>
                                <display value=&quot;pH&quot;/>">pH<span class="greyOff"> [pH]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: Long description of the acceptance criteria - pH must be in range 6.9 to 7.1</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <goal id=&quot;goal-control-pH&quot;>
                    <target>
                        ...
                        <detailRange>
                            <low>
                                <value value=&quot;6.9&quot;/>
                                <unit value=&quot;pH&quot;/>
                            </low>
                            <high>
                                <value value=&quot;7.1&quot;/>
                                <unit value=&quot;pH&quot;/>
                            </high>">Detail: </span>from <span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <goal id=&quot;goal-control-pH&quot;>
                    <target>
                        <detailRange>
                            <low>
                                <value value=&quot;6.9&quot;/>
                                <unit value=&quot;pH&quot;/>">6.9 pH</span> to <span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <goal id=&quot;goal-control-pH&quot;>
                    <target>
                        <detailRange>
                            ...
                            <high>
                                <value value=&quot;7.1&quot;/>
                                <unit value=&quot;pH&quot;/>">7.1 pH</span></div>
</div>
</div>
</div>
</div>
<div class="summaryHiddenOff" title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        ...
                        <goalId value=&quot;goal-control-temp&quot;>">
<div class="summaryHiddenOff">
<div class="indent planl2"><a id="goal-goal-control-temp"><span title="id: goal-control-temp
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <goal id=&quot;goal-control-temp&quot;>
                    <category>
                        <coding>
                            <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-test-category&quot;/>
                            <code value=&quot;C123456&quot;/>
                            <display value=&quot;Physical Property&quot;/>
                        </coding>
                    </category>
                    <description>
                        <text value=&quot;Controls - Temperature&quot;/>
                        <!-- this is mandatory, even though we don't really want it -->
                    </description>
                    <priority>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-goalPriority-pq-example&quot;/>
                            <code value=&quot;non-critical&quot;/>
                            <display value=&quot;Non-critical&quot;/>
                        </coding>
                    </priority>
                    <target>
                        <measure>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                                <code value=&quot;TEMP&quot;/>
                                <display value=&quot;Temperature&quot;/>
                            </coding>
                            <text value=&quot;Long description of the control value - Temperature must be below 150°C&quot;/>
                        </measure>
                        <!--detailString value=&quot;can also be a string&quot;-->
                        <detailRange>
                            <high>
                                <value value=&quot;150&quot;/>
                                <unit value=&quot;°C&quot;/>
                                <system value=&quot;http://unitsofmeasure.org&quot;/>
                                <code value=&quot;Cel&quot;/>
                            </high>
                        </detailRange>
                    </target>">Goal</span><span> (goal-control-temp</span>)</a><div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <goal id=&quot;goal-control-temp&quot;>
                    ...
                    <description>
                        <text value=&quot;Controls - Temperature&quot;/>
                        <!-- this is mandatory, even though we don't really want it -->">Description: </span><span style="white-space:normal;">Controls - Temperature</span></div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <goal id=&quot;goal-control-temp&quot;>
                    <category>
                        <coding>
                            <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-test-category&quot;/>
                            <code value=&quot;C123456&quot;/>
                            <display value=&quot;Physical Property&quot;/>
                        </coding>">Category: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <goal id=&quot;goal-control-temp&quot;>
                    <category>
                        <coding>
                            <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-test-category&quot;/>
                            <code value=&quot;C123456&quot;/>
                            <display value=&quot;Physical Property&quot;/>">Physical Property<span class="greyOff"> [C123456]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/pharmaceutical-test-category)</span></span></div>
</div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <goal id=&quot;goal-control-temp&quot;>
                    ...
                    <priority>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-goalPriority-pq-example&quot;/>
                            <code value=&quot;non-critical&quot;/>
                            <display value=&quot;Non-critical&quot;/>
                        </coding>">Priority: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <goal id=&quot;goal-control-temp&quot;>
                    <priority>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-goalPriority-pq-example&quot;/>
                            <code value=&quot;non-critical&quot;/>
                            <display value=&quot;Non-critical&quot;/>">Non-critical<span class="greyOff"> [non-critical]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-goalPriority-pq-example)</span></span></div>
<div class="indent planl3"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <goal id=&quot;goal-control-temp&quot;>
                    ...
                    <target>
                        <measure>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                                <code value=&quot;TEMP&quot;/>
                                <display value=&quot;Temperature&quot;/>
                            </coding>
                            <text value=&quot;Long description of the control value - Temperature must be below 150°C&quot;/>
                        </measure>
                        <!--detailString value=&quot;can also be a string&quot;-->
                        <detailRange>
                            <high>
                                <value value=&quot;150&quot;/>
                                <unit value=&quot;°C&quot;/>
                                <system value=&quot;http://unitsofmeasure.org&quot;/>
                                <code value=&quot;Cel&quot;/>
                            </high>
                        </detailRange>">Target</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <goal id=&quot;goal-control-temp&quot;>
                    <target>
                        <measure>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                                <code value=&quot;TEMP&quot;/>
                                <display value=&quot;Temperature&quot;/>
                            </coding>
                            <text value=&quot;Long description of the control value - Temperature must be below 150°C&quot;/>">Measure: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <goal id=&quot;goal-control-temp&quot;>
                    <target>
                        <measure>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                                <code value=&quot;TEMP&quot;/>
                                <display value=&quot;Temperature&quot;/>">Temperature<span class="greyOff"> [TEMP]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: Long description of the control value - Temperature must be below 150°C</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <goal id=&quot;goal-control-temp&quot;>
                    <target>
                        ...
                        <detailRange>
                            <high>
                                <value value=&quot;150&quot;/>
                                <unit value=&quot;°C&quot;/>
                                <system value=&quot;http://unitsofmeasure.org&quot;/>
                                <code value=&quot;Cel&quot;/>
                            </high>">Detail: </span> to <span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <goal id=&quot;goal-control-temp&quot;>
                    <target>
                        <detailRange>
                            <high>
                                <value value=&quot;150&quot;/>
                                <unit value=&quot;°C&quot;/>
                                <system value=&quot;http://unitsofmeasure.org&quot;/>
                                <code value=&quot;Cel&quot;/>">150 °C</span><span class="greyOff"> [Cel] (http://unitsofmeasure.org)</span></div>
</div>
</div>
</div>
</div>
<div class="indent planl3 summaryHiddenOff" title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        ...
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                            <extension url=&quot;parameter&quot;>
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                        <code value=&quot;SPEED&quot;/>
                                        <display value=&quot;Mix speed&quot;/>
                                    </coding>
                                </valueCodeableConcept>
                            </extension>
                            <extension url=&quot;value&quot;>
                                <valueQuantity>
                                    <value value=&quot;1500&quot;/>
                                    <unit value=&quot;rpm&quot;/>
                                </valueQuantity>
                            </extension>">
					Parameters
					<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                            <extension url=&quot;parameter&quot;>
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                        <code value=&quot;SPEED&quot;/>
                                        <display value=&quot;Mix speed&quot;/>
                                    </coding>
                                </valueCodeableConcept>">Parameter: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                            <extension url=&quot;parameter&quot;>
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                        <code value=&quot;SPEED&quot;/>
                                        <display value=&quot;Mix speed&quot;/>
                                    </coding>
                                </valueCodeableConcept>"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                            <extension url=&quot;parameter&quot;>
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                        <code value=&quot;SPEED&quot;/>
                                        <display value=&quot;Mix speed&quot;/>">Mix speed<span class="greyOff"> [SPEED]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/process-parameter)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                            <extension url=&quot;value&quot;>
                                <valueQuantity>
                                    <value value=&quot;1500&quot;/>
                                    <unit value=&quot;rpm&quot;/>">Value Quantity: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                            <extension url=&quot;value&quot;>
                                <valueQuantity>
                                    <value value=&quot;1500&quot;/>
                                    <unit value=&quot;rpm&quot;/>">1500 rpm</span></div>
</div>
<div>
<div class="indent planl3"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        ...
                        <documentation>
                            <type value=&quot;specification-of&quot;/>
                            <resourceReference>
                                <reference value=&quot;DocumentReference/DocumentReference-image&quot;/>
                            </resourceReference>">Documentation</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <documentation>
                            <type value=&quot;specification-of&quot;>">Type: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <documentation>
                            <type value=&quot;specification-of&quot;>"><span>specification-of</span></span></div>
<div class="indent org summaryUnit">
<div class="debugOff"><span>Found a parent (PlanDefinition/resourceReference, id: manufacturingProcess-unlinked fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265aurl (canonical): http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="DocumentReference (id: DocumentReference-image)(fullUrl: urn:uuid:74d4c070-6596-8252-8ad9-afa515a41fef)

<Bundle>
    <entry>
        <resource>
            <DocumentReference>
                <id value=&quot;DocumentReference-image&quot;/>
                <status value=&quot;current&quot;/>
                <content>
                    <attachment>
                        <url value=&quot;https://www.accumulus.org/wp-content/uploads/2022/05/Accumulus_Logo_horizontal.png&quot;/>
                    </attachment>
                </content>" id="DocumentReference-DocumentReference-image">Document</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/documentreference.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/documentreference.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/documentreference.html#tt-uml">R6</a>]</span><div class="debugOff">id: DocumentReference-image</div>
<div class="debugOff"> fullUrl: urn:uuid:74d4c070-6596-8252-8ad9-afa515a41fef</div>
<div class="summaryHiddenOff">
<div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <DocumentReference>
                ...
                <status value=&quot;current&quot;>">Status: </span><span title="
<Bundle>
    <entry>
        <resource>
            <DocumentReference>
                ...
                <status value=&quot;current&quot;>"><span>current</span></span></div>
</div>
<div class="summaryHiddenOff">
				Content
				<div class="indent org2">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <DocumentReference>
                <content>
                    <attachment>
                        <url value=&quot;https://www.accumulus.org/wp-content/uploads/2022/05/Accumulus_Logo_horizontal.png&quot;>">url: </span><span title="
<Bundle>
    <entry>
        <resource>
            <DocumentReference>
                <content>
                    <attachment>
                        <url value=&quot;https://www.accumulus.org/wp-content/uploads/2022/05/Accumulus_Logo_horizontal.png&quot;>"><a href="https://www.accumulus.org/wp-content/uploads/2022/05/Accumulus_Logo_horizontal.png">https://www.accumulus.org/wp-content/uploads/2022/05/Accumulus_Logo_horizontal.png</a></span></div>
</div>
</div>
</div>
</div>
</div>
<div class="indent planl3"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        ...
                        <participant>
                            <typeReference>
                                <!-- this is new in R5 and is not in R4B -->
                                <reference value=&quot;DeviceDefinition/impeller&quot;/>
                            </typeReference>
                            <role>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-manufacturing-equipment-class&quot;/>
                                    <code value=&quot;Compression Milling&quot;/>
                                    <display value=&quot;Compression Milling&quot;/>
                                </coding>
                            </role>">Participant</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <participant>
                            ...
                            <role>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-manufacturing-equipment-class&quot;/>
                                    <code value=&quot;Compression Milling&quot;/>
                                    <display value=&quot;Compression Milling&quot;/>
                                </coding>">Role: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <participant>
                            ...
                            <role>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-manufacturing-equipment-class&quot;/>
                                    <code value=&quot;Compression Milling&quot;/>
                                    <display value=&quot;Compression Milling&quot;/>
                                </coding>"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <participant>
                            <role>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-manufacturing-equipment-class&quot;/>
                                    <code value=&quot;Compression Milling&quot;/>
                                    <display value=&quot;Compression Milling&quot;/>">Compression Milling<span class="greyOff"> [Compression Milling]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/pharmaceutical-manufacturing-equipment-class)</span></span></span></div>
<div class="indent devd summaryUnit">
<div class="debugOff"><span>Found a parent (PlanDefinition/typeReference, id: manufacturingProcess-unlinked fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265aurl (canonical): http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="DeviceDefinition (id: impeller)(fullUrl: urn:uuid:82a39a18-91cf-a19d-76c1-a9e8bad9494c)

<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                <id value=&quot;impeller&quot;/>
                <deviceName>
                    <name value=&quot;Rotating Impeller with 1.5mm screen&quot;/>
                    <type value=&quot;registered-name&quot;/>
                </deviceName>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://terminology.hl7.org/CodeSystem/device-property&quot;/>
                            <code value=&quot;Maximum Speed&quot;/>
                            <display value=&quot;Maximum Speed&quot;/>
                        </coding>
                    </type>
                    <valueQuantity>
                        <value value=&quot;5000&quot;/>
                        <unit value=&quot;RPM&quot;/>
                    </valueQuantity>
                </property>" id="DeviceDefinition-impeller">Device</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/devicedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/devicedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/devicedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: impeller</div>
<div class="debugOff"> fullUrl: urn:uuid:82a39a18-91cf-a19d-76c1-a9e8bad9494c</div>
<div class="summaryHiddenOff"></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                ...
                <deviceName>
                    <name value=&quot;Rotating Impeller with 1.5mm screen&quot;/>
                    <type value=&quot;registered-name&quot;/>">Name: </span><span>Rotating Impeller with 1.5mm screen</span><span> (name type: registered-name)</span></div>
<div class="summaryHiddenOff">
<div class="summaryHiddenOff">
<div class="indent devdl2"><span title="
<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                ...
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://terminology.hl7.org/CodeSystem/device-property&quot;/>
                            <code value=&quot;Maximum Speed&quot;/>
                            <display value=&quot;Maximum Speed&quot;/>
                        </coding>
                    </type>
                    <valueQuantity>
                        <value value=&quot;5000&quot;/>
                        <unit value=&quot;RPM&quot;/>
                    </valueQuantity>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://terminology.hl7.org/CodeSystem/device-property&quot;/>
                            <code value=&quot;Maximum Speed&quot;/>
                            <display value=&quot;Maximum Speed&quot;/>
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://terminology.hl7.org/CodeSystem/device-property&quot;/>
                            <code value=&quot;Maximum Speed&quot;/>
                            <display value=&quot;Maximum Speed&quot;/>">Maximum Speed<span class="greyOff"> [Maximum Speed]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/device-property)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                <property>
                    ...
                    <valueQuantity>
                        <value value=&quot;5000&quot;/>
                        <unit value=&quot;RPM&quot;/>">Value: <span title="
<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                <property>
                    ...
                    <valueQuantity>
                        <value value=&quot;5000&quot;/>
                        <unit value=&quot;RPM&quot;/>">5000 RPM</span></span></div>
</div>
</div>
</div>
</div>
</div>
<div class="indent planl3"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        ...
                        <participant>
                            <typeReference>
                                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                    <valueReference>
                                        <reference value=&quot;SubstanceDefinition/startingMaterial&quot;/>
                                    </valueReference>
                                </extension>
                                <display value=&quot;Starting Material&quot;/>
                                <!-- added to suppress warning caused by the lack of a true reference, due to it being in extension -->
                            </typeReference>
                            <role>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                    <code value=&quot;StartingMaterial&quot;/>
                                    <display value=&quot;Starting Material&quot;/>
                                </coding>
                            </role>">Participant</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <participant>
                            ...
                            <role>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                    <code value=&quot;StartingMaterial&quot;/>
                                    <display value=&quot;Starting Material&quot;/>
                                </coding>">Role: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <participant>
                            ...
                            <role>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                    <code value=&quot;StartingMaterial&quot;/>
                                    <display value=&quot;Starting Material&quot;/>
                                </coding>"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <participant>
                            <role>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                    <code value=&quot;StartingMaterial&quot;/>
                                    <display value=&quot;Starting Material&quot;/>">Starting Material<span class="greyOff"> [StartingMaterial]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/manufacturing-participant-role)</span></span></span></div>
<div>
<div class="indent org"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <participant>
                            <typeReference>
                                ...
                                <display value=&quot;Starting Material&quot;>">Display: Starting Material</span></div>
</div>
<div class="indent sbd summaryUnit">
<div class="debugOff"><span>Found a parent (PlanDefinition/valueReference, id: manufacturingProcess-unlinked fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265aurl (canonical): http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: startingMaterial)(fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821153)

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;startingMaterial&quot;/>
                <manufacturer>
                    <reference value=&quot;Organization/substance-manufacturer&quot;/>
                </manufacturer>
                <name>
                    <name value=&quot;Stelbatosubstance&quot;/>
                </name>" id="SubstanceDefinition-startingMaterial">Substance</span></a><span class="summaryShowsOff"><b> - Stelbatosubstance</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substancedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: startingMaterial</div>
<div class="debugOff"> fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821153</div>
<div class="summaryHiddenOff">
<div class="indent sbddetails">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <name>
                    <name value=&quot;Stelbatosubstance&quot;>">Name: </span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <name>
                    <name value=&quot;Stelbatosubstance&quot;>"><span>Stelbatosubstance</span></span></div>
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
<div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: substance1 fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821152)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: startingMaterial fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821153)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: processingMaterial fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821155)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: substance-manufacturer)(fullUrl: urn:uuid:9fe98cfa-9245-8313-0fc5-d15e613b5d6d)

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
<div class="debugOff"> fullUrl: urn:uuid:9fe98cfa-9245-8313-0fc5-d15e613b5d6d</div><span class="summaryShowsOff"> - AAA Molybdenum Products, Inc.</span><div class="summaryHiddenOff">
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
</div>
</div>
<div class="indent planl3"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        ...
                        <participant>
                            <typeReference>
                                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                    <valueReference>
                                        <reference value=&quot;SubstanceDefinition/processingMaterial&quot;/>
                                    </valueReference>
                                </extension>
                                <display value=&quot;Processing Material&quot;/>
                                <!-- added to suppress warning caused by the lack of a true reference, due to it being in extension -->
                            </typeReference>
                            <role>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                    <code value=&quot;ProcessingMaterial&quot;/>
                                    <display value=&quot;Processing Material&quot;/>
                                </coding>
                            </role>">Participant</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <participant>
                            ...
                            <role>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                    <code value=&quot;ProcessingMaterial&quot;/>
                                    <display value=&quot;Processing Material&quot;/>
                                </coding>">Role: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <participant>
                            ...
                            <role>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                    <code value=&quot;ProcessingMaterial&quot;/>
                                    <display value=&quot;Processing Material&quot;/>
                                </coding>"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <participant>
                            <role>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                    <code value=&quot;ProcessingMaterial&quot;/>
                                    <display value=&quot;Processing Material&quot;/>">Processing Material<span class="greyOff"> [ProcessingMaterial]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/manufacturing-participant-role)</span></span></span></div>
<div>
<div class="indent org"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <participant>
                            <typeReference>
                                ...
                                <display value=&quot;Processing Material&quot;>">Display: Processing Material</span></div>
</div>
<div class="indent sbd summaryUnit">
<div class="debugOff"><span>Found a parent (PlanDefinition/valueReference, id: manufacturingProcess-unlinked fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265aurl (canonical): http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: processingMaterial)(fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821155)

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;processingMaterial&quot;/>
                <manufacturer>
                    <reference value=&quot;Organization/substance-manufacturer&quot;/>
                </manufacturer>
                <name>
                    <name value=&quot;Processohol&quot;/>
                </name>" id="SubstanceDefinition-processingMaterial">Substance</span></a><span class="summaryShowsOff"><b> - Processohol</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substancedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: processingMaterial</div>
<div class="debugOff"> fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821155</div>
<div class="summaryHiddenOff">
<div class="indent sbddetails">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <name>
                    <name value=&quot;Processohol&quot;>">Name: </span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <name>
                    <name value=&quot;Processohol&quot;>"><span>Processohol</span></span></div>
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
<div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: substance1 fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821152)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: startingMaterial fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821153)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: processingMaterial fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821155)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: substance-manufacturer)(fullUrl: urn:uuid:9fe98cfa-9245-8313-0fc5-d15e613b5d6d)

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
<div class="debugOff"> fullUrl: urn:uuid:9fe98cfa-9245-8313-0fc5-d15e613b5d6d</div><span class="summaryShowsOff"> - AAA Molybdenum Products, Inc.</span><div class="summaryHiddenOff">
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
</div>
</div>
<div class="indent planl3"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        ...
                        <participant>
                            <typeReference>
                                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                    <valueReference>
                                        <reference value=&quot;SubstanceDefinition/resultingMaterial&quot;/>
                                    </valueReference>
                                </extension>
                                <display value=&quot;Resulting Material&quot;/>
                                <!-- added to suppress warning caused by the lack of a true reference, due to it being in extension -->
                            </typeReference>
                            <role>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                    <code value=&quot;ResultingMaterial&quot;/>
                                    <display value=&quot;Resulting Material&quot;/>
                                </coding>
                            </role>">Participant</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <participant>
                            ...
                            <role>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                    <code value=&quot;ResultingMaterial&quot;/>
                                    <display value=&quot;Resulting Material&quot;/>
                                </coding>">Role: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <participant>
                            ...
                            <role>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                    <code value=&quot;ResultingMaterial&quot;/>
                                    <display value=&quot;Resulting Material&quot;/>
                                </coding>"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <participant>
                            <role>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                    <code value=&quot;ResultingMaterial&quot;/>
                                    <display value=&quot;Resulting Material&quot;/>">Resulting Material<span class="greyOff"> [ResultingMaterial]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/manufacturing-participant-role)</span></span></span></div>
<div>
<div class="indent org"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <participant>
                            <typeReference>
                                ...
                                <display value=&quot;Resulting Material&quot;>">Display: Resulting Material</span></div>
</div>
<div class="indent sbd summaryUnit">
<div class="debugOff"><span>Found a parent (PlanDefinition/valueReference, id: manufacturingProcess-unlinked fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265aurl (canonical): http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: resultingMaterial)(fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821154)

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;resultingMaterial&quot;/>
                <name>
                    <name value=&quot;Resultothane&quot;/>
                </name>" id="SubstanceDefinition-resultingMaterial">Substance</span></a><span class="summaryShowsOff"><b> - Resultothane</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substancedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: resultingMaterial</div>
<div class="debugOff"> fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821154</div>
<div class="summaryHiddenOff">
<div class="indent sbddetails">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <name>
                    <name value=&quot;Resultothane&quot;>">Name: </span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <name>
                    <name value=&quot;Resultothane&quot;>"><span>Resultothane</span></span></div>
</div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
</div>
</div>
</div>
</div>
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
		First resource in bundle:PlanDefinition
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
