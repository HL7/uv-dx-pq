The HTML rendering below shows a synthetic Quality data example for Common Technical Document (CTD) Module 3: Quality, section 3.2.P.2 Pharmaceutical Development, 3.2.P.2.5 Microbiological Attributes.
<html>
<body>
<div class="divBody">
<p>
						This is the same data as in the example files here in <a href="Bundle-bundle-drug-product-microbiological-attributes-pq-ex1.xml.html">xml</a> and in <a href="Bundle-bundle-drug-product-microbiological-attributes-pq-ex1.json.html">json</a>, presented for easier viewing.
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
<div class="bundle"><a class="plainLink"><span class="bold" title="Bundle (id: bundle-drug-product-microbiological-attributes-pq-ex1)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-drug-product-microbiological-attributes-pq 

<Bundle>
    <!-- Product  Microbiological Attributes -->
    <id value=&quot;bundle-drug-product-microbiological-attributes-pq-ex1&quot;/>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-drug-product-microbiological-attributes-pq&quot;/>
    </meta>
    <type value=&quot;collection&quot;/>
    <!-- Diagnostic report doesn't carry much extra value but does collect all the observations -->
    <entry>
        <fullUrl value=&quot;urn:uuid:b664977d-799d-a1ce-928a-5def2a9955bd&quot;/>
        <resource>
            <DiagnosticReport>
                <id value=&quot;microbiologicalReport&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-report-type&quot;/>
                        <code value=&quot;Microbiological Attributes Report&quot;/>
                        <display value=&quot;Microbiological Attributes Report&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2020-12&quot;/>
                <!-- start of stability test -->
                <result>
                    <reference value=&quot;Observation/observationDescription&quot;/>
                </result>
            </DiagnosticReport>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:18c2d9e0-08c7-84e2-5e59-8f56321f895d&quot;/>
        <resource>
            <Observation>
                <id value=&quot;observationDescription&quot;/>
                <text>
                    <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/showText&quot;>
                        <valueBoolean value=&quot;true&quot;/>
                    </extension>
                    <status value=&quot;additional&quot;/>
                    <div xmlns=&quot;http://www.w3.org/1999/xhtml&quot;>
                        <div style=&quot;font-family: 'Times New Roman', Times, serif;&quot;>
                            <p>
                                <span>The microbiological attributes of the excipients were
                                    characterized during the development program. All excipients
                                    meet USP <1111> </span>
                                <i>
                                    <span>Microbial Examination of
                                        Nonsterile Products:</span>
                                </i>
                                <span/>
                                <i>
                                    <span>Acceptance Criteria for Pharmaceutical
                                        Preparations and Substances for Pharmaceutical
                                    Use</span>
                                </i>
                                <span/>
                                <span>and Ph. Eur. 5.1.4
                                        </span>
                                <i>
                                    <span>Microbiological quality of non-sterile
                                        pharmaceutical preparations and substances for
                                        pharmaceutical use</span>
                                </i>
                                <i>
                                    <span>,</span>
                                </i>
                                <span>
                                    when tested in accordance with USP <61> and
                                    <62>,</span>
                                <span/>
                                <span>and Ph. Eur. 2.6.12 and
                                    2.6.13, where applicable.</span>
                            </p>
                            <p>
                                <span> Current Good Manufacturing Practices are used which minimize
                                    the possibility for microbial contamination for the finished
                                    product. This was confirmed via testing of three lots
                                    manufactured at the commercial scale for the purpose of PPQ and
                                    stability studies according to USP <61> and <62>.
                                    All lots met the USP <1111> criteria for nonaqueous
                                    preparations for oral use (Total Aerobic Microbial Count NMT
                                        10
                                    <sup>3</sup>  CFU/gram, Total Combined Yeast and Mold Count
                                    NMT 10
                                    <sup>2</sup>  CFU/gram and absence of
                                        
                                </span>
                                <i>
                                    <span>Escherichia coli </span>
                                </i>
                                <span>in 1
                                    gram), as stated in Sections 3.2.P.5.4 and 3.2.P.8.3.</span>
                            </p>
                            <p>
                                <span>Per USP <921> </span>
                                <i>
                                    <span>Water
                                    Determination</span>
                                </i>
                                <span>, the drug product specification
                                    is set to NMT 1.0% at release and NMT 2.0% for shelf life as
                                    described in Section 3.2.P.5.1. The water activity for the drug
                                    product was confirmed to comply with the specifications as
                                    stated in Sections 3.2.P.5.4 and 3.2.P.8.3. </span>
                            </p>
                            <p>
                                <span>A product microbial risk evaluation conducted for the drug
                                    product manufacturing site supports annual microbiological
                                    quality testing at release and on stability following the
                                    specification listed in Section 3.2.P.5.1. Input material,
                                    manufacturing, process controls as well as environmental
                                    controls are all in place to ensure consistent microbiological
                                    quality. The excipients used in the manufacture of the product
                                    are tested for microbiological quality as required by their
                                    respective compendial requirements. This product demonstrates
                                    satisfactory microbiological quality based on the results of all
                                    batches evaluated. Microbiological quality testing will continue
                                    to be monitored annually on the drug product for release and
                                    throughout the stability study.</span>
                            </p>
                        </div>
                    </div>
                </text>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;DESC&quot;/>
                        <display value=&quot;Description&quot;/>
                    </coding>
                    <text value=&quot;Description&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <valueCodeableConcept>
                    <text value=&quot;Complies&quot;/>
                </valueCodeableConcept>
            </Observation>
        </resource>
    </entry>
    <!-- MedicinalProductDefinition - the main resource in any product scenario -->
    <entry>
        <fullUrl value=&quot;urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d5&quot;/>
        <resource>
            <!-- Section 1.1 - DP Identification -->
            <MedicinalProductDefinition>
                <!-- unlinked -->
                <id value=&quot;medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
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
    <!-- Section 8 - Batch or Lot Information (batch 1 of 3) -->
    <entry>
        <fullUrl value=&quot;urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51&quot;/>
        <resource>
            <Medication>
                <id value=&quot;medication-actual-batch&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-pq&quot;>
                        <valueReference>
                            <!-- todo consider change this be the MID? -->
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>
                    </extension>
                </code>
            </Medication>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
        <resource>
            <Organization>
                <!--testing lab-->
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
    </entry>" id="Bundle-bundle-drug-product-microbiological-attributes-pq-ex1">Bundle</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/bundle.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/bundle.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/bundle.html#tt-uml">R6</a>]</span><div class="debugOff">id: bundle-drug-product-microbiological-attributes-pq-ex1</div>
