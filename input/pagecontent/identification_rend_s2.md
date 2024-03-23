The HTML rendering below shows a synthetic Quality data example for Common Technical Document (CTD) Module 3: Quality, section 3.2.S.1 General Information, subsection 3.2.S.1.3 General Properties.
<html>
<body>
<div class="divBody">
<p>
						This is the same data as in the example files here in <a href="Bundle-bundle-drug-substance-general-properties-pq-ex1.xml.html">xml</a> and in <a href="Bundle-bundle-drug-substance-general-properties-pq-ex1.json.html">json</a>, presented for easier viewing.
						Hovering on words below will show the corresponding sections of the underlying data.
					</p>
</div>
<div class="greyable">
<div class="controls remove"><span> </span><span class="button" onclick="toggleSummary(this)" title="summary view">summary on</span><span> </span><span class="button" onclick="toggleCodes(this)" title="details of code systems">show codes</span><span> </span><span class="button" onclick="toggleDebug(this)" title="extra technical info">show debug</span><span style="float:right; margin-right:3px;"><span class="buttonNoUnderlineHidden" onclick="toggleLowerControls(this)"><sup title="expand this"> v </sup></span><span class="buttonNoUnderline" onclick="toggleRemove(this)"><sup title="close this">x</sup></span></span><span> </span><span class="button" onclick="toggleRemoveTask(this)" title="details of tasks for changes">hide task</span><span> </span><span class="button" onclick="toggleRemoveProvenance(this)" title="details of provenance for changes">hide provenance</span><span> </span><span class="button" onclick="toggleRemoveTables(this)" title="tabular data">hide tables</span><br><span> </span><span class="button" onclick="toggleDarkMode(this)" title="darkened display">dark mode</span><span> </span><span class="button" onclick="toggleApplyGreyscale(this)" title="grey and white display">greyscale</span><span> </span><span class="button" onclick="toggleBlackAndWhite(this,false)" title="black and white display">b&amp;w</span><span> </span><span class="button" onclick="togglePlainMode(this);" title="plain text display">text only</span></div>
<div class="divBody">
<div style="position:relative" class="summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOffBorder">
<div class="bundleBorder">
<div class="debugOff">
<div class="bundle"><a class="plainLink"><span class="bold" title="Bundle (id: bundle-drug-substance-general-properties-pq-ex1)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-drug-substance-characterization-pq 

