The HTML rendering below shows a synthetic CMC data example for Common Technical Document (CTD) Module 3: Quality, section 3.2.S.4 Control of Drug Substance, subsection 3.2.S.4.4 Batch Analyses.

<html>
<body>
<div class="greyable">
<div class="controls remove"><span> </span><span class="button" onclick="toggleSummary(this)" title="summary view">summary on</span><span> </span><span class="button" onclick="toggleCodes(this)" title="details of code systems">show codes</span><span> </span><span class="button" onclick="toggleDebug(this)" title="extra technical info">show debug</span><span style="float:right; margin-right:3px;"><span class="buttonNoUnderlineHidden" onclick="toggleLowerControls(this)"><sup title="expand this"> v </sup></span><span class="buttonNoUnderline" onclick="toggleRemove(this)"><sup title="close this">x</sup></span></span><span> </span><span class="button" onclick="toggleRemoveTask(this)" title="details of tasks for changes">hide task</span><span> </span><span class="button" onclick="toggleRemoveProvenance(this)" title="details of provenance for changes">hide provenance</span><span> </span><span class="button" onclick="toggleRemoveTables(this)" title="tabular data">hide tables</span><br><span> </span><span class="button" onclick="toggleDarkMode(this)" title="darkened display">dark mode</span><span> </span><span class="button" onclick="toggleApplyGreyscale(this)" title="grey and white display">greyscale</span><span> </span><span class="button" onclick="toggleBlackAndWhite(this,false)" title="black and white display">b&amp;w</span><span> </span><span class="button" onclick="togglePlainMode(this);" title="plain text display">text only</span></div>
<div class="divBody">
<div class="debugOffBorder">
<div class="bundleBorder">
<div class="debugOff">
<div class="bundle"><a class="plainLink"><span class="bold" title="Bundle (id: substance-batch-analysis)
Profile: http://accumulus.org/fhir/dx-cmc/batch-analysis-substance 

<Bundle>
    <id value=&quot;substance-batch-analysis&quot;/>
    <meta>
        <profile value=&quot;http://accumulus.org/fhir/dx-cmc/batch-analysis-substance&quot;/>
    </meta>
    <type value=&quot;collection&quot;/>
    <entry>
        <!-- consider using http://hl7.org/fhir/build/StructureDefinition/title -->
        <fullUrl value=&quot;urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763f&quot;/>
        <resource>
            <PlanDefinition>
                <id value=&quot;specificationProtocol&quot;/>
                <title value=&quot;S.4.4 BATCH ANALYSIS&quot;/>
                <status value=&quot;active&quot;/>
                <subjectReference>
                    <reference value=&quot;SubstanceDefinition/substance1&quot;/>
                </subjectReference>
                <description value=&quot;Narrative description of analysis&quot;/>
                <!-- new &quot;tabular&quot; style -->
                <action>
                    <!-- this is then entire thing -->
                    <title value=&quot;Batch Specification for Drug Product&quot;/>
                    <code>
                        <text value=&quot;Overall set of actions&quot;/>
                    </code>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Description&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Identification&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Assay&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Impurities&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Mutagenic&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Enantiomeric&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Solvents&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Water&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Particles&quot;/>
                    </action>
                </action>
            </PlanDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:13033a89-927a-10e0-503e-5f901bdca30f&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Description&quot;/>
                <title value=&quot;Description&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Description&quot;/>
                    </coding>
                    <text value=&quot;Description&quot;/>
                </code>
                <method>
                    <text value=&quot;Visual inspection&quot;/>
                </method>
                <qualifiedValue>
                    <extension url=&quot;http://accumulus.org/fhir/extension/qualifiedValueText&quot;>
                        <valueString value=&quot;A white to brown powder&quot;/>
                    </extension>
                </qualifiedValue>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:8395ae1d-5064-0ab7-a297-6b20285b2230&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Identification&quot;/>
                <title value=&quot;Identification&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Identification&quot;/>
                    </coding>
                    <text value=&quot;Identification&quot;/>
                </code>
                <method>
                    <text value=&quot;Identification by IR spectroscopy Identification by HPLC&quot;/>
                </method>
                <qualifiedValue>
                    <extension url=&quot;http://accumulus.org/fhir/extension/qualifiedValueText&quot;>
                        <valueString value=&quot;Conforms with reference&quot;/>
                    </extension>
                </qualifiedValue>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:2117208e-4185-9091-1f86-cce37b121838&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Assay&quot;/>
                <title value=&quot;Assay&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Assay&quot;/>
                    </coding>
                    <text value=&quot;Assay&quot;/>
                </code>
                <method>
                    <text value=&quot;Assay by LC&quot;/>
                </method>
                <qualifiedValue>
                    <range>
                        <low>
                            <value value=&quot;98&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%{w/w}&quot;/>
                            <!-- not sure this is a correct ucum code -->
                        </low>
                        <high>
                            <value value=&quot;102&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%{w/w}&quot;/>
                            <!-- not sure this is a correct ucum code -->
                        </high>
                    </range>
                </qualifiedValue>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:d04e0f2a-6ee7-6c2e-1db8-7df394c927b8&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Impurities&quot;/>
                <title value=&quot;Drug Substance Related Organic impurities&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Drug Substance Related Organic impurities&quot;/>
                    </coding>
                </code>
                <method>
                    <text value=&quot;Organic impurities by LC&quot;/>
                </method>
                <qualifiedValue>
                    <appliesTo>
                        <!-- could be a code -->
                        <text value=&quot;Impurity 1&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;0.5&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>
                    </range>
                </qualifiedValue>
                <qualifiedValue>
                    <appliesTo>
                        <text value=&quot;Impurity 2&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;0.5&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>
                    </range>
                </qualifiedValue>
                <qualifiedValue>
                    <appliesTo>
                        <text value=&quot;Impurity 3&quot;>
                            <extension url=&quot;http://accumulus.org/fhir/extension/testComment&quot;>
                                <valueString value=&quot;Impurity 3 was included in the release specification throughout clinical development, and no longer forms a part of a commercial release specification; see Section S.4.5 Justification of Specification and Section S.2.5 Validation (PPQ) for additional data&quot;>
                                    <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tableFootnote&quot;>
                                        <valueString value=&quot;[2]&quot;/>
                                    </extension>
                                </valueString>
                            </extension>
                        </text>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;0.5&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>
                    </range>
                </qualifiedValue>
                <qualifiedValue>
                    <appliesTo>
                        <text value=&quot;Any individual unspecified impurity&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;0.10&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>
                    </range>
                </qualifiedValue>
                <qualifiedValue>
                    <appliesTo>
                        <text value=&quot;Total impurities&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;2.0&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>
                    </range>
                </qualifiedValue>
                <component>
                    <!-- are expected to have a component that says what impurity this one is -->
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                </component>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:0634020c-8729-99fc-7637-89799d7c445b&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Mutagenic&quot;/>
                <title value=&quot;Mutagenic impurities&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;MUT&quot;/>
                        <display value=&quot;Mutagenic impurities&quot;/>
                    </coding>
                </code>
                <method>
                    <text value=&quot;Impurity 5 content by LC-MS&quot;/>
                </method>
                <qualifiedValue>
                    <appliesTo>
                        <!-- could be a code -->
                        <text value=&quot;Impurity - Mutagenic&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;50&quot;/>
                            <unit value=&quot;ppm&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;[ppm]&quot;/>
                        </high>
                    </range>
                </qualifiedValue>
                <component>
                    <!-- are expected to have a component that says what impurity this one is -->
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                </component>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:4e67725b-20c8-158e-9d53-1810bfa58d87&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Enantiomeric&quot;/>
                <title value=&quot;Enantiomeric purity&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;ZZZ&quot;/>
                        <display value=&quot;Enantiomeric purity&quot;/>
                    </coding>
                    <text value=&quot;Enantiomeric purity&quot;/>
                </code>
                <method>
                    <text value=&quot;Enantiomeric purity by LC&quot;/>
                </method>
                <qualifiedValue>
                    <range>
                        <low>
                            <value value=&quot;99.6&quot;/>
                            <unit value=&quot;%&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%&quot;/>
                        </low>
                    </range>
                </qualifiedValue>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:2daba8ca-211f-4f4b-4028-16c30fe22ee8&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Solvents&quot;/>
                <title value=&quot;Residual solvents&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;SOL&quot;/>
                        <display value=&quot;Residual solvents&quot;/>
                    </coding>
                </code>
                <method>
                    <text value=&quot;Residual solvents by headspace GC&quot;/>
                </method>
                <qualifiedValue>
                    <appliesTo>
                        <!-- could be a code -->
                        <text value=&quot;Solvent 1&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;0.1&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>
                    </range>
                </qualifiedValue>
                <qualifiedValue>
                    <appliesTo>
                        <text value=&quot;Solvent 2&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;2.0&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>
                    </range>
                </qualifiedValue>
                <component>
                    <!-- are expected to have a component that says what solvent this one is -->
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SOLV&quot;/>
                            <display value=&quot;Solvent&quot;/>
                        </coding>
                    </code>
                </component>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:17b322fe-53ea-6c1f-521b-3b148ac05eb4&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Water&quot;/>
                <title value=&quot;Water Content&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;WWW&quot;/>
                        <display value=&quot;Water Content&quot;/>
                    </coding>
                    <text value=&quot;Water Content&quot;/>
                </code>
                <method>
                    <text value=&quot;USP Karl Fischer titration&quot;/>
                </method>
                <qualifiedValue>
                    <range>
                        <high>
                            <value value=&quot;1.0&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>
                    </range>
                </qualifiedValue>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:11fcfe6b-7498-132b-2def-efae51b302d4&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Particles&quot;/>
                <title value=&quot;Particle size distribution&quot;>
                    <extension url=&quot;http://accumulus.org/fhir/extension/testComment&quot;>
                        <valueString value=&quot;Particle Size Distribution was included in the release specification throughout clinical development, and no longer forms a part of the commercial release specification; See Section S.4.5 Justification of Specification for data and rationale.&quot;>
                            <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tableFootnote&quot;>
                                <valueString value=&quot;[4]&quot;/>
                            </extension>
                        </valueString>
                    </extension>
                </title>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>
                    </coding>
                </code>
                <method>
                    <text value=&quot;Laser diffraction&quot;/>
                </method>
                <qualifiedValue>
                    <appliesTo>
                        <!-- could be a code -->
                        <text value=&quot;D(v,0.9)&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;319&quot;/>
                            <unit value=&quot;µm&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;um&quot;/>
                        </high>
                    </range>
                </qualifiedValue>
                <qualifiedValue>
                    <appliesTo>
                        <!-- could be a code -->
                        <text value=&quot;D(v,0.5)&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;145&quot;/>
                            <unit value=&quot;µm&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;um&quot;/>
                        </high>
                    </range>
                </qualifiedValue>
                <qualifiedValue>
                    <appliesTo>
                        <!-- could be a code -->
                        <text value=&quot;D(v,0.1)&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;20&quot;/>
                            <unit value=&quot;µm&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;um&quot;/>
                        </high>
                    </range>
                </qualifiedValue>
                <component>
                    <!-- are expected to have a component that says what solvent this one is -->
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;PARTS&quot;/>
                            <display value=&quot;Particle size&quot;/>
                        </coding>
                    </code>
                </component>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:87ef899b-14dd-26b7-7416-7ec1d01b62a1&quot;/>
        <resource>
            <Substance>
                <id value=&quot;substance-dxpq-ex1&quot;/>
                <!-- was actual-batch-substance -->
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-batch-release-date-dxpq&quot;>
                        <valueDateTime value=&quot;2019-09-08&quot;/>
                        <!-- #173 -->
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-batch-retest-date-dxpq&quot;>
                        <valueDateTime value=&quot;2022-09-08&quot;/>
                        <!-- #221 -->
                    </extension>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2020-01&quot;/>
                        <!-- #157 -->
                    </extension>
                    <extension url=&quot;http://accumulus.org/fhir/extension/manufacturingProcess&quot;>
                        <valueReference>
                            <reference value=&quot;PlanDefinition/manufacturingProcess&quot;/>
                        </valueReference>
                    </extension>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;120&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-actual-yield-dxpq&quot;>
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
                                <code value=&quot;C133990&quot;/>
                                <display value=&quot;Commercial&quot;/>
                                <!-- could also be C185328 Stability Study? -->
                            </coding>
                            <text value=&quot;Production&quot;/>
                        </valueCodeableConcept>
                    </extension>
                    <extension url=&quot;assignedManufacturer&quot;>
                        <!-- #160 -->
                        <valueReference>
                            <reference value=&quot;Organization/substance-manufacturer&quot;/>
                        </valueReference>
                    </extension>
                </extension>
                <identifier>
                    <value value=&quot;CAT1&quot;/>
                    <!-- #155 -->
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
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-batch-release-date-dxpq&quot;>
                        <valueDateTime value=&quot;2019-09-08&quot;/>
                        <!-- #173 -->
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-batch-retest-date-dxpq&quot;>
                        <valueDateTime value=&quot;2022-09-08&quot;/>
                        <!-- #221 -->
                    </extension>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2020-02&quot;/>
                        <!-- #159 -->
                    </extension>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;120&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-actual-yield-dxpq&quot;>
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
                                <code value=&quot;C133990&quot;/>
                                <display value=&quot;Commercial&quot;/>
                                <!-- could also be C185328 Stability Study? -->
                            </coding>
                            <text value=&quot;Production&quot;/>
                        </valueCodeableConcept>
                    </extension>
                    <extension url=&quot;assignedManufacturer&quot;>
                        <!-- #160 -->
                        <valueReference>
                            <reference value=&quot;Organization/substance-manufacturer&quot;/>
                        </valueReference>
                    </extension>
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
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-batch-release-date-dxpq&quot;>
                        <valueDateTime value=&quot;2019-09-08&quot;/>
                        <!-- #173 -->
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-batch-retest-date-dxpq&quot;>
                        <valueDateTime value=&quot;2022-09-08&quot;/>
                        <!-- #221 -->
                    </extension>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2020-03&quot;/>
                        <!-- #159 -->
                    </extension>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;120&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-actual-yield-dxpq&quot;>
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
                                <code value=&quot;C133990&quot;/>
                                <display value=&quot;Commercial&quot;/>
                                <!-- could also be C185328 Stability Study? -->
                            </coding>
                            <text value=&quot;Production&quot;/>
                        </valueCodeableConcept>
                    </extension>
                    <extension url=&quot;assignedManufacturer&quot;>
                        <!-- #160 -->
                        <valueReference>
                            <reference value=&quot;Organization/substance-manufacturer&quot;/>
                        </valueReference>
                    </extension>
                </extension>
                <identifier>
                    <value value=&quot;CAT3&quot;/>
                    <!-- #155 -->
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
    <!-- Section 5 - Manufacturing Process -->
    <entry>
        <fullUrl value=&quot;urn:uuid:b30a1024-37db-a1bc-05e5-cc4596d92975&quot;/>
        <resource>
            <PlanDefinition>
                <id value=&quot;manufacturingProcess&quot;/>
                <!-- abridged version only -->
                <title value=&quot;Process 1.1&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/planType&quot;/>
                        <code value=&quot;1244566&quot;/>
                        <display value=&quot;Manufacturing Process&quot;/>
                    </coding>
                </type>
                <status value=&quot;active&quot;/>
                <subjectReference>
                    <reference value=&quot;SubstanceDefinition/substance1&quot;/>
                    <!-- #83 -->
                </subjectReference>
            </PlanDefinition>
        </resource>
    </entry>
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
                    <!-- #4 -->
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
    <!-- Diagnostic report doesn't carry much extra value but does collect all the observations -->
    <entry>
        <fullUrl value=&quot;urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006&quot;/>
        <resource>
            <DiagnosticReport>
                <!-- ideally this wants a subject, but it can only be a Medication (batch) and we have multiple. 
                     however the observations themselves do have subjects -->
                <id value=&quot;batchAnalysisReport&quot;/>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/workflow-triggeredBy&quot;>
                    <valueReference>
                        <reference value=&quot;PlanDefinition/specificationProtocol&quot;/>
                    </valueReference>
                </extension>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/reportType&quot;/>
                        <code value=&quot;111&quot;/>
                        <display value=&quot;Batch Analysis Report&quot;/>
                    </coding>
                </code>
                <effectiveDateTime value=&quot;2020-12&quot;/>
                <!-- start of stability test -->
                <result>
                    <reference value=&quot;Observation/observation-simple-dxpq-ex1&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDescription2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDescription3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationIdentification&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationIdentification2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationIdentification3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationAssay&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationAssay2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationAssay3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp1&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp1-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp1-3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp2-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp2-3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp3-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp3-3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp-unspecified&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp-unspecified-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp-unspecified-3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp-total&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp-total-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp-total-3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp1&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp1-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp1-3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp2-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp2-3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp3-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp3-3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp-unspecified&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp-unspecified-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp-unspecified-3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp-total&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp-total-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp-total-3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationMutagenic&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationMutagenic2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationMutagenic3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationEnantiomericPurity&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationEnantiomericPurity2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationEnantiomericPurity3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationSolvents-sol1&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationSolvents-sol1-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationSolvents-sol1-3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationSolvents-sol2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationSolvents-sol2-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationSolvents-sol2-3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationWater&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationWater2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationWater3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationParticleSize-size1&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationParticleSize-size1-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationParticleSize-size1-3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationParticleSize-size2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationParticleSize-size2-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationParticleSize-size2-3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationParticleSize-size3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationParticleSize-size3-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationParticleSize-size3-3&quot;/>
                </result>
                <conclusion value=&quot;The samples have been assessed and the conclusion is...&quot;/>
            </DiagnosticReport>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:81f552f9-8458-3cf4-8379-eea5417a9de2&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observation-simple-dxpq-ex1&quot;/>
                <!-- was observationDescription -->
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Observation-simple-dxpq&quot;/>
                </meta>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Description&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/dx-pq/CodeSystem/CodeSystem-local-codes-dxpq&quot;/>
                        <code value=&quot;XXX-2&quot;/>
                        <display value=&quot;Description&quot;/>
                    </coding>
                    <text value=&quot;Description&quot;/>
                </code>
                <subject>
                    <!--reference value=&quot;Substance/actual-batch-substance&quot;/-->
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueCodeableConcept>
                    <text value=&quot;Pass&quot;/>
                </valueCodeableConcept>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:50bf6f69-a3f5-678b-469b-c5df5cca4c86&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationDescription2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Description&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Description&quot;/>
                    </coding>
                    <text value=&quot;Description&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueCodeableConcept>
                    <text value=&quot;Pass&quot;/>
                </valueCodeableConcept>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:145fd3b7-3678-867f-4298-a6c781b86de3&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationDescription3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Description&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Description&quot;/>
                    </coding>
                    <text value=&quot;Description&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueCodeableConcept>
                    <text value=&quot;Pass&quot;/>
                </valueCodeableConcept>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:55c89944-60d1-4eea-a2c3-6c53e3622bc5&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationIdentification&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Identification&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Identification&quot;/>
                    </coding>
                    <text value=&quot;Identification&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueCodeableConcept>
                    <text value=&quot;Conforms&quot;/>
                </valueCodeableConcept>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:adb51ab6-00a9-1078-69e5-d32c025a857c&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationIdentification2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Identification&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Identification&quot;/>
                    </coding>
                    <text value=&quot;Identification&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueCodeableConcept>
                    <text value=&quot;Does not conform&quot;/>
                </valueCodeableConcept>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:916a0ae2-9c43-72f0-a22a-c5f8ce902125&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationIdentification3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Identification&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Identification&quot;/>
                    </coding>
                    <text value=&quot;Identification&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueCodeableConcept>
                    <text value=&quot;Conforms&quot;/>
                </valueCodeableConcept>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:6deb4306-1193-24ae-a565-f73225652bdd&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationAssay&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Assay&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Assay&quot;/>
                    </coding>
                    <text value=&quot;Assay&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;94&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>
                </valueQuantity>
                <note>
                    <text value=&quot;CAT1, CAT2 and CAT3 met the clinical specification in place at time of testing; clinical specification release limit for Assay was 93% w/w; clinical specification release limit for Enantiomeric Purity was NLT 91.0%&quot;>
                        <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tableFootnote&quot;>
                            <valueString value=&quot;[1]&quot;/>
                        </extension>
                    </text>
                </note>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:f6aabd2f-5902-57e7-6126-eccd9158a5b5&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationAssay2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Assay&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Assay&quot;/>
                    </coding>
                    <text value=&quot;Assay&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;95&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>
                </valueQuantity>
                <note>
                    <text value=&quot;CAT1, CAT2 and CAT3 met the clinical specification in place at time of testing; clinical specification release limit for Assay was 93% w/w; clinical specification release limit for Enantiomeric Purity was NLT 91.0%&quot;>
                        <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tableFootnote&quot;>
                            <valueString value=&quot;[1]&quot;/>
                        </extension>
                    </text>
                </note>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:32f598e4-a0e0-98dc-41dd-0f8397f953ad&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationAssay3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Assay&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Assay&quot;/>
                    </coding>
                    <text value=&quot;Assay&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;96&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>
                </valueQuantity>
                <note>
                    <text value=&quot;CAT1, CAT2 and CAT3 met the clinical specification in place at time of testing; clinical specification release limit for Assay was 93% w/w; clinical specification release limit for Enantiomeric Purity was NLT 91.0%&quot;>
                        <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tableFootnote&quot;>
                            <valueString value=&quot;[1]&quot;/>
                        </extension>
                    </text>
                </note>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:02d9e6be-833c-1c6d-a64a-baa3935c959d&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-imp1&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Impurities&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.5&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <text value=&quot;Impurity 1&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:d3e572b7-14fd-744b-4123-58741d75571e&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-imp1-2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Impurities&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;Impurities&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.4&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <text value=&quot;Impurity 1&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:fe6ca484-a755-9a0b-a074-b6ee0a907ff8&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-imp1-3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Impurities&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.2&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <text value=&quot;Impurity 1&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:da92c71f-a12a-1980-11a3-80e3d1852244&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-imp2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Impurities&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.5&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <text value=&quot;Impurity 2&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:8bf75da1-9221-66fe-6725-c64cb45a57e6&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-imp2-2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Impurities&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.4&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <text value=&quot;Impurity 2&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:31bfeff4-4a7d-3be5-878e-fb674d3d5487&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-imp2-3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Impurities&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.2&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <text value=&quot;Impurity 2&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:732237a9-4b3b-27cc-99ca-6b913e622a29&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-imp3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Impurities&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <text value=&quot;Impurity 3&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:52afbeb4-4958-a275-a0ca-d70b2b5240ec&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-imp3-2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Impurities&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <text value=&quot;Impurity 3&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:7fc395b1-59e4-78be-0512-cf92133c0fac&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-imp3-3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Impurities&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <text value=&quot;Impurity 3&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:9c98bd8a-7dda-2f01-0dbd-8c60b60e8572&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-imp-unspecified&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Impurities&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <text value=&quot;Any individual unspecified impurity&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:97b16ff8-8e0f-915a-9d65-7fab108f40c2&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-imp-unspecified-2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Impurities&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <text value=&quot;Any individual unspecified impurity&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:0244eafe-3126-909b-7d8d-4253f45f525c&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-imp-unspecified-3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Impurities&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <!-- could have the code of an imw substance, or could have an extension to point to it as a resource -->
                        <text value=&quot;Any individual unspecified impurity&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:10b80cbd-45d3-9be1-63b9-29f04b47376c&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-imp-total&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Impurities&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.02&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Ima&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;Total impurities&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:84f015ac-9572-324f-8013-0b999cc95bbd&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-imp-total-2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Impurities&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.02&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <text value=&quot;Total impurities&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:987daeaa-4c2a-72b7-780f-4a9403163a3e&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-imp-total-3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Impurities&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.02&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <!-- could have the code of an imr substance, or could have an extension to point to it as a resource -->
                        <text value=&quot;Total impurities&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:ff26533d-88a8-7f18-a275-42dc1373a388&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationMutagenic&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Mutagenic&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Mutagenic&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;20&quot;/>
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
                        <text value=&quot;Impurity - Mutagenic&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:c99666d2-7962-9a71-58f6-7b2e5aa662f5&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationMutagenic2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Mutagenic&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Mutagenic&quot;/>
                    </coding>
                    <text value=&quot;Mutagenic&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;22&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>
                </valueQuantity>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:c18e21d3-7113-4d08-4ff3-0c9718596f64&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationMutagenic3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Mutagenic&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Mutagenic&quot;/>
                    </coding>
                    <text value=&quot;Mutagenic&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;18&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>
                </valueQuantity>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:66fdac46-2a6b-a66f-891b-8dcf67cc46c7&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationEnantiomericPurity&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Enantiomeric&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;ZZZ&quot;/>
                        <display value=&quot;Enantiomeric purity&quot;/>
                    </coding>
                    <text value=&quot;Enantiomeric purity&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;91.5&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>
                </valueQuantity>
                <note>
                    <text value=&quot;CAT1, CAT2 and CAT3 met the clinical specification in place at time of testing; clinical specification release limit for Assay was 93% w/w; clinical specification release limit for Enantiomeric Purity was NLT 91.0%&quot;>
                        <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tableFootnote&quot;>
                            <valueString value=&quot;[1]&quot;/>
                        </extension>
                    </text>
                </note>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:8306cfc5-158f-1a53-a683-048b226060d9&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationEnantiomericPurity2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Enantiomeric&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;ZZZ&quot;/>
                        <display value=&quot;Enantiomeric purity&quot;/>
                    </coding>
                    <text value=&quot;Enantiomeric purity&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;91.5&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>
                </valueQuantity>
                <note>
                    <text value=&quot;CAT1, CAT2 and CAT3 met the clinical specification in place at time of testing; clinical specification release limit for Assay was 93% w/w; clinical specification release limit for Enantiomeric Purity was NLT 91.0%&quot;>
                        <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tableFootnote&quot;>
                            <valueString value=&quot;[1]&quot;/>
                        </extension>
                    </text>
                </note>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:fc49ad55-07d1-997d-6695-bbff44746e75&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationEnantiomericPurity3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Enantiomeric&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;ZZZ&quot;/>
                        <display value=&quot;Enantiomeric purity&quot;/>
                    </coding>
                    <text value=&quot;Enantiomeric purity&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;91.5&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>
                </valueQuantity>
                <note>
                    <text value=&quot;Batch 3 did not originally meet specification criteria, and was subject to reprocessing and repurification. The updated result is presented in this table. The lot was not distributed for human use.&quot;>
                        <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tableFootnote&quot;>
                            <valueString value=&quot;[3]&quot;/>
                        </extension>
                    </text>
                </note>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:f8160692-a7a8-3fa6-9f35-e7df35f51ac0&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationSolvents-sol1&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Solvents&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;SOL&quot;/>
                        <display value=&quot;Residual solvents&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SOL&quot;/>
                            <display value=&quot;Solvent&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;Solvent 1&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:a531aee9-4c21-06af-352c-a3615b5d957e&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationSolvents-sol1-2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Solvents&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;SOL&quot;/>
                        <display value=&quot;Residual solvents&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SOL&quot;/>
                            <display value=&quot;Solvent&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;Solvent 1&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:033ce81d-5f0d-7a3e-93d3-fc64e122a1fd&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationSolvents-sol1-3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Solvents&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;SOL&quot;/>
                        <display value=&quot;Residual solvents&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SOL&quot;/>
                            <display value=&quot;Solvent&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;Solvent 1&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:ba8a182e-8571-6cbd-047b-612735d599d2&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationSolvents-sol2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Solvents&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;SOL&quot;/>
                        <display value=&quot;Residual solvents&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;1.4&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SOL&quot;/>
                            <display value=&quot;Solvent&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;Solvent 2&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:0b5b94cc-7a1a-4ada-66c7-954ceb528d67&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationSolvents-sol2-2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Solvents&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;SOL&quot;/>
                        <display value=&quot;Residual solvents&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;1.5&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SOL&quot;/>
                            <display value=&quot;Solvent&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;Solvent 2&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:6afaacee-11a6-58b2-47df-5f79722c66ac&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationSolvents-sol2-3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Solvents&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;SOL&quot;/>
                        <display value=&quot;Residual solvents&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;1.2&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SOL&quot;/>
                            <display value=&quot;Solvent&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;Solvent 2&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:c2644a86-1684-286e-00e2-dcaf907a8970&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationWater&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Water&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;WWW&quot;/>
                        <display value=&quot;Water Content&quot;/>
                    </coding>
                    <text value=&quot;Water Content&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.8&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:cb5f6872-6eeb-727a-7c33-f2c438581a1c&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationWater2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Water&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;WWW&quot;/>
                        <display value=&quot;Water Content&quot;/>
                    </coding>
                    <text value=&quot;Water Content&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.8&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:7faaf980-7c10-7b9a-9572-1bacd485824e&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationWater3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Water&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Water Content&quot;/>
                    </coding>
                    <text value=&quot;Water Content&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.8&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:e4d2118a-8562-9eb1-2c14-4e145d2a95fc&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationParticleSize-size1&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Particles&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.5&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <text value=&quot;D(v,0.9)&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:ec078717-9512-4db4-77c6-2c7e29d213a6&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationParticleSize-size1-2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Particles&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.4&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <text value=&quot;D(v,0.9)&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:05cfb495-2580-561a-688d-ce6ea24c8962&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationParticleSize-size1-3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Particles&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.2&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;D(v,0.9)&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:d2a60ae5-96b4-3d13-38da-729c652347a3&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationParticleSize-size2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Particles&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.5&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;D(v,0.5)&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:c3f51325-2f5f-194c-919b-2219ee1f5c45&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationParticleSize-size2-2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Particles&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.4&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;D(v,0.5)&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:e9d89693-11b1-13ed-5cde-606fc1b8372c&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationParticleSize-size2-3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Particles&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.2&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;D(v,0.5)&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:2659b000-96e2-1b8b-129b-0c00e1074b0f&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationParticleSize-size3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Particles&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;D(v,0.1)&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:10b47328-36fa-343d-5699-5b32b30a6d33&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationParticleSize-size3-2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Particles&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;D(v,0.1)&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:e6780766-317a-382f-92d2-79825f506cc5&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationParticleSize-size3-3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Particles&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;D(v,0.1)&quot;/>
                    </valueCodeableConcept>
                </component>
            </Observation>
        </resource>
    </entry>" id="Bundle-substance-batch-analysis">Bundle</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/bundle.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/bundle.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/bundle.html#tt-uml">R6</a>]</span><div class="debugOff">id: substance-batch-analysis</div>