<div class="debugOff"></div>
<div class="debugOff"><span title="
<Bundle>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-drug-product-microbiological-attributes-pq&quot;>">Profile: </span><span title="
<Bundle>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-drug-product-microbiological-attributes-pq&quot;>">http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-drug-product-microbiological-attributes-pq</span></div>
<div><span title="
<Bundle>
    ...
    <type value=&quot;collection&quot;>">Type: <span>collection</span></span></div>
</div>
</div>
<div>
<div ondblclick="summaryHandler(event)" class="indent summaryUnit comp"><a class="plainLink"><span class="bold" title="DiagnosticReport (id: microbiologicalReport)(fullUrl: urn:uuid:b664977d-799d-a1ce-928a-5def2a9955bd)

<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                <id value=&quot;microbiologicalReport&quot;/>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-report-type&quot;/>
                        <code value=&quot;Microbiological Attributes Report&quot;/>
                        <display value=&quot;Microbiological Attributes Report&quot;/>
                    </coding>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2020-12&quot;/>
                <!-- start of stability test -->
                <result>
                    <reference value=&quot;Observation/observationDescription&quot;/>
                </result>" id="DiagnosticReport-microbiologicalReport">Diagnostic Report<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                <code>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-report-type&quot;/>
                        <code value=&quot;Microbiological Attributes Report&quot;/>
                        <display value=&quot;Microbiological Attributes Report&quot;/>">Microbiological Attributes Report<span class="greyOff"> [Microbiological Attributes Report]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/pharmaceutical-report-type)</span></span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/diagnosticreport.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/diagnosticreport.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/diagnosticreport.html#tt-uml">R6</a>]</span><div class="debugOff">id: microbiologicalReport</div>
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
                        <code value=&quot;Microbiological Attributes Report&quot;/>
                        <display value=&quot;Microbiological Attributes Report&quot;/>
                    </coding>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                <code>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-report-type&quot;/>
                        <code value=&quot;Microbiological Attributes Report&quot;/>
                        <display value=&quot;Microbiological Attributes Report&quot;/>">Microbiological Attributes Report<span class="greyOff"> [Microbiological Attributes Report]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/pharmaceutical-report-type)</span></span></span></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="indent compl2"><span title="
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch&quot;/>">Subject</span><div class="indent med summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (DiagnosticReport/subject, id: microbiologicalReport fullUrl: urn:uuid:b664977d-799d-a1ce-928a-5def2a9955bd)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDescription fullUrl: urn:uuid:18c2d9e0-08c7-84e2-5e59-8f56321f895d)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Medication (id: medication-actual-batch)(fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51)

