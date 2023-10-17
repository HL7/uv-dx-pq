The HTML rendering below shows a synthetic CMC data example for Common Technical Document (CTD) Module 3: Quality, section 3.2.P.3 Manufacture, subsection 3.2.P.3.3 Description of Manufacturing Process and Process Controls.

<html>
<body>
<div class="greyable">
<div class="controls remove"><span> </span><span class="button" onclick="toggleSummary(this)" title="summary view">summary on</span><span> </span><span class="button" onclick="toggleCodes(this)" title="details of code systems">show codes</span><span> </span><span class="button" onclick="toggleDebug(this)" title="extra technical info">show debug</span><span style="float:right; margin-right:3px;"><span class="buttonNoUnderlineHidden" onclick="toggleLowerControls(this)"><sup title="expand this"> v </sup></span><span class="buttonNoUnderline" onclick="toggleRemove(this)"><sup title="close this">x</sup></span></span><span> </span><span class="button" onclick="toggleRemoveTask(this)" title="details of tasks for changes">hide task</span><span> </span><span class="button" onclick="toggleRemoveProvenance(this)" title="details of provenance for changes">hide provenance</span><span> </span><span class="button" onclick="toggleRemoveTables(this)" title="tabular data">hide tables</span><br><span> </span><span class="button" onclick="toggleDarkMode(this)" title="darkened display">dark mode</span><span> </span><span class="button" onclick="toggleApplyGreyscale(this)" title="grey and white display">greyscale</span><span> </span><span class="button" onclick="toggleBlackAndWhite(this,false)" title="black and white display">b&amp;w</span><span> </span><span class="button" onclick="togglePlainMode(this);" title="plain text display">text only</span></div>
<div class="divBody">
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
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/PlanDefinition-mnf-process-dxpq&quot;/>
                </meta>
                <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tabulateEquipment&quot;>
                    <valueBoolean value=&quot;true&quot;/>
                </extension>
                <extension url=&quot;http://accumulus.org/fhir/extension/planDocumentReference&quot;>
                    <valueReference>
                        <!-- Process flow diagram -->
                        <!-- or could be a Binary -->
                        <!-- #84 -->
                        <reference value=&quot;DocumentReference/documentreference-process-flow-diagram-dxpq-ex1&quot;/>
                    </valueReference>
                </extension>
                <extension url=&quot;http://accumulus.org/fhir/extension/historyOfProcess&quot;>
                    <valueMarkdown value=&quot;This can be text about the history&quot;/>
                </extension>
                <title value=&quot;Process 1.0&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/plan-definition-type&quot;/>
                        <code value=&quot;workflow-definition&quot;/>
                        <display value=&quot;Workflow Definition&quot;/>
                    </coding>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/planType&quot;/>
                        <code value=&quot;manufacturing-process&quot;/>
                        <display value=&quot;Manufacturing Process&quot;/>
                    </coding>
                </type>
                <status value=&quot;active&quot;/>
                <!-- #83 -->
                <subjectReference>
                    <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                </subjectReference>
                <description value=&quot;Narrative description of manufacturing process (5)&quot;/>
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
                            <text value=&quot;pH must be in range 6.9 to 7.1&quot;/>
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
                <goal id=&quot;goal-control-water-content&quot;>
                    <category>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/testCategory&quot;/>
                            <code value=&quot;C123456&quot;/>
                            <display value=&quot;Physical Property&quot;/>
                        </coding>
                    </category>
                    <description>
                        <text value=&quot;Controls - Water Content&quot;/>
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
                                <code value=&quot;WaterContent&quot;/>
                                <display value=&quot;Water content&quot;/>
                            </coding>
                            <text value=&quot;Under 2%&quot;/>
                        </measure>
                        <!--detailString value=&quot;can also be a string&quot;-->
                        <detailRange>
                            <high>
                                <value value=&quot;2&quot;/>
                                <unit value=&quot;%&quot;/>
                            </high>
                        </detailRange>
                    </target>
                </goal>
                <goal id=&quot;goal-control-particle-size&quot;>
                    <category>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/testCategory&quot;/>
                            <code value=&quot;C123456&quot;/>
                            <display value=&quot;Physical Property&quot;/>
                        </coding>
                    </category>
                    <description>
                        <text value=&quot;Controls - Particle Size&quot;/>
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
                                <code value=&quot;ParticleSize&quot;/>
                                <display value=&quot;Particle Size&quot;/>
                            </coding>
                            <text value=&quot;Under 200 microns&quot;/>
                        </measure>
                        <!--detailString value=&quot;can also be a string&quot;-->
                        <detailRange>
                            <high>
                                <value value=&quot;200&quot;/>
                                <unit value=&quot;microns&quot;/>
                            </high>
                        </detailRange>
                    </target>
                </goal>
                <actor>
                    <option>
                        <typeReference>
                            <reference value=&quot;DeviceDefinition/mixing-vessel&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://accumulus.org/fhir/code/equipmentClass&quot;/>
                                <code value=&quot;mixing-vessel&quot;/>
                                <display value=&quot;Mixing Vessel&quot;/>
                            </coding>
                        </role>
                    </option>
                </actor>
                <actor>
                    <option>
                        <typeReference>
                            <reference value=&quot;DeviceDefinition/receiving-tank&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://accumulus.org/fhir/code/equipmentClass&quot;/>
                                <code value=&quot;receiving-vessel&quot;/>
                                <display value=&quot;Receiving Vessel&quot;/>
                            </coding>
                        </role>
                    </option>
                </actor>
                <!-- outer action is the whole thing, if needed -->
                <!-- step 1 mixing -->
                <action>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processStepScale&quot;>
                        <valueCoding>
                            <system value=&quot;http://accumulus.org/fhir/code/manufacturingStepScale&quot;/>
                            <code value=&quot;ABCD&quot;/>
                            <display value=&quot;Production Scale&quot;/>
                        </valueCoding>
                    </extension>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processParameters&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/processParameter&quot;/>
                                    <code value=&quot;CAPACITY&quot;/>
                                    <display value=&quot;Capacity&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;750&quot;/>
                                <unit value=&quot;litres&quot;/>
                            </valueQuantity>
                        </extension>
                    </extension>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processParameters&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/processParameter&quot;/>
                                    <code value=&quot;TEMP-MAX&quot;/>
                                    <display value=&quot;Temperature&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;150&quot;/>
                                <unit value=&quot;°C&quot;/>
                                <system value=&quot;http://unitsofmeasure.org&quot;/>
                                <code value=&quot;Cel&quot;/>
                            </valueQuantity>
                        </extension>
                    </extension>
                    <prefix value=&quot;1&quot;/>
                    <description value=&quot;Mixing of ingredients&quot;/>
                    <code>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/manufacturingStep&quot;/>
                            <code value=&quot;1111&quot;/>
                            <display value=&quot;Mixing of ingredients&quot;/>
                        </coding>
                    </code>
                    <documentation>
                        <type value=&quot;specification-of&quot;/>
                        <resourceReference>
                            <reference value=&quot;DocumentReference/DocumentReference-image&quot;/>
                        </resourceReference>
                    </documentation>
                    <goalId value=&quot;goal-control-pH&quot;/>
                    <!--goalId value=&quot;goal-control-temp&quot;/-->
                    <participant>
                        <typeReference>
                            <!-- this is new in R5 and is not in R4B -->
                            <reference value=&quot;DeviceDefinition/mixer&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://accumulus.org/fhir/code/equipmentClass&quot;/>
                                <code value=&quot;example&quot;/>
                                <display value=&quot;Blender&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://accumulus.org/fhir/extension/manufacturingParticipant&quot;>
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
                            <extension url=&quot;http://accumulus.org/fhir/extension/manufacturingParticipant&quot;>
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
                            <extension url=&quot;http://accumulus.org/fhir/extension/manufacturingParticipant&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/StelbatololAqueousSolution&quot;/>
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
                <!-- step 2 drying -->
                <action>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processStepScale&quot;>
                        <valueCoding>
                            <system value=&quot;http://accumulus.org/fhir/code/manufacturingStepScale&quot;/>
                            <code value=&quot;ABCD&quot;/>
                            <display value=&quot;Production Scale&quot;/>
                        </valueCoding>
                    </extension>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processParameters&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/processParameter&quot;/>
                                    <!-- TODO LOINC? -->
                                    <code value=&quot;TEMPMAX&quot;/>
                                    <display value=&quot;Maximum Temperature&quot;/>
                                </coding>
                                <text value=&quot;Process temperature must be below 40°C&quot;/>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;value&quot;>
                            <!-- todo want a range here -->
                            <valueQuantity>
                                <value value=&quot;40&quot;/>
                                <unit value=&quot;°C&quot;/>
                                <system value=&quot;http://unitsofmeasure.org&quot;/>
                                <code value=&quot;Cel&quot;/>
                            </valueQuantity>
                        </extension>
                    </extension>
                    <prefix value=&quot;2&quot;/>
                    <description value=&quot;Drying using a heater&quot;/>
                    <code>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/manufacturingStep&quot;/>
                            <code value=&quot;12121&quot;/>
                            <display value=&quot;Drying&quot;/>
                        </coding>
                        <!--text value=&quot;Step 2 in the process - free text is possible&quot;/-->
                    </code>
                    <documentation>
                        <type value=&quot;specification-of&quot;/>
                        <resourceReference>
                            <reference value=&quot;DocumentReference/DocumentReference-image&quot;/>
                        </resourceReference>
                    </documentation>
                    <goalId value=&quot;goal-control-water-content&quot;/>
                    <participant>
                        <typeReference>
                            <!-- this is new in R5 and is not in R4B -->
                            <reference value=&quot;DeviceDefinition/dryer&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://accumulus.org/fhir/code/equipmentClass&quot;/>
                                <code value=&quot;example&quot;/>
                                <display value=&quot;Dryer&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://accumulus.org/fhir/extension/manufacturingParticipant&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/StelbatololAqueousSolution&quot;/>
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
                            <extension url=&quot;http://accumulus.org/fhir/extension/manufacturingParticipant&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/StelbatololGranules&quot;/>
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
                </action>
                <!-- step 3 particle size -->
                <action>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processStepScale&quot;>
                        <valueCoding>
                            <system value=&quot;http://accumulus.org/fhir/code/manufacturingStepScale&quot;/>
                            <code value=&quot;ABCD&quot;/>
                            <display value=&quot;Production Scale&quot;/>
                        </valueCoding>
                    </extension>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processParameters&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/processParameter&quot;/>
                                    <code value=&quot;ROTATIONSPEED&quot;/>
                                    <display value=&quot;Rotational Speed&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;2500&quot;/>
                                <unit value=&quot;rpm&quot;/>
                            </valueQuantity>
                        </extension>
                    </extension>
                    <prefix value=&quot;3&quot;/>
                    <description value=&quot;Particle Size Reduction by using a rotating impeller&quot;/>
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
                    <goalId value=&quot;goal-control-particle-size&quot;/>
                    <participant>
                        <typeReference>
                            <!-- this is new in R5 and is not in R4B -->
                            <reference value=&quot;DeviceDefinition/devicedefinition-dxpq-ex1&quot;/>
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
                            <extension url=&quot;http://accumulus.org/fhir/extension/manufacturingParticipant&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/StelbatololGranules&quot;/>
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
                            <extension url=&quot;http://accumulus.org/fhir/extension/manufacturingParticipant&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/Stelbatolol&quot;/>
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
                </action>
            </PlanDefinition>
        </resource>
    </entry>
    <!-- using goal for this now -->
    <!--entry>
        <fullUrl value=&quot;urn:uuid:a3d4d23a-800a-684a-6a47-fcfe44e06042&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;ControlPH&quot;/>
                <title value=&quot;pH&quot;/>
                <status value=&quot;active&quot;/>
                <category>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/controlCriticality&quot;/>
                        <code value=&quot;critical&quot;/>
                        <display value=&quot;Critical&quot;/>
                    </coding>
                </category>
                <category>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/testCategory&quot;/>
                        <code value=&quot;C123456&quot;/>
                        <display value=&quot;Physical Property&quot;/>
                    </coding>
                </category>
                <code>
                    <coding> 
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PH&quot;/>
                        <display value=&quot;pH Level&quot;/>
                    </coding>
                    <text value=&quot;Long description of the acceptance criteria - pH must be in range 6.9 to 7.1&quot;/>
                </code>
                <qualifiedValue>
                    <range>
                        <low>
                            <value value=&quot;6.9&quot;/>
                            <unit value=&quot;pH&quot;/> 
                        </low> 
                        <high>
                            <value value=&quot;7.1&quot;/>
                            <unit value=&quot;pH&quot;/>
                        </high>
                        
                    </range>
                </qualifiedValue>
            </ObservationDefinition>
        </resource>
    </entry>
    
    <entry>
        <fullUrl value=&quot;urn:uuid:a3d4d23a-800a-684a-6a47-fcfe44e06043&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;ControlTemperature&quot;/>
                <title value=&quot;Temperature&quot;/>
                <status value=&quot;active&quot;/>
                <category>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/controlCriticality&quot;/>
                        <code value=&quot;noncritical&quot;/>
                        <display value=&quot;Non Critical&quot;/>
                    </coding>
                </category>
                <category>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/testCategory&quot;/>
                        <code value=&quot;C123456&quot;/>
                        <display value=&quot;Physical Property&quot;/>
                    </coding>
                </category>
                <code>
                    <coding> 
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;TEMP&quot;/>
                        <display value=&quot;Temperature&quot;/>
                    </coding>
                    <text value=&quot;Long description of the control value - Temperatuure must be below 150°C&quot;/>
                </code>
                <qualifiedValue>
                    <range>
                        <high>
                            <value value=&quot;150&quot;/>
                            <unit value=&quot;°C&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;Cel&quot;/>
                        </high>
                    </range>
                </qualifiedValue>
            </ObservationDefinition>
        </resource>
    </entry-->
    <!-- Section 5.2 - Unit Operation/Equipment Information -->
    <entry>
        <fullUrl value=&quot;urn:uuid:82a39a18-91cf-a19d-76c1-a9e8bad9494c&quot;/>
        <resource>
            <DeviceDefinition>
                <id value=&quot;devicedefinition-dxpq-ex1&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/DeviceDefinition-dxpq&quot;/>
                </meta>
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
    <entry>
        <fullUrl value=&quot;urn:uuid:82a39a18-91cf-a19d-76c1-a9e8bbd9494c&quot;/>
        <resource>
            <DeviceDefinition>
                <id value=&quot;dryer&quot;/>
                <deviceName>
                    <name value=&quot;Heated dryer&quot;/>
                    <!-- #89 Equiment subclass -->
                    <type value=&quot;registered-name&quot;/>
                </deviceName>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/deviceProperty&quot;/>
                            <code value=&quot;121212&quot;/>
                            <display value=&quot;Power&quot;/>
                        </coding>
                    </type>
                    <valueQuantity>
                        <value value=&quot;3&quot;/>
                        <unit value=&quot;kW&quot;/>
                    </valueQuantity>
                </property>
            </DeviceDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:82a39a18-91cf-a19d-76c1-a9e8bad9494d&quot;/>
        <resource>
            <DeviceDefinition>
                <id value=&quot;mixer&quot;/>
                <deviceName>
                    <name value=&quot;Blender&quot;/>
                    <type value=&quot;registered-name&quot;/>
                </deviceName>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/deviceProperty&quot;/>
                            <code value=&quot;121212&quot;/>
                            <display value=&quot;Maximum capacity&quot;/>
                        </coding>
                    </type>
                    <valueQuantity>
                        <value value=&quot;1000&quot;/>
                        <unit value=&quot;litres&quot;/>
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
                <id value=&quot;documentreference-process-flow-diagram-dxpq-ex1&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/DocumentReference-dxpq&quot;/>
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
                        <contentType value=&quot;image/x-png&quot;/>
                        <data value=&quot;iVBORw0KGgoAAAANSUhEUgAAAgQAAAApCAYAAABKrzFXAAAAAXNSR0IArs4c6QAAEjl0RVh0bXhmaWxlACUzQ214ZmlsZSUyMGhvc3QlM0QlMjJFbGVjdHJvbiUyMiUyMG1vZGlmaWVkJTNEJTIyMjAyMy0wNy0wNlQxMyUzQTA4JTNBMDguNDgzWiUyMiUyMGFnZW50JTNEJTIyTW96aWxsYSUyRjUuMCUyMChXaW5kb3dzJTIwTlQlMjAxMC4wJTNCJTIwV2luNjQlM0IlMjB4NjQpJTIwQXBwbGVXZWJLaXQlMkY1MzcuMzYlMjAoS0hUTUwlMkMlMjBsaWtlJTIwR2Vja28pJTIwZHJhdy5pbyUyRjIxLjYuMSUyMENocm9tZSUyRjExMi4wLjU2MTUuMjA0JTIwRWxlY3Ryb24lMkYyNC42LjElMjBTYWZhcmklMkY1MzcuMzYlMjIlMjBldGFnJTNEJTIyNkMxTlFraVpHaXdVNTVadFBEMUQlMjIlMjB2ZXJzaW9uJTNEJTIyMjEuNi4xJTIyJTIwdHlwZSUzRCUyMmRldmljZSUyMiUzRSUwQSUyMCUyMCUzQ2RpYWdyYW0lMjBpZCUzRCUyMkM1UkJzNDNvRGEtS2R6WmVOdHV5JTIyJTIwbmFtZSUzRCUyMlBhZ2UtMSUyMiUzRSUwQSUyMCUyMCUyMCUyMCUzQ214R3JhcGhNb2RlbCUyMGR4JTNEJTIyMTAzNiUyMiUyMGR5JTNEJTIyMTc4MyUyMiUyMGdyaWQlM0QlMjIxJTIyJTIwZ3JpZFNpemUlM0QlMjIxMCUyMiUyMGd1aWRlcyUzRCUyMjElMjIlMjB0b29sdGlwcyUzRCUyMjElMjIlMjBjb25uZWN0JTNEJTIyMSUyMiUyMGFycm93cyUzRCUyMjElMjIlMjBmb2xkJTNEJTIyMSUyMiUyMHBhZ2UlM0QlMjIxJTIyJTIwcGFnZVNjYWxlJTNEJTIyMSUyMiUyMHBhZ2VXaWR0aCUzRCUyMjgyNyUyMiUyMHBhZ2VIZWlnaHQlM0QlMjIxMTY5JTIyJTIwYmFja2dyb3VuZCUzRCUyMm5vbmUlMjIlMjBtYXRoJTNEJTIyMCUyMiUyMHNoYWRvdyUzRCUyMjAlMjIlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlM0Nyb290JTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDbXhDZWxsJTIwaWQlM0QlMjJXSXlXbExrNkdKUXNxYVVCS1ROVi0wJTIyJTIwJTJGJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDbXhDZWxsJTIwaWQlM0QlMjJXSXlXbExrNkdKUXNxYVVCS1ROVi0xJTIyJTIwcGFyZW50JTNEJTIyV0l5V2xMazZHSlFzcWFVQktUTlYtMCUyMiUyMCUyRiUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ214Q2VsbCUyMGlkJTNEJTIyS2g2VVdDcUxFb3V5cUZPSzdudE0tOSUyMiUyMHZhbHVlJTNEJTIyJTIyJTIwc3R5bGUlM0QlMjJlbmRBcnJvdyUzRGNsYXNzaWMlM0JodG1sJTNEMSUzQnJvdW5kZWQlM0QwJTNCZXhpdFglM0QxJTNCZXhpdFklM0QwLjUlM0JleGl0RHglM0QwJTNCZXhpdER5JTNEMCUzQmVudHJ5WCUzRDAlM0JlbnRyeVklM0QwLjUlM0JlbnRyeUR4JTNEMCUzQmVudHJ5RHklM0QwJTNCJTIyJTIwcGFyZW50JTNEJTIyV0l5V2xMazZHSlFzcWFVQktUTlYtMSUyMiUyMHNvdXJjZSUzRCUyMktoNlVXQ3FMRW91eXFGT0s3bnRNLTI1JTIyJTIwdGFyZ2V0JTNEJTIyRjYyX0J4bjByeDdnZzNWUllyNWgtMCUyMiUyMGVkZ2UlM0QlMjIxJTIyJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDbXhHZW9tZXRyeSUyMHdpZHRoJTNEJTIyNTAlMjIlMjBoZWlnaHQlM0QlMjI1MCUyMiUyMHJlbGF0aXZlJTNEJTIyMSUyMiUyMGFzJTNEJTIyZ2VvbWV0cnklMjIlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NteFBvaW50JTIweCUzRCUyMjQ4MS40MzAwMDAwMDAwMDAwNiUyMiUyMHklM0QlMjItNjAlMjIlMjBhcyUzRCUyMnNvdXJjZVBvaW50JTIyJTIwJTJGJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDbXhQb2ludCUyMHglM0QlMjIzMDYlMjIlMjB5JTNEJTIyLTE2MCUyMiUyMGFzJTNEJTIydGFyZ2V0UG9pbnQlMjIlMjAlMkYlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0MlMkZteEdlb21ldHJ5JTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDJTJGbXhDZWxsJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDbXhDZWxsJTIwaWQlM0QlMjJLaDZVV0NxTEVvdXlxRk9LN250TS0yNSUyMiUyMHZhbHVlJTNEJTIyU3RlcCUyMDElMjZsdCUzQmJyJTI2Z3QlM0IlMjZsdCUzQmklMjZndCUzQk1peGluZyUyNmx0JTNCJTJGaSUyNmd0JTNCJTIyJTIwc3R5bGUlM0QlMjJyb3VuZGVkJTNEMSUzQndoaXRlU3BhY2UlM0R3cmFwJTNCaHRtbCUzRDElM0Jmb250U2l6ZSUzRDEyJTNCZ2xhc3MlM0QwJTNCc3Ryb2tlV2lkdGglM0QxJTNCc2hhZG93JTNEMCUzQmZpbGxDb2xvciUzRCUyM2Y4Y2VjYyUzQnN0cm9rZUNvbG9yJTNEJTIzYjg1NDUwJTNCJTIyJTIwcGFyZW50JTNEJTIyV0l5V2xMazZHSlFzcWFVQktUTlYtMSUyMiUyMHZlcnRleCUzRCUyMjElMjIlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NteEdlb21ldHJ5JTIweCUzRCUyMjEyMCUyMiUyMHklM0QlMjItMjMwJTIyJTIwd2lkdGglM0QlMjIxMjAlMjIlMjBoZWlnaHQlM0QlMjI0MCUyMiUyMGFzJTNEJTIyZ2VvbWV0cnklMjIlMjAlMkYlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0MlMkZteENlbGwlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NteENlbGwlMjBpZCUzRCUyMkY2Ml9CeG4wcng3Z2czVlJZcjVoLTAlMjIlMjB2YWx1ZSUzRCUyMlN0ZXAlMjAyJTI2bHQlM0JiciUyNmd0JTNCJTI2bHQlM0JpJTI2Z3QlM0JEcnlpbmclMjZsdCUzQiUyRmklMjZndCUzQiUyMiUyMHN0eWxlJTNEJTIycm91bmRlZCUzRDElM0J3aGl0ZVNwYWNlJTNEd3JhcCUzQmh0bWwlM0QxJTNCZm9udFNpemUlM0QxMiUzQmdsYXNzJTNEMCUzQnN0cm9rZVdpZHRoJTNEMSUzQnNoYWRvdyUzRDAlM0JmaWxsQ29sb3IlM0QlMjNmOGNlY2MlM0JzdHJva2VDb2xvciUzRCUyM2I4NTQ1MCUzQiUyMiUyMHZlcnRleCUzRCUyMjElMjIlMjBwYXJlbnQlM0QlMjJXSXlXbExrNkdKUXNxYVVCS1ROVi0xJTIyJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDbXhHZW9tZXRyeSUyMHglM0QlMjIyODAlMjIlMjB5JTNEJTIyLTIzMCUyMiUyMHdpZHRoJTNEJTIyMTIwJTIyJTIwaGVpZ2h0JTNEJTIyNDAlMjIlMjBhcyUzRCUyMmdlb21ldHJ5JTIyJTIwJTJGJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDJTJGbXhDZWxsJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDbXhDZWxsJTIwaWQlM0QlMjJGNjJfQnhuMHJ4N2dnM1ZSWXI1aC0zJTIyJTIwdmFsdWUlM0QlMjJTdGVwJTIwMyUyNmx0JTNCYnIlMjZndCUzQiUyNmx0JTNCaSUyNmd0JTNCUGFydGljbGUlMjBTaXplJTIwUmVkdWN0aW9uJTI2bHQlM0IlMkZpJTI2Z3QlM0IlMjIlMjBzdHlsZSUzRCUyMnJvdW5kZWQlM0QxJTNCd2hpdGVTcGFjZSUzRHdyYXAlM0JodG1sJTNEMSUzQmZvbnRTaXplJTNEMTIlM0JnbGFzcyUzRDAlM0JzdHJva2VXaWR0aCUzRDElM0JzaGFkb3clM0QwJTNCZmlsbENvbG9yJTNEJTIzZjhjZWNjJTNCc3Ryb2tlQ29sb3IlM0QlMjNiODU0NTAlM0IlMjIlMjB2ZXJ0ZXglM0QlMjIxJTIyJTIwcGFyZW50JTNEJTIyV0l5V2xMazZHSlFzcWFVQktUTlYtMSUyMiUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ214R2VvbWV0cnklMjB4JTNEJTIyNDQwJTIyJTIweSUzRCUyMi0yMzAlMjIlMjB3aWR0aCUzRCUyMjE5NC41JTIyJTIwaGVpZ2h0JTNEJTIyNDAlMjIlMjBhcyUzRCUyMmdlb21ldHJ5JTIyJTIwJTJGJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDJTJGbXhDZWxsJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDbXhDZWxsJTIwaWQlM0QlMjJGNjJfQnhuMHJ4N2dnM1ZSWXI1aC01JTIyJTIwdmFsdWUlM0QlMjIlMjIlMjBzdHlsZSUzRCUyMmVuZEFycm93JTNEY2xhc3NpYyUzQmh0bWwlM0QxJTNCcm91bmRlZCUzRDAlM0JleGl0WCUzRDElM0JleGl0WSUzRDAuNSUzQmV4aXREeCUzRDAlM0JleGl0RHklM0QwJTNCZW50cnlYJTNEMCUzQmVudHJ5WSUzRDAuNSUzQmVudHJ5RHglM0QwJTNCZW50cnlEeSUzRDAlM0IlMjIlMjBlZGdlJTNEJTIyMSUyMiUyMHBhcmVudCUzRCUyMldJeVdsTGs2R0pRc3FhVUJLVE5WLTElMjIlMjBzb3VyY2UlM0QlMjJGNjJfQnhuMHJ4N2dnM1ZSWXI1aC0wJTIyJTIwdGFyZ2V0JTNEJTIyRjYyX0J4bjByeDdnZzNWUllyNWgtMyUyMiUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ214R2VvbWV0cnklMjB3aWR0aCUzRCUyMjUwJTIyJTIwaGVpZ2h0JTNEJTIyNTAlMjIlMjByZWxhdGl2ZSUzRCUyMjElMjIlMjBhcyUzRCUyMmdlb21ldHJ5JTIyJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDbXhQb2ludCUyMHglM0QlMjIzMTYlMjIlMjB5JTNEJTIyLTE5MCUyMiUyMGFzJTNEJTIyc291cmNlUG9pbnQlMjIlMjAlMkYlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NteFBvaW50JTIweCUzRCUyMjMwNiUyMiUyMHklM0QlMjItODAlMjIlMjBhcyUzRCUyMnRhcmdldFBvaW50JTIy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&quot;/>
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
        <fullUrl value=&quot;urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d6&quot;/>
        <resource>
            <Ingredient>
                <id value=&quot;productIngredient&quot;/>
                <status value=&quot;active&quot;/>
                <for>
                    <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                </for>
                <role>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/ingredient-role&quot;/>
                        <code value=&quot;100000072072&quot;/>
                        <display value=&quot;Active&quot;/>
                    </coding>
                </role>
                <substance>
                    <code>
                        <reference>
                            <reference value=&quot;SubstanceDefinition/Stelbatolol&quot;/>
                        </reference>
                    </code>
                </substance>
            </Ingredient>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:c458791f-7cb8-428e-83f7-8a205f821152&quot;/>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;Stelbatolol&quot;/>
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
        <fullUrl value=&quot;urn:uuid:c458791f-7cb8-428e-83f7-8a205f821113&quot;/>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;StelbatololGranules&quot;/>
                <name>
                    <name value=&quot;Stelbatolol Granules&quot;/>
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
        <fullUrl value=&quot;urn:uuid:8d61736c-a6e3-8301-659f-17da402e012a&quot;/>
        <resource>
            <Organization>
                <id value=&quot;manufacturerProcessingMaterial&quot;/>
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
                <id value=&quot;StelbatololAqueousSolution&quot;/>
                <name>
                    <name value=&quot;Stelbatolol Aqueous Solution&quot;/>
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
                    <reference value=&quot;Organization/manufacturerProcessingMaterial&quot;/>
                </manufacturer>
                <name>
                    <name value=&quot;Processohol&quot;/>
                </name>
            </SubstanceDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:82a39a18-91cf-a29d-76c1-a9e8bad9494d&quot;/>
        <resource>
            <DeviceDefinition>
                <id value=&quot;mixing-vessel&quot;/>
                <deviceName>
                    <name value=&quot;Mixing Vessel&quot;/>
                    <type value=&quot;registered-name&quot;/>
                </deviceName>
                <classification>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/deviceType&quot;/>
                            <code value=&quot;mixing-vessel&quot;/>
                            <display value=&quot;Mixing Vessel&quot;/>
                        </coding>
                    </type>
                </classification>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/deviceProperty&quot;/>
                            <code value=&quot;capacity&quot;/>
                            <display value=&quot;Capacity&quot;/>
                            <!-- seems a little different to &quot;maximum capacity -->
                        </coding>
                    </type>
                    <valueQuantity>
                        <value value=&quot;1000&quot;/>
                        <unit value=&quot;litres&quot;/>
                    </valueQuantity>
                </property>
            </DeviceDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:82a39a18-91cf-b29d-76c1-a9e8bad9494d&quot;/>
        <resource>
            <DeviceDefinition>
                <id value=&quot;receiving-tank&quot;/>
                <deviceName>
                    <name value=&quot;Receiving Tank&quot;/>
                    <type value=&quot;registered-name&quot;/>
                </deviceName>
                <classification>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/deviceType&quot;/>
                            <code value=&quot;receiving-tank&quot;/>
                            <display value=&quot;Receiving Tank&quot;/>
                        </coding>
                    </type>
                </classification>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/deviceProperty&quot;/>
                            <code value=&quot;capacity&quot;/>
                            <display value=&quot;Capacity&quot;/>
                            <!-- seems a little different to &quot;maximum capacity -->
                        </coding>
                    </type>
                    <valueQuantity>
                        <value value=&quot;1200&quot;/>
                        <unit value=&quot;litres&quot;/>
                    </valueQuantity>
                </property>
            </DeviceDefinition>
        </resource>
    </entry>" id="Bundle-product-manufacturing">Bundle</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/bundle.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/bundle.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/bundle.html#tt-uml">R6</a>]</span><div class="debugOff">id: product-manufacturing</div>
