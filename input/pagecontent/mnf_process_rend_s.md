The HTML rendering below shows a synthetic Quality data example for Common Technical Document (CTD) Module 3: Quality, section 3.2.S.2 Manufacture, subsection 3.2.S.2.2 Description of Manufacturing Process and Process Controls.
<html>
<body>
<div class="greyable">
<div class="controls remove"><span> </span><span class="button" onclick="toggleSummary(this)" title="summary view">summary on</span><span> </span><span class="button" onclick="toggleCodes(this)" title="details of code systems">show codes</span><span> </span><span class="button" onclick="toggleDebug(this)" title="extra technical info">show debug</span><span style="float:right; margin-right:3px;"><span class="buttonNoUnderlineHidden" onclick="toggleLowerControls(this)"><sup title="expand this"> v </sup></span><span class="buttonNoUnderline" onclick="toggleRemove(this)"><sup title="close this">x</sup></span></span><span> </span><span class="button" onclick="toggleRemoveTask(this)" title="details of tasks for changes">hide task</span><span> </span><span class="button" onclick="toggleRemoveProvenance(this)" title="details of provenance for changes">hide provenance</span><span> </span><span class="button" onclick="toggleRemoveTables(this)" title="tabular data">hide tables</span><br><span> </span><span class="button" onclick="toggleDarkMode(this)" title="darkened display">dark mode</span><span> </span><span class="button" onclick="toggleApplyGreyscale(this)" title="grey and white display">greyscale</span><span> </span><span class="button" onclick="toggleBlackAndWhite(this,false)" title="black and white display">b&amp;w</span><span> </span><span class="button" onclick="togglePlainMode(this);" title="plain text display">text only</span></div>
<div class="divBody">
<div style="position:relative" class="summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOffBorder">
<div class="bundleBorder">
<div class="debugOff">
<div class="bundle"><a class="plainLink"><span class="bold" title="Bundle (id: product-manufacturing)
Profile: http://accumulus.org/fhir/dx-cmc/manufacturing 

<Bundle>
    <id value=&quot;product-manufacturing&quot;/>
    <meta>
        <profile value=&quot;http://accumulus.org/fhir/dx-cmc/manufacturing&quot;/>
    </meta>
    <type value=&quot;collection&quot;/>
    <entry>
        <fullUrl value=&quot;urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a&quot;/>
        <resource>
            <PlanDefinition>
                <id value=&quot;manufacturingProcess-unlinked&quot;/>
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-plan-document-reference-dxpq&quot;>
                    <valueReference>
                        <!-- Process flow diagram -->
                        <!-- or could be a Binary -->
                        <!-- #84 -->
                        <reference value=&quot;DocumentReference/DocumentReference-process-flow-diagram-dxpq-ex1&quot;/>
                    </valueReference>
                </extension>
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-history-of-process-dxpq&quot;>
                    <valueMarkdown value=&quot;This can be text about the history&quot;/>
                </extension>
                <url value=&quot;http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/planType&quot;/>
                        <code value=&quot;1244566&quot;/>
                        <display value=&quot;Manufacturing Process&quot;/>
                    </coding>
                </type>
                <status value=&quot;active&quot;/>
                <!-- #83 -->
                <subjectReference>
                    <reference value=&quot;SubstanceDefinition/substance1&quot;/>
                </subjectReference>
                <description value=&quot;Narrative description of substance manufacturing process&quot;/>
                <!-- #85 -->
                <goal id=&quot;goal-control-pH&quot;>
                    <category>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/testCategory&quot;/>
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
                            <system value=&quot;http://accumulus.org/fhir/code/goalPriority&quot;/>
                            <code value=&quot;critical&quot;/>
                            <display value=&quot;Critical&quot;/>
                        </coding>
                    </priority>
                    <target>
                        <measure>
                            <coding>
                                <system value=&quot;http://dummy.loinc.org&quot;/>
                                <code value=&quot;PH&quot;/>
                                <display value=&quot;pH Level&quot;/>
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
                            <system value=&quot;http://accumulus.org/fhir/code/testCategory&quot;/>
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
                            <system value=&quot;http://accumulus.org/fhir/code/goalPriority&quot;/>
                            <code value=&quot;noncritical&quot;/>
                            <display value=&quot;Non Critical&quot;/>
                        </coding>
                    </priority>
                    <target>
                        <measure>
                            <coding>
                                <system value=&quot;http://dummy.loinc.org&quot;/>
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
                            <system value=&quot;http://accumulus.org/fhir/code/manufacturingStep&quot;/>
                            <code value=&quot;overall process&quot;/>
                        </coding>
                        <text value=&quot;overall process&quot;/>
                    </code>
                    <action>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-step-scale-dxpq&quot;>
                            <valueCoding>
                                <system value=&quot;http://accumulus.org/fhir/code/manufacturingStepScale&quot;/>
                                <code value=&quot;ABCD&quot;/>
                                <display value=&quot;Production Scale&quot;/>
                            </valueCoding>
                        </extension>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-dxpq&quot;>
                            <extension url=&quot;parameter&quot;>
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://accumulus.org/fhir/code/processParameter&quot;/>
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
                                <system value=&quot;http://accumulus.org/fhir/code/manufacturingStep&quot;/>
                                <code value=&quot;2222&quot;/>
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
                                    <system value=&quot;http://accumulus.org/fhir/code/equipmentClass&quot;/>
                                    <code value=&quot;example&quot;/>
                                    <!-- #88 Equipment class -->
                                    <display value=&quot;Compression Milling&quot;/>
                                </coding>
                            </role>
                        </participant>
                        <participant>
                            <typeReference>
                                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-dxpq&quot;>
                                    <valueReference>
                                        <reference value=&quot;SubstanceDefinition/startingMaterial&quot;/>
                                    </valueReference>
                                </extension>
                            </typeReference>
                            <role>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/manufacturingParticipantRole&quot;/>
                                    <code value=&quot;example&quot;/>
                                    <display value=&quot;StartingMaterial&quot;/>
                                </coding>
                            </role>
                        </participant>
                        <participant>
                            <typeReference>
                                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-dxpq&quot;>
                                    <valueReference>
                                        <reference value=&quot;SubstanceDefinition/processingMaterial&quot;/>
                                    </valueReference>
                                </extension>
                            </typeReference>
                            <role>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/manufacturingParticipantRole&quot;/>
                                    <code value=&quot;example&quot;/>
                                    <display value=&quot;ProcessingMaterial&quot;/>
                                </coding>
                            </role>
                        </participant>
                        <participant>
                            <typeReference>
                                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-dxpq&quot;>
                                    <valueReference>
                                        <reference value=&quot;SubstanceDefinition/resultingMaterial&quot;/>
                                    </valueReference>
                                </extension>
                            </typeReference>
                            <role>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/manufacturingParticipantRole&quot;/>
                                    <code value=&quot;example&quot;/>
                                    <display value=&quot;ResultingMaterial&quot;/>
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
                    <!-- #89 Equiment subclass -->
                    <type value=&quot;registered-name&quot;/>
                </deviceName>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/deviceProperty&quot;/>
                            <code value=&quot;121212&quot;/>
                            <!-- #90 Working capacity -->
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
            <!-- #84 -->
            <DocumentReference>
                <id value=&quot;DocumentReference-process-flow-diagram-dxpq-ex1&quot;/>
                <meta>
                    <versionId value=&quot;1&quot;/>
                    <lastUpdated value=&quot;2023-01-12T17:57:08.898+00:00&quot;/>
                    <source value=&quot;#n4xHiP0iat7deVDt&quot;/>
                </meta>
                <identifier>
                    <system value=&quot;http://accumulus.org/fhir/identifier/document&quot;/>
                    <value value=&quot;FLOW-001&quot;/>
                </identifier>
                <status value=&quot;current&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/diagramType&quot;/>
                        <code value=&quot;11111111111&quot;/>
                        <display value=&quot;ProcessFlowDiagram&quot;/>
                    </coding>
                </type>
                <content>
                    <attachment>
                        <url value=&quot;https://accumulus.org/docStore/flow-001&quot;/>
                    </attachment>
                </content>
            </DocumentReference>
        </resource>
    </entry>
    <!-- Section 5.1 - Manufacturing Process Overview - Process Flow Diagram -->
    <entry>
        <fullUrl value=&quot;urn:uuid:74d4c070-6596-8252-8ad9-afa515a41fev&quot;/>
        <resource>
            <!-- #84 -->
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
                    <!-- #4 -->
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
    </entry>" id="Bundle-product-manufacturing">Bundle</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/bundle.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/bundle.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/bundle.html#tt-uml">R6</a>]</span><div class="debugOff">id: product-manufacturing</div>