<Bundle>
    <id value=&quot;bundle-drug-substance-general-properties-pq-ex1&quot;/>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-drug-substance-characterization-pq&quot;/>
    </meta>
    <type value=&quot;collection&quot;/>
    <entry>
        <fullUrl value=&quot;urn:uuid:57a9af63-315d-1585-a261-0e337b289390&quot;/>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;substancedefinition-substance-drug-pq-ex1&quot;/>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;appearance&quot;/>
                            <display value=&quot;Appearance&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;white to slightly yellow powder&quot;/>
                    </valueCodeableConcept>
                </property>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-water-pheur&quot;/>
                            <display value=&quot;Solubility purified water (PhEur)&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-solubility-local-pq&quot;/>
                            <code value=&quot;sol-free&quot;/>
                            <display value=&quot;Freely soluble&quot;/>
                        </coding>
                        <text value=&quot;freely soluble&quot;/>
                    </valueCodeableConcept>
                </property>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-range-pq&quot;>
                        <valueRange>
                            <low>
                                <value value=&quot;23&quot;/>
                                <unit value=&quot;mg/mL&quot;/>
                            </low>
                            <high>
                                <value value=&quot;27&quot;/>
                                <unit value=&quot;mg/mL&quot;/>
                            </high>
                        </valueRange>
                    </extension>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-water-pheur&quot;/>
                            <display value=&quot;Solubility purified water (PhEur)&quot;/>
                        </coding>
                    </type>
                </property>
                <!-- solubility acetone -->
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-acetone-pheur&quot;/>
                            <display value=&quot;Solubility Acetone (PhEur)&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-solubility-local-pq&quot;/>
                            <code value=&quot;sol-slight&quot;/>
                            <display value=&quot;Slightly soluble&quot;/>
                        </coding>
                        <text value=&quot;slightly soluble&quot;/>
                    </valueCodeableConcept>
                </property>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-range-pq&quot;>
                        <valueRange>
                            <low>
                                <value value=&quot;2&quot;/>
                                <unit value=&quot;mg/mL&quot;/>
                            </low>
                            <high>
                                <value value=&quot;3&quot;/>
                                <unit value=&quot;mg/mL&quot;/>
                            </high>
                        </valueRange>
                    </extension>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-acetone-pheur&quot;/>
                            <display value=&quot;Solubility acetone (PhEur)&quot;/>
                        </coding>
                    </type>
                </property>
                <!-- solubility ethanol -->
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-ethanol-pheur&quot;/>
                            <display value=&quot;Solubility Ethanol (PhEur)&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-solubility-local-pq&quot;/>
                            <code value=&quot;sol-soluble&quot;/>
                            <display value=&quot;Soluble&quot;/>
                        </coding>
                        <text value=&quot;soluble&quot;/>
                    </valueCodeableConcept>
                </property>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-range-pq&quot;>
                        <valueRange>
                            <low>
                                <value value=&quot;15&quot;/>
                                <unit value=&quot;mg/mL&quot;/>
                            </low>
                            <high>
                                <value value=&quot;17&quot;/>
                                <unit value=&quot;mg/mL&quot;/>
                            </high>
                        </valueRange>
                    </extension>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-ethanol-pheur&quot;/>
                            <display value=&quot;Solubility ethanol (PhEur)&quot;/>
                        </coding>
                    </type>
                </property>
                <!-- purified water -->
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-aq-water-2h-approx&quot;/>
                            <display value=&quot;Solubility at saturation in Purifed Water after 2 hours (approx)&quot;/>
                        </coding>
                    </type>
                    <valueQuantity>
                        <value value=&quot;21&quot;/>
                        <unit value=&quot;mg/mL&quot;/>
                    </valueQuantity>
                </property>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-aq-glucose-2h-approx&quot;/>
                            <display value=&quot;Solubility at saturation in Glucose (5%) after 2 hours (approx)&quot;/>
                        </coding>
                        <text value=&quot;Glucose solution (5%)&quot;/>
                    </type>
                    <valueQuantity>
                        <value value=&quot;2.5&quot;/>
                        <unit value=&quot;mg/mL&quot;/>
                    </valueQuantity>
                </property>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-parameter-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCoding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                                <code value=&quot;pH&quot;/>
                                <display value=&quot;pH&quot;/>
                            </valueCoding>
                        </extension>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;1.2&quot;/>
                            </valueQuantity>
                        </extension>
                    </extension>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-usp-ph&quot;/>
                            <display value=&quot;Solubility as a function of pH in USP buffers&quot;/>
                        </coding>
                    </type>
                    <valueQuantity>
                        <value value=&quot;22&quot;/>
                        <unit value=&quot;mg/mL&quot;/>
                    </valueQuantity>
                </property>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-parameter-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCoding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                                <code value=&quot;pH&quot;/>
                                <display value=&quot;pH&quot;/>
                            </valueCoding>
                        </extension>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;4.5&quot;/>
                            </valueQuantity>
                        </extension>
                    </extension>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-usp-ph&quot;/>
                            <display value=&quot;Solubility as a function of pH in USP buffers&quot;/>
                        </coding>
                    </type>
                    <valueQuantity>
                        <value value=&quot;29&quot;/>
                        <unit value=&quot;mg/mL&quot;/>
                    </valueQuantity>
                </property>
                <!-- pH -->
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-range-pq&quot;>
                        <valueRange>
                            <low>
                                <value value=&quot;6.7&quot;/>
                            </low>
                            <high>
                                <value value=&quot;6.8&quot;/>
                            </high>
                        </valueRange>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-parameter-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCoding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                                <code value=&quot;concentration&quot;/>
                                <display value=&quot;Concentration&quot;/>
                            </valueCoding>
                        </extension>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;10&quot;/>
                                <unit value=&quot;mg/ml&quot;/>
                            </valueQuantity>
                        </extension>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-parameter-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCoding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                                <code value=&quot;temperature&quot;/>
                                <display value=&quot;Temperature&quot;/>
                            </valueCoding>
                        </extension>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;25&quot;/>
                                <unit value=&quot;°C&quot;/>
                            </valueQuantity>
                        </extension>
                    </extension>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;ph-aq&quot;/>
                            <display value=&quot;pH in aqueous solution&quot;/>
                        </coding>
                    </type>
                </property>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;hygroscopy&quot;/>
                            <display value=&quot;Hygroscopy&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;hygroscopy-hygroscopic&quot;/>
                            <display value=&quot;Hygroscopic&quot;/>
                        </coding>
                        <text value=&quot;Hygroscopic&quot;/>
                    </valueCodeableConcept>
                </property>
                <structure>
                    <stereochemistry>
                        <text value=&quot;One asymmetric center and one axis of chirality; (S,M) - enantiomer&quot;/>
                    </stereochemistry>
                </structure>
                <name>
                    <name value=&quot;Stelbatolol&quot;/>
                </name>
            </SubstanceDefinition>
        </resource>
    </entry>" id="Bundle-bundle-drug-substance-general-properties-pq-ex1">Bundle</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/bundle.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/bundle.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/bundle.html#tt-uml">R6</a>]</span><div class="debugOff">id: bundle-drug-substance-general-properties-pq-ex1</div>
<div class="debugOff"></div>
<div class="debugOff"><span title="
<Bundle>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-drug-substance-characterization-pq&quot;>">Profile: </span><span>http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-drug-substance-characterization-pq</span></div>
<div><span title="
<Bundle>
    ...
    <type value=&quot;collection&quot;>">Type: </span><span><span>collection</span></span></div>