<div class="debugOff"></div>
<div><span title="
<Bundle>
    ...
    <type value=&quot;collection&quot;>">Type: </span><span><span>collection</span></span></div>
</div>
</div>
<div class="indent plan summaryUnit" ondblclick="summaryHandler(event)"><a class="plainLink"><span class="bold" title="PlanDefinition (id: manufacturingProcess-unlinked)(fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a)
Profile: http://hl7.org/fhir/uv/dx-pq/StructureDefinition/PlanDefinition-mnf-process-dxpq 

<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <id value=&quot;manufacturingProcess-unlinked&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/PlanDefinition-mnf-process-dxpq&quot;/>
                </meta>
                <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tabulateEquipment&quot;>
                    <valueBoolean value=&quot;true&quot;/>
                </extension>
                <extension url=&quot;http://accumulus.org/fhir/extension/planDocumentReference&quot;>
                    <valueReference>
                        <!-- Process flow diagram -->
                        <!-- or could be a Binary -->
                        <!-- #84 -->
                        <reference value=&quot;DocumentReference/documentreference-process-flow-diagram-dxpq-ex1&quot;/>
                    </valueReference>
                </extension>
                <extension url=&quot;http://accumulus.org/fhir/extension/historyOfProcess&quot;>
                    <valueMarkdown value=&quot;This can be text about the history&quot;/>
                </extension>
                <title value=&quot;Process 1.0&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/plan-definition-type&quot;/>
                        <code value=&quot;workflow-definition&quot;/>
                        <display value=&quot;Workflow Definition&quot;/>
                    </coding>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/planType&quot;/>
                        <code value=&quot;manufacturing-process&quot;/>
                        <display value=&quot;Manufacturing Process&quot;/>
                    </coding>
                </type>
                <status value=&quot;active&quot;/>
                <!-- #83 -->
                <subjectReference>
                    <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                </subjectReference>
                <description value=&quot;Narrative description of manufacturing process (5)&quot;/>
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
                            <text value=&quot;pH must be in range 6.9 to 7.1&quot;/>
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
                <goal id=&quot;goal-control-water-content&quot;>
                    <category>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/testCategory&quot;/>
                            <code value=&quot;C123456&quot;/>
                            <display value=&quot;Physical Property&quot;/>
                        </coding>
                    </category>
                    <description>
                        <text value=&quot;Controls - Water Content&quot;/>
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
                                <code value=&quot;WaterContent&quot;/>
                                <display value=&quot;Water content&quot;/>
                            </coding>
                            <text value=&quot;Under 2%&quot;/>
                        </measure>
                        <!--detailString value=&quot;can also be a string&quot;-->
                        <detailRange>
                            <high>
                                <value value=&quot;2&quot;/>
                                <unit value=&quot;%&quot;/>
                            </high>
                        </detailRange>
                    </target>
                </goal>
                <goal id=&quot;goal-control-particle-size&quot;>
                    <category>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/testCategory&quot;/>
                            <code value=&quot;C123456&quot;/>
                            <display value=&quot;Physical Property&quot;/>
                        </coding>
                    </category>
                    <description>
                        <text value=&quot;Controls - Particle Size&quot;/>
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
                                <code value=&quot;ParticleSize&quot;/>
                                <display value=&quot;Particle Size&quot;/>
                            </coding>
                            <text value=&quot;Under 200 microns&quot;/>
                        </measure>
                        <!--detailString value=&quot;can also be a string&quot;-->
                        <detailRange>
                            <high>
                                <value value=&quot;200&quot;/>
                                <unit value=&quot;microns&quot;/>
                            </high>
                        </detailRange>
                    </target>
                </goal>
                <actor>
                    <option>
                        <typeReference>
                            <reference value=&quot;DeviceDefinition/mixing-vessel&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://accumulus.org/fhir/code/equipmentClass&quot;/>
                                <code value=&quot;mixing-vessel&quot;/>
                                <display value=&quot;Mixing Vessel&quot;/>
                            </coding>
                        </role>
                    </option>
                </actor>
                <actor>
                    <option>
                        <typeReference>
                            <reference value=&quot;DeviceDefinition/receiving-tank&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://accumulus.org/fhir/code/equipmentClass&quot;/>
                                <code value=&quot;receiving-vessel&quot;/>
                                <display value=&quot;Receiving Vessel&quot;/>
                            </coding>
                        </role>
                    </option>
                </actor>
                <!-- outer action is the whole thing, if needed -->
                <!-- step 1 mixing -->
                <action>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processStepScale&quot;>
                        <valueCoding>
                            <system value=&quot;http://accumulus.org/fhir/code/manufacturingStepScale&quot;/>
                            <code value=&quot;ABCD&quot;/>
                            <display value=&quot;Production Scale&quot;/>
                        </valueCoding>
                    </extension>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processParameters&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/processParameter&quot;/>
                                    <code value=&quot;CAPACITY&quot;/>
                                    <display value=&quot;Capacity&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;750&quot;/>
                                <unit value=&quot;litres&quot;/>
                            </valueQuantity>
                        </extension>
                    </extension>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processParameters&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/processParameter&quot;/>
                                    <code value=&quot;TEMP-MAX&quot;/>
                                    <display value=&quot;Temperature&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;150&quot;/>
                                <unit value=&quot;°C&quot;/>
                                <system value=&quot;http://unitsofmeasure.org&quot;/>
                                <code value=&quot;Cel&quot;/>
                            </valueQuantity>
                        </extension>
                    </extension>
                    <prefix value=&quot;1&quot;/>
                    <description value=&quot;Mixing of ingredients&quot;/>
                    <code>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/manufacturingStep&quot;/>
                            <code value=&quot;1111&quot;/>
                            <display value=&quot;Mixing of ingredients&quot;/>
                        </coding>
                    </code>
                    <documentation>
                        <type value=&quot;specification-of&quot;/>
                        <resourceReference>
                            <reference value=&quot;DocumentReference/DocumentReference-image&quot;/>
                        </resourceReference>
                    </documentation>
                    <goalId value=&quot;goal-control-pH&quot;/>
                    <!--goalId value=&quot;goal-control-temp&quot;/-->
                    <participant>
                        <typeReference>
                            <!-- this is new in R5 and is not in R4B -->
                            <reference value=&quot;DeviceDefinition/mixer&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://accumulus.org/fhir/code/equipmentClass&quot;/>
                                <code value=&quot;example&quot;/>
                                <display value=&quot;Blender&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://accumulus.org/fhir/extension/manufacturingParticipant&quot;>
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
                            <extension url=&quot;http://accumulus.org/fhir/extension/manufacturingParticipant&quot;>
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
                            <extension url=&quot;http://accumulus.org/fhir/extension/manufacturingParticipant&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/StelbatololAqueousSolution&quot;/>
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
                <!-- step 2 drying -->
                <action>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processStepScale&quot;>
                        <valueCoding>
                            <system value=&quot;http://accumulus.org/fhir/code/manufacturingStepScale&quot;/>
                            <code value=&quot;ABCD&quot;/>
                            <display value=&quot;Production Scale&quot;/>
                        </valueCoding>
                    </extension>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processParameters&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/processParameter&quot;/>
                                    <!-- TODO LOINC? -->
                                    <code value=&quot;TEMPMAX&quot;/>
                                    <display value=&quot;Maximum Temperature&quot;/>
                                </coding>
                                <text value=&quot;Process temperature must be below 40°C&quot;/>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;value&quot;>
                            <!-- todo want a range here -->
                            <valueQuantity>
                                <value value=&quot;40&quot;/>
                                <unit value=&quot;°C&quot;/>
                                <system value=&quot;http://unitsofmeasure.org&quot;/>
                                <code value=&quot;Cel&quot;/>
                            </valueQuantity>
                        </extension>
                    </extension>
                    <prefix value=&quot;2&quot;/>
                    <description value=&quot;Drying using a heater&quot;/>
                    <code>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/manufacturingStep&quot;/>
                            <code value=&quot;12121&quot;/>
                            <display value=&quot;Drying&quot;/>
                        </coding>
                        <!--text value=&quot;Step 2 in the process - free text is possible&quot;/-->
                    </code>
                    <documentation>
                        <type value=&quot;specification-of&quot;/>
                        <resourceReference>
                            <reference value=&quot;DocumentReference/DocumentReference-image&quot;/>
                        </resourceReference>
                    </documentation>
                    <goalId value=&quot;goal-control-water-content&quot;/>
                    <participant>
                        <typeReference>
                            <!-- this is new in R5 and is not in R4B -->
                            <reference value=&quot;DeviceDefinition/dryer&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://accumulus.org/fhir/code/equipmentClass&quot;/>
                                <code value=&quot;example&quot;/>
                                <display value=&quot;Dryer&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://accumulus.org/fhir/extension/manufacturingParticipant&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/StelbatololAqueousSolution&quot;/>
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
                            <extension url=&quot;http://accumulus.org/fhir/extension/manufacturingParticipant&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/StelbatololGranules&quot;/>
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
                </action>
                <!-- step 3 particle size -->
                <action>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processStepScale&quot;>
                        <valueCoding>
                            <system value=&quot;http://accumulus.org/fhir/code/manufacturingStepScale&quot;/>
                            <code value=&quot;ABCD&quot;/>
                            <display value=&quot;Production Scale&quot;/>
                        </valueCoding>
                    </extension>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processParameters&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/processParameter&quot;/>
                                    <code value=&quot;ROTATIONSPEED&quot;/>
                                    <display value=&quot;Rotational Speed&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;2500&quot;/>
                                <unit value=&quot;rpm&quot;/>
                            </valueQuantity>
                        </extension>
                    </extension>
                    <prefix value=&quot;3&quot;/>
                    <description value=&quot;Particle Size Reduction by using a rotating impeller&quot;/>
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
                    <goalId value=&quot;goal-control-particle-size&quot;/>
                    <participant>
                        <typeReference>
                            <!-- this is new in R5 and is not in R4B -->
                            <reference value=&quot;DeviceDefinition/devicedefinition-dxpq-ex1&quot;/>
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
                            <extension url=&quot;http://accumulus.org/fhir/extension/manufacturingParticipant&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/StelbatololGranules&quot;/>
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
                            <extension url=&quot;http://accumulus.org/fhir/extension/manufacturingParticipant&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/Stelbatolol&quot;/>
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
                </action>" id="PlanDefinition-manufacturingProcess-unlinked">Plan</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/plandefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/plandefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/plandefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: manufacturingProcess-unlinked</div>