<div class="debugOff"></div>
<div class="debugOff"><span title="
<Bundle>
    <meta>
        <profile value=&quot;http://accumulus.org/fhir/dx-cmc/manufacturing&quot;>">Profile: </span><span>http://accumulus.org/fhir/dx-cmc/manufacturing</span></div>
<div><span title="
<Bundle>
    ...
    <type value=&quot;collection&quot;>">Type: </span><span><span>collection</span></span></div>
</div>
</div>
<div>
<div class="indent plan summaryUnit" ondblclick="summaryHandler(event)"><a class="plainLink"><span class="bold" title="PlanDefinition (id: manufacturingProcess-unlinked)(fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a)

<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <id value=&quot;manufacturingProcess-unlinked&quot;/>
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-plan-document-reference-dxpq&quot;>
                    <valueReference>
                        <!-- Process flow diagram -->
                        <!-- or could be a Binary -->
                        <!-- #84 -->
                        <reference value=&quot;DocumentReference/DocumentReference-process-flow-diagram-dxpq-ex1&quot;/>
                    </valueReference>
                </extension>
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-history-of-process-dxpq&quot;>
                    <valueMarkdown value=&quot;This can be text about the history&quot;/>
                </extension>
                <url value=&quot;http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/planType&quot;/>
                        <code value=&quot;1244566&quot;/>
                        <display value=&quot;Manufacturing Process&quot;/>
                    </coding>
                </type>
                <status value=&quot;active&quot;/>
                <!-- #83 -->
                <subjectReference>
                    <reference value=&quot;SubstanceDefinition/substance1&quot;/>
                </subjectReference>
                <description value=&quot;Narrative description of substance manufacturing process&quot;/>
                <!-- #85 -->
                <goal id=&quot;goal-control-pH&quot;>
                    <category>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/testCategory&quot;/>
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
                            <system value=&quot;http://accumulus.org/fhir/code/goalPriority&quot;/>
                            <code value=&quot;critical&quot;/>
                            <display value=&quot;Critical&quot;/>
                        </coding>
                    </priority>
                    <target>
                        <measure>
                            <coding>
                                <system value=&quot;http://dummy.loinc.org&quot;/>
                                <code value=&quot;PH&quot;/>
                                <display value=&quot;pH Level&quot;/>
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
                            <system value=&quot;http://accumulus.org/fhir/code/testCategory&quot;/>
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
                            <system value=&quot;http://accumulus.org/fhir/code/goalPriority&quot;/>
                            <code value=&quot;noncritical&quot;/>
                            <display value=&quot;Non Critical&quot;/>
                        </coding>
                    </priority>
                    <target>
                        <measure>
                            <coding>
                                <system value=&quot;http://dummy.loinc.org&quot;/>
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
                            <system value=&quot;http://accumulus.org/fhir/code/manufacturingStep&quot;/>
                            <code value=&quot;overall process&quot;/>
                        </coding>
                        <text value=&quot;overall process&quot;/>
                    </code>
                    <action>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-step-scale-dxpq&quot;>
                            <valueCoding>
                                <system value=&quot;http://accumulus.org/fhir/code/manufacturingStepScale&quot;/>
                                <code value=&quot;ABCD&quot;/>
                                <display value=&quot;Production Scale&quot;/>
                            </valueCoding>
                        </extension>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-dxpq&quot;>
                            <extension url=&quot;parameter&quot;>
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://accumulus.org/fhir/code/processParameter&quot;/>
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
                                <system value=&quot;http://accumulus.org/fhir/code/manufacturingStep&quot;/>
                                <code value=&quot;2222&quot;/>
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
                                    <system value=&quot;http://accumulus.org/fhir/code/equipmentClass&quot;/>
                                    <code value=&quot;example&quot;/>
                                    <!-- #88 Equipment class -->
                                    <display value=&quot;Compression Milling&quot;/>
                                </coding>
                            </role>
                        </participant>
                        <participant>
                            <typeReference>
                                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-dxpq&quot;>
                                    <valueReference>
                                        <reference value=&quot;SubstanceDefinition/startingMaterial&quot;/>
                                    </valueReference>
                                </extension>
                            </typeReference>
                            <role>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/manufacturingParticipantRole&quot;/>
                                    <code value=&quot;example&quot;/>
                                    <display value=&quot;StartingMaterial&quot;/>
                                </coding>
                            </role>
                        </participant>
                        <participant>
                            <typeReference>
                                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-dxpq&quot;>
                                    <valueReference>
                                        <reference value=&quot;SubstanceDefinition/processingMaterial&quot;/>
                                    </valueReference>
                                </extension>
                            </typeReference>
                            <role>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/manufacturingParticipantRole&quot;/>
                                    <code value=&quot;example&quot;/>
                                    <display value=&quot;ProcessingMaterial&quot;/>
                                </coding>
                            </role>
                        </participant>
                        <participant>
                            <typeReference>
                                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-dxpq&quot;>
                                    <valueReference>
                                        <reference value=&quot;SubstanceDefinition/resultingMaterial&quot;/>
                                    </valueReference>
                                </extension>
                            </typeReference>
                            <role>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/manufacturingParticipantRole&quot;/>
                                    <code value=&quot;example&quot;/>
                                    <display value=&quot;ResultingMaterial&quot;/>
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
                <description value=&quot;Narrative description of substance manufacturing process&quot;>">Description: </span><span>Narrative description of substance manufacturing process</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <type>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/planType&quot;/>
                        <code value=&quot;1244566&quot;/>
                        <display value=&quot;Manufacturing Process&quot;/>
                    </coding>">Type: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <type>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/planType&quot;/>
                        <code value=&quot;1244566&quot;/>
                        <display value=&quot;Manufacturing Process&quot;/>">Manufacturing Process<span class="greyOff"> [1244566]</span><span class="greyOff"> (http://accumulus.org/fhir/code/planType)</span></span></div>