</div>
</div>
<div>
<div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)"><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: substancedefinition-substance-drug-pq-ex1)(fullUrl: urn:uuid:57a9af63-315d-1585-a261-0e337b289390)

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;substancedefinition-substance-drug-pq-ex1&quot;/>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;appearance&quot;/>
                            <display value=&quot;Appearance&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;white to slightly yellow powder&quot;/>
                    </valueCodeableConcept>
                </property>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-water-pheur&quot;/>
                            <display value=&quot;Solubility purified water (PhEur)&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-solubility-local-pq&quot;/>
                            <code value=&quot;sol-free&quot;/>
                            <display value=&quot;Freely soluble&quot;/>
                        </coding>
                        <text value=&quot;freely soluble&quot;/>
                    </valueCodeableConcept>
                </property>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-range-pq&quot;>
                        <valueRange>
                            <low>
                                <value value=&quot;23&quot;/>
                                <unit value=&quot;mg/mL&quot;/>
                            </low>
                            <high>
                                <value value=&quot;27&quot;/>
                                <unit value=&quot;mg/mL&quot;/>
                            </high>
                        </valueRange>
                    </extension>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-water-pheur&quot;/>
                            <display value=&quot;Solubility purified water (PhEur)&quot;/>
                        </coding>
                    </type>
                </property>
                <!-- solubility acetone -->
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-acetone-pheur&quot;/>
                            <display value=&quot;Solubility Acetone (PhEur)&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-solubility-local-pq&quot;/>
                            <code value=&quot;sol-slight&quot;/>
                            <display value=&quot;Slightly soluble&quot;/>
                        </coding>
                        <text value=&quot;slightly soluble&quot;/>
                    </valueCodeableConcept>
                </property>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-range-pq&quot;>
                        <valueRange>
                            <low>
                                <value value=&quot;2&quot;/>
                                <unit value=&quot;mg/mL&quot;/>
                            </low>
                            <high>
                                <value value=&quot;3&quot;/>
                                <unit value=&quot;mg/mL&quot;/>
                            </high>
                        </valueRange>
                    </extension>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-acetone-pheur&quot;/>
                            <display value=&quot;Solubility acetone (PhEur)&quot;/>
                        </coding>
                    </type>
                </property>
                <!-- solubility ethanol -->
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-ethanol-pheur&quot;/>
                            <display value=&quot;Solubility Ethanol (PhEur)&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-solubility-local-pq&quot;/>
                            <code value=&quot;sol-soluble&quot;/>
                            <display value=&quot;Soluble&quot;/>
                        </coding>
                        <text value=&quot;soluble&quot;/>
                    </valueCodeableConcept>
                </property>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-range-pq&quot;>
                        <valueRange>
                            <low>
                                <value value=&quot;15&quot;/>
                                <unit value=&quot;mg/mL&quot;/>
                            </low>
                            <high>
                                <value value=&quot;17&quot;/>
                                <unit value=&quot;mg/mL&quot;/>
                            </high>
                        </valueRange>
                    </extension>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-ethanol-pheur&quot;/>
                            <display value=&quot;Solubility ethanol (PhEur)&quot;/>
                        </coding>
                    </type>
                </property>
                <!-- purified water -->
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-aq-water-2h-approx&quot;/>
                            <display value=&quot;Solubility at saturation in Purifed Water after 2 hours (approx)&quot;/>
                        </coding>
                    </type>
                    <valueQuantity>
                        <value value=&quot;21&quot;/>
                        <unit value=&quot;mg/mL&quot;/>
                    </valueQuantity>
                </property>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-aq-glucose-2h-approx&quot;/>
                            <display value=&quot;Solubility at saturation in Glucose (5%) after 2 hours (approx)&quot;/>
                        </coding>
                        <text value=&quot;Glucose solution (5%)&quot;/>
                    </type>
                    <valueQuantity>
                        <value value=&quot;2.5&quot;/>
                        <unit value=&quot;mg/mL&quot;/>
                    </valueQuantity>
                </property>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-parameter-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCoding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                                <code value=&quot;pH&quot;/>
                                <display value=&quot;pH&quot;/>
                            </valueCoding>
                        </extension>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;1.2&quot;/>
                            </valueQuantity>
                        </extension>
                    </extension>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-usp-ph&quot;/>
                            <display value=&quot;Solubility as a function of pH in USP buffers&quot;/>
                        </coding>
                    </type>
                    <valueQuantity>
                        <value value=&quot;22&quot;/>
                        <unit value=&quot;mg/mL&quot;/>
                    </valueQuantity>
                </property>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-parameter-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCoding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                                <code value=&quot;pH&quot;/>
                                <display value=&quot;pH&quot;/>
                            </valueCoding>
                        </extension>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;4.5&quot;/>
                            </valueQuantity>
                        </extension>
                    </extension>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-usp-ph&quot;/>
                            <display value=&quot;Solubility as a function of pH in USP buffers&quot;/>
                        </coding>
                    </type>
                    <valueQuantity>
                        <value value=&quot;29&quot;/>
                        <unit value=&quot;mg/mL&quot;/>
                    </valueQuantity>
                </property>
                <!-- pH -->
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-range-pq&quot;>
                        <valueRange>
                            <low>
                                <value value=&quot;6.7&quot;/>
                            </low>
                            <high>
                                <value value=&quot;6.8&quot;/>
                            </high>
                        </valueRange>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-parameter-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCoding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                                <code value=&quot;concentration&quot;/>
                                <display value=&quot;Concentration&quot;/>
                            </valueCoding>
                        </extension>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;10&quot;/>
                                <unit value=&quot;mg/ml&quot;/>
                            </valueQuantity>
                        </extension>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-parameter-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCoding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                                <code value=&quot;temperature&quot;/>
                                <display value=&quot;Temperature&quot;/>
                            </valueCoding>
                        </extension>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;25&quot;/>
                                <unit value=&quot;°C&quot;/>
                            </valueQuantity>
                        </extension>
                    </extension>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;ph-aq&quot;/>
                            <display value=&quot;pH in aqueous solution&quot;/>
                        </coding>
                    </type>
                </property>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;hygroscopy&quot;/>
                            <display value=&quot;Hygroscopy&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;hygroscopy-hygroscopic&quot;/>
                            <display value=&quot;Hygroscopic&quot;/>
                        </coding>
                        <text value=&quot;Hygroscopic&quot;/>
                    </valueCodeableConcept>
                </property>
                <structure>
                    <stereochemistry>
                        <text value=&quot;One asymmetric center and one axis of chirality; (S,M) - enantiomer&quot;/>
                    </stereochemistry>
                </structure>
                <name>
                    <name value=&quot;Stelbatolol&quot;/>
                </name>" id="SubstanceDefinition-substancedefinition-substance-drug-pq-ex1">Substance</span></a><span class="summaryShowsOff"><b> - Stelbatolol</b></span><div class="htmlTableRemove"><br style="line-height:6px;"><div class="indent org">