<div class="debugOff"> fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a</div>
<div class="debugOff"></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <title value=&quot;Process 1.0&quot;>">Title: </span><span>Process 1.0</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <description value=&quot;Narrative description of manufacturing process (5)&quot;>">Description: </span><span>Narrative description of manufacturing process (5)</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/plan-definition-type&quot;/>
                        <code value=&quot;workflow-definition&quot;/>
                        <display value=&quot;Workflow Definition&quot;/>
                    </coding>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/planType&quot;/>
                        <code value=&quot;manufacturing-process&quot;/>
                        <display value=&quot;Manufacturing Process&quot;/>
                    </coding>">Type: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/plan-definition-type&quot;/>
                        <code value=&quot;workflow-definition&quot;/>
                        <display value=&quot;Workflow Definition&quot;/>">Workflow Definition<span class="greyOff"> [workflow-definition]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/plan-definition-type)</span></span>, <span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <type>
                    ...
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/planType&quot;/>
                        <code value=&quot;manufacturing-process&quot;/>
                        <display value=&quot;Manufacturing Process&quot;/>">Manufacturing Process<span class="greyOff"> [manufacturing-process]</span><span class="greyOff"> (http://accumulus.org/fhir/code/planType)</span></span></div>
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
                <extension url=&quot;http://accumulus.org/fhir/extension/historyOfProcess&quot;>
                    <valueMarkdown value=&quot;This can be text about the history&quot;/>">History: </span><span>This can be text about the history</span></div>
</div>
<div class="indent org summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (PlanDefinition/valueReference, id: manufacturingProcess-unlinked fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="DocumentReference (id: documentreference-process-flow-diagram-dxpq-ex1)(fullUrl: urn:uuid:74d4c070-6596-8252-8ad9-afa515a41feb)
Profile: http://hl7.org/fhir/uv/dx-pq/StructureDefinition/DocumentReference-dxpq 

<Bundle>
    <entry>
        <resource>
            <DocumentReference>
                <id value=&quot;documentreference-process-flow-diagram-dxpq-ex1&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/DocumentReference-dxpq&quot;/>
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
                        <contentType value=&quot;image/x-png&quot;/>
                        <data value=&quot;iVBORw0KGgoAAAANSUhEUgAAAgQAAAApCAYAAABKrzFXAAAAAXNSR0IArs4c6QAAEjl0RVh0bXhmaWxlACUzQ214ZmlsZSUyMGhvc3QlM0QlMjJFbGVjdHJvbiUyMiUyMG1vZGlmaWVkJTNEJTIyMjAyMy0wNy0wNlQxMyUzQTA4JTNBMDguNDgzWiUyMiUyMGFnZW50JTNEJTIyTW96aWxsYSUyRjUuMCUyMChXaW5kb3dzJTIwTlQlMjAxMC4wJTNCJTIwV2luNjQlM0IlMjB4NjQpJTIwQXBwbGVXZWJLaXQlMkY1MzcuMzYlMjAoS0hUTUwlMkMlMjBsaWtlJTIwR2Vja28pJTIwZHJhdy5pbyUyRjIxLjYuMSUyMENocm9tZSUyRjExMi4wLjU2MTUuMjA0JTIwRWxlY3Ryb24lMkYyNC42LjElMjBTYWZhcmklMkY1MzcuMzYlMjIlMjBldGFnJTNEJTIyNkMxTlFraVpHaXdVNTVadFBEMUQlMjIlMjB2ZXJzaW9uJTNEJTIyMjEuNi4xJTIyJTIwdHlwZSUzRCUyMmRldmljZSUyMiUzRSUwQSUyMCUyMCUzQ2RpYWdyYW0lMjBpZCUzRCUyMkM1UkJzNDNvRGEtS2R6WmVOdHV5JTIyJTIwbmFtZSUzRCUyMlBhZ2UtMSUyMiUzRSUwQSUyMCUyMCUyMCUyMCUzQ214R3JhcGhNb2RlbCUyMGR4JTNEJTIyMTAzNiUyMiUyMGR5JTNEJTIyMTc4MyUyMiUyMGdyaWQlM0QlMjIxJTIyJTIwZ3JpZFNpemUlM0QlMjIxMCUyMiUyMGd1aWRlcyUzRCUyMjElMjIlMjB0b29sdGlwcyUzRCUyMjElMjIlMjBjb25uZWN0JTNEJTIyMSUyMiUyMGFycm93cyUzRCUyMjElMjIlMjBmb2xkJTNEJTIyMSUyMiUyMHBhZ2UlM0QlMjIxJTIyJTIwcGFnZVNjYWxlJTNEJTIyMSUyMiUyMHBhZ2VXaWR0aCUzRCUyMjgyNyUyMiUyMHBhZ2VIZWlnaHQlM0QlMjIxMTY5JTIyJTIwYmFja2dyb3VuZCUzRCUyMm5vbmUlMjIlMjBtYXRoJTNEJTIyMCUyMiUyMHNoYWRvdyUzRCUyMjAlMjIlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlM0Nyb290JTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDbXhDZWxsJTIwaWQlM0QlMjJXSXlXbExrNkdKUXNxYVVCS1ROVi0wJTIyJTIwJTJGJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDbXhDZWxsJTIwaWQlM0QlMjJXSXlXbExrNkdKUXNxYVVCS1ROVi0xJTIyJTIwcGFyZW50JTNEJTIyV0l5V2xMazZHSlFzcWFVQktUTlYtMCUyMiUyMCUyRiUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ214Q2VsbCUyMGlkJTNEJTIyS2g2VVdDcUxFb3V5cUZPSzdudE0tOSUyMiUyMHZhbHVlJTNEJTIyJTIyJTIwc3R5bGUlM0QlMjJlbmRBcnJvdyUzRGNsYXNzaWMlM0JodG1sJTNEMSUzQnJvdW5kZWQlM0QwJTNCZXhpdFglM0QxJTNCZXhpdFklM0QwLjUlM0JleGl0RHglM0QwJTNCZXhpdER5JTNEMCUzQmVudHJ5WCUzRDAlM0JlbnRyeVklM0QwLjUlM0JlbnRyeUR4JTNEMCUzQmVudHJ5RHklM0QwJTNCJTIyJTIwcGFyZW50JTNEJTIyV0l5V2xMazZHSlFzcWFVQktUTlYtMSUyMiUyMHNvdXJjZSUzRCUyMktoNlVXQ3FMRW91eXFGT0s3bnRNLTI1JTIyJTIwdGFyZ2V0JTNEJTIyRjYyX0J4bjByeDdnZzNWUllyNWgtMCUyMiUyMGVkZ2UlM0QlMjIxJTIyJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDbXhHZW9tZXRyeSUyMHdpZHRoJTNEJTIyNTAlMjIlMjBoZWlnaHQlM0QlMjI1MCUyMiUyMHJlbGF0aXZlJTNEJTIyMSUyMiUyMGFzJTNEJTIyZ2VvbWV0cnklMjIlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NteFBvaW50JTIweCUzRCUyMjQ4MS40MzAwMDAwMDAwMDAwNiUyMiUyMHklM0QlMjItNjAlMjIlMjBhcyUzRCUyMnNvdXJjZVBvaW50JTIyJTIwJTJGJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDbXhQb2ludCUyMHglM0QlMjIzMDYlMjIlMjB5JTNEJTIyLTE2MCUyMiUyMGFzJTNEJTIydGFyZ2V0UG9pbnQlMjIlMjAlMkYlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0MlMkZteEdlb21ldHJ5JTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDJTJGbXhDZWxsJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDbXhDZWxsJTIwaWQlM0QlMjJLaDZVV0NxTEVvdXlxRk9LN250TS0yNSUyMiUyMHZhbHVlJTNEJTIyU3RlcCUyMDElMjZsdCUzQmJyJTI2Z3QlM0IlMjZsdCUzQmklMjZndCUzQk1peGluZyUyNmx0JTNCJTJGaSUyNmd0JTNCJTIyJTIwc3R5bGUlM0QlMjJyb3VuZGVkJTNEMSUzQndoaXRlU3BhY2UlM0R3cmFwJTNCaHRtbCUzRDElM0Jmb250U2l6ZSUzRDEyJTNCZ2xhc3MlM0QwJTNCc3Ryb2tlV2lkdGglM0QxJTNCc2hhZG93JTNEMCUzQmZpbGxDb2xvciUzRCUyM2Y4Y2VjYyUzQnN0cm9rZUNvbG9yJTNEJTIzYjg1NDUwJTNCJTIyJTIwcGFyZW50JTNEJTIyV0l5V2xMazZHSlFzcWFVQktUTlYtMSUyMiUyMHZlcnRleCUzRCUyMjElMjIlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NteEdlb21ldHJ5JTIweCUzRCUyMjEyMCUyMiUyMHklM0QlMjItMjMwJTIyJTIwd2lkdGglM0QlMjIxMjAlMjIlMjBoZWlnaHQlM0QlMjI0MCUyMiUyMGFzJTNEJTIyZ2VvbWV0cnklMjIlMjAlMkYlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0MlMkZteENlbGwlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NteENlbGwlMjBpZCUzRCUyMkY2Ml9CeG4wcng3Z2czVlJZcjVoLTAlMjIlMjB2YWx1ZSUzRCUyMlN0ZXAlMjAyJTI2bHQlM0JiciUyNmd0JTNCJTI2bHQlM0JpJTI2Z3QlM0JEcnlpbmclMjZsdCUzQiUyRmklMjZndCUzQiUyMiUyMHN0eWxlJTNEJTIycm91bmRlZCUzRDElM0J3aGl0ZVNwYWNlJTNEd3JhcCUzQmh0bWwlM0QxJTNCZm9udFNpemUlM0QxMiUzQmdsYXNzJTNEMCUzQnN0cm9rZVdpZHRoJTNEMSUzQnNoYWRvdyUzRDAlM0JmaWxsQ29sb3IlM0QlMjNmOGNlY2MlM0JzdHJva2VDb2xvciUzRCUyM2I4NTQ1MCUzQiUyMiUyMHZlcnRleCUzRCUyMjElMjIlMjBwYXJlbnQlM0QlMjJXSXlXbExrNkdKUXNxYVVCS1ROVi0xJTIyJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDbXhHZW9tZXRyeSUyMHglM0QlMjIyODAlMjIlMjB5JTNEJTIyLTIzMCUyMiUyMHdpZHRoJTNEJTIyMTIwJTIyJTIwaGVpZ2h0JTNEJTIyNDAlMjIlMjBhcyUzRCUyMmdlb21ldHJ5JTIyJTIwJTJGJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDJTJGbXhDZWxsJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDbXhDZWxsJTIwaWQlM0QlMjJGNjJfQnhuMHJ4N2dnM1ZSWXI1aC0zJTIyJTIwdmFsdWUlM0QlMjJTdGVwJTIwMyUyNmx0JTNCYnIlMjZndCUzQiUyNmx0JTNCaSUyNmd0JTNCUGFydGljbGUlMjBTaXplJTIwUmVkdWN0aW9uJTI2bHQlM0IlMkZpJTI2Z3QlM0IlMjIlMjBzdHlsZSUzRCUyMnJvdW5kZWQlM0QxJTNCd2hpdGVTcGFjZSUzRHdyYXAlM0JodG1sJTNEMSUzQmZvbnRTaXplJTNEMTIlM0JnbGFzcyUzRDAlM0JzdHJva2VXaWR0aCUzRDElM0JzaGFkb3clM0QwJTNCZmlsbENvbG9yJTNEJTIzZjhjZWNjJTNCc3Ryb2tlQ29sb3IlM0QlMjNiODU0NTAlM0IlMjIlMjB2ZXJ0ZXglM0QlMjIxJTIyJTIwcGFyZW50JTNEJTIyV0l5V2xMazZHSlFzcWFVQktUTlYtMSUyMiUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ214R2VvbWV0cnklMjB4JTNEJTIyNDQwJTIyJTIweSUzRCUyMi0yMzAlMjIlMjB3aWR0aCUzRCUyMjE5NC41JTIyJTIwaGVpZ2h0JTNEJTIyNDAlMjIlMjBhcyUzRCUyMmdlb21ldHJ5JTIyJTIwJTJGJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDJTJGbXhDZWxsJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDbXhDZWxsJTIwaWQlM0QlMjJGNjJfQnhuMHJ4N2dnM1ZSWXI1aC01JTIyJTIwdmFsdWUlM0QlMjIlMjIlMjBzdHlsZSUzRCUyMmVuZEFycm93JTNEY2xhc3NpYyUzQmh0bWwlM0QxJTNCcm91bmRlZCUzRDAlM0JleGl0WCUzRDElM0JleGl0WSUzRDAuNSUzQmV4aXREeCUzRDAlM0JleGl0RHklM0QwJTNCZW50cnlYJTNEMCUzQmVudHJ5WSUzRDAuNSUzQmVudHJ5RHglM0QwJTNCZW50cnlEeSUzRDAlM0IlMjIlMjBlZGdlJTNEJTIyMSUyMiUyMHBhcmVudCUzRCUyMldJeVdsTGs2R0pRc3FhVUJLVE5WLTElMjIlMjBzb3VyY2UlM0QlMjJGNjJfQnhuMHJ4N2dnM1ZSWXI1aC0wJTIyJTIwdGFyZ2V0JTNEJTIyRjYyX0J4bjByeDdnZzNWUllyNWgtMyUyMiUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ214R2VvbWV0cnklMjB3aWR0aCUzRCUyMjUwJTIyJTIwaGVpZ2h0JTNEJTIyNTAlMjIlMjByZWxhdGl2ZSUzRCUyMjElMjIlMjBhcyUzRCUyMmdlb21ldHJ5JTIyJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDbXhQb2ludCUyMHglM0QlMjIzMTYlMjIlMjB5JTNEJTIyLTE5MCUyMiUyMGFzJTNEJTIyc291cmNlUG9pbnQlMjIlMjAlMkYlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NteFBvaW50JTIweCUzRCUyMjMwNiUyMiUyMHklM0QlMjItODAlMjIlMjBhcyUzRCUyMnRhcmdldFBvaW50JTIy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&quot;/>
                    </attachment>
                </content>" id="DocumentReference-documentreference-process-flow-diagram-dxpq-ex1">Document</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/documentreference.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/documentreference.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/documentreference.html#tt-uml">R6</a>]</span><div class="debugOff">id: documentreference-process-flow-diagram-dxpq-ex1</div>
