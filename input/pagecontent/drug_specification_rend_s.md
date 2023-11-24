The HTML rendering below shows a synthetic Quality data example for Common Technical Document (CTD) Module 3: Quality, section 3.2.S.4 Control of Drug Substance, subsection 3.2.S.4.1 Specification.
<html>
<body>
<div class="greyable">
<div class="controls remove"><span> </span><span class="button" onclick="toggleSummary(this)" title="summary view">summary on</span><span> </span><span class="button" onclick="toggleCodes(this)" title="details of code systems">show codes</span><span> </span><span class="button" onclick="toggleDebug(this)" title="extra technical info">show debug</span><span style="float:right; margin-right:3px;"><span class="buttonNoUnderlineHidden" onclick="toggleLowerControls(this)"><sup title="expand this"> v </sup></span><span class="buttonNoUnderline" onclick="toggleRemove(this)"><sup title="close this">x</sup></span></span><span> </span><span class="button" onclick="toggleRemoveTask(this)" title="details of tasks for changes">hide task</span><span> </span><span class="button" onclick="toggleRemoveProvenance(this)" title="details of provenance for changes">hide provenance</span><span> </span><span class="button" onclick="toggleRemoveTables(this)" title="tabular data">hide tables</span><br><span> </span><span class="button" onclick="toggleDarkMode(this)" title="darkened display">dark mode</span><span> </span><span class="button" onclick="toggleApplyGreyscale(this)" title="grey and white display">greyscale</span><span> </span><span class="button" onclick="toggleBlackAndWhite(this,false)" title="black and white display">b&amp;w</span><span> </span><span class="button" onclick="togglePlainMode(this);" title="plain text display">text only</span></div>
<div class="divBody">
<div style="position:relative" class="summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOffBorder">
<div class="bundleBorder">
<div class="debugOff">
<div class="bundle"><a class="plainLink"><span class="bold" title="Bundle (id: bundle-drug-substance-specification-pq-ex1)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-drug-substance-specification-pq 

<Bundle>
    <id value=&quot;bundle-drug-substance-specification-pq-ex1&quot;/>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-drug-substance-specification-pq&quot;/>
    </meta>
    <type value=&quot;collection&quot;/>
    <entry>
        <fullUrl value=&quot;urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a&quot;/>
        <resource>
            <PlanDefinition>
                <id value=&quot;specificationProtocol&quot;/>
                <url value=&quot;http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a&quot;/>
                <title value=&quot;SPECIFICATION FOR DRUG SUBSTANCE&quot;/>
                <status value=&quot;active&quot;/>
                <subjectReference>
                    <reference value=&quot;SubstanceDefinition/substance1&quot;/>
                </subjectReference>
                <description value=&quot;Narrative description of specifications&quot;/>
                <action>
                    <!-- this is then entire thing -->
                    <title value=&quot;Specification for Drug Substance&quot;/>
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
        <fullUrl value=&quot;urn:uuid:52176085-1f30-0c67-9ad7-523c486c82c9&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Description&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/52176085-1f30-0c67-9ad7-523c486c82c9&quot;/>
                <title value=&quot;Description&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;DESC&quot;/>
                        <display value=&quot;Description&quot;/>
                    </coding>
                    <text value=&quot;Description&quot;/>
                </code>
                <method>
                    <text value=&quot;Visual inspection&quot;/>
                </method>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;A white to brown powder&quot;/>
                    </extension>
                </qualifiedValue>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:b50d892c-8980-0774-39d4-d449732873a3&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Identification&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/b50d892c-8980-0774-39d4-d449732873a3&quot;/>
                <title value=&quot;Identification&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;IDT&quot;/>
                        <display value=&quot;Identification&quot;/>
                    </coding>
                    <text value=&quot;Identification&quot;/>
                </code>
                <method>
                    <text value=&quot;Identification by IR spectroscopy Identification by HPLC&quot;/>
                </method>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;Conforms with reference&quot;/>
                    </extension>
                </qualifiedValue>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:d460b561-110c-7eb6-5d69-788abcca391a&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Assay&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/d460b561-110c-7eb6-5d69-788abcca391a&quot;/>
                <title value=&quot;Assay&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;ASSAY&quot;/>
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
                            <code value=&quot;%&quot;/>
                            <!-- not sure this is a correct ucum code -->
                        </low>
                        <high>
                            <value value=&quot;102&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%&quot;/>
                            <!-- not sure this is a correct ucum code -->
                        </high>
                    </range>
                </qualifiedValue>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:006a9f7b-91ca-5601-38ef-a3dd26ad7121&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Impurities&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/006a9f7b-91ca-5601-38ef-a3dd26ad7121&quot;/>
                <title value=&quot;Drug Substance Related Organic impurities&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;DGP-s&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                </component>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:c59deb1b-835c-1be5-4e08-95dea3ae1a17&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Mutagenic&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/c59deb1b-835c-1be5-4e08-95dea3ae1a17&quot;/>
                <title value=&quot;Mutagenic impurities&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                </component>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:18e20bae-1a24-202d-11d7-5f354c785e4d&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Enantiomeric&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/18e20bae-1a24-202d-11d7-5f354c785e4d&quot;/>
                <title value=&quot;Enantiomeric purity&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;enantiomeric-purity&quot;/>
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
        <fullUrl value=&quot;urn:uuid:22544fa4-0fa2-1d5a-253d-a1fbe8fd61ce&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Solvents&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/22544fa4-0fa2-1d5a-253d-a1fbe8fd61ce&quot;/>
                <title value=&quot;Residual solvents&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                            <code value=&quot;SOLV&quot;/>
                            <display value=&quot;Solvent&quot;/>
                        </coding>
                    </code>
                </component>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:b4f736ff-1bbf-6923-4d5c-85d262285d7d&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Water&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/b4f736ff-1bbf-6923-4d5c-85d262285d7d&quot;/>
                <title value=&quot;Water Content&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;WaterContent&quot;/>
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
        <fullUrl value=&quot;urn:uuid:233865df-2a71-528d-756c-85f36bd6685f&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Particles&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/233865df-2a71-528d-756c-85f36bd6685f&quot;/>
                <title value=&quot;Particle size distribution&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;particle-size-distribution&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                            <code value=&quot;particle-size&quot;/>
                            <display value=&quot;Particle size&quot;/>
                        </coding>
                    </code>
                </component>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:03d68d1c-162c-8b6e-70f9-647b0ea97adb&quot;/>
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
        <fullUrl value=&quot;urn:uuid:062bf235-44e2-55c4-9213-bbe5e12d5620&quot;/>
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
    </entry>" id="Bundle-bundle-drug-substance-specification-pq-ex1">Bundle</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/bundle.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/bundle.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/bundle.html#tt-uml">R6</a>]</span><div class="debugOff">id: bundle-drug-substance-specification-pq-ex1</div>
