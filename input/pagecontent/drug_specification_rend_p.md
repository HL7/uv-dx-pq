The HTML rendering below shows a synthetic Quality data example for Common Technical Document (CTD) Module 3: Quality, section 3.2.P.5 Control of Drug Product, subsection 3.2.P.5.1 Specification(s).
<html>
<body>
<div class="divBody">
<p>
						This is the same data as in the example files here in <a href="Bundle-bundle-drug-product-specification-pq-ex1.xml.html">xml</a> and in <a href="Bundle-bundle-drug-product-specification-pq-ex1.json.html">json</a>, presented for easier viewing.
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
<div class="bundle"><a class="plainLink"><span class="bold" title="Bundle (id: bundle-drug-product-specification-pq-ex1)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-drug-product-specification-pq 

<Bundle>
    <id value=&quot;bundle-drug-product-specification-pq-ex1&quot;/>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-drug-product-specification-pq&quot;/>
    </meta>
    <type value=&quot;collection&quot;/>
    <entry>
        <fullUrl value=&quot;urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a&quot;/>
        <resource>
            <PlanDefinition>
                <id value=&quot;plandefinition-drug-pq-ex3-drug-specification&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/PlanDefinition-drug-pq&quot;/>
                </meta>
                <url value=&quot;http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a&quot;/>
                <title value=&quot;SPECIFICATION(S) FOR DRUG PRODUCT&quot;/>
                <status value=&quot;active&quot;/>
                <subjectReference>
                    <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-pq-ex1&quot;/>
                </subjectReference>
                <description value=&quot;Narrative description of specifications&quot;/>
                <action>
                    <!-- this is then entire thing -->
                    <title value=&quot;Specification(s) for Drug Product&quot;/>
                    <code>
                        <text value=&quot;Overall set of actions&quot;/>
                    </code>
                    <action>
                        <title value=&quot;Release&quot;/>
                        <code>
                            <text value=&quot;Timing Group&quot;/>
                        </code>
                        <timingTiming>
                            <code>
                                <text value=&quot;Release time&quot;/>
                            </code>
                        </timingTiming>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--                            <definitionCanonical value=&quot;ObservationDefinition/Description&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/77e7020a-270c-6bed-2e55-28e9e942546c&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--                            <definitionCanonical value=&quot;ObservationDefinition/Identification&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/0d0ef4cf-242c-1cb1-81c4-c41837ee9a12&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/Assay&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/c0f05343-5b98-6073-1a0f-873aaf4f59bc&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/Degradation&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/a3d4d23a-800a-684a-6a47-fcfe44e06041&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/Dissolution&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/bb11322b-9470-4f13-91b5-c8a5253380eb&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/Uniformity&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/e7e2fe59-5433-5cc0-84b1-d5f30032790c&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/Microbiological&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/64972eb3-99ee-7eae-2f63-733e5ae84f71&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--definitionCanonical value=&quot;ObservationDefinition/Water&quot;/-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/6ce8ab6d-55e2-0412-5fb1-ab33763f30b1&quot;/>
                        </action>
                    </action>
                    <action>
                        <title value=&quot;End of shelf life&quot;/>
                        <code>
                            <text value=&quot;Timing Group&quot;/>
                        </code>
                        <timingTiming>
                            <code>
                                <text value=&quot;At end of shelf life&quot;/>
                            </code>
                        </timingTiming>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/DescriptionEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/d24ce3cd-213d-4935-97cf-8e2dd03721ec&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/IdentificationEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/f77ba972-5ef8-a178-9a5f-fe7f54da7499&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--                            <definitionCanonical value=&quot;ObservationDefinition/AssayEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/f4a74fd3-876e-38ce-021f-04e5a8fb6a3f&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--                            <definitionCanonical value=&quot;ObservationDefinition/DegradationEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/ef72eeb7-211a-3c16-8460-8725ca43584f&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/DissolutionEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/6fa69a2d-5a9f-a391-76e6-bbdfba0b45ea&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/UniformityEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/43dbc2a3-00c4-6f79-6b11-63768b412aa3&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/MicrobiologicalEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/e582e504-36ec-3b50-4043-51bf1147124e&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/WaterEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/91391017-774b-5c77-93fa-642534278851&quot;/>
                        </action>
                    </action>
                </action>
            </PlanDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:77e7020a-270c-6bed-2e55-28e9e942546c&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Description&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/77e7020a-270c-6bed-2e55-28e9e942546c&quot;/>
                <title value=&quot;Description&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
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
                        <valueString value=&quot;An orange film-coated tablet, debossed with 175 on one side&quot;/>
                    </extension>
                </qualifiedValue>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:d24ce3cd-213d-4935-97cf-8e2dd03721ec&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;DescriptionEnd&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/d24ce3cd-213d-4935-97cf-8e2dd03721ec&quot;/>
                <title value=&quot;Description&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;DESC&quot;/>
                        <display value=&quot;Description&quot;/>
                    </coding>
                    <text value=&quot;Description&quot;/>
                </code>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;As for release&quot;/>
                    </extension>
                </qualifiedValue>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:0d0ef4cf-242c-1cb1-81c4-c41837ee9a12&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Identification&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/0d0ef4cf-242c-1cb1-81c4-c41837ee9a12&quot;/>
                <title value=&quot;Identification&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;IDT&quot;/>
                        <display value=&quot;Identification&quot;/>
                    </coding>
                    <text value=&quot;Identification&quot;/>
                </code>
                <method>
                    <text value=&quot;ID by UHPLC&quot;/>
                </method>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;Consistent with the retention time and UV spectrum of the reference standard&quot;/>
                    </extension>
                </qualifiedValue>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:f77ba972-5ef8-a178-9a5f-fe7f54da7499&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;IdentificationEnd&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/f77ba972-5ef8-a178-9a5f-fe7f54da7499&quot;/>
                <title value=&quot;Identification&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;IDT&quot;/>
                        <display value=&quot;Identification&quot;/>
                    </coding>
                    <text value=&quot;Identification&quot;/>
                </code>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;As for release&quot;/>
                    </extension>
                </qualifiedValue>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:c0f05343-5b98-6073-1a0f-873aaf4f59bc&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Assay&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/c0f05343-5b98-6073-1a0f-873aaf4f59bc&quot;/>
                <title value=&quot;Assay&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;ASSAY&quot;/>
                        <display value=&quot;Assay&quot;/>
                    </coding>
                    <text value=&quot;Assay&quot;/>
                </code>
                <method>
                    <text value=&quot;Assay by UHPLC&quot;/>
                </method>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;95% to 105% of label claim&quot;/>
                    </extension>
                </qualifiedValue>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:f4a74fd3-876e-38ce-021f-04e5a8fb6a3f&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;AssayEnd&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/f4a74fd3-876e-38ce-021f-04e5a8fb6a3f&quot;/>
                <title value=&quot;Assay&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;ASSAY&quot;/>
                        <display value=&quot;Assay&quot;/>
                    </coding>
                    <text value=&quot;Assay&quot;/>
                </code>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;As for release&quot;/>
                    </extension>
                </qualifiedValue>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:a3d4d23a-800a-684a-6a47-fcfe44e06041&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Degradation&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/a3d4d23a-800a-684a-6a47-fcfe44e06041&quot;/>
                <title value=&quot;Degradation Products&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                </code>
                <method>
                    <text value=&quot;Degradation products by UHPLC&quot;/>
                </method>
                <qualifiedValue>
                    <appliesTo>
                        <!-- could be a code -->
                        <text value=&quot;Impurity 1&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;0.2&quot;/>
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
                            <value value=&quot;0.3&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>
                    </range>
                </qualifiedValue>
                <qualifiedValue>
                    <appliesTo>
                        <text value=&quot;Impurity 3&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;0.3&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>
                    </range>
                </qualifiedValue>
                <qualifiedValue>
                    <appliesTo>
                        <text value=&quot;Individual unspecified degradation products&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;0.2&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>
                    </range>
                </qualifiedValue>
                <qualifiedValue>
                    <appliesTo>
                        <text value=&quot;Total degradation products&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;1.4&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>
                    </range>
                </qualifiedValue>
                <component>
                    <!-- are expected to have a component that says what impurity this one is -->
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                </component>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:ef72eeb7-211a-3c16-8460-8725ca43584f&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;DegradationEnd&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/ef72eeb7-211a-3c16-8460-8725ca43584f&quot;/>
                <title value=&quot;Degradation Products&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                </code>
                <qualifiedValue>
                    <appliesTo>
                        <!-- could be a code -->
                        <text value=&quot;Impurity 1&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;0.8&quot;/>
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
                            <value value=&quot;0.4&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>
                    </range>
                </qualifiedValue>
                <qualifiedValue>
                    <appliesTo>
                        <text value=&quot;Impurity 3&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;0.4&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>
                    </range>
                </qualifiedValue>
                <qualifiedValue>
                    <appliesTo>
                        <text value=&quot;Individual unspecified degradation products&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;2.3&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>
                    </range>
                </qualifiedValue>
                <qualifiedValue>
                    <appliesTo>
                        <text value=&quot;Total degradation products&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;2.3&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>
                    </range>
                </qualifiedValue>
                <component>
                    <!-- are expected to have a component that says what impurity this one is -->
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                </component>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:bb11322b-9470-4f13-91b5-c8a5253380eb&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Dissolution&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/bb11322b-9470-4f13-91b5-c8a5253380eb&quot;/>
                <title value=&quot;Dissolution&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Dissolution&quot;/>
                        <display value=&quot;Dissolution&quot;/>
                    </coding>
                    <text value=&quot;Dissolution&quot;/>
                </code>
                <method>
                    <text value=&quot;Apparatus 2 (paddles), UV measurement&quot;/>
                </method>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;Shall comply with the requirements of the harmonised USP/JP/Ph Eur Q=80% at 30 minutes&quot;/>
                    </extension>
                </qualifiedValue>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:6fa69a2d-5a9f-a391-76e6-bbdfba0b45ea&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;DissolutionEnd&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/6fa69a2d-5a9f-a391-76e6-bbdfba0b45ea&quot;/>
                <title value=&quot;Dissolution&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Dissolution&quot;/>
                        <display value=&quot;Dissolution&quot;/>
                    </coding>
                    <text value=&quot;Dissolution&quot;/>
                </code>
                <method>
                    <text value=&quot;Apparatus 2 (paddles), UV measurement&quot;/>
                </method>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;As for release&quot;/>
                    </extension>
                </qualifiedValue>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:6ce8ab6d-55e2-0412-5fb1-ab33763f30b1&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Water&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/6ce8ab6d-55e2-0412-5fb1-ab33763f30b1&quot;/>
                <title value=&quot;Water Content&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;WaterContent&quot;/>
                        <display value=&quot;Water Content&quot;/>
                    </coding>
                    <text value=&quot;Water Content&quot;/>
                </code>
                <method>
                    <text value=&quot;USP <921>&quot;/>
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
        <fullUrl value=&quot;urn:uuid:91391017-774b-5c77-93fa-642534278851&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;WaterEnd&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/91391017-774b-5c77-93fa-642534278851&quot;/>
                <title value=&quot;Water Content&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;WaterContent&quot;/>
                        <display value=&quot;Water Content&quot;/>
                    </coding>
                    <text value=&quot;Water Content&quot;/>
                </code>
                <method>
                    <text value=&quot;USP <921>&quot;/>
                </method>
                <qualifiedValue>
                    <range>
                        <high>
                            <value value=&quot;2.0&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>
                    </range>
                </qualifiedValue>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:64972eb3-99ee-7eae-2f63-733e5ae84f71&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Microbiological&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/64972eb3-99ee-7eae-2f63-733e5ae84f71&quot;/>
                <title value=&quot;Microbiological&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Microbiological Quality&quot;/>
                        <display value=&quot;Microbiological Quality&quot;/>
                    </coding>
                    <text value=&quot;Microbiological Quality&quot;/>
                </code>
                <method>
                    <text value=&quot;Ph Eur&quot;/>
                </method>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;Shall comply with the requirements of the Ph Eur&quot;/>
                    </extension>
                </qualifiedValue>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:e582e504-36ec-3b50-4043-51bf1147124e&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;MicrobiologicalEnd&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/e582e504-36ec-3b50-4043-51bf1147124e&quot;/>
                <title value=&quot;Microbiological&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Microbiological Quality&quot;/>
                        <display value=&quot;Microbiological Quality&quot;/>
                    </coding>
                    <text value=&quot;Microbiological Quality&quot;/>
                </code>
                <method>
                    <text value=&quot;Ph Eur&quot;/>
                </method>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;As for release&quot;/>
                    </extension>
                </qualifiedValue>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:e7e2fe59-5433-5cc0-84b1-d5f30032790c&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Uniformity&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/e7e2fe59-5433-5cc0-84b1-d5f30032790c&quot;/>
                <title value=&quot;Uniformity of dosage&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;uniformity-dosage&quot;/>
                        <display value=&quot;uniformity of dosage units (by weight)&quot;/>
                    </coding>
                    <text value=&quot;uniformity of dosage units (by weight)&quot;/>
                </code>
                <method>
                    <text value=&quot;Weight variation&quot;/>
                </method>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;Shall comply with the requirements of the harmonised USP/JP/Ph Eur&quot;/>
                    </extension>
                </qualifiedValue>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:43dbc2a3-00c4-6f79-6b11-63768b412aa3&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;UniformityEnd&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/43dbc2a3-00c4-6f79-6b11-63768b412aa3&quot;/>
                <title value=&quot;Uniformity of dosage&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;uniformity-dosage&quot;/>
                        <display value=&quot;uniformity of dosage units (by weight)&quot;/>
                    </coding>
                    <text value=&quot;uniformity of dosage units (by weight)&quot;/>
                </code>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;As for release&quot;/>
                    </extension>
                </qualifiedValue>
            </ObservationDefinition>
        </resource>
    </entry>
    <!-- MedicinalProductDefinition - the main resource in any product scenario -->
    <entry>
        <fullUrl value=&quot;urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d5&quot;/>
        <resource>
            <!-- Section 1.1 - DP Identification -->
            <MedicinalProductDefinition>
                <id value=&quot;medicinalproductdefinition-drug-product-pq-ex1&quot;/>
                <description value=&quot;Textual description of the product&quot;/>
                <combinedPharmaceuticalDoseForm>
                    <coding>
                        <system value=&quot;http://standardterms.edqm.eu&quot;/>
                        <code value=&quot;10225000&quot;/>
                        <display value=&quot;Gastro-resistant tablet&quot;/>
                    </coding>
                </combinedPharmaceuticalDoseForm>
                <route>
                    <coding>
                        <system value=&quot;http://standardterms.edqm.eu&quot;/>
                        <code value=&quot;20053000&quot;/>
                        <display value=&quot;Oral use&quot;/>
                    </coding>
                </route>
                <name>
                    <productName value=&quot;Stelbat Tablets, 20mg&quot;/>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-productNameType-pq-example&quot;/>
                            <code value=&quot;Proprietary&quot;/>
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
                    <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-pq-ex1&quot;/>
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
                            <reference value=&quot;SubstanceDefinition/substance1&quot;/>
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
    </entry>" id="Bundle-bundle-drug-product-specification-pq-ex1">Bundle</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/bundle.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/bundle.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/bundle.html#tt-uml">R6</a>]</span><div class="debugOff">id: bundle-drug-product-specification-pq-ex1</div>
