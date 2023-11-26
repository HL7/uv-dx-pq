The HTML rendering below shows a synthetic Quality data example for Common Technical Document (CTD) Module 3: Quality, section 3.2.S.2 Manufacture , subsection 3.2.S.2.5 Process Validation and/or Evaluation.
<html>
<body>
<div class="greyable">
<div class="controls remove"><span> </span><span class="button" onclick="toggleSummary(this)" title="summary view">summary on</span><span> </span><span class="button" onclick="toggleCodes(this)" title="details of code systems">show codes</span><span> </span><span class="button" onclick="toggleDebug(this)" title="extra technical info">show debug</span><span style="float:right; margin-right:3px;"><span class="buttonNoUnderlineHidden" onclick="toggleLowerControls(this)"><sup title="expand this"> v </sup></span><span class="buttonNoUnderline" onclick="toggleRemove(this)"><sup title="close this">x</sup></span></span><span> </span><span class="button" onclick="toggleRemoveTask(this)" title="details of tasks for changes">hide task</span><span> </span><span class="button" onclick="toggleRemoveProvenance(this)" title="details of provenance for changes">hide provenance</span><span> </span><span class="button" onclick="toggleRemoveTables(this)" title="tabular data">hide tables</span><br><span> </span><span class="button" onclick="toggleDarkMode(this)" title="darkened display">dark mode</span><span> </span><span class="button" onclick="toggleApplyGreyscale(this)" title="grey and white display">greyscale</span><span> </span><span class="button" onclick="toggleBlackAndWhite(this,false)" title="black and white display">b&amp;w</span><span> </span><span class="button" onclick="togglePlainMode(this);" title="plain text display">text only</span></div>
<div class="divBody">
<div style="position:relative" class="summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOffBorder">
<div class="bundleBorder">
<div class="debugOff">
<div class="bundle"><a class="plainLink"><span class="bold" title="Bundle (id: bundle-product-process-validation-pq-ex2-sub)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-product-process-validation-pq 