<div class="debugOff"></div>
<div class="debugOff"><span title="
<Bundle>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-drug-substance-specification-pq&quot;>">Profile: </span><span>http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-drug-substance-specification-pq</span></div>
<div><span title="
<Bundle>
    ...
    <type value=&quot;collection&quot;>">Type: </span><span><span>collection</span></span></div>
</div>
</div>
<div>
<div class="indent plan summaryUnit" ondblclick="summaryHandler(event)"><a class="plainLink"><span class="bold" title="PlanDefinition (id: specificationProtocol)(fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a)

<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <id value=&quot;specificationProtocol&quot;/>
                <url value=&quot;http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a&quot;/>
                <title value=&quot;SPECIFICATION FOR DRUG SUBSTANCE&quot;/>
                <status value=&quot;active&quot;/>
                <subjectReference>
                    <reference value=&quot;SubstanceDefinition/substance1&quot;/>
                </subjectReference>
                <description value=&quot;Narrative description of specifications&quot;/>
                <action>
                    <!-- this is then entire thing -->
                    <title value=&quot;Specification for Drug Substance&quot;/>
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
<div class="debugOff"> fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a</div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <title value=&quot;SPECIFICATION FOR DRUG SUBSTANCE&quot;>">Title: </span><span>SPECIFICATION FOR DRUG SUBSTANCE</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <description value=&quot;Narrative description of specifications&quot;>">Description: </span><span>Narrative description of specifications</span></div>
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
                <url value=&quot;http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a&quot;/>
                <title value=&quot;SPECIFICATION FOR DRUG SUBSTANCE&quot;/>
                <status value=&quot;active&quot;/>
                <subjectReference>
                    <reference value=&quot;SubstanceDefinition/substance1&quot;/>
                </subjectReference>
                <description value=&quot;Narrative description of specifications&quot;/>
                <action>
                    <!-- this is then entire thing -->
                    <title value=&quot;Specification for Drug Substance&quot;/>
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
                </action>">Subject</span><div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (PlanDefinition/subjectReference, id: specificationProtocol fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265aurl (canonical): http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: substance1)(fullUrl: urn:uuid:03d68d1c-162c-8b6e-70f9-647b0ea97adb)

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
                </name>" id="SubstanceDefinition-substance1">Substance</span></a><span class="summaryShowsOff"><b> - Stelbatolol</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substancedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: substance1</div><div class="debugOff"> fullUrl: urn:uuid:03d68d1c-162c-8b6e-70f9-647b0ea97adb</div><div class="summaryHiddenOff"><div class="indent sbddetails"><div><span title="
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
                    <reference value=&quot;Organization/substance-manufacturer&quot;/>">Manufacturer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: substance1 fullUrl: urn:uuid:03d68d1c-162c-8b6e-70f9-647b0ea97adb)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: substance-manufacturer)(fullUrl: urn:uuid:062bf235-44e2-55c4-9213-bbe5e12d5620)

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
                </contact>" id="Organization-substance-manufacturer">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/organization.html#tt-uml">R6</a>]</span><div class="debugOff">id: substance-manufacturer</div><div class="debugOff"> fullUrl: urn:uuid:062bf235-44e2-55c4-9213-bbe5e12d5620</div><span class="summaryShowsOff"> - AAA Molybdenum Products, Inc.</span><div class="summaryHiddenOff"><div><span title="
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
                    <title value=&quot;Specification for Drug Substance&quot;>">Action: </span><span>Specification for Drug Substance</span></div><br style="line-height:6px;"><br style="line-height:6px;"><table class="rounded-corners white" id="tabularModeTable" style="width:70%">