<div class="debugOff"></div>
<div class="debugOff"><span title="
<Bundle>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-drug-product-specification-pq&quot;>">Profile: </span><span title="
<Bundle>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-drug-product-specification-pq&quot;>">http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-drug-product-specification-pq</span></div>
<div><span title="
<Bundle>
    ...
    <type value=&quot;collection&quot;>">Type: <span>collection</span></span></div>
</div>
</div>
<div>
<div class="indent plan summaryUnit" ondblclick="summaryHandler(event)"><a class="plainLink"><span class="bold" title="PlanDefinition (id: plandefinition-drug-pq-ex3-drug-specification)(fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/PlanDefinition-drug-pq 

<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <id value=&quot;plandefinition-drug-pq-ex3-drug-specification&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/PlanDefinition-drug-pq&quot;/>
                </meta>
                <url value=&quot;http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a&quot;/>
                <title value=&quot;SPECIFICATION(S) FOR DRUG PRODUCT&quot;/>
                <status value=&quot;active&quot;/>
                <subjectReference>
                    <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-pq-ex1&quot;/>
                </subjectReference>
                <description value=&quot;Narrative description of specifications&quot;/>
                <action>
                    <!-- this is then entire thing -->
                    <title value=&quot;Specification(s) for Drug Product&quot;/>
                    <code>
                        <text value=&quot;Overall set of actions&quot;/>
                    </code>
                    <action>
                        <title value=&quot;Release&quot;/>
                        <code>
                            <text value=&quot;Timing Group&quot;/>
                        </code>
                        <timingTiming>
                            <code>
                                <text value=&quot;Release time&quot;/>
                            </code>
                        </timingTiming>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--                            <definitionCanonical value=&quot;ObservationDefinition/Description&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/77e7020a-270c-6bed-2e55-28e9e942546c&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--                            <definitionCanonical value=&quot;ObservationDefinition/Identification&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/0d0ef4cf-242c-1cb1-81c4-c41837ee9a12&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/Assay&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/c0f05343-5b98-6073-1a0f-873aaf4f59bc&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/Degradation&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/a3d4d23a-800a-684a-6a47-fcfe44e06041&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/Dissolution&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/bb11322b-9470-4f13-91b5-c8a5253380eb&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/Uniformity&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/e7e2fe59-5433-5cc0-84b1-d5f30032790c&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/Microbiological&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/64972eb3-99ee-7eae-2f63-733e5ae84f71&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--definitionCanonical value=&quot;ObservationDefinition/Water&quot;/-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/6ce8ab6d-55e2-0412-5fb1-ab33763f30b1&quot;/>
                        </action>
                    </action>
                    <action>
                        <title value=&quot;End of shelf life&quot;/>
                        <code>
                            <text value=&quot;Timing Group&quot;/>
                        </code>
                        <timingTiming>
                            <code>
                                <text value=&quot;At end of shelf life&quot;/>
                            </code>
                        </timingTiming>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/DescriptionEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/d24ce3cd-213d-4935-97cf-8e2dd03721ec&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/IdentificationEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/f77ba972-5ef8-a178-9a5f-fe7f54da7499&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--                            <definitionCanonical value=&quot;ObservationDefinition/AssayEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/f4a74fd3-876e-38ce-021f-04e5a8fb6a3f&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--                            <definitionCanonical value=&quot;ObservationDefinition/DegradationEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/ef72eeb7-211a-3c16-8460-8725ca43584f&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/DissolutionEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/6fa69a2d-5a9f-a391-76e6-bbdfba0b45ea&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/UniformityEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/43dbc2a3-00c4-6f79-6b11-63768b412aa3&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/MicrobiologicalEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/e582e504-36ec-3b50-4043-51bf1147124e&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/WaterEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/91391017-774b-5c77-93fa-642534278851&quot;/>
                        </action>
                    </action>
                </action>" id="PlanDefinition-plandefinition-drug-pq-ex3-drug-specification">Plan</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/plandefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/plandefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/plandefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: plandefinition-drug-pq-ex3-drug-specification</div>
<div class="debugOff"> fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a</div>
<div class="debugOff"></div>
<div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/PlanDefinition-drug-pq&quot;>">Profile: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/PlanDefinition-drug-pq&quot;>">http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/PlanDefinition-drug-pq</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <title value=&quot;SPECIFICATION(S) FOR DRUG PRODUCT&quot;>">Title: </span><span>SPECIFICATION(S) FOR DRUG PRODUCT</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <description value=&quot;Narrative description of specifications&quot;>">Description: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <description value=&quot;Narrative description of specifications&quot;>">Narrative description of specifications</span></div>
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
</div>
<div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <id value=&quot;plandefinition-drug-pq-ex3-drug-specification&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/PlanDefinition-drug-pq&quot;/>
                </meta>
                <url value=&quot;http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a&quot;/>
                <title value=&quot;SPECIFICATION(S) FOR DRUG PRODUCT&quot;/>
                <status value=&quot;active&quot;/>
                <subjectReference>
                    <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-pq-ex1&quot;/>
                </subjectReference>
                <description value=&quot;Narrative description of specifications&quot;/>
                <action>
                    <!-- this is then entire thing -->
                    <title value=&quot;Specification(s) for Drug Product&quot;/>
                    <code>
                        <text value=&quot;Overall set of actions&quot;/>
                    </code>
                    <action>
                        <title value=&quot;Release&quot;/>
                        <code>
                            <text value=&quot;Timing Group&quot;/>
                        </code>
                        <timingTiming>
                            <code>
                                <text value=&quot;Release time&quot;/>
                            </code>
                        </timingTiming>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--                            <definitionCanonical value=&quot;ObservationDefinition/Description&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/77e7020a-270c-6bed-2e55-28e9e942546c&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--                            <definitionCanonical value=&quot;ObservationDefinition/Identification&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/0d0ef4cf-242c-1cb1-81c4-c41837ee9a12&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/Assay&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/c0f05343-5b98-6073-1a0f-873aaf4f59bc&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/Degradation&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/a3d4d23a-800a-684a-6a47-fcfe44e06041&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/Dissolution&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/bb11322b-9470-4f13-91b5-c8a5253380eb&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/Uniformity&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/e7e2fe59-5433-5cc0-84b1-d5f30032790c&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/Microbiological&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/64972eb3-99ee-7eae-2f63-733e5ae84f71&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--definitionCanonical value=&quot;ObservationDefinition/Water&quot;/-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/6ce8ab6d-55e2-0412-5fb1-ab33763f30b1&quot;/>
                        </action>
                    </action>
                    <action>
                        <title value=&quot;End of shelf life&quot;/>
                        <code>
                            <text value=&quot;Timing Group&quot;/>
                        </code>
                        <timingTiming>
                            <code>
                                <text value=&quot;At end of shelf life&quot;/>
                            </code>
                        </timingTiming>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/DescriptionEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/d24ce3cd-213d-4935-97cf-8e2dd03721ec&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/IdentificationEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/f77ba972-5ef8-a178-9a5f-fe7f54da7499&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--                            <definitionCanonical value=&quot;ObservationDefinition/AssayEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/f4a74fd3-876e-38ce-021f-04e5a8fb6a3f&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--                            <definitionCanonical value=&quot;ObservationDefinition/DegradationEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/ef72eeb7-211a-3c16-8460-8725ca43584f&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/DissolutionEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/6fa69a2d-5a9f-a391-76e6-bbdfba0b45ea&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/UniformityEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/43dbc2a3-00c4-6f79-6b11-63768b412aa3&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/MicrobiologicalEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/e582e504-36ec-3b50-4043-51bf1147124e&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/WaterEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/91391017-774b-5c77-93fa-642534278851&quot;/>
                        </action>
                    </action>
                </action>">Subject</span><div ondblclick="summaryHandler(event)" class="indent mpd summaryUnit"><a class="plainLink"><span class="bold" title="MedicinalProductDefinition (id: medicinalproductdefinition-drug-product-pq-ex1)(fullUrl: urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d5)

