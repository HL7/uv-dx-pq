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
<div class="divBody">
<div style="position:relative" class="summaryUnit">
<div class="debugOffBorder">
<div class="bundleBorder">
<div class="debugOff">
<div class="bundle"><a class="plainLink"><span class="bold" title="Bundle (id: bundle-drug-substance-general-properties-pq-ex1)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-drug-substance-general-properties-pq 

<Bundle>
    <id value=&quot;bundle-drug-substance-general-properties-pq-ex1&quot;/>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-drug-substance-general-properties-pq&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
                            <code value=&quot;solubility-water-pheur&quot;/>
                            <display value=&quot;Solubility purified water (PhEur)&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-value-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
                            <code value=&quot;solubility-water-pheur&quot;/>
                            <display value=&quot;Solubility purified water (PhEur)&quot;/>
                        </coding>
                    </type>
                </property>
                <!-- solubility acetone -->
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
                            <code value=&quot;solubility-acetone-pheur&quot;/>
                            <display value=&quot;Solubility Acetone (PhEur)&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-value-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
                            <code value=&quot;solubility-acetone-pheur&quot;/>
                            <display value=&quot;Solubility acetone (PhEur)&quot;/>
                        </coding>
                    </type>
                </property>
                <!-- solubility ethanol -->
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
                            <code value=&quot;solubility-ethanol-pheur&quot;/>
                            <display value=&quot;Solubility Ethanol (PhEur)&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-value-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
                            <code value=&quot;solubility-ethanol-pheur&quot;/>
                            <display value=&quot;Solubility ethanol (PhEur)&quot;/>
                        </coding>
                    </type>
                </property>
                <!-- purified water -->
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
                            <code value=&quot;ph-aq&quot;/>
                            <display value=&quot;pH in aqueous solution&quot;/>
                        </coding>
                    </type>
                </property>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
                            <code value=&quot;hygroscopy&quot;/>
                            <display value=&quot;Hygroscopy&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-drug-substance-general-properties-pq&quot;>">Profile: </span><span title="