<div class="debugOff"></div>
<div><span title="
<Bundle>
    ...
    <type value=&quot;collection&quot;>">Type: </span><span><span>collection</span></span></div>
</div>
</div>
<div class="org indent"><span class="bold">Batch Analysis Report - Substance, on Stelbatolol</span><br><br style="line-height:6px;"><div ondblclick="summaryHandler(event)" class="indent summaryUnit comp"><a class="plainLink"><span class="bold" title="DiagnosticReport (id: batchAnalysisReport)(fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)

<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                <!-- ideally this wants a subject, but it can only be a Medication (batch) and we have multiple. 
                     however the observations themselves do have subjects -->
                <id value=&quot;batchAnalysisReport&quot;/>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/workflow-triggeredBy&quot;>
                    <valueReference>
                        <reference value=&quot;PlanDefinition/specificationProtocol&quot;/>
                    </valueReference>
                </extension>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/reportType&quot;/>
                        <code value=&quot;111&quot;/>
                        <display value=&quot;Batch Analysis Report&quot;/>
                    </coding>
                </code>
                <effectiveDateTime value=&quot;2020-12&quot;/>
                <!-- start of stability test -->
                <result>
                    <reference value=&quot;Observation/observation-simple-dxpq-ex1&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDescription2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDescription3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationIdentification&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationIdentification2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationIdentification3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationAssay&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationAssay2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationAssay3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp1&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp1-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp1-3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp2-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp2-3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp3-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp3-3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp-unspecified&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp-unspecified-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp-unspecified-3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp-total&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp-total-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp-total-3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp1&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp1-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp1-3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp2-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp2-3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp3-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp3-3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp-unspecified&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp-unspecified-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp-unspecified-3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp-total&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp-total-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp-total-3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationMutagenic&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationMutagenic2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationMutagenic3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationEnantiomericPurity&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationEnantiomericPurity2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationEnantiomericPurity3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationSolvents-sol1&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationSolvents-sol1-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationSolvents-sol1-3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationSolvents-sol2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationSolvents-sol2-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationSolvents-sol2-3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationWater&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationWater2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationWater3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationParticleSize-size1&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationParticleSize-size1-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationParticleSize-size1-3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationParticleSize-size2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationParticleSize-size2-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationParticleSize-size2-3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationParticleSize-size3&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationParticleSize-size3-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/observationParticleSize-size3-3&quot;/>
                </result>
                <conclusion value=&quot;The samples have been assessed and the conclusion is...&quot;/>" id="DiagnosticReport-batchAnalysisReport">Diagnostic Report<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                <code>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/reportType&quot;/>
                        <code value=&quot;111&quot;/>
                        <display value=&quot;Batch Analysis Report&quot;/>">Batch Analysis Report<span class="greyOff"> [111]</span><span class="greyOff"> (http://accumulus.org/fhir/code/reportType)</span></span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/diagnosticreport.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/diagnosticreport.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/diagnosticreport.html#tt-uml">R6</a>]</span><div class="debugOff">id: batchAnalysisReport</div>
<div class="debugOff"> fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006</div>
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
                        <system value=&quot;http://accumulus.org/fhir/code/reportType&quot;/>
                        <code value=&quot;111&quot;/>
                        <display value=&quot;Batch Analysis Report&quot;/>
                    </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                <code>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/reportType&quot;/>
                        <code value=&quot;111&quot;/>
                        <display value=&quot;Batch Analysis Report&quot;/>">Batch Analysis Report<span class="greyOff"> [111]</span><span class="greyOff"> (http://accumulus.org/fhir/code/reportType)</span></span></span></div>
<div class="summaryHiddenOff"></div>
<div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/workflow-triggeredBy&quot;>
                    <valueReference>
                        <reference value=&quot;PlanDefinition/specificationProtocol&quot;/>
                    </valueReference>">Triggered By</span>: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span></span><div class="summaryHiddenOff"></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <conclusion value=&quot;The samples have been assessed and the conclusion is...&quot;>">Conclusion: </span><span>The samples have been assessed and the conclusion is...</span></div>
<div class="summaryHiddenOff"></div>
<div class="htmlTableRemove"><br style="line-height:6px;"><div class="indent-no-border"><b><div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <title value=&quot;Batch Specification for Drug Product&quot;>">Results: </span><span>Batch Specification for Drug Product</span></div></b><br style="line-height:6px;"><table class="rounded-corners white" id="tabularModeTable" style="width:70%">
<tr>
<th colspan="3"></th>
<th colspan="3">Lot Number</th>
</tr>
<tr>
<th rowspan="1">Test Procedure</th>
<th colspan="0">Acceptance Criteria</th>
<th rowspan="1">Method Reference</th><th><a href="#Substance-substance-dxpq-ex1" title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <identifier>
                    <value value=&quot;CAT1&quot;>" class="noUnderline">CAT1</a></th>
<th><a href="#Substance-actual-batch-substance-2" title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <identifier>
                    <value value=&quot;CAT2&quot;>" class="noUnderline">CAT2</a></th>
<th><a href="#Substance-actual-batch-substance-3" title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <identifier>
                    <value value=&quot;CAT3&quot;>" class="noUnderline">CAT3</a></th>
</tr>
<tr>
<td><a href="#ObservationDefinition-Description" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Description&quot;>" class="noUnderline">Description</a></td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://accumulus.org/fhir/extension/qualifiedValueText&quot;>
                        <valueString value=&quot;A white to brown powder&quot;>">A white to brown powder</span></td>
<td class="centred">Visual inspection</td>
<td class="centred"><a href="#Observation-observation-simple-dxpq-ex1" class="noUnderline">Pass</a></td>
<td class="centred"><a href="#Observation-observationDescription2" class="noUnderline">Pass</a></td>
<td class="centred"><a href="#Observation-observationDescription3" class="noUnderline">Pass</a></td>
</tr>
<tr>
<td><a href="#ObservationDefinition-Identification" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Identification&quot;>" class="noUnderline">Identification</a></td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://accumulus.org/fhir/extension/qualifiedValueText&quot;>
                        <valueString value=&quot;Conforms with reference&quot;>">Conforms with reference</span></td>
<td class="centred">Identification by IR spectroscopy Identification by HPLC</td>
<td class="centred"><a href="#Observation-observationIdentification" class="noUnderline">Conforms</a></td>
<td class="centred"><a href="#Observation-observationIdentification2" class="noUnderline">Does not conform</a></td>
<td class="centred"><a href="#Observation-observationIdentification3" class="noUnderline">Conforms</a></td>
</tr>
<tr>
<td><a href="#ObservationDefinition-Assay" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Assay&quot;>" class="noUnderline">Assay</a></td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        <low>
                            <value value=&quot;98&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%{w/w}&quot;/>
                            <!-- not sure this is a correct ucum code -->
                        </low>
                        <high>
                            <value value=&quot;102&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%{w/w}&quot;/>
                            <!-- not sure this is a correct ucum code -->
                        </high>">98 % w/w - 102 % w/w</span></td>
<td class="centred">Assay by LC</td>
<td class="centred"><a href="#Observation-observationAssay" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;94&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>">94</span><span class="greyOff"> [%] (http://unitsofmeasure.org)</span><span title="CAT1, CAT2 and CAT3 met the clinical specification in place at time of testing; clinical specification release limit for Assay was 93% w/w; clinical specification release limit for Enantiomeric Purity was NLT 91.0%" class="hand"> [1]</span></a></td>
<td class="centred"><a href="#Observation-observationAssay2" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;95&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>">95</span><span class="greyOff"> [%] (http://unitsofmeasure.org)</span><span title="CAT1, CAT2 and CAT3 met the clinical specification in place at time of testing; clinical specification release limit for Assay was 93% w/w; clinical specification release limit for Enantiomeric Purity was NLT 91.0%" class="hand"> [1]</span></a></td>
<td class="centred"><a href="#Observation-observationAssay3" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;96&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>">96</span><span class="greyOff"> [%] (http://unitsofmeasure.org)</span><span title="CAT1, CAT2 and CAT3 met the clinical specification in place at time of testing; clinical specification release limit for Assay was 93% w/w; clinical specification release limit for Enantiomeric Purity was NLT 91.0%" class="hand"> [1]</span></a></td>
</tr>
<tr>
<td colspan="6">Drug Substance Related Organic impurities</td>
<tr>
<td style="padding-left:20px">Impurity 1</td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    ...
                    <range>
                        <high>
                            <value value=&quot;0.5&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>">NMT 0.5 % w/w</span></td>
<td rowspan="5" class="centred">Organic impurities by LC</td>
<td class="centred"><a href="#Observation-observationDegradation-imp1" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.5&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.5</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></a></td>
<td class="centred"><a href="#Observation-observationDegradation-imp1-2" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.4&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.4</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></a></td>
<td class="centred"><a href="#Observation-observationDegradation-imp1-3" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.2&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.2</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></a></td>
</tr>
<tr>
<td style="padding-left:20px">Impurity 2</td>
<td class="centred" style="border-right: 1px solid black;"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    ...
                    <range>
                        <high>
                            <value value=&quot;0.5&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>">NMT 0.5 % w/w</span></td>
<td class="centred"><a href="#Observation-observationDegradation-imp2" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.5&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.5</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></a></td>
<td class="centred"><a href="#Observation-observationDegradation-imp2-2" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.4&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.4</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></a></td>
<td class="centred"><a href="#Observation-observationDegradation-imp2-3" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.2&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.2</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></a></td>
</tr>
<tr>
<td style="padding-left:20px">Impurity 3 <span title="Impurity 3 was included in the release specification throughout clinical development, and no longer forms a part of a commercial release specification; see Section S.4.5 Justification of Specification and Section S.2.5 Validation (PPQ) for additional data" class="hand">[2]</span></td>
<td class="centred" style="border-right: 1px solid black;"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    ...
                    <range>
                        <high>
                            <value value=&quot;0.5&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>">NMT 0.5 % w/w</span></td>
<td class="centred"><a href="#Observation-observationDegradation-imp3" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.1</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></a></td>
<td class="centred"><a href="#Observation-observationDegradation-imp3-2" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.1</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></a></td>
<td class="centred"><a href="#Observation-observationDegradation-imp3-3" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.1</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></a></td>
</tr>
<tr>
<td style="padding-left:20px">Any individual unspecified impurity</td>
<td class="centred" style="border-right: 1px solid black;"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    ...
                    <range>
                        <high>
                            <value value=&quot;0.10&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>">NMT 0.10 % w/w</span></td>
<td class="centred"><a href="#Observation-observationDegradation-imp-unspecified" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.1</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></a></td>
<td class="centred"><a href="#Observation-observationDegradation-imp-unspecified-2" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.1</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></a></td>
<td class="centred"><a href="#Observation-observationDegradation-imp-unspecified-3" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.1</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></a></td>
</tr>
<tr>
<td style="padding-left:20px">Total impurities</td>
<td class="centred" style="border-right: 1px solid black;"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    ...
                    <range>
                        <high>
                            <value value=&quot;2.0&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>">NMT 2.0 % w/w</span></td>
<td class="centred"><a href="#Observation-observationDegradation-imp-total" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.02&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.02</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></a></td>
<td class="centred"><a href="#Observation-observationDegradation-imp-total-2" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.02&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.02</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></a></td>
<td class="centred"><a href="#Observation-observationDegradation-imp-total-3" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.02&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.02</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></a></td>
</tr>
</tr>
<tr>
<td><a href="#ObservationDefinition-Mutagenic" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Mutagenic impurities&quot;>" class="noUnderline">Mutagenic impurities</a></td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    ...
                    <range>
                        <high>
                            <value value=&quot;50&quot;/>
                            <unit value=&quot;ppm&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;[ppm]&quot;/>
                        </high>">NMT 50 ppm</span></td>
<td class="centred">Impurity 5 content by LC-MS</td>
<td class="centred"><a href="#Observation-observationMutagenic" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;20&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>">20</span><span class="greyOff"> [[ppm]] (http://unitsofmeasure.org)</span></a></td>
<td class="centred"><a href="#Observation-observationMutagenic2" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;22&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>">22</span><span class="greyOff"> [%] (http://unitsofmeasure.org)</span></a></td>
<td class="centred"><a href="#Observation-observationMutagenic3" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;18&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>">18</span><span class="greyOff"> [%] (http://unitsofmeasure.org)</span></a></td>
</tr>
<tr>
<td><a href="#ObservationDefinition-Enantiomeric" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Enantiomeric purity&quot;>" class="noUnderline">Enantiomeric purity</a></td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        <low>
                            <value value=&quot;99.6&quot;/>
                            <unit value=&quot;%&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%&quot;/>
                        </low>">NLT 99.6 %</span></td>
<td class="centred">Enantiomeric purity by LC</td>
<td class="centred"><a href="#Observation-observationEnantiomericPurity" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;91.5&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>">91.5</span><span class="greyOff"> [%] (http://unitsofmeasure.org)</span><span title="CAT1, CAT2 and CAT3 met the clinical specification in place at time of testing; clinical specification release limit for Assay was 93% w/w; clinical specification release limit for Enantiomeric Purity was NLT 91.0%" class="hand"> [1]</span></a></td>
<td class="centred"><a href="#Observation-observationEnantiomericPurity2" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;91.5&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>">91.5</span><span class="greyOff"> [%] (http://unitsofmeasure.org)</span><span title="CAT1, CAT2 and CAT3 met the clinical specification in place at time of testing; clinical specification release limit for Assay was 93% w/w; clinical specification release limit for Enantiomeric Purity was NLT 91.0%" class="hand"> [1]</span></a></td>
<td class="centred"><a href="#Observation-observationEnantiomericPurity3" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;91.5&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>">91.5</span><span class="greyOff"> [%] (http://unitsofmeasure.org)</span><span title="Batch 3 did not originally meet specification criteria, and was subject to reprocessing and repurification. The updated result is presented in this table. The lot was not distributed for human use." class="hand"> [3]</span></a></td>
</tr>
<tr>
<td colspan="6">Residual solvents</td>
<tr>
<td style="padding-left:20px">Solvent 1</td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    ...
                    <range>
                        <high>
                            <value value=&quot;0.1&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>">NMT 0.1 % w/w</span></td>
<td rowspan="2" class="centred">Residual solvents by headspace GC</td>
<td class="centred"><a href="#Observation-observationSolvents-sol1" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.1</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></a></td>
<td class="centred"><a href="#Observation-observationSolvents-sol1-2" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.1</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></a></td>
<td class="centred"><a href="#Observation-observationSolvents-sol1-3" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.1</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></a></td>
</tr>
<tr>
<td style="padding-left:20px">Solvent 2</td>
<td class="centred" style="border-right: 1px solid black;"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    ...
                    <range>
                        <high>
                            <value value=&quot;2.0&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>">NMT 2.0 % w/w</span></td>
<td class="centred"><a href="#Observation-observationSolvents-sol2" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;1.4&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">1.4</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></a></td>
<td class="centred"><a href="#Observation-observationSolvents-sol2-2" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;1.5&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">1.5</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></a></td>
<td class="centred"><a href="#Observation-observationSolvents-sol2-3" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;1.2&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">1.2</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></a></td>
</tr>
</tr>
<tr>
<td><a href="#ObservationDefinition-Water" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Water Content&quot;>" class="noUnderline">Water Content</a></td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        <high>
                            <value value=&quot;1.0&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>">NMT 1.0 % w/w</span></td>
<td class="centred">USP Karl Fischer titration</td>
<td class="centred"><a href="#Observation-observationWater" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.8&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.8</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></a></td>
<td class="centred"><a href="#Observation-observationWater2" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.8&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.8</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></a></td>
<td class="centred"><a href="#Observation-observationWater3" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.8&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.8</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></a></td>
</tr>
<tr>
<td colspan="6">Particle size distribution <span title="Particle Size Distribution was included in the release specification throughout clinical development, and no longer forms a part of the commercial release specification; See Section S.4.5 Justification of Specification for data and rationale." class="hand">[4]</span></td>
<tr>
<td style="padding-left:20px">D(v,0.9)</td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    ...
                    <range>
                        <high>
                            <value value=&quot;319&quot;/>
                            <unit value=&quot;µm&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;um&quot;/>
                        </high>">NMT 319 µm</span></td>
<td rowspan="3" class="centred">Laser diffraction</td>
<td class="centred"><a href="#Observation-observationParticleSize-size1" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.5&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.5</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></a></td>
<td class="centred"><a href="#Observation-observationParticleSize-size1-2" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.4&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.4</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></a></td>
<td class="centred"><a href="#Observation-observationParticleSize-size1-3" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.2&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.2</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></a></td>
</tr>
<tr>
<td style="padding-left:20px">D(v,0.5)</td>
<td class="centred" style="border-right: 1px solid black;"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    ...
                    <range>
                        <high>
                            <value value=&quot;145&quot;/>
                            <unit value=&quot;µm&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;um&quot;/>
                        </high>">NMT 145 µm</span></td>
<td class="centred"><a href="#Observation-observationParticleSize-size2" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.5&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.5</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></a></td>
<td class="centred"><a href="#Observation-observationParticleSize-size2-2" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.4&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.4</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></a></td>
<td class="centred"><a href="#Observation-observationParticleSize-size2-3" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.2&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.2</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></a></td>
</tr>
<tr>
<td style="padding-left:20px">D(v,0.1)</td>
<td class="centred" style="border-right: 1px solid black;"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    ...
                    <range>
                        <high>
                            <value value=&quot;20&quot;/>
                            <unit value=&quot;µm&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;um&quot;/>
                        </high>">NMT 20 µm</span></td>