<tr>
<th rowspan="1">Test Procedure</th><th colspan="0">Acceptance Criteria</th>
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
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
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
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
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
                            <code value=&quot;%&quot;/>
                            <!-- not sure this is a correct ucum code -->
                        </low>
                        <high>
                            <value value=&quot;102&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%&quot;/>
                            <!-- not sure this is a correct ucum code -->
                        </high>">98 % w/w - 102 % w/w</span></td>
<td class="centred">Assay by LC</td>
</tr>
<tr>
<td colspan="3">Drug Substance Related Organic impurities</td>
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
<td rowspan="4" class="centred">Organic impurities by LC</td>
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
<td colspan="3">Residual solvents</td>
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
<td colspan="3">Particle size distribution</td>
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
</table>
</div><br style="line-height:6px;"></div>
<div class="indent summaryUnit planl2 initialSummary" ondblclick="summaryHandler(event)"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <action>
                    <!-- this is then entire thing -->
                    <title value=&quot;Specification for Drug Substance&quot;/>
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
                    </action>"><a id="urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a"><span>Action</span></a><span class="summaryShowsOff"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <title value=&quot;Specification for Drug Substance&quot;>"> - Specification for Drug Substance</span> - <span style="white-space:normal;">Overall set of actions</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <title value=&quot;Specification for Drug Substance&quot;>">Title: </span><span>Specification for Drug Substance</span></div>
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
                        <definitionCanonical value=&quot;ObservationDefinition/Description&quot;/>"><a id="urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a"><span>Action</span></a><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
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
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: specificationProtocol fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265aurl (canonical): http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: Description)(fullUrl: urn:uuid:52176085-1f30-0c67-9ad7-523c486c82c9)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Description&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/52176085-1f30-0c67-9ad7-523c486c82c9&quot;/>
                <title value=&quot;Description&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;DESC&quot;/>
                        <display value=&quot;Description&quot;/>
                    </coding>
                    <text value=&quot;Description&quot;/>
                </code>
                <method>
                    <text value=&quot;Visual inspection&quot;/>
                </method>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;A white to brown powder&quot;/>
                    </extension>
                </qualifiedValue>" id="ObservationDefinition-Description">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;DESC&quot;/>
                        <display value=&quot;Description&quot;/>">Description<span class="greyOff"> [DESC]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: Description</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: Description</div>