<div class="debugOff"> fullUrl: urn:uuid:74d4c070-6596-8252-8ad9-afa515a41feb</div>
<div class="debugOff"></div>
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
                        <contentType value=&quot;image/x-png&quot;>">Content Type: </span><span>image/x-png</span></div>
<div><img src="data:image/x-png;base64, iVBORw0KGgoAAAANSUhEUgAAAgQAAAApCAYAAABKrzFXAAAAAXNSR0IArs4c6QAAEjl0RVh0bXhmaWxlACUzQ214ZmlsZSUyMGhvc3QlM0QlMjJFbGVjdHJvbiUyMiUyMG1vZGlmaWVkJTNEJTIyMjAyMy0wNy0wNlQxMyUzQTA4JTNBMDguNDgzWiUyMiUyMGFnZW50JTNEJTIyTW96aWxsYSUyRjUuMCUyMChXaW5kb3dzJTIwTlQlMjAxMC4wJTNCJTIwV2luNjQlM0IlMjB4NjQpJTIwQXBwbGVXZWJLaXQlMkY1MzcuMzYlMjAoS0hUTUwlMkMlMjBsaWtlJTIwR2Vja28pJTIwZHJhdy5pbyUyRjIxLjYuMSUyMENocm9tZSUyRjExMi4wLjU2MTUuMjA0JTIwRWxlY3Ryb24lMkYyNC42LjElMjBTYWZhcmklMkY1MzcuMzYlMjIlMjBldGFnJTNEJTIyNkMxTlFraVpHaXdVNTVadFBEMUQlMjIlMjB2ZXJzaW9uJTNEJTIyMjEuNi4xJTIyJTIwdHlwZSUzRCUyMmRldmljZSUyMiUzRSUwQSUyMCUyMCUzQ2RpYWdyYW0lMjBpZCUzRCUyMkM1UkJzNDNvRGEtS2R6WmVOdHV5JTIyJTIwbmFtZSUzRCUyMlBhZ2UtMSUyMiUzRSUwQSUyMCUyMCUyMCUyMCUzQ214R3JhcGhNb2RlbCUyMGR4JTNEJTIyMTAzNiUyMiUyMGR5JTNEJTIyMTc4MyUyMiUyMGdyaWQlM0QlMjIxJTIyJTIwZ3JpZFNpemUlM0QlMjIxMCUyMiUyMGd1aWRlcyUzRCUyMjElMjIlMjB0b29sdGlwcyUzRCUyMjElMjIlMjBjb25uZWN0JTNEJTIyMSUyMiUyMGFycm93cyUzRCUyMjElMjIlMjBmb2xkJTNEJTIyMSUyMiUyMHBhZ2UlM0QlMjIxJTIyJTIwcGFnZVNjYWxlJTNEJTIyMSUyMiUyMHBhZ2VXaWR0aCUzRCUyMjgyNyUyMiUyMHBhZ2VIZWlnaHQlM0QlMjIxMTY5JTIyJTIwYmFja2dyb3VuZCUzRCUyMm5vbmUlMjIlMjBtYXRoJTNEJTIyMCUyMiUyMHNoYWRvdyUzRCUyMjAlMjIlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlM0Nyb290JTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDbXhDZWxsJTIwaWQlM0QlMjJXSXlXbExrNkdKUXNxYVVCS1ROVi0wJTIyJTIwJTJGJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDbXhDZWxsJTIwaWQlM0QlMjJXSXlXbExrNkdKUXNxYVVCS1ROVi0xJTIyJTIwcGFyZW50JTNEJTIyV0l5V2xMazZHSlFzcWFVQktUTlYtMCUyMiUyMCUyRiUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ214Q2VsbCUyMGlkJTNEJTIyS2g2VVdDcUxFb3V5cUZPSzdudE0tOSUyMiUyMHZhbHVlJTNEJTIyJTIyJTIwc3R5bGUlM0QlMjJlbmRBcnJvdyUzRGNsYXNzaWMlM0JodG1sJTNEMSUzQnJvdW5kZWQlM0QwJTNCZXhpdFglM0QxJTNCZXhpdFklM0QwLjUlM0JleGl0RHglM0QwJTNCZXhpdER5JTNEMCUzQmVudHJ5WCUzRDAlM0JlbnRyeVklM0QwLjUlM0JlbnRyeUR4JTNEMCUzQmVudHJ5RHklM0QwJTNCJTIyJTIwcGFyZW50JTNEJTIyV0l5V2xMazZHSlFzcWFVQktUTlYtMSUyMiUyMHNvdXJjZSUzRCUyMktoNlVXQ3FMRW91eXFGT0s3bnRNLTI1JTIyJTIwdGFyZ2V0JTNEJTIyRjYyX0J4bjByeDdnZzNWUllyNWgtMCUyMiUyMGVkZ2UlM0QlMjIxJTIyJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDbXhHZW9tZXRyeSUyMHdpZHRoJTNEJTIyNTAlMjIlMjBoZWlnaHQlM0QlMjI1MCUyMiUyMHJlbGF0aXZlJTNEJTIyMSUyMiUyMGFzJTNEJTIyZ2VvbWV0cnklMjIlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NteFBvaW50JTIweCUzRCUyMjQ4MS40MzAwMDAwMDAwMDAwNiUyMiUyMHklM0QlMjItNjAlMjIlMjBhcyUzRCUyMnNvdXJjZVBvaW50JTIyJTIwJTJGJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDbXhQb2ludCUyMHglM0QlMjIzMDYlMjIlMjB5JTNEJTIyLTE2MCUyMiUyMGFzJTNEJTIydGFyZ2V0UG9pbnQlMjIlMjAlMkYlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0MlMkZteEdlb21ldHJ5JTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDJTJGbXhDZWxsJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDbXhDZWxsJTIwaWQlM0QlMjJLaDZVV0NxTEVvdXlxRk9LN250TS0yNSUyMiUyMHZhbHVlJTNEJTIyU3RlcCUyMDElMjZsdCUzQmJyJTI2Z3QlM0IlMjZsdCUzQmklMjZndCUzQk1peGluZyUyNmx0JTNCJTJGaSUyNmd0JTNCJTIyJTIwc3R5bGUlM0QlMjJyb3VuZGVkJTNEMSUzQndoaXRlU3BhY2UlM0R3cmFwJTNCaHRtbCUzRDElM0Jmb250U2l6ZSUzRDEyJTNCZ2xhc3MlM0QwJTNCc3Ryb2tlV2lkdGglM0QxJTNCc2hhZG93JTNEMCUzQmZpbGxDb2xvciUzRCUyM2Y4Y2VjYyUzQnN0cm9rZUNvbG9yJTNEJTIzYjg1NDUwJTNCJTIyJTIwcGFyZW50JTNEJTIyV0l5V2xMazZHSlFzcWFVQktUTlYtMSUyMiUyMHZlcnRleCUzRCUyMjElMjIlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NteEdlb21ldHJ5JTIweCUzRCUyMjEyMCUyMiUyMHklM0QlMjItMjMwJTIyJTIwd2lkdGglM0QlMjIxMjAlMjIlMjBoZWlnaHQlM0QlMjI0MCUyMiUyMGFzJTNEJTIyZ2VvbWV0cnklMjIlMjAlMkYlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0MlMkZteENlbGwlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NteENlbGwlMjBpZCUzRCUyMkY2Ml9CeG4wcng3Z2czVlJZcjVoLTAlMjIlMjB2YWx1ZSUzRCUyMlN0ZXAlMjAyJTI2bHQlM0JiciUyNmd0JTNCJTI2bHQlM0JpJTI2Z3QlM0JEcnlpbmclMjZsdCUzQiUyRmklMjZndCUzQiUyMiUyMHN0eWxlJTNEJTIycm91bmRlZCUzRDElM0J3aGl0ZVNwYWNlJTNEd3JhcCUzQmh0bWwlM0QxJTNCZm9udFNpemUlM0QxMiUzQmdsYXNzJTNEMCUzQnN0cm9rZVdpZHRoJTNEMSUzQnNoYWRvdyUzRDAlM0JmaWxsQ29sb3IlM0QlMjNmOGNlY2MlM0JzdHJva2VDb2xvciUzRCUyM2I4NTQ1MCUzQiUyMiUyMHZlcnRleCUzRCUyMjElMjIlMjBwYXJlbnQlM0QlMjJXSXlXbExrNkdKUXNxYVVCS1ROVi0xJTIyJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDbXhHZW9tZXRyeSUyMHglM0QlMjIyODAlMjIlMjB5JTNEJTIyLTIzMCUyMiUyMHdpZHRoJTNEJTIyMTIwJTIyJTIwaGVpZ2h0JTNEJTIyNDAlMjIlMjBhcyUzRCUyMmdlb21ldHJ5JTIyJTIwJTJGJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDJTJGbXhDZWxsJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDbXhDZWxsJTIwaWQlM0QlMjJGNjJfQnhuMHJ4N2dnM1ZSWXI1aC0zJTIyJTIwdmFsdWUlM0QlMjJTdGVwJTIwMyUyNmx0JTNCYnIlMjZndCUzQiUyNmx0JTNCaSUyNmd0JTNCUGFydGljbGUlMjBTaXplJTIwUmVkdWN0aW9uJTI2bHQlM0IlMkZpJTI2Z3QlM0IlMjIlMjBzdHlsZSUzRCUyMnJvdW5kZWQlM0QxJTNCd2hpdGVTcGFjZSUzRHdyYXAlM0JodG1sJTNEMSUzQmZvbnRTaXplJTNEMTIlM0JnbGFzcyUzRDAlM0JzdHJva2VXaWR0aCUzRDElM0JzaGFkb3clM0QwJTNCZmlsbENvbG9yJTNEJTIzZjhjZWNjJTNCc3Ryb2tlQ29sb3IlM0QlMjNiODU0NTAlM0IlMjIlMjB2ZXJ0ZXglM0QlMjIxJTIyJTIwcGFyZW50JTNEJTIyV0l5V2xMazZHSlFzcWFVQktUTlYtMSUyMiUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ214R2VvbWV0cnklMjB4JTNEJTIyNDQwJTIyJTIweSUzRCUyMi0yMzAlMjIlMjB3aWR0aCUzRCUyMjE5NC41JTIyJTIwaGVpZ2h0JTNEJTIyNDAlMjIlMjBhcyUzRCUyMmdlb21ldHJ5JTIyJTIwJTJGJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDJTJGbXhDZWxsJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDbXhDZWxsJTIwaWQlM0QlMjJGNjJfQnhuMHJ4N2dnM1ZSWXI1aC01JTIyJTIwdmFsdWUlM0QlMjIlMjIlMjBzdHlsZSUzRCUyMmVuZEFycm93JTNEY2xhc3NpYyUzQmh0bWwlM0QxJTNCcm91bmRlZCUzRDAlM0JleGl0WCUzRDElM0JleGl0WSUzRDAuNSUzQmV4aXREeCUzRDAlM0JleGl0RHklM0QwJTNCZW50cnlYJTNEMCUzQmVudHJ5WSUzRDAuNSUzQmVudHJ5RHglM0QwJTNCZW50cnlEeSUzRDAlM0IlMjIlMjBlZGdlJTNEJTIyMSUyMiUyMHBhcmVudCUzRCUyMldJeVdsTGs2R0pRc3FhVUJLVE5WLTElMjIlMjBzb3VyY2UlM0QlMjJGNjJfQnhuMHJ4N2dnM1ZSWXI1aC0wJTIyJTIwdGFyZ2V0JTNEJTIyRjYyX0J4bjByeDdnZzNWUllyNWgtMyUyMiUzRSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMCUzQ214R2VvbWV0cnklMjB3aWR0aCUzRCUyMjUwJTIyJTIwaGVpZ2h0JTNEJTIyNTAlMjIlMjByZWxhdGl2ZSUzRCUyMjElMjIlMjBhcyUzRCUyMmdlb21ldHJ5JTIyJTNFJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTNDbXhQb2ludCUyMHglM0QlMjIzMTYlMjIlMjB5JTNEJTIyLTE5MCUyMiUyMGFzJTNEJTIyc291cmNlUG9pbnQlMjIlMjAlMkYlM0UlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlM0NteFBvaW50JTIweCUzRCUyMjMwNiUyMiUyMHklM0QlMjItODAlMjIlMjBhcyUzRCUyMnRhcmdldFBvaW50JTIy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"></div>
</div>
</div>
</div>
<div class="htmlTableRemove"><br style="line-height:6px;"><div class="indent-no-border"><span>Table 1. List of Equipment</span><br><br style="line-height:6px;"><table class="rounded-corners white" id="tabularModeTable" style="width:70%;">
<tr>
<th>Name / Type</th>
<th>Working Capacity (where appropriate)</th>
</tr>
<tr>
<td class="centred">Mixing Vessel</td>
<td class="centred">Capacity: <span title="
<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                <property>
                    ...
                    <valueQuantity>
                        <value value=&quot;1000&quot;/>
                        <unit value=&quot;litres&quot;/>">1000 litres</span></td>
</tr>
<tr>
<td class="centred">Receiving Tank</td>
<td class="centred">Capacity: <span title="
<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                <property>
                    ...
                    <valueQuantity>
                        <value value=&quot;1200&quot;/>
                        <unit value=&quot;litres&quot;/>">1200 litres</span></td>
</tr>
<tr>
<td class="centred">Blender</td>
<td class="centred">Maximum capacity: <span title="
<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                <property>
                    ...
                    <valueQuantity>
                        <value value=&quot;1000&quot;/>
                        <unit value=&quot;litres&quot;/>">1000 litres</span></td>
</tr>
<tr>
<td class="centred">Heated dryer</td>
<td class="centred">Power: <span title="
<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                <property>
                    ...
                    <valueQuantity>
                        <value value=&quot;3&quot;/>
                        <unit value=&quot;kW&quot;/>">3 kW</span></td>
</tr>
<tr>
<td class="centred">Rotating Impeller with 1.5mm screen</td>
<td class="centred">Maximum Speed: <span title="
<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                <property>
                    ...
                    <valueQuantity>
                        <value value=&quot;5000&quot;/>
                        <unit value=&quot;RPM&quot;/>">5000 RPM</span></td>
