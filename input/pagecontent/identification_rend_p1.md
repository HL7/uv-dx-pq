The HTML rendering below shows a synthetic Quality data example for Common Technical Document (CTD) Module 3: Quality, section 3.2.P.5 Control of Drug Product, subsection 3.2.P.5.5 Characterisation of Impurities.<br/><br/>The section 3.2.S.3 Characterisation, subsection 3.2.S.3.2 Impurities, is similar.
<html>
<body>
<div class="divBody">
<p>
						This is the same data as in the example files here in <a href="Bundle-bundle-drug-product-pq-ex1.xml.html">xml</a> and in <a href="Bundle-bundle-drug-product-pq-ex1.json.html">json</a>, presented for easier viewing.
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
<div class="bundle"><a class="plainLink"><span class="bold" title="Bundle (id: bundle-drug-product-pq-ex1)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-drug-product-pq 

<Bundle>
    <id value=&quot;bundle-drug-product-pq-ex1&quot;/>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-drug-product-pq&quot;/>
    </meta>
    <type value=&quot;collection&quot;/>
    <entry>
        <fullUrl value=&quot;urn:uuid:a1694a7b-aafa-4cbe-8135-c788a9a4d3d5&quot;/>
        <resource>
            <Composition>
                <id value=&quot;comp-drug-components&quot;/>
                <status value=&quot;final&quot;/>
                <type>
                    <text value=&quot;Product Note - Drug Components&quot;/>
                </type>
                <subject>
                    <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-pq-ex1&quot;/>
                </subject>
                <date value=&quot;2023-10-01&quot;/>
                <author>
                    <reference value=&quot;Organization/organization-drug-pq-ex1&quot;/>
                </author>
                <title value=&quot;3.2.P.2.1.1 - Components of the Drug Product&quot;/>
                <section>
                    <title value=&quot;3.2.P.2.1.1.1 - Drug Substance&quot;/>
                    <text>
                        <status value=&quot;additional&quot;/>
                        <div>
                            <p>The compatibility of the drug substance with the excipients listed in 3.2.P.1 should be discussed.
                                Additionally, key physicochemical characteristics (eg, water content, solubility, particle size
                                distribution, polymorphic or solid state form) of the drug substance that can influence the
                                performance of the drug product should be discussed.</p>
                            <p>For combination products, the compatibility of drug substances with each other should be
                                discussed.</p>
                        </div>
                    </text>
                </section>
                <section>
                    <title value=&quot;3.2.P.1.1.2 - Excipients&quot;/>
                    <text>
                        <status value=&quot;additional&quot;/>
                        <div>
                            <p>The choice of excipients listed in 3.2.P.1, their concentration, and the characteristics that can
                                influence the drug product manufacturability and performance should be discussed relative to
                                their respective functions.</p>
                        </div>
                    </text>
                </section>
            </Composition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:a1694a7a-aafa-4cbe-8135-c788a9a4d3d5&quot;/>
        <resource>
            <Composition>
                <id value=&quot;composition-drug-pq-formulation&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Composition-drug-pq&quot;/>
                </meta>
                <status value=&quot;final&quot;/>
                <type>
                    <text value=&quot;Product Note - Formulation Development&quot;/>
                </type>
                <subject>
                    <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-pq-ex1&quot;/>
                </subject>
                <date value=&quot;2023-10-01&quot;/>
                <author>
                    <reference value=&quot;Organization/organization-drug-pq-ex1&quot;/>
                </author>
                <title value=&quot;3.2.P.2.2.1 - Formulation Development&quot;/>
                <section>
                    <title value=&quot;3.2.P.2.2.1.1 - Formulation History&quot;/>
                    <text>
                        <status value=&quot;additional&quot;/>
                        <div>
                            <ul>
                                <li>Drug product description including difference or similarity between the drug product and reference product, if applicable</li>
                                <li>Propose route of administration (include any dilution or reconstitution necessary)</li>
                                <li>Choice of manufacturing process, explain choice if alternative process could have been applicable (e.g. aseptic processing instead of terminal sterilization, direct compression instead of granulation). If different processes were used for different formulation highlight and explain differences, refer at 3.2.P.2.3. If no change in the process occurred refer to 3.3.P.3.3 and avoid duplication data.</li>
                            </ul>
                            <p>Table 1 - Formulation history for Stelbatolol</p>
                            <table>
                                <tr>
                                    <th>Formulation Identifier</th>
                                    <th>Composition</th>
                                    <th>Change</th>
                                    <th>Development phase</th>
                                </tr>
                                <tr>
                                    <td>1233545</td>
                                    <td>Composition 1a</td>
                                    <td>Changes made are listed here</td>
                                    <td>Pre-clinical phase</td>
                                </tr>
                            </table>
                        </div>
                    </text>
                </section>
                <section>
                    <title value=&quot;3.2.P.2.2.1.2 - Formulation Development Studies&quot;/>
                    <text>
                        <status value=&quot;additional&quot;/>
                        <div>
                            <p>Summary of the formulation developmental studies conducted are provided in Table 2</p>
                            <p>Table 2 - Formulation Development Studies</p>
                            <table>
                                <tr>
                                    <th>Study</th>
                                    <th>Formulation identifier </th>
                                    <th>Objective</th>
                                    <th>Quality attribute evaluated</th>
                                    <th>Study design</th>
                                    <th>Study result</th>
                                </tr>
                                <tr>
                                    <td>Study Name</td>
                                    <td>12234a</td>
                                    <td>Short description of the study objective</td>
                                    <td>CQA information</td>
                                    <td>Short description of the design</td>
                                    <td>Reference to the table showing study results</td>
                                </tr>
                            </table>
                        </div>
                    </text>
                </section>
                <section>
                    <title value=&quot;3.2.P.2.2.4 - Summary for Risk Assessment of Elemental Impurities in Drug Product&quot;/>
                    <text>
                        <status value=&quot;additional&quot;/>
                        <div>
                            <p>Summary of the risk assessment for product...</p>
                        </div>
                    </text>
                </section>
            </Composition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:a1694a8a-aafa-4cbe-8135-c788a9a4d3d5&quot;/>
        <resource>
            <Composition>
                <id value=&quot;composition-drug-pq-risk&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Composition-drug-pq&quot;/>
                </meta>
                <status value=&quot;final&quot;/>
                <type>
                    <text value=&quot;Product Note - Summary for Risk of Impurities&quot;/>
                </type>
                <subject>
                    <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-pq-ex1&quot;/>
                </subject>
                <date value=&quot;2023-10-01&quot;/>
                <author>
                    <reference value=&quot;Organization/organization-drug-pq-ex1&quot;/>
                </author>
                <title value=&quot;3.2.P.2.2.4 - Summary for Risk of Impurities&quot;/>
                <section>
                    <text>
                        <status value=&quot;additional&quot;/>
                        <div>
                            <p>Text for the risk assessment of elemental impurities in the product</p>
                        </div>
                    </text>
                </section>
            </Composition>
        </resource>
    </entry>
    <!-- MedicinalProductDefinition - the main resource in any product scenario -->
    <entry>
        <fullUrl value=&quot;urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d5&quot;/>
        <resource>
            <!-- Section 1.1 - DP Identification -->
            <MedicinalProductDefinition>
                <id value=&quot;medicinalproductdefinition-drug-product-pq-ex1&quot;/>
                <comprisedOf>
                    <reference value=&quot;ManufacturedItemDefinition/manufactureditemdefinition-drug-pq-ex2&quot;/>
                </comprisedOf>
                <name>
                    <productName value=&quot;Stalbatolol&quot;/>
                </name>
                <characteristic>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                            <code value=&quot;physicochemical&quot;/>
                            <display value=&quot;Physicochemical properties&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Product properties with cross reference to other dossier sections as 3.2.P.5.1 Consider parameters relevant to the performance of the drug product, such as pH, ionic strength, dissolution, redispersion, reconstitution, particle size distribution, aggregation, polymorphism, rheological properties, biological activity or potency, and/or immunological activity. Any properties which are not included in the product specification, with explanation of parameter control and relevant studies. If applicable refer to relevant compendia monograph&quot;/>
                    </valueCodeableConcept>
                </characteristic>
                <characteristic>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                            <code value=&quot;pH&quot;/>
                            <display value=&quot;pH&quot;/>
                        </coding>
                    </type>
                    <valueQuantity>
                        <value value=&quot;7.0&quot;/>
                    </valueQuantity>
                </characteristic>
                <characteristic>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                            <code value=&quot;ionic-strength&quot;/>
                            <display value=&quot;Ionic Strength&quot;/>
                        </coding>
                    </type>
                    <valueQuantity>
                        <value value=&quot;23&quot;/>
                        <unit value=&quot;mg/mL&quot;/>
                    </valueQuantity>
                </characteristic>
            </MedicinalProductDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:1531c777-50c3-047d-2798-de3d001d2c44&quot;/>
        <resource>
            <ManufacturedItemDefinition>
                <id value=&quot;manufactureditemdefinition-drug-pq-ex2&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/ManufacturedItemDefinition-drug-pq&quot;/>
                </meta>
                <status value=&quot;active&quot;/>
                <name value=&quot;Stelbatolol 5mg tablet&quot;/>
                <manufacturedDoseForm>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/data-absent-reason&quot;>
                        <valueCode value=&quot;unsupported&quot;/>
                    </extension>
                </manufacturedDoseForm>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufactured-item-property-local-pq&quot;/>
                            <code value=&quot;overage-by-mass&quot;/>
                            <display value=&quot;Overage by mass (%)&quot;/>
                        </coding>
                    </type>
                    <valueQuantity>
                        <value value=&quot;5&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </property>
                <!-- this and the above could also be extensions -->
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufactured-item-property-local-pq&quot;/>
                            <code value=&quot;overage-reason&quot;/>
                            <display value=&quot;Overage reason&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Overage is necessary because...&quot;/>
                    </valueCodeableConcept>
                </property>
            </ManufacturedItemDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:9fe98cfa-9246-8313-0fc5-d15e613b5d6d&quot;/>
        <resource>
            <Organization>
                <id value=&quot;organization-drug-pq-ex1&quot;/>
                <name value=&quot;AAA Molybdenum Products, Inc.&quot;/>
            </Organization>
        </resource>
    </entry>" id="Bundle-bundle-drug-product-pq-ex1">Bundle</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/bundle.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/bundle.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/bundle.html#tt-uml">R6</a>]</span><div class="debugOff">id: bundle-drug-product-pq-ex1</div>