<Bundle>
    <!-- Substance Process Validation -->
    <id value=&quot;bundle-product-process-validation-pq-ex2-sub&quot;/>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-product-process-validation-pq&quot;/>
    </meta>
    <type value=&quot;collection&quot;/>
    <entry>
        <fullUrl value=&quot;urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763f&quot;/>
        <resource>
            <PlanDefinition>
                <id value=&quot;validationProtocol&quot;/>
                <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tabulateBatchesInRows-substance&quot;>
                    <valueBoolean value=&quot;true&quot;/>
                </extension>
                <url value=&quot;http://example-server.com/fhir/PlanDefinition/2038e4c7-22b8-4c56-2d28-6c077648763f&quot;/>
                <title value=&quot;DP PROCESS VALIDATION&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/plan-definition-type&quot;/>
                        <code value=&quot;workflow-definition&quot;/>
                        <display value=&quot;Workflow Definition&quot;/>
                    </coding>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-planType-local-pq&quot;/>
                        <code value=&quot;process-validation&quot;/>
                        <display value=&quot;Process Validation&quot;/>
                    </coding>
                </type>
                <status value=&quot;active&quot;/>
                <subjectReference>
                    <reference value=&quot;SubstanceDefinition/substancedefinition-component-substance-dxpq-ex1&quot;/>
                </subjectReference>
                <description value=&quot;Pre-defined validation acceptance criteria were established based on manufacturing development data derived from process characterization studies...&quot;/>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-step-scale-pq&quot;>
                        <valueCoding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingStepScale-local-pq&quot;/>
                            <code value=&quot;ABCD&quot;/>
                            <display value=&quot;Production Scale&quot;/>
                        </valueCoding>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-processParameter-local-pq&quot;/>
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
                    <title value=&quot;Step 1 Yield&quot;/>
                    <description value=&quot;Description of this step&quot;/>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingStep-local-pq&quot;/>
                            <code value=&quot;particleSizeReduction&quot;/>
                            <display value=&quot;Particle Size Reduction&quot;/>
                        </coding>
                        <!--text value=&quot;Step 2 in the process - free text is possible&quot;/-->
                    </code>
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/startingMaterial&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Starting material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;StartingMaterial&quot;/>
                                <display value=&quot;Starting Material&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/intermediateMaterial&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Intermediate material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;IntermediateMaterial&quot;/>
                                <display value=&quot;Intermediate Material&quot;/>
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
                            <display value=&quot;Resulting material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;ResultingMaterial&quot;/>
                                <display value=&quot;Resulting Material&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Step1Yield&quot;/>
                    </action>
                </action>
                <action>
                    <title value=&quot;Step 1 In-Process Control Data&quot;/>
                    <code>
                        <coding>
                            <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/manufacturing-step&quot;/>
                            <code value=&quot;Step1In-ProcessControlData&quot;/>
                            <display value=&quot;Step 1 In-Process Control Data&quot;/>
                        </coding>
                    </code>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/ResidualWaterContent&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/ResidualStartingMaterial1byHPLC&quot;/>
                    </action>
                </action>
                <action>
                    <title value=&quot;Step 1 DS Release Testing Results&quot;/>
                    <code>
                        <coding>
                            <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/manufacturing-step&quot;/>
                            <code value=&quot;Step1DSReleaseTestingResults&quot;/>
                            <display value=&quot;Step 1 DS Release Testing Results&quot;/>
                        </coding>
                    </code>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/AppearanceSubstance&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/IdentificationSubstance&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/AssaySubstance&quot;/>
                    </action>
                </action>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-step-scale-pq&quot;>
                        <valueCoding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingStepScale-local-pq&quot;/>
                            <code value=&quot;ABCD&quot;/>
                            <display value=&quot;Production Scale&quot;/>
                        </valueCoding>
                    </extension>
                    <prefix value=&quot;2&quot;/>
                    <title value=&quot;Step 2 Yield&quot;/>
                    <description value=&quot;Description of this step&quot;/>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingStep-local-pq&quot;/>
                            <code value=&quot;drying&quot;/>
                            <display value=&quot;Drying&quot;/>
                        </coding>
                        <!--text value=&quot;Step 2 in the process - free text is possible&quot;/-->
                    </code>
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/startingMaterialStep2&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Starting material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;StartingMaterial&quot;/>
                                <display value=&quot;Starting Material&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/intermediateMaterialStep2&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Intermediate material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;IntermediateMaterial&quot;/>
                                <display value=&quot;Intermediate Material&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/resultingMaterialStep2&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Resulting material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;ResultingMaterial&quot;/>
                                <display value=&quot;Resulting Material&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Step2Yield&quot;/>
                    </action>
                </action>
            </PlanDefinition>
        </resource>
    </entry>
    <!-- Diagnostic report doesn't carry much extra value but does collect all the observations -->
    <entry>
        <fullUrl value=&quot;urn:uuid:b664977d-799d-a1ce-928a-5def2a9955bd&quot;/>
        <resource>
            <DiagnosticReport>
                <!-- focal resource -->
                <!-- ideally this wants a subject, but it can only be a Medication (batch) and we have multiple. 
                     however the observations themselves do have subjects -->
                <id value=&quot;processValidationReport&quot;/>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/workflow-triggeredBy&quot;>
                    <valueReference>
                        <reference value=&quot;PlanDefinition/validationProtocol&quot;/>
                    </valueReference>
                </extension>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-reportType-local-pq&quot;/>
                        <code value=&quot;Process Validation Report&quot;/>
                        <display value=&quot;Process Validation Report&quot;/>
                    </coding>
                </code>
                <effectiveDateTime value=&quot;2020-12&quot;/>
                <result>
                    <reference value=&quot;Observation/step1Yield1&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/step1Yield2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/step1Yield3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/residualWaterContent1&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/residualWaterContent2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/residualWaterContent3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/appearanceSubstance1&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/appearanceSubstance2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/appearanceSubstance3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/identificationSubstance1&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/identificationSubstance2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/identificationSubstance3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/step2Yield1&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/step2Yield2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/step2Yield3&quot;/>
                </result>
                <conclusion value=&quot;The samples have been assessed and the conclusion is...&quot;/>
            </DiagnosticReport>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:fc07b5d5-9fe1-92c2-2d06-57cb5b295e72&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;AppearanceSubstance&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/fc07b5d5-9fe1-92c2-2d06-57cb5b295e72&quot;/>
                <title value=&quot;Appearance&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Appearance&quot;/>
                        <display value=&quot;Appearance&quot;/>
                    </coding>
                    <text value=&quot;Appearance&quot;/>
                </code>
                <method>
                    <text value=&quot;Visual inspection&quot;/>
                </method>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;White to off-white, to red, to orange, to brown solid&quot;/>
                    </extension>
                </qualifiedValue>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:3b1e878e-4bc9-8864-862f-e28b21233e8d&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;IdentificationSubstance&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/3b1e878e-4bc9-8864-862f-e28b21233e8d&quot;/>
                <title value=&quot;ID by HPLC&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;IDT&quot;/>
                        <display value=&quot;Identification&quot;/>
                    </coding>
                    <text value=&quot;ID by HPLC&quot;/>
                </code>
                <method>
                    <text value=&quot;ID by UHPLC&quot;/>
                </method>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;Conforms to standard&quot;/>
                    </extension>
                </qualifiedValue>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:12e7e672-40a6-4036-3c1f-b8ba6a7d045e&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;AssaySubstance&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4036-3c1f-b8ba6a7d045e&quot;/>
                <title value=&quot;Assay by HPLC (as is) (w/w%)&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;ASSAY&quot;/>
                        <display value=&quot;Assay&quot;/>
                    </coding>
                    <text value=&quot;Assay by HPLC (as is) (w/w%)&quot;/>
                </code>
                <method>
                    <text value=&quot;Assay by UHPLC&quot;/>
                </method>
                <qualifiedValue>
                    <range>
                        <low>
                            <value value=&quot;95&quot;/>
                            <unit value=&quot;%&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%&quot;/>
                        </low>
                        <high>
                            <value value=&quot;101&quot;/>
                            <unit value=&quot;%&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%&quot;/>
                        </high>
                    </range>
                </qualifiedValue>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:fd17b5d6-9fe1-91c2-2d06-47cb5b295e72&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Step1Yield&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/fd17b5d6-9fe1-91c2-2d06-47cb5b295e72&quot;/>
                <title value=&quot;Yield (%)&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Yield (%)&quot;/>
                        <display value=&quot;Yield (%)&quot;/>
                    </coding>
                    <text value=&quot;Yield (%)&quot;/>
                </code>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:fd17b5d7-9fe1-91c2-2d06-47cb5b295e72&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Step2Yield&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/fd17b5d7-9fe1-91c2-2d06-47cb5b295e72&quot;/>
                <title value=&quot;Yield (%)&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Yield (%)&quot;/>
                        <display value=&quot;Yield (%)&quot;/>
                    </coding>
                    <text value=&quot;Yield (%)&quot;/>
                </code>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:fc27b5d6-9fe1-91c2-2d16-57cb5b295e72&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;ResidualWaterContent&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/fc27b5d6-9fe1-91c2-2d16-57cb5b295e72&quot;/>
                <title value=&quot;Residual Water Content (w/w%)&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;ResidualWaterContent&quot;/>
                        <display value=&quot;Residual Water Content (w/w%)&quot;/>
                    </coding>
                    <text value=&quot;Residual Water Content (w/w%)&quot;/>
                </code>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-criticality-pq&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-qualifiedValueCriticality-local-pq&quot;/>
                                <code value=&quot;Non-critical&quot;/>
                                <display value=&quot;Non-critical&quot;/>
                            </coding>
                            <text value=&quot;Non-critical&quot;/>
                        </valueCodeableConcept>
                    </extension>
                    <range>
                        <high>
                            <value value=&quot;7.15&quot;/>
                            <unit value=&quot;%&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%&quot;/>
                        </high>
                    </range>
                </qualifiedValue>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:fc27b5d6-9ff1-91c2-2d16-57cb5b295e72&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;ResidualStartingMaterial1byHPLC&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/fc27b5d6-9ff1-91c2-2d16-57cb5b295e72&quot;/>
                <title value=&quot;Reaction conversion: residual starting material 1 by HPLC (Step Aa) (LC area %)&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Reaction conversion: Residual Starting Material 1 by HPLC&quot;/>
                        <display value=&quot;Reaction conversion: Residual Starting Material 1 by HPLC&quot;/>
                    </coding>
                    <text value=&quot;Reaction conversion: Residual Starting Material 1 by HPLC&quot;/>
                </code>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-criticality-pq&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-qualifiedValueCriticality-local-pq&quot;/>
                                <code value=&quot;critical&quot;/>
                                <display value=&quot;Critical&quot;/>
                            </coding>
                            <text value=&quot;Critical&quot;/>
                        </valueCodeableConcept>
                    </extension>
                    <range>
                        <high>
                            <value value=&quot;23&quot;/>
                            <unit value=&quot;%&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%&quot;/>
                        </high>
                    </range>
                </qualifiedValue>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:9c56948c-2a39-6609-2c01-4d197ea57a33&quot;/>
        <resource>
            <Observation>
                <id value=&quot;appearanceSubstance1&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/AppearanceSubstance&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Appearance&quot;/>
                        <display value=&quot;Appearance&quot;/>
                    </coding>
                    <text value=&quot;Appearance&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-1&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <valueString value=&quot;Off-white solid&quot;/>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:9c56948c-2a49-6609-2c01-4d197ea57a33&quot;/>
        <resource>
            <Observation>
                <id value=&quot;appearanceSubstance2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/AppearanceSubstance&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Appearance&quot;/>
                        <display value=&quot;Appearance&quot;/>
                    </coding>
                    <text value=&quot;Appearance&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-2&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <valueString value=&quot;Off-white solid&quot;/>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:9c56948c-2a39-6609-2c01-4d197eb57a33&quot;/>
        <resource>
            <Observation>
                <id value=&quot;appearanceSubstance3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/AppearanceSubstance&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Appearance&quot;/>
                        <display value=&quot;Appearance&quot;/>
                    </coding>
                    <text value=&quot;Appearance&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-3&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <valueString value=&quot;Off-white solid&quot;/>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:9c56958c-2a39-6609-2c01-4d197ea57a33&quot;/>
        <resource>
            <Observation>
                <id value=&quot;identificationSubstance1&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/IdentificationSubstance&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;IDT&quot;/>
                        <display value=&quot;Identification&quot;/>
                    </coding>
                    <text value=&quot;ID by HPLC&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-1&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <valueString value=&quot;Conforms&quot;/>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:9c56968c-2a49-6609-2c01-4d197ea57a33&quot;/>
        <resource>
            <Observation>
                <id value=&quot;identificationSubstance2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/IdentificationSubstance&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;IDT&quot;/>
                        <display value=&quot;Identification&quot;/>
                    </coding>
                    <text value=&quot;ID by HPLC&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-2&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <valueString value=&quot;Conforms&quot;/>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:9c56978c-2a39-6609-2c01-4d197eb57a33&quot;/>
        <resource>
            <Observation>
                <id value=&quot;identificationSubstance3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/IdentificationSubstance&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;IDT&quot;/>
                        <display value=&quot;Identification&quot;/>
                    </coding>
                    <text value=&quot;ID by HPLC&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-3&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <valueString value=&quot;Does not conform&quot;/>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:9c56948c-2a39-6609-1c01-4d197ea57a33&quot;/>
        <resource>
            <Observation>
                <id value=&quot;step1Yield1&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Step1Yield&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Yield (%)&quot;/>
                        <display value=&quot;Yield (%)&quot;/>
                    </coding>
                    <text value=&quot;Yield (%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-1&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <valueQuantity>
                    <value value=&quot;75&quot;/>
                    <unit value=&quot;%&quot;/>
                </valueQuantity>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:9c56948a-2b39-6609-1c01-4d197ea57a33&quot;/>
        <resource>
            <Observation>
                <id value=&quot;step1Yield2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Step1Yield&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Yield (%)&quot;/>
                        <display value=&quot;Yield (%)&quot;/>
                    </coding>
                    <text value=&quot;Yield (%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-2&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <valueQuantity>
                    <value value=&quot;77&quot;/>
                    <unit value=&quot;%&quot;/>
                </valueQuantity>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:9c56948a-2a39-6609-1c01-4d197ea57a33&quot;/>
        <resource>
            <Observation>
                <id value=&quot;step1Yield3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Step1Yield&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Yield (%)&quot;/>
                        <display value=&quot;Yield (%)&quot;/>
                    </coding>
                    <text value=&quot;Yield (%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-3&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <valueQuantity>
                    <value value=&quot;76&quot;/>
                    <unit value=&quot;%&quot;/>
                </valueQuantity>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:9c56948d-2a39-6609-1c01-4d197ea57a33&quot;/>
        <resource>
            <Observation>
                <id value=&quot;step2Yield1&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Step2Yield&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Yield (%)&quot;/>
                        <display value=&quot;Yield (%)&quot;/>
                    </coding>
                    <text value=&quot;Yield (%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-step2-1&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <valueQuantity>
                    <value value=&quot;85&quot;/>
                    <unit value=&quot;%&quot;/>
                </valueQuantity>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:9c56948c-2b39-6609-1c01-4d197ea57a33&quot;/>
        <resource>
            <Observation>
                <id value=&quot;step2Yield2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Step2Yield&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Yield (%)&quot;/>
                        <display value=&quot;Yield (%)&quot;/>
                    </coding>
                    <text value=&quot;Yield (%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-step2-2&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <valueQuantity>
                    <value value=&quot;87&quot;/>
                    <unit value=&quot;%&quot;/>
                </valueQuantity>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:9c56948b-2a39-6609-1c01-4d197ea57a33&quot;/>
        <resource>
            <Observation>
                <id value=&quot;step2Yield3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Step2Yield&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Yield (%)&quot;/>
                        <display value=&quot;Yield (%)&quot;/>
                    </coding>
                    <text value=&quot;Yield (%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-step2-3&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <valueQuantity>
                    <value value=&quot;86&quot;/>
                    <unit value=&quot;%&quot;/>
                </valueQuantity>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:9c56958c-2a39-6609-1c01-4d197ea57a33&quot;/>
        <resource>
            <Observation>
                <id value=&quot;residualWaterContent1&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/ResidualWaterContent&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;ResidualWaterContent&quot;/>
                        <display value=&quot;Residual Water Content (w/w%)&quot;/>
                    </coding>
                    <text value=&quot;ResidualWaterContent (w/w%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-1&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <valueQuantity>
                    <value value=&quot;6.9&quot;/>
                    <unit value=&quot;%&quot;/>
                </valueQuantity>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:9c56968a-2b39-6609-1c01-4d197ea57a33&quot;/>
        <resource>
            <Observation>
                <id value=&quot;residualWaterContent2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/ResidualWaterContent&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;ResidualWaterContent&quot;/>
                        <display value=&quot;Residual Water Content (w/w%)&quot;/>
                    </coding>
                    <text value=&quot;ResidualWaterContent (w/w%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-2&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <valueQuantity>
                    <value value=&quot;7.0&quot;/>
                    <unit value=&quot;%&quot;/>
                </valueQuantity>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:9c56978a-2a39-6609-1c01-4d197ea57a33&quot;/>
        <resource>
            <Observation>
                <id value=&quot;residualWaterContent3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/ResidualWaterContent&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;ResidualWaterContent&quot;/>
                        <display value=&quot;Residual Water Content (w/w%)&quot;/>
                    </coding>
                    <text value=&quot;ResidualWaterContent (w/w%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-3&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <valueQuantity>
                    <value value=&quot;6.8&quot;/>
                    <unit value=&quot;%&quot;/>
                </valueQuantity>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:23dbbd32-2962-9fc3-40b1-67e864f21cd2&quot;/>
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
        <fullUrl value=&quot;urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
        <resource>
            <Organization>
                <!--testing lab-->
                <id value=&quot;378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                <name value=&quot;Testing Lab&quot;/>
            </Organization>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:57a9af63-315d-1585-a261-0e337b289390&quot;/>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;substancedefinition-component-substance-dxpq-ex1&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/SubstanceDefinition-component-substance-drug-pq&quot;/>
                </meta>
                <manufacturer>
                    <reference value=&quot;Organization/organization-dxpq-ex1&quot;/>
                </manufacturer>
                <name>
                    <name value=&quot;Stelbatolol&quot;/>
                    <!-- #4 -->
                </name>
            </SubstanceDefinition>
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
        <fullUrl value=&quot;urn:uuid:fc178762-81c5-5656-9744-13c7ad1e595b&quot;/>
        <resource>
            <Substance>
                <id value=&quot;actual-batch-substance-starting-1&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq&quot;/>
                </meta>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-01&quot;/>
                        <!-- #159 -->
                    </extension>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;8.1&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                </extension>
                <identifier>
                    <value value=&quot;Start1Amgen&quot;/>
                </identifier>
                <instance value=&quot;true&quot;/>
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/startingMaterial&quot;/>
                    </reference>
                </code>
            </Substance>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:fc178762-81d5-5656-9744-13c7ad1e595b&quot;/>
        <resource>
            <Substance>
                <id value=&quot;actual-batch-substance-starting-2&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq&quot;/>
                </meta>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-01&quot;/>
                        <!-- #159 -->
                    </extension>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;8.2&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                </extension>
                <identifier>
                    <value value=&quot;Start2Amgen&quot;/>
                </identifier>
                <instance value=&quot;true&quot;/>
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/startingMaterial&quot;/>
                    </reference>
                </code>
            </Substance>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:fc178762-81d5-5656-9744-23c7ad1e595b&quot;/>
        <resource>
            <Substance>
                <id value=&quot;actual-batch-substance-starting-3&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq&quot;/>
                </meta>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-01&quot;/>
                        <!-- #159 -->
                    </extension>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;8.3&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                </extension>
                <identifier>
                    <value value=&quot;Start3Amgen&quot;/>
                </identifier>
                <instance value=&quot;true&quot;/>
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/startingMaterial&quot;/>
                    </reference>
                </code>
            </Substance>
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
                <id value=&quot;intermediateMaterial&quot;/>
                <manufacturer>
                    <reference value=&quot;Organization/substance-manufacturer&quot;/>
                </manufacturer>
                <name>
                    <name value=&quot;Processohol&quot;/>
                </name>
            </SubstanceDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:fc178763-81c5-5656-9744-13c7ad1e595b&quot;/>
        <resource>
            <Substance>
                <id value=&quot;actual-batch-substance-itermediate-1&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq&quot;/>
                </meta>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;9.1&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-derived-from-pq&quot;>
                        <!-- assumes 1 to 1, could also be done via a Procedure but overkill -->
                        <valueReference>
                            <reference value=&quot;Substance/actual-batch-substance-starting-1&quot;/>
                        </valueReference>
                    </extension>
                </extension>
                <identifier>
                    <value value=&quot;Intermed1Amgen&quot;/>
                </identifier>
                <instance value=&quot;true&quot;/>
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/intermediateMaterial&quot;/>
                    </reference>
                </code>
            </Substance>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:fc178764-81d5-5656-9744-13c7ad1e595b&quot;/>
        <resource>
            <Substance>
                <id value=&quot;actual-batch-substance-itermediate-2&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq&quot;/>
                </meta>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;9.2&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-derived-from-pq&quot;>
                        <!-- assumes 1 to 1, could also be done via a Procedure but overkill -->
                        <valueReference>
                            <reference value=&quot;Substance/actual-batch-substance-starting-2&quot;/>
                        </valueReference>
                    </extension>
                </extension>
                <identifier>
                    <value value=&quot;Intermed2Amgen&quot;/>
                </identifier>
                <instance value=&quot;true&quot;/>
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/intermediateMaterial&quot;/>
                    </reference>
                </code>
            </Substance>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:fc178764-81d6-5656-9744-13c7ad1e595b&quot;/>
        <resource>
            <Substance>
                <id value=&quot;actual-batch-substance-itermediate-3&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq&quot;/>
                </meta>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;9.3&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-derived-from-pq&quot;>
                        <!-- assumes 1 to 1, could also be done via a Procedure but overkill -->
                        <valueReference>
                            <reference value=&quot;Substance/actual-batch-substance-starting-3&quot;/>
                        </valueReference>
                    </extension>
                </extension>
                <identifier>
                    <value value=&quot;Intermed3Amgen&quot;/>
                </identifier>
                <instance value=&quot;true&quot;/>
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/intermediateMaterial&quot;/>
                    </reference>
                </code>
            </Substance>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:c458791f-8cb8-428e-83f7-8a205f821153&quot;/>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;startingMaterialStep2&quot;/>
                <manufacturer>
                    <reference value=&quot;Organization/substance-manufacturer&quot;/>
                </manufacturer>
                <name>
                    <name value=&quot;Stelbatosubstance2&quot;/>
                </name>
            </SubstanceDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:fc178762-81c5-5656-9744-13c7ad2e595b&quot;/>
        <resource>
            <Substance>
                <id value=&quot;actual-batch-substance-starting-step2-1&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq&quot;/>
                </meta>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-02&quot;/>
                        <!-- #159 -->
                    </extension>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;7.1&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                </extension>
                <identifier>
                    <value value=&quot;Start1Step2Amgen&quot;/>
                </identifier>
                <instance value=&quot;true&quot;/>
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/startingMaterialStep2&quot;/>
                    </reference>
                </code>
            </Substance>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:fc178762-81d5-5656-9744-13c7ad1e596b&quot;/>
        <resource>
            <Substance>
                <id value=&quot;actual-batch-substance-starting-step2-2&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq&quot;/>
                </meta>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-02&quot;/>
                        <!-- #159 -->
                    </extension>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;7.2&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                </extension>
                <identifier>
                    <value value=&quot;Start2Step2Amgen&quot;/>
                </identifier>
                <instance value=&quot;true&quot;/>
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/startingMaterialStep2&quot;/>
                    </reference>
                </code>
            </Substance>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:fc178762-81d5-5656-9744-23c7ad1e597b&quot;/>
        <resource>
            <Substance>
                <id value=&quot;actual-batch-substance-starting-step2-3&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq&quot;/>
                </meta>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-02&quot;/>
                        <!-- #159 -->
                    </extension>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;7.3&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                </extension>
                <identifier>
                    <value value=&quot;Start3Step2Amgen&quot;/>
                </identifier>
                <instance value=&quot;true&quot;/>
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/startingMaterialStep2&quot;/>
                    </reference>
                </code>
            </Substance>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:c458791f-7cb8-428e-84f7-8a205f821155&quot;/>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;intermediateMaterialStep2&quot;/>
                <manufacturer>
                    <reference value=&quot;Organization/substance-manufacturer&quot;/>
                </manufacturer>
                <name>
                    <name value=&quot;ProcessoholStep2&quot;/>
                </name>
            </SubstanceDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:fc178763-81c5-5656-9754-13c7ad1e595b&quot;/>
        <resource>
            <Substance>
                <id value=&quot;actual-batch-substance-itermediate-step2-1&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq&quot;/>
                </meta>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;10.1&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-derived-from-pq&quot;>
                        <!-- assumes 1 to 1, could also be done via a Procedure but overkill -->
                        <valueReference>
                            <reference value=&quot;Substance/actual-batch-substance-starting-step2-1&quot;/>
                        </valueReference>
                    </extension>
                </extension>
                <identifier>
                    <value value=&quot;Intermed1Step2Amgen&quot;/>
                </identifier>
                <instance value=&quot;true&quot;/>
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/intermediateMaterialStep2&quot;/>
                    </reference>
                </code>
            </Substance>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:fc178764-81d5-5656-9764-13c7ad1e595b&quot;/>
        <resource>
            <Substance>
                <id value=&quot;actual-batch-substance-itermediate-step2-2&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq&quot;/>
                </meta>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;10.2&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-derived-from-pq&quot;>
                        <!-- assumes 1 to 1, could also be done via a Procedure but overkill -->
                        <valueReference>
                            <reference value=&quot;Substance/actual-batch-substance-starting-step2-2&quot;/>
                        </valueReference>
                    </extension>
                </extension>
                <identifier>
                    <value value=&quot;Intermed2Step2Amgen&quot;/>
                </identifier>
                <instance value=&quot;true&quot;/>
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/intermediateMaterialStep2&quot;/>
                    </reference>
                </code>
            </Substance>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:fc178764-81d6-6656-9744-13c7ad1e595b&quot;/>
        <resource>
            <Substance>
                <id value=&quot;actual-batch-substance-itermediate-step2-3&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq&quot;/>
                </meta>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;10.3&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-derived-from-pq&quot;>
                        <!-- assumes 1 to 1, could also be done via a Procedure but overkill -->
                        <valueReference>
                            <reference value=&quot;Substance/actual-batch-substance-starting-step2-3&quot;/>
                        </valueReference>
                    </extension>
                </extension>
                <identifier>
                    <value value=&quot;Intermed3Step2Amgen&quot;/>
                </identifier>
                <instance value=&quot;true&quot;/>
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/intermediateMaterialStep2&quot;/>
                    </reference>
                </code>
            </Substance>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:c458791f-8cb8-428e-83f7-8a205f821154&quot;/>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;resultingMaterialStep2&quot;/>
                <name>
                    <name value=&quot;ResultothaneStep2&quot;/>
                </name>
            </SubstanceDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:49d2f0c0-4b28-9271-8aaf-2996a8b9739c&quot;/>
        <resource>
            <Organization>
                <!--id value=&quot;substance-manufacturer&quot;/-->
                <id value=&quot;organization-dxpq-ex1&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Organization-drug-pq&quot;/>
                </meta>
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
        <fullUrl value=&quot;urn:uuid:fc078762-81c5-5656-9744-13c7ad1e595b&quot;/>
        <resource>
            <Substance>
                <!--<id value=&quot;actual-batch-substance&quot;/>-->
                <id value=&quot;substance-dxpq-ex1-unlinked&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq&quot;/>
                </meta>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-pq&quot;>
                        <valueDateTime value=&quot;2019-09-08&quot;/>
                        <!-- #173 -->
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-retest-date-pq&quot;>
                        <valueDateTime value=&quot;2022-09-08&quot;/>
                        <!-- #221 -->
                    </extension>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-07&quot;/>
                        <!-- #159 -->
                    </extension>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;5.1&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-pq&quot;>
                        <valueQuantity>
                            <value value=&quot;4.8&quot;/>
                            <unit value=&quot;kg&quot;/>
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;batchUtilization&quot;>
                        <!-- #161 -->
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/pqcmc-batch-utilization-terminology&quot;/>
                                <code value=&quot;C133991&quot;/>
                                <display value=&quot;Development&quot;/>
                            </coding>
                        </valueCodeableConcept>
                    </extension>
                    <extension url=&quot;assignedManufacturer&quot;>
                        <!-- #160 -->
                        <valueReference>
                            <reference value=&quot;Organization/organization-dxpq-ex1&quot;/>
                        </valueReference>
                    </extension>
                </extension>
                <identifier>
                    <value value=&quot;SUB1Amgen&quot;/>
                </identifier>
                <identifier>
                    <value value=&quot;SUB1SiteA&quot;/>
                    <assigner>
                        <reference value=&quot;Organization/organization-dxpq-ex1&quot;/>
                    </assigner>
                </identifier>
                <instance value=&quot;true&quot;/>
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/substancedefinition-component-substance-dxpq-ex1&quot;/>
                    </reference>
                </code>
            </Substance>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:cb31d747-2338-88d5-342c-8e9c097e4dad&quot;/>
        <resource>
            <Substance>
                <id value=&quot;actual-batch-substance-2-unlinked&quot;/>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-pq&quot;>
                        <valueDateTime value=&quot;2019-09-08&quot;/>
                        <!-- #173 -->
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-retest-date-pq&quot;>
                        <valueDateTime value=&quot;2022-09-08&quot;/>
                        <!-- #221 -->
                    </extension>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-07&quot;/>
                        <!-- #159 -->
                    </extension>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;5.2&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-pq&quot;>
                        <valueQuantity>
                            <value value=&quot;4.8&quot;/>
                            <unit value=&quot;kg&quot;/>
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;batchUtilization&quot;>
                        <!-- #161 -->
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/pqcmc-batch-utilization-terminology&quot;/>
                                <code value=&quot;C133991&quot;/>
                                <display value=&quot;Development&quot;/>
                            </coding>
                        </valueCodeableConcept>
                    </extension>
                    <extension url=&quot;assignedManufacturer&quot;>
                        <!-- #160 -->
                        <valueReference>
                            <reference value=&quot;Organization/organization-dxpq-ex1&quot;/>
                        </valueReference>
                    </extension>
                </extension>
                <identifier>
                    <value value=&quot;SUB2Amgen&quot;/>
                </identifier>
                <identifier>
                    <value value=&quot;SUB2SiteA&quot;/>
                    <assigner>
                        <reference value=&quot;Organization/organization-dxpq-ex1&quot;/>
                    </assigner>
                </identifier>
                <instance value=&quot;true&quot;/>
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/substancedefinition-component-substance-dxpq-ex1&quot;/>
                    </reference>
                </code>
            </Substance>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:1551f97b-6f6d-825e-1fb3-44b0b090808c&quot;/>
        <resource>
            <Substance>
                <id value=&quot;actual-batch-substance-3-unlinked&quot;/>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-pq&quot;>
                        <valueDateTime value=&quot;2019-09-08&quot;/>
                        <!-- #173 -->
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-retest-date-pq&quot;>
                        <valueDateTime value=&quot;2022-09-08&quot;/>
                        <!-- #221 -->
                    </extension>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-07&quot;/>
                        <!-- #159 -->
                    </extension>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;5.3&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-pq&quot;>
                        <valueQuantity>
                            <value value=&quot;4.8&quot;/>
                            <unit value=&quot;kg&quot;/>
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;batchUtilization&quot;>
                        <!-- #161 -->
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/pqcmc-batch-utilization-terminology&quot;/>
                                <code value=&quot;C133991&quot;/>
                                <display value=&quot;Development&quot;/>
                            </coding>
                        </valueCodeableConcept>
                    </extension>
                    <extension url=&quot;assignedManufacturer&quot;>
                        <!-- #160 -->
                        <valueReference>
                            <reference value=&quot;Organization/organization-dxpq-ex1&quot;/>
                        </valueReference>
                    </extension>
                </extension>
                <identifier>
                    <value value=&quot;SUB3Amgen&quot;/>
                    <!-- #155 -->
                </identifier>
                <identifier>
                    <value value=&quot;SUB3SiteA&quot;/>
                    <assigner>
                        <reference value=&quot;Organization/organization-dxpq-ex1&quot;/>
                    </assigner>
                </identifier>
                <instance value=&quot;true&quot;/>
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/substancedefinition-component-substance-dxpq-ex1&quot;/>
                    </reference>
                </code>
            </Substance>
        </resource>
    </entry>" id="Bundle-bundle-product-process-validation-pq-ex2-sub">Bundle</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/bundle.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/bundle.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/bundle.html#tt-uml">R6</a>]</span><div class="debugOff">id: bundle-product-process-validation-pq-ex2-sub</div>
<div class="debugOff"></div>
<div class="debugOff"><span title="
<Bundle>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-product-process-validation-pq&quot;>">Profile: </span><span>http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-product-process-validation-pq</span></div>
<div><span title="
<Bundle>
    ...
    <type value=&quot;collection&quot;>">Type: </span><span><span>collection</span></span></div>
</div>
</div>
<div>
<div class="org indent"><span class="bold">Process Validation Report, on Stelbatolol</span><br><br style="line-height:6px;"><div class="htmlTableRemove">
<div class="htmlTableRemove"><br style="line-height:6px;"><div class="indent-no-border"><span><b>Table 1. Batches Used in Stelbatolol Drug Substance Process Validation</b></span><br><br style="line-height:6px;"><table class="rounded-corners white" id="tabularModeTable" style="width:70%;">
<tr>
<th rowspan="2">Date of Manufacture</th>
<th colspan="2">Drug Substance Batch Number</th>
<th rowspan="2">Batch Size (kg)</th>
</tr>
<tr>
<th>Amgen Batch Number</th>
<th style="border-right: 0.1px solid black;">Site A Batch Number</th>
</tr>
<tr>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-07&quot;>">2019-09-07</span></td>
<td class="centred"><a href="#Substance-substance-dxpq-ex1-unlinked" title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <identifier>
                    <value value=&quot;SUB1Amgen&quot;>" class="noUnderline">SUB1Amgen</a></td>
<td class="centred">SUB1SiteA</td>
<td class="centred">5.1</td>
</tr>
<tr>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-07&quot;>">2019-09-07</span></td>
<td class="centred"><a href="#Substance-actual-batch-substance-2-unlinked" title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <identifier>
                    <value value=&quot;SUB2Amgen&quot;>" class="noUnderline">SUB2Amgen</a></td>
<td class="centred">SUB2SiteA</td>
<td class="centred">5.2</td>
</tr>
<tr>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-07&quot;>">2019-09-07</span></td>
<td class="centred"><a href="#Substance-actual-batch-substance-3-unlinked" title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <identifier>
                    <value value=&quot;SUB3Amgen&quot;>" class="noUnderline">SUB3Amgen</a></td>
<td class="centred">SUB3SiteA</td>
<td class="centred">5.3</td>
</tr>
</table>
</div><br style="line-height:6px;"></div>
</div><br style="line-height:6px;"><div ondblclick="summaryHandler(event)" class="indent summaryUnit comp"><a class="plainLink"><span class="bold" title="DiagnosticReport (id: processValidationReport)(fullUrl: urn:uuid:b664977d-799d-a1ce-928a-5def2a9955bd)

<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                <!-- focal resource -->
                <!-- ideally this wants a subject, but it can only be a Medication (batch) and we have multiple. 
                     however the observations themselves do have subjects -->
                <id value=&quot;processValidationReport&quot;/>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/workflow-triggeredBy&quot;>
                    <valueReference>
                        <reference value=&quot;PlanDefinition/validationProtocol&quot;/>
                    </valueReference>
                </extension>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-reportType-local-pq&quot;/>
                        <code value=&quot;Process Validation Report&quot;/>
                        <display value=&quot;Process Validation Report&quot;/>
                    </coding>
                </code>
                <effectiveDateTime value=&quot;2020-12&quot;/>
                <result>
                    <reference value=&quot;Observation/step1Yield1&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/step1Yield2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/step1Yield3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/residualWaterContent1&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/residualWaterContent2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/residualWaterContent3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/appearanceSubstance1&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/appearanceSubstance2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/appearanceSubstance3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/identificationSubstance1&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/identificationSubstance2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/identificationSubstance3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/step2Yield1&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/step2Yield2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/step2Yield3&quot;/>
                </result>
                <conclusion value=&quot;The samples have been assessed and the conclusion is...&quot;/>" id="DiagnosticReport-processValidationReport">Diagnostic Report<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-reportType-local-pq&quot;/>
                        <code value=&quot;Process Validation Report&quot;/>
                        <display value=&quot;Process Validation Report&quot;/>">Process Validation Report<span class="greyOff"> [Process Validation Report]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-reportType-local-pq)</span></span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/diagnosticreport.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/diagnosticreport.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/diagnosticreport.html#tt-uml">R6</a>]</span><div class="debugOff">id: processValidationReport</div>
<div class="debugOff"> fullUrl: urn:uuid:b664977d-799d-a1ce-928a-5def2a9955bd</div>
<div class="summaryHiddenOff"></div>
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
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-reportType-local-pq&quot;/>
                        <code value=&quot;Process Validation Report&quot;/>
                        <display value=&quot;Process Validation Report&quot;/>
                    </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-reportType-local-pq&quot;/>
                        <code value=&quot;Process Validation Report&quot;/>
                        <display value=&quot;Process Validation Report&quot;/>">Process Validation Report<span class="greyOff"> [Process Validation Report]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-reportType-local-pq)</span></span></span></div>
<div class="summaryHiddenOff"></div>
<div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/workflow-triggeredBy&quot;>
                    <valueReference>
                        <reference value=&quot;PlanDefinition/validationProtocol&quot;/>
                    </valueReference>">Triggered By</span>: DP PROCESS VALIDATION (<a href="#PlanDefinition-validationProtocol" title="click to see target - id=validationProtocol">PlanDefinition</a>)<span class="debugOff"> id: validationProtocol</span></span><div class="summaryHiddenOff"></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <conclusion value=&quot;The samples have been assessed and the conclusion is...&quot;>">Conclusion: </span><span>The samples have been assessed and the conclusion is...</span></div>
<div class="summaryHiddenOff"></div>
<div class="htmlTableRemove"><br style="line-height:6px;"><div class="indent-no-border"><span><b>Table 2: Step 1 Process Validation Batches</b></span><br><br style="line-height:6px;"><table class="rounded-corners white" id="tabularModeTable" style="width:70%;">
<tr>
<th>Date of Manufacture</th>
<th>Starting Material Batch Number</th>
<th>Step 1 Manufacturing Scale (kg of starting material 1)</th>
<th>Intermediate Batch Number</th>
<th>Intermediate Batch Size (kg)</th>
</tr>
<tr>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-01&quot;>">2019-09-01</span></td>
<td class="centred"><a href="#Substance-actual-batch-substance-starting-1" title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <identifier>
                    <value value=&quot;Start1Amgen&quot;>" class="noUnderline">Start1Amgen</a></td>
<td class="centred">8.1</td>
<td class="centred"><a href="#Substance-actual-batch-substance-itermediate-1" title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <identifier>
                    <value value=&quot;Intermed1Amgen&quot;>" class="noUnderline">Intermed1Amgen</a></td>
<td class="centred">9.1</td>
</tr>
<tr>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-01&quot;>">2019-09-01</span></td>
<td class="centred"><a href="#Substance-actual-batch-substance-starting-2" title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <identifier>
                    <value value=&quot;Start2Amgen&quot;>" class="noUnderline">Start2Amgen</a></td>
<td class="centred">8.2</td>
<td class="centred"><a href="#Substance-actual-batch-substance-itermediate-2" title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <identifier>
                    <value value=&quot;Intermed2Amgen&quot;>" class="noUnderline">Intermed2Amgen</a></td>
<td class="centred">9.2</td>
</tr>
<tr>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-01&quot;>">2019-09-01</span></td>
<td class="centred"><a href="#Substance-actual-batch-substance-starting-3" title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <identifier>
                    <value value=&quot;Start3Amgen&quot;>" class="noUnderline">Start3Amgen</a></td>
<td class="centred">8.3</td>
<td class="centred"><a href="#Substance-actual-batch-substance-itermediate-3" title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <identifier>
                    <value value=&quot;Intermed3Amgen&quot;>" class="noUnderline">Intermed3Amgen</a></td>
<td class="centred">9.3</td>
</tr>
</table>
</div><br style="line-height:6px;"></div><br style="line-height:6px;"><div class="htmlTableRemove"><br style="line-height:6px;"><div class="indent-no-border"><b>Table 3: Step 1 Yield</b><br style="line-height:6px;"><br style="line-height:6px;"><table class="rounded-corners white" id="tabularModeTable" style="width:70%">
<tr>
<th colspan="1"></th>
<th colspan="3">Intermediate Batch Number</th>
</tr>
<tr>
<th rowspan="1">Performance Indicator</th><th><a href="#Substance-actual-batch-substance-itermediate-1" title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <identifier>
                    <value value=&quot;Intermed1Amgen&quot;>" class="noUnderline">Intermed1Amgen</a></th>
<th><a href="#Substance-actual-batch-substance-itermediate-2" title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <identifier>
                    <value value=&quot;Intermed2Amgen&quot;>" class="noUnderline">Intermed2Amgen</a></th>
<th><a href="#Substance-actual-batch-substance-itermediate-3" title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <identifier>
                    <value value=&quot;Intermed3Amgen&quot;>" class="noUnderline">Intermed3Amgen</a></th>
</tr>
<tr>
<td><a href="#ObservationDefinition-Step1Yield" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Yield (%)&quot;>" class="noUnderline">Yield (%)</a></td>
<td class="centred"><a href="#Observation-step1Yield1" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;75&quot;/>
                    <unit value=&quot;%&quot;/>">75</span></a></td>
<td class="centred"><a href="#Observation-step1Yield2" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;77&quot;/>
                    <unit value=&quot;%&quot;/>">77</span></a></td>
<td class="centred"><a href="#Observation-step1Yield3" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;76&quot;/>
                    <unit value=&quot;%&quot;/>">76</span></a></td>
</tr>
</table>
</div><br style="line-height:6px;"></div>
<div class="htmlTableRemove"><br style="line-height:6px;"><div class="indent-no-border"><b>Table 4: Step 1 In-Process Control Data</b><br style="line-height:6px;"><br style="line-height:6px;"><table class="rounded-corners white" id="tabularModeTable" style="width:70%">
<tr>
<th colspan="3"></th>
<th colspan="3">Intermediate Batch Number</th>
</tr>
<tr>
<th rowspan="1">Performance Indicator</th><th colspan="0">Acceptance Criteria</th>
<th rowspan="1">Classification</th><th><a href="#Substance-actual-batch-substance-itermediate-1" title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <identifier>
                    <value value=&quot;Intermed1Amgen&quot;>" class="noUnderline">Intermed1Amgen</a></th>
<th><a href="#Substance-actual-batch-substance-itermediate-2" title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <identifier>
                    <value value=&quot;Intermed2Amgen&quot;>" class="noUnderline">Intermed2Amgen</a></th>
<th><a href="#Substance-actual-batch-substance-itermediate-3" title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <identifier>
                    <value value=&quot;Intermed3Amgen&quot;>" class="noUnderline">Intermed3Amgen</a></th>
</tr>
<tr>
<td><a href="#ObservationDefinition-ResidualWaterContent" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Residual Water Content (w/w%)&quot;>" class="noUnderline">Residual Water Content (w/w%)</a></td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    ...
                    <range>
                        <high>
                            <value value=&quot;7.15&quot;/>
                            <unit value=&quot;%&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%&quot;/>
                        </high>">NMT 7.15 %</span></td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-criticality-pq&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-qualifiedValueCriticality-local-pq&quot;/>
                                <code value=&quot;Non-critical&quot;/>
                                <display value=&quot;Non-critical&quot;/>
                            </coding>
                            <text value=&quot;Non-critical&quot;/>">Non-critical</span></td>
<td class="centred"><a href="#Observation-residualWaterContent1" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;6.9&quot;/>
                    <unit value=&quot;%&quot;/>">6.9</span></a></td>
<td class="centred"><a href="#Observation-residualWaterContent2" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;7.0&quot;/>
                    <unit value=&quot;%&quot;/>">7.0</span></a></td>
<td class="centred"><a href="#Observation-residualWaterContent3" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;6.8&quot;/>
                    <unit value=&quot;%&quot;/>">6.8</span></a></td>
</tr>
<tr>
<td><a href="#ObservationDefinition-ResidualStartingMaterial1byHPLC" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Reaction conversion: residual starting material 1 by HPLC (Step Aa) (LC area %)&quot;>" class="noUnderline">Reaction conversion: residual starting material 1 by HPLC (Step Aa) (LC area %)</a></td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    ...
                    <range>
                        <high>
                            <value value=&quot;23&quot;/>
                            <unit value=&quot;%&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%&quot;/>
                        </high>">NMT 23 %</span></td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-criticality-pq&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-qualifiedValueCriticality-local-pq&quot;/>
                                <code value=&quot;critical&quot;/>
                                <display value=&quot;Critical&quot;/>
                            </coding>
                            <text value=&quot;Critical&quot;/>">Critical</span></td>
<td class="centred"></td>
<td class="centred"></td>
<td class="centred"></td>
</tr>
</table>
</div><br style="line-height:6px;"></div>
<div class="htmlTableRemove"><br style="line-height:6px;"><div class="indent-no-border"><b>Table 5: Step 1 DS Release Testing Results</b><br style="line-height:6px;"><br style="line-height:6px;"><table class="rounded-corners white" id="tabularModeTable" style="width:70%">
<tr>
<th colspan="2"></th>
<th colspan="3">DS Batch Number</th>
</tr>
<tr>
<th rowspan="1">Performance Indicator</th><th colspan="0">Acceptance Criteria</th>
<th><a href="#Substance-actual-batch-substance-itermediate-1" title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <identifier>
                    <value value=&quot;Intermed1Amgen&quot;>" class="noUnderline">Intermed1Amgen</a></th>
<th><a href="#Substance-actual-batch-substance-itermediate-2" title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <identifier>
                    <value value=&quot;Intermed2Amgen&quot;>" class="noUnderline">Intermed2Amgen</a></th>
<th><a href="#Substance-actual-batch-substance-itermediate-3" title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <identifier>
                    <value value=&quot;Intermed3Amgen&quot;>" class="noUnderline">Intermed3Amgen</a></th>
</tr>
<tr>
<td><a href="#ObservationDefinition-AppearanceSubstance" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Appearance&quot;>" class="noUnderline">Appearance</a></td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;White to off-white, to red, to orange, to brown solid&quot;>">White to off-white, to red, to orange, to brown solid</span></td>
<td class="centred"><a href="#Observation-appearanceSubstance1" class="noUnderline">Off-white solid</a></td>
<td class="centred"><a href="#Observation-appearanceSubstance2" class="noUnderline">Off-white solid</a></td>
<td class="centred"><a href="#Observation-appearanceSubstance3" class="noUnderline">Off-white solid</a></td>
</tr>
<tr>
<td><a href="#ObservationDefinition-IdentificationSubstance" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;ID by HPLC&quot;>" class="noUnderline">ID by HPLC</a></td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;Conforms to standard&quot;>">Conforms to standard</span></td>
<td class="centred"><a href="#Observation-identificationSubstance1" class="noUnderline">Conforms</a></td>
<td class="centred"><a href="#Observation-identificationSubstance2" class="noUnderline">Conforms</a></td>
<td class="centred"><a href="#Observation-identificationSubstance3" class="noUnderline">Does not conform</a></td>
</tr>
<tr>
<td><a href="#ObservationDefinition-AssaySubstance" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Assay by HPLC (as is) (w/w%)&quot;>" class="noUnderline">Assay by HPLC (as is) (w/w%)</a></td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        <low>
                            <value value=&quot;95&quot;/>
                            <unit value=&quot;%&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%&quot;/>
                        </low>
                        <high>
                            <value value=&quot;101&quot;/>
                            <unit value=&quot;%&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%&quot;/>
                        </high>">95 % - 101 %</span></td>
<td class="centred"></td>
<td class="centred"></td>
<td class="centred"></td>
</tr>
</table>
</div><br style="line-height:6px;"></div>
<div class="htmlTableRemove"><br style="line-height:6px;"><div class="indent-no-border"><span><b>Table 6: Step 2 Process Validation Batches</b></span><br><br style="line-height:6px;"><table class="rounded-corners white" id="tabularModeTable" style="width:70%;">
<tr>
<th>Date of Manufacture</th>
<th>Starting Material Batch Number</th>
<th>Step 2 Manufacturing Scale (kg of starting material 2)</th>
<th>Intermediate Batch Number</th>
<th>Intermediate Batch Size (kg)</th>
</tr>
<tr>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-02&quot;>">2019-09-02</span></td>
<td class="centred"><a href="#Substance-actual-batch-substance-starting-step2-1" title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <identifier>
                    <value value=&quot;Start1Step2Amgen&quot;>" class="noUnderline">Start1Step2Amgen</a></td>
<td class="centred">7.1</td>
<td class="centred"><a href="#Substance-actual-batch-substance-itermediate-step2-1" title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <identifier>
                    <value value=&quot;Intermed1Step2Amgen&quot;>" class="noUnderline">Intermed1Step2Amgen</a></td>
<td class="centred">10.1</td>
</tr>
<tr>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-02&quot;>">2019-09-02</span></td>
<td class="centred"><a href="#Substance-actual-batch-substance-starting-step2-2" title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <identifier>
                    <value value=&quot;Start2Step2Amgen&quot;>" class="noUnderline">Start2Step2Amgen</a></td>
<td class="centred">7.2</td>
<td class="centred"><a href="#Substance-actual-batch-substance-itermediate-step2-2" title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <identifier>
                    <value value=&quot;Intermed2Step2Amgen&quot;>" class="noUnderline">Intermed2Step2Amgen</a></td>
<td class="centred">10.2</td>
</tr>
<tr>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-02&quot;>">2019-09-02</span></td>
<td class="centred"><a href="#Substance-actual-batch-substance-starting-step2-3" title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <identifier>
                    <value value=&quot;Start3Step2Amgen&quot;>" class="noUnderline">Start3Step2Amgen</a></td>
<td class="centred">7.3</td>
<td class="centred"><a href="#Substance-actual-batch-substance-itermediate-step2-3" title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <identifier>
                    <value value=&quot;Intermed3Step2Amgen&quot;>" class="noUnderline">Intermed3Step2Amgen</a></td>
<td class="centred">10.3</td>
</tr>
</table>
</div><br style="line-height:6px;"></div><br style="line-height:6px;"><div class="htmlTableRemove"><br style="line-height:6px;"><div class="indent-no-border"><b>Table 7: Step 2 Yield</b><br style="line-height:6px;"><br style="line-height:6px;"><table class="rounded-corners white" id="tabularModeTable" style="width:70%">
<tr>
<th colspan="1"></th>
<th colspan="3">Intermediate 2 Batch Number</th>
</tr>
<tr>
<th rowspan="1">Performance Indicator</th><th><a href="#Substance-actual-batch-substance-itermediate-step2-1" title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <identifier>
                    <value value=&quot;Intermed1Step2Amgen&quot;>" class="noUnderline">Intermed1Step2Amgen</a></th>
<th><a href="#Substance-actual-batch-substance-itermediate-step2-2" title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <identifier>
                    <value value=&quot;Intermed2Step2Amgen&quot;>" class="noUnderline">Intermed2Step2Amgen</a></th>
<th><a href="#Substance-actual-batch-substance-itermediate-step2-3" title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <identifier>
                    <value value=&quot;Intermed3Step2Amgen&quot;>" class="noUnderline">Intermed3Step2Amgen</a></th>
</tr>
<tr>
<td><a href="#ObservationDefinition-Step2Yield" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Yield (%)&quot;>" class="noUnderline">Yield (%)</a></td>
<td class="centred"><a href="#Observation-step2Yield1" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;85&quot;/>
                    <unit value=&quot;%&quot;/>">85</span></a></td>
<td class="centred"><a href="#Observation-step2Yield2" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;87&quot;/>
                    <unit value=&quot;%&quot;/>">87</span></a></td>
<td class="centred"><a href="#Observation-step2Yield3" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;86&quot;/>
                    <unit value=&quot;%&quot;/>">86</span></a></td>
</tr>
</table>
</div><br style="line-height:6px;"></div>
<div class="indent compText summaryUnit"><span title="
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/step1Yield1&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/step1Yield2&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/step1Yield3&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/residualWaterContent1&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/residualWaterContent2&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/residualWaterContent3&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/appearanceSubstance1&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/appearanceSubstance2&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/appearanceSubstance3&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/identificationSubstance1&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/identificationSubstance2&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/identificationSubstance3&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/step2Yield1&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/step2Yield2&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/step2Yield3&quot;/>">Result</span><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: processValidationReport fullUrl: urn:uuid:b664977d-799d-a1ce-928a-5def2a9955bd)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: appearanceSubstance1)(fullUrl: urn:uuid:9c56948c-2a39-6609-2c01-4d197ea57a33)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;appearanceSubstance1&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/AppearanceSubstance&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Appearance&quot;/>
                        <display value=&quot;Appearance&quot;/>
                    </coding>
                    <text value=&quot;Appearance&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-1&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <valueString value=&quot;Off-white solid&quot;/>" id="Observation-appearanceSubstance1">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Appearance&quot;/>
                        <display value=&quot;Appearance&quot;/>">Appearance<span class="greyOff"> [Appearance]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: Appearance</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: appearanceSubstance1</div><div class="debugOff"> fullUrl: urn:uuid:9c56948c-2a39-6609-2c01-4d197ea57a33</div><div class="summaryHiddenOff"></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;>">Date: 2023-01-01T12:00:00Z</span></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Appearance&quot;/>
                        <display value=&quot;Appearance&quot;/>
                    </coding>
                    <text value=&quot;Appearance&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Appearance&quot;/>
                        <display value=&quot;Appearance&quot;/>">Appearance<span class="greyOff"> [Appearance]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: Appearance</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueString value=&quot;Off-white solid&quot;>"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueString value=&quot;Off-white solid&quot;>">Value: </span><span>Off-white solid</span></div></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-1&quot;/>">Subject</span>: Intermed1Amgen (<a href="#Substance-actual-batch-substance-itermediate-1" title="click to see target - id=actual-batch-substance-itermediate-1">Substance</a>)<span class="debugOff"> id: actual-batch-substance-itermediate-1</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;appearanceSubstance1&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/AppearanceSubstance&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Appearance&quot;/>
                        <display value=&quot;Appearance&quot;/>
                    </coding>
                    <text value=&quot;Appearance&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-1&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <valueString value=&quot;Off-white solid&quot;/>">Instantiates</span>: Appearance - Plan: DP PROCESS VALIDATION (<a href="#PlanDefinition-validationProtocol" title="click to see target - id=validationProtocol">PlanDefinition</a>)<span class="debugOff"> id: validationProtocol</span> (<a href="#ObservationDefinition-AppearanceSubstance" title="click to see target - id=AppearanceSubstance">ObservationDefinition</a>)<span class="debugOff"> id: AppearanceSubstance</span></span><div class="summaryHiddenOff"><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>">Performer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/performer, id: appearanceSubstance1 fullUrl: urn:uuid:9c56948c-2a39-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: appearanceSubstance2 fullUrl: urn:uuid:9c56948c-2a49-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: appearanceSubstance3 fullUrl: urn:uuid:9c56948c-2a39-6609-2c01-4d197eb57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: identificationSubstance1 fullUrl: urn:uuid:9c56958c-2a39-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: identificationSubstance2 fullUrl: urn:uuid:9c56968c-2a49-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: identificationSubstance3 fullUrl: urn:uuid:9c56978c-2a39-6609-2c01-4d197eb57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step1Yield1 fullUrl: urn:uuid:9c56948c-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step1Yield2 fullUrl: urn:uuid:9c56948a-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step1Yield3 fullUrl: urn:uuid:9c56948a-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step2Yield1 fullUrl: urn:uuid:9c56948d-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step2Yield2 fullUrl: urn:uuid:9c56948c-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step2Yield3 fullUrl: urn:uuid:9c56948b-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: residualWaterContent1 fullUrl: urn:uuid:9c56958c-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: residualWaterContent2 fullUrl: urn:uuid:9c56968a-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: residualWaterContent3 fullUrl: urn:uuid:9c56978a-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: 378fbe5f-5926-3a5c-4c64-5428df877b08)(fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <!--testing lab-->
                <id value=&quot;378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                <name value=&quot;Testing Lab&quot;/>" id="Organization-378fbe5f-5926-3a5c-4c64-5428df877b08">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/organization.html#tt-uml">R6</a>]</span><div class="debugOff">id: 378fbe5f-5926-3a5c-4c64-5428df877b08</div><div class="debugOff"> fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08</div><span class="summaryShowsOff"> - Testing Lab</span><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;Testing Lab&quot;>">Name: </span><span>Testing Lab</span></div></div></div></div></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: processValidationReport fullUrl: urn:uuid:b664977d-799d-a1ce-928a-5def2a9955bd)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: appearanceSubstance2)(fullUrl: urn:uuid:9c56948c-2a49-6609-2c01-4d197ea57a33)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;appearanceSubstance2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/AppearanceSubstance&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Appearance&quot;/>
                        <display value=&quot;Appearance&quot;/>
                    </coding>
                    <text value=&quot;Appearance&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-2&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <valueString value=&quot;Off-white solid&quot;/>" id="Observation-appearanceSubstance2">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Appearance&quot;/>
                        <display value=&quot;Appearance&quot;/>">Appearance<span class="greyOff"> [Appearance]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: Appearance</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: appearanceSubstance2</div><div class="debugOff"> fullUrl: urn:uuid:9c56948c-2a49-6609-2c01-4d197ea57a33</div><div class="summaryHiddenOff"></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;>">Date: 2023-01-01T12:00:00Z</span></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Appearance&quot;/>
                        <display value=&quot;Appearance&quot;/>
                    </coding>
                    <text value=&quot;Appearance&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Appearance&quot;/>
                        <display value=&quot;Appearance&quot;/>">Appearance<span class="greyOff"> [Appearance]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: Appearance</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueString value=&quot;Off-white solid&quot;>"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueString value=&quot;Off-white solid&quot;>">Value: </span><span>Off-white solid</span></div></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-2&quot;/>">Subject</span>: Intermed2Amgen (<a href="#Substance-actual-batch-substance-itermediate-2" title="click to see target - id=actual-batch-substance-itermediate-2">Substance</a>)<span class="debugOff"> id: actual-batch-substance-itermediate-2</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;appearanceSubstance2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/AppearanceSubstance&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Appearance&quot;/>
                        <display value=&quot;Appearance&quot;/>
                    </coding>
                    <text value=&quot;Appearance&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-2&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <valueString value=&quot;Off-white solid&quot;/>">Instantiates</span>: Appearance - Plan: DP PROCESS VALIDATION (<a href="#PlanDefinition-validationProtocol" title="click to see target - id=validationProtocol">PlanDefinition</a>)<span class="debugOff"> id: validationProtocol</span> (<a href="#ObservationDefinition-AppearanceSubstance" title="click to see target - id=AppearanceSubstance">ObservationDefinition</a>)<span class="debugOff"> id: AppearanceSubstance</span></span><div class="summaryHiddenOff"><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>">Performer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/performer, id: appearanceSubstance1 fullUrl: urn:uuid:9c56948c-2a39-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: appearanceSubstance2 fullUrl: urn:uuid:9c56948c-2a49-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: appearanceSubstance3 fullUrl: urn:uuid:9c56948c-2a39-6609-2c01-4d197eb57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: identificationSubstance1 fullUrl: urn:uuid:9c56958c-2a39-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: identificationSubstance2 fullUrl: urn:uuid:9c56968c-2a49-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: identificationSubstance3 fullUrl: urn:uuid:9c56978c-2a39-6609-2c01-4d197eb57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step1Yield1 fullUrl: urn:uuid:9c56948c-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step1Yield2 fullUrl: urn:uuid:9c56948a-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step1Yield3 fullUrl: urn:uuid:9c56948a-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step2Yield1 fullUrl: urn:uuid:9c56948d-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step2Yield2 fullUrl: urn:uuid:9c56948c-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step2Yield3 fullUrl: urn:uuid:9c56948b-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: residualWaterContent1 fullUrl: urn:uuid:9c56958c-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: residualWaterContent2 fullUrl: urn:uuid:9c56968a-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: residualWaterContent3 fullUrl: urn:uuid:9c56978a-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: 378fbe5f-5926-3a5c-4c64-5428df877b08)(fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <!--testing lab-->
                <id value=&quot;378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                <name value=&quot;Testing Lab&quot;/>" id="Organization-378fbe5f-5926-3a5c-4c64-5428df877b08">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/organization.html#tt-uml">R6</a>]</span><div class="debugOff">id: 378fbe5f-5926-3a5c-4c64-5428df877b08</div><div class="debugOff"> fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08</div><span class="summaryShowsOff"> - Testing Lab</span><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;Testing Lab&quot;>">Name: </span><span>Testing Lab</span></div></div></div></div></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: processValidationReport fullUrl: urn:uuid:b664977d-799d-a1ce-928a-5def2a9955bd)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: appearanceSubstance3)(fullUrl: urn:uuid:9c56948c-2a39-6609-2c01-4d197eb57a33)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;appearanceSubstance3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/AppearanceSubstance&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Appearance&quot;/>
                        <display value=&quot;Appearance&quot;/>
                    </coding>
                    <text value=&quot;Appearance&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-3&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <valueString value=&quot;Off-white solid&quot;/>" id="Observation-appearanceSubstance3">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Appearance&quot;/>
                        <display value=&quot;Appearance&quot;/>">Appearance<span class="greyOff"> [Appearance]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: Appearance</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: appearanceSubstance3</div><div class="debugOff"> fullUrl: urn:uuid:9c56948c-2a39-6609-2c01-4d197eb57a33</div><div class="summaryHiddenOff"></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;>">Date: 2023-01-01T12:00:00Z</span></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Appearance&quot;/>
                        <display value=&quot;Appearance&quot;/>
                    </coding>
                    <text value=&quot;Appearance&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Appearance&quot;/>
                        <display value=&quot;Appearance&quot;/>">Appearance<span class="greyOff"> [Appearance]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: Appearance</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueString value=&quot;Off-white solid&quot;>"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueString value=&quot;Off-white solid&quot;>">Value: </span><span>Off-white solid</span></div></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-3&quot;/>">Subject</span>: Intermed3Amgen (<a href="#Substance-actual-batch-substance-itermediate-3" title="click to see target - id=actual-batch-substance-itermediate-3">Substance</a>)<span class="debugOff"> id: actual-batch-substance-itermediate-3</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;appearanceSubstance3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/AppearanceSubstance&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Appearance&quot;/>
                        <display value=&quot;Appearance&quot;/>
                    </coding>
                    <text value=&quot;Appearance&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-3&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <valueString value=&quot;Off-white solid&quot;/>">Instantiates</span>: Appearance - Plan: DP PROCESS VALIDATION (<a href="#PlanDefinition-validationProtocol" title="click to see target - id=validationProtocol">PlanDefinition</a>)<span class="debugOff"> id: validationProtocol</span> (<a href="#ObservationDefinition-AppearanceSubstance" title="click to see target - id=AppearanceSubstance">ObservationDefinition</a>)<span class="debugOff"> id: AppearanceSubstance</span></span><div class="summaryHiddenOff"><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>">Performer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/performer, id: appearanceSubstance1 fullUrl: urn:uuid:9c56948c-2a39-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: appearanceSubstance2 fullUrl: urn:uuid:9c56948c-2a49-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: appearanceSubstance3 fullUrl: urn:uuid:9c56948c-2a39-6609-2c01-4d197eb57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: identificationSubstance1 fullUrl: urn:uuid:9c56958c-2a39-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: identificationSubstance2 fullUrl: urn:uuid:9c56968c-2a49-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: identificationSubstance3 fullUrl: urn:uuid:9c56978c-2a39-6609-2c01-4d197eb57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step1Yield1 fullUrl: urn:uuid:9c56948c-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step1Yield2 fullUrl: urn:uuid:9c56948a-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step1Yield3 fullUrl: urn:uuid:9c56948a-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step2Yield1 fullUrl: urn:uuid:9c56948d-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step2Yield2 fullUrl: urn:uuid:9c56948c-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step2Yield3 fullUrl: urn:uuid:9c56948b-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: residualWaterContent1 fullUrl: urn:uuid:9c56958c-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: residualWaterContent2 fullUrl: urn:uuid:9c56968a-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: residualWaterContent3 fullUrl: urn:uuid:9c56978a-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: 378fbe5f-5926-3a5c-4c64-5428df877b08)(fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <!--testing lab-->
                <id value=&quot;378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                <name value=&quot;Testing Lab&quot;/>" id="Organization-378fbe5f-5926-3a5c-4c64-5428df877b08">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/organization.html#tt-uml">R6</a>]</span><div class="debugOff">id: 378fbe5f-5926-3a5c-4c64-5428df877b08</div><div class="debugOff"> fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08</div><span class="summaryShowsOff"> - Testing Lab</span><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;Testing Lab&quot;>">Name: </span><span>Testing Lab</span></div></div></div></div></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: processValidationReport fullUrl: urn:uuid:b664977d-799d-a1ce-928a-5def2a9955bd)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: identificationSubstance1)(fullUrl: urn:uuid:9c56958c-2a39-6609-2c01-4d197ea57a33)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;identificationSubstance1&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/IdentificationSubstance&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;IDT&quot;/>
                        <display value=&quot;Identification&quot;/>
                    </coding>
                    <text value=&quot;ID by HPLC&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-1&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <valueString value=&quot;Conforms&quot;/>" id="Observation-identificationSubstance1">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;IDT&quot;/>
                        <display value=&quot;Identification&quot;/>">Identification<span class="greyOff"> [IDT]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: ID by HPLC</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: identificationSubstance1</div><div class="debugOff"> fullUrl: urn:uuid:9c56958c-2a39-6609-2c01-4d197ea57a33</div><div class="summaryHiddenOff"></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;>">Date: 2023-01-01T12:00:00Z</span></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;IDT&quot;/>
                        <display value=&quot;Identification&quot;/>
                    </coding>
                    <text value=&quot;ID by HPLC&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;IDT&quot;/>
                        <display value=&quot;Identification&quot;/>">Identification<span class="greyOff"> [IDT]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: ID by HPLC</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueString value=&quot;Conforms&quot;>"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueString value=&quot;Conforms&quot;>">Value: </span><span>Conforms</span></div></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-1&quot;/>">Subject</span>: Intermed1Amgen (<a href="#Substance-actual-batch-substance-itermediate-1" title="click to see target - id=actual-batch-substance-itermediate-1">Substance</a>)<span class="debugOff"> id: actual-batch-substance-itermediate-1</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;identificationSubstance1&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/IdentificationSubstance&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;IDT&quot;/>
                        <display value=&quot;Identification&quot;/>
                    </coding>
                    <text value=&quot;ID by HPLC&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-1&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <valueString value=&quot;Conforms&quot;/>">Instantiates</span>: ID by HPLC - Plan: DP PROCESS VALIDATION (<a href="#PlanDefinition-validationProtocol" title="click to see target - id=validationProtocol">PlanDefinition</a>)<span class="debugOff"> id: validationProtocol</span> (<a href="#ObservationDefinition-IdentificationSubstance" title="click to see target - id=IdentificationSubstance">ObservationDefinition</a>)<span class="debugOff"> id: IdentificationSubstance</span></span><div class="summaryHiddenOff"><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>">Performer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/performer, id: appearanceSubstance1 fullUrl: urn:uuid:9c56948c-2a39-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: appearanceSubstance2 fullUrl: urn:uuid:9c56948c-2a49-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: appearanceSubstance3 fullUrl: urn:uuid:9c56948c-2a39-6609-2c01-4d197eb57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: identificationSubstance1 fullUrl: urn:uuid:9c56958c-2a39-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: identificationSubstance2 fullUrl: urn:uuid:9c56968c-2a49-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: identificationSubstance3 fullUrl: urn:uuid:9c56978c-2a39-6609-2c01-4d197eb57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step1Yield1 fullUrl: urn:uuid:9c56948c-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step1Yield2 fullUrl: urn:uuid:9c56948a-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step1Yield3 fullUrl: urn:uuid:9c56948a-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step2Yield1 fullUrl: urn:uuid:9c56948d-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step2Yield2 fullUrl: urn:uuid:9c56948c-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step2Yield3 fullUrl: urn:uuid:9c56948b-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: residualWaterContent1 fullUrl: urn:uuid:9c56958c-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: residualWaterContent2 fullUrl: urn:uuid:9c56968a-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: residualWaterContent3 fullUrl: urn:uuid:9c56978a-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: 378fbe5f-5926-3a5c-4c64-5428df877b08)(fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <!--testing lab-->
                <id value=&quot;378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                <name value=&quot;Testing Lab&quot;/>" id="Organization-378fbe5f-5926-3a5c-4c64-5428df877b08">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/organization.html#tt-uml">R6</a>]</span><div class="debugOff">id: 378fbe5f-5926-3a5c-4c64-5428df877b08</div><div class="debugOff"> fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08</div><span class="summaryShowsOff"> - Testing Lab</span><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;Testing Lab&quot;>">Name: </span><span>Testing Lab</span></div></div></div></div></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: processValidationReport fullUrl: urn:uuid:b664977d-799d-a1ce-928a-5def2a9955bd)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: identificationSubstance2)(fullUrl: urn:uuid:9c56968c-2a49-6609-2c01-4d197ea57a33)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;identificationSubstance2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/IdentificationSubstance&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;IDT&quot;/>
                        <display value=&quot;Identification&quot;/>
                    </coding>
                    <text value=&quot;ID by HPLC&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-2&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <valueString value=&quot;Conforms&quot;/>" id="Observation-identificationSubstance2">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;IDT&quot;/>
                        <display value=&quot;Identification&quot;/>">Identification<span class="greyOff"> [IDT]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: ID by HPLC</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: identificationSubstance2</div><div class="debugOff"> fullUrl: urn:uuid:9c56968c-2a49-6609-2c01-4d197ea57a33</div><div class="summaryHiddenOff"></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;>">Date: 2023-01-01T12:00:00Z</span></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;IDT&quot;/>
                        <display value=&quot;Identification&quot;/>
                    </coding>
                    <text value=&quot;ID by HPLC&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;IDT&quot;/>
                        <display value=&quot;Identification&quot;/>">Identification<span class="greyOff"> [IDT]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: ID by HPLC</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueString value=&quot;Conforms&quot;>"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueString value=&quot;Conforms&quot;>">Value: </span><span>Conforms</span></div></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-2&quot;/>">Subject</span>: Intermed2Amgen (<a href="#Substance-actual-batch-substance-itermediate-2" title="click to see target - id=actual-batch-substance-itermediate-2">Substance</a>)<span class="debugOff"> id: actual-batch-substance-itermediate-2</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;identificationSubstance2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/IdentificationSubstance&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;IDT&quot;/>
                        <display value=&quot;Identification&quot;/>
                    </coding>
                    <text value=&quot;ID by HPLC&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-2&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <valueString value=&quot;Conforms&quot;/>">Instantiates</span>: ID by HPLC - Plan: DP PROCESS VALIDATION (<a href="#PlanDefinition-validationProtocol" title="click to see target - id=validationProtocol">PlanDefinition</a>)<span class="debugOff"> id: validationProtocol</span> (<a href="#ObservationDefinition-IdentificationSubstance" title="click to see target - id=IdentificationSubstance">ObservationDefinition</a>)<span class="debugOff"> id: IdentificationSubstance</span></span><div class="summaryHiddenOff"><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>">Performer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/performer, id: appearanceSubstance1 fullUrl: urn:uuid:9c56948c-2a39-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: appearanceSubstance2 fullUrl: urn:uuid:9c56948c-2a49-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: appearanceSubstance3 fullUrl: urn:uuid:9c56948c-2a39-6609-2c01-4d197eb57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: identificationSubstance1 fullUrl: urn:uuid:9c56958c-2a39-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: identificationSubstance2 fullUrl: urn:uuid:9c56968c-2a49-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: identificationSubstance3 fullUrl: urn:uuid:9c56978c-2a39-6609-2c01-4d197eb57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step1Yield1 fullUrl: urn:uuid:9c56948c-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step1Yield2 fullUrl: urn:uuid:9c56948a-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step1Yield3 fullUrl: urn:uuid:9c56948a-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step2Yield1 fullUrl: urn:uuid:9c56948d-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step2Yield2 fullUrl: urn:uuid:9c56948c-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step2Yield3 fullUrl: urn:uuid:9c56948b-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: residualWaterContent1 fullUrl: urn:uuid:9c56958c-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: residualWaterContent2 fullUrl: urn:uuid:9c56968a-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: residualWaterContent3 fullUrl: urn:uuid:9c56978a-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: 378fbe5f-5926-3a5c-4c64-5428df877b08)(fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <!--testing lab-->
                <id value=&quot;378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                <name value=&quot;Testing Lab&quot;/>" id="Organization-378fbe5f-5926-3a5c-4c64-5428df877b08">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/organization.html#tt-uml">R6</a>]</span><div class="debugOff">id: 378fbe5f-5926-3a5c-4c64-5428df877b08</div><div class="debugOff"> fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08</div><span class="summaryShowsOff"> - Testing Lab</span><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;Testing Lab&quot;>">Name: </span><span>Testing Lab</span></div></div></div></div></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: processValidationReport fullUrl: urn:uuid:b664977d-799d-a1ce-928a-5def2a9955bd)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: identificationSubstance3)(fullUrl: urn:uuid:9c56978c-2a39-6609-2c01-4d197eb57a33)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;identificationSubstance3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/IdentificationSubstance&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;IDT&quot;/>
                        <display value=&quot;Identification&quot;/>
                    </coding>
                    <text value=&quot;ID by HPLC&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-3&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <valueString value=&quot;Does not conform&quot;/>" id="Observation-identificationSubstance3">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;IDT&quot;/>
                        <display value=&quot;Identification&quot;/>">Identification<span class="greyOff"> [IDT]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: ID by HPLC</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: identificationSubstance3</div><div class="debugOff"> fullUrl: urn:uuid:9c56978c-2a39-6609-2c01-4d197eb57a33</div><div class="summaryHiddenOff"></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;>">Date: 2023-01-01T12:00:00Z</span></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;IDT&quot;/>
                        <display value=&quot;Identification&quot;/>
                    </coding>
                    <text value=&quot;ID by HPLC&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;IDT&quot;/>
                        <display value=&quot;Identification&quot;/>">Identification<span class="greyOff"> [IDT]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: ID by HPLC</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueString value=&quot;Does not conform&quot;>"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueString value=&quot;Does not conform&quot;>">Value: </span><span>Does not conform</span></div></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-3&quot;/>">Subject</span>: Intermed3Amgen (<a href="#Substance-actual-batch-substance-itermediate-3" title="click to see target - id=actual-batch-substance-itermediate-3">Substance</a>)<span class="debugOff"> id: actual-batch-substance-itermediate-3</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;identificationSubstance3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/IdentificationSubstance&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;IDT&quot;/>
                        <display value=&quot;Identification&quot;/>
                    </coding>
                    <text value=&quot;ID by HPLC&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-3&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <valueString value=&quot;Does not conform&quot;/>">Instantiates</span>: ID by HPLC - Plan: DP PROCESS VALIDATION (<a href="#PlanDefinition-validationProtocol" title="click to see target - id=validationProtocol">PlanDefinition</a>)<span class="debugOff"> id: validationProtocol</span> (<a href="#ObservationDefinition-IdentificationSubstance" title="click to see target - id=IdentificationSubstance">ObservationDefinition</a>)<span class="debugOff"> id: IdentificationSubstance</span></span><div class="summaryHiddenOff"><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>">Performer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/performer, id: appearanceSubstance1 fullUrl: urn:uuid:9c56948c-2a39-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: appearanceSubstance2 fullUrl: urn:uuid:9c56948c-2a49-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: appearanceSubstance3 fullUrl: urn:uuid:9c56948c-2a39-6609-2c01-4d197eb57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: identificationSubstance1 fullUrl: urn:uuid:9c56958c-2a39-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: identificationSubstance2 fullUrl: urn:uuid:9c56968c-2a49-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: identificationSubstance3 fullUrl: urn:uuid:9c56978c-2a39-6609-2c01-4d197eb57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step1Yield1 fullUrl: urn:uuid:9c56948c-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step1Yield2 fullUrl: urn:uuid:9c56948a-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step1Yield3 fullUrl: urn:uuid:9c56948a-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step2Yield1 fullUrl: urn:uuid:9c56948d-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step2Yield2 fullUrl: urn:uuid:9c56948c-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step2Yield3 fullUrl: urn:uuid:9c56948b-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: residualWaterContent1 fullUrl: urn:uuid:9c56958c-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: residualWaterContent2 fullUrl: urn:uuid:9c56968a-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: residualWaterContent3 fullUrl: urn:uuid:9c56978a-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: 378fbe5f-5926-3a5c-4c64-5428df877b08)(fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <!--testing lab-->
                <id value=&quot;378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                <name value=&quot;Testing Lab&quot;/>" id="Organization-378fbe5f-5926-3a5c-4c64-5428df877b08">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/organization.html#tt-uml">R6</a>]</span><div class="debugOff">id: 378fbe5f-5926-3a5c-4c64-5428df877b08</div><div class="debugOff"> fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08</div><span class="summaryShowsOff"> - Testing Lab</span><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;Testing Lab&quot;>">Name: </span><span>Testing Lab</span></div></div></div></div></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: processValidationReport fullUrl: urn:uuid:b664977d-799d-a1ce-928a-5def2a9955bd)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: step1Yield1)(fullUrl: urn:uuid:9c56948c-2a39-6609-1c01-4d197ea57a33)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;step1Yield1&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Step1Yield&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Yield (%)&quot;/>
                        <display value=&quot;Yield (%)&quot;/>
                    </coding>
                    <text value=&quot;Yield (%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-1&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <valueQuantity>
                    <value value=&quot;75&quot;/>
                    <unit value=&quot;%&quot;/>
                </valueQuantity>" id="Observation-step1Yield1">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Yield (%)&quot;/>
                        <display value=&quot;Yield (%)&quot;/>">Yield (%)<span class="greyOff"> [Yield (%)]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: Yield (%)</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: step1Yield1</div><div class="debugOff"> fullUrl: urn:uuid:9c56948c-2a39-6609-1c01-4d197ea57a33</div><div class="summaryHiddenOff"></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;>">Date: 2023-01-01T12:00:00Z</span></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Yield (%)&quot;/>
                        <display value=&quot;Yield (%)&quot;/>
                    </coding>
                    <text value=&quot;Yield (%)&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Yield (%)&quot;/>
                        <display value=&quot;Yield (%)&quot;/>">Yield (%)<span class="greyOff"> [Yield (%)]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: Yield (%)</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;75&quot;/>
                    <unit value=&quot;%&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;75&quot;/>
                    <unit value=&quot;%&quot;/>">75%</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-1&quot;/>">Subject</span>: Intermed1Amgen (<a href="#Substance-actual-batch-substance-itermediate-1" title="click to see target - id=actual-batch-substance-itermediate-1">Substance</a>)<span class="debugOff"> id: actual-batch-substance-itermediate-1</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;step1Yield1&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Step1Yield&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Yield (%)&quot;/>
                        <display value=&quot;Yield (%)&quot;/>
                    </coding>
                    <text value=&quot;Yield (%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-1&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <valueQuantity>
                    <value value=&quot;75&quot;/>
                    <unit value=&quot;%&quot;/>
                </valueQuantity>">Instantiates</span>: Yield (%) - Plan: DP PROCESS VALIDATION (<a href="#PlanDefinition-validationProtocol" title="click to see target - id=validationProtocol">PlanDefinition</a>)<span class="debugOff"> id: validationProtocol</span> (<a href="#ObservationDefinition-Step1Yield" title="click to see target - id=Step1Yield">ObservationDefinition</a>)<span class="debugOff"> id: Step1Yield</span></span><div class="summaryHiddenOff"><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>">Performer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/performer, id: appearanceSubstance1 fullUrl: urn:uuid:9c56948c-2a39-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: appearanceSubstance2 fullUrl: urn:uuid:9c56948c-2a49-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: appearanceSubstance3 fullUrl: urn:uuid:9c56948c-2a39-6609-2c01-4d197eb57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: identificationSubstance1 fullUrl: urn:uuid:9c56958c-2a39-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: identificationSubstance2 fullUrl: urn:uuid:9c56968c-2a49-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: identificationSubstance3 fullUrl: urn:uuid:9c56978c-2a39-6609-2c01-4d197eb57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step1Yield1 fullUrl: urn:uuid:9c56948c-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step1Yield2 fullUrl: urn:uuid:9c56948a-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step1Yield3 fullUrl: urn:uuid:9c56948a-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step2Yield1 fullUrl: urn:uuid:9c56948d-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step2Yield2 fullUrl: urn:uuid:9c56948c-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step2Yield3 fullUrl: urn:uuid:9c56948b-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: residualWaterContent1 fullUrl: urn:uuid:9c56958c-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: residualWaterContent2 fullUrl: urn:uuid:9c56968a-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: residualWaterContent3 fullUrl: urn:uuid:9c56978a-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: 378fbe5f-5926-3a5c-4c64-5428df877b08)(fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <!--testing lab-->
                <id value=&quot;378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                <name value=&quot;Testing Lab&quot;/>" id="Organization-378fbe5f-5926-3a5c-4c64-5428df877b08">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/organization.html#tt-uml">R6</a>]</span><div class="debugOff">id: 378fbe5f-5926-3a5c-4c64-5428df877b08</div><div class="debugOff"> fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08</div><span class="summaryShowsOff"> - Testing Lab</span><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;Testing Lab&quot;>">Name: </span><span>Testing Lab</span></div></div></div></div></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: processValidationReport fullUrl: urn:uuid:b664977d-799d-a1ce-928a-5def2a9955bd)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: step1Yield2)(fullUrl: urn:uuid:9c56948a-2b39-6609-1c01-4d197ea57a33)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;step1Yield2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Step1Yield&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Yield (%)&quot;/>
                        <display value=&quot;Yield (%)&quot;/>
                    </coding>
                    <text value=&quot;Yield (%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-2&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <valueQuantity>
                    <value value=&quot;77&quot;/>
                    <unit value=&quot;%&quot;/>
                </valueQuantity>" id="Observation-step1Yield2">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Yield (%)&quot;/>
                        <display value=&quot;Yield (%)&quot;/>">Yield (%)<span class="greyOff"> [Yield (%)]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: Yield (%)</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: step1Yield2</div><div class="debugOff"> fullUrl: urn:uuid:9c56948a-2b39-6609-1c01-4d197ea57a33</div><div class="summaryHiddenOff"></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;>">Date: 2023-01-01T12:00:00Z</span></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Yield (%)&quot;/>
                        <display value=&quot;Yield (%)&quot;/>
                    </coding>
                    <text value=&quot;Yield (%)&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Yield (%)&quot;/>
                        <display value=&quot;Yield (%)&quot;/>">Yield (%)<span class="greyOff"> [Yield (%)]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: Yield (%)</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;77&quot;/>
                    <unit value=&quot;%&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;77&quot;/>
                    <unit value=&quot;%&quot;/>">77%</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-2&quot;/>">Subject</span>: Intermed2Amgen (<a href="#Substance-actual-batch-substance-itermediate-2" title="click to see target - id=actual-batch-substance-itermediate-2">Substance</a>)<span class="debugOff"> id: actual-batch-substance-itermediate-2</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;step1Yield2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Step1Yield&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Yield (%)&quot;/>
                        <display value=&quot;Yield (%)&quot;/>
                    </coding>
                    <text value=&quot;Yield (%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-2&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <valueQuantity>
                    <value value=&quot;77&quot;/>
                    <unit value=&quot;%&quot;/>
                </valueQuantity>">Instantiates</span>: Yield (%) - Plan: DP PROCESS VALIDATION (<a href="#PlanDefinition-validationProtocol" title="click to see target - id=validationProtocol">PlanDefinition</a>)<span class="debugOff"> id: validationProtocol</span> (<a href="#ObservationDefinition-Step1Yield" title="click to see target - id=Step1Yield">ObservationDefinition</a>)<span class="debugOff"> id: Step1Yield</span></span><div class="summaryHiddenOff"><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>">Performer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/performer, id: appearanceSubstance1 fullUrl: urn:uuid:9c56948c-2a39-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: appearanceSubstance2 fullUrl: urn:uuid:9c56948c-2a49-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: appearanceSubstance3 fullUrl: urn:uuid:9c56948c-2a39-6609-2c01-4d197eb57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: identificationSubstance1 fullUrl: urn:uuid:9c56958c-2a39-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: identificationSubstance2 fullUrl: urn:uuid:9c56968c-2a49-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: identificationSubstance3 fullUrl: urn:uuid:9c56978c-2a39-6609-2c01-4d197eb57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step1Yield1 fullUrl: urn:uuid:9c56948c-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step1Yield2 fullUrl: urn:uuid:9c56948a-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step1Yield3 fullUrl: urn:uuid:9c56948a-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step2Yield1 fullUrl: urn:uuid:9c56948d-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step2Yield2 fullUrl: urn:uuid:9c56948c-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step2Yield3 fullUrl: urn:uuid:9c56948b-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: residualWaterContent1 fullUrl: urn:uuid:9c56958c-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: residualWaterContent2 fullUrl: urn:uuid:9c56968a-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: residualWaterContent3 fullUrl: urn:uuid:9c56978a-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: 378fbe5f-5926-3a5c-4c64-5428df877b08)(fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <!--testing lab-->
                <id value=&quot;378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                <name value=&quot;Testing Lab&quot;/>" id="Organization-378fbe5f-5926-3a5c-4c64-5428df877b08">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/organization.html#tt-uml">R6</a>]</span><div class="debugOff">id: 378fbe5f-5926-3a5c-4c64-5428df877b08</div><div class="debugOff"> fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08</div><span class="summaryShowsOff"> - Testing Lab</span><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;Testing Lab&quot;>">Name: </span><span>Testing Lab</span></div></div></div></div></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: processValidationReport fullUrl: urn:uuid:b664977d-799d-a1ce-928a-5def2a9955bd)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: step1Yield3)(fullUrl: urn:uuid:9c56948a-2a39-6609-1c01-4d197ea57a33)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;step1Yield3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Step1Yield&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Yield (%)&quot;/>
                        <display value=&quot;Yield (%)&quot;/>
                    </coding>
                    <text value=&quot;Yield (%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-3&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <valueQuantity>
                    <value value=&quot;76&quot;/>
                    <unit value=&quot;%&quot;/>
                </valueQuantity>" id="Observation-step1Yield3">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Yield (%)&quot;/>
                        <display value=&quot;Yield (%)&quot;/>">Yield (%)<span class="greyOff"> [Yield (%)]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: Yield (%)</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: step1Yield3</div><div class="debugOff"> fullUrl: urn:uuid:9c56948a-2a39-6609-1c01-4d197ea57a33</div><div class="summaryHiddenOff"></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;>">Date: 2023-01-01T12:00:00Z</span></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Yield (%)&quot;/>
                        <display value=&quot;Yield (%)&quot;/>
                    </coding>
                    <text value=&quot;Yield (%)&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Yield (%)&quot;/>
                        <display value=&quot;Yield (%)&quot;/>">Yield (%)<span class="greyOff"> [Yield (%)]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: Yield (%)</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;76&quot;/>
                    <unit value=&quot;%&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;76&quot;/>
                    <unit value=&quot;%&quot;/>">76%</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-3&quot;/>">Subject</span>: Intermed3Amgen (<a href="#Substance-actual-batch-substance-itermediate-3" title="click to see target - id=actual-batch-substance-itermediate-3">Substance</a>)<span class="debugOff"> id: actual-batch-substance-itermediate-3</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;step1Yield3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Step1Yield&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Yield (%)&quot;/>
                        <display value=&quot;Yield (%)&quot;/>
                    </coding>
                    <text value=&quot;Yield (%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-3&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <valueQuantity>
                    <value value=&quot;76&quot;/>
                    <unit value=&quot;%&quot;/>
                </valueQuantity>">Instantiates</span>: Yield (%) - Plan: DP PROCESS VALIDATION (<a href="#PlanDefinition-validationProtocol" title="click to see target - id=validationProtocol">PlanDefinition</a>)<span class="debugOff"> id: validationProtocol</span> (<a href="#ObservationDefinition-Step1Yield" title="click to see target - id=Step1Yield">ObservationDefinition</a>)<span class="debugOff"> id: Step1Yield</span></span><div class="summaryHiddenOff"><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>">Performer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/performer, id: appearanceSubstance1 fullUrl: urn:uuid:9c56948c-2a39-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: appearanceSubstance2 fullUrl: urn:uuid:9c56948c-2a49-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: appearanceSubstance3 fullUrl: urn:uuid:9c56948c-2a39-6609-2c01-4d197eb57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: identificationSubstance1 fullUrl: urn:uuid:9c56958c-2a39-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: identificationSubstance2 fullUrl: urn:uuid:9c56968c-2a49-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: identificationSubstance3 fullUrl: urn:uuid:9c56978c-2a39-6609-2c01-4d197eb57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step1Yield1 fullUrl: urn:uuid:9c56948c-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step1Yield2 fullUrl: urn:uuid:9c56948a-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step1Yield3 fullUrl: urn:uuid:9c56948a-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step2Yield1 fullUrl: urn:uuid:9c56948d-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step2Yield2 fullUrl: urn:uuid:9c56948c-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step2Yield3 fullUrl: urn:uuid:9c56948b-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: residualWaterContent1 fullUrl: urn:uuid:9c56958c-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: residualWaterContent2 fullUrl: urn:uuid:9c56968a-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: residualWaterContent3 fullUrl: urn:uuid:9c56978a-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: 378fbe5f-5926-3a5c-4c64-5428df877b08)(fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <!--testing lab-->
                <id value=&quot;378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                <name value=&quot;Testing Lab&quot;/>" id="Organization-378fbe5f-5926-3a5c-4c64-5428df877b08">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/organization.html#tt-uml">R6</a>]</span><div class="debugOff">id: 378fbe5f-5926-3a5c-4c64-5428df877b08</div><div class="debugOff"> fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08</div><span class="summaryShowsOff"> - Testing Lab</span><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;Testing Lab&quot;>">Name: </span><span>Testing Lab</span></div></div></div></div></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: processValidationReport fullUrl: urn:uuid:b664977d-799d-a1ce-928a-5def2a9955bd)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: step2Yield1)(fullUrl: urn:uuid:9c56948d-2a39-6609-1c01-4d197ea57a33)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;step2Yield1&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Step2Yield&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Yield (%)&quot;/>
                        <display value=&quot;Yield (%)&quot;/>
                    </coding>
                    <text value=&quot;Yield (%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-step2-1&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <valueQuantity>
                    <value value=&quot;85&quot;/>
                    <unit value=&quot;%&quot;/>
                </valueQuantity>" id="Observation-step2Yield1">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Yield (%)&quot;/>
                        <display value=&quot;Yield (%)&quot;/>">Yield (%)<span class="greyOff"> [Yield (%)]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: Yield (%)</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: step2Yield1</div><div class="debugOff"> fullUrl: urn:uuid:9c56948d-2a39-6609-1c01-4d197ea57a33</div><div class="summaryHiddenOff"></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;>">Date: 2023-01-01T12:00:00Z</span></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Yield (%)&quot;/>
                        <display value=&quot;Yield (%)&quot;/>
                    </coding>
                    <text value=&quot;Yield (%)&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Yield (%)&quot;/>
                        <display value=&quot;Yield (%)&quot;/>">Yield (%)<span class="greyOff"> [Yield (%)]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: Yield (%)</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;85&quot;/>
                    <unit value=&quot;%&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;85&quot;/>
                    <unit value=&quot;%&quot;/>">85%</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-step2-1&quot;/>">Subject</span>: Intermed1Step2Amgen (<a href="#Substance-actual-batch-substance-itermediate-step2-1" title="click to see target - id=actual-batch-substance-itermediate-step2-1">Substance</a>)<span class="debugOff"> id: actual-batch-substance-itermediate-step2-1</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;step2Yield1&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Step2Yield&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Yield (%)&quot;/>
                        <display value=&quot;Yield (%)&quot;/>
                    </coding>
                    <text value=&quot;Yield (%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-step2-1&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <valueQuantity>
                    <value value=&quot;85&quot;/>
                    <unit value=&quot;%&quot;/>
                </valueQuantity>">Instantiates</span>: Yield (%) - Plan: DP PROCESS VALIDATION (<a href="#PlanDefinition-validationProtocol" title="click to see target - id=validationProtocol">PlanDefinition</a>)<span class="debugOff"> id: validationProtocol</span> (<a href="#ObservationDefinition-Step2Yield" title="click to see target - id=Step2Yield">ObservationDefinition</a>)<span class="debugOff"> id: Step2Yield</span></span><div class="summaryHiddenOff"><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>">Performer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/performer, id: appearanceSubstance1 fullUrl: urn:uuid:9c56948c-2a39-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: appearanceSubstance2 fullUrl: urn:uuid:9c56948c-2a49-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: appearanceSubstance3 fullUrl: urn:uuid:9c56948c-2a39-6609-2c01-4d197eb57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: identificationSubstance1 fullUrl: urn:uuid:9c56958c-2a39-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: identificationSubstance2 fullUrl: urn:uuid:9c56968c-2a49-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: identificationSubstance3 fullUrl: urn:uuid:9c56978c-2a39-6609-2c01-4d197eb57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step1Yield1 fullUrl: urn:uuid:9c56948c-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step1Yield2 fullUrl: urn:uuid:9c56948a-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step1Yield3 fullUrl: urn:uuid:9c56948a-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step2Yield1 fullUrl: urn:uuid:9c56948d-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step2Yield2 fullUrl: urn:uuid:9c56948c-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step2Yield3 fullUrl: urn:uuid:9c56948b-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: residualWaterContent1 fullUrl: urn:uuid:9c56958c-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: residualWaterContent2 fullUrl: urn:uuid:9c56968a-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: residualWaterContent3 fullUrl: urn:uuid:9c56978a-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: 378fbe5f-5926-3a5c-4c64-5428df877b08)(fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <!--testing lab-->
                <id value=&quot;378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                <name value=&quot;Testing Lab&quot;/>" id="Organization-378fbe5f-5926-3a5c-4c64-5428df877b08">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/organization.html#tt-uml">R6</a>]</span><div class="debugOff">id: 378fbe5f-5926-3a5c-4c64-5428df877b08</div><div class="debugOff"> fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08</div><span class="summaryShowsOff"> - Testing Lab</span><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;Testing Lab&quot;>">Name: </span><span>Testing Lab</span></div></div></div></div></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: processValidationReport fullUrl: urn:uuid:b664977d-799d-a1ce-928a-5def2a9955bd)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: step2Yield2)(fullUrl: urn:uuid:9c56948c-2b39-6609-1c01-4d197ea57a33)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;step2Yield2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Step2Yield&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Yield (%)&quot;/>
                        <display value=&quot;Yield (%)&quot;/>
                    </coding>
                    <text value=&quot;Yield (%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-step2-2&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <valueQuantity>
                    <value value=&quot;87&quot;/>
                    <unit value=&quot;%&quot;/>
                </valueQuantity>" id="Observation-step2Yield2">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Yield (%)&quot;/>
                        <display value=&quot;Yield (%)&quot;/>">Yield (%)<span class="greyOff"> [Yield (%)]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: Yield (%)</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: step2Yield2</div><div class="debugOff"> fullUrl: urn:uuid:9c56948c-2b39-6609-1c01-4d197ea57a33</div><div class="summaryHiddenOff"></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;>">Date: 2023-01-01T12:00:00Z</span></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Yield (%)&quot;/>
                        <display value=&quot;Yield (%)&quot;/>
                    </coding>
                    <text value=&quot;Yield (%)&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Yield (%)&quot;/>
                        <display value=&quot;Yield (%)&quot;/>">Yield (%)<span class="greyOff"> [Yield (%)]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: Yield (%)</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;87&quot;/>
                    <unit value=&quot;%&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;87&quot;/>
                    <unit value=&quot;%&quot;/>">87%</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-step2-2&quot;/>">Subject</span>: Intermed2Step2Amgen (<a href="#Substance-actual-batch-substance-itermediate-step2-2" title="click to see target - id=actual-batch-substance-itermediate-step2-2">Substance</a>)<span class="debugOff"> id: actual-batch-substance-itermediate-step2-2</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;step2Yield2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Step2Yield&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Yield (%)&quot;/>
                        <display value=&quot;Yield (%)&quot;/>
                    </coding>
                    <text value=&quot;Yield (%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-step2-2&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <valueQuantity>
                    <value value=&quot;87&quot;/>
                    <unit value=&quot;%&quot;/>
                </valueQuantity>">Instantiates</span>: Yield (%) - Plan: DP PROCESS VALIDATION (<a href="#PlanDefinition-validationProtocol" title="click to see target - id=validationProtocol">PlanDefinition</a>)<span class="debugOff"> id: validationProtocol</span> (<a href="#ObservationDefinition-Step2Yield" title="click to see target - id=Step2Yield">ObservationDefinition</a>)<span class="debugOff"> id: Step2Yield</span></span><div class="summaryHiddenOff"><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>">Performer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/performer, id: appearanceSubstance1 fullUrl: urn:uuid:9c56948c-2a39-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: appearanceSubstance2 fullUrl: urn:uuid:9c56948c-2a49-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: appearanceSubstance3 fullUrl: urn:uuid:9c56948c-2a39-6609-2c01-4d197eb57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: identificationSubstance1 fullUrl: urn:uuid:9c56958c-2a39-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: identificationSubstance2 fullUrl: urn:uuid:9c56968c-2a49-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: identificationSubstance3 fullUrl: urn:uuid:9c56978c-2a39-6609-2c01-4d197eb57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step1Yield1 fullUrl: urn:uuid:9c56948c-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step1Yield2 fullUrl: urn:uuid:9c56948a-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step1Yield3 fullUrl: urn:uuid:9c56948a-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step2Yield1 fullUrl: urn:uuid:9c56948d-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step2Yield2 fullUrl: urn:uuid:9c56948c-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step2Yield3 fullUrl: urn:uuid:9c56948b-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: residualWaterContent1 fullUrl: urn:uuid:9c56958c-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: residualWaterContent2 fullUrl: urn:uuid:9c56968a-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: residualWaterContent3 fullUrl: urn:uuid:9c56978a-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: 378fbe5f-5926-3a5c-4c64-5428df877b08)(fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <!--testing lab-->
                <id value=&quot;378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                <name value=&quot;Testing Lab&quot;/>" id="Organization-378fbe5f-5926-3a5c-4c64-5428df877b08">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/organization.html#tt-uml">R6</a>]</span><div class="debugOff">id: 378fbe5f-5926-3a5c-4c64-5428df877b08</div><div class="debugOff"> fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08</div><span class="summaryShowsOff"> - Testing Lab</span><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;Testing Lab&quot;>">Name: </span><span>Testing Lab</span></div></div></div></div></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: processValidationReport fullUrl: urn:uuid:b664977d-799d-a1ce-928a-5def2a9955bd)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: step2Yield3)(fullUrl: urn:uuid:9c56948b-2a39-6609-1c01-4d197ea57a33)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;step2Yield3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Step2Yield&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Yield (%)&quot;/>
                        <display value=&quot;Yield (%)&quot;/>
                    </coding>
                    <text value=&quot;Yield (%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-step2-3&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <valueQuantity>
                    <value value=&quot;86&quot;/>
                    <unit value=&quot;%&quot;/>
                </valueQuantity>" id="Observation-step2Yield3">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Yield (%)&quot;/>
                        <display value=&quot;Yield (%)&quot;/>">Yield (%)<span class="greyOff"> [Yield (%)]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: Yield (%)</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: step2Yield3</div><div class="debugOff"> fullUrl: urn:uuid:9c56948b-2a39-6609-1c01-4d197ea57a33</div><div class="summaryHiddenOff"></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;>">Date: 2023-01-01T12:00:00Z</span></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Yield (%)&quot;/>
                        <display value=&quot;Yield (%)&quot;/>
                    </coding>
                    <text value=&quot;Yield (%)&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Yield (%)&quot;/>
                        <display value=&quot;Yield (%)&quot;/>">Yield (%)<span class="greyOff"> [Yield (%)]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: Yield (%)</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;86&quot;/>
                    <unit value=&quot;%&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;86&quot;/>
                    <unit value=&quot;%&quot;/>">86%</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-step2-3&quot;/>">Subject</span>: Intermed3Step2Amgen (<a href="#Substance-actual-batch-substance-itermediate-step2-3" title="click to see target - id=actual-batch-substance-itermediate-step2-3">Substance</a>)<span class="debugOff"> id: actual-batch-substance-itermediate-step2-3</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;step2Yield3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Step2Yield&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Yield (%)&quot;/>
                        <display value=&quot;Yield (%)&quot;/>
                    </coding>
                    <text value=&quot;Yield (%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-step2-3&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <valueQuantity>
                    <value value=&quot;86&quot;/>
                    <unit value=&quot;%&quot;/>
                </valueQuantity>">Instantiates</span>: Yield (%) - Plan: DP PROCESS VALIDATION (<a href="#PlanDefinition-validationProtocol" title="click to see target - id=validationProtocol">PlanDefinition</a>)<span class="debugOff"> id: validationProtocol</span> (<a href="#ObservationDefinition-Step2Yield" title="click to see target - id=Step2Yield">ObservationDefinition</a>)<span class="debugOff"> id: Step2Yield</span></span><div class="summaryHiddenOff"><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>">Performer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/performer, id: appearanceSubstance1 fullUrl: urn:uuid:9c56948c-2a39-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: appearanceSubstance2 fullUrl: urn:uuid:9c56948c-2a49-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: appearanceSubstance3 fullUrl: urn:uuid:9c56948c-2a39-6609-2c01-4d197eb57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: identificationSubstance1 fullUrl: urn:uuid:9c56958c-2a39-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: identificationSubstance2 fullUrl: urn:uuid:9c56968c-2a49-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: identificationSubstance3 fullUrl: urn:uuid:9c56978c-2a39-6609-2c01-4d197eb57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step1Yield1 fullUrl: urn:uuid:9c56948c-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step1Yield2 fullUrl: urn:uuid:9c56948a-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step1Yield3 fullUrl: urn:uuid:9c56948a-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step2Yield1 fullUrl: urn:uuid:9c56948d-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step2Yield2 fullUrl: urn:uuid:9c56948c-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step2Yield3 fullUrl: urn:uuid:9c56948b-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: residualWaterContent1 fullUrl: urn:uuid:9c56958c-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: residualWaterContent2 fullUrl: urn:uuid:9c56968a-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: residualWaterContent3 fullUrl: urn:uuid:9c56978a-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: 378fbe5f-5926-3a5c-4c64-5428df877b08)(fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <!--testing lab-->
                <id value=&quot;378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                <name value=&quot;Testing Lab&quot;/>" id="Organization-378fbe5f-5926-3a5c-4c64-5428df877b08">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/organization.html#tt-uml">R6</a>]</span><div class="debugOff">id: 378fbe5f-5926-3a5c-4c64-5428df877b08</div><div class="debugOff"> fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08</div><span class="summaryShowsOff"> - Testing Lab</span><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;Testing Lab&quot;>">Name: </span><span>Testing Lab</span></div></div></div></div></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: processValidationReport fullUrl: urn:uuid:b664977d-799d-a1ce-928a-5def2a9955bd)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: residualWaterContent1)(fullUrl: urn:uuid:9c56958c-2a39-6609-1c01-4d197ea57a33)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;residualWaterContent1&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/ResidualWaterContent&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;ResidualWaterContent&quot;/>
                        <display value=&quot;Residual Water Content (w/w%)&quot;/>
                    </coding>
                    <text value=&quot;ResidualWaterContent (w/w%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-1&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <valueQuantity>
                    <value value=&quot;6.9&quot;/>
                    <unit value=&quot;%&quot;/>
                </valueQuantity>" id="Observation-residualWaterContent1">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;ResidualWaterContent&quot;/>
                        <display value=&quot;Residual Water Content (w/w%)&quot;/>">Residual Water Content (w/w%)<span class="greyOff"> [ResidualWaterContent]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: ResidualWaterContent (w/w%)</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: residualWaterContent1</div><div class="debugOff"> fullUrl: urn:uuid:9c56958c-2a39-6609-1c01-4d197ea57a33</div><div class="summaryHiddenOff"></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;>">Date: 2023-01-01T12:00:00Z</span></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;ResidualWaterContent&quot;/>
                        <display value=&quot;Residual Water Content (w/w%)&quot;/>
                    </coding>
                    <text value=&quot;ResidualWaterContent (w/w%)&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;ResidualWaterContent&quot;/>
                        <display value=&quot;Residual Water Content (w/w%)&quot;/>">Residual Water Content (w/w%)<span class="greyOff"> [ResidualWaterContent]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: ResidualWaterContent (w/w%)</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;6.9&quot;/>
                    <unit value=&quot;%&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;6.9&quot;/>
                    <unit value=&quot;%&quot;/>">6.9%</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-1&quot;/>">Subject</span>: Intermed1Amgen (<a href="#Substance-actual-batch-substance-itermediate-1" title="click to see target - id=actual-batch-substance-itermediate-1">Substance</a>)<span class="debugOff"> id: actual-batch-substance-itermediate-1</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;residualWaterContent1&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/ResidualWaterContent&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;ResidualWaterContent&quot;/>
                        <display value=&quot;Residual Water Content (w/w%)&quot;/>
                    </coding>
                    <text value=&quot;ResidualWaterContent (w/w%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-1&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <valueQuantity>
                    <value value=&quot;6.9&quot;/>
                    <unit value=&quot;%&quot;/>
                </valueQuantity>">Instantiates</span>: Residual Water Content (w/w%) - Plan: DP PROCESS VALIDATION (<a href="#PlanDefinition-validationProtocol" title="click to see target - id=validationProtocol">PlanDefinition</a>)<span class="debugOff"> id: validationProtocol</span> (<a href="#ObservationDefinition-ResidualWaterContent" title="click to see target - id=ResidualWaterContent">ObservationDefinition</a>)<span class="debugOff"> id: ResidualWaterContent</span></span><div class="summaryHiddenOff"><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>">Performer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/performer, id: appearanceSubstance1 fullUrl: urn:uuid:9c56948c-2a39-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: appearanceSubstance2 fullUrl: urn:uuid:9c56948c-2a49-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: appearanceSubstance3 fullUrl: urn:uuid:9c56948c-2a39-6609-2c01-4d197eb57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: identificationSubstance1 fullUrl: urn:uuid:9c56958c-2a39-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: identificationSubstance2 fullUrl: urn:uuid:9c56968c-2a49-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: identificationSubstance3 fullUrl: urn:uuid:9c56978c-2a39-6609-2c01-4d197eb57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step1Yield1 fullUrl: urn:uuid:9c56948c-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step1Yield2 fullUrl: urn:uuid:9c56948a-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step1Yield3 fullUrl: urn:uuid:9c56948a-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step2Yield1 fullUrl: urn:uuid:9c56948d-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step2Yield2 fullUrl: urn:uuid:9c56948c-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step2Yield3 fullUrl: urn:uuid:9c56948b-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: residualWaterContent1 fullUrl: urn:uuid:9c56958c-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: residualWaterContent2 fullUrl: urn:uuid:9c56968a-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: residualWaterContent3 fullUrl: urn:uuid:9c56978a-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: 378fbe5f-5926-3a5c-4c64-5428df877b08)(fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <!--testing lab-->
                <id value=&quot;378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                <name value=&quot;Testing Lab&quot;/>" id="Organization-378fbe5f-5926-3a5c-4c64-5428df877b08">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/organization.html#tt-uml">R6</a>]</span><div class="debugOff">id: 378fbe5f-5926-3a5c-4c64-5428df877b08</div><div class="debugOff"> fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08</div><span class="summaryShowsOff"> - Testing Lab</span><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;Testing Lab&quot;>">Name: </span><span>Testing Lab</span></div></div></div></div></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: processValidationReport fullUrl: urn:uuid:b664977d-799d-a1ce-928a-5def2a9955bd)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: residualWaterContent2)(fullUrl: urn:uuid:9c56968a-2b39-6609-1c01-4d197ea57a33)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;residualWaterContent2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/ResidualWaterContent&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;ResidualWaterContent&quot;/>
                        <display value=&quot;Residual Water Content (w/w%)&quot;/>
                    </coding>
                    <text value=&quot;ResidualWaterContent (w/w%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-2&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <valueQuantity>
                    <value value=&quot;7.0&quot;/>
                    <unit value=&quot;%&quot;/>
                </valueQuantity>" id="Observation-residualWaterContent2">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;ResidualWaterContent&quot;/>
                        <display value=&quot;Residual Water Content (w/w%)&quot;/>">Residual Water Content (w/w%)<span class="greyOff"> [ResidualWaterContent]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: ResidualWaterContent (w/w%)</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: residualWaterContent2</div><div class="debugOff"> fullUrl: urn:uuid:9c56968a-2b39-6609-1c01-4d197ea57a33</div><div class="summaryHiddenOff"></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;>">Date: 2023-01-01T12:00:00Z</span></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;ResidualWaterContent&quot;/>
                        <display value=&quot;Residual Water Content (w/w%)&quot;/>
                    </coding>
                    <text value=&quot;ResidualWaterContent (w/w%)&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;ResidualWaterContent&quot;/>
                        <display value=&quot;Residual Water Content (w/w%)&quot;/>">Residual Water Content (w/w%)<span class="greyOff"> [ResidualWaterContent]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: ResidualWaterContent (w/w%)</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;7.0&quot;/>
                    <unit value=&quot;%&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;7.0&quot;/>
                    <unit value=&quot;%&quot;/>">7.0%</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-2&quot;/>">Subject</span>: Intermed2Amgen (<a href="#Substance-actual-batch-substance-itermediate-2" title="click to see target - id=actual-batch-substance-itermediate-2">Substance</a>)<span class="debugOff"> id: actual-batch-substance-itermediate-2</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;residualWaterContent2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/ResidualWaterContent&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;ResidualWaterContent&quot;/>
                        <display value=&quot;Residual Water Content (w/w%)&quot;/>
                    </coding>
                    <text value=&quot;ResidualWaterContent (w/w%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-2&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <valueQuantity>
                    <value value=&quot;7.0&quot;/>
                    <unit value=&quot;%&quot;/>
                </valueQuantity>">Instantiates</span>: Residual Water Content (w/w%) - Plan: DP PROCESS VALIDATION (<a href="#PlanDefinition-validationProtocol" title="click to see target - id=validationProtocol">PlanDefinition</a>)<span class="debugOff"> id: validationProtocol</span> (<a href="#ObservationDefinition-ResidualWaterContent" title="click to see target - id=ResidualWaterContent">ObservationDefinition</a>)<span class="debugOff"> id: ResidualWaterContent</span></span><div class="summaryHiddenOff"><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>">Performer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/performer, id: appearanceSubstance1 fullUrl: urn:uuid:9c56948c-2a39-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: appearanceSubstance2 fullUrl: urn:uuid:9c56948c-2a49-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: appearanceSubstance3 fullUrl: urn:uuid:9c56948c-2a39-6609-2c01-4d197eb57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: identificationSubstance1 fullUrl: urn:uuid:9c56958c-2a39-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: identificationSubstance2 fullUrl: urn:uuid:9c56968c-2a49-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: identificationSubstance3 fullUrl: urn:uuid:9c56978c-2a39-6609-2c01-4d197eb57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step1Yield1 fullUrl: urn:uuid:9c56948c-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step1Yield2 fullUrl: urn:uuid:9c56948a-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step1Yield3 fullUrl: urn:uuid:9c56948a-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step2Yield1 fullUrl: urn:uuid:9c56948d-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step2Yield2 fullUrl: urn:uuid:9c56948c-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step2Yield3 fullUrl: urn:uuid:9c56948b-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: residualWaterContent1 fullUrl: urn:uuid:9c56958c-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: residualWaterContent2 fullUrl: urn:uuid:9c56968a-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: residualWaterContent3 fullUrl: urn:uuid:9c56978a-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: 378fbe5f-5926-3a5c-4c64-5428df877b08)(fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <!--testing lab-->
                <id value=&quot;378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                <name value=&quot;Testing Lab&quot;/>" id="Organization-378fbe5f-5926-3a5c-4c64-5428df877b08">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/organization.html#tt-uml">R6</a>]</span><div class="debugOff">id: 378fbe5f-5926-3a5c-4c64-5428df877b08</div><div class="debugOff"> fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08</div><span class="summaryShowsOff"> - Testing Lab</span><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;Testing Lab&quot;>">Name: </span><span>Testing Lab</span></div></div></div></div></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: processValidationReport fullUrl: urn:uuid:b664977d-799d-a1ce-928a-5def2a9955bd)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: residualWaterContent3)(fullUrl: urn:uuid:9c56978a-2a39-6609-1c01-4d197ea57a33)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;residualWaterContent3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/ResidualWaterContent&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;ResidualWaterContent&quot;/>
                        <display value=&quot;Residual Water Content (w/w%)&quot;/>
                    </coding>
                    <text value=&quot;ResidualWaterContent (w/w%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-3&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <valueQuantity>
                    <value value=&quot;6.8&quot;/>
                    <unit value=&quot;%&quot;/>
                </valueQuantity>" id="Observation-residualWaterContent3">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;ResidualWaterContent&quot;/>
                        <display value=&quot;Residual Water Content (w/w%)&quot;/>">Residual Water Content (w/w%)<span class="greyOff"> [ResidualWaterContent]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: ResidualWaterContent (w/w%)</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: residualWaterContent3</div><div class="debugOff"> fullUrl: urn:uuid:9c56978a-2a39-6609-1c01-4d197ea57a33</div><div class="summaryHiddenOff"></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;>">Date: 2023-01-01T12:00:00Z</span></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;ResidualWaterContent&quot;/>
                        <display value=&quot;Residual Water Content (w/w%)&quot;/>
                    </coding>
                    <text value=&quot;ResidualWaterContent (w/w%)&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;ResidualWaterContent&quot;/>
                        <display value=&quot;Residual Water Content (w/w%)&quot;/>">Residual Water Content (w/w%)<span class="greyOff"> [ResidualWaterContent]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: ResidualWaterContent (w/w%)</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;6.8&quot;/>
                    <unit value=&quot;%&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;6.8&quot;/>
                    <unit value=&quot;%&quot;/>">6.8%</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-3&quot;/>">Subject</span>: Intermed3Amgen (<a href="#Substance-actual-batch-substance-itermediate-3" title="click to see target - id=actual-batch-substance-itermediate-3">Substance</a>)<span class="debugOff"> id: actual-batch-substance-itermediate-3</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;residualWaterContent3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/ResidualWaterContent&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;ResidualWaterContent&quot;/>
                        <display value=&quot;Residual Water Content (w/w%)&quot;/>
                    </coding>
                    <text value=&quot;ResidualWaterContent (w/w%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-itermediate-3&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <valueQuantity>
                    <value value=&quot;6.8&quot;/>
                    <unit value=&quot;%&quot;/>
                </valueQuantity>">Instantiates</span>: Residual Water Content (w/w%) - Plan: DP PROCESS VALIDATION (<a href="#PlanDefinition-validationProtocol" title="click to see target - id=validationProtocol">PlanDefinition</a>)<span class="debugOff"> id: validationProtocol</span> (<a href="#ObservationDefinition-ResidualWaterContent" title="click to see target - id=ResidualWaterContent">ObservationDefinition</a>)<span class="debugOff"> id: ResidualWaterContent</span></span><div class="summaryHiddenOff"><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>">Performer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/performer, id: appearanceSubstance1 fullUrl: urn:uuid:9c56948c-2a39-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: appearanceSubstance2 fullUrl: urn:uuid:9c56948c-2a49-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: appearanceSubstance3 fullUrl: urn:uuid:9c56948c-2a39-6609-2c01-4d197eb57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: identificationSubstance1 fullUrl: urn:uuid:9c56958c-2a39-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: identificationSubstance2 fullUrl: urn:uuid:9c56968c-2a49-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: identificationSubstance3 fullUrl: urn:uuid:9c56978c-2a39-6609-2c01-4d197eb57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step1Yield1 fullUrl: urn:uuid:9c56948c-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step1Yield2 fullUrl: urn:uuid:9c56948a-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step1Yield3 fullUrl: urn:uuid:9c56948a-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step2Yield1 fullUrl: urn:uuid:9c56948d-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step2Yield2 fullUrl: urn:uuid:9c56948c-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: step2Yield3 fullUrl: urn:uuid:9c56948b-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: residualWaterContent1 fullUrl: urn:uuid:9c56958c-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: residualWaterContent2 fullUrl: urn:uuid:9c56968a-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: residualWaterContent3 fullUrl: urn:uuid:9c56978a-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: 378fbe5f-5926-3a5c-4c64-5428df877b08)(fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <!--testing lab-->
                <id value=&quot;378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                <name value=&quot;Testing Lab&quot;/>" id="Organization-378fbe5f-5926-3a5c-4c64-5428df877b08">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/organization.html#tt-uml">R6</a>]</span><div class="debugOff">id: 378fbe5f-5926-3a5c-4c64-5428df877b08</div><div class="debugOff"> fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08</div><span class="summaryShowsOff"> - Testing Lab</span><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;Testing Lab&quot;>">Name: </span><span>Testing Lab</span></div></div></div></div></div></div>
</div>
</div>
<div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (PlanDefinition/subjectReference, id: validationProtocol fullUrl: urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763furl (canonical): http://example-server.com/fhir/PlanDefinition/2038e4c7-22b8-4c56-2d28-6c077648763f)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Substance/code, id: substance-dxpq-ex1-unlinked fullUrl: urn:uuid:fc078762-81c5-5656-9744-13c7ad1e595b)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Substance/code, id: actual-batch-substance-2-unlinked fullUrl: urn:uuid:cb31d747-2338-88d5-342c-8e9c097e4dad)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Substance/code, id: actual-batch-substance-3-unlinked fullUrl: urn:uuid:1551f97b-6f6d-825e-1fb3-44b0b090808c)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: substancedefinition-component-substance-dxpq-ex1)(fullUrl: urn:uuid:57a9af63-315d-1585-a261-0e337b289390)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/SubstanceDefinition-component-substance-drug-pq 

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;substancedefinition-component-substance-dxpq-ex1&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/SubstanceDefinition-component-substance-drug-pq&quot;/>
                </meta>
                <manufacturer>
                    <reference value=&quot;Organization/organization-dxpq-ex1&quot;/>
                </manufacturer>
                <name>
                    <name value=&quot;Stelbatolol&quot;/>
                    <!-- #4 -->
                </name>" id="SubstanceDefinition-substancedefinition-component-substance-dxpq-ex1">Substance</span></a><span class="summaryShowsOff"><b> - Stelbatolol</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substancedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: substancedefinition-component-substance-dxpq-ex1</div>
<div class="debugOff"> fullUrl: urn:uuid:57a9af63-315d-1585-a261-0e337b289390</div>
<div class="debugOff"></div>
<div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/SubstanceDefinition-component-substance-drug-pq&quot;>">Profile: </span><span>http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/SubstanceDefinition-component-substance-drug-pq</span></div>
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
                    <reference value=&quot;Organization/organization-dxpq-ex1&quot;/>">Manufacturer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: substancedefinition-component-substance-dxpq-ex1 fullUrl: urn:uuid:57a9af63-315d-1585-a261-0e337b289390)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Substance/valueReference, id: substance-dxpq-ex1-unlinked fullUrl: urn:uuid:fc078762-81c5-5656-9744-13c7ad1e595b)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Substance/assigner, id: substance-dxpq-ex1-unlinked fullUrl: urn:uuid:fc078762-81c5-5656-9744-13c7ad1e595b)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Substance/valueReference, id: actual-batch-substance-2-unlinked fullUrl: urn:uuid:cb31d747-2338-88d5-342c-8e9c097e4dad)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Substance/assigner, id: actual-batch-substance-2-unlinked fullUrl: urn:uuid:cb31d747-2338-88d5-342c-8e9c097e4dad)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Substance/valueReference, id: actual-batch-substance-3-unlinked fullUrl: urn:uuid:1551f97b-6f6d-825e-1fb3-44b0b090808c)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Substance/assigner, id: actual-batch-substance-3-unlinked fullUrl: urn:uuid:1551f97b-6f6d-825e-1fb3-44b0b090808c)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: organization-dxpq-ex1)(fullUrl: urn:uuid:49d2f0c0-4b28-9271-8aaf-2996a8b9739c)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Organization-drug-pq 

<Bundle>
    <entry>
        <resource>
            <Organization>
                <!--id value=&quot;substance-manufacturer&quot;/-->
                <id value=&quot;organization-dxpq-ex1&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Organization-drug-pq&quot;/>
                </meta>
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
                </contact>" id="Organization-organization-dxpq-ex1">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/organization.html#tt-uml">R6</a>]</span><div class="debugOff">id: organization-dxpq-ex1</div>
<div class="debugOff"> fullUrl: urn:uuid:49d2f0c0-4b28-9271-8aaf-2996a8b9739c</div>
<div class="debugOff"></div>
<div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Organization-drug-pq&quot;>">Profile: </span><span>http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Organization-drug-pq</span></div><span class="summaryShowsOff"> - AAA Molybdenum Products, Inc.</span><div class="summaryHiddenOff">
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
<div class="summaryHiddenOff">
<div></div>Subject of Plan: DP PROCESS VALIDATION (<a href="#PlanDefinition-validationProtocol" title="click to see target - id=validationProtocol">PlanDefinition</a>)<span class="debugOff"> id: validationProtocol</span></div>
<div class="indent sbddetails"><span title="Substance resource extension linking back to SubstanceDefinition: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-pq">Batch Instance</span><div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)"><a class="plainLink"><span class="bold" title="Substance (id: substance-dxpq-ex1-unlinked)(fullUrl: urn:uuid:fc078762-81c5-5656-9744-13c7ad1e595b)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq 

<Bundle>
    <entry>
        <resource>
            <Substance>
                <!--<id value=&quot;actual-batch-substance&quot;/>-->
                <id value=&quot;substance-dxpq-ex1-unlinked&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq&quot;/>
                </meta>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-pq&quot;>
                        <valueDateTime value=&quot;2019-09-08&quot;/>
                        <!-- #173 -->
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-retest-date-pq&quot;>
                        <valueDateTime value=&quot;2022-09-08&quot;/>
                        <!-- #221 -->
                    </extension>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-07&quot;/>
                        <!-- #159 -->
                    </extension>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;5.1&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-pq&quot;>
                        <valueQuantity>
                            <value value=&quot;4.8&quot;/>
                            <unit value=&quot;kg&quot;/>
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;batchUtilization&quot;>
                        <!-- #161 -->
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/pqcmc-batch-utilization-terminology&quot;/>
                                <code value=&quot;C133991&quot;/>
                                <display value=&quot;Development&quot;/>
                            </coding>
                        </valueCodeableConcept>
                    </extension>
                    <extension url=&quot;assignedManufacturer&quot;>
                        <!-- #160 -->
                        <valueReference>
                            <reference value=&quot;Organization/organization-dxpq-ex1&quot;/>
                        </valueReference>
                    </extension>
                </extension>
                <identifier>
                    <value value=&quot;SUB1Amgen&quot;/>
                </identifier>
                <identifier>
                    <value value=&quot;SUB1SiteA&quot;/>
                    <assigner>
                        <reference value=&quot;Organization/organization-dxpq-ex1&quot;/>
                    </assigner>
                </identifier>
                <instance value=&quot;true&quot;/>
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/substancedefinition-component-substance-dxpq-ex1&quot;/>
                    </reference>
                </code>" id="Substance-substance-dxpq-ex1-unlinked">Substance</span></a><span class="summaryShowsOff"><b> - SUB1Amgen - SUB1SiteA</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substance.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substance.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substance.html#tt-uml">R6</a>]</span><div class="debugOff">id: substance-dxpq-ex1-unlinked</div><div class="debugOff"> fullUrl: urn:uuid:fc078762-81c5-5656-9744-13c7ad1e595b</div><div class="debugOff"></div><div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq&quot;>">Profile: </span><span>http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq</span></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <instance value=&quot;true&quot;>">Instance: </span><span><span>true</span></span></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;SUB1Amgen&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;SUB1Amgen&quot;/>">SUB1Amgen</span></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;SUB1SiteA&quot;/>
                    <assigner>
                        <reference value=&quot;Organization/organization-dxpq-ex1&quot;/>
                    </assigner>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;SUB1SiteA&quot;/>
                    <assigner>
                        <reference value=&quot;Organization/organization-dxpq-ex1&quot;/>
                    </assigner>">SUB1SiteA</span><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;SUB1SiteA&quot;/>
                    <assigner>
                        <reference value=&quot;Organization/organization-dxpq-ex1&quot;/>
                    </assigner>">Identifier Assigner</span><div></div> AAA Molybdenum Products, Inc.,  Identifier: <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3003040516&quot;/>">3003040516<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span> (<a href="#Organization-organization-dxpq-ex1" title="click to see target - id=organization-dxpq-ex1">Organization</a>)<span class="debugOff"> id: organization-dxpq-ex1</span></span></div><div><div class="indent sbddetails"><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/substancedefinition-component-substance-dxpq-ex1&quot;/>
                    </reference>">Definition: </span>Stelbatolol (<a href="#SubstanceDefinition-substancedefinition-component-substance-dxpq-ex1" title="click to see target - id=substancedefinition-component-substance-dxpq-ex1">SubstanceDefinition</a>)<span class="debugOff"> id: substancedefinition-component-substance-dxpq-ex1</span></span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-pq&quot;>
                        <valueDateTime value=&quot;2019-09-08&quot;/>
                        <!-- #173 -->
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-retest-date-pq&quot;>
                        <valueDateTime value=&quot;2022-09-08&quot;/>
                        <!-- #221 -->
                    </extension>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-07&quot;/>
                        <!-- #159 -->
                    </extension>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;5.1&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-pq&quot;>
                        <valueQuantity>
                            <value value=&quot;4.8&quot;/>
                            <unit value=&quot;kg&quot;/>
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;batchUtilization&quot;>
                        <!-- #161 -->
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/pqcmc-batch-utilization-terminology&quot;/>
                                <code value=&quot;C133991&quot;/>
                                <display value=&quot;Development&quot;/>
                            </coding>
                        </valueCodeableConcept>
                    </extension>
                    <extension url=&quot;assignedManufacturer&quot;>
                        <!-- #160 -->
                        <valueReference>
                            <reference value=&quot;Organization/organization-dxpq-ex1&quot;/>
                        </valueReference>
                    </extension>">Manufacturing</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-07&quot;>">Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-07&quot;>">2019-09-07</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-pq&quot;>
                        <valueDateTime value=&quot;2019-09-08&quot;>">Release Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-pq&quot;>
                        <valueDateTime value=&quot;2019-09-08&quot;>">2019-09-08</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-retest-date-pq&quot;>
                        <valueDateTime value=&quot;2022-09-08&quot;>">Retest Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-retest-date-pq&quot;>
                        <valueDateTime value=&quot;2022-09-08&quot;>">2022-09-08</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;5.1&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->">Quantity: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;5.1&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->">5.1 kg</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-pq&quot;>
                        <valueQuantity>
                            <value value=&quot;4.8&quot;/>
                            <unit value=&quot;kg&quot;/>">Actual Yield: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
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
                        <!-- #161 -->
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/pqcmc-batch-utilization-terminology&quot;/>
                                <code value=&quot;C133991&quot;/>
                                <display value=&quot;Development&quot;/>
                            </coding>
                        </valueCodeableConcept>">Utilization: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchUtilization&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/pqcmc-batch-utilization-terminology&quot;/>
                                <code value=&quot;C133991&quot;/>
                                <display value=&quot;Development&quot;/>">Development<span class="greyOff"> [C133991]</span><span class="greyOff"> (http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/pqcmc-batch-utilization-terminology)</span></span></div><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    ...
                    <extension url=&quot;assignedManufacturer&quot;>
                        <!-- #160 -->
                        <valueReference>
                            <reference value=&quot;Organization/organization-dxpq-ex1&quot;/>
                        </valueReference>">Manufacturer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: substancedefinition-component-substance-dxpq-ex1 fullUrl: urn:uuid:57a9af63-315d-1585-a261-0e337b289390)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Substance/valueReference, id: substance-dxpq-ex1-unlinked fullUrl: urn:uuid:fc078762-81c5-5656-9744-13c7ad1e595b)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Substance/assigner, id: substance-dxpq-ex1-unlinked fullUrl: urn:uuid:fc078762-81c5-5656-9744-13c7ad1e595b)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Substance/valueReference, id: actual-batch-substance-2-unlinked fullUrl: urn:uuid:cb31d747-2338-88d5-342c-8e9c097e4dad)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Substance/assigner, id: actual-batch-substance-2-unlinked fullUrl: urn:uuid:cb31d747-2338-88d5-342c-8e9c097e4dad)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Substance/valueReference, id: actual-batch-substance-3-unlinked fullUrl: urn:uuid:1551f97b-6f6d-825e-1fb3-44b0b090808c)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Substance/assigner, id: actual-batch-substance-3-unlinked fullUrl: urn:uuid:1551f97b-6f6d-825e-1fb3-44b0b090808c)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: organization-dxpq-ex1)(fullUrl: urn:uuid:49d2f0c0-4b28-9271-8aaf-2996a8b9739c)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Organization-drug-pq 

<Bundle>
    <entry>
        <resource>
            <Organization>
                <!--id value=&quot;substance-manufacturer&quot;/-->
                <id value=&quot;organization-dxpq-ex1&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Organization-drug-pq&quot;/>
                </meta>
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
                </contact>" id="Organization-organization-dxpq-ex1">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/organization.html#tt-uml">R6</a>]</span><div class="debugOff">id: organization-dxpq-ex1</div><div class="debugOff"> fullUrl: urn:uuid:49d2f0c0-4b28-9271-8aaf-2996a8b9739c</div><div class="debugOff"></div><div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Organization-drug-pq&quot;>">Profile: </span><span>http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Organization-drug-pq</span></div><span class="summaryShowsOff"> - AAA Molybdenum Products, Inc.</span><div class="summaryHiddenOff"><div><span title="
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
                        <country value=&quot;USA&quot;>">USA</span></div></div></div></div></span></div></div></div><div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)"><a class="plainLink"><span class="bold" title="Substance (id: actual-batch-substance-2-unlinked)(fullUrl: urn:uuid:cb31d747-2338-88d5-342c-8e9c097e4dad)

<Bundle>
    <entry>
        <resource>
            <Substance>
                <id value=&quot;actual-batch-substance-2-unlinked&quot;/>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-pq&quot;>
                        <valueDateTime value=&quot;2019-09-08&quot;/>
                        <!-- #173 -->
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-retest-date-pq&quot;>
                        <valueDateTime value=&quot;2022-09-08&quot;/>
                        <!-- #221 -->
                    </extension>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-07&quot;/>
                        <!-- #159 -->
                    </extension>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;5.2&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-pq&quot;>
                        <valueQuantity>
                            <value value=&quot;4.8&quot;/>
                            <unit value=&quot;kg&quot;/>
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;batchUtilization&quot;>
                        <!-- #161 -->
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/pqcmc-batch-utilization-terminology&quot;/>
                                <code value=&quot;C133991&quot;/>
                                <display value=&quot;Development&quot;/>
                            </coding>
                        </valueCodeableConcept>
                    </extension>
                    <extension url=&quot;assignedManufacturer&quot;>
                        <!-- #160 -->
                        <valueReference>
                            <reference value=&quot;Organization/organization-dxpq-ex1&quot;/>
                        </valueReference>
                    </extension>
                </extension>
                <identifier>
                    <value value=&quot;SUB2Amgen&quot;/>
                </identifier>
                <identifier>
                    <value value=&quot;SUB2SiteA&quot;/>
                    <assigner>
                        <reference value=&quot;Organization/organization-dxpq-ex1&quot;/>
                    </assigner>
                </identifier>
                <instance value=&quot;true&quot;/>
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/substancedefinition-component-substance-dxpq-ex1&quot;/>
                    </reference>
                </code>" id="Substance-actual-batch-substance-2-unlinked">Substance</span></a><span class="summaryShowsOff"><b> - SUB2Amgen - SUB2SiteA</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substance.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substance.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substance.html#tt-uml">R6</a>]</span><div class="debugOff">id: actual-batch-substance-2-unlinked</div><div class="debugOff"> fullUrl: urn:uuid:cb31d747-2338-88d5-342c-8e9c097e4dad</div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <instance value=&quot;true&quot;>">Instance: </span><span><span>true</span></span></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;SUB2Amgen&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;SUB2Amgen&quot;/>">SUB2Amgen</span></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;SUB2SiteA&quot;/>
                    <assigner>
                        <reference value=&quot;Organization/organization-dxpq-ex1&quot;/>
                    </assigner>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;SUB2SiteA&quot;/>
                    <assigner>
                        <reference value=&quot;Organization/organization-dxpq-ex1&quot;/>
                    </assigner>">SUB2SiteA</span><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;SUB2SiteA&quot;/>
                    <assigner>
                        <reference value=&quot;Organization/organization-dxpq-ex1&quot;/>
                    </assigner>">Identifier Assigner</span><div></div> AAA Molybdenum Products, Inc.,  Identifier: <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3003040516&quot;/>">3003040516<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span> (<a href="#Organization-organization-dxpq-ex1" title="click to see target - id=organization-dxpq-ex1">Organization</a>)<span class="debugOff"> id: organization-dxpq-ex1</span></span></div><div><div class="indent sbddetails"><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/substancedefinition-component-substance-dxpq-ex1&quot;/>
                    </reference>">Definition: </span>Stelbatolol (<a href="#SubstanceDefinition-substancedefinition-component-substance-dxpq-ex1" title="click to see target - id=substancedefinition-component-substance-dxpq-ex1">SubstanceDefinition</a>)<span class="debugOff"> id: substancedefinition-component-substance-dxpq-ex1</span></span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-pq&quot;>
                        <valueDateTime value=&quot;2019-09-08&quot;/>
                        <!-- #173 -->
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-retest-date-pq&quot;>
                        <valueDateTime value=&quot;2022-09-08&quot;/>
                        <!-- #221 -->
                    </extension>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-07&quot;/>
                        <!-- #159 -->
                    </extension>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;5.2&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-pq&quot;>
                        <valueQuantity>
                            <value value=&quot;4.8&quot;/>
                            <unit value=&quot;kg&quot;/>
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;batchUtilization&quot;>
                        <!-- #161 -->
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/pqcmc-batch-utilization-terminology&quot;/>
                                <code value=&quot;C133991&quot;/>
                                <display value=&quot;Development&quot;/>
                            </coding>
                        </valueCodeableConcept>
                    </extension>
                    <extension url=&quot;assignedManufacturer&quot;>
                        <!-- #160 -->
                        <valueReference>
                            <reference value=&quot;Organization/organization-dxpq-ex1&quot;/>
                        </valueReference>
                    </extension>">Manufacturing</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-07&quot;>">Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-07&quot;>">2019-09-07</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-pq&quot;>
                        <valueDateTime value=&quot;2019-09-08&quot;>">Release Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-pq&quot;>
                        <valueDateTime value=&quot;2019-09-08&quot;>">2019-09-08</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-retest-date-pq&quot;>
                        <valueDateTime value=&quot;2022-09-08&quot;>">Retest Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-retest-date-pq&quot;>
                        <valueDateTime value=&quot;2022-09-08&quot;>">2022-09-08</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;5.2&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->">Quantity: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;5.2&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->">5.2 kg</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-pq&quot;>
                        <valueQuantity>
                            <value value=&quot;4.8&quot;/>
                            <unit value=&quot;kg&quot;/>">Actual Yield: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
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
                        <!-- #161 -->
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/pqcmc-batch-utilization-terminology&quot;/>
                                <code value=&quot;C133991&quot;/>
                                <display value=&quot;Development&quot;/>
                            </coding>
                        </valueCodeableConcept>">Utilization: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchUtilization&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/pqcmc-batch-utilization-terminology&quot;/>
                                <code value=&quot;C133991&quot;/>
                                <display value=&quot;Development&quot;/>">Development<span class="greyOff"> [C133991]</span><span class="greyOff"> (http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/pqcmc-batch-utilization-terminology)</span></span></div><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    ...
                    <extension url=&quot;assignedManufacturer&quot;>
                        <!-- #160 -->
                        <valueReference>
                            <reference value=&quot;Organization/organization-dxpq-ex1&quot;/>
                        </valueReference>">Manufacturer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: substancedefinition-component-substance-dxpq-ex1 fullUrl: urn:uuid:57a9af63-315d-1585-a261-0e337b289390)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Substance/valueReference, id: substance-dxpq-ex1-unlinked fullUrl: urn:uuid:fc078762-81c5-5656-9744-13c7ad1e595b)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Substance/assigner, id: substance-dxpq-ex1-unlinked fullUrl: urn:uuid:fc078762-81c5-5656-9744-13c7ad1e595b)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Substance/valueReference, id: actual-batch-substance-2-unlinked fullUrl: urn:uuid:cb31d747-2338-88d5-342c-8e9c097e4dad)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Substance/assigner, id: actual-batch-substance-2-unlinked fullUrl: urn:uuid:cb31d747-2338-88d5-342c-8e9c097e4dad)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Substance/valueReference, id: actual-batch-substance-3-unlinked fullUrl: urn:uuid:1551f97b-6f6d-825e-1fb3-44b0b090808c)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Substance/assigner, id: actual-batch-substance-3-unlinked fullUrl: urn:uuid:1551f97b-6f6d-825e-1fb3-44b0b090808c)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: organization-dxpq-ex1)(fullUrl: urn:uuid:49d2f0c0-4b28-9271-8aaf-2996a8b9739c)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Organization-drug-pq 

<Bundle>
    <entry>
        <resource>
            <Organization>
                <!--id value=&quot;substance-manufacturer&quot;/-->
                <id value=&quot;organization-dxpq-ex1&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Organization-drug-pq&quot;/>
                </meta>
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
                </contact>" id="Organization-organization-dxpq-ex1">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/organization.html#tt-uml">R6</a>]</span><div class="debugOff">id: organization-dxpq-ex1</div><div class="debugOff"> fullUrl: urn:uuid:49d2f0c0-4b28-9271-8aaf-2996a8b9739c</div><div class="debugOff"></div><div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Organization-drug-pq&quot;>">Profile: </span><span>http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Organization-drug-pq</span></div><span class="summaryShowsOff"> - AAA Molybdenum Products, Inc.</span><div class="summaryHiddenOff"><div><span title="
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
                        <country value=&quot;USA&quot;>">USA</span></div></div></div></div></span></div></div></div><div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)"><a class="plainLink"><span class="bold" title="Substance (id: actual-batch-substance-3-unlinked)(fullUrl: urn:uuid:1551f97b-6f6d-825e-1fb3-44b0b090808c)

<Bundle>
    <entry>
        <resource>
            <Substance>
                <id value=&quot;actual-batch-substance-3-unlinked&quot;/>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-pq&quot;>
                        <valueDateTime value=&quot;2019-09-08&quot;/>
                        <!-- #173 -->
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-retest-date-pq&quot;>
                        <valueDateTime value=&quot;2022-09-08&quot;/>
                        <!-- #221 -->
                    </extension>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-07&quot;/>
                        <!-- #159 -->
                    </extension>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;5.3&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-pq&quot;>
                        <valueQuantity>
                            <value value=&quot;4.8&quot;/>
                            <unit value=&quot;kg&quot;/>
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;batchUtilization&quot;>
                        <!-- #161 -->
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/pqcmc-batch-utilization-terminology&quot;/>
                                <code value=&quot;C133991&quot;/>
                                <display value=&quot;Development&quot;/>
                            </coding>
                        </valueCodeableConcept>
                    </extension>
                    <extension url=&quot;assignedManufacturer&quot;>
                        <!-- #160 -->
                        <valueReference>
                            <reference value=&quot;Organization/organization-dxpq-ex1&quot;/>
                        </valueReference>
                    </extension>
                </extension>
                <identifier>
                    <value value=&quot;SUB3Amgen&quot;/>
                    <!-- #155 -->
                </identifier>
                <identifier>
                    <value value=&quot;SUB3SiteA&quot;/>
                    <assigner>
                        <reference value=&quot;Organization/organization-dxpq-ex1&quot;/>
                    </assigner>
                </identifier>
                <instance value=&quot;true&quot;/>
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/substancedefinition-component-substance-dxpq-ex1&quot;/>
                    </reference>
                </code>" id="Substance-actual-batch-substance-3-unlinked">Substance</span></a><span class="summaryShowsOff"><b> - SUB3Amgen - SUB3SiteA</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substance.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substance.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substance.html#tt-uml">R6</a>]</span><div class="debugOff">id: actual-batch-substance-3-unlinked</div><div class="debugOff"> fullUrl: urn:uuid:1551f97b-6f6d-825e-1fb3-44b0b090808c</div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <instance value=&quot;true&quot;>">Instance: </span><span><span>true</span></span></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;SUB3Amgen&quot;/>
                    <!-- #155 -->">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;SUB3Amgen&quot;/>
                    <!-- #155 -->">SUB3Amgen</span></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;SUB3SiteA&quot;/>
                    <assigner>
                        <reference value=&quot;Organization/organization-dxpq-ex1&quot;/>
                    </assigner>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;SUB3SiteA&quot;/>
                    <assigner>
                        <reference value=&quot;Organization/organization-dxpq-ex1&quot;/>
                    </assigner>">SUB3SiteA</span><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;SUB3SiteA&quot;/>
                    <assigner>
                        <reference value=&quot;Organization/organization-dxpq-ex1&quot;/>
                    </assigner>">Identifier Assigner</span><div></div> AAA Molybdenum Products, Inc.,  Identifier: <span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <!-- FDA establishment identifier -->
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3003040516&quot;/>">3003040516<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span> (<a href="#Organization-organization-dxpq-ex1" title="click to see target - id=organization-dxpq-ex1">Organization</a>)<span class="debugOff"> id: organization-dxpq-ex1</span></span></div><div><div class="indent sbddetails"><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/substancedefinition-component-substance-dxpq-ex1&quot;/>
                    </reference>">Definition: </span>Stelbatolol (<a href="#SubstanceDefinition-substancedefinition-component-substance-dxpq-ex1" title="click to see target - id=substancedefinition-component-substance-dxpq-ex1">SubstanceDefinition</a>)<span class="debugOff"> id: substancedefinition-component-substance-dxpq-ex1</span></span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-pq&quot;>
                        <valueDateTime value=&quot;2019-09-08&quot;/>
                        <!-- #173 -->
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-retest-date-pq&quot;>
                        <valueDateTime value=&quot;2022-09-08&quot;/>
                        <!-- #221 -->
                    </extension>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-07&quot;/>
                        <!-- #159 -->
                    </extension>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;5.3&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-pq&quot;>
                        <valueQuantity>
                            <value value=&quot;4.8&quot;/>
                            <unit value=&quot;kg&quot;/>
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;batchUtilization&quot;>
                        <!-- #161 -->
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/pqcmc-batch-utilization-terminology&quot;/>
                                <code value=&quot;C133991&quot;/>
                                <display value=&quot;Development&quot;/>
                            </coding>
                        </valueCodeableConcept>
                    </extension>
                    <extension url=&quot;assignedManufacturer&quot;>
                        <!-- #160 -->
                        <valueReference>
                            <reference value=&quot;Organization/organization-dxpq-ex1&quot;/>
                        </valueReference>
                    </extension>">Manufacturing</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-07&quot;>">Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-07&quot;>">2019-09-07</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-pq&quot;>
                        <valueDateTime value=&quot;2019-09-08&quot;>">Release Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-release-date-pq&quot;>
                        <valueDateTime value=&quot;2019-09-08&quot;>">2019-09-08</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-retest-date-pq&quot;>
                        <valueDateTime value=&quot;2022-09-08&quot;>">Retest Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-retest-date-pq&quot;>
                        <valueDateTime value=&quot;2022-09-08&quot;>">2022-09-08</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;5.3&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->">Quantity: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;5.3&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->">5.3 kg</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-actual-yield-pq&quot;>
                        <valueQuantity>
                            <value value=&quot;4.8&quot;/>
                            <unit value=&quot;kg&quot;/>">Actual Yield: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
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
                        <!-- #161 -->
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/pqcmc-batch-utilization-terminology&quot;/>
                                <code value=&quot;C133991&quot;/>
                                <display value=&quot;Development&quot;/>
                            </coding>
                        </valueCodeableConcept>">Utilization: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchUtilization&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/pqcmc-batch-utilization-terminology&quot;/>
                                <code value=&quot;C133991&quot;/>
                                <display value=&quot;Development&quot;/>">Development<span class="greyOff"> [C133991]</span><span class="greyOff"> (http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/pqcmc-batch-utilization-terminology)</span></span></div><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    ...
                    <extension url=&quot;assignedManufacturer&quot;>
                        <!-- #160 -->
                        <valueReference>
                            <reference value=&quot;Organization/organization-dxpq-ex1&quot;/>
                        </valueReference>">Manufacturer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: substancedefinition-component-substance-dxpq-ex1 fullUrl: urn:uuid:57a9af63-315d-1585-a261-0e337b289390)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Substance/valueReference, id: substance-dxpq-ex1-unlinked fullUrl: urn:uuid:fc078762-81c5-5656-9744-13c7ad1e595b)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Substance/assigner, id: substance-dxpq-ex1-unlinked fullUrl: urn:uuid:fc078762-81c5-5656-9744-13c7ad1e595b)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Substance/valueReference, id: actual-batch-substance-2-unlinked fullUrl: urn:uuid:cb31d747-2338-88d5-342c-8e9c097e4dad)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Substance/assigner, id: actual-batch-substance-2-unlinked fullUrl: urn:uuid:cb31d747-2338-88d5-342c-8e9c097e4dad)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Substance/valueReference, id: actual-batch-substance-3-unlinked fullUrl: urn:uuid:1551f97b-6f6d-825e-1fb3-44b0b090808c)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Substance/assigner, id: actual-batch-substance-3-unlinked fullUrl: urn:uuid:1551f97b-6f6d-825e-1fb3-44b0b090808c)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: organization-dxpq-ex1)(fullUrl: urn:uuid:49d2f0c0-4b28-9271-8aaf-2996a8b9739c)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Organization-drug-pq 

<Bundle>
    <entry>
        <resource>
            <Organization>
                <!--id value=&quot;substance-manufacturer&quot;/-->
                <id value=&quot;organization-dxpq-ex1&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Organization-drug-pq&quot;/>
                </meta>
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
                </contact>" id="Organization-organization-dxpq-ex1">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/organization.html#tt-uml">R6</a>]</span><div class="debugOff">id: organization-dxpq-ex1</div><div class="debugOff"> fullUrl: urn:uuid:49d2f0c0-4b28-9271-8aaf-2996a8b9739c</div><div class="debugOff"></div><div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Organization-drug-pq&quot;>">Profile: </span><span>http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Organization-drug-pq</span></div><span class="summaryShowsOff"> - AAA Molybdenum Products, Inc.</span><div class="summaryHiddenOff"><div><span title="
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
                        <country value=&quot;USA&quot;>">USA</span></div></div></div></div></span></div></div></div>
</div>
<div class="summaryHiddenOff"></div>
</div>
</div>
<div class="org indent"><span class="bold">Report Specification</span><div class="indent plan summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (DiagnosticReport/valueReference, id: processValidationReport fullUrl: urn:uuid:b664977d-799d-a1ce-928a-5def2a9955bd)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="PlanDefinition (id: validationProtocol)(fullUrl: urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763f)

<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <id value=&quot;validationProtocol&quot;/>
                <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tabulateBatchesInRows-substance&quot;>
                    <valueBoolean value=&quot;true&quot;/>
                </extension>
                <url value=&quot;http://example-server.com/fhir/PlanDefinition/2038e4c7-22b8-4c56-2d28-6c077648763f&quot;/>
                <title value=&quot;DP PROCESS VALIDATION&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/plan-definition-type&quot;/>
                        <code value=&quot;workflow-definition&quot;/>
                        <display value=&quot;Workflow Definition&quot;/>
                    </coding>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-planType-local-pq&quot;/>
                        <code value=&quot;process-validation&quot;/>
                        <display value=&quot;Process Validation&quot;/>
                    </coding>
                </type>
                <status value=&quot;active&quot;/>
                <subjectReference>
                    <reference value=&quot;SubstanceDefinition/substancedefinition-component-substance-dxpq-ex1&quot;/>
                </subjectReference>
                <description value=&quot;Pre-defined validation acceptance criteria were established based on manufacturing development data derived from process characterization studies...&quot;/>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-step-scale-pq&quot;>
                        <valueCoding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingStepScale-local-pq&quot;/>
                            <code value=&quot;ABCD&quot;/>
                            <display value=&quot;Production Scale&quot;/>
                        </valueCoding>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-processParameter-local-pq&quot;/>
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
                    <title value=&quot;Step 1 Yield&quot;/>
                    <description value=&quot;Description of this step&quot;/>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingStep-local-pq&quot;/>
                            <code value=&quot;particleSizeReduction&quot;/>
                            <display value=&quot;Particle Size Reduction&quot;/>
                        </coding>
                        <!--text value=&quot;Step 2 in the process - free text is possible&quot;/-->
                    </code>
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/startingMaterial&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Starting material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;StartingMaterial&quot;/>
                                <display value=&quot;Starting Material&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/intermediateMaterial&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Intermediate material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;IntermediateMaterial&quot;/>
                                <display value=&quot;Intermediate Material&quot;/>
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
                            <display value=&quot;Resulting material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;ResultingMaterial&quot;/>
                                <display value=&quot;Resulting Material&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Step1Yield&quot;/>
                    </action>
                </action>
                <action>
                    <title value=&quot;Step 1 In-Process Control Data&quot;/>
                    <code>
                        <coding>
                            <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/manufacturing-step&quot;/>
                            <code value=&quot;Step1In-ProcessControlData&quot;/>
                            <display value=&quot;Step 1 In-Process Control Data&quot;/>
                        </coding>
                    </code>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/ResidualWaterContent&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/ResidualStartingMaterial1byHPLC&quot;/>
                    </action>
                </action>
                <action>
                    <title value=&quot;Step 1 DS Release Testing Results&quot;/>
                    <code>
                        <coding>
                            <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/manufacturing-step&quot;/>
                            <code value=&quot;Step1DSReleaseTestingResults&quot;/>
                            <display value=&quot;Step 1 DS Release Testing Results&quot;/>
                        </coding>
                    </code>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/AppearanceSubstance&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/IdentificationSubstance&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/AssaySubstance&quot;/>
                    </action>
                </action>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-step-scale-pq&quot;>
                        <valueCoding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingStepScale-local-pq&quot;/>
                            <code value=&quot;ABCD&quot;/>
                            <display value=&quot;Production Scale&quot;/>
                        </valueCoding>
                    </extension>
                    <prefix value=&quot;2&quot;/>
                    <title value=&quot;Step 2 Yield&quot;/>
                    <description value=&quot;Description of this step&quot;/>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingStep-local-pq&quot;/>
                            <code value=&quot;drying&quot;/>
                            <display value=&quot;Drying&quot;/>
                        </coding>
                        <!--text value=&quot;Step 2 in the process - free text is possible&quot;/-->
                    </code>
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/startingMaterialStep2&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Starting material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;StartingMaterial&quot;/>
                                <display value=&quot;Starting Material&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/intermediateMaterialStep2&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Intermediate material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;IntermediateMaterial&quot;/>
                                <display value=&quot;Intermediate Material&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/resultingMaterialStep2&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Resulting material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;ResultingMaterial&quot;/>
                                <display value=&quot;Resulting Material&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Step2Yield&quot;/>
                    </action>
                </action>" id="PlanDefinition-validationProtocol">Plan</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/plandefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/plandefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/plandefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: validationProtocol</div>
<div class="debugOff"> fullUrl: urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763f</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/PlanDefinition/2038e4c7-22b8-4c56-2d28-6c077648763f</div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <title value=&quot;DP PROCESS VALIDATION&quot;>">Title: </span><span>DP PROCESS VALIDATION</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <description value=&quot;Pre-defined validation acceptance criteria were established based on manufacturing development data derived from process characterization studies...&quot;>">Description: </span><span>Pre-defined validation acceptance criteria were established based on manufacturing development data derived from process characterization studies...</span></div>
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
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-planType-local-pq&quot;/>
                        <code value=&quot;process-validation&quot;/>
                        <display value=&quot;Process Validation&quot;/>
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
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-planType-local-pq&quot;/>
                        <code value=&quot;process-validation&quot;/>
                        <display value=&quot;Process Validation&quot;/>">Process Validation<span class="greyOff"> [process-validation]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-planType-local-pq)</span></span></div>
<div class="summaryHiddenOff">
<div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <status value=&quot;active&quot;>">Status: </span><span>active</span></div>
</div>
<div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <id value=&quot;validationProtocol&quot;/>
                <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tabulateBatchesInRows-substance&quot;>
                    <valueBoolean value=&quot;true&quot;/>
                </extension>
                <url value=&quot;http://example-server.com/fhir/PlanDefinition/2038e4c7-22b8-4c56-2d28-6c077648763f&quot;/>
                <title value=&quot;DP PROCESS VALIDATION&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/plan-definition-type&quot;/>
                        <code value=&quot;workflow-definition&quot;/>
                        <display value=&quot;Workflow Definition&quot;/>
                    </coding>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-planType-local-pq&quot;/>
                        <code value=&quot;process-validation&quot;/>
                        <display value=&quot;Process Validation&quot;/>
                    </coding>
                </type>
                <status value=&quot;active&quot;/>
                <subjectReference>
                    <reference value=&quot;SubstanceDefinition/substancedefinition-component-substance-dxpq-ex1&quot;/>
                </subjectReference>
                <description value=&quot;Pre-defined validation acceptance criteria were established based on manufacturing development data derived from process characterization studies...&quot;/>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-step-scale-pq&quot;>
                        <valueCoding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingStepScale-local-pq&quot;/>
                            <code value=&quot;ABCD&quot;/>
                            <display value=&quot;Production Scale&quot;/>
                        </valueCoding>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-processParameter-local-pq&quot;/>
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
                    <title value=&quot;Step 1 Yield&quot;/>
                    <description value=&quot;Description of this step&quot;/>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingStep-local-pq&quot;/>
                            <code value=&quot;particleSizeReduction&quot;/>
                            <display value=&quot;Particle Size Reduction&quot;/>
                        </coding>
                        <!--text value=&quot;Step 2 in the process - free text is possible&quot;/-->
                    </code>
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/startingMaterial&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Starting material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;StartingMaterial&quot;/>
                                <display value=&quot;Starting Material&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/intermediateMaterial&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Intermediate material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;IntermediateMaterial&quot;/>
                                <display value=&quot;Intermediate Material&quot;/>
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
                            <display value=&quot;Resulting material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;ResultingMaterial&quot;/>
                                <display value=&quot;Resulting Material&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Step1Yield&quot;/>
                    </action>
                </action>
                <action>
                    <title value=&quot;Step 1 In-Process Control Data&quot;/>
                    <code>
                        <coding>
                            <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/manufacturing-step&quot;/>
                            <code value=&quot;Step1In-ProcessControlData&quot;/>
                            <display value=&quot;Step 1 In-Process Control Data&quot;/>
                        </coding>
                    </code>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/ResidualWaterContent&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/ResidualStartingMaterial1byHPLC&quot;/>
                    </action>
                </action>
                <action>
                    <title value=&quot;Step 1 DS Release Testing Results&quot;/>
                    <code>
                        <coding>
                            <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/manufacturing-step&quot;/>
                            <code value=&quot;Step1DSReleaseTestingResults&quot;/>
                            <display value=&quot;Step 1 DS Release Testing Results&quot;/>
                        </coding>
                    </code>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/AppearanceSubstance&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/IdentificationSubstance&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/AssaySubstance&quot;/>
                    </action>
                </action>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-step-scale-pq&quot;>
                        <valueCoding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingStepScale-local-pq&quot;/>
                            <code value=&quot;ABCD&quot;/>
                            <display value=&quot;Production Scale&quot;/>
                        </valueCoding>
                    </extension>
                    <prefix value=&quot;2&quot;/>
                    <title value=&quot;Step 2 Yield&quot;/>
                    <description value=&quot;Description of this step&quot;/>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingStep-local-pq&quot;/>
                            <code value=&quot;drying&quot;/>
                            <display value=&quot;Drying&quot;/>
                        </coding>
                        <!--text value=&quot;Step 2 in the process - free text is possible&quot;/-->
                    </code>
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/startingMaterialStep2&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Starting material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;StartingMaterial&quot;/>
                                <display value=&quot;Starting Material&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/intermediateMaterialStep2&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Intermediate material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;IntermediateMaterial&quot;/>
                                <display value=&quot;Intermediate Material&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/resultingMaterialStep2&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Resulting material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;ResultingMaterial&quot;/>
                                <display value=&quot;Resulting Material&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Step2Yield&quot;/>
                    </action>
                </action>">Subject: </span>Stelbatolol (<a href="#SubstanceDefinition-substancedefinition-component-substance-dxpq-ex1" title="click to see target - id=substancedefinition-component-substance-dxpq-ex1">SubstanceDefinition</a>)<span class="debugOff"> id: substancedefinition-component-substance-dxpq-ex1</span></span><div class="indent summaryUnit planl2" ondblclick="summaryHandler(event)"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-step-scale-pq&quot;>
                        <valueCoding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingStepScale-local-pq&quot;/>
                            <code value=&quot;ABCD&quot;/>
                            <display value=&quot;Production Scale&quot;/>
                        </valueCoding>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-processParameter-local-pq&quot;/>
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
                    <title value=&quot;Step 1 Yield&quot;/>
                    <description value=&quot;Description of this step&quot;/>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingStep-local-pq&quot;/>
                            <code value=&quot;particleSizeReduction&quot;/>
                            <display value=&quot;Particle Size Reduction&quot;/>
                        </coding>
                        <!--text value=&quot;Step 2 in the process - free text is possible&quot;/-->
                    </code>
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/startingMaterial&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Starting material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;StartingMaterial&quot;/>
                                <display value=&quot;Starting Material&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/intermediateMaterial&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Intermediate material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;IntermediateMaterial&quot;/>
                                <display value=&quot;Intermediate Material&quot;/>
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
                            <display value=&quot;Resulting material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;ResultingMaterial&quot;/>
                                <display value=&quot;Resulting Material&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Step1Yield&quot;/>
                    </action>"><a id="urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763f"><span>Action</span></a><span class="summaryShowsOff"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <prefix value=&quot;1&quot;>"> - 1</span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <title value=&quot;Step 1 Yield&quot;>"> - Step 1 Yield</span> - <span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingStep-local-pq&quot;/>
                            <code value=&quot;particleSizeReduction&quot;/>
                            <display value=&quot;Particle Size Reduction&quot;/>">Particle Size Reduction<span class="greyOff"> [particleSizeReduction]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingStep-local-pq)</span></span></span></span><div class="summaryHiddenOff">
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
                    <title value=&quot;Step 1 Yield&quot;>">Title: </span><span>Step 1 Yield</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingStep-local-pq&quot;/>
                            <code value=&quot;particleSizeReduction&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingStep-local-pq&quot;/>
                            <code value=&quot;particleSizeReduction&quot;/>
                            <display value=&quot;Particle Size Reduction&quot;/>">Particle Size Reduction<span class="greyOff"> [particleSizeReduction]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingStep-local-pq)</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <description value=&quot;Description of this step&quot;>">Description: </span><span>Description of this step</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-step-scale-pq&quot;>
                        <valueCoding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingStepScale-local-pq&quot;/>
                            <code value=&quot;ABCD&quot;/>
                            <display value=&quot;Production Scale&quot;/>
                        </valueCoding>">Scale: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-step-scale-pq&quot;>
                        <valueCoding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingStepScale-local-pq&quot;/>
                            <code value=&quot;ABCD&quot;/>
                            <display value=&quot;Production Scale&quot;/>">Production Scale<span class="greyOff"> [ABCD]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingStepScale-local-pq)</span></span></div>
<div class="indent planl3 summaryHiddenOff" title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-processParameter-local-pq&quot;/>
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
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-processParameter-local-pq&quot;/>
                                    <code value=&quot;SPEED&quot;/>
                                    <display value=&quot;Mix speed&quot;/>
                                </coding>
                            </valueCodeableConcept>">Parameter: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-processParameter-local-pq&quot;/>
                                    <code value=&quot;SPEED&quot;/>
                                    <display value=&quot;Mix speed&quot;/>">Mix speed<span class="greyOff"> [SPEED]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-processParameter-local-pq)</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
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
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
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
                    ...
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/startingMaterial&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Starting material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;StartingMaterial&quot;/>
                                <display value=&quot;Starting Material&quot;/>
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
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;StartingMaterial&quot;/>
                                <display value=&quot;Starting Material&quot;/>
                            </coding>">Role: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <participant>
                        <role>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;StartingMaterial&quot;/>
                                <display value=&quot;Starting Material&quot;/>">Starting Material<span class="greyOff"> [StartingMaterial]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq)</span></span></span></div>
<div>
<div class="indent org"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <participant>
                        <typeReference>
                            ...
                            <display value=&quot;Starting material&quot;>">Display: Starting material</span></div>
</div>
<div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (PlanDefinition/valueReference, id: validationProtocol fullUrl: urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763furl (canonical): http://example-server.com/fhir/PlanDefinition/2038e4c7-22b8-4c56-2d28-6c077648763f)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Substance/code, id: actual-batch-substance-starting-1 fullUrl: urn:uuid:fc178762-81c5-5656-9744-13c7ad1e595b)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Substance/code, id: actual-batch-substance-starting-2 fullUrl: urn:uuid:fc178762-81d5-5656-9744-13c7ad1e595b)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Substance/code, id: actual-batch-substance-starting-3 fullUrl: urn:uuid:fc178762-81d5-5656-9744-23c7ad1e595b)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: startingMaterial)(fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821153)

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
<div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: startingMaterial fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821153)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: intermediateMaterial fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821155)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: startingMaterialStep2 fullUrl: urn:uuid:c458791f-8cb8-428e-83f7-8a205f821153)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: intermediateMaterialStep2 fullUrl: urn:uuid:c458791f-7cb8-428e-84f7-8a205f821155)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: substance-manufacturer)(fullUrl: urn:uuid:23dbbd32-2962-9fc3-40b1-67e864f21cd2)

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
<div class="debugOff"> fullUrl: urn:uuid:23dbbd32-2962-9fc3-40b1-67e864f21cd2</div><span class="summaryShowsOff"> - AAA Molybdenum Products, Inc.</span><div class="summaryHiddenOff">
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
<div class="indent sbddetails"><span title="Substance resource extension linking back to SubstanceDefinition: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-pq">Batch Instance</span><div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Substance/valueReference, id: actual-batch-substance-itermediate-1 fullUrl: urn:uuid:fc178763-81c5-5656-9744-13c7ad1e595b)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Substance (id: actual-batch-substance-starting-1)(fullUrl: urn:uuid:fc178762-81c5-5656-9744-13c7ad1e595b)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq 