<Bundle>
    <entry>
        <resource>
            <Medication>
                <id value=&quot;medication-actual-batch&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-pq&quot;>
                        <valueReference>
                            <!-- todo consider change this be the MID? -->
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>
                    </extension>
                </code>" id="Medication-medication-actual-batch">Medication</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/medication.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/medication.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/medication.html#tt-uml">R6</a>]</span><div class="debugOff">id: medication-actual-batch</div><div class="debugOff"> fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51</div><span class="summaryShowsOff"><b></b></span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-pq&quot;>
                        <valueReference>
                            <!-- todo consider change this be the MID? -->
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>">Definition</span>: Stelbat Tablets, 20mg (<a href="#MedicinalProductDefinition-medicinalproductdefinition-drug-product-dxpq-ex1" title="click to see target - id=medicinalproductdefinition-drug-product-dxpq-ex1">MedicinalProductDefinition</a>)<span class="debugOff"> id: medicinalproductdefinition-drug-product-dxpq-ex1</span></div></div>
</div>
<div class="summaryHiddenOff"></div>
<div class="indent compText summaryUnit"><span title="
<Bundle>
    <entry>
        <resource>
            <DiagnosticReport>
                ...
                <result>
                    <reference value=&quot;Observation/observationDescription&quot;/>">Result</span><div ondblclick="summaryHandler(event)" class="indent summaryUnit obs"><div class="debugOff"><span>Found a parent (DiagnosticReport/result, id: microbiologicalReport fullUrl: urn:uuid:b664977d-799d-a1ce-928a-5def2a9955bd)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Observation (id: observationDescription)(fullUrl: urn:uuid:18c2d9e0-08c7-84e2-5e59-8f56321f895d)