</tr>
</table>
</div><br style="line-height:6px;"></div>
<div class="htmlTableRemove"><br style="line-height:6px;"><div class="indent-no-border"><span>Table 2. In-Process and Quality Controls</span><br><br style="line-height:6px;"><table class="rounded-corners white" id="tabularModeTable" style="width:70%;">
<tr>
<th>Process Step (name)</th>
<th>Parameter</th>
<th>Acceptance Criteria</th>
</tr>
<tr>
<td class="centred">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <prefix value=&quot;1&quot;>">Step: </span><span>1</span></div>
</td>
<td class="centred"> Parameter - Capacity</td>
<td class="centred">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processParameters&quot;>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;750&quot;/>
                                <unit value=&quot;litres&quot;/>"></span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processParameters&quot;>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;750&quot;/>
                                <unit value=&quot;litres&quot;/>">750 litres</span></div>
</td>
</tr>
<tr>
<td class="centred">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <prefix value=&quot;1&quot;>">Step: </span><span>1</span></div>
</td>
<td class="centred"> Parameter - Temperature</td>
<td class="centred">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processParameters&quot;>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;150&quot;/>
                                <unit value=&quot;°C&quot;/>
                                <system value=&quot;http://unitsofmeasure.org&quot;/>
                                <code value=&quot;Cel&quot;/>"></span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processParameters&quot;>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;150&quot;/>
                                <unit value=&quot;°C&quot;/>
                                <system value=&quot;http://unitsofmeasure.org&quot;/>
                                <code value=&quot;Cel&quot;/>">150 °C</span><span class="greyOff"> [Cel] (http://unitsofmeasure.org)</span></div>
</td>
</tr>
<tr>
<td class="centred">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <prefix value=&quot;1&quot;>">Step: </span><span>1</span></div>
</td>
<td class="centred">Controls - pH</td>
<td class="centred">pH must be in range 6.9 to 7.1</td>
</tr>
<tr>
<td class="centred">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <prefix value=&quot;2&quot;>">Step: </span><span>2</span></div>
</td>
<td class="centred"> Parameter - Maximum Temperature</td>
<td class="centred">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processParameters&quot;>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;40&quot;/>
                                <unit value=&quot;°C&quot;/>
                                <system value=&quot;http://unitsofmeasure.org&quot;/>
                                <code value=&quot;Cel&quot;/>"></span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processParameters&quot;>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;40&quot;/>
                                <unit value=&quot;°C&quot;/>
                                <system value=&quot;http://unitsofmeasure.org&quot;/>
                                <code value=&quot;Cel&quot;/>">40 °C</span><span class="greyOff"> [Cel] (http://unitsofmeasure.org)</span></div>
</td>
</tr>
<tr>
<td class="centred">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <prefix value=&quot;2&quot;>">Step: </span><span>2</span></div>
</td>
<td class="centred">Controls - Water Content</td>
<td class="centred">Under 2%</td>
</tr>
<tr>
<td class="centred">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <prefix value=&quot;3&quot;>">Step: </span><span>3</span></div>
</td>
<td class="centred"> Parameter - Rotational Speed</td>
<td class="centred">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processParameters&quot;>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;2500&quot;/>
                                <unit value=&quot;rpm&quot;/>"></span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processParameters&quot;>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;2500&quot;/>
                                <unit value=&quot;rpm&quot;/>">2500 rpm</span></div>
</td>
</tr>
<tr>
<td class="centred">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <prefix value=&quot;3&quot;>">Step: </span><span>3</span></div>
</td>
<td class="centred">Controls - Particle Size</td>
<td class="centred">Under 200 microns</td>
</tr>
</table>
</div><br style="line-height:6px;"></div>
<div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <id value=&quot;manufacturingProcess-unlinked&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/PlanDefinition-mnf-process-dxpq&quot;/>
                </meta>
                <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tabulateEquipment&quot;>
                    <valueBoolean value=&quot;true&quot;/>
                </extension>
                <extension url=&quot;http://accumulus.org/fhir/extension/planDocumentReference&quot;>
                    <valueReference>
                        <!-- Process flow diagram -->
                        <!-- or could be a Binary -->
                        <!-- #84 -->
                        <reference value=&quot;DocumentReference/documentreference-process-flow-diagram-dxpq-ex1&quot;/>
                    </valueReference>
                </extension>
                <extension url=&quot;http://accumulus.org/fhir/extension/historyOfProcess&quot;>
                    <valueMarkdown value=&quot;This can be text about the history&quot;/>
                </extension>
                <title value=&quot;Process 1.0&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/plan-definition-type&quot;/>
                        <code value=&quot;workflow-definition&quot;/>
                        <display value=&quot;Workflow Definition&quot;/>
                    </coding>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/planType&quot;/>
                        <code value=&quot;manufacturing-process&quot;/>
                        <display value=&quot;Manufacturing Process&quot;/>
                    </coding>
                </type>
                <status value=&quot;active&quot;/>
                <!-- #83 -->
                <subjectReference>
                    <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                </subjectReference>
                <description value=&quot;Narrative description of manufacturing process (5)&quot;/>
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
                            <text value=&quot;pH must be in range 6.9 to 7.1&quot;/>
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
                <goal id=&quot;goal-control-water-content&quot;>
                    <category>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/testCategory&quot;/>
                            <code value=&quot;C123456&quot;/>
                            <display value=&quot;Physical Property&quot;/>
                        </coding>
                    </category>
                    <description>
                        <text value=&quot;Controls - Water Content&quot;/>
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
                                <code value=&quot;WaterContent&quot;/>
                                <display value=&quot;Water content&quot;/>
                            </coding>
                            <text value=&quot;Under 2%&quot;/>
                        </measure>
                        <!--detailString value=&quot;can also be a string&quot;-->
                        <detailRange>
                            <high>
                                <value value=&quot;2&quot;/>
                                <unit value=&quot;%&quot;/>
                            </high>
                        </detailRange>
                    </target>
                </goal>
                <goal id=&quot;goal-control-particle-size&quot;>
                    <category>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/testCategory&quot;/>
                            <code value=&quot;C123456&quot;/>
                            <display value=&quot;Physical Property&quot;/>
                        </coding>
                    </category>
                    <description>
                        <text value=&quot;Controls - Particle Size&quot;/>
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
                                <code value=&quot;ParticleSize&quot;/>
                                <display value=&quot;Particle Size&quot;/>
                            </coding>
                            <text value=&quot;Under 200 microns&quot;/>
                        </measure>
                        <!--detailString value=&quot;can also be a string&quot;-->
                        <detailRange>
                            <high>
                                <value value=&quot;200&quot;/>
                                <unit value=&quot;microns&quot;/>
                            </high>
                        </detailRange>
                    </target>
                </goal>
                <actor>
                    <option>
                        <typeReference>
                            <reference value=&quot;DeviceDefinition/mixing-vessel&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://accumulus.org/fhir/code/equipmentClass&quot;/>
                                <code value=&quot;mixing-vessel&quot;/>
                                <display value=&quot;Mixing Vessel&quot;/>
                            </coding>
                        </role>
                    </option>
                </actor>
                <actor>
                    <option>
                        <typeReference>
                            <reference value=&quot;DeviceDefinition/receiving-tank&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://accumulus.org/fhir/code/equipmentClass&quot;/>
                                <code value=&quot;receiving-vessel&quot;/>
                                <display value=&quot;Receiving Vessel&quot;/>
                            </coding>
                        </role>
                    </option>
                </actor>
                <!-- outer action is the whole thing, if needed -->
                <!-- step 1 mixing -->
                <action>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processStepScale&quot;>
                        <valueCoding>
                            <system value=&quot;http://accumulus.org/fhir/code/manufacturingStepScale&quot;/>
                            <code value=&quot;ABCD&quot;/>
                            <display value=&quot;Production Scale&quot;/>
                        </valueCoding>
                    </extension>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processParameters&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/processParameter&quot;/>
                                    <code value=&quot;CAPACITY&quot;/>
                                    <display value=&quot;Capacity&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;750&quot;/>
                                <unit value=&quot;litres&quot;/>
                            </valueQuantity>
                        </extension>
                    </extension>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processParameters&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/processParameter&quot;/>
                                    <code value=&quot;TEMP-MAX&quot;/>
                                    <display value=&quot;Temperature&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;150&quot;/>
                                <unit value=&quot;°C&quot;/>
                                <system value=&quot;http://unitsofmeasure.org&quot;/>
                                <code value=&quot;Cel&quot;/>
                            </valueQuantity>
                        </extension>
                    </extension>
                    <prefix value=&quot;1&quot;/>
                    <description value=&quot;Mixing of ingredients&quot;/>
                    <code>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/manufacturingStep&quot;/>
                            <code value=&quot;1111&quot;/>
                            <display value=&quot;Mixing of ingredients&quot;/>
                        </coding>
                    </code>
                    <documentation>
                        <type value=&quot;specification-of&quot;/>
                        <resourceReference>
                            <reference value=&quot;DocumentReference/DocumentReference-image&quot;/>
                        </resourceReference>
                    </documentation>
                    <goalId value=&quot;goal-control-pH&quot;/>
                    <!--goalId value=&quot;goal-control-temp&quot;/-->
                    <participant>
                        <typeReference>
                            <!-- this is new in R5 and is not in R4B -->
                            <reference value=&quot;DeviceDefinition/mixer&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://accumulus.org/fhir/code/equipmentClass&quot;/>
                                <code value=&quot;example&quot;/>
                                <display value=&quot;Blender&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://accumulus.org/fhir/extension/manufacturingParticipant&quot;>
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
                            <extension url=&quot;http://accumulus.org/fhir/extension/manufacturingParticipant&quot;>
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
                            <extension url=&quot;http://accumulus.org/fhir/extension/manufacturingParticipant&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/StelbatololAqueousSolution&quot;/>
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
                <!-- step 2 drying -->
                <action>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processStepScale&quot;>
                        <valueCoding>
                            <system value=&quot;http://accumulus.org/fhir/code/manufacturingStepScale&quot;/>
                            <code value=&quot;ABCD&quot;/>
                            <display value=&quot;Production Scale&quot;/>
                        </valueCoding>
                    </extension>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processParameters&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/processParameter&quot;/>
                                    <!-- TODO LOINC? -->
                                    <code value=&quot;TEMPMAX&quot;/>
                                    <display value=&quot;Maximum Temperature&quot;/>
                                </coding>
                                <text value=&quot;Process temperature must be below 40°C&quot;/>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;value&quot;>
                            <!-- todo want a range here -->
                            <valueQuantity>
                                <value value=&quot;40&quot;/>
                                <unit value=&quot;°C&quot;/>
                                <system value=&quot;http://unitsofmeasure.org&quot;/>
                                <code value=&quot;Cel&quot;/>
                            </valueQuantity>
                        </extension>
                    </extension>
                    <prefix value=&quot;2&quot;/>
                    <description value=&quot;Drying using a heater&quot;/>
                    <code>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/manufacturingStep&quot;/>
                            <code value=&quot;12121&quot;/>
                            <display value=&quot;Drying&quot;/>
                        </coding>
                        <!--text value=&quot;Step 2 in the process - free text is possible&quot;/-->
                    </code>
                    <documentation>
                        <type value=&quot;specification-of&quot;/>
                        <resourceReference>
                            <reference value=&quot;DocumentReference/DocumentReference-image&quot;/>
                        </resourceReference>
                    </documentation>
                    <goalId value=&quot;goal-control-water-content&quot;/>
                    <participant>
                        <typeReference>
                            <!-- this is new in R5 and is not in R4B -->
                            <reference value=&quot;DeviceDefinition/dryer&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://accumulus.org/fhir/code/equipmentClass&quot;/>
                                <code value=&quot;example&quot;/>
                                <display value=&quot;Dryer&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://accumulus.org/fhir/extension/manufacturingParticipant&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/StelbatololAqueousSolution&quot;/>
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
                            <extension url=&quot;http://accumulus.org/fhir/extension/manufacturingParticipant&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/StelbatololGranules&quot;/>
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
                </action>
                <!-- step 3 particle size -->
                <action>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processStepScale&quot;>
                        <valueCoding>
                            <system value=&quot;http://accumulus.org/fhir/code/manufacturingStepScale&quot;/>
                            <code value=&quot;ABCD&quot;/>
                            <display value=&quot;Production Scale&quot;/>
                        </valueCoding>
                    </extension>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processParameters&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/processParameter&quot;/>
                                    <code value=&quot;ROTATIONSPEED&quot;/>
                                    <display value=&quot;Rotational Speed&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;2500&quot;/>
                                <unit value=&quot;rpm&quot;/>
                            </valueQuantity>
                        </extension>
                    </extension>
                    <prefix value=&quot;3&quot;/>
                    <description value=&quot;Particle Size Reduction by using a rotating impeller&quot;/>
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
                    <goalId value=&quot;goal-control-particle-size&quot;/>
                    <participant>
                        <typeReference>
                            <!-- this is new in R5 and is not in R4B -->
                            <reference value=&quot;DeviceDefinition/devicedefinition-dxpq-ex1&quot;/>
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
                            <extension url=&quot;http://accumulus.org/fhir/extension/manufacturingParticipant&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/StelbatololGranules&quot;/>
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
                            <extension url=&quot;http://accumulus.org/fhir/extension/manufacturingParticipant&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/Stelbatolol&quot;/>
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
                </action>">Subject</span><div ondblclick="summaryHandler(event)" class="indent mpd summaryUnit"><a class="plainLink"><span class="bold" title="MedicinalProductDefinition (id: medicinalproductdefinition-drug-product-dxpq-ex1)(fullUrl: urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d5)

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
                </name>" id="MedicinalProductDefinition-medicinalproductdefinition-drug-product-dxpq-ex1">Product</span></a><span class="summaryHiddenOff"><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/medicinalproductdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/medicinalproductdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/medicinalproductdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: medicinalproductdefinition-drug-product-dxpq-ex1</div><div class="debugOff"> fullUrl: urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d5</div></span><div class="summaryHiddenOff"></div><span class="summaryShowsOff"><b> - </b></span><span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                ...
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
                    </part>" class="bold"><span class="summaryHiddenOff">Name: </span><span>Stelbat Tablets, 20mg</span></span><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                <name>
                    ...
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/productNameType&quot;/>
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
                            <system value=&quot;http://accumulus.org/fhir/code/productNameType&quot;/>
                            <code value=&quot;1234&quot;/>
                            <display value=&quot;Proprietary&quot;/>">Proprietary<span class="greyOff"> [1234]</span><span class="greyOff"> (http://accumulus.org/fhir/code/productNameType)</span></span></div><div title="
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
                        </type>"><span>Strength name part: </span><span>20mg</span></div></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                ...
                <description value=&quot;Textual description of the product&quot;>">Description: </span><span>Textual description of the product</span></div><div><span title="
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
                        <display value=&quot;Oral use&quot;/>">Oral use<span class="greyOff"> [100000073619]</span><span class="greyOff"> (https://spor.ema.europa.eu/v1/lists/100000073345)</span></span></div><div><span title="
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
                        <display value=&quot;Gastro-resistant tablet&quot;/>">Gastro-resistant tablet<span class="greyOff"> [100000073667]</span><span class="greyOff"> (https://spor.ema.europa.eu/v1/lists/200000000004)</span></span></div></div><div class="summaryHiddenOff"></div><div class="indent ing summaryUnit" ondblclick="summaryHandler(event)"><a class="plainLink"><span class="bold" title="Ingredient (id: productIngredient)(fullUrl: urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d6)

<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <id value=&quot;productIngredient&quot;/>
                <status value=&quot;active&quot;/>
                <for>
                    <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                </for>
                <role>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/ingredient-role&quot;/>
                        <code value=&quot;100000072072&quot;/>
                        <display value=&quot;Active&quot;/>
                    </coding>
                </role>
                <substance>
                    <code>
                        <reference>
                            <reference value=&quot;SubstanceDefinition/Stelbatolol&quot;/>
                        </reference>
                    </code>
                </substance>" id="Ingredient-productIngredient">Ingredient</span></a><span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <role>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/ingredient-role&quot;/>
                        <code value=&quot;100000072072&quot;/>
                        <display value=&quot;Active&quot;/>">Active<span class="greyOff"> [100000072072]</span><span class="greyOff"> (http://hl7.org/fhir/ingredient-role)</span></span></span><div class="summaryHiddenOff"><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/ingredient.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/ingredient.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/ingredient.html#tt-uml">R6</a>]</span><div class="debugOff">id: productIngredient</div><div class="debugOff"> fullUrl: urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d6</div><div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                ...
                <status value=&quot;active&quot;>">Status: </span><span>active</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                ...
                <role>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/ingredient-role&quot;/>
                        <code value=&quot;100000072072&quot;/>
                        <display value=&quot;Active&quot;/>
                    </coding>">Role: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <role>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/ingredient-role&quot;/>
                        <code value=&quot;100000072072&quot;/>
                        <display value=&quot;Active&quot;/>">Active<span class="greyOff"> [100000072072]</span><span class="greyOff"> (http://hl7.org/fhir/ingredient-role)</span></span></div></div><div class="indent ingsub"><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                ...
                <substance>
                    <code>
                        <reference>
                            <reference value=&quot;SubstanceDefinition/Stelbatolol&quot;/>
                        </reference>
                    </code>">Substance</span><div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (PlanDefinition/valueReference, id: manufacturingProcess-unlinked fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Ingredient/code, id: productIngredient fullUrl: urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d6)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: Stelbatolol)(fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821152)

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;Stelbatolol&quot;/>
                <manufacturer>
                    <reference value=&quot;Organization/substance-manufacturer&quot;/>
                </manufacturer>
                <name>
                    <name value=&quot;Stelbatolol&quot;/>
                    <!-- #4 -->
                </name>" id="SubstanceDefinition-Stelbatolol">Substance</span></a><span class="summaryShowsOff"><b> - Stelbatolol</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substancedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: Stelbatolol</div><div class="debugOff"> fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821152</div><div class="summaryHiddenOff"><div class="indent sbddetails"><div><span title="
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
                    <reference value=&quot;Organization/substance-manufacturer&quot;/>">Manufacturer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: Stelbatolol fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821152)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: startingMaterial fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821153)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: substance-manufacturer)(fullUrl: urn:uuid:9fe98cfa-9245-8313-0fc5-d15e613b5d6d)

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
                        <country value=&quot;USA&quot;>">USA</span></div></div></div></div></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div></div><div class="summaryHiddenOff"></div></div><div class="summaryHiddenOff"></div></div><div class="summaryHiddenOff"></div></div></span><div class="indent summaryUnit" ondblclick="summaryHandler(event)"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <actor>
                    <option>
                        <typeReference>
                            <reference value=&quot;DeviceDefinition/mixing-vessel&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://accumulus.org/fhir/code/equipmentClass&quot;/>
                                <code value=&quot;mixing-vessel&quot;/>
                                <display value=&quot;Mixing Vessel&quot;/>
                            </coding>
                        </role>
                    </option>"><span>Actor</span><span class="summaryHiddenOff"></span></span><div class="indent org"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <actor>
                    <option>
                        <typeReference>
                            <reference value=&quot;DeviceDefinition/mixing-vessel&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://accumulus.org/fhir/code/equipmentClass&quot;/>
                                <code value=&quot;mixing-vessel&quot;/>
                                <display value=&quot;Mixing Vessel&quot;/>
                            </coding>
                        </role>">Participant</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <actor>
                    <option>
                        ...
                        <role>
                            <coding>
                                <system value=&quot;http://accumulus.org/fhir/code/equipmentClass&quot;/>
                                <code value=&quot;mixing-vessel&quot;/>
                                <display value=&quot;Mixing Vessel&quot;/>
                            </coding>">Role: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <actor>
                    <option>
                        <role>
                            <coding>
                                <system value=&quot;http://accumulus.org/fhir/code/equipmentClass&quot;/>
                                <code value=&quot;mixing-vessel&quot;/>
                                <display value=&quot;Mixing Vessel&quot;/>">Mixing Vessel<span class="greyOff"> [mixing-vessel]</span><span class="greyOff"> (http://accumulus.org/fhir/code/equipmentClass)</span></span></span></div>