<td class="centred"><a href="#Observation-observationParticleSize-size3" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.1</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></a></td>
<td class="centred"><a href="#Observation-observationParticleSize-size3-2" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.1</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></a></td>
<td class="centred"><a href="#Observation-observationParticleSize-size3-3" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.1</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></a></td>
</tr>
</tr>
</table><br style="line-height:6px;">[1] CAT1, CAT2 and CAT3 met the clinical specification in place at time of testing; clinical specification release limit for Assay was 93% w/w; clinical specification release limit for Enantiomeric Purity was NLT 91.0%<br>[2] Impurity 3 was included in the release specification throughout clinical development, and no longer forms a part of a commercial release specification; see Section S.4.5 Justification of Specification and Section S.2.5 Validation (PPQ) for additional data<br>[3] Batch 3 did not originally meet specification criteria, and was subject to reprocessing and repurification. The updated result is presented in this table. The lot was not distributed for human use.<br>[4] Particle Size Distribution was included in the release specification throughout clinical development, and no longer forms a part of the commercial release specification; See Section S.4.5 Justification of Specification for data and rationale.<br><br style="line-height:6px;"></div><br style="line-height:6px;"></div>
<div class="indent compText summaryUnit"><span title="
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observation-simple-dxpq-ex1&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDescription2&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDescription3&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationIdentification&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationIdentification2&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationIdentification3&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationAssay&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationAssay2&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationAssay3&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp1&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp1-2&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp1-3&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp2&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp2-2&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp2-3&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp3&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp3-2&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp3-3&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp-unspecified&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp-unspecified-2&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp-unspecified-3&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp-total&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp-total-2&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp-total-3&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp1&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp1-2&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp1-3&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp2&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp2-2&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp2-3&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp3&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp3-2&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp3-3&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp-unspecified&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp-unspecified-2&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp-unspecified-3&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp-total&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp-total-2&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDegradation-imp-total-3&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationMutagenic&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationMutagenic2&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationMutagenic3&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationEnantiomericPurity&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationEnantiomericPurity2&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationEnantiomericPurity3&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationSolvents-sol1&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationSolvents-sol1-2&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationSolvents-sol1-3&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationSolvents-sol2&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationSolvents-sol2-2&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationSolvents-sol2-3&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationWater&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationWater2&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationWater3&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationParticleSize-size1&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationParticleSize-size1-2&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationParticleSize-size1-3&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationParticleSize-size2&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationParticleSize-size2-2&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationParticleSize-size2-3&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationParticleSize-size3&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationParticleSize-size3-2&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationParticleSize-size3-3&quot;/>">Result</span><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observation-simple-dxpq-ex1)(fullUrl: urn:uuid:81f552f9-8458-3cf4-8379-eea5417a9de2)
Profile: http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Observation-simple-dxpq 

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observation-simple-dxpq-ex1&quot;/>
                <!-- was observationDescription -->
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Observation-simple-dxpq&quot;/>
                </meta>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Description&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/dx-pq/CodeSystem/CodeSystem-local-codes-dxpq&quot;/>
                        <code value=&quot;XXX-2&quot;/>
                        <display value=&quot;Description&quot;/>
                    </coding>
                    <text value=&quot;Description&quot;/>
                </code>
                <subject>
                    <!--reference value=&quot;Substance/actual-batch-substance&quot;/-->
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueCodeableConcept>
                    <text value=&quot;Pass&quot;/>
                </valueCodeableConcept>" id="Observation-observation-simple-dxpq-ex1">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/dx-pq/CodeSystem/CodeSystem-local-codes-dxpq&quot;/>
                        <code value=&quot;XXX-2&quot;/>
                        <display value=&quot;Description&quot;/>">Description<span class="greyOff"> [XXX-2]</span><span class="greyOff"> (http://hl7.org/fhir/uv/dx-pq/CodeSystem/CodeSystem-local-codes-dxpq)</span></span><span style="white-space:normal;"> - Text: Description</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observation-simple-dxpq-ex1</div><div class="debugOff"> fullUrl: urn:uuid:81f552f9-8458-3cf4-8379-eea5417a9de2</div><div class="debugOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <system value=&quot;http://hl7.org/fhir/uv/dx-pq/CodeSystem/CodeSystem-local-codes-dxpq&quot;/>
                        <code value=&quot;XXX-2&quot;/>
                        <display value=&quot;Description&quot;/>
                    </coding>
                    <text value=&quot;Description&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/dx-pq/CodeSystem/CodeSystem-local-codes-dxpq&quot;/>
                        <code value=&quot;XXX-2&quot;/>
                        <display value=&quot;Description&quot;/>">Description<span class="greyOff"> [XXX-2]</span><span class="greyOff"> (http://hl7.org/fhir/uv/dx-pq/CodeSystem/CodeSystem-local-codes-dxpq)</span></span><span style="white-space:normal;"> - Text: Description</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueCodeableConcept>
                    <text value=&quot;Pass&quot;/>">
				Value:
				<span style="white-space:normal;">Pass</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <!--reference value=&quot;Substance/actual-batch-substance&quot;/-->
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>">Subject</span>: CAT1 (<a href="#Substance-substance-dxpq-ex1" title="click to see target - id=substance-dxpq-ex1">Substance</a>)<span class="debugOff"> id: substance-dxpq-ex1</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observation-simple-dxpq-ex1&quot;/>
                <!-- was observationDescription -->
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Observation-simple-dxpq&quot;/>
                </meta>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Description&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/dx-pq/CodeSystem/CodeSystem-local-codes-dxpq&quot;/>
                        <code value=&quot;XXX-2&quot;/>
                        <display value=&quot;Description&quot;/>
                    </coding>
                    <text value=&quot;Description&quot;/>
                </code>
                <subject>
                    <!--reference value=&quot;Substance/actual-batch-substance&quot;/-->
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueCodeableConcept>
                    <text value=&quot;Pass&quot;/>
                </valueCodeableConcept>">Instantiates</span>: Description - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Description" title="click to see target - id=Description">ObservationDefinition</a>)<span class="debugOff"> id: Description</span></span><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationDescription2)(fullUrl: urn:uuid:50bf6f69-a3f5-678b-469b-c5df5cca4c86)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDescription2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Description&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Description&quot;/>
                    </coding>
                    <text value=&quot;Description&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueCodeableConcept>
                    <text value=&quot;Pass&quot;/>
                </valueCodeableConcept>" id="Observation-observationDescription2">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Description&quot;/>">Description<span class="greyOff"> [XXX]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Description</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationDescription2</div><div class="debugOff"> fullUrl: urn:uuid:50bf6f69-a3f5-678b-469b-c5df5cca4c86</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Description&quot;/>
                    </coding>
                    <text value=&quot;Description&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Description&quot;/>">Description<span class="greyOff"> [XXX]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Description</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueCodeableConcept>
                    <text value=&quot;Pass&quot;/>">
				Value:
				<span style="white-space:normal;">Pass</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>">Subject</span>: CAT2 (<a href="#Substance-actual-batch-substance-2" title="click to see target - id=actual-batch-substance-2">Substance</a>)<span class="debugOff"> id: actual-batch-substance-2</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDescription2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Description&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Description&quot;/>
                    </coding>
                    <text value=&quot;Description&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueCodeableConcept>
                    <text value=&quot;Pass&quot;/>
                </valueCodeableConcept>">Instantiates</span>: Description - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Description" title="click to see target - id=Description">ObservationDefinition</a>)<span class="debugOff"> id: Description</span></span><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationDescription3)(fullUrl: urn:uuid:145fd3b7-3678-867f-4298-a6c781b86de3)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDescription3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Description&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Description&quot;/>
                    </coding>
                    <text value=&quot;Description&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueCodeableConcept>
                    <text value=&quot;Pass&quot;/>
                </valueCodeableConcept>" id="Observation-observationDescription3">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Description&quot;/>">Description<span class="greyOff"> [XXX]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Description</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationDescription3</div><div class="debugOff"> fullUrl: urn:uuid:145fd3b7-3678-867f-4298-a6c781b86de3</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Description&quot;/>
                    </coding>
                    <text value=&quot;Description&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Description&quot;/>">Description<span class="greyOff"> [XXX]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Description</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueCodeableConcept>
                    <text value=&quot;Pass&quot;/>">
				Value:
				<span style="white-space:normal;">Pass</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>">Subject</span>: CAT3 (<a href="#Substance-actual-batch-substance-3" title="click to see target - id=actual-batch-substance-3">Substance</a>)<span class="debugOff"> id: actual-batch-substance-3</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDescription3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Description&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Description&quot;/>
                    </coding>
                    <text value=&quot;Description&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueCodeableConcept>
                    <text value=&quot;Pass&quot;/>
                </valueCodeableConcept>">Instantiates</span>: Description - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Description" title="click to see target - id=Description">ObservationDefinition</a>)<span class="debugOff"> id: Description</span></span><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationIdentification)(fullUrl: urn:uuid:55c89944-60d1-4eea-a2c3-6c53e3622bc5)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationIdentification&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Identification&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Identification&quot;/>
                    </coding>
                    <text value=&quot;Identification&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueCodeableConcept>
                    <text value=&quot;Conforms&quot;/>
                </valueCodeableConcept>" id="Observation-observationIdentification">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Identification&quot;/>">Identification<span class="greyOff"> [XXX]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Identification</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationIdentification</div><div class="debugOff"> fullUrl: urn:uuid:55c89944-60d1-4eea-a2c3-6c53e3622bc5</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Identification&quot;/>
                    </coding>
                    <text value=&quot;Identification&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Identification&quot;/>">Identification<span class="greyOff"> [XXX]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Identification</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueCodeableConcept>
                    <text value=&quot;Conforms&quot;/>">
				Value:
				<span style="white-space:normal;">Conforms</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>">Subject</span>: CAT1 (<a href="#Substance-substance-dxpq-ex1" title="click to see target - id=substance-dxpq-ex1">Substance</a>)<span class="debugOff"> id: substance-dxpq-ex1</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationIdentification&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Identification&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Identification&quot;/>
                    </coding>
                    <text value=&quot;Identification&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueCodeableConcept>
                    <text value=&quot;Conforms&quot;/>
                </valueCodeableConcept>">Instantiates</span>: Identification - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Identification" title="click to see target - id=Identification">ObservationDefinition</a>)<span class="debugOff"> id: Identification</span></span><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationIdentification2)(fullUrl: urn:uuid:adb51ab6-00a9-1078-69e5-d32c025a857c)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationIdentification2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Identification&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Identification&quot;/>
                    </coding>
                    <text value=&quot;Identification&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueCodeableConcept>
                    <text value=&quot;Does not conform&quot;/>
                </valueCodeableConcept>" id="Observation-observationIdentification2">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Identification&quot;/>">Identification<span class="greyOff"> [XXX]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Identification</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationIdentification2</div><div class="debugOff"> fullUrl: urn:uuid:adb51ab6-00a9-1078-69e5-d32c025a857c</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Identification&quot;/>
                    </coding>
                    <text value=&quot;Identification&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Identification&quot;/>">Identification<span class="greyOff"> [XXX]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Identification</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueCodeableConcept>
                    <text value=&quot;Does not conform&quot;/>">
				Value:
				<span style="white-space:normal;">Does not conform</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>">Subject</span>: CAT2 (<a href="#Substance-actual-batch-substance-2" title="click to see target - id=actual-batch-substance-2">Substance</a>)<span class="debugOff"> id: actual-batch-substance-2</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationIdentification2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Identification&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Identification&quot;/>
                    </coding>
                    <text value=&quot;Identification&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueCodeableConcept>
                    <text value=&quot;Does not conform&quot;/>
                </valueCodeableConcept>">Instantiates</span>: Identification - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Identification" title="click to see target - id=Identification">ObservationDefinition</a>)<span class="debugOff"> id: Identification</span></span><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationIdentification3)(fullUrl: urn:uuid:916a0ae2-9c43-72f0-a22a-c5f8ce902125)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationIdentification3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Identification&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Identification&quot;/>
                    </coding>
                    <text value=&quot;Identification&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueCodeableConcept>
                    <text value=&quot;Conforms&quot;/>
                </valueCodeableConcept>" id="Observation-observationIdentification3">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Identification&quot;/>">Identification<span class="greyOff"> [XXX]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Identification</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationIdentification3</div><div class="debugOff"> fullUrl: urn:uuid:916a0ae2-9c43-72f0-a22a-c5f8ce902125</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Identification&quot;/>
                    </coding>
                    <text value=&quot;Identification&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Identification&quot;/>">Identification<span class="greyOff"> [XXX]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Identification</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueCodeableConcept>
                    <text value=&quot;Conforms&quot;/>">
				Value:
				<span style="white-space:normal;">Conforms</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>">Subject</span>: CAT3 (<a href="#Substance-actual-batch-substance-3" title="click to see target - id=actual-batch-substance-3">Substance</a>)<span class="debugOff"> id: actual-batch-substance-3</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationIdentification3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Identification&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Identification&quot;/>
                    </coding>
                    <text value=&quot;Identification&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueCodeableConcept>
                    <text value=&quot;Conforms&quot;/>
                </valueCodeableConcept>">Instantiates</span>: Identification - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Identification" title="click to see target - id=Identification">ObservationDefinition</a>)<span class="debugOff"> id: Identification</span></span><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationAssay)(fullUrl: urn:uuid:6deb4306-1193-24ae-a565-f73225652bdd)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationAssay&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Assay&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Assay&quot;/>
                    </coding>
                    <text value=&quot;Assay&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;94&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>
                </valueQuantity>
                <note>
                    <text value=&quot;CAT1, CAT2 and CAT3 met the clinical specification in place at time of testing; clinical specification release limit for Assay was 93% w/w; clinical specification release limit for Enantiomeric Purity was NLT 91.0%&quot;>
                        <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tableFootnote&quot;>
                            <valueString value=&quot;[1]&quot;/>
                        </extension>
                    </text>
                </note>" id="Observation-observationAssay">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Assay&quot;/>">Assay<span class="greyOff"> [XXX]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Assay</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationAssay</div><div class="debugOff"> fullUrl: urn:uuid:6deb4306-1193-24ae-a565-f73225652bdd</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Assay&quot;/>
                    </coding>
                    <text value=&quot;Assay&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Assay&quot;/>">Assay<span class="greyOff"> [XXX]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Assay</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;94&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;94&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>">94%</span><span class="greyOff"> [%] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>">Subject</span>: CAT1 (<a href="#Substance-substance-dxpq-ex1" title="click to see target - id=substance-dxpq-ex1">Substance</a>)<span class="debugOff"> id: substance-dxpq-ex1</span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <note>
                    <text value=&quot;CAT1, CAT2 and CAT3 met the clinical specification in place at time of testing; clinical specification release limit for Assay was 93% w/w; clinical specification release limit for Enantiomeric Purity was NLT 91.0%&quot;>
                        <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tableFootnote&quot;>
                            <valueString value=&quot;[1]&quot;/>
                        </extension>
                    </text>" class="indent obsl2 summaryHiddenOff">
		Note
		<div class="indent obsl3"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <note>
                    <text value=&quot;CAT1, CAT2 and CAT3 met the clinical specification in place at time of testing; clinical specification release limit for Assay was 93% w/w; clinical specification release limit for Enantiomeric Purity was NLT 91.0%&quot;>
                        <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tableFootnote&quot;>
                            <valueString value=&quot;[1]&quot;/>
                        </extension>">Text: </span><span>CAT1, CAT2 and CAT3 met the clinical specification in place at time of testing; clinical specification release limit for Assay was 93% w/w; clinical specification release limit for Enantiomeric Purity was NLT 91.0%</span></div></div></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationAssay&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Assay&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Assay&quot;/>
                    </coding>
                    <text value=&quot;Assay&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;94&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>
                </valueQuantity>
                <note>
                    <text value=&quot;CAT1, CAT2 and CAT3 met the clinical specification in place at time of testing; clinical specification release limit for Assay was 93% w/w; clinical specification release limit for Enantiomeric Purity was NLT 91.0%&quot;>
                        <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tableFootnote&quot;>
                            <valueString value=&quot;[1]&quot;/>
                        </extension>
                    </text>
                </note>">Instantiates</span>: Assay - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Assay" title="click to see target - id=Assay">ObservationDefinition</a>)<span class="debugOff"> id: Assay</span></span><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationAssay2)(fullUrl: urn:uuid:f6aabd2f-5902-57e7-6126-eccd9158a5b5)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationAssay2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Assay&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Assay&quot;/>
                    </coding>
                    <text value=&quot;Assay&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;95&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>
                </valueQuantity>
                <note>
                    <text value=&quot;CAT1, CAT2 and CAT3 met the clinical specification in place at time of testing; clinical specification release limit for Assay was 93% w/w; clinical specification release limit for Enantiomeric Purity was NLT 91.0%&quot;>
                        <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tableFootnote&quot;>
                            <valueString value=&quot;[1]&quot;/>
                        </extension>
                    </text>
                </note>" id="Observation-observationAssay2">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Assay&quot;/>">Assay<span class="greyOff"> [XXX]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Assay</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationAssay2</div><div class="debugOff"> fullUrl: urn:uuid:f6aabd2f-5902-57e7-6126-eccd9158a5b5</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Assay&quot;/>
                    </coding>
                    <text value=&quot;Assay&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Assay&quot;/>">Assay<span class="greyOff"> [XXX]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Assay</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;95&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;95&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>">95%</span><span class="greyOff"> [%] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>">Subject</span>: CAT2 (<a href="#Substance-actual-batch-substance-2" title="click to see target - id=actual-batch-substance-2">Substance</a>)<span class="debugOff"> id: actual-batch-substance-2</span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <note>
                    <text value=&quot;CAT1, CAT2 and CAT3 met the clinical specification in place at time of testing; clinical specification release limit for Assay was 93% w/w; clinical specification release limit for Enantiomeric Purity was NLT 91.0%&quot;>
                        <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tableFootnote&quot;>
                            <valueString value=&quot;[1]&quot;/>
                        </extension>
                    </text>" class="indent obsl2 summaryHiddenOff">
		Note
		<div class="indent obsl3"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <note>
                    <text value=&quot;CAT1, CAT2 and CAT3 met the clinical specification in place at time of testing; clinical specification release limit for Assay was 93% w/w; clinical specification release limit for Enantiomeric Purity was NLT 91.0%&quot;>
                        <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tableFootnote&quot;>
                            <valueString value=&quot;[1]&quot;/>
                        </extension>">Text: </span><span>CAT1, CAT2 and CAT3 met the clinical specification in place at time of testing; clinical specification release limit for Assay was 93% w/w; clinical specification release limit for Enantiomeric Purity was NLT 91.0%</span></div></div></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationAssay2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Assay&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Assay&quot;/>
                    </coding>
                    <text value=&quot;Assay&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;95&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>
                </valueQuantity>
                <note>
                    <text value=&quot;CAT1, CAT2 and CAT3 met the clinical specification in place at time of testing; clinical specification release limit for Assay was 93% w/w; clinical specification release limit for Enantiomeric Purity was NLT 91.0%&quot;>
                        <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tableFootnote&quot;>
                            <valueString value=&quot;[1]&quot;/>
                        </extension>
                    </text>
                </note>">Instantiates</span>: Assay - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Assay" title="click to see target - id=Assay">ObservationDefinition</a>)<span class="debugOff"> id: Assay</span></span><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationAssay3)(fullUrl: urn:uuid:32f598e4-a0e0-98dc-41dd-0f8397f953ad)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationAssay3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Assay&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Assay&quot;/>
                    </coding>
                    <text value=&quot;Assay&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;96&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>
                </valueQuantity>
                <note>
                    <text value=&quot;CAT1, CAT2 and CAT3 met the clinical specification in place at time of testing; clinical specification release limit for Assay was 93% w/w; clinical specification release limit for Enantiomeric Purity was NLT 91.0%&quot;>
                        <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tableFootnote&quot;>
                            <valueString value=&quot;[1]&quot;/>
                        </extension>
                    </text>
                </note>" id="Observation-observationAssay3">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Assay&quot;/>">Assay<span class="greyOff"> [XXX]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Assay</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationAssay3</div><div class="debugOff"> fullUrl: urn:uuid:32f598e4-a0e0-98dc-41dd-0f8397f953ad</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Assay&quot;/>
                    </coding>
                    <text value=&quot;Assay&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Assay&quot;/>">Assay<span class="greyOff"> [XXX]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Assay</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;96&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;96&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>">96%</span><span class="greyOff"> [%] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>">Subject</span>: CAT3 (<a href="#Substance-actual-batch-substance-3" title="click to see target - id=actual-batch-substance-3">Substance</a>)<span class="debugOff"> id: actual-batch-substance-3</span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <note>
                    <text value=&quot;CAT1, CAT2 and CAT3 met the clinical specification in place at time of testing; clinical specification release limit for Assay was 93% w/w; clinical specification release limit for Enantiomeric Purity was NLT 91.0%&quot;>
                        <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tableFootnote&quot;>
                            <valueString value=&quot;[1]&quot;/>
                        </extension>
                    </text>" class="indent obsl2 summaryHiddenOff">
		Note
		<div class="indent obsl3"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <note>
                    <text value=&quot;CAT1, CAT2 and CAT3 met the clinical specification in place at time of testing; clinical specification release limit for Assay was 93% w/w; clinical specification release limit for Enantiomeric Purity was NLT 91.0%&quot;>
                        <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tableFootnote&quot;>
                            <valueString value=&quot;[1]&quot;/>
                        </extension>">Text: </span><span>CAT1, CAT2 and CAT3 met the clinical specification in place at time of testing; clinical specification release limit for Assay was 93% w/w; clinical specification release limit for Enantiomeric Purity was NLT 91.0%</span></div></div></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationAssay3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Assay&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Assay&quot;/>
                    </coding>
                    <text value=&quot;Assay&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;96&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>
                </valueQuantity>
                <note>
                    <text value=&quot;CAT1, CAT2 and CAT3 met the clinical specification in place at time of testing; clinical specification release limit for Assay was 93% w/w; clinical specification release limit for Enantiomeric Purity was NLT 91.0%&quot;>
                        <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tableFootnote&quot;>
                            <valueString value=&quot;[1]&quot;/>
                        </extension>
                    </text>
                </note>">Instantiates</span>: Assay - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Assay" title="click to see target - id=Assay">ObservationDefinition</a>)<span class="debugOff"> id: Assay</span></span><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationDegradation-imp1)(fullUrl: urn:uuid:02d9e6be-833c-1c6d-a64a-baa3935c959d)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-imp1&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Impurities&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.5&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <text value=&quot;Impurity 1&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationDegradation-imp1">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>">Impurities<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Impurities</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationDegradation-imp1</div><div class="debugOff"> fullUrl: urn:uuid:02d9e6be-833c-1c6d-a64a-baa3935c959d</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>">Impurities<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Impurities</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.5&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.5&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.5% w/w</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>">Subject</span>: CAT1 (<a href="#Substance-substance-dxpq-ex1" title="click to see target - id=substance-dxpq-ex1">Substance</a>)<span class="debugOff"> id: substance-dxpq-ex1</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-imp1&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Impurities&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.5&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <text value=&quot;Impurity 1&quot;/>
                    </valueCodeableConcept>
                </component>">Instantiates</span>: Drug Substance Related Organic impurities - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Impurities" title="click to see target - id=Impurities">ObservationDefinition</a>)<span class="debugOff"> id: Impurities</span></span><div class="indent obsl2" title="
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
                        <text value=&quot;Impurity 1&quot;/>
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
                        <text value=&quot;Impurity 1&quot;/>">
				Value:
				<span style="white-space:normal;">Impurity 1</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationDegradation-imp1-2)(fullUrl: urn:uuid:d3e572b7-14fd-744b-4123-58741d75571e)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-imp1-2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Impurities&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;Impurities&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.4&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <text value=&quot;Impurity 1&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationDegradation-imp1-2">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;Impurities&quot;/>
                        <display value=&quot;Impurities&quot;/>">Impurities<span class="greyOff"> [Impurities]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Impurities</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationDegradation-imp1-2</div><div class="debugOff"> fullUrl: urn:uuid:d3e572b7-14fd-744b-4123-58741d75571e</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <code value=&quot;Impurities&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;Impurities&quot;/>
                        <display value=&quot;Impurities&quot;/>">Impurities<span class="greyOff"> [Impurities]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Impurities</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.4&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.4&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.4% w/w</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>">Subject</span>: CAT2 (<a href="#Substance-actual-batch-substance-2" title="click to see target - id=actual-batch-substance-2">Substance</a>)<span class="debugOff"> id: actual-batch-substance-2</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-imp1-2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Impurities&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;Impurities&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.4&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <text value=&quot;Impurity 1&quot;/>
                    </valueCodeableConcept>
                </component>">Instantiates</span>: Drug Substance Related Organic impurities - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Impurities" title="click to see target - id=Impurities">ObservationDefinition</a>)<span class="debugOff"> id: Impurities</span></span><div class="indent obsl2" title="
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
                        <text value=&quot;Impurity 1&quot;/>
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
                        <text value=&quot;Impurity 1&quot;/>">
				Value:
				<span style="white-space:normal;">Impurity 1</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationDegradation-imp1-3)(fullUrl: urn:uuid:fe6ca484-a755-9a0b-a074-b6ee0a907ff8)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-imp1-3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Impurities&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.2&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <text value=&quot;Impurity 1&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationDegradation-imp1-3">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>">Impurities<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Impurities</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationDegradation-imp1-3</div><div class="debugOff"> fullUrl: urn:uuid:fe6ca484-a755-9a0b-a074-b6ee0a907ff8</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>">Impurities<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Impurities</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.2&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.2&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.2% w/w</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>">Subject</span>: CAT3 (<a href="#Substance-actual-batch-substance-3" title="click to see target - id=actual-batch-substance-3">Substance</a>)<span class="debugOff"> id: actual-batch-substance-3</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-imp1-3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Impurities&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.2&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <text value=&quot;Impurity 1&quot;/>
                    </valueCodeableConcept>
                </component>">Instantiates</span>: Drug Substance Related Organic impurities - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Impurities" title="click to see target - id=Impurities">ObservationDefinition</a>)<span class="debugOff"> id: Impurities</span></span><div class="indent obsl2" title="
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
                        <text value=&quot;Impurity 1&quot;/>
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
                        <text value=&quot;Impurity 1&quot;/>">
				Value:
				<span style="white-space:normal;">Impurity 1</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationDegradation-imp2)(fullUrl: urn:uuid:da92c71f-a12a-1980-11a3-80e3d1852244)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-imp2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Impurities&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.5&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <text value=&quot;Impurity 2&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationDegradation-imp2">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>">Impurities<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Impurities</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationDegradation-imp2</div><div class="debugOff"> fullUrl: urn:uuid:da92c71f-a12a-1980-11a3-80e3d1852244</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>">Impurities<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Impurities</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.5&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.5&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.5% w/w</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>">Subject</span>: CAT1 (<a href="#Substance-substance-dxpq-ex1" title="click to see target - id=substance-dxpq-ex1">Substance</a>)<span class="debugOff"> id: substance-dxpq-ex1</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-imp2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Impurities&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.5&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <text value=&quot;Impurity 2&quot;/>
                    </valueCodeableConcept>
                </component>">Instantiates</span>: Drug Substance Related Organic impurities - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Impurities" title="click to see target - id=Impurities">ObservationDefinition</a>)<span class="debugOff"> id: Impurities</span></span><div class="indent obsl2" title="
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
                        <text value=&quot;Impurity 2&quot;/>
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
                        <text value=&quot;Impurity 2&quot;/>">
				Value:
				<span style="white-space:normal;">Impurity 2</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationDegradation-imp2-2)(fullUrl: urn:uuid:8bf75da1-9221-66fe-6725-c64cb45a57e6)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-imp2-2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Impurities&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.4&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <text value=&quot;Impurity 2&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationDegradation-imp2-2">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>">Impurities<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Impurities</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationDegradation-imp2-2</div><div class="debugOff"> fullUrl: urn:uuid:8bf75da1-9221-66fe-6725-c64cb45a57e6</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>">Impurities<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Impurities</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.4&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.4&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.4% w/w</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>">Subject</span>: CAT2 (<a href="#Substance-actual-batch-substance-2" title="click to see target - id=actual-batch-substance-2">Substance</a>)<span class="debugOff"> id: actual-batch-substance-2</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-imp2-2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Impurities&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.4&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <text value=&quot;Impurity 2&quot;/>
                    </valueCodeableConcept>
                </component>">Instantiates</span>: Drug Substance Related Organic impurities - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Impurities" title="click to see target - id=Impurities">ObservationDefinition</a>)<span class="debugOff"> id: Impurities</span></span><div class="indent obsl2" title="
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
                        <text value=&quot;Impurity 2&quot;/>
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
                        <text value=&quot;Impurity 2&quot;/>">
				Value:
				<span style="white-space:normal;">Impurity 2</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationDegradation-imp2-3)(fullUrl: urn:uuid:31bfeff4-4a7d-3be5-878e-fb674d3d5487)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-imp2-3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Impurities&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.2&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <text value=&quot;Impurity 2&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationDegradation-imp2-3">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>">Impurities<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Impurities</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationDegradation-imp2-3</div><div class="debugOff"> fullUrl: urn:uuid:31bfeff4-4a7d-3be5-878e-fb674d3d5487</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>">Impurities<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Impurities</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.2&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.2&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.2% w/w</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>">Subject</span>: CAT3 (<a href="#Substance-actual-batch-substance-3" title="click to see target - id=actual-batch-substance-3">Substance</a>)<span class="debugOff"> id: actual-batch-substance-3</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-imp2-3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Impurities&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.2&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <text value=&quot;Impurity 2&quot;/>
                    </valueCodeableConcept>
                </component>">Instantiates</span>: Drug Substance Related Organic impurities - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Impurities" title="click to see target - id=Impurities">ObservationDefinition</a>)<span class="debugOff"> id: Impurities</span></span><div class="indent obsl2" title="
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
                        <text value=&quot;Impurity 2&quot;/>
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
                        <text value=&quot;Impurity 2&quot;/>">
				Value:
				<span style="white-space:normal;">Impurity 2</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationDegradation-imp3)(fullUrl: urn:uuid:732237a9-4b3b-27cc-99ca-6b913e622a29)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-imp3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Impurities&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <text value=&quot;Impurity 3&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationDegradation-imp3">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>">Impurities<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Impurities</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationDegradation-imp3</div><div class="debugOff"> fullUrl: urn:uuid:732237a9-4b3b-27cc-99ca-6b913e622a29</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>">Impurities<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Impurities</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.1% w/w</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>">Subject</span>: CAT1 (<a href="#Substance-substance-dxpq-ex1" title="click to see target - id=substance-dxpq-ex1">Substance</a>)<span class="debugOff"> id: substance-dxpq-ex1</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-imp3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Impurities&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <text value=&quot;Impurity 3&quot;/>
                    </valueCodeableConcept>
                </component>">Instantiates</span>: Drug Substance Related Organic impurities - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Impurities" title="click to see target - id=Impurities">ObservationDefinition</a>)<span class="debugOff"> id: Impurities</span></span><div class="indent obsl2" title="
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
                        <text value=&quot;Impurity 3&quot;/>
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
                        <text value=&quot;Impurity 3&quot;/>">
				Value:
				<span style="white-space:normal;">Impurity 3</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationDegradation-imp3-2)(fullUrl: urn:uuid:52afbeb4-4958-a275-a0ca-d70b2b5240ec)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-imp3-2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Impurities&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <text value=&quot;Impurity 3&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationDegradation-imp3-2">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>">Impurities<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Impurities</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationDegradation-imp3-2</div><div class="debugOff"> fullUrl: urn:uuid:52afbeb4-4958-a275-a0ca-d70b2b5240ec</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>">Impurities<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Impurities</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.1% w/w</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>">Subject</span>: CAT2 (<a href="#Substance-actual-batch-substance-2" title="click to see target - id=actual-batch-substance-2">Substance</a>)<span class="debugOff"> id: actual-batch-substance-2</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-imp3-2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Impurities&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <text value=&quot;Impurity 3&quot;/>
                    </valueCodeableConcept>
                </component>">Instantiates</span>: Drug Substance Related Organic impurities - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Impurities" title="click to see target - id=Impurities">ObservationDefinition</a>)<span class="debugOff"> id: Impurities</span></span><div class="indent obsl2" title="
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
                        <text value=&quot;Impurity 3&quot;/>
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
                        <text value=&quot;Impurity 3&quot;/>">
				Value:
				<span style="white-space:normal;">Impurity 3</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationDegradation-imp3-3)(fullUrl: urn:uuid:7fc395b1-59e4-78be-0512-cf92133c0fac)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-imp3-3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Impurities&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <text value=&quot;Impurity 3&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationDegradation-imp3-3">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>">Impurities<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Impurities</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationDegradation-imp3-3</div><div class="debugOff"> fullUrl: urn:uuid:7fc395b1-59e4-78be-0512-cf92133c0fac</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>">Impurities<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Impurities</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.1% w/w</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>">Subject</span>: CAT3 (<a href="#Substance-actual-batch-substance-3" title="click to see target - id=actual-batch-substance-3">Substance</a>)<span class="debugOff"> id: actual-batch-substance-3</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-imp3-3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Impurities&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <text value=&quot;Impurity 3&quot;/>
                    </valueCodeableConcept>
                </component>">Instantiates</span>: Drug Substance Related Organic impurities - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Impurities" title="click to see target - id=Impurities">ObservationDefinition</a>)<span class="debugOff"> id: Impurities</span></span><div class="indent obsl2" title="
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
                        <text value=&quot;Impurity 3&quot;/>
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
                        <text value=&quot;Impurity 3&quot;/>">
				Value:
				<span style="white-space:normal;">Impurity 3</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationDegradation-imp-unspecified)(fullUrl: urn:uuid:9c98bd8a-7dda-2f01-0dbd-8c60b60e8572)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-imp-unspecified&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Impurities&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <text value=&quot;Any individual unspecified impurity&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationDegradation-imp-unspecified">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>">Impurities<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Impurities</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationDegradation-imp-unspecified</div><div class="debugOff"> fullUrl: urn:uuid:9c98bd8a-7dda-2f01-0dbd-8c60b60e8572</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>">Impurities<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Impurities</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.1% w/w</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>">Subject</span>: CAT1 (<a href="#Substance-substance-dxpq-ex1" title="click to see target - id=substance-dxpq-ex1">Substance</a>)<span class="debugOff"> id: substance-dxpq-ex1</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-imp-unspecified&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Impurities&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <text value=&quot;Any individual unspecified impurity&quot;/>
                    </valueCodeableConcept>
                </component>">Instantiates</span>: Drug Substance Related Organic impurities - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Impurities" title="click to see target - id=Impurities">ObservationDefinition</a>)<span class="debugOff"> id: Impurities</span></span><div class="indent obsl2" title="
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
                        <text value=&quot;Any individual unspecified impurity&quot;/>
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
                        <text value=&quot;Any individual unspecified impurity&quot;/>">
				Value:
				<span style="white-space:normal;">Any individual unspecified impurity</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationDegradation-imp-unspecified-2)(fullUrl: urn:uuid:97b16ff8-8e0f-915a-9d65-7fab108f40c2)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-imp-unspecified-2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Impurities&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <text value=&quot;Any individual unspecified impurity&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationDegradation-imp-unspecified-2">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>">Impurities<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Impurities</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationDegradation-imp-unspecified-2</div><div class="debugOff"> fullUrl: urn:uuid:97b16ff8-8e0f-915a-9d65-7fab108f40c2</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>">Impurities<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Impurities</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.1% w/w</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>">Subject</span>: CAT2 (<a href="#Substance-actual-batch-substance-2" title="click to see target - id=actual-batch-substance-2">Substance</a>)<span class="debugOff"> id: actual-batch-substance-2</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-imp-unspecified-2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Impurities&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <text value=&quot;Any individual unspecified impurity&quot;/>
                    </valueCodeableConcept>
                </component>">Instantiates</span>: Drug Substance Related Organic impurities - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Impurities" title="click to see target - id=Impurities">ObservationDefinition</a>)<span class="debugOff"> id: Impurities</span></span><div class="indent obsl2" title="
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
                        <text value=&quot;Any individual unspecified impurity&quot;/>
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
                        <text value=&quot;Any individual unspecified impurity&quot;/>">
				Value:
				<span style="white-space:normal;">Any individual unspecified impurity</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationDegradation-imp-unspecified-3)(fullUrl: urn:uuid:0244eafe-3126-909b-7d8d-4253f45f525c)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-imp-unspecified-3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Impurities&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <!-- could have the code of an imw substance, or could have an extension to point to it as a resource -->
                        <text value=&quot;Any individual unspecified impurity&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationDegradation-imp-unspecified-3">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>">Impurities<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Impurities</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationDegradation-imp-unspecified-3</div><div class="debugOff"> fullUrl: urn:uuid:0244eafe-3126-909b-7d8d-4253f45f525c</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>">Impurities<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Impurities</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.1% w/w</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>">Subject</span>: CAT3 (<a href="#Substance-actual-batch-substance-3" title="click to see target - id=actual-batch-substance-3">Substance</a>)<span class="debugOff"> id: actual-batch-substance-3</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-imp-unspecified-3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Impurities&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <!-- could have the code of an imw substance, or could have an extension to point to it as a resource -->
                        <text value=&quot;Any individual unspecified impurity&quot;/>
                    </valueCodeableConcept>
                </component>">Instantiates</span>: Drug Substance Related Organic impurities - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Impurities" title="click to see target - id=Impurities">ObservationDefinition</a>)<span class="debugOff"> id: Impurities</span></span><div class="indent obsl2" title="
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
                        <!-- could have the code of an imw substance, or could have an extension to point to it as a resource -->
                        <text value=&quot;Any individual unspecified impurity&quot;/>
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
                        <!-- could have the code of an imw substance, or could have an extension to point to it as a resource -->
                        <text value=&quot;Any individual unspecified impurity&quot;/>">
				Value:
				<span style="white-space:normal;">Any individual unspecified impurity</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationDegradation-imp-total)(fullUrl: urn:uuid:10b80cbd-45d3-9be1-63b9-29f04b47376c)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-imp-total&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Impurities&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.02&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Ima&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;Total impurities&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationDegradation-imp-total">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>">Impurities<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Impurities</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationDegradation-imp-total</div><div class="debugOff"> fullUrl: urn:uuid:10b80cbd-45d3-9be1-63b9-29f04b47376c</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>">Impurities<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Impurities</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.02&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.02&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.02% w/w</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>">Subject</span>: CAT1 (<a href="#Substance-substance-dxpq-ex1" title="click to see target - id=substance-dxpq-ex1">Substance</a>)<span class="debugOff"> id: substance-dxpq-ex1</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-imp-total&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Impurities&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.02&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Ima&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;Total impurities&quot;/>
                    </valueCodeableConcept>
                </component>">Instantiates</span>: Drug Substance Related Organic impurities - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Impurities" title="click to see target - id=Impurities">ObservationDefinition</a>)<span class="debugOff"> id: Impurities</span></span><div class="indent obsl2" title="
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
                            <display value=&quot;Ima&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;Total impurities&quot;/>
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
                            <display value=&quot;Ima&quot;/>">Ima<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Ima&quot;/>
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
                            <display value=&quot;Ima&quot;/>">Ima<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueCodeableConcept>
                        <text value=&quot;Total impurities&quot;/>">
				Value:
				<span style="white-space:normal;">Total impurities</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationDegradation-imp-total-2)(fullUrl: urn:uuid:84f015ac-9572-324f-8013-0b999cc95bbd)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-imp-total-2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Impurities&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.02&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <text value=&quot;Total impurities&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationDegradation-imp-total-2">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>">Impurities<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Impurities</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationDegradation-imp-total-2</div><div class="debugOff"> fullUrl: urn:uuid:84f015ac-9572-324f-8013-0b999cc95bbd</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>">Impurities<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Impurities</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.02&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.02&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.02% w/w</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>">Subject</span>: CAT2 (<a href="#Substance-actual-batch-substance-2" title="click to see target - id=actual-batch-substance-2">Substance</a>)<span class="debugOff"> id: actual-batch-substance-2</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-imp-total-2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Impurities&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.02&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <text value=&quot;Total impurities&quot;/>
                    </valueCodeableConcept>
                </component>">Instantiates</span>: Drug Substance Related Organic impurities - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Impurities" title="click to see target - id=Impurities">ObservationDefinition</a>)<span class="debugOff"> id: Impurities</span></span><div class="indent obsl2" title="
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
                        <text value=&quot;Total impurities&quot;/>
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
                        <text value=&quot;Total impurities&quot;/>">
				Value:
				<span style="white-space:normal;">Total impurities</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationDegradation-imp-total-3)(fullUrl: urn:uuid:987daeaa-4c2a-72b7-780f-4a9403163a3e)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-imp-total-3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Impurities&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.02&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <!-- could have the code of an imr substance, or could have an extension to point to it as a resource -->
                        <text value=&quot;Total impurities&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationDegradation-imp-total-3">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>">Impurities<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Impurities</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationDegradation-imp-total-3</div><div class="debugOff"> fullUrl: urn:uuid:987daeaa-4c2a-72b7-780f-4a9403163a3e</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>">Impurities<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Impurities</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.02&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.02&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.02% w/w</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>">Subject</span>: CAT3 (<a href="#Substance-actual-batch-substance-3" title="click to see target - id=actual-batch-substance-3">Substance</a>)<span class="debugOff"> id: actual-batch-substance-3</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDegradation-imp-total-3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Impurities&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Impurities&quot;/>
                    </coding>
                    <text value=&quot;Impurities&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.02&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <!-- could have the code of an imr substance, or could have an extension to point to it as a resource -->
                        <text value=&quot;Total impurities&quot;/>
                    </valueCodeableConcept>
                </component>">Instantiates</span>: Drug Substance Related Organic impurities - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Impurities" title="click to see target - id=Impurities">ObservationDefinition</a>)<span class="debugOff"> id: Impurities</span></span><div class="indent obsl2" title="
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
                        <!-- could have the code of an imr substance, or could have an extension to point to it as a resource -->
                        <text value=&quot;Total impurities&quot;/>
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
                        <!-- could have the code of an imr substance, or could have an extension to point to it as a resource -->
                        <text value=&quot;Total impurities&quot;/>">
				Value:
				<span style="white-space:normal;">Total impurities</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationMutagenic)(fullUrl: urn:uuid:ff26533d-88a8-7f18-a275-42dc1373a388)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationMutagenic&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Mutagenic&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Mutagenic&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;20&quot;/>
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
                        <text value=&quot;Impurity - Mutagenic&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationMutagenic">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Mutagenic&quot;/>">Mutagenic<span class="greyOff"> [XXX]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationMutagenic</div><div class="debugOff"> fullUrl: urn:uuid:ff26533d-88a8-7f18-a275-42dc1373a388</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Mutagenic&quot;/>
                    </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Mutagenic&quot;/>">Mutagenic<span class="greyOff"> [XXX]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;20&quot;/>
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
                    <value value=&quot;20&quot;/>
                    <unit value=&quot;ppm&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;[ppm]&quot;/>">20 ppm</span><span class="greyOff"> [[ppm]] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>">Subject</span>: CAT1 (<a href="#Substance-substance-dxpq-ex1" title="click to see target - id=substance-dxpq-ex1">Substance</a>)<span class="debugOff"> id: substance-dxpq-ex1</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationMutagenic&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Mutagenic&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Mutagenic&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;20&quot;/>
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
                        <text value=&quot;Impurity - Mutagenic&quot;/>
                    </valueCodeableConcept>
                </component>">Instantiates</span>: Mutagenic impurities - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Mutagenic" title="click to see target - id=Mutagenic">ObservationDefinition</a>)<span class="debugOff"> id: Mutagenic</span></span><div class="indent obsl2" title="
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
                        <text value=&quot;Impurity - Mutagenic&quot;/>
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
                        <text value=&quot;Impurity - Mutagenic&quot;/>">
				Value:
				<span style="white-space:normal;">Impurity - Mutagenic</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationMutagenic2)(fullUrl: urn:uuid:c99666d2-7962-9a71-58f6-7b2e5aa662f5)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationMutagenic2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Mutagenic&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Mutagenic&quot;/>
                    </coding>
                    <text value=&quot;Mutagenic&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;22&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>
                </valueQuantity>" id="Observation-observationMutagenic2">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Mutagenic&quot;/>">Mutagenic<span class="greyOff"> [XXX]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Mutagenic</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationMutagenic2</div><div class="debugOff"> fullUrl: urn:uuid:c99666d2-7962-9a71-58f6-7b2e5aa662f5</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Mutagenic&quot;/>
                    </coding>
                    <text value=&quot;Mutagenic&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Mutagenic&quot;/>">Mutagenic<span class="greyOff"> [XXX]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Mutagenic</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;22&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;22&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>">22%</span><span class="greyOff"> [%] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>">Subject</span>: CAT2 (<a href="#Substance-actual-batch-substance-2" title="click to see target - id=actual-batch-substance-2">Substance</a>)<span class="debugOff"> id: actual-batch-substance-2</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationMutagenic2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Mutagenic&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Mutagenic&quot;/>
                    </coding>
                    <text value=&quot;Mutagenic&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;22&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>
                </valueQuantity>">Instantiates</span>: Mutagenic impurities - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Mutagenic" title="click to see target - id=Mutagenic">ObservationDefinition</a>)<span class="debugOff"> id: Mutagenic</span></span><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationMutagenic3)(fullUrl: urn:uuid:c18e21d3-7113-4d08-4ff3-0c9718596f64)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationMutagenic3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Mutagenic&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Mutagenic&quot;/>
                    </coding>
                    <text value=&quot;Mutagenic&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;18&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>
                </valueQuantity>" id="Observation-observationMutagenic3">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Mutagenic&quot;/>">Mutagenic<span class="greyOff"> [XXX]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Mutagenic</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationMutagenic3</div><div class="debugOff"> fullUrl: urn:uuid:c18e21d3-7113-4d08-4ff3-0c9718596f64</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Mutagenic&quot;/>
                    </coding>
                    <text value=&quot;Mutagenic&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Mutagenic&quot;/>">Mutagenic<span class="greyOff"> [XXX]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Mutagenic</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;18&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;18&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>">18%</span><span class="greyOff"> [%] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>">Subject</span>: CAT3 (<a href="#Substance-actual-batch-substance-3" title="click to see target - id=actual-batch-substance-3">Substance</a>)<span class="debugOff"> id: actual-batch-substance-3</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationMutagenic3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Mutagenic&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Mutagenic&quot;/>
                    </coding>
                    <text value=&quot;Mutagenic&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;18&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>
                </valueQuantity>">Instantiates</span>: Mutagenic impurities - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Mutagenic" title="click to see target - id=Mutagenic">ObservationDefinition</a>)<span class="debugOff"> id: Mutagenic</span></span><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationEnantiomericPurity)(fullUrl: urn:uuid:66fdac46-2a6b-a66f-891b-8dcf67cc46c7)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationEnantiomericPurity&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Enantiomeric&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;ZZZ&quot;/>
                        <display value=&quot;Enantiomeric purity&quot;/>
                    </coding>
                    <text value=&quot;Enantiomeric purity&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;91.5&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>
                </valueQuantity>
                <note>
                    <text value=&quot;CAT1, CAT2 and CAT3 met the clinical specification in place at time of testing; clinical specification release limit for Assay was 93% w/w; clinical specification release limit for Enantiomeric Purity was NLT 91.0%&quot;>
                        <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tableFootnote&quot;>
                            <valueString value=&quot;[1]&quot;/>
                        </extension>
                    </text>
                </note>" id="Observation-observationEnantiomericPurity">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;ZZZ&quot;/>
                        <display value=&quot;Enantiomeric purity&quot;/>">Enantiomeric purity<span class="greyOff"> [ZZZ]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Enantiomeric purity</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationEnantiomericPurity</div><div class="debugOff"> fullUrl: urn:uuid:66fdac46-2a6b-a66f-891b-8dcf67cc46c7</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <code value=&quot;ZZZ&quot;/>
                        <display value=&quot;Enantiomeric purity&quot;/>
                    </coding>
                    <text value=&quot;Enantiomeric purity&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;ZZZ&quot;/>
                        <display value=&quot;Enantiomeric purity&quot;/>">Enantiomeric purity<span class="greyOff"> [ZZZ]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Enantiomeric purity</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;91.5&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;91.5&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>">91.5%</span><span class="greyOff"> [%] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>">Subject</span>: CAT1 (<a href="#Substance-substance-dxpq-ex1" title="click to see target - id=substance-dxpq-ex1">Substance</a>)<span class="debugOff"> id: substance-dxpq-ex1</span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <note>
                    <text value=&quot;CAT1, CAT2 and CAT3 met the clinical specification in place at time of testing; clinical specification release limit for Assay was 93% w/w; clinical specification release limit for Enantiomeric Purity was NLT 91.0%&quot;>
                        <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tableFootnote&quot;>
                            <valueString value=&quot;[1]&quot;/>
                        </extension>
                    </text>" class="indent obsl2 summaryHiddenOff">
		Note
		<div class="indent obsl3"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <note>
                    <text value=&quot;CAT1, CAT2 and CAT3 met the clinical specification in place at time of testing; clinical specification release limit for Assay was 93% w/w; clinical specification release limit for Enantiomeric Purity was NLT 91.0%&quot;>
                        <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tableFootnote&quot;>
                            <valueString value=&quot;[1]&quot;/>
                        </extension>">Text: </span><span>CAT1, CAT2 and CAT3 met the clinical specification in place at time of testing; clinical specification release limit for Assay was 93% w/w; clinical specification release limit for Enantiomeric Purity was NLT 91.0%</span></div></div></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationEnantiomericPurity&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Enantiomeric&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;ZZZ&quot;/>
                        <display value=&quot;Enantiomeric purity&quot;/>
                    </coding>
                    <text value=&quot;Enantiomeric purity&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;91.5&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>
                </valueQuantity>
                <note>
                    <text value=&quot;CAT1, CAT2 and CAT3 met the clinical specification in place at time of testing; clinical specification release limit for Assay was 93% w/w; clinical specification release limit for Enantiomeric Purity was NLT 91.0%&quot;>
                        <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tableFootnote&quot;>
                            <valueString value=&quot;[1]&quot;/>
                        </extension>
                    </text>
                </note>">Instantiates</span>: Enantiomeric purity - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Enantiomeric" title="click to see target - id=Enantiomeric">ObservationDefinition</a>)<span class="debugOff"> id: Enantiomeric</span></span><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationEnantiomericPurity2)(fullUrl: urn:uuid:8306cfc5-158f-1a53-a683-048b226060d9)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationEnantiomericPurity2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Enantiomeric&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;ZZZ&quot;/>
                        <display value=&quot;Enantiomeric purity&quot;/>
                    </coding>
                    <text value=&quot;Enantiomeric purity&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;91.5&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>
                </valueQuantity>
                <note>
                    <text value=&quot;CAT1, CAT2 and CAT3 met the clinical specification in place at time of testing; clinical specification release limit for Assay was 93% w/w; clinical specification release limit for Enantiomeric Purity was NLT 91.0%&quot;>
                        <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tableFootnote&quot;>
                            <valueString value=&quot;[1]&quot;/>
                        </extension>
                    </text>
                </note>" id="Observation-observationEnantiomericPurity2">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;ZZZ&quot;/>
                        <display value=&quot;Enantiomeric purity&quot;/>">Enantiomeric purity<span class="greyOff"> [ZZZ]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Enantiomeric purity</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationEnantiomericPurity2</div><div class="debugOff"> fullUrl: urn:uuid:8306cfc5-158f-1a53-a683-048b226060d9</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <code value=&quot;ZZZ&quot;/>
                        <display value=&quot;Enantiomeric purity&quot;/>
                    </coding>
                    <text value=&quot;Enantiomeric purity&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;ZZZ&quot;/>
                        <display value=&quot;Enantiomeric purity&quot;/>">Enantiomeric purity<span class="greyOff"> [ZZZ]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Enantiomeric purity</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;91.5&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;91.5&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>">91.5%</span><span class="greyOff"> [%] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>">Subject</span>: CAT2 (<a href="#Substance-actual-batch-substance-2" title="click to see target - id=actual-batch-substance-2">Substance</a>)<span class="debugOff"> id: actual-batch-substance-2</span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <note>
                    <text value=&quot;CAT1, CAT2 and CAT3 met the clinical specification in place at time of testing; clinical specification release limit for Assay was 93% w/w; clinical specification release limit for Enantiomeric Purity was NLT 91.0%&quot;>
                        <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tableFootnote&quot;>
                            <valueString value=&quot;[1]&quot;/>
                        </extension>
                    </text>" class="indent obsl2 summaryHiddenOff">
		Note
		<div class="indent obsl3"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <note>
                    <text value=&quot;CAT1, CAT2 and CAT3 met the clinical specification in place at time of testing; clinical specification release limit for Assay was 93% w/w; clinical specification release limit for Enantiomeric Purity was NLT 91.0%&quot;>
                        <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tableFootnote&quot;>
                            <valueString value=&quot;[1]&quot;/>
                        </extension>">Text: </span><span>CAT1, CAT2 and CAT3 met the clinical specification in place at time of testing; clinical specification release limit for Assay was 93% w/w; clinical specification release limit for Enantiomeric Purity was NLT 91.0%</span></div></div></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationEnantiomericPurity2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Enantiomeric&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;ZZZ&quot;/>
                        <display value=&quot;Enantiomeric purity&quot;/>
                    </coding>
                    <text value=&quot;Enantiomeric purity&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;91.5&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>
                </valueQuantity>
                <note>
                    <text value=&quot;CAT1, CAT2 and CAT3 met the clinical specification in place at time of testing; clinical specification release limit for Assay was 93% w/w; clinical specification release limit for Enantiomeric Purity was NLT 91.0%&quot;>
                        <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tableFootnote&quot;>
                            <valueString value=&quot;[1]&quot;/>
                        </extension>
                    </text>
                </note>">Instantiates</span>: Enantiomeric purity - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Enantiomeric" title="click to see target - id=Enantiomeric">ObservationDefinition</a>)<span class="debugOff"> id: Enantiomeric</span></span><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationEnantiomericPurity3)(fullUrl: urn:uuid:fc49ad55-07d1-997d-6695-bbff44746e75)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationEnantiomericPurity3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Enantiomeric&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;ZZZ&quot;/>
                        <display value=&quot;Enantiomeric purity&quot;/>
                    </coding>
                    <text value=&quot;Enantiomeric purity&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;91.5&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>
                </valueQuantity>
                <note>
                    <text value=&quot;Batch 3 did not originally meet specification criteria, and was subject to reprocessing and repurification. The updated result is presented in this table. The lot was not distributed for human use.&quot;>
                        <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tableFootnote&quot;>
                            <valueString value=&quot;[3]&quot;/>
                        </extension>
                    </text>
                </note>" id="Observation-observationEnantiomericPurity3">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;ZZZ&quot;/>
                        <display value=&quot;Enantiomeric purity&quot;/>">Enantiomeric purity<span class="greyOff"> [ZZZ]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Enantiomeric purity</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationEnantiomericPurity3</div><div class="debugOff"> fullUrl: urn:uuid:fc49ad55-07d1-997d-6695-bbff44746e75</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <code value=&quot;ZZZ&quot;/>
                        <display value=&quot;Enantiomeric purity&quot;/>
                    </coding>
                    <text value=&quot;Enantiomeric purity&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;ZZZ&quot;/>
                        <display value=&quot;Enantiomeric purity&quot;/>">Enantiomeric purity<span class="greyOff"> [ZZZ]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Enantiomeric purity</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;91.5&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;91.5&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>">91.5%</span><span class="greyOff"> [%] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>">Subject</span>: CAT3 (<a href="#Substance-actual-batch-substance-3" title="click to see target - id=actual-batch-substance-3">Substance</a>)<span class="debugOff"> id: actual-batch-substance-3</span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <note>
                    <text value=&quot;Batch 3 did not originally meet specification criteria, and was subject to reprocessing and repurification. The updated result is presented in this table. The lot was not distributed for human use.&quot;>
                        <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tableFootnote&quot;>
                            <valueString value=&quot;[3]&quot;/>
                        </extension>
                    </text>" class="indent obsl2 summaryHiddenOff">
		Note
		<div class="indent obsl3"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <note>
                    <text value=&quot;Batch 3 did not originally meet specification criteria, and was subject to reprocessing and repurification. The updated result is presented in this table. The lot was not distributed for human use.&quot;>
                        <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tableFootnote&quot;>
                            <valueString value=&quot;[3]&quot;/>
                        </extension>">Text: </span><span>Batch 3 did not originally meet specification criteria, and was subject to reprocessing and repurification. The updated result is presented in this table. The lot was not distributed for human use.</span></div></div></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationEnantiomericPurity3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Enantiomeric&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;ZZZ&quot;/>
                        <display value=&quot;Enantiomeric purity&quot;/>
                    </coding>
                    <text value=&quot;Enantiomeric purity&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;91.5&quot;/>
                    <unit value=&quot;%&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%&quot;/>
                </valueQuantity>
                <note>
                    <text value=&quot;Batch 3 did not originally meet specification criteria, and was subject to reprocessing and repurification. The updated result is presented in this table. The lot was not distributed for human use.&quot;>
                        <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tableFootnote&quot;>
                            <valueString value=&quot;[3]&quot;/>
                        </extension>
                    </text>
                </note>">Instantiates</span>: Enantiomeric purity - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Enantiomeric" title="click to see target - id=Enantiomeric">ObservationDefinition</a>)<span class="debugOff"> id: Enantiomeric</span></span><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationSolvents-sol1)(fullUrl: urn:uuid:f8160692-a7a8-3fa6-9f35-e7df35f51ac0)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationSolvents-sol1&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Solvents&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;SOL&quot;/>
                        <display value=&quot;Residual solvents&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SOL&quot;/>
                            <display value=&quot;Solvent&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;Solvent 1&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationSolvents-sol1">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;SOL&quot;/>
                        <display value=&quot;Residual solvents&quot;/>">Residual solvents<span class="greyOff"> [SOL]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationSolvents-sol1</div><div class="debugOff"> fullUrl: urn:uuid:f8160692-a7a8-3fa6-9f35-e7df35f51ac0</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <code value=&quot;SOL&quot;/>
                        <display value=&quot;Residual solvents&quot;/>
                    </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;SOL&quot;/>
                        <display value=&quot;Residual solvents&quot;/>">Residual solvents<span class="greyOff"> [SOL]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.1% w/w</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>">Subject</span>: CAT1 (<a href="#Substance-substance-dxpq-ex1" title="click to see target - id=substance-dxpq-ex1">Substance</a>)<span class="debugOff"> id: substance-dxpq-ex1</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationSolvents-sol1&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Solvents&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;SOL&quot;/>
                        <display value=&quot;Residual solvents&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SOL&quot;/>
                            <display value=&quot;Solvent&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;Solvent 1&quot;/>
                    </valueCodeableConcept>
                </component>">Instantiates</span>: Residual solvents - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Solvents" title="click to see target - id=Solvents">ObservationDefinition</a>)<span class="debugOff"> id: Solvents</span></span><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SOL&quot;/>
                            <display value=&quot;Solvent&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;Solvent 1&quot;/>
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
                            <code value=&quot;SOL&quot;/>
                            <display value=&quot;Solvent&quot;/>">Solvent<span class="greyOff"> [SOL]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SOL&quot;/>
                            <display value=&quot;Solvent&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SOL&quot;/>
                            <display value=&quot;Solvent&quot;/>">Solvent<span class="greyOff"> [SOL]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueCodeableConcept>
                        <text value=&quot;Solvent 1&quot;/>">
				Value:
				<span style="white-space:normal;">Solvent 1</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationSolvents-sol1-2)(fullUrl: urn:uuid:a531aee9-4c21-06af-352c-a3615b5d957e)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationSolvents-sol1-2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Solvents&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;SOL&quot;/>
                        <display value=&quot;Residual solvents&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SOL&quot;/>
                            <display value=&quot;Solvent&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;Solvent 1&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationSolvents-sol1-2">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;SOL&quot;/>
                        <display value=&quot;Residual solvents&quot;/>">Residual solvents<span class="greyOff"> [SOL]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationSolvents-sol1-2</div><div class="debugOff"> fullUrl: urn:uuid:a531aee9-4c21-06af-352c-a3615b5d957e</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <code value=&quot;SOL&quot;/>
                        <display value=&quot;Residual solvents&quot;/>
                    </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;SOL&quot;/>
                        <display value=&quot;Residual solvents&quot;/>">Residual solvents<span class="greyOff"> [SOL]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.1% w/w</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>">Subject</span>: CAT2 (<a href="#Substance-actual-batch-substance-2" title="click to see target - id=actual-batch-substance-2">Substance</a>)<span class="debugOff"> id: actual-batch-substance-2</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationSolvents-sol1-2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Solvents&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;SOL&quot;/>
                        <display value=&quot;Residual solvents&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SOL&quot;/>
                            <display value=&quot;Solvent&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;Solvent 1&quot;/>
                    </valueCodeableConcept>
                </component>">Instantiates</span>: Residual solvents - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Solvents" title="click to see target - id=Solvents">ObservationDefinition</a>)<span class="debugOff"> id: Solvents</span></span><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SOL&quot;/>
                            <display value=&quot;Solvent&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;Solvent 1&quot;/>
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
                            <code value=&quot;SOL&quot;/>
                            <display value=&quot;Solvent&quot;/>">Solvent<span class="greyOff"> [SOL]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SOL&quot;/>
                            <display value=&quot;Solvent&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SOL&quot;/>
                            <display value=&quot;Solvent&quot;/>">Solvent<span class="greyOff"> [SOL]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueCodeableConcept>
                        <text value=&quot;Solvent 1&quot;/>">
				Value:
				<span style="white-space:normal;">Solvent 1</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationSolvents-sol1-3)(fullUrl: urn:uuid:033ce81d-5f0d-7a3e-93d3-fc64e122a1fd)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationSolvents-sol1-3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Solvents&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;SOL&quot;/>
                        <display value=&quot;Residual solvents&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SOL&quot;/>
                            <display value=&quot;Solvent&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;Solvent 1&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationSolvents-sol1-3">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;SOL&quot;/>
                        <display value=&quot;Residual solvents&quot;/>">Residual solvents<span class="greyOff"> [SOL]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationSolvents-sol1-3</div><div class="debugOff"> fullUrl: urn:uuid:033ce81d-5f0d-7a3e-93d3-fc64e122a1fd</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <code value=&quot;SOL&quot;/>
                        <display value=&quot;Residual solvents&quot;/>
                    </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;SOL&quot;/>
                        <display value=&quot;Residual solvents&quot;/>">Residual solvents<span class="greyOff"> [SOL]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.1% w/w</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>">Subject</span>: CAT3 (<a href="#Substance-actual-batch-substance-3" title="click to see target - id=actual-batch-substance-3">Substance</a>)<span class="debugOff"> id: actual-batch-substance-3</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationSolvents-sol1-3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Solvents&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;SOL&quot;/>
                        <display value=&quot;Residual solvents&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SOL&quot;/>
                            <display value=&quot;Solvent&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;Solvent 1&quot;/>
                    </valueCodeableConcept>
                </component>">Instantiates</span>: Residual solvents - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Solvents" title="click to see target - id=Solvents">ObservationDefinition</a>)<span class="debugOff"> id: Solvents</span></span><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SOL&quot;/>
                            <display value=&quot;Solvent&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;Solvent 1&quot;/>
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
                            <code value=&quot;SOL&quot;/>
                            <display value=&quot;Solvent&quot;/>">Solvent<span class="greyOff"> [SOL]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SOL&quot;/>
                            <display value=&quot;Solvent&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SOL&quot;/>
                            <display value=&quot;Solvent&quot;/>">Solvent<span class="greyOff"> [SOL]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueCodeableConcept>
                        <text value=&quot;Solvent 1&quot;/>">
				Value:
				<span style="white-space:normal;">Solvent 1</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationSolvents-sol2)(fullUrl: urn:uuid:ba8a182e-8571-6cbd-047b-612735d599d2)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationSolvents-sol2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Solvents&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;SOL&quot;/>
                        <display value=&quot;Residual solvents&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;1.4&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SOL&quot;/>
                            <display value=&quot;Solvent&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;Solvent 2&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationSolvents-sol2">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;SOL&quot;/>
                        <display value=&quot;Residual solvents&quot;/>">Residual solvents<span class="greyOff"> [SOL]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationSolvents-sol2</div><div class="debugOff"> fullUrl: urn:uuid:ba8a182e-8571-6cbd-047b-612735d599d2</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <code value=&quot;SOL&quot;/>
                        <display value=&quot;Residual solvents&quot;/>
                    </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;SOL&quot;/>
                        <display value=&quot;Residual solvents&quot;/>">Residual solvents<span class="greyOff"> [SOL]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;1.4&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;1.4&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">1.4% w/w</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>">Subject</span>: CAT1 (<a href="#Substance-substance-dxpq-ex1" title="click to see target - id=substance-dxpq-ex1">Substance</a>)<span class="debugOff"> id: substance-dxpq-ex1</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationSolvents-sol2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Solvents&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;SOL&quot;/>
                        <display value=&quot;Residual solvents&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;1.4&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SOL&quot;/>
                            <display value=&quot;Solvent&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;Solvent 2&quot;/>
                    </valueCodeableConcept>
                </component>">Instantiates</span>: Residual solvents - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Solvents" title="click to see target - id=Solvents">ObservationDefinition</a>)<span class="debugOff"> id: Solvents</span></span><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SOL&quot;/>
                            <display value=&quot;Solvent&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;Solvent 2&quot;/>
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
                            <code value=&quot;SOL&quot;/>
                            <display value=&quot;Solvent&quot;/>">Solvent<span class="greyOff"> [SOL]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SOL&quot;/>
                            <display value=&quot;Solvent&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SOL&quot;/>
                            <display value=&quot;Solvent&quot;/>">Solvent<span class="greyOff"> [SOL]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueCodeableConcept>
                        <text value=&quot;Solvent 2&quot;/>">
				Value:
				<span style="white-space:normal;">Solvent 2</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationSolvents-sol2-2)(fullUrl: urn:uuid:0b5b94cc-7a1a-4ada-66c7-954ceb528d67)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationSolvents-sol2-2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Solvents&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;SOL&quot;/>
                        <display value=&quot;Residual solvents&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;1.5&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SOL&quot;/>
                            <display value=&quot;Solvent&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;Solvent 2&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationSolvents-sol2-2">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;SOL&quot;/>
                        <display value=&quot;Residual solvents&quot;/>">Residual solvents<span class="greyOff"> [SOL]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationSolvents-sol2-2</div><div class="debugOff"> fullUrl: urn:uuid:0b5b94cc-7a1a-4ada-66c7-954ceb528d67</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <code value=&quot;SOL&quot;/>
                        <display value=&quot;Residual solvents&quot;/>
                    </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;SOL&quot;/>
                        <display value=&quot;Residual solvents&quot;/>">Residual solvents<span class="greyOff"> [SOL]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;1.5&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;1.5&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">1.5% w/w</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>">Subject</span>: CAT2 (<a href="#Substance-actual-batch-substance-2" title="click to see target - id=actual-batch-substance-2">Substance</a>)<span class="debugOff"> id: actual-batch-substance-2</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationSolvents-sol2-2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Solvents&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;SOL&quot;/>
                        <display value=&quot;Residual solvents&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;1.5&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SOL&quot;/>
                            <display value=&quot;Solvent&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;Solvent 2&quot;/>
                    </valueCodeableConcept>
                </component>">Instantiates</span>: Residual solvents - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Solvents" title="click to see target - id=Solvents">ObservationDefinition</a>)<span class="debugOff"> id: Solvents</span></span><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SOL&quot;/>
                            <display value=&quot;Solvent&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;Solvent 2&quot;/>
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
                            <code value=&quot;SOL&quot;/>
                            <display value=&quot;Solvent&quot;/>">Solvent<span class="greyOff"> [SOL]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SOL&quot;/>
                            <display value=&quot;Solvent&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SOL&quot;/>
                            <display value=&quot;Solvent&quot;/>">Solvent<span class="greyOff"> [SOL]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueCodeableConcept>
                        <text value=&quot;Solvent 2&quot;/>">
				Value:
				<span style="white-space:normal;">Solvent 2</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationSolvents-sol2-3)(fullUrl: urn:uuid:6afaacee-11a6-58b2-47df-5f79722c66ac)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationSolvents-sol2-3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Solvents&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;SOL&quot;/>
                        <display value=&quot;Residual solvents&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;1.2&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SOL&quot;/>
                            <display value=&quot;Solvent&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;Solvent 2&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationSolvents-sol2-3">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;SOL&quot;/>
                        <display value=&quot;Residual solvents&quot;/>">Residual solvents<span class="greyOff"> [SOL]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationSolvents-sol2-3</div><div class="debugOff"> fullUrl: urn:uuid:6afaacee-11a6-58b2-47df-5f79722c66ac</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <code value=&quot;SOL&quot;/>
                        <display value=&quot;Residual solvents&quot;/>
                    </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;SOL&quot;/>
                        <display value=&quot;Residual solvents&quot;/>">Residual solvents<span class="greyOff"> [SOL]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;1.2&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;1.2&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">1.2% w/w</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>">Subject</span>: CAT3 (<a href="#Substance-actual-batch-substance-3" title="click to see target - id=actual-batch-substance-3">Substance</a>)<span class="debugOff"> id: actual-batch-substance-3</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationSolvents-sol2-3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Solvents&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;SOL&quot;/>
                        <display value=&quot;Residual solvents&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;1.2&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SOL&quot;/>
                            <display value=&quot;Solvent&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;Solvent 2&quot;/>
                    </valueCodeableConcept>
                </component>">Instantiates</span>: Residual solvents - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Solvents" title="click to see target - id=Solvents">ObservationDefinition</a>)<span class="debugOff"> id: Solvents</span></span><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SOL&quot;/>
                            <display value=&quot;Solvent&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;Solvent 2&quot;/>
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
                            <code value=&quot;SOL&quot;/>
                            <display value=&quot;Solvent&quot;/>">Solvent<span class="greyOff"> [SOL]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SOL&quot;/>
                            <display value=&quot;Solvent&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SOL&quot;/>
                            <display value=&quot;Solvent&quot;/>">Solvent<span class="greyOff"> [SOL]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueCodeableConcept>
                        <text value=&quot;Solvent 2&quot;/>">
				Value:
				<span style="white-space:normal;">Solvent 2</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationWater)(fullUrl: urn:uuid:c2644a86-1684-286e-00e2-dcaf907a8970)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationWater&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Water&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;WWW&quot;/>
                        <display value=&quot;Water Content&quot;/>
                    </coding>
                    <text value=&quot;Water Content&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.8&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>" id="Observation-observationWater">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;WWW&quot;/>
                        <display value=&quot;Water Content&quot;/>">Water Content<span class="greyOff"> [WWW]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Water Content</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationWater</div><div class="debugOff"> fullUrl: urn:uuid:c2644a86-1684-286e-00e2-dcaf907a8970</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <code value=&quot;WWW&quot;/>
                        <display value=&quot;Water Content&quot;/>
                    </coding>
                    <text value=&quot;Water Content&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;WWW&quot;/>
                        <display value=&quot;Water Content&quot;/>">Water Content<span class="greyOff"> [WWW]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Water Content</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.8&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.8&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.8% w/w</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>">Subject</span>: CAT1 (<a href="#Substance-substance-dxpq-ex1" title="click to see target - id=substance-dxpq-ex1">Substance</a>)<span class="debugOff"> id: substance-dxpq-ex1</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationWater&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Water&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;WWW&quot;/>
                        <display value=&quot;Water Content&quot;/>
                    </coding>
                    <text value=&quot;Water Content&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.8&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>">Instantiates</span>: Water Content - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Water" title="click to see target - id=Water">ObservationDefinition</a>)<span class="debugOff"> id: Water</span></span><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationWater2)(fullUrl: urn:uuid:cb5f6872-6eeb-727a-7c33-f2c438581a1c)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationWater2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Water&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;WWW&quot;/>
                        <display value=&quot;Water Content&quot;/>
                    </coding>
                    <text value=&quot;Water Content&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.8&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>" id="Observation-observationWater2">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;WWW&quot;/>
                        <display value=&quot;Water Content&quot;/>">Water Content<span class="greyOff"> [WWW]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Water Content</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationWater2</div><div class="debugOff"> fullUrl: urn:uuid:cb5f6872-6eeb-727a-7c33-f2c438581a1c</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <code value=&quot;WWW&quot;/>
                        <display value=&quot;Water Content&quot;/>
                    </coding>
                    <text value=&quot;Water Content&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;WWW&quot;/>
                        <display value=&quot;Water Content&quot;/>">Water Content<span class="greyOff"> [WWW]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Water Content</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.8&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.8&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.8% w/w</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>">Subject</span>: CAT2 (<a href="#Substance-actual-batch-substance-2" title="click to see target - id=actual-batch-substance-2">Substance</a>)<span class="debugOff"> id: actual-batch-substance-2</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationWater2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Water&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;WWW&quot;/>
                        <display value=&quot;Water Content&quot;/>
                    </coding>
                    <text value=&quot;Water Content&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.8&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>">Instantiates</span>: Water Content - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Water" title="click to see target - id=Water">ObservationDefinition</a>)<span class="debugOff"> id: Water</span></span><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationWater3)(fullUrl: urn:uuid:7faaf980-7c10-7b9a-9572-1bacd485824e)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationWater3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Water&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Water Content&quot;/>
                    </coding>
                    <text value=&quot;Water Content&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.8&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>" id="Observation-observationWater3">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Water Content&quot;/>">Water Content<span class="greyOff"> [XXX]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Water Content</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationWater3</div><div class="debugOff"> fullUrl: urn:uuid:7faaf980-7c10-7b9a-9572-1bacd485824e</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Water Content&quot;/>
                    </coding>
                    <text value=&quot;Water Content&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Water Content&quot;/>">Water Content<span class="greyOff"> [XXX]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Water Content</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.8&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.8&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.8% w/w</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>">Subject</span>: CAT3 (<a href="#Substance-actual-batch-substance-3" title="click to see target - id=actual-batch-substance-3">Substance</a>)<span class="debugOff"> id: actual-batch-substance-3</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationWater3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Water&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Water Content&quot;/>
                    </coding>
                    <text value=&quot;Water Content&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.8&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>">Instantiates</span>: Water Content - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Water" title="click to see target - id=Water">ObservationDefinition</a>)<span class="debugOff"> id: Water</span></span><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationParticleSize-size1)(fullUrl: urn:uuid:e4d2118a-8562-9eb1-2c14-4e145d2a95fc)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationParticleSize-size1&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Particles&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.5&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <text value=&quot;D(v,0.9)&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationParticleSize-size1">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>">Particle size distribution<span class="greyOff"> [PART]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationParticleSize-size1</div><div class="debugOff"> fullUrl: urn:uuid:e4d2118a-8562-9eb1-2c14-4e145d2a95fc</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>
                    </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>">Particle size distribution<span class="greyOff"> [PART]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.5&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.5&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.5% w/w</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>">Subject</span>: CAT1 (<a href="#Substance-substance-dxpq-ex1" title="click to see target - id=substance-dxpq-ex1">Substance</a>)<span class="debugOff"> id: substance-dxpq-ex1</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationParticleSize-size1&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Particles&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.5&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <text value=&quot;D(v,0.9)&quot;/>
                    </valueCodeableConcept>
                </component>">Instantiates</span>: Particle size distribution - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Particles" title="click to see target - id=Particles">ObservationDefinition</a>)<span class="debugOff"> id: Particles</span></span><div class="indent obsl2" title="
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
                        <text value=&quot;D(v,0.9)&quot;/>
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
                        <text value=&quot;D(v,0.9)&quot;/>">
				Value:
				<span style="white-space:normal;">D(v,0.9)</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationParticleSize-size1-2)(fullUrl: urn:uuid:ec078717-9512-4db4-77c6-2c7e29d213a6)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationParticleSize-size1-2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Particles&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.4&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <text value=&quot;D(v,0.9)&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationParticleSize-size1-2">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>">Particle size distribution<span class="greyOff"> [PART]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationParticleSize-size1-2</div><div class="debugOff"> fullUrl: urn:uuid:ec078717-9512-4db4-77c6-2c7e29d213a6</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>
                    </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>">Particle size distribution<span class="greyOff"> [PART]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.4&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.4&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.4% w/w</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>">Subject</span>: CAT2 (<a href="#Substance-actual-batch-substance-2" title="click to see target - id=actual-batch-substance-2">Substance</a>)<span class="debugOff"> id: actual-batch-substance-2</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationParticleSize-size1-2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Particles&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.4&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
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
                        <text value=&quot;D(v,0.9)&quot;/>
                    </valueCodeableConcept>
                </component>">Instantiates</span>: Particle size distribution - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Particles" title="click to see target - id=Particles">ObservationDefinition</a>)<span class="debugOff"> id: Particles</span></span><div class="indent obsl2" title="
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
                        <text value=&quot;D(v,0.9)&quot;/>
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
                        <text value=&quot;D(v,0.9)&quot;/>">
				Value:
				<span style="white-space:normal;">D(v,0.9)</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationParticleSize-size1-3)(fullUrl: urn:uuid:05cfb495-2580-561a-688d-ce6ea24c8962)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationParticleSize-size1-3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Particles&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.2&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;D(v,0.9)&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationParticleSize-size1-3">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>">Particle size distribution<span class="greyOff"> [PART]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationParticleSize-size1-3</div><div class="debugOff"> fullUrl: urn:uuid:05cfb495-2580-561a-688d-ce6ea24c8962</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>
                    </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>">Particle size distribution<span class="greyOff"> [PART]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.2&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.2&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.2% w/w</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>">Subject</span>: CAT3 (<a href="#Substance-actual-batch-substance-3" title="click to see target - id=actual-batch-substance-3">Substance</a>)<span class="debugOff"> id: actual-batch-substance-3</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationParticleSize-size1-3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Particles&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.2&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;D(v,0.9)&quot;/>
                    </valueCodeableConcept>
                </component>">Instantiates</span>: Particle size distribution - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Particles" title="click to see target - id=Particles">ObservationDefinition</a>)<span class="debugOff"> id: Particles</span></span><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;D(v,0.9)&quot;/>
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
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>">Particle Size<span class="greyOff"> [SIZE]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>">Particle Size<span class="greyOff"> [SIZE]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueCodeableConcept>
                        <text value=&quot;D(v,0.9)&quot;/>">
				Value:
				<span style="white-space:normal;">D(v,0.9)</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationParticleSize-size2)(fullUrl: urn:uuid:d2a60ae5-96b4-3d13-38da-729c652347a3)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationParticleSize-size2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Particles&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.5&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;D(v,0.5)&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationParticleSize-size2">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>">Particle size distribution<span class="greyOff"> [PART]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationParticleSize-size2</div><div class="debugOff"> fullUrl: urn:uuid:d2a60ae5-96b4-3d13-38da-729c652347a3</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>
                    </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>">Particle size distribution<span class="greyOff"> [PART]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.5&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.5&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.5% w/w</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>">Subject</span>: CAT1 (<a href="#Substance-substance-dxpq-ex1" title="click to see target - id=substance-dxpq-ex1">Substance</a>)<span class="debugOff"> id: substance-dxpq-ex1</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationParticleSize-size2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Particles&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.5&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;D(v,0.5)&quot;/>
                    </valueCodeableConcept>
                </component>">Instantiates</span>: Particle size distribution - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Particles" title="click to see target - id=Particles">ObservationDefinition</a>)<span class="debugOff"> id: Particles</span></span><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;D(v,0.5)&quot;/>
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
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>">Particle Size<span class="greyOff"> [SIZE]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>">Particle Size<span class="greyOff"> [SIZE]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueCodeableConcept>
                        <text value=&quot;D(v,0.5)&quot;/>">
				Value:
				<span style="white-space:normal;">D(v,0.5)</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationParticleSize-size2-2)(fullUrl: urn:uuid:c3f51325-2f5f-194c-919b-2219ee1f5c45)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationParticleSize-size2-2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Particles&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.4&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;D(v,0.5)&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationParticleSize-size2-2">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>">Particle size distribution<span class="greyOff"> [PART]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationParticleSize-size2-2</div><div class="debugOff"> fullUrl: urn:uuid:c3f51325-2f5f-194c-919b-2219ee1f5c45</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>
                    </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>">Particle size distribution<span class="greyOff"> [PART]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.4&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.4&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.4% w/w</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>">Subject</span>: CAT2 (<a href="#Substance-actual-batch-substance-2" title="click to see target - id=actual-batch-substance-2">Substance</a>)<span class="debugOff"> id: actual-batch-substance-2</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationParticleSize-size2-2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Particles&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.4&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;D(v,0.5)&quot;/>
                    </valueCodeableConcept>
                </component>">Instantiates</span>: Particle size distribution - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Particles" title="click to see target - id=Particles">ObservationDefinition</a>)<span class="debugOff"> id: Particles</span></span><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;D(v,0.5)&quot;/>
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
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>">Particle Size<span class="greyOff"> [SIZE]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>">Particle Size<span class="greyOff"> [SIZE]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueCodeableConcept>
                        <text value=&quot;D(v,0.5)&quot;/>">
				Value:
				<span style="white-space:normal;">D(v,0.5)</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationParticleSize-size2-3)(fullUrl: urn:uuid:e9d89693-11b1-13ed-5cde-606fc1b8372c)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationParticleSize-size2-3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Particles&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.2&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;D(v,0.5)&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationParticleSize-size2-3">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>">Particle size distribution<span class="greyOff"> [PART]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationParticleSize-size2-3</div><div class="debugOff"> fullUrl: urn:uuid:e9d89693-11b1-13ed-5cde-606fc1b8372c</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>
                    </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>">Particle size distribution<span class="greyOff"> [PART]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.2&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.2&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.2% w/w</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>">Subject</span>: CAT3 (<a href="#Substance-actual-batch-substance-3" title="click to see target - id=actual-batch-substance-3">Substance</a>)<span class="debugOff"> id: actual-batch-substance-3</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationParticleSize-size2-3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Particles&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.2&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;D(v,0.5)&quot;/>
                    </valueCodeableConcept>
                </component>">Instantiates</span>: Particle size distribution - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Particles" title="click to see target - id=Particles">ObservationDefinition</a>)<span class="debugOff"> id: Particles</span></span><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;D(v,0.5)&quot;/>
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
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>">Particle Size<span class="greyOff"> [SIZE]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>">Particle Size<span class="greyOff"> [SIZE]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueCodeableConcept>
                        <text value=&quot;D(v,0.5)&quot;/>">
				Value:
				<span style="white-space:normal;">D(v,0.5)</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationParticleSize-size3)(fullUrl: urn:uuid:2659b000-96e2-1b8b-129b-0c00e1074b0f)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationParticleSize-size3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Particles&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;D(v,0.1)&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationParticleSize-size3">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>">Particle size distribution<span class="greyOff"> [PART]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationParticleSize-size3</div><div class="debugOff"> fullUrl: urn:uuid:2659b000-96e2-1b8b-129b-0c00e1074b0f</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>
                    </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>">Particle size distribution<span class="greyOff"> [PART]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.1% w/w</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>">Subject</span>: CAT1 (<a href="#Substance-substance-dxpq-ex1" title="click to see target - id=substance-dxpq-ex1">Substance</a>)<span class="debugOff"> id: substance-dxpq-ex1</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationParticleSize-size3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Particles&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/substance-dxpq-ex1&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;D(v,0.1)&quot;/>
                    </valueCodeableConcept>
                </component>">Instantiates</span>: Particle size distribution - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Particles" title="click to see target - id=Particles">ObservationDefinition</a>)<span class="debugOff"> id: Particles</span></span><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;D(v,0.1)&quot;/>
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
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>">Particle Size<span class="greyOff"> [SIZE]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>">Particle Size<span class="greyOff"> [SIZE]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueCodeableConcept>
                        <text value=&quot;D(v,0.1)&quot;/>">
				Value:
				<span style="white-space:normal;">D(v,0.1)</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationParticleSize-size3-2)(fullUrl: urn:uuid:10b47328-36fa-343d-5699-5b32b30a6d33)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationParticleSize-size3-2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Particles&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;D(v,0.1)&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationParticleSize-size3-2">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>">Particle size distribution<span class="greyOff"> [PART]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationParticleSize-size3-2</div><div class="debugOff"> fullUrl: urn:uuid:10b47328-36fa-343d-5699-5b32b30a6d33</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>
                    </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>">Particle size distribution<span class="greyOff"> [PART]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.1% w/w</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>">Subject</span>: CAT2 (<a href="#Substance-actual-batch-substance-2" title="click to see target - id=actual-batch-substance-2">Substance</a>)<span class="debugOff"> id: actual-batch-substance-2</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationParticleSize-size3-2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Particles&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-2&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;D(v,0.1)&quot;/>
                    </valueCodeableConcept>
                </component>">Instantiates</span>: Particle size distribution - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Particles" title="click to see target - id=Particles">ObservationDefinition</a>)<span class="debugOff"> id: Particles</span></span><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;D(v,0.1)&quot;/>
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
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>">Particle Size<span class="greyOff"> [SIZE]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>">Particle Size<span class="greyOff"> [SIZE]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueCodeableConcept>
                        <text value=&quot;D(v,0.1)&quot;/>">
				Value:
				<span style="white-space:normal;">D(v,0.1)</span></div></div><div class="summaryHiddenOff"></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationParticleSize-size3-3)(fullUrl: urn:uuid:e6780766-317a-382f-92d2-79825f506cc5)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationParticleSize-size3-3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Particles&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;D(v,0.1)&quot;/>
                    </valueCodeableConcept>
                </component>" id="Observation-observationParticleSize-size3-3">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>">Particle size distribution<span class="greyOff"> [PART]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationParticleSize-size3-3</div><div class="debugOff"> fullUrl: urn:uuid:e6780766-317a-382f-92d2-79825f506cc5</div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
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
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>
                    </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>">Particle size distribution<span class="greyOff"> [PART]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>">0.1% w/w</span><span class="greyOff"> [%{ w/w}] (http://unitsofmeasure.org)</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>">Subject</span>: CAT3 (<a href="#Substance-actual-batch-substance-3" title="click to see target - id=actual-batch-substance-3">Substance</a>)<span class="debugOff"> id: actual-batch-substance-3</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationParticleSize-size3-3&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/Particles&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Substance/actual-batch-substance-3&quot;/>
                </subject>
                <valueQuantity>
                    <value value=&quot;0.1&quot;/>
                    <unit value=&quot;% w/w&quot;/>
                    <system value=&quot;http://unitsofmeasure.org&quot;/>
                    <code value=&quot;%{ w/w}&quot;/>
                </valueQuantity>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;D(v,0.1)&quot;/>
                    </valueCodeableConcept>
                </component>">Instantiates</span>: Particle size distribution - Plan: S.4.4 BATCH ANALYSIS (<a href="#PlanDefinition-specificationProtocol" title="click to see target - id=specificationProtocol">PlanDefinition</a>)<span class="debugOff"> id: specificationProtocol</span> (<a href="#ObservationDefinition-Particles" title="click to see target - id=Particles">ObservationDefinition</a>)<span class="debugOff"> id: Particles</span></span><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>
                        </coding>
                    </code>
                    <valueCodeableConcept>
                        <text value=&quot;D(v,0.1)&quot;/>
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
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>">Particle Size<span class="greyOff"> [SIZE]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SIZE&quot;/>
                            <display value=&quot;Particle Size&quot;/>">Particle Size<span class="greyOff"> [SIZE]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueCodeableConcept>
                        <text value=&quot;D(v,0.1)&quot;/>">
				Value:
				<span style="white-space:normal;">D(v,0.1)</span></div></div><div class="summaryHiddenOff"></div></div>
</div>
</div>
</div>
<div class="org indent"><span class="bold">Report Specification</span><div class="indent plan summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (DiagnosticReport/valueReference, id: batchAnalysisReport fullUrl: urn:uuid:01a5777c-4b48-a0df-2963-02cd63339006)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="PlanDefinition (id: specificationProtocol)(fullUrl: urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763f)

<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <id value=&quot;specificationProtocol&quot;/>
                <title value=&quot;S.4.4 BATCH ANALYSIS&quot;/>
                <status value=&quot;active&quot;/>
                <subjectReference>
                    <reference value=&quot;SubstanceDefinition/substance1&quot;/>
                </subjectReference>
                <description value=&quot;Narrative description of analysis&quot;/>
                <!-- new &quot;tabular&quot; style -->
                <action>
                    <!-- this is then entire thing -->
                    <title value=&quot;Batch Specification for Drug Product&quot;/>
                    <code>
                        <text value=&quot;Overall set of actions&quot;/>
                    </code>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Description&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Identification&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Assay&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Impurities&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Mutagenic&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Enantiomeric&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Solvents&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Water&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Particles&quot;/>
                    </action>
                </action>" id="PlanDefinition-specificationProtocol">Plan</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/plandefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/plandefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/plandefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: specificationProtocol</div>
<div class="debugOff"> fullUrl: urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763f</div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <title value=&quot;S.4.4 BATCH ANALYSIS&quot;>">Title: </span><span>S.4.4 BATCH ANALYSIS</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <description value=&quot;Narrative description of analysis&quot;>">Description: </span><span>Narrative description of analysis</span></div>
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
                <id value=&quot;specificationProtocol&quot;/>
                <title value=&quot;S.4.4 BATCH ANALYSIS&quot;/>
                <status value=&quot;active&quot;/>
                <subjectReference>
                    <reference value=&quot;SubstanceDefinition/substance1&quot;/>
                </subjectReference>
                <description value=&quot;Narrative description of analysis&quot;/>
                <!-- new &quot;tabular&quot; style -->
                <action>
                    <!-- this is then entire thing -->
                    <title value=&quot;Batch Specification for Drug Product&quot;/>
                    <code>
                        <text value=&quot;Overall set of actions&quot;/>
                    </code>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Description&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Identification&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Assay&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Impurities&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Mutagenic&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Enantiomeric&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Solvents&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Water&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Particles&quot;/>
                    </action>
                </action>">Subject</span><div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (PlanDefinition/subjectReference, id: specificationProtocol fullUrl: urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763f)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Substance/code, id: substance-dxpq-ex1 fullUrl: urn:uuid:87ef899b-14dd-26b7-7416-7ec1d01b62a1)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Substance/code, id: actual-batch-substance-2 fullUrl: urn:uuid:6412c5d4-1b7d-8405-85dc-75dbaa300ea4)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Substance/code, id: actual-batch-substance-3 fullUrl: urn:uuid:ef17cff1-6586-a4a4-9168-2602140548d7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (PlanDefinition/subjectReference, id: manufacturingProcess fullUrl: urn:uuid:b30a1024-37db-a1bc-05e5-cc4596d92975)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: substance1)(fullUrl: urn:uuid:8dae93e0-048d-35a4-71ea-7c603184a130)

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
                </name>" id="SubstanceDefinition-substance1">Substance</span></a><span class="summaryShowsOff"><b> - Stelbatolol</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substancedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: substance1</div><div class="debugOff"> fullUrl: urn:uuid:8dae93e0-048d-35a4-71ea-7c603184a130</div><div class="summaryHiddenOff"><div class="indent sbddetails"><div><span title="
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
                    <reference value=&quot;Organization/substance-manufacturer&quot;/>">Manufacturer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Substance/valueReference, id: substance-dxpq-ex1 fullUrl: urn:uuid:87ef899b-14dd-26b7-7416-7ec1d01b62a1)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Substance/valueReference, id: actual-batch-substance-2 fullUrl: urn:uuid:6412c5d4-1b7d-8405-85dc-75dbaa300ea4)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Substance/valueReference, id: actual-batch-substance-3 fullUrl: urn:uuid:ef17cff1-6586-a4a4-9168-2602140548d7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: substance1 fullUrl: urn:uuid:8dae93e0-048d-35a4-71ea-7c603184a130)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: substance-manufacturer)(fullUrl: urn:uuid:3d399cbc-244e-9b5f-838b-b7daa0489330)

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
                        <country value=&quot;USA&quot;>">USA</span></div></div></div></div></div></div><div class="summaryHiddenOff"></div></div></span><div class="htmlTableRemove"><br style="line-height:6px;"><div class="indent-no-border">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <title value=&quot;Batch Specification for Drug Product&quot;>">Action: </span><span>Batch Specification for Drug Product</span></div><br style="line-height:6px;"><table class="rounded-corners white" id="tabularModeTable" style="width:70%">
<tr>
<th rowspan="1">Test Procedure</th>
<th colspan="0">Acceptance Criteria</th>
<th rowspan="1">Method Reference</th></tr>
<tr>
<td><a href="#ObservationDefinition-Description" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Description&quot;>" class="noUnderline">Description</a></td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://accumulus.org/fhir/extension/qualifiedValueText&quot;>
                        <valueString value=&quot;A white to brown powder&quot;>">A white to brown powder</span></td>
<td class="centred">Visual inspection</td>
</tr>
<tr>
<td><a href="#ObservationDefinition-Identification" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Identification&quot;>" class="noUnderline">Identification</a></td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://accumulus.org/fhir/extension/qualifiedValueText&quot;>
                        <valueString value=&quot;Conforms with reference&quot;>">Conforms with reference</span></td>
<td class="centred">Identification by IR spectroscopy Identification by HPLC</td>
</tr>
<tr>
<td><a href="#ObservationDefinition-Assay" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Assay&quot;>" class="noUnderline">Assay</a></td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        <low>
                            <value value=&quot;98&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%{w/w}&quot;/>
                            <!-- not sure this is a correct ucum code -->
                        </low>
                        <high>
                            <value value=&quot;102&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%{w/w}&quot;/>
                            <!-- not sure this is a correct ucum code -->
                        </high>">98 % w/w - 102 % w/w</span></td>
<td class="centred">Assay by LC</td>
</tr>
<tr>
<td colspan="6">Drug Substance Related Organic impurities</td>
<tr>
<td style="padding-left:20px">Impurity 1</td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    ...
                    <range>
                        <high>
                            <value value=&quot;0.5&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>">NMT 0.5 % w/w</span></td>
<td rowspan="5" class="centred">Organic impurities by LC</td>
</tr>
<tr>
<td style="padding-left:20px">Impurity 2</td>
<td class="centred" style="border-right: 1px solid black;"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    ...
                    <range>
                        <high>
                            <value value=&quot;0.5&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>">NMT 0.5 % w/w</span></td>
</tr>
<tr>
<td style="padding-left:20px">Impurity 3 <span title="Impurity 3 was included in the release specification throughout clinical development, and no longer forms a part of a commercial release specification; see Section S.4.5 Justification of Specification and Section S.2.5 Validation (PPQ) for additional data" class="hand">[2]</span></td>
<td class="centred" style="border-right: 1px solid black;"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    ...
                    <range>
                        <high>
                            <value value=&quot;0.5&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>">NMT 0.5 % w/w</span></td>
</tr>
<tr>
<td style="padding-left:20px">Any individual unspecified impurity</td>
<td class="centred" style="border-right: 1px solid black;"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    ...
                    <range>
                        <high>
                            <value value=&quot;0.10&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>">NMT 0.10 % w/w</span></td>
</tr>
<tr>
<td style="padding-left:20px">Total impurities</td>
<td class="centred" style="border-right: 1px solid black;"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    ...
                    <range>
                        <high>
                            <value value=&quot;2.0&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>">NMT 2.0 % w/w</span></td>
</tr>
</tr>
<tr>
<td><a href="#ObservationDefinition-Mutagenic" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Mutagenic impurities&quot;>" class="noUnderline">Mutagenic impurities</a></td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    ...
                    <range>
                        <high>
                            <value value=&quot;50&quot;/>
                            <unit value=&quot;ppm&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;[ppm]&quot;/>
                        </high>">NMT 50 ppm</span></td>
<td class="centred">Impurity 5 content by LC-MS</td>
</tr>
<tr>
<td><a href="#ObservationDefinition-Enantiomeric" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Enantiomeric purity&quot;>" class="noUnderline">Enantiomeric purity</a></td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        <low>
                            <value value=&quot;99.6&quot;/>
                            <unit value=&quot;%&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%&quot;/>
                        </low>">NLT 99.6 %</span></td>
<td class="centred">Enantiomeric purity by LC</td>
</tr>
<tr>
<td colspan="6">Residual solvents</td>
<tr>
<td style="padding-left:20px">Solvent 1</td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    ...
                    <range>
                        <high>
                            <value value=&quot;0.1&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>">NMT 0.1 % w/w</span></td>
<td rowspan="2" class="centred">Residual solvents by headspace GC</td>
</tr>
<tr>
<td style="padding-left:20px">Solvent 2</td>
<td class="centred" style="border-right: 1px solid black;"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    ...
                    <range>
                        <high>
                            <value value=&quot;2.0&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>">NMT 2.0 % w/w</span></td>
</tr>
</tr>
<tr>
<td><a href="#ObservationDefinition-Water" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Water Content&quot;>" class="noUnderline">Water Content</a></td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        <high>
                            <value value=&quot;1.0&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>">NMT 1.0 % w/w</span></td>
<td class="centred">USP Karl Fischer titration</td>
</tr>
<tr>
<td colspan="6">Particle size distribution <span title="Particle Size Distribution was included in the release specification throughout clinical development, and no longer forms a part of the commercial release specification; See Section S.4.5 Justification of Specification for data and rationale." class="hand">[4]</span></td>
<tr>
<td style="padding-left:20px">D(v,0.9)</td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    ...
                    <range>
                        <high>
                            <value value=&quot;319&quot;/>
                            <unit value=&quot;µm&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;um&quot;/>
                        </high>">NMT 319 µm</span></td>
<td rowspan="3" class="centred">Laser diffraction</td>
</tr>
<tr>
<td style="padding-left:20px">D(v,0.5)</td>
<td class="centred" style="border-right: 1px solid black;"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    ...
                    <range>
                        <high>
                            <value value=&quot;145&quot;/>
                            <unit value=&quot;µm&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;um&quot;/>
                        </high>">NMT 145 µm</span></td>
</tr>
<tr>
<td style="padding-left:20px">D(v,0.1)</td>
<td class="centred" style="border-right: 1px solid black;"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    ...
                    <range>
                        <high>
                            <value value=&quot;20&quot;/>
                            <unit value=&quot;µm&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;um&quot;/>
                        </high>">NMT 20 µm</span></td>
</tr>
</tr>
</table><br style="line-height:6px;">[1] CAT1, CAT2 and CAT3 met the clinical specification in place at time of testing; clinical specification release limit for Assay was 93% w/w; clinical specification release limit for Enantiomeric Purity was NLT 91.0%<br>[2] Impurity 3 was included in the release specification throughout clinical development, and no longer forms a part of a commercial release specification; see Section S.4.5 Justification of Specification and Section S.2.5 Validation (PPQ) for additional data<br>[3] Batch 3 did not originally meet specification criteria, and was subject to reprocessing and repurification. The updated result is presented in this table. The lot was not distributed for human use.<br>[4] Particle Size Distribution was included in the release specification throughout clinical development, and no longer forms a part of the commercial release specification; See Section S.4.5 Justification of Specification for data and rationale.<br><br style="line-height:6px;"></div><br style="line-height:6px;"></div>
<div class="indent summaryUnit initialSummary" ondblclick="summaryHandler(event)"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <action>
                    <!-- this is then entire thing -->
                    <title value=&quot;Batch Specification for Drug Product&quot;/>
                    <code>
                        <text value=&quot;Overall set of actions&quot;/>
                    </code>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Description&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Identification&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Assay&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Impurities&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Mutagenic&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Enantiomeric&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Solvents&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Water&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Particles&quot;/>
                    </action>"><span>Action</span><span class="summaryShowsOff"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <title value=&quot;Batch Specification for Drug Product&quot;>"> - Batch Specification for Drug Product</span> - <span style="white-space:normal;">Overall set of actions</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <title value=&quot;Batch Specification for Drug Product&quot;>">Title: </span><span>Batch Specification for Drug Product</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <code>
                        <text value=&quot;Overall set of actions&quot;/>">Code: </span><span style="white-space:normal;">Overall set of actions</span></div>
</div>
<div class="indent summaryUnit" ondblclick="summaryHandler(event)"><span title="
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
                        <definitionCanonical value=&quot;ObservationDefinition/Description&quot;/>"><span>Action</span><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
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
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: specificationProtocol fullUrl: urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763f)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observation-simple-dxpq-ex1 fullUrl: urn:uuid:81f552f9-8458-3cf4-8379-eea5417a9de2)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observationDescription2 fullUrl: urn:uuid:50bf6f69-a3f5-678b-469b-c5df5cca4c86)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observationDescription3 fullUrl: urn:uuid:145fd3b7-3678-867f-4298-a6c781b86de3)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: Description)(fullUrl: urn:uuid:13033a89-927a-10e0-503e-5f901bdca30f)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Description&quot;/>
                <title value=&quot;Description&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Description&quot;/>
                    </coding>
                    <text value=&quot;Description&quot;/>
                </code>
                <method>
                    <text value=&quot;Visual inspection&quot;/>
                </method>
                <qualifiedValue>
                    <extension url=&quot;http://accumulus.org/fhir/extension/qualifiedValueText&quot;>
                        <valueString value=&quot;A white to brown powder&quot;/>
                    </extension>
                </qualifiedValue>" id="ObservationDefinition-Description">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Description&quot;/>">Description<span class="greyOff"> [XXX]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Description</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: Description</div>
