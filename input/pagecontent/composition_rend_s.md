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
<div class="bundle"><a class="plainLink"><span class="bold" title="Bundle (id: 7a2809f8-d46b-4383-9cb7-93e4dca35314)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-product-composition-dxpq 

<Bundle>
    <id value=&quot;7a2809f8-d46b-4383-9cb7-93e4dca35314&quot;/>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-product-composition-dxpq&quot;/>
    </meta>
    <type value=&quot;collection&quot;/>
    <!-- MedicinalProductDefinition - the main resource in any product scenario -->
    <entry>
        <fullUrl value=&quot;urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d5&quot;/>
        <resource>
            <!-- Section 1.1 - DP Identification -->
            <MedicinalProductDefinition>
                <id value=&quot;medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                <description value=&quot;Stelbatalol is formulated as an immediate-release, oral, solid dosage form in strengths of 20 mg of the free base equivalent. The 20 mg strength is presented as an orange, round, film coated tablet, debossed with '175' on one side.&quot;/>
                <name>
                    <productName value=&quot;Stalbatolol&quot;/>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/productNameType&quot;/>
                            <code value=&quot;1234&quot;/>
                            <display value=&quot;Proprietary&quot;/>
                        </coding>
                    </type>
                </name>
            </MedicinalProductDefinition>
        </resource>
    </entry>
    <!-- Section 10 - Container Closure System -->
    <entry>
        <fullUrl value=&quot;urn:uuid:88a068e2-1d97-337b-3b9c-4b3f14bc3923&quot;/>
        <resource>
            <PackagedProductDefinition>
                <id value=&quot;packagedproductdefinition-dxpq-ex1&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/PackagedProductDefinition-dxpq&quot;/>
                </meta>
                <packageFor>
                    <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                </packageFor>
                <!-- #174 -->
                <description value=&quot;The commercial primary pack is a high-density polyethylene (HDPE) bottle with a child-resistant polypropylene (PP) screw cap.  Inside the bottle is a desiccant, containing silica gel. Induction seal membranes provide additional tamper evidence. For further details of the packaging components, see ‘P.7 Container Closure System for Drug Product’. &quot;/>
            </PackagedProductDefinition>
        </resource>
    </entry>
    <!-- Section 2.1 - DP Composition -->
    <entry>
        <fullUrl value=&quot;urn:uuid:b89ed9d2-80f9-0cfb-70a1-5a6572e73a65&quot;/>
        <resource>
            <Ingredient>
                <id value=&quot;ingredient1&quot;/>
                <status value=&quot;active&quot;/>
                <for>
                    <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                </for>
                <role>
                    <coding>
                        <system value=&quot;https://spor.ema.europa.eu/v1/lists/100000072050&quot;/>
                        <code value=&quot;100000072072&quot;/>
                        <display value=&quot;Active&quot;/>
                    </coding>
                </role>
                <substance>
                    <code>
                        <reference>
                            <reference value=&quot;SubstanceDefinition/substance1&quot;/>
                            <display value=&quot;Stelbatolol&quot;/>
                        </reference>
                    </code>
                    <strength>
                        <presentationRatio>
                            <numerator>
                                <value value=&quot;15.2&quot;/>
                                <unit value=&quot;mg&quot;/>
                                <!-- todo add ucum -->
                            </numerator>
                            <denominator>
                                <value value=&quot;1&quot;/>
                                <unit value=&quot;tablet&quot;/>
                            </denominator>
                        </presentationRatio>
                    </strength>
                    <strength>
                        <concentrationQuantity>
                            <value value=&quot;97.9&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </concentrationQuantity>
                    </strength>
                </substance>
            </Ingredient>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:b89ed9d3-80f9-0cfb-70a1-5a6572e73a65&quot;/>
        <resource>
            <Ingredient>
                <id value=&quot;excipient1&quot;/>
                <status value=&quot;active&quot;/>
                <for>
                    <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                </for>
                <role>
                    <coding>
                        <system value=&quot;https://spor.ema.europa.eu/v1/lists/100000072050&quot;/>
                        <code value=&quot;100000072082&quot;/>
                        <display value=&quot;Excipient&quot;/>
                    </coding>
                </role>
                <function>
                    <coding>
                        <system value=&quot;https://spor.ema.europa.eu/v1/lists/1000000720XXX&quot;/>
                        <code value=&quot;1000000720XXX&quot;/>
                        <display value=&quot;Diluent&quot;/>
                    </coding>
                </function>
                <substance>
                    <code>
                        <reference>
                            <reference value=&quot;SubstanceDefinition/sd-excipient1&quot;/>
                            <display value=&quot;Mannitol&quot;/>
                        </reference>
                    </code>
                    <strength>
                        <presentationRatio>
                            <numerator>
                                <value value=&quot;145.0&quot;/>
                                <unit value=&quot;mg&quot;/>
                            </numerator>
                            <denominator>
                                <value value=&quot;1&quot;/>
                                <unit value=&quot;tablet&quot;/>
                            </denominator>
                        </presentationRatio>
                    </strength>
                    <strength>
                        <concentrationQuantity>
                            <value value=&quot;1&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </concentrationQuantity>
                    </strength>
                </substance>
            </Ingredient>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:b89ed9d2-80f9-0cfb-71a1-5a6572e73a65&quot;/>
        <resource>
            <Ingredient>
                <id value=&quot;excipient2&quot;/>
                <status value=&quot;active&quot;/>
                <for>
                    <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                </for>
                <role>
                    <coding>
                        <system value=&quot;https://spor.ema.europa.eu/v1/lists/100000072050&quot;/>
                        <code value=&quot;100000072082&quot;/>
                        <display value=&quot;Excipient&quot;/>
                    </coding>
                </role>
                <function>
                    <coding>
                        <system value=&quot;https://spor.ema.europa.eu/v1/lists/1000000720XXX&quot;/>
                        <code value=&quot;1000000720XXX&quot;/>
                        <display value=&quot;Disintegrant&quot;/>
                    </coding>
                </function>
                <substance>
                    <code>
                        <reference>
                            <reference value=&quot;SubstanceDefinition/sd-excipient2&quot;/>
                            <display value=&quot;Maize starch&quot;/>
                        </reference>
                    </code>
                    <strength>
                        <presentationRatio>
                            <numerator>
                                <value value=&quot;13.8&quot;/>
                                <unit value=&quot;mg&quot;/>
                            </numerator>
                            <denominator>
                                <value value=&quot;1&quot;/>
                                <unit value=&quot;tablet&quot;/>
                            </denominator>
                        </presentationRatio>
                    </strength>
                    <strength>
                        <concentrationQuantity>
                            <value value=&quot;0.5&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </concentrationQuantity>
                    </strength>
                </substance>
            </Ingredient>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:b89ed9d2-80f9-0cfb-70a1-5a6572e73a66&quot;/>
        <resource>
            <Ingredient>
                <id value=&quot;excipient3&quot;/>
                <status value=&quot;active&quot;/>
                <for>
                    <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                </for>
                <role>
                    <coding>
                        <system value=&quot;https://spor.ema.europa.eu/v1/lists/100000072050&quot;/>
                        <code value=&quot;100000072082&quot;/>
                        <display value=&quot;Excipient&quot;/>
                    </coding>
                </role>
                <function>
                    <coding>
                        <system value=&quot;https://spor.ema.europa.eu/v1/lists/1000000720XXX&quot;/>
                        <code value=&quot;1000000720XXX&quot;/>
                        <display value=&quot;Disintegrant&quot;/>
                    </coding>
                </function>
                <substance>
                    <code>
                        <reference>
                            <reference value=&quot;SubstanceDefinition/sd-excipient3&quot;/>
                            <display value=&quot;Calcium carboxymethylcellulose&quot;/>
                        </reference>
                    </code>
                    <strength>
                        <presentationRatio>
                            <numerator>
                                <value value=&quot;4.0&quot;/>
                                <unit value=&quot;mg&quot;/>
                            </numerator>
                            <denominator>
                                <value value=&quot;1&quot;/>
                                <unit value=&quot;tablet&quot;/>
                            </denominator>
                        </presentationRatio>
                    </strength>
                    <strength>
                        <concentrationQuantity>
                            <value value=&quot;0.25&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </concentrationQuantity>
                    </strength>
                </substance>
            </Ingredient>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:b89ed9d3-80f9-0cfb-70a1-5a6572e73a66&quot;/>
        <resource>
            <Ingredient>
                <id value=&quot;excipient4&quot;/>
                <status value=&quot;active&quot;/>
                <for>
                    <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                </for>
                <role>
                    <coding>
                        <system value=&quot;https://spor.ema.europa.eu/v1/lists/100000072050&quot;/>
                        <code value=&quot;100000072082&quot;/>
                        <display value=&quot;Excipient&quot;/>
                    </coding>
                </role>
                <function>
                    <coding>
                        <system value=&quot;https://spor.ema.europa.eu/v1/lists/1000000720XXX&quot;/>
                        <code value=&quot;1000000720XXX&quot;/>
                        <display value=&quot;Lubricant&quot;/>
                    </coding>
                </function>
                <substance>
                    <code>
                        <reference>
                            <reference value=&quot;SubstanceDefinition/sd-excipient4&quot;/>
                            <display value=&quot;Magnesium stearate&quot;/>
                        </reference>
                    </code>
                    <strength>
                        <presentationRatio>
                            <numerator>
                                <value value=&quot;2.0&quot;/>
                                <unit value=&quot;mg&quot;/>
                            </numerator>
                            <denominator>
                                <value value=&quot;1&quot;/>
                                <unit value=&quot;tablet&quot;/>
                            </denominator>
                        </presentationRatio>
                    </strength>
                    <strength>
                        <concentrationQuantity>
                            <value value=&quot;0.35&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </concentrationQuantity>
                    </strength>
                </substance>
            </Ingredient>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:4cf2cbba-33e6-1124-9bf2-1c6756380474&quot;/>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;substance1&quot;/>
                <grade>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/grade&quot;/>
                        <code value=&quot;in-house&quot;/>
                        <display value=&quot;In-house&quot;/>
                    </coding>
                </grade>
                <name>
                    <name value=&quot;Stelbatolol&quot;/>
                </name>
            </SubstanceDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:4cf2cbba-33e6-1124-9bf2-1c6756380475&quot;/>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;sd-excipient1&quot;/>
                <grade>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/grade&quot;/>
                        <code value=&quot;NF-PH-Eur&quot;/>
                        <display value=&quot;NF / Ph Eur&quot;/>
                    </coding>
                </grade>
                <name>
                    <name value=&quot;Mannitol&quot;/>
                </name>
            </SubstanceDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:4cf2cbba-33e6-1124-9bf2-1c6756380476&quot;/>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;sd-excipient2&quot;/>
                <grade>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/grade&quot;/>
                        <code value=&quot;NF-PH-Eur&quot;/>
                        <display value=&quot;NF / Ph Eur&quot;/>
                    </coding>
                </grade>
                <name>
                    <name value=&quot;Maize starch&quot;/>
                </name>
            </SubstanceDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:4cf2cbba-33e6-1124-9bf2-1c6756380477&quot;/>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;sd-excipient3&quot;/>
                <grade>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/grade&quot;/>
                        <code value=&quot;NF-PH-Eur&quot;/>
                        <display value=&quot;NF / Ph Eur&quot;/>
                    </coding>
                </grade>
                <name>
                    <name value=&quot;Calcium carboxymethylcellulose&quot;/>
                </name>
            </SubstanceDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:4cf2cbba-33e6-1124-9bf2-1c6756380478&quot;/>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;sd-excipient4&quot;/>
                <grade>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/grade&quot;/>
                        <code value=&quot;NF-PH-Eur&quot;/>
                        <display value=&quot;NF / Ph Eur&quot;/>
                    </coding>
                </grade>
                <name>
                    <name value=&quot;Magnesium stearate&quot;/>
                </name>
            </SubstanceDefinition>
        </resource>
    </entry>" id="Bundle-7a2809f8-d46b-4383-9cb7-93e4dca35314">Bundle</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/bundle.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/bundle.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/bundle.html#tt-uml">R6</a>]</span><div class="debugOff">id: 7a2809f8-d46b-4383-9cb7-93e4dca35314</div>