<Bundle>
    <entry>
        <resource>
            <Observation>
                <id value=&quot;observationDescription&quot;/>
                <text>
                    <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/showText&quot;>
                        <valueBoolean value=&quot;true&quot;/>
                    </extension>
                    <status value=&quot;additional&quot;/>
                    <div xmlns=&quot;http://www.w3.org/1999/xhtml&quot;>
                        <div style=&quot;font-family: 'Times New Roman', Times, serif;&quot;>
                            <p>
                                <span>The microbiological attributes of the excipients were
                                    characterized during the development program. All excipients
                                    meet USP <1111> </span>
                                <i>
                                    <span>Microbial Examination of
                                        Nonsterile Products:</span>
                                </i>
                                <span/>
                                <i>
                                    <span>Acceptance Criteria for Pharmaceutical
                                        Preparations and Substances for Pharmaceutical
                                    Use</span>
                                </i>
                                <span/>
                                <span>and Ph. Eur. 5.1.4
                                        </span>
                                <i>
                                    <span>Microbiological quality of non-sterile
                                        pharmaceutical preparations and substances for
                                        pharmaceutical use</span>
                                </i>
                                <i>
                                    <span>,</span>
                                </i>
                                <span>
                                    when tested in accordance with USP <61> and
                                    <62>,</span>
                                <span/>
                                <span>and Ph. Eur. 2.6.12 and
                                    2.6.13, where applicable.</span>
                            </p>
                            <p>
                                <span> Current Good Manufacturing Practices are used which minimize
                                    the possibility for microbial contamination for the finished
                                    product. This was confirmed via testing of three lots
                                    manufactured at the commercial scale for the purpose of PPQ and
                                    stability studies according to USP <61> and <62>.
                                    All lots met the USP <1111> criteria for nonaqueous
                                    preparations for oral use (Total Aerobic Microbial Count NMT
                                        10
                                    <sup>3</sup>  CFU/gram, Total Combined Yeast and Mold Count
                                    NMT 10
                                    <sup>2</sup>  CFU/gram and absence of
                                        
                                </span>
                                <i>
                                    <span>Escherichia coli </span>
                                </i>
                                <span>in 1
                                    gram), as stated in Sections 3.2.P.5.4 and 3.2.P.8.3.</span>
                            </p>
                            <p>
                                <span>Per USP <921> </span>
                                <i>
                                    <span>Water
                                    Determination</span>
                                </i>
                                <span>, the drug product specification
                                    is set to NMT 1.0% at release and NMT 2.0% for shelf life as
                                    described in Section 3.2.P.5.1. The water activity for the drug
                                    product was confirmed to comply with the specifications as
                                    stated in Sections 3.2.P.5.4 and 3.2.P.8.3. </span>
                            </p>
                            <p>
                                <span>A product microbial risk evaluation conducted for the drug
                                    product manufacturing site supports annual microbiological
                                    quality testing at release and on stability following the
                                    specification listed in Section 3.2.P.5.1. Input material,
                                    manufacturing, process controls as well as environmental
                                    controls are all in place to ensure consistent microbiological
                                    quality. The excipients used in the manufacture of the product
                                    are tested for microbiological quality as required by their
                                    respective compendial requirements. This product demonstrates
                                    satisfactory microbiological quality based on the results of all
                                    batches evaluated. Microbiological quality testing will continue
                                    to be monitored annually on the drug product for release and
                                    throughout the stability study.</span>
                            </p>
                        </div>
                    </div>
                </text>
                <status value=&quot;final&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;DESC&quot;/>
                        <display value=&quot;Description&quot;/>
                    </coding>
                    <text value=&quot;Description&quot;/>
                </code>
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch&quot;/>
                </subject>
                <effectiveDateTime value=&quot;2023-01-01T12:00:00Z&quot;/>
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>
                </performer>
                <valueCodeableConcept>
                    <text value=&quot;Complies&quot;/>
                </valueCodeableConcept>" id="Observation-observationDescription">Observation<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;DESC&quot;/>
                        <display value=&quot;Description&quot;/>">Description<span class="greyOff"> [DESC]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: Description</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observation.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observation.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observation.html#tt-uml">R6</a>]</span><div class="debugOff">id: observationDescription</div><div class="debugOff"> fullUrl: urn:uuid:18c2d9e0-08c7-84e2-5e59-8f56321f895d</div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <text>
                    <extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/showText&quot;>
                        <valueBoolean value=&quot;true&quot;/>
                    </extension>
                    <status value=&quot;additional&quot;/>
                    <div xmlns=&quot;http://www.w3.org/1999/xhtml&quot;>
                        <div style=&quot;font-family: 'Times New Roman', Times, serif;&quot;>
                            <p>
                                <span>The microbiological attributes of the excipients were
                                    characterized during the development program. All excipients
                                    meet USP <1111> </span>
                                <i>
                                    <span>Microbial Examination of
                                        Nonsterile Products:</span>
                                </i>
                                <span/>
                                <i>
                                    <span>Acceptance Criteria for Pharmaceutical
                                        Preparations and Substances for Pharmaceutical
                                    Use</span>
                                </i>
                                <span/>
                                <span>and Ph. Eur. 5.1.4
                                        </span>
                                <i>
                                    <span>Microbiological quality of non-sterile
                                        pharmaceutical preparations and substances for
                                        pharmaceutical use</span>
                                </i>
                                <i>
                                    <span>,</span>
                                </i>
                                <span>
                                    when tested in accordance with USP <61> and
                                    <62>,</span>
                                <span/>
                                <span>and Ph. Eur. 2.6.12 and
                                    2.6.13, where applicable.</span>
                            </p>
                            <p>
                                <span> Current Good Manufacturing Practices are used which minimize
                                    the possibility for microbial contamination for the finished
                                    product. This was confirmed via testing of three lots
                                    manufactured at the commercial scale for the purpose of PPQ and
                                    stability studies according to USP <61> and <62>.
                                    All lots met the USP <1111> criteria for nonaqueous
                                    preparations for oral use (Total Aerobic Microbial Count NMT
                                        10
                                    <sup>3</sup>  CFU/gram, Total Combined Yeast and Mold Count
                                    NMT 10
                                    <sup>2</sup>  CFU/gram and absence of
                                        
                                </span>
                                <i>
                                    <span>Escherichia coli </span>
                                </i>
                                <span>in 1
                                    gram), as stated in Sections 3.2.P.5.4 and 3.2.P.8.3.</span>
                            </p>
                            <p>
                                <span>Per USP <921> </span>
                                <i>
                                    <span>Water
                                    Determination</span>
                                </i>
                                <span>, the drug product specification
                                    is set to NMT 1.0% at release and NMT 2.0% for shelf life as
                                    described in Section 3.2.P.5.1. The water activity for the drug
                                    product was confirmed to comply with the specifications as
                                    stated in Sections 3.2.P.5.4 and 3.2.P.8.3. </span>
                            </p>
                            <p>
                                <span>A product microbial risk evaluation conducted for the drug
                                    product manufacturing site supports annual microbiological
                                    quality testing at release and on stability following the
                                    specification listed in Section 3.2.P.5.1. Input material,
                                    manufacturing, process controls as well as environmental
                                    controls are all in place to ensure consistent microbiological
                                    quality. The excipients used in the manufacture of the product
                                    are tested for microbiological quality as required by their
                                    respective compendial requirements. This product demonstrates
                                    satisfactory microbiological quality based on the results of all
                                    batches evaluated. Microbiological quality testing will continue
                                    to be monitored annually on the drug product for release and
                                    throughout the stability study.</span>
                            </p>
                        </div>
                    </div>" id="urn:uuid:18c2d9e0-08c7-84e2-5e59-8f56321f895d">Text</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <text>
                    ...
                    <status value=&quot;additional&quot;>">Status: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <text>
                    ...
                    <status value=&quot;additional&quot;>"><span>additional</span></span></div><div class="indent white" title="
                        <div style=&quot;font-family: 'Times New Roman', Times, serif;&quot;>
                            <p>
                                <span>The microbiological attributes of the excipients were
                                    characterized during the development program. All excipients
                                    meet USP <1111> </span>
                                <i>
                                    <span>Microbial Examination of
                                        Nonsterile Products:</span>
                                </i>
                                <span/>
                                <i>
                                    <span>Acceptance Criteria for Pharmaceutical
                                        Preparations and Substances for Pharmaceutical
                                    Use</span>
                                </i>
                                <span/>
                                <span>and Ph. Eur. 5.1.4
                                        </span>
                                <i>
                                    <span>Microbiological quality of non-sterile
                                        pharmaceutical preparations and substances for
                                        pharmaceutical use</span>
                                </i>
                                <i>
                                    <span>,</span>
                                </i>
                                <span>
                                    when tested in accordance with USP <61> and
                                    <62>,</span>
                                <span/>
                                <span>and Ph. Eur. 2.6.12 and
                                    2.6.13, where applicable.</span>
                            </p>
                            <p>
                                <span> Current Good Manufacturing Practices are used which minimize
                                    the possibility for microbial contamination for the finished
                                    product. This was confirmed via testing of three lots
                                    manufactured at the commercial scale for the purpose of PPQ and
                                    stability studies according to USP <61> and <62>.
                                    All lots met the USP <1111> criteria for nonaqueous
                                    preparations for oral use (Total Aerobic Microbial Count NMT
                                        10
                                    <sup>3</sup>  CFU/gram, Total Combined Yeast and Mold Count
                                    NMT 10
                                    <sup>2</sup>  CFU/gram and absence of
                                        
                                </span>
                                <i>
                                    <span>Escherichia coli </span>
                                </i>
                                <span>in 1
                                    gram), as stated in Sections 3.2.P.5.4 and 3.2.P.8.3.</span>
                            </p>
                            <p>
                                <span>Per USP <921> </span>
                                <i>
                                    <span>Water
                                    Determination</span>
                                </i>
                                <span>, the drug product specification
                                    is set to NMT 1.0% at release and NMT 2.0% for shelf life as
                                    described in Section 3.2.P.5.1. The water activity for the drug
                                    product was confirmed to comply with the specifications as
                                    stated in Sections 3.2.P.5.4 and 3.2.P.8.3. </span>
                            </p>
                            <p>
                                <span>A product microbial risk evaluation conducted for the drug
                                    product manufacturing site supports annual microbiological
                                    quality testing at release and on stability following the
                                    specification listed in Section 3.2.P.5.1. Input material,
                                    manufacturing, process controls as well as environmental
                                    controls are all in place to ensure consistent microbiological
                                    quality. The excipients used in the manufacture of the product
                                    are tested for microbiological quality as required by their
                                    respective compendial requirements. This product demonstrates
                                    satisfactory microbiological quality based on the results of all
                                    batches evaluated. Microbiological quality testing will continue
                                    to be monitored annually on the drug product for release and
                                    throughout the stability study.</span>
                            </p>
                        </div>"><div xmlns="http://www.w3.org/1999/xhtml"><div style="font-family: 'Times New Roman', Times, serif;"><p><span>The microbiological attributes of the excipients were
                                    characterized during the development program. All excipients
                                    meet USP &lt;1111&gt; </span><i><span>Microbial Examination of
                                        Nonsterile Products:</span></i><span/><i><span>Acceptance Criteria for Pharmaceutical
                                        Preparations and Substances for Pharmaceutical
                                    Use</span></i><span/><span>and Ph. Eur. 5.1.4
                                        </span><i><span>Microbiological quality of non-sterile
                                        pharmaceutical preparations and substances for
                                        pharmaceutical use</span></i><i><span>,</span></i><span>
                                    when tested in accordance with USP &lt;61&gt; and
                                    &lt;62&gt;,</span><span/><span>and Ph. Eur. 2.6.12 and
                                    2.6.13, where applicable.</span></p><p><span>Current Good Manufacturing Practices are used which minimize
                                    the possibility for microbial contamination for the finished
                                    product. This was confirmed via testing of three lots
                                    manufactured at the commercial scale for the purpose of PPQ and
                                    stability studies according to USP &lt;61&gt; and &lt;62&gt;.
                                    All lots met the USP &lt;1111&gt; criteria for nonaqueous
                                    preparations for oral use (Total Aerobic Microbial Count NMT
                                        10<sup>3</sup> CFU/gram, Total Combined Yeast and Mold Count
                                    NMT 10<sup>2</sup> CFU/gram and absence of
                                        </span><i><span>Escherichia coli </span></i><span>in 1
                                    gram), as stated in Sections 3.2.P.5.4 and 3.2.P.8.3.</span></p><p><span>Per USP &lt;921&gt; </span><i><span>Water
                                    Determination</span></i><span>, the drug product specification
                                    is set to NMT 1.0% at release and NMT 2.0% for shelf life as
                                    described in Section 3.2.P.5.1. The water activity for the drug
                                    product was confirmed to comply with the specifications as
                                    stated in Sections 3.2.P.5.4 and 3.2.P.8.3. </span></p><p><span>A product microbial risk evaluation conducted for the drug
                                    product manufacturing site supports annual microbiological
                                    quality testing at release and on stability following the
                                    specification listed in Section 3.2.P.5.1. Input material,
                                    manufacturing, process controls as well as environmental
                                    controls are all in place to ensure consistent microbiological
                                    quality. The excipients used in the manufacture of the product
                                    are tested for microbiological quality as required by their
                                    respective compendial requirements. This product demonstrates
                                    satisfactory microbiological quality based on the results of all
                                    batches evaluated. Microbiological quality testing will continue
                                    to be monitored annually on the drug product for release and
                                    throughout the stability study.</span></p></div></div></div></div><div class="summaryHiddenOff"></div><div><span title="
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
                        <code value=&quot;DESC&quot;/>
                        <display value=&quot;Description&quot;/>
                    </coding>
                    <text value=&quot;Description&quot;/>">Code: <span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;DESC&quot;/>
                        <display value=&quot;Description&quot;/>">Description<span class="greyOff"> [DESC]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: Description</span></span></div><div class="summaryHiddenOff"></div><div title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <valueCodeableConcept>
                    <text value=&quot;Complies&quot;/>">
				Value:
				<span style="white-space:normal;">Complies</span></div><div class="summaryHiddenOff"></div><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <subject>
                    <reference value=&quot;Medication/medication-actual-batch&quot;/>">Subject</span><div class="indent med summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (DiagnosticReport/subject, id: microbiologicalReport fullUrl: urn:uuid:b664977d-799d-a1ce-928a-5def2a9955bd)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDescription fullUrl: urn:uuid:18c2d9e0-08c7-84e2-5e59-8f56321f895d)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Medication (id: medication-actual-batch)(fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51)