<div class="indent-no-border"><span><b>Drug Substance General Properties</b><br></span><br style="line-height:6px;"><br style="line-height:6px;"><table class="rounded-corners white" id="tabularModeTable" style="width:70%;">
<tr>
<th><b>Physical and Chemical Properties</b></th>
<th><b>Results</b></th>
</tr>
<tr>
<td><a href="#SubstanceDefinition-substancedefinition-substance-drug-pq-ex1" class="plainlink" title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <display value=&quot;Appearance&quot;>">Appearance</a></td>
<td><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueCodeableConcept>
                        <text value=&quot;white to slightly yellow powder&quot;/>">white to slightly yellow powder</span></td>
</tr>
<tr>
<td colspan="2">Solubilities according to PhEur 1.4</td>
</tr>
<tr>
<td><span>  </span><a href="#SubstanceDefinition-substancedefinition-substance-drug-pq-ex1" class="plainlink" title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <display value=&quot;Solubility purified water (PhEur)&quot;>">Solubility purified water (PhEur)</a></td>
<td><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-solubility-local-pq&quot;/>
                            <code value=&quot;sol-free&quot;/>
                            <display value=&quot;Freely soluble&quot;/>
                        </coding>
                        <text value=&quot;freely soluble&quot;/>">freely soluble</span><span> </span>(<span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-range-pq&quot;>
                        <valueRange>
                            <low>
                                <value value=&quot;23&quot;/>
                                <unit value=&quot;mg/mL&quot;/>">23 mg/mL</span> to <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-range-pq&quot;>
                        <valueRange>
                            ...
                            <high>
                                <value value=&quot;27&quot;/>
                                <unit value=&quot;mg/mL&quot;/>">27 mg/mL</span>)</td>
</tr>
<tr>
<td><span>  </span><a href="#SubstanceDefinition-substancedefinition-substance-drug-pq-ex1" class="plainlink" title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <display value=&quot;Solubility Acetone (PhEur)&quot;>">Solubility Acetone (PhEur)</a></td>
<td><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-solubility-local-pq&quot;/>
                            <code value=&quot;sol-slight&quot;/>
                            <display value=&quot;Slightly soluble&quot;/>
                        </coding>
                        <text value=&quot;slightly soluble&quot;/>">slightly soluble</span><span> </span>(<span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-range-pq&quot;>
                        <valueRange>
                            <low>
                                <value value=&quot;2&quot;/>
                                <unit value=&quot;mg/mL&quot;/>">2 mg/mL</span> to <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-range-pq&quot;>
                        <valueRange>
                            ...
                            <high>
                                <value value=&quot;3&quot;/>
                                <unit value=&quot;mg/mL&quot;/>">3 mg/mL</span>)</td>
</tr>
<tr>
<td><span>  </span><a href="#SubstanceDefinition-substancedefinition-substance-drug-pq-ex1" class="plainlink" title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <display value=&quot;Solubility Ethanol (PhEur)&quot;>">Solubility Ethanol (PhEur)</a></td>
<td><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-solubility-local-pq&quot;/>
                            <code value=&quot;sol-soluble&quot;/>
                            <display value=&quot;Soluble&quot;/>
                        </coding>
                        <text value=&quot;soluble&quot;/>">soluble</span><span> </span>(<span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-range-pq&quot;>
                        <valueRange>
                            <low>
                                <value value=&quot;15&quot;/>
                                <unit value=&quot;mg/mL&quot;/>">15 mg/mL</span> to <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-range-pq&quot;>
                        <valueRange>
                            ...
                            <high>
                                <value value=&quot;17&quot;/>
                                <unit value=&quot;mg/mL&quot;/>">17 mg/mL</span>)</td>
</tr>
<tr>
<td colspan="2">Solubilities at saturation in aqueous medium after 2 hours</td>
</tr>
<tr>
<td><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-aq-water-2h-approx&quot;/>
                            <display value=&quot;Solubility at saturation in Purifed Water after 2 hours (approx)&quot;/>">  Purified Water</span></td>
<td>~<span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueQuantity>
                        <value value=&quot;21&quot;/>
                        <unit value=&quot;mg/mL&quot;/>">21 mg/mL</span></td>
</tr>
<tr>
<td><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-aq-glucose-2h-approx&quot;/>
                            <display value=&quot;Solubility at saturation in Glucose (5%) after 2 hours (approx)&quot;/>">  Glucose (5%)</span></td>
<td>~<span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueQuantity>
                        <value value=&quot;2.5&quot;/>
                        <unit value=&quot;mg/mL&quot;/>">2.5 mg/mL</span></td>
</tr>
<tr>
<td colspan="2">Solubility as a function of pH in USP buffers</td>
</tr>
<tr>
<td><span>  pH=</span><a href="#SubstanceDefinition-substancedefinition-substance-drug-pq-ex1" class="plainlink" title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-parameter-pq&quot;>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;1.2&quot;>">1.2</a></td>
<td><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueQuantity>
                        <value value=&quot;22&quot;/>
                        <unit value=&quot;mg/mL&quot;/>">22 mg/mL</span></td>