<div class="debugOff"> fullUrl: urn:uuid:52176085-1f30-0c67-9ad7-523c486c82c9</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/52176085-1f30-0c67-9ad7-523c486c82c9</div>
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
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;DESC&quot;/>
                        <display value=&quot;Description&quot;/>
                    </coding>
                    <text value=&quot;Description&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;DESC&quot;/>
                        <display value=&quot;Description&quot;/>">Description<span class="greyOff"> [DESC]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: Description</span></span></div>
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
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;A white to brown powder&quot;/>
                    </extension>">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;A white to brown powder&quot;/>">Text: </span><span>A white to brown powder</span></div>
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
                        <definitionCanonical value=&quot;ObservationDefinition/Identification&quot;/>"><a id="urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a"><span>Action</span></a><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
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
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: specificationProtocol fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265aurl (canonical): http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: Identification)(fullUrl: urn:uuid:b50d892c-8980-0774-39d4-d449732873a3)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Identification&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/b50d892c-8980-0774-39d4-d449732873a3&quot;/>
                <title value=&quot;Identification&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;IDT&quot;/>
                        <display value=&quot;Identification&quot;/>
                    </coding>
                    <text value=&quot;Identification&quot;/>
                </code>
                <method>
                    <text value=&quot;Identification by IR spectroscopy Identification by HPLC&quot;/>
                </method>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;Conforms with reference&quot;/>
                    </extension>
                </qualifiedValue>" id="ObservationDefinition-Identification">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;IDT&quot;/>
                        <display value=&quot;Identification&quot;/>">Identification<span class="greyOff"> [IDT]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: Identification</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: Identification</div>
<div class="debugOff"> fullUrl: urn:uuid:b50d892c-8980-0774-39d4-d449732873a3</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/b50d892c-8980-0774-39d4-d449732873a3</div>
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
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;IDT&quot;/>
                        <display value=&quot;Identification&quot;/>
                    </coding>
                    <text value=&quot;Identification&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;IDT&quot;/>
                        <display value=&quot;Identification&quot;/>">Identification<span class="greyOff"> [IDT]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: Identification</span></span></div>
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
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
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
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;Conforms with reference&quot;/>
                    </extension>">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;Conforms with reference&quot;/>">Text: </span><span>Conforms with reference</span></div>
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
                        <definitionCanonical value=&quot;ObservationDefinition/Assay&quot;/>"><a id="urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a"><span>Action</span></a><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
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
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: specificationProtocol fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265aurl (canonical): http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: Assay)(fullUrl: urn:uuid:d460b561-110c-7eb6-5d69-788abcca391a)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Assay&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/d460b561-110c-7eb6-5d69-788abcca391a&quot;/>
                <title value=&quot;Assay&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;ASSAY&quot;/>
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
                            <code value=&quot;%&quot;/>
                            <!-- not sure this is a correct ucum code -->
                        </low>
                        <high>
                            <value value=&quot;102&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%&quot;/>
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
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;ASSAY&quot;/>
                        <display value=&quot;Assay&quot;/>">Assay<span class="greyOff"> [ASSAY]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: Assay</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: Assay</div>
<div class="debugOff"> fullUrl: urn:uuid:d460b561-110c-7eb6-5d69-788abcca391a</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/d460b561-110c-7eb6-5d69-788abcca391a</div>
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
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;ASSAY&quot;/>
                        <display value=&quot;Assay&quot;/>
                    </coding>
                    <text value=&quot;Assay&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;ASSAY&quot;/>
                        <display value=&quot;Assay&quot;/>">Assay<span class="greyOff"> [ASSAY]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: Assay</span></span></div>
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
                            <code value=&quot;%&quot;/>
                            <!-- not sure this is a correct ucum code -->
                        </low>
                        <high>
                            <value value=&quot;102&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%&quot;/>
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
                            <code value=&quot;%&quot;/>
                            <!-- not sure this is a correct ucum code -->
                        </low>
                        <high>
                            <value value=&quot;102&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%&quot;/>
                            <!-- not sure this is a correct ucum code -->
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
                            <value value=&quot;98&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%&quot;/>
                            <!-- not sure this is a correct ucum code -->
                        </low>
                        <high>
                            <value value=&quot;102&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                            <system value=&quot;http://unitsofmeasure.org&quot;/>
                            <code value=&quot;%&quot;/>
                            <!-- not sure this is a correct ucum code -->
                        </high>">Range: </span>from <span title="
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
                            <code value=&quot;%&quot;/>
                            <!-- not sure this is a correct ucum code -->">98% w/w</span><span class="greyOff"> [%] (http://unitsofmeasure.org)</span> to <span title="
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
                            <code value=&quot;%&quot;/>
                            <!-- not sure this is a correct ucum code -->">102% w/w</span><span class="greyOff"> [%] (http://unitsofmeasure.org)</span></div>
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
                        <definitionCanonical value=&quot;ObservationDefinition/Impurities&quot;/>"><a id="urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a"><span>Action</span></a><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
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
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: specificationProtocol fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265aurl (canonical): http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: Impurities)(fullUrl: urn:uuid:006a9f7b-91ca-5601-38ef-a3dd26ad7121)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Impurities&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/006a9f7b-91ca-5601-38ef-a3dd26ad7121&quot;/>
                <title value=&quot;Drug Substance Related Organic impurities&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;DGP-s&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
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
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;DGP-s&quot;/>
                        <display value=&quot;Drug Substance Related Organic impurities&quot;/>">Drug Substance Related Organic impurities<span class="greyOff"> [DGP-s]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: Impurities</div>