<Bundle>
    <entry>
        <resource>
            <Medication>
                <id value=&quot;medication-actual-batch&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-pq&quot;>
                        <valueReference>
                            <!-- todo consider change this be the MID? -->
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>
                    </extension>
                </code>" id="Medication-medication-actual-batch">Medication</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/medication.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/medication.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/medication.html#tt-uml">R6</a>]</span><div class="debugOff">id: medication-actual-batch</div><div class="debugOff"> fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51</div><span class="summaryShowsOff"><b></b></span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-pq&quot;>
                        <valueReference>
                            <!-- todo consider change this be the MID? -->
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>">Definition</span>: Stelbat Tablets, 20mg (<a href="#MedicinalProductDefinition-medicinalproductdefinition-drug-product-dxpq-ex1" title="click to see target - id=medicinalproductdefinition-drug-product-dxpq-ex1">MedicinalProductDefinition</a>)<span class="debugOff"> id: medicinalproductdefinition-drug-product-dxpq-ex1</span></div></div></div><div class="summaryHiddenOff"><div class="indent obsl2"><span title="
<Bundle>
    <entry>
        <resource>
            <Observation>
                ...
                <performer>
                    <reference value=&quot;Organization/378fbe5f-5926-3a5c-4c64-5428df877b08&quot;/>">Performer</span><div class="indent org summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (Observation/performer, id: observationDescription fullUrl: urn:uuid:18c2d9e0-08c7-84e2-5e59-8f56321f895d)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Organization (id: 378fbe5f-5926-3a5c-4c64-5428df877b08)(fullUrl: urn:uuid:378fbe5f-5926-3a5c-4c64-5428df877b08)