<div class="indent devd summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (PlanDefinition/typeReference, id: manufacturingProcess-unlinked fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="DeviceDefinition (id: mixing-vessel)(fullUrl: urn:uuid:82a39a18-91cf-a29d-76c1-a9e8bad9494d)

<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                <id value=&quot;mixing-vessel&quot;/>
                <deviceName>
                    <name value=&quot;Mixing Vessel&quot;/>
                    <type value=&quot;registered-name&quot;/>
                </deviceName>
                <classification>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/deviceType&quot;/>
                            <code value=&quot;mixing-vessel&quot;/>
                            <display value=&quot;Mixing Vessel&quot;/>
                        </coding>
                    </type>
                </classification>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/deviceProperty&quot;/>
                            <code value=&quot;capacity&quot;/>
                            <display value=&quot;Capacity&quot;/>
                            <!-- seems a little different to &quot;maximum capacity -->
                        </coding>
                    </type>
                    <valueQuantity>
                        <value value=&quot;1000&quot;/>
                        <unit value=&quot;litres&quot;/>
                    </valueQuantity>
                </property>" id="DeviceDefinition-mixing-vessel">Device</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/devicedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/devicedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/devicedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: mixing-vessel</div>
<div class="debugOff"> fullUrl: urn:uuid:82a39a18-91cf-a29d-76c1-a9e8bad9494d</div>
<div class="summaryHiddenOff"></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                ...
                <deviceName>
                    <name value=&quot;Mixing Vessel&quot;/>
                    <type value=&quot;registered-name&quot;/>">Name: </span><span>Mixing Vessel</span><span> (name type: registered-name)</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                <classification>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/deviceType&quot;/>
                            <code value=&quot;mixing-vessel&quot;/>
                            <display value=&quot;Mixing Vessel&quot;/>
                        </coding>">Type: </span><span title="
<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                <classification>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/deviceType&quot;/>
                            <code value=&quot;mixing-vessel&quot;/>
                            <display value=&quot;Mixing Vessel&quot;/>">Mixing Vessel<span class="greyOff"> [mixing-vessel]</span><span class="greyOff"> (http://accumulus.org/fhir/code/deviceType)</span></span></div>
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
                            <code value=&quot;capacity&quot;/>
                            <display value=&quot;Capacity&quot;/>
                            <!-- seems a little different to &quot;maximum capacity -->
                        </coding>
                    </type>
                    <valueQuantity>
                        <value value=&quot;1000&quot;/>
                        <unit value=&quot;litres&quot;/>
                    </valueQuantity>">Property</span><div class="indent devdl3">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/deviceProperty&quot;/>
                            <code value=&quot;capacity&quot;/>
                            <display value=&quot;Capacity&quot;/>
                            <!-- seems a little different to &quot;maximum capacity -->
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/deviceProperty&quot;/>
                            <code value=&quot;capacity&quot;/>
                            <display value=&quot;Capacity&quot;/>
                            <!-- seems a little different to &quot;maximum capacity -->">Capacity<span class="greyOff"> [capacity]</span><span class="greyOff"> (http://accumulus.org/fhir/code/deviceProperty)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                <property>
                    ...
                    <valueQuantity>
                        <value value=&quot;1000&quot;/>
                        <unit value=&quot;litres&quot;/>">Value: <span title="
<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                <property>
                    ...
                    <valueQuantity>
                        <value value=&quot;1000&quot;/>
                        <unit value=&quot;litres&quot;/>">1000 litres</span></span></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="indent summaryUnit" ondblclick="summaryHandler(event)"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <actor>
                    <option>
                        <typeReference>
                            <reference value=&quot;DeviceDefinition/receiving-tank&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://accumulus.org/fhir/code/equipmentClass&quot;/>
                                <code value=&quot;receiving-vessel&quot;/>
                                <display value=&quot;Receiving Vessel&quot;/>
                            </coding>
                        </role>
                    </option>"><span>Actor</span><span class="summaryHiddenOff"></span></span><div class="indent org"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <actor>
                    <option>
                        <typeReference>
                            <reference value=&quot;DeviceDefinition/receiving-tank&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://accumulus.org/fhir/code/equipmentClass&quot;/>
                                <code value=&quot;receiving-vessel&quot;/>
                                <display value=&quot;Receiving Vessel&quot;/>
                            </coding>
                        </role>">Participant</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <actor>
                    <option>
                        ...
                        <role>
                            <coding>
                                <system value=&quot;http://accumulus.org/fhir/code/equipmentClass&quot;/>
                                <code value=&quot;receiving-vessel&quot;/>
                                <display value=&quot;Receiving Vessel&quot;/>
                            </coding>">Role: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <actor>
                    <option>
                        <role>
                            <coding>
                                <system value=&quot;http://accumulus.org/fhir/code/equipmentClass&quot;/>
                                <code value=&quot;receiving-vessel&quot;/>
                                <display value=&quot;Receiving Vessel&quot;/>">Receiving Vessel<span class="greyOff"> [receiving-vessel]</span><span class="greyOff"> (http://accumulus.org/fhir/code/equipmentClass)</span></span></span></div>
<div class="indent devd summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (PlanDefinition/typeReference, id: manufacturingProcess-unlinked fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="DeviceDefinition (id: receiving-tank)(fullUrl: urn:uuid:82a39a18-91cf-b29d-76c1-a9e8bad9494d)

<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                <id value=&quot;receiving-tank&quot;/>
                <deviceName>
                    <name value=&quot;Receiving Tank&quot;/>
                    <type value=&quot;registered-name&quot;/>
                </deviceName>
                <classification>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/deviceType&quot;/>
                            <code value=&quot;receiving-tank&quot;/>
                            <display value=&quot;Receiving Tank&quot;/>
                        </coding>
                    </type>
                </classification>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/deviceProperty&quot;/>
                            <code value=&quot;capacity&quot;/>
                            <display value=&quot;Capacity&quot;/>
                            <!-- seems a little different to &quot;maximum capacity -->
                        </coding>
                    </type>
                    <valueQuantity>
                        <value value=&quot;1200&quot;/>
                        <unit value=&quot;litres&quot;/>
                    </valueQuantity>
                </property>" id="DeviceDefinition-receiving-tank">Device</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/devicedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/devicedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/devicedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: receiving-tank</div>
<div class="debugOff"> fullUrl: urn:uuid:82a39a18-91cf-b29d-76c1-a9e8bad9494d</div>
<div class="summaryHiddenOff"></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                ...
                <deviceName>
                    <name value=&quot;Receiving Tank&quot;/>
                    <type value=&quot;registered-name&quot;/>">Name: </span><span>Receiving Tank</span><span> (name type: registered-name)</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                <classification>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/deviceType&quot;/>
                            <code value=&quot;receiving-tank&quot;/>
                            <display value=&quot;Receiving Tank&quot;/>
                        </coding>">Type: </span><span title="
<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                <classification>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/deviceType&quot;/>
                            <code value=&quot;receiving-tank&quot;/>
                            <display value=&quot;Receiving Tank&quot;/>">Receiving Tank<span class="greyOff"> [receiving-tank]</span><span class="greyOff"> (http://accumulus.org/fhir/code/deviceType)</span></span></div>
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
                            <code value=&quot;capacity&quot;/>
                            <display value=&quot;Capacity&quot;/>
                            <!-- seems a little different to &quot;maximum capacity -->
                        </coding>
                    </type>
                    <valueQuantity>
                        <value value=&quot;1200&quot;/>
                        <unit value=&quot;litres&quot;/>
                    </valueQuantity>">Property</span><div class="indent devdl3">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/deviceProperty&quot;/>
                            <code value=&quot;capacity&quot;/>
                            <display value=&quot;Capacity&quot;/>
                            <!-- seems a little different to &quot;maximum capacity -->
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/deviceProperty&quot;/>
                            <code value=&quot;capacity&quot;/>
                            <display value=&quot;Capacity&quot;/>
                            <!-- seems a little different to &quot;maximum capacity -->">Capacity<span class="greyOff"> [capacity]</span><span class="greyOff"> (http://accumulus.org/fhir/code/deviceProperty)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                <property>
                    ...
                    <valueQuantity>
                        <value value=&quot;1200&quot;/>
                        <unit value=&quot;litres&quot;/>">Value: <span title="
<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                <property>
                    ...
                    <valueQuantity>
                        <value value=&quot;1200&quot;/>
                        <unit value=&quot;litres&quot;/>">1200 litres</span></span></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="indent summaryUnit" ondblclick="summaryHandler(event)"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <action>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processStepScale&quot;>
                        <valueCoding>
                            <system value=&quot;http://accumulus.org/fhir/code/manufacturingStepScale&quot;/>
                            <code value=&quot;ABCD&quot;/>
                            <display value=&quot;Production Scale&quot;/>
                        </valueCoding>
                    </extension>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processParameters&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/processParameter&quot;/>
                                    <code value=&quot;CAPACITY&quot;/>
                                    <display value=&quot;Capacity&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;750&quot;/>
                                <unit value=&quot;litres&quot;/>
                            </valueQuantity>
                        </extension>
                    </extension>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processParameters&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/processParameter&quot;/>
                                    <code value=&quot;TEMP-MAX&quot;/>
                                    <display value=&quot;Temperature&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;150&quot;/>
                                <unit value=&quot;°C&quot;/>
                                <system value=&quot;http://unitsofmeasure.org&quot;/>
                                <code value=&quot;Cel&quot;/>
                            </valueQuantity>
                        </extension>
                    </extension>
                    <prefix value=&quot;1&quot;/>
                    <description value=&quot;Mixing of ingredients&quot;/>
                    <code>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/manufacturingStep&quot;/>
                            <code value=&quot;1111&quot;/>
                            <display value=&quot;Mixing of ingredients&quot;/>
                        </coding>
                    </code>
                    <documentation>
                        <type value=&quot;specification-of&quot;/>
                        <resourceReference>
                            <reference value=&quot;DocumentReference/DocumentReference-image&quot;/>
                        </resourceReference>
                    </documentation>
                    <goalId value=&quot;goal-control-pH&quot;/>
                    <!--goalId value=&quot;goal-control-temp&quot;/-->
                    <participant>
                        <typeReference>
                            <!-- this is new in R5 and is not in R4B -->
                            <reference value=&quot;DeviceDefinition/mixer&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://accumulus.org/fhir/code/equipmentClass&quot;/>
                                <code value=&quot;example&quot;/>
                                <display value=&quot;Blender&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://accumulus.org/fhir/extension/manufacturingParticipant&quot;>
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
                            <extension url=&quot;http://accumulus.org/fhir/extension/manufacturingParticipant&quot;>
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
                            <extension url=&quot;http://accumulus.org/fhir/extension/manufacturingParticipant&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/StelbatololAqueousSolution&quot;/>
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
                        </action-->"><span>Action</span><span class="summaryShowsOff"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <prefix value=&quot;1&quot;>"> - 1</span> - <span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <code>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/manufacturingStep&quot;/>
                            <code value=&quot;1111&quot;/>
                            <display value=&quot;Mixing of ingredients&quot;/>">Mixing of ingredients<span class="greyOff"> [1111]</span><span class="greyOff"> (http://accumulus.org/fhir/code/manufacturingStep)</span></span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <prefix value=&quot;1&quot;>">Step (prefix): </span><span>1</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <code>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/manufacturingStep&quot;/>
                            <code value=&quot;1111&quot;/>
                            <display value=&quot;Mixing of ingredients&quot;/>
                        </coding>">Code: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <code>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/manufacturingStep&quot;/>
                            <code value=&quot;1111&quot;/>
                            <display value=&quot;Mixing of ingredients&quot;/>">Mixing of ingredients<span class="greyOff"> [1111]</span><span class="greyOff"> (http://accumulus.org/fhir/code/manufacturingStep)</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <description value=&quot;Mixing of ingredients&quot;>">Description: </span><span>Mixing of ingredients</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processStepScale&quot;>
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
                    <extension url=&quot;http://accumulus.org/fhir/extension/processStepScale&quot;>
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
                            <text value=&quot;pH must be in range 6.9 to 7.1&quot;/>
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
                            <text value=&quot;pH must be in range 6.9 to 7.1&quot;/>
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
                            <text value=&quot;pH must be in range 6.9 to 7.1&quot;/>">Measure: </span><span title="
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
                                <display value=&quot;pH Level&quot;/>">pH Level<span class="greyOff"> [PH]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: pH must be in range 6.9 to 7.1</span></div>
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
<div class="indent planl3 summaryHiddenOff" title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <extension url=&quot;http://accumulus.org/fhir/extension/processParameters&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/processParameter&quot;/>
                                    <code value=&quot;CAPACITY&quot;/>
                                    <display value=&quot;Capacity&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;750&quot;/>
                                <unit value=&quot;litres&quot;/>
                            </valueQuantity>
                        </extension>">
					Parameters
					<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processParameters&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/processParameter&quot;/>
                                    <code value=&quot;CAPACITY&quot;/>
                                    <display value=&quot;Capacity&quot;/>
                                </coding>
                            </valueCodeableConcept>">Parameter: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processParameters&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/processParameter&quot;/>
                                    <code value=&quot;CAPACITY&quot;/>
                                    <display value=&quot;Capacity&quot;/>">Capacity<span class="greyOff"> [CAPACITY]</span><span class="greyOff"> (http://accumulus.org/fhir/code/processParameter)</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processParameters&quot;>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;750&quot;/>
                                <unit value=&quot;litres&quot;/>">Value Quantity: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processParameters&quot;>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;750&quot;/>
                                <unit value=&quot;litres&quot;/>">750 litres</span></div>
</div>
<div class="indent planl3 summaryHiddenOff" title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <extension url=&quot;http://accumulus.org/fhir/extension/processParameters&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/processParameter&quot;/>
                                    <code value=&quot;TEMP-MAX&quot;/>
                                    <display value=&quot;Temperature&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;150&quot;/>
                                <unit value=&quot;°C&quot;/>
                                <system value=&quot;http://unitsofmeasure.org&quot;/>
                                <code value=&quot;Cel&quot;/>
                            </valueQuantity>
                        </extension>">
					Parameters
					<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processParameters&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/processParameter&quot;/>
                                    <code value=&quot;TEMP-MAX&quot;/>
                                    <display value=&quot;Temperature&quot;/>
                                </coding>
                            </valueCodeableConcept>">Parameter: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processParameters&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/processParameter&quot;/>
                                    <code value=&quot;TEMP-MAX&quot;/>
                                    <display value=&quot;Temperature&quot;/>">Temperature<span class="greyOff"> [TEMP-MAX]</span><span class="greyOff"> (http://accumulus.org/fhir/code/processParameter)</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processParameters&quot;>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;150&quot;/>
                                <unit value=&quot;°C&quot;/>
                                <system value=&quot;http://unitsofmeasure.org&quot;/>
                                <code value=&quot;Cel&quot;/>">Value Quantity: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processParameters&quot;>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;150&quot;/>
                                <unit value=&quot;°C&quot;/>
                                <system value=&quot;http://unitsofmeasure.org&quot;/>
                                <code value=&quot;Cel&quot;/>">150 °C</span><span class="greyOff"> [Cel] (http://unitsofmeasure.org)</span></div>
</div>
<div class="indent planl3">
					Documentation
					<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <documentation>
                        <type value=&quot;specification-of&quot;>">Type: </span><span><span>specification-of</span></span></div>
