The HTML rendering below shows a synthetic Quality data example for Common Technical Document (CTD) Module 3: Quality, sections ...
<html>
<body>
<div class="greyable">
<div class="controls remove"><span> </span><span class="button" onclick="toggleSummary(this)" title="summary view">summary on</span><span> </span><span class="button" onclick="toggleCodes(this)" title="details of code systems">show codes</span><span> </span><span class="button" onclick="toggleDebug(this)" title="extra technical info">show debug</span><span style="float:right; margin-right:3px;"><span class="buttonNoUnderlineHidden" onclick="toggleLowerControls(this)"><sup title="expand this"> v </sup></span><span class="buttonNoUnderline" onclick="toggleRemove(this)"><sup title="close this">x</sup></span></span><span> </span><span class="button" onclick="toggleRemoveTask(this)" title="details of tasks for changes">hide task</span><span> </span><span class="button" onclick="toggleRemoveProvenance(this)" title="details of provenance for changes">hide provenance</span><span> </span><span class="button" onclick="toggleRemoveTables(this)" title="tabular data">hide tables</span><br><span> </span><span class="button" onclick="toggleDarkMode(this)" title="darkened display">dark mode</span><span> </span><span class="button" onclick="toggleApplyGreyscale(this)" title="grey and white display">greyscale</span><span> </span><span class="button" onclick="toggleBlackAndWhite(this,false)" title="black and white display">b&amp;w</span><span> </span><span class="button" onclick="togglePlainMode(this);" title="plain text display">text only</span></div>
<div class="divBody">
<div style="position:relative" class="summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOffBorder">
<div class="bundleBorder">
<div class="debugOff">
<div class="bundle"><a class="plainLink"><span class="bold" title="Bundle (id: bundle-product-impurities-pq-ex2-sub)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-product-impurities-pq 

<Bundle>
    <!-- Substance Impurities -->
    <id value=&quot;bundle-product-impurities-pq-ex2-sub&quot;/>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-product-impurities-pq&quot;/>
    </meta>
    <type value=&quot;collection&quot;/>
    <entry>
        <fullUrl value=&quot;urn:uuid:03d68d1c-162c-8b6e-70f9-647b0ea97adb&quot;/>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;substance1&quot;/>
                <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tabulateSubstanceImpurities&quot;>
                    <valueBoolean value=&quot;true&quot;/>
                </extension>
                <manufacturer>
                    <reference value=&quot;Organization/substance-manufacturer&quot;/>
                </manufacturer>
                <name>
                    <name value=&quot;Stelbatolol&quot;/>
                </name>
                <relationship>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-impurity-origin-pq&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-origin-local-pq&quot;/>
                                <code value=&quot;enantiomer&quot;/>
                                <display value=&quot;Enantiomer&quot;/>
                            </coding>
                            <text value=&quot;Enantiomer of API SM&quot;/>
                        </valueCodeableConcept>
                    </extension>
                    <substanceDefinitionReference>
                        <reference value=&quot;SubstanceDefinition/impurityEnantiomer&quot;/>
                    </substanceDefinitionReference>
                    <type>
                        <coding>
                            <system value=&quot;http://temp.hl7.org/fhir/substance-relationship-type&quot;/>
                            <code value=&quot;impurity&quot;/>
                            <display value=&quot;Impurity Of&quot;/>
                        </coding>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-type-local-pq&quot;/>
                            <code value=&quot;CH-IMP&quot;/>
                            <display value=&quot;Chiral Impurity&quot;/>
                        </coding>
                    </type>
                    <amountString value=&quot;ND&quot;/>
                </relationship>
                <relationship>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-impurity-origin-pq&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-origin-local-pq&quot;/>
                                <code value=&quot;process&quot;/>
                                <display value=&quot;Process Impurity&quot;/>
                            </coding>
                            <text value=&quot;Step 1a Process Impurity&quot;/>
                        </valueCodeableConcept>
                    </extension>
                    <substanceDefinitionReference>
                        <reference value=&quot;SubstanceDefinition/impurity1&quot;/>
                    </substanceDefinitionReference>
                    <type>
                        <coding>
                            <system value=&quot;http://temp.hl7.org/fhir/substance-relationship-type&quot;/>
                            <code value=&quot;impurity&quot;/>
                            <display value=&quot;Impurity Of&quot;/>
                        </coding>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-type-local-pq&quot;/>
                            <code value=&quot;PR-IMP&quot;/>
                            <display value=&quot;Process impurity&quot;/>
                        </coding>
                    </type>
                    <amountString value=&quot;Range: ND-0.2%&quot;/>
                </relationship>
                <relationship>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-impurity-origin-pq&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-origin-local-pq&quot;/>
                                <code value=&quot;process&quot;/>
                                <display value=&quot;Process Impurity&quot;/>
                            </coding>
                            <text value=&quot;Step 1a Process Impurity&quot;/>
                        </valueCodeableConcept>
                    </extension>
                    <substanceDefinitionReference>
                        <reference value=&quot;SubstanceDefinition/impurity2&quot;/>
                    </substanceDefinitionReference>
                    <type>
                        <coding>
                            <system value=&quot;http://temp.hl7.org/fhir/substance-relationship-type&quot;/>
                            <code value=&quot;impurity&quot;/>
                            <display value=&quot;Impurity Of&quot;/>
                        </coding>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-type-local-pq&quot;/>
                            <code value=&quot;PR-IMP&quot;/>
                            <display value=&quot;Process impurity&quot;/>
                        </coding>
                    </type>
                    <amountString value=&quot;Range: ND–0.3%&quot;/>
                </relationship>
                <relationship>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-impurity-origin-pq&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-origin-local-pq&quot;/>
                                <code value=&quot;starting-material&quot;/>
                                <display value=&quot;Starting Material&quot;/>
                            </coding>
                            <text value=&quot;API Starting Material&quot;/>
                        </valueCodeableConcept>
                    </extension>
                    <substanceDefinitionReference>
                        <reference value=&quot;SubstanceDefinition/impurityNapthol&quot;/>
                    </substanceDefinitionReference>
                    <type>
                        <coding>
                            <system value=&quot;http://temp.hl7.org/fhir/substance-relationship-type&quot;/>
                            <code value=&quot;impurity&quot;/>
                            <display value=&quot;Impurity Of&quot;/>
                        </coding>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-type-local-pq&quot;/>
                            <code value=&quot;ST-IMP&quot;/>
                            <display value=&quot;Starting material, forced degradation product&quot;/>
                        </coding>
                    </type>
                    <amountString value=&quot;Observed only during stress studies&quot;/>
                </relationship>
                <relationship>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-impurity-origin-pq&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-origin-local-pq&quot;/>
                                <code value=&quot;intermediate-material&quot;/>
                                <display value=&quot;Intermediate Material&quot;/>
                            </coding>
                            <text value=&quot;API Process Intermediate&quot;/>
                        </valueCodeableConcept>
                    </extension>
                    <substanceDefinitionReference>
                        <reference value=&quot;SubstanceDefinition/impurityPropanol&quot;/>
                    </substanceDefinitionReference>
                    <type>
                        <coding>
                            <system value=&quot;http://temp.hl7.org/fhir/substance-relationship-type&quot;/>
                            <code value=&quot;impurity&quot;/>
                            <display value=&quot;Impurity Of&quot;/>
                        </coding>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-type-local-pq&quot;/>
                            <code value=&quot;INT-IMP&quot;/>
                            <display value=&quot;Process intermediate, forced degradation product&quot;/>
                        </coding>
                    </type>
                    <amountString value=&quot;Observed only during stress studies&quot;/>
                </relationship>
            </SubstanceDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:03d68d1c-162c-8b6e-80f9-647b0ea97ad1&quot;/>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;impurityEnantiomer&quot;/>
                <characterization>
                    <technique>
                        <text value=&quot;Enantiomeric purity by LC&quot;/>
                    </technique>
                </characterization>
                <characterization>
                    <technique>
                        <text value=&quot;Mass spectrometry&quot;/>
                    </technique>
                </characterization>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;1233444&quot;/>
                            <display value=&quot;Rule-based (Q)Sar&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;negative&quot;/>
                            <display value=&quot;Negative&quot;/>
                        </coding>
                    </valueCodeableConcept>
                </property>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123555&quot;/>
                            <display value=&quot;Statistical (Q)Sar&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;negative&quot;/>
                            <display value=&quot;Negative&quot;/>
                        </coding>
                    </valueCodeableConcept>
                </property>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123556&quot;/>
                            <display value=&quot;ICH M7 Classification&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-ich-m7-classification-local-pq&quot;/>
                            <code value=&quot;class-5&quot;/>
                            <display value=&quot;Class 5&quot;/>
                        </coding>
                    </valueCodeableConcept>
                </property>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123557&quot;/>
                            <display value=&quot;Mutagenicity Comment&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Treated as non-mutagenic due to lack of alerting structure&quot;/>
                    </valueCodeableConcept>
                </property>
                <molecularWeight>
                    <amount>
                        <value value=&quot;295.80&quot;/>
                        <unit value=&quot;g/mole&quot;/>
                        <system value=&quot;http://unitsofmeasure.org&quot;/>
                        <code value=&quot;g/mol&quot;/>
                    </amount>
                </molecularWeight>
                <structure>
                    <representation>
                        <document>
                            <reference value=&quot;DocumentReference/impurityEnantiomerdoc&quot;/>
                        </document>
                    </representation>
                </structure>
                <name>
                    <name value=&quot;R-enantiomer of stelbatalol&quot;/>
                </name>
            </SubstanceDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:13d68d1c-162c-8b6e-80f9-647b0ea97ad1&quot;/>
        <resource>
            <DocumentReference>
                <id value=&quot;impurityEnantiomerdoc&quot;/>
                <status value=&quot;current&quot;/>
                <content>
                    <attachment>
                        <contentType value=&quot;image/x-png&quot;/>
                        <data value=&quot;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&quot;/>
                    </attachment>
                </content>
            </DocumentReference>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:03d68d1c-162c-8b6e-80f9-647b0ea97ad2&quot;/>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;impurity1&quot;/>
                <characterization>
                    <technique>
                        <text value=&quot;Organic impurities by HPLC&quot;/>
                    </technique>
                </characterization>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;1233444&quot;/>
                            <display value=&quot;Rule-based (Q)Sar&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;negative&quot;/>
                            <display value=&quot;Negative&quot;/>
                        </coding>
                    </valueCodeableConcept>
                </property>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123555&quot;/>
                            <display value=&quot;Statistical (Q)Sar&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;negative&quot;/>
                            <display value=&quot;Negative&quot;/>
                        </coding>
                    </valueCodeableConcept>
                </property>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123556&quot;/>
                            <display value=&quot;ICH M7 Classification&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-ich-m7-classification-local-pq&quot;/>
                            <code value=&quot;class-5&quot;/>
                            <display value=&quot;Class 5&quot;/>
                        </coding>
                    </valueCodeableConcept>
                </property>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123557&quot;/>
                            <display value=&quot;Mutagenicity Comment&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Treated as non-mutagenic due to lack of alerting structure&quot;/>
                    </valueCodeableConcept>
                </property>
                <molecularWeight>
                    <amount>
                        <value value=&quot;344.4&quot;/>
                        <unit value=&quot;g/mole&quot;/>
                        <system value=&quot;http://unitsofmeasure.org&quot;/>
                        <code value=&quot;g/mol&quot;/>
                    </amount>
                </molecularWeight>
                <structure>
                    <representation>
                        <document>
                            <reference value=&quot;DocumentReference/impurity1doc&quot;/>
                        </document>
                    </representation>
                </structure>
                <name>
                    <name value=&quot;Impurity 1&quot;/>
                </name>
            </SubstanceDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:13d68d1c-162c-8b6e-80f9-647b0ea97ad2&quot;/>
        <resource>
            <DocumentReference>
                <id value=&quot;impurity1doc&quot;/>
                <status value=&quot;current&quot;/>
                <content>
                    <attachment>
                        <contentType value=&quot;image/x-png&quot;/>
                        <data value=&quot;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&quot;/>
                    </attachment>
                </content>
            </DocumentReference>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:03d68d1c-162c-8b6e-80f9-647b0ea97ad9&quot;/>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;impurity2&quot;/>
                <characterization>
                    <technique>
                        <text value=&quot;Organic impurities by LC&quot;/>
                    </technique>
                </characterization>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;1233444&quot;/>
                            <display value=&quot;Rule-based (Q)Sar&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;negative&quot;/>
                            <display value=&quot;Negative&quot;/>
                        </coding>
                    </valueCodeableConcept>
                </property>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123555&quot;/>
                            <display value=&quot;Statistical (Q)Sar&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;negative&quot;/>
                            <display value=&quot;Negative&quot;/>
                        </coding>
                    </valueCodeableConcept>
                </property>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123556&quot;/>
                            <display value=&quot;ICH M7 Classification&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-ich-m7-classification-local-pq&quot;/>
                            <code value=&quot;class-5&quot;/>
                            <display value=&quot;Class 5&quot;/>
                        </coding>
                    </valueCodeableConcept>
                </property>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123557&quot;/>
                            <display value=&quot;Mutagenicity Comment&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Treated as non-mutagenic due to lack of alerting structure&quot;/>
                    </valueCodeableConcept>
                </property>
                <molecularWeight>
                    <amount>
                        <value value=&quot;459.58&quot;/>
                        <unit value=&quot;g/mole&quot;/>
                        <system value=&quot;http://unitsofmeasure.org&quot;/>
                        <code value=&quot;g/mol&quot;/>
                    </amount>
                </molecularWeight>
                <structure>
                    <representation>
                        <document>
                            <reference value=&quot;DocumentReference/impurity2doc&quot;/>
                        </document>
                    </representation>
                </structure>
                <name>
                    <name value=&quot;Impurity 2&quot;/>
                </name>
            </SubstanceDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:13d68d1c-162c-8b6e-80f9-647b0ea97ad9&quot;/>
        <resource>
            <DocumentReference>
                <id value=&quot;impurity2doc&quot;/>
                <status value=&quot;current&quot;/>
                <content>
                    <attachment>
                        <contentType value=&quot;image/x-png&quot;/>
                        <data value=&quot;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&quot;/>
                    </attachment>
                </content>
            </DocumentReference>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:03d68d1c-162c-8b6e-80f9-647b0ea97ad3&quot;/>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;impurityNapthol&quot;/>
                <characterization>
                    <technique>
                        <text value=&quot;Organic impurities by HPLC&quot;/>
                    </technique>
                </characterization>
                <characterization>
                    <technique>
                        <text value=&quot;Chromatographic retention&quot;/>
                    </technique>
                </characterization>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;1233444&quot;/>
                            <display value=&quot;Rule-based (Q)Sar&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;negative&quot;/>
                            <display value=&quot;Negative&quot;/>
                        </coding>
                    </valueCodeableConcept>
                </property>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123555&quot;/>
                            <display value=&quot;Statistical (Q)Sar&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;negative&quot;/>
                            <display value=&quot;Negative&quot;/>
                        </coding>
                    </valueCodeableConcept>
                </property>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123556&quot;/>
                            <display value=&quot;ICH M7 Classification&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-ich-m7-classification-local-pq&quot;/>
                            <code value=&quot;class-5&quot;/>
                            <display value=&quot;Class 5&quot;/>
                        </coding>
                    </valueCodeableConcept>
                </property>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123557&quot;/>
                            <display value=&quot;Mutagenicity Comment&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Treated as non-mutagenic due to lack of alerting structure&quot;/>
                    </valueCodeableConcept>
                </property>
                <molecularWeight>
                    <amount>
                        <value value=&quot;144.173&quot;/>
                        <unit value=&quot;g/mole&quot;/>
                        <system value=&quot;http://unitsofmeasure.org&quot;/>
                        <code value=&quot;g/mol&quot;/>
                    </amount>
                </molecularWeight>
                <structure>
                    <representation>
                        <document>
                            <reference value=&quot;DocumentReference/impurityNaptholDoc&quot;/>
                        </document>
                    </representation>
                    <representation>
                        <type>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/substance-representation-format&quot;/>
                                <code value=&quot;SMILES&quot;/>
                                <display value=&quot;SMILES&quot;/>
                            </coding>
                        </type>
                        <representation value=&quot;OC1=CC2=C(C=C1)C=CC=C2&quot;/>
                    </representation>
                    <representation>
                        <type>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/substance-representation-format&quot;/>
                                <code value=&quot;InChI&quot;/>
                                <display value=&quot;InChI&quot;/>
                            </coding>
                        </type>
                        <representation value=&quot;1S/C10H8O/c11-10-6-5-8-3-1-2-4-9(8)7-10/h1-7,11H&quot;/>
                    </representation>
                </structure>
                <code>
                    <code>
                        <coding>
                            <system value=&quot;http://terminology.hl7.org/CodeSystem/CAS&quot;/>
                            <code value=&quot;135-19-3&quot;/>
                            <display value=&quot;2-Naphthol&quot;/>
                        </coding>
                    </code>
                </code>
                <name>
                    <name value=&quot;β-naphthol&quot;/>
                </name>
            </SubstanceDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:13d68d1c-162c-8b6e-80f9-647b0ea97ad3&quot;/>
        <resource>
            <DocumentReference>
                <id value=&quot;impurityNaptholDoc&quot;/>
                <status value=&quot;current&quot;/>
                <content>
                    <attachment>
                        <contentType value=&quot;image/x-png&quot;/>
                        <data value=&quot;iVBORw0KGgoAAAANSUhEUgAAAI0AAABACAIAAACoSmOYAAAALHRFWHRDcmVhdGlvbiBUaW1lAFR1ZSAyMCBKdW4gMjAyMyAxNDoxMjo1MiAtMDAwMERGGoMAAAAHdElNRQfnBhQNEAI7ulTcAAAACXBIWXMAAAsSAAALEgHS3X78AAAABGdBTUEAALGPC/xhBQAAD1RJREFUeNrtnXlUVFUcx0EpPWYe9XQQcwVUVAwUCZcE9y3c0EI7YorlkllouO9iWgqlpmZqbmVpillokYpbonTSg4Z10sIKsdRcchcznT4zd7q93jyGYWbeDHbm+wdneO/y7u/+lu/v93vz7sPbYDB4eeBUoFJvb28Hhwm7yAE+7l7U/xAot6CgICMjIysr6+TJk/waEBAQFRXVokWLChUqyGF5eXlbtmx57LHH2rVrV6pUKeUVjh49un379vbt24eHh5sPGTxwNk6cOBEXF/fQQw898sgjYWFhjRo18vX1feCBB5555pmcnBw5bP/+/ej/ueee++uvv1RXWLJkCafmz58vj3jiyck4ffr0iy++uGfPnlGjRmGYwMBAtPzrr7+mpqYmJycTQ+vWrfP392ckMVSuXLkHH3zQ8iI+Pj6c5ee/R9y9rv8V7t69izFgvKSkpIkTJ0pFV6pUKTg4uGzZshx844033nzzTU3zWEGpYo32wDpgvI8//jgkJGTw4MHKaPAyJS0OPv7445988gnDxBHDf4sFCUl38ojT7ETmhGfdrSgzbt686ZZ5s7Ozz549Gx0dXa1aNcuzZKkuXbrAgV9//bU4goUILFURAThYunRpolMecQ7vEenEsp+f37hx4+rXr+8WHQn88ccfK1asSE9Pj4yMfOGFF6pWrerK2c+dO4dya9euXdiAunXr8vPUqVNeJpLEQpmZmWPGjMEqcgwHv//+e/FBHnTUTj/88ANlCXohovPz87t160apg4KqVKniSgWJZaelpS1cuBBTUewi0s6dOxMTE3v16qWiIP1w/fp1QqRixYqFDRCnkFAe+fHHHy9duiQpjg8E040bNyAnSkQ5zP4FXLt2bdmyZatWrSJJkhtjYmI4gi9v3Lhxx44d1DyxsbHKmXTF4cOHsRC++cQTT7z11ltkCBqXBQsWJCQkbN68edKkSVjOBWLgEPfu3bPCulevXuUnBYWXySR37tzp27fvlClTUJQ0FWH0wQcfTJs27c8///z3L+3oD7j61q1b0QgU9/rrrxPsyrO5ubnEU61atXr27AkRy+MsQI9mhUp3/PjxTAf17969WzULRzp16lSnTp1Zs2adP3/eWZMyC+FreRwfJZ4o6u6ZYDmAOhCd4998/vLLLzEPDm05bPny5VwHP5NHim0nWuXnn3/+0UcfxVW/+eYbzTEYEs6BA2vUqDF27Fjo2FkKUuLy5ctQblBQEI0kjSG/ag67cuUKeqlXrx5BtmHDBmRzfGpsYNmcgmPHjqGZpk2b/vbbb5oC49wM+Pbbbw2mPrdMmTJDhw61vNTbb7+NnSAGeaRoO0m/wB/nzp1LH9C6devt27ffvn1bjoFPqTWVR4SCVq5cGWwCfEjIO8c+Jj+gum3WrBkZe/r06VRQyrNUnjCw6k/wFRwLHT311FNfffWV4zLIkGKZ69evh2b5DFONHDkSFSOVSvuMh5k59dJLL4lTTrYTwACwfMeOHQMCAiAQlecSVTTebdu2pRW3/FuUSBGIgnr37r1v3z7HFZSVlcXaKHzj4+OPHDmi0sXBgwcRhhmxluXfopoOHTr4+/uzip9++slBSVDL559/Tp0Cr/JBaqNly5YVKlR49dVXc3Jybppw/PjxefPmPfzww1RbVF5SGEoGTTuJ+0bFsxNE179/f6EX4tqgiLALFy6Qn6g1iTCoWZMKBHDh7t27k0WgwV9++cU+vZCKSLkwWJs2bYgnlSU4y8XxJCaC+gtLh7du3Xr33XdDQ0PDw8MJdyo0zWHEivWESuk8bNgwAnrgwIGHDh0ikuQpvKdHjx7ly5fnLO6LtCwck/D5wIEDctiePXvKlSs3ZMgQSypeunQpdlq0aJFNdiKiZ8yYgfd17tyZkleZOfmMYWAe0gPpTpOOVUCtq1evbty4cZMmTdAUF7fdQnDmO++8ExYWBoWSk1QBDctRcDZs2LBVq1ao3grBSk+iGibb011R7ND8WY4UGUizWGCxU6dOxSGoXHAXTe+k1EY/UBy2IYJHjBixZs0aoSWll6empmJjS4cQtwGVEa9tJ7xjy5YtERERVHSYgXpfeRZ/GTBgAIscPnw4acl2dQO4EQVBg127dkVBRRaB+Bo1GxohoEkweLHyLNGwbdu2qKgojGSZqDS1zwWlZnft2kXwceXRo0f//PPP0pYsXwimEo/p8DBKfKbDIVB0kestMEEpgICmB1iBhp0wAxTv5+dHXEsyFUARRBgLw01YpN2lNvU6jkwvrCoa75ogf4UtqS19fX0tkz9Tk6gGDRok3CU7O7vISQW9qHSE6mkBoUFyDNWwLEBUvEeOEV8IoRY0oGpFbIdYoB168zIovOb3338n+0Gm9Bx79+5VroecuWnTJjidCKMasSyoigsU9OGHH1LCkm+Sk5NVIQtF0OjB75GRkcyLmpRnYS16JggZxdEA2Oibgso0dZSfn5+YmMjC27VrR/gqqUw4BI7LdLAI2druJUsBVO5oq50MJn957733yDdENGUGdbZyEEUUbTP1Ag2s5Aen4MyZM3gGXI/GKSlZhuAW6iIkIRWp0tjFixcXL14M82BgGFwlp4PIzMzEHoTvyy+/LL7Qg2YpHYmh6Ojo9PR0Yb/CjK0rjHaCeeLi4pCGvIerKk/j15RYgYGB8Die69y55WpxUhREU4zDwod8QFO5ubnKwbA8SZtKgSAj1IpMRfaBzEQzhJfgCtBpiAl4hnAXK8WF3jDaCZanjoLolG6CX69du5YSC+4m1FQ9rBMhJkVB8FvNmjWJaapq1RhK2H79+uFJGPLw4cN6KwXOIIwoml955RXRwBr+W4O43lRGO8Fpo0aNEsoS1QiMjF8TRqQBze5VDzA7PSPhq1KZuI9Ab7B161an3PWxBXAMxCtu8CghsouVTlEnGO+Xy5uG4vY2RIxqCCMSBj+9LJ5R0glcH1Mpvxzbt28fGZGGkRzWp08f5cM6egCmLVu2bPXq1YVOBMV5/fcBLvHB8ps9vWH+XqN06dJSFOqFlJQUumihF4MLH/DzNkH+WqZMGdr1mJgYK9+8OQsQe1JSUqNGjWA8TWGUQrpMIRJGO+EdyrnrmODlWgtporkJrpkLDeTl5VF5unfJhcEYvyLG3S2J+0H4uuyb3+LCKJYyJSjh+gAvjGpcP7tM4O4SRgVjPJGcXJ8YSxqEhaAWdwuiDaN5Spngbkk8sAajeURb4G5JPLAGo53EbUF3S+KBNRjtBDUrn/PzoATCk5/uD5jNU3IKUA80Yc5Pnj63hMMcTx7eK+Hw9Ln3B8z1nhvv1nhgCzz56f6A+X65u8XwoAiY85Onz/Vy0xeANsLc55ZkEV0GlFBi75+ZeU/KZzA9y3fhwgV3C2bE9evXxVZWFwAj+Zjg7kVrw2wneT8CcdPS0mJjY8UT7i6QQDxF4/XP4yLKyBa7VsQD7voJYH6gx8cnOjq6VatWUg9KtbgdZt5TmqRly5ZhYWGjR48eNGjQ0aNHXSCEwfSQqZfJZnfu3JHHO3ToMHDgwBUrVnTv3n3jxo23bt3SVYbhw4e3adNG/OrzD+RZ99qslNgdf+nSpYKCAnGoZs2aKSkpa9euvXHjRu/evWfOnHnu3DldFST0cu3aNSj38uXLUpLKlSsnJCR8+umnoaGhY8eOjYuLO3DggE7VqSpDnz59Wmw612/hxQN2gliqVKnSv39/5bZng+lRYazVuHHjZs2apaamFraly3GgjoyMjCeffBIXqV279oABA7Kzs1XPcB88eBA2rlat2siRI48fP+7E2VUbXc6fP4+bBgUFde7c+ezZswbFZhidlm8LjO6MPdLT09u3b+/v7z9t2jQhnER+fv6UKVOQu2/fvocOHXK6BFx/xIgRAQEB8fHxGOOLL77o0aNHgwYNJk2apNq+gqNs2LChdevWCDNnzhxbth/ZAmkDTPXZZ59FRUXVq1eP64tH2O8poJsVisa/D9ZAfQsXLgwODm7RosVHH31EMlCOQ4PQDtqcOnWq6klmu/f0XLx4cdGiRU2bNkX1FC9y6yQEKDaPRERECPpV/hXmSU5Orl+/vqaccn9ZceU5ceIE+al69erPPvusI5tndILZTvKB6dzcXCoIPz8/MpNyM6nB9Pw36kOt4eHh69atk9vk7PA4RhI3RHDdunVfe+01zW1fxFlSUhKeAf/s3LlTdXHUOmzYsKpVq8bExChfGyHtRD1iozxXrlyZP38+E0VGRpILXfYIe7HgpdS1/Lx///5u3brVqlUrMTFRteHpzJkzYjMzFbPcWCE2Mti4nVG8gYJUxM/vvvvO+uAjR45Q8jF4yJAhqk2DzEWUU0xjLc7KZ/Ztdxdicf369ZgHI0F0qr1yJQqF7qOm9Fq2bJnYCbRy5Urlfm5AosJORMP48eOV232t60jsV2zYsCEF97Zt22wUkWuSNogq0icuotqzLXbYwZycnTdvnnJflHVhWMLTTz/NEgYPHuzcwkQPFPFegry8vHHjxlGDYRXVPrXbt2/T0whDYlHr+9cJuM2bN9OZkf+WLl1qxzs/SFq4S0hICHmLpKXaCYoHzJ49OzAwkLOYTVy/MDtRKE2ePBkLdezYEc50k+aLB5ve8wG9kAZw2DFjxqi2+UGDYpsD/MNnzT+H6Pr161ejRg1M7uC20VOnTs2YMQO/QcWW+xtzcnIoHX19fWm2NLco4Vvvv/8+vkKzgbtQyLhQ1Q7B1vcb4b9ED+6s+TKhrKwsakXLNwyJZAb7U2qT85y1De/YsWMUn2Knu3j1iATmwX5EieVcmZmZiEFF57i7uB7Few8V9CKKCHrSHTt2WNE7OZmimRQtXm6kqp6dAno+SnNRMVp/1RUcQDdGMdKzZ0/cRTdl6gh73usGj+HOLBuSUb1gQoA6kLIedoInddrwLCDe+BcaGkqahNAs32kEDTAgzIRVq1bpd0tFb9j5/nJS9KZNm2iAKN5mzpwpGe/kyZMTJkyAW2JjY+WLGOx4XYItAsgygYJTvASHXoJJRQPET0KH8gfW5ayu7uICOPSeeQqnlJQUMhb8Rue7fPnyBg0aRERErF69WtZjOm05tmyuST/U2VgrPj4+IyMjISGBz3369HHKW9zcDif8PwCob+jQoX5+fpTFxJbyrpLUo9NvjmneBKHJS0tLo9OqVKlS8+bNSZCqtu/+hfkV2g5CvMqgfPnyYn+8gLgyp7y9vZ3+fKBSbNVXElTb2dnZQUFBZFBdv2pwJZxjJw/0hucx2PsDfwPULn7gJ1Dc7AAAAABJRU5ErkJggg==&quot;/>
                    </attachment>
                </content>
            </DocumentReference>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:03d68d1c-162c-8b6e-80f9-647b0ea97ad4&quot;/>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;impurityPropanol&quot;/>
                <characterization>
                    <technique>
                        <text value=&quot;Impurity content by LC-MS&quot;/>
                    </technique>
                </characterization>
                <characterization>
                    <technique>
                        <text value=&quot;UV spectroscopy&quot;/>
                    </technique>
                </characterization>
                <characterization>
                    <technique>
                        <text value=&quot;NMR spectroscopy&quot;/>
                    </technique>
                </characterization>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;1233444&quot;/>
                            <display value=&quot;Rule-based (Q)Sar&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;positive&quot;/>
                            <display value=&quot;Positive&quot;/>
                        </coding>
                    </valueCodeableConcept>
                </property>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123555&quot;/>
                            <display value=&quot;Statistical (Q)Sar&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;positive&quot;/>
                            <display value=&quot;Positive&quot;/>
                        </coding>
                    </valueCodeableConcept>
                </property>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123556&quot;/>
                            <display value=&quot;ICH M7 Classification&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-ich-m7-classification-local-pq&quot;/>
                            <code value=&quot;class-2&quot;/>
                            <display value=&quot;Class 2&quot;/>
                        </coding>
                    </valueCodeableConcept>
                </property>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123557&quot;/>
                            <display value=&quot;Mutagenicity Comment&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Control at or below qualification threshold&quot;/>
                    </valueCodeableConcept>
                </property>
                <molecularWeight>
                    <amount>
                        <value value=&quot;245.32&quot;/>
                        <unit value=&quot;g/mole&quot;/>
                        <system value=&quot;http://unitsofmeasure.org&quot;/>
                        <code value=&quot;g/mol&quot;/>
                    </amount>
                </molecularWeight>
                <structure>
                    <representation>
                        <document>
                            <reference value=&quot;DocumentReference/impurityPropanolDoc&quot;/>
                        </document>
                    </representation>
                </structure>
                <!-- not in CAS -->
                <name>
                    <name value=&quot;1-(Ethylamino)-3-(2-naphthyloxy)-2-propanol&quot;/>
                </name>
            </SubstanceDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:13d68d1c-162c-8b6e-80f9-647b0ea97ad4&quot;/>
        <resource>
            <DocumentReference>
                <id value=&quot;impurityPropanolDoc&quot;/>
                <status value=&quot;current&quot;/>
                <content>
                    <attachment>
                        <contentType value=&quot;image/x-png&quot;/>
                        <data value=&quot;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&quot;/>
                    </attachment>
                </content>
            </DocumentReference>
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
    </entry>" id="Bundle-bundle-product-impurities-pq-ex2-sub">Bundle</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/bundle.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/bundle.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/bundle.html#tt-uml">R6</a>]</span><div class="debugOff">id: bundle-product-impurities-pq-ex2-sub</div>