<Bundle>
    <entry>
        <resource>
            <Organization>
                <!--testing lab-->
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
<div ondblclick="summaryHandler(event)" class="indent mpd summaryUnit"><a class="plainLink"><span class="bold" title="MedicinalProductDefinition (id: medicinalproductdefinition-drug-product-dxpq-ex1)(fullUrl: urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d5)

<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                <!-- unlinked -->
                <id value=&quot;medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
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
                </name>" id="MedicinalProductDefinition-medicinalproductdefinition-drug-product-dxpq-ex1">Product</span></a><span class="summaryHiddenOff"><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/medicinalproductdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/medicinalproductdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/medicinalproductdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: medicinalproductdefinition-drug-product-dxpq-ex1</div>
<div class="debugOff"> fullUrl: urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d5</div></span><div class="summaryHiddenOff"></div><span class="summaryShowsOff"><b> - </b></span><span title="
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
                    </part>" class="bold"><span class="summaryHiddenOff">Name: </span><span>Stelbat Tablets, 20mg</span></span><div class="summaryHiddenOff">
<div><span title="
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
                            <display value=&quot;Proprietary&quot;/>">Proprietary<span class="greyOff"> [Proprietary]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-productNameType-pq-example)</span></span></div>
<div title="
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
                        </type>"><span>Strength name part: </span><span>20mg</span></div>