<div class="summaryHiddenOff">
<div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <status value=&quot;active&quot;>">Status: </span><span>active</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-history-of-process-dxpq&quot;>
                    <valueMarkdown value=&quot;This can be text about the history&quot;/>">History: </span><span>This can be text about the history</span></div>
</div>
<div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <id value=&quot;manufacturingProcess-unlinked&quot;/>
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-plan-document-reference-dxpq&quot;>
                    <valueReference>
                        <!-- Process flow diagram -->
                        <!-- or could be a Binary -->
                        <!-- #84 -->
                        <reference value=&quot;DocumentReference/DocumentReference-process-flow-diagram-dxpq-ex1&quot;/>
                    </valueReference>
                </extension>
                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-history-of-process-dxpq&quot;>
                    <valueMarkdown value=&quot;This can be text about the history&quot;/>
                </extension>
                <url value=&quot;http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/planType&quot;/>
                        <code value=&quot;1244566&quot;/>
                        <display value=&quot;Manufacturing Process&quot;/>
                    </coding>
                </type>
                <status value=&quot;active&quot;/>
                <!-- #83 -->
                <subjectReference>
                    <reference value=&quot;SubstanceDefinition/substance1&quot;/>
                </subjectReference>
                <description value=&quot;Narrative description of substance manufacturing process&quot;/>
                <!-- #85 -->
                <goal id=&quot;goal-control-pH&quot;>
                    <category>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/testCategory&quot;/>
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
                            <system value=&quot;http://accumulus.org/fhir/code/goalPriority&quot;/>
                            <code value=&quot;critical&quot;/>
                            <display value=&quot;Critical&quot;/>
                        </coding>
                    </priority>
                    <target>
                        <measure>
                            <coding>
                                <system value=&quot;http://dummy.loinc.org&quot;/>
                                <code value=&quot;PH&quot;/>
                                <display value=&quot;pH Level&quot;/>
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
                            <system value=&quot;http://accumulus.org/fhir/code/testCategory&quot;/>
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
                            <system value=&quot;http://accumulus.org/fhir/code/goalPriority&quot;/>
                            <code value=&quot;noncritical&quot;/>
                            <display value=&quot;Non Critical&quot;/>
                        </coding>
                    </priority>
                    <target>
                        <measure>
                            <coding>
                                <system value=&quot;http://dummy.loinc.org&quot;/>
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
                            <system value=&quot;http://accumulus.org/fhir/code/manufacturingStep&quot;/>
                            <code value=&quot;overall process&quot;/>
                        </coding>
                        <text value=&quot;overall process&quot;/>
                    </code>
                    <action>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-step-scale-dxpq&quot;>
                            <valueCoding>
                                <system value=&quot;http://accumulus.org/fhir/code/manufacturingStepScale&quot;/>
                                <code value=&quot;ABCD&quot;/>
                                <display value=&quot;Production Scale&quot;/>
                            </valueCoding>
                        </extension>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-dxpq&quot;>
                            <extension url=&quot;parameter&quot;>
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://accumulus.org/fhir/code/processParameter&quot;/>
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
                                <system value=&quot;http://accumulus.org/fhir/code/manufacturingStep&quot;/>
                                <code value=&quot;2222&quot;/>
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
                                    <system value=&quot;http://accumulus.org/fhir/code/equipmentClass&quot;/>
                                    <code value=&quot;example&quot;/>
                                    <!-- #88 Equipment class -->
                                    <display value=&quot;Compression Milling&quot;/>
                                </coding>
                            </role>
                        </participant>
                        <participant>
                            <typeReference>
                                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-dxpq&quot;>
                                    <valueReference>
                                        <reference value=&quot;SubstanceDefinition/startingMaterial&quot;/>
                                    </valueReference>
                                </extension>
                            </typeReference>
                            <role>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/manufacturingParticipantRole&quot;/>
                                    <code value=&quot;example&quot;/>
                                    <display value=&quot;StartingMaterial&quot;/>
                                </coding>
                            </role>
                        </participant>
                        <participant>
                            <typeReference>
                                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-dxpq&quot;>
                                    <valueReference>
                                        <reference value=&quot;SubstanceDefinition/processingMaterial&quot;/>
                                    </valueReference>
                                </extension>
                            </typeReference>
                            <role>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/manufacturingParticipantRole&quot;/>
                                    <code value=&quot;example&quot;/>
                                    <display value=&quot;ProcessingMaterial&quot;/>
                                </coding>
                            </role>
                        </participant>
                        <participant>
                            <typeReference>
                                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-dxpq&quot;>
                                    <valueReference>
                                        <reference value=&quot;SubstanceDefinition/resultingMaterial&quot;/>
                                    </valueReference>
                                </extension>
                            </typeReference>
                            <role>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/manufacturingParticipantRole&quot;/>
                                    <code value=&quot;example&quot;/>
                                    <display value=&quot;ResultingMaterial&quot;/>
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
                </action>">Subject</span><div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (PlanDefinition/subjectReference, id: manufacturingProcess-unlinked fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265aurl (canonical): http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: substance1)(fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821152)

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
                    <!-- #4 -->
                </name>" id="SubstanceDefinition-substance1">Substance</span></a><span class="summaryShowsOff"><b> - Stelbatolol</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substancedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: substance1</div><div class="debugOff"> fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821152</div><div class="summaryHiddenOff"><div class="indent sbddetails"><div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <name>
                    <name value=&quot;Stelbatolol&quot;>">Name: </span><span><span>Stelbatolol</span></span></div></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div class="indent sbddetails2"><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                ...
                <manufacturer>
                    <reference value=&quot;Organization/substance-manufacturer&quot;/>">Manufacturer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: substance1 fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821152)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: startingMaterial fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821153)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: processingMaterial fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821155)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: substance-manufacturer)(fullUrl: urn:uuid:9fe98cfa-9245-8313-0fc5-d15e613b5d6d)

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
                    <value value=&quot;3003040516&quot;/>">3003040516<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span></div></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;AAA Molybdenum Products, Inc.&quot;>">Name: </span><span>AAA Molybdenum Products, Inc.</span></div><div class="indent org2">
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
                        <country value=&quot;USA&quot;>">USA</span></div></div></div></div></div></div><div class="summaryHiddenOff"></div></div></span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)">
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
                    <system value=&quot;http://accumulus.org/fhir/identifier/document&quot;/>
                    <value value=&quot;FLOW-001&quot;/>
                </identifier>
                <status value=&quot;current&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/diagramType&quot;/>
                        <code value=&quot;11111111111&quot;/>
                        <display value=&quot;ProcessFlowDiagram&quot;/>
                    </coding>
                </type>
                <content>
                    <attachment>
                        <url value=&quot;https://accumulus.org/docStore/flow-001&quot;/>
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
                    <versionId value=&quot;1&quot;>">Version: </span><span>1</span></div>
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
                    <source value=&quot;#n4xHiP0iat7deVDt&quot;>">Source: </span><span>#n4xHiP0iat7deVDt</span></div>