<div class="debugOff"></div>
<div class="debugOff"><span title="
<Bundle>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-drug-product-pq&quot;>">Profile: </span><span>http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-drug-product-pq</span></div>
<div><span title="
<Bundle>
    ...
    <type value=&quot;collection&quot;>">Type: </span><span><span>collection</span></span></div><span class="bundle">Warning - Found Composition as first Bundle entry, but not in a document Bundle</span></div>
</div>
<div>
<div ondblclick="summaryHandler(event)" class="indent mpd summaryUnit"><a class="plainLink"><span class="bold" title="MedicinalProductDefinition (id: medicinalproductdefinition-drug-product-pq-ex1)(fullUrl: urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d5)

<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                <id value=&quot;medicinalproductdefinition-drug-product-pq-ex1&quot;/>
                <comprisedOf>
                    <reference value=&quot;ManufacturedItemDefinition/manufactureditemdefinition-drug-pq-ex2&quot;/>
                </comprisedOf>
                <name>
                    <productName value=&quot;Stalbatolol&quot;/>
                </name>
                <characteristic>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                            <code value=&quot;physicochemical&quot;/>
                            <display value=&quot;Physicochemical properties&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Product properties with cross reference to other dossier sections as 3.2.P.5.1 Consider parameters relevant to the performance of the drug product, such as pH, ionic strength, dissolution, redispersion, reconstitution, particle size distribution, aggregation, polymorphism, rheological properties, biological activity or potency, and/or immunological activity. Any properties which are not included in the product specification, with explanation of parameter control and relevant studies. If applicable refer to relevant compendia monograph&quot;/>
                    </valueCodeableConcept>
                </characteristic>
                <characteristic>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                            <code value=&quot;pH&quot;/>
                            <display value=&quot;pH&quot;/>
                        </coding>
                    </type>
                    <valueQuantity>
                        <value value=&quot;7.0&quot;/>
                    </valueQuantity>
                </characteristic>
                <characteristic>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                            <code value=&quot;ionic-strength&quot;/>
                            <display value=&quot;Ionic Strength&quot;/>
                        </coding>
                    </type>
                    <valueQuantity>
                        <value value=&quot;23&quot;/>
                        <unit value=&quot;mg/mL&quot;/>
                    </valueQuantity>
                </characteristic>" id="MedicinalProductDefinition-medicinalproductdefinition-drug-product-pq-ex1">Product</span></a><span class="summaryHiddenOff"><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/medicinalproductdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/medicinalproductdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/medicinalproductdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: medicinalproductdefinition-drug-product-pq-ex1</div>
<div class="debugOff"> fullUrl: urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d5</div></span><div class="summaryHiddenOff"></div><span class="summaryShowsOff"><b> - </b></span><span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                ...
                <name>
                    <productName value=&quot;Stalbatolol&quot;/>" class="bold"><span class="summaryHiddenOff">Name: </span><span>Stalbatolol</span></span><div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff">