</tr>
<tr>
<td><span>  pH=</span><a href="#SubstanceDefinition-substancedefinition-substance-drug-pq-ex1" class="plainlink" title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-parameter-pq&quot;>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;4.5&quot;>">4.5</a></td>
<td><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueQuantity>
                        <value value=&quot;29&quot;/>
                        <unit value=&quot;mg/mL&quot;/>">29 mg/mL</span></td>
</tr>
<tr>
<td><a href="#SubstanceDefinition-substancedefinition-substance-drug-pq-ex1" class="plainlink" title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <display value=&quot;Hygroscopy&quot;>">Hygroscopy</a></td>
<td><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;hygroscopy-hygroscopic&quot;/>
                            <display value=&quot;Hygroscopic&quot;/>
                        </coding>
                        <text value=&quot;Hygroscopic&quot;/>">Hygroscopic</span></td>
</tr>
<tr>
<td>Stereochemistry</td>
<td><a href="#SubstanceDefinition-substancedefinition-substance-drug-pq-ex1" class="plainlink" title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <structure>
                    <stereochemistry>
                        <text value=&quot;One asymmetric center and one axis of chirality; (S,M) - enantiomer&quot;>">One asymmetric center and one axis of chirality; (S,M) - enantiomer</a></td>
</tr>
</table>
</div>
</div><br style="line-height:6px;"></div><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substancedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: substancedefinition-substance-drug-pq-ex1</div>
<div class="debugOff"> fullUrl: urn:uuid:57a9af63-315d-1585-a261-0e337b289390</div>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;appearance&quot;/>
                            <display value=&quot;Appearance&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;white to slightly yellow powder&quot;/>
                    </valueCodeableConcept>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;appearance&quot;/>
                            <display value=&quot;Appearance&quot;/>
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;appearance&quot;/>
                            <display value=&quot;Appearance&quot;/>">Appearance<span class="greyOff"> [appearance]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueCodeableConcept>
                        <text value=&quot;white to slightly yellow powder&quot;/>">Value: <span style="white-space:normal;">white to slightly yellow powder</span></span></div>
</div>
</div>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-water-pheur&quot;/>
                            <display value=&quot;Solubility purified water (PhEur)&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-solubility-local-pq&quot;/>
                            <code value=&quot;sol-free&quot;/>
                            <display value=&quot;Freely soluble&quot;/>
                        </coding>
                        <text value=&quot;freely soluble&quot;/>
                    </valueCodeableConcept>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-water-pheur&quot;/>
                            <display value=&quot;Solubility purified water (PhEur)&quot;/>
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-water-pheur&quot;/>
                            <display value=&quot;Solubility purified water (PhEur)&quot;/>">Solubility purified water (PhEur)<span class="greyOff"> [solubility-water-pheur]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-solubility-local-pq&quot;/>
                            <code value=&quot;sol-free&quot;/>
                            <display value=&quot;Freely soluble&quot;/>
                        </coding>
                        <text value=&quot;freely soluble&quot;/>">Value: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-solubility-local-pq&quot;/>
                            <code value=&quot;sol-free&quot;/>
                            <display value=&quot;Freely soluble&quot;/>">Freely soluble<span class="greyOff"> [sol-free]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-solubility-local-pq)</span></span><span style="white-space:normal;"> - Text: freely soluble</span></span></div>
</div>
</div>
<div class="summaryHiddenOff">
<div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                ...
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-range-pq&quot;>
                        <valueRange>
                            <low>
                                <value value=&quot;23&quot;/>
                                <unit value=&quot;mg/mL&quot;/>
                            </low>
                            <high>
                                <value value=&quot;27&quot;/>
                                <unit value=&quot;mg/mL&quot;/>
                            </high>
                        </valueRange>
                    </extension>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-water-pheur&quot;/>
                            <display value=&quot;Solubility purified water (PhEur)&quot;/>
                        </coding>
                    </type>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-water-pheur&quot;/>
                            <display value=&quot;Solubility purified water (PhEur)&quot;/>
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-water-pheur&quot;/>
                            <display value=&quot;Solubility purified water (PhEur)&quot;/>">Solubility purified water (PhEur)<span class="greyOff"> [solubility-water-pheur]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-range-pq&quot;>
                        <valueRange>
                            <low>
                                <value value=&quot;23&quot;/>
                                <unit value=&quot;mg/mL&quot;/>
                            </low>
                            <high>
                                <value value=&quot;27&quot;/>
                                <unit value=&quot;mg/mL&quot;/>
                            </high>">Value: from <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-range-pq&quot;>
                        <valueRange>
                            <low>
                                <value value=&quot;23&quot;/>
                                <unit value=&quot;mg/mL&quot;/>">23 mg/mL</span> to <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-range-pq&quot;>
                        <valueRange>
                            ...
                            <high>
                                <value value=&quot;27&quot;/>
                                <unit value=&quot;mg/mL&quot;/>">27 mg/mL</span></span></div>
</div>
</div>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-acetone-pheur&quot;/>
                            <display value=&quot;Solubility Acetone (PhEur)&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-solubility-local-pq&quot;/>
                            <code value=&quot;sol-slight&quot;/>
                            <display value=&quot;Slightly soluble&quot;/>
                        </coding>
                        <text value=&quot;slightly soluble&quot;/>
                    </valueCodeableConcept>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-acetone-pheur&quot;/>
                            <display value=&quot;Solubility Acetone (PhEur)&quot;/>
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-acetone-pheur&quot;/>
                            <display value=&quot;Solubility Acetone (PhEur)&quot;/>">Solubility Acetone (PhEur)<span class="greyOff"> [solubility-acetone-pheur]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-solubility-local-pq&quot;/>
                            <code value=&quot;sol-slight&quot;/>
                            <display value=&quot;Slightly soluble&quot;/>
                        </coding>
                        <text value=&quot;slightly soluble&quot;/>">Value: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-solubility-local-pq&quot;/>
                            <code value=&quot;sol-slight&quot;/>
                            <display value=&quot;Slightly soluble&quot;/>">Slightly soluble<span class="greyOff"> [sol-slight]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-solubility-local-pq)</span></span><span style="white-space:normal;"> - Text: slightly soluble</span></span></div>