<div class="debugOff"></div>
<div class="debugOff"><span title="
<Bundle>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-product-composition-dxpq&quot;>">Profile: </span><span>http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-product-composition-dxpq</span></div>
<div><span title="
<Bundle>
    ...
    <type value=&quot;collection&quot;>">Type: </span><span><span>collection</span></span></div>
</div>
</div>
<div>
<div ondblclick="summaryHandler(event)" class="indent mpd summaryUnit"><a class="plainLink"><span class="bold" title="MedicinalProductDefinition (id: medicinalproductdefinition-drug-product-dxpq-ex1)(fullUrl: urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d5)

<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                <id value=&quot;medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                <description value=&quot;Stelbatalol is formulated as an immediate-release, oral, solid dosage form in strengths of 20 mg of the free base equivalent. The 20 mg strength is presented as an orange, round, film coated tablet, debossed with '175' on one side.&quot;/>
                <name>
                    <productName value=&quot;Stalbatolol&quot;/>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/productNameType&quot;/>
                            <code value=&quot;1234&quot;/>
                            <display value=&quot;Proprietary&quot;/>
                        </coding>
                    </type>
                </name>" id="MedicinalProductDefinition-medicinalproductdefinition-drug-product-dxpq-ex1">Product</span></a><span class="summaryHiddenOff"><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/medicinalproductdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/medicinalproductdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/medicinalproductdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: medicinalproductdefinition-drug-product-dxpq-ex1</div>
<div class="debugOff"> fullUrl: urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d5</div></span><div class="summaryHiddenOff"></div><span class="summaryShowsOff"><b> - </b></span><span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                ...
                <name>
                    <productName value=&quot;Stalbatolol&quot;/>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/productNameType&quot;/>
                            <code value=&quot;1234&quot;/>
                            <display value=&quot;Proprietary&quot;/>
                        </coding>
                    </type>" class="bold"><span class="summaryHiddenOff">Name: </span><span>Stalbatolol</span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                <name>
                    ...
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/productNameType&quot;/>
                            <code value=&quot;1234&quot;/>
                            <display value=&quot;Proprietary&quot;/>
                        </coding>">Name type: </span><span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                <name>
                    <type>
                        <coding>
                            <system value=&quot;http://accumulus.org/fhir/code/productNameType&quot;/>
                            <code value=&quot;1234&quot;/>
                            <display value=&quot;Proprietary&quot;/>">Proprietary<span class="greyOff"> [1234]</span><span class="greyOff"> (http://accumulus.org/fhir/code/productNameType)</span></span></div>
</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
                ...
                <description value=&quot;Stelbatalol is formulated as an immediate-release, oral, solid dosage form in strengths of 20 mg of the free base equivalent. The 20 mg strength is presented as an orange, round, film coated tablet, debossed with '175' on one side.&quot;>">Description: </span><span>Stelbatalol is formulated as an immediate-release, oral, solid dosage form in strengths of 20 mg of the free base equivalent. The 20 mg strength is presented as an orange, round, film coated tablet, debossed with '175' on one side.</span></div>
</div>
<div class="htmlTableRemove"><br style="line-height:6px;"><div class="indent org">
<div class="indent-no-border"><span><b>Description</b><br><br style="line-height:6px;"><a href="#MedicinalProductDefinition-medicinalproductdefinition-drug-product-dxpq-ex1" class="plainlink">Stelbatalol is formulated as an immediate-release, oral, solid dosage form in strengths of 20 mg of the free base equivalent. The 20 mg strength is presented as an orange, round, film coated tablet, debossed with '175' on one side.</a></span><br style="line-height:6px;"><br style="line-height:6px;"><span><b>Composition</b><br></span><br style="line-height:6px;"><span>Qualitative and Quantitative Composition</span><br><br style="line-height:6px;"><br style="line-height:6px;"><table class="rounded-corners white" id="tabularModeTable" style="width:70%;">
<tr>
<th><b>Components</b></th>
<th><b>Quantity (mg per unit)</b></th>
<th><b>Percentage (% w/w)</b></th>
<th><b>Function</b></th>
<th><b>Quality Standard</b></th>
</tr>
<tr>
<td><a href="#Ingredient-ingredient1" class="plainlink" title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    <code>
                        <reference>
                            <display value=&quot;Stelbatolol&quot;>">Stelbatolol</a></td>