<div class="debugOff"> fullUrl: urn:uuid:13033a89-927a-10e0-503e-5f901bdca30f</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Description&quot;>">Title: </span><span>Description</span></div>
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
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Description&quot;/>
                    </coding>
                    <text value=&quot;Description&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Description&quot;/>">Description<span class="greyOff"> [XXX]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Description</span></span></div>
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
                    <extension url=&quot;http://accumulus.org/fhir/extension/qualifiedValueText&quot;>
                        <valueString value=&quot;A white to brown powder&quot;/>
                    </extension>">
				Acceptable Value
				<div title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <qualifiedValue>
                    <extension url=&quot;http://accumulus.org/fhir/extension/qualifiedValueText&quot;>
                        <valueString value=&quot;A white to brown powder&quot;/>
                    </extension>">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://accumulus.org/fhir/extension/qualifiedValueText&quot;>
                        <valueString value=&quot;A white to brown powder&quot;/>">Text: </span><span>A white to brown powder</span></div>
</div>
</div>
<div class="summaryHiddenOff"></div>
</div>
</div>
</div>
<div class="indent summaryUnit" ondblclick="summaryHandler(event)"><span title="
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
                        <definitionCanonical value=&quot;ObservationDefinition/Identification&quot;/>"><span>Action</span><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
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
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: specificationProtocol fullUrl: urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763f)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observationIdentification fullUrl: urn:uuid:55c89944-60d1-4eea-a2c3-6c53e3622bc5)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observationIdentification2 fullUrl: urn:uuid:adb51ab6-00a9-1078-69e5-d32c025a857c)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observationIdentification3 fullUrl: urn:uuid:916a0ae2-9c43-72f0-a22a-c5f8ce902125)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: Identification)(fullUrl: urn:uuid:8395ae1d-5064-0ab7-a297-6b20285b2230)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Identification&quot;/>
                <title value=&quot;Identification&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Identification&quot;/>
                    </coding>
                    <text value=&quot;Identification&quot;/>
                </code>
                <method>
                    <text value=&quot;Identification by IR spectroscopy Identification by HPLC&quot;/>
                </method>
                <qualifiedValue>
                    <extension url=&quot;http://accumulus.org/fhir/extension/qualifiedValueText&quot;>
                        <valueString value=&quot;Conforms with reference&quot;/>
                    </extension>
                </qualifiedValue>" id="ObservationDefinition-Identification">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Identification&quot;/>">Identification<span class="greyOff"> [XXX]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Identification</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: Identification</div>