<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                <id value=&quot;medicinalproductdefinition-drug-product-pq-ex1&quot;/>
                <description value=&quot;Textual description of the product&quot;/>
                <combinedPharmaceuticalDoseForm>
                    <coding>
                        <system value=&quot;http://standardterms.edqm.eu&quot;/>
                        <code value=&quot;10225000&quot;/>
                        <display value=&quot;Gastro-resistant tablet&quot;/>
                    </coding>
                </combinedPharmaceuticalDoseForm>
                <route>
                    <coding>
                        <system value=&quot;http://standardterms.edqm.eu&quot;/>
                        <code value=&quot;20053000&quot;/>
                        <display value=&quot;Oral use&quot;/>
                    </coding>
                </route>
                <name>
                    <productName value=&quot;Stelbat Tablets, 20mg&quot;/>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-productNameType-pq-example&quot;/>
                            <code value=&quot;Proprietary&quot;/>
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
                </name>" id="MedicinalProductDefinition-medicinalproductdefinition-drug-product-pq-ex1">Product</span></a><span class="summaryHiddenOff"><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/medicinalproductdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/medicinalproductdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/medicinalproductdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: medicinalproductdefinition-drug-product-pq-ex1</div><div class="debugOff"> fullUrl: urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d5</div></span><div class="summaryHiddenOff"></div><span class="summaryShowsOff"><b> - </b></span><span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                ...
                <name>
                    <productName value=&quot;Stelbat Tablets, 20mg&quot;/>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-productNameType-pq-example&quot;/>
                            <code value=&quot;Proprietary&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-productNameType-pq-example&quot;/>
                            <code value=&quot;Proprietary&quot;/>
                            <display value=&quot;Proprietary&quot;/>
                        </coding>">Name type: </span><span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                <name>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-productNameType-pq-example&quot;/>
                            <code value=&quot;Proprietary&quot;/>
                            <display value=&quot;Proprietary&quot;/>">Proprietary<span class="greyOff"> [Proprietary]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-productNameType-pq-example)</span></span></div><div title="
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
                <description value=&quot;Textual description of the product&quot;>">Description: </span><span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                ...
                <description value=&quot;Textual description of the product&quot;>">Textual description of the product</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                ...
                <route>
                    <coding>
                        <system value=&quot;http://standardterms.edqm.eu&quot;/>
                        <code value=&quot;20053000&quot;/>
                        <display value=&quot;Oral use&quot;/>
                    </coding>">Route of Administration: </span><span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                <route>
                    <coding>
                        <system value=&quot;http://standardterms.edqm.eu&quot;/>
                        <code value=&quot;20053000&quot;/>
                        <display value=&quot;Oral use&quot;/>">Oral use<span class="greyOff"> [20053000]</span><span class="greyOff"> (http://standardterms.edqm.eu)</span></span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                ...
                <combinedPharmaceuticalDoseForm>
                    <coding>
                        <system value=&quot;http://standardterms.edqm.eu&quot;/>
                        <code value=&quot;10225000&quot;/>
                        <display value=&quot;Gastro-resistant tablet&quot;/>
                    </coding>">Dose Form (combination of all parts): </span><span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                <combinedPharmaceuticalDoseForm>
                    <coding>
                        <system value=&quot;http://standardterms.edqm.eu&quot;/>
                        <code value=&quot;10225000&quot;/>
                        <display value=&quot;Gastro-resistant tablet&quot;/>">Gastro-resistant tablet<span class="greyOff"> [10225000]</span><span class="greyOff"> (http://standardterms.edqm.eu)</span></span></div></div><div class="summaryHiddenOff"></div><div class="indent ing summaryUnit" ondblclick="summaryHandler(event)"><a class="plainLink"><span class="bold" title="Ingredient (id: productIngredient)(fullUrl: urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d6)

<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <id value=&quot;productIngredient&quot;/>
                <status value=&quot;active&quot;/>
                <for>
                    <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-pq-ex1&quot;/>
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
                            <reference value=&quot;SubstanceDefinition/substance1&quot;/>
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
                <status value=&quot;active&quot;>">Status: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                ...
                <status value=&quot;active&quot;>"><span>active</span></span></div><div><span title="
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
                            <reference value=&quot;SubstanceDefinition/substance1&quot;/>
                        </reference>
                    </code>" class="summaryHiddenOff">Substance</span><div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Ingredient/code, id: productIngredient fullUrl: urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d6)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: substance1)(fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821152)

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
                    <name value=&quot;Stelbatolol&quot;>">Name: <span>Stelbatolol</span></span></div></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div class="indent sbddetails2"><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                ...
                <manufacturer>
                    <reference value=&quot;Organization/substance-manufacturer&quot;/>">Manufacturer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (SubstanceDefinition/manufacturer, id: substance1 fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821152)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: substance-manufacturer)(fullUrl: urn:uuid:9fe98cfa-9245-8313-0fc5-d15e613b5d6d)

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
                        <country value=&quot;USA&quot;>">USA</span></div></div></div></div></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div></div><div class="summaryHiddenOff"></div></div><div class="summaryHiddenOff"></div></div><div></div></div></span><div class="htmlTableRemove"><br style="line-height:6px;"><div class="indent-no-border">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <title value=&quot;Specification(s) for Drug Product&quot;>">Action: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <title value=&quot;Specification(s) for Drug Product&quot;>">Specification(s) for Drug Product</span></div><br style="line-height:6px;"><br style="line-height:6px;"><table class="rounded-corners white" id="tabularModeTable" style="width:70%">
<tr>
<th rowspan="2">Test Procedure</th><th colspan="2">Acceptance Criteria</th>
<th rowspan="2">Method Reference</th></tr>
<tr>
<th width="30%" style="border-right: 0.1px solid black;">Release</th>
<th width="30%" style="border-right: 0.1px solid black;">End of shelf life</th>
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
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;An orange film-coated tablet, debossed with 175 on one side&quot;>">An orange film-coated tablet, debossed with 175 on one side</span></td>
<td class="centred"><span title="
<qualifiedValue>
    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
        <valueString value=&quot;As for release&quot;>">As for release</span></td>
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
                        <valueString value=&quot;Consistent with the retention time and UV spectrum of the reference standard&quot;>">Consistent with the retention time and UV spectrum of the reference standard</span></td>
<td class="centred"><span title="
<qualifiedValue>
    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
        <valueString value=&quot;As for release&quot;>">As for release</span></td>
<td class="centred">ID by UHPLC</td>
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
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;95% to 105% of label claim&quot;>">95% to 105% of label claim</span></td>
<td class="centred"><span title="
<qualifiedValue>
    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
        <valueString value=&quot;As for release&quot;>">As for release</span></td>
<td class="centred">Assay by UHPLC</td>
</tr>
<tr>
<td colspan="5">Degradation Products</td>
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
                            <value value=&quot;0.2&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>">NMT 0.2 % w/w</span></td>
<td class="centred"><span title="
<qualifiedValue>
    ...
    <range>
        <high>
            <value value=&quot;0.8&quot;/>
            <unit value=&quot;% w/w&quot;/>
        </high>">NMT 0.8 % w/w</span></td>
<td rowspan="5" class="centred">Degradation products by UHPLC</td>
</tr>
<tr>
<td style="padding-left:20px">Impurity 2</td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    ...
                    <range>
                        <high>
                            <value value=&quot;0.3&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>">NMT 0.3 % w/w</span></td>
<td class="centred" style="border-right: 1px solid black;"><span title="
<qualifiedValue>
    ...
    <range>
        <high>
            <value value=&quot;0.4&quot;/>
            <unit value=&quot;% w/w&quot;/>
        </high>">NMT 0.4 % w/w</span></td>
</tr>
<tr>
<td style="padding-left:20px">Impurity 3</td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    ...
                    <range>
                        <high>
                            <value value=&quot;0.3&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>">NMT 0.3 % w/w</span></td>
<td class="centred" style="border-right: 1px solid black;"><span title="
<qualifiedValue>
    ...
    <range>
        <high>
            <value value=&quot;0.4&quot;/>
            <unit value=&quot;% w/w&quot;/>
        </high>">NMT 0.4 % w/w</span></td>
</tr>
<tr>
<td style="padding-left:20px">Individual unspecified degradation products</td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    ...
                    <range>
                        <high>
                            <value value=&quot;0.2&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>">NMT 0.2 % w/w</span></td>
<td class="centred" style="border-right: 1px solid black;"><span title="
<qualifiedValue>
    ...
    <range>
        <high>
            <value value=&quot;2.3&quot;/>
            <unit value=&quot;% w/w&quot;/>
        </high>">NMT 2.3 % w/w</span></td>
</tr>
<tr>
<td style="padding-left:20px">Total degradation products</td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    ...
                    <range>
                        <high>
                            <value value=&quot;1.4&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>">NMT 1.4 % w/w</span></td>
<td class="centred" style="border-right: 1px solid black;"><span title="
<qualifiedValue>
    ...
    <range>
        <high>
            <value value=&quot;2.3&quot;/>
            <unit value=&quot;% w/w&quot;/>
        </high>">NMT 2.3 % w/w</span></td>