</div>
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
<div><span title="
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
                        <display value=&quot;Oral use&quot;/>">Oral use<span class="greyOff"> [20053000]</span><span class="greyOff"> (http://standardterms.edqm.eu)</span></span></div>
<div><span title="
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
                        <display value=&quot;Gastro-resistant tablet&quot;/>">Gastro-resistant tablet<span class="greyOff"> [10225000]</span><span class="greyOff"> (http://standardterms.edqm.eu)</span></span></div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="indent mpdl2 summaryUnit"><span title="Medication resource extension linking back to MedicinalProductDefinition: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-pq">Batch Instance</span><div class="indent med summaryUnit" ondblclick="summaryHandler(event)"><sup class="rotate-left" title="arrow indicates that this Medication resource points back to the parent MedicinalProductDefinition, instead of being linked forwards from it - via extension http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-pq">↸</sup><span class="debugOff">arrow indicates that this Medication resource points back to the parent MedicinalProductDefinition, instead of being linked forwards from it - via extension http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-pq<br></span><div class="debugOff"><span>Found a parent (DiagnosticReport/subject, id: microbiologicalReport fullUrl: urn:uuid:b664977d-799d-a1ce-928a-5def2a9955bd)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Observation/subject, id: observationDescription fullUrl: urn:uuid:18c2d9e0-08c7-84e2-5e59-8f56321f895d)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="Medication (id: medication-actual-batch)(fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51)