<div class="debugOff"> fullUrl: urn:uuid:8395ae1d-5064-0ab7-a297-6b20285b2230</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Identification&quot;>">Title: </span><span>Identification</span></div>
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
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Identification&quot;/>
                    </coding>
                    <text value=&quot;Identification&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Identification&quot;/>">Identification<span class="greyOff"> [XXX]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Identification</span></span></div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <method>
                    <text value=&quot;Identification by IR spectroscopy Identification by HPLC&quot;/>">Method: </span><span><span style="white-space:normal;">Identification by IR spectroscopy Identification by HPLC</span></span></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="indent obsDefl2" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <qualifiedValue>
                    <extension url=&quot;http://accumulus.org/fhir/extension/qualifiedValueText&quot;>
                        <valueString value=&quot;Conforms with reference&quot;/>
                    </extension>">
				Acceptable Value
				<div title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <qualifiedValue>
                    <extension url=&quot;http://accumulus.org/fhir/extension/qualifiedValueText&quot;>
                        <valueString value=&quot;Conforms with reference&quot;/>
                    </extension>">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://accumulus.org/fhir/extension/qualifiedValueText&quot;>
                        <valueString value=&quot;Conforms with reference&quot;/>">Text: </span><span>Conforms with reference</span></div>
</div>
</div>
<div class="summaryHiddenOff"></div>
</div>
</div>
</div>
<div class="indent summaryUnit" ondblclick="summaryHandler(event)"><span title="
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
                        <definitionCanonical value=&quot;ObservationDefinition/Assay&quot;/>"><span>Action</span><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
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
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: specificationProtocol fullUrl: urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763f)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observationAssay fullUrl: urn:uuid:6deb4306-1193-24ae-a565-f73225652bdd)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observationAssay2 fullUrl: urn:uuid:f6aabd2f-5902-57e7-6126-eccd9158a5b5)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observationAssay3 fullUrl: urn:uuid:32f598e4-a0e0-98dc-41dd-0f8397f953ad)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: Assay)(fullUrl: urn:uuid:2117208e-4185-9091-1f86-cce37b121838)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Assay&quot;/>
                <title value=&quot;Assay&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Assay&quot;/>
                    </coding>
                    <text value=&quot;Assay&quot;/>
                </code>
                <method>
                    <text value=&quot;Assay by LC&quot;/>
                </method>
                <qualifiedValue>
                    <range>
                        <low>
                            <value value=&quot;98&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%{w/w}&quot;/>
                            <!-- not sure this is a correct ucum code -->
                        </low>
                        <high>
                            <value value=&quot;102&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%{w/w}&quot;/>
                            <!-- not sure this is a correct ucum code -->
                        </high>
                    </range>
                </qualifiedValue>" id="ObservationDefinition-Assay">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Assay&quot;/>">Assay<span class="greyOff"> [XXX]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Assay</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: Assay</div>