<Bundle>
    <entry>
        <resource>
            <Substance>
                <id value=&quot;actual-batch-substance-starting-1&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq&quot;/>
                </meta>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-01&quot;/>
                        <!-- #159 -->
                    </extension>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;8.1&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                </extension>
                <identifier>
                    <value value=&quot;Start1Amgen&quot;/>
                </identifier>
                <instance value=&quot;true&quot;/>
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/startingMaterial&quot;/>
                    </reference>
                </code>" id="Substance-actual-batch-substance-starting-1">Substance</span></a><span class="summaryShowsOff"><b> - Start1Amgen</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substance.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substance.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substance.html#tt-uml">R6</a>]</span><div class="debugOff">id: actual-batch-substance-starting-1</div><div class="debugOff"> fullUrl: urn:uuid:fc178762-81c5-5656-9744-13c7ad1e595b</div><div class="debugOff"></div><div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq&quot;>">Profile: </span><span>http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq</span></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <instance value=&quot;true&quot;>">Instance: </span><span><span>true</span></span></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;Start1Amgen&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;Start1Amgen&quot;/>">Start1Amgen</span></div><div><div class="indent sbddetails"><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/startingMaterial&quot;/>
                    </reference>">Definition: </span>Stelbatosubstance (<a href="#SubstanceDefinition-startingMaterial" title="click to see target - id=startingMaterial">SubstanceDefinition</a>)<span class="debugOff"> id: startingMaterial</span></span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-01&quot;/>
                        <!-- #159 -->
                    </extension>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;8.1&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>">Manufacturing</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-01&quot;>">Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-01&quot;>">2019-09-01</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;8.1&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->">Quantity: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;8.1&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->">8.1 kg</span></div></div></div></div><div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Substance/valueReference, id: actual-batch-substance-itermediate-2 fullUrl: urn:uuid:fc178764-81d5-5656-9744-13c7ad1e595b)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Substance (id: actual-batch-substance-starting-2)(fullUrl: urn:uuid:fc178762-81d5-5656-9744-13c7ad1e595b)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq 