<td><a href="#Ingredient-ingredient1" class="plainlink" title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    <strength>
                        <presentationRatio>
                            <numerator>
                                <value value=&quot;15.2&quot;>">15.2</a></td>
<td><a href="#Ingredient-ingredient1" class="plainlink" title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    <strength>
                        <concentrationQuantity>
                            <value value=&quot;97.9&quot;>">97.9</a>%</td>
<td>Active</td>
<td><a href="#SubstanceDefinition-substance1" class="plainlink" title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <grade>
                    <coding>
                        <display value=&quot;In-house&quot;>">In-house</a></td>
</tr>
<tr>
<td><a href="#Ingredient-excipient1" class="plainlink" title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    <code>
                        <reference>
                            <display value=&quot;Mannitol&quot;>">Mannitol</a></td>
<td><a href="#Ingredient-excipient1" class="plainlink" title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    <strength>
                        <presentationRatio>
                            <numerator>
                                <value value=&quot;145.0&quot;>">145.0</a></td>
<td><a href="#Ingredient-excipient1" class="plainlink" title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    <strength>
                        <concentrationQuantity>
                            <value value=&quot;1&quot;>">1</a>%</td>
<td>Diluent</td>
<td><a href="#SubstanceDefinition-sd-excipient1" class="plainlink" title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <grade>
                    <coding>
                        <display value=&quot;NF / Ph Eur&quot;>">NF / Ph Eur</a></td>
</tr>
<tr>
<td><a href="#Ingredient-excipient2" class="plainlink" title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    <code>
                        <reference>
                            <display value=&quot;Maize starch&quot;>">Maize starch</a></td>
<td><a href="#Ingredient-excipient2" class="plainlink" title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    <strength>
                        <presentationRatio>
                            <numerator>
                                <value value=&quot;13.8&quot;>">13.8</a></td>
<td><a href="#Ingredient-excipient2" class="plainlink" title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    <strength>
                        <concentrationQuantity>
                            <value value=&quot;0.5&quot;>">0.5</a>%</td>
<td>Disintegrant</td>
<td><a href="#SubstanceDefinition-sd-excipient2" class="plainlink" title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <grade>
                    <coding>
                        <display value=&quot;NF / Ph Eur&quot;>">NF / Ph Eur</a></td>
</tr>
<tr>
<td><a href="#Ingredient-excipient3" class="plainlink" title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    <code>
                        <reference>
                            <display value=&quot;Calcium carboxymethylcellulose&quot;>">Calcium carboxymethylcellulose</a></td>
<td><a href="#Ingredient-excipient3" class="plainlink" title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    <strength>
                        <presentationRatio>
                            <numerator>
                                <value value=&quot;4.0&quot;>">4.0</a></td>
<td><a href="#Ingredient-excipient3" class="plainlink" title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    <strength>
                        <concentrationQuantity>
                            <value value=&quot;0.25&quot;>">0.25</a>%</td>
<td>Disintegrant</td>
<td><a href="#SubstanceDefinition-sd-excipient3" class="plainlink" title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <grade>
                    <coding>
                        <display value=&quot;NF / Ph Eur&quot;>">NF / Ph Eur</a></td>
</tr>
<tr>
<td><a href="#Ingredient-excipient4" class="plainlink" title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    <code>
                        <reference>
                            <display value=&quot;Magnesium stearate&quot;>">Magnesium stearate</a></td>
<td><a href="#Ingredient-excipient4" class="plainlink" title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    <strength>
                        <presentationRatio>
                            <numerator>
                                <value value=&quot;2.0&quot;>">2.0</a></td>
<td><a href="#Ingredient-excipient4" class="plainlink" title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    <strength>
                        <concentrationQuantity>
                            <value value=&quot;0.35&quot;>">0.35</a>%</td>
<td>Lubricant</td>
<td><a href="#SubstanceDefinition-sd-excipient4" class="plainlink" title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <grade>
                    <coding>
                        <display value=&quot;NF / Ph Eur&quot;>">NF / Ph Eur</a></td>
</tr>
<tr>
<td><b>Nominal tablet Weight</b></td>
<td><b>180.0</b></td>
<td></td>
<td></td>
<td></td>
</tr>
</table><br style="line-height:6px;"><span><b>Container closure system</b><br></span><br style="line-height:6px;"><a href="#PackagedProductDefinition-packagedproductdefinition-dxpq-ex1" class="plainlink">The commercial primary pack is a high-density polyethylene (HDPE) bottle with a child-resistant polypropylene (PP) screw cap.  Inside the bottle is a desiccant, containing silica gel. Induction seal membranes provide additional tamper evidence. For further details of the packaging components, see ‘P.7 Container Closure System for Drug Product’. </a></div>
</div><br style="line-height:6px;"></div>
<div class="summaryHiddenOff"></div>
<div class="indent ppd summaryUnit" ondblclick="summaryHandler(event)"><sup class="rotate-left" title="arrow indicates that this PackagedProductDefinition resource points back to the parent MedicinalProductDefinition, instead of being linked forwards from it - via PackagedProductDefinition.packageFor">↸</sup><span class="debugOff">arrow indicates that this PackagedProductDefinition resource points back to the parent MedicinalProductDefinition, instead of being linked forwards from it - via PackagedProductDefinition.packageFor<br></span><span class="bold" title="PackagedProductDefinition (id: packagedproductdefinition-dxpq-ex1)(fullUrl: urn:uuid:88a068e2-1d97-337b-3b9c-4b3f14bc3923)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/PackagedProductDefinition-dxpq 

<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <id value=&quot;packagedproductdefinition-dxpq-ex1&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/PackagedProductDefinition-dxpq&quot;/>
                </meta>
                <packageFor>
                    <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                </packageFor>
                <!-- #174 -->
                <description value=&quot;The commercial primary pack is a high-density polyethylene (HDPE) bottle with a child-resistant polypropylene (PP) screw cap.  Inside the bottle is a desiccant, containing silica gel. Induction seal membranes provide additional tamper evidence. For further details of the packaging components, see ‘P.7 Container Closure System for Drug Product’. &quot;/>" id="PackagedProductDefinition-packagedproductdefinition-dxpq-ex1"><a class="plainLink">Package</a></span><span class="summaryShowsOff"></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/packagedproductdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/packagedproductdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/packagedproductdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: packagedproductdefinition-dxpq-ex1</div>
<div class="debugOff"> fullUrl: urn:uuid:88a068e2-1d97-337b-3b9c-4b3f14bc3923</div>
<div class="debugOff"></div>
<div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/PackagedProductDefinition-dxpq&quot;>">Profile: </span><span>http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/PackagedProductDefinition-dxpq</span></div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                ...
                <description value=&quot;The commercial primary pack is a high-density polyethylene (HDPE) bottle with a child-resistant polypropylene (PP) screw cap.  Inside the bottle is a desiccant, containing silica gel. Induction seal membranes provide additional tamper evidence. For further details of the packaging components, see ‘P.7 Container Closure System for Drug Product’. &quot;>">Description: </span><span>The commercial primary pack is a high-density polyethylene (HDPE) bottle with a child-resistant polypropylene (PP) screw cap.  Inside the bottle is a desiccant, containing silica gel. Induction seal membranes provide additional tamper evidence. For further details of the packaging components, see ‘P.7 Container Closure System for Drug Product’. </span></div>
</div>
</div>
<div class="indent ing summaryUnit" ondblclick="summaryHandler(event)"><a class="plainLink"><span class="bold" title="Ingredient (id: ingredient1)(fullUrl: urn:uuid:b89ed9d2-80f9-0cfb-70a1-5a6572e73a65)