<div class="debugOff"> fullUrl: urn:uuid:006a9f7b-91ca-5601-38ef-a3dd26ad7121</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/006a9f7b-91ca-5601-38ef-a3dd26ad7121</div>
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
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;DGP-s&quot;/>
                        <display value=&quot;Drug Substance Related Organic impurities&quot;/>
                    </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;DGP-s&quot;/>
                        <display value=&quot;Drug Substance Related Organic impurities&quot;/>">Drug Substance Related Organic impurities<span class="greyOff"> [DGP-s]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span></span></div>
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
<div><span title="
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
                        </high>">Range: </span> to <span title="
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
<div><span title="
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
                        </high>">Range: </span> to <span title="
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
<div><span title="
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
                        </high>">Range: </span> to <span title="
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
<div><span title="
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
                        </high>">Range: </span> to <span title="
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span></span></div>
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
                        <definitionCanonical value=&quot;ObservationDefinition/Mutagenic&quot;/>"><a id="urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a"><span>Action</span></a><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
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
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: specificationProtocol fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265aurl (canonical): http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: Mutagenic)(fullUrl: urn:uuid:c59deb1b-835c-1be5-4e08-95dea3ae1a17)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Mutagenic&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/c59deb1b-835c-1be5-4e08-95dea3ae1a17&quot;/>
                <title value=&quot;Mutagenic impurities&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
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
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;MUT&quot;/>
                        <display value=&quot;Mutagenic impurities&quot;/>">Mutagenic impurities<span class="greyOff"> [MUT]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: Mutagenic</div>
<div class="debugOff"> fullUrl: urn:uuid:c59deb1b-835c-1be5-4e08-95dea3ae1a17</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/c59deb1b-835c-1be5-4e08-95dea3ae1a17</div>
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
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;MUT&quot;/>
                        <display value=&quot;Mutagenic impurities&quot;/>
                    </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;MUT&quot;/>
                        <display value=&quot;Mutagenic impurities&quot;/>">Mutagenic impurities<span class="greyOff"> [MUT]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span></span></div>
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
<div><span title="
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
                        </high>">Range: </span> to <span title="
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span></span></div>
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
                        <definitionCanonical value=&quot;ObservationDefinition/Enantiomeric&quot;/>"><a id="urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a"><span>Action</span></a><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
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
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: specificationProtocol fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265aurl (canonical): http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: Enantiomeric)(fullUrl: urn:uuid:18e20bae-1a24-202d-11d7-5f354c785e4d)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Enantiomeric&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/18e20bae-1a24-202d-11d7-5f354c785e4d&quot;/>
                <title value=&quot;Enantiomeric purity&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;enantiomeric-purity&quot;/>
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
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;enantiomeric-purity&quot;/>
                        <display value=&quot;Enantiomeric purity&quot;/>">Enantiomeric purity<span class="greyOff"> [enantiomeric-purity]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: Enantiomeric purity</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: Enantiomeric</div>
<div class="debugOff"> fullUrl: urn:uuid:18e20bae-1a24-202d-11d7-5f354c785e4d</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/18e20bae-1a24-202d-11d7-5f354c785e4d</div>
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
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;enantiomeric-purity&quot;/>
                        <display value=&quot;Enantiomeric purity&quot;/>
                    </coding>
                    <text value=&quot;Enantiomeric purity&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;enantiomeric-purity&quot;/>
                        <display value=&quot;Enantiomeric purity&quot;/>">Enantiomeric purity<span class="greyOff"> [enantiomeric-purity]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: Enantiomeric purity</span></span></div>
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
<div><span title="
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
                        </low>">Range: </span>from <span title="
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
                        <definitionCanonical value=&quot;ObservationDefinition/Solvents&quot;/>"><a id="urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a"><span>Action</span></a><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
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
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: specificationProtocol fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265aurl (canonical): http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: Solvents)(fullUrl: urn:uuid:22544fa4-0fa2-1d5a-253d-a1fbe8fd61ce)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Solvents&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/22544fa4-0fa2-1d5a-253d-a1fbe8fd61ce&quot;/>
                <title value=&quot;Residual solvents&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
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
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;SOL&quot;/>
                        <display value=&quot;Residual solvents&quot;/>">Residual solvents<span class="greyOff"> [SOL]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: Solvents</div>