<div class="debugOff"></div>
<div class="debugOff"><span title="
<Bundle>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-product-impurities-pq&quot;>">Profile: </span><span>http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-product-impurities-pq</span></div>
<div><span title="
<Bundle>
    ...
    <type value=&quot;collection&quot;>">Type: </span><span><span>collection</span></span></div>
</div>
</div>
<div>
<div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)"><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: substance1)(fullUrl: urn:uuid:03d68d1c-162c-8b6e-70f9-647b0ea97adb)

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;substance1&quot;/>
                <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tabulateSubstanceImpurities&quot;>
                    <valueBoolean value=&quot;true&quot;/>
                </extension>
                <manufacturer>
                    <reference value=&quot;Organization/substance-manufacturer&quot;/>
                </manufacturer>
                <name>
                    <name value=&quot;Stelbatolol&quot;/>
                </name>
                <relationship>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-impurity-origin-pq&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-origin-local-pq&quot;/>
                                <code value=&quot;enantiomer&quot;/>
                                <display value=&quot;Enantiomer&quot;/>
                            </coding>
                            <text value=&quot;Enantiomer of API SM&quot;/>
                        </valueCodeableConcept>
                    </extension>
                    <substanceDefinitionReference>
                        <reference value=&quot;SubstanceDefinition/impurityEnantiomer&quot;/>
                    </substanceDefinitionReference>
                    <type>
                        <coding>
                            <system value=&quot;http://temp.hl7.org/fhir/substance-relationship-type&quot;/>
                            <code value=&quot;impurity&quot;/>
                            <display value=&quot;Impurity Of&quot;/>
                        </coding>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-type-local-pq&quot;/>
                            <code value=&quot;CH-IMP&quot;/>
                            <display value=&quot;Chiral Impurity&quot;/>
                        </coding>
                    </type>
                    <amountString value=&quot;ND&quot;/>
                </relationship>
                <relationship>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-impurity-origin-pq&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-origin-local-pq&quot;/>
                                <code value=&quot;process&quot;/>
                                <display value=&quot;Process Impurity&quot;/>
                            </coding>
                            <text value=&quot;Step 1a Process Impurity&quot;/>
                        </valueCodeableConcept>
                    </extension>
                    <substanceDefinitionReference>
                        <reference value=&quot;SubstanceDefinition/impurity1&quot;/>
                    </substanceDefinitionReference>
                    <type>
                        <coding>
                            <system value=&quot;http://temp.hl7.org/fhir/substance-relationship-type&quot;/>
                            <code value=&quot;impurity&quot;/>
                            <display value=&quot;Impurity Of&quot;/>
                        </coding>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-type-local-pq&quot;/>
                            <code value=&quot;PR-IMP&quot;/>
                            <display value=&quot;Process impurity&quot;/>
                        </coding>
                    </type>
                    <amountString value=&quot;Range: ND-0.2%&quot;/>
                </relationship>
                <relationship>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-impurity-origin-pq&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-origin-local-pq&quot;/>
                                <code value=&quot;process&quot;/>
                                <display value=&quot;Process Impurity&quot;/>
                            </coding>
                            <text value=&quot;Step 1a Process Impurity&quot;/>
                        </valueCodeableConcept>
                    </extension>
                    <substanceDefinitionReference>
                        <reference value=&quot;SubstanceDefinition/impurity2&quot;/>
                    </substanceDefinitionReference>
                    <type>
                        <coding>
                            <system value=&quot;http://temp.hl7.org/fhir/substance-relationship-type&quot;/>
                            <code value=&quot;impurity&quot;/>
                            <display value=&quot;Impurity Of&quot;/>
                        </coding>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-type-local-pq&quot;/>
                            <code value=&quot;PR-IMP&quot;/>
                            <display value=&quot;Process impurity&quot;/>
                        </coding>
                    </type>
                    <amountString value=&quot;Range: ND–0.3%&quot;/>
                </relationship>
                <relationship>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-impurity-origin-pq&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-origin-local-pq&quot;/>
                                <code value=&quot;starting-material&quot;/>
                                <display value=&quot;Starting Material&quot;/>
                            </coding>
                            <text value=&quot;API Starting Material&quot;/>
                        </valueCodeableConcept>
                    </extension>
                    <substanceDefinitionReference>
                        <reference value=&quot;SubstanceDefinition/impurityNapthol&quot;/>
                    </substanceDefinitionReference>
                    <type>
                        <coding>
                            <system value=&quot;http://temp.hl7.org/fhir/substance-relationship-type&quot;/>
                            <code value=&quot;impurity&quot;/>
                            <display value=&quot;Impurity Of&quot;/>
                        </coding>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-type-local-pq&quot;/>
                            <code value=&quot;ST-IMP&quot;/>
                            <display value=&quot;Starting material, forced degradation product&quot;/>
                        </coding>
                    </type>
                    <amountString value=&quot;Observed only during stress studies&quot;/>
                </relationship>
                <relationship>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-impurity-origin-pq&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-origin-local-pq&quot;/>
                                <code value=&quot;intermediate-material&quot;/>
                                <display value=&quot;Intermediate Material&quot;/>
                            </coding>
                            <text value=&quot;API Process Intermediate&quot;/>
                        </valueCodeableConcept>
                    </extension>
                    <substanceDefinitionReference>
                        <reference value=&quot;SubstanceDefinition/impurityPropanol&quot;/>
                    </substanceDefinitionReference>
                    <type>
                        <coding>
                            <system value=&quot;http://temp.hl7.org/fhir/substance-relationship-type&quot;/>
                            <code value=&quot;impurity&quot;/>
                            <display value=&quot;Impurity Of&quot;/>
                        </coding>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-type-local-pq&quot;/>
                            <code value=&quot;INT-IMP&quot;/>
                            <display value=&quot;Process intermediate, forced degradation product&quot;/>
                        </coding>
                    </type>
                    <amountString value=&quot;Observed only during stress studies&quot;/>
                </relationship>" id="SubstanceDefinition-substance1">Substance</span></a><span class="summaryShowsOff"><b> - Stelbatolol</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substancedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: substance1</div>