</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <DocumentReference>
                ...
                <identifier>
                    <system value=&quot;http://accumulus.org/fhir/identifier/document&quot;/>
                    <value value=&quot;FLOW-001&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <DocumentReference>
                ...
                <identifier>
                    <system value=&quot;http://accumulus.org/fhir/identifier/document&quot;/>
                    <value value=&quot;FLOW-001&quot;/>">FLOW-001<span class="greyOff"> (http://accumulus.org/fhir/identifier/document)</span></span></div>
<div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <DocumentReference>
                ...
                <status value=&quot;current&quot;>">Status: </span><span>current</span></div>
</div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <DocumentReference>
                ...
                <type>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/diagramType&quot;/>
                        <code value=&quot;11111111111&quot;/>
                        <display value=&quot;ProcessFlowDiagram&quot;/>
                    </coding>">Type: </span><span title="
<Bundle>
    <entry>
        <resource>
            <DocumentReference>
                <type>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/diagramType&quot;/>
                        <code value=&quot;11111111111&quot;/>
                        <display value=&quot;ProcessFlowDiagram&quot;/>">ProcessFlowDiagram<span class="greyOff"> [11111111111]</span><span class="greyOff"> (http://accumulus.org/fhir/code/diagramType)</span></span></div>
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
                        <url value=&quot;https://accumulus.org/docStore/flow-001&quot;>">url: </span><span>https://accumulus.org/docStore/flow-001</span></div>