<div class="summaryHiddenOff">
<div class="indent mpdl2"><span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                ...
                <characteristic>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                            <code value=&quot;physicochemical&quot;/>
                            <display value=&quot;Physicochemical properties&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Product properties with cross reference to other dossier sections as 3.2.P.5.1 Consider parameters relevant to the performance of the drug product, such as pH, ionic strength, dissolution, redispersion, reconstitution, particle size distribution, aggregation, polymorphism, rheological properties, biological activity or potency, and/or immunological activity. Any properties which are not included in the product specification, with explanation of parameter control and relevant studies. If applicable refer to relevant compendia monograph&quot;/>
                    </valueCodeableConcept>">Characteristic</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                <characteristic>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                            <code value=&quot;physicochemical&quot;/>
                            <display value=&quot;Physicochemical properties&quot;/>
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                <characteristic>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                            <code value=&quot;physicochemical&quot;/>
                            <display value=&quot;Physicochemical properties&quot;/>">Physicochemical properties<span class="greyOff"> [physicochemical]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                <characteristic>
                    ...
                    <valueCodeableConcept>
                        <text value=&quot;Product properties with cross reference to other dossier sections as 3.2.P.5.1 Consider parameters relevant to the performance of the drug product, such as pH, ionic strength, dissolution, redispersion, reconstitution, particle size distribution, aggregation, polymorphism, rheological properties, biological activity or potency, and/or immunological activity. Any properties which are not included in the product specification, with explanation of parameter control and relevant studies. If applicable refer to relevant compendia monograph&quot;/>">Value: <span style="white-space:normal;">Product properties with cross reference to other dossier sections as 3.2.P.5.1 Consider parameters relevant to the performance of the drug product, such as pH, ionic strength, dissolution, redispersion, reconstitution, particle size distribution, aggregation, polymorphism, rheological properties, biological activity or potency, and/or immunological activity. Any properties which are not included in the product specification, with explanation of parameter control and relevant studies. If applicable refer to relevant compendia monograph</span></span></div>
</div>
</div>
<div class="summaryHiddenOff">
<div class="indent mpdl2"><span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                ...
                <characteristic>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                            <code value=&quot;pH&quot;/>
                            <display value=&quot;pH&quot;/>
                        </coding>
                    </type>
                    <valueQuantity>
                        <value value=&quot;7.0&quot;/>
                    </valueQuantity>">Characteristic</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                <characteristic>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                            <code value=&quot;pH&quot;/>
                            <display value=&quot;pH&quot;/>
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                <characteristic>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                            <code value=&quot;pH&quot;/>
                            <display value=&quot;pH&quot;/>">pH<span class="greyOff"> [pH]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                <characteristic>
                    ...
                    <valueQuantity>
                        <value value=&quot;7.0&quot;/>">Value: <span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                <characteristic>
                    ...
                    <valueQuantity>
                        <value value=&quot;7.0&quot;/>">7.0</span></span></div>
</div>
</div>
<div class="summaryHiddenOff">
<div class="indent mpdl2"><span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                ...
                <characteristic>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                            <code value=&quot;ionic-strength&quot;/>
                            <display value=&quot;Ionic Strength&quot;/>
                        </coding>
                    </type>
                    <valueQuantity>
                        <value value=&quot;23&quot;/>
                        <unit value=&quot;mg/mL&quot;/>
                    </valueQuantity>">Characteristic</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                <characteristic>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                            <code value=&quot;ionic-strength&quot;/>
                            <display value=&quot;Ionic Strength&quot;/>
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                <characteristic>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq&quot;/>
                            <code value=&quot;ionic-strength&quot;/>
                            <display value=&quot;Ionic Strength&quot;/>">Ionic Strength<span class="greyOff"> [ionic-strength]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                <characteristic>
                    ...
                    <valueQuantity>
                        <value value=&quot;23&quot;/>
                        <unit value=&quot;mg/mL&quot;/>">Value: <span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                <characteristic>
                    ...
                    <valueQuantity>
                        <value value=&quot;23&quot;/>
                        <unit value=&quot;mg/mL&quot;/>">23 mg/mL</span></span></div>
</div>
</div>
</div>
<div class="summaryHiddenOff"></div>
<div class="indent mpdl2"><span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                ...
                <comprisedOf>
                    <reference value=&quot;ManufacturedItemDefinition/manufactureditemdefinition-drug-pq-ex2&quot;/>">Comprised Of</span><div class="indent man summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (MedicinalProductDefinition/comprisedOf, id: medicinalproductdefinition-drug-product-pq-ex1 fullUrl: urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d5)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="ManufacturedItemDefinition (id: manufactureditemdefinition-drug-pq-ex2)(fullUrl: urn:uuid:1531c777-50c3-047d-2798-de3d001d2c44)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/ManufacturedItemDefinition-drug-pq 

<Bundle>
    <entry>
        <resource>
            <ManufacturedItemDefinition>
                <id value=&quot;manufactureditemdefinition-drug-pq-ex2&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/ManufacturedItemDefinition-drug-pq&quot;/>
                </meta>
                <status value=&quot;active&quot;/>
                <name value=&quot;Stelbatolol 5mg tablet&quot;/>
                <manufacturedDoseForm>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/data-absent-reason&quot;>
                        <valueCode value=&quot;unsupported&quot;/>
                    </extension>
                </manufacturedDoseForm>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufactured-item-property-local-pq&quot;/>
                            <code value=&quot;overage-by-mass&quot;/>
                            <display value=&quot;Overage by mass (%)&quot;/>
                        </coding>
                    </type>
                    <valueQuantity>
                        <value value=&quot;5&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>
                </property>
                <!-- this and the above could also be extensions -->
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufactured-item-property-local-pq&quot;/>
                            <code value=&quot;overage-reason&quot;/>
                            <display value=&quot;Overage reason&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Overage is necessary because...&quot;/>
                    </valueCodeableConcept>
                </property>" id="ManufacturedItemDefinition-manufactureditemdefinition-drug-pq-ex2">Manufactured Item</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/manufactureditemdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/manufactureditemdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/manufactureditemdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: manufactureditemdefinition-drug-pq-ex2</div><div class="debugOff"> fullUrl: urn:uuid:1531c777-50c3-047d-2798-de3d001d2c44</div><div class="debugOff"></div><div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ManufacturedItemDefinition>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/ManufacturedItemDefinition-drug-pq&quot;>">Profile: </span><span>http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/ManufacturedItemDefinition-drug-pq</span></div><span class="summaryShowsOff"></span><div><span title="
<Bundle>
    <entry>
        <resource>
            <ManufacturedItemDefinition>
                ...
                <name value=&quot;Stelbatolol 5mg tablet&quot;>">Name: </span><span>Stelbatolol 5mg tablet</span></div><div class="summaryHiddenOff"><div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ManufacturedItemDefinition>
                ...
                <status value=&quot;active&quot;>">Status: </span><span>active</span></div><div class="summaryHiddenOff"><div class="indent manl2"><span title="