<div class="debugOff"> fullUrl: urn:uuid:03d68d1c-162c-8b6e-70f9-647b0ea97adb</div>
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
<div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: substance1 fullUrl: urn:uuid:03d68d1c-162c-8b6e-70f9-647b0ea97adb)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: substance-manufacturer)(fullUrl: urn:uuid:062bf235-44e2-55c4-9213-bbe5e12d5620)

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
<div class="debugOff"> fullUrl: urn:uuid:062bf235-44e2-55c4-9213-bbe5e12d5620</div><span class="summaryShowsOff"> - AAA Molybdenum Products, Inc.</span><div class="summaryHiddenOff">
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
<div class="htmlTableRemove"><br style="line-height:6px;"><div class="indent-no-border"><span>Table 1. Potential  Process-Related Organic Impurities</span><br><br style="line-height:6px;"><table class="rounded-corners white" id="tabularModeTable" style="width:70%;">
<tr>
<th>Chemical Name / Descriptor</th>
<th>Structure</th>
<th>Molecular weight (g/mole)</th>
<th>Category</th>
<th>Impurity Characterization Method Summary</th>
<th>Levels Observed in the API</th>
</tr>
<tr>
<td class="centred">R-enantiomer of stelbatalol</td>
<td class="centred">
<div><img src="data:image/x-png;base64, iVBORw0KGgoAAAANSUhEUgAAAKsAAABLCAIAAACAzuDMAAAALHRFWHRDcmVhdGlvbiBUaW1lAFR1ZSAyMCBKdW4gMjAyMyAxNDowNzoyNiAtMDAwMJ1rIw0AAAAHdElNRQfnBhQNCBvdymRFAAAACXBIWXMAAAsSAAALEgHS3X78AAAABGdBTUEAALGPC/xhBQAAEKRJREFUeNrtXXlYVNUbVkRQQEVE88EEM1ArVNInIxYFcwQBJdmDAFlENM21yCfUwj1EQxYRFZEwRUlD0VjENSHBpYTUZBMRSMUSRDIC5/f+5uj1NoMwy70zwNz3D57LmTtnfb/ve7+Zc+505/P53TgoMVQU3QEOCgbHAGUHxwBlh6qiO8DhP2hsbNy7d+9ff/01e/bs/v37y6FFzgd0IJw4cWLWrFk3b9588uRJYGBgSkpKS0sL241278i5QE1NTVFRkbW1tarqM19VV1eXl5dnYWGhpaUlTg2YzeLiYm1t7bFjx5K3YE4rKiqGDBmirq6u6PH9p59RUVEw/Tlz5lhaWqLk2rVr0dHRDQ0NwcHBZmZmLLbN78BITU3V09N79OgRVXLlyhUdHZ3ffvut3fdWVlZ6eHi8/vrroIuxsTEYcOrUKZTfv39/+PDhqEfRg3uG2trajRs3fvDBB3D+//77r9CrGRkZrq6uISEhGA5LHejQUeDp06fNzc1CfBXHMcJ0fHx8YFLHBTh58iQciZ+fX0lJSY8ePUApoWoVAgwEq+7r64uF37Fjh6enJ1wd+rZv376qqipyj42NTVJSEii7YMECOIn6+nrGu9GhlWB3AXr16kWV0K/bwPfffw+jwcIPHToU//bp02fNmjUQWffu3dPV1SU1K3ZoZ8+e3b59OzoWHh7+xhtvkMK0tLTExMTRo0c7ODjQhxwUFGRvbx8bGwuVAB7jWkWFMdPt6Az4559/tm7dSmI2/sW6wjGQ9SsrK/v777/p9/fs2dPAwAA3nz59+rXXXiPLT6CpqYkZxwWigGKXv7S09Jtvvqmurp47d+6UKVNI4aVLl7Zt2wavEBoaOn78eNF3QbisXbv28uXLMTEx6enpkAvjxo1jpD8dmgFgOlQxYiHc4/8jlooKlCD/uXTduXNneXk5vDr5F8xA+vTZZ5+BBAiuEBCK7r4w0Hn0GYLf2dl506ZNhNZw+FjUwsLCgIAAqIG2a8Cq79q1C65i1apVJiYmEIlghqzdUrQSagsHDx585ZVXEM6bn+PixYv9+vUjShBL3iIC8kbEVEdHR6HayKsIBIMGDUI98hwIugpVO2PGjBUrVmDJSSEcWHx8vK2t7ebNmxHgJaoQ92/ZsgXBIi4uDvXI0rcOrQQJ4Nt7PAeuqXI4cxURkJcmTJgA0YfAT68HtIABEXciz/7DvpHcw3V/9dVXYWFhxDnBsaE/N27cgANYvHgxBIFEdeL+RYsWIT6ihg8//PDMmTPS909q7iQnJ2dmZrJqOgcOHBg4cKBQNojBt5sN3r5928jIaOXKlVR+lZCQMHjwYMzUw4cPUafcfACs38XF5dtvv8UFKSkqKkIUd3d3P3/+PCNNgEw8Ho/ERykgvQ6AkUGmsWo9sFesFr0EVo640K6UgwaEa126dGl2dvbIkSMhuyAbIREmTpwIJQhfwpeXG0DowSjMzc2JqoXyLygo8PLycnJyoj7mkg6EUhiLhYUFfFtTU5OUkyx1DzAASoWxBEtLS9hu7969qRJkxrAnaL1234sY+dZbb8E+EHeRbq1bt45obLiQyMhIZAqs9pwOrD1cES7AAH19faQAAwYMkL1a5DsYmre3N1l7qROcDp0L6ApAL9HS0jI1NRXz7VhmTLdQIdJrNzc3hQynb9++Pj4+TNWG5YcI6CbzZxudQAlyaBUIiDLGkWf1KHogHBQMjgHKDo4Byg6OAcoOjgHKDo4Byg6OAcoOjgHKDo4Byg6OAcoOjgHKDo4B8kNLS8vjx4+Zqo1skZK9HukZQDbyMjWergqybYlMVH19/YIFCxISEhjZV2FlZfXRRx8x0EOp34lhkK+92UNNTc2jR49YbaKyslJowzGzIBtDyIaU/v37h4SEFBUV+fv7nz59Wsaahw4dOmrUKKoJqa2xx5dffinpexobG0HkzMzMGzduqKmpvfnmm4w7g7q6uujo6KioqB9//FFTU9PIyIjZ+oHa2trNmzfHxMRkZWUNHDhw2LBhjDdx586d9evXl5aW/vrrr/r6+np6erq6ujY2Nvi7Y8eOn376ydDQUEdHR5YmUPmGDRtu37599erV4cOHC22pEguSbis7duyYk5PTkiVLbt26BTr7+fnBF+Xm5jK1sa65ufnAgQMzZswIDQ2trq4uKCjw9fWF0WASmWriyZMnu3fvRhPh4eHgwalTpzw9PRcuXFhcXMxUE4j3sbGxDg4O4DE5uuTq6rp8+XLq8Besds+ePdOnT//6669xgxRN4F3kuBnqQXxJSUlxdnZevXr1/fv3JapHAgaAZVgJTJbQesNMMTxwory8XMaJy8vL8/DwCAgI+OWXX6hCxJrU1FQXFxe4qz/++EPGJk6ePOnu7v7xxx///vvvVCECQVJSEmYTnJBuPShAoB09ehQT8vnnn8M0qXLCCUdHR3gdXJPCu3fvrlmzBha1f//+pqYmMZuAkWC90duwsLB79+5R5X/++Sf6j3KMBSwXszaxGIB5X7VqFXq/b98+NC96A4YUFxdna2sbGRlJ39orPioqKpYuXQq7hI9p9QYsDJw2hgfzlW6HPGJWcHAwGEaOkIoCs4k5RR/IsW0pmgBx4RRhJBcuXGj1BnACzHBzc4PZUE3AlaJjeBcMoN0mzp8/jyZw/8s2TMOTffLJJ2D5y4YphHYYAGeFGbe3t4ezevjwYds3I+zBdcMXHTlyhNqmjXESKUQBVoISavc0PBjivZ2dHTks3XYTCHuLFy/GZOXk5Ii/MDAOBEsEYDjMdk2tsLAQ8ztr1qz8/HzRVzGuVmuAaIWLAnsQwqihvQwIbWQV6aENnMDULVu2rKysrNUaEHY//fRT2EBGRka7QyauDlRoN7S1xQCQCBYD9y5RgLx48SIi95YtW8i/6enp8A3009oYIQIk6MIXLH9gYCCGLdHp6HPnznl5eSGzardj4B/8FrwXfBjdYbYLRG6sB5wqVVJVVYU1xljef//9oKAg6Dj6RE2dOnXTpk3iRxB0DKGNdAyxgBRCYm/btg0rhymi34xZ2rp1KyYNr1IRpF3AzBITE0FKsL8N622dAYiRmF+YGpIW8WeN3jYVsOPj46E3J0+eTEUm6Altbe2SkhJyJz1Yig/YYnJyMgwCYhsm3uo9cJgYwuzZs8V53oAosJyXL18m5nj9+vUxY8ZYWFggiqNdKBXkDjt37iR33rx5EzdI10RERAR4gNSAmh9IOXqYS0tLg2CEiiQ2IylAr5UrV4IHkBqtRnBhBhCHiSbhMIW8t3TA2JClIHldt24dKYGbHTBgAPy57JVjeIjcM2fOhKHTtQ8cJvwK+AHXKnsrIAGPx0Mr9AmBURoYGCCEy14/jGH+/Pkw/RMnTtDLL126hGCEVAtRQ8YmEG7AWlQlelDpBQPggojChDqVNKNoA1CIZmZmCQkJr776KhkJgwwggP3NmzfP29sbnhkMhhoFg8E8jIiR+hHCRo4cKTR3MNO3334b5sXUKM6cOQOFiCQFihURB0aPURw+fJip+vkCqYH1hZCChVCFLxiAXAU0YYTUdCB0jR8/HtYDApqbmyP+wSczywCC7Oxs5GAIllCj1PlcRgDDMDIyElUqLgIw2BAJbdOmTbO2tgaPJT1QLA5gFQhkiDuUjnlx5AArBIHD0kEwFRWVjRs3YmCQS0h/+Swc25syZYqpqSnkHoIOszUjfHbv3l10ZlRVVZk9OYkKoXD5AqcNGc/4FAG9e/eGv4QwROIKg+xG/16gT58+7J0DBLv19PTgMxE+4U4ZOewiCi0tLcaXH4DoU1dXh+agF0IcQJqx8VmyugCMVwvvi3AGtYRrNTU1agnk9O0w+eIABIelrl69mlgV462AZ1DXjFeLKKahoYEoSS88duwYGAB5yHhzbDhIAGuPvKm2tlaoCdYZgMWmu8q1a9fyBQkuG+MsLi6OioqCdTJbLSwyPDw8JyfH398/NzcXOgaeLDg4GOqdPPuvU4P1s8PGxsYQaFR8GTJkCBbp+PHjkj41QxxA5ujr6z9+/JjxyrHSBw8ehIjx9fUFp5Hcwp6QfbA9e8yiVb/LOgOsrKwmTZpEb9vOzg5yl4224JaRW7PBgG6Cpzh99913DQ0NCKiamposSRn5g/UokJmZidyDvjsK6TuPx6MemsgUkKCXlZVhheCl2RsOxGa/fv26zPJ3k4MPQHqWn59P39GGRSooKGB8Zw6aMDAw0NHR6du3L9uD6kpgnQEqKirkYWAvmlRVZWOP4a1btw4dOoSLiooKExMT+lPHOLQBeXgzvuDbDpKJAg8ePGCjFTgVa2tr8mQNSEL4ajkMrQuAdQbA+hEIpk6dSowef0EFJO6M+4Dy8nLyfSNIAPnJMUBMsM4AZOfa2toxMTHQz90EQQFKbcmSJYw35CYA28PpemCdATDKXr16IZ+mHguOCzgAlj754iAp5PGpMBab/rxDVp/tL/RVDcezdsE6A5CkCSV+T5+DwVZqa2vDwsJ4PN60adM8PT0zMzNJOZxNYmJiREQE/easrKzly5dL/RDOLgbWGTBq1Ch/f381NTWqZNCgQX5+fgz+kFZlZSXZZDx9+vSAgIDBgwfPnTt3/fr15NVz585lZGTQ7y8sLExNTe0IPzMiZ5Dtu0KFrOuACQLQS4YNGxYZGclgE1988YW6uvoPP/xA9L+Xl5epqemiRYsmTpxobm6uJgD9/p49e4r5WyUKx9mzZ9Hb9957T/aqkJSZmJjQH9FL0OnPDt+5cyc7O3vhwoX09A9JgaGhYXJy8rNB/vc3WTr4h0V8wfOiyTViaHh4eGhoaE1NjYzVwkgQ+8gjjenP1u70n2+XlpZCZ4wePVqoHI4nNzeXjByW9O6775Ixgw1VVVWIFIru+EsBM7127dqDBw+wWtbW1hjI7t27Edcgcby9vTU0NKSrFpKIUL+urg5xcNKkSaS80zOAfLgkursJJeRoM/m+ADNItsUhIkAxkGcyd0xYWVmB1kFBQc7Ozq6urpqamvPnz4fEiY6O9vX1DQwMtLGxka5mTEVaWtrevXvfeecdR0fHZ6WM70WUM0pKSnR1dYX2WQN2dnZkz11wcLCDgwP9pdjYWGNjY/GPXigE169fx8JjCFCyVGFeXp6Pj8+8efOk2NCbn58PSQ5iXb16lV7e6RkAXtvb28+cOZNe+PPPP8PPHzlyhC9gANhAfxU6tOMzgCAnJ8fd3X3ZsmXUqVykMPv37yfHRsU8RwupBAUAj5Keni76aqdnAF+ws3bMmDFwmJivCxcuxMfHGxkZwVuSIzK44PF49PsjIiJGjBjRKRjAF5x137VrF5Yc3aZOpUElIN2Fb0tKSmrjYE9DQ0NcXBxSZbi9l53J7AoM4AvOBcM9jh07dty4cWZmZlFRUdTR1Q0bNiBToN8MG/Lw8JDxJ7rkjOrq6hUrVsCODx06RB3+Iof7UAifJ/qWo0ePwjWGhIS0fS6vS30+X19f39jYKM4PEXVSwNtBD2LJEM6pT1mysrKamproP1N65coVmD6mAkoCSVDbdXYpBigJkMts374dUgYJDv13VYG7d++CImAARJ+Tk5M4tXEM6JSAiElISID1IzPEYmtoaEANIM07fPiwpaXlnDlzxN8ewTGgE6OiogKKB2mCra0tVDDCH2SBoaGhRJVwDOj0yMvLS0lJgeijPuaTCBwDlB2d/pshDjKCY4Cy43/HlYwQ/A2uywAAAABJRU5ErkJggg=="></div>
</td>
<td class="centred">295.80</td>
<td class="centred"></td>
<td class="centred">Enantiomeric purity by LC; Mass spectrometry</td>
<td class="centred">ND</td>
</tr>
<tr>
<td class="centred">Impurity 1</td>
<td class="centred">
<div><img src="data:image/x-png;base64, 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"></div>
</td>
<td class="centred">344.4</td>
<td class="centred"></td>
<td class="centred">Organic impurities by HPLC</td>
<td class="centred">Range: ND-0.2%</td>
</tr>
<tr>
<td class="centred">Impurity 2</td>
<td class="centred">
<div><img src="data:image/x-png;base64, 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"></div>
</td>
<td class="centred">459.58</td>
<td class="centred"></td>
<td class="centred">Organic impurities by LC</td>
<td class="centred">Range: ND–0.3%</td>
</tr>
<tr>
<td class="centred">β-naphthol</td>
<td class="centred">
<div><img src="data:image/x-png;base64, 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"></div>
</td>
<td class="centred">144.173</td>
<td class="centred"></td>
<td class="centred">Organic impurities by HPLC; Chromatographic retention</td>
<td class="centred">Observed only during stress studies</td>
</tr>
<tr>
<td class="centred">1-(Ethylamino)-3-(2-naphthyloxy)-2-propanol</td>
<td class="centred">
<div><img src="data:image/x-png;base64, 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"></div>
</td>
<td class="centred">245.32</td>
<td class="centred"></td>
<td class="centred">Impurity content by LC-MS; UV spectroscopy; NMR spectroscopy</td>
<td class="centred">Observed only during stress studies</td>
</tr>
</table>
</div><br style="line-height:6px;"></div>
<div class="htmlTableRemove"><br style="line-height:6px;"><div class="indent-no-border"><span>Table 2. Summary of (Q)SAR Results for All Known and Potential Mutagenic Impurities</span><br><br style="line-height:6px;"><table class="rounded-corners white" id="tabularModeTable" style="width:70%;">
<tr>
<th rowspan="2">Chemical Name / Descriptor</th>
<th rowspan="2">Structure</th>
<th rowspan="2">Origin in Process</th>
<th colspan="3" style="border-right: 0.1px solid black;">
	  					Bacterial Mutagenicity<br>Predictions or Knowledge
  					</th>
<th rowspan="2">Comments</th>
</tr>
<tr>
<th>Rule-Based (Q)SAR</th>
<th>Statistical (Q)SAR</th>
<th style="border-right: 0.1px solid black;">
	  					ICH M7 Classification
  					</th>