<Bundle>
    <entry>
        <resource>
            <Substance>
                <id value=&quot;actual-batch-substance-starting-2&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq&quot;/>
                </meta>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-01&quot;/>
                        <!-- #159 -->
                    </extension>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;8.2&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                </extension>
                <identifier>
                    <value value=&quot;Start2Amgen&quot;/>
                </identifier>
                <instance value=&quot;true&quot;/>
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/startingMaterial&quot;/>
                    </reference>
                </code>" id="Substance-actual-batch-substance-starting-2">Substance</span></a><span class="summaryShowsOff"><b> - Start2Amgen</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substance.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substance.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substance.html#tt-uml">R6</a>]</span><div class="debugOff">id: actual-batch-substance-starting-2</div><div class="debugOff"> fullUrl: urn:uuid:fc178762-81d5-5656-9744-13c7ad1e595b</div><div class="debugOff"></div><div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq&quot;>">Profile: </span><span>http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq</span></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <instance value=&quot;true&quot;>">Instance: </span><span><span>true</span></span></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;Start2Amgen&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;Start2Amgen&quot;/>">Start2Amgen</span></div><div><div class="indent sbddetails"><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/startingMaterial&quot;/>
                    </reference>">Definition: </span>Stelbatosubstance (<a href="#SubstanceDefinition-startingMaterial" title="click to see target - id=startingMaterial">SubstanceDefinition</a>)<span class="debugOff"> id: startingMaterial</span></span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-01&quot;/>
                        <!-- #159 -->
                    </extension>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;8.2&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>">Manufacturing</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-01&quot;>">Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-01&quot;>">2019-09-01</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;8.2&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->">Quantity: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;8.2&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->">8.2 kg</span></div></div></div></div><div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Substance/valueReference, id: actual-batch-substance-itermediate-3 fullUrl: urn:uuid:fc178764-81d6-5656-9744-13c7ad1e595b)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Substance (id: actual-batch-substance-starting-3)(fullUrl: urn:uuid:fc178762-81d5-5656-9744-23c7ad1e595b)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq 