<Bundle>
    <entry>
        <resource>
            <ManufacturedItemDefinition>
                ...
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufactured-item-property-local-pq&quot;/>
                            <code value=&quot;overage-by-mass&quot;/>
                            <display value=&quot;Overage by mass (%)&quot;/>
                        </coding>
                    </type>
                    <valueQuantity>
                        <value value=&quot;5&quot;/>
                        <unit value=&quot;%&quot;/>
                    </valueQuantity>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <ManufacturedItemDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufactured-item-property-local-pq&quot;/>
                            <code value=&quot;overage-by-mass&quot;/>
                            <display value=&quot;Overage by mass (%)&quot;/>
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <ManufacturedItemDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufactured-item-property-local-pq&quot;/>
                            <code value=&quot;overage-by-mass&quot;/>
                            <display value=&quot;Overage by mass (%)&quot;/>">Overage by mass (%)<span class="greyOff"> [overage-by-mass]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufactured-item-property-local-pq)</span></span></span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <ManufacturedItemDefinition>
                <property>
                    ...
                    <valueQuantity>
                        <value value=&quot;5&quot;/>
                        <unit value=&quot;%&quot;/>">Value: <span title="
<Bundle>
    <entry>
        <resource>
            <ManufacturedItemDefinition>
                <property>
                    ...
                    <valueQuantity>
                        <value value=&quot;5&quot;/>
                        <unit value=&quot;%&quot;/>">5%</span></span></div></div></div><div class="summaryHiddenOff"><div class="indent manl2"><span title="
<Bundle>
    <entry>
        <resource>
            <ManufacturedItemDefinition>
                ...
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufactured-item-property-local-pq&quot;/>
                            <code value=&quot;overage-reason&quot;/>
                            <display value=&quot;Overage reason&quot;/>
                        </coding>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Overage is necessary because...&quot;/>
                    </valueCodeableConcept>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <ManufacturedItemDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufactured-item-property-local-pq&quot;/>
                            <code value=&quot;overage-reason&quot;/>
                            <display value=&quot;Overage reason&quot;/>
                        </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <ManufacturedItemDefinition>
                <property>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufactured-item-property-local-pq&quot;/>
                            <code value=&quot;overage-reason&quot;/>
                            <display value=&quot;Overage reason&quot;/>">Overage reason<span class="greyOff"> [overage-reason]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-manufactured-item-property-local-pq)</span></span></span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <ManufacturedItemDefinition>
                <property>
                    ...
                    <valueCodeableConcept>
                        <text value=&quot;Overage is necessary because...&quot;/>">Value: <span style="white-space:normal;">Overage is necessary because...</span></span></div></div></div></div></div>
</div>
<div class="summaryHiddenOff"></div>
<div class="indent comp summaryUnit" ondblclick="summaryHandler(event)"><a class="plainLink"><span class="bold" title="Composition (id: comp-drug-components)(fullUrl: urn:uuid:a1694a7b-aafa-4cbe-8135-c788a9a4d3d5)

<Bundle>
    <entry>
        <resource>
            <Composition>
                <id value=&quot;comp-drug-components&quot;/>
                <status value=&quot;final&quot;/>
                <type>
                    <text value=&quot;Product Note - Drug Components&quot;/>
                </type>
                <subject>
                    <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-pq-ex1&quot;/>
                </subject>
                <date value=&quot;2023-10-01&quot;/>
                <author>
                    <reference value=&quot;Organization/organization-drug-pq-ex1&quot;/>
                </author>
                <title value=&quot;3.2.P.2.1.1 - Components of the Drug Product&quot;/>
                <section>
                    <title value=&quot;3.2.P.2.1.1.1 - Drug Substance&quot;/>
                    <text>
                        <status value=&quot;additional&quot;/>
                        <div>
                            <p>The compatibility of the drug substance with the excipients listed in 3.2.P.1 should be discussed.
                                Additionally, key physicochemical characteristics (eg, water content, solubility, particle size
                                distribution, polymorphic or solid state form) of the drug substance that can influence the
                                performance of the drug product should be discussed.</p>
                            <p>For combination products, the compatibility of drug substances with each other should be
                                discussed.</p>
                        </div>
                    </text>
                </section>
                <section>
                    <title value=&quot;3.2.P.1.1.2 - Excipients&quot;/>
                    <text>
                        <status value=&quot;additional&quot;/>
                        <div>
                            <p>The choice of excipients listed in 3.2.P.1, their concentration, and the characteristics that can
                                influence the drug product manufacturability and performance should be discussed relative to
                                their respective functions.</p>
                        </div>
                    </text>
                </section>" id="Composition-comp-drug-components">Composition</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/composition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/composition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/composition.html#tt-uml">R6</a>]</span><div class="debugOff">id: comp-drug-components</div>
<div class="debugOff"> fullUrl: urn:uuid:a1694a7b-aafa-4cbe-8135-c788a9a4d3d5</div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Composition>
                ...
                <type>
                    <text value=&quot;Product Note - Drug Components&quot;/>">Type: </span><span style="white-space:normal;">Product Note - Drug Components</span></div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Composition>
                ...
                <date value=&quot;2023-10-01&quot;>">Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Composition>
                ...
                <date value=&quot;2023-10-01&quot;>">2023-10-01</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Composition>
                ...
                <status value=&quot;final&quot;>">Status: </span><span>final</span></div>
</div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Composition>
                ...
                <title value=&quot;3.2.P.2.1.1 - Components of the Drug Product&quot;>">Title: </span><span>3.2.P.2.1.1 - Components of the Drug Product</span></div>
<div class="indent compl2 summaryUnit"><span title="
<Bundle>
    <entry>
        <resource>
            <Composition>
                ...
                <author>
                    <reference value=&quot;Organization/organization-drug-pq-ex1&quot;/>">Author</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Composition/author, id: comp-drug-components fullUrl: urn:uuid:a1694a7b-aafa-4cbe-8135-c788a9a4d3d5)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Composition/author, id: composition-drug-pq-formulation fullUrl: urn:uuid:a1694a7a-aafa-4cbe-8135-c788a9a4d3d5)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Composition/author, id: composition-drug-pq-risk fullUrl: urn:uuid:a1694a8a-aafa-4cbe-8135-c788a9a4d3d5)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: organization-drug-pq-ex1)(fullUrl: urn:uuid:9fe98cfa-9246-8313-0fc5-d15e613b5d6d)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <id value=&quot;organization-drug-pq-ex1&quot;/>
                <name value=&quot;AAA Molybdenum Products, Inc.&quot;/>" id="Organization-organization-drug-pq-ex1">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/organization.html#tt-uml">R6</a>]</span><div class="debugOff">id: organization-drug-pq-ex1</div><div class="debugOff"> fullUrl: urn:uuid:9fe98cfa-9246-8313-0fc5-d15e613b5d6d</div><span class="summaryShowsOff"> - AAA Molybdenum Products, Inc.</span><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;AAA Molybdenum Products, Inc.&quot;>">Name: </span><span>AAA Molybdenum Products, Inc.</span></div></div></div>