<Bundle>
    <entry>
        <resource>
            <Medication>
                <id value=&quot;medication-actual-batch&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-pq&quot;>
                        <valueReference>
                            <!-- todo consider change this be the MID? -->
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>
                    </extension>
                </code>" id="Medication-medication-actual-batch">Medication</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/medication.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/medication.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/medication.html#tt-uml">R6</a>]</span><div class="debugOff">id: medication-actual-batch</div><div class="debugOff"> fullUrl: urn:uuid:339b69fd-4ab1-a1e9-9ea5-1972ba2f6b51</div><span class="summaryShowsOff"><b></b></span><div><span title="
<Bundle>
    <entry>
        <resource>
            <Medication>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-medication-definition-pq&quot;>
                        <valueReference>
                            <!-- todo consider change this be the MID? -->
                            <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                        </valueReference>">Definition</span>: Stelbat Tablets, 20mg (<a href="#MedicinalProductDefinition-medicinalproductdefinition-drug-product-dxpq-ex1" title="click to see target - id=medicinalproductdefinition-drug-product-dxpq-ex1">MedicinalProductDefinition</a>)<span class="debugOff"> id: medicinalproductdefinition-drug-product-dxpq-ex1</span></div></div>
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
		First resource in bundle:DiagnosticReport
		Single resource bundle:false
		Single resource bundle Not Patient Or Bundle:false
		Single resource Not Patient:false
		Patient document:false
		General Bundle:false
		Not patient related:true
		=>Patient Centric Mode:false
		SubstanceDef Centric Mode:false
		Assumed profile:--></html>