<div class="debugOff"> fullUrl: urn:uuid:2117208e-4185-9091-1f86-cce37b121838</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Assay&quot;>">Title: </span><span>Assay</span></div>
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
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Assay&quot;/>
                    </coding>
                    <text value=&quot;Assay&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;Assay&quot;/>">Assay<span class="greyOff"> [XXX]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Assay</span></span></div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <method>
                    <text value=&quot;Assay by LC&quot;/>">Method: </span><span><span style="white-space:normal;">Assay by LC</span></span></div>
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
                            <value value=&quot;98&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%{w/w}&quot;/>
                            <!-- not sure this is a correct ucum code -->
                        </low>
                        <high>
                            <value value=&quot;102&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%{w/w}&quot;/>
                            <!-- not sure this is a correct ucum code -->
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
                            <value value=&quot;98&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%{w/w}&quot;/>
                            <!-- not sure this is a correct ucum code -->
                        </low>
                        <high>
                            <value value=&quot;102&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%{w/w}&quot;/>
                            <!-- not sure this is a correct ucum code -->
                        </high>
                    </range>">
						Range: from <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        <low>
                            <value value=&quot;98&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%{w/w}&quot;/>
                            <!-- not sure this is a correct ucum code -->">98% w/w</span><span class="greyOff"> [%{w/w}] (http://unitsofmeasure.org)</span> to <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        ...
                        <high>
                            <value value=&quot;102&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%{w/w}&quot;/>
                            <!-- not sure this is a correct ucum code -->">102% w/w</span><span class="greyOff"> [%{w/w}] (http://unitsofmeasure.org)</span></div>
</div>
<div class="summaryHiddenOff"></div>
</div>
</div>
</div>
<div class="indent summaryUnit" ondblclick="summaryHandler(event)"><span title="
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
                        <definitionCanonical value=&quot;ObservationDefinition/Impurities&quot;/>"><span>Action</span><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
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
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: specificationProtocol fullUrl: urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763f)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observationDegradation-imp1 fullUrl: urn:uuid:02d9e6be-833c-1c6d-a64a-baa3935c959d)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observationDegradation-imp1-2 fullUrl: urn:uuid:d3e572b7-14fd-744b-4123-58741d75571e)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observationDegradation-imp1-3 fullUrl: urn:uuid:fe6ca484-a755-9a0b-a074-b6ee0a907ff8)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observationDegradation-imp2 fullUrl: urn:uuid:da92c71f-a12a-1980-11a3-80e3d1852244)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observationDegradation-imp2-2 fullUrl: urn:uuid:8bf75da1-9221-66fe-6725-c64cb45a57e6)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observationDegradation-imp2-3 fullUrl: urn:uuid:31bfeff4-4a7d-3be5-878e-fb674d3d5487)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observationDegradation-imp3 fullUrl: urn:uuid:732237a9-4b3b-27cc-99ca-6b913e622a29)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observationDegradation-imp3-2 fullUrl: urn:uuid:52afbeb4-4958-a275-a0ca-d70b2b5240ec)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observationDegradation-imp3-3 fullUrl: urn:uuid:7fc395b1-59e4-78be-0512-cf92133c0fac)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observationDegradation-imp-unspecified fullUrl: urn:uuid:9c98bd8a-7dda-2f01-0dbd-8c60b60e8572)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observationDegradation-imp-unspecified-2 fullUrl: urn:uuid:97b16ff8-8e0f-915a-9d65-7fab108f40c2)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observationDegradation-imp-unspecified-3 fullUrl: urn:uuid:0244eafe-3126-909b-7d8d-4253f45f525c)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observationDegradation-imp-total fullUrl: urn:uuid:10b80cbd-45d3-9be1-63b9-29f04b47376c)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observationDegradation-imp-total-2 fullUrl: urn:uuid:84f015ac-9572-324f-8013-0b999cc95bbd)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observationDegradation-imp-total-3 fullUrl: urn:uuid:987daeaa-4c2a-72b7-780f-4a9403163a3e)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: Impurities)(fullUrl: urn:uuid:d04e0f2a-6ee7-6c2e-1db8-7df394c927b8)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Impurities&quot;/>
                <title value=&quot;Drug Substance Related Organic impurities&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Drug Substance Related Organic impurities&quot;/>
                    </coding>
                </code>
                <method>
                    <text value=&quot;Organic impurities by LC&quot;/>
                </method>
                <qualifiedValue>
                    <appliesTo>
                        <!-- could be a code -->
                        <text value=&quot;Impurity 1&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;0.5&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>
                    </range>
                </qualifiedValue>
                <qualifiedValue>
                    <appliesTo>
                        <text value=&quot;Impurity 2&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;0.5&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>
                    </range>
                </qualifiedValue>
                <qualifiedValue>
                    <appliesTo>
                        <text value=&quot;Impurity 3&quot;>
                            <extension url=&quot;http://accumulus.org/fhir/extension/testComment&quot;>
                                <valueString value=&quot;Impurity 3 was included in the release specification throughout clinical development, and no longer forms a part of a commercial release specification; see Section S.4.5 Justification of Specification and Section S.2.5 Validation (PPQ) for additional data&quot;>
                                    <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tableFootnote&quot;>
                                        <valueString value=&quot;[2]&quot;/>
                                    </extension>
                                </valueString>
                            </extension>
                        </text>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;0.5&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>
                    </range>
                </qualifiedValue>
                <qualifiedValue>
                    <appliesTo>
                        <text value=&quot;Any individual unspecified impurity&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;0.10&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>
                    </range>
                </qualifiedValue>
                <qualifiedValue>
                    <appliesTo>
                        <text value=&quot;Total impurities&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;2.0&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>
                    </range>
                </qualifiedValue>
                <component>
                    <!-- are expected to have a component that says what impurity this one is -->
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                </component>" id="ObservationDefinition-Impurities">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Drug Substance Related Organic impurities&quot;/>">Drug Substance Related Organic impurities<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: Impurities</div>
<div class="debugOff"> fullUrl: urn:uuid:d04e0f2a-6ee7-6c2e-1db8-7df394c927b8</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Drug Substance Related Organic impurities&quot;>">Title: </span><span>Drug Substance Related Organic impurities</span></div>
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
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Drug Substance Related Organic impurities&quot;/>
                    </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Drug Substance Related Organic impurities&quot;/>">Drug Substance Related Organic impurities<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <method>
                    <text value=&quot;Organic impurities by LC&quot;/>">Method: </span><span><span style="white-space:normal;">Organic impurities by LC</span></span></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="indent obsDefl2" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <qualifiedValue>
                    <appliesTo>
                        <!-- could be a code -->
                        <text value=&quot;Impurity 1&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;0.5&quot;/>
                            <unit value=&quot;% w/w&quot;/>
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
                    <appliesTo>
                        <!-- could be a code -->
                        <text value=&quot;Impurity 1&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;0.5&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>
                    </range>">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <appliesTo>
                        <!-- could be a code -->
                        <text value=&quot;Impurity 1&quot;/>">Applies To: </span><span><span style="white-space:normal;">Impurity 1</span></span></div>
						Range:  to <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        <high>
                            <value value=&quot;0.5&quot;/>
                            <unit value=&quot;% w/w&quot;/>">0.5% w/w</span></div>
</div>
<div class="indent obsDefl2" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <qualifiedValue>
                    <appliesTo>
                        <text value=&quot;Impurity 2&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;0.5&quot;/>
                            <unit value=&quot;% w/w&quot;/>
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
                    <appliesTo>
                        <text value=&quot;Impurity 2&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;0.5&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>
                    </range>">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <appliesTo>
                        <text value=&quot;Impurity 2&quot;/>">Applies To: </span><span><span style="white-space:normal;">Impurity 2</span></span></div>
						Range:  to <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        <high>
                            <value value=&quot;0.5&quot;/>
                            <unit value=&quot;% w/w&quot;/>">0.5% w/w</span></div>