<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <id value=&quot;ingredient1&quot;/>
                <status value=&quot;active&quot;/>
                <for>
                    <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                </for>
                <role>
                    <coding>
                        <system value=&quot;https://spor.ema.europa.eu/v1/lists/100000072050&quot;/>
                        <code value=&quot;100000072072&quot;/>
                        <display value=&quot;Active&quot;/>
                    </coding>
                </role>
                <substance>
                    <code>
                        <reference>
                            <reference value=&quot;SubstanceDefinition/substance1&quot;/>
                            <display value=&quot;Stelbatolol&quot;/>
                        </reference>
                    </code>
                    <strength>
                        <presentationRatio>
                            <numerator>
                                <value value=&quot;15.2&quot;/>
                                <unit value=&quot;mg&quot;/>
                                <!-- todo add ucum -->
                            </numerator>
                            <denominator>
                                <value value=&quot;1&quot;/>
                                <unit value=&quot;tablet&quot;/>
                            </denominator>
                        </presentationRatio>
                    </strength>
                    <strength>
                        <concentrationQuantity>
                            <value value=&quot;97.9&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </concentrationQuantity>
                    </strength>
                </substance>" id="Ingredient-ingredient1">Ingredient</span></a><span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <role>
                    <coding>
                        <system value=&quot;https://spor.ema.europa.eu/v1/lists/100000072050&quot;/>
                        <code value=&quot;100000072072&quot;/>
                        <display value=&quot;Active&quot;/>">Active<span class="greyOff"> [100000072072]</span><span class="greyOff"> (https://spor.ema.europa.eu/v1/lists/100000072050)</span></span></span><div class="summaryHiddenOff"><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/ingredient.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/ingredient.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/ingredient.html#tt-uml">R6</a>]</span><div class="debugOff">id: ingredient1</div>
<div class="debugOff"> fullUrl: urn:uuid:b89ed9d2-80f9-0cfb-70a1-5a6572e73a65</div>
<div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                ...
                <status value=&quot;active&quot;>">Status: </span><span>active</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                ...
                <role>
                    <coding>
                        <system value=&quot;https://spor.ema.europa.eu/v1/lists/100000072050&quot;/>
                        <code value=&quot;100000072072&quot;/>
                        <display value=&quot;Active&quot;/>
                    </coding>">Role: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <role>
                    <coding>
                        <system value=&quot;https://spor.ema.europa.eu/v1/lists/100000072050&quot;/>
                        <code value=&quot;100000072072&quot;/>
                        <display value=&quot;Active&quot;/>">Active<span class="greyOff"> [100000072072]</span><span class="greyOff"> (https://spor.ema.europa.eu/v1/lists/100000072050)</span></span></div>
</div>
<div class="indent ingsub"><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                ...
                <substance>
                    <code>
                        <reference>
                            <reference value=&quot;SubstanceDefinition/substance1&quot;/>
                            <display value=&quot;Stelbatolol&quot;/>
                        </reference>
                    </code>
                    <strength>
                        <presentationRatio>
                            <numerator>
                                <value value=&quot;15.2&quot;/>
                                <unit value=&quot;mg&quot;/>
                                <!-- todo add ucum -->
                            </numerator>
                            <denominator>
                                <value value=&quot;1&quot;/>
                                <unit value=&quot;tablet&quot;/>
                            </denominator>
                        </presentationRatio>
                    </strength>
                    <strength>
                        <concentrationQuantity>
                            <value value=&quot;97.9&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </concentrationQuantity>
                    </strength>">Substance</span><div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (Ingredient/code, id: ingredient1 fullUrl: urn:uuid:b89ed9d2-80f9-0cfb-70a1-5a6572e73a65)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: substance1)(fullUrl: urn:uuid:4cf2cbba-33e6-1124-9bf2-1c6756380474)

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;substance1&quot;/>
                <grade>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/grade&quot;/>
                        <code value=&quot;in-house&quot;/>
                        <display value=&quot;In-house&quot;/>
                    </coding>
                </grade>
                <name>
                    <name value=&quot;Stelbatolol&quot;/>
                </name>" id="SubstanceDefinition-substance1">Substance</span></a><span class="summaryShowsOff"><b> - Stelbatolol</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substancedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: substance1</div>
<div class="debugOff"> fullUrl: urn:uuid:4cf2cbba-33e6-1124-9bf2-1c6756380474</div>
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
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                ...
                <grade>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/grade&quot;/>
                        <code value=&quot;in-house&quot;/>
                        <display value=&quot;In-house&quot;/>
                    </coding>">Grade: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <grade>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/grade&quot;/>
                        <code value=&quot;in-house&quot;/>
                        <display value=&quot;In-house&quot;/>">In-house<span class="greyOff"> [in-house]</span><span class="greyOff"> (http://accumulus.org/fhir/code/grade)</span></span></span></div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
</div>
<div class="summaryHiddenOff">
<div class="indent org"><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    <code>
                        <reference>
                            ...
                            <display value=&quot;Stelbatolol&quot;>">Display: Stelbatolol</span></div>
</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    ...
                    <strength>
                        <presentationRatio>
                            <numerator>
                                <value value=&quot;15.2&quot;/>
                                <unit value=&quot;mg&quot;/>
                                <!-- todo add ucum -->
                            </numerator>
                            <denominator>
                                <value value=&quot;1&quot;/>
                                <unit value=&quot;tablet&quot;/>
                            </denominator>
                        </presentationRatio>">Strength</span><div class="indent ingsubstr">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    <strength>
                        <presentationRatio>
                            <numerator>
                                <value value=&quot;15.2&quot;/>
                                <unit value=&quot;mg&quot;/>
                                <!-- todo add ucum -->
                            </numerator>
                            <denominator>
                                <value value=&quot;1&quot;/>
                                <unit value=&quot;tablet&quot;/>
                            </denominator>">Presentation Strength: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    <strength>
                        <presentationRatio>
                            <numerator>
                                <value value=&quot;15.2&quot;/>
                                <unit value=&quot;mg&quot;/>
                                <!-- todo add ucum -->">15.2 mg</span> per <span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    <strength>
                        <presentationRatio>
                            ...
                            <denominator>
                                <value value=&quot;1&quot;/>
                                <unit value=&quot;tablet&quot;/>">1 tablet</span></span></div>
</div>
</div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    ...
                    <strength>
                        <concentrationQuantity>
                            <value value=&quot;97.9&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </concentrationQuantity>">Strength</span><div class="indent ingsubstr"><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    <strength>
                        <concentrationQuantity>
                            <value value=&quot;97.9&quot;/>
                            <unit value=&quot;% w/w&quot;/>">97.9% w/w</span></div>
</div>
</div>
</div>
<div class="summaryHiddenOff"></div>
</div>
<div class="indent ing summaryUnit" ondblclick="summaryHandler(event)"><a class="plainLink"><span class="bold" title="Ingredient (id: excipient1)(fullUrl: urn:uuid:b89ed9d3-80f9-0cfb-70a1-5a6572e73a65)

