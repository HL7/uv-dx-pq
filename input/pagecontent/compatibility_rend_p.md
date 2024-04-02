The HTML rendering below shows a synthetic Quality data example for Common Technical Document (CTD) Module 3: Quality, section 3.2.P.2 Pharmaceutical Development, subsection 3.2.P.2.6 Compatibility.
<html>
<body>
<div class="divBody">
<p>
						This is the same data as in the example files here in <a href="Bundle-bundle-drug-product-compatibility-pq-ex1.xml.html">xml</a> and in <a href="Bundle-bundle-drug-product-compatibility-pq-ex1.json.html">json</a>, presented for easier viewing.
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
<div class="bundle"><a class="plainLink"><span class="bold" title="Bundle (id: bundle-drug-product-compatibility-pq-ex1)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-drug-product-compatibility-pq 

<Bundle>
    <!-- Product compatibility -->
    <id value=&quot;bundle-drug-product-compatibility-pq-ex1&quot;/>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-drug-product-compatibility-pq&quot;/>
    </meta>
    <type value=&quot;collection&quot;/>
    <entry>
        <fullUrl value=&quot;urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763f&quot;/>
        <resource>
            <PlanDefinition>
                <id value=&quot;plandefinition-compatibility&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/PlanDefinition-drug-pq&quot;/>
                </meta>
                <url value=&quot;http://example-server.com/fhir/PlanDefinition/2038e4c7-22b8-4c56-2d28-6c077648763f&quot;/>
                <title value=&quot;Drug Product Compatibility&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/plan-definition-type&quot;/>
                        <code value=&quot;workflow-definition&quot;/>
                        <display value=&quot;Workflow Definition&quot;/>
                    </coding>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-plan-type&quot;/>
                        <code value=&quot;product-compatibility&quot;/>
                        <display value=&quot;Product Compatibility&quot;/>
                    </coding>
                </type>
                <status value=&quot;active&quot;/>
                <subjectReference>
                    <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                </subjectReference>
                <description value=&quot;Pre-defined validation acceptance criteria were established based on manufacturing development data derived from process characterization studies...&quot;/>
                <action>
                    <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tabulateActionResults&quot;>
                        <!--extension url=&quot;biological&quot;><valueBoolean value=&quot;true&quot;/></extension-->
                        <extension url=&quot;titlePrefix&quot;>
                            <valueString value=&quot;Table 2&quot;/>
                        </extension>
                        <extension url=&quot;testTypeColumnTitle&quot;>
                            <valueString value=&quot;Method / Quality Attribute&quot;/>
                        </extension>
                        <extension url=&quot;acceptanceColumn&quot;>
                            <valueBoolean value=&quot;false&quot;/>
                        </extension>
                        <extension url=&quot;componentsAsColumns&quot;>
                            <valueBoolean value=&quot;true&quot;/>
                        </extension>
                        <extension url=&quot;batchTitle&quot;>
                            <valueString value=&quot;15°C&quot;/>
                        </extension>
                        <extension url=&quot;batchColumnTitle&quot;>
                            <valueString value=&quot;PFS Extruded Samples and AI/Pen Extruded Samples&quot;/>
                        </extension>
                        <extension url=&quot;componentsColumnTwo&quot;>
                            <valueString value=&quot;25°C&quot;/>
                        </extension>
                    </extension>
                    <title value=&quot;Results From Evaluation of Drug Product Compatibility With the Glass Syringe Using the Autoinjector/Pen&quot;/>
                    <!-- needs some other code -->
                    <!--code>
                        <coding>
                            <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-step&quot;/>
                            <code value=&quot;FilteredFormulatedDrugProductPerformanceIndicatorResultsStep&quot;/>
                            <display value=&quot;Filtered Formulated Drug Product Performance Indicator Results&quot;/>
                        </coding>
                    </code-->
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <!-- this is not seen by normal code -->
                        <!--definitionCanonical value=&quot;ObservationDefinition/SE-UHPLCMainPeak&quot;/-->
                        <!--definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/SE-UHPLCMainPeak&quot;/-->
                        <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/64525a3d-5034-448a-9c19-938ce1958424&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <!--definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/SE-UHPLCHMW&quot;/-->
                        <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/64525a33-5034-448a-9c19-938ce1958424&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <!--definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/CEX-HPLCAcidicPeak&quot;/-->
                        <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/74525a3d-5034-448a-9c19-938ce1958424&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <!--definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/CEX-HPLCMainPeak&quot;/-->
                        <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/74525a3d-5034-448a-9c19-938ce1958425&quot;/>
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
                <!-- ideally this wants a subject, but it can only be a Medication (batch) and we have multiple. 
                     however the observations themselves do have subjects -->
                <!-- no subject -->
                <id value=&quot;processValidationReport&quot;/>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/workflow-triggeredBy&quot;>
                    <valueReference>
                        <reference value=&quot;PlanDefinition/plandefinition-compatibility&quot;/>
                    </valueReference>
                </extension>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-report-type&quot;/>
                        <code value=&quot;Product Compatibility Report&quot;/>
                        <display value=&quot;Product Compatibility Report&quot;/>
                    </coding>
                </code>
                <effectiveDateTime value=&quot;2020-12&quot;/>
                <result>
                    <reference value=&quot;Observation/SE-UHPLCMainPeak1&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/SE-UHPLCMainPeak2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/SE-UHPLCHMW1&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/SE-UHPLCHMW2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/CEX-Acidic-1&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/CEX-Acidic-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/CEX-HPLC-1&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/CEX-HPLC-2&quot;/>
                </result>
                <conclusion value=&quot;The samples have been assessed and the conclusion is...&quot;/>
            </DiagnosticReport>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:64525a3d-5034-448a-9c19-938ce1958424&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;SE-UHPLCMainPeak&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/64525a3d-5034-448a-9c19-938ce1958424&quot;/>
                <title value=&quot;SE-UHPLC % Main Peak&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;SE-UHPLCMainPeak&quot;/>
                        <display value=&quot;SE-UHPLC Main Peak&quot;/>
                    </coding>
                    <text value=&quot;SE-UHPLC Main Peak (%)&quot;/>
                </code>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCMainPeak-15&quot;/>
                            <display value=&quot;SE-UHPLC Main Peak - 15&quot;/>
                        </coding>
                    </code>
                </component>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCMainPeak-25&quot;/>
                            <display value=&quot;SE-UHPLC Main Peak - 25&quot;/>
                        </coding>
                    </code>
                </component>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:64525a33-5034-448a-9c19-938ce1958424&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;SE-UHPLCHMW&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/64525a33-5034-448a-9c19-938ce1958424&quot;/>
                <title value=&quot;SE-UHPLC % HMW&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;SE-UHPLCHMW&quot;/>
                        <display value=&quot;SE-UHPLC HMW&quot;/>
                    </coding>
                    <text value=&quot;SE-UHPLC HMW (%)&quot;/>
                </code>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCHMW-15&quot;/>
                            <display value=&quot;SE-UHPLC HMW - 15&quot;/>
                        </coding>
                    </code>
                </component>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCHMW-25&quot;/>
                            <display value=&quot;SE-UHPLC HMW - 25&quot;/>
                        </coding>
                    </code>
                </component>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:54bb47fd-8964-4f96-6495-b2bec7f161e8&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;CEX-HPLCAcidicPeak&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/74525a3d-5034-448a-9c19-938ce1958424&quot;/>
                <title value=&quot;CEX-HPLC % Acidic Peak&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;CEX-HPLCAcidicPeak&quot;/>
                        <display value=&quot;CEX-HPLC Acidic Peak&quot;/>
                    </coding>
                    <text value=&quot;CEX-HPLC Acidic Peak (%)&quot;/>
                </code>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCAcidicPeak-15&quot;/>
                            <display value=&quot;CEX-HPLC Acidic Peak - 15&quot;/>
                        </coding>
                    </code>
                </component>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCAcidicPeak-25&quot;/>
                            <display value=&quot;CEX-HPLC Acidic Peak - 25&quot;/>
                        </coding>
                    </code>
                </component>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:74525a3d-5034-448a-9c19-938ce1958424&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;CEX-HPLCMainPeak&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/74525a3d-5034-448a-9c19-938ce1958425&quot;/>
                <title value=&quot;CEX-HPLC % Main Peak&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;CEX-HPLCMainPeak&quot;/>
                        <display value=&quot;CEX-HPLC Main Peak&quot;/>
                    </coding>
                    <text value=&quot;CEX-HPLC Main Peak (%)&quot;/>
                </code>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCMainPeak-15&quot;/>
                            <display value=&quot;CEX-HPLC Main Peak - 15&quot;/>
                        </coding>
                    </code>
                </component>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCMainPeak-25&quot;/>
                            <display value=&quot;CEX-HPLC Main Peak - 25&quot;/>
                        </coding>
                    </code>
                </component>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:44ba47fd-8964-4f96-6495-b2bec7f161e7&quot;/>
        <resource>
            <Observation>
                <id value=&quot;SE-UHPLCMainPeak1&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/SE-UHPLCMainPeak&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;SE-UHPLCMainPeak&quot;/>
                        <display value=&quot;SE-UHPLC Main Peak&quot;/>
                    </coding>
                    <text value=&quot;SE-UHPLC Main Peak (%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-1&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCMainPeak-15&quot;/>
                            <display value=&quot;SE-UHPLC Main Peak - 15&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;8.5&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCMainPeak-25&quot;/>
                            <display value=&quot;SE-UHPLC Main Peak - 25&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;9.5&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:54ca47fd-8964-4f96-6495-b2bec7f162e7&quot;/>
        <resource>
            <Observation>
                <id value=&quot;SE-UHPLCMainPeak2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/SE-UHPLCMainPeak&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;SE-UHPLCMainPeak&quot;/>
                        <display value=&quot;SE-UHPLC Main Peak&quot;/>
                    </coding>
                    <text value=&quot;SE-UHPLC Main Peak (%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-2&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCMainPeak-15&quot;/>
                            <display value=&quot;SE-UHPLC Main Peak - 15&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;12.5&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCMainPeak-25&quot;/>
                            <display value=&quot;SE-UHPLC Main Peak - 25&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;13.5&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:44ba47fd-8964-4f97-6495-b2bec7f161e7&quot;/>
        <resource>
            <Observation>
                <id value=&quot;SE-UHPLCHMW1&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/SE-UHPLCHMW&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;SE-UHPLCHMW&quot;/>
                        <display value=&quot;SE-UHPLC HMW&quot;/>
                    </coding>
                    <text value=&quot;SE-UHPLC HMW (%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-1&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCHMW-15&quot;/>
                            <display value=&quot;SE-UHPLC HMW - 15&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;73.0&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCHMW-25&quot;/>
                            <display value=&quot;SE-UHPLC HMW - 25&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;79.0&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:54ca47fd-8964-4f98-6495-b2bec7f162e7&quot;/>
        <resource>
            <Observation>
                <id value=&quot;SE-UHPLCHMW2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/SE-UHPLCHMW&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;SE-UHPLCHMW&quot;/>
                        <display value=&quot;SE-UHPLC HMW&quot;/>
                    </coding>
                    <text value=&quot;SE-UHPLC HMW (%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-2&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCHMW-15&quot;/>
                            <display value=&quot;SE-UHPLC HMW - 15&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;74.0&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCHMW-25&quot;/>
                            <display value=&quot;SE-UHPLC HMW - 25&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;78.0&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:54ba47fd-8964-4f96-6495-b2bec7f161e7&quot;/>
        <resource>
            <Observation>
                <id value=&quot;CEX-HPLC-1&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/CEX-HPLCMainPeak&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;CEX-HPLCMainPeak&quot;/>
                        <display value=&quot;CEX-HPLC Main Peak&quot;/>
                    </coding>
                    <text value=&quot;CEX-HPLC Main Peak (%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-1&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCMainPeak-15&quot;/>
                            <display value=&quot;CEX-HPLC Main Peak - 15&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;18.5&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCMainPeak-25&quot;/>
                            <display value=&quot;CEX-HPLC Main Peak - 25&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;19.5&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:54bb47fd-8964-4f96-6495-b2bec7f161e7&quot;/>
        <resource>
            <Observation>
                <id value=&quot;CEX-HPLC-2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/CEX-HPLCMainPeak&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;CEX-HPLCMainPeak&quot;/>
                        <display value=&quot;CEX-HPLC Main Peak&quot;/>
                    </coding>
                    <text value=&quot;CEX-HPLC Main Peak (%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-2&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCMainPeak-15&quot;/>
                            <display value=&quot;CEX-HPLC Main Peak - 15&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;15.5&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCMainPeak-25&quot;/>
                            <display value=&quot;CEX-HPLC Main Peak - 25&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;16.5&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:54ba47fd-8964-4f96-6495-b2bec7f161e8&quot;/>
        <resource>
            <Observation>
                <id value=&quot;CEX-Acidic-1&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/CEX-HPLCAcidicPeak&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;CEX-HPLCAcidicPeak&quot;/>
                        <display value=&quot;CEX-HPLC Acidic Peak&quot;/>
                    </coding>
                    <text value=&quot;CEX-HPLC Acidic Peak (%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-1&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCAcidicPeak-15&quot;/>
                            <display value=&quot;CEX-HPLC Acidic Peak - 15&quot;/>
                        </coding>
                        <text value=&quot;CEX-HPLC Acidic Peak (%)&quot;/>
                    </code>
                    <valueQuantity>
                        <value value=&quot;28.5&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCAcidicPeak-25&quot;/>
                            <display value=&quot;CEX-HPLC Acidic Peak - 25&quot;/>
                        </coding>
                        <text value=&quot;CEX-HPLC Acidic Peak (%)&quot;/>
                    </code>
                    <valueQuantity>
                        <value value=&quot;29.5&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>
            </Observation>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:54ba48fd-8964-4f96-6495-b2bec7f161e7&quot;/>
        <resource>
            <Observation>
                <id value=&quot;CEX-Acidic-2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/CEX-HPLCAcidicPeak&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;CEX-HPLCAcidicPeak&quot;/>
                        <display value=&quot;CEX-HPLC Acidic Peak&quot;/>
                    </coding>
                    <text value=&quot;CEX-HPLC Acidic Peak (%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-1&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCAcidicPeak-15&quot;/>
                            <display value=&quot;CEX-HPLC Acidic Peak - 15&quot;/>
                        </coding>
                        <text value=&quot;CEX-HPLC Acidic Peak (%)&quot;/>
                    </code>
                    <valueQuantity>
                        <value value=&quot;28.6&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCAcidicPeak-25&quot;/>
                            <display value=&quot;CEX-HPLC Acidic Peak - 25&quot;/>
                        </coding>
                        <text value=&quot;CEX-HPLC Acidic Peak (%)&quot;/>
                    </code>
                    <valueQuantity>
                        <value value=&quot;29.3&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>
            </Observation>
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
                <name>
                    <productName value=&quot;Stelbatolol&quot;/>
                </name>
            </MedicinalProductDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51&quot;/>
        <resource>
            <Medication>
                <id value=&quot;medication-actual-batch-1&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-pq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>
                    </extension>
                    <!-- can use an extension here to point to package, but currently just relying on medication-manufacturingBatch to have a text description -->
                </code>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;container&quot;>
                            <extension url=&quot;closureSystemDescription&quot;>
                                <valueString value=&quot;Pre-filled syringe&quot;/>
                            </extension>
                        </extension>
                    </extension>
                    <lotNumber value=&quot;88877&quot;/>
                </batch>
            </Medication>
        </resource>
    </entry>
    <!-- Section 8 - Batch or Lot Information (another batch 2 of 3) -->
    <entry>
        <fullUrl value=&quot;urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc&quot;/>
        <resource>
            <Medication>
                <id value=&quot;medication-actual-batch-2&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-pq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>
                    </extension>
                </code>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;container&quot;>
                            <extension url=&quot;closureSystemDescription&quot;>
                                <valueString value=&quot;Autoinjector Pen&quot;/>
                            </extension>
                        </extension>
                    </extension>
                    <lotNumber value=&quot;88878&quot;/>
                </batch>
            </Medication>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
        <resource>
            <Organization>
                <id value=&quot;378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                <identifier>
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3007270600&quot;/>
                </identifier>
                <active value=&quot;true&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;analytical-testing-release&quot;/>
                        <display value=&quot;Analytical Testing - Release&quot;/>
                    </coding>
                </type>
                <name value=&quot;Testing Lab&quot;/>
            </Organization>
        </resource>
    </entry>" id="Bundle-bundle-drug-product-compatibility-pq-ex1">Bundle</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/bundle.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/bundle.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/bundle.html#tt-uml">R6</a>]</span><div class="debugOff">id: bundle-drug-product-compatibility-pq-ex1</div>
<div class="debugOff"></div>
<div class="debugOff"><span title="
<Bundle>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-drug-product-compatibility-pq&quot;>">Profile: </span><span title="
<Bundle>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-drug-product-compatibility-pq&quot;>">http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-drug-product-compatibility-pq</span></div>
<div><span title="
<Bundle>
    ...
    <type value=&quot;collection&quot;>">Type: <span>collection</span></span></div>
</div>
</div>
<div>
<div class="org indent"><span class="bold">Patient Product Compatibility, on Stelbatolol</span><br><br style="line-height:6px;"><div ondblclick="summaryHandler(event)" class="indent summaryUnit comp"><a class="plainLink"><span class="bold" title="DiagnosticReport (id: processValidationReport)(fullUrl: urn:uuid:b664977d-799d-a1ce-928a-5def2a9955bd)

<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                <!-- ideally this wants a subject, but it can only be a Medication (batch) and we have multiple. 
                     however the observations themselves do have subjects -->
                <!-- no subject -->
                <id value=&quot;processValidationReport&quot;/>
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/workflow-triggeredBy&quot;>
                    <valueReference>
                        <reference value=&quot;PlanDefinition/plandefinition-compatibility&quot;/>
                    </valueReference>
                </extension>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-report-type&quot;/>
                        <code value=&quot;Product Compatibility Report&quot;/>
                        <display value=&quot;Product Compatibility Report&quot;/>
                    </coding>
                </code>
                <effectiveDateTime value=&quot;2020-12&quot;/>
                <result>
                    <reference value=&quot;Observation/SE-UHPLCMainPeak1&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/SE-UHPLCMainPeak2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/SE-UHPLCHMW1&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/SE-UHPLCHMW2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/CEX-Acidic-1&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/CEX-Acidic-2&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/CEX-HPLC-1&quot;/>
                </result>
                <result>
                    <reference value=&quot;Observation/CEX-HPLC-2&quot;/>
                </result>
                <conclusion value=&quot;The samples have been assessed and the conclusion is...&quot;/>" id="DiagnosticReport-processValidationReport">Diagnostic Report<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                <code>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-report-type&quot;/>
                        <code value=&quot;Product Compatibility Report&quot;/>
                        <display value=&quot;Product Compatibility Report&quot;/>">Product Compatibility Report<span class="greyOff"> [Product Compatibility Report]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/pharmaceutical-report-type)</span></span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/diagnosticreport.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/diagnosticreport.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/diagnosticreport.html#tt-uml">R6</a>]</span><div class="debugOff">id: processValidationReport</div>
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
                <status value=&quot;final&quot;>">Status: </span><span title="
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <status value=&quot;final&quot;>"><span>final</span></span></div>
</div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-report-type&quot;/>
                        <code value=&quot;Product Compatibility Report&quot;/>
                        <display value=&quot;Product Compatibility Report&quot;/>
                    </coding>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                <code>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-report-type&quot;/>
                        <code value=&quot;Product Compatibility Report&quot;/>
                        <display value=&quot;Product Compatibility Report&quot;/>">Product Compatibility Report<span class="greyOff"> [Product Compatibility Report]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/pharmaceutical-report-type)</span></span></span></div>
<div class="summaryHiddenOff"></div>
<div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/workflow-triggeredBy&quot;>
                    <valueReference>
                        <reference value=&quot;PlanDefinition/plandefinition-compatibility&quot;/>
                    </valueReference>">Triggered By</span>: Drug Product Compatibility (<a href="#PlanDefinition-plandefinition-compatibility" title="click to see target - id=plandefinition-compatibility">PlanDefinition</a>)<span class="debugOff"> id: plandefinition-compatibility</span></span><div class="summaryHiddenOff"></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <conclusion value=&quot;The samples have been assessed and the conclusion is...&quot;>">Conclusion: </span><span title="
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <conclusion value=&quot;The samples have been assessed and the conclusion is...&quot;>">The samples have been assessed and the conclusion is...</span></div>
<div class="summaryHiddenOff"></div>
<div class="htmlTableRemove"><br style="line-height:6px;"><div class="indent-no-border"><b>Table 2: Results From Evaluation of Drug Product Compatibility With the Glass Syringe Using the Autoinjector/Pen</b><br style="line-height:6px;"><br style="line-height:6px;"><table class="rounded-corners white" id="tabularModeTable" style="width:70%">
<tr>
<th colspan="1"></th>
<th colspan="4">PFS Extruded Samples and AI/Pen Extruded Samples</th>
</tr>
<tr>
<th rowspan="1">Method / Quality Attribute</th><th><a href="#Medication-medication-actual-batch-1" title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    ...
                    <lotNumber value=&quot;88877&quot;>" class="noUnderline">15°C</a></th>
<th>25°C</th>
<th><a href="#Medication-medication-actual-batch-2" title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    ...
                    <lotNumber value=&quot;88878&quot;>" class="noUnderline">15°C</a></th>
<th>25°C</th>
</tr>
<tr>
<td><a href="#ObservationDefinition-SE-UHPLCMainPeak" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;SE-UHPLC % Main Peak&quot;>" class="noUnderline">SE-UHPLC % Main Peak</a></td>
<td class="centred"><a href="#Observation-SE-UHPLCMainPeak1" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;8.5&quot;/>
                        <unit value=&quot;%&quot;/>">8.5</span></a></td>
<td class="centred"><a href="#Observation-SE-UHPLCMainPeak1" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;9.5&quot;/>
                        <unit value=&quot;%&quot;/>">9.5</span></a></td>
<td class="centred"><a href="#Observation-SE-UHPLCMainPeak2" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;12.5&quot;/>
                        <unit value=&quot;%&quot;/>">12.5</span></a></td>
<td class="centred"><a href="#Observation-SE-UHPLCMainPeak2" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;13.5&quot;/>
                        <unit value=&quot;%&quot;/>">13.5</span></a></td>
</tr>
<tr>
<td><a href="#ObservationDefinition-SE-UHPLCHMW" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;SE-UHPLC % HMW&quot;>" class="noUnderline">SE-UHPLC % HMW</a></td>
<td class="centred"><a href="#Observation-SE-UHPLCHMW1" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;73.0&quot;/>
                        <unit value=&quot;%&quot;/>">73.0</span></a></td>
<td class="centred"><a href="#Observation-SE-UHPLCHMW1" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;79.0&quot;/>
                        <unit value=&quot;%&quot;/>">79.0</span></a></td>
<td class="centred"><a href="#Observation-SE-UHPLCHMW2" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;74.0&quot;/>
                        <unit value=&quot;%&quot;/>">74.0</span></a></td>
<td class="centred"><a href="#Observation-SE-UHPLCHMW2" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;78.0&quot;/>
                        <unit value=&quot;%&quot;/>">78.0</span></a></td>
</tr>
<tr>
<td><a href="#ObservationDefinition-CEX-HPLCAcidicPeak" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;CEX-HPLC % Acidic Peak&quot;>" class="noUnderline">CEX-HPLC % Acidic Peak</a></td>
<td class="centred"><a href="#Observation-CEX-Acidic-1" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;28.5&quot;/>
                        <unit value=&quot;%&quot;/>">28.5</span></a></td>
<td class="centred"><a href="#Observation-CEX-Acidic-2" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;28.6&quot;/>
                        <unit value=&quot;%&quot;/>">28.6</span></a></td>
<td class="centred"><a href="#Observation-CEX-Acidic-1" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;29.5&quot;/>
                        <unit value=&quot;%&quot;/>">29.5</span></a></td>
<td class="centred"><a href="#Observation-CEX-Acidic-2" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;29.3&quot;/>
                        <unit value=&quot;%&quot;/>">29.3</span></a></td>
</tr>
<tr>
<td><a href="#ObservationDefinition-CEX-HPLCMainPeak" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;CEX-HPLC % Main Peak&quot;>" class="noUnderline">CEX-HPLC % Main Peak</a></td>
<td class="centred"><a href="#Observation-CEX-HPLC-1" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;18.5&quot;/>
                        <unit value=&quot;%&quot;/>">18.5</span></a></td>
<td class="centred"><a href="#Observation-CEX-HPLC-1" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;19.5&quot;/>
                        <unit value=&quot;%&quot;/>">19.5</span></a></td>
<td class="centred"><a href="#Observation-CEX-HPLC-2" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;15.5&quot;/>
                        <unit value=&quot;%&quot;/>">15.5</span></a></td>
<td class="centred"><a href="#Observation-CEX-HPLC-2" class="noUnderline"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;16.5&quot;/>
                        <unit value=&quot;%&quot;/>">16.5</span></a></td>
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
                    <reference value=&quot;Observation/SE-UHPLCMainPeak1&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/SE-UHPLCMainPeak2&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/SE-UHPLCHMW1&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/SE-UHPLCHMW2&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/CEX-Acidic-1&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/CEX-Acidic-2&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/CEX-HPLC-1&quot;/>
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/CEX-HPLC-2&quot;/>">Result</span><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: processValidationReport fullUrl: urn:uuid:b664977d-799d-a1ce-928a-5def2a9955bd)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: SE-UHPLCMainPeak1)(fullUrl: urn:uuid:44ba47fd-8964-4f96-6495-b2bec7f161e7)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;SE-UHPLCMainPeak1&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/SE-UHPLCMainPeak&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;SE-UHPLCMainPeak&quot;/>
                        <display value=&quot;SE-UHPLC Main Peak&quot;/>
                    </coding>
                    <text value=&quot;SE-UHPLC Main Peak (%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-1&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCMainPeak-15&quot;/>
                            <display value=&quot;SE-UHPLC Main Peak - 15&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;8.5&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCMainPeak-25&quot;/>
                            <display value=&quot;SE-UHPLC Main Peak - 25&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;9.5&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>" id="Observation-SE-UHPLCMainPeak1">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;SE-UHPLCMainPeak&quot;/>
                        <display value=&quot;SE-UHPLC Main Peak&quot;/>">SE-UHPLC Main Peak<span class="greyOff"> [SE-UHPLCMainPeak]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: SE-UHPLC Main Peak (%)</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: SE-UHPLCMainPeak1</div><div class="debugOff"> fullUrl: urn:uuid:44ba47fd-8964-4f96-6495-b2bec7f161e7</div><div class="summaryHiddenOff"></div><div><span title="
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
                <status value=&quot;final&quot;>">Status: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <status value=&quot;final&quot;>"><span>final</span></span></div></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;SE-UHPLCMainPeak&quot;/>
                        <display value=&quot;SE-UHPLC Main Peak&quot;/>
                    </coding>
                    <text value=&quot;SE-UHPLC Main Peak (%)&quot;/>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;SE-UHPLCMainPeak&quot;/>
                        <display value=&quot;SE-UHPLC Main Peak&quot;/>">SE-UHPLC Main Peak<span class="greyOff"> [SE-UHPLCMainPeak]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: SE-UHPLC Main Peak (%)</span></span></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-1&quot;/>">Subject</span>: Lot Number: 88877 (<a href="#Medication-medication-actual-batch-1" title="click to see target - id=medication-actual-batch-1">Medication</a>)<span class="debugOff"> id: medication-actual-batch-1</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;SE-UHPLCMainPeak1&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/SE-UHPLCMainPeak&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;SE-UHPLCMainPeak&quot;/>
                        <display value=&quot;SE-UHPLC Main Peak&quot;/>
                    </coding>
                    <text value=&quot;SE-UHPLC Main Peak (%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-1&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCMainPeak-15&quot;/>
                            <display value=&quot;SE-UHPLC Main Peak - 15&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;8.5&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCMainPeak-25&quot;/>
                            <display value=&quot;SE-UHPLC Main Peak - 25&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;9.5&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>">Instantiates</span>: SE-UHPLC Main Peak (%) - Plan: Drug Product Compatibility (<a href="#PlanDefinition-plandefinition-compatibility" title="click to see target - id=plandefinition-compatibility">PlanDefinition</a>)<span class="debugOff"> id: plandefinition-compatibility</span> (<a href="#ObservationDefinition-SE-UHPLCMainPeak" title="click to see target - id=SE-UHPLCMainPeak">ObservationDefinition</a>)<span class="debugOff"> id: SE-UHPLCMainPeak</span></span><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCMainPeak-15&quot;/>
                            <display value=&quot;SE-UHPLC Main Peak - 15&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;8.5&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>">
		Component
		<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCMainPeak-15&quot;/>
                            <display value=&quot;SE-UHPLC Main Peak - 15&quot;/>">SE-UHPLC Main Peak - 15<span class="greyOff"> [SE-UHPLCMainPeak-15]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCMainPeak-15&quot;/>
                            <display value=&quot;SE-UHPLC Main Peak - 15&quot;/>
                        </coding>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCMainPeak-15&quot;/>
                            <display value=&quot;SE-UHPLC Main Peak - 15&quot;/>">SE-UHPLC Main Peak - 15<span class="greyOff"> [SE-UHPLCMainPeak-15]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;8.5&quot;/>
                        <unit value=&quot;%&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;8.5&quot;/>
                        <unit value=&quot;%&quot;/>">8.5%</span></div></div><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCMainPeak-25&quot;/>
                            <display value=&quot;SE-UHPLC Main Peak - 25&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;9.5&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>">
		Component
		<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCMainPeak-25&quot;/>
                            <display value=&quot;SE-UHPLC Main Peak - 25&quot;/>">SE-UHPLC Main Peak - 25<span class="greyOff"> [SE-UHPLCMainPeak-25]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCMainPeak-25&quot;/>
                            <display value=&quot;SE-UHPLC Main Peak - 25&quot;/>
                        </coding>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCMainPeak-25&quot;/>
                            <display value=&quot;SE-UHPLC Main Peak - 25&quot;/>">SE-UHPLC Main Peak - 25<span class="greyOff"> [SE-UHPLCMainPeak-25]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;9.5&quot;/>
                        <unit value=&quot;%&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;9.5&quot;/>
                        <unit value=&quot;%&quot;/>">9.5%</span></div></div><div class="summaryHiddenOff"><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>">Performer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/performer, id: SE-UHPLCMainPeak1 fullUrl: urn:uuid:44ba47fd-8964-4f96-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: SE-UHPLCMainPeak2 fullUrl: urn:uuid:54ca47fd-8964-4f96-6495-b2bec7f162e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: SE-UHPLCHMW1 fullUrl: urn:uuid:44ba47fd-8964-4f97-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: SE-UHPLCHMW2 fullUrl: urn:uuid:54ca47fd-8964-4f98-6495-b2bec7f162e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: CEX-HPLC-1 fullUrl: urn:uuid:54ba47fd-8964-4f96-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: CEX-HPLC-2 fullUrl: urn:uuid:54bb47fd-8964-4f96-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: CEX-Acidic-1 fullUrl: urn:uuid:54ba47fd-8964-4f96-6495-b2bec7f161e8)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: CEX-Acidic-2 fullUrl: urn:uuid:54ba48fd-8964-4f96-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: 378fbe5f-5926-3a5c-4c64-5428df877b08)(fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <id value=&quot;378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                <identifier>
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3007270600&quot;/>
                </identifier>
                <active value=&quot;true&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;analytical-testing-release&quot;/>
                        <display value=&quot;Analytical Testing - Release&quot;/>
                    </coding>
                </type>
                <name value=&quot;Testing Lab&quot;/>" id="Organization-378fbe5f-5926-3a5c-4c64-5428df877b08">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/organization.html#tt-uml">R6</a>]</span><div class="debugOff">id: 378fbe5f-5926-3a5c-4c64-5428df877b08</div><div class="debugOff"> fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08</div><span class="summaryShowsOff"> - Testing Lab</span><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3007270600&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3007270600&quot;/>">3007270600<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span></div><div class="debugOff"><span title="
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
                <name value=&quot;Testing Lab&quot;>">Name: </span><span>Testing Lab</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;analytical-testing-release&quot;/>
                        <display value=&quot;Analytical Testing - Release&quot;/>
                    </coding>">Type: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;analytical-testing-release&quot;/>
                        <display value=&quot;Analytical Testing - Release&quot;/>">Analytical Testing - Release<span class="greyOff"> [analytical-testing-release]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type)</span></span></div></div></div></div></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: processValidationReport fullUrl: urn:uuid:b664977d-799d-a1ce-928a-5def2a9955bd)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: SE-UHPLCMainPeak2)(fullUrl: urn:uuid:54ca47fd-8964-4f96-6495-b2bec7f162e7)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;SE-UHPLCMainPeak2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/SE-UHPLCMainPeak&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;SE-UHPLCMainPeak&quot;/>
                        <display value=&quot;SE-UHPLC Main Peak&quot;/>
                    </coding>
                    <text value=&quot;SE-UHPLC Main Peak (%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-2&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCMainPeak-15&quot;/>
                            <display value=&quot;SE-UHPLC Main Peak - 15&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;12.5&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCMainPeak-25&quot;/>
                            <display value=&quot;SE-UHPLC Main Peak - 25&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;13.5&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>" id="Observation-SE-UHPLCMainPeak2">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;SE-UHPLCMainPeak&quot;/>
                        <display value=&quot;SE-UHPLC Main Peak&quot;/>">SE-UHPLC Main Peak<span class="greyOff"> [SE-UHPLCMainPeak]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: SE-UHPLC Main Peak (%)</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: SE-UHPLCMainPeak2</div><div class="debugOff"> fullUrl: urn:uuid:54ca47fd-8964-4f96-6495-b2bec7f162e7</div><div class="summaryHiddenOff"></div><div><span title="
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
                <status value=&quot;final&quot;>">Status: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <status value=&quot;final&quot;>"><span>final</span></span></div></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;SE-UHPLCMainPeak&quot;/>
                        <display value=&quot;SE-UHPLC Main Peak&quot;/>
                    </coding>
                    <text value=&quot;SE-UHPLC Main Peak (%)&quot;/>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;SE-UHPLCMainPeak&quot;/>
                        <display value=&quot;SE-UHPLC Main Peak&quot;/>">SE-UHPLC Main Peak<span class="greyOff"> [SE-UHPLCMainPeak]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: SE-UHPLC Main Peak (%)</span></span></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-2&quot;/>">Subject</span>: Lot Number: 88878 (<a href="#Medication-medication-actual-batch-2" title="click to see target - id=medication-actual-batch-2">Medication</a>)<span class="debugOff"> id: medication-actual-batch-2</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;SE-UHPLCMainPeak2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/SE-UHPLCMainPeak&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;SE-UHPLCMainPeak&quot;/>
                        <display value=&quot;SE-UHPLC Main Peak&quot;/>
                    </coding>
                    <text value=&quot;SE-UHPLC Main Peak (%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-2&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCMainPeak-15&quot;/>
                            <display value=&quot;SE-UHPLC Main Peak - 15&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;12.5&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCMainPeak-25&quot;/>
                            <display value=&quot;SE-UHPLC Main Peak - 25&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;13.5&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>">Instantiates</span>: SE-UHPLC Main Peak (%) - Plan: Drug Product Compatibility (<a href="#PlanDefinition-plandefinition-compatibility" title="click to see target - id=plandefinition-compatibility">PlanDefinition</a>)<span class="debugOff"> id: plandefinition-compatibility</span> (<a href="#ObservationDefinition-SE-UHPLCMainPeak" title="click to see target - id=SE-UHPLCMainPeak">ObservationDefinition</a>)<span class="debugOff"> id: SE-UHPLCMainPeak</span></span><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCMainPeak-15&quot;/>
                            <display value=&quot;SE-UHPLC Main Peak - 15&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;12.5&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>">
		Component
		<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCMainPeak-15&quot;/>
                            <display value=&quot;SE-UHPLC Main Peak - 15&quot;/>">SE-UHPLC Main Peak - 15<span class="greyOff"> [SE-UHPLCMainPeak-15]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCMainPeak-15&quot;/>
                            <display value=&quot;SE-UHPLC Main Peak - 15&quot;/>
                        </coding>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCMainPeak-15&quot;/>
                            <display value=&quot;SE-UHPLC Main Peak - 15&quot;/>">SE-UHPLC Main Peak - 15<span class="greyOff"> [SE-UHPLCMainPeak-15]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;12.5&quot;/>
                        <unit value=&quot;%&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;12.5&quot;/>
                        <unit value=&quot;%&quot;/>">12.5%</span></div></div><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCMainPeak-25&quot;/>
                            <display value=&quot;SE-UHPLC Main Peak - 25&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;13.5&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>">
		Component
		<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCMainPeak-25&quot;/>
                            <display value=&quot;SE-UHPLC Main Peak - 25&quot;/>">SE-UHPLC Main Peak - 25<span class="greyOff"> [SE-UHPLCMainPeak-25]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCMainPeak-25&quot;/>
                            <display value=&quot;SE-UHPLC Main Peak - 25&quot;/>
                        </coding>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCMainPeak-25&quot;/>
                            <display value=&quot;SE-UHPLC Main Peak - 25&quot;/>">SE-UHPLC Main Peak - 25<span class="greyOff"> [SE-UHPLCMainPeak-25]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;13.5&quot;/>
                        <unit value=&quot;%&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;13.5&quot;/>
                        <unit value=&quot;%&quot;/>">13.5%</span></div></div><div class="summaryHiddenOff"><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>">Performer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/performer, id: SE-UHPLCMainPeak1 fullUrl: urn:uuid:44ba47fd-8964-4f96-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: SE-UHPLCMainPeak2 fullUrl: urn:uuid:54ca47fd-8964-4f96-6495-b2bec7f162e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: SE-UHPLCHMW1 fullUrl: urn:uuid:44ba47fd-8964-4f97-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: SE-UHPLCHMW2 fullUrl: urn:uuid:54ca47fd-8964-4f98-6495-b2bec7f162e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: CEX-HPLC-1 fullUrl: urn:uuid:54ba47fd-8964-4f96-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: CEX-HPLC-2 fullUrl: urn:uuid:54bb47fd-8964-4f96-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: CEX-Acidic-1 fullUrl: urn:uuid:54ba47fd-8964-4f96-6495-b2bec7f161e8)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: CEX-Acidic-2 fullUrl: urn:uuid:54ba48fd-8964-4f96-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: 378fbe5f-5926-3a5c-4c64-5428df877b08)(fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <id value=&quot;378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                <identifier>
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3007270600&quot;/>
                </identifier>
                <active value=&quot;true&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;analytical-testing-release&quot;/>
                        <display value=&quot;Analytical Testing - Release&quot;/>
                    </coding>
                </type>
                <name value=&quot;Testing Lab&quot;/>" id="Organization-378fbe5f-5926-3a5c-4c64-5428df877b08">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/organization.html#tt-uml">R6</a>]</span><div class="debugOff">id: 378fbe5f-5926-3a5c-4c64-5428df877b08</div><div class="debugOff"> fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08</div><span class="summaryShowsOff"> - Testing Lab</span><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3007270600&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3007270600&quot;/>">3007270600<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span></div><div class="debugOff"><span title="
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
                <name value=&quot;Testing Lab&quot;>">Name: </span><span>Testing Lab</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;analytical-testing-release&quot;/>
                        <display value=&quot;Analytical Testing - Release&quot;/>
                    </coding>">Type: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;analytical-testing-release&quot;/>
                        <display value=&quot;Analytical Testing - Release&quot;/>">Analytical Testing - Release<span class="greyOff"> [analytical-testing-release]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type)</span></span></div></div></div></div></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: processValidationReport fullUrl: urn:uuid:b664977d-799d-a1ce-928a-5def2a9955bd)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: SE-UHPLCHMW1)(fullUrl: urn:uuid:44ba47fd-8964-4f97-6495-b2bec7f161e7)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;SE-UHPLCHMW1&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/SE-UHPLCHMW&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;SE-UHPLCHMW&quot;/>
                        <display value=&quot;SE-UHPLC HMW&quot;/>
                    </coding>
                    <text value=&quot;SE-UHPLC HMW (%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-1&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCHMW-15&quot;/>
                            <display value=&quot;SE-UHPLC HMW - 15&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;73.0&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCHMW-25&quot;/>
                            <display value=&quot;SE-UHPLC HMW - 25&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;79.0&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>" id="Observation-SE-UHPLCHMW1">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;SE-UHPLCHMW&quot;/>
                        <display value=&quot;SE-UHPLC HMW&quot;/>">SE-UHPLC HMW<span class="greyOff"> [SE-UHPLCHMW]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: SE-UHPLC HMW (%)</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: SE-UHPLCHMW1</div><div class="debugOff"> fullUrl: urn:uuid:44ba47fd-8964-4f97-6495-b2bec7f161e7</div><div class="summaryHiddenOff"></div><div><span title="
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
                <status value=&quot;final&quot;>">Status: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <status value=&quot;final&quot;>"><span>final</span></span></div></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;SE-UHPLCHMW&quot;/>
                        <display value=&quot;SE-UHPLC HMW&quot;/>
                    </coding>
                    <text value=&quot;SE-UHPLC HMW (%)&quot;/>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;SE-UHPLCHMW&quot;/>
                        <display value=&quot;SE-UHPLC HMW&quot;/>">SE-UHPLC HMW<span class="greyOff"> [SE-UHPLCHMW]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: SE-UHPLC HMW (%)</span></span></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-1&quot;/>">Subject</span>: Lot Number: 88877 (<a href="#Medication-medication-actual-batch-1" title="click to see target - id=medication-actual-batch-1">Medication</a>)<span class="debugOff"> id: medication-actual-batch-1</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;SE-UHPLCHMW1&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/SE-UHPLCHMW&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;SE-UHPLCHMW&quot;/>
                        <display value=&quot;SE-UHPLC HMW&quot;/>
                    </coding>
                    <text value=&quot;SE-UHPLC HMW (%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-1&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCHMW-15&quot;/>
                            <display value=&quot;SE-UHPLC HMW - 15&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;73.0&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCHMW-25&quot;/>
                            <display value=&quot;SE-UHPLC HMW - 25&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;79.0&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>">Instantiates</span>: SE-UHPLC HMW (%) - Plan: Drug Product Compatibility (<a href="#PlanDefinition-plandefinition-compatibility" title="click to see target - id=plandefinition-compatibility">PlanDefinition</a>)<span class="debugOff"> id: plandefinition-compatibility</span> (<a href="#ObservationDefinition-SE-UHPLCHMW" title="click to see target - id=SE-UHPLCHMW">ObservationDefinition</a>)<span class="debugOff"> id: SE-UHPLCHMW</span></span><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCHMW-15&quot;/>
                            <display value=&quot;SE-UHPLC HMW - 15&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;73.0&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>">
		Component
		<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCHMW-15&quot;/>
                            <display value=&quot;SE-UHPLC HMW - 15&quot;/>">SE-UHPLC HMW - 15<span class="greyOff"> [SE-UHPLCHMW-15]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCHMW-15&quot;/>
                            <display value=&quot;SE-UHPLC HMW - 15&quot;/>
                        </coding>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCHMW-15&quot;/>
                            <display value=&quot;SE-UHPLC HMW - 15&quot;/>">SE-UHPLC HMW - 15<span class="greyOff"> [SE-UHPLCHMW-15]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;73.0&quot;/>
                        <unit value=&quot;%&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;73.0&quot;/>
                        <unit value=&quot;%&quot;/>">73.0%</span></div></div><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCHMW-25&quot;/>
                            <display value=&quot;SE-UHPLC HMW - 25&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;79.0&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>">
		Component
		<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCHMW-25&quot;/>
                            <display value=&quot;SE-UHPLC HMW - 25&quot;/>">SE-UHPLC HMW - 25<span class="greyOff"> [SE-UHPLCHMW-25]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCHMW-25&quot;/>
                            <display value=&quot;SE-UHPLC HMW - 25&quot;/>
                        </coding>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCHMW-25&quot;/>
                            <display value=&quot;SE-UHPLC HMW - 25&quot;/>">SE-UHPLC HMW - 25<span class="greyOff"> [SE-UHPLCHMW-25]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;79.0&quot;/>
                        <unit value=&quot;%&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;79.0&quot;/>
                        <unit value=&quot;%&quot;/>">79.0%</span></div></div><div class="summaryHiddenOff"><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>">Performer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/performer, id: SE-UHPLCMainPeak1 fullUrl: urn:uuid:44ba47fd-8964-4f96-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: SE-UHPLCMainPeak2 fullUrl: urn:uuid:54ca47fd-8964-4f96-6495-b2bec7f162e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: SE-UHPLCHMW1 fullUrl: urn:uuid:44ba47fd-8964-4f97-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: SE-UHPLCHMW2 fullUrl: urn:uuid:54ca47fd-8964-4f98-6495-b2bec7f162e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: CEX-HPLC-1 fullUrl: urn:uuid:54ba47fd-8964-4f96-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: CEX-HPLC-2 fullUrl: urn:uuid:54bb47fd-8964-4f96-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: CEX-Acidic-1 fullUrl: urn:uuid:54ba47fd-8964-4f96-6495-b2bec7f161e8)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: CEX-Acidic-2 fullUrl: urn:uuid:54ba48fd-8964-4f96-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: 378fbe5f-5926-3a5c-4c64-5428df877b08)(fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <id value=&quot;378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                <identifier>
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3007270600&quot;/>
                </identifier>
                <active value=&quot;true&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;analytical-testing-release&quot;/>
                        <display value=&quot;Analytical Testing - Release&quot;/>
                    </coding>
                </type>
                <name value=&quot;Testing Lab&quot;/>" id="Organization-378fbe5f-5926-3a5c-4c64-5428df877b08">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/organization.html#tt-uml">R6</a>]</span><div class="debugOff">id: 378fbe5f-5926-3a5c-4c64-5428df877b08</div><div class="debugOff"> fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08</div><span class="summaryShowsOff"> - Testing Lab</span><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3007270600&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3007270600&quot;/>">3007270600<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span></div><div class="debugOff"><span title="
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
                <name value=&quot;Testing Lab&quot;>">Name: </span><span>Testing Lab</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;analytical-testing-release&quot;/>
                        <display value=&quot;Analytical Testing - Release&quot;/>
                    </coding>">Type: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;analytical-testing-release&quot;/>
                        <display value=&quot;Analytical Testing - Release&quot;/>">Analytical Testing - Release<span class="greyOff"> [analytical-testing-release]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type)</span></span></div></div></div></div></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: processValidationReport fullUrl: urn:uuid:b664977d-799d-a1ce-928a-5def2a9955bd)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: SE-UHPLCHMW2)(fullUrl: urn:uuid:54ca47fd-8964-4f98-6495-b2bec7f162e7)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;SE-UHPLCHMW2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/SE-UHPLCHMW&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;SE-UHPLCHMW&quot;/>
                        <display value=&quot;SE-UHPLC HMW&quot;/>
                    </coding>
                    <text value=&quot;SE-UHPLC HMW (%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-2&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCHMW-15&quot;/>
                            <display value=&quot;SE-UHPLC HMW - 15&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;74.0&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCHMW-25&quot;/>
                            <display value=&quot;SE-UHPLC HMW - 25&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;78.0&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>" id="Observation-SE-UHPLCHMW2">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;SE-UHPLCHMW&quot;/>
                        <display value=&quot;SE-UHPLC HMW&quot;/>">SE-UHPLC HMW<span class="greyOff"> [SE-UHPLCHMW]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: SE-UHPLC HMW (%)</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: SE-UHPLCHMW2</div><div class="debugOff"> fullUrl: urn:uuid:54ca47fd-8964-4f98-6495-b2bec7f162e7</div><div class="summaryHiddenOff"></div><div><span title="
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
                <status value=&quot;final&quot;>">Status: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <status value=&quot;final&quot;>"><span>final</span></span></div></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;SE-UHPLCHMW&quot;/>
                        <display value=&quot;SE-UHPLC HMW&quot;/>
                    </coding>
                    <text value=&quot;SE-UHPLC HMW (%)&quot;/>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;SE-UHPLCHMW&quot;/>
                        <display value=&quot;SE-UHPLC HMW&quot;/>">SE-UHPLC HMW<span class="greyOff"> [SE-UHPLCHMW]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: SE-UHPLC HMW (%)</span></span></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-2&quot;/>">Subject</span>: Lot Number: 88878 (<a href="#Medication-medication-actual-batch-2" title="click to see target - id=medication-actual-batch-2">Medication</a>)<span class="debugOff"> id: medication-actual-batch-2</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;SE-UHPLCHMW2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/SE-UHPLCHMW&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;SE-UHPLCHMW&quot;/>
                        <display value=&quot;SE-UHPLC HMW&quot;/>
                    </coding>
                    <text value=&quot;SE-UHPLC HMW (%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-2&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCHMW-15&quot;/>
                            <display value=&quot;SE-UHPLC HMW - 15&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;74.0&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCHMW-25&quot;/>
                            <display value=&quot;SE-UHPLC HMW - 25&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;78.0&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>">Instantiates</span>: SE-UHPLC HMW (%) - Plan: Drug Product Compatibility (<a href="#PlanDefinition-plandefinition-compatibility" title="click to see target - id=plandefinition-compatibility">PlanDefinition</a>)<span class="debugOff"> id: plandefinition-compatibility</span> (<a href="#ObservationDefinition-SE-UHPLCHMW" title="click to see target - id=SE-UHPLCHMW">ObservationDefinition</a>)<span class="debugOff"> id: SE-UHPLCHMW</span></span><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCHMW-15&quot;/>
                            <display value=&quot;SE-UHPLC HMW - 15&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;74.0&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>">
		Component
		<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCHMW-15&quot;/>
                            <display value=&quot;SE-UHPLC HMW - 15&quot;/>">SE-UHPLC HMW - 15<span class="greyOff"> [SE-UHPLCHMW-15]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCHMW-15&quot;/>
                            <display value=&quot;SE-UHPLC HMW - 15&quot;/>
                        </coding>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCHMW-15&quot;/>
                            <display value=&quot;SE-UHPLC HMW - 15&quot;/>">SE-UHPLC HMW - 15<span class="greyOff"> [SE-UHPLCHMW-15]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;74.0&quot;/>
                        <unit value=&quot;%&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;74.0&quot;/>
                        <unit value=&quot;%&quot;/>">74.0%</span></div></div><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCHMW-25&quot;/>
                            <display value=&quot;SE-UHPLC HMW - 25&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;78.0&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>">
		Component
		<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCHMW-25&quot;/>
                            <display value=&quot;SE-UHPLC HMW - 25&quot;/>">SE-UHPLC HMW - 25<span class="greyOff"> [SE-UHPLCHMW-25]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCHMW-25&quot;/>
                            <display value=&quot;SE-UHPLC HMW - 25&quot;/>
                        </coding>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCHMW-25&quot;/>
                            <display value=&quot;SE-UHPLC HMW - 25&quot;/>">SE-UHPLC HMW - 25<span class="greyOff"> [SE-UHPLCHMW-25]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;78.0&quot;/>
                        <unit value=&quot;%&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;78.0&quot;/>
                        <unit value=&quot;%&quot;/>">78.0%</span></div></div><div class="summaryHiddenOff"><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>">Performer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/performer, id: SE-UHPLCMainPeak1 fullUrl: urn:uuid:44ba47fd-8964-4f96-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: SE-UHPLCMainPeak2 fullUrl: urn:uuid:54ca47fd-8964-4f96-6495-b2bec7f162e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: SE-UHPLCHMW1 fullUrl: urn:uuid:44ba47fd-8964-4f97-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: SE-UHPLCHMW2 fullUrl: urn:uuid:54ca47fd-8964-4f98-6495-b2bec7f162e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: CEX-HPLC-1 fullUrl: urn:uuid:54ba47fd-8964-4f96-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: CEX-HPLC-2 fullUrl: urn:uuid:54bb47fd-8964-4f96-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: CEX-Acidic-1 fullUrl: urn:uuid:54ba47fd-8964-4f96-6495-b2bec7f161e8)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: CEX-Acidic-2 fullUrl: urn:uuid:54ba48fd-8964-4f96-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: 378fbe5f-5926-3a5c-4c64-5428df877b08)(fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <id value=&quot;378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                <identifier>
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3007270600&quot;/>
                </identifier>
                <active value=&quot;true&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;analytical-testing-release&quot;/>
                        <display value=&quot;Analytical Testing - Release&quot;/>
                    </coding>
                </type>
                <name value=&quot;Testing Lab&quot;/>" id="Organization-378fbe5f-5926-3a5c-4c64-5428df877b08">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/organization.html#tt-uml">R6</a>]</span><div class="debugOff">id: 378fbe5f-5926-3a5c-4c64-5428df877b08</div><div class="debugOff"> fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08</div><span class="summaryShowsOff"> - Testing Lab</span><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3007270600&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3007270600&quot;/>">3007270600<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span></div><div class="debugOff"><span title="
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
                <name value=&quot;Testing Lab&quot;>">Name: </span><span>Testing Lab</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;analytical-testing-release&quot;/>
                        <display value=&quot;Analytical Testing - Release&quot;/>
                    </coding>">Type: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;analytical-testing-release&quot;/>
                        <display value=&quot;Analytical Testing - Release&quot;/>">Analytical Testing - Release<span class="greyOff"> [analytical-testing-release]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type)</span></span></div></div></div></div></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: processValidationReport fullUrl: urn:uuid:b664977d-799d-a1ce-928a-5def2a9955bd)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: CEX-HPLC-1)(fullUrl: urn:uuid:54ba47fd-8964-4f96-6495-b2bec7f161e7)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;CEX-HPLC-1&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/CEX-HPLCMainPeak&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;CEX-HPLCMainPeak&quot;/>
                        <display value=&quot;CEX-HPLC Main Peak&quot;/>
                    </coding>
                    <text value=&quot;CEX-HPLC Main Peak (%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-1&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCMainPeak-15&quot;/>
                            <display value=&quot;CEX-HPLC Main Peak - 15&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;18.5&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCMainPeak-25&quot;/>
                            <display value=&quot;CEX-HPLC Main Peak - 25&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;19.5&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>" id="Observation-CEX-HPLC-1">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;CEX-HPLCMainPeak&quot;/>
                        <display value=&quot;CEX-HPLC Main Peak&quot;/>">CEX-HPLC Main Peak<span class="greyOff"> [CEX-HPLCMainPeak]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: CEX-HPLC Main Peak (%)</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: CEX-HPLC-1</div><div class="debugOff"> fullUrl: urn:uuid:54ba47fd-8964-4f96-6495-b2bec7f161e7</div><div class="summaryHiddenOff"></div><div><span title="
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
                <status value=&quot;final&quot;>">Status: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <status value=&quot;final&quot;>"><span>final</span></span></div></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;CEX-HPLCMainPeak&quot;/>
                        <display value=&quot;CEX-HPLC Main Peak&quot;/>
                    </coding>
                    <text value=&quot;CEX-HPLC Main Peak (%)&quot;/>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;CEX-HPLCMainPeak&quot;/>
                        <display value=&quot;CEX-HPLC Main Peak&quot;/>">CEX-HPLC Main Peak<span class="greyOff"> [CEX-HPLCMainPeak]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: CEX-HPLC Main Peak (%)</span></span></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-1&quot;/>">Subject</span>: Lot Number: 88877 (<a href="#Medication-medication-actual-batch-1" title="click to see target - id=medication-actual-batch-1">Medication</a>)<span class="debugOff"> id: medication-actual-batch-1</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;CEX-HPLC-1&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/CEX-HPLCMainPeak&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;CEX-HPLCMainPeak&quot;/>
                        <display value=&quot;CEX-HPLC Main Peak&quot;/>
                    </coding>
                    <text value=&quot;CEX-HPLC Main Peak (%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-1&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCMainPeak-15&quot;/>
                            <display value=&quot;CEX-HPLC Main Peak - 15&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;18.5&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCMainPeak-25&quot;/>
                            <display value=&quot;CEX-HPLC Main Peak - 25&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;19.5&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>">Instantiates</span>: CEX-HPLC Main Peak (%) - Plan: Drug Product Compatibility (<a href="#PlanDefinition-plandefinition-compatibility" title="click to see target - id=plandefinition-compatibility">PlanDefinition</a>)<span class="debugOff"> id: plandefinition-compatibility</span> (<a href="#ObservationDefinition-CEX-HPLCMainPeak" title="click to see target - id=CEX-HPLCMainPeak">ObservationDefinition</a>)<span class="debugOff"> id: CEX-HPLCMainPeak</span></span><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCMainPeak-15&quot;/>
                            <display value=&quot;CEX-HPLC Main Peak - 15&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;18.5&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>">
		Component
		<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCMainPeak-15&quot;/>
                            <display value=&quot;CEX-HPLC Main Peak - 15&quot;/>">CEX-HPLC Main Peak - 15<span class="greyOff"> [CEX-HPLCMainPeak-15]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCMainPeak-15&quot;/>
                            <display value=&quot;CEX-HPLC Main Peak - 15&quot;/>
                        </coding>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCMainPeak-15&quot;/>
                            <display value=&quot;CEX-HPLC Main Peak - 15&quot;/>">CEX-HPLC Main Peak - 15<span class="greyOff"> [CEX-HPLCMainPeak-15]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;18.5&quot;/>
                        <unit value=&quot;%&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;18.5&quot;/>
                        <unit value=&quot;%&quot;/>">18.5%</span></div></div><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCMainPeak-25&quot;/>
                            <display value=&quot;CEX-HPLC Main Peak - 25&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;19.5&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>">
		Component
		<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCMainPeak-25&quot;/>
                            <display value=&quot;CEX-HPLC Main Peak - 25&quot;/>">CEX-HPLC Main Peak - 25<span class="greyOff"> [CEX-HPLCMainPeak-25]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCMainPeak-25&quot;/>
                            <display value=&quot;CEX-HPLC Main Peak - 25&quot;/>
                        </coding>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCMainPeak-25&quot;/>
                            <display value=&quot;CEX-HPLC Main Peak - 25&quot;/>">CEX-HPLC Main Peak - 25<span class="greyOff"> [CEX-HPLCMainPeak-25]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;19.5&quot;/>
                        <unit value=&quot;%&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;19.5&quot;/>
                        <unit value=&quot;%&quot;/>">19.5%</span></div></div><div class="summaryHiddenOff"><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>">Performer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/performer, id: SE-UHPLCMainPeak1 fullUrl: urn:uuid:44ba47fd-8964-4f96-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: SE-UHPLCMainPeak2 fullUrl: urn:uuid:54ca47fd-8964-4f96-6495-b2bec7f162e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: SE-UHPLCHMW1 fullUrl: urn:uuid:44ba47fd-8964-4f97-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: SE-UHPLCHMW2 fullUrl: urn:uuid:54ca47fd-8964-4f98-6495-b2bec7f162e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: CEX-HPLC-1 fullUrl: urn:uuid:54ba47fd-8964-4f96-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: CEX-HPLC-2 fullUrl: urn:uuid:54bb47fd-8964-4f96-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: CEX-Acidic-1 fullUrl: urn:uuid:54ba47fd-8964-4f96-6495-b2bec7f161e8)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: CEX-Acidic-2 fullUrl: urn:uuid:54ba48fd-8964-4f96-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: 378fbe5f-5926-3a5c-4c64-5428df877b08)(fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <id value=&quot;378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                <identifier>
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3007270600&quot;/>
                </identifier>
                <active value=&quot;true&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;analytical-testing-release&quot;/>
                        <display value=&quot;Analytical Testing - Release&quot;/>
                    </coding>
                </type>
                <name value=&quot;Testing Lab&quot;/>" id="Organization-378fbe5f-5926-3a5c-4c64-5428df877b08">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/organization.html#tt-uml">R6</a>]</span><div class="debugOff">id: 378fbe5f-5926-3a5c-4c64-5428df877b08</div><div class="debugOff"> fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08</div><span class="summaryShowsOff"> - Testing Lab</span><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3007270600&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3007270600&quot;/>">3007270600<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span></div><div class="debugOff"><span title="
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
                <name value=&quot;Testing Lab&quot;>">Name: </span><span>Testing Lab</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;analytical-testing-release&quot;/>
                        <display value=&quot;Analytical Testing - Release&quot;/>
                    </coding>">Type: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;analytical-testing-release&quot;/>
                        <display value=&quot;Analytical Testing - Release&quot;/>">Analytical Testing - Release<span class="greyOff"> [analytical-testing-release]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type)</span></span></div></div></div></div></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: processValidationReport fullUrl: urn:uuid:b664977d-799d-a1ce-928a-5def2a9955bd)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: CEX-HPLC-2)(fullUrl: urn:uuid:54bb47fd-8964-4f96-6495-b2bec7f161e7)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;CEX-HPLC-2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/CEX-HPLCMainPeak&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;CEX-HPLCMainPeak&quot;/>
                        <display value=&quot;CEX-HPLC Main Peak&quot;/>
                    </coding>
                    <text value=&quot;CEX-HPLC Main Peak (%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-2&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCMainPeak-15&quot;/>
                            <display value=&quot;CEX-HPLC Main Peak - 15&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;15.5&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCMainPeak-25&quot;/>
                            <display value=&quot;CEX-HPLC Main Peak - 25&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;16.5&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>" id="Observation-CEX-HPLC-2">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;CEX-HPLCMainPeak&quot;/>
                        <display value=&quot;CEX-HPLC Main Peak&quot;/>">CEX-HPLC Main Peak<span class="greyOff"> [CEX-HPLCMainPeak]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: CEX-HPLC Main Peak (%)</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: CEX-HPLC-2</div><div class="debugOff"> fullUrl: urn:uuid:54bb47fd-8964-4f96-6495-b2bec7f161e7</div><div class="summaryHiddenOff"></div><div><span title="
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
                <status value=&quot;final&quot;>">Status: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <status value=&quot;final&quot;>"><span>final</span></span></div></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;CEX-HPLCMainPeak&quot;/>
                        <display value=&quot;CEX-HPLC Main Peak&quot;/>
                    </coding>
                    <text value=&quot;CEX-HPLC Main Peak (%)&quot;/>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;CEX-HPLCMainPeak&quot;/>
                        <display value=&quot;CEX-HPLC Main Peak&quot;/>">CEX-HPLC Main Peak<span class="greyOff"> [CEX-HPLCMainPeak]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: CEX-HPLC Main Peak (%)</span></span></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-2&quot;/>">Subject</span>: Lot Number: 88878 (<a href="#Medication-medication-actual-batch-2" title="click to see target - id=medication-actual-batch-2">Medication</a>)<span class="debugOff"> id: medication-actual-batch-2</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;CEX-HPLC-2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/CEX-HPLCMainPeak&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;CEX-HPLCMainPeak&quot;/>
                        <display value=&quot;CEX-HPLC Main Peak&quot;/>
                    </coding>
                    <text value=&quot;CEX-HPLC Main Peak (%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-2&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCMainPeak-15&quot;/>
                            <display value=&quot;CEX-HPLC Main Peak - 15&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;15.5&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCMainPeak-25&quot;/>
                            <display value=&quot;CEX-HPLC Main Peak - 25&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;16.5&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>">Instantiates</span>: CEX-HPLC Main Peak (%) - Plan: Drug Product Compatibility (<a href="#PlanDefinition-plandefinition-compatibility" title="click to see target - id=plandefinition-compatibility">PlanDefinition</a>)<span class="debugOff"> id: plandefinition-compatibility</span> (<a href="#ObservationDefinition-CEX-HPLCMainPeak" title="click to see target - id=CEX-HPLCMainPeak">ObservationDefinition</a>)<span class="debugOff"> id: CEX-HPLCMainPeak</span></span><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCMainPeak-15&quot;/>
                            <display value=&quot;CEX-HPLC Main Peak - 15&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;15.5&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>">
		Component
		<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCMainPeak-15&quot;/>
                            <display value=&quot;CEX-HPLC Main Peak - 15&quot;/>">CEX-HPLC Main Peak - 15<span class="greyOff"> [CEX-HPLCMainPeak-15]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCMainPeak-15&quot;/>
                            <display value=&quot;CEX-HPLC Main Peak - 15&quot;/>
                        </coding>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCMainPeak-15&quot;/>
                            <display value=&quot;CEX-HPLC Main Peak - 15&quot;/>">CEX-HPLC Main Peak - 15<span class="greyOff"> [CEX-HPLCMainPeak-15]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;15.5&quot;/>
                        <unit value=&quot;%&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;15.5&quot;/>
                        <unit value=&quot;%&quot;/>">15.5%</span></div></div><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCMainPeak-25&quot;/>
                            <display value=&quot;CEX-HPLC Main Peak - 25&quot;/>
                        </coding>
                    </code>
                    <valueQuantity>
                        <value value=&quot;16.5&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>">
		Component
		<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCMainPeak-25&quot;/>
                            <display value=&quot;CEX-HPLC Main Peak - 25&quot;/>">CEX-HPLC Main Peak - 25<span class="greyOff"> [CEX-HPLCMainPeak-25]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCMainPeak-25&quot;/>
                            <display value=&quot;CEX-HPLC Main Peak - 25&quot;/>
                        </coding>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCMainPeak-25&quot;/>
                            <display value=&quot;CEX-HPLC Main Peak - 25&quot;/>">CEX-HPLC Main Peak - 25<span class="greyOff"> [CEX-HPLCMainPeak-25]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;16.5&quot;/>
                        <unit value=&quot;%&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;16.5&quot;/>
                        <unit value=&quot;%&quot;/>">16.5%</span></div></div><div class="summaryHiddenOff"><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>">Performer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/performer, id: SE-UHPLCMainPeak1 fullUrl: urn:uuid:44ba47fd-8964-4f96-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: SE-UHPLCMainPeak2 fullUrl: urn:uuid:54ca47fd-8964-4f96-6495-b2bec7f162e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: SE-UHPLCHMW1 fullUrl: urn:uuid:44ba47fd-8964-4f97-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: SE-UHPLCHMW2 fullUrl: urn:uuid:54ca47fd-8964-4f98-6495-b2bec7f162e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: CEX-HPLC-1 fullUrl: urn:uuid:54ba47fd-8964-4f96-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: CEX-HPLC-2 fullUrl: urn:uuid:54bb47fd-8964-4f96-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: CEX-Acidic-1 fullUrl: urn:uuid:54ba47fd-8964-4f96-6495-b2bec7f161e8)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: CEX-Acidic-2 fullUrl: urn:uuid:54ba48fd-8964-4f96-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: 378fbe5f-5926-3a5c-4c64-5428df877b08)(fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <id value=&quot;378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                <identifier>
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3007270600&quot;/>
                </identifier>
                <active value=&quot;true&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;analytical-testing-release&quot;/>
                        <display value=&quot;Analytical Testing - Release&quot;/>
                    </coding>
                </type>
                <name value=&quot;Testing Lab&quot;/>" id="Organization-378fbe5f-5926-3a5c-4c64-5428df877b08">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/organization.html#tt-uml">R6</a>]</span><div class="debugOff">id: 378fbe5f-5926-3a5c-4c64-5428df877b08</div><div class="debugOff"> fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08</div><span class="summaryShowsOff"> - Testing Lab</span><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3007270600&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3007270600&quot;/>">3007270600<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span></div><div class="debugOff"><span title="
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
                <name value=&quot;Testing Lab&quot;>">Name: </span><span>Testing Lab</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;analytical-testing-release&quot;/>
                        <display value=&quot;Analytical Testing - Release&quot;/>
                    </coding>">Type: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;analytical-testing-release&quot;/>
                        <display value=&quot;Analytical Testing - Release&quot;/>">Analytical Testing - Release<span class="greyOff"> [analytical-testing-release]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type)</span></span></div></div></div></div></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: processValidationReport fullUrl: urn:uuid:b664977d-799d-a1ce-928a-5def2a9955bd)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: CEX-Acidic-1)(fullUrl: urn:uuid:54ba47fd-8964-4f96-6495-b2bec7f161e8)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;CEX-Acidic-1&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/CEX-HPLCAcidicPeak&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;CEX-HPLCAcidicPeak&quot;/>
                        <display value=&quot;CEX-HPLC Acidic Peak&quot;/>
                    </coding>
                    <text value=&quot;CEX-HPLC Acidic Peak (%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-1&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCAcidicPeak-15&quot;/>
                            <display value=&quot;CEX-HPLC Acidic Peak - 15&quot;/>
                        </coding>
                        <text value=&quot;CEX-HPLC Acidic Peak (%)&quot;/>
                    </code>
                    <valueQuantity>
                        <value value=&quot;28.5&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCAcidicPeak-25&quot;/>
                            <display value=&quot;CEX-HPLC Acidic Peak - 25&quot;/>
                        </coding>
                        <text value=&quot;CEX-HPLC Acidic Peak (%)&quot;/>
                    </code>
                    <valueQuantity>
                        <value value=&quot;29.5&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>" id="Observation-CEX-Acidic-1">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;CEX-HPLCAcidicPeak&quot;/>
                        <display value=&quot;CEX-HPLC Acidic Peak&quot;/>">CEX-HPLC Acidic Peak<span class="greyOff"> [CEX-HPLCAcidicPeak]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: CEX-HPLC Acidic Peak (%)</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: CEX-Acidic-1</div><div class="debugOff"> fullUrl: urn:uuid:54ba47fd-8964-4f96-6495-b2bec7f161e8</div><div class="summaryHiddenOff"></div><div><span title="
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
                <status value=&quot;final&quot;>">Status: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <status value=&quot;final&quot;>"><span>final</span></span></div></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;CEX-HPLCAcidicPeak&quot;/>
                        <display value=&quot;CEX-HPLC Acidic Peak&quot;/>
                    </coding>
                    <text value=&quot;CEX-HPLC Acidic Peak (%)&quot;/>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;CEX-HPLCAcidicPeak&quot;/>
                        <display value=&quot;CEX-HPLC Acidic Peak&quot;/>">CEX-HPLC Acidic Peak<span class="greyOff"> [CEX-HPLCAcidicPeak]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: CEX-HPLC Acidic Peak (%)</span></span></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-1&quot;/>">Subject</span>: Lot Number: 88877 (<a href="#Medication-medication-actual-batch-1" title="click to see target - id=medication-actual-batch-1">Medication</a>)<span class="debugOff"> id: medication-actual-batch-1</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;CEX-Acidic-1&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/CEX-HPLCAcidicPeak&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;CEX-HPLCAcidicPeak&quot;/>
                        <display value=&quot;CEX-HPLC Acidic Peak&quot;/>
                    </coding>
                    <text value=&quot;CEX-HPLC Acidic Peak (%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-1&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCAcidicPeak-15&quot;/>
                            <display value=&quot;CEX-HPLC Acidic Peak - 15&quot;/>
                        </coding>
                        <text value=&quot;CEX-HPLC Acidic Peak (%)&quot;/>
                    </code>
                    <valueQuantity>
                        <value value=&quot;28.5&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCAcidicPeak-25&quot;/>
                            <display value=&quot;CEX-HPLC Acidic Peak - 25&quot;/>
                        </coding>
                        <text value=&quot;CEX-HPLC Acidic Peak (%)&quot;/>
                    </code>
                    <valueQuantity>
                        <value value=&quot;29.5&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>">Instantiates</span>: CEX-HPLC Acidic Peak (%) - Plan: Drug Product Compatibility (<a href="#PlanDefinition-plandefinition-compatibility" title="click to see target - id=plandefinition-compatibility">PlanDefinition</a>)<span class="debugOff"> id: plandefinition-compatibility</span> (<a href="#ObservationDefinition-CEX-HPLCAcidicPeak" title="click to see target - id=CEX-HPLCAcidicPeak">ObservationDefinition</a>)<span class="debugOff"> id: CEX-HPLCAcidicPeak</span></span><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCAcidicPeak-15&quot;/>
                            <display value=&quot;CEX-HPLC Acidic Peak - 15&quot;/>
                        </coding>
                        <text value=&quot;CEX-HPLC Acidic Peak (%)&quot;/>
                    </code>
                    <valueQuantity>
                        <value value=&quot;28.5&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>">
		Component
		<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCAcidicPeak-15&quot;/>
                            <display value=&quot;CEX-HPLC Acidic Peak - 15&quot;/>">CEX-HPLC Acidic Peak - 15<span class="greyOff"> [CEX-HPLCAcidicPeak-15]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: CEX-HPLC Acidic Peak (%)</span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCAcidicPeak-15&quot;/>
                            <display value=&quot;CEX-HPLC Acidic Peak - 15&quot;/>
                        </coding>
                        <text value=&quot;CEX-HPLC Acidic Peak (%)&quot;/>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCAcidicPeak-15&quot;/>
                            <display value=&quot;CEX-HPLC Acidic Peak - 15&quot;/>">CEX-HPLC Acidic Peak - 15<span class="greyOff"> [CEX-HPLCAcidicPeak-15]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: CEX-HPLC Acidic Peak (%)</span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;28.5&quot;/>
                        <unit value=&quot;%&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;28.5&quot;/>
                        <unit value=&quot;%&quot;/>">28.5%</span></div></div><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCAcidicPeak-25&quot;/>
                            <display value=&quot;CEX-HPLC Acidic Peak - 25&quot;/>
                        </coding>
                        <text value=&quot;CEX-HPLC Acidic Peak (%)&quot;/>
                    </code>
                    <valueQuantity>
                        <value value=&quot;29.5&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>">
		Component
		<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCAcidicPeak-25&quot;/>
                            <display value=&quot;CEX-HPLC Acidic Peak - 25&quot;/>">CEX-HPLC Acidic Peak - 25<span class="greyOff"> [CEX-HPLCAcidicPeak-25]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: CEX-HPLC Acidic Peak (%)</span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCAcidicPeak-25&quot;/>
                            <display value=&quot;CEX-HPLC Acidic Peak - 25&quot;/>
                        </coding>
                        <text value=&quot;CEX-HPLC Acidic Peak (%)&quot;/>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCAcidicPeak-25&quot;/>
                            <display value=&quot;CEX-HPLC Acidic Peak - 25&quot;/>">CEX-HPLC Acidic Peak - 25<span class="greyOff"> [CEX-HPLCAcidicPeak-25]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: CEX-HPLC Acidic Peak (%)</span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;29.5&quot;/>
                        <unit value=&quot;%&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;29.5&quot;/>
                        <unit value=&quot;%&quot;/>">29.5%</span></div></div><div class="summaryHiddenOff"><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>">Performer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/performer, id: SE-UHPLCMainPeak1 fullUrl: urn:uuid:44ba47fd-8964-4f96-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: SE-UHPLCMainPeak2 fullUrl: urn:uuid:54ca47fd-8964-4f96-6495-b2bec7f162e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: SE-UHPLCHMW1 fullUrl: urn:uuid:44ba47fd-8964-4f97-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: SE-UHPLCHMW2 fullUrl: urn:uuid:54ca47fd-8964-4f98-6495-b2bec7f162e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: CEX-HPLC-1 fullUrl: urn:uuid:54ba47fd-8964-4f96-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: CEX-HPLC-2 fullUrl: urn:uuid:54bb47fd-8964-4f96-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: CEX-Acidic-1 fullUrl: urn:uuid:54ba47fd-8964-4f96-6495-b2bec7f161e8)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: CEX-Acidic-2 fullUrl: urn:uuid:54ba48fd-8964-4f96-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: 378fbe5f-5926-3a5c-4c64-5428df877b08)(fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <id value=&quot;378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                <identifier>
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3007270600&quot;/>
                </identifier>
                <active value=&quot;true&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;analytical-testing-release&quot;/>
                        <display value=&quot;Analytical Testing - Release&quot;/>
                    </coding>
                </type>
                <name value=&quot;Testing Lab&quot;/>" id="Organization-378fbe5f-5926-3a5c-4c64-5428df877b08">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/organization.html#tt-uml">R6</a>]</span><div class="debugOff">id: 378fbe5f-5926-3a5c-4c64-5428df877b08</div><div class="debugOff"> fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08</div><span class="summaryShowsOff"> - Testing Lab</span><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3007270600&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3007270600&quot;/>">3007270600<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span></div><div class="debugOff"><span title="
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
                <name value=&quot;Testing Lab&quot;>">Name: </span><span>Testing Lab</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;analytical-testing-release&quot;/>
                        <display value=&quot;Analytical Testing - Release&quot;/>
                    </coding>">Type: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;analytical-testing-release&quot;/>
                        <display value=&quot;Analytical Testing - Release&quot;/>">Analytical Testing - Release<span class="greyOff"> [analytical-testing-release]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type)</span></span></div></div></div></div></div></div><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: processValidationReport fullUrl: urn:uuid:b664977d-799d-a1ce-928a-5def2a9955bd)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: CEX-Acidic-2)(fullUrl: urn:uuid:54ba48fd-8964-4f96-6495-b2bec7f161e7)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;CEX-Acidic-2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/CEX-HPLCAcidicPeak&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;CEX-HPLCAcidicPeak&quot;/>
                        <display value=&quot;CEX-HPLC Acidic Peak&quot;/>
                    </coding>
                    <text value=&quot;CEX-HPLC Acidic Peak (%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-1&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCAcidicPeak-15&quot;/>
                            <display value=&quot;CEX-HPLC Acidic Peak - 15&quot;/>
                        </coding>
                        <text value=&quot;CEX-HPLC Acidic Peak (%)&quot;/>
                    </code>
                    <valueQuantity>
                        <value value=&quot;28.6&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCAcidicPeak-25&quot;/>
                            <display value=&quot;CEX-HPLC Acidic Peak - 25&quot;/>
                        </coding>
                        <text value=&quot;CEX-HPLC Acidic Peak (%)&quot;/>
                    </code>
                    <valueQuantity>
                        <value value=&quot;29.3&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>" id="Observation-CEX-Acidic-2">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;CEX-HPLCAcidicPeak&quot;/>
                        <display value=&quot;CEX-HPLC Acidic Peak&quot;/>">CEX-HPLC Acidic Peak<span class="greyOff"> [CEX-HPLCAcidicPeak]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: CEX-HPLC Acidic Peak (%)</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: CEX-Acidic-2</div><div class="debugOff"> fullUrl: urn:uuid:54ba48fd-8964-4f96-6495-b2bec7f161e7</div><div class="summaryHiddenOff"></div><div><span title="
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
                <status value=&quot;final&quot;>">Status: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <status value=&quot;final&quot;>"><span>final</span></span></div></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;CEX-HPLCAcidicPeak&quot;/>
                        <display value=&quot;CEX-HPLC Acidic Peak&quot;/>
                    </coding>
                    <text value=&quot;CEX-HPLC Acidic Peak (%)&quot;/>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;CEX-HPLCAcidicPeak&quot;/>
                        <display value=&quot;CEX-HPLC Acidic Peak&quot;/>">CEX-HPLC Acidic Peak<span class="greyOff"> [CEX-HPLCAcidicPeak]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: CEX-HPLC Acidic Peak (%)</span></span></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-1&quot;/>">Subject</span>: Lot Number: 88877 (<a href="#Medication-medication-actual-batch-1" title="click to see target - id=medication-actual-batch-1">Medication</a>)<span class="debugOff"> id: medication-actual-batch-1</span></div><div></div><span class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;CEX-Acidic-2&quot;/>
                <instantiatesReference>
                    <reference value=&quot;ObservationDefinition/CEX-HPLCAcidicPeak&quot;/>
                </instantiatesReference>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;CEX-HPLCAcidicPeak&quot;/>
                        <display value=&quot;CEX-HPLC Acidic Peak&quot;/>
                    </coding>
                    <text value=&quot;CEX-HPLC Acidic Peak (%)&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch-1&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCAcidicPeak-15&quot;/>
                            <display value=&quot;CEX-HPLC Acidic Peak - 15&quot;/>
                        </coding>
                        <text value=&quot;CEX-HPLC Acidic Peak (%)&quot;/>
                    </code>
                    <valueQuantity>
                        <value value=&quot;28.6&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCAcidicPeak-25&quot;/>
                            <display value=&quot;CEX-HPLC Acidic Peak - 25&quot;/>
                        </coding>
                        <text value=&quot;CEX-HPLC Acidic Peak (%)&quot;/>
                    </code>
                    <valueQuantity>
                        <value value=&quot;29.3&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </component>">Instantiates</span>: CEX-HPLC Acidic Peak (%) - Plan: Drug Product Compatibility (<a href="#PlanDefinition-plandefinition-compatibility" title="click to see target - id=plandefinition-compatibility">PlanDefinition</a>)<span class="debugOff"> id: plandefinition-compatibility</span> (<a href="#ObservationDefinition-CEX-HPLCAcidicPeak" title="click to see target - id=CEX-HPLCAcidicPeak">ObservationDefinition</a>)<span class="debugOff"> id: CEX-HPLCAcidicPeak</span></span><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCAcidicPeak-15&quot;/>
                            <display value=&quot;CEX-HPLC Acidic Peak - 15&quot;/>
                        </coding>
                        <text value=&quot;CEX-HPLC Acidic Peak (%)&quot;/>
                    </code>
                    <valueQuantity>
                        <value value=&quot;28.6&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>">
		Component
		<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCAcidicPeak-15&quot;/>
                            <display value=&quot;CEX-HPLC Acidic Peak - 15&quot;/>">CEX-HPLC Acidic Peak - 15<span class="greyOff"> [CEX-HPLCAcidicPeak-15]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: CEX-HPLC Acidic Peak (%)</span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCAcidicPeak-15&quot;/>
                            <display value=&quot;CEX-HPLC Acidic Peak - 15&quot;/>
                        </coding>
                        <text value=&quot;CEX-HPLC Acidic Peak (%)&quot;/>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCAcidicPeak-15&quot;/>
                            <display value=&quot;CEX-HPLC Acidic Peak - 15&quot;/>">CEX-HPLC Acidic Peak - 15<span class="greyOff"> [CEX-HPLCAcidicPeak-15]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: CEX-HPLC Acidic Peak (%)</span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;28.6&quot;/>
                        <unit value=&quot;%&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;28.6&quot;/>
                        <unit value=&quot;%&quot;/>">28.6%</span></div></div><div class="indent obsl2" title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCAcidicPeak-25&quot;/>
                            <display value=&quot;CEX-HPLC Acidic Peak - 25&quot;/>
                        </coding>
                        <text value=&quot;CEX-HPLC Acidic Peak (%)&quot;/>
                    </code>
                    <valueQuantity>
                        <value value=&quot;29.3&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>">
		Component
		<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCAcidicPeak-25&quot;/>
                            <display value=&quot;CEX-HPLC Acidic Peak - 25&quot;/>">CEX-HPLC Acidic Peak - 25<span class="greyOff"> [CEX-HPLCAcidicPeak-25]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: CEX-HPLC Acidic Peak (%)</span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCAcidicPeak-25&quot;/>
                            <display value=&quot;CEX-HPLC Acidic Peak - 25&quot;/>
                        </coding>
                        <text value=&quot;CEX-HPLC Acidic Peak (%)&quot;/>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCAcidicPeak-25&quot;/>
                            <display value=&quot;CEX-HPLC Acidic Peak - 25&quot;/>">CEX-HPLC Acidic Peak - 25<span class="greyOff"> [CEX-HPLCAcidicPeak-25]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: CEX-HPLC Acidic Peak (%)</span></span></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;29.3&quot;/>
                        <unit value=&quot;%&quot;/>">
				Value:
				<span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <component>
                    ...
                    <valueQuantity>
                        <value value=&quot;29.3&quot;/>
                        <unit value=&quot;%&quot;/>">29.3%</span></div></div><div class="summaryHiddenOff"><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>">Performer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/performer, id: SE-UHPLCMainPeak1 fullUrl: urn:uuid:44ba47fd-8964-4f96-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: SE-UHPLCMainPeak2 fullUrl: urn:uuid:54ca47fd-8964-4f96-6495-b2bec7f162e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: SE-UHPLCHMW1 fullUrl: urn:uuid:44ba47fd-8964-4f97-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: SE-UHPLCHMW2 fullUrl: urn:uuid:54ca47fd-8964-4f98-6495-b2bec7f162e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: CEX-HPLC-1 fullUrl: urn:uuid:54ba47fd-8964-4f96-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: CEX-HPLC-2 fullUrl: urn:uuid:54bb47fd-8964-4f96-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: CEX-Acidic-1 fullUrl: urn:uuid:54ba47fd-8964-4f96-6495-b2bec7f161e8)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/performer, id: CEX-Acidic-2 fullUrl: urn:uuid:54ba48fd-8964-4f96-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: 378fbe5f-5926-3a5c-4c64-5428df877b08)(fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <id value=&quot;378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                <identifier>
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3007270600&quot;/>
                </identifier>
                <active value=&quot;true&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;analytical-testing-release&quot;/>
                        <display value=&quot;Analytical Testing - Release&quot;/>
                    </coding>
                </type>
                <name value=&quot;Testing Lab&quot;/>" id="Organization-378fbe5f-5926-3a5c-4c64-5428df877b08">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/organization.html#tt-uml">R6</a>]</span><div class="debugOff">id: 378fbe5f-5926-3a5c-4c64-5428df877b08</div><div class="debugOff"> fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08</div><span class="summaryShowsOff"> - Testing Lab</span><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3007270600&quot;/>">Identifier: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <identifier>
                    <system value=&quot;urn:oid:2.16.840.1.113883.4.82&quot;/>
                    <value value=&quot;3007270600&quot;/>">3007270600<span class="greyOff"> (urn:oid:2.16.840.1.113883.4.82)</span></span></div><div class="debugOff"><span title="
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
                <name value=&quot;Testing Lab&quot;>">Name: </span><span>Testing Lab</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;analytical-testing-release&quot;/>
                        <display value=&quot;Analytical Testing - Release&quot;/>
                    </coding>">Type: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type&quot;/>
                        <code value=&quot;analytical-testing-release&quot;/>
                        <display value=&quot;Analytical Testing - Release&quot;/>">Analytical Testing - Release<span class="greyOff"> [analytical-testing-release]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/pharmaceutical-organization-type)</span></span></div></div></div></div></div></div>
</div>
</div>
</div>
<div class="org indent"><span class="bold">Report Specification</span><div class="indent plan summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (DiagnosticReport/valueReference, id: processValidationReport fullUrl: urn:uuid:b664977d-799d-a1ce-928a-5def2a9955bd)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="PlanDefinition (id: plandefinition-compatibility)(fullUrl: urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763f)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/PlanDefinition-drug-pq 

<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <id value=&quot;plandefinition-compatibility&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/PlanDefinition-drug-pq&quot;/>
                </meta>
                <url value=&quot;http://example-server.com/fhir/PlanDefinition/2038e4c7-22b8-4c56-2d28-6c077648763f&quot;/>
                <title value=&quot;Drug Product Compatibility&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/plan-definition-type&quot;/>
                        <code value=&quot;workflow-definition&quot;/>
                        <display value=&quot;Workflow Definition&quot;/>
                    </coding>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-plan-type&quot;/>
                        <code value=&quot;product-compatibility&quot;/>
                        <display value=&quot;Product Compatibility&quot;/>
                    </coding>
                </type>
                <status value=&quot;active&quot;/>
                <subjectReference>
                    <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                </subjectReference>
                <description value=&quot;Pre-defined validation acceptance criteria were established based on manufacturing development data derived from process characterization studies...&quot;/>
                <action>
                    <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tabulateActionResults&quot;>
                        <!--extension url=&quot;biological&quot;><valueBoolean value=&quot;true&quot;/></extension-->
                        <extension url=&quot;titlePrefix&quot;>
                            <valueString value=&quot;Table 2&quot;/>
                        </extension>
                        <extension url=&quot;testTypeColumnTitle&quot;>
                            <valueString value=&quot;Method / Quality Attribute&quot;/>
                        </extension>
                        <extension url=&quot;acceptanceColumn&quot;>
                            <valueBoolean value=&quot;false&quot;/>
                        </extension>
                        <extension url=&quot;componentsAsColumns&quot;>
                            <valueBoolean value=&quot;true&quot;/>
                        </extension>
                        <extension url=&quot;batchTitle&quot;>
                            <valueString value=&quot;15°C&quot;/>
                        </extension>
                        <extension url=&quot;batchColumnTitle&quot;>
                            <valueString value=&quot;PFS Extruded Samples and AI/Pen Extruded Samples&quot;/>
                        </extension>
                        <extension url=&quot;componentsColumnTwo&quot;>
                            <valueString value=&quot;25°C&quot;/>
                        </extension>
                    </extension>
                    <title value=&quot;Results From Evaluation of Drug Product Compatibility With the Glass Syringe Using the Autoinjector/Pen&quot;/>
                    <!-- needs some other code -->
                    <!--code>
                        <coding>
                            <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-step&quot;/>
                            <code value=&quot;FilteredFormulatedDrugProductPerformanceIndicatorResultsStep&quot;/>
                            <display value=&quot;Filtered Formulated Drug Product Performance Indicator Results&quot;/>
                        </coding>
                    </code-->
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <!-- this is not seen by normal code -->
                        <!--definitionCanonical value=&quot;ObservationDefinition/SE-UHPLCMainPeak&quot;/-->
                        <!--definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/SE-UHPLCMainPeak&quot;/-->
                        <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/64525a3d-5034-448a-9c19-938ce1958424&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <!--definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/SE-UHPLCHMW&quot;/-->
                        <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/64525a33-5034-448a-9c19-938ce1958424&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <!--definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/CEX-HPLCAcidicPeak&quot;/-->
                        <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/74525a3d-5034-448a-9c19-938ce1958424&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <!--definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/CEX-HPLCMainPeak&quot;/-->
                        <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/74525a3d-5034-448a-9c19-938ce1958425&quot;/>
                    </action>
                </action>" id="PlanDefinition-plandefinition-compatibility">Plan</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/plandefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/plandefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/plandefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: plandefinition-compatibility</div>
<div class="debugOff"> fullUrl: urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763f</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/PlanDefinition/2038e4c7-22b8-4c56-2d28-6c077648763f</div>
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
                <title value=&quot;Drug Product Compatibility&quot;>">Title: </span><span>Drug Product Compatibility</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <description value=&quot;Pre-defined validation acceptance criteria were established based on manufacturing development data derived from process characterization studies...&quot;>">Description: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <description value=&quot;Pre-defined validation acceptance criteria were established based on manufacturing development data derived from process characterization studies...&quot;>">Pre-defined validation acceptance criteria were established based on manufacturing development data derived from process characterization studies...</span></div>
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
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-plan-type&quot;/>
                        <code value=&quot;product-compatibility&quot;/>
                        <display value=&quot;Product Compatibility&quot;/>
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
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-plan-type&quot;/>
                        <code value=&quot;product-compatibility&quot;/>
                        <display value=&quot;Product Compatibility&quot;/>">Product Compatibility<span class="greyOff"> [product-compatibility]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/pharmaceutical-plan-type)</span></span></div>
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
                <id value=&quot;plandefinition-compatibility&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/PlanDefinition-drug-pq&quot;/>
                </meta>
                <url value=&quot;http://example-server.com/fhir/PlanDefinition/2038e4c7-22b8-4c56-2d28-6c077648763f&quot;/>
                <title value=&quot;Drug Product Compatibility&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/plan-definition-type&quot;/>
                        <code value=&quot;workflow-definition&quot;/>
                        <display value=&quot;Workflow Definition&quot;/>
                    </coding>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-plan-type&quot;/>
                        <code value=&quot;product-compatibility&quot;/>
                        <display value=&quot;Product Compatibility&quot;/>
                    </coding>
                </type>
                <status value=&quot;active&quot;/>
                <subjectReference>
                    <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                </subjectReference>
                <description value=&quot;Pre-defined validation acceptance criteria were established based on manufacturing development data derived from process characterization studies...&quot;/>
                <action>
                    <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tabulateActionResults&quot;>
                        <!--extension url=&quot;biological&quot;><valueBoolean value=&quot;true&quot;/></extension-->
                        <extension url=&quot;titlePrefix&quot;>
                            <valueString value=&quot;Table 2&quot;/>
                        </extension>
                        <extension url=&quot;testTypeColumnTitle&quot;>
                            <valueString value=&quot;Method / Quality Attribute&quot;/>
                        </extension>
                        <extension url=&quot;acceptanceColumn&quot;>
                            <valueBoolean value=&quot;false&quot;/>
                        </extension>
                        <extension url=&quot;componentsAsColumns&quot;>
                            <valueBoolean value=&quot;true&quot;/>
                        </extension>
                        <extension url=&quot;batchTitle&quot;>
                            <valueString value=&quot;15°C&quot;/>
                        </extension>
                        <extension url=&quot;batchColumnTitle&quot;>
                            <valueString value=&quot;PFS Extruded Samples and AI/Pen Extruded Samples&quot;/>
                        </extension>
                        <extension url=&quot;componentsColumnTwo&quot;>
                            <valueString value=&quot;25°C&quot;/>
                        </extension>
                    </extension>
                    <title value=&quot;Results From Evaluation of Drug Product Compatibility With the Glass Syringe Using the Autoinjector/Pen&quot;/>
                    <!-- needs some other code -->
                    <!--code>
                        <coding>
                            <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-step&quot;/>
                            <code value=&quot;FilteredFormulatedDrugProductPerformanceIndicatorResultsStep&quot;/>
                            <display value=&quot;Filtered Formulated Drug Product Performance Indicator Results&quot;/>
                        </coding>
                    </code-->
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <!-- this is not seen by normal code -->
                        <!--definitionCanonical value=&quot;ObservationDefinition/SE-UHPLCMainPeak&quot;/-->
                        <!--definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/SE-UHPLCMainPeak&quot;/-->
                        <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/64525a3d-5034-448a-9c19-938ce1958424&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <!--definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/SE-UHPLCHMW&quot;/-->
                        <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/64525a33-5034-448a-9c19-938ce1958424&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <!--definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/CEX-HPLCAcidicPeak&quot;/-->
                        <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/74525a3d-5034-448a-9c19-938ce1958424&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <!--definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/CEX-HPLCMainPeak&quot;/-->
                        <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/74525a3d-5034-448a-9c19-938ce1958425&quot;/>
                    </action>
                </action>">Subject: </span>Stelbatolol (<a href="#MedicinalProductDefinition-medicinalproductdefinition-drug-product-dxpq-ex1" title="click to see target - id=medicinalproductdefinition-drug-product-dxpq-ex1">MedicinalProductDefinition</a>)<span class="debugOff"> id: medicinalproductdefinition-drug-product-dxpq-ex1</span></span><div class="indent summaryUnit planl2" ondblclick="summaryHandler(event)"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <action>
                    <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tabulateActionResults&quot;>
                        <!--extension url=&quot;biological&quot;><valueBoolean value=&quot;true&quot;/></extension-->
                        <extension url=&quot;titlePrefix&quot;>
                            <valueString value=&quot;Table 2&quot;/>
                        </extension>
                        <extension url=&quot;testTypeColumnTitle&quot;>
                            <valueString value=&quot;Method / Quality Attribute&quot;/>
                        </extension>
                        <extension url=&quot;acceptanceColumn&quot;>
                            <valueBoolean value=&quot;false&quot;/>
                        </extension>
                        <extension url=&quot;componentsAsColumns&quot;>
                            <valueBoolean value=&quot;true&quot;/>
                        </extension>
                        <extension url=&quot;batchTitle&quot;>
                            <valueString value=&quot;15°C&quot;/>
                        </extension>
                        <extension url=&quot;batchColumnTitle&quot;>
                            <valueString value=&quot;PFS Extruded Samples and AI/Pen Extruded Samples&quot;/>
                        </extension>
                        <extension url=&quot;componentsColumnTwo&quot;>
                            <valueString value=&quot;25°C&quot;/>
                        </extension>
                    </extension>
                    <title value=&quot;Results From Evaluation of Drug Product Compatibility With the Glass Syringe Using the Autoinjector/Pen&quot;/>
                    <!-- needs some other code -->
                    <!--code>
                        <coding>
                            <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-step&quot;/>
                            <code value=&quot;FilteredFormulatedDrugProductPerformanceIndicatorResultsStep&quot;/>
                            <display value=&quot;Filtered Formulated Drug Product Performance Indicator Results&quot;/>
                        </coding>
                    </code-->
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <!-- this is not seen by normal code -->
                        <!--definitionCanonical value=&quot;ObservationDefinition/SE-UHPLCMainPeak&quot;/-->
                        <!--definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/SE-UHPLCMainPeak&quot;/-->
                        <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/64525a3d-5034-448a-9c19-938ce1958424&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <!--definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/SE-UHPLCHMW&quot;/-->
                        <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/64525a33-5034-448a-9c19-938ce1958424&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <!--definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/CEX-HPLCAcidicPeak&quot;/-->
                        <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/74525a3d-5034-448a-9c19-938ce1958424&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <!--definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/CEX-HPLCMainPeak&quot;/-->
                        <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/74525a3d-5034-448a-9c19-938ce1958425&quot;/>
                    </action>"><a id="urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763f"><span>Action</span></a><span class="summaryShowsOff"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <title value=&quot;Results From Evaluation of Drug Product Compatibility With the Glass Syringe Using the Autoinjector/Pen&quot;>"> - Results From Evaluation of Drug Product Compatibility With the Glass Syringe Using the Autoinjector/Pen</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <title value=&quot;Results From Evaluation of Drug Product Compatibility With the Glass Syringe Using the Autoinjector/Pen&quot;>">Title: </span><span>Results From Evaluation of Drug Product Compatibility With the Glass Syringe Using the Autoinjector/Pen</span></div>
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
                        <!-- this is not seen by normal code -->
                        <!--definitionCanonical value=&quot;ObservationDefinition/SE-UHPLCMainPeak&quot;/-->
                        <!--definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/SE-UHPLCMainPeak&quot;/-->
                        <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/64525a3d-5034-448a-9c19-938ce1958424&quot;/>"><a id="urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763f"><span>Action</span></a><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
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
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: plandefinition-compatibility fullUrl: urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763furl (canonical): http://example-server.com/fhir/PlanDefinition/2038e4c7-22b8-4c56-2d28-6c077648763f)<br>which is linked to this by canonical resource.url</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: SE-UHPLCMainPeak1 fullUrl: urn:uuid:44ba47fd-8964-4f96-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: SE-UHPLCMainPeak2 fullUrl: urn:uuid:54ca47fd-8964-4f96-6495-b2bec7f162e7)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: SE-UHPLCMainPeak)(fullUrl: urn:uuid:64525a3d-5034-448a-9c19-938ce1958424)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;SE-UHPLCMainPeak&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/64525a3d-5034-448a-9c19-938ce1958424&quot;/>
                <title value=&quot;SE-UHPLC % Main Peak&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;SE-UHPLCMainPeak&quot;/>
                        <display value=&quot;SE-UHPLC Main Peak&quot;/>
                    </coding>
                    <text value=&quot;SE-UHPLC Main Peak (%)&quot;/>
                </code>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCMainPeak-15&quot;/>
                            <display value=&quot;SE-UHPLC Main Peak - 15&quot;/>
                        </coding>
                    </code>
                </component>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCMainPeak-25&quot;/>
                            <display value=&quot;SE-UHPLC Main Peak - 25&quot;/>
                        </coding>
                    </code>
                </component>" id="ObservationDefinition-SE-UHPLCMainPeak">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;SE-UHPLCMainPeak&quot;/>
                        <display value=&quot;SE-UHPLC Main Peak&quot;/>">SE-UHPLC Main Peak<span class="greyOff"> [SE-UHPLCMainPeak]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: SE-UHPLC Main Peak (%)</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: SE-UHPLCMainPeak</div>
<div class="debugOff"> fullUrl: urn:uuid:64525a3d-5034-448a-9c19-938ce1958424</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/64525a3d-5034-448a-9c19-938ce1958424</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;SE-UHPLC % Main Peak&quot;>">Title: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;SE-UHPLC % Main Peak&quot;>">SE-UHPLC % Main Peak</span></div>
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
                        <code value=&quot;SE-UHPLCMainPeak&quot;/>
                        <display value=&quot;SE-UHPLC Main Peak&quot;/>
                    </coding>
                    <text value=&quot;SE-UHPLC Main Peak (%)&quot;/>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;SE-UHPLCMainPeak&quot;/>
                        <display value=&quot;SE-UHPLC Main Peak&quot;/>">SE-UHPLC Main Peak<span class="greyOff"> [SE-UHPLCMainPeak]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: SE-UHPLC Main Peak (%)</span></span></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="indent obsDefl2" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCMainPeak-15&quot;/>
                            <display value=&quot;SE-UHPLC Main Peak - 15&quot;/>
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
                            <code value=&quot;SE-UHPLCMainPeak-15&quot;/>
                            <display value=&quot;SE-UHPLC Main Peak - 15&quot;/>">SE-UHPLC Main Peak - 15<span class="greyOff"> [SE-UHPLCMainPeak-15]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCMainPeak-15&quot;/>
                            <display value=&quot;SE-UHPLC Main Peak - 15&quot;/>
                        </coding>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCMainPeak-15&quot;/>
                            <display value=&quot;SE-UHPLC Main Peak - 15&quot;/>">SE-UHPLC Main Peak - 15<span class="greyOff"> [SE-UHPLCMainPeak-15]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span></div>
</div>
<div class="indent obsDefl2" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCMainPeak-25&quot;/>
                            <display value=&quot;SE-UHPLC Main Peak - 25&quot;/>
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
                            <code value=&quot;SE-UHPLCMainPeak-25&quot;/>
                            <display value=&quot;SE-UHPLC Main Peak - 25&quot;/>">SE-UHPLC Main Peak - 25<span class="greyOff"> [SE-UHPLCMainPeak-25]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCMainPeak-25&quot;/>
                            <display value=&quot;SE-UHPLC Main Peak - 25&quot;/>
                        </coding>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCMainPeak-25&quot;/>
                            <display value=&quot;SE-UHPLC Main Peak - 25&quot;/>">SE-UHPLC Main Peak - 25<span class="greyOff"> [SE-UHPLCMainPeak-25]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span></div>
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
                        <!--definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/SE-UHPLCHMW&quot;/-->
                        <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/64525a33-5034-448a-9c19-938ce1958424&quot;/>"><a id="urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763f"><span>Action</span></a><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
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
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: plandefinition-compatibility fullUrl: urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763furl (canonical): http://example-server.com/fhir/PlanDefinition/2038e4c7-22b8-4c56-2d28-6c077648763f)<br>which is linked to this by canonical resource.url</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: SE-UHPLCHMW1 fullUrl: urn:uuid:44ba47fd-8964-4f97-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: SE-UHPLCHMW2 fullUrl: urn:uuid:54ca47fd-8964-4f98-6495-b2bec7f162e7)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: SE-UHPLCHMW)(fullUrl: urn:uuid:64525a33-5034-448a-9c19-938ce1958424)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;SE-UHPLCHMW&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/64525a33-5034-448a-9c19-938ce1958424&quot;/>
                <title value=&quot;SE-UHPLC % HMW&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;SE-UHPLCHMW&quot;/>
                        <display value=&quot;SE-UHPLC HMW&quot;/>
                    </coding>
                    <text value=&quot;SE-UHPLC HMW (%)&quot;/>
                </code>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCHMW-15&quot;/>
                            <display value=&quot;SE-UHPLC HMW - 15&quot;/>
                        </coding>
                    </code>
                </component>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCHMW-25&quot;/>
                            <display value=&quot;SE-UHPLC HMW - 25&quot;/>
                        </coding>
                    </code>
                </component>" id="ObservationDefinition-SE-UHPLCHMW">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;SE-UHPLCHMW&quot;/>
                        <display value=&quot;SE-UHPLC HMW&quot;/>">SE-UHPLC HMW<span class="greyOff"> [SE-UHPLCHMW]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: SE-UHPLC HMW (%)</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: SE-UHPLCHMW</div>
<div class="debugOff"> fullUrl: urn:uuid:64525a33-5034-448a-9c19-938ce1958424</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/64525a33-5034-448a-9c19-938ce1958424</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;SE-UHPLC % HMW&quot;>">Title: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;SE-UHPLC % HMW&quot;>">SE-UHPLC % HMW</span></div>
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
                        <code value=&quot;SE-UHPLCHMW&quot;/>
                        <display value=&quot;SE-UHPLC HMW&quot;/>
                    </coding>
                    <text value=&quot;SE-UHPLC HMW (%)&quot;/>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;SE-UHPLCHMW&quot;/>
                        <display value=&quot;SE-UHPLC HMW&quot;/>">SE-UHPLC HMW<span class="greyOff"> [SE-UHPLCHMW]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: SE-UHPLC HMW (%)</span></span></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="indent obsDefl2" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCHMW-15&quot;/>
                            <display value=&quot;SE-UHPLC HMW - 15&quot;/>
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
                            <code value=&quot;SE-UHPLCHMW-15&quot;/>
                            <display value=&quot;SE-UHPLC HMW - 15&quot;/>">SE-UHPLC HMW - 15<span class="greyOff"> [SE-UHPLCHMW-15]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCHMW-15&quot;/>
                            <display value=&quot;SE-UHPLC HMW - 15&quot;/>
                        </coding>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCHMW-15&quot;/>
                            <display value=&quot;SE-UHPLC HMW - 15&quot;/>">SE-UHPLC HMW - 15<span class="greyOff"> [SE-UHPLCHMW-15]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span></div>
</div>
<div class="indent obsDefl2" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCHMW-25&quot;/>
                            <display value=&quot;SE-UHPLC HMW - 25&quot;/>
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
                            <code value=&quot;SE-UHPLCHMW-25&quot;/>
                            <display value=&quot;SE-UHPLC HMW - 25&quot;/>">SE-UHPLC HMW - 25<span class="greyOff"> [SE-UHPLCHMW-25]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCHMW-25&quot;/>
                            <display value=&quot;SE-UHPLC HMW - 25&quot;/>
                        </coding>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;SE-UHPLCHMW-25&quot;/>
                            <display value=&quot;SE-UHPLC HMW - 25&quot;/>">SE-UHPLC HMW - 25<span class="greyOff"> [SE-UHPLCHMW-25]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span></div>
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
                        <!--definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/CEX-HPLCAcidicPeak&quot;/-->
                        <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/74525a3d-5034-448a-9c19-938ce1958424&quot;/>"><a id="urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763f"><span>Action</span></a><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
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
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: plandefinition-compatibility fullUrl: urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763furl (canonical): http://example-server.com/fhir/PlanDefinition/2038e4c7-22b8-4c56-2d28-6c077648763f)<br>which is linked to this by canonical resource.url</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: CEX-Acidic-1 fullUrl: urn:uuid:54ba47fd-8964-4f96-6495-b2bec7f161e8)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: CEX-Acidic-2 fullUrl: urn:uuid:54ba48fd-8964-4f96-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: CEX-HPLCAcidicPeak)(fullUrl: urn:uuid:54bb47fd-8964-4f96-6495-b2bec7f161e8)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;CEX-HPLCAcidicPeak&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/74525a3d-5034-448a-9c19-938ce1958424&quot;/>
                <title value=&quot;CEX-HPLC % Acidic Peak&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;CEX-HPLCAcidicPeak&quot;/>
                        <display value=&quot;CEX-HPLC Acidic Peak&quot;/>
                    </coding>
                    <text value=&quot;CEX-HPLC Acidic Peak (%)&quot;/>
                </code>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCAcidicPeak-15&quot;/>
                            <display value=&quot;CEX-HPLC Acidic Peak - 15&quot;/>
                        </coding>
                    </code>
                </component>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCAcidicPeak-25&quot;/>
                            <display value=&quot;CEX-HPLC Acidic Peak - 25&quot;/>
                        </coding>
                    </code>
                </component>" id="ObservationDefinition-CEX-HPLCAcidicPeak">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;CEX-HPLCAcidicPeak&quot;/>
                        <display value=&quot;CEX-HPLC Acidic Peak&quot;/>">CEX-HPLC Acidic Peak<span class="greyOff"> [CEX-HPLCAcidicPeak]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: CEX-HPLC Acidic Peak (%)</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: CEX-HPLCAcidicPeak</div>
<div class="debugOff"> fullUrl: urn:uuid:54bb47fd-8964-4f96-6495-b2bec7f161e8</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/74525a3d-5034-448a-9c19-938ce1958424</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;CEX-HPLC % Acidic Peak&quot;>">Title: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;CEX-HPLC % Acidic Peak&quot;>">CEX-HPLC % Acidic Peak</span></div>
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
                        <code value=&quot;CEX-HPLCAcidicPeak&quot;/>
                        <display value=&quot;CEX-HPLC Acidic Peak&quot;/>
                    </coding>
                    <text value=&quot;CEX-HPLC Acidic Peak (%)&quot;/>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;CEX-HPLCAcidicPeak&quot;/>
                        <display value=&quot;CEX-HPLC Acidic Peak&quot;/>">CEX-HPLC Acidic Peak<span class="greyOff"> [CEX-HPLCAcidicPeak]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: CEX-HPLC Acidic Peak (%)</span></span></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="indent obsDefl2" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCAcidicPeak-15&quot;/>
                            <display value=&quot;CEX-HPLC Acidic Peak - 15&quot;/>
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
                            <code value=&quot;CEX-HPLCAcidicPeak-15&quot;/>
                            <display value=&quot;CEX-HPLC Acidic Peak - 15&quot;/>">CEX-HPLC Acidic Peak - 15<span class="greyOff"> [CEX-HPLCAcidicPeak-15]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCAcidicPeak-15&quot;/>
                            <display value=&quot;CEX-HPLC Acidic Peak - 15&quot;/>
                        </coding>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCAcidicPeak-15&quot;/>
                            <display value=&quot;CEX-HPLC Acidic Peak - 15&quot;/>">CEX-HPLC Acidic Peak - 15<span class="greyOff"> [CEX-HPLCAcidicPeak-15]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span></div>
</div>
<div class="indent obsDefl2" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCAcidicPeak-25&quot;/>
                            <display value=&quot;CEX-HPLC Acidic Peak - 25&quot;/>
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
                            <code value=&quot;CEX-HPLCAcidicPeak-25&quot;/>
                            <display value=&quot;CEX-HPLC Acidic Peak - 25&quot;/>">CEX-HPLC Acidic Peak - 25<span class="greyOff"> [CEX-HPLCAcidicPeak-25]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCAcidicPeak-25&quot;/>
                            <display value=&quot;CEX-HPLC Acidic Peak - 25&quot;/>
                        </coding>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCAcidicPeak-25&quot;/>
                            <display value=&quot;CEX-HPLC Acidic Peak - 25&quot;/>">CEX-HPLC Acidic Peak - 25<span class="greyOff"> [CEX-HPLCAcidicPeak-25]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span></div>
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
                        <!--definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/CEX-HPLCMainPeak&quot;/-->
                        <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/74525a3d-5034-448a-9c19-938ce1958425&quot;/>"><a id="urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763f"><span>Action</span></a><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
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
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: plandefinition-compatibility fullUrl: urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763furl (canonical): http://example-server.com/fhir/PlanDefinition/2038e4c7-22b8-4c56-2d28-6c077648763f)<br>which is linked to this by canonical resource.url</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: CEX-HPLC-1 fullUrl: urn:uuid:54ba47fd-8964-4f96-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div>
<div class="debugOff"><span>Found a parent (Observation/instantiatesReference, id: CEX-HPLC-2 fullUrl: urn:uuid:54bb47fd-8964-4f96-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: CEX-HPLCMainPeak)(fullUrl: urn:uuid:74525a3d-5034-448a-9c19-938ce1958424)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;CEX-HPLCMainPeak&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/74525a3d-5034-448a-9c19-938ce1958425&quot;/>
                <title value=&quot;CEX-HPLC % Main Peak&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;CEX-HPLCMainPeak&quot;/>
                        <display value=&quot;CEX-HPLC Main Peak&quot;/>
                    </coding>
                    <text value=&quot;CEX-HPLC Main Peak (%)&quot;/>
                </code>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCMainPeak-15&quot;/>
                            <display value=&quot;CEX-HPLC Main Peak - 15&quot;/>
                        </coding>
                    </code>
                </component>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCMainPeak-25&quot;/>
                            <display value=&quot;CEX-HPLC Main Peak - 25&quot;/>
                        </coding>
                    </code>
                </component>" id="ObservationDefinition-CEX-HPLCMainPeak">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;CEX-HPLCMainPeak&quot;/>
                        <display value=&quot;CEX-HPLC Main Peak&quot;/>">CEX-HPLC Main Peak<span class="greyOff"> [CEX-HPLCMainPeak]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: CEX-HPLC Main Peak (%)</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: CEX-HPLCMainPeak</div>
<div class="debugOff"> fullUrl: urn:uuid:74525a3d-5034-448a-9c19-938ce1958424</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/74525a3d-5034-448a-9c19-938ce1958425</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;CEX-HPLC % Main Peak&quot;>">Title: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;CEX-HPLC % Main Peak&quot;>">CEX-HPLC % Main Peak</span></div>
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
                        <code value=&quot;CEX-HPLCMainPeak&quot;/>
                        <display value=&quot;CEX-HPLC Main Peak&quot;/>
                    </coding>
                    <text value=&quot;CEX-HPLC Main Peak (%)&quot;/>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;CEX-HPLCMainPeak&quot;/>
                        <display value=&quot;CEX-HPLC Main Peak&quot;/>">CEX-HPLC Main Peak<span class="greyOff"> [CEX-HPLCMainPeak]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: CEX-HPLC Main Peak (%)</span></span></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="indent obsDefl2" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCMainPeak-15&quot;/>
                            <display value=&quot;CEX-HPLC Main Peak - 15&quot;/>
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
                            <code value=&quot;CEX-HPLCMainPeak-15&quot;/>
                            <display value=&quot;CEX-HPLC Main Peak - 15&quot;/>">CEX-HPLC Main Peak - 15<span class="greyOff"> [CEX-HPLCMainPeak-15]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCMainPeak-15&quot;/>
                            <display value=&quot;CEX-HPLC Main Peak - 15&quot;/>
                        </coding>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCMainPeak-15&quot;/>
                            <display value=&quot;CEX-HPLC Main Peak - 15&quot;/>">CEX-HPLC Main Peak - 15<span class="greyOff"> [CEX-HPLCMainPeak-15]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span></div>
</div>
<div class="indent obsDefl2" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCMainPeak-25&quot;/>
                            <display value=&quot;CEX-HPLC Main Peak - 25&quot;/>
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
                            <code value=&quot;CEX-HPLCMainPeak-25&quot;/>
                            <display value=&quot;CEX-HPLC Main Peak - 25&quot;/>">CEX-HPLC Main Peak - 25<span class="greyOff"> [CEX-HPLCMainPeak-25]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCMainPeak-25&quot;/>
                            <display value=&quot;CEX-HPLC Main Peak - 25&quot;/>
                        </coding>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <component>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                            <code value=&quot;CEX-HPLCMainPeak-25&quot;/>
                            <display value=&quot;CEX-HPLC Main Peak - 25&quot;/>">CEX-HPLC Main Peak - 25<span class="greyOff"> [CEX-HPLCMainPeak-25]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span></div>
</div>
<div class="summaryHiddenOff"></div>
</div>
</div>
</div>
</div>
<div class="indent planl2 summaryHiddenOff"><span title="PlanDefinition (id: plandefinition-compatibility)(fullUrl: urn:uuid:2038e4c7-22b8-4c56-2d28-6c077648763f)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/PlanDefinition-drug-pq 

<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <id value=&quot;plandefinition-compatibility&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/PlanDefinition-drug-pq&quot;/>
                </meta>
                <url value=&quot;http://example-server.com/fhir/PlanDefinition/2038e4c7-22b8-4c56-2d28-6c077648763f&quot;/>
                <title value=&quot;Drug Product Compatibility&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/plan-definition-type&quot;/>
                        <code value=&quot;workflow-definition&quot;/>
                        <display value=&quot;Workflow Definition&quot;/>
                    </coding>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-plan-type&quot;/>
                        <code value=&quot;product-compatibility&quot;/>
                        <display value=&quot;Product Compatibility&quot;/>
                    </coding>
                </type>
                <status value=&quot;active&quot;/>
                <subjectReference>
                    <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                </subjectReference>
                <description value=&quot;Pre-defined validation acceptance criteria were established based on manufacturing development data derived from process characterization studies...&quot;/>
                <action>
                    <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tabulateActionResults&quot;>
                        <!--extension url=&quot;biological&quot;><valueBoolean value=&quot;true&quot;/></extension-->
                        <extension url=&quot;titlePrefix&quot;>
                            <valueString value=&quot;Table 2&quot;/>
                        </extension>
                        <extension url=&quot;testTypeColumnTitle&quot;>
                            <valueString value=&quot;Method / Quality Attribute&quot;/>
                        </extension>
                        <extension url=&quot;acceptanceColumn&quot;>
                            <valueBoolean value=&quot;false&quot;/>
                        </extension>
                        <extension url=&quot;componentsAsColumns&quot;>
                            <valueBoolean value=&quot;true&quot;/>
                        </extension>
                        <extension url=&quot;batchTitle&quot;>
                            <valueString value=&quot;15°C&quot;/>
                        </extension>
                        <extension url=&quot;batchColumnTitle&quot;>
                            <valueString value=&quot;PFS Extruded Samples and AI/Pen Extruded Samples&quot;/>
                        </extension>
                        <extension url=&quot;componentsColumnTwo&quot;>
                            <valueString value=&quot;25°C&quot;/>
                        </extension>
                    </extension>
                    <title value=&quot;Results From Evaluation of Drug Product Compatibility With the Glass Syringe Using the Autoinjector/Pen&quot;/>
                    <!-- needs some other code -->
                    <!--code>
                        <coding>
                            <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-step&quot;/>
                            <code value=&quot;FilteredFormulatedDrugProductPerformanceIndicatorResultsStep&quot;/>
                            <display value=&quot;Filtered Formulated Drug Product Performance Indicator Results&quot;/>
                        </coding>
                    </code-->
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <!-- this is not seen by normal code -->
                        <!--definitionCanonical value=&quot;ObservationDefinition/SE-UHPLCMainPeak&quot;/-->
                        <!--definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/SE-UHPLCMainPeak&quot;/-->
                        <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/64525a3d-5034-448a-9c19-938ce1958424&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <!--definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/SE-UHPLCHMW&quot;/-->
                        <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/64525a33-5034-448a-9c19-938ce1958424&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <!--definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/CEX-HPLCAcidicPeak&quot;/-->
                        <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/74525a3d-5034-448a-9c19-938ce1958424&quot;/>
                    </action>
                    <action>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <!--definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/CEX-HPLCMainPeak&quot;/-->
                        <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/74525a3d-5034-448a-9c19-938ce1958425&quot;/>
                    </action>
                </action>">Triggered</span>: Product Compatibility Report (<a href="#DiagnosticReport-processValidationReport" title="click to see target - id=processValidationReport">DiagnosticReport</a>)<span class="debugOff"> id: processValidationReport</span></div>
</div>
</div>
<div ondblclick="summaryHandler(event)" class="indent mpd summaryUnit"><a class="plainLink"><span class="bold" title="MedicinalProductDefinition (id: medicinalproductdefinition-drug-product-dxpq-ex1)(fullUrl: urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d5)

<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                <id value=&quot;medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                <description value=&quot;Textual description of the product&quot;/>
                <name>
                    <productName value=&quot;Stelbatolol&quot;/>
                </name>" id="MedicinalProductDefinition-medicinalproductdefinition-drug-product-dxpq-ex1">Product</span></a><span class="summaryHiddenOff"><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/medicinalproductdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/medicinalproductdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/medicinalproductdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: medicinalproductdefinition-drug-product-dxpq-ex1</div>
<div class="debugOff"> fullUrl: urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d5</div></span><div class="summaryHiddenOff"></div><span class="summaryShowsOff"><b> - </b></span><span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                ...
                <name>
                    <productName value=&quot;Stelbatolol&quot;/>" class="bold"><span class="summaryHiddenOff">Name: </span><span>Stelbatolol</span></span><div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff">
<div><span title="
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
                <description value=&quot;Textual description of the product&quot;>">Textual description of the product</span></div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff">
<div></div>Subject of Plan: Drug Product Compatibility (<a href="#PlanDefinition-plandefinition-compatibility" title="click to see target - id=plandefinition-compatibility">PlanDefinition</a>)<span class="debugOff"> id: plandefinition-compatibility</span></div>
<div class="indent mpdl2 summaryUnit"><span title="Medication resource extension linking back to MedicinalProductDefinition: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-pq">Batch Instance</span><div class="indent med summaryUnit" ondblclick="summaryHandler(event)"><sup class="rotate-left" title="arrow indicates that this Medication resource points back to the parent MedicinalProductDefinition, instead of being linked forwards from it - via extension http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-pq">↸</sup><span class="debugOff">arrow indicates that this Medication resource points back to the parent MedicinalProductDefinition, instead of being linked forwards from it - via extension http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-pq<br></span><div class="debugOff"><span>Found a parent (Observation/subject, id: SE-UHPLCMainPeak1 fullUrl: urn:uuid:44ba47fd-8964-4f96-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: SE-UHPLCHMW1 fullUrl: urn:uuid:44ba47fd-8964-4f97-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: CEX-HPLC-1 fullUrl: urn:uuid:54ba47fd-8964-4f96-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: CEX-Acidic-1 fullUrl: urn:uuid:54ba47fd-8964-4f96-6495-b2bec7f161e8)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: CEX-Acidic-2 fullUrl: urn:uuid:54ba48fd-8964-4f96-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Medication (id: medication-actual-batch-1)(fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51)

<Bundle>
    <entry>
        <resource>
            <Medication>
                <id value=&quot;medication-actual-batch-1&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-pq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>
                    </extension>
                    <!-- can use an extension here to point to package, but currently just relying on medication-manufacturingBatch to have a text description -->
                </code>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;container&quot;>
                            <extension url=&quot;closureSystemDescription&quot;>
                                <valueString value=&quot;Pre-filled syringe&quot;/>
                            </extension>
                        </extension>
                    </extension>
                    <lotNumber value=&quot;88877&quot;/>
                </batch>" id="Medication-medication-actual-batch-1">Medication</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/medication.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/medication.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/medication.html#tt-uml">R6</a>]</span><div class="debugOff">id: medication-actual-batch-1</div><div class="debugOff"> fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51</div><span class="summaryShowsOff"><b> - 88877</b></span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-pq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>">Definition</span>: Stelbatolol (<a href="#MedicinalProductDefinition-medicinalproductdefinition-drug-product-dxpq-ex1" title="click to see target - id=medicinalproductdefinition-drug-product-dxpq-ex1">MedicinalProductDefinition</a>)<span class="debugOff"> id: medicinalproductdefinition-drug-product-dxpq-ex1</span></div><div class="summaryHiddenOff"><div class="indent medl2 summaryUnit"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                ...
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;container&quot;>
                            <extension url=&quot;closureSystemDescription&quot;>
                                <valueString value=&quot;Pre-filled syringe&quot;/>
                            </extension>
                        </extension>
                    </extension>
                    <lotNumber value=&quot;88877&quot;/>">Batch</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    ...
                    <lotNumber value=&quot;88877&quot;>">Lot Number: </span><span>88877</span></div><div class="summaryHiddenOff"><div class="indent medl3"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;container&quot;>
                            <extension url=&quot;closureSystemDescription&quot;>
                                <valueString value=&quot;Pre-filled syringe&quot;/>
                            </extension>
                        </extension>">Manufacturing</span><div class="indent medl4"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;container&quot;>
                            <extension url=&quot;closureSystemDescription&quot;>
                                <valueString value=&quot;Pre-filled syringe&quot;/>
                            </extension>">Container</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;container&quot;>
                            <extension url=&quot;closureSystemDescription&quot;>
                                <valueString value=&quot;Pre-filled syringe&quot;/>">Closure System: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;container&quot;>
                            <extension url=&quot;closureSystemDescription&quot;>
                                <valueString value=&quot;Pre-filled syringe&quot;/>"><span>Pre-filled syringe</span></span></div></div></div></div></div></div></div><div class="indent med summaryUnit" ondblclick="summaryHandler(event)"><sup class="rotate-left" title="arrow indicates that this Medication resource points back to the parent MedicinalProductDefinition, instead of being linked forwards from it - via extension http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-pq">↸</sup><span class="debugOff">arrow indicates that this Medication resource points back to the parent MedicinalProductDefinition, instead of being linked forwards from it - via extension http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-pq<br></span><div class="debugOff"><span>Found a parent (Observation/subject, id: SE-UHPLCMainPeak2 fullUrl: urn:uuid:54ca47fd-8964-4f96-6495-b2bec7f162e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: SE-UHPLCHMW2 fullUrl: urn:uuid:54ca47fd-8964-4f98-6495-b2bec7f162e7)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: CEX-HPLC-2 fullUrl: urn:uuid:54bb47fd-8964-4f96-6495-b2bec7f161e7)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Medication (id: medication-actual-batch-2)(fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc)

<Bundle>
    <entry>
        <resource>
            <Medication>
                <id value=&quot;medication-actual-batch-2&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-pq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>
                    </extension>
                </code>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;container&quot;>
                            <extension url=&quot;closureSystemDescription&quot;>
                                <valueString value=&quot;Autoinjector Pen&quot;/>
                            </extension>
                        </extension>
                    </extension>
                    <lotNumber value=&quot;88878&quot;/>
                </batch>" id="Medication-medication-actual-batch-2">Medication</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/medication.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/medication.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/medication.html#tt-uml">R6</a>]</span><div class="debugOff">id: medication-actual-batch-2</div><div class="debugOff"> fullUrl: urn:uuid:a9dfda53-734b-045f-7ae4-94a6281d53bc</div><span class="summaryShowsOff"><b> - 88878</b></span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-pq&quot;>
                        <valueReference>
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>">Definition</span>: Stelbatolol (<a href="#MedicinalProductDefinition-medicinalproductdefinition-drug-product-dxpq-ex1" title="click to see target - id=medicinalproductdefinition-drug-product-dxpq-ex1">MedicinalProductDefinition</a>)<span class="debugOff"> id: medicinalproductdefinition-drug-product-dxpq-ex1</span></div><div class="summaryHiddenOff"><div class="indent medl2 summaryUnit"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                ...
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;container&quot;>
                            <extension url=&quot;closureSystemDescription&quot;>
                                <valueString value=&quot;Autoinjector Pen&quot;/>
                            </extension>
                        </extension>
                    </extension>
                    <lotNumber value=&quot;88878&quot;/>">Batch</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    ...
                    <lotNumber value=&quot;88878&quot;>">Lot Number: </span><span>88878</span></div><div class="summaryHiddenOff"><div class="indent medl3"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;container&quot;>
                            <extension url=&quot;closureSystemDescription&quot;>
                                <valueString value=&quot;Autoinjector Pen&quot;/>
                            </extension>
                        </extension>">Manufacturing</span><div class="indent medl4"><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;container&quot;>
                            <extension url=&quot;closureSystemDescription&quot;>
                                <valueString value=&quot;Autoinjector Pen&quot;/>
                            </extension>">Container</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;container&quot;>
                            <extension url=&quot;closureSystemDescription&quot;>
                                <valueString value=&quot;Autoinjector Pen&quot;/>">Closure System: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <batch>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/medication-manufacturingBatch&quot;>
                        <extension url=&quot;container&quot;>
                            <extension url=&quot;closureSystemDescription&quot;>
                                <valueString value=&quot;Autoinjector Pen&quot;/>"><span>Autoinjector Pen</span></span></div></div></div></div></div></div></div>
</div>
<div></div>
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