</div>
</div>
<div class="summaryHiddenOff">
<div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                ...
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-range-pq&quot;>
                        <valueRange>
                            <low>
                                <value value=&quot;2&quot;/>
                                <unit value=&quot;mg/mL&quot;/>
                            </low>
                            <high>
                                <value value=&quot;3&quot;/>
                                <unit value=&quot;mg/mL&quot;/>
                            </high>
                        </valueRange>
                    </extension>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-acetone-pheur&quot;/>
                            <display value=&quot;Solubility acetone (PhEur)&quot;/>
                        </coding>
                    </type>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-acetone-pheur&quot;/>
                            <display value=&quot;Solubility acetone (PhEur)&quot;/>
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-acetone-pheur&quot;/>
                            <display value=&quot;Solubility acetone (PhEur)&quot;/>">Solubility acetone (PhEur)<span class="greyOff"> [solubility-acetone-pheur]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-range-pq&quot;>
                        <valueRange>
                            <low>
                                <value value=&quot;2&quot;/>
                                <unit value=&quot;mg/mL&quot;/>
                            </low>
                            <high>
                                <value value=&quot;3&quot;/>
                                <unit value=&quot;mg/mL&quot;/>
                            </high>">Value: from <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-range-pq&quot;>
                        <valueRange>
                            <low>
                                <value value=&quot;2&quot;/>
                                <unit value=&quot;mg/mL&quot;/>">2 mg/mL</span> to <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-range-pq&quot;>
                        <valueRange>
                            ...
                            <high>
                                <value value=&quot;3&quot;/>
                                <unit value=&quot;mg/mL&quot;/>">3 mg/mL</span></span></div>
</div>
</div>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-ethanol-pheur&quot;/>
                            <display value=&quot;Solubility Ethanol (PhEur)&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-solubility-local-pq&quot;/>
                            <code value=&quot;sol-soluble&quot;/>
                            <display value=&quot;Soluble&quot;/>
                        </coding>
                        <text value=&quot;soluble&quot;/>
                    </valueCodeableConcept>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-ethanol-pheur&quot;/>
                            <display value=&quot;Solubility Ethanol (PhEur)&quot;/>
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-ethanol-pheur&quot;/>
                            <display value=&quot;Solubility Ethanol (PhEur)&quot;/>">Solubility Ethanol (PhEur)<span class="greyOff"> [solubility-ethanol-pheur]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-solubility-local-pq&quot;/>
                            <code value=&quot;sol-soluble&quot;/>
                            <display value=&quot;Soluble&quot;/>
                        </coding>
                        <text value=&quot;soluble&quot;/>">Value: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-solubility-local-pq&quot;/>
                            <code value=&quot;sol-soluble&quot;/>
                            <display value=&quot;Soluble&quot;/>">Soluble<span class="greyOff"> [sol-soluble]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-solubility-local-pq)</span></span><span style="white-space:normal;"> - Text: soluble</span></span></div>
</div>
</div>
<div class="summaryHiddenOff">
<div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                ...
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-range-pq&quot;>
                        <valueRange>
                            <low>
                                <value value=&quot;15&quot;/>
                                <unit value=&quot;mg/mL&quot;/>
                            </low>
                            <high>
                                <value value=&quot;17&quot;/>
                                <unit value=&quot;mg/mL&quot;/>
                            </high>
                        </valueRange>
                    </extension>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-ethanol-pheur&quot;/>
                            <display value=&quot;Solubility ethanol (PhEur)&quot;/>
                        </coding>
                    </type>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-ethanol-pheur&quot;/>
                            <display value=&quot;Solubility ethanol (PhEur)&quot;/>
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-ethanol-pheur&quot;/>
                            <display value=&quot;Solubility ethanol (PhEur)&quot;/>">Solubility ethanol (PhEur)<span class="greyOff"> [solubility-ethanol-pheur]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-range-pq&quot;>
                        <valueRange>
                            <low>
                                <value value=&quot;15&quot;/>
                                <unit value=&quot;mg/mL&quot;/>
                            </low>
                            <high>
                                <value value=&quot;17&quot;/>
                                <unit value=&quot;mg/mL&quot;/>
                            </high>">Value: from <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-range-pq&quot;>
                        <valueRange>
                            <low>
                                <value value=&quot;15&quot;/>
                                <unit value=&quot;mg/mL&quot;/>">15 mg/mL</span> to <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-range-pq&quot;>
                        <valueRange>
                            ...
                            <high>
                                <value value=&quot;17&quot;/>
                                <unit value=&quot;mg/mL&quot;/>">17 mg/mL</span></span></div>