</tr>
<tr>
<td class="centred">R-enantiomer of stelbatalol</td>
<td class="centred">
<div><img src="data:image/x-png;base64, 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"></div>
</td>
<td class="centred">Enantiomer of API SM</td>
<td class="centred">Negative</td>
<td class="centred">Negative</td>
<td class="centred">Class 5</td>
<td class="centred">Treated as non-mutagenic due to lack of alerting structure</td>
</tr>
<tr>
<td class="centred">Impurity 1</td>
<td class="centred">
<div><img src="data:image/x-png;base64, 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"></div>
</td>
<td class="centred">Step 1a Process Impurity</td>
<td class="centred">Negative</td>
<td class="centred">Negative</td>
<td class="centred">Class 5</td>
<td class="centred">Treated as non-mutagenic due to lack of alerting structure</td>
</tr>
<tr>
<td class="centred">Impurity 2</td>
<td class="centred">
<div><img src="data:image/x-png;base64, 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"></div>
</td>
<td class="centred">Step 1a Process Impurity</td>
<td class="centred">Negative</td>
<td class="centred">Negative</td>
<td class="centred">Class 5</td>
<td class="centred">Treated as non-mutagenic due to lack of alerting structure</td>
</tr>
<tr>
<td class="centred">β-naphthol</td>
<td class="centred">
<div><img src="data:image/x-png;base64, iVBORw0KGgoAAAANSUhEUgAAAI0AAABACAIAAACoSmOYAAAALHRFWHRDcmVhdGlvbiBUaW1lAFR1ZSAyMCBKdW4gMjAyMyAxNDoxMjo1MiAtMDAwMERGGoMAAAAHdElNRQfnBhQNEAI7ulTcAAAACXBIWXMAAAsSAAALEgHS3X78AAAABGdBTUEAALGPC/xhBQAAD1RJREFUeNrtnXlUVFUcx0EpPWYe9XQQcwVUVAwUCZcE9y3c0EI7YorlkllouO9iWgqlpmZqbmVpillokYpbonTSg4Z10sIKsdRcchcznT4zd7q93jyGYWbeDHbm+wdneO/y7u/+lu/v93vz7sPbYDB4eeBUoFJvb28Hhwm7yAE+7l7U/xAot6CgICMjIysr6+TJk/waEBAQFRXVokWLChUqyGF5eXlbtmx57LHH2rVrV6pUKeUVjh49un379vbt24eHh5sPGTxwNk6cOBEXF/fQQw898sgjYWFhjRo18vX1feCBB5555pmcnBw5bP/+/ej/ueee++uvv1RXWLJkCafmz58vj3jiyck4ffr0iy++uGfPnlGjRmGYwMBAtPzrr7+mpqYmJycTQ+vWrfP392ckMVSuXLkHH3zQ8iI+Pj6c5ee/R9y9rv8V7t69izFgvKSkpIkTJ0pFV6pUKTg4uGzZshx844033nzzTU3zWEGpYo32wDpgvI8//jgkJGTw4MHKaPAyJS0OPv7445988gnDxBHDf4sFCUl38ojT7ETmhGfdrSgzbt686ZZ5s7Ozz549Gx0dXa1aNcuzZKkuXbrAgV9//bU4goUILFURAThYunRpolMecQ7vEenEsp+f37hx4+rXr+8WHQn88ccfK1asSE9Pj4yMfOGFF6pWrerK2c+dO4dya9euXdiAunXr8vPUqVNeJpLEQpmZmWPGjMEqcgwHv//+e/FBHnTUTj/88ANlCXohovPz87t160apg4KqVKniSgWJZaelpS1cuBBTUewi0s6dOxMTE3v16qWiIP1w/fp1QqRixYqFDRCnkFAe+fHHHy9duiQpjg8E040bNyAnSkQ5zP4FXLt2bdmyZatWrSJJkhtjYmI4gi9v3Lhxx44d1DyxsbHKmXTF4cOHsRC++cQTT7z11ltkCBqXBQsWJCQkbN68edKkSVjOBWLgEPfu3bPCulevXuUnBYWXySR37tzp27fvlClTUJQ0FWH0wQcfTJs27c8///z3L+3oD7j61q1b0QgU9/rrrxPsyrO5ubnEU61atXr27AkRy+MsQI9mhUp3/PjxTAf17969WzULRzp16lSnTp1Zs2adP3/eWZMyC+FreRwfJZ4o6u6ZYDmAOhCd4998/vLLLzEPDm05bPny5VwHP5NHim0nWuXnn3/+0UcfxVW/+eYbzTEYEs6BA2vUqDF27Fjo2FkKUuLy5ctQblBQEI0kjSG/ag67cuUKeqlXrx5BtmHDBmRzfGpsYNmcgmPHjqGZpk2b/vbbb5oC49wM+Pbbbw2mPrdMmTJDhw61vNTbb7+NnSAGeaRoO0m/wB/nzp1LH9C6devt27ffvn1bjoFPqTWVR4SCVq5cGWwCfEjIO8c+Jj+gum3WrBkZe/r06VRQyrNUnjCw6k/wFRwLHT311FNfffWV4zLIkGKZ69evh2b5DFONHDkSFSOVSvuMh5k59dJLL4lTTrYTwACwfMeOHQMCAiAQlecSVTTebdu2pRW3/FuUSBGIgnr37r1v3z7HFZSVlcXaKHzj4+OPHDmi0sXBgwcRhhmxluXfopoOHTr4+/uzip9++slBSVDL559/Tp0Cr/JBaqNly5YVKlR49dVXc3Jybppw/PjxefPmPfzww1RbVF5SGEoGTTuJ+0bFsxNE179/f6EX4tqgiLALFy6Qn6g1iTCoWZMKBHDh7t27k0WgwV9++cU+vZCKSLkwWJs2bYgnlSU4y8XxJCaC+gtLh7du3Xr33XdDQ0PDw8MJdyo0zWHEivWESuk8bNgwAnrgwIGHDh0ikuQpvKdHjx7ly5fnLO6LtCwck/D5wIEDctiePXvKlSs3ZMgQSypeunQpdlq0aJFNdiKiZ8yYgfd17tyZkleZOfmMYWAe0gPpTpOOVUCtq1evbty4cZMmTdAUF7fdQnDmO++8ExYWBoWSk1QBDctRcDZs2LBVq1ao3grBSk+iGibb011R7ND8WY4UGUizWGCxU6dOxSGoXHAXTe+k1EY/UBy2IYJHjBixZs0aoSWll6empmJjS4cQtwGVEa9tJ7xjy5YtERERVHSYgXpfeRZ/GTBgAIscPnw4acl2dQO4EQVBg127dkVBRRaB+Bo1GxohoEkweLHyLNGwbdu2qKgojGSZqDS1zwWlZnft2kXwceXRo0f//PPP0pYsXwimEo/p8DBKfKbDIVB0kestMEEpgICmB1iBhp0wAxTv5+dHXEsyFUARRBgLw01YpN2lNvU6jkwvrCoa75ogf4UtqS19fX0tkz9Tk6gGDRok3CU7O7vISQW9qHSE6mkBoUFyDNWwLEBUvEeOEV8IoRY0oGpFbIdYoB168zIovOb3338n+0Gm9Bx79+5VroecuWnTJjidCKMasSyoigsU9OGHH1LCkm+Sk5NVIQtF0OjB75GRkcyLmpRnYS16JggZxdEA2Oibgso0dZSfn5+YmMjC27VrR/gqqUw4BI7LdLAI2druJUsBVO5oq50MJn957733yDdENGUGdbZyEEUUbTP1Ag2s5Aen4MyZM3gGXI/GKSlZhuAW6iIkIRWp0tjFixcXL14M82BgGFwlp4PIzMzEHoTvyy+/LL7Qg2YpHYmh6Ojo9PR0Yb/CjK0rjHaCeeLi4pCGvIerKk/j15RYgYGB8Die69y55WpxUhREU4zDwod8QFO5ubnKwbA8SZtKgSAj1IpMRfaBzEQzhJfgCtBpiAl4hnAXK8WF3jDaCZanjoLolG6CX69du5YSC+4m1FQ9rBMhJkVB8FvNmjWJaapq1RhK2H79+uFJGPLw4cN6KwXOIIwoml955RXRwBr+W4O43lRGO8Fpo0aNEsoS1QiMjF8TRqQBze5VDzA7PSPhq1KZuI9Ab7B161an3PWxBXAMxCtu8CghsouVTlEnGO+Xy5uG4vY2RIxqCCMSBj+9LJ5R0glcH1Mpvxzbt28fGZGGkRzWp08f5cM6egCmLVu2bPXq1YVOBMV5/fcBLvHB8ps9vWH+XqN06dJSFOqFlJQUumihF4MLH/DzNkH+WqZMGdr1mJgYK9+8OQsQe1JSUqNGjWA8TWGUQrpMIRJGO+EdyrnrmODlWgtporkJrpkLDeTl5VF5unfJhcEYvyLG3S2J+0H4uuyb3+LCKJYyJSjh+gAvjGpcP7tM4O4SRgVjPJGcXJ8YSxqEhaAWdwuiDaN5Spngbkk8sAajeURb4G5JPLAGo53EbUF3S+KBNRjtBDUrn/PzoATCk5/uD5jNU3IKUA80Yc5Pnj63hMMcTx7eK+Hw9Ln3B8z1nhvv1nhgCzz56f6A+X65u8XwoAiY85Onz/Vy0xeANsLc55ZkEV0GlFBi75+ZeU/KZzA9y3fhwgV3C2bE9evXxVZWFwAj+Zjg7kVrw2wneT8CcdPS0mJjY8UT7i6QQDxF4/XP4yLKyBa7VsQD7voJYH6gx8cnOjq6VatWUg9KtbgdZt5TmqRly5ZhYWGjR48eNGjQ0aNHXSCEwfSQqZfJZnfu3JHHO3ToMHDgwBUrVnTv3n3jxo23bt3SVYbhw4e3adNG/OrzD+RZ99qslNgdf+nSpYKCAnGoZs2aKSkpa9euvXHjRu/evWfOnHnu3DldFST0cu3aNSj38uXLUpLKlSsnJCR8+umnoaGhY8eOjYuLO3DggE7VqSpDnz59Wmw612/hxQN2gliqVKnSv39/5bZng+lRYazVuHHjZs2apaamFraly3GgjoyMjCeffBIXqV279oABA7Kzs1XPcB88eBA2rlat2siRI48fP+7E2VUbXc6fP4+bBgUFde7c+ezZswbFZhidlm8LjO6MPdLT09u3b+/v7z9t2jQhnER+fv6UKVOQu2/fvocOHXK6BFx/xIgRAQEB8fHxGOOLL77o0aNHgwYNJk2apNq+gqNs2LChdevWCDNnzhxbth/ZAmkDTPXZZ59FRUXVq1eP64tH2O8poJsVisa/D9ZAfQsXLgwODm7RosVHH31EMlCOQ4PQDtqcOnWq6klmu/f0XLx4cdGiRU2bNkX1FC9y6yQEKDaPRERECPpV/hXmSU5Orl+/vqaccn9ZceU5ceIE+al69erPPvusI5tndILZTvKB6dzcXCoIPz8/MpNyM6nB9Pw36kOt4eHh69atk9vk7PA4RhI3RHDdunVfe+01zW1fxFlSUhKeAf/s3LlTdXHUOmzYsKpVq8bExChfGyHtRD1iozxXrlyZP38+E0VGRpILXfYIe7HgpdS1/Lx///5u3brVqlUrMTFRteHpzJkzYjMzFbPcWCE2Mti4nVG8gYJUxM/vvvvO+uAjR45Q8jF4yJAhqk2DzEWUU0xjLc7KZ/Ztdxdicf369ZgHI0F0qr1yJQqF7qOm9Fq2bJnYCbRy5Urlfm5AosJORMP48eOV232t60jsV2zYsCEF97Zt22wUkWuSNogq0icuotqzLXbYwZycnTdvnnJflHVhWMLTTz/NEgYPHuzcwkQPFPFegry8vHHjxlGDYRXVPrXbt2/T0whDYlHr+9cJuM2bN9OZkf+WLl1qxzs/SFq4S0hICHmLpKXaCYoHzJ49OzAwkLOYTVy/MDtRKE2ePBkLdezYEc50k+aLB5ve8wG9kAZw2DFjxqi2+UGDYpsD/MNnzT+H6Pr161ejRg1M7uC20VOnTs2YMQO/QcWW+xtzcnIoHX19fWm2NLco4Vvvv/8+vkKzgbtQyLhQ1Q7B1vcb4b9ED+6s+TKhrKwsakXLNwyJZAb7U2qT85y1De/YsWMUn2Knu3j1iATmwX5EieVcmZmZiEFF57i7uB7Few8V9CKKCHrSHTt2WNE7OZmimRQtXm6kqp6dAno+SnNRMVp/1RUcQDdGMdKzZ0/cRTdl6gh73usGj+HOLBuSUb1gQoA6kLIedoInddrwLCDe+BcaGkqahNAs32kEDTAgzIRVq1bpd0tFb9j5/nJS9KZNm2iAKN5mzpwpGe/kyZMTJkyAW2JjY+WLGOx4XYItAsgygYJTvASHXoJJRQPET0KH8gfW5ayu7uICOPSeeQqnlJQUMhb8Rue7fPnyBg0aRERErF69WtZjOm05tmyuST/U2VgrPj4+IyMjISGBz3369HHKW9zcDif8PwCob+jQoX5+fpTFxJbyrpLUo9NvjmneBKHJS0tLo9OqVKlS8+bNSZCqtu/+hfkV2g5CvMqgfPnyYn+8gLgyp7y9vZ3+fKBSbNVXElTb2dnZQUFBZFBdv2pwJZxjJw/0hucx2PsDfwPULn7gJ1Dc7AAAAABJRU5ErkJggg=="></div>
</td>
<td class="centred">API Starting Material</td>
<td class="centred">Negative</td>
<td class="centred">Negative</td>
<td class="centred">Class 5</td>
<td class="centred">Treated as non-mutagenic due to lack of alerting structure</td>
</tr>
<tr>
<td class="centred">1-(Ethylamino)-3-(2-naphthyloxy)-2-propanol</td>
<td class="centred">
<div><img src="data:image/x-png;base64, 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"></div>
</td>
<td class="centred">API Process Intermediate</td>
<td class="centred">Positive</td>
<td class="centred">Positive</td>
<td class="centred">Class 2</td>
<td class="centred">Control at or below qualification threshold</td>
</tr>
</table>
</div><br style="line-height:6px;"></div>
<div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                ...
                <relationship>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-impurity-origin-pq&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-origin-local-pq&quot;/>
                                <code value=&quot;enantiomer&quot;/>
                                <display value=&quot;Enantiomer&quot;/>
                            </coding>
                            <text value=&quot;Enantiomer of API SM&quot;/>
                        </valueCodeableConcept>
                    </extension>
                    <substanceDefinitionReference>
                        <reference value=&quot;SubstanceDefinition/impurityEnantiomer&quot;/>
                    </substanceDefinitionReference>
                    <type>
                        <coding>
                            <system value=&quot;http://temp.hl7.org/fhir/substance-relationship-type&quot;/>
                            <code value=&quot;impurity&quot;/>
                            <display value=&quot;Impurity Of&quot;/>
                        </coding>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-type-local-pq&quot;/>
                            <code value=&quot;CH-IMP&quot;/>
                            <display value=&quot;Chiral Impurity&quot;/>
                        </coding>
                    </type>
                    <amountString value=&quot;ND&quot;/>">Relationship</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <relationship>
                    ...
                    <type>
                        <coding>
                            <system value=&quot;http://temp.hl7.org/fhir/substance-relationship-type&quot;/>
                            <code value=&quot;impurity&quot;/>
                            <display value=&quot;Impurity Of&quot;/>
                        </coding>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-type-local-pq&quot;/>
                            <code value=&quot;CH-IMP&quot;/>
                            <display value=&quot;Chiral Impurity&quot;/>
                        </coding>">Type: </span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <relationship>
                    <type>
                        <coding>
                            <system value=&quot;http://temp.hl7.org/fhir/substance-relationship-type&quot;/>
                            <code value=&quot;impurity&quot;/>
                            <display value=&quot;Impurity Of&quot;/>">Impurity Of<span class="greyOff"> [impurity]</span><span class="greyOff"> (http://temp.hl7.org/fhir/substance-relationship-type)</span></span>, <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <relationship>
                    <type>
                        ...
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-type-local-pq&quot;/>
                            <code value=&quot;CH-IMP&quot;/>
                            <display value=&quot;Chiral Impurity&quot;/>">Chiral Impurity<span class="greyOff"> [CH-IMP]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-type-local-pq)</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <relationship>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-impurity-origin-pq&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-origin-local-pq&quot;/>
                                <code value=&quot;enantiomer&quot;/>
                                <display value=&quot;Enantiomer&quot;/>
                            </coding>
                            <text value=&quot;Enantiomer of API SM&quot;/>
                        </valueCodeableConcept>">Impurity Origin: </span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <relationship>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-impurity-origin-pq&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-origin-local-pq&quot;/>
                                <code value=&quot;enantiomer&quot;/>
                                <display value=&quot;Enantiomer&quot;/>">Enantiomer<span class="greyOff"> [enantiomer]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-origin-local-pq)</span></span><span style="white-space:normal;"> - Text: Enantiomer of API SM</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <relationship>
                    ...
                    <amountString value=&quot;ND&quot;>">Amount: </span><span>ND</span></div>
<div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (SubstanceDefinition/substanceDefinitionReference, id: substance1 fullUrl: urn:uuid:03d68d1c-162c-8b6e-70f9-647b0ea97adb)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: impurityEnantiomer)(fullUrl: urn:uuid:03d68d1c-162c-8b6e-80f9-647b0ea97ad1)

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;impurityEnantiomer&quot;/>
                <characterization>
                    <technique>
                        <text value=&quot;Enantiomeric purity by LC&quot;/>
                    </technique>
                </characterization>
                <characterization>
                    <technique>
                        <text value=&quot;Mass spectrometry&quot;/>
                    </technique>
                </characterization>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;1233444&quot;/>
                            <display value=&quot;Rule-based (Q)Sar&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;negative&quot;/>
                            <display value=&quot;Negative&quot;/>
                        </coding>
                    </valueCodeableConcept>
                </property>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123555&quot;/>
                            <display value=&quot;Statistical (Q)Sar&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;negative&quot;/>
                            <display value=&quot;Negative&quot;/>
                        </coding>
                    </valueCodeableConcept>
                </property>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123556&quot;/>
                            <display value=&quot;ICH M7 Classification&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-ich-m7-classification-local-pq&quot;/>
                            <code value=&quot;class-5&quot;/>
                            <display value=&quot;Class 5&quot;/>
                        </coding>
                    </valueCodeableConcept>
                </property>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123557&quot;/>
                            <display value=&quot;Mutagenicity Comment&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Treated as non-mutagenic due to lack of alerting structure&quot;/>
                    </valueCodeableConcept>
                </property>
                <molecularWeight>
                    <amount>
                        <value value=&quot;295.80&quot;/>
                        <unit value=&quot;g/mole&quot;/>
                        <system value=&quot;http://unitsofmeasure.org&quot;/>
                        <code value=&quot;g/mol&quot;/>
                    </amount>
                </molecularWeight>
                <structure>
                    <representation>
                        <document>
                            <reference value=&quot;DocumentReference/impurityEnantiomerdoc&quot;/>
                        </document>
                    </representation>
                </structure>
                <name>
                    <name value=&quot;R-enantiomer of stelbatalol&quot;/>
                </name>" id="SubstanceDefinition-impurityEnantiomer">Substance</span></a><span class="summaryShowsOff"><b> - R-enantiomer of stelbatalol</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substancedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: impurityEnantiomer</div>
<div class="debugOff"> fullUrl: urn:uuid:03d68d1c-162c-8b6e-80f9-647b0ea97ad1</div>
<div class="summaryHiddenOff">
<div class="indent sbddetails">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <name>
                    <name value=&quot;R-enantiomer of stelbatalol&quot;>">Name: </span><span><span>R-enantiomer of stelbatalol</span></span></div>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;1233444&quot;/>
                            <display value=&quot;Rule-based (Q)Sar&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;negative&quot;/>
                            <display value=&quot;Negative&quot;/>
                        </coding>
                    </valueCodeableConcept>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;1233444&quot;/>
                            <display value=&quot;Rule-based (Q)Sar&quot;/>
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;1233444&quot;/>
                            <display value=&quot;Rule-based (Q)Sar&quot;/>">Rule-based (Q)Sar<span class="greyOff"> [1233444]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;negative&quot;/>
                            <display value=&quot;Negative&quot;/>
                        </coding>">Value: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;negative&quot;/>
                            <display value=&quot;Negative&quot;/>">Negative<span class="greyOff"> [negative]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq)</span></span></span></div>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123555&quot;/>
                            <display value=&quot;Statistical (Q)Sar&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;negative&quot;/>
                            <display value=&quot;Negative&quot;/>
                        </coding>
                    </valueCodeableConcept>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123555&quot;/>
                            <display value=&quot;Statistical (Q)Sar&quot;/>
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123555&quot;/>
                            <display value=&quot;Statistical (Q)Sar&quot;/>">Statistical (Q)Sar<span class="greyOff"> [123555]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;negative&quot;/>
                            <display value=&quot;Negative&quot;/>
                        </coding>">Value: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;negative&quot;/>
                            <display value=&quot;Negative&quot;/>">Negative<span class="greyOff"> [negative]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq)</span></span></span></div>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123556&quot;/>
                            <display value=&quot;ICH M7 Classification&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-ich-m7-classification-local-pq&quot;/>
                            <code value=&quot;class-5&quot;/>
                            <display value=&quot;Class 5&quot;/>
                        </coding>
                    </valueCodeableConcept>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123556&quot;/>
                            <display value=&quot;ICH M7 Classification&quot;/>
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123556&quot;/>
                            <display value=&quot;ICH M7 Classification&quot;/>">ICH M7 Classification<span class="greyOff"> [123556]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-ich-m7-classification-local-pq&quot;/>
                            <code value=&quot;class-5&quot;/>
                            <display value=&quot;Class 5&quot;/>
                        </coding>">Value: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-ich-m7-classification-local-pq&quot;/>
                            <code value=&quot;class-5&quot;/>
                            <display value=&quot;Class 5&quot;/>">Class 5<span class="greyOff"> [class-5]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-ich-m7-classification-local-pq)</span></span></span></div>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123557&quot;/>
                            <display value=&quot;Mutagenicity Comment&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Treated as non-mutagenic due to lack of alerting structure&quot;/>
                    </valueCodeableConcept>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123557&quot;/>
                            <display value=&quot;Mutagenicity Comment&quot;/>
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123557&quot;/>
                            <display value=&quot;Mutagenicity Comment&quot;/>">Mutagenicity Comment<span class="greyOff"> [123557]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueCodeableConcept>
                        <text value=&quot;Treated as non-mutagenic due to lack of alerting structure&quot;/>">Value: <span style="white-space:normal;">Treated as non-mutagenic due to lack of alerting structure</span></span></div>
</div>
</div>
<div class="summaryHiddenOff">
<div class="indent sbddetails2">
			Molecular Weight
			<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <molecularWeight>
                    <amount>
                        <value value=&quot;295.80&quot;/>
                        <unit value=&quot;g/mole&quot;/>
                        <system value=&quot;http://unitsofmeasure.org&quot;/>
                        <code value=&quot;g/mol&quot;/>">Amount: </span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <molecularWeight>
                    <amount>
                        <value value=&quot;295.80&quot;/>
                        <unit value=&quot;g/mole&quot;/>
                        <system value=&quot;http://unitsofmeasure.org&quot;/>
                        <code value=&quot;g/mol&quot;/>">295.80 g/mole</span><span class="greyOff"> [g/mol] (http://unitsofmeasure.org)</span></div>
</div>
</div>
<div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                ...
                <characterization>
                    <technique>
                        <text value=&quot;Enantiomeric purity by LC&quot;/>
                    </technique>">Characterization</span><div class="indent sbddetails2">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <characterization>
                    <technique>
                        <text value=&quot;Enantiomeric purity by LC&quot;/>">Technique: </span><span style="white-space:normal;">Enantiomeric purity by LC</span></div>