</div>
<div class="indent compl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Composition>
                ...
                <section>
                    <title value=&quot;3.2.P.2.1.1.1 - Drug Substance&quot;/>
                    <text>
                        <status value=&quot;additional&quot;/>
                        <div>
                            <p>The compatibility of the drug substance with the excipients listed in 3.2.P.1 should be discussed.
                                Additionally, key physicochemical characteristics (eg, water content, solubility, particle size
                                distribution, polymorphic or solid state form) of the drug substance that can influence the
                                performance of the drug product should be discussed.</p>
                            <p>For combination products, the compatibility of drug substances with each other should be
                                discussed.</p>
                        </div>
                    </text>" id="urn:uuid:a1694a7b-aafa-4cbe-8135-c788a9a4d3d5">Section</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Composition>
                <section>
                    <title value=&quot;3.2.P.2.1.1.1 - Drug Substance&quot;>">Title: </span><span>3.2.P.2.1.1.1 - Drug Substance</span></div>
<div class="summaryHiddenOff">
<div class="indent compText"><span title="
<Bundle>
    <entry>
        <resource>
            <Composition>
                <section>
                    ...
                    <text>
                        <status value=&quot;additional&quot;/>
                        <div>
                            <p>The compatibility of the drug substance with the excipients listed in 3.2.P.1 should be discussed.
                                Additionally, key physicochemical characteristics (eg, water content, solubility, particle size
                                distribution, polymorphic or solid state form) of the drug substance that can influence the
                                performance of the drug product should be discussed.</p>
                            <p>For combination products, the compatibility of drug substances with each other should be
                                discussed.</p>
                        </div>" id="urn:uuid:a1694a7b-aafa-4cbe-8135-c788a9a4d3d5">Text</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Composition>
                <section>
                    <text>
                        <status value=&quot;additional&quot;>">Status: </span><span>additional</span></div>
<div class="indent compText" title="
                            <p>The compatibility of the drug substance with the excipients listed in 3.2.P.1 should be discussed.
                                Additionally, key physicochemical characteristics (eg, water content, solubility, particle size
                                distribution, polymorphic or solid state form) of the drug substance that can influence the
                                performance of the drug product should be discussed.</p>
                            <p>For combination products, the compatibility of drug substances with each other should be
                                discussed.</p>">
<div xmlns="http://www.w3.org/1999/xhtml">
<p>The compatibility of the drug substance with the excipients listed in 3.2.P.1 should be discussed.
                                Additionally, key physicochemical characteristics (eg, water content, solubility, particle size
                                distribution, polymorphic or solid state form) of the drug substance that can influence the
                                performance of the drug product should be discussed.</p>
<p>For combination products, the compatibility of drug substances with each other should be
                                discussed.</p>
</div>
</div>
</div>
</div>
</div>
<div class="indent compl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Composition>
                ...
                <section>
                    <title value=&quot;3.2.P.1.1.2 - Excipients&quot;/>
                    <text>
                        <status value=&quot;additional&quot;/>
                        <div>
                            <p>The choice of excipients listed in 3.2.P.1, their concentration, and the characteristics that can
                                influence the drug product manufacturability and performance should be discussed relative to
                                their respective functions.</p>
                        </div>
                    </text>" id="urn:uuid:a1694a7b-aafa-4cbe-8135-c788a9a4d3d5">Section</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Composition>
                <section>
                    <title value=&quot;3.2.P.1.1.2 - Excipients&quot;>">Title: </span><span>3.2.P.1.1.2 - Excipients</span></div>
<div class="summaryHiddenOff">
<div class="indent compText"><span title="
<Bundle>
    <entry>
        <resource>
            <Composition>
                <section>
                    ...
                    <text>
                        <status value=&quot;additional&quot;/>
                        <div>
                            <p>The choice of excipients listed in 3.2.P.1, their concentration, and the characteristics that can
                                influence the drug product manufacturability and performance should be discussed relative to
                                their respective functions.</p>
                        </div>" id="urn:uuid:a1694a7b-aafa-4cbe-8135-c788a9a4d3d5">Text</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Composition>
                <section>
                    <text>
                        <status value=&quot;additional&quot;>">Status: </span><span>additional</span></div>
<div class="indent compText" title="
                            <p>The choice of excipients listed in 3.2.P.1, their concentration, and the characteristics that can
                                influence the drug product manufacturability and performance should be discussed relative to
                                their respective functions.</p>">
<div xmlns="http://www.w3.org/1999/xhtml">
<p>The choice of excipients listed in 3.2.P.1, their concentration, and the characteristics that can
                                influence the drug product manufacturability and performance should be discussed relative to
                                their respective functions.</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="indent comp summaryUnit" ondblclick="summaryHandler(event)"><a class="plainLink"><span class="bold" title="Composition (id: composition-drug-pq-formulation)(fullUrl: urn:uuid:a1694a7a-aafa-4cbe-8135-c788a9a4d3d5)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Composition-drug-pq 