<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <id value=&quot;excipient1&quot;/>
                <status value=&quot;active&quot;/>
                <for>
                    <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                </for>
                <role>
                    <coding>
                        <system value=&quot;https://spor.ema.europa.eu/v1/lists/100000072050&quot;/>
                        <code value=&quot;100000072082&quot;/>
                        <display value=&quot;Excipient&quot;/>
                    </coding>
                </role>
                <function>
                    <coding>
                        <system value=&quot;https://spor.ema.europa.eu/v1/lists/1000000720XXX&quot;/>
                        <code value=&quot;1000000720XXX&quot;/>
                        <display value=&quot;Diluent&quot;/>
                    </coding>
                </function>
                <substance>
                    <code>
                        <reference>
                            <reference value=&quot;SubstanceDefinition/sd-excipient1&quot;/>
                            <display value=&quot;Mannitol&quot;/>
                        </reference>
                    </code>
                    <strength>
                        <presentationRatio>
                            <numerator>
                                <value value=&quot;145.0&quot;/>
                                <unit value=&quot;mg&quot;/>
                            </numerator>
                            <denominator>
                                <value value=&quot;1&quot;/>
                                <unit value=&quot;tablet&quot;/>
                            </denominator>
                        </presentationRatio>
                    </strength>
                    <strength>
                        <concentrationQuantity>
                            <value value=&quot;1&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </concentrationQuantity>
                    </strength>
                </substance>" id="Ingredient-excipient1">Ingredient</span></a><span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <role>
                    <coding>
                        <system value=&quot;https://spor.ema.europa.eu/v1/lists/100000072050&quot;/>
                        <code value=&quot;100000072082&quot;/>
                        <display value=&quot;Excipient&quot;/>">Excipient<span class="greyOff"> [100000072082]</span><span class="greyOff"> (https://spor.ema.europa.eu/v1/lists/100000072050)</span></span></span><div class="summaryHiddenOff"><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/ingredient.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/ingredient.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/ingredient.html#tt-uml">R6</a>]</span><div class="debugOff">id: excipient1</div>
<div class="debugOff"> fullUrl: urn:uuid:b89ed9d3-80f9-0cfb-70a1-5a6572e73a65</div>
<div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                ...
                <status value=&quot;active&quot;>">Status: </span><span>active</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                ...
                <role>
                    <coding>
                        <system value=&quot;https://spor.ema.europa.eu/v1/lists/100000072050&quot;/>
                        <code value=&quot;100000072082&quot;/>
                        <display value=&quot;Excipient&quot;/>
                    </coding>">Role: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <role>
                    <coding>
                        <system value=&quot;https://spor.ema.europa.eu/v1/lists/100000072050&quot;/>
                        <code value=&quot;100000072082&quot;/>
                        <display value=&quot;Excipient&quot;/>">Excipient<span class="greyOff"> [100000072082]</span><span class="greyOff"> (https://spor.ema.europa.eu/v1/lists/100000072050)</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                ...
                <function>
                    <coding>
                        <system value=&quot;https://spor.ema.europa.eu/v1/lists/1000000720XXX&quot;/>
                        <code value=&quot;1000000720XXX&quot;/>
                        <display value=&quot;Diluent&quot;/>
                    </coding>">Function: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <function>
                    <coding>
                        <system value=&quot;https://spor.ema.europa.eu/v1/lists/1000000720XXX&quot;/>
                        <code value=&quot;1000000720XXX&quot;/>
                        <display value=&quot;Diluent&quot;/>">Diluent<span class="greyOff"> [1000000720XXX]</span><span class="greyOff"> (https://spor.ema.europa.eu/v1/lists/1000000720XXX)</span></span></div>
</div>
<div class="indent ingsub"><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                ...
                <substance>
                    <code>
                        <reference>
                            <reference value=&quot;SubstanceDefinition/sd-excipient1&quot;/>
                            <display value=&quot;Mannitol&quot;/>
                        </reference>
                    </code>
                    <strength>
                        <presentationRatio>
                            <numerator>
                                <value value=&quot;145.0&quot;/>
                                <unit value=&quot;mg&quot;/>
                            </numerator>
                            <denominator>
                                <value value=&quot;1&quot;/>
                                <unit value=&quot;tablet&quot;/>
                            </denominator>
                        </presentationRatio>
                    </strength>
                    <strength>
                        <concentrationQuantity>
                            <value value=&quot;1&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </concentrationQuantity>
                    </strength>">Substance</span><div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (Ingredient/code, id: excipient1 fullUrl: urn:uuid:b89ed9d3-80f9-0cfb-70a1-5a6572e73a65)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: sd-excipient1)(fullUrl: urn:uuid:4cf2cbba-33e6-1124-9bf2-1c6756380475)

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;sd-excipient1&quot;/>
                <grade>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/grade&quot;/>
                        <code value=&quot;NF-PH-Eur&quot;/>
                        <display value=&quot;NF / Ph Eur&quot;/>
                    </coding>
                </grade>
                <name>
                    <name value=&quot;Mannitol&quot;/>
                </name>" id="SubstanceDefinition-sd-excipient1">Substance</span></a><span class="summaryShowsOff"><b> - Mannitol</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substancedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: sd-excipient1</div>
<div class="debugOff"> fullUrl: urn:uuid:4cf2cbba-33e6-1124-9bf2-1c6756380475</div>
<div class="summaryHiddenOff">
<div class="indent sbddetails">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <name>
                    <name value=&quot;Mannitol&quot;>">Name: </span><span><span>Mannitol</span></span></div>
</div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                ...
                <grade>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/grade&quot;/>
                        <code value=&quot;NF-PH-Eur&quot;/>
                        <display value=&quot;NF / Ph Eur&quot;/>
                    </coding>">Grade: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <grade>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/grade&quot;/>
                        <code value=&quot;NF-PH-Eur&quot;/>
                        <display value=&quot;NF / Ph Eur&quot;/>">NF / Ph Eur<span class="greyOff"> [NF-PH-Eur]</span><span class="greyOff"> (http://accumulus.org/fhir/code/grade)</span></span></span></div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
</div>
<div class="summaryHiddenOff">
<div class="indent org"><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    <code>
                        <reference>
                            ...
                            <display value=&quot;Mannitol&quot;>">Display: Mannitol</span></div>
</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    ...
                    <strength>
                        <presentationRatio>
                            <numerator>
                                <value value=&quot;145.0&quot;/>
                                <unit value=&quot;mg&quot;/>
                            </numerator>
                            <denominator>
                                <value value=&quot;1&quot;/>
                                <unit value=&quot;tablet&quot;/>
                            </denominator>
                        </presentationRatio>">Strength</span><div class="indent ingsubstr">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    <strength>
                        <presentationRatio>
                            <numerator>
                                <value value=&quot;145.0&quot;/>
                                <unit value=&quot;mg&quot;/>
                            </numerator>
                            <denominator>
                                <value value=&quot;1&quot;/>
                                <unit value=&quot;tablet&quot;/>
                            </denominator>">Presentation Strength: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    <strength>
                        <presentationRatio>
                            <numerator>
                                <value value=&quot;145.0&quot;/>
                                <unit value=&quot;mg&quot;/>">145.0 mg</span> per <span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    <strength>
                        <presentationRatio>
                            ...
                            <denominator>
                                <value value=&quot;1&quot;/>
                                <unit value=&quot;tablet&quot;/>">1 tablet</span></span></div>
</div>
</div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    ...
                    <strength>
                        <concentrationQuantity>
                            <value value=&quot;1&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </concentrationQuantity>">Strength</span><div class="indent ingsubstr"><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    <strength>
                        <concentrationQuantity>
                            <value value=&quot;1&quot;/>
                            <unit value=&quot;% w/w&quot;/>">1% w/w</span></div>
</div>
</div>
</div>
<div class="summaryHiddenOff"></div>
</div>
<div class="indent ing summaryUnit" ondblclick="summaryHandler(event)"><a class="plainLink"><span class="bold" title="Ingredient (id: excipient2)(fullUrl: urn:uuid:b89ed9d2-80f9-0cfb-71a1-5a6572e73a65)