</div>
<div class="indent obsDefl2" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <qualifiedValue>
                    <appliesTo>
                        <text value=&quot;Impurity 3&quot;>
                            <extension url=&quot;http://accumulus.org/fhir/extension/testComment&quot;>
                                <valueString value=&quot;Impurity 3 was included in the release specification throughout clinical development, and no longer forms a part of a commercial release specification; see Section S.4.5 Justification of Specification and Section S.2.5 Validation (PPQ) for additional data&quot;>
                                    <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tableFootnote&quot;>
                                        <valueString value=&quot;[2]&quot;/>
                                    </extension>
                                </valueString>
                            </extension>
                        </text>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;0.5&quot;/>
                            <unit value=&quot;% w/w&quot;/>
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
                    <appliesTo>
                        <text value=&quot;Impurity 3&quot;>
                            <extension url=&quot;http://accumulus.org/fhir/extension/testComment&quot;>
                                <valueString value=&quot;Impurity 3 was included in the release specification throughout clinical development, and no longer forms a part of a commercial release specification; see Section S.4.5 Justification of Specification and Section S.2.5 Validation (PPQ) for additional data&quot;>
                                    <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tableFootnote&quot;>
                                        <valueString value=&quot;[2]&quot;/>
                                    </extension>
                                </valueString>
                            </extension>
                        </text>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;0.5&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>
                    </range>">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <appliesTo>
                        <text value=&quot;Impurity 3&quot;>
                            <extension url=&quot;http://accumulus.org/fhir/extension/testComment&quot;>
                                <valueString value=&quot;Impurity 3 was included in the release specification throughout clinical development, and no longer forms a part of a commercial release specification; see Section S.4.5 Justification of Specification and Section S.2.5 Validation (PPQ) for additional data&quot;>
                                    <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tableFootnote&quot;>
                                        <valueString value=&quot;[2]&quot;/>
                                    </extension>
                                </valueString>
                            </extension>
                        </text>">Applies To: </span><span><span style="white-space:normal;">Impurity 3</span></span></div>
						Range:  to <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        <high>
                            <value value=&quot;0.5&quot;/>
                            <unit value=&quot;% w/w&quot;/>">0.5% w/w</span></div>
</div>
<div class="indent obsDefl2" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <qualifiedValue>
                    <appliesTo>
                        <text value=&quot;Any individual unspecified impurity&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;0.10&quot;/>
                            <unit value=&quot;% w/w&quot;/>
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
                    <appliesTo>
                        <text value=&quot;Any individual unspecified impurity&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;0.10&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>
                    </range>">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <appliesTo>
                        <text value=&quot;Any individual unspecified impurity&quot;/>">Applies To: </span><span><span style="white-space:normal;">Any individual unspecified impurity</span></span></div>
						Range:  to <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        <high>
                            <value value=&quot;0.10&quot;/>
                            <unit value=&quot;% w/w&quot;/>">0.10% w/w</span></div>
</div>
<div class="indent obsDefl2" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <qualifiedValue>
                    <appliesTo>
                        <text value=&quot;Total impurities&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;2.0&quot;/>
                            <unit value=&quot;% w/w&quot;/>
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
                    <appliesTo>
                        <text value=&quot;Total impurities&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;2.0&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>
                    </range>">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <appliesTo>
                        <text value=&quot;Total impurities&quot;/>">Applies To: </span><span><span style="white-space:normal;">Total impurities</span></span></div>
						Range:  to <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        <high>
                            <value value=&quot;2.0&quot;/>
                            <unit value=&quot;% w/w&quot;/>">2.0% w/w</span></div>
</div>
<div class="indent obsDefl2" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <component>
                    <!-- are expected to have a component that says what impurity this one is -->
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>">
		Component
		<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
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
            <ObservationDefinition>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div>
</div>
<div class="summaryHiddenOff"></div>
</div>
</div>
</div>
<div class="indent summaryUnit" ondblclick="summaryHandler(event)"><span title="
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
                        <definitionCanonical value=&quot;ObservationDefinition/Mutagenic&quot;/>"><span>Action</span><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
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
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: specificationProtocol fullUrl: urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763f)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observationMutagenic fullUrl: urn:uuid:ff26533d-88a8-7f18-a275-42dc1373a388)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observationMutagenic2 fullUrl: urn:uuid:c99666d2-7962-9a71-58f6-7b2e5aa662f5)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observationMutagenic3 fullUrl: urn:uuid:c18e21d3-7113-4d08-4ff3-0c9718596f64)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: Mutagenic)(fullUrl: urn:uuid:0634020c-8729-99fc-7637-89799d7c445b)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Mutagenic&quot;/>
                <title value=&quot;Mutagenic impurities&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;MUT&quot;/>
                        <display value=&quot;Mutagenic impurities&quot;/>
                    </coding>
                </code>
                <method>
                    <text value=&quot;Impurity 5 content by LC-MS&quot;/>
                </method>
                <qualifiedValue>
                    <appliesTo>
                        <!-- could be a code -->
                        <text value=&quot;Impurity - Mutagenic&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;50&quot;/>
                            <unit value=&quot;ppm&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;[ppm]&quot;/>
                        </high>
                    </range>
                </qualifiedValue>
                <component>
                    <!-- are expected to have a component that says what impurity this one is -->
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                </component>" id="ObservationDefinition-Mutagenic">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;MUT&quot;/>
                        <display value=&quot;Mutagenic impurities&quot;/>">Mutagenic impurities<span class="greyOff"> [MUT]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: Mutagenic</div>
<div class="debugOff"> fullUrl: urn:uuid:0634020c-8729-99fc-7637-89799d7c445b</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Mutagenic impurities&quot;>">Title: </span><span>Mutagenic impurities</span></div>
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
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;MUT&quot;/>
                        <display value=&quot;Mutagenic impurities&quot;/>
                    </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;MUT&quot;/>
                        <display value=&quot;Mutagenic impurities&quot;/>">Mutagenic impurities<span class="greyOff"> [MUT]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <method>
                    <text value=&quot;Impurity 5 content by LC-MS&quot;/>">Method: </span><span><span style="white-space:normal;">Impurity 5 content by LC-MS</span></span></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="indent obsDefl2" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <qualifiedValue>
                    <appliesTo>
                        <!-- could be a code -->
                        <text value=&quot;Impurity - Mutagenic&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;50&quot;/>
                            <unit value=&quot;ppm&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;[ppm]&quot;/>
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
                    <appliesTo>
                        <!-- could be a code -->
                        <text value=&quot;Impurity - Mutagenic&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;50&quot;/>
                            <unit value=&quot;ppm&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;[ppm]&quot;/>
                        </high>
                    </range>">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <appliesTo>
                        <!-- could be a code -->
                        <text value=&quot;Impurity - Mutagenic&quot;/>">Applies To: </span><span><span style="white-space:normal;">Impurity - Mutagenic</span></span></div>
						Range:  to <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        <high>
                            <value value=&quot;50&quot;/>
                            <unit value=&quot;ppm&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;[ppm]&quot;/>">50 ppm</span><span class="greyOff"> [[ppm]] (http://unitsofmeasure.org)</span></div>
</div>
<div class="indent obsDefl2" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <component>
                    <!-- are expected to have a component that says what impurity this one is -->
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>">
		Component
		<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
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
            <ObservationDefinition>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div>
</div>
<div class="summaryHiddenOff"></div>
</div>
</div>
</div>
<div class="indent summaryUnit" ondblclick="summaryHandler(event)"><span title="
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
                        <definitionCanonical value=&quot;ObservationDefinition/Enantiomeric&quot;/>"><span>Action</span><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
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
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: specificationProtocol fullUrl: urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763f)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observationEnantiomericPurity fullUrl: urn:uuid:66fdac46-2a6b-a66f-891b-8dcf67cc46c7)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observationEnantiomericPurity2 fullUrl: urn:uuid:8306cfc5-158f-1a53-a683-048b226060d9)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observationEnantiomericPurity3 fullUrl: urn:uuid:fc49ad55-07d1-997d-6695-bbff44746e75)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: Enantiomeric)(fullUrl: urn:uuid:4e67725b-20c8-158e-9d53-1810bfa58d87)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Enantiomeric&quot;/>
                <title value=&quot;Enantiomeric purity&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;ZZZ&quot;/>
                        <display value=&quot;Enantiomeric purity&quot;/>
                    </coding>
                    <text value=&quot;Enantiomeric purity&quot;/>
                </code>
                <method>
                    <text value=&quot;Enantiomeric purity by LC&quot;/>
                </method>
                <qualifiedValue>
                    <range>
                        <low>
                            <value value=&quot;99.6&quot;/>
                            <unit value=&quot;%&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%&quot;/>
                        </low>
                    </range>
                </qualifiedValue>" id="ObservationDefinition-Enantiomeric">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;ZZZ&quot;/>
                        <display value=&quot;Enantiomeric purity&quot;/>">Enantiomeric purity<span class="greyOff"> [ZZZ]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Enantiomeric purity</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: Enantiomeric</div>
<div class="debugOff"> fullUrl: urn:uuid:4e67725b-20c8-158e-9d53-1810bfa58d87</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Enantiomeric purity&quot;>">Title: </span><span>Enantiomeric purity</span></div>
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
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;ZZZ&quot;/>
                        <display value=&quot;Enantiomeric purity&quot;/>
                    </coding>
                    <text value=&quot;Enantiomeric purity&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;ZZZ&quot;/>
                        <display value=&quot;Enantiomeric purity&quot;/>">Enantiomeric purity<span class="greyOff"> [ZZZ]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Enantiomeric purity</span></span></div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <method>
                    <text value=&quot;Enantiomeric purity by LC&quot;/>">Method: </span><span><span style="white-space:normal;">Enantiomeric purity by LC</span></span></div>
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
                            <value value=&quot;99.6&quot;/>
                            <unit value=&quot;%&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%&quot;/>
                        </low>
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
                            <value value=&quot;99.6&quot;/>
                            <unit value=&quot;%&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%&quot;/>
                        </low>
                    </range>">
						Range: from <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        <low>
                            <value value=&quot;99.6&quot;/>
                            <unit value=&quot;%&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%&quot;/>">99.6%</span><span class="greyOff"> [%] (http://unitsofmeasure.org)</span></div>
</div>
<div class="summaryHiddenOff"></div>
</div>
</div>
</div>
<div class="indent summaryUnit" ondblclick="summaryHandler(event)"><span title="
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
                        <definitionCanonical value=&quot;ObservationDefinition/Solvents&quot;/>"><span>Action</span><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
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
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: specificationProtocol fullUrl: urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763f)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observationSolvents-sol1 fullUrl: urn:uuid:f8160692-a7a8-3fa6-9f35-e7df35f51ac0)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observationSolvents-sol1-2 fullUrl: urn:uuid:a531aee9-4c21-06af-352c-a3615b5d957e)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observationSolvents-sol1-3 fullUrl: urn:uuid:033ce81d-5f0d-7a3e-93d3-fc64e122a1fd)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observationSolvents-sol2 fullUrl: urn:uuid:ba8a182e-8571-6cbd-047b-612735d599d2)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observationSolvents-sol2-2 fullUrl: urn:uuid:0b5b94cc-7a1a-4ada-66c7-954ceb528d67)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observationSolvents-sol2-3 fullUrl: urn:uuid:6afaacee-11a6-58b2-47df-5f79722c66ac)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: Solvents)(fullUrl: urn:uuid:2daba8ca-211f-4f4b-4028-16c30fe22ee8)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Solvents&quot;/>
                <title value=&quot;Residual solvents&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;SOL&quot;/>
                        <display value=&quot;Residual solvents&quot;/>
                    </coding>
                </code>
                <method>
                    <text value=&quot;Residual solvents by headspace GC&quot;/>
                </method>
                <qualifiedValue>
                    <appliesTo>
                        <!-- could be a code -->
                        <text value=&quot;Solvent 1&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;0.1&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>
                    </range>
                </qualifiedValue>
                <qualifiedValue>
                    <appliesTo>
                        <text value=&quot;Solvent 2&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;2.0&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>
                    </range>
                </qualifiedValue>
                <component>
                    <!-- are expected to have a component that says what solvent this one is -->
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SOLV&quot;/>
                            <display value=&quot;Solvent&quot;/>
                        </coding>
                    </code>
                </component>" id="ObservationDefinition-Solvents">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;SOL&quot;/>
                        <display value=&quot;Residual solvents&quot;/>">Residual solvents<span class="greyOff"> [SOL]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: Solvents</div>
<div class="debugOff"> fullUrl: urn:uuid:2daba8ca-211f-4f4b-4028-16c30fe22ee8</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Residual solvents&quot;>">Title: </span><span>Residual solvents</span></div>
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
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;SOL&quot;/>
                        <display value=&quot;Residual solvents&quot;/>
                    </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;SOL&quot;/>
                        <display value=&quot;Residual solvents&quot;/>">Residual solvents<span class="greyOff"> [SOL]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <method>
                    <text value=&quot;Residual solvents by headspace GC&quot;/>">Method: </span><span><span style="white-space:normal;">Residual solvents by headspace GC</span></span></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="indent obsDefl2" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <qualifiedValue>
                    <appliesTo>
                        <!-- could be a code -->
                        <text value=&quot;Solvent 1&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;0.1&quot;/>
                            <unit value=&quot;% w/w&quot;/>
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
                    <appliesTo>
                        <!-- could be a code -->
                        <text value=&quot;Solvent 1&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;0.1&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>
                    </range>">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <appliesTo>
                        <!-- could be a code -->
                        <text value=&quot;Solvent 1&quot;/>">Applies To: </span><span><span style="white-space:normal;">Solvent 1</span></span></div>
						Range:  to <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        <high>
                            <value value=&quot;0.1&quot;/>
                            <unit value=&quot;% w/w&quot;/>">0.1% w/w</span></div>
</div>
<div class="indent obsDefl2" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <qualifiedValue>
                    <appliesTo>
                        <text value=&quot;Solvent 2&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;2.0&quot;/>
                            <unit value=&quot;% w/w&quot;/>
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
                    <appliesTo>
                        <text value=&quot;Solvent 2&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;2.0&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>
                    </range>">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <appliesTo>
                        <text value=&quot;Solvent 2&quot;/>">Applies To: </span><span><span style="white-space:normal;">Solvent 2</span></span></div>
						Range:  to <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        <high>
                            <value value=&quot;2.0&quot;/>
                            <unit value=&quot;% w/w&quot;/>">2.0% w/w</span></div>
</div>
<div class="indent obsDefl2" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <component>
                    <!-- are expected to have a component that says what solvent this one is -->
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SOLV&quot;/>
                            <display value=&quot;Solvent&quot;/>
                        </coding>
                    </code>">
		Component
		<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SOLV&quot;/>
                            <display value=&quot;Solvent&quot;/>">Solvent<span class="greyOff"> [SOLV]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SOLV&quot;/>
                            <display value=&quot;Solvent&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;SOLV&quot;/>
                            <display value=&quot;Solvent&quot;/>">Solvent<span class="greyOff"> [SOLV]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div>
</div>
<div class="summaryHiddenOff"></div>
</div>
</div>
</div>
<div class="indent summaryUnit" ondblclick="summaryHandler(event)"><span title="
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
                        <definitionCanonical value=&quot;ObservationDefinition/Water&quot;/>"><span>Action</span><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
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
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: specificationProtocol fullUrl: urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763f)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observationWater fullUrl: urn:uuid:c2644a86-1684-286e-00e2-dcaf907a8970)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observationWater2 fullUrl: urn:uuid:cb5f6872-6eeb-727a-7c33-f2c438581a1c)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observationWater3 fullUrl: urn:uuid:7faaf980-7c10-7b9a-9572-1bacd485824e)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: Water)(fullUrl: urn:uuid:17b322fe-53ea-6c1f-521b-3b148ac05eb4)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Water&quot;/>
                <title value=&quot;Water Content&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;WWW&quot;/>
                        <display value=&quot;Water Content&quot;/>
                    </coding>
                    <text value=&quot;Water Content&quot;/>
                </code>
                <method>
                    <text value=&quot;USP Karl Fischer titration&quot;/>
                </method>
                <qualifiedValue>
                    <range>
                        <high>
                            <value value=&quot;1.0&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>
                    </range>
                </qualifiedValue>" id="ObservationDefinition-Water">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;WWW&quot;/>
                        <display value=&quot;Water Content&quot;/>">Water Content<span class="greyOff"> [WWW]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Water Content</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: Water</div>
<div class="debugOff"> fullUrl: urn:uuid:17b322fe-53ea-6c1f-521b-3b148ac05eb4</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Water Content&quot;>">Title: </span><span>Water Content</span></div>
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
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;WWW&quot;/>
                        <display value=&quot;Water Content&quot;/>
                    </coding>
                    <text value=&quot;Water Content&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;WWW&quot;/>
                        <display value=&quot;Water Content&quot;/>">Water Content<span class="greyOff"> [WWW]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span><span style="white-space:normal;"> - Text: Water Content</span></span></div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <method>
                    <text value=&quot;USP Karl Fischer titration&quot;/>">Method: </span><span><span style="white-space:normal;">USP Karl Fischer titration</span></span></div>
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
                        <high>
                            <value value=&quot;1.0&quot;/>
                            <unit value=&quot;% w/w&quot;/>
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
                        <high>
                            <value value=&quot;1.0&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>
                    </range>">
						Range:  to <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        <high>
                            <value value=&quot;1.0&quot;/>
                            <unit value=&quot;% w/w&quot;/>">1.0% w/w</span></div>
</div>
<div class="summaryHiddenOff"></div>
</div>
</div>
</div>
<div class="indent summaryUnit" ondblclick="summaryHandler(event)"><span title="
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
                        <definitionCanonical value=&quot;ObservationDefinition/Particles&quot;/>"><span>Action</span><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
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
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: specificationProtocol fullUrl: urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763f)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observationParticleSize-size1 fullUrl: urn:uuid:e4d2118a-8562-9eb1-2c14-4e145d2a95fc)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observationParticleSize-size1-2 fullUrl: urn:uuid:ec078717-9512-4db4-77c6-2c7e29d213a6)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observationParticleSize-size1-3 fullUrl: urn:uuid:05cfb495-2580-561a-688d-ce6ea24c8962)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observationParticleSize-size2 fullUrl: urn:uuid:d2a60ae5-96b4-3d13-38da-729c652347a3)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observationParticleSize-size2-2 fullUrl: urn:uuid:c3f51325-2f5f-194c-919b-2219ee1f5c45)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observationParticleSize-size2-3 fullUrl: urn:uuid:e9d89693-11b1-13ed-5cde-606fc1b8372c)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observationParticleSize-size3 fullUrl: urn:uuid:2659b000-96e2-1b8b-129b-0c00e1074b0f)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observationParticleSize-size3-2 fullUrl: urn:uuid:10b47328-36fa-343d-5699-5b32b30a6d33)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: observationParticleSize-size3-3 fullUrl: urn:uuid:e6780766-317a-382f-92d2-79825f506cc5)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: Particles)(fullUrl: urn:uuid:11fcfe6b-7498-132b-2def-efae51b302d4)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Particles&quot;/>
                <title value=&quot;Particle size distribution&quot;>
                    <extension url=&quot;http://accumulus.org/fhir/extension/testComment&quot;>
                        <valueString value=&quot;Particle Size Distribution was included in the release specification throughout clinical development, and no longer forms a part of the commercial release specification; See Section S.4.5 Justification of Specification for data and rationale.&quot;>
                            <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tableFootnote&quot;>
                                <valueString value=&quot;[4]&quot;/>
                            </extension>
                        </valueString>
                    </extension>
                </title>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>
                    </coding>
                </code>
                <method>
                    <text value=&quot;Laser diffraction&quot;/>
                </method>
                <qualifiedValue>
                    <appliesTo>
                        <!-- could be a code -->
                        <text value=&quot;D(v,0.9)&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;319&quot;/>
                            <unit value=&quot;µm&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;um&quot;/>
                        </high>
                    </range>
                </qualifiedValue>
                <qualifiedValue>
                    <appliesTo>
                        <!-- could be a code -->
                        <text value=&quot;D(v,0.5)&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;145&quot;/>
                            <unit value=&quot;µm&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;um&quot;/>
                        </high>
                    </range>
                </qualifiedValue>
                <qualifiedValue>
                    <appliesTo>
                        <!-- could be a code -->
                        <text value=&quot;D(v,0.1)&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;20&quot;/>
                            <unit value=&quot;µm&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;um&quot;/>
                        </high>
                    </range>
                </qualifiedValue>
                <component>
                    <!-- are expected to have a component that says what solvent this one is -->
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;PARTS&quot;/>
                            <display value=&quot;Particle size&quot;/>
                        </coding>
                    </code>
                </component>" id="ObservationDefinition-Particles">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>">Particle size distribution<span class="greyOff"> [PART]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: Particles</div>
<div class="debugOff"> fullUrl: urn:uuid:11fcfe6b-7498-132b-2def-efae51b302d4</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Particle size distribution&quot;>
                    <extension url=&quot;http://accumulus.org/fhir/extension/testComment&quot;>
                        <valueString value=&quot;Particle Size Distribution was included in the release specification throughout clinical development, and no longer forms a part of the commercial release specification; See Section S.4.5 Justification of Specification for data and rationale.&quot;>
                            <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tableFootnote&quot;>
                                <valueString value=&quot;[4]&quot;/>
                            </extension>
                        </valueString>
                    </extension>">Title: </span><span>Particle size distribution</span></div>
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
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>
                    </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;PART&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>">Particle size distribution<span class="greyOff"> [PART]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <method>
                    <text value=&quot;Laser diffraction&quot;/>">Method: </span><span><span style="white-space:normal;">Laser diffraction</span></span></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="indent obsDefl2" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <qualifiedValue>
                    <appliesTo>
                        <!-- could be a code -->
                        <text value=&quot;D(v,0.9)&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;319&quot;/>
                            <unit value=&quot;µm&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;um&quot;/>
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
                    <appliesTo>
                        <!-- could be a code -->
                        <text value=&quot;D(v,0.9)&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;319&quot;/>
                            <unit value=&quot;µm&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;um&quot;/>
                        </high>
                    </range>">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <appliesTo>
                        <!-- could be a code -->
                        <text value=&quot;D(v,0.9)&quot;/>">Applies To: </span><span><span style="white-space:normal;">D(v,0.9)</span></span></div>
						Range:  to <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        <high>
                            <value value=&quot;319&quot;/>
                            <unit value=&quot;µm&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;um&quot;/>">319 µm</span><span class="greyOff"> [um] (http://unitsofmeasure.org)</span></div>
</div>
<div class="indent obsDefl2" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <qualifiedValue>
                    <appliesTo>
                        <!-- could be a code -->
                        <text value=&quot;D(v,0.5)&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;145&quot;/>
                            <unit value=&quot;µm&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;um&quot;/>
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
                    <appliesTo>
                        <!-- could be a code -->
                        <text value=&quot;D(v,0.5)&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;145&quot;/>
                            <unit value=&quot;µm&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;um&quot;/>
                        </high>
                    </range>">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <appliesTo>
                        <!-- could be a code -->
                        <text value=&quot;D(v,0.5)&quot;/>">Applies To: </span><span><span style="white-space:normal;">D(v,0.5)</span></span></div>
						Range:  to <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        <high>
                            <value value=&quot;145&quot;/>
                            <unit value=&quot;µm&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;um&quot;/>">145 µm</span><span class="greyOff"> [um] (http://unitsofmeasure.org)</span></div>
</div>
<div class="indent obsDefl2" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <qualifiedValue>
                    <appliesTo>
                        <!-- could be a code -->
                        <text value=&quot;D(v,0.1)&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;20&quot;/>
                            <unit value=&quot;µm&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;um&quot;/>
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
                    <appliesTo>
                        <!-- could be a code -->
                        <text value=&quot;D(v,0.1)&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;20&quot;/>
                            <unit value=&quot;µm&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;um&quot;/>
                        </high>
                    </range>">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <appliesTo>
                        <!-- could be a code -->
                        <text value=&quot;D(v,0.1)&quot;/>">Applies To: </span><span><span style="white-space:normal;">D(v,0.1)</span></span></div>
						Range:  to <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        <high>
                            <value value=&quot;20&quot;/>
                            <unit value=&quot;µm&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;um&quot;/>">20 µm</span><span class="greyOff"> [um] (http://unitsofmeasure.org)</span></div>
</div>
<div class="indent obsDefl2" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <component>
                    <!-- are expected to have a component that says what solvent this one is -->
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;PARTS&quot;/>
                            <display value=&quot;Particle size&quot;/>
                        </coding>
                    </code>">
		Component
		<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;PARTS&quot;/>
                            <display value=&quot;Particle size&quot;/>">Particle size<span class="greyOff"> [PARTS]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;PARTS&quot;/>
                            <display value=&quot;Particle size&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://dummy.loinc.org&quot;/>
                            <code value=&quot;PARTS&quot;/>
                            <display value=&quot;Particle size&quot;/>">Particle size<span class="greyOff"> [PARTS]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div>
</div>
<div class="summaryHiddenOff"></div>
</div>
</div>
</div>
</div>
<div class="indent planl2 summaryHiddenOff"><span title="PlanDefinition (id: specificationProtocol)(fullUrl: urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763f)

<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <id value=&quot;specificationProtocol&quot;/>
                <title value=&quot;S.4.4 BATCH ANALYSIS&quot;/>
                <status value=&quot;active&quot;/>
                <subjectReference>
                    <reference value=&quot;SubstanceDefinition/substance1&quot;/>
                </subjectReference>
                <description value=&quot;Narrative description of analysis&quot;/>
                <!-- new &quot;tabular&quot; style -->
                <action>
                    <!-- this is then entire thing -->
                    <title value=&quot;Batch Specification for Drug Product&quot;/>
                    <code>
                        <text value=&quot;Overall set of actions&quot;/>
                    </code>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Description&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Identification&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Assay&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Impurities&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Mutagenic&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Enantiomeric&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Solvents&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Water&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/Particles&quot;/>
                    </action>
                </action>">Triggered</span>: Batch Analysis Report (<a href="#DiagnosticReport-batchAnalysisReport" title="click to see target - id=batchAnalysisReport">DiagnosticReport</a>)<span class="debugOff"> id: batchAnalysisReport</span></div>
</div>
</div>
<div class="org indent"><span class="bold">Subjects of Batch Analysis Report</span><br><br style="line-height:6px;"><div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (Observation/subject, id: observation-simple-dxpq-ex1 fullUrl: urn:uuid:81f552f9-8458-3cf4-8379-eea5417a9de2)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/subject, id: observationIdentification fullUrl: urn:uuid:55c89944-60d1-4eea-a2c3-6c53e3622bc5)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/subject, id: observationAssay fullUrl: urn:uuid:6deb4306-1193-24ae-a565-f73225652bdd)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-imp1 fullUrl: urn:uuid:02d9e6be-833c-1c6d-a64a-baa3935c959d)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-imp2 fullUrl: urn:uuid:da92c71f-a12a-1980-11a3-80e3d1852244)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-imp3 fullUrl: urn:uuid:732237a9-4b3b-27cc-99ca-6b913e622a29)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-imp-unspecified fullUrl: urn:uuid:9c98bd8a-7dda-2f01-0dbd-8c60b60e8572)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-imp-total fullUrl: urn:uuid:10b80cbd-45d3-9be1-63b9-29f04b47376c)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/subject, id: observationMutagenic fullUrl: urn:uuid:ff26533d-88a8-7f18-a275-42dc1373a388)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/subject, id: observationEnantiomericPurity fullUrl: urn:uuid:66fdac46-2a6b-a66f-891b-8dcf67cc46c7)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/subject, id: observationSolvents-sol1 fullUrl: urn:uuid:f8160692-a7a8-3fa6-9f35-e7df35f51ac0)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/subject, id: observationSolvents-sol2 fullUrl: urn:uuid:ba8a182e-8571-6cbd-047b-612735d599d2)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/subject, id: observationWater fullUrl: urn:uuid:c2644a86-1684-286e-00e2-dcaf907a8970)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/subject, id: observationParticleSize-size1 fullUrl: urn:uuid:e4d2118a-8562-9eb1-2c14-4e145d2a95fc)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/subject, id: observationParticleSize-size2 fullUrl: urn:uuid:d2a60ae5-96b4-3d13-38da-729c652347a3)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/subject, id: observationParticleSize-size3 fullUrl: urn:uuid:2659b000-96e2-1b8b-129b-0c00e1074b0f)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Substance (id: substance-dxpq-ex1)(fullUrl: urn:uuid:87ef899b-14dd-26b7-7416-7ec1d01b62a1)