</div>
</div>
</div>
<div class="indent summaryUnit planl2" ondblclick="summaryHandler(event)"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <action>
                    <code>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/manufacturingStep&quot;/>
                            <code value=&quot;overall process&quot;/>
                        </coding>
                        <text value=&quot;overall process&quot;/>
                    </code>
                    <action>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-step-scale-dxpq&quot;>
                            <valueCoding>
                                <system value=&quot;http://accumulus.org/fhir/code/manufacturingStepScale&quot;/>
                                <code value=&quot;ABCD&quot;/>
                                <display value=&quot;Production Scale&quot;/>
                            </valueCoding>
                        </extension>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-dxpq&quot;>
                            <extension url=&quot;parameter&quot;>
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://accumulus.org/fhir/code/processParameter&quot;/>
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
                                <system value=&quot;http://accumulus.org/fhir/code/manufacturingStep&quot;/>
                                <code value=&quot;2222&quot;/>
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
                                    <system value=&quot;http://accumulus.org/fhir/code/equipmentClass&quot;/>
                                    <code value=&quot;example&quot;/>
                                    <!-- #88 Equipment class -->
                                    <display value=&quot;Compression Milling&quot;/>
                                </coding>
                            </role>
                        </participant>
                        <participant>
                            <typeReference>
                                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-dxpq&quot;>
                                    <valueReference>
                                        <reference value=&quot;SubstanceDefinition/startingMaterial&quot;/>
                                    </valueReference>
                                </extension>
                            </typeReference>
                            <role>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/manufacturingParticipantRole&quot;/>
                                    <code value=&quot;example&quot;/>
                                    <display value=&quot;StartingMaterial&quot;/>
                                </coding>
                            </role>
                        </participant>
                        <participant>
                            <typeReference>
                                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-dxpq&quot;>
                                    <valueReference>
                                        <reference value=&quot;SubstanceDefinition/processingMaterial&quot;/>
                                    </valueReference>
                                </extension>
                            </typeReference>
                            <role>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/manufacturingParticipantRole&quot;/>
                                    <code value=&quot;example&quot;/>
                                    <display value=&quot;ProcessingMaterial&quot;/>
                                </coding>
                            </role>
                        </participant>
                        <participant>
                            <typeReference>
                                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-dxpq&quot;>
                                    <valueReference>
                                        <reference value=&quot;SubstanceDefinition/resultingMaterial&quot;/>
                                    </valueReference>
                                </extension>
                            </typeReference>
                            <role>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/manufacturingParticipantRole&quot;/>
                                    <code value=&quot;example&quot;/>
                                    <display value=&quot;ResultingMaterial&quot;/>
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
                            <system value=&quot;http://accumulus.org/fhir/code/manufacturingStep&quot;/>
                            <code value=&quot;overall process&quot;/>"><span>overall process</span><span class="greyOff"> (http://accumulus.org/fhir/code/manufacturingStep)</span></span><span style="white-space:normal;"> - Text: overall process</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <code>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/manufacturingStep&quot;/>
                            <code value=&quot;overall process&quot;/>
                        </coding>
                        <text value=&quot;overall process&quot;/>">Code: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <code>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/manufacturingStep&quot;/>
                            <code value=&quot;overall process&quot;/>"><span>overall process</span><span class="greyOff"> (http://accumulus.org/fhir/code/manufacturingStep)</span></span><span style="white-space:normal;"> - Text: overall process</span></div>