</div>
</div>
<div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                ...
                <characterization>
                    <technique>
                        <text value=&quot;Mass spectrometry&quot;/>
                    </technique>">Characterization</span><div class="indent sbddetails2">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <characterization>
                    <technique>
                        <text value=&quot;Mass spectrometry&quot;/>">Technique: </span><span style="white-space:normal;">Mass spectrometry</span></div>
</div>
</div>
<div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                ...
                <structure>
                    <representation>
                        <document>
                            <reference value=&quot;DocumentReference/impurityEnantiomerdoc&quot;/>
                        </document>
                    </representation>">Structure</span><div class="indent sbddetails2">
<div class="indent sbddetails3" title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <structure>
                    <representation>
                        <document>
                            <reference value=&quot;DocumentReference/impurityEnantiomerdoc&quot;/>
                        </document>">
								Representation
								<div class="indent org summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (SubstanceDefinition/document, id: impurityEnantiomer fullUrl: urn:uuid:03d68d1c-162c-8b6e-80f9-647b0ea97ad1)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="DocumentReference (id: impurityEnantiomerdoc)(fullUrl: urn:uuid:13d68d1c-162c-8b6e-80f9-647b0ea97ad1)

<Bundle>
    <entry>
        <resource>
            <DocumentReference>
                <id value=&quot;impurityEnantiomerdoc&quot;/>
                <status value=&quot;current&quot;/>
                <content>
                    <attachment>
                        <contentType value=&quot;image/x-png&quot;/>
                        <data value=&quot;iVBORw0KGgoAAAANSUhEUgAAAKsAAABLCAIAAACAzuDMAAAALHRFWHRDcmVhdGlvbiBUaW1lAFR1ZSAyMCBKdW4gMjAyMyAxNDowNzoyNiAtMDAwMJ1rIw0AAAAHdElNRQfnBhQNCBvdymRFAAAACXBIWXMAAAsSAAALEgHS3X78AAAABGdBTUEAALGPC/xhBQAAEKRJREFUeNrtXXlYVNUbVkRQQEVE88EEM1ArVNInIxYFcwQBJdmDAFlENM21yCfUwj1EQxYRFZEwRUlD0VjENSHBpYTUZBMRSMUSRDIC5/f+5uj1NoMwy70zwNz3D57LmTtnfb/ve7+Zc+505/P53TgoMVQU3QEOCgbHAGUHxwBlh6qiO8DhP2hsbNy7d+9ff/01e/bs/v37y6FFzgd0IJw4cWLWrFk3b9588uRJYGBgSkpKS0sL241278i5QE1NTVFRkbW1tarqM19VV1eXl5dnYWGhpaUlTg2YzeLiYm1t7bFjx5K3YE4rKiqGDBmirq6u6PH9p59RUVEw/Tlz5lhaWqLk2rVr0dHRDQ0NwcHBZmZmLLbN78BITU3V09N79OgRVXLlyhUdHZ3ffvut3fdWVlZ6eHi8/vrroIuxsTEYcOrUKZTfv39/+PDhqEfRg3uG2trajRs3fvDBB3D+//77r9CrGRkZrq6uISEhGA5LHejQUeDp06fNzc1CfBXHMcJ0fHx8YFLHBTh58iQciZ+fX0lJSY8ePUApoWoVAgwEq+7r64uF37Fjh6enJ1wd+rZv376qqipyj42NTVJSEii7YMECOIn6+nrGu9GhlWB3AXr16kWV0K/bwPfffw+jwcIPHToU//bp02fNmjUQWffu3dPV1SU1K3ZoZ8+e3b59OzoWHh7+xhtvkMK0tLTExMTRo0c7ODjQhxwUFGRvbx8bGwuVAB7jWkWFMdPt6Az4559/tm7dSmI2/sW6wjGQ9SsrK/v777/p9/fs2dPAwAA3nz59+rXXXiPLT6CpqYkZxwWigGKXv7S09Jtvvqmurp47d+6UKVNI4aVLl7Zt2wavEBoaOn78eNF3QbisXbv28uXLMTEx6enpkAvjxo1jpD8dmgFgOlQxYiHc4/8jlooKlCD/uXTduXNneXk5vDr5F8xA+vTZZ5+BBAiuEBCK7r4w0Hn0GYLf2dl506ZNhNZw+FjUwsLCgIAAqIG2a8Cq79q1C65i1apVJiYmEIlghqzdUrQSagsHDx585ZVXEM6bn+PixYv9+vUjShBL3iIC8kbEVEdHR6HayKsIBIMGDUI98hwIugpVO2PGjBUrVmDJSSEcWHx8vK2t7ebNmxHgJaoQ92/ZsgXBIi4uDvXI0rcOrQQJ4Nt7PAeuqXI4cxURkJcmTJgA0YfAT68HtIABEXciz/7DvpHcw3V/9dVXYWFhxDnBsaE/N27cgANYvHgxBIFEdeL+RYsWIT6ihg8//PDMmTPS909q7iQnJ2dmZrJqOgcOHBg4cKBQNojBt5sN3r5928jIaOXKlVR+lZCQMHjwYMzUw4cPUafcfACs38XF5dtvv8UFKSkqKkIUd3d3P3/+PCNNgEw8Ho/ERykgvQ6AkUGmsWo9sFesFr0EVo640K6UgwaEa126dGl2dvbIkSMhuyAbIREmTpwIJQhfwpeXG0DowSjMzc2JqoXyLygo8PLycnJyoj7mkg6EUhiLhYUFfFtTU5OUkyx1DzAASoWxBEtLS9hu7969qRJkxrAnaL1234sY+dZbb8E+EHeRbq1bt45obLiQyMhIZAqs9pwOrD1cES7AAH19faQAAwYMkL1a5DsYmre3N1l7qROcDp0L6ApAL9HS0jI1NRXz7VhmTLdQIdJrNzc3hQynb9++Pj4+TNWG5YcI6CbzZxudQAlyaBUIiDLGkWf1KHogHBQMjgHKDo4Byg6OAcoOjgHKDo4Byg6OAcoOjgHKDo4Byg6OAcoOjgHKDo4B8kNLS8vjx4+Zqo1skZK9HukZQDbyMjWergqybYlMVH19/YIFCxISEhjZV2FlZfXRRx8x0EOp34lhkK+92UNNTc2jR49YbaKyslJowzGzIBtDyIaU/v37h4SEFBUV+fv7nz59Wsaahw4dOmrUKKoJqa2xx5dffinpexobG0HkzMzMGzduqKmpvfnmm4w7g7q6uujo6KioqB9//FFTU9PIyIjZ+oHa2trNmzfHxMRkZWUNHDhw2LBhjDdx586d9evXl5aW/vrrr/r6+np6erq6ujY2Nvi7Y8eOn376ydDQUEdHR5YmUPmGDRtu37599erV4cOHC22pEguSbis7duyYk5PTkiVLbt26BTr7+fnBF+Xm5jK1sa65ufnAgQMzZswIDQ2trq4uKCjw9fWF0WASmWriyZMnu3fvRhPh4eHgwalTpzw9PRcuXFhcXMxUE4j3sbGxDg4O4DE5uuTq6rp8+XLq8Besds+ePdOnT//6669xgxRN4F3kuBnqQXxJSUlxdnZevXr1/fv3JapHAgaAZVgJTJbQesNMMTxwory8XMaJy8vL8/DwCAgI+OWXX6hCxJrU1FQXFxe4qz/++EPGJk6ePOnu7v7xxx///vvvVCECQVJSEmYTnJBuPShAoB09ehQT8vnnn8M0qXLCCUdHR3gdXJPCu3fvrlmzBha1f//+pqYmMZuAkWC90duwsLB79+5R5X/++Sf6j3KMBSwXszaxGIB5X7VqFXq/b98+NC96A4YUFxdna2sbGRlJ39orPioqKpYuXQq7hI9p9QYsDJw2hgfzlW6HPGJWcHAwGEaOkIoCs4k5RR/IsW0pmgBx4RRhJBcuXGj1BnACzHBzc4PZUE3AlaJjeBcMoN0mzp8/jyZw/8s2TMOTffLJJ2D5y4YphHYYAGeFGbe3t4ezevjwYds3I+zBdcMXHTlyhNqmjXESKUQBVoISavc0PBjivZ2dHTks3XYTCHuLFy/GZOXk5Ii/MDAOBEsEYDjMdk2tsLAQ8ztr1qz8/HzRVzGuVmuAaIWLAnsQwqihvQwIbWQV6aENnMDULVu2rKysrNUaEHY//fRT2EBGRka7QyauDlRoN7S1xQCQCBYD9y5RgLx48SIi95YtW8i/6enp8A3009oYIQIk6MIXLH9gYCCGLdHp6HPnznl5eSGzardj4B/8FrwXfBjdYbYLRG6sB5wqVVJVVYU1xljef//9oKAg6Dj6RE2dOnXTpk3iRxB0DKGNdAyxgBRCYm/btg0rhymi34xZ2rp1KyYNr1IRpF3AzBITE0FKsL8N622dAYiRmF+YGpIW8WeN3jYVsOPj46E3J0+eTEUm6Altbe2SkhJyJz1Yig/YYnJyMgwCYhsm3uo9cJgYwuzZs8V53oAosJyXL18m5nj9+vUxY8ZYWFggiqNdKBXkDjt37iR33rx5EzdI10RERAR4gNSAmh9IOXqYS0tLg2CEiiQ2IylAr5UrV4IHkBqtRnBhBhCHiSbhMIW8t3TA2JClIHldt24dKYGbHTBgAPy57JVjeIjcM2fOhKHTtQ8cJvwK+AHXKnsrIAGPx0Mr9AmBURoYGCCEy14/jGH+/Pkw/RMnTtDLL126hGCEVAtRQ8YmEG7AWlQlelDpBQPggojChDqVNKNoA1CIZmZmCQkJr776KhkJgwwggP3NmzfP29sbnhkMhhoFg8E8jIiR+hHCRo4cKTR3MNO3334b5sXUKM6cOQOFiCQFihURB0aPURw+fJip+vkCqYH1hZCChVCFLxiAXAU0YYTUdCB0jR8/HtYDApqbmyP+wSczywCC7Oxs5GAIllCj1PlcRgDDMDIyElUqLgIw2BAJbdOmTbO2tgaPJT1QLA5gFQhkiDuUjnlx5AArBIHD0kEwFRWVjRs3YmCQS0h/+Swc25syZYqpqSnkHoIOszUjfHbv3l10ZlRVVZk9OYkKoXD5AqcNGc/4FAG9e/eGv4QwROIKg+xG/16gT58+7J0DBLv19PTgMxE+4U4ZOewiCi0tLcaXH4DoU1dXh+agF0IcQJqx8VmyugCMVwvvi3AGtYRrNTU1agnk9O0w+eIABIelrl69mlgV462AZ1DXjFeLKKahoYEoSS88duwYGAB5yHhzbDhIAGuPvKm2tlaoCdYZgMWmu8q1a9fyBQkuG+MsLi6OioqCdTJbLSwyPDw8JyfH398/NzcXOgaeLDg4GOqdPPuvU4P1s8PGxsYQaFR8GTJkCBbp+PHjkj41QxxA5ujr6z9+/JjxyrHSBw8ehIjx9fUFp5Hcwp6QfbA9e8yiVb/LOgOsrKwmTZpEb9vOzg5yl4224JaRW7PBgG6Cpzh99913DQ0NCKiamposSRn5g/UokJmZidyDvjsK6TuPx6MemsgUkKCXlZVhheCl2RsOxGa/fv26zPJ3k4MPQHqWn59P39GGRSooKGB8Zw6aMDAw0NHR6du3L9uD6kpgnQEqKirkYWAvmlRVZWOP4a1btw4dOoSLiooKExMT+lPHOLQBeXgzvuDbDpKJAg8ePGCjFTgVa2tr8mQNSEL4ajkMrQuAdQbA+hEIpk6dSowef0EFJO6M+4Dy8nLyfSNIAPnJMUBMsM4AZOfa2toxMTHQz90EQQFKbcmSJYw35CYA28PpemCdATDKXr16IZ+mHguOCzgAlj754iAp5PGpMBab/rxDVp/tL/RVDcezdsE6A5CkCSV+T5+DwVZqa2vDwsJ4PN60adM8PT0zMzNJOZxNYmJiREQE/easrKzly5dL/RDOLgbWGTBq1Ch/f381NTWqZNCgQX5+fgz+kFZlZSXZZDx9+vSAgIDBgwfPnTt3/fr15NVz585lZGTQ7y8sLExNTe0IPzMiZ5Dtu0KFrOuACQLQS4YNGxYZGclgE1988YW6uvoPP/xA9L+Xl5epqemiRYsmTpxobm6uJgD9/p49e4r5WyUKx9mzZ9Hb9957T/aqkJSZmJjQH9FL0OnPDt+5cyc7O3vhwoX09A9JgaGhYXJy8rNB/vc3WTr4h0V8wfOiyTViaHh4eGhoaE1NjYzVwkgQ+8gjjenP1u70n2+XlpZCZ4wePVqoHI4nNzeXjByW9O6775Ixgw1VVVWIFIru+EsBM7127dqDBw+wWtbW1hjI7t27Edcgcby9vTU0NKSrFpKIUL+urg5xcNKkSaS80zOAfLgkursJJeRoM/m+ADNItsUhIkAxkGcyd0xYWVmB1kFBQc7Ozq6urpqamvPnz4fEiY6O9vX1DQwMtLGxka5mTEVaWtrevXvfeecdR0fHZ6WM70WUM0pKSnR1dYX2WQN2dnZkz11wcLCDgwP9pdjYWGNjY/GPXigE169fx8JjCFCyVGFeXp6Pj8+8efOk2NCbn58PSQ5iXb16lV7e6RkAXtvb28+cOZNe+PPPP8PPHzlyhC9gANhAfxU6tOMzgCAnJ8fd3X3ZsmXUqVykMPv37yfHRsU8RwupBAUAj5Keni76aqdnAF+ws3bMmDFwmJivCxcuxMfHGxkZwVuSIzK44PF49PsjIiJGjBjRKRjAF5x137VrF5Yc3aZOpUElIN2Fb0tKSmrjYE9DQ0NcXBxSZbi9l53J7AoM4AvOBcM9jh07dty4cWZmZlFRUdTR1Q0bNiBToN8MG/Lw8JDxJ7rkjOrq6hUrVsCODx06RB3+Iof7UAifJ/qWo0ePwjWGhIS0fS6vS30+X19f39jYKM4PEXVSwNtBD2LJEM6pT1mysrKamproP1N65coVmD6mAkoCSVDbdXYpBigJkMts374dUgYJDv13VYG7d++CImAARJ+Tk5M4tXEM6JSAiElISID1IzPEYmtoaEANIM07fPiwpaXlnDlzxN8ewTGgE6OiogKKB2mCra0tVDDCH2SBoaGhRJVwDOj0yMvLS0lJgeijPuaTCBwDlB2d/pshDjKCY4Cy43/HlYwQ/A2uywAAAABJRU5ErkJggg==&quot;/>
                    </attachment>
                </content>" id="DocumentReference-impurityEnantiomerdoc">Document</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/documentreference.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/documentreference.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/documentreference.html#tt-uml">R6</a>]</span><div class="debugOff">id: impurityEnantiomerdoc</div>
<div class="debugOff"> fullUrl: urn:uuid:13d68d1c-162c-8b6e-80f9-647b0ea97ad1</div>
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
                        <contentType value=&quot;image/x-png&quot;>">Content Type: </span><span>image/x-png</span></div>
<div><img src="data:image/x-png;base64, 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"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
</div>
</div>
<div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                ...
                <relationship>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-impurity-origin-pq&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-origin-local-pq&quot;/>
                                <code value=&quot;process&quot;/>
                                <display value=&quot;Process Impurity&quot;/>
                            </coding>
                            <text value=&quot;Step 1a Process Impurity&quot;/>
                        </valueCodeableConcept>
                    </extension>
                    <substanceDefinitionReference>
                        <reference value=&quot;SubstanceDefinition/impurity1&quot;/>
                    </substanceDefinitionReference>
                    <type>
                        <coding>
                            <system value=&quot;http://temp.hl7.org/fhir/substance-relationship-type&quot;/>
                            <code value=&quot;impurity&quot;/>
                            <display value=&quot;Impurity Of&quot;/>
                        </coding>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-type-local-pq&quot;/>
                            <code value=&quot;PR-IMP&quot;/>
                            <display value=&quot;Process impurity&quot;/>
                        </coding>
                    </type>
                    <amountString value=&quot;Range: ND-0.2%&quot;/>">Relationship</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <relationship>
                    ...
                    <type>
                        <coding>
                            <system value=&quot;http://temp.hl7.org/fhir/substance-relationship-type&quot;/>
                            <code value=&quot;impurity&quot;/>
                            <display value=&quot;Impurity Of&quot;/>
                        </coding>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-type-local-pq&quot;/>
                            <code value=&quot;PR-IMP&quot;/>
                            <display value=&quot;Process impurity&quot;/>
                        </coding>">Type: </span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <relationship>
                    <type>
                        <coding>
                            <system value=&quot;http://temp.hl7.org/fhir/substance-relationship-type&quot;/>
                            <code value=&quot;impurity&quot;/>
                            <display value=&quot;Impurity Of&quot;/>">Impurity Of<span class="greyOff"> [impurity]</span><span class="greyOff"> (http://temp.hl7.org/fhir/substance-relationship-type)</span></span>, <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <relationship>
                    <type>
                        ...
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-type-local-pq&quot;/>
                            <code value=&quot;PR-IMP&quot;/>
                            <display value=&quot;Process impurity&quot;/>">Process impurity<span class="greyOff"> [PR-IMP]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-type-local-pq)</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <relationship>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-impurity-origin-pq&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-origin-local-pq&quot;/>
                                <code value=&quot;process&quot;/>
                                <display value=&quot;Process Impurity&quot;/>
                            </coding>
                            <text value=&quot;Step 1a Process Impurity&quot;/>
                        </valueCodeableConcept>">Impurity Origin: </span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <relationship>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-impurity-origin-pq&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-origin-local-pq&quot;/>
                                <code value=&quot;process&quot;/>
                                <display value=&quot;Process Impurity&quot;/>">Process Impurity<span class="greyOff"> [process]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-origin-local-pq)</span></span><span style="white-space:normal;"> - Text: Step 1a Process Impurity</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <relationship>
                    ...
                    <amountString value=&quot;Range: ND-0.2%&quot;>">Amount: </span><span>Range: ND-0.2%</span></div>
<div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (SubstanceDefinition/substanceDefinitionReference, id: substance1 fullUrl: urn:uuid:03d68d1c-162c-8b6e-70f9-647b0ea97adb)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: impurity1)(fullUrl: urn:uuid:03d68d1c-162c-8b6e-80f9-647b0ea97ad2)

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;impurity1&quot;/>
                <characterization>
                    <technique>
                        <text value=&quot;Organic impurities by HPLC&quot;/>
                    </technique>
                </characterization>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;1233444&quot;/>
                            <display value=&quot;Rule-based (Q)Sar&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;negative&quot;/>
                            <display value=&quot;Negative&quot;/>
                        </coding>
                    </valueCodeableConcept>
                </property>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123555&quot;/>
                            <display value=&quot;Statistical (Q)Sar&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;negative&quot;/>
                            <display value=&quot;Negative&quot;/>
                        </coding>
                    </valueCodeableConcept>
                </property>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123556&quot;/>
                            <display value=&quot;ICH M7 Classification&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-ich-m7-classification-local-pq&quot;/>
                            <code value=&quot;class-5&quot;/>
                            <display value=&quot;Class 5&quot;/>
                        </coding>
                    </valueCodeableConcept>
                </property>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123557&quot;/>
                            <display value=&quot;Mutagenicity Comment&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Treated as non-mutagenic due to lack of alerting structure&quot;/>
                    </valueCodeableConcept>
                </property>
                <molecularWeight>
                    <amount>
                        <value value=&quot;344.4&quot;/>
                        <unit value=&quot;g/mole&quot;/>
                        <system value=&quot;http://unitsofmeasure.org&quot;/>
                        <code value=&quot;g/mol&quot;/>
                    </amount>
                </molecularWeight>
                <structure>
                    <representation>
                        <document>
                            <reference value=&quot;DocumentReference/impurity1doc&quot;/>
                        </document>
                    </representation>
                </structure>
                <name>
                    <name value=&quot;Impurity 1&quot;/>
                </name>" id="SubstanceDefinition-impurity1">Substance</span></a><span class="summaryShowsOff"><b> - Impurity 1</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substancedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: impurity1</div>