<div class="indent org summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (PlanDefinition/resourceReference, id: manufacturingProcess-unlinked fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (PlanDefinition/resourceReference, id: manufacturingProcess-unlinked fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (PlanDefinition/resourceReference, id: manufacturingProcess-unlinked fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="DocumentReference (id: DocumentReference-image)(fullUrl: urn:uuid:74d4c070-6596-8252-8ad9-afa515a41fev)

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
<div class="indent org"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <participant>
                        <typeReference>
                            <!-- this is new in R5 and is not in R4B -->
                            <reference value=&quot;DeviceDefinition/mixer&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://accumulus.org/fhir/code/equipmentClass&quot;/>
                                <code value=&quot;example&quot;/>
                                <display value=&quot;Blender&quot;/>
                            </coding>
                        </role>">Participant</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <participant>
                        ...
                        <role>
                            <coding>
                                <system value=&quot;http://accumulus.org/fhir/code/equipmentClass&quot;/>
                                <code value=&quot;example&quot;/>
                                <display value=&quot;Blender&quot;/>
                            </coding>">Role: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <participant>
                        <role>
                            <coding>
                                <system value=&quot;http://accumulus.org/fhir/code/equipmentClass&quot;/>
                                <code value=&quot;example&quot;/>
                                <display value=&quot;Blender&quot;/>">Blender<span class="greyOff"> [example]</span><span class="greyOff"> (http://accumulus.org/fhir/code/equipmentClass)</span></span></span></div>
<div class="indent devd summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (PlanDefinition/typeReference, id: manufacturingProcess-unlinked fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="DeviceDefinition (id: mixer)(fullUrl: urn:uuid:82a39a18-91cf-a19d-76c1-a9e8bad9494d)

<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                <id value=&quot;mixer&quot;/>
                <deviceName>
                    <name value=&quot;Blender&quot;/>
                    <type value=&quot;registered-name&quot;/>
                </deviceName>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/deviceProperty&quot;/>
                            <code value=&quot;121212&quot;/>
                            <display value=&quot;Maximum capacity&quot;/>
                        </coding>
                    </type>
                    <valueQuantity>
                        <value value=&quot;1000&quot;/>
                        <unit value=&quot;litres&quot;/>
                    </valueQuantity>
                </property>" id="DeviceDefinition-mixer">Device</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/devicedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/devicedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/devicedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: mixer</div>
<div class="debugOff"> fullUrl: urn:uuid:82a39a18-91cf-a19d-76c1-a9e8bad9494d</div>
<div class="summaryHiddenOff"></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                ...
                <deviceName>
                    <name value=&quot;Blender&quot;/>
                    <type value=&quot;registered-name&quot;/>">Name: </span><span>Blender</span><span> (name type: registered-name)</span></div>
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
                            <display value=&quot;Maximum capacity&quot;/>
                        </coding>
                    </type>
                    <valueQuantity>
                        <value value=&quot;1000&quot;/>
                        <unit value=&quot;litres&quot;/>
                    </valueQuantity>">Property</span><div class="indent devdl3">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/deviceProperty&quot;/>
                            <code value=&quot;121212&quot;/>
                            <display value=&quot;Maximum capacity&quot;/>
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
                            <display value=&quot;Maximum capacity&quot;/>">Maximum capacity<span class="greyOff"> [121212]</span><span class="greyOff"> (http://accumulus.org/fhir/code/deviceProperty)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                <property>
                    ...
                    <valueQuantity>
                        <value value=&quot;1000&quot;/>
                        <unit value=&quot;litres&quot;/>">Value: <span title="
<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                <property>
                    ...
                    <valueQuantity>
                        <value value=&quot;1000&quot;/>
                        <unit value=&quot;litres&quot;/>">1000 litres</span></span></div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="indent org"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://accumulus.org/fhir/extension/manufacturingParticipant&quot;>
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
                    <participant>
                        <role>
                            <coding>
                                <system value=&quot;http://accumulus.org/fhir/code/manufacturingParticipantRole&quot;/>
                                <code value=&quot;example&quot;/>
                                <display value=&quot;StartingMaterial&quot;/>">StartingMaterial<span class="greyOff"> [example]</span><span class="greyOff"> (http://accumulus.org/fhir/code/manufacturingParticipantRole)</span></span></span></div>
<div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (PlanDefinition/valueReference, id: manufacturingProcess-unlinked fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: startingMaterial)(fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821153)

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
<div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: Stelbatolol fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821152)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: startingMaterial fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821153)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: substance-manufacturer)(fullUrl: urn:uuid:9fe98cfa-9245-8313-0fc5-d15e613b5d6d)

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
<div class="indent org"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://accumulus.org/fhir/extension/manufacturingParticipant&quot;>
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
                    <participant>
                        <role>
                            <coding>
                                <system value=&quot;http://accumulus.org/fhir/code/manufacturingParticipantRole&quot;/>
                                <code value=&quot;example&quot;/>
                                <display value=&quot;ProcessingMaterial&quot;/>">ProcessingMaterial<span class="greyOff"> [example]</span><span class="greyOff"> (http://accumulus.org/fhir/code/manufacturingParticipantRole)</span></span></span></div>
<div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (PlanDefinition/valueReference, id: manufacturingProcess-unlinked fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: processingMaterial)(fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821155)

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;processingMaterial&quot;/>
                <manufacturer>
                    <reference value=&quot;Organization/manufacturerProcessingMaterial&quot;/>
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
                    <reference value=&quot;Organization/manufacturerProcessingMaterial&quot;/>">Manufacturer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: processingMaterial fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821155)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: manufacturerProcessingMaterial)(fullUrl: urn:uuid:8d61736c-a6e3-8301-659f-17da402e012a)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <id value=&quot;manufacturerProcessingMaterial&quot;/>
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
                </contact>" id="Organization-manufacturerProcessingMaterial">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/organization.html#tt-uml">R6</a>]</span><div class="debugOff">id: manufacturerProcessingMaterial</div>
<div class="debugOff"> fullUrl: urn:uuid:8d61736c-a6e3-8301-659f-17da402e012a</div><span class="summaryShowsOff"> - AAA Pharmaceutical, Inc.</span><div class="summaryHiddenOff">
<div><span title="
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
                    <value value=&quot;3010027650&quot;/>">3010027650<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span></div>
</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;AAA Pharmaceutical, Inc.&quot;>">Name: </span><span>AAA Pharmaceutical, Inc.</span></div>
<div class="indent org2">
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
<div class="indent org"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://accumulus.org/fhir/extension/manufacturingParticipant&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/StelbatololAqueousSolution&quot;/>
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
                    <participant>
                        <role>
                            <coding>
                                <system value=&quot;http://accumulus.org/fhir/code/manufacturingParticipantRole&quot;/>
                                <code value=&quot;example&quot;/>
                                <display value=&quot;ResultingMaterial&quot;/>">ResultingMaterial<span class="greyOff"> [example]</span><span class="greyOff"> (http://accumulus.org/fhir/code/manufacturingParticipantRole)</span></span></span></div>