</tr>
</tr>
<tr>
<td><a href="#ObservationDefinition-Dissolution" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Dissolution&quot;>" class="noUnderline">Dissolution</a></td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;Shall comply with the requirements of the harmonised USP/JP/Ph Eur Q=80% at 30 minutes&quot;>">Shall comply with the requirements of the harmonised USP/JP/Ph Eur Q=80% at 30 minutes</span></td>
<td class="centred"><span title="
<qualifiedValue>
    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
        <valueString value=&quot;As for release&quot;>">As for release</span></td>
<td class="centred">Apparatus 2 (paddles), UV measurement</td>
</tr>
<tr>
<td><a href="#ObservationDefinition-Uniformity" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Uniformity of dosage&quot;>" class="noUnderline">Uniformity of dosage</a></td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;Shall comply with the requirements of the harmonised USP/JP/Ph Eur&quot;>">Shall comply with the requirements of the harmonised USP/JP/Ph Eur</span></td>
<td class="centred"><span title="
<qualifiedValue>
    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
        <valueString value=&quot;As for release&quot;>">As for release</span></td>
<td class="centred">Weight variation</td>
</tr>
<tr>
<td><a href="#ObservationDefinition-Microbiological" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Microbiological&quot;>" class="noUnderline">Microbiological</a></td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;Shall comply with the requirements of the Ph Eur&quot;>">Shall comply with the requirements of the Ph Eur</span></td>
<td class="centred"><span title="
<qualifiedValue>
    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
        <valueString value=&quot;As for release&quot;>">As for release</span></td>
<td class="centred">Ph Eur</td>
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
<td class="centred"><span title="
<qualifiedValue>
    <range>
        <high>
            <value value=&quot;2.0&quot;/>
            <unit value=&quot;% w/w&quot;/>
        </high>">NMT 2.0 % w/w</span></td>
<td class="centred">USP &lt;921&gt;</td>
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
                    <title value=&quot;Specification(s) for Drug Product&quot;/>
                    <code>
                        <text value=&quot;Overall set of actions&quot;/>
                    </code>
                    <action>
                        <title value=&quot;Release&quot;/>
                        <code>
                            <text value=&quot;Timing Group&quot;/>
                        </code>
                        <timingTiming>
                            <code>
                                <text value=&quot;Release time&quot;/>
                            </code>
                        </timingTiming>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--                            <definitionCanonical value=&quot;ObservationDefinition/Description&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/77e7020a-270c-6bed-2e55-28e9e942546c&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--                            <definitionCanonical value=&quot;ObservationDefinition/Identification&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/0d0ef4cf-242c-1cb1-81c4-c41837ee9a12&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/Assay&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/c0f05343-5b98-6073-1a0f-873aaf4f59bc&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/Degradation&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/a3d4d23a-800a-684a-6a47-fcfe44e06041&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/Dissolution&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/bb11322b-9470-4f13-91b5-c8a5253380eb&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/Uniformity&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/e7e2fe59-5433-5cc0-84b1-d5f30032790c&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/Microbiological&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/64972eb3-99ee-7eae-2f63-733e5ae84f71&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--definitionCanonical value=&quot;ObservationDefinition/Water&quot;/-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/6ce8ab6d-55e2-0412-5fb1-ab33763f30b1&quot;/>
                        </action>
                    </action>
                    <action>
                        <title value=&quot;End of shelf life&quot;/>
                        <code>
                            <text value=&quot;Timing Group&quot;/>
                        </code>
                        <timingTiming>
                            <code>
                                <text value=&quot;At end of shelf life&quot;/>
                            </code>
                        </timingTiming>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/DescriptionEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/d24ce3cd-213d-4935-97cf-8e2dd03721ec&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/IdentificationEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/f77ba972-5ef8-a178-9a5f-fe7f54da7499&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--                            <definitionCanonical value=&quot;ObservationDefinition/AssayEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/f4a74fd3-876e-38ce-021f-04e5a8fb6a3f&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--                            <definitionCanonical value=&quot;ObservationDefinition/DegradationEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/ef72eeb7-211a-3c16-8460-8725ca43584f&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/DissolutionEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/6fa69a2d-5a9f-a391-76e6-bbdfba0b45ea&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/UniformityEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/43dbc2a3-00c4-6f79-6b11-63768b412aa3&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/MicrobiologicalEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/e582e504-36ec-3b50-4043-51bf1147124e&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/WaterEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/91391017-774b-5c77-93fa-642534278851&quot;/>
                        </action>
                    </action>"><a id="urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a"><span>Action</span></a><span class="summaryShowsOff"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <title value=&quot;Specification(s) for Drug Product&quot;>"> - Specification(s) for Drug Product</span> - <span style="white-space:normal;">Overall set of actions</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <title value=&quot;Specification(s) for Drug Product&quot;>">Title: </span><span>Specification(s) for Drug Product</span></div>
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
                        <title value=&quot;Release&quot;/>
                        <code>
                            <text value=&quot;Timing Group&quot;/>
                        </code>
                        <timingTiming>
                            <code>
                                <text value=&quot;Release time&quot;/>
                            </code>
                        </timingTiming>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--                            <definitionCanonical value=&quot;ObservationDefinition/Description&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/77e7020a-270c-6bed-2e55-28e9e942546c&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--                            <definitionCanonical value=&quot;ObservationDefinition/Identification&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/0d0ef4cf-242c-1cb1-81c4-c41837ee9a12&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/Assay&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/c0f05343-5b98-6073-1a0f-873aaf4f59bc&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/Degradation&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/a3d4d23a-800a-684a-6a47-fcfe44e06041&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/Dissolution&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/bb11322b-9470-4f13-91b5-c8a5253380eb&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/Uniformity&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/e7e2fe59-5433-5cc0-84b1-d5f30032790c&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/Microbiological&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/64972eb3-99ee-7eae-2f63-733e5ae84f71&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--definitionCanonical value=&quot;ObservationDefinition/Water&quot;/-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/6ce8ab6d-55e2-0412-5fb1-ab33763f30b1&quot;/>
                        </action>"><a id="urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a"><span>Action</span></a><span class="summaryShowsOff"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <title value=&quot;Release&quot;>"> - Release</span> - <span style="white-space:normal;">Timing Group</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <title value=&quot;Release&quot;>">Title: </span><span>Release</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        ...
                        <code>
                            <text value=&quot;Timing Group&quot;/>">Code: </span><span style="white-space:normal;">Timing Group</span></div>
<div class="indent planl3"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        ...
                        <timingTiming>
                            <code>
                                <text value=&quot;Release time&quot;/>
                            </code>">Timing</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <timingTiming>
                            <code>
                                <text value=&quot;Release time&quot;/>">Code: <span style="white-space:normal;">Release time</span></span></div>
</div>
</div>
<div class="indent summaryUnit planl2" ondblclick="summaryHandler(event)"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        ...
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--                            <definitionCanonical value=&quot;ObservationDefinition/Description&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/77e7020a-270c-6bed-2e55-28e9e942546c&quot;/>"><a id="urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a"><span>Action</span></a><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>">Code: </span><span style="white-space:normal;">Test</span></div>
<div ondblclick="summaryHandler(event)" class="indent summaryUnit obsDef">
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: plandefinition-drug-pq-ex3-drug-specification fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265aurl (canonical): http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by canonical resource.url</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: Description)(fullUrl: urn:uuid:77e7020a-270c-6bed-2e55-28e9e942546c)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Description&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/77e7020a-270c-6bed-2e55-28e9e942546c&quot;/>
                <title value=&quot;Description&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
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
                        <valueString value=&quot;An orange film-coated tablet, debossed with 175 on one side&quot;/>
                    </extension>
                </qualifiedValue>" id="ObservationDefinition-Description">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;DESC&quot;/>
                        <display value=&quot;Description&quot;/>">Description<span class="greyOff"> [DESC]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: Description</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: Description</div>
<div class="debugOff"> fullUrl: urn:uuid:77e7020a-270c-6bed-2e55-28e9e942546c</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/77e7020a-270c-6bed-2e55-28e9e942546c</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Description&quot;>">Title: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Description&quot;>">Description</span></div>
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
                <status value=&quot;active&quot;>">Status: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <status value=&quot;active&quot;>"><span>active</span></span></div>
</div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;DESC&quot;/>
                        <display value=&quot;Description&quot;/>
                    </coding>
                    <text value=&quot;Description&quot;/>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;DESC&quot;/>
                        <display value=&quot;Description&quot;/>">Description<span class="greyOff"> [DESC]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: Description</span></span></div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <method>
                    <text value=&quot;Visual inspection&quot;/>">Method: <span style="white-space:normal;">Visual inspection</span></span></div>
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
                        <valueString value=&quot;An orange film-coated tablet, debossed with 175 on one side&quot;/>
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
                        <valueString value=&quot;An orange film-coated tablet, debossed with 175 on one side&quot;/>
                    </extension>">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;An orange film-coated tablet, debossed with 175 on one side&quot;/>">Text: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;An orange film-coated tablet, debossed with 175 on one side&quot;/>"><span>An orange film-coated tablet, debossed with 175 on one side</span></span></div>
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
                    <action>
                        ...
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--                            <definitionCanonical value=&quot;ObservationDefinition/Identification&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/0d0ef4cf-242c-1cb1-81c4-c41837ee9a12&quot;/>"><a id="urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a"><span>Action</span></a><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>">Code: </span><span style="white-space:normal;">Test</span></div>
<div ondblclick="summaryHandler(event)" class="indent summaryUnit obsDef">
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: plandefinition-drug-pq-ex3-drug-specification fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265aurl (canonical): http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by canonical resource.url</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: Identification)(fullUrl: urn:uuid:0d0ef4cf-242c-1cb1-81c4-c41837ee9a12)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Identification&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/0d0ef4cf-242c-1cb1-81c4-c41837ee9a12&quot;/>
                <title value=&quot;Identification&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;IDT&quot;/>
                        <display value=&quot;Identification&quot;/>
                    </coding>
                    <text value=&quot;Identification&quot;/>
                </code>
                <method>
                    <text value=&quot;ID by UHPLC&quot;/>
                </method>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;Consistent with the retention time and UV spectrum of the reference standard&quot;/>
                    </extension>
                </qualifiedValue>" id="ObservationDefinition-Identification">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;IDT&quot;/>
                        <display value=&quot;Identification&quot;/>">Identification<span class="greyOff"> [IDT]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: Identification</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: Identification</div>
<div class="debugOff"> fullUrl: urn:uuid:0d0ef4cf-242c-1cb1-81c4-c41837ee9a12</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/0d0ef4cf-242c-1cb1-81c4-c41837ee9a12</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Identification&quot;>">Title: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Identification&quot;>">Identification</span></div>
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
                <status value=&quot;active&quot;>">Status: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <status value=&quot;active&quot;>"><span>active</span></span></div>