<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <id value=&quot;excipient2&quot;/>
                <status value=&quot;active&quot;/>
                <for>
                    <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                </for>
                <role>
                    <coding>
                        <system value=&quot;https://spor.ema.europa.eu/v1/lists/100000072050&quot;/>
                        <code value=&quot;100000072082&quot;/>
                        <display value=&quot;Excipient&quot;/>
                    </coding>
                </role>
                <function>
                    <coding>
                        <system value=&quot;https://spor.ema.europa.eu/v1/lists/1000000720XXX&quot;/>
                        <code value=&quot;1000000720XXX&quot;/>
                        <display value=&quot;Disintegrant&quot;/>
                    </coding>
                </function>
                <substance>
                    <code>
                        <reference>
                            <reference value=&quot;SubstanceDefinition/sd-excipient2&quot;/>
                            <display value=&quot;Maize starch&quot;/>
                        </reference>
                    </code>
                    <strength>
                        <presentationRatio>
                            <numerator>
                                <value value=&quot;13.8&quot;/>
                                <unit value=&quot;mg&quot;/>
                            </numerator>
                            <denominator>
                                <value value=&quot;1&quot;/>
                                <unit value=&quot;tablet&quot;/>
                            </denominator>
                        </presentationRatio>
                    </strength>
                    <strength>
                        <concentrationQuantity>
                            <value value=&quot;0.5&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </concentrationQuantity>
                    </strength>
                </substance>" id="Ingredient-excipient2">Ingredient</span></a><span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <role>
                    <coding>
                        <system value=&quot;https://spor.ema.europa.eu/v1/lists/100000072050&quot;/>
                        <code value=&quot;100000072082&quot;/>
                        <display value=&quot;Excipient&quot;/>">Excipient<span class="greyOff"> [100000072082]</span><span class="greyOff"> (https://spor.ema.europa.eu/v1/lists/100000072050)</span></span></span><div class="summaryHiddenOff"><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/ingredient.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/ingredient.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/ingredient.html#tt-uml">R6</a>]</span><div class="debugOff">id: excipient2</div>
<div class="debugOff"> fullUrl: urn:uuid:b89ed9d2-80f9-0cfb-71a1-5a6572e73a65</div>
<div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                ...
                <status value=&quot;active&quot;>">Status: </span><span>active</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                ...
                <role>
                    <coding>
                        <system value=&quot;https://spor.ema.europa.eu/v1/lists/100000072050&quot;/>
                        <code value=&quot;100000072082&quot;/>
                        <display value=&quot;Excipient&quot;/>
                    </coding>">Role: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <role>
                    <coding>
                        <system value=&quot;https://spor.ema.europa.eu/v1/lists/100000072050&quot;/>
                        <code value=&quot;100000072082&quot;/>
                        <display value=&quot;Excipient&quot;/>">Excipient<span class="greyOff"> [100000072082]</span><span class="greyOff"> (https://spor.ema.europa.eu/v1/lists/100000072050)</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                ...
                <function>
                    <coding>
                        <system value=&quot;https://spor.ema.europa.eu/v1/lists/1000000720XXX&quot;/>
                        <code value=&quot;1000000720XXX&quot;/>
                        <display value=&quot;Disintegrant&quot;/>
                    </coding>">Function: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <function>
                    <coding>
                        <system value=&quot;https://spor.ema.europa.eu/v1/lists/1000000720XXX&quot;/>
                        <code value=&quot;1000000720XXX&quot;/>
                        <display value=&quot;Disintegrant&quot;/>">Disintegrant<span class="greyOff"> [1000000720XXX]</span><span class="greyOff"> (https://spor.ema.europa.eu/v1/lists/1000000720XXX)</span></span></div>
</div>
<div class="indent ingsub"><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                ...
                <substance>
                    <code>
                        <reference>
                            <reference value=&quot;SubstanceDefinition/sd-excipient2&quot;/>
                            <display value=&quot;Maize starch&quot;/>
                        </reference>
                    </code>
                    <strength>
                        <presentationRatio>
                            <numerator>
                                <value value=&quot;13.8&quot;/>
                                <unit value=&quot;mg&quot;/>
                            </numerator>
                            <denominator>
                                <value value=&quot;1&quot;/>
                                <unit value=&quot;tablet&quot;/>
                            </denominator>
                        </presentationRatio>
                    </strength>
                    <strength>
                        <concentrationQuantity>
                            <value value=&quot;0.5&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </concentrationQuantity>
                    </strength>">Substance</span><div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (Ingredient/code, id: excipient2 fullUrl: urn:uuid:b89ed9d2-80f9-0cfb-71a1-5a6572e73a65)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: sd-excipient2)(fullUrl: urn:uuid:4cf2cbba-33e6-1124-9bf2-1c6756380476)

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;sd-excipient2&quot;/>
                <grade>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/grade&quot;/>
                        <code value=&quot;NF-PH-Eur&quot;/>
                        <display value=&quot;NF / Ph Eur&quot;/>
                    </coding>
                </grade>
                <name>
                    <name value=&quot;Maize starch&quot;/>
                </name>" id="SubstanceDefinition-sd-excipient2">Substance</span></a><span class="summaryShowsOff"><b> - Maize starch</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substancedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: sd-excipient2</div>
<div class="debugOff"> fullUrl: urn:uuid:4cf2cbba-33e6-1124-9bf2-1c6756380476</div>
<div class="summaryHiddenOff">
<div class="indent sbddetails">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <name>
                    <name value=&quot;Maize starch&quot;>">Name: </span><span><span>Maize starch</span></span></div>
</div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                ...
                <grade>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/grade&quot;/>
                        <code value=&quot;NF-PH-Eur&quot;/>
                        <display value=&quot;NF / Ph Eur&quot;/>
                    </coding>">Grade: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <grade>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/grade&quot;/>
                        <code value=&quot;NF-PH-Eur&quot;/>
                        <display value=&quot;NF / Ph Eur&quot;/>">NF / Ph Eur<span class="greyOff"> [NF-PH-Eur]</span><span class="greyOff"> (http://accumulus.org/fhir/code/grade)</span></span></span></div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
</div>
<div class="summaryHiddenOff">
<div class="indent org"><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    <code>
                        <reference>
                            ...
                            <display value=&quot;Maize starch&quot;>">Display: Maize starch</span></div>
</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    ...
                    <strength>
                        <presentationRatio>
                            <numerator>
                                <value value=&quot;13.8&quot;/>
                                <unit value=&quot;mg&quot;/>
                            </numerator>
                            <denominator>
                                <value value=&quot;1&quot;/>
                                <unit value=&quot;tablet&quot;/>
                            </denominator>
                        </presentationRatio>">Strength</span><div class="indent ingsubstr">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    <strength>
                        <presentationRatio>
                            <numerator>
                                <value value=&quot;13.8&quot;/>
                                <unit value=&quot;mg&quot;/>
                            </numerator>
                            <denominator>
                                <value value=&quot;1&quot;/>
                                <unit value=&quot;tablet&quot;/>
                            </denominator>">Presentation Strength: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    <strength>
                        <presentationRatio>
                            <numerator>
                                <value value=&quot;13.8&quot;/>
                                <unit value=&quot;mg&quot;/>">13.8 mg</span> per <span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    <strength>
                        <presentationRatio>
                            ...
                            <denominator>
                                <value value=&quot;1&quot;/>
                                <unit value=&quot;tablet&quot;/>">1 tablet</span></span></div>
</div>
</div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    ...
                    <strength>
                        <concentrationQuantity>
                            <value value=&quot;0.5&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </concentrationQuantity>">Strength</span><div class="indent ingsubstr"><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    <strength>
                        <concentrationQuantity>
                            <value value=&quot;0.5&quot;/>
                            <unit value=&quot;% w/w&quot;/>">0.5% w/w</span></div>
</div>
</div>
</div>
<div class="summaryHiddenOff"></div>
</div>
<div class="indent ing summaryUnit" ondblclick="summaryHandler(event)"><a class="plainLink"><span class="bold" title="Ingredient (id: excipient3)(fullUrl: urn:uuid:b89ed9d2-80f9-0cfb-70a1-5a6572e73a66)