<Bundle>
    <entry>
        <resource>
            <Composition>
                <id value=&quot;composition-drug-pq-formulation&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Composition-drug-pq&quot;/>
                </meta>
                <status value=&quot;final&quot;/>
                <type>
                    <text value=&quot;Product Note - Formulation Development&quot;/>
                </type>
                <subject>
                    <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-pq-ex1&quot;/>
                </subject>
                <date value=&quot;2023-10-01&quot;/>
                <author>
                    <reference value=&quot;Organization/organization-drug-pq-ex1&quot;/>
                </author>
                <title value=&quot;3.2.P.2.2.1 - Formulation Development&quot;/>
                <section>
                    <title value=&quot;3.2.P.2.2.1.1 - Formulation History&quot;/>
                    <text>
                        <status value=&quot;additional&quot;/>
                        <div>
                            <ul>
                                <li>Drug product description including difference or similarity between the drug product and reference product, if applicable</li>
                                <li>Propose route of administration (include any dilution or reconstitution necessary)</li>
                                <li>Choice of manufacturing process, explain choice if alternative process could have been applicable (e.g. aseptic processing instead of terminal sterilization, direct compression instead of granulation). If different processes were used for different formulation highlight and explain differences, refer at 3.2.P.2.3. If no change in the process occurred refer to 3.3.P.3.3 and avoid duplication data.</li>
                            </ul>
                            <p>Table 1 - Formulation history for Stelbatolol</p>
                            <table>
                                <tr>
                                    <th>Formulation Identifier</th>
                                    <th>Composition</th>
                                    <th>Change</th>
                                    <th>Development phase</th>
                                </tr>
                                <tr>
                                    <td>1233545</td>
                                    <td>Composition 1a</td>
                                    <td>Changes made are listed here</td>
                                    <td>Pre-clinical phase</td>
                                </tr>
                            </table>
                        </div>
                    </text>
                </section>
                <section>
                    <title value=&quot;3.2.P.2.2.1.2 - Formulation Development Studies&quot;/>
                    <text>
                        <status value=&quot;additional&quot;/>
                        <div>
                            <p>Summary of the formulation developmental studies conducted are provided in Table 2</p>
                            <p>Table 2 - Formulation Development Studies</p>
                            <table>
                                <tr>
                                    <th>Study</th>
                                    <th>Formulation identifier </th>
                                    <th>Objective</th>
                                    <th>Quality attribute evaluated</th>
                                    <th>Study design</th>
                                    <th>Study result</th>
                                </tr>
                                <tr>
                                    <td>Study Name</td>
                                    <td>12234a</td>
                                    <td>Short description of the study objective</td>
                                    <td>CQA information</td>
                                    <td>Short description of the design</td>
                                    <td>Reference to the table showing study results</td>
                                </tr>
                            </table>
                        </div>
                    </text>
                </section>
                <section>
                    <title value=&quot;3.2.P.2.2.4 - Summary for Risk Assessment of Elemental Impurities in Drug Product&quot;/>
                    <text>
                        <status value=&quot;additional&quot;/>
                        <div>
                            <p>Summary of the risk assessment for product...</p>
                        </div>
                    </text>
                </section>" id="Composition-composition-drug-pq-formulation">Composition</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/composition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/composition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/composition.html#tt-uml">R6</a>]</span><div class="debugOff">id: composition-drug-pq-formulation</div>
<div class="debugOff"> fullUrl: urn:uuid:a1694a7a-aafa-4cbe-8135-c788a9a4d3d5</div>
<div class="debugOff"></div>
<div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Composition>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Composition-drug-pq&quot;>">Profile: </span><span>http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Composition-drug-pq</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Composition>
                ...
                <type>
                    <text value=&quot;Product Note - Formulation Development&quot;/>">Type: </span><span style="white-space:normal;">Product Note - Formulation Development</span></div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Composition>
                ...
                <date value=&quot;2023-10-01&quot;>">Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Composition>
                ...
                <date value=&quot;2023-10-01&quot;>">2023-10-01</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Composition>
                ...
                <status value=&quot;final&quot;>">Status: </span><span>final</span></div>
</div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Composition>
                ...
                <title value=&quot;3.2.P.2.2.1 - Formulation Development&quot;>">Title: </span><span>3.2.P.2.2.1 - Formulation Development</span></div>
<div class="indent compl2 summaryUnit"><span title="
<Bundle>
    <entry>
        <resource>
            <Composition>
                ...
                <author>
                    <reference value=&quot;Organization/organization-drug-pq-ex1&quot;/>">Author</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Composition/author, id: comp-drug-components fullUrl: urn:uuid:a1694a7b-aafa-4cbe-8135-c788a9a4d3d5)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Composition/author, id: composition-drug-pq-formulation fullUrl: urn:uuid:a1694a7a-aafa-4cbe-8135-c788a9a4d3d5)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Composition/author, id: composition-drug-pq-risk fullUrl: urn:uuid:a1694a8a-aafa-4cbe-8135-c788a9a4d3d5)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: organization-drug-pq-ex1)(fullUrl: urn:uuid:9fe98cfa-9246-8313-0fc5-d15e613b5d6d)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <id value=&quot;organization-drug-pq-ex1&quot;/>
                <name value=&quot;AAA Molybdenum Products, Inc.&quot;/>" id="Organization-organization-drug-pq-ex1">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/organization.html#tt-uml">R6</a>]</span><div class="debugOff">id: organization-drug-pq-ex1</div><div class="debugOff"> fullUrl: urn:uuid:9fe98cfa-9246-8313-0fc5-d15e613b5d6d</div><span class="summaryShowsOff"> - AAA Molybdenum Products, Inc.</span><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;AAA Molybdenum Products, Inc.&quot;>">Name: </span><span>AAA Molybdenum Products, Inc.</span></div></div></div>
</div>
<div class="indent compl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Composition>
                ...
                <section>
                    <title value=&quot;3.2.P.2.2.1.1 - Formulation History&quot;/>
                    <text>
                        <status value=&quot;additional&quot;/>
                        <div>
                            <ul>
                                <li>Drug product description including difference or similarity between the drug product and reference product, if applicable</li>
                                <li>Propose route of administration (include any dilution or reconstitution necessary)</li>
                                <li>Choice of manufacturing process, explain choice if alternative process could have been applicable (e.g. aseptic processing instead of terminal sterilization, direct compression instead of granulation). If different processes were used for different formulation highlight and explain differences, refer at 3.2.P.2.3. If no change in the process occurred refer to 3.3.P.3.3 and avoid duplication data.</li>
                            </ul>
                            <p>Table 1 - Formulation history for Stelbatolol</p>
                            <table>
                                <tr>
                                    <th>Formulation Identifier</th>
                                    <th>Composition</th>
                                    <th>Change</th>
                                    <th>Development phase</th>
                                </tr>
                                <tr>
                                    <td>1233545</td>
                                    <td>Composition 1a</td>
                                    <td>Changes made are listed here</td>
                                    <td>Pre-clinical phase</td>
                                </tr>
                            </table>
                        </div>
                    </text>" id="urn:uuid:a1694a7a-aafa-4cbe-8135-c788a9a4d3d5">Section</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Composition>
                <section>
                    <title value=&quot;3.2.P.2.2.1.1 - Formulation History&quot;>">Title: </span><span>3.2.P.2.2.1.1 - Formulation History</span></div>
<div class="summaryHiddenOff">
<div class="indent compText"><span title="
<Bundle>
    <entry>
        <resource>
            <Composition>
                <section>
                    ...
                    <text>
                        <status value=&quot;additional&quot;/>
                        <div>
                            <ul>
                                <li>Drug product description including difference or similarity between the drug product and reference product, if applicable</li>
                                <li>Propose route of administration (include any dilution or reconstitution necessary)</li>
                                <li>Choice of manufacturing process, explain choice if alternative process could have been applicable (e.g. aseptic processing instead of terminal sterilization, direct compression instead of granulation). If different processes were used for different formulation highlight and explain differences, refer at 3.2.P.2.3. If no change in the process occurred refer to 3.3.P.3.3 and avoid duplication data.</li>
                            </ul>
                            <p>Table 1 - Formulation history for Stelbatolol</p>
                            <table>
                                <tr>
                                    <th>Formulation Identifier</th>
                                    <th>Composition</th>
                                    <th>Change</th>
                                    <th>Development phase</th>
                                </tr>
                                <tr>
                                    <td>1233545</td>
                                    <td>Composition 1a</td>
                                    <td>Changes made are listed here</td>
                                    <td>Pre-clinical phase</td>
                                </tr>
                            </table>
                        </div>" id="urn:uuid:a1694a7a-aafa-4cbe-8135-c788a9a4d3d5">Text</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Composition>
                <section>
                    <text>
                        <status value=&quot;additional&quot;>">Status: </span><span>additional</span></div>