<Bundle>
    <entry>
        <resource>
            <Substance>
                <id value=&quot;actual-batch-substance-starting-3&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq&quot;/>
                </meta>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-01&quot;/>
                        <!-- #159 -->
                    </extension>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;8.3&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                </extension>
                <identifier>
                    <value value=&quot;Start3Amgen&quot;/>
                </identifier>
                <instance value=&quot;true&quot;/>
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/startingMaterial&quot;/>
                    </reference>
                </code>" id="Substance-actual-batch-substance-starting-3">Substance</span></a><span class="summaryShowsOff"><b> - Start3Amgen</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substance.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substance.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substance.html#tt-uml">R6</a>]</span><div class="debugOff">id: actual-batch-substance-starting-3</div><div class="debugOff"> fullUrl: urn:uuid:fc178762-81d5-5656-9744-23c7ad1e595b</div><div class="debugOff"></div><div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq&quot;>">Profile: </span><span>http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq</span></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <instance value=&quot;true&quot;>">Instance: </span><span><span>true</span></span></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;Start3Amgen&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;Start3Amgen&quot;/>">Start3Amgen</span></div><div><div class="indent sbddetails"><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/startingMaterial&quot;/>
                    </reference>">Definition: </span>Stelbatosubstance (<a href="#SubstanceDefinition-startingMaterial" title="click to see target - id=startingMaterial">SubstanceDefinition</a>)<span class="debugOff"> id: startingMaterial</span></span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-01&quot;/>
                        <!-- #159 -->
                    </extension>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;8.3&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>">Manufacturing</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-01&quot;>">Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-01&quot;>">2019-09-01</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;8.3&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->">Quantity: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;8.3&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->">8.3 kg</span></div></div></div></div>
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
                    ...
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/intermediateMaterial&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Intermediate material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;IntermediateMaterial&quot;/>
                                <display value=&quot;Intermediate Material&quot;/>
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
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;IntermediateMaterial&quot;/>
                                <display value=&quot;Intermediate Material&quot;/>
                            </coding>">Role: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <participant>
                        <role>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;IntermediateMaterial&quot;/>
                                <display value=&quot;Intermediate Material&quot;/>">Intermediate Material<span class="greyOff"> [IntermediateMaterial]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq)</span></span></span></div>