<div class="debugOff"> fullUrl: urn:uuid:22544fa4-0fa2-1d5a-253d-a1fbe8fd61ce</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/22544fa4-0fa2-1d5a-253d-a1fbe8fd61ce</div>
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
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;SOL&quot;/>
                        <display value=&quot;Residual solvents&quot;/>
                    </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;SOL&quot;/>
                        <display value=&quot;Residual solvents&quot;/>">Residual solvents<span class="greyOff"> [SOL]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span></span></div>
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
<div><span title="
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
                        </high>">Range: </span> to <span title="
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
<div><span title="
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
                        </high>">Range: </span> to <span title="
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                            <code value=&quot;SOLV&quot;/>
                            <display value=&quot;Solvent&quot;/>">Solvent<span class="greyOff"> [SOLV]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                            <code value=&quot;SOLV&quot;/>
                            <display value=&quot;Solvent&quot;/>">Solvent<span class="greyOff"> [SOLV]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span></span></div>
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
                        <definitionCanonical value=&quot;ObservationDefinition/Water&quot;/>"><a id="urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a"><span>Action</span></a><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
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
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: specificationProtocol fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265aurl (canonical): http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: Water)(fullUrl: urn:uuid:b4f736ff-1bbf-6923-4d5c-85d262285d7d)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Water&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/b4f736ff-1bbf-6923-4d5c-85d262285d7d&quot;/>
                <title value=&quot;Water Content&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;WaterContent&quot;/>
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
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;WaterContent&quot;/>
                        <display value=&quot;Water Content&quot;/>">Water Content<span class="greyOff"> [WaterContent]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: Water Content</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: Water</div>
<div class="debugOff"> fullUrl: urn:uuid:b4f736ff-1bbf-6923-4d5c-85d262285d7d</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/b4f736ff-1bbf-6923-4d5c-85d262285d7d</div>
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
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;WaterContent&quot;/>
                        <display value=&quot;Water Content&quot;/>
                    </coding>
                    <text value=&quot;Water Content&quot;/>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;WaterContent&quot;/>
                        <display value=&quot;Water Content&quot;/>">Water Content<span class="greyOff"> [WaterContent]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span><span style="white-space:normal;"> - Text: Water Content</span></span></div>
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
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        <high>
                            <value value=&quot;1.0&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>">Range: </span> to <span title="
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
                        <definitionCanonical value=&quot;ObservationDefinition/Particles&quot;/>"><a id="urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a"><span>Action</span></a><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
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
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: specificationProtocol fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265aurl (canonical): http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: Particles)(fullUrl: urn:uuid:233865df-2a71-528d-756c-85f36bd6685f)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Particles&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/233865df-2a71-528d-756c-85f36bd6685f&quot;/>
                <title value=&quot;Particle size distribution&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;particle-size-distribution&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                            <code value=&quot;particle-size&quot;/>
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
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;particle-size-distribution&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>">Particle size distribution<span class="greyOff"> [particle-size-distribution]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: Particles</div>
<div class="debugOff"> fullUrl: urn:uuid:233865df-2a71-528d-756c-85f36bd6685f</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/233865df-2a71-528d-756c-85f36bd6685f</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Particle size distribution&quot;>">Title: </span><span>Particle size distribution</span></div>
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
                        <code value=&quot;particle-size-distribution&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>
                    </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                        <code value=&quot;particle-size-distribution&quot;/>
                        <display value=&quot;Particle size distribution&quot;/>">Particle size distribution<span class="greyOff"> [particle-size-distribution]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span></span></div>
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
<div><span title="
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
                        </high>">Range: </span> to <span title="
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
<div><span title="
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
                        </high>">Range: </span> to <span title="
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
<div><span title="
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
                        </high>">Range: </span> to <span title="
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                            <code value=&quot;particle-size&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                            <code value=&quot;particle-size&quot;/>
                            <display value=&quot;Particle size&quot;/>">Particle size<span class="greyOff"> [particle-size]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                            <code value=&quot;particle-size&quot;/>
                            <display value=&quot;Particle size&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                            <code value=&quot;particle-size&quot;/>
                            <display value=&quot;Particle size&quot;/>">Particle size<span class="greyOff"> [particle-size]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span></span></div>
</div>
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