<div class="debugOff"> fullUrl: urn:uuid:03d68d1c-162c-8b6e-80f9-647b0ea97ad2</div>
<div class="summaryHiddenOff">
<div class="indent sbddetails">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <name>
                    <name value=&quot;Impurity 1&quot;>">Name: </span><span><span>Impurity 1</span></span></div>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;1233444&quot;/>
                            <display value=&quot;Rule-based (Q)Sar&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;negative&quot;/>
                            <display value=&quot;Negative&quot;/>
                        </coding>
                    </valueCodeableConcept>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;1233444&quot;/>
                            <display value=&quot;Rule-based (Q)Sar&quot;/>
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;1233444&quot;/>
                            <display value=&quot;Rule-based (Q)Sar&quot;/>">Rule-based (Q)Sar<span class="greyOff"> [1233444]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;negative&quot;/>
                            <display value=&quot;Negative&quot;/>
                        </coding>">Value: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;negative&quot;/>
                            <display value=&quot;Negative&quot;/>">Negative<span class="greyOff"> [negative]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq)</span></span></span></div>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123555&quot;/>
                            <display value=&quot;Statistical (Q)Sar&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;negative&quot;/>
                            <display value=&quot;Negative&quot;/>
                        </coding>
                    </valueCodeableConcept>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123555&quot;/>
                            <display value=&quot;Statistical (Q)Sar&quot;/>
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123555&quot;/>
                            <display value=&quot;Statistical (Q)Sar&quot;/>">Statistical (Q)Sar<span class="greyOff"> [123555]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;negative&quot;/>
                            <display value=&quot;Negative&quot;/>
                        </coding>">Value: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;negative&quot;/>
                            <display value=&quot;Negative&quot;/>">Negative<span class="greyOff"> [negative]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq)</span></span></span></div>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123556&quot;/>
                            <display value=&quot;ICH M7 Classification&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-ich-m7-classification-local-pq&quot;/>
                            <code value=&quot;class-5&quot;/>
                            <display value=&quot;Class 5&quot;/>
                        </coding>
                    </valueCodeableConcept>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123556&quot;/>
                            <display value=&quot;ICH M7 Classification&quot;/>
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123556&quot;/>
                            <display value=&quot;ICH M7 Classification&quot;/>">ICH M7 Classification<span class="greyOff"> [123556]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-ich-m7-classification-local-pq&quot;/>
                            <code value=&quot;class-5&quot;/>
                            <display value=&quot;Class 5&quot;/>
                        </coding>">Value: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-ich-m7-classification-local-pq&quot;/>
                            <code value=&quot;class-5&quot;/>
                            <display value=&quot;Class 5&quot;/>">Class 5<span class="greyOff"> [class-5]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-ich-m7-classification-local-pq)</span></span></span></div>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123557&quot;/>
                            <display value=&quot;Mutagenicity Comment&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Treated as non-mutagenic due to lack of alerting structure&quot;/>
                    </valueCodeableConcept>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123557&quot;/>
                            <display value=&quot;Mutagenicity Comment&quot;/>
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123557&quot;/>
                            <display value=&quot;Mutagenicity Comment&quot;/>">Mutagenicity Comment<span class="greyOff"> [123557]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueCodeableConcept>
                        <text value=&quot;Treated as non-mutagenic due to lack of alerting structure&quot;/>">Value: <span style="white-space:normal;">Treated as non-mutagenic due to lack of alerting structure</span></span></div>
</div>
</div>
<div class="summaryHiddenOff">
<div class="indent sbddetails2">
			Molecular Weight
			<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <molecularWeight>
                    <amount>
                        <value value=&quot;344.4&quot;/>
                        <unit value=&quot;g/mole&quot;/>
                        <system value=&quot;http://unitsofmeasure.org&quot;/>
                        <code value=&quot;g/mol&quot;/>">Amount: </span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <molecularWeight>
                    <amount>
                        <value value=&quot;344.4&quot;/>
                        <unit value=&quot;g/mole&quot;/>
                        <system value=&quot;http://unitsofmeasure.org&quot;/>
                        <code value=&quot;g/mol&quot;/>">344.4 g/mole</span><span class="greyOff"> [g/mol] (http://unitsofmeasure.org)</span></div>
</div>
</div>
<div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                ...
                <characterization>
                    <technique>
                        <text value=&quot;Organic impurities by HPLC&quot;/>
                    </technique>">Characterization</span><div class="indent sbddetails2">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <characterization>
                    <technique>
                        <text value=&quot;Organic impurities by HPLC&quot;/>">Technique: </span><span style="white-space:normal;">Organic impurities by HPLC</span></div>
</div>
</div>
<div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                ...
                <structure>
                    <representation>
                        <document>
                            <reference value=&quot;DocumentReference/impurity1doc&quot;/>
                        </document>
                    </representation>">Structure</span><div class="indent sbddetails2">
<div class="indent sbddetails3" title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <structure>
                    <representation>
                        <document>
                            <reference value=&quot;DocumentReference/impurity1doc&quot;/>
                        </document>">
								Representation
								<div class="indent org summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (SubstanceDefinition/document, id: impurity1 fullUrl: urn:uuid:03d68d1c-162c-8b6e-80f9-647b0ea97ad2)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="DocumentReference (id: impurity1doc)(fullUrl: urn:uuid:13d68d1c-162c-8b6e-80f9-647b0ea97ad2)

<Bundle>
    <entry>
        <resource>
            <DocumentReference>
                <id value=&quot;impurity1doc&quot;/>
                <status value=&quot;current&quot;/>
                <content>
                    <attachment>
                        <contentType value=&quot;image/x-png&quot;/>
                        <data value=&quot;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&quot;/>
                    </attachment>
                </content>" id="DocumentReference-impurity1doc">Document</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/documentreference.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/documentreference.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/documentreference.html#tt-uml">R6</a>]</span><div class="debugOff">id: impurity1doc</div>
<div class="debugOff"> fullUrl: urn:uuid:13d68d1c-162c-8b6e-80f9-647b0ea97ad2</div>
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
                        <contentType value=&quot;image/x-png&quot;>">Content Type: </span><span>image/x-png</span></div>
<div><img src="data:image/x-png;base64, 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"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
</div>
</div>
<div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                ...
                <relationship>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-impurity-origin-pq&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-origin-local-pq&quot;/>
                                <code value=&quot;process&quot;/>
                                <display value=&quot;Process Impurity&quot;/>
                            </coding>
                            <text value=&quot;Step 1a Process Impurity&quot;/>
                        </valueCodeableConcept>
                    </extension>
                    <substanceDefinitionReference>
                        <reference value=&quot;SubstanceDefinition/impurity2&quot;/>
                    </substanceDefinitionReference>
                    <type>
                        <coding>
                            <system value=&quot;http://temp.hl7.org/fhir/substance-relationship-type&quot;/>
                            <code value=&quot;impurity&quot;/>
                            <display value=&quot;Impurity Of&quot;/>
                        </coding>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-type-local-pq&quot;/>
                            <code value=&quot;PR-IMP&quot;/>
                            <display value=&quot;Process impurity&quot;/>
                        </coding>
                    </type>
                    <amountString value=&quot;Range: ND–0.3%&quot;/>">Relationship</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <relationship>
                    ...
                    <type>
                        <coding>
                            <system value=&quot;http://temp.hl7.org/fhir/substance-relationship-type&quot;/>
                            <code value=&quot;impurity&quot;/>
                            <display value=&quot;Impurity Of&quot;/>
                        </coding>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-type-local-pq&quot;/>
                            <code value=&quot;PR-IMP&quot;/>
                            <display value=&quot;Process impurity&quot;/>
                        </coding>">Type: </span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <relationship>
                    <type>
                        <coding>
                            <system value=&quot;http://temp.hl7.org/fhir/substance-relationship-type&quot;/>
                            <code value=&quot;impurity&quot;/>
                            <display value=&quot;Impurity Of&quot;/>">Impurity Of<span class="greyOff"> [impurity]</span><span class="greyOff"> (http://temp.hl7.org/fhir/substance-relationship-type)</span></span>, <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <relationship>
                    <type>
                        ...
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-type-local-pq&quot;/>
                            <code value=&quot;PR-IMP&quot;/>
                            <display value=&quot;Process impurity&quot;/>">Process impurity<span class="greyOff"> [PR-IMP]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-type-local-pq)</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <relationship>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-impurity-origin-pq&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-origin-local-pq&quot;/>
                                <code value=&quot;process&quot;/>
                                <display value=&quot;Process Impurity&quot;/>
                            </coding>
                            <text value=&quot;Step 1a Process Impurity&quot;/>
                        </valueCodeableConcept>">Impurity Origin: </span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <relationship>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-impurity-origin-pq&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-origin-local-pq&quot;/>
                                <code value=&quot;process&quot;/>
                                <display value=&quot;Process Impurity&quot;/>">Process Impurity<span class="greyOff"> [process]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-origin-local-pq)</span></span><span style="white-space:normal;"> - Text: Step 1a Process Impurity</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <relationship>
                    ...
                    <amountString value=&quot;Range: ND–0.3%&quot;>">Amount: </span><span>Range: ND–0.3%</span></div>
<div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (SubstanceDefinition/substanceDefinitionReference, id: substance1 fullUrl: urn:uuid:03d68d1c-162c-8b6e-70f9-647b0ea97adb)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: impurity2)(fullUrl: urn:uuid:03d68d1c-162c-8b6e-80f9-647b0ea97ad9)

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;impurity2&quot;/>
                <characterization>
                    <technique>
                        <text value=&quot;Organic impurities by LC&quot;/>
                    </technique>
                </characterization>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;1233444&quot;/>
                            <display value=&quot;Rule-based (Q)Sar&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;negative&quot;/>
                            <display value=&quot;Negative&quot;/>
                        </coding>
                    </valueCodeableConcept>
                </property>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123555&quot;/>
                            <display value=&quot;Statistical (Q)Sar&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;negative&quot;/>
                            <display value=&quot;Negative&quot;/>
                        </coding>
                    </valueCodeableConcept>
                </property>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123556&quot;/>
                            <display value=&quot;ICH M7 Classification&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-ich-m7-classification-local-pq&quot;/>
                            <code value=&quot;class-5&quot;/>
                            <display value=&quot;Class 5&quot;/>
                        </coding>
                    </valueCodeableConcept>
                </property>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123557&quot;/>
                            <display value=&quot;Mutagenicity Comment&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Treated as non-mutagenic due to lack of alerting structure&quot;/>
                    </valueCodeableConcept>
                </property>
                <molecularWeight>
                    <amount>
                        <value value=&quot;459.58&quot;/>
                        <unit value=&quot;g/mole&quot;/>
                        <system value=&quot;http://unitsofmeasure.org&quot;/>
                        <code value=&quot;g/mol&quot;/>
                    </amount>
                </molecularWeight>
                <structure>
                    <representation>
                        <document>
                            <reference value=&quot;DocumentReference/impurity2doc&quot;/>
                        </document>
                    </representation>
                </structure>
                <name>
                    <name value=&quot;Impurity 2&quot;/>
                </name>" id="SubstanceDefinition-impurity2">Substance</span></a><span class="summaryShowsOff"><b> - Impurity 2</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substancedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: impurity2</div>
<div class="debugOff"> fullUrl: urn:uuid:03d68d1c-162c-8b6e-80f9-647b0ea97ad9</div>
<div class="summaryHiddenOff">
<div class="indent sbddetails">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <name>
                    <name value=&quot;Impurity 2&quot;>">Name: </span><span><span>Impurity 2</span></span></div>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;1233444&quot;/>
                            <display value=&quot;Rule-based (Q)Sar&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;negative&quot;/>
                            <display value=&quot;Negative&quot;/>
                        </coding>
                    </valueCodeableConcept>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;1233444&quot;/>
                            <display value=&quot;Rule-based (Q)Sar&quot;/>
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;1233444&quot;/>
                            <display value=&quot;Rule-based (Q)Sar&quot;/>">Rule-based (Q)Sar<span class="greyOff"> [1233444]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;negative&quot;/>
                            <display value=&quot;Negative&quot;/>
                        </coding>">Value: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;negative&quot;/>
                            <display value=&quot;Negative&quot;/>">Negative<span class="greyOff"> [negative]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq)</span></span></span></div>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123555&quot;/>
                            <display value=&quot;Statistical (Q)Sar&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;negative&quot;/>
                            <display value=&quot;Negative&quot;/>
                        </coding>
                    </valueCodeableConcept>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123555&quot;/>
                            <display value=&quot;Statistical (Q)Sar&quot;/>
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123555&quot;/>
                            <display value=&quot;Statistical (Q)Sar&quot;/>">Statistical (Q)Sar<span class="greyOff"> [123555]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;negative&quot;/>
                            <display value=&quot;Negative&quot;/>
                        </coding>">Value: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;negative&quot;/>
                            <display value=&quot;Negative&quot;/>">Negative<span class="greyOff"> [negative]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq)</span></span></span></div>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123556&quot;/>
                            <display value=&quot;ICH M7 Classification&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-ich-m7-classification-local-pq&quot;/>
                            <code value=&quot;class-5&quot;/>
                            <display value=&quot;Class 5&quot;/>
                        </coding>
                    </valueCodeableConcept>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123556&quot;/>
                            <display value=&quot;ICH M7 Classification&quot;/>
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123556&quot;/>
                            <display value=&quot;ICH M7 Classification&quot;/>">ICH M7 Classification<span class="greyOff"> [123556]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-ich-m7-classification-local-pq&quot;/>
                            <code value=&quot;class-5&quot;/>
                            <display value=&quot;Class 5&quot;/>
                        </coding>">Value: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-ich-m7-classification-local-pq&quot;/>
                            <code value=&quot;class-5&quot;/>
                            <display value=&quot;Class 5&quot;/>">Class 5<span class="greyOff"> [class-5]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-ich-m7-classification-local-pq)</span></span></span></div>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123557&quot;/>
                            <display value=&quot;Mutagenicity Comment&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Treated as non-mutagenic due to lack of alerting structure&quot;/>
                    </valueCodeableConcept>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123557&quot;/>
                            <display value=&quot;Mutagenicity Comment&quot;/>
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123557&quot;/>
                            <display value=&quot;Mutagenicity Comment&quot;/>">Mutagenicity Comment<span class="greyOff"> [123557]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueCodeableConcept>
                        <text value=&quot;Treated as non-mutagenic due to lack of alerting structure&quot;/>">Value: <span style="white-space:normal;">Treated as non-mutagenic due to lack of alerting structure</span></span></div>
</div>
</div>
<div class="summaryHiddenOff">
<div class="indent sbddetails2">
			Molecular Weight
			<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <molecularWeight>
                    <amount>
                        <value value=&quot;459.58&quot;/>
                        <unit value=&quot;g/mole&quot;/>
                        <system value=&quot;http://unitsofmeasure.org&quot;/>
                        <code value=&quot;g/mol&quot;/>">Amount: </span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <molecularWeight>
                    <amount>
                        <value value=&quot;459.58&quot;/>
                        <unit value=&quot;g/mole&quot;/>
                        <system value=&quot;http://unitsofmeasure.org&quot;/>
                        <code value=&quot;g/mol&quot;/>">459.58 g/mole</span><span class="greyOff"> [g/mol] (http://unitsofmeasure.org)</span></div>
</div>
</div>
<div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                ...
                <characterization>
                    <technique>
                        <text value=&quot;Organic impurities by LC&quot;/>
                    </technique>">Characterization</span><div class="indent sbddetails2">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <characterization>
                    <technique>
                        <text value=&quot;Organic impurities by LC&quot;/>">Technique: </span><span style="white-space:normal;">Organic impurities by LC</span></div>
</div>
</div>
<div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                ...
                <structure>
                    <representation>
                        <document>
                            <reference value=&quot;DocumentReference/impurity2doc&quot;/>
                        </document>
                    </representation>">Structure</span><div class="indent sbddetails2">
<div class="indent sbddetails3" title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <structure>
                    <representation>
                        <document>
                            <reference value=&quot;DocumentReference/impurity2doc&quot;/>
                        </document>">
								Representation
								<div class="indent org summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (SubstanceDefinition/document, id: impurity2 fullUrl: urn:uuid:03d68d1c-162c-8b6e-80f9-647b0ea97ad9)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="DocumentReference (id: impurity2doc)(fullUrl: urn:uuid:13d68d1c-162c-8b6e-80f9-647b0ea97ad9)

<Bundle>
    <entry>
        <resource>
            <DocumentReference>
                <id value=&quot;impurity2doc&quot;/>
                <status value=&quot;current&quot;/>
                <content>
                    <attachment>
                        <contentType value=&quot;image/x-png&quot;/>
                        <data value=&quot;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&quot;/>
                    </attachment>
                </content>" id="DocumentReference-impurity2doc">Document</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/documentreference.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/documentreference.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/documentreference.html#tt-uml">R6</a>]</span><div class="debugOff">id: impurity2doc</div>
<div class="debugOff"> fullUrl: urn:uuid:13d68d1c-162c-8b6e-80f9-647b0ea97ad9</div>
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
                        <contentType value=&quot;image/x-png&quot;>">Content Type: </span><span>image/x-png</span></div>
<div><img src="data:image/x-png;base64, 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"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
</div>
</div>
<div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                ...
                <relationship>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-impurity-origin-pq&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-origin-local-pq&quot;/>
                                <code value=&quot;starting-material&quot;/>
                                <display value=&quot;Starting Material&quot;/>
                            </coding>
                            <text value=&quot;API Starting Material&quot;/>
                        </valueCodeableConcept>
                    </extension>
                    <substanceDefinitionReference>
                        <reference value=&quot;SubstanceDefinition/impurityNapthol&quot;/>
                    </substanceDefinitionReference>
                    <type>
                        <coding>
                            <system value=&quot;http://temp.hl7.org/fhir/substance-relationship-type&quot;/>
                            <code value=&quot;impurity&quot;/>
                            <display value=&quot;Impurity Of&quot;/>
                        </coding>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-type-local-pq&quot;/>
                            <code value=&quot;ST-IMP&quot;/>
                            <display value=&quot;Starting material, forced degradation product&quot;/>
                        </coding>
                    </type>
                    <amountString value=&quot;Observed only during stress studies&quot;/>">Relationship</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <relationship>
                    ...
                    <type>
                        <coding>
                            <system value=&quot;http://temp.hl7.org/fhir/substance-relationship-type&quot;/>
                            <code value=&quot;impurity&quot;/>
                            <display value=&quot;Impurity Of&quot;/>
                        </coding>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-type-local-pq&quot;/>
                            <code value=&quot;ST-IMP&quot;/>
                            <display value=&quot;Starting material, forced degradation product&quot;/>
                        </coding>">Type: </span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <relationship>
                    <type>
                        <coding>
                            <system value=&quot;http://temp.hl7.org/fhir/substance-relationship-type&quot;/>
                            <code value=&quot;impurity&quot;/>
                            <display value=&quot;Impurity Of&quot;/>">Impurity Of<span class="greyOff"> [impurity]</span><span class="greyOff"> (http://temp.hl7.org/fhir/substance-relationship-type)</span></span>, <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <relationship>
                    <type>
                        ...
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-type-local-pq&quot;/>
                            <code value=&quot;ST-IMP&quot;/>
                            <display value=&quot;Starting material, forced degradation product&quot;/>">Starting material, forced degradation product<span class="greyOff"> [ST-IMP]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-type-local-pq)</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <relationship>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-impurity-origin-pq&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-origin-local-pq&quot;/>
                                <code value=&quot;starting-material&quot;/>
                                <display value=&quot;Starting Material&quot;/>
                            </coding>
                            <text value=&quot;API Starting Material&quot;/>
                        </valueCodeableConcept>">Impurity Origin: </span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <relationship>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-impurity-origin-pq&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-origin-local-pq&quot;/>
                                <code value=&quot;starting-material&quot;/>
                                <display value=&quot;Starting Material&quot;/>">Starting Material<span class="greyOff"> [starting-material]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-origin-local-pq)</span></span><span style="white-space:normal;"> - Text: API Starting Material</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <relationship>
                    ...
                    <amountString value=&quot;Observed only during stress studies&quot;>">Amount: </span><span>Observed only during stress studies</span></div>