</div>
</div>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-aq-water-2h-approx&quot;/>
                            <display value=&quot;Solubility at saturation in Purifed Water after 2 hours (approx)&quot;/>
                        </coding>
                    </type>
                    <valueQuantity>
                        <value value=&quot;21&quot;/>
                        <unit value=&quot;mg/mL&quot;/>
                    </valueQuantity>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-aq-water-2h-approx&quot;/>
                            <display value=&quot;Solubility at saturation in Purifed Water after 2 hours (approx)&quot;/>
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-aq-water-2h-approx&quot;/>
                            <display value=&quot;Solubility at saturation in Purifed Water after 2 hours (approx)&quot;/>">Solubility at saturation in Purifed Water after 2 hours (approx)<span class="greyOff"> [solubility-aq-water-2h-approx]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueQuantity>
                        <value value=&quot;21&quot;/>
                        <unit value=&quot;mg/mL&quot;/>">Value: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueQuantity>
                        <value value=&quot;21&quot;/>
                        <unit value=&quot;mg/mL&quot;/>">21 mg/mL</span></span></div>
</div>
</div>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-aq-glucose-2h-approx&quot;/>
                            <display value=&quot;Solubility at saturation in Glucose (5%) after 2 hours (approx)&quot;/>
                        </coding>
                        <text value=&quot;Glucose solution (5%)&quot;/>
                    </type>
                    <valueQuantity>
                        <value value=&quot;2.5&quot;/>
                        <unit value=&quot;mg/mL&quot;/>
                    </valueQuantity>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-aq-glucose-2h-approx&quot;/>
                            <display value=&quot;Solubility at saturation in Glucose (5%) after 2 hours (approx)&quot;/>
                        </coding>
                        <text value=&quot;Glucose solution (5%)&quot;/>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-aq-glucose-2h-approx&quot;/>
                            <display value=&quot;Solubility at saturation in Glucose (5%) after 2 hours (approx)&quot;/>">Solubility at saturation in Glucose (5%) after 2 hours (approx)<span class="greyOff"> [solubility-aq-glucose-2h-approx]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq)</span></span><span style="white-space:normal;"> - Text: Glucose solution (5%)</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueQuantity>
                        <value value=&quot;2.5&quot;/>
                        <unit value=&quot;mg/mL&quot;/>">Value: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueQuantity>
                        <value value=&quot;2.5&quot;/>
                        <unit value=&quot;mg/mL&quot;/>">2.5 mg/mL</span></span></div>
</div>
</div>
<div class="summaryHiddenOff">
<div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                ...
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-parameter-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCoding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                                <code value=&quot;pH&quot;/>
                                <display value=&quot;pH&quot;/>
                            </valueCoding>
                        </extension>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;1.2&quot;/>
                            </valueQuantity>
                        </extension>
                    </extension>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-usp-ph&quot;/>
                            <display value=&quot;Solubility as a function of pH in USP buffers&quot;/>
                        </coding>
                    </type>
                    <valueQuantity>
                        <value value=&quot;22&quot;/>
                        <unit value=&quot;mg/mL&quot;/>
                    </valueQuantity>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-usp-ph&quot;/>
                            <display value=&quot;Solubility as a function of pH in USP buffers&quot;/>
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-usp-ph&quot;/>
                            <display value=&quot;Solubility as a function of pH in USP buffers&quot;/>">Solubility as a function of pH in USP buffers<span class="greyOff"> [solubility-usp-ph]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq)</span></span></span></div>
<div class="indent sbddetails2">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-parameter-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCoding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                                <code value=&quot;pH&quot;/>
                                <display value=&quot;pH&quot;/>
                            </valueCoding>">Parameter: </span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-parameter-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCoding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                                <code value=&quot;pH&quot;/>
                                <display value=&quot;pH&quot;/>">pH<span class="greyOff"> [pH]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq)</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-parameter-pq&quot;>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;1.2&quot;/>">Parameter Value: </span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-parameter-pq&quot;>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;1.2&quot;/>">1.2</span></div>
</div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueQuantity>
                        <value value=&quot;22&quot;/>
                        <unit value=&quot;mg/mL&quot;/>">Value: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueQuantity>
                        <value value=&quot;22&quot;/>
                        <unit value=&quot;mg/mL&quot;/>">22 mg/mL</span></span></div>
</div>
</div>
<div class="summaryHiddenOff">
<div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                ...
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-parameter-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCoding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                                <code value=&quot;pH&quot;/>
                                <display value=&quot;pH&quot;/>
                            </valueCoding>
                        </extension>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;4.5&quot;/>
                            </valueQuantity>
                        </extension>
                    </extension>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-usp-ph&quot;/>
                            <display value=&quot;Solubility as a function of pH in USP buffers&quot;/>
                        </coding>
                    </type>
                    <valueQuantity>
                        <value value=&quot;29&quot;/>
                        <unit value=&quot;mg/mL&quot;/>
                    </valueQuantity>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-usp-ph&quot;/>
                            <display value=&quot;Solubility as a function of pH in USP buffers&quot;/>
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;solubility-usp-ph&quot;/>
                            <display value=&quot;Solubility as a function of pH in USP buffers&quot;/>">Solubility as a function of pH in USP buffers<span class="greyOff"> [solubility-usp-ph]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq)</span></span></span></div>
<div class="indent sbddetails2">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-parameter-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCoding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                                <code value=&quot;pH&quot;/>
                                <display value=&quot;pH&quot;/>
                            </valueCoding>">Parameter: </span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-parameter-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCoding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                                <code value=&quot;pH&quot;/>
                                <display value=&quot;pH&quot;/>">pH<span class="greyOff"> [pH]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq)</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-parameter-pq&quot;>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;4.5&quot;/>">Parameter Value: </span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-parameter-pq&quot;>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;4.5&quot;/>">4.5</span></div>