<Bundle>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-drug-substance-general-properties-pq&quot;>">http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-drug-substance-general-properties-pq</span></div>
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
<div class="indent sbd summaryUnit"><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: substancedefinition-substance-drug-pq-ex1)(fullUrl: urn:uuid:57a9af63-315d-1585-a261-0e337b289390)

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;substancedefinition-substance-drug-pq-ex1&quot;/>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
                            <code value=&quot;solubility-water-pheur&quot;/>
                            <display value=&quot;Solubility purified water (PhEur)&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-value-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
                            <code value=&quot;solubility-water-pheur&quot;/>
                            <display value=&quot;Solubility purified water (PhEur)&quot;/>
                        </coding>
                    </type>
                </property>
                <!-- solubility acetone -->
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
                            <code value=&quot;solubility-acetone-pheur&quot;/>
                            <display value=&quot;Solubility Acetone (PhEur)&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-value-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
                            <code value=&quot;solubility-acetone-pheur&quot;/>
                            <display value=&quot;Solubility acetone (PhEur)&quot;/>
                        </coding>
                    </type>
                </property>
                <!-- solubility ethanol -->
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
                            <code value=&quot;solubility-ethanol-pheur&quot;/>
                            <display value=&quot;Solubility Ethanol (PhEur)&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-value-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
                            <code value=&quot;solubility-ethanol-pheur&quot;/>
                            <display value=&quot;Solubility ethanol (PhEur)&quot;/>
                        </coding>
                    </type>
                </property>
                <!-- purified water -->
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
                            <code value=&quot;ph-aq&quot;/>
                            <display value=&quot;pH in aqueous solution&quot;/>
                        </coding>
                    </type>
                </property>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
                            <code value=&quot;hygroscopy&quot;/>
                            <display value=&quot;Hygroscopy&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-value-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-value-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-value-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
                            <code value=&quot;appearance&quot;/>
                            <display value=&quot;Appearance&quot;/>">Appearance<span class="greyOff"> [appearance]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example)</span></span></span></div>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
                            <code value=&quot;solubility-water-pheur&quot;/>
                            <display value=&quot;Solubility purified water (PhEur)&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-value-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
                            <code value=&quot;solubility-water-pheur&quot;/>
                            <display value=&quot;Solubility purified water (PhEur)&quot;/>">Solubility purified water (PhEur)<span class="greyOff"> [solubility-water-pheur]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-value-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-value-pq-example&quot;/>
                            <code value=&quot;sol-free&quot;/>
                            <display value=&quot;Freely soluble&quot;/>">Freely soluble<span class="greyOff"> [sol-free]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-value-pq-example)</span></span><span style="white-space:normal;"> - Text: freely soluble</span></span></div>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
                            <code value=&quot;solubility-water-pheur&quot;/>
                            <display value=&quot;Solubility purified water (PhEur)&quot;/>">Solubility purified water (PhEur)<span class="greyOff"> [solubility-water-pheur]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example)</span></span></span></div>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
                            <code value=&quot;solubility-acetone-pheur&quot;/>
                            <display value=&quot;Solubility Acetone (PhEur)&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-value-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
                            <code value=&quot;solubility-acetone-pheur&quot;/>
                            <display value=&quot;Solubility Acetone (PhEur)&quot;/>">Solubility Acetone (PhEur)<span class="greyOff"> [solubility-acetone-pheur]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-value-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-value-pq-example&quot;/>
                            <code value=&quot;sol-slight&quot;/>
                            <display value=&quot;Slightly soluble&quot;/>">Slightly soluble<span class="greyOff"> [sol-slight]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-value-pq-example)</span></span><span style="white-space:normal;"> - Text: slightly soluble</span></span></div>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
                            <code value=&quot;solubility-acetone-pheur&quot;/>
                            <display value=&quot;Solubility acetone (PhEur)&quot;/>">Solubility acetone (PhEur)<span class="greyOff"> [solubility-acetone-pheur]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example)</span></span></span></div>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
                            <code value=&quot;solubility-ethanol-pheur&quot;/>
                            <display value=&quot;Solubility Ethanol (PhEur)&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-value-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
                            <code value=&quot;solubility-ethanol-pheur&quot;/>
                            <display value=&quot;Solubility Ethanol (PhEur)&quot;/>">Solubility Ethanol (PhEur)<span class="greyOff"> [solubility-ethanol-pheur]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-value-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-value-pq-example&quot;/>
                            <code value=&quot;sol-soluble&quot;/>
                            <display value=&quot;Soluble&quot;/>">Soluble<span class="greyOff"> [sol-soluble]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-value-pq-example)</span></span><span style="white-space:normal;"> - Text: soluble</span></span></div>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
                            <code value=&quot;solubility-ethanol-pheur&quot;/>
                            <display value=&quot;Solubility ethanol (PhEur)&quot;/>">Solubility ethanol (PhEur)<span class="greyOff"> [solubility-ethanol-pheur]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example)</span></span></span></div>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
                            <code value=&quot;solubility-aq-water-2h-approx&quot;/>
                            <display value=&quot;Solubility at saturation in Purifed Water after 2 hours (approx)&quot;/>">Solubility at saturation in Purifed Water after 2 hours (approx)<span class="greyOff"> [solubility-aq-water-2h-approx]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example)</span></span></span></div>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
                            <code value=&quot;solubility-aq-glucose-2h-approx&quot;/>
                            <display value=&quot;Solubility at saturation in Glucose (5%) after 2 hours (approx)&quot;/>">Solubility at saturation in Glucose (5%) after 2 hours (approx)<span class="greyOff"> [solubility-aq-glucose-2h-approx]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example)</span></span><span style="white-space:normal;"> - Text: Glucose solution (5%)</span></span></div>
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
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
                            <code value=&quot;solubility-usp-ph&quot;/>
                            <display value=&quot;Solubility as a function of pH in USP buffers&quot;/>">Solubility as a function of pH in USP buffers<span class="greyOff"> [solubility-usp-ph]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example)</span></span></span></div>
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
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
                                <code value=&quot;pH&quot;/>
                                <display value=&quot;pH&quot;/>
                            </valueCoding>"><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-parameter-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCoding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
                                <code value=&quot;pH&quot;/>
                                <display value=&quot;pH&quot;/>">pH<span class="greyOff"> [pH]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example)</span></span></span></div>
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
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
                            <code value=&quot;solubility-usp-ph&quot;/>
                            <display value=&quot;Solubility as a function of pH in USP buffers&quot;/>">Solubility as a function of pH in USP buffers<span class="greyOff"> [solubility-usp-ph]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example)</span></span></span></div>
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
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
                                <code value=&quot;pH&quot;/>
                                <display value=&quot;pH&quot;/>
                            </valueCoding>"><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-parameter-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCoding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
                                <code value=&quot;pH&quot;/>
                                <display value=&quot;pH&quot;/>">pH<span class="greyOff"> [pH]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example)</span></span></span></div>
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
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
                            <code value=&quot;ph-aq&quot;/>
                            <display value=&quot;pH in aqueous solution&quot;/>">pH in aqueous solution<span class="greyOff"> [ph-aq]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example)</span></span></span></div>
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
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
                                <code value=&quot;concentration&quot;/>
                                <display value=&quot;Concentration&quot;/>
                            </valueCoding>"><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-parameter-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCoding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
                                <code value=&quot;concentration&quot;/>
                                <display value=&quot;Concentration&quot;/>">Concentration<span class="greyOff"> [concentration]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example)</span></span></span></div>
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
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
                                <code value=&quot;temperature&quot;/>
                                <display value=&quot;Temperature&quot;/>
                            </valueCoding>"><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-substance-property-parameter-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCoding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
                                <code value=&quot;temperature&quot;/>
                                <display value=&quot;Temperature&quot;/>">Temperature<span class="greyOff"> [temperature]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example)</span></span></span></div>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
                            <code value=&quot;hygroscopy&quot;/>
                            <display value=&quot;Hygroscopy&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
                            <code value=&quot;hygroscopy&quot;/>
                            <display value=&quot;Hygroscopy&quot;/>">Hygroscopy<span class="greyOff"> [hygroscopy]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example&quot;/>
                            <code value=&quot;hygroscopy-hygroscopic&quot;/>
                            <display value=&quot;Hygroscopic&quot;/>">Hygroscopic<span class="greyOff"> [hygroscopy-hygroscopic]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-substance-property-pq-example)</span></span><span style="white-space:normal;"> - Text: Hygroscopic</span></span></div>
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
                        <text value=&quot;One asymmetric center and one axis of chirality; (S,M) - enantiomer&quot;/>">Stereochemistry: </span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <structure>
                    <stereochemistry>
                        <text value=&quot;One asymmetric center and one axis of chirality; (S,M) - enantiomer&quot;/>"><span style="white-space:normal;">One asymmetric center and one axis of chirality; (S,M) - enantiomer</span></span></div>
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
		Single resource bundle:true
		Single resource bundle Not Patient Or Bundle:true
		Single resource Not Patient:false
		Patient document:false
		General Bundle:false
		Not patient related:true
		=>Patient Centric Mode:false
		SubstanceDef Centric Mode:true
		Assumed profile:-->
</html>