</div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;IDT&quot;/>
                        <display value=&quot;Identification&quot;/>
                    </coding>
                    <text value=&quot;Identification&quot;/>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;IDT&quot;/>
                        <display value=&quot;Identification&quot;/>">Identification<span class="greyOff"> [IDT]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: Identification</span></span></div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <method>
                    <text value=&quot;ID by UHPLC&quot;/>">Method: <span style="white-space:normal;">ID by UHPLC</span></span></div>
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
                        <valueString value=&quot;Consistent with the retention time and UV spectrum of the reference standard&quot;/>
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
                        <valueString value=&quot;Consistent with the retention time and UV spectrum of the reference standard&quot;/>
                    </extension>">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;Consistent with the retention time and UV spectrum of the reference standard&quot;/>">Text: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;Consistent with the retention time and UV spectrum of the reference standard&quot;/>"><span>Consistent with the retention time and UV spectrum of the reference standard</span></span></div>
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
                    <action>
                        ...
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/Assay&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/c0f05343-5b98-6073-1a0f-873aaf4f59bc&quot;/>"><a id="urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a"><span>Action</span></a><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>">Code: </span><span style="white-space:normal;">Test</span></div>
<div ondblclick="summaryHandler(event)" class="indent summaryUnit obsDef">
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: plandefinition-drug-pq-ex3-drug-specification fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265aurl (canonical): http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by canonical resource.url</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: Assay)(fullUrl: urn:uuid:c0f05343-5b98-6073-1a0f-873aaf4f59bc)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Assay&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/c0f05343-5b98-6073-1a0f-873aaf4f59bc&quot;/>
                <title value=&quot;Assay&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;ASSAY&quot;/>
                        <display value=&quot;Assay&quot;/>
                    </coding>
                    <text value=&quot;Assay&quot;/>
                </code>
                <method>
                    <text value=&quot;Assay by UHPLC&quot;/>
                </method>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;95% to 105% of label claim&quot;/>
                    </extension>
                </qualifiedValue>" id="ObservationDefinition-Assay">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;ASSAY&quot;/>
                        <display value=&quot;Assay&quot;/>">Assay<span class="greyOff"> [ASSAY]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: Assay</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: Assay</div>
<div class="debugOff"> fullUrl: urn:uuid:c0f05343-5b98-6073-1a0f-873aaf4f59bc</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/c0f05343-5b98-6073-1a0f-873aaf4f59bc</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Assay&quot;>">Title: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Assay&quot;>">Assay</span></div>
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
                <status value=&quot;active&quot;>">Status: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <status value=&quot;active&quot;>"><span>active</span></span></div>
</div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;ASSAY&quot;/>
                        <display value=&quot;Assay&quot;/>
                    </coding>
                    <text value=&quot;Assay&quot;/>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;ASSAY&quot;/>
                        <display value=&quot;Assay&quot;/>">Assay<span class="greyOff"> [ASSAY]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: Assay</span></span></div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <method>
                    <text value=&quot;Assay by UHPLC&quot;/>">Method: <span style="white-space:normal;">Assay by UHPLC</span></span></div>
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
                        <valueString value=&quot;95% to 105% of label claim&quot;/>
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
                        <valueString value=&quot;95% to 105% of label claim&quot;/>
                    </extension>">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;95% to 105% of label claim&quot;/>">Text: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;95% to 105% of label claim&quot;/>"><span>95% to 105% of label claim</span></span></div>
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
                    <action>
                        ...
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/Degradation&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/a3d4d23a-800a-684a-6a47-fcfe44e06041&quot;/>"><a id="urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a"><span>Action</span></a><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>">Code: </span><span style="white-space:normal;">Test</span></div>
<div ondblclick="summaryHandler(event)" class="indent summaryUnit obsDef">
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: plandefinition-drug-pq-ex3-drug-specification fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265aurl (canonical): http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by canonical resource.url</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: Degradation)(fullUrl: urn:uuid:a3d4d23a-800a-684a-6a47-fcfe44e06041)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Degradation&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/a3d4d23a-800a-684a-6a47-fcfe44e06041&quot;/>
                <title value=&quot;Degradation Products&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                </code>
                <method>
                    <text value=&quot;Degradation products by UHPLC&quot;/>
                </method>
                <qualifiedValue>
                    <appliesTo>
                        <!-- could be a code -->
                        <text value=&quot;Impurity 1&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;0.2&quot;/>
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
                            <value value=&quot;0.3&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>
                    </range>
                </qualifiedValue>
                <qualifiedValue>
                    <appliesTo>
                        <text value=&quot;Impurity 3&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;0.3&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>
                    </range>
                </qualifiedValue>
                <qualifiedValue>
                    <appliesTo>
                        <text value=&quot;Individual unspecified degradation products&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;0.2&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>
                    </range>
                </qualifiedValue>
                <qualifiedValue>
                    <appliesTo>
                        <text value=&quot;Total degradation products&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;1.4&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>
                    </range>
                </qualifiedValue>
                <component>
                    <!-- are expected to have a component that says what impurity this one is -->
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                </component>" id="ObservationDefinition-Degradation">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: Degradation</div>
<div class="debugOff"> fullUrl: urn:uuid:a3d4d23a-800a-684a-6a47-fcfe44e06041</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/a3d4d23a-800a-684a-6a47-fcfe44e06041</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Degradation Products&quot;>">Title: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Degradation Products&quot;>">Degradation Products</span></div>
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
                <status value=&quot;active&quot;>">Status: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <status value=&quot;active&quot;>"><span>active</span></span></div>
</div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span></div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <method>
                    <text value=&quot;Degradation products by UHPLC&quot;/>">Method: <span style="white-space:normal;">Degradation products by UHPLC</span></span></div>
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
                            <value value=&quot;0.2&quot;/>
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
                            <value value=&quot;0.2&quot;/>
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
                        <text value=&quot;Impurity 1&quot;/>">Applies To: <span style="white-space:normal;">Impurity 1</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    ...
                    <range>
                        <high>
                            <value value=&quot;0.2&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>">Range: </span> to <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        <high>
                            <value value=&quot;0.2&quot;/>
                            <unit value=&quot;% w/w&quot;/>">0.2% w/w</span></div>
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
                            <value value=&quot;0.3&quot;/>
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
                            <value value=&quot;0.3&quot;/>
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
                        <text value=&quot;Impurity 2&quot;/>">Applies To: <span style="white-space:normal;">Impurity 2</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    ...
                    <range>
                        <high>
                            <value value=&quot;0.3&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>">Range: </span> to <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        <high>
                            <value value=&quot;0.3&quot;/>
                            <unit value=&quot;% w/w&quot;/>">0.3% w/w</span></div>
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
                        <text value=&quot;Impurity 3&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;0.3&quot;/>
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
                        <text value=&quot;Impurity 3&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;0.3&quot;/>
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
                        <text value=&quot;Impurity 3&quot;/>">Applies To: <span style="white-space:normal;">Impurity 3</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    ...
                    <range>
                        <high>
                            <value value=&quot;0.3&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>">Range: </span> to <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        <high>
                            <value value=&quot;0.3&quot;/>
                            <unit value=&quot;% w/w&quot;/>">0.3% w/w</span></div>
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
                        <text value=&quot;Individual unspecified degradation products&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;0.2&quot;/>
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
                        <text value=&quot;Individual unspecified degradation products&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;0.2&quot;/>
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
                        <text value=&quot;Individual unspecified degradation products&quot;/>">Applies To: <span style="white-space:normal;">Individual unspecified degradation products</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    ...
                    <range>
                        <high>
                            <value value=&quot;0.2&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>">Range: </span> to <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        <high>
                            <value value=&quot;0.2&quot;/>
                            <unit value=&quot;% w/w&quot;/>">0.2% w/w</span></div>
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
                        <text value=&quot;Total degradation products&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;1.4&quot;/>
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
                        <text value=&quot;Total degradation products&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;1.4&quot;/>
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
                        <text value=&quot;Total degradation products&quot;/>">Applies To: <span style="white-space:normal;">Total degradation products</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    ...
                    <range>
                        <high>
                            <value value=&quot;1.4&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>">Range: </span> to <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        <high>
                            <value value=&quot;1.4&quot;/>
                            <unit value=&quot;% w/w&quot;/>">1.4% w/w</span></div>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span></div>
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
                    <action>
                        ...
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/Dissolution&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/bb11322b-9470-4f13-91b5-c8a5253380eb&quot;/>"><a id="urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a"><span>Action</span></a><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>">Code: </span><span style="white-space:normal;">Test</span></div>
<div ondblclick="summaryHandler(event)" class="indent summaryUnit obsDef">
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: plandefinition-drug-pq-ex3-drug-specification fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265aurl (canonical): http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by canonical resource.url</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: Dissolution)(fullUrl: urn:uuid:bb11322b-9470-4f13-91b5-c8a5253380eb)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Dissolution&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/bb11322b-9470-4f13-91b5-c8a5253380eb&quot;/>
                <title value=&quot;Dissolution&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Dissolution&quot;/>
                        <display value=&quot;Dissolution&quot;/>
                    </coding>
                    <text value=&quot;Dissolution&quot;/>
                </code>
                <method>
                    <text value=&quot;Apparatus 2 (paddles), UV measurement&quot;/>
                </method>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;Shall comply with the requirements of the harmonised USP/JP/Ph Eur Q=80% at 30 minutes&quot;/>
                    </extension>
                </qualifiedValue>" id="ObservationDefinition-Dissolution">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Dissolution&quot;/>
                        <display value=&quot;Dissolution&quot;/>">Dissolution<span class="greyOff"> [Dissolution]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: Dissolution</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: Dissolution</div>
<div class="debugOff"> fullUrl: urn:uuid:bb11322b-9470-4f13-91b5-c8a5253380eb</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/bb11322b-9470-4f13-91b5-c8a5253380eb</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Dissolution&quot;>">Title: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Dissolution&quot;>">Dissolution</span></div>
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
                <status value=&quot;active&quot;>">Status: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <status value=&quot;active&quot;>"><span>active</span></span></div>