<div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (SubstanceDefinition/substanceDefinitionReference, id: substance1 fullUrl: urn:uuid:03d68d1c-162c-8b6e-70f9-647b0ea97adb)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: impurityNapthol)(fullUrl: urn:uuid:03d68d1c-162c-8b6e-80f9-647b0ea97ad3)

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;impurityNapthol&quot;/>
                <characterization>
                    <technique>
                        <text value=&quot;Organic impurities by HPLC&quot;/>
                    </technique>
                </characterization>
                <characterization>
                    <technique>
                        <text value=&quot;Chromatographic retention&quot;/>
                    </technique>
                </characterization>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;1233444&quot;/>
                            <display value=&quot;Rule-based (Q)Sar&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;negative&quot;/>
                            <display value=&quot;Negative&quot;/>
                        </coding>
                    </valueCodeableConcept>
                </property>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123555&quot;/>
                            <display value=&quot;Statistical (Q)Sar&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;negative&quot;/>
                            <display value=&quot;Negative&quot;/>
                        </coding>
                    </valueCodeableConcept>
                </property>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123556&quot;/>
                            <display value=&quot;ICH M7 Classification&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-ich-m7-classification-local-pq&quot;/>
                            <code value=&quot;class-5&quot;/>
                            <display value=&quot;Class 5&quot;/>
                        </coding>
                    </valueCodeableConcept>
                </property>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123557&quot;/>
                            <display value=&quot;Mutagenicity Comment&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Treated as non-mutagenic due to lack of alerting structure&quot;/>
                    </valueCodeableConcept>
                </property>
                <molecularWeight>
                    <amount>
                        <value value=&quot;144.173&quot;/>
                        <unit value=&quot;g/mole&quot;/>
                        <system value=&quot;http://unitsofmeasure.org&quot;/>
                        <code value=&quot;g/mol&quot;/>
                    </amount>
                </molecularWeight>
                <structure>
                    <representation>
                        <document>
                            <reference value=&quot;DocumentReference/impurityNaptholDoc&quot;/>
                        </document>
                    </representation>
                    <representation>
                        <type>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/substance-representation-format&quot;/>
                                <code value=&quot;SMILES&quot;/>
                                <display value=&quot;SMILES&quot;/>
                            </coding>
                        </type>
                        <representation value=&quot;OC1=CC2=C(C=C1)C=CC=C2&quot;/>
                    </representation>
                    <representation>
                        <type>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/substance-representation-format&quot;/>
                                <code value=&quot;InChI&quot;/>
                                <display value=&quot;InChI&quot;/>
                            </coding>
                        </type>
                        <representation value=&quot;1S/C10H8O/c11-10-6-5-8-3-1-2-4-9(8)7-10/h1-7,11H&quot;/>
                    </representation>
                </structure>
                <code>
                    <code>
                        <coding>
                            <system value=&quot;http://terminology.hl7.org/CodeSystem/CAS&quot;/>
                            <code value=&quot;135-19-3&quot;/>
                            <display value=&quot;2-Naphthol&quot;/>
                        </coding>
                    </code>
                </code>
                <name>
                    <name value=&quot;β-naphthol&quot;/>
                </name>" id="SubstanceDefinition-impurityNapthol">Substance</span></a><span class="summaryShowsOff"><b> - β-naphthol</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substancedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: impurityNapthol</div>
<div class="debugOff"> fullUrl: urn:uuid:03d68d1c-162c-8b6e-80f9-647b0ea97ad3</div>
<div class="summaryHiddenOff">
<div class="indent sbddetails">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <name>
                    <name value=&quot;β-naphthol&quot;>">Name: </span><span><span>β-naphthol</span></span></div>
</div>
</div>
<div class="summaryHiddenOff">
<div class="indent sbddetails">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <code>
                    <code>
                        <coding>
                            <system value=&quot;http://terminology.hl7.org/CodeSystem/CAS&quot;/>
                            <code value=&quot;135-19-3&quot;/>
                            <display value=&quot;2-Naphthol&quot;/>
                        </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <code>
                    <code>
                        <coding>
                            <system value=&quot;http://terminology.hl7.org/CodeSystem/CAS&quot;/>
                            <code value=&quot;135-19-3&quot;/>
                            <display value=&quot;2-Naphthol&quot;/>">2-Naphthol<span class="greyOff"> [135-19-3]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/CAS)</span></span></span></div>
</div>
</div>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;1233444&quot;/>
                            <display value=&quot;Rule-based (Q)Sar&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;negative&quot;/>
                            <display value=&quot;Negative&quot;/>
                        </coding>
                    </valueCodeableConcept>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;1233444&quot;/>
                            <display value=&quot;Rule-based (Q)Sar&quot;/>
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;1233444&quot;/>
                            <display value=&quot;Rule-based (Q)Sar&quot;/>">Rule-based (Q)Sar<span class="greyOff"> [1233444]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;negative&quot;/>
                            <display value=&quot;Negative&quot;/>
                        </coding>">Value: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;negative&quot;/>
                            <display value=&quot;Negative&quot;/>">Negative<span class="greyOff"> [negative]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq)</span></span></span></div>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123555&quot;/>
                            <display value=&quot;Statistical (Q)Sar&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;negative&quot;/>
                            <display value=&quot;Negative&quot;/>
                        </coding>
                    </valueCodeableConcept>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123555&quot;/>
                            <display value=&quot;Statistical (Q)Sar&quot;/>
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123555&quot;/>
                            <display value=&quot;Statistical (Q)Sar&quot;/>">Statistical (Q)Sar<span class="greyOff"> [123555]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;negative&quot;/>
                            <display value=&quot;Negative&quot;/>
                        </coding>">Value: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;negative&quot;/>
                            <display value=&quot;Negative&quot;/>">Negative<span class="greyOff"> [negative]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq)</span></span></span></div>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123556&quot;/>
                            <display value=&quot;ICH M7 Classification&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-ich-m7-classification-local-pq&quot;/>
                            <code value=&quot;class-5&quot;/>
                            <display value=&quot;Class 5&quot;/>
                        </coding>
                    </valueCodeableConcept>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123556&quot;/>
                            <display value=&quot;ICH M7 Classification&quot;/>
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123556&quot;/>
                            <display value=&quot;ICH M7 Classification&quot;/>">ICH M7 Classification<span class="greyOff"> [123556]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-ich-m7-classification-local-pq&quot;/>
                            <code value=&quot;class-5&quot;/>
                            <display value=&quot;Class 5&quot;/>
                        </coding>">Value: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-ich-m7-classification-local-pq&quot;/>
                            <code value=&quot;class-5&quot;/>
                            <display value=&quot;Class 5&quot;/>">Class 5<span class="greyOff"> [class-5]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-ich-m7-classification-local-pq)</span></span></span></div>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123557&quot;/>
                            <display value=&quot;Mutagenicity Comment&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Treated as non-mutagenic due to lack of alerting structure&quot;/>
                    </valueCodeableConcept>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123557&quot;/>
                            <display value=&quot;Mutagenicity Comment&quot;/>
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123557&quot;/>
                            <display value=&quot;Mutagenicity Comment&quot;/>">Mutagenicity Comment<span class="greyOff"> [123557]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueCodeableConcept>
                        <text value=&quot;Treated as non-mutagenic due to lack of alerting structure&quot;/>">Value: <span style="white-space:normal;">Treated as non-mutagenic due to lack of alerting structure</span></span></div>
</div>
</div>
<div class="summaryHiddenOff">
<div class="indent sbddetails2">
			Molecular Weight
			<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <molecularWeight>
                    <amount>
                        <value value=&quot;144.173&quot;/>
                        <unit value=&quot;g/mole&quot;/>
                        <system value=&quot;http://unitsofmeasure.org&quot;/>
                        <code value=&quot;g/mol&quot;/>">Amount: </span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <molecularWeight>
                    <amount>
                        <value value=&quot;144.173&quot;/>
                        <unit value=&quot;g/mole&quot;/>
                        <system value=&quot;http://unitsofmeasure.org&quot;/>
                        <code value=&quot;g/mol&quot;/>">144.173 g/mole</span><span class="greyOff"> [g/mol] (http://unitsofmeasure.org)</span></div>
</div>
</div>
<div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                ...
                <characterization>
                    <technique>
                        <text value=&quot;Organic impurities by HPLC&quot;/>
                    </technique>">Characterization</span><div class="indent sbddetails2">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <characterization>
                    <technique>
                        <text value=&quot;Organic impurities by HPLC&quot;/>">Technique: </span><span style="white-space:normal;">Organic impurities by HPLC</span></div>
</div>
</div>
<div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                ...
                <characterization>
                    <technique>
                        <text value=&quot;Chromatographic retention&quot;/>
                    </technique>">Characterization</span><div class="indent sbddetails2">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <characterization>
                    <technique>
                        <text value=&quot;Chromatographic retention&quot;/>">Technique: </span><span style="white-space:normal;">Chromatographic retention</span></div>
</div>
</div>
<div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                ...
                <structure>
                    <representation>
                        <document>
                            <reference value=&quot;DocumentReference/impurityNaptholDoc&quot;/>
                        </document>
                    </representation>
                    <representation>
                        <type>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/substance-representation-format&quot;/>
                                <code value=&quot;SMILES&quot;/>
                                <display value=&quot;SMILES&quot;/>
                            </coding>
                        </type>
                        <representation value=&quot;OC1=CC2=C(C=C1)C=CC=C2&quot;/>
                    </representation>
                    <representation>
                        <type>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/substance-representation-format&quot;/>
                                <code value=&quot;InChI&quot;/>
                                <display value=&quot;InChI&quot;/>
                            </coding>
                        </type>
                        <representation value=&quot;1S/C10H8O/c11-10-6-5-8-3-1-2-4-9(8)7-10/h1-7,11H&quot;/>
                    </representation>">Structure</span><div class="indent sbddetails2">
<div class="indent sbddetails3" title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <structure>
                    <representation>
                        <document>
                            <reference value=&quot;DocumentReference/impurityNaptholDoc&quot;/>
                        </document>">
								Representation
								<div class="indent org summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (SubstanceDefinition/document, id: impurityNapthol fullUrl: urn:uuid:03d68d1c-162c-8b6e-80f9-647b0ea97ad3)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="DocumentReference (id: impurityNaptholDoc)(fullUrl: urn:uuid:13d68d1c-162c-8b6e-80f9-647b0ea97ad3)

<Bundle>
    <entry>
        <resource>
            <DocumentReference>
                <id value=&quot;impurityNaptholDoc&quot;/>
                <status value=&quot;current&quot;/>
                <content>
                    <attachment>
                        <contentType value=&quot;image/x-png&quot;/>
                        <data value=&quot;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&quot;/>
                    </attachment>
                </content>" id="DocumentReference-impurityNaptholDoc">Document</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/documentreference.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/documentreference.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/documentreference.html#tt-uml">R6</a>]</span><div class="debugOff">id: impurityNaptholDoc</div>
<div class="debugOff"> fullUrl: urn:uuid:13d68d1c-162c-8b6e-80f9-647b0ea97ad3</div>
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
                        <contentType value=&quot;image/x-png&quot;>">Content Type: </span><span>image/x-png</span></div>
<div><img src="data:image/x-png;base64, iVBORw0KGgoAAAANSUhEUgAAAI0AAABACAIAAACoSmOYAAAALHRFWHRDcmVhdGlvbiBUaW1lAFR1ZSAyMCBKdW4gMjAyMyAxNDoxMjo1MiAtMDAwMERGGoMAAAAHdElNRQfnBhQNEAI7ulTcAAAACXBIWXMAAAsSAAALEgHS3X78AAAABGdBTUEAALGPC/xhBQAAD1RJREFUeNrtnXlUVFUcx0EpPWYe9XQQcwVUVAwUCZcE9y3c0EI7YorlkllouO9iWgqlpmZqbmVpillokYpbonTSg4Z10sIKsdRcchcznT4zd7q93jyGYWbeDHbm+wdneO/y7u/+lu/v93vz7sPbYDB4eeBUoFJvb28Hhwm7yAE+7l7U/xAot6CgICMjIysr6+TJk/waEBAQFRXVokWLChUqyGF5eXlbtmx57LHH2rVrV6pUKeUVjh49un379vbt24eHh5sPGTxwNk6cOBEXF/fQQw898sgjYWFhjRo18vX1feCBB5555pmcnBw5bP/+/ej/ueee++uvv1RXWLJkCafmz58vj3jiyck4ffr0iy++uGfPnlGjRmGYwMBAtPzrr7+mpqYmJycTQ+vWrfP392ckMVSuXLkHH3zQ8iI+Pj6c5ee/R9y9rv8V7t69izFgvKSkpIkTJ0pFV6pUKTg4uGzZshx844033nzzTU3zWEGpYo32wDpgvI8//jgkJGTw4MHKaPAyJS0OPv7445988gnDxBHDf4sFCUl38ojT7ETmhGfdrSgzbt686ZZ5s7Ozz549Gx0dXa1aNcuzZKkuXbrAgV9//bU4goUILFURAThYunRpolMecQ7vEenEsp+f37hx4+rXr+8WHQn88ccfK1asSE9Pj4yMfOGFF6pWrerK2c+dO4dya9euXdiAunXr8vPUqVNeJpLEQpmZmWPGjMEqcgwHv//+e/FBHnTUTj/88ANlCXohovPz87t160apg4KqVKniSgWJZaelpS1cuBBTUewi0s6dOxMTE3v16qWiIP1w/fp1QqRixYqFDRCnkFAe+fHHHy9duiQpjg8E040bNyAnSkQ5zP4FXLt2bdmyZatWrSJJkhtjYmI4gi9v3Lhxx44d1DyxsbHKmXTF4cOHsRC++cQTT7z11ltkCBqXBQsWJCQkbN68edKkSVjOBWLgEPfu3bPCulevXuUnBYWXySR37tzp27fvlClTUJQ0FWH0wQcfTJs27c8///z3L+3oD7j61q1b0QgU9/rrrxPsyrO5ubnEU61atXr27AkRy+MsQI9mhUp3/PjxTAf17969WzULRzp16lSnTp1Zs2adP3/eWZMyC+FreRwfJZ4o6u6ZYDmAOhCd4998/vLLLzEPDm05bPny5VwHP5NHim0nWuXnn3/+0UcfxVW/+eYbzTEYEs6BA2vUqDF27Fjo2FkKUuLy5ctQblBQEI0kjSG/ag67cuUKeqlXrx5BtmHDBmRzfGpsYNmcgmPHjqGZpk2b/vbbb5oC49wM+Pbbbw2mPrdMmTJDhw61vNTbb7+NnSAGeaRoO0m/wB/nzp1LH9C6devt27ffvn1bjoFPqTWVR4SCVq5cGWwCfEjIO8c+Jj+gum3WrBkZe/r06VRQyrNUnjCw6k/wFRwLHT311FNfffWV4zLIkGKZ69evh2b5DFONHDkSFSOVSvuMh5k59dJLL4lTTrYTwACwfMeOHQMCAiAQlecSVTTebdu2pRW3/FuUSBGIgnr37r1v3z7HFZSVlcXaKHzj4+OPHDmi0sXBgwcRhhmxluXfopoOHTr4+/uzip9++slBSVDL559/Tp0Cr/JBaqNly5YVKlR49dVXc3Jybppw/PjxefPmPfzww1RbVF5SGEoGTTuJ+0bFsxNE179/f6EX4tqgiLALFy6Qn6g1iTCoWZMKBHDh7t27k0WgwV9++cU+vZCKSLkwWJs2bYgnlSU4y8XxJCaC+gtLh7du3Xr33XdDQ0PDw8MJdyo0zWHEivWESuk8bNgwAnrgwIGHDh0ikuQpvKdHjx7ly5fnLO6LtCwck/D5wIEDctiePXvKlSs3ZMgQSypeunQpdlq0aJFNdiKiZ8yYgfd17tyZkleZOfmMYWAe0gPpTpOOVUCtq1evbty4cZMmTdAUF7fdQnDmO++8ExYWBoWSk1QBDctRcDZs2LBVq1ao3grBSk+iGibb011R7ND8WY4UGUizWGCxU6dOxSGoXHAXTe+k1EY/UBy2IYJHjBixZs0aoSWll6empmJjS4cQtwGVEa9tJ7xjy5YtERERVHSYgXpfeRZ/GTBgAIscPnw4acl2dQO4EQVBg127dkVBRRaB+Bo1GxohoEkweLHyLNGwbdu2qKgojGSZqDS1zwWlZnft2kXwceXRo0f//PPP0pYsXwimEo/p8DBKfKbDIVB0kestMEEpgICmB1iBhp0wAxTv5+dHXEsyFUARRBgLw01YpN2lNvU6jkwvrCoa75ogf4UtqS19fX0tkz9Tk6gGDRok3CU7O7vISQW9qHSE6mkBoUFyDNWwLEBUvEeOEV8IoRY0oGpFbIdYoB168zIovOb3338n+0Gm9Bx79+5VroecuWnTJjidCKMasSyoigsU9OGHH1LCkm+Sk5NVIQtF0OjB75GRkcyLmpRnYS16JggZxdEA2Oibgso0dZSfn5+YmMjC27VrR/gqqUw4BI7LdLAI2druJUsBVO5oq50MJn957733yDdENGUGdbZyEEUUbTP1Ag2s5Aen4MyZM3gGXI/GKSlZhuAW6iIkIRWp0tjFixcXL14M82BgGFwlp4PIzMzEHoTvyy+/LL7Qg2YpHYmh6Ojo9PR0Yb/CjK0rjHaCeeLi4pCGvIerKk/j15RYgYGB8Die69y55WpxUhREU4zDwod8QFO5ubnKwbA8SZtKgSAj1IpMRfaBzEQzhJfgCtBpiAl4hnAXK8WF3jDaCZanjoLolG6CX69du5YSC+4m1FQ9rBMhJkVB8FvNmjWJaapq1RhK2H79+uFJGPLw4cN6KwXOIIwoml955RXRwBr+W4O43lRGO8Fpo0aNEsoS1QiMjF8TRqQBze5VDzA7PSPhq1KZuI9Ab7B161an3PWxBXAMxCtu8CghsouVTlEnGO+Xy5uG4vY2RIxqCCMSBj+9LJ5R0glcH1Mpvxzbt28fGZGGkRzWp08f5cM6egCmLVu2bPXq1YVOBMV5/fcBLvHB8ps9vWH+XqN06dJSFOqFlJQUumihF4MLH/DzNkH+WqZMGdr1mJgYK9+8OQsQe1JSUqNGjWA8TWGUQrpMIRJGO+EdyrnrmODlWgtporkJrpkLDeTl5VF5unfJhcEYvyLG3S2J+0H4uuyb3+LCKJYyJSjh+gAvjGpcP7tM4O4SRgVjPJGcXJ8YSxqEhaAWdwuiDaN5Spngbkk8sAajeURb4G5JPLAGo53EbUF3S+KBNRjtBDUrn/PzoATCk5/uD5jNU3IKUA80Yc5Pnj63hMMcTx7eK+Hw9Ln3B8z1nhvv1nhgCzz56f6A+X65u8XwoAiY85Onz/Vy0xeANsLc55ZkEV0GlFBi75+ZeU/KZzA9y3fhwgV3C2bE9evXxVZWFwAj+Zjg7kVrw2wneT8CcdPS0mJjY8UT7i6QQDxF4/XP4yLKyBa7VsQD7voJYH6gx8cnOjq6VatWUg9KtbgdZt5TmqRly5ZhYWGjR48eNGjQ0aNHXSCEwfSQqZfJZnfu3JHHO3ToMHDgwBUrVnTv3n3jxo23bt3SVYbhw4e3adNG/OrzD+RZ99qslNgdf+nSpYKCAnGoZs2aKSkpa9euvXHjRu/evWfOnHnu3DldFST0cu3aNSj38uXLUpLKlSsnJCR8+umnoaGhY8eOjYuLO3DggE7VqSpDnz59Wmw612/hxQN2gliqVKnSv39/5bZng+lRYazVuHHjZs2apaamFraly3GgjoyMjCeffBIXqV279oABA7Kzs1XPcB88eBA2rlat2siRI48fP+7E2VUbXc6fP4+bBgUFde7c+ezZswbFZhidlm8LjO6MPdLT09u3b+/v7z9t2jQhnER+fv6UKVOQu2/fvocOHXK6BFx/xIgRAQEB8fHxGOOLL77o0aNHgwYNJk2apNq+gqNs2LChdevWCDNnzhxbth/ZAmkDTPXZZ59FRUXVq1eP64tH2O8poJsVisa/D9ZAfQsXLgwODm7RosVHH31EMlCOQ4PQDtqcOnWq6klmu/f0XLx4cdGiRU2bNkX1FC9y6yQEKDaPRERECPpV/hXmSU5Orl+/vqaccn9ZceU5ceIE+al69erPPvusI5tndILZTvKB6dzcXCoIPz8/MpNyM6nB9Pw36kOt4eHh69atk9vk7PA4RhI3RHDdunVfe+01zW1fxFlSUhKeAf/s3LlTdXHUOmzYsKpVq8bExChfGyHtRD1iozxXrlyZP38+E0VGRpILXfYIe7HgpdS1/Lx///5u3brVqlUrMTFRteHpzJkzYjMzFbPcWCE2Mti4nVG8gYJUxM/vvvvO+uAjR45Q8jF4yJAhqk2DzEWUU0xjLc7KZ/Ztdxdicf369ZgHI0F0qr1yJQqF7qOm9Fq2bJnYCbRy5Urlfm5AosJORMP48eOV232t60jsV2zYsCEF97Zt22wUkWuSNogq0icuotqzLXbYwZycnTdvnnJflHVhWMLTTz/NEgYPHuzcwkQPFPFegry8vHHjxlGDYRXVPrXbt2/T0whDYlHr+9cJuM2bN9OZkf+WLl1qxzs/SFq4S0hICHmLpKXaCYoHzJ49OzAwkLOYTVy/MDtRKE2ePBkLdezYEc50k+aLB5ve8wG9kAZw2DFjxqi2+UGDYpsD/MNnzT+H6Pr161ejRg1M7uC20VOnTs2YMQO/QcWW+xtzcnIoHX19fWm2NLco4Vvvv/8+vkKzgbtQyLhQ1Q7B1vcb4b9ED+6s+TKhrKwsakXLNwyJZAb7U2qT85y1De/YsWMUn2Knu3j1iATmwX5EieVcmZmZiEFF57i7uB7Few8V9CKKCHrSHTt2WNE7OZmimRQtXm6kqp6dAno+SnNRMVp/1RUcQDdGMdKzZ0/cRTdl6gh73usGj+HOLBuSUb1gQoA6kLIedoInddrwLCDe+BcaGkqahNAs32kEDTAgzIRVq1bpd0tFb9j5/nJS9KZNm2iAKN5mzpwpGe/kyZMTJkyAW2JjY+WLGOx4XYItAsgygYJTvASHXoJJRQPET0KH8gfW5ayu7uICOPSeeQqnlJQUMhb8Rue7fPnyBg0aRERErF69WtZjOm05tmyuST/U2VgrPj4+IyMjISGBz3369HHKW9zcDif8PwCob+jQoX5+fpTFxJbyrpLUo9NvjmneBKHJS0tLo9OqVKlS8+bNSZCqtu/+hfkV2g5CvMqgfPnyYn+8gLgyp7y9vZ3+fKBSbNVXElTb2dnZQUFBZFBdv2pwJZxjJw/0hucx2PsDfwPULn7gJ1Dc7AAAAABJRU5ErkJggg=="></div>
</div>
</div>
</div>
</div>
<div class="indent sbddetails3" title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <structure>
                    ...
                    <representation>
                        <type>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/substance-representation-format&quot;/>
                                <code value=&quot;SMILES&quot;/>
                                <display value=&quot;SMILES&quot;/>
                            </coding>
                        </type>
                        <representation value=&quot;OC1=CC2=C(C=C1)C=CC=C2&quot;/>">
								Representation
								<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <structure>
                    <representation>
                        <type>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/substance-representation-format&quot;/>
                                <code value=&quot;SMILES&quot;/>
                                <display value=&quot;SMILES&quot;/>
                            </coding>">Type: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <structure>
                    <representation>
                        <type>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/substance-representation-format&quot;/>
                                <code value=&quot;SMILES&quot;/>
                                <display value=&quot;SMILES&quot;/>">SMILES<span class="greyOff"> [SMILES]</span><span class="greyOff"> (http://hl7.org/fhir/substance-representation-format)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <structure>
                    <representation>
                        ...
                        <representation value=&quot;OC1=CC2=C(C=C1)C=CC=C2&quot;>">Representation: </span><span>OC1=CC2=C(C=C1)C=CC=C2</span></div>