</div>
<div class="indent summaryUnit planl2" ondblclick="summaryHandler(event)"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <action>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-step-scale-dxpq&quot;>
                            <valueCoding>
                                <system value=&quot;http://accumulus.org/fhir/code/manufacturingStepScale&quot;/>
                                <code value=&quot;ABCD&quot;/>
                                <display value=&quot;Production Scale&quot;/>
                            </valueCoding>
                        </extension>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-dxpq&quot;>
                            <extension url=&quot;parameter&quot;>
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://accumulus.org/fhir/code/processParameter&quot;/>
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
                                <system value=&quot;http://accumulus.org/fhir/code/manufacturingStep&quot;/>
                                <code value=&quot;2222&quot;/>
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
                                    <system value=&quot;http://accumulus.org/fhir/code/equipmentClass&quot;/>
                                    <code value=&quot;example&quot;/>
                                    <!-- #88 Equipment class -->
                                    <display value=&quot;Compression Milling&quot;/>
                                </coding>
                            </role>
                        </participant>
                        <participant>
                            <typeReference>
                                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-dxpq&quot;>
                                    <valueReference>
                                        <reference value=&quot;SubstanceDefinition/startingMaterial&quot;/>
                                    </valueReference>
                                </extension>
                            </typeReference>
                            <role>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/manufacturingParticipantRole&quot;/>
                                    <code value=&quot;example&quot;/>
                                    <display value=&quot;StartingMaterial&quot;/>
                                </coding>
                            </role>
                        </participant>
                        <participant>
                            <typeReference>
                                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-dxpq&quot;>
                                    <valueReference>
                                        <reference value=&quot;SubstanceDefinition/processingMaterial&quot;/>
                                    </valueReference>
                                </extension>
                            </typeReference>
                            <role>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/manufacturingParticipantRole&quot;/>
                                    <code value=&quot;example&quot;/>
                                    <display value=&quot;ProcessingMaterial&quot;/>
                                </coding>
                            </role>
                        </participant>
                        <participant>
                            <typeReference>
                                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-dxpq&quot;>
                                    <valueReference>
                                        <reference value=&quot;SubstanceDefinition/resultingMaterial&quot;/>
                                    </valueReference>
                                </extension>
                            </typeReference>
                            <role>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/manufacturingParticipantRole&quot;/>
                                    <code value=&quot;example&quot;/>
                                    <display value=&quot;ResultingMaterial&quot;/>
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
                                <system value=&quot;http://accumulus.org/fhir/code/manufacturingStep&quot;/>
                                <code value=&quot;2222&quot;/>
                                <display value=&quot;Particle Size Reduction&quot;/>">Particle Size Reduction<span class="greyOff"> [2222]</span><span class="greyOff"> (http://accumulus.org/fhir/code/manufacturingStep)</span></span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        ...
                        <prefix value=&quot;1&quot;>">Step (prefix): </span><span>1</span></div>
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
                                <system value=&quot;http://accumulus.org/fhir/code/manufacturingStep&quot;/>
                                <code value=&quot;2222&quot;/>
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
                                <system value=&quot;http://accumulus.org/fhir/code/manufacturingStep&quot;/>
                                <code value=&quot;2222&quot;/>
                                <display value=&quot;Particle Size Reduction&quot;/>">Particle Size Reduction<span class="greyOff"> [2222]</span><span class="greyOff"> (http://accumulus.org/fhir/code/manufacturingStep)</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        ...
                        <description value=&quot;Description of this step&quot;>">Description: </span><span>Description of this step</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-step-scale-dxpq&quot;>
                            <valueCoding>
                                <system value=&quot;http://accumulus.org/fhir/code/manufacturingStepScale&quot;/>
                                <code value=&quot;ABCD&quot;/>
                                <display value=&quot;Production Scale&quot;/>
                            </valueCoding>">Scale: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-step-scale-dxpq&quot;>
                            <valueCoding>
                                <system value=&quot;http://accumulus.org/fhir/code/manufacturingStepScale&quot;/>
                                <code value=&quot;ABCD&quot;/>
                                <display value=&quot;Production Scale&quot;/>">Production Scale<span class="greyOff"> [ABCD]</span><span class="greyOff"> (http://accumulus.org/fhir/code/manufacturingStepScale)</span></span></div>
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
                            <system value=&quot;http://accumulus.org/fhir/code/testCategory&quot;/>
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
                            <system value=&quot;http://accumulus.org/fhir/code/goalPriority&quot;/>
                            <code value=&quot;critical&quot;/>
                            <display value=&quot;Critical&quot;/>
                        </coding>
                    </priority>
                    <target>
                        <measure>
                            <coding>
                                <system value=&quot;http://dummy.loinc.org&quot;/>
                                <code value=&quot;PH&quot;/>
                                <display value=&quot;pH Level&quot;/>
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
                            <system value=&quot;http://accumulus.org/fhir/code/testCategory&quot;/>
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
                            <system value=&quot;http://accumulus.org/fhir/code/testCategory&quot;/>
                            <code value=&quot;C123456&quot;/>
                            <display value=&quot;Physical Property&quot;/>">Physical Property<span class="greyOff"> [C123456]</span><span class="greyOff"> (http://accumulus.org/fhir/code/testCategory)</span></span></div>
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
                            <system value=&quot;http://accumulus.org/fhir/code/goalPriority&quot;/>
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
                            <system value=&quot;http://accumulus.org/fhir/code/goalPriority&quot;/>
                            <code value=&quot;critical&quot;/>
                            <display value=&quot;Critical&quot;/>">Critical<span class="greyOff"> [critical]</span><span class="greyOff"> (http://accumulus.org/fhir/code/goalPriority)</span></span></div>
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
                                <system value=&quot;http://dummy.loinc.org&quot;/>
                                <code value=&quot;PH&quot;/>
                                <display value=&quot;pH Level&quot;/>
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
                                <system value=&quot;http://dummy.loinc.org&quot;/>
                                <code value=&quot;PH&quot;/>
                                <display value=&quot;pH Level&quot;/>
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
                                <system value=&quot;http://dummy.loinc.org&quot;/>
                                <code value=&quot;PH&quot;/>
                                <display value=&quot;pH Level&quot;/>">pH Level<span class="greyOff"> [PH]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Long description of the acceptance criteria - pH must be in range 6.9 to 7.1</span></div>
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
                            <system value=&quot;http://accumulus.org/fhir/code/testCategory&quot;/>
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
                            <system value=&quot;http://accumulus.org/fhir/code/goalPriority&quot;/>
                            <code value=&quot;noncritical&quot;/>
                            <display value=&quot;Non Critical&quot;/>
                        </coding>
                    </priority>
                    <target>
                        <measure>
                            <coding>
                                <system value=&quot;http://dummy.loinc.org&quot;/>
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
                            <system value=&quot;http://accumulus.org/fhir/code/testCategory&quot;/>
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
                            <system value=&quot;http://accumulus.org/fhir/code/testCategory&quot;/>
                            <code value=&quot;C123456&quot;/>
                            <display value=&quot;Physical Property&quot;/>">Physical Property<span class="greyOff"> [C123456]</span><span class="greyOff"> (http://accumulus.org/fhir/code/testCategory)</span></span></div>
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
                            <system value=&quot;http://accumulus.org/fhir/code/goalPriority&quot;/>
                            <code value=&quot;noncritical&quot;/>
                            <display value=&quot;Non Critical&quot;/>
                        </coding>">Priority: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <goal id=&quot;goal-control-temp&quot;>
                    <priority>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/goalPriority&quot;/>
                            <code value=&quot;noncritical&quot;/>
                            <display value=&quot;Non Critical&quot;/>">Non Critical<span class="greyOff"> [noncritical]</span><span class="greyOff"> (http://accumulus.org/fhir/code/goalPriority)</span></span></div>
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
                                <system value=&quot;http://dummy.loinc.org&quot;/>
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
                                <system value=&quot;http://dummy.loinc.org&quot;/>
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
                                <system value=&quot;http://dummy.loinc.org&quot;/>
                                <code value=&quot;TEMP&quot;/>
                                <display value=&quot;Temperature&quot;/>">Temperature<span class="greyOff"> [TEMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Long description of the control value - Temperature must be below 150°C</span></div>
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
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-dxpq&quot;>
                            <extension url=&quot;parameter&quot;>
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://accumulus.org/fhir/code/processParameter&quot;/>
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
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-dxpq&quot;>
                            <extension url=&quot;parameter&quot;>
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://accumulus.org/fhir/code/processParameter&quot;/>
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
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-dxpq&quot;>
                            <extension url=&quot;parameter&quot;>
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://accumulus.org/fhir/code/processParameter&quot;/>
                                        <code value=&quot;SPEED&quot;/>
                                        <display value=&quot;Mix speed&quot;/>">Mix speed<span class="greyOff"> [SPEED]</span><span class="greyOff"> (http://accumulus.org/fhir/code/processParameter)</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-dxpq&quot;>
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
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-dxpq&quot;>
                            <extension url=&quot;value&quot;>
                                <valueQuantity>
                                    <value value=&quot;1500&quot;/>
                                    <unit value=&quot;rpm&quot;/>">1500 rpm</span></div>