<div>
<div class="indent org"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <participant>
                        <typeReference>
                            ...
                            <display value=&quot;Intermediate material&quot;>">Display: Intermediate material</span></div>
</div>
<div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (PlanDefinition/valueReference, id: validationProtocol fullUrl: urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763furl (canonical): http://example-server.com/fhir/PlanDefinition/2038e4c7-22b8-4c56-2d28-6c077648763f)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Substance/code, id: actual-batch-substance-itermediate-1 fullUrl: urn:uuid:fc178763-81c5-5656-9744-13c7ad1e595b)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Substance/code, id: actual-batch-substance-itermediate-2 fullUrl: urn:uuid:fc178764-81d5-5656-9744-13c7ad1e595b)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Substance/code, id: actual-batch-substance-itermediate-3 fullUrl: urn:uuid:fc178764-81d6-5656-9744-13c7ad1e595b)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: intermediateMaterial)(fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821155)

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;intermediateMaterial&quot;/>
                <manufacturer>
                    <reference value=&quot;Organization/substance-manufacturer&quot;/>
                </manufacturer>
                <name>
                    <name value=&quot;Processohol&quot;/>
                </name>" id="SubstanceDefinition-intermediateMaterial">Substance</span></a><span class="summaryShowsOff"><b> - Processohol</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substancedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: intermediateMaterial</div>
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
<div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: startingMaterial fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821153)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: intermediateMaterial fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821155)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: startingMaterialStep2 fullUrl: urn:uuid:c458791f-8cb8-428e-83f7-8a205f821153)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: intermediateMaterialStep2 fullUrl: urn:uuid:c458791f-7cb8-428e-84f7-8a205f821155)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: substance-manufacturer)(fullUrl: urn:uuid:23dbbd32-2962-9fc3-40b1-67e864f21cd2)

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
<div class="debugOff"> fullUrl: urn:uuid:23dbbd32-2962-9fc3-40b1-67e864f21cd2</div><span class="summaryShowsOff"> - AAA Molybdenum Products, Inc.</span><div class="summaryHiddenOff">
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
<div class="indent sbddetails"><span title="Substance resource extension linking back to SubstanceDefinition: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-pq">Batch Instance</span><div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/subject, id: appearanceSubstance1 fullUrl: urn:uuid:9c56948c-2a39-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: identificationSubstance1 fullUrl: urn:uuid:9c56958c-2a39-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: step1Yield1 fullUrl: urn:uuid:9c56948c-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: residualWaterContent1 fullUrl: urn:uuid:9c56958c-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Substance (id: actual-batch-substance-itermediate-1)(fullUrl: urn:uuid:fc178763-81c5-5656-9744-13c7ad1e595b)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq 

<Bundle>
    <entry>
        <resource>
            <Substance>
                <id value=&quot;actual-batch-substance-itermediate-1&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq&quot;/>
                </meta>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;9.1&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-derived-from-pq&quot;>
                        <!-- assumes 1 to 1, could also be done via a Procedure but overkill -->
                        <valueReference>
                            <reference value=&quot;Substance/actual-batch-substance-starting-1&quot;/>
                        </valueReference>
                    </extension>
                </extension>
                <identifier>
                    <value value=&quot;Intermed1Amgen&quot;/>
                </identifier>
                <instance value=&quot;true&quot;/>
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/intermediateMaterial&quot;/>
                    </reference>
                </code>" id="Substance-actual-batch-substance-itermediate-1">Substance</span></a><span class="summaryShowsOff"><b> - Intermed1Amgen</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substance.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substance.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substance.html#tt-uml">R6</a>]</span><div class="debugOff">id: actual-batch-substance-itermediate-1</div><div class="debugOff"> fullUrl: urn:uuid:fc178763-81c5-5656-9744-13c7ad1e595b</div><div class="debugOff"></div><div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq&quot;>">Profile: </span><span>http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq</span></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <instance value=&quot;true&quot;>">Instance: </span><span><span>true</span></span></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;Intermed1Amgen&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;Intermed1Amgen&quot;/>">Intermed1Amgen</span></div><div><div class="indent sbddetails"><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/intermediateMaterial&quot;/>
                    </reference>">Definition: </span>Processohol (<a href="#SubstanceDefinition-intermediateMaterial" title="click to see target - id=intermediateMaterial">SubstanceDefinition</a>)<span class="debugOff"> id: intermediateMaterial</span></span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;9.1&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-derived-from-pq&quot;>
                        <!-- assumes 1 to 1, could also be done via a Procedure but overkill -->
                        <valueReference>
                            <reference value=&quot;Substance/actual-batch-substance-starting-1&quot;/>
                        </valueReference>
                    </extension>">Manufacturing</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;9.1&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->">Quantity: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;9.1&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->">9.1 kg</span></div><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    ...
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-derived-from-pq&quot;>
                        <!-- assumes 1 to 1, could also be done via a Procedure but overkill -->
                        <valueReference>
                            <reference value=&quot;Substance/actual-batch-substance-starting-1&quot;/>
                        </valueReference>">Derived From</span>: Start1Amgen (<a href="#Substance-actual-batch-substance-starting-1" title="click to see target - id=actual-batch-substance-starting-1">Substance</a>)<span class="debugOff"> id: actual-batch-substance-starting-1</span></span></div></div></div><div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/subject, id: appearanceSubstance2 fullUrl: urn:uuid:9c56948c-2a49-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: identificationSubstance2 fullUrl: urn:uuid:9c56968c-2a49-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: step1Yield2 fullUrl: urn:uuid:9c56948a-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: residualWaterContent2 fullUrl: urn:uuid:9c56968a-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Substance (id: actual-batch-substance-itermediate-2)(fullUrl: urn:uuid:fc178764-81d5-5656-9744-13c7ad1e595b)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq 

<Bundle>
    <entry>
        <resource>
            <Substance>
                <id value=&quot;actual-batch-substance-itermediate-2&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq&quot;/>
                </meta>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;9.2&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-derived-from-pq&quot;>
                        <!-- assumes 1 to 1, could also be done via a Procedure but overkill -->
                        <valueReference>
                            <reference value=&quot;Substance/actual-batch-substance-starting-2&quot;/>
                        </valueReference>
                    </extension>
                </extension>
                <identifier>
                    <value value=&quot;Intermed2Amgen&quot;/>
                </identifier>
                <instance value=&quot;true&quot;/>
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/intermediateMaterial&quot;/>
                    </reference>
                </code>" id="Substance-actual-batch-substance-itermediate-2">Substance</span></a><span class="summaryShowsOff"><b> - Intermed2Amgen</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substance.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substance.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substance.html#tt-uml">R6</a>]</span><div class="debugOff">id: actual-batch-substance-itermediate-2</div><div class="debugOff"> fullUrl: urn:uuid:fc178764-81d5-5656-9744-13c7ad1e595b</div><div class="debugOff"></div><div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq&quot;>">Profile: </span><span>http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq</span></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <instance value=&quot;true&quot;>">Instance: </span><span><span>true</span></span></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;Intermed2Amgen&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;Intermed2Amgen&quot;/>">Intermed2Amgen</span></div><div><div class="indent sbddetails"><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/intermediateMaterial&quot;/>
                    </reference>">Definition: </span>Processohol (<a href="#SubstanceDefinition-intermediateMaterial" title="click to see target - id=intermediateMaterial">SubstanceDefinition</a>)<span class="debugOff"> id: intermediateMaterial</span></span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;9.2&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-derived-from-pq&quot;>
                        <!-- assumes 1 to 1, could also be done via a Procedure but overkill -->
                        <valueReference>
                            <reference value=&quot;Substance/actual-batch-substance-starting-2&quot;/>
                        </valueReference>
                    </extension>">Manufacturing</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;9.2&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->">Quantity: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;9.2&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->">9.2 kg</span></div><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    ...
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-derived-from-pq&quot;>
                        <!-- assumes 1 to 1, could also be done via a Procedure but overkill -->
                        <valueReference>
                            <reference value=&quot;Substance/actual-batch-substance-starting-2&quot;/>
                        </valueReference>">Derived From</span>: Start2Amgen (<a href="#Substance-actual-batch-substance-starting-2" title="click to see target - id=actual-batch-substance-starting-2">Substance</a>)<span class="debugOff"> id: actual-batch-substance-starting-2</span></span></div></div></div><div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/subject, id: appearanceSubstance3 fullUrl: urn:uuid:9c56948c-2a39-6609-2c01-4d197eb57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: identificationSubstance3 fullUrl: urn:uuid:9c56978c-2a39-6609-2c01-4d197eb57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: step1Yield3 fullUrl: urn:uuid:9c56948a-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: residualWaterContent3 fullUrl: urn:uuid:9c56978a-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Substance (id: actual-batch-substance-itermediate-3)(fullUrl: urn:uuid:fc178764-81d6-5656-9744-13c7ad1e595b)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq 