<div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (PlanDefinition/valueReference, id: manufacturingProcess-unlinked fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (PlanDefinition/valueReference, id: manufacturingProcess-unlinked fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: StelbatololAqueousSolution)(fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821154)

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;StelbatololAqueousSolution&quot;/>
                <name>
                    <name value=&quot;Stelbatolol Aqueous Solution&quot;/>
                </name>" id="SubstanceDefinition-StelbatololAqueousSolution">Substance</span></a><span class="summaryShowsOff"><b> - Stelbatolol Aqueous Solution</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substancedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: StelbatololAqueousSolution</div>
<div class="debugOff"> fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821154</div>
<div class="summaryHiddenOff">
<div class="indent sbddetails">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <name>
                    <name value=&quot;Stelbatolol Aqueous Solution&quot;>">Name: </span><span><span>Stelbatolol Aqueous Solution</span></span></div>
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
<div class="indent summaryUnit" ondblclick="summaryHandler(event)"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <action>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processStepScale&quot;>
                        <valueCoding>
                            <system value=&quot;http://accumulus.org/fhir/code/manufacturingStepScale&quot;/>
                            <code value=&quot;ABCD&quot;/>
                            <display value=&quot;Production Scale&quot;/>
                        </valueCoding>
                    </extension>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processParameters&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/processParameter&quot;/>
                                    <!-- TODO LOINC? -->
                                    <code value=&quot;TEMPMAX&quot;/>
                                    <display value=&quot;Maximum Temperature&quot;/>
                                </coding>
                                <text value=&quot;Process temperature must be below 40°C&quot;/>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;value&quot;>
                            <!-- todo want a range here -->
                            <valueQuantity>
                                <value value=&quot;40&quot;/>
                                <unit value=&quot;°C&quot;/>
                                <system value=&quot;http://unitsofmeasure.org&quot;/>
                                <code value=&quot;Cel&quot;/>
                            </valueQuantity>
                        </extension>
                    </extension>
                    <prefix value=&quot;2&quot;/>
                    <description value=&quot;Drying using a heater&quot;/>
                    <code>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/manufacturingStep&quot;/>
                            <code value=&quot;12121&quot;/>
                            <display value=&quot;Drying&quot;/>
                        </coding>
                        <!--text value=&quot;Step 2 in the process - free text is possible&quot;/-->
                    </code>
                    <documentation>
                        <type value=&quot;specification-of&quot;/>
                        <resourceReference>
                            <reference value=&quot;DocumentReference/DocumentReference-image&quot;/>
                        </resourceReference>
                    </documentation>
                    <goalId value=&quot;goal-control-water-content&quot;/>
                    <participant>
                        <typeReference>
                            <!-- this is new in R5 and is not in R4B -->
                            <reference value=&quot;DeviceDefinition/dryer&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://accumulus.org/fhir/code/equipmentClass&quot;/>
                                <code value=&quot;example&quot;/>
                                <display value=&quot;Dryer&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://accumulus.org/fhir/extension/manufacturingParticipant&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/StelbatololAqueousSolution&quot;/>
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
                            <extension url=&quot;http://accumulus.org/fhir/extension/manufacturingParticipant&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/StelbatololGranules&quot;/>
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
                    </participant>"><span>Action</span><span class="summaryShowsOff"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <prefix value=&quot;2&quot;>"> - 2</span> - <span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <code>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/manufacturingStep&quot;/>
                            <code value=&quot;12121&quot;/>
                            <display value=&quot;Drying&quot;/>">Drying<span class="greyOff"> [12121]</span><span class="greyOff"> (http://accumulus.org/fhir/code/manufacturingStep)</span></span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <prefix value=&quot;2&quot;>">Step (prefix): </span><span>2</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <code>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/manufacturingStep&quot;/>
                            <code value=&quot;12121&quot;/>
                            <display value=&quot;Drying&quot;/>
                        </coding>
                        <!--text value=&quot;Step 2 in the process - free text is possible&quot;/-->">Code: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <code>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/manufacturingStep&quot;/>
                            <code value=&quot;12121&quot;/>
                            <display value=&quot;Drying&quot;/>">Drying<span class="greyOff"> [12121]</span><span class="greyOff"> (http://accumulus.org/fhir/code/manufacturingStep)</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <description value=&quot;Drying using a heater&quot;>">Description: </span><span>Drying using a heater</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processStepScale&quot;>
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
                    <extension url=&quot;http://accumulus.org/fhir/extension/processStepScale&quot;>
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
                    ...
                    <goalId value=&quot;goal-control-water-content&quot;>">
<div class="summaryHiddenOff">
<div class="indent planl2"><a id="goal-goal-control-water-content"><span title="id: goal-control-water-content
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <goal id=&quot;goal-control-water-content&quot;>
                    <category>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/testCategory&quot;/>
                            <code value=&quot;C123456&quot;/>
                            <display value=&quot;Physical Property&quot;/>
                        </coding>
                    </category>
                    <description>
                        <text value=&quot;Controls - Water Content&quot;/>
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
                                <code value=&quot;WaterContent&quot;/>
                                <display value=&quot;Water content&quot;/>
                            </coding>
                            <text value=&quot;Under 2%&quot;/>
                        </measure>
                        <!--detailString value=&quot;can also be a string&quot;-->
                        <detailRange>
                            <high>
                                <value value=&quot;2&quot;/>
                                <unit value=&quot;%&quot;/>
                            </high>
                        </detailRange>
                    </target>">Goal</span><span> (goal-control-water-content</span>)</a><div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <goal id=&quot;goal-control-water-content&quot;>
                    ...
                    <description>
                        <text value=&quot;Controls - Water Content&quot;/>
                        <!-- this is mandatory, even though we don't really want it -->">Description: </span><span style="white-space:normal;">Controls - Water Content</span></div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <goal id=&quot;goal-control-water-content&quot;>
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
                <goal id=&quot;goal-control-water-content&quot;>
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
                <goal id=&quot;goal-control-water-content&quot;>
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
                <goal id=&quot;goal-control-water-content&quot;>
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
                <goal id=&quot;goal-control-water-content&quot;>
                    ...
                    <target>
                        <measure>
                            <coding>
                                <system value=&quot;http://dummy.loinc.org&quot;/>
                                <code value=&quot;WaterContent&quot;/>
                                <display value=&quot;Water content&quot;/>
                            </coding>
                            <text value=&quot;Under 2%&quot;/>
                        </measure>
                        <!--detailString value=&quot;can also be a string&quot;-->
                        <detailRange>
                            <high>
                                <value value=&quot;2&quot;/>
                                <unit value=&quot;%&quot;/>
                            </high>
                        </detailRange>">Target</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <goal id=&quot;goal-control-water-content&quot;>
                    <target>
                        <measure>
                            <coding>
                                <system value=&quot;http://dummy.loinc.org&quot;/>
                                <code value=&quot;WaterContent&quot;/>
                                <display value=&quot;Water content&quot;/>
                            </coding>
                            <text value=&quot;Under 2%&quot;/>">Measure: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <goal id=&quot;goal-control-water-content&quot;>
                    <target>
                        <measure>
                            <coding>
                                <system value=&quot;http://dummy.loinc.org&quot;/>
                                <code value=&quot;WaterContent&quot;/>
                                <display value=&quot;Water content&quot;/>">Water content<span class="greyOff"> [WaterContent]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Under 2%</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <goal id=&quot;goal-control-water-content&quot;>
                    <target>
                        ...
                        <detailRange>
                            <high>
                                <value value=&quot;2&quot;/>
                                <unit value=&quot;%&quot;/>
                            </high>">Detail: </span> to <span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <goal id=&quot;goal-control-water-content&quot;>
                    <target>
                        <detailRange>
                            <high>
                                <value value=&quot;2&quot;/>
                                <unit value=&quot;%&quot;/>">2%</span></div>
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
                    ...
                    <extension url=&quot;http://accumulus.org/fhir/extension/processParameters&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/processParameter&quot;/>
                                    <!-- TODO LOINC? -->
                                    <code value=&quot;TEMPMAX&quot;/>
                                    <display value=&quot;Maximum Temperature&quot;/>
                                </coding>
                                <text value=&quot;Process temperature must be below 40°C&quot;/>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;value&quot;>
                            <!-- todo want a range here -->
                            <valueQuantity>
                                <value value=&quot;40&quot;/>
                                <unit value=&quot;°C&quot;/>
                                <system value=&quot;http://unitsofmeasure.org&quot;/>
                                <code value=&quot;Cel&quot;/>
                            </valueQuantity>
                        </extension>">
					Parameters
					<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processParameters&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/processParameter&quot;/>
                                    <!-- TODO LOINC? -->
                                    <code value=&quot;TEMPMAX&quot;/>
                                    <display value=&quot;Maximum Temperature&quot;/>
                                </coding>
                                <text value=&quot;Process temperature must be below 40°C&quot;/>
                            </valueCodeableConcept>">Parameter: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processParameters&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/processParameter&quot;/>
                                    <!-- TODO LOINC? -->
                                    <code value=&quot;TEMPMAX&quot;/>
                                    <display value=&quot;Maximum Temperature&quot;/>">Maximum Temperature<span class="greyOff"> [TEMPMAX]</span><span class="greyOff"> (http://accumulus.org/fhir/code/processParameter)</span></span><span style="white-space:normal;"> - Text: Process temperature must be below 40°C</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processParameters&quot;>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;40&quot;/>
                                <unit value=&quot;°C&quot;/>
                                <system value=&quot;http://unitsofmeasure.org&quot;/>
                                <code value=&quot;Cel&quot;/>">Value Quantity: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processParameters&quot;>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;40&quot;/>
                                <unit value=&quot;°C&quot;/>
                                <system value=&quot;http://unitsofmeasure.org&quot;/>
                                <code value=&quot;Cel&quot;/>">40 °C</span><span class="greyOff"> [Cel] (http://unitsofmeasure.org)</span></div>
</div>
<div class="indent planl3">
					Documentation
					<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <documentation>
                        <type value=&quot;specification-of&quot;>">Type: </span><span><span>specification-of</span></span></div>
<div class="indent org summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (PlanDefinition/resourceReference, id: manufacturingProcess-unlinked fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (PlanDefinition/resourceReference, id: manufacturingProcess-unlinked fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (PlanDefinition/resourceReference, id: manufacturingProcess-unlinked fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="DocumentReference (id: DocumentReference-image)(fullUrl: urn:uuid:74d4c070-6596-8252-8ad9-afa515a41fev)

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
<div class="indent org"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <participant>
                        <typeReference>
                            <!-- this is new in R5 and is not in R4B -->
                            <reference value=&quot;DeviceDefinition/dryer&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://accumulus.org/fhir/code/equipmentClass&quot;/>
                                <code value=&quot;example&quot;/>
                                <display value=&quot;Dryer&quot;/>
                            </coding>
                        </role>">Participant</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <participant>
                        ...
                        <role>
                            <coding>
                                <system value=&quot;http://accumulus.org/fhir/code/equipmentClass&quot;/>
                                <code value=&quot;example&quot;/>
                                <display value=&quot;Dryer&quot;/>
                            </coding>">Role: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <participant>
                        <role>
                            <coding>
                                <system value=&quot;http://accumulus.org/fhir/code/equipmentClass&quot;/>
                                <code value=&quot;example&quot;/>
                                <display value=&quot;Dryer&quot;/>">Dryer<span class="greyOff"> [example]</span><span class="greyOff"> (http://accumulus.org/fhir/code/equipmentClass)</span></span></span></div>
<div class="indent devd summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (PlanDefinition/typeReference, id: manufacturingProcess-unlinked fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="DeviceDefinition (id: dryer)(fullUrl: urn:uuid:82a39a18-91cf-a19d-76c1-a9e8bbd9494c)

<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                <id value=&quot;dryer&quot;/>
                <deviceName>
                    <name value=&quot;Heated dryer&quot;/>
                    <!-- #89 Equiment subclass -->
                    <type value=&quot;registered-name&quot;/>
                </deviceName>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/deviceProperty&quot;/>
                            <code value=&quot;121212&quot;/>
                            <display value=&quot;Power&quot;/>
                        </coding>
                    </type>
                    <valueQuantity>
                        <value value=&quot;3&quot;/>
                        <unit value=&quot;kW&quot;/>
                    </valueQuantity>
                </property>" id="DeviceDefinition-dryer">Device</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/devicedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/devicedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/devicedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: dryer</div>
<div class="debugOff"> fullUrl: urn:uuid:82a39a18-91cf-a19d-76c1-a9e8bbd9494c</div>
<div class="summaryHiddenOff"></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                ...
                <deviceName>
                    <name value=&quot;Heated dryer&quot;/>
                    <!-- #89 Equiment subclass -->
                    <type value=&quot;registered-name&quot;/>">Name: </span><span>Heated dryer</span><span> (name type: registered-name)</span></div>
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
                            <display value=&quot;Power&quot;/>
                        </coding>
                    </type>
                    <valueQuantity>
                        <value value=&quot;3&quot;/>
                        <unit value=&quot;kW&quot;/>
                    </valueQuantity>">Property</span><div class="indent devdl3">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/deviceProperty&quot;/>
                            <code value=&quot;121212&quot;/>
                            <display value=&quot;Power&quot;/>
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
                            <display value=&quot;Power&quot;/>">Power<span class="greyOff"> [121212]</span><span class="greyOff"> (http://accumulus.org/fhir/code/deviceProperty)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                <property>
                    ...
                    <valueQuantity>
                        <value value=&quot;3&quot;/>
                        <unit value=&quot;kW&quot;/>">Value: <span title="
<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                <property>
                    ...
                    <valueQuantity>
                        <value value=&quot;3&quot;/>
                        <unit value=&quot;kW&quot;/>">3 kW</span></span></div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="indent org"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://accumulus.org/fhir/extension/manufacturingParticipant&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/StelbatololAqueousSolution&quot;/>
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
                    <participant>
                        <role>
                            <coding>
                                <system value=&quot;http://accumulus.org/fhir/code/manufacturingParticipantRole&quot;/>
                                <code value=&quot;example&quot;/>
                                <display value=&quot;StartingMaterial&quot;/>">StartingMaterial<span class="greyOff"> [example]</span><span class="greyOff"> (http://accumulus.org/fhir/code/manufacturingParticipantRole)</span></span></span></div>
<div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (PlanDefinition/valueReference, id: manufacturingProcess-unlinked fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (PlanDefinition/valueReference, id: manufacturingProcess-unlinked fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: StelbatololAqueousSolution)(fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821154)

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;StelbatololAqueousSolution&quot;/>
                <name>
                    <name value=&quot;Stelbatolol Aqueous Solution&quot;/>
                </name>" id="SubstanceDefinition-StelbatololAqueousSolution">Substance</span></a><span class="summaryShowsOff"><b> - Stelbatolol Aqueous Solution</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substancedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: StelbatololAqueousSolution</div>
<div class="debugOff"> fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821154</div>
<div class="summaryHiddenOff">
<div class="indent sbddetails">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <name>
                    <name value=&quot;Stelbatolol Aqueous Solution&quot;>">Name: </span><span><span>Stelbatolol Aqueous Solution</span></span></div>
</div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
</div>
</div>
<div class="indent org"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://accumulus.org/fhir/extension/manufacturingParticipant&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/StelbatololGranules&quot;/>
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
                    <participant>
                        <role>
                            <coding>
                                <system value=&quot;http://accumulus.org/fhir/code/manufacturingParticipantRole&quot;/>
                                <code value=&quot;example&quot;/>
                                <display value=&quot;ResultingMaterial&quot;/>">ResultingMaterial<span class="greyOff"> [example]</span><span class="greyOff"> (http://accumulus.org/fhir/code/manufacturingParticipantRole)</span></span></span></div>
<div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (PlanDefinition/valueReference, id: manufacturingProcess-unlinked fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (PlanDefinition/valueReference, id: manufacturingProcess-unlinked fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: StelbatololGranules)(fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821113)

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;StelbatololGranules&quot;/>
                <name>
                    <name value=&quot;Stelbatolol Granules&quot;/>
                    <!-- #4 -->
                </name>" id="SubstanceDefinition-StelbatololGranules">Substance</span></a><span class="summaryShowsOff"><b> - Stelbatolol Granules</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substancedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: StelbatololGranules</div>
<div class="debugOff"> fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821113</div>
<div class="summaryHiddenOff">
<div class="indent sbddetails">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <name>
                    <name value=&quot;Stelbatolol Granules&quot;>">Name: </span><span><span>Stelbatolol Granules</span></span></div>
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
<div class="indent summaryUnit" ondblclick="summaryHandler(event)"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <action>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processStepScale&quot;>
                        <valueCoding>
                            <system value=&quot;http://accumulus.org/fhir/code/manufacturingStepScale&quot;/>
                            <code value=&quot;ABCD&quot;/>
                            <display value=&quot;Production Scale&quot;/>
                        </valueCoding>
                    </extension>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processParameters&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/processParameter&quot;/>
                                    <code value=&quot;ROTATIONSPEED&quot;/>
                                    <display value=&quot;Rotational Speed&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;2500&quot;/>
                                <unit value=&quot;rpm&quot;/>
                            </valueQuantity>
                        </extension>
                    </extension>
                    <prefix value=&quot;3&quot;/>
                    <description value=&quot;Particle Size Reduction by using a rotating impeller&quot;/>
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
                    <goalId value=&quot;goal-control-particle-size&quot;/>
                    <participant>
                        <typeReference>
                            <!-- this is new in R5 and is not in R4B -->
                            <reference value=&quot;DeviceDefinition/devicedefinition-dxpq-ex1&quot;/>
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
                            <extension url=&quot;http://accumulus.org/fhir/extension/manufacturingParticipant&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/StelbatololGranules&quot;/>
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
                            <extension url=&quot;http://accumulus.org/fhir/extension/manufacturingParticipant&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/Stelbatolol&quot;/>
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
                    </participant>"><span>Action</span><span class="summaryShowsOff"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <prefix value=&quot;3&quot;>"> - 3</span> - <span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
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
                    ...
                    <prefix value=&quot;3&quot;>">Step (prefix): </span><span>3</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
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
                    ...
                    <description value=&quot;Particle Size Reduction by using a rotating impeller&quot;>">Description: </span><span>Particle Size Reduction by using a rotating impeller</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processStepScale&quot;>
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
                    <extension url=&quot;http://accumulus.org/fhir/extension/processStepScale&quot;>
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
                    ...
                    <goalId value=&quot;goal-control-particle-size&quot;>">
<div class="summaryHiddenOff">
<div class="indent planl2"><a id="goal-goal-control-particle-size"><span title="id: goal-control-particle-size
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <goal id=&quot;goal-control-particle-size&quot;>
                    <category>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/testCategory&quot;/>
                            <code value=&quot;C123456&quot;/>
                            <display value=&quot;Physical Property&quot;/>
                        </coding>
                    </category>
                    <description>
                        <text value=&quot;Controls - Particle Size&quot;/>
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
                                <code value=&quot;ParticleSize&quot;/>
                                <display value=&quot;Particle Size&quot;/>
                            </coding>
                            <text value=&quot;Under 200 microns&quot;/>
                        </measure>
                        <!--detailString value=&quot;can also be a string&quot;-->
                        <detailRange>
                            <high>
                                <value value=&quot;200&quot;/>
                                <unit value=&quot;microns&quot;/>
                            </high>
                        </detailRange>
                    </target>">Goal</span><span> (goal-control-particle-size</span>)</a><div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <goal id=&quot;goal-control-particle-size&quot;>
                    ...
                    <description>
                        <text value=&quot;Controls - Particle Size&quot;/>">Description: </span><span style="white-space:normal;">Controls - Particle Size</span></div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <goal id=&quot;goal-control-particle-size&quot;>
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
                <goal id=&quot;goal-control-particle-size&quot;>
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
                <goal id=&quot;goal-control-particle-size&quot;>
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
                <goal id=&quot;goal-control-particle-size&quot;>
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
                <goal id=&quot;goal-control-particle-size&quot;>
                    ...
                    <target>
                        <measure>
                            <coding>
                                <system value=&quot;http://dummy.loinc.org&quot;/>
                                <code value=&quot;ParticleSize&quot;/>
                                <display value=&quot;Particle Size&quot;/>
                            </coding>
                            <text value=&quot;Under 200 microns&quot;/>
                        </measure>
                        <!--detailString value=&quot;can also be a string&quot;-->
                        <detailRange>
                            <high>
                                <value value=&quot;200&quot;/>
                                <unit value=&quot;microns&quot;/>
                            </high>
                        </detailRange>">Target</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <goal id=&quot;goal-control-particle-size&quot;>
                    <target>
                        <measure>
                            <coding>
                                <system value=&quot;http://dummy.loinc.org&quot;/>
                                <code value=&quot;ParticleSize&quot;/>
                                <display value=&quot;Particle Size&quot;/>
                            </coding>
                            <text value=&quot;Under 200 microns&quot;/>">Measure: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <goal id=&quot;goal-control-particle-size&quot;>
                    <target>
                        <measure>
                            <coding>
                                <system value=&quot;http://dummy.loinc.org&quot;/>
                                <code value=&quot;ParticleSize&quot;/>
                                <display value=&quot;Particle Size&quot;/>">Particle Size<span class="greyOff"> [ParticleSize]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Under 200 microns</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <goal id=&quot;goal-control-particle-size&quot;>
                    <target>
                        ...
                        <detailRange>
                            <high>
                                <value value=&quot;200&quot;/>
                                <unit value=&quot;microns&quot;/>
                            </high>">Detail: </span> to <span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <goal id=&quot;goal-control-particle-size&quot;>
                    <target>
                        <detailRange>
                            <high>
                                <value value=&quot;200&quot;/>
                                <unit value=&quot;microns&quot;/>">200 microns</span></div>
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
                    ...
                    <extension url=&quot;http://accumulus.org/fhir/extension/processParameters&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/processParameter&quot;/>
                                    <code value=&quot;ROTATIONSPEED&quot;/>
                                    <display value=&quot;Rotational Speed&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;2500&quot;/>
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
                    <extension url=&quot;http://accumulus.org/fhir/extension/processParameters&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/processParameter&quot;/>
                                    <code value=&quot;ROTATIONSPEED&quot;/>
                                    <display value=&quot;Rotational Speed&quot;/>
                                </coding>
                            </valueCodeableConcept>">Parameter: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processParameters&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://accumulus.org/fhir/code/processParameter&quot;/>
                                    <code value=&quot;ROTATIONSPEED&quot;/>
                                    <display value=&quot;Rotational Speed&quot;/>">Rotational Speed<span class="greyOff"> [ROTATIONSPEED]</span><span class="greyOff"> (http://accumulus.org/fhir/code/processParameter)</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processParameters&quot;>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;2500&quot;/>
                                <unit value=&quot;rpm&quot;/>">Value Quantity: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://accumulus.org/fhir/extension/processParameters&quot;>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;2500&quot;/>
                                <unit value=&quot;rpm&quot;/>">2500 rpm</span></div>
</div>
<div class="indent planl3">
					Documentation
					<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <documentation>
                        <type value=&quot;specification-of&quot;>">Type: </span><span><span>specification-of</span></span></div>
<div class="indent org summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (PlanDefinition/resourceReference, id: manufacturingProcess-unlinked fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (PlanDefinition/resourceReference, id: manufacturingProcess-unlinked fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (PlanDefinition/resourceReference, id: manufacturingProcess-unlinked fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="DocumentReference (id: DocumentReference-image)(fullUrl: urn:uuid:74d4c070-6596-8252-8ad9-afa515a41fev)

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
<div class="indent org"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <participant>
                        <typeReference>
                            <!-- this is new in R5 and is not in R4B -->
                            <reference value=&quot;DeviceDefinition/devicedefinition-dxpq-ex1&quot;/>
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
                    <participant>
                        <role>
                            <coding>
                                <system value=&quot;http://accumulus.org/fhir/code/equipmentClass&quot;/>
                                <code value=&quot;example&quot;/>
                                <!-- #88 Equipment class -->
                                <display value=&quot;Compression Milling&quot;/>">Compression Milling<span class="greyOff"> [example]</span><span class="greyOff"> (http://accumulus.org/fhir/code/equipmentClass)</span></span></span></div>
<div class="indent devd summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (PlanDefinition/typeReference, id: manufacturingProcess-unlinked fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="DeviceDefinition (id: devicedefinition-dxpq-ex1)(fullUrl: urn:uuid:82a39a18-91cf-a19d-76c1-a9e8bad9494c)
Profile: http://hl7.org/fhir/uv/dx-pq/StructureDefinition/DeviceDefinition-dxpq 

<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                <id value=&quot;devicedefinition-dxpq-ex1&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/DeviceDefinition-dxpq&quot;/>
                </meta>
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
                </property>" id="DeviceDefinition-devicedefinition-dxpq-ex1">Device</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/devicedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/devicedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/devicedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: devicedefinition-dxpq-ex1</div>
<div class="debugOff"> fullUrl: urn:uuid:82a39a18-91cf-a19d-76c1-a9e8bad9494c</div>
<div class="debugOff"></div>
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
                    </valueQuantity>">Property</span><div class="indent devdl3">
<div><span title="
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
</div>
<div class="indent org"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://accumulus.org/fhir/extension/manufacturingParticipant&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/StelbatololGranules&quot;/>
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
                    <participant>
                        <role>
                            <coding>
                                <system value=&quot;http://accumulus.org/fhir/code/manufacturingParticipantRole&quot;/>
                                <code value=&quot;example&quot;/>
                                <display value=&quot;StartingMaterial&quot;/>">StartingMaterial<span class="greyOff"> [example]</span><span class="greyOff"> (http://accumulus.org/fhir/code/manufacturingParticipantRole)</span></span></span></div>
<div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (PlanDefinition/valueReference, id: manufacturingProcess-unlinked fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (PlanDefinition/valueReference, id: manufacturingProcess-unlinked fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: StelbatololGranules)(fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821113)

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;StelbatololGranules&quot;/>
                <name>
                    <name value=&quot;Stelbatolol Granules&quot;/>
                    <!-- #4 -->
                </name>" id="SubstanceDefinition-StelbatololGranules">Substance</span></a><span class="summaryShowsOff"><b> - Stelbatolol Granules</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substancedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: StelbatololGranules</div>
<div class="debugOff"> fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821113</div>
<div class="summaryHiddenOff">
<div class="indent sbddetails">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <name>
                    <name value=&quot;Stelbatolol Granules&quot;>">Name: </span><span><span>Stelbatolol Granules</span></span></div>
</div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
</div>
</div>
<div class="indent org"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://accumulus.org/fhir/extension/manufacturingParticipant&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/Stelbatolol&quot;/>
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
                    <participant>
                        <role>
                            <coding>
                                <system value=&quot;http://accumulus.org/fhir/code/manufacturingParticipantRole&quot;/>
                                <code value=&quot;example&quot;/>
                                <display value=&quot;ResultingMaterial&quot;/>">ResultingMaterial<span class="greyOff"> [example]</span><span class="greyOff"> (http://accumulus.org/fhir/code/manufacturingParticipantRole)</span></span></span></div>
<div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (PlanDefinition/valueReference, id: manufacturingProcess-unlinked fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Ingredient/code, id: productIngredient fullUrl: urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d6)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: Stelbatolol)(fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821152)

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;Stelbatolol&quot;/>
                <manufacturer>
                    <reference value=&quot;Organization/substance-manufacturer&quot;/>
                </manufacturer>
                <name>
                    <name value=&quot;Stelbatolol&quot;/>
                    <!-- #4 -->
                </name>" id="SubstanceDefinition-Stelbatolol">Substance</span></a><span class="summaryShowsOff"><b> - Stelbatolol</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substancedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: Stelbatolol</div>
<div class="debugOff"> fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821152</div>
<div class="summaryHiddenOff">
<div class="indent sbddetails">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <name>
                    <name value=&quot;Stelbatolol&quot;>">Name: </span><span><span>Stelbatolol</span></span></div>
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
<div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: Stelbatolol fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821152)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: startingMaterial fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821153)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: substance-manufacturer)(fullUrl: urn:uuid:9fe98cfa-9245-8313-0fc5-d15e613b5d6d)

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
		First resource in bundle:PlanDefinition
		Single resource bundle:false
		Single resource bundle Not Patient Or Bundle:false
		Single resource Not Patient:false
		Patient document:false
		General Bundle:false
		Not patient related:true
		=>Patient Centric Mode:false
		SubstanceDef Centric Mode:false--></html>