</div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Dissolution&quot;/>
                        <display value=&quot;Dissolution&quot;/>
                    </coding>
                    <text value=&quot;Dissolution&quot;/>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Dissolution&quot;/>
                        <display value=&quot;Dissolution&quot;/>">Dissolution<span class="greyOff"> [Dissolution]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: Dissolution</span></span></div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <method>
                    <text value=&quot;Apparatus 2 (paddles), UV measurement&quot;/>">Method: <span style="white-space:normal;">Apparatus 2 (paddles), UV measurement</span></span></div>
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
                        <valueString value=&quot;Shall comply with the requirements of the harmonised USP/JP/Ph Eur Q=80% at 30 minutes&quot;/>
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
                        <valueString value=&quot;Shall comply with the requirements of the harmonised USP/JP/Ph Eur Q=80% at 30 minutes&quot;/>
                    </extension>">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;Shall comply with the requirements of the harmonised USP/JP/Ph Eur Q=80% at 30 minutes&quot;/>">Text: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;Shall comply with the requirements of the harmonised USP/JP/Ph Eur Q=80% at 30 minutes&quot;/>"><span>Shall comply with the requirements of the harmonised USP/JP/Ph Eur Q=80% at 30 minutes</span></span></div>
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
                    <action>
                        ...
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/Uniformity&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/e7e2fe59-5433-5cc0-84b1-d5f30032790c&quot;/>"><a id="urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a"><span>Action</span></a><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>">Code: </span><span style="white-space:normal;">Test</span></div>
<div ondblclick="summaryHandler(event)" class="indent summaryUnit obsDef">
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: plandefinition-drug-pq-ex3-drug-specification fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265aurl (canonical): http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by canonical resource.url</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: Uniformity)(fullUrl: urn:uuid:e7e2fe59-5433-5cc0-84b1-d5f30032790c)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Uniformity&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/e7e2fe59-5433-5cc0-84b1-d5f30032790c&quot;/>
                <title value=&quot;Uniformity of dosage&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;uniformity-dosage&quot;/>
                        <display value=&quot;uniformity of dosage units (by weight)&quot;/>
                    </coding>
                    <text value=&quot;uniformity of dosage units (by weight)&quot;/>
                </code>
                <method>
                    <text value=&quot;Weight variation&quot;/>
                </method>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;Shall comply with the requirements of the harmonised USP/JP/Ph Eur&quot;/>
                    </extension>
                </qualifiedValue>" id="ObservationDefinition-Uniformity">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;uniformity-dosage&quot;/>
                        <display value=&quot;uniformity of dosage units (by weight)&quot;/>">uniformity of dosage units (by weight)<span class="greyOff"> [uniformity-dosage]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: uniformity of dosage units (by weight)</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: Uniformity</div>
<div class="debugOff"> fullUrl: urn:uuid:e7e2fe59-5433-5cc0-84b1-d5f30032790c</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/e7e2fe59-5433-5cc0-84b1-d5f30032790c</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Uniformity of dosage&quot;>">Title: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Uniformity of dosage&quot;>">Uniformity of dosage</span></div>
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
                <status value=&quot;active&quot;>">Status: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <status value=&quot;active&quot;>"><span>active</span></span></div>
</div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;uniformity-dosage&quot;/>
                        <display value=&quot;uniformity of dosage units (by weight)&quot;/>
                    </coding>
                    <text value=&quot;uniformity of dosage units (by weight)&quot;/>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;uniformity-dosage&quot;/>
                        <display value=&quot;uniformity of dosage units (by weight)&quot;/>">uniformity of dosage units (by weight)<span class="greyOff"> [uniformity-dosage]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: uniformity of dosage units (by weight)</span></span></div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <method>
                    <text value=&quot;Weight variation&quot;/>">Method: <span style="white-space:normal;">Weight variation</span></span></div>
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
                        <valueString value=&quot;Shall comply with the requirements of the harmonised USP/JP/Ph Eur&quot;/>
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
                        <valueString value=&quot;Shall comply with the requirements of the harmonised USP/JP/Ph Eur&quot;/>
                    </extension>">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;Shall comply with the requirements of the harmonised USP/JP/Ph Eur&quot;/>">Text: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;Shall comply with the requirements of the harmonised USP/JP/Ph Eur&quot;/>"><span>Shall comply with the requirements of the harmonised USP/JP/Ph Eur</span></span></div>
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
                    <action>
                        ...
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/Microbiological&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/64972eb3-99ee-7eae-2f63-733e5ae84f71&quot;/>"><a id="urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a"><span>Action</span></a><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>">Code: </span><span style="white-space:normal;">Test</span></div>
<div ondblclick="summaryHandler(event)" class="indent summaryUnit obsDef">
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: plandefinition-drug-pq-ex3-drug-specification fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265aurl (canonical): http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by canonical resource.url</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: Microbiological)(fullUrl: urn:uuid:64972eb3-99ee-7eae-2f63-733e5ae84f71)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Microbiological&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/64972eb3-99ee-7eae-2f63-733e5ae84f71&quot;/>
                <title value=&quot;Microbiological&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Microbiological Quality&quot;/>
                        <display value=&quot;Microbiological Quality&quot;/>
                    </coding>
                    <text value=&quot;Microbiological Quality&quot;/>
                </code>
                <method>
                    <text value=&quot;Ph Eur&quot;/>
                </method>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;Shall comply with the requirements of the Ph Eur&quot;/>
                    </extension>
                </qualifiedValue>" id="ObservationDefinition-Microbiological">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Microbiological Quality&quot;/>
                        <display value=&quot;Microbiological Quality&quot;/>">Microbiological Quality<span class="greyOff"> [Microbiological Quality]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: Microbiological Quality</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: Microbiological</div>
<div class="debugOff"> fullUrl: urn:uuid:64972eb3-99ee-7eae-2f63-733e5ae84f71</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/64972eb3-99ee-7eae-2f63-733e5ae84f71</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Microbiological&quot;>">Title: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Microbiological&quot;>">Microbiological</span></div>
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
                <status value=&quot;active&quot;>">Status: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <status value=&quot;active&quot;>"><span>active</span></span></div>
</div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Microbiological Quality&quot;/>
                        <display value=&quot;Microbiological Quality&quot;/>
                    </coding>
                    <text value=&quot;Microbiological Quality&quot;/>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Microbiological Quality&quot;/>
                        <display value=&quot;Microbiological Quality&quot;/>">Microbiological Quality<span class="greyOff"> [Microbiological Quality]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: Microbiological Quality</span></span></div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <method>
                    <text value=&quot;Ph Eur&quot;/>">Method: <span style="white-space:normal;">Ph Eur</span></span></div>
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
                        <valueString value=&quot;Shall comply with the requirements of the Ph Eur&quot;/>
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
                        <valueString value=&quot;Shall comply with the requirements of the Ph Eur&quot;/>
                    </extension>">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;Shall comply with the requirements of the Ph Eur&quot;/>">Text: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;Shall comply with the requirements of the Ph Eur&quot;/>"><span>Shall comply with the requirements of the Ph Eur</span></span></div>
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
                    <action>
                        ...
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--definitionCanonical value=&quot;ObservationDefinition/Water&quot;/-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/6ce8ab6d-55e2-0412-5fb1-ab33763f30b1&quot;/>"><a id="urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a"><span>Action</span></a><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>">Code: </span><span style="white-space:normal;">Test</span></div>
<div ondblclick="summaryHandler(event)" class="indent summaryUnit obsDef">
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: plandefinition-drug-pq-ex3-drug-specification fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265aurl (canonical): http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by canonical resource.url</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: Water)(fullUrl: urn:uuid:6ce8ab6d-55e2-0412-5fb1-ab33763f30b1)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;Water&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/6ce8ab6d-55e2-0412-5fb1-ab33763f30b1&quot;/>
                <title value=&quot;Water Content&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;WaterContent&quot;/>
                        <display value=&quot;Water Content&quot;/>
                    </coding>
                    <text value=&quot;Water Content&quot;/>
                </code>
                <method>
                    <text value=&quot;USP <921>&quot;/>
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
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;WaterContent&quot;/>
                        <display value=&quot;Water Content&quot;/>">Water Content<span class="greyOff"> [WaterContent]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: Water Content</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: Water</div>
<div class="debugOff"> fullUrl: urn:uuid:6ce8ab6d-55e2-0412-5fb1-ab33763f30b1</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/6ce8ab6d-55e2-0412-5fb1-ab33763f30b1</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Water Content&quot;>">Title: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Water Content&quot;>">Water Content</span></div>
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
                <status value=&quot;active&quot;>">Status: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <status value=&quot;active&quot;>"><span>active</span></span></div>
</div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;WaterContent&quot;/>
                        <display value=&quot;Water Content&quot;/>
                    </coding>
                    <text value=&quot;Water Content&quot;/>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;WaterContent&quot;/>
                        <display value=&quot;Water Content&quot;/>">Water Content<span class="greyOff"> [WaterContent]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: Water Content</span></span></div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <method>
                    <text value=&quot;USP <921>&quot;/>">Method: <span style="white-space:normal;">USP <921></span></span></div>
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
</div>
<div class="indent summaryUnit planl2" ondblclick="summaryHandler(event)"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <action>
                        <title value=&quot;End of shelf life&quot;/>
                        <code>
                            <text value=&quot;Timing Group&quot;/>
                        </code>
                        <timingTiming>
                            <code>
                                <text value=&quot;At end of shelf life&quot;/>
                            </code>
                        </timingTiming>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/DescriptionEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/d24ce3cd-213d-4935-97cf-8e2dd03721ec&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/IdentificationEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/f77ba972-5ef8-a178-9a5f-fe7f54da7499&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--                            <definitionCanonical value=&quot;ObservationDefinition/AssayEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/f4a74fd3-876e-38ce-021f-04e5a8fb6a3f&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--                            <definitionCanonical value=&quot;ObservationDefinition/DegradationEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/ef72eeb7-211a-3c16-8460-8725ca43584f&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/DissolutionEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/6fa69a2d-5a9f-a391-76e6-bbdfba0b45ea&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/UniformityEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/43dbc2a3-00c4-6f79-6b11-63768b412aa3&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/MicrobiologicalEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/e582e504-36ec-3b50-4043-51bf1147124e&quot;/>
                        </action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/WaterEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/91391017-774b-5c77-93fa-642534278851&quot;/>
                        </action>"><a id="urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a"><span>Action</span></a><span class="summaryShowsOff"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <title value=&quot;End of shelf life&quot;>"> - End of shelf life</span> - <span style="white-space:normal;">Timing Group</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <title value=&quot;End of shelf life&quot;>">Title: </span><span>End of shelf life</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        ...
                        <code>
                            <text value=&quot;Timing Group&quot;/>">Code: </span><span style="white-space:normal;">Timing Group</span></div>
<div class="indent planl3"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        ...
                        <timingTiming>
                            <code>
                                <text value=&quot;At end of shelf life&quot;/>
                            </code>">Timing</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <timingTiming>
                            <code>
                                <text value=&quot;At end of shelf life&quot;/>">Code: <span style="white-space:normal;">At end of shelf life</span></span></div>