<Bundle>
    <entry>
        <resource>
            <Substance>
                <id value=&quot;substance-dxpq-ex1&quot;/>
                <!-- was actual-batch-substance -->
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-batch-release-date-dxpq&quot;>
                        <valueDateTime value=&quot;2019-09-08&quot;/>
                        <!-- #173 -->
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-batch-retest-date-dxpq&quot;>
                        <valueDateTime value=&quot;2022-09-08&quot;/>
                        <!-- #221 -->
                    </extension>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2020-01&quot;/>
                        <!-- #157 -->
                    </extension>
                    <extension url=&quot;http://accumulus.org/fhir/extension/manufacturingProcess&quot;>
                        <valueReference>
                            <reference value=&quot;PlanDefinition/manufacturingProcess&quot;/>
                        </valueReference>
                    </extension>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;120&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-actual-yield-dxpq&quot;>
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
                                <code value=&quot;C133990&quot;/>
                                <display value=&quot;Commercial&quot;/>
                                <!-- could also be C185328 Stability Study? -->
                            </coding>
                            <text value=&quot;Production&quot;/>
                        </valueCodeableConcept>
                    </extension>
                    <extension url=&quot;assignedManufacturer&quot;>
                        <!-- #160 -->
                        <valueReference>
                            <reference value=&quot;Organization/substance-manufacturer&quot;/>
                        </valueReference>
                    </extension>
                </extension>
                <identifier>
                    <value value=&quot;CAT1&quot;/>
                    <!-- #155 -->
                </identifier>
                <instance value=&quot;true&quot;/>
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/substance1&quot;/>
                    </reference>
                </code>" id="Substance-substance-dxpq-ex1">Substance</span></a><span class="summaryShowsOff"><b> - CAT1</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substance.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substance.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substance.html#tt-uml">R6</a>]</span><div class="debugOff">id: substance-dxpq-ex1</div>
<div class="debugOff"> fullUrl: urn:uuid:87ef899b-14dd-26b7-7416-7ec1d01b62a1</div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <instance value=&quot;true&quot;>">Instance: </span><span><span>true</span></span></div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;CAT1&quot;/>
                    <!-- #155 -->">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;CAT1&quot;/>
                    <!-- #155 -->">CAT1</span></div>
<div>
<div class="indent sbddetails">
<div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/substance1&quot;/>">Definition: </span>Stelbatolol (<a href="#SubstanceDefinition-substance1" title="click to see target - id=substance1">SubstanceDefinition</a>)<span class="debugOff"> id: substance1</span></span></div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff">
<div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-batch-release-date-dxpq&quot;>
                        <valueDateTime value=&quot;2019-09-08&quot;/>
                        <!-- #173 -->
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-batch-retest-date-dxpq&quot;>
                        <valueDateTime value=&quot;2022-09-08&quot;/>
                        <!-- #221 -->
                    </extension>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2020-01&quot;/>
                        <!-- #157 -->
                    </extension>
                    <extension url=&quot;http://accumulus.org/fhir/extension/manufacturingProcess&quot;>
                        <valueReference>
                            <reference value=&quot;PlanDefinition/manufacturingProcess&quot;/>
                        </valueReference>
                    </extension>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;120&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-actual-yield-dxpq&quot;>
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
                                <code value=&quot;C133990&quot;/>
                                <display value=&quot;Commercial&quot;/>
                                <!-- could also be C185328 Stability Study? -->
                            </coding>
                            <text value=&quot;Production&quot;/>
                        </valueCodeableConcept>
                    </extension>
                    <extension url=&quot;assignedManufacturer&quot;>
                        <!-- #160 -->
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
                        <valueDateTime value=&quot;2020-01&quot;>">2020-01</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-batch-release-date-dxpq&quot;>
                        <valueDateTime value=&quot;2019-09-08&quot;>">Release Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-batch-release-date-dxpq&quot;>
                        <valueDateTime value=&quot;2019-09-08&quot;>">2019-09-08</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-batch-retest-date-dxpq&quot;>
                        <valueDateTime value=&quot;2022-09-08&quot;>">Retest Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-batch-retest-date-dxpq&quot;>
                        <valueDateTime value=&quot;2022-09-08&quot;>">2022-09-08</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;120&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->">Quantity: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;120&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->">120 kg</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-actual-yield-dxpq&quot;>
                        <valueQuantity>
                            <value value=&quot;4.8&quot;/>
                            <unit value=&quot;kg&quot;/>">Actual Yield: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-actual-yield-dxpq&quot;>
                        <valueQuantity>
                            <value value=&quot;4.8&quot;/>
                            <unit value=&quot;kg&quot;/>">4.8 kg</span></div>
<div><span title="
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
                                <code value=&quot;C133990&quot;/>
                                <display value=&quot;Commercial&quot;/>
                                <!-- could also be C185328 Stability Study? -->
                            </coding>
                            <text value=&quot;Production&quot;/>
                        </valueCodeableConcept>">Utilization: </span><span title="Comment: This has a value set defined in PQ/CMC but no code system" class="instanceComment">Commercial<span class="greyOff"> [C133990]</span><span class="greyOff"> (http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/pqcmc-batch-utilization-terminology)</span></span><span style="white-space:normal;"> - Text: Production</span></div>
<div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    ...
                    <extension url=&quot;assignedManufacturer&quot;>
                        <!-- #160 -->
                        <valueReference>
                            <reference value=&quot;Organization/substance-manufacturer&quot;/>
                        </valueReference>">Manufacturer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Substance/valueReference, id: substance-dxpq-ex1 fullUrl: urn:uuid:87ef899b-14dd-26b7-7416-7ec1d01b62a1)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Substance/valueReference, id: actual-batch-substance-2 fullUrl: urn:uuid:6412c5d4-1b7d-8405-85dc-75dbaa300ea4)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Substance/valueReference, id: actual-batch-substance-3 fullUrl: urn:uuid:ef17cff1-6586-a4a4-9168-2602140548d7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: substance1 fullUrl: urn:uuid:8dae93e0-048d-35a4-71ea-7c603184a130)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: substance-manufacturer)(fullUrl: urn:uuid:3d399cbc-244e-9b5f-838b-b7daa0489330)

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
                        <country value=&quot;USA&quot;>">USA</span></div></div></div></div></span><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    ...
                    <extension url=&quot;http://accumulus.org/fhir/extension/manufacturingProcess&quot;>
                        <valueReference>
                            <reference value=&quot;PlanDefinition/manufacturingProcess&quot;/>
                        </valueReference>">Manufacturing Process</span><div class="indent plan summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Substance/valueReference, id: substance-dxpq-ex1 fullUrl: urn:uuid:87ef899b-14dd-26b7-7416-7ec1d01b62a1)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="PlanDefinition (id: manufacturingProcess)(fullUrl: urn:uuid:b30a1024-37db-a1bc-05e5-cc4596d92975)

<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <id value=&quot;manufacturingProcess&quot;/>
                <!-- abridged version only -->
                <title value=&quot;Process 1.1&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/planType&quot;/>
                        <code value=&quot;1244566&quot;/>
                        <display value=&quot;Manufacturing Process&quot;/>
                    </coding>
                </type>
                <status value=&quot;active&quot;/>
                <subjectReference>
                    <reference value=&quot;SubstanceDefinition/substance1&quot;/>
                    <!-- #83 -->
                </subjectReference>" id="PlanDefinition-manufacturingProcess">Plan</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/plandefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/plandefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/plandefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: manufacturingProcess</div><div class="debugOff"> fullUrl: urn:uuid:b30a1024-37db-a1bc-05e5-cc4596d92975</div><div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <title value=&quot;Process 1.1&quot;>">Title: </span><span>Process 1.1</span></div><div><span title="
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
                        <display value=&quot;Manufacturing Process&quot;/>">Manufacturing Process<span class="greyOff"> [1244566]</span><span class="greyOff"> (http://accumulus.org/fhir/code/planType)</span></span></div><div class="summaryHiddenOff"><div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <status value=&quot;active&quot;>">Status: </span><span>active</span></div></div><div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <id value=&quot;manufacturingProcess&quot;/>
                <!-- abridged version only -->
                <title value=&quot;Process 1.1&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/planType&quot;/>
                        <code value=&quot;1244566&quot;/>
                        <display value=&quot;Manufacturing Process&quot;/>
                    </coding>
                </type>
                <status value=&quot;active&quot;/>
                <subjectReference>
                    <reference value=&quot;SubstanceDefinition/substance1&quot;/>
                    <!-- #83 -->
                </subjectReference>">Subject</span><div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (PlanDefinition/subjectReference, id: specificationProtocol fullUrl: urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763f)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Substance/code, id: substance-dxpq-ex1 fullUrl: urn:uuid:87ef899b-14dd-26b7-7416-7ec1d01b62a1)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Substance/code, id: actual-batch-substance-2 fullUrl: urn:uuid:6412c5d4-1b7d-8405-85dc-75dbaa300ea4)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Substance/code, id: actual-batch-substance-3 fullUrl: urn:uuid:ef17cff1-6586-a4a4-9168-2602140548d7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (PlanDefinition/subjectReference, id: manufacturingProcess fullUrl: urn:uuid:b30a1024-37db-a1bc-05e5-cc4596d92975)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: substance1)(fullUrl: urn:uuid:8dae93e0-048d-35a4-71ea-7c603184a130)

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
                </name>" id="SubstanceDefinition-substance1">Substance</span></a><span class="summaryShowsOff"><b> - Stelbatolol</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substancedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: substance1</div><div class="debugOff"> fullUrl: urn:uuid:8dae93e0-048d-35a4-71ea-7c603184a130</div><div class="summaryHiddenOff"><div class="indent sbddetails"><div><span title="
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
                    <reference value=&quot;Organization/substance-manufacturer&quot;/>">Manufacturer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Substance/valueReference, id: substance-dxpq-ex1 fullUrl: urn:uuid:87ef899b-14dd-26b7-7416-7ec1d01b62a1)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Substance/valueReference, id: actual-batch-substance-2 fullUrl: urn:uuid:6412c5d4-1b7d-8405-85dc-75dbaa300ea4)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Substance/valueReference, id: actual-batch-substance-3 fullUrl: urn:uuid:ef17cff1-6586-a4a4-9168-2602140548d7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: substance1 fullUrl: urn:uuid:8dae93e0-048d-35a4-71ea-7c603184a130)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: substance-manufacturer)(fullUrl: urn:uuid:3d399cbc-244e-9b5f-838b-b7daa0489330)

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
                        <country value=&quot;USA&quot;>">USA</span></div></div></div></div></div></div><div class="summaryHiddenOff"></div></div></span></div></span></div>
</div>
</div>
<div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (Observation/subject, id: observationDescription2 fullUrl: urn:uuid:50bf6f69-a3f5-678b-469b-c5df5cca4c86)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/subject, id: observationIdentification2 fullUrl: urn:uuid:adb51ab6-00a9-1078-69e5-d32c025a857c)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/subject, id: observationAssay2 fullUrl: urn:uuid:f6aabd2f-5902-57e7-6126-eccd9158a5b5)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-imp1-2 fullUrl: urn:uuid:d3e572b7-14fd-744b-4123-58741d75571e)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-imp2-2 fullUrl: urn:uuid:8bf75da1-9221-66fe-6725-c64cb45a57e6)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-imp3-2 fullUrl: urn:uuid:52afbeb4-4958-a275-a0ca-d70b2b5240ec)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-imp-unspecified-2 fullUrl: urn:uuid:97b16ff8-8e0f-915a-9d65-7fab108f40c2)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-imp-total-2 fullUrl: urn:uuid:84f015ac-9572-324f-8013-0b999cc95bbd)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/subject, id: observationMutagenic2 fullUrl: urn:uuid:c99666d2-7962-9a71-58f6-7b2e5aa662f5)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/subject, id: observationEnantiomericPurity2 fullUrl: urn:uuid:8306cfc5-158f-1a53-a683-048b226060d9)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/subject, id: observationSolvents-sol1-2 fullUrl: urn:uuid:a531aee9-4c21-06af-352c-a3615b5d957e)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/subject, id: observationSolvents-sol2-2 fullUrl: urn:uuid:0b5b94cc-7a1a-4ada-66c7-954ceb528d67)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/subject, id: observationWater2 fullUrl: urn:uuid:cb5f6872-6eeb-727a-7c33-f2c438581a1c)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/subject, id: observationParticleSize-size1-2 fullUrl: urn:uuid:ec078717-9512-4db4-77c6-2c7e29d213a6)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/subject, id: observationParticleSize-size2-2 fullUrl: urn:uuid:c3f51325-2f5f-194c-919b-2219ee1f5c45)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/subject, id: observationParticleSize-size3-2 fullUrl: urn:uuid:10b47328-36fa-343d-5699-5b32b30a6d33)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Substance (id: actual-batch-substance-2)(fullUrl: urn:uuid:6412c5d4-1b7d-8405-85dc-75dbaa300ea4)

<Bundle>
    <entry>
        <resource>
            <Substance>
                <id value=&quot;actual-batch-substance-2&quot;/>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-batch-release-date-dxpq&quot;>
                        <valueDateTime value=&quot;2019-09-08&quot;/>
                        <!-- #173 -->
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-batch-retest-date-dxpq&quot;>
                        <valueDateTime value=&quot;2022-09-08&quot;/>
                        <!-- #221 -->
                    </extension>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2020-02&quot;/>
                        <!-- #159 -->
                    </extension>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;120&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-actual-yield-dxpq&quot;>
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
                                <code value=&quot;C133990&quot;/>
                                <display value=&quot;Commercial&quot;/>
                                <!-- could also be C185328 Stability Study? -->
                            </coding>
                            <text value=&quot;Production&quot;/>
                        </valueCodeableConcept>
                    </extension>
                    <extension url=&quot;assignedManufacturer&quot;>
                        <!-- #160 -->
                        <valueReference>
                            <reference value=&quot;Organization/substance-manufacturer&quot;/>
                        </valueReference>
                    </extension>
                </extension>
                <identifier>
                    <value value=&quot;CAT2&quot;/>
                </identifier>
                <instance value=&quot;true&quot;/>
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/substance1&quot;/>
                    </reference>
                </code>" id="Substance-actual-batch-substance-2">Substance</span></a><span class="summaryShowsOff"><b> - CAT2</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substance.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substance.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substance.html#tt-uml">R6</a>]</span><div class="debugOff">id: actual-batch-substance-2</div>
<div class="debugOff"> fullUrl: urn:uuid:6412c5d4-1b7d-8405-85dc-75dbaa300ea4</div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <instance value=&quot;true&quot;>">Instance: </span><span><span>true</span></span></div>
<div class="summaryHiddenOff"><span title="
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
                    <value value=&quot;CAT2&quot;/>">CAT2</span></div>
<div>
<div class="indent sbddetails">
<div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/substance1&quot;/>">Definition: </span>Stelbatolol (<a href="#SubstanceDefinition-substance1" title="click to see target - id=substance1">SubstanceDefinition</a>)<span class="debugOff"> id: substance1</span></span></div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff">
<div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-batch-release-date-dxpq&quot;>
                        <valueDateTime value=&quot;2019-09-08&quot;/>
                        <!-- #173 -->
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-batch-retest-date-dxpq&quot;>
                        <valueDateTime value=&quot;2022-09-08&quot;/>
                        <!-- #221 -->
                    </extension>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2020-02&quot;/>
                        <!-- #159 -->
                    </extension>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;120&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-actual-yield-dxpq&quot;>
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
                                <code value=&quot;C133990&quot;/>
                                <display value=&quot;Commercial&quot;/>
                                <!-- could also be C185328 Stability Study? -->
                            </coding>
                            <text value=&quot;Production&quot;/>
                        </valueCodeableConcept>
                    </extension>
                    <extension url=&quot;assignedManufacturer&quot;>
                        <!-- #160 -->
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
                        <valueDateTime value=&quot;2020-02&quot;>">2020-02</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-batch-release-date-dxpq&quot;>
                        <valueDateTime value=&quot;2019-09-08&quot;>">Release Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-batch-release-date-dxpq&quot;>
                        <valueDateTime value=&quot;2019-09-08&quot;>">2019-09-08</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-batch-retest-date-dxpq&quot;>
                        <valueDateTime value=&quot;2022-09-08&quot;>">Retest Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-batch-retest-date-dxpq&quot;>
                        <valueDateTime value=&quot;2022-09-08&quot;>">2022-09-08</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;120&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->">Quantity: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;120&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->">120 kg</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-actual-yield-dxpq&quot;>
                        <valueQuantity>
                            <value value=&quot;4.8&quot;/>
                            <unit value=&quot;kg&quot;/>">Actual Yield: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-actual-yield-dxpq&quot;>
                        <valueQuantity>
                            <value value=&quot;4.8&quot;/>
                            <unit value=&quot;kg&quot;/>">4.8 kg</span></div>
<div><span title="
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
                                <code value=&quot;C133990&quot;/>
                                <display value=&quot;Commercial&quot;/>
                                <!-- could also be C185328 Stability Study? -->
                            </coding>
                            <text value=&quot;Production&quot;/>
                        </valueCodeableConcept>">Utilization: </span><span title="Comment: This has a value set defined in PQ/CMC but no code system" class="instanceComment">Commercial<span class="greyOff"> [C133990]</span><span class="greyOff"> (http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/pqcmc-batch-utilization-terminology)</span></span><span style="white-space:normal;"> - Text: Production</span></div>
<div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    ...
                    <extension url=&quot;assignedManufacturer&quot;>
                        <!-- #160 -->
                        <valueReference>
                            <reference value=&quot;Organization/substance-manufacturer&quot;/>
                        </valueReference>">Manufacturer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Substance/valueReference, id: substance-dxpq-ex1 fullUrl: urn:uuid:87ef899b-14dd-26b7-7416-7ec1d01b62a1)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Substance/valueReference, id: actual-batch-substance-2 fullUrl: urn:uuid:6412c5d4-1b7d-8405-85dc-75dbaa300ea4)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Substance/valueReference, id: actual-batch-substance-3 fullUrl: urn:uuid:ef17cff1-6586-a4a4-9168-2602140548d7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: substance1 fullUrl: urn:uuid:8dae93e0-048d-35a4-71ea-7c603184a130)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: substance-manufacturer)(fullUrl: urn:uuid:3d399cbc-244e-9b5f-838b-b7daa0489330)

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
                        <country value=&quot;USA&quot;>">USA</span></div></div></div></div></span></div>
</div>
</div>
<div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (Observation/subject, id: observationDescription3 fullUrl: urn:uuid:145fd3b7-3678-867f-4298-a6c781b86de3)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/subject, id: observationIdentification3 fullUrl: urn:uuid:916a0ae2-9c43-72f0-a22a-c5f8ce902125)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/subject, id: observationAssay3 fullUrl: urn:uuid:32f598e4-a0e0-98dc-41dd-0f8397f953ad)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-imp1-3 fullUrl: urn:uuid:fe6ca484-a755-9a0b-a074-b6ee0a907ff8)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-imp2-3 fullUrl: urn:uuid:31bfeff4-4a7d-3be5-878e-fb674d3d5487)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-imp3-3 fullUrl: urn:uuid:7fc395b1-59e4-78be-0512-cf92133c0fac)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-imp-unspecified-3 fullUrl: urn:uuid:0244eafe-3126-909b-7d8d-4253f45f525c)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/subject, id: observationDegradation-imp-total-3 fullUrl: urn:uuid:987daeaa-4c2a-72b7-780f-4a9403163a3e)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/subject, id: observationMutagenic3 fullUrl: urn:uuid:c18e21d3-7113-4d08-4ff3-0c9718596f64)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/subject, id: observationEnantiomericPurity3 fullUrl: urn:uuid:fc49ad55-07d1-997d-6695-bbff44746e75)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/subject, id: observationSolvents-sol1-3 fullUrl: urn:uuid:033ce81d-5f0d-7a3e-93d3-fc64e122a1fd)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/subject, id: observationSolvents-sol2-3 fullUrl: urn:uuid:6afaacee-11a6-58b2-47df-5f79722c66ac)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/subject, id: observationWater3 fullUrl: urn:uuid:7faaf980-7c10-7b9a-9572-1bacd485824e)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/subject, id: observationParticleSize-size1-3 fullUrl: urn:uuid:05cfb495-2580-561a-688d-ce6ea24c8962)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/subject, id: observationParticleSize-size2-3 fullUrl: urn:uuid:e9d89693-11b1-13ed-5cde-606fc1b8372c)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/subject, id: observationParticleSize-size3-3 fullUrl: urn:uuid:e6780766-317a-382f-92d2-79825f506cc5)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Substance (id: actual-batch-substance-3)(fullUrl: urn:uuid:ef17cff1-6586-a4a4-9168-2602140548d7)

<Bundle>
    <entry>
        <resource>
            <Substance>
                <id value=&quot;actual-batch-substance-3&quot;/>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-batch-release-date-dxpq&quot;>
                        <valueDateTime value=&quot;2019-09-08&quot;/>
                        <!-- #173 -->
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-batch-retest-date-dxpq&quot;>
                        <valueDateTime value=&quot;2022-09-08&quot;/>
                        <!-- #221 -->
                    </extension>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2020-03&quot;/>
                        <!-- #159 -->
                    </extension>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;120&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-actual-yield-dxpq&quot;>
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
                                <code value=&quot;C133990&quot;/>
                                <display value=&quot;Commercial&quot;/>
                                <!-- could also be C185328 Stability Study? -->
                            </coding>
                            <text value=&quot;Production&quot;/>
                        </valueCodeableConcept>
                    </extension>
                    <extension url=&quot;assignedManufacturer&quot;>
                        <!-- #160 -->
                        <valueReference>
                            <reference value=&quot;Organization/substance-manufacturer&quot;/>
                        </valueReference>
                    </extension>
                </extension>
                <identifier>
                    <value value=&quot;CAT3&quot;/>
                    <!-- #155 -->
                </identifier>
                <instance value=&quot;true&quot;/>
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/substance1&quot;/>
                    </reference>
                </code>" id="Substance-actual-batch-substance-3">Substance</span></a><span class="summaryShowsOff"><b> - CAT3</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substance.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substance.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substance.html#tt-uml">R6</a>]</span><div class="debugOff">id: actual-batch-substance-3</div>
<div class="debugOff"> fullUrl: urn:uuid:ef17cff1-6586-a4a4-9168-2602140548d7</div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <instance value=&quot;true&quot;>">Instance: </span><span><span>true</span></span></div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;CAT3&quot;/>
                    <!-- #155 -->">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <identifier>
                    <value value=&quot;CAT3&quot;/>
                    <!-- #155 -->">CAT3</span></div>
<div>
<div class="indent sbddetails">
<div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <code>
                    <reference>
                        <reference value=&quot;SubstanceDefinition/substance1&quot;/>">Definition: </span>Stelbatolol (<a href="#SubstanceDefinition-substance1" title="click to see target - id=substance1">SubstanceDefinition</a>)<span class="debugOff"> id: substance1</span></span></div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff">
<div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                ...
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-batch-release-date-dxpq&quot;>
                        <valueDateTime value=&quot;2019-09-08&quot;/>
                        <!-- #173 -->
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-batch-retest-date-dxpq&quot;>
                        <valueDateTime value=&quot;2022-09-08&quot;/>
                        <!-- #221 -->
                    </extension>
                    <extension url=&quot;manufacturingDate&quot;>
                        <valueDateTime value=&quot;2020-03&quot;/>
                        <!-- #159 -->
                    </extension>
                    <extension url=&quot;batchQuantity&quot;>
                        <!-- #157 -->
                        <valueQuantity>
                            <value value=&quot;120&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->
                        </valueQuantity>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-actual-yield-dxpq&quot;>
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
                                <code value=&quot;C133990&quot;/>
                                <display value=&quot;Commercial&quot;/>
                                <!-- could also be C185328 Stability Study? -->
                            </coding>
                            <text value=&quot;Production&quot;/>
                        </valueCodeableConcept>
                    </extension>
                    <extension url=&quot;assignedManufacturer&quot;>
                        <!-- #160 -->
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
                        <valueDateTime value=&quot;2020-03&quot;>">2020-03</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-batch-release-date-dxpq&quot;>
                        <valueDateTime value=&quot;2019-09-08&quot;>">Release Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-batch-release-date-dxpq&quot;>
                        <valueDateTime value=&quot;2019-09-08&quot;>">2019-09-08</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-batch-retest-date-dxpq&quot;>
                        <valueDateTime value=&quot;2022-09-08&quot;>">Retest Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-batch-retest-date-dxpq&quot;>
                        <valueDateTime value=&quot;2022-09-08&quot;>">2022-09-08</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;120&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->">Quantity: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;batchQuantity&quot;>
                        <valueQuantity>
                            <value value=&quot;120&quot;/>
                            <unit value=&quot;kg&quot;/>
                            <!-- #158 -->">120 kg</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-actual-yield-dxpq&quot;>
                        <valueQuantity>
                            <value value=&quot;4.8&quot;/>
                            <unit value=&quot;kg&quot;/>">Actual Yield: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    <extension url=&quot;http://hl7.org/fhir/uv/dx-pq/StructureDefinition/Extension-actual-yield-dxpq&quot;>
                        <valueQuantity>
                            <value value=&quot;4.8&quot;/>
                            <unit value=&quot;kg&quot;/>">4.8 kg</span></div>
<div><span title="
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
                                <code value=&quot;C133990&quot;/>
                                <display value=&quot;Commercial&quot;/>
                                <!-- could also be C185328 Stability Study? -->
                            </coding>
                            <text value=&quot;Production&quot;/>
                        </valueCodeableConcept>">Utilization: </span><span title="Comment: This has a value set defined in PQ/CMC but no code system" class="instanceComment">Commercial<span class="greyOff"> [C133990]</span><span class="greyOff"> (http://temp.hl7.org/fhir/us/pq-cmc/CodeSystem/pqcmc-batch-utilization-terminology)</span></span><span style="white-space:normal;"> - Text: Production</span></div>
<div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <Substance>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                    ...
                    <extension url=&quot;assignedManufacturer&quot;>
                        <!-- #160 -->
                        <valueReference>
                            <reference value=&quot;Organization/substance-manufacturer&quot;/>
                        </valueReference>">Manufacturer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Substance/valueReference, id: substance-dxpq-ex1 fullUrl: urn:uuid:87ef899b-14dd-26b7-7416-7ec1d01b62a1)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Substance/valueReference, id: actual-batch-substance-2 fullUrl: urn:uuid:6412c5d4-1b7d-8405-85dc-75dbaa300ea4)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Substance/valueReference, id: actual-batch-substance-3 fullUrl: urn:uuid:ef17cff1-6586-a4a4-9168-2602140548d7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: substance1 fullUrl: urn:uuid:8dae93e0-048d-35a4-71ea-7c603184a130)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: substance-manufacturer)(fullUrl: urn:uuid:3d399cbc-244e-9b5f-838b-b7daa0489330)

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
                        <country value=&quot;USA&quot;>">USA</span></div></div></div></div></span></div>
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
		SubstanceDef Centric Mode:true--></html>