<Bundle>
    <entry>
        <resource>
            <Substance>
                <id value=&quot;actual-batch-substance-itermediate-3&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq&quot;/>
                </meta>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;9.3&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-derived-from-pq&quot;>
                        <!-- assumes 1 to 1, could also be done via a Procedure but overkill -->
                        <valueReference>
                            <reference value=&quot;Substance/actual-batch-substance-starting-3&quot;/>
                        </valueReference>
                    </extension>
                </extension>
                <identifier>
                    <value value=&quot;Intermed3Amgen&quot;/>
                </identifier>
                <instance value=&quot;true&quot;/>
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/intermediateMaterial&quot;/>
                    </reference>
                </code>" id="Substance-actual-batch-substance-itermediate-3">Substance</span></a><span class="summaryShowsOff"><b> - Intermed3Amgen</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substance.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substance.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substance.html#tt-uml">R6</a>]</span><div class="debugOff">id: actual-batch-substance-itermediate-3</div><div class="debugOff"> fullUrl: urn:uuid:fc178764-81d6-5656-9744-13c7ad1e595b</div><div class="debugOff"></div><div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq&quot;>">Profile: </span><span>http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq</span></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <instance value=&quot;true&quot;>">Instance: </span><span><span>true</span></span></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;Intermed3Amgen&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;Intermed3Amgen&quot;/>">Intermed3Amgen</span></div><div><div class="indent sbddetails"><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/intermediateMaterial&quot;/>
                    </reference>">Definition: </span>Processohol (<a href="#SubstanceDefinition-intermediateMaterial" title="click to see target - id=intermediateMaterial">SubstanceDefinition</a>)<span class="debugOff"> id: intermediateMaterial</span></span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;9.3&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-derived-from-pq&quot;>
                        <!-- assumes 1 to 1, could also be done via a Procedure but overkill -->
                        <valueReference>
                            <reference value=&quot;Substance/actual-batch-substance-starting-3&quot;/>
                        </valueReference>
                    </extension>">Manufacturing</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;9.3&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->">Quantity: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;9.3&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->">9.3 kg</span></div><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    ...
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-derived-from-pq&quot;>
                        <!-- assumes 1 to 1, could also be done via a Procedure but overkill -->
                        <valueReference>
                            <reference value=&quot;Substance/actual-batch-substance-starting-3&quot;/>
                        </valueReference>">Derived From</span>: Start3Amgen (<a href="#Substance-actual-batch-substance-starting-3" title="click to see target - id=actual-batch-substance-starting-3">Substance</a>)<span class="debugOff"> id: actual-batch-substance-starting-3</span></span></div></div></div>
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
                    ...
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/resultingMaterial&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Resulting material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;ResultingMaterial&quot;/>
                                <display value=&quot;Resulting Material&quot;/>
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
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;ResultingMaterial&quot;/>
                                <display value=&quot;Resulting Material&quot;/>
                            </coding>">Role: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <participant>
                        <role>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;ResultingMaterial&quot;/>
                                <display value=&quot;Resulting Material&quot;/>">Resulting Material<span class="greyOff"> [ResultingMaterial]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq)</span></span></span></div>
<div>
<div class="indent org"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <participant>
                        <typeReference>
                            ...
                            <display value=&quot;Resulting material&quot;>">Display: Resulting material</span></div>
</div>
<div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (PlanDefinition/valueReference, id: validationProtocol fullUrl: urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763furl (canonical): http://example-server.com/fhir/PlanDefinition/2038e4c7-22b8-4c56-2d28-6c077648763f)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: resultingMaterial)(fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821154)

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
<div class="indent summaryUnit planl2" ondblclick="summaryHandler(event)"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Step1Yield&quot;/>"><a id="urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763f"><span>Action</span></a><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>">Code: </span><span style="white-space:normal;">Test</span></div>
<div ondblclick="summaryHandler(event)" class="indent summaryUnit obsDef">
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: validationProtocol fullUrl: urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763furl (canonical): http://example-server.com/fhir/PlanDefinition/2038e4c7-22b8-4c56-2d28-6c077648763f)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: step1Yield1 fullUrl: urn:uuid:9c56948c-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: step1Yield2 fullUrl: urn:uuid:9c56948a-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: step1Yield3 fullUrl: urn:uuid:9c56948a-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: Step1Yield)(fullUrl: urn:uuid:fd17b5d6-9fe1-91c2-2d06-47cb5b295e72)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Step1Yield&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/fd17b5d6-9fe1-91c2-2d06-47cb5b295e72&quot;/>
                <title value=&quot;Yield (%)&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Yield (%)&quot;/>
                        <display value=&quot;Yield (%)&quot;/>
                    </coding>
                    <text value=&quot;Yield (%)&quot;/>
                </code>" id="ObservationDefinition-Step1Yield">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Yield (%)&quot;/>
                        <display value=&quot;Yield (%)&quot;/>">Yield (%)<span class="greyOff"> [Yield (%)]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: Yield (%)</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: Step1Yield</div>
<div class="debugOff"> fullUrl: urn:uuid:fd17b5d6-9fe1-91c2-2d06-47cb5b295e72</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/fd17b5d6-9fe1-91c2-2d06-47cb5b295e72</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Yield (%)&quot;>">Title: </span><span>Yield (%)</span></div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff">
<div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <status value=&quot;active&quot;>">Status: </span><span>active</span></div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Yield (%)&quot;/>
                        <display value=&quot;Yield (%)&quot;/>
                    </coding>
                    <text value=&quot;Yield (%)&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Yield (%)&quot;/>
                        <display value=&quot;Yield (%)&quot;/>">Yield (%)<span class="greyOff"> [Yield (%)]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: Yield (%)</span></span></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
</div>
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
                    <title value=&quot;Step 1 In-Process Control Data&quot;/>
                    <code>
                        <coding>
                            <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/manufacturing-step&quot;/>
                            <code value=&quot;Step1In-ProcessControlData&quot;/>
                            <display value=&quot;Step 1 In-Process Control Data&quot;/>
                        </coding>
                    </code>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/ResidualWaterContent&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/ResidualStartingMaterial1byHPLC&quot;/>
                    </action>"><a id="urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763f"><span>Action</span></a><span class="summaryShowsOff"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <title value=&quot;Step 1 In-Process Control Data&quot;>"> - Step 1 In-Process Control Data</span> - <span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <code>
                        <coding>
                            <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/manufacturing-step&quot;/>
                            <code value=&quot;Step1In-ProcessControlData&quot;/>
                            <display value=&quot;Step 1 In-Process Control Data&quot;/>">Step 1 In-Process Control Data<span class="greyOff"> [Step1In-ProcessControlData]</span><span class="greyOff"> (http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/manufacturing-step)</span></span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <title value=&quot;Step 1 In-Process Control Data&quot;>">Title: </span><span>Step 1 In-Process Control Data</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <code>
                        <coding>
                            <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/manufacturing-step&quot;/>
                            <code value=&quot;Step1In-ProcessControlData&quot;/>
                            <display value=&quot;Step 1 In-Process Control Data&quot;/>
                        </coding>">Code: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <code>
                        <coding>
                            <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/manufacturing-step&quot;/>
                            <code value=&quot;Step1In-ProcessControlData&quot;/>
                            <display value=&quot;Step 1 In-Process Control Data&quot;/>">Step 1 In-Process Control Data<span class="greyOff"> [Step1In-ProcessControlData]</span><span class="greyOff"> (http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/manufacturing-step)</span></span></div>
</div>
<div class="indent summaryUnit planl2" ondblclick="summaryHandler(event)"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/ResidualWaterContent&quot;/>"><a id="urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763f"><span>Action</span></a><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>">Code: </span><span style="white-space:normal;">Test</span></div>
<div ondblclick="summaryHandler(event)" class="indent summaryUnit obsDef">
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: validationProtocol fullUrl: urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763furl (canonical): http://example-server.com/fhir/PlanDefinition/2038e4c7-22b8-4c56-2d28-6c077648763f)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: residualWaterContent1 fullUrl: urn:uuid:9c56958c-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: residualWaterContent2 fullUrl: urn:uuid:9c56968a-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: residualWaterContent3 fullUrl: urn:uuid:9c56978a-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: ResidualWaterContent)(fullUrl: urn:uuid:fc27b5d6-9fe1-91c2-2d16-57cb5b295e72)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;ResidualWaterContent&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/fc27b5d6-9fe1-91c2-2d16-57cb5b295e72&quot;/>
                <title value=&quot;Residual Water Content (w/w%)&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;ResidualWaterContent&quot;/>
                        <display value=&quot;Residual Water Content (w/w%)&quot;/>
                    </coding>
                    <text value=&quot;Residual Water Content (w/w%)&quot;/>
                </code>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-criticality-pq&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-qualifiedValueCriticality-local-pq&quot;/>
                                <code value=&quot;Non-critical&quot;/>
                                <display value=&quot;Non-critical&quot;/>
                            </coding>
                            <text value=&quot;Non-critical&quot;/>
                        </valueCodeableConcept>
                    </extension>
                    <range>
                        <high>
                            <value value=&quot;7.15&quot;/>
                            <unit value=&quot;%&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%&quot;/>
                        </high>
                    </range>
                </qualifiedValue>" id="ObservationDefinition-ResidualWaterContent">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;ResidualWaterContent&quot;/>
                        <display value=&quot;Residual Water Content (w/w%)&quot;/>">Residual Water Content (w/w%)<span class="greyOff"> [ResidualWaterContent]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: Residual Water Content (w/w%)</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: ResidualWaterContent</div>
<div class="debugOff"> fullUrl: urn:uuid:fc27b5d6-9fe1-91c2-2d16-57cb5b295e72</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/fc27b5d6-9fe1-91c2-2d16-57cb5b295e72</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Residual Water Content (w/w%)&quot;>">Title: </span><span>Residual Water Content (w/w%)</span></div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff">
<div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <status value=&quot;active&quot;>">Status: </span><span>active</span></div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;ResidualWaterContent&quot;/>
                        <display value=&quot;Residual Water Content (w/w%)&quot;/>
                    </coding>
                    <text value=&quot;Residual Water Content (w/w%)&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;ResidualWaterContent&quot;/>
                        <display value=&quot;Residual Water Content (w/w%)&quot;/>">Residual Water Content (w/w%)<span class="greyOff"> [ResidualWaterContent]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: Residual Water Content (w/w%)</span></span></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="indent obsDefl2" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-criticality-pq&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-qualifiedValueCriticality-local-pq&quot;/>
                                <code value=&quot;Non-critical&quot;/>
                                <display value=&quot;Non-critical&quot;/>
                            </coding>
                            <text value=&quot;Non-critical&quot;/>
                        </valueCodeableConcept>
                    </extension>
                    <range>
                        <high>
                            <value value=&quot;7.15&quot;/>
                            <unit value=&quot;%&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%&quot;/>
                        </high>
                    </range>">
		Acceptable Value
		<div title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-criticality-pq&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-qualifiedValueCriticality-local-pq&quot;/>
                                <code value=&quot;Non-critical&quot;/>
                                <display value=&quot;Non-critical&quot;/>
                            </coding>
                            <text value=&quot;Non-critical&quot;/>
                        </valueCodeableConcept>
                    </extension>
                    <range>
                        <high>
                            <value value=&quot;7.15&quot;/>
                            <unit value=&quot;%&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%&quot;/>
                        </high>
                    </range>">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    ...
                    <range>
                        <high>
                            <value value=&quot;7.15&quot;/>
                            <unit value=&quot;%&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%&quot;/>
                        </high>">Range: </span> to <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        <high>
                            <value value=&quot;7.15&quot;/>
                            <unit value=&quot;%&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%&quot;/>">7.15%</span><span class="greyOff"> [%] (http://unitsofmeasure.org)</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-criticality-pq&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-qualifiedValueCriticality-local-pq&quot;/>
                                <code value=&quot;Non-critical&quot;/>
                                <display value=&quot;Non-critical&quot;/>
                            </coding>
                            <text value=&quot;Non-critical&quot;/>
                        </valueCodeableConcept>">Criticality: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-criticality-pq&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-qualifiedValueCriticality-local-pq&quot;/>
                                <code value=&quot;Non-critical&quot;/>
                                <display value=&quot;Non-critical&quot;/>">Non-critical<span class="greyOff"> [Non-critical]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-qualifiedValueCriticality-local-pq)</span></span><span style="white-space:normal;"> - Text: Non-critical</span></div>
</div>
</div>
<div class="summaryHiddenOff"></div>
</div>
</div>
</div>
<div class="indent summaryUnit planl2" ondblclick="summaryHandler(event)"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/ResidualStartingMaterial1byHPLC&quot;/>"><a id="urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763f"><span>Action</span></a><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>">Code: </span><span style="white-space:normal;">Test</span></div>
<div ondblclick="summaryHandler(event)" class="indent summaryUnit obsDef">
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: validationProtocol fullUrl: urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763furl (canonical): http://example-server.com/fhir/PlanDefinition/2038e4c7-22b8-4c56-2d28-6c077648763f)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: ResidualStartingMaterial1byHPLC)(fullUrl: urn:uuid:fc27b5d6-9ff1-91c2-2d16-57cb5b295e72)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;ResidualStartingMaterial1byHPLC&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/fc27b5d6-9ff1-91c2-2d16-57cb5b295e72&quot;/>
                <title value=&quot;Reaction conversion: residual starting material 1 by HPLC (Step Aa) (LC area %)&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Reaction conversion: Residual Starting Material 1 by HPLC&quot;/>
                        <display value=&quot;Reaction conversion: Residual Starting Material 1 by HPLC&quot;/>
                    </coding>
                    <text value=&quot;Reaction conversion: Residual Starting Material 1 by HPLC&quot;/>
                </code>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-criticality-pq&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-qualifiedValueCriticality-local-pq&quot;/>
                                <code value=&quot;critical&quot;/>
                                <display value=&quot;Critical&quot;/>
                            </coding>
                            <text value=&quot;Critical&quot;/>
                        </valueCodeableConcept>
                    </extension>
                    <range>
                        <high>
                            <value value=&quot;23&quot;/>
                            <unit value=&quot;%&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%&quot;/>
                        </high>
                    </range>
                </qualifiedValue>" id="ObservationDefinition-ResidualStartingMaterial1byHPLC">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Reaction conversion: Residual Starting Material 1 by HPLC&quot;/>
                        <display value=&quot;Reaction conversion: Residual Starting Material 1 by HPLC&quot;/>">Reaction conversion: Residual Starting Material 1 by HPLC<span class="greyOff"> [Reaction conversion: Residual Starting Material 1 by HPLC]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: Reaction conversion: Residual Starting Material 1 by HPLC</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: ResidualStartingMaterial1byHPLC</div>
<div class="debugOff"> fullUrl: urn:uuid:fc27b5d6-9ff1-91c2-2d16-57cb5b295e72</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/fc27b5d6-9ff1-91c2-2d16-57cb5b295e72</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Reaction conversion: residual starting material 1 by HPLC (Step Aa) (LC area %)&quot;>">Title: </span><span>Reaction conversion: residual starting material 1 by HPLC (Step Aa) (LC area %)</span></div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff">
<div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <status value=&quot;active&quot;>">Status: </span><span>active</span></div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Reaction conversion: Residual Starting Material 1 by HPLC&quot;/>
                        <display value=&quot;Reaction conversion: Residual Starting Material 1 by HPLC&quot;/>
                    </coding>
                    <text value=&quot;Reaction conversion: Residual Starting Material 1 by HPLC&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Reaction conversion: Residual Starting Material 1 by HPLC&quot;/>
                        <display value=&quot;Reaction conversion: Residual Starting Material 1 by HPLC&quot;/>">Reaction conversion: Residual Starting Material 1 by HPLC<span class="greyOff"> [Reaction conversion: Residual Starting Material 1 by HPLC]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: Reaction conversion: Residual Starting Material 1 by HPLC</span></span></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="indent obsDefl2" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-criticality-pq&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-qualifiedValueCriticality-local-pq&quot;/>
                                <code value=&quot;critical&quot;/>
                                <display value=&quot;Critical&quot;/>
                            </coding>
                            <text value=&quot;Critical&quot;/>
                        </valueCodeableConcept>
                    </extension>
                    <range>
                        <high>
                            <value value=&quot;23&quot;/>
                            <unit value=&quot;%&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%&quot;/>
                        </high>
                    </range>">
		Acceptable Value
		<div title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-criticality-pq&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-qualifiedValueCriticality-local-pq&quot;/>
                                <code value=&quot;critical&quot;/>
                                <display value=&quot;Critical&quot;/>
                            </coding>
                            <text value=&quot;Critical&quot;/>
                        </valueCodeableConcept>
                    </extension>
                    <range>
                        <high>
                            <value value=&quot;23&quot;/>
                            <unit value=&quot;%&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%&quot;/>
                        </high>
                    </range>">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    ...
                    <range>
                        <high>
                            <value value=&quot;23&quot;/>
                            <unit value=&quot;%&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%&quot;/>
                        </high>">Range: </span> to <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        <high>
                            <value value=&quot;23&quot;/>
                            <unit value=&quot;%&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%&quot;/>">23%</span><span class="greyOff"> [%] (http://unitsofmeasure.org)</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-criticality-pq&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-qualifiedValueCriticality-local-pq&quot;/>
                                <code value=&quot;critical&quot;/>
                                <display value=&quot;Critical&quot;/>
                            </coding>
                            <text value=&quot;Critical&quot;/>
                        </valueCodeableConcept>">Criticality: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-criticality-pq&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-qualifiedValueCriticality-local-pq&quot;/>
                                <code value=&quot;critical&quot;/>
                                <display value=&quot;Critical&quot;/>">Critical<span class="greyOff"> [critical]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-qualifiedValueCriticality-local-pq)</span></span><span style="white-space:normal;"> - Text: Critical</span></div>
</div>
</div>
<div class="summaryHiddenOff"></div>
</div>
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
                    <title value=&quot;Step 1 DS Release Testing Results&quot;/>
                    <code>
                        <coding>
                            <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/manufacturing-step&quot;/>
                            <code value=&quot;Step1DSReleaseTestingResults&quot;/>
                            <display value=&quot;Step 1 DS Release Testing Results&quot;/>
                        </coding>
                    </code>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/AppearanceSubstance&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/IdentificationSubstance&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/AssaySubstance&quot;/>
                    </action>"><a id="urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763f"><span>Action</span></a><span class="summaryShowsOff"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <title value=&quot;Step 1 DS Release Testing Results&quot;>"> - Step 1 DS Release Testing Results</span> - <span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <code>
                        <coding>
                            <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/manufacturing-step&quot;/>
                            <code value=&quot;Step1DSReleaseTestingResults&quot;/>
                            <display value=&quot;Step 1 DS Release Testing Results&quot;/>">Step 1 DS Release Testing Results<span class="greyOff"> [Step1DSReleaseTestingResults]</span><span class="greyOff"> (http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/manufacturing-step)</span></span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <title value=&quot;Step 1 DS Release Testing Results&quot;>">Title: </span><span>Step 1 DS Release Testing Results</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <code>
                        <coding>
                            <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/manufacturing-step&quot;/>
                            <code value=&quot;Step1DSReleaseTestingResults&quot;/>
                            <display value=&quot;Step 1 DS Release Testing Results&quot;/>
                        </coding>">Code: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <code>
                        <coding>
                            <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/manufacturing-step&quot;/>
                            <code value=&quot;Step1DSReleaseTestingResults&quot;/>
                            <display value=&quot;Step 1 DS Release Testing Results&quot;/>">Step 1 DS Release Testing Results<span class="greyOff"> [Step1DSReleaseTestingResults]</span><span class="greyOff"> (http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/manufacturing-step)</span></span></div>
</div>
<div class="indent summaryUnit planl2" ondblclick="summaryHandler(event)"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/AppearanceSubstance&quot;/>"><a id="urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763f"><span>Action</span></a><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>">Code: </span><span style="white-space:normal;">Test</span></div>
<div ondblclick="summaryHandler(event)" class="indent summaryUnit obsDef">
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: validationProtocol fullUrl: urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763furl (canonical): http://example-server.com/fhir/PlanDefinition/2038e4c7-22b8-4c56-2d28-6c077648763f)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: appearanceSubstance1 fullUrl: urn:uuid:9c56948c-2a39-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: appearanceSubstance2 fullUrl: urn:uuid:9c56948c-2a49-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: appearanceSubstance3 fullUrl: urn:uuid:9c56948c-2a39-6609-2c01-4d197eb57a33)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: AppearanceSubstance)(fullUrl: urn:uuid:fc07b5d5-9fe1-92c2-2d06-57cb5b295e72)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;AppearanceSubstance&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/fc07b5d5-9fe1-92c2-2d06-57cb5b295e72&quot;/>
                <title value=&quot;Appearance&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Appearance&quot;/>
                        <display value=&quot;Appearance&quot;/>
                    </coding>
                    <text value=&quot;Appearance&quot;/>
                </code>
                <method>
                    <text value=&quot;Visual inspection&quot;/>
                </method>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;White to off-white, to red, to orange, to brown solid&quot;/>
                    </extension>
                </qualifiedValue>" id="ObservationDefinition-AppearanceSubstance">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Appearance&quot;/>
                        <display value=&quot;Appearance&quot;/>">Appearance<span class="greyOff"> [Appearance]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: Appearance</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: AppearanceSubstance</div>
<div class="debugOff"> fullUrl: urn:uuid:fc07b5d5-9fe1-92c2-2d06-57cb5b295e72</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/fc07b5d5-9fe1-92c2-2d06-57cb5b295e72</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Appearance&quot;>">Title: </span><span>Appearance</span></div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff">
<div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <status value=&quot;active&quot;>">Status: </span><span>active</span></div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Appearance&quot;/>
                        <display value=&quot;Appearance&quot;/>
                    </coding>
                    <text value=&quot;Appearance&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Appearance&quot;/>
                        <display value=&quot;Appearance&quot;/>">Appearance<span class="greyOff"> [Appearance]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: Appearance</span></span></div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <method>
                    <text value=&quot;Visual inspection&quot;/>">Method: </span><span><span style="white-space:normal;">Visual inspection</span></span></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="indent obsDefl2" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;White to off-white, to red, to orange, to brown solid&quot;/>
                    </extension>">
		Acceptable Value
		<div title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;White to off-white, to red, to orange, to brown solid&quot;/>
                    </extension>">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;White to off-white, to red, to orange, to brown solid&quot;/>">Text: </span><span>White to off-white, to red, to orange, to brown solid</span></div>
</div>
</div>
<div class="summaryHiddenOff"></div>
</div>
</div>
</div>
<div class="indent summaryUnit planl2" ondblclick="summaryHandler(event)"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/IdentificationSubstance&quot;/>"><a id="urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763f"><span>Action</span></a><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>">Code: </span><span style="white-space:normal;">Test</span></div>
<div ondblclick="summaryHandler(event)" class="indent summaryUnit obsDef">
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: validationProtocol fullUrl: urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763furl (canonical): http://example-server.com/fhir/PlanDefinition/2038e4c7-22b8-4c56-2d28-6c077648763f)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: identificationSubstance1 fullUrl: urn:uuid:9c56958c-2a39-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: identificationSubstance2 fullUrl: urn:uuid:9c56968c-2a49-6609-2c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: identificationSubstance3 fullUrl: urn:uuid:9c56978c-2a39-6609-2c01-4d197eb57a33)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: IdentificationSubstance)(fullUrl: urn:uuid:3b1e878e-4bc9-8864-862f-e28b21233e8d)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;IdentificationSubstance&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/3b1e878e-4bc9-8864-862f-e28b21233e8d&quot;/>
                <title value=&quot;ID by HPLC&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;IDT&quot;/>
                        <display value=&quot;Identification&quot;/>
                    </coding>
                    <text value=&quot;ID by HPLC&quot;/>
                </code>
                <method>
                    <text value=&quot;ID by UHPLC&quot;/>
                </method>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;Conforms to standard&quot;/>
                    </extension>
                </qualifiedValue>" id="ObservationDefinition-IdentificationSubstance">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;IDT&quot;/>
                        <display value=&quot;Identification&quot;/>">Identification<span class="greyOff"> [IDT]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: ID by HPLC</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: IdentificationSubstance</div>
<div class="debugOff"> fullUrl: urn:uuid:3b1e878e-4bc9-8864-862f-e28b21233e8d</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/3b1e878e-4bc9-8864-862f-e28b21233e8d</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;ID by HPLC&quot;>">Title: </span><span>ID by HPLC</span></div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff">
<div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <status value=&quot;active&quot;>">Status: </span><span>active</span></div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;IDT&quot;/>
                        <display value=&quot;Identification&quot;/>
                    </coding>
                    <text value=&quot;ID by HPLC&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;IDT&quot;/>
                        <display value=&quot;Identification&quot;/>">Identification<span class="greyOff"> [IDT]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: ID by HPLC</span></span></div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <method>
                    <text value=&quot;ID by UHPLC&quot;/>">Method: </span><span><span style="white-space:normal;">ID by UHPLC</span></span></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="indent obsDefl2" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;Conforms to standard&quot;/>
                    </extension>">
		Acceptable Value
		<div title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;Conforms to standard&quot;/>
                    </extension>">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;Conforms to standard&quot;/>">Text: </span><span>Conforms to standard</span></div>
</div>
</div>
<div class="summaryHiddenOff"></div>
</div>
</div>
</div>
<div class="indent summaryUnit planl2" ondblclick="summaryHandler(event)"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/AssaySubstance&quot;/>"><a id="urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763f"><span>Action</span></a><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>">Code: </span><span style="white-space:normal;">Test</span></div>
<div ondblclick="summaryHandler(event)" class="indent summaryUnit obsDef">
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: validationProtocol fullUrl: urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763furl (canonical): http://example-server.com/fhir/PlanDefinition/2038e4c7-22b8-4c56-2d28-6c077648763f)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: AssaySubstance)(fullUrl: urn:uuid:12e7e672-40a6-4036-3c1f-b8ba6a7d045e)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;AssaySubstance&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4036-3c1f-b8ba6a7d045e&quot;/>
                <title value=&quot;Assay by HPLC (as is) (w/w%)&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;ASSAY&quot;/>
                        <display value=&quot;Assay&quot;/>
                    </coding>
                    <text value=&quot;Assay by HPLC (as is) (w/w%)&quot;/>
                </code>
                <method>
                    <text value=&quot;Assay by UHPLC&quot;/>
                </method>
                <qualifiedValue>
                    <range>
                        <low>
                            <value value=&quot;95&quot;/>
                            <unit value=&quot;%&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%&quot;/>
                        </low>
                        <high>
                            <value value=&quot;101&quot;/>
                            <unit value=&quot;%&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%&quot;/>
                        </high>
                    </range>
                </qualifiedValue>" id="ObservationDefinition-AssaySubstance">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;ASSAY&quot;/>
                        <display value=&quot;Assay&quot;/>">Assay<span class="greyOff"> [ASSAY]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: Assay by HPLC (as is) (w/w%)</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: AssaySubstance</div>
<div class="debugOff"> fullUrl: urn:uuid:12e7e672-40a6-4036-3c1f-b8ba6a7d045e</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4036-3c1f-b8ba6a7d045e</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Assay by HPLC (as is) (w/w%)&quot;>">Title: </span><span>Assay by HPLC (as is) (w/w%)</span></div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff">
<div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <status value=&quot;active&quot;>">Status: </span><span>active</span></div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;ASSAY&quot;/>
                        <display value=&quot;Assay&quot;/>
                    </coding>
                    <text value=&quot;Assay by HPLC (as is) (w/w%)&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;ASSAY&quot;/>
                        <display value=&quot;Assay&quot;/>">Assay<span class="greyOff"> [ASSAY]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: Assay by HPLC (as is) (w/w%)</span></span></div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <method>
                    <text value=&quot;Assay by UHPLC&quot;/>">Method: </span><span><span style="white-space:normal;">Assay by UHPLC</span></span></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="indent obsDefl2" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <qualifiedValue>
                    <range>
                        <low>
                            <value value=&quot;95&quot;/>
                            <unit value=&quot;%&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%&quot;/>
                        </low>
                        <high>
                            <value value=&quot;101&quot;/>
                            <unit value=&quot;%&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%&quot;/>
                        </high>
                    </range>">
		Acceptable Value
		<div title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <qualifiedValue>
                    <range>
                        <low>
                            <value value=&quot;95&quot;/>
                            <unit value=&quot;%&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%&quot;/>
                        </low>
                        <high>
                            <value value=&quot;101&quot;/>
                            <unit value=&quot;%&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%&quot;/>
                        </high>
                    </range>">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        <low>
                            <value value=&quot;95&quot;/>
                            <unit value=&quot;%&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%&quot;/>
                        </low>
                        <high>
                            <value value=&quot;101&quot;/>
                            <unit value=&quot;%&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%&quot;/>
                        </high>">Range: </span>from <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        <low>
                            <value value=&quot;95&quot;/>
                            <unit value=&quot;%&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%&quot;/>">95%</span><span class="greyOff"> [%] (http://unitsofmeasure.org)</span> to <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        ...
                        <high>
                            <value value=&quot;101&quot;/>
                            <unit value=&quot;%&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%&quot;/>">101%</span><span class="greyOff"> [%] (http://unitsofmeasure.org)</span></div>
</div>
</div>
<div class="summaryHiddenOff"></div>
</div>
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
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-step-scale-pq&quot;>
                        <valueCoding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingStepScale-local-pq&quot;/>
                            <code value=&quot;ABCD&quot;/>
                            <display value=&quot;Production Scale&quot;/>
                        </valueCoding>
                    </extension>
                    <prefix value=&quot;2&quot;/>
                    <title value=&quot;Step 2 Yield&quot;/>
                    <description value=&quot;Description of this step&quot;/>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingStep-local-pq&quot;/>
                            <code value=&quot;drying&quot;/>
                            <display value=&quot;Drying&quot;/>
                        </coding>
                        <!--text value=&quot;Step 2 in the process - free text is possible&quot;/-->
                    </code>
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/startingMaterialStep2&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Starting material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;StartingMaterial&quot;/>
                                <display value=&quot;Starting Material&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/intermediateMaterialStep2&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Intermediate material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;IntermediateMaterial&quot;/>
                                <display value=&quot;Intermediate Material&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/resultingMaterialStep2&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Resulting material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;ResultingMaterial&quot;/>
                                <display value=&quot;Resulting Material&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Step2Yield&quot;/>
                    </action>"><a id="urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763f"><span>Action</span></a><span class="summaryShowsOff"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <prefix value=&quot;2&quot;>"> - 2</span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <title value=&quot;Step 2 Yield&quot;>"> - Step 2 Yield</span> - <span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingStep-local-pq&quot;/>
                            <code value=&quot;drying&quot;/>
                            <display value=&quot;Drying&quot;/>">Drying<span class="greyOff"> [drying]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingStep-local-pq)</span></span></span></span><div class="summaryHiddenOff">
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
                    <title value=&quot;Step 2 Yield&quot;>">Title: </span><span>Step 2 Yield</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingStep-local-pq&quot;/>
                            <code value=&quot;drying&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingStep-local-pq&quot;/>
                            <code value=&quot;drying&quot;/>
                            <display value=&quot;Drying&quot;/>">Drying<span class="greyOff"> [drying]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingStep-local-pq)</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <description value=&quot;Description of this step&quot;>">Description: </span><span>Description of this step</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-step-scale-pq&quot;>
                        <valueCoding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingStepScale-local-pq&quot;/>
                            <code value=&quot;ABCD&quot;/>
                            <display value=&quot;Production Scale&quot;/>
                        </valueCoding>">Scale: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-step-scale-pq&quot;>
                        <valueCoding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingStepScale-local-pq&quot;/>
                            <code value=&quot;ABCD&quot;/>
                            <display value=&quot;Production Scale&quot;/>">Production Scale<span class="greyOff"> [ABCD]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingStepScale-local-pq)</span></span></div>
<div class="indent planl3"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/startingMaterialStep2&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Starting material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;StartingMaterial&quot;/>
                                <display value=&quot;Starting Material&quot;/>
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
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;StartingMaterial&quot;/>
                                <display value=&quot;Starting Material&quot;/>
                            </coding>">Role: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <participant>
                        <role>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;StartingMaterial&quot;/>
                                <display value=&quot;Starting Material&quot;/>">Starting Material<span class="greyOff"> [StartingMaterial]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq)</span></span></span></div>
<div>
<div class="indent org"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <participant>
                        <typeReference>
                            ...
                            <display value=&quot;Starting material&quot;>">Display: Starting material</span></div>
</div>
<div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (PlanDefinition/valueReference, id: validationProtocol fullUrl: urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763furl (canonical): http://example-server.com/fhir/PlanDefinition/2038e4c7-22b8-4c56-2d28-6c077648763f)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Substance/code, id: actual-batch-substance-starting-step2-1 fullUrl: urn:uuid:fc178762-81c5-5656-9744-13c7ad2e595b)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Substance/code, id: actual-batch-substance-starting-step2-2 fullUrl: urn:uuid:fc178762-81d5-5656-9744-13c7ad1e596b)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Substance/code, id: actual-batch-substance-starting-step2-3 fullUrl: urn:uuid:fc178762-81d5-5656-9744-23c7ad1e597b)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: startingMaterialStep2)(fullUrl: urn:uuid:c458791f-8cb8-428e-83f7-8a205f821153)

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;startingMaterialStep2&quot;/>
                <manufacturer>
                    <reference value=&quot;Organization/substance-manufacturer&quot;/>
                </manufacturer>
                <name>
                    <name value=&quot;Stelbatosubstance2&quot;/>
                </name>" id="SubstanceDefinition-startingMaterialStep2">Substance</span></a><span class="summaryShowsOff"><b> - Stelbatosubstance2</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substancedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: startingMaterialStep2</div>
<div class="debugOff"> fullUrl: urn:uuid:c458791f-8cb8-428e-83f7-8a205f821153</div>
<div class="summaryHiddenOff">
<div class="indent sbddetails">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <name>
                    <name value=&quot;Stelbatosubstance2&quot;>">Name: </span><span><span>Stelbatosubstance2</span></span></div>
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
<div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: startingMaterial fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821153)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: intermediateMaterial fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821155)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: startingMaterialStep2 fullUrl: urn:uuid:c458791f-8cb8-428e-83f7-8a205f821153)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: intermediateMaterialStep2 fullUrl: urn:uuid:c458791f-7cb8-428e-84f7-8a205f821155)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: substance-manufacturer)(fullUrl: urn:uuid:23dbbd32-2962-9fc3-40b1-67e864f21cd2)

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
<div class="debugOff"> fullUrl: urn:uuid:23dbbd32-2962-9fc3-40b1-67e864f21cd2</div><span class="summaryShowsOff"> - AAA Molybdenum Products, Inc.</span><div class="summaryHiddenOff">
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
<div class="indent sbddetails"><span title="Substance resource extension linking back to SubstanceDefinition: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-pq">Batch Instance</span><div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Substance/valueReference, id: actual-batch-substance-itermediate-step2-1 fullUrl: urn:uuid:fc178763-81c5-5656-9754-13c7ad1e595b)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Substance (id: actual-batch-substance-starting-step2-1)(fullUrl: urn:uuid:fc178762-81c5-5656-9744-13c7ad2e595b)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq 