</div>
</div>
<div class="indent summaryUnit planl2" ondblclick="summaryHandler(event)"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        ...
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/DescriptionEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/d24ce3cd-213d-4935-97cf-8e2dd03721ec&quot;/>"><a id="urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a"><span>Action</span></a><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>">Code: </span><span style="white-space:normal;">Test</span></div>
<div ondblclick="summaryHandler(event)" class="indent summaryUnit obsDef">
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: plandefinition-drug-pq-ex3-drug-specification fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265aurl (canonical): http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by canonical resource.url</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: DescriptionEnd)(fullUrl: urn:uuid:d24ce3cd-213d-4935-97cf-8e2dd03721ec)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;DescriptionEnd&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/d24ce3cd-213d-4935-97cf-8e2dd03721ec&quot;/>
                <title value=&quot;Description&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;DESC&quot;/>
                        <display value=&quot;Description&quot;/>
                    </coding>
                    <text value=&quot;Description&quot;/>
                </code>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;As for release&quot;/>
                    </extension>
                </qualifiedValue>" id="ObservationDefinition-DescriptionEnd">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;DESC&quot;/>
                        <display value=&quot;Description&quot;/>">Description<span class="greyOff"> [DESC]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: Description</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: DescriptionEnd</div>
<div class="debugOff"> fullUrl: urn:uuid:d24ce3cd-213d-4935-97cf-8e2dd03721ec</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/d24ce3cd-213d-4935-97cf-8e2dd03721ec</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Description&quot;>">Title: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Description&quot;>">Description</span></div>
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
                <status value=&quot;active&quot;>">Status: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <status value=&quot;active&quot;>"><span>active</span></span></div>
</div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;DESC&quot;/>
                        <display value=&quot;Description&quot;/>
                    </coding>
                    <text value=&quot;Description&quot;/>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;DESC&quot;/>
                        <display value=&quot;Description&quot;/>">Description<span class="greyOff"> [DESC]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: Description</span></span></div>
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
                        <valueString value=&quot;As for release&quot;/>
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
                        <valueString value=&quot;As for release&quot;/>
                    </extension>">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;As for release&quot;/>">Text: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;As for release&quot;/>"><span>As for release</span></span></div>
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
                    <action>
                        ...
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/IdentificationEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/f77ba972-5ef8-a178-9a5f-fe7f54da7499&quot;/>"><a id="urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a"><span>Action</span></a><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>">Code: </span><span style="white-space:normal;">Test</span></div>
<div ondblclick="summaryHandler(event)" class="indent summaryUnit obsDef">
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: plandefinition-drug-pq-ex3-drug-specification fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265aurl (canonical): http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by canonical resource.url</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: IdentificationEnd)(fullUrl: urn:uuid:f77ba972-5ef8-a178-9a5f-fe7f54da7499)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;IdentificationEnd&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/f77ba972-5ef8-a178-9a5f-fe7f54da7499&quot;/>
                <title value=&quot;Identification&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;IDT&quot;/>
                        <display value=&quot;Identification&quot;/>
                    </coding>
                    <text value=&quot;Identification&quot;/>
                </code>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;As for release&quot;/>
                    </extension>
                </qualifiedValue>" id="ObservationDefinition-IdentificationEnd">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;IDT&quot;/>
                        <display value=&quot;Identification&quot;/>">Identification<span class="greyOff"> [IDT]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: Identification</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: IdentificationEnd</div>
<div class="debugOff"> fullUrl: urn:uuid:f77ba972-5ef8-a178-9a5f-fe7f54da7499</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/f77ba972-5ef8-a178-9a5f-fe7f54da7499</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Identification&quot;>">Title: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Identification&quot;>">Identification</span></div>
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
                <status value=&quot;active&quot;>">Status: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <status value=&quot;active&quot;>"><span>active</span></span></div>
</div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;IDT&quot;/>
                        <display value=&quot;Identification&quot;/>
                    </coding>
                    <text value=&quot;Identification&quot;/>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;IDT&quot;/>
                        <display value=&quot;Identification&quot;/>">Identification<span class="greyOff"> [IDT]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: Identification</span></span></div>
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
                        <valueString value=&quot;As for release&quot;/>
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
                        <valueString value=&quot;As for release&quot;/>
                    </extension>">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;As for release&quot;/>">Text: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;As for release&quot;/>"><span>As for release</span></span></div>
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
                    <action>
                        ...
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--                            <definitionCanonical value=&quot;ObservationDefinition/AssayEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/f4a74fd3-876e-38ce-021f-04e5a8fb6a3f&quot;/>"><a id="urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a"><span>Action</span></a><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>">Code: </span><span style="white-space:normal;">Test</span></div>
<div ondblclick="summaryHandler(event)" class="indent summaryUnit obsDef">
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: plandefinition-drug-pq-ex3-drug-specification fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265aurl (canonical): http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by canonical resource.url</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: AssayEnd)(fullUrl: urn:uuid:f4a74fd3-876e-38ce-021f-04e5a8fb6a3f)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;AssayEnd&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/f4a74fd3-876e-38ce-021f-04e5a8fb6a3f&quot;/>
                <title value=&quot;Assay&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;ASSAY&quot;/>
                        <display value=&quot;Assay&quot;/>
                    </coding>
                    <text value=&quot;Assay&quot;/>
                </code>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;As for release&quot;/>
                    </extension>
                </qualifiedValue>" id="ObservationDefinition-AssayEnd">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;ASSAY&quot;/>
                        <display value=&quot;Assay&quot;/>">Assay<span class="greyOff"> [ASSAY]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: Assay</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: AssayEnd</div>
<div class="debugOff"> fullUrl: urn:uuid:f4a74fd3-876e-38ce-021f-04e5a8fb6a3f</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/f4a74fd3-876e-38ce-021f-04e5a8fb6a3f</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Assay&quot;>">Title: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Assay&quot;>">Assay</span></div>
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
                <status value=&quot;active&quot;>">Status: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <status value=&quot;active&quot;>"><span>active</span></span></div>
</div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;ASSAY&quot;/>
                        <display value=&quot;Assay&quot;/>
                    </coding>
                    <text value=&quot;Assay&quot;/>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;ASSAY&quot;/>
                        <display value=&quot;Assay&quot;/>">Assay<span class="greyOff"> [ASSAY]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: Assay</span></span></div>
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
                        <valueString value=&quot;As for release&quot;/>
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
                        <valueString value=&quot;As for release&quot;/>
                    </extension>">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;As for release&quot;/>">Text: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;As for release&quot;/>"><span>As for release</span></span></div>
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
                    <action>
                        ...
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--                            <definitionCanonical value=&quot;ObservationDefinition/DegradationEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/ef72eeb7-211a-3c16-8460-8725ca43584f&quot;/>"><a id="urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a"><span>Action</span></a><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>">Code: </span><span style="white-space:normal;">Test</span></div>
<div ondblclick="summaryHandler(event)" class="indent summaryUnit obsDef">
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: plandefinition-drug-pq-ex3-drug-specification fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265aurl (canonical): http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by canonical resource.url</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: DegradationEnd)(fullUrl: urn:uuid:ef72eeb7-211a-3c16-8460-8725ca43584f)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;DegradationEnd&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/ef72eeb7-211a-3c16-8460-8725ca43584f&quot;/>
                <title value=&quot;Degradation Products&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>
                </code>
                <qualifiedValue>
                    <appliesTo>
                        <!-- could be a code -->
                        <text value=&quot;Impurity 1&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;0.8&quot;/>
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
                            <value value=&quot;0.4&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>
                    </range>
                </qualifiedValue>
                <qualifiedValue>
                    <appliesTo>
                        <text value=&quot;Impurity 3&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;0.4&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>
                    </range>
                </qualifiedValue>
                <qualifiedValue>
                    <appliesTo>
                        <text value=&quot;Individual unspecified degradation products&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;2.3&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>
                    </range>
                </qualifiedValue>
                <qualifiedValue>
                    <appliesTo>
                        <text value=&quot;Total degradation products&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;2.3&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>
                    </range>
                </qualifiedValue>
                <component>
                    <!-- are expected to have a component that says what impurity this one is -->
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>
                    </code>
                </component>" id="ObservationDefinition-DegradationEnd">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: DegradationEnd</div>
<div class="debugOff"> fullUrl: urn:uuid:ef72eeb7-211a-3c16-8460-8725ca43584f</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/ef72eeb7-211a-3c16-8460-8725ca43584f</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Degradation Products&quot;>">Title: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Degradation Products&quot;>">Degradation Products</span></div>
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
                <status value=&quot;active&quot;>">Status: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <status value=&quot;active&quot;>"><span>active</span></span></div>
</div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>
                    </coding>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;DGP&quot;/>
                        <display value=&quot;Degradation Products&quot;/>">Degradation Products<span class="greyOff"> [DGP]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span></div>
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
                            <value value=&quot;0.8&quot;/>
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
                            <value value=&quot;0.8&quot;/>
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
                        <text value=&quot;Impurity 1&quot;/>">Applies To: <span style="white-space:normal;">Impurity 1</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    ...
                    <range>
                        <high>
                            <value value=&quot;0.8&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>">Range: </span> to <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        <high>
                            <value value=&quot;0.8&quot;/>
                            <unit value=&quot;% w/w&quot;/>">0.8% w/w</span></div>
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
                            <value value=&quot;0.4&quot;/>
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
                            <value value=&quot;0.4&quot;/>
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
                        <text value=&quot;Impurity 2&quot;/>">Applies To: <span style="white-space:normal;">Impurity 2</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    ...
                    <range>
                        <high>
                            <value value=&quot;0.4&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>">Range: </span> to <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        <high>
                            <value value=&quot;0.4&quot;/>
                            <unit value=&quot;% w/w&quot;/>">0.4% w/w</span></div>
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
                        <text value=&quot;Impurity 3&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;0.4&quot;/>
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
                        <text value=&quot;Impurity 3&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;0.4&quot;/>
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
                        <text value=&quot;Impurity 3&quot;/>">Applies To: <span style="white-space:normal;">Impurity 3</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    ...
                    <range>
                        <high>
                            <value value=&quot;0.4&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>">Range: </span> to <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        <high>
                            <value value=&quot;0.4&quot;/>
                            <unit value=&quot;% w/w&quot;/>">0.4% w/w</span></div>
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
                        <text value=&quot;Individual unspecified degradation products&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;2.3&quot;/>
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
                        <text value=&quot;Individual unspecified degradation products&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;2.3&quot;/>
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
                        <text value=&quot;Individual unspecified degradation products&quot;/>">Applies To: <span style="white-space:normal;">Individual unspecified degradation products</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    ...
                    <range>
                        <high>
                            <value value=&quot;2.3&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>">Range: </span> to <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        <high>
                            <value value=&quot;2.3&quot;/>
                            <unit value=&quot;% w/w&quot;/>">2.3% w/w</span></div>
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
                        <text value=&quot;Total degradation products&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;2.3&quot;/>
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
                        <text value=&quot;Total degradation products&quot;/>
                    </appliesTo>
                    <range>
                        <high>
                            <value value=&quot;2.3&quot;/>
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
                        <text value=&quot;Total degradation products&quot;/>">Applies To: <span style="white-space:normal;">Total degradation products</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    ...
                    <range>
                        <high>
                            <value value=&quot;2.3&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>">Range: </span> to <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        <high>
                            <value value=&quot;2.3&quot;/>
                            <unit value=&quot;% w/w&quot;/>">2.3% w/w</span></div>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
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
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>
                        </coding>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;IMP&quot;/>
                            <display value=&quot;Impurity&quot;/>">Impurity<span class="greyOff"> [IMP]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span></div>
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
                    <action>
                        ...
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/DissolutionEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/6fa69a2d-5a9f-a391-76e6-bbdfba0b45ea&quot;/>"><a id="urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a"><span>Action</span></a><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>">Code: </span><span style="white-space:normal;">Test</span></div>
<div ondblclick="summaryHandler(event)" class="indent summaryUnit obsDef">
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: plandefinition-drug-pq-ex3-drug-specification fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265aurl (canonical): http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by canonical resource.url</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: DissolutionEnd)(fullUrl: urn:uuid:6fa69a2d-5a9f-a391-76e6-bbdfba0b45ea)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;DissolutionEnd&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/6fa69a2d-5a9f-a391-76e6-bbdfba0b45ea&quot;/>
                <title value=&quot;Dissolution&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Dissolution&quot;/>
                        <display value=&quot;Dissolution&quot;/>
                    </coding>
                    <text value=&quot;Dissolution&quot;/>
                </code>
                <method>
                    <text value=&quot;Apparatus 2 (paddles), UV measurement&quot;/>
                </method>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;As for release&quot;/>
                    </extension>
                </qualifiedValue>" id="ObservationDefinition-DissolutionEnd">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Dissolution&quot;/>
                        <display value=&quot;Dissolution&quot;/>">Dissolution<span class="greyOff"> [Dissolution]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: Dissolution</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: DissolutionEnd</div>