</div>
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
                            <type value=&quot;specification-of&quot;>">Type: </span><span><span>specification-of</span></span></div>
<div class="indent org summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (PlanDefinition/resourceReference, id: manufacturingProcess-unlinked fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265aurl (canonical): http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="DocumentReference (id: DocumentReference-image)(fullUrl: urn:uuid:74d4c070-6596-8252-8ad9-afa515a41fev)

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
<div class="debugOff"> fullUrl: urn:uuid:74d4c070-6596-8252-8ad9-afa515a41fev</div>
<div class="summaryHiddenOff">
<div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <DocumentReference>
                ...
                <status value=&quot;current&quot;>">Status: </span><span>current</span></div>
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
                        <url value=&quot;https://www.accumulus.org/wp-content/uploads/2022/05/Accumulus_Logo_horizontal.png&quot;>">url: </span><span><a href="https://www.accumulus.org/wp-content/uploads/2022/05/Accumulus_Logo_horizontal.png">https://www.accumulus.org/wp-content/uploads/2022/05/Accumulus_Logo_horizontal.png</a></span></div>
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
                                    <system value=&quot;http://accumulus.org/fhir/code/equipmentClass&quot;/>
                                    <code value=&quot;example&quot;/>
                                    <!-- #88 Equipment class -->
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
                                    <system value=&quot;http://accumulus.org/fhir/code/equipmentClass&quot;/>
                                    <code value=&quot;example&quot;/>
                                    <!-- #88 Equipment class -->
                                    <display value=&quot;Compression Milling&quot;/>
                                </coding>">Role: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <participant>
                            <role>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/equipmentClass&quot;/>
                                    <code value=&quot;example&quot;/>
                                    <!-- #88 Equipment class -->
                                    <display value=&quot;Compression Milling&quot;/>">Compression Milling<span class="greyOff"> [example]</span><span class="greyOff"> (http://accumulus.org/fhir/code/equipmentClass)</span></span></span></div>
<div class="indent devd summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (PlanDefinition/typeReference, id: manufacturingProcess-unlinked fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265aurl (canonical): http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="DeviceDefinition (id: impeller)(fullUrl: urn:uuid:82a39a18-91cf-a19d-76c1-a9e8bad9494c)