<div class="indent compText" title="
                            <ul>
                                <li>Drug product description including difference or similarity between the drug product and reference product, if applicable</li>
                                <li>Propose route of administration (include any dilution or reconstitution necessary)</li>
                                <li>Choice of manufacturing process, explain choice if alternative process could have been applicable (e.g. aseptic processing instead of terminal sterilization, direct compression instead of granulation). If different processes were used for different formulation highlight and explain differences, refer at 3.2.P.2.3. If no change in the process occurred refer to 3.3.P.3.3 and avoid duplication data.</li>
                            </ul>
                            <p>Table 1 - Formulation history for Stelbatolol</p>
                            <table>
                                <tr>
                                    <th>Formulation Identifier</th>
                                    <th>Composition</th>
                                    <th>Change</th>
                                    <th>Development phase</th>
                                </tr>
                                <tr>
                                    <td>1233545</td>
                                    <td>Composition 1a</td>
                                    <td>Changes made are listed here</td>
                                    <td>Pre-clinical phase</td>
                                </tr>
                            </table>">
<div xmlns="http://www.w3.org/1999/xhtml">
<ul>
<li>Drug product description including difference or similarity between the drug product and reference product, if applicable</li>
<li>Propose route of administration (include any dilution or reconstitution necessary)</li>
<li>Choice of manufacturing process, explain choice if alternative process could have been applicable (e.g. aseptic processing instead of terminal sterilization, direct compression instead of granulation). If different processes were used for different formulation highlight and explain differences, refer at 3.2.P.2.3. If no change in the process occurred refer to 3.3.P.3.3 and avoid duplication data.</li>
</ul>
<p>Table 1 - Formulation history for Stelbatolol</p>
<table>
<tr>
<th>Formulation Identifier</th>
<th>Composition</th>
<th>Change</th>
<th>Development phase</th>
</tr>
<tr>
<td>1233545</td>
<td>Composition 1a</td>
<td>Changes made are listed here</td>
<td>Pre-clinical phase</td>
</tr>
</table>
</div>
</div>
</div>
</div>
</div>
<div class="indent compl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Composition>
                ...
                <section>
                    <title value=&quot;3.2.P.2.2.1.2 - Formulation Development Studies&quot;/>
                    <text>
                        <status value=&quot;additional&quot;/>
                        <div>
                            <p>Summary of the formulation developmental studies conducted are provided in Table 2</p>
                            <p>Table 2 - Formulation Development Studies</p>
                            <table>
                                <tr>
                                    <th>Study</th>
                                    <th>Formulation identifier </th>
                                    <th>Objective</th>
                                    <th>Quality attribute evaluated</th>
                                    <th>Study design</th>
                                    <th>Study result</th>
                                </tr>
                                <tr>
                                    <td>Study Name</td>
                                    <td>12234a</td>
                                    <td>Short description of the study objective</td>
                                    <td>CQA information</td>
                                    <td>Short description of the design</td>
                                    <td>Reference to the table showing study results</td>
                                </tr>
                            </table>
                        </div>
                    </text>" id="urn:uuid:a1694a7a-aafa-4cbe-8135-c788a9a4d3d5">Section</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Composition>
                <section>
                    <title value=&quot;3.2.P.2.2.1.2 - Formulation Development Studies&quot;>">Title: </span><span>3.2.P.2.2.1.2 - Formulation Development Studies</span></div>
<div class="summaryHiddenOff">
<div class="indent compText"><span title="
<Bundle>
    <entry>
        <resource>
            <Composition>
                <section>
                    ...
                    <text>
                        <status value=&quot;additional&quot;/>
                        <div>
                            <p>Summary of the formulation developmental studies conducted are provided in Table 2</p>
                            <p>Table 2 - Formulation Development Studies</p>
                            <table>
                                <tr>
                                    <th>Study</th>
                                    <th>Formulation identifier </th>
                                    <th>Objective</th>
                                    <th>Quality attribute evaluated</th>
                                    <th>Study design</th>
                                    <th>Study result</th>
                                </tr>
                                <tr>
                                    <td>Study Name</td>
                                    <td>12234a</td>
                                    <td>Short description of the study objective</td>
                                    <td>CQA information</td>
                                    <td>Short description of the design</td>
                                    <td>Reference to the table showing study results</td>
                                </tr>
                            </table>
                        </div>" id="urn:uuid:a1694a7a-aafa-4cbe-8135-c788a9a4d3d5">Text</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Composition>
                <section>
                    <text>
                        <status value=&quot;additional&quot;>">Status: </span><span>additional</span></div>
<div class="indent compText" title="
                            <p>Summary of the formulation developmental studies conducted are provided in Table 2</p>
                            <p>Table 2 - Formulation Development Studies</p>
                            <table>
                                <tr>
                                    <th>Study</th>
                                    <th>Formulation identifier </th>
                                    <th>Objective</th>
                                    <th>Quality attribute evaluated</th>
                                    <th>Study design</th>
                                    <th>Study result</th>
                                </tr>
                                <tr>
                                    <td>Study Name</td>
                                    <td>12234a</td>
                                    <td>Short description of the study objective</td>
                                    <td>CQA information</td>
                                    <td>Short description of the design</td>
                                    <td>Reference to the table showing study results</td>
                                </tr>
                            </table>">
<div xmlns="http://www.w3.org/1999/xhtml">
<p>Summary of the formulation developmental studies conducted are provided in Table 2</p>
<p>Table 2 - Formulation Development Studies</p>
<table>
<tr>
<th>Study</th>
<th>Formulation identifier </th>
<th>Objective</th>
<th>Quality attribute evaluated</th>
<th>Study design</th>
<th>Study result</th>
</tr>
<tr>
<td>Study Name</td>
<td>12234a</td>
<td>Short description of the study objective</td>
<td>CQA information</td>
<td>Short description of the design</td>
<td>Reference to the table showing study results</td>
</tr>
</table>
</div>
</div>
</div>
</div>
</div>
<div class="indent compl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Composition>
                ...
                <section>
                    <title value=&quot;3.2.P.2.2.4 - Summary for Risk Assessment of Elemental Impurities in Drug Product&quot;/>
                    <text>
                        <status value=&quot;additional&quot;/>
                        <div>
                            <p>Summary of the risk assessment for product...</p>
                        </div>
                    </text>" id="urn:uuid:a1694a7a-aafa-4cbe-8135-c788a9a4d3d5">Section</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Composition>
                <section>
                    <title value=&quot;3.2.P.2.2.4 - Summary for Risk Assessment of Elemental Impurities in Drug Product&quot;>">Title: </span><span>3.2.P.2.2.4 - Summary for Risk Assessment of Elemental Impurities in Drug Product</span></div>