<div class="debugOff"> fullUrl: urn:uuid:6fa69a2d-5a9f-a391-76e6-bbdfba0b45ea</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/6fa69a2d-5a9f-a391-76e6-bbdfba0b45ea</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Dissolution&quot;>">Title: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Dissolution&quot;>">Dissolution</span></div>
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
                <status value=&quot;active&quot;>">Status: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <status value=&quot;active&quot;>"><span>active</span></span></div>
</div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Dissolution&quot;/>
                        <display value=&quot;Dissolution&quot;/>
                    </coding>
                    <text value=&quot;Dissolution&quot;/>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Dissolution&quot;/>
                        <display value=&quot;Dissolution&quot;/>">Dissolution<span class="greyOff"> [Dissolution]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: Dissolution</span></span></div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <method>
                    <text value=&quot;Apparatus 2 (paddles), UV measurement&quot;/>">Method: <span style="white-space:normal;">Apparatus 2 (paddles), UV measurement</span></span></div>
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
                        <valueString value=&quot;As for release&quot;/>
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
                        <valueString value=&quot;As for release&quot;/>
                    </extension>">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;As for release&quot;/>">Text: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;As for release&quot;/>"><span>As for release</span></span></div>
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
                    <action>
                        ...
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/UniformityEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/43dbc2a3-00c4-6f79-6b11-63768b412aa3&quot;/>"><a id="urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a"><span>Action</span></a><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>">Code: </span><span style="white-space:normal;">Test</span></div>
<div ondblclick="summaryHandler(event)" class="indent summaryUnit obsDef">
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: plandefinition-drug-pq-ex3-drug-specification fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265aurl (canonical): http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by canonical resource.url</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: UniformityEnd)(fullUrl: urn:uuid:43dbc2a3-00c4-6f79-6b11-63768b412aa3)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;UniformityEnd&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/43dbc2a3-00c4-6f79-6b11-63768b412aa3&quot;/>
                <title value=&quot;Uniformity of dosage&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;uniformity-dosage&quot;/>
                        <display value=&quot;uniformity of dosage units (by weight)&quot;/>
                    </coding>
                    <text value=&quot;uniformity of dosage units (by weight)&quot;/>
                </code>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;As for release&quot;/>
                    </extension>
                </qualifiedValue>" id="ObservationDefinition-UniformityEnd">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;uniformity-dosage&quot;/>
                        <display value=&quot;uniformity of dosage units (by weight)&quot;/>">uniformity of dosage units (by weight)<span class="greyOff"> [uniformity-dosage]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: uniformity of dosage units (by weight)</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: UniformityEnd</div>
<div class="debugOff"> fullUrl: urn:uuid:43dbc2a3-00c4-6f79-6b11-63768b412aa3</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/43dbc2a3-00c4-6f79-6b11-63768b412aa3</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Uniformity of dosage&quot;>">Title: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Uniformity of dosage&quot;>">Uniformity of dosage</span></div>
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
                <status value=&quot;active&quot;>">Status: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <status value=&quot;active&quot;>"><span>active</span></span></div>
</div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;uniformity-dosage&quot;/>
                        <display value=&quot;uniformity of dosage units (by weight)&quot;/>
                    </coding>
                    <text value=&quot;uniformity of dosage units (by weight)&quot;/>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;uniformity-dosage&quot;/>
                        <display value=&quot;uniformity of dosage units (by weight)&quot;/>">uniformity of dosage units (by weight)<span class="greyOff"> [uniformity-dosage]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: uniformity of dosage units (by weight)</span></span></div>
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
                        <valueString value=&quot;As for release&quot;/>
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
                        <valueString value=&quot;As for release&quot;/>
                    </extension>">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;As for release&quot;/>">Text: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;As for release&quot;/>"><span>As for release</span></span></div>
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
                    <action>
                        ...
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/MicrobiologicalEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/e582e504-36ec-3b50-4043-51bf1147124e&quot;/>"><a id="urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a"><span>Action</span></a><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>">Code: </span><span style="white-space:normal;">Test</span></div>
<div ondblclick="summaryHandler(event)" class="indent summaryUnit obsDef">
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: plandefinition-drug-pq-ex3-drug-specification fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265aurl (canonical): http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by canonical resource.url</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: MicrobiologicalEnd)(fullUrl: urn:uuid:e582e504-36ec-3b50-4043-51bf1147124e)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;MicrobiologicalEnd&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/e582e504-36ec-3b50-4043-51bf1147124e&quot;/>
                <title value=&quot;Microbiological&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Microbiological Quality&quot;/>
                        <display value=&quot;Microbiological Quality&quot;/>
                    </coding>
                    <text value=&quot;Microbiological Quality&quot;/>
                </code>
                <method>
                    <text value=&quot;Ph Eur&quot;/>
                </method>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;As for release&quot;/>
                    </extension>
                </qualifiedValue>" id="ObservationDefinition-MicrobiologicalEnd">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Microbiological Quality&quot;/>
                        <display value=&quot;Microbiological Quality&quot;/>">Microbiological Quality<span class="greyOff"> [Microbiological Quality]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: Microbiological Quality</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: MicrobiologicalEnd</div>
<div class="debugOff"> fullUrl: urn:uuid:e582e504-36ec-3b50-4043-51bf1147124e</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/e582e504-36ec-3b50-4043-51bf1147124e</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Microbiological&quot;>">Title: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Microbiological&quot;>">Microbiological</span></div>
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
                <status value=&quot;active&quot;>">Status: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <status value=&quot;active&quot;>"><span>active</span></span></div>
</div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Microbiological Quality&quot;/>
                        <display value=&quot;Microbiological Quality&quot;/>
                    </coding>
                    <text value=&quot;Microbiological Quality&quot;/>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Microbiological Quality&quot;/>
                        <display value=&quot;Microbiological Quality&quot;/>">Microbiological Quality<span class="greyOff"> [Microbiological Quality]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: Microbiological Quality</span></span></div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <method>
                    <text value=&quot;Ph Eur&quot;/>">Method: <span style="white-space:normal;">Ph Eur</span></span></div>
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
                        <valueString value=&quot;As for release&quot;/>
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
                        <valueString value=&quot;As for release&quot;/>
                    </extension>">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;As for release&quot;/>">Text: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;As for release&quot;/>"><span>As for release</span></span></div>
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
                    <action>
                        ...
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--<definitionCanonical value=&quot;ObservationDefinition/WaterEnd&quot;/>-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/91391017-774b-5c77-93fa-642534278851&quot;/>"><a id="urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265a"><span>Action</span></a><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>">Code: </span><span style="white-space:normal;">Test</span></div>
<div ondblclick="summaryHandler(event)" class="indent summaryUnit obsDef">
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: plandefinition-drug-pq-ex3-drug-specification fullUrl: urn:uuid:bf6b038b-1334-3dd4-a552-65c169e2265aurl (canonical): http://example-server.com/fhir/PlanDefinition/bf6b038b-1334-3dd4-a552-65c169e2265a)<br>which is linked to this by canonical resource.url</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: WaterEnd)(fullUrl: urn:uuid:91391017-774b-5c77-93fa-642534278851)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;WaterEnd&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/91391017-774b-5c77-93fa-642534278851&quot;/>
                <title value=&quot;Water Content&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;WaterContent&quot;/>
                        <display value=&quot;Water Content&quot;/>
                    </coding>
                    <text value=&quot;Water Content&quot;/>
                </code>
                <method>
                    <text value=&quot;USP <921>&quot;/>
                </method>
                <qualifiedValue>
                    <range>
                        <high>
                            <value value=&quot;2.0&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </high>
                    </range>
                </qualifiedValue>" id="ObservationDefinition-WaterEnd">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;WaterContent&quot;/>
                        <display value=&quot;Water Content&quot;/>">Water Content<span class="greyOff"> [WaterContent]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: Water Content</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: WaterEnd</div>
<div class="debugOff"> fullUrl: urn:uuid:91391017-774b-5c77-93fa-642534278851</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/91391017-774b-5c77-93fa-642534278851</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Water Content&quot;>">Title: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Water Content&quot;>">Water Content</span></div>
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
                <status value=&quot;active&quot;>">Status: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <status value=&quot;active&quot;>"><span>active</span></span></div>
</div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;WaterContent&quot;/>
                        <display value=&quot;Water Content&quot;/>
                    </coding>
                    <text value=&quot;Water Content&quot;/>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;WaterContent&quot;/>
                        <display value=&quot;Water Content&quot;/>">Water Content<span class="greyOff"> [WaterContent]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: Water Content</span></span></div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <method>
                    <text value=&quot;USP <921>&quot;/>">Method: <span style="white-space:normal;">USP <921></span></span></div>
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
		First resource in bundle:PlanDefinition
		Single resource bundle:false
		Single resource bundle Not Patient Or Bundle:false
		Single resource Not Patient:false
		Patient document:false
		General Bundle:false
		Not patient related:true
		=>Patient Centric Mode:false
		SubstanceDef Centric Mode:false
		Assumed profile:--></html>