<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                <id value=&quot;impeller&quot;/>
                <deviceName>
                    <name value=&quot;Rotating Impeller with 1.5mm screen&quot;/>
                    <!-- #89 Equiment subclass -->
                    <type value=&quot;registered-name&quot;/>
                </deviceName>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/deviceProperty&quot;/>
                            <code value=&quot;121212&quot;/>
                            <!-- #90 Working capacity -->
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
                    <!-- #89 Equiment subclass -->
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
                            <system value=&quot;http://accumulus.org/fhir/code/deviceProperty&quot;/>
                            <code value=&quot;121212&quot;/>
                            <!-- #90 Working capacity -->
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
                            <system value=&quot;http://accumulus.org/fhir/code/deviceProperty&quot;/>
                            <code value=&quot;121212&quot;/>
                            <!-- #90 Working capacity -->
                            <display value=&quot;Maximum Speed&quot;/>
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/deviceProperty&quot;/>
                            <code value=&quot;121212&quot;/>
                            <!-- #90 Working capacity -->
                            <display value=&quot;Maximum Speed&quot;/>">Maximum Speed<span class="greyOff"> [121212]</span><span class="greyOff"> (http://accumulus.org/fhir/code/deviceProperty)</span></span></span></div>
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
                                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-dxpq&quot;>
                                    <valueReference>
                                        <reference value=&quot;SubstanceDefinition/startingMaterial&quot;/>
                                    </valueReference>
                                </extension>
                            </typeReference>
                            <role>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/manufacturingParticipantRole&quot;/>
                                    <code value=&quot;example&quot;/>
                                    <display value=&quot;StartingMaterial&quot;/>
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
                                    <system value=&quot;http://accumulus.org/fhir/code/manufacturingParticipantRole&quot;/>
                                    <code value=&quot;example&quot;/>
                                    <display value=&quot;StartingMaterial&quot;/>
                                </coding>">Role: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <participant>
                            <role>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/manufacturingParticipantRole&quot;/>
                                    <code value=&quot;example&quot;/>
                                    <display value=&quot;StartingMaterial&quot;/>">StartingMaterial<span class="greyOff"> [example]</span><span class="greyOff"> (http://accumulus.org/fhir/code/manufacturingParticipantRole)</span></span></span></div>
<div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)">
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
                    <name value=&quot;Stelbatosubstance&quot;>">Name: </span><span><span>Stelbatosubstance</span></span></div>
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
                    <reference value=&quot;Organization/substance-manufacturer&quot;/>">Manufacturer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)">
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
</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;AAA Molybdenum Products, Inc.&quot;>">Name: </span><span>AAA Molybdenum Products, Inc.</span></div>
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
                                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-dxpq&quot;>
                                    <valueReference>
                                        <reference value=&quot;SubstanceDefinition/processingMaterial&quot;/>
                                    </valueReference>
                                </extension>
                            </typeReference>
                            <role>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/manufacturingParticipantRole&quot;/>
                                    <code value=&quot;example&quot;/>
                                    <display value=&quot;ProcessingMaterial&quot;/>
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
                                    <system value=&quot;http://accumulus.org/fhir/code/manufacturingParticipantRole&quot;/>
                                    <code value=&quot;example&quot;/>
                                    <display value=&quot;ProcessingMaterial&quot;/>
                                </coding>">Role: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <participant>
                            <role>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/manufacturingParticipantRole&quot;/>
                                    <code value=&quot;example&quot;/>
                                    <display value=&quot;ProcessingMaterial&quot;/>">ProcessingMaterial<span class="greyOff"> [example]</span><span class="greyOff"> (http://accumulus.org/fhir/code/manufacturingParticipantRole)</span></span></span></div>
<div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)">
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
                    <name value=&quot;Processohol&quot;>">Name: </span><span><span>Processohol</span></span></div>
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
                    <reference value=&quot;Organization/substance-manufacturer&quot;/>">Manufacturer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)">
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
</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;AAA Molybdenum Products, Inc.&quot;>">Name: </span><span>AAA Molybdenum Products, Inc.</span></div>
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
                                <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-dxpq&quot;>
                                    <valueReference>
                                        <reference value=&quot;SubstanceDefinition/resultingMaterial&quot;/>
                                    </valueReference>
                                </extension>
                            </typeReference>
                            <role>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/manufacturingParticipantRole&quot;/>
                                    <code value=&quot;example&quot;/>
                                    <display value=&quot;ResultingMaterial&quot;/>
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
                                    <system value=&quot;http://accumulus.org/fhir/code/manufacturingParticipantRole&quot;/>
                                    <code value=&quot;example&quot;/>
                                    <display value=&quot;ResultingMaterial&quot;/>
                                </coding>">Role: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <participant>
                            <role>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/manufacturingParticipantRole&quot;/>
                                    <code value=&quot;example&quot;/>
                                    <display value=&quot;ResultingMaterial&quot;/>">ResultingMaterial<span class="greyOff"> [example]</span><span class="greyOff"> (http://accumulus.org/fhir/code/manufacturingParticipantRole)</span></span></span></div>
<div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)">
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
                    <name value=&quot;Resultothane&quot;>">Name: </span><span><span>Resultothane</span></span></div>
</div>
</div>
<div class="summaryHiddenOff"></div>
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
		First resource in bundle:PlanDefinition
		Single resource bundle:false
		Single resource bundle Not Patient Or Bundle:false
		Single resource Not Patient:false
		Patient document:false
		General Bundle:false
		Not patient related:true
		=>Patient Centric Mode:false
		SubstanceDef Centric Mode:true
		Assumed profile:--></html>