<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <id value=&quot;excipient3&quot;/>
                <status value=&quot;active&quot;/>
                <for>
                    <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                </for>
                <role>
                    <coding>
                        <system value=&quot;https://spor.ema.europa.eu/v1/lists/100000072050&quot;/>
                        <code value=&quot;100000072082&quot;/>
                        <display value=&quot;Excipient&quot;/>
                    </coding>
                </role>
                <function>
                    <coding>
                        <system value=&quot;https://spor.ema.europa.eu/v1/lists/1000000720XXX&quot;/>
                        <code value=&quot;1000000720XXX&quot;/>
                        <display value=&quot;Disintegrant&quot;/>
                    </coding>
                </function>
                <substance>
                    <code>
                        <reference>
                            <reference value=&quot;SubstanceDefinition/sd-excipient3&quot;/>
                            <display value=&quot;Calcium carboxymethylcellulose&quot;/>
                        </reference>
                    </code>
                    <strength>
                        <presentationRatio>
                            <numerator>
                                <value value=&quot;4.0&quot;/>
                                <unit value=&quot;mg&quot;/>
                            </numerator>
                            <denominator>
                                <value value=&quot;1&quot;/>
                                <unit value=&quot;tablet&quot;/>
                            </denominator>
                        </presentationRatio>
                    </strength>
                    <strength>
                        <concentrationQuantity>
                            <value value=&quot;0.25&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </concentrationQuantity>
                    </strength>
                </substance>" id="Ingredient-excipient3">Ingredient</span></a><span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <role>
                    <coding>
                        <system value=&quot;https://spor.ema.europa.eu/v1/lists/100000072050&quot;/>
                        <code value=&quot;100000072082&quot;/>
                        <display value=&quot;Excipient&quot;/>">Excipient<span class="greyOff"> [100000072082]</span><span class="greyOff"> (https://spor.ema.europa.eu/v1/lists/100000072050)</span></span></span><div class="summaryHiddenOff"><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/ingredient.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/ingredient.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/ingredient.html#tt-uml">R6</a>]</span><div class="debugOff">id: excipient3</div>
<div class="debugOff"> fullUrl: urn:uuid:b89ed9d2-80f9-0cfb-70a1-5a6572e73a66</div>
<div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                ...
                <status value=&quot;active&quot;>">Status: </span><span>active</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                ...
                <role>
                    <coding>
                        <system value=&quot;https://spor.ema.europa.eu/v1/lists/100000072050&quot;/>
                        <code value=&quot;100000072082&quot;/>
                        <display value=&quot;Excipient&quot;/>
                    </coding>">Role: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <role>
                    <coding>
                        <system value=&quot;https://spor.ema.europa.eu/v1/lists/100000072050&quot;/>
                        <code value=&quot;100000072082&quot;/>
                        <display value=&quot;Excipient&quot;/>">Excipient<span class="greyOff"> [100000072082]</span><span class="greyOff"> (https://spor.ema.europa.eu/v1/lists/100000072050)</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                ...
                <function>
                    <coding>
                        <system value=&quot;https://spor.ema.europa.eu/v1/lists/1000000720XXX&quot;/>
                        <code value=&quot;1000000720XXX&quot;/>
                        <display value=&quot;Disintegrant&quot;/>
                    </coding>">Function: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <function>
                    <coding>
                        <system value=&quot;https://spor.ema.europa.eu/v1/lists/1000000720XXX&quot;/>
                        <code value=&quot;1000000720XXX&quot;/>
                        <display value=&quot;Disintegrant&quot;/>">Disintegrant<span class="greyOff"> [1000000720XXX]</span><span class="greyOff"> (https://spor.ema.europa.eu/v1/lists/1000000720XXX)</span></span></div>
</div>
<div class="indent ingsub"><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                ...
                <substance>
                    <code>
                        <reference>
                            <reference value=&quot;SubstanceDefinition/sd-excipient3&quot;/>
                            <display value=&quot;Calcium carboxymethylcellulose&quot;/>
                        </reference>
                    </code>
                    <strength>
                        <presentationRatio>
                            <numerator>
                                <value value=&quot;4.0&quot;/>
                                <unit value=&quot;mg&quot;/>
                            </numerator>
                            <denominator>
                                <value value=&quot;1&quot;/>
                                <unit value=&quot;tablet&quot;/>
                            </denominator>
                        </presentationRatio>
                    </strength>
                    <strength>
                        <concentrationQuantity>
                            <value value=&quot;0.25&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </concentrationQuantity>
                    </strength>">Substance</span><div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (Ingredient/code, id: excipient3 fullUrl: urn:uuid:b89ed9d2-80f9-0cfb-70a1-5a6572e73a66)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: sd-excipient3)(fullUrl: urn:uuid:4cf2cbba-33e6-1124-9bf2-1c6756380477)

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;sd-excipient3&quot;/>
                <grade>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/grade&quot;/>
                        <code value=&quot;NF-PH-Eur&quot;/>
                        <display value=&quot;NF / Ph Eur&quot;/>
                    </coding>
                </grade>
                <name>
                    <name value=&quot;Calcium carboxymethylcellulose&quot;/>
                </name>" id="SubstanceDefinition-sd-excipient3">Substance</span></a><span class="summaryShowsOff"><b> - Calcium carboxymethylcellulose</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substancedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: sd-excipient3</div>
<div class="debugOff"> fullUrl: urn:uuid:4cf2cbba-33e6-1124-9bf2-1c6756380477</div>
<div class="summaryHiddenOff">
<div class="indent sbddetails">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <name>
                    <name value=&quot;Calcium carboxymethylcellulose&quot;>">Name: </span><span><span>Calcium carboxymethylcellulose</span></span></div>
</div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                ...
                <grade>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/grade&quot;/>
                        <code value=&quot;NF-PH-Eur&quot;/>
                        <display value=&quot;NF / Ph Eur&quot;/>
                    </coding>">Grade: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <grade>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/grade&quot;/>
                        <code value=&quot;NF-PH-Eur&quot;/>
                        <display value=&quot;NF / Ph Eur&quot;/>">NF / Ph Eur<span class="greyOff"> [NF-PH-Eur]</span><span class="greyOff"> (http://accumulus.org/fhir/code/grade)</span></span></span></div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
</div>
<div class="summaryHiddenOff">
<div class="indent org"><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    <code>
                        <reference>
                            ...
                            <display value=&quot;Calcium carboxymethylcellulose&quot;>">Display: Calcium carboxymethylcellulose</span></div>
</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    ...
                    <strength>
                        <presentationRatio>
                            <numerator>
                                <value value=&quot;4.0&quot;/>
                                <unit value=&quot;mg&quot;/>
                            </numerator>
                            <denominator>
                                <value value=&quot;1&quot;/>
                                <unit value=&quot;tablet&quot;/>
                            </denominator>
                        </presentationRatio>">Strength</span><div class="indent ingsubstr">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    <strength>
                        <presentationRatio>
                            <numerator>
                                <value value=&quot;4.0&quot;/>
                                <unit value=&quot;mg&quot;/>
                            </numerator>
                            <denominator>
                                <value value=&quot;1&quot;/>
                                <unit value=&quot;tablet&quot;/>
                            </denominator>">Presentation Strength: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    <strength>
                        <presentationRatio>
                            <numerator>
                                <value value=&quot;4.0&quot;/>
                                <unit value=&quot;mg&quot;/>">4.0 mg</span> per <span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    <strength>
                        <presentationRatio>
                            ...
                            <denominator>
                                <value value=&quot;1&quot;/>
                                <unit value=&quot;tablet&quot;/>">1 tablet</span></span></div>
</div>
</div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    ...
                    <strength>
                        <concentrationQuantity>
                            <value value=&quot;0.25&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </concentrationQuantity>">Strength</span><div class="indent ingsubstr"><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    <strength>
                        <concentrationQuantity>
                            <value value=&quot;0.25&quot;/>
                            <unit value=&quot;% w/w&quot;/>">0.25% w/w</span></div>
</div>
</div>
</div>
<div class="summaryHiddenOff"></div>
</div>
<div class="indent ing summaryUnit" ondblclick="summaryHandler(event)"><a class="plainLink"><span class="bold" title="Ingredient (id: excipient4)(fullUrl: urn:uuid:b89ed9d3-80f9-0cfb-70a1-5a6572e73a66)