</div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueQuantity>
                        <value value=&quot;29&quot;/>
                        <unit value=&quot;mg/mL&quot;/>">Value: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueQuantity>
                        <value value=&quot;29&quot;/>
                        <unit value=&quot;mg/mL&quot;/>">29 mg/mL</span></span></div>
</div>
</div>
<div class="summaryHiddenOff">
<div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                ...
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-range-pq&quot;>
                        <valueRange>
                            <low>
                                <value value=&quot;6.7&quot;/>
                            </low>
                            <high>
                                <value value=&quot;6.8&quot;/>
                            </high>
                        </valueRange>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-parameter-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCoding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                                <code value=&quot;concentration&quot;/>
                                <display value=&quot;Concentration&quot;/>
                            </valueCoding>
                        </extension>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;10&quot;/>
                                <unit value=&quot;mg/ml&quot;/>
                            </valueQuantity>
                        </extension>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-parameter-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCoding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                                <code value=&quot;temperature&quot;/>
                                <display value=&quot;Temperature&quot;/>
                            </valueCoding>
                        </extension>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;25&quot;/>
                                <unit value=&quot;°C&quot;/>
                            </valueQuantity>
                        </extension>
                    </extension>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;ph-aq&quot;/>
                            <display value=&quot;pH in aqueous solution&quot;/>
                        </coding>
                    </type>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;ph-aq&quot;/>
                            <display value=&quot;pH in aqueous solution&quot;/>
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;ph-aq&quot;/>
                            <display value=&quot;pH in aqueous solution&quot;/>">pH in aqueous solution<span class="greyOff"> [ph-aq]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq)</span></span></span></div>
<div class="indent sbddetails2">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-parameter-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCoding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                                <code value=&quot;concentration&quot;/>
                                <display value=&quot;Concentration&quot;/>
                            </valueCoding>">Parameter: </span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-parameter-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCoding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                                <code value=&quot;concentration&quot;/>
                                <display value=&quot;Concentration&quot;/>">Concentration<span class="greyOff"> [concentration]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq)</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-parameter-pq&quot;>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;10&quot;/>
                                <unit value=&quot;mg/ml&quot;/>">Parameter Value: </span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-parameter-pq&quot;>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;10&quot;/>
                                <unit value=&quot;mg/ml&quot;/>">10 mg/ml</span></div>
</div>
<div class="indent sbddetails2">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-parameter-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCoding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                                <code value=&quot;temperature&quot;/>
                                <display value=&quot;Temperature&quot;/>
                            </valueCoding>">Parameter: </span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-parameter-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCoding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                                <code value=&quot;temperature&quot;/>
                                <display value=&quot;Temperature&quot;/>">Temperature<span class="greyOff"> [temperature]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq)</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-parameter-pq&quot;>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;25&quot;/>
                                <unit value=&quot;°C&quot;/>">Parameter Value: </span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-parameter-pq&quot;>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;25&quot;/>
                                <unit value=&quot;°C&quot;/>">25 °C</span></div>
</div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-range-pq&quot;>
                        <valueRange>
                            <low>
                                <value value=&quot;6.7&quot;/>
                            </low>
                            <high>
                                <value value=&quot;6.8&quot;/>
                            </high>">Value: from <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-range-pq&quot;>
                        <valueRange>
                            <low>
                                <value value=&quot;6.7&quot;/>">6.7</span> to <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-range-pq&quot;>
                        <valueRange>
                            ...
                            <high>
                                <value value=&quot;6.8&quot;/>">6.8</span></span></div>
</div>
</div>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;hygroscopy&quot;/>
                            <display value=&quot;Hygroscopy&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;hygroscopy-hygroscopic&quot;/>
                            <display value=&quot;Hygroscopic&quot;/>
                        </coding>
                        <text value=&quot;Hygroscopic&quot;/>
                    </valueCodeableConcept>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;hygroscopy&quot;/>
                            <display value=&quot;Hygroscopy&quot;/>
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;hygroscopy&quot;/>
                            <display value=&quot;Hygroscopy&quot;/>">Hygroscopy<span class="greyOff"> [hygroscopy]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;hygroscopy-hygroscopic&quot;/>
                            <display value=&quot;Hygroscopic&quot;/>
                        </coding>
                        <text value=&quot;Hygroscopic&quot;/>">Value: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq&quot;/>
                            <code value=&quot;hygroscopy-hygroscopic&quot;/>
                            <display value=&quot;Hygroscopic&quot;/>">Hygroscopic<span class="greyOff"> [hygroscopy-hygroscopic]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-local-pq)</span></span><span style="white-space:normal;"> - Text: Hygroscopic</span></span></div>
</div>
</div>
<div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                ...
                <structure>
                    <stereochemistry>
                        <text value=&quot;One asymmetric center and one axis of chirality; (S,M) - enantiomer&quot;/>
                    </stereochemistry>">Structure</span><div class="indent sbddetails2">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <structure>
                    <stereochemistry>
                        <text value=&quot;One asymmetric center and one axis of chirality; (S,M) - enantiomer&quot;/>">Stereochemistry: </span><span><span style="white-space:normal;">One asymmetric center and one axis of chirality; (S,M) - enantiomer</span></span></div>
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
			// Rik
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
		Status information:
		First resource in bundle:SubstanceDefinition
		Single resource bundle:true
		Single resource bundle Not Patient Or Bundle:true
		Single resource Not Patient:false
		Patient document:false
		General Bundle:false
		Not patient related:true
		=>Patient Centric Mode:false
		SubstanceDef Centric Mode:true
		Assumed profile:--></html>