<div class="summaryHiddenOff">
<div class="indent compText"><span title="
<Bundle>
    <entry>
        <resource>
            <Composition>
                <section>
                    ...
                    <text>
                        <status value=&quot;additional&quot;/>
                        <div>
                            <p>Summary of the risk assessment for product...</p>
                        </div>" id="urn:uuid:a1694a7a-aafa-4cbe-8135-c788a9a4d3d5">Text</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Composition>
                <section>
                    <text>
                        <status value=&quot;additional&quot;>">Status: </span><span>additional</span></div>
<div class="indent compText" title="
                            <p>Summary of the risk assessment for product...</p>">
<div xmlns="http://www.w3.org/1999/xhtml">
<p>Summary of the risk assessment for product...</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="indent comp summaryUnit" ondblclick="summaryHandler(event)"><a class="plainLink"><span class="bold" title="Composition (id: composition-drug-pq-risk)(fullUrl: urn:uuid:a1694a8a-aafa-4cbe-8135-c788a9a4d3d5)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Composition-drug-pq 

<Bundle>
    <entry>
        <resource>
            <Composition>
                <id value=&quot;composition-drug-pq-risk&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Composition-drug-pq&quot;/>
                </meta>
                <status value=&quot;final&quot;/>
                <type>
                    <text value=&quot;Product Note - Summary for Risk of Impurities&quot;/>
                </type>
                <subject>
                    <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-pq-ex1&quot;/>
                </subject>
                <date value=&quot;2023-10-01&quot;/>
                <author>
                    <reference value=&quot;Organization/organization-drug-pq-ex1&quot;/>
                </author>
                <title value=&quot;3.2.P.2.2.4 - Summary for Risk of Impurities&quot;/>
                <section>
                    <text>
                        <status value=&quot;additional&quot;/>
                        <div>
                            <p>Text for the risk assessment of elemental impurities in the product</p>
                        </div>
                    </text>
                </section>" id="Composition-composition-drug-pq-risk">Composition</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/composition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/composition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/composition.html#tt-uml">R6</a>]</span><div class="debugOff">id: composition-drug-pq-risk</div>
<div class="debugOff"> fullUrl: urn:uuid:a1694a8a-aafa-4cbe-8135-c788a9a4d3d5</div>
<div class="debugOff"></div>
<div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Composition>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Composition-drug-pq&quot;>">Profile: </span><span>http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Composition-drug-pq</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Composition>
                ...
                <type>
                    <text value=&quot;Product Note - Summary for Risk of Impurities&quot;/>">Type: </span><span style="white-space:normal;">Product Note - Summary for Risk of Impurities</span></div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Composition>
                ...
                <date value=&quot;2023-10-01&quot;>">Date: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Composition>
                ...
                <date value=&quot;2023-10-01&quot;>">2023-10-01</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Composition>
                ...
                <status value=&quot;final&quot;>">Status: </span><span>final</span></div>
</div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Composition>
                ...
                <title value=&quot;3.2.P.2.2.4 - Summary for Risk of Impurities&quot;>">Title: </span><span>3.2.P.2.2.4 - Summary for Risk of Impurities</span></div>
<div class="indent compl2 summaryUnit"><span title="
<Bundle>
    <entry>
        <resource>
            <Composition>
                ...
                <author>
                    <reference value=&quot;Organization/organization-drug-pq-ex1&quot;/>">Author</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Composition/author, id: comp-drug-components fullUrl: urn:uuid:a1694a7b-aafa-4cbe-8135-c788a9a4d3d5)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Composition/author, id: composition-drug-pq-formulation fullUrl: urn:uuid:a1694a7a-aafa-4cbe-8135-c788a9a4d3d5)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Composition/author, id: composition-drug-pq-risk fullUrl: urn:uuid:a1694a8a-aafa-4cbe-8135-c788a9a4d3d5)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: organization-drug-pq-ex1)(fullUrl: urn:uuid:9fe98cfa-9246-8313-0fc5-d15e613b5d6d)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <id value=&quot;organization-drug-pq-ex1&quot;/>
                <name value=&quot;AAA Molybdenum Products, Inc.&quot;/>" id="Organization-organization-drug-pq-ex1">Organization</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/organization.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/organization.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/organization.html#tt-uml">R6</a>]</span><div class="debugOff">id: organization-drug-pq-ex1</div><div class="debugOff"> fullUrl: urn:uuid:9fe98cfa-9246-8313-0fc5-d15e613b5d6d</div><span class="summaryShowsOff"> - AAA Molybdenum Products, Inc.</span><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <Organization>
                ...
                <name value=&quot;AAA Molybdenum Products, Inc.&quot;>">Name: </span><span>AAA Molybdenum Products, Inc.</span></div></div></div>
</div>
<div class="indent compl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Composition>
                ...
                <section>
                    <text>
                        <status value=&quot;additional&quot;/>
                        <div>
                            <p>Text for the risk assessment of elemental impurities in the product</p>
                        </div>
                    </text>" id="urn:uuid:a1694a8a-aafa-4cbe-8135-c788a9a4d3d5">Section</span><div class="summaryHiddenOff">
<div class="indent compText"><span title="
<Bundle>
    <entry>
        <resource>
            <Composition>
                <section>
                    <text>
                        <status value=&quot;additional&quot;/>
                        <div>
                            <p>Text for the risk assessment of elemental impurities in the product</p>
                        </div>" id="urn:uuid:a1694a8a-aafa-4cbe-8135-c788a9a4d3d5">Text</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Composition>
                <section>
                    <text>
                        <status value=&quot;additional&quot;>">Status: </span><span>additional</span></div>
<div class="indent compText" title="
                            <p>Text for the risk assessment of elemental impurities in the product</p>">
<div xmlns="http://www.w3.org/1999/xhtml">
<p>Text for the risk assessment of elemental impurities in the product</p>
</div>
</div>
</div>
</div>
</div>
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
		First resource in bundle:Composition
		Single resource bundle:false
		Single resource bundle Not Patient Or Bundle:false
		Single resource Not Patient:false
		Patient document:false
		General Bundle:false
		Not patient related:true
		=>Patient Centric Mode:false
		SubstanceDef Centric Mode:false
		Assumed profile:--></html>