</div>
<div class="indent sbddetails3" title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <structure>
                    ...
                    <representation>
                        <type>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/substance-representation-format&quot;/>
                                <code value=&quot;InChI&quot;/>
                                <display value=&quot;InChI&quot;/>
                            </coding>
                        </type>
                        <representation value=&quot;1S/C10H8O/c11-10-6-5-8-3-1-2-4-9(8)7-10/h1-7,11H&quot;/>">
								Representation
								<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <structure>
                    <representation>
                        <type>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/substance-representation-format&quot;/>
                                <code value=&quot;InChI&quot;/>
                                <display value=&quot;InChI&quot;/>
                            </coding>">Type: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <structure>
                    <representation>
                        <type>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/substance-representation-format&quot;/>
                                <code value=&quot;InChI&quot;/>
                                <display value=&quot;InChI&quot;/>">InChI<span class="greyOff"> [InChI]</span><span class="greyOff"> (http://hl7.org/fhir/substance-representation-format)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <structure>
                    <representation>
                        ...
                        <representation value=&quot;1S/C10H8O/c11-10-6-5-8-3-1-2-4-9(8)7-10/h1-7,11H&quot;>">Representation: </span><span>1S/C10H8O/c11-10-6-5-8-3-1-2-4-9(8)7-10/h1-7,11H</span></div>
</div>
</div>
</div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
</div>
</div>
<div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                ...
                <relationship>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-impurity-origin-pq&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-origin-local-pq&quot;/>
                                <code value=&quot;intermediate-material&quot;/>
                                <display value=&quot;Intermediate Material&quot;/>
                            </coding>
                            <text value=&quot;API Process Intermediate&quot;/>
                        </valueCodeableConcept>
                    </extension>
                    <substanceDefinitionReference>
                        <reference value=&quot;SubstanceDefinition/impurityPropanol&quot;/>
                    </substanceDefinitionReference>
                    <type>
                        <coding>
                            <system value=&quot;http://temp.hl7.org/fhir/substance-relationship-type&quot;/>
                            <code value=&quot;impurity&quot;/>
                            <display value=&quot;Impurity Of&quot;/>
                        </coding>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-type-local-pq&quot;/>
                            <code value=&quot;INT-IMP&quot;/>
                            <display value=&quot;Process intermediate, forced degradation product&quot;/>
                        </coding>
                    </type>
                    <amountString value=&quot;Observed only during stress studies&quot;/>">Relationship</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <relationship>
                    ...
                    <type>
                        <coding>
                            <system value=&quot;http://temp.hl7.org/fhir/substance-relationship-type&quot;/>
                            <code value=&quot;impurity&quot;/>
                            <display value=&quot;Impurity Of&quot;/>
                        </coding>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-type-local-pq&quot;/>
                            <code value=&quot;INT-IMP&quot;/>
                            <display value=&quot;Process intermediate, forced degradation product&quot;/>
                        </coding>">Type: </span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <relationship>
                    <type>
                        <coding>
                            <system value=&quot;http://temp.hl7.org/fhir/substance-relationship-type&quot;/>
                            <code value=&quot;impurity&quot;/>
                            <display value=&quot;Impurity Of&quot;/>">Impurity Of<span class="greyOff"> [impurity]</span><span class="greyOff"> (http://temp.hl7.org/fhir/substance-relationship-type)</span></span>, <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <relationship>
                    <type>
                        ...
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-type-local-pq&quot;/>
                            <code value=&quot;INT-IMP&quot;/>
                            <display value=&quot;Process intermediate, forced degradation product&quot;/>">Process intermediate, forced degradation product<span class="greyOff"> [INT-IMP]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-type-local-pq)</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <relationship>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-impurity-origin-pq&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-origin-local-pq&quot;/>
                                <code value=&quot;intermediate-material&quot;/>
                                <display value=&quot;Intermediate Material&quot;/>
                            </coding>
                            <text value=&quot;API Process Intermediate&quot;/>
                        </valueCodeableConcept>">Impurity Origin: </span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <relationship>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-impurity-origin-pq&quot;>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-origin-local-pq&quot;/>
                                <code value=&quot;intermediate-material&quot;/>
                                <display value=&quot;Intermediate Material&quot;/>">Intermediate Material<span class="greyOff"> [intermediate-material]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-impurity-origin-local-pq)</span></span><span style="white-space:normal;"> - Text: API Process Intermediate</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <relationship>
                    ...
                    <amountString value=&quot;Observed only during stress studies&quot;>">Amount: </span><span>Observed only during stress studies</span></div>
<div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (SubstanceDefinition/substanceDefinitionReference, id: substance1 fullUrl: urn:uuid:03d68d1c-162c-8b6e-70f9-647b0ea97adb)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: impurityPropanol)(fullUrl: urn:uuid:03d68d1c-162c-8b6e-80f9-647b0ea97ad4)

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;impurityPropanol&quot;/>
                <characterization>
                    <technique>
                        <text value=&quot;Impurity content by LC-MS&quot;/>
                    </technique>
                </characterization>
                <characterization>
                    <technique>
                        <text value=&quot;UV spectroscopy&quot;/>
                    </technique>
                </characterization>
                <characterization>
                    <technique>
                        <text value=&quot;NMR spectroscopy&quot;/>
                    </technique>
                </characterization>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;1233444&quot;/>
                            <display value=&quot;Rule-based (Q)Sar&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;positive&quot;/>
                            <display value=&quot;Positive&quot;/>
                        </coding>
                    </valueCodeableConcept>
                </property>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123555&quot;/>
                            <display value=&quot;Statistical (Q)Sar&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;positive&quot;/>
                            <display value=&quot;Positive&quot;/>
                        </coding>
                    </valueCodeableConcept>
                </property>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123556&quot;/>
                            <display value=&quot;ICH M7 Classification&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-ich-m7-classification-local-pq&quot;/>
                            <code value=&quot;class-2&quot;/>
                            <display value=&quot;Class 2&quot;/>
                        </coding>
                    </valueCodeableConcept>
                </property>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123557&quot;/>
                            <display value=&quot;Mutagenicity Comment&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Control at or below qualification threshold&quot;/>
                    </valueCodeableConcept>
                </property>
                <molecularWeight>
                    <amount>
                        <value value=&quot;245.32&quot;/>
                        <unit value=&quot;g/mole&quot;/>
                        <system value=&quot;http://unitsofmeasure.org&quot;/>
                        <code value=&quot;g/mol&quot;/>
                    </amount>
                </molecularWeight>
                <structure>
                    <representation>
                        <document>
                            <reference value=&quot;DocumentReference/impurityPropanolDoc&quot;/>
                        </document>
                    </representation>
                </structure>
                <!-- not in CAS -->
                <name>
                    <name value=&quot;1-(Ethylamino)-3-(2-naphthyloxy)-2-propanol&quot;/>
                </name>" id="SubstanceDefinition-impurityPropanol">Substance</span></a><span class="summaryShowsOff"><b> - 1-(Ethylamino)-3-(2-naphthyloxy)-2-propanol</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substancedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: impurityPropanol</div>
<div class="debugOff"> fullUrl: urn:uuid:03d68d1c-162c-8b6e-80f9-647b0ea97ad4</div>
<div class="summaryHiddenOff">
<div class="indent sbddetails">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <name>
                    <name value=&quot;1-(Ethylamino)-3-(2-naphthyloxy)-2-propanol&quot;>">Name: </span><span><span>1-(Ethylamino)-3-(2-naphthyloxy)-2-propanol</span></span></div>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;1233444&quot;/>
                            <display value=&quot;Rule-based (Q)Sar&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;positive&quot;/>
                            <display value=&quot;Positive&quot;/>
                        </coding>
                    </valueCodeableConcept>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;1233444&quot;/>
                            <display value=&quot;Rule-based (Q)Sar&quot;/>
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;1233444&quot;/>
                            <display value=&quot;Rule-based (Q)Sar&quot;/>">Rule-based (Q)Sar<span class="greyOff"> [1233444]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;positive&quot;/>
                            <display value=&quot;Positive&quot;/>
                        </coding>">Value: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;positive&quot;/>
                            <display value=&quot;Positive&quot;/>">Positive<span class="greyOff"> [positive]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq)</span></span></span></div>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123555&quot;/>
                            <display value=&quot;Statistical (Q)Sar&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;positive&quot;/>
                            <display value=&quot;Positive&quot;/>
                        </coding>
                    </valueCodeableConcept>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123555&quot;/>
                            <display value=&quot;Statistical (Q)Sar&quot;/>
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123555&quot;/>
                            <display value=&quot;Statistical (Q)Sar&quot;/>">Statistical (Q)Sar<span class="greyOff"> [123555]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;positive&quot;/>
                            <display value=&quot;Positive&quot;/>
                        </coding>">Value: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq&quot;/>
                            <code value=&quot;positive&quot;/>
                            <display value=&quot;Positive&quot;/>">Positive<span class="greyOff"> [positive]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicity-local-pq)</span></span></span></div>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123556&quot;/>
                            <display value=&quot;ICH M7 Classification&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-ich-m7-classification-local-pq&quot;/>
                            <code value=&quot;class-2&quot;/>
                            <display value=&quot;Class 2&quot;/>
                        </coding>
                    </valueCodeableConcept>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123556&quot;/>
                            <display value=&quot;ICH M7 Classification&quot;/>
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123556&quot;/>
                            <display value=&quot;ICH M7 Classification&quot;/>">ICH M7 Classification<span class="greyOff"> [123556]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-ich-m7-classification-local-pq&quot;/>
                            <code value=&quot;class-2&quot;/>
                            <display value=&quot;Class 2&quot;/>
                        </coding>">Value: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <valueCodeableConcept>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-ich-m7-classification-local-pq&quot;/>
                            <code value=&quot;class-2&quot;/>
                            <display value=&quot;Class 2&quot;/>">Class 2<span class="greyOff"> [class-2]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-ich-m7-classification-local-pq)</span></span></span></div>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123557&quot;/>
                            <display value=&quot;Mutagenicity Comment&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Control at or below qualification threshold&quot;/>
                    </valueCodeableConcept>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123557&quot;/>
                            <display value=&quot;Mutagenicity Comment&quot;/>
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq&quot;/>
                            <code value=&quot;123557&quot;/>
                            <display value=&quot;Mutagenicity Comment&quot;/>">Mutagenicity Comment<span class="greyOff"> [123557]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-mutagenicityClassificationType-local-pq)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueCodeableConcept>
                        <text value=&quot;Control at or below qualification threshold&quot;/>">Value: <span style="white-space:normal;">Control at or below qualification threshold</span></span></div>
</div>
</div>
<div class="summaryHiddenOff">
<div class="indent sbddetails2">
			Molecular Weight
			<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <molecularWeight>
                    <amount>
                        <value value=&quot;245.32&quot;/>
                        <unit value=&quot;g/mole&quot;/>
                        <system value=&quot;http://unitsofmeasure.org&quot;/>
                        <code value=&quot;g/mol&quot;/>">Amount: </span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <molecularWeight>
                    <amount>
                        <value value=&quot;245.32&quot;/>
                        <unit value=&quot;g/mole&quot;/>
                        <system value=&quot;http://unitsofmeasure.org&quot;/>
                        <code value=&quot;g/mol&quot;/>">245.32 g/mole</span><span class="greyOff"> [g/mol] (http://unitsofmeasure.org)</span></div>
</div>
</div>
<div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                ...
                <characterization>
                    <technique>
                        <text value=&quot;Impurity content by LC-MS&quot;/>
                    </technique>">Characterization</span><div class="indent sbddetails2">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <characterization>
                    <technique>
                        <text value=&quot;Impurity content by LC-MS&quot;/>">Technique: </span><span style="white-space:normal;">Impurity content by LC-MS</span></div>
</div>
</div>
<div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                ...
                <characterization>
                    <technique>
                        <text value=&quot;UV spectroscopy&quot;/>
                    </technique>">Characterization</span><div class="indent sbddetails2">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <characterization>
                    <technique>
                        <text value=&quot;UV spectroscopy&quot;/>">Technique: </span><span style="white-space:normal;">UV spectroscopy</span></div>
</div>
</div>
<div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                ...
                <characterization>
                    <technique>
                        <text value=&quot;NMR spectroscopy&quot;/>
                    </technique>">Characterization</span><div class="indent sbddetails2">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <characterization>
                    <technique>
                        <text value=&quot;NMR spectroscopy&quot;/>">Technique: </span><span style="white-space:normal;">NMR spectroscopy</span></div>
</div>
</div>
<div class="indent sbddetails"><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                ...
                <structure>
                    <representation>
                        <document>
                            <reference value=&quot;DocumentReference/impurityPropanolDoc&quot;/>
                        </document>
                    </representation>">Structure</span><div class="indent sbddetails2">
<div class="indent sbddetails3" title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <structure>
                    <representation>
                        <document>
                            <reference value=&quot;DocumentReference/impurityPropanolDoc&quot;/>
                        </document>">
								Representation
								<div class="indent org summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (SubstanceDefinition/document, id: impurityPropanol fullUrl: urn:uuid:03d68d1c-162c-8b6e-80f9-647b0ea97ad4)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="DocumentReference (id: impurityPropanolDoc)(fullUrl: urn:uuid:13d68d1c-162c-8b6e-80f9-647b0ea97ad4)

<Bundle>
    <entry>
        <resource>
            <DocumentReference>
                <id value=&quot;impurityPropanolDoc&quot;/>
                <status value=&quot;current&quot;/>
                <content>
                    <attachment>
                        <contentType value=&quot;image/x-png&quot;/>
                        <data value=&quot;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&quot;/>
                    </attachment>
                </content>" id="DocumentReference-impurityPropanolDoc">Document</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/documentreference.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/documentreference.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/documentreference.html#tt-uml">R6</a>]</span><div class="debugOff">id: impurityPropanolDoc</div>
<div class="debugOff"> fullUrl: urn:uuid:13d68d1c-162c-8b6e-80f9-647b0ea97ad4</div>
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
                        <contentType value=&quot;image/x-png&quot;>">Content Type: </span><span>image/x-png</span></div>
<div><img src="data:image/x-png;base64, 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"></div>
</div>
</div>
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
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
</div>
<div class="summaryHiddenOff"></div>
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
		First resource in bundle:SubstanceDefinition
		Single resource bundle:false
		Single resource bundle Not Patient Or Bundle:false
		Single resource Not Patient:false
		Patient document:false
		General Bundle:false
		Not patient related:true
		=>Patient Centric Mode:false
		SubstanceDef Centric Mode:true
		Assumed profile:--></html>