<Bundle>
    <entry>
        <resource>
            <Substance>
                <id value=&quot;actual-batch-substance-starting-step2-1&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq&quot;/>
                </meta>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-02&quot;/>
                        <!-- #159 -->
                    </extension>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;7.1&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                </extension>
                <identifier>
                    <value value=&quot;Start1Step2Amgen&quot;/>
                </identifier>
                <instance value=&quot;true&quot;/>
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/startingMaterialStep2&quot;/>
                    </reference>
                </code>" id="Substance-actual-batch-substance-starting-step2-1">Substance</span></a><span class="summaryShowsOff"><b> - Start1Step2Amgen</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substance.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substance.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substance.html#tt-uml">R6</a>]</span><div class="debugOff">id: actual-batch-substance-starting-step2-1</div><div class="debugOff"> fullUrl: urn:uuid:fc178762-81c5-5656-9744-13c7ad2e595b</div><div class="debugOff"></div><div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq&quot;>">Profile: </span><span>http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq</span></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <instance value=&quot;true&quot;>">Instance: </span><span><span>true</span></span></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;Start1Step2Amgen&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;Start1Step2Amgen&quot;/>">Start1Step2Amgen</span></div><div><div class="indent sbddetails"><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/startingMaterialStep2&quot;/>
                    </reference>">Definition: </span>Stelbatosubstance2 (<a href="#SubstanceDefinition-startingMaterialStep2" title="click to see target - id=startingMaterialStep2">SubstanceDefinition</a>)<span class="debugOff"> id: startingMaterialStep2</span></span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-02&quot;/>
                        <!-- #159 -->
                    </extension>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;7.1&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>">Manufacturing</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-02&quot;>">Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-02&quot;>">2019-09-02</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;7.1&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->">Quantity: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;7.1&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->">7.1 kg</span></div></div></div></div><div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Substance/valueReference, id: actual-batch-substance-itermediate-step2-2 fullUrl: urn:uuid:fc178764-81d5-5656-9764-13c7ad1e595b)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Substance (id: actual-batch-substance-starting-step2-2)(fullUrl: urn:uuid:fc178762-81d5-5656-9744-13c7ad1e596b)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq 

<Bundle>
    <entry>
        <resource>
            <Substance>
                <id value=&quot;actual-batch-substance-starting-step2-2&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq&quot;/>
                </meta>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-02&quot;/>
                        <!-- #159 -->
                    </extension>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;7.2&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                </extension>
                <identifier>
                    <value value=&quot;Start2Step2Amgen&quot;/>
                </identifier>
                <instance value=&quot;true&quot;/>
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/startingMaterialStep2&quot;/>
                    </reference>
                </code>" id="Substance-actual-batch-substance-starting-step2-2">Substance</span></a><span class="summaryShowsOff"><b> - Start2Step2Amgen</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substance.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substance.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substance.html#tt-uml">R6</a>]</span><div class="debugOff">id: actual-batch-substance-starting-step2-2</div><div class="debugOff"> fullUrl: urn:uuid:fc178762-81d5-5656-9744-13c7ad1e596b</div><div class="debugOff"></div><div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq&quot;>">Profile: </span><span>http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq</span></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <instance value=&quot;true&quot;>">Instance: </span><span><span>true</span></span></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;Start2Step2Amgen&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;Start2Step2Amgen&quot;/>">Start2Step2Amgen</span></div><div><div class="indent sbddetails"><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/startingMaterialStep2&quot;/>
                    </reference>">Definition: </span>Stelbatosubstance2 (<a href="#SubstanceDefinition-startingMaterialStep2" title="click to see target - id=startingMaterialStep2">SubstanceDefinition</a>)<span class="debugOff"> id: startingMaterialStep2</span></span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-02&quot;/>
                        <!-- #159 -->
                    </extension>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;7.2&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>">Manufacturing</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-02&quot;>">Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-02&quot;>">2019-09-02</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;7.2&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->">Quantity: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;7.2&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->">7.2 kg</span></div></div></div></div><div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Substance/valueReference, id: actual-batch-substance-itermediate-step2-3 fullUrl: urn:uuid:fc178764-81d6-6656-9744-13c7ad1e595b)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Substance (id: actual-batch-substance-starting-step2-3)(fullUrl: urn:uuid:fc178762-81d5-5656-9744-23c7ad1e597b)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq 

<Bundle>
    <entry>
        <resource>
            <Substance>
                <id value=&quot;actual-batch-substance-starting-step2-3&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq&quot;/>
                </meta>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-02&quot;/>
                        <!-- #159 -->
                    </extension>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;7.3&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                </extension>
                <identifier>
                    <value value=&quot;Start3Step2Amgen&quot;/>
                </identifier>
                <instance value=&quot;true&quot;/>
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/startingMaterialStep2&quot;/>
                    </reference>
                </code>" id="Substance-actual-batch-substance-starting-step2-3">Substance</span></a><span class="summaryShowsOff"><b> - Start3Step2Amgen</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substance.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substance.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substance.html#tt-uml">R6</a>]</span><div class="debugOff">id: actual-batch-substance-starting-step2-3</div><div class="debugOff"> fullUrl: urn:uuid:fc178762-81d5-5656-9744-23c7ad1e597b</div><div class="debugOff"></div><div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq&quot;>">Profile: </span><span>http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq</span></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <instance value=&quot;true&quot;>">Instance: </span><span><span>true</span></span></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;Start3Step2Amgen&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;Start3Step2Amgen&quot;/>">Start3Step2Amgen</span></div><div><div class="indent sbddetails"><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/startingMaterialStep2&quot;/>
                    </reference>">Definition: </span>Stelbatosubstance2 (<a href="#SubstanceDefinition-startingMaterialStep2" title="click to see target - id=startingMaterialStep2">SubstanceDefinition</a>)<span class="debugOff"> id: startingMaterialStep2</span></span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-02&quot;/>
                        <!-- #159 -->
                    </extension>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;7.3&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>">Manufacturing</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-02&quot;>">Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2019-09-02&quot;>">2019-09-02</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;7.3&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->">Quantity: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;7.3&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->">7.3 kg</span></div></div></div></div>
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
                    ...
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/intermediateMaterialStep2&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Intermediate material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;IntermediateMaterial&quot;/>
                                <display value=&quot;Intermediate Material&quot;/>
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
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;IntermediateMaterial&quot;/>
                                <display value=&quot;Intermediate Material&quot;/>
                            </coding>">Role: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <participant>
                        <role>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;IntermediateMaterial&quot;/>
                                <display value=&quot;Intermediate Material&quot;/>">Intermediate Material<span class="greyOff"> [IntermediateMaterial]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq)</span></span></span></div>
<div>
<div class="indent org"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <participant>
                        <typeReference>
                            ...
                            <display value=&quot;Intermediate material&quot;>">Display: Intermediate material</span></div>
</div>
<div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (PlanDefinition/valueReference, id: validationProtocol fullUrl: urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763furl (canonical): http://example-server.com/fhir/PlanDefinition/2038e4c7-22b8-4c56-2d28-6c077648763f)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Substance/code, id: actual-batch-substance-itermediate-step2-1 fullUrl: urn:uuid:fc178763-81c5-5656-9754-13c7ad1e595b)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Substance/code, id: actual-batch-substance-itermediate-step2-2 fullUrl: urn:uuid:fc178764-81d5-5656-9764-13c7ad1e595b)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Substance/code, id: actual-batch-substance-itermediate-step2-3 fullUrl: urn:uuid:fc178764-81d6-6656-9744-13c7ad1e595b)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: intermediateMaterialStep2)(fullUrl: urn:uuid:c458791f-7cb8-428e-84f7-8a205f821155)

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;intermediateMaterialStep2&quot;/>
                <manufacturer>
                    <reference value=&quot;Organization/substance-manufacturer&quot;/>
                </manufacturer>
                <name>
                    <name value=&quot;ProcessoholStep2&quot;/>
                </name>" id="SubstanceDefinition-intermediateMaterialStep2">Substance</span></a><span class="summaryShowsOff"><b> - ProcessoholStep2</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substancedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: intermediateMaterialStep2</div>
<div class="debugOff"> fullUrl: urn:uuid:c458791f-7cb8-428e-84f7-8a205f821155</div>
<div class="summaryHiddenOff">
<div class="indent sbddetails">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <name>
                    <name value=&quot;ProcessoholStep2&quot;>">Name: </span><span><span>ProcessoholStep2</span></span></div>
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
<div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: startingMaterial fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821153)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: intermediateMaterial fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821155)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: startingMaterialStep2 fullUrl: urn:uuid:c458791f-8cb8-428e-83f7-8a205f821153)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: intermediateMaterialStep2 fullUrl: urn:uuid:c458791f-7cb8-428e-84f7-8a205f821155)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: substance-manufacturer)(fullUrl: urn:uuid:23dbbd32-2962-9fc3-40b1-67e864f21cd2)

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
<div class="debugOff"> fullUrl: urn:uuid:23dbbd32-2962-9fc3-40b1-67e864f21cd2</div><span class="summaryShowsOff"> - AAA Molybdenum Products, Inc.</span><div class="summaryHiddenOff">
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
<div class="indent sbddetails"><span title="Substance resource extension linking back to SubstanceDefinition: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-pq">Batch Instance</span><div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/subject, id: step2Yield1 fullUrl: urn:uuid:9c56948d-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Substance (id: actual-batch-substance-itermediate-step2-1)(fullUrl: urn:uuid:fc178763-81c5-5656-9754-13c7ad1e595b)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq 

<Bundle>
    <entry>
        <resource>
            <Substance>
                <id value=&quot;actual-batch-substance-itermediate-step2-1&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq&quot;/>
                </meta>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;10.1&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-derived-from-pq&quot;>
                        <!-- assumes 1 to 1, could also be done via a Procedure but overkill -->
                        <valueReference>
                            <reference value=&quot;Substance/actual-batch-substance-starting-step2-1&quot;/>
                        </valueReference>
                    </extension>
                </extension>
                <identifier>
                    <value value=&quot;Intermed1Step2Amgen&quot;/>
                </identifier>
                <instance value=&quot;true&quot;/>
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/intermediateMaterialStep2&quot;/>
                    </reference>
                </code>" id="Substance-actual-batch-substance-itermediate-step2-1">Substance</span></a><span class="summaryShowsOff"><b> - Intermed1Step2Amgen</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substance.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substance.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substance.html#tt-uml">R6</a>]</span><div class="debugOff">id: actual-batch-substance-itermediate-step2-1</div><div class="debugOff"> fullUrl: urn:uuid:fc178763-81c5-5656-9754-13c7ad1e595b</div><div class="debugOff"></div><div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq&quot;>">Profile: </span><span>http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq</span></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <instance value=&quot;true&quot;>">Instance: </span><span><span>true</span></span></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;Intermed1Step2Amgen&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;Intermed1Step2Amgen&quot;/>">Intermed1Step2Amgen</span></div><div><div class="indent sbddetails"><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/intermediateMaterialStep2&quot;/>
                    </reference>">Definition: </span>ProcessoholStep2 (<a href="#SubstanceDefinition-intermediateMaterialStep2" title="click to see target - id=intermediateMaterialStep2">SubstanceDefinition</a>)<span class="debugOff"> id: intermediateMaterialStep2</span></span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;10.1&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-derived-from-pq&quot;>
                        <!-- assumes 1 to 1, could also be done via a Procedure but overkill -->
                        <valueReference>
                            <reference value=&quot;Substance/actual-batch-substance-starting-step2-1&quot;/>
                        </valueReference>
                    </extension>">Manufacturing</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;10.1&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->">Quantity: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;10.1&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->">10.1 kg</span></div><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    ...
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-derived-from-pq&quot;>
                        <!-- assumes 1 to 1, could also be done via a Procedure but overkill -->
                        <valueReference>
                            <reference value=&quot;Substance/actual-batch-substance-starting-step2-1&quot;/>
                        </valueReference>">Derived From</span>: Start1Step2Amgen (<a href="#Substance-actual-batch-substance-starting-step2-1" title="click to see target - id=actual-batch-substance-starting-step2-1">Substance</a>)<span class="debugOff"> id: actual-batch-substance-starting-step2-1</span></span></div></div></div><div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/subject, id: step2Yield2 fullUrl: urn:uuid:9c56948c-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Substance (id: actual-batch-substance-itermediate-step2-2)(fullUrl: urn:uuid:fc178764-81d5-5656-9764-13c7ad1e595b)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq 

<Bundle>
    <entry>
        <resource>
            <Substance>
                <id value=&quot;actual-batch-substance-itermediate-step2-2&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq&quot;/>
                </meta>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;10.2&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-derived-from-pq&quot;>
                        <!-- assumes 1 to 1, could also be done via a Procedure but overkill -->
                        <valueReference>
                            <reference value=&quot;Substance/actual-batch-substance-starting-step2-2&quot;/>
                        </valueReference>
                    </extension>
                </extension>
                <identifier>
                    <value value=&quot;Intermed2Step2Amgen&quot;/>
                </identifier>
                <instance value=&quot;true&quot;/>
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/intermediateMaterialStep2&quot;/>
                    </reference>
                </code>" id="Substance-actual-batch-substance-itermediate-step2-2">Substance</span></a><span class="summaryShowsOff"><b> - Intermed2Step2Amgen</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substance.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substance.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substance.html#tt-uml">R6</a>]</span><div class="debugOff">id: actual-batch-substance-itermediate-step2-2</div><div class="debugOff"> fullUrl: urn:uuid:fc178764-81d5-5656-9764-13c7ad1e595b</div><div class="debugOff"></div><div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq&quot;>">Profile: </span><span>http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq</span></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <instance value=&quot;true&quot;>">Instance: </span><span><span>true</span></span></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;Intermed2Step2Amgen&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;Intermed2Step2Amgen&quot;/>">Intermed2Step2Amgen</span></div><div><div class="indent sbddetails"><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/intermediateMaterialStep2&quot;/>
                    </reference>">Definition: </span>ProcessoholStep2 (<a href="#SubstanceDefinition-intermediateMaterialStep2" title="click to see target - id=intermediateMaterialStep2">SubstanceDefinition</a>)<span class="debugOff"> id: intermediateMaterialStep2</span></span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;10.2&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-derived-from-pq&quot;>
                        <!-- assumes 1 to 1, could also be done via a Procedure but overkill -->
                        <valueReference>
                            <reference value=&quot;Substance/actual-batch-substance-starting-step2-2&quot;/>
                        </valueReference>
                    </extension>">Manufacturing</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;10.2&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->">Quantity: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;10.2&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->">10.2 kg</span></div><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    ...
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-derived-from-pq&quot;>
                        <!-- assumes 1 to 1, could also be done via a Procedure but overkill -->
                        <valueReference>
                            <reference value=&quot;Substance/actual-batch-substance-starting-step2-2&quot;/>
                        </valueReference>">Derived From</span>: Start2Step2Amgen (<a href="#Substance-actual-batch-substance-starting-step2-2" title="click to see target - id=actual-batch-substance-starting-step2-2">Substance</a>)<span class="debugOff"> id: actual-batch-substance-starting-step2-2</span></span></div></div></div><div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/subject, id: step2Yield3 fullUrl: urn:uuid:9c56948b-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Substance (id: actual-batch-substance-itermediate-step2-3)(fullUrl: urn:uuid:fc178764-81d6-6656-9744-13c7ad1e595b)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq 

<Bundle>
    <entry>
        <resource>
            <Substance>
                <id value=&quot;actual-batch-substance-itermediate-step2-3&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq&quot;/>
                </meta>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;10.3&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-derived-from-pq&quot;>
                        <!-- assumes 1 to 1, could also be done via a Procedure but overkill -->
                        <valueReference>
                            <reference value=&quot;Substance/actual-batch-substance-starting-step2-3&quot;/>
                        </valueReference>
                    </extension>
                </extension>
                <identifier>
                    <value value=&quot;Intermed3Step2Amgen&quot;/>
                </identifier>
                <instance value=&quot;true&quot;/>
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/intermediateMaterialStep2&quot;/>
                    </reference>
                </code>" id="Substance-actual-batch-substance-itermediate-step2-3">Substance</span></a><span class="summaryShowsOff"><b> - Intermed3Step2Amgen</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substance.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substance.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substance.html#tt-uml">R6</a>]</span><div class="debugOff">id: actual-batch-substance-itermediate-step2-3</div><div class="debugOff"> fullUrl: urn:uuid:fc178764-81d6-6656-9744-13c7ad1e595b</div><div class="debugOff"></div><div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq&quot;>">Profile: </span><span>http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Substance-drug-pq</span></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <instance value=&quot;true&quot;>">Instance: </span><span><span>true</span></span></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;Intermed3Step2Amgen&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;Intermed3Step2Amgen&quot;/>">Intermed3Step2Amgen</span></div><div><div class="indent sbddetails"><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/intermediateMaterialStep2&quot;/>
                    </reference>">Definition: </span>ProcessoholStep2 (<a href="#SubstanceDefinition-intermediateMaterialStep2" title="click to see target - id=intermediateMaterialStep2">SubstanceDefinition</a>)<span class="debugOff"> id: intermediateMaterialStep2</span></span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;10.3&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-derived-from-pq&quot;>
                        <!-- assumes 1 to 1, could also be done via a Procedure but overkill -->
                        <valueReference>
                            <reference value=&quot;Substance/actual-batch-substance-starting-step2-3&quot;/>
                        </valueReference>
                    </extension>">Manufacturing</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;10.3&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->">Quantity: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;10.3&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->">10.3 kg</span></div><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    ...
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-batch-derived-from-pq&quot;>
                        <!-- assumes 1 to 1, could also be done via a Procedure but overkill -->
                        <valueReference>
                            <reference value=&quot;Substance/actual-batch-substance-starting-step2-3&quot;/>
                        </valueReference>">Derived From</span>: Start3Step2Amgen (<a href="#Substance-actual-batch-substance-starting-step2-3" title="click to see target - id=actual-batch-substance-starting-step2-3">Substance</a>)<span class="debugOff"> id: actual-batch-substance-starting-step2-3</span></span></div></div></div>
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
                    ...
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/resultingMaterialStep2&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Resulting material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;ResultingMaterial&quot;/>
                                <display value=&quot;Resulting Material&quot;/>
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
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;ResultingMaterial&quot;/>
                                <display value=&quot;Resulting Material&quot;/>
                            </coding>">Role: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <participant>
                        <role>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;ResultingMaterial&quot;/>
                                <display value=&quot;Resulting Material&quot;/>">Resulting Material<span class="greyOff"> [ResultingMaterial]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq)</span></span></span></div>
<div>
<div class="indent org"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <participant>
                        <typeReference>
                            ...
                            <display value=&quot;Resulting material&quot;>">Display: Resulting material</span></div>
</div>
<div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (PlanDefinition/valueReference, id: validationProtocol fullUrl: urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763furl (canonical): http://example-server.com/fhir/PlanDefinition/2038e4c7-22b8-4c56-2d28-6c077648763f)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: resultingMaterialStep2)(fullUrl: urn:uuid:c458791f-8cb8-428e-83f7-8a205f821154)

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;resultingMaterialStep2&quot;/>
                <name>
                    <name value=&quot;ResultothaneStep2&quot;/>
                </name>" id="SubstanceDefinition-resultingMaterialStep2">Substance</span></a><span class="summaryShowsOff"><b> - ResultothaneStep2</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substancedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: resultingMaterialStep2</div>
<div class="debugOff"> fullUrl: urn:uuid:c458791f-8cb8-428e-83f7-8a205f821154</div>
<div class="summaryHiddenOff">
<div class="indent sbddetails">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <name>
                    <name value=&quot;ResultothaneStep2&quot;>">Name: </span><span><span>ResultothaneStep2</span></span></div>
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
<div class="indent summaryUnit planl2" ondblclick="summaryHandler(event)"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Step2Yield&quot;/>"><a id="urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763f"><span>Action</span></a><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>">Code: </span><span style="white-space:normal;">Test</span></div>
<div ondblclick="summaryHandler(event)" class="indent summaryUnit obsDef">
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: validationProtocol fullUrl: urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763furl (canonical): http://example-server.com/fhir/PlanDefinition/2038e4c7-22b8-4c56-2d28-6c077648763f)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: step2Yield1 fullUrl: urn:uuid:9c56948d-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: step2Yield2 fullUrl: urn:uuid:9c56948c-2b39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: step2Yield3 fullUrl: urn:uuid:9c56948b-2a39-6609-1c01-4d197ea57a33)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: Step2Yield)(fullUrl: urn:uuid:fd17b5d7-9fe1-91c2-2d06-47cb5b295e72)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Step2Yield&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/fd17b5d7-9fe1-91c2-2d06-47cb5b295e72&quot;/>
                <title value=&quot;Yield (%)&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Yield (%)&quot;/>
                        <display value=&quot;Yield (%)&quot;/>
                    </coding>
                    <text value=&quot;Yield (%)&quot;/>
                </code>" id="ObservationDefinition-Step2Yield">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Yield (%)&quot;/>
                        <display value=&quot;Yield (%)&quot;/>">Yield (%)<span class="greyOff"> [Yield (%)]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: Yield (%)</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: Step2Yield</div>
<div class="debugOff"> fullUrl: urn:uuid:fd17b5d7-9fe1-91c2-2d06-47cb5b295e72</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/fd17b5d7-9fe1-91c2-2d06-47cb5b295e72</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Yield (%)&quot;>">Title: </span><span>Yield (%)</span></div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff">
<div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <status value=&quot;active&quot;>">Status: </span><span>active</span></div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Yield (%)&quot;/>
                        <display value=&quot;Yield (%)&quot;/>
                    </coding>
                    <text value=&quot;Yield (%)&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;Yield (%)&quot;/>
                        <display value=&quot;Yield (%)&quot;/>">Yield (%)<span class="greyOff"> [Yield (%)]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: Yield (%)</span></span></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
</div>
</div>
</div>
</div>
<div class="indent planl2 summaryHiddenOff"><span title="PlanDefinition (id: validationProtocol)(fullUrl: urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763f)

<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <id value=&quot;validationProtocol&quot;/>
                <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tabulateBatchesInRows-substance&quot;>
                    <valueBoolean value=&quot;true&quot;/>
                </extension>
                <url value=&quot;http://example-server.com/fhir/PlanDefinition/2038e4c7-22b8-4c56-2d28-6c077648763f&quot;/>
                <title value=&quot;DP PROCESS VALIDATION&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/plan-definition-type&quot;/>
                        <code value=&quot;workflow-definition&quot;/>
                        <display value=&quot;Workflow Definition&quot;/>
                    </coding>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-planType-local-pq&quot;/>
                        <code value=&quot;process-validation&quot;/>
                        <display value=&quot;Process Validation&quot;/>
                    </coding>
                </type>
                <status value=&quot;active&quot;/>
                <subjectReference>
                    <reference value=&quot;SubstanceDefinition/substancedefinition-component-substance-dxpq-ex1&quot;/>
                </subjectReference>
                <description value=&quot;Pre-defined validation acceptance criteria were established based on manufacturing development data derived from process characterization studies...&quot;/>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-step-scale-pq&quot;>
                        <valueCoding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingStepScale-local-pq&quot;/>
                            <code value=&quot;ABCD&quot;/>
                            <display value=&quot;Production Scale&quot;/>
                        </valueCoding>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-processParameter-local-pq&quot;/>
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
                    <title value=&quot;Step 1 Yield&quot;/>
                    <description value=&quot;Description of this step&quot;/>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingStep-local-pq&quot;/>
                            <code value=&quot;particleSizeReduction&quot;/>
                            <display value=&quot;Particle Size Reduction&quot;/>
                        </coding>
                        <!--text value=&quot;Step 2 in the process - free text is possible&quot;/-->
                    </code>
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/startingMaterial&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Starting material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;StartingMaterial&quot;/>
                                <display value=&quot;Starting Material&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/intermediateMaterial&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Intermediate material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;IntermediateMaterial&quot;/>
                                <display value=&quot;Intermediate Material&quot;/>
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
                            <display value=&quot;Resulting material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;ResultingMaterial&quot;/>
                                <display value=&quot;Resulting Material&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Step1Yield&quot;/>
                    </action>
                </action>
                <action>
                    <title value=&quot;Step 1 In-Process Control Data&quot;/>
                    <code>
                        <coding>
                            <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/manufacturing-step&quot;/>
                            <code value=&quot;Step1In-ProcessControlData&quot;/>
                            <display value=&quot;Step 1 In-Process Control Data&quot;/>
                        </coding>
                    </code>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/ResidualWaterContent&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/ResidualStartingMaterial1byHPLC&quot;/>
                    </action>
                </action>
                <action>
                    <title value=&quot;Step 1 DS Release Testing Results&quot;/>
                    <code>
                        <coding>
                            <system value=&quot;http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/manufacturing-step&quot;/>
                            <code value=&quot;Step1DSReleaseTestingResults&quot;/>
                            <display value=&quot;Step 1 DS Release Testing Results&quot;/>
                        </coding>
                    </code>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/AppearanceSubstance&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/IdentificationSubstance&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/AssaySubstance&quot;/>
                    </action>
                </action>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-step-scale-pq&quot;>
                        <valueCoding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingStepScale-local-pq&quot;/>
                            <code value=&quot;ABCD&quot;/>
                            <display value=&quot;Production Scale&quot;/>
                        </valueCoding>
                    </extension>
                    <prefix value=&quot;2&quot;/>
                    <title value=&quot;Step 2 Yield&quot;/>
                    <description value=&quot;Description of this step&quot;/>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingStep-local-pq&quot;/>
                            <code value=&quot;drying&quot;/>
                            <display value=&quot;Drying&quot;/>
                        </coding>
                        <!--text value=&quot;Step 2 in the process - free text is possible&quot;/-->
                    </code>
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/startingMaterialStep2&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Starting material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;StartingMaterial&quot;/>
                                <display value=&quot;Starting Material&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/intermediateMaterialStep2&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Intermediate material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;IntermediateMaterial&quot;/>
                                <display value=&quot;Intermediate Material&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/resultingMaterialStep2&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Resulting material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufacturingParticipantRole-local-pq&quot;/>
                                <code value=&quot;ResultingMaterial&quot;/>
                                <display value=&quot;Resulting Material&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Step2Yield&quot;/>
                    </action>
                </action>">Triggered</span>: Process Validation Report (<a href="#DiagnosticReport-processValidationReport" title="click to see target - id=processValidationReport">DiagnosticReport</a>)<span class="debugOff"> id: processValidationReport</span></div>
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