<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <id value=&quot;excipient4&quot;/>
                <status value=&quot;active&quot;/>
                <for>
                    <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                </for>
                <role>
                    <coding>
                        <system value=&quot;https://spor.ema.europa.eu/v1/lists/100000072050&quot;/>
                        <code value=&quot;100000072082&quot;/>
                        <display value=&quot;Excipient&quot;/>
                    </coding>
                </role>
                <function>
                    <coding>
                        <system value=&quot;https://spor.ema.europa.eu/v1/lists/1000000720XXX&quot;/>
                        <code value=&quot;1000000720XXX&quot;/>
                        <display value=&quot;Lubricant&quot;/>
                    </coding>
                </function>
                <substance>
                    <code>
                        <reference>
                            <reference value=&quot;SubstanceDefinition/sd-excipient4&quot;/>
                            <display value=&quot;Magnesium stearate&quot;/>
                        </reference>
                    </code>
                    <strength>
                        <presentationRatio>
                            <numerator>
                                <value value=&quot;2.0&quot;/>
                                <unit value=&quot;mg&quot;/>
                            </numerator>
                            <denominator>
                                <value value=&quot;1&quot;/>
                                <unit value=&quot;tablet&quot;/>
                            </denominator>
                        </presentationRatio>
                    </strength>
                    <strength>
                        <concentrationQuantity>
                            <value value=&quot;0.35&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </concentrationQuantity>
                    </strength>
                </substance>" id="Ingredient-excipient4">Ingredient</span></a><span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <role>
                    <coding>
                        <system value=&quot;https://spor.ema.europa.eu/v1/lists/100000072050&quot;/>
                        <code value=&quot;100000072082&quot;/>
                        <display value=&quot;Excipient&quot;/>">Excipient<span class="greyOff"> [100000072082]</span><span class="greyOff"> (https://spor.ema.europa.eu/v1/lists/100000072050)</span></span></span><div class="summaryHiddenOff"><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/ingredient.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/ingredient.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/ingredient.html#tt-uml">R6</a>]</span><div class="debugOff">id: excipient4</div>
<div class="debugOff"> fullUrl: urn:uuid:b89ed9d3-80f9-0cfb-70a1-5a6572e73a66</div>
<div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                ...
                <status value=&quot;active&quot;>">Status: </span><span>active</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                ...
                <role>
                    <coding>
                        <system value=&quot;https://spor.ema.europa.eu/v1/lists/100000072050&quot;/>
                        <code value=&quot;100000072082&quot;/>
                        <display value=&quot;Excipient&quot;/>
                    </coding>">Role: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <role>
                    <coding>
                        <system value=&quot;https://spor.ema.europa.eu/v1/lists/100000072050&quot;/>
                        <code value=&quot;100000072082&quot;/>
                        <display value=&quot;Excipient&quot;/>">Excipient<span class="greyOff"> [100000072082]</span><span class="greyOff"> (https://spor.ema.europa.eu/v1/lists/100000072050)</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                ...
                <function>
                    <coding>
                        <system value=&quot;https://spor.ema.europa.eu/v1/lists/1000000720XXX&quot;/>
                        <code value=&quot;1000000720XXX&quot;/>
                        <display value=&quot;Lubricant&quot;/>
                    </coding>">Function: </span><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <function>
                    <coding>
                        <system value=&quot;https://spor.ema.europa.eu/v1/lists/1000000720XXX&quot;/>
                        <code value=&quot;1000000720XXX&quot;/>
                        <display value=&quot;Lubricant&quot;/>">Lubricant<span class="greyOff"> [1000000720XXX]</span><span class="greyOff"> (https://spor.ema.europa.eu/v1/lists/1000000720XXX)</span></span></div>
</div>
<div class="indent ingsub"><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                ...
                <substance>
                    <code>
                        <reference>
                            <reference value=&quot;SubstanceDefinition/sd-excipient4&quot;/>
                            <display value=&quot;Magnesium stearate&quot;/>
                        </reference>
                    </code>
                    <strength>
                        <presentationRatio>
                            <numerator>
                                <value value=&quot;2.0&quot;/>
                                <unit value=&quot;mg&quot;/>
                            </numerator>
                            <denominator>
                                <value value=&quot;1&quot;/>
                                <unit value=&quot;tablet&quot;/>
                            </denominator>
                        </presentationRatio>
                    </strength>
                    <strength>
                        <concentrationQuantity>
                            <value value=&quot;0.35&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </concentrationQuantity>
                    </strength>">Substance</span><div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (Ingredient/code, id: excipient4 fullUrl: urn:uuid:b89ed9d3-80f9-0cfb-70a1-5a6572e73a66)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: sd-excipient4)(fullUrl: urn:uuid:4cf2cbba-33e6-1124-9bf2-1c6756380478)

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;sd-excipient4&quot;/>
                <grade>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/grade&quot;/>
                        <code value=&quot;NF-PH-Eur&quot;/>
                        <display value=&quot;NF / Ph Eur&quot;/>
                    </coding>
                </grade>
                <name>
                    <name value=&quot;Magnesium stearate&quot;/>
                </name>" id="SubstanceDefinition-sd-excipient4">Substance</span></a><span class="summaryShowsOff"><b> - Magnesium stearate</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substancedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: sd-excipient4</div>
<div class="debugOff"> fullUrl: urn:uuid:4cf2cbba-33e6-1124-9bf2-1c6756380478</div>
<div class="summaryHiddenOff">
<div class="indent sbddetails">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <name>
                    <name value=&quot;Magnesium stearate&quot;>">Name: </span><span><span>Magnesium stearate</span></span></div>
</div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                ...
                <grade>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/grade&quot;/>
                        <code value=&quot;NF-PH-Eur&quot;/>
                        <display value=&quot;NF / Ph Eur&quot;/>
                    </coding>">Grade: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <grade>
                    <coding>
                        <system value=&quot;http://accumulus.org/fhir/code/grade&quot;/>
                        <code value=&quot;NF-PH-Eur&quot;/>
                        <display value=&quot;NF / Ph Eur&quot;/>">NF / Ph Eur<span class="greyOff"> [NF-PH-Eur]</span><span class="greyOff"> (http://accumulus.org/fhir/code/grade)</span></span></span></div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
</div>
<div class="summaryHiddenOff">
<div class="indent org"><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    <code>
                        <reference>
                            ...
                            <display value=&quot;Magnesium stearate&quot;>">Display: Magnesium stearate</span></div>
</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    ...
                    <strength>
                        <presentationRatio>
                            <numerator>
                                <value value=&quot;2.0&quot;/>
                                <unit value=&quot;mg&quot;/>
                            </numerator>
                            <denominator>
                                <value value=&quot;1&quot;/>
                                <unit value=&quot;tablet&quot;/>
                            </denominator>
                        </presentationRatio>">Strength</span><div class="indent ingsubstr">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    <strength>
                        <presentationRatio>
                            <numerator>
                                <value value=&quot;2.0&quot;/>
                                <unit value=&quot;mg&quot;/>
                            </numerator>
                            <denominator>
                                <value value=&quot;1&quot;/>
                                <unit value=&quot;tablet&quot;/>
                            </denominator>">Presentation Strength: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    <strength>
                        <presentationRatio>
                            <numerator>
                                <value value=&quot;2.0&quot;/>
                                <unit value=&quot;mg&quot;/>">2.0 mg</span> per <span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    <strength>
                        <presentationRatio>
                            ...
                            <denominator>
                                <value value=&quot;1&quot;/>
                                <unit value=&quot;tablet&quot;/>">1 tablet</span></span></div>
</div>
</div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    ...
                    <strength>
                        <concentrationQuantity>
                            <value value=&quot;0.35&quot;/>
                            <unit value=&quot;% w/w&quot;/>
                        </concentrationQuantity>">Strength</span><div class="indent ingsubstr"><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <substance>
                    <strength>
                        <concentrationQuantity>
                            <value value=&quot;0.35&quot;/>
                            <unit value=&quot;% w/w&quot;/>">0.35% w/w</span></div>
</div>
</div>
</div>
<div class="summaryHiddenOff"></div>
</div>
<div class="summaryHiddenOff"></div>
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
		First resource in bundle:MedicinalProductDefinition
		Single resource bundle:false
		Single resource bundle Not Patient Or Bundle:false
		Single resource Not Patient:false
		Patient document:false
		General Bundle:false
		Not patient related:true
		=>Patient Centric Mode:false
		SubstanceDef Centric Mode:false
		Assumed profile:--></html>
