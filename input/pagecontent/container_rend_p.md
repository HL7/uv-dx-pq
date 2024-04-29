The HTML rendering below shows a synthetic Quality data example for Common Technical Document (CTD) Module 3: Quality, section 3.2.P.7 Container Closure System.
<html>
<body>
<div class="divBody">
<p>
						This is the same data as in the example files here in <a href="Bundle-bundle-container-closure-system-pq-ex1-prod.xml.html">xml</a> and in <a href="Bundle-bundle-container-closure-system-pq-ex1-prod.json.html">json</a>, presented for easier viewing.
						Hovering on words below will show the corresponding sections of the underlying data.
					</p>
</div>
<div class="greyable">
<div class="divBody">
<div style="position:relative" class="summaryUnit">
<div class="debugOffBorder">
<div class="bundleBorder">
<div class="debugOff">
<div class="bundle"><a class="plainLink"><span class="bold" title="Bundle (id: bundle-container-closure-system-pq-ex1-prod)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-container-closure-system-pq 

<Bundle>
    <id value=&quot;bundle-container-closure-system-pq-ex1-prod&quot;/>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-container-closure-system-pq&quot;/>
    </meta>
    <type value=&quot;collection&quot;/>
    <!-- MedicinalProductDefinition - the main resource in any product scenario -->
    <entry>
        <fullUrl value=&quot;urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d5&quot;/>
        <resource>
            <!-- Section 1.1 - DP Identification -->
            <MedicinalProductDefinition>
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
    <!-- Section 10 - Container Closure System #1 - bottle -->
    <entry>
        <fullUrl value=&quot;urn:uuid:88a068e2-1d97-337b-3b9c-4b3f14bc3923&quot;/>
        <resource>
            <PackagedProductDefinition>
                <id value=&quot;packagedproductdefinition-dxpq-ex1&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/PackagedProductDefinition-drug-pq&quot;/>
                </meta>
                <packageFor>
                    <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                </packageFor>
                <containedItemQuantity>
                    <value value=&quot;28&quot;/>
                    <unit value=&quot;tablets&quot;/>
                </containedItemQuantity>
                <description value=&quot;The container closure system consists of a bottle and closure.  The bottle is manufactured from white high-density polyethylene (HDPE). The 2-piece child-resistant closure is manufactured from polypropylene (PP) and contains a multi-layer aluminum foil seal liner for tamper evidence.  The bottle and closure provide an adequate barrier to moisture and light, which protect the drug product.  The container closure system has demonstrated suitability for storage of the drug product based on stability studies shown in 3.2.P.8.3.      The HDPE bottle has demonstrated compliance with USP <661> Plastic Packaging Systems and Their Materials of Construction and PhEur 3.1.3 Polyolefins.  The product contacting aluminum foil seal liner has demonstrated compliance with USP <661>. The vendor has confirmed compliance with 21 CFR 175.300, in addition to compliance with limitation of heavy metals per EU 94/62/EC, Article 11. The container closure system has demonstrated child resistance in compliance with 16 CFR 1700. Detailed information pertaining to the bottle and closure is described in 3.2.P.7.&quot;/>
                <packaging>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/packaging-type&quot;/>
                            <code value=&quot;100000073497&quot;/>
                            <display value=&quot;Bottle&quot;/>
                        </coding>
                    </type>
                    <material>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/package-material&quot;/>
                            <code value=&quot;200000003215&quot;/>
                            <display value=&quot;High Density PolyEthylene&quot;/>
                        </coding>
                    </material>
                    <manufacturer>
                        <display value=&quot;Container Co. of America&quot;/>
                    </manufacturer>
                    <property>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                <code value=&quot;Color&quot;/>
                                <display value=&quot;Color&quot;/>
                            </coding>
                        </type>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/drug-substance-or-product-color&quot;/>
                                <code value=&quot;white&quot;/>
                                <display value=&quot;White&quot;/>
                            </coding>
                        </valueCodeableConcept>
                    </property>
                    <property>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                <code value=&quot;Quality Standard&quot;/>
                                <display value=&quot;Quality Standard&quot;/>
                            </coding>
                        </type>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                <code value=&quot;USP&quot;/>
                                <display value=&quot;USP <661> Plastic Packaging Systems and Their Materials of Construction&quot;/>
                            </coding>
                        </valueCodeableConcept>
                    </property>
                    <property>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                <code value=&quot;Quality Standard&quot;/>
                                <display value=&quot;Quality Standard&quot;/>
                            </coding>
                        </type>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                <code value=&quot;PhEur&quot;/>
                                <display value=&quot;PhEur 3.1.3 Polyolefins&quot;/>
                            </coding>
                        </valueCodeableConcept>
                    </property>
                    <packaging>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/container-closure-type&quot;/>
                                <code value=&quot;Child Proof Cap&quot;/>
                                <display value=&quot;Child Proof Cap&quot;/>
                            </coding>
                        </type>
                        <componentPart value=&quot;true&quot;/>
                        <material>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/package-material&quot;/>
                                <code value=&quot;200000003219&quot;/>
                                <display value=&quot;PolyPropylene&quot;/>
                            </coding>
                        </material>
                        <property>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                    <code value=&quot;Quality Standard&quot;/>
                                    <display value=&quot;Quality Standard&quot;/>
                                </coding>
                            </type>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                    <code value=&quot;16CFR1700&quot;/>
                                    <display value=&quot;16 CFR 1700&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </property>
                        <packaging>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/container-closure-type&quot;/>
                                    <code value=&quot;Multi-layer Foil Seal Liner&quot;/>
                                    <display value=&quot;Multi-layer Foil Seal Liner&quot;/>
                                </coding>
                            </type>
                            <componentPart value=&quot;true&quot;/>
                            <material>
                                <coding>
                                    <system value=&quot;http://hl7.org/fhir/package-material&quot;/>
                                    <code value=&quot;200000003200&quot;/>
                                    <display value=&quot;Aluminium&quot;/>
                                </coding>
                            </material>
                            <property>
                                <type>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                        <code value=&quot;Quality Standard&quot;/>
                                        <display value=&quot;Quality Standard&quot;/>
                                    </coding>
                                </type>
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                        <code value=&quot;21CFR175.300&quot;/>
                                        <display value=&quot;21 CFR 175.300&quot;/>
                                    </coding>
                                </valueCodeableConcept>
                            </property>
                            <property>
                                <type>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                        <code value=&quot;Quality Standard&quot;/>
                                        <display value=&quot;Quality Standard&quot;/>
                                    </coding>
                                </type>
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                        <code value=&quot;EU-94-62-EC&quot;/>
                                        <display value=&quot;EU 94/62/EC&quot;/>
                                    </coding>
                                </valueCodeableConcept>
                            </property>
                        </packaging>
                    </packaging>
                </packaging>
            </PackagedProductDefinition>
        </resource>
    </entry>
    <!-- Section 10 - Container Closure System #1 - blister -->
    <entry>
        <fullUrl value=&quot;urn:uuid:88a068e2-1d97-337b-3b9c-4b3f24bc3923&quot;/>
        <resource>
            <PackagedProductDefinition>
                <id value=&quot;packagedproductdefinition-dxpq-ex2&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/PackagedProductDefinition-drug-pq&quot;/>
                </meta>
                <packageFor>
                    <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                </packageFor>
                <containedItemQuantity>
                    <value value=&quot;28&quot;/>
                    <unit value=&quot;tablets&quot;/>
                </containedItemQuantity>
                <description value=&quot;The container closure system consists of a blister film of 150 µm thick polyvinyl chloride (PVC) and a blister lidding of 10 µm hard temper push-through aluminum foil with a product contact heat seal layer of polyvinyl chloride (PVC) laminated in Aclar. The PVC blister film effectively seals with the aluminum foil heat seal layer during final packaging.  The blister film and foil materials have demonstrated suitability for product storage based on stability studies shown in 3.2.P.8.3 and additional testing.                The film has demonstrated compliance with USP <661> Plastic Packaging Systems and Their Materials of Construction,  PhEur 3.1.11 Materials Based on Non-Plasticised Poly Vinyl Chloride for Containers for Solid Dosage Forms and Oral Administration, and PhEur 3.2.2 Plastic Containers and Closures for Pharmaceutical Use. Additionally, the film conforms to European Union Regulation 10/2011.                 The lidding foil has demonstrated compliance with USP <661> Plastic Packaging Systems and Their Materials of Construction.  The foil complex is stated to conform to European Commission Regulation 1935/2004 and the heat seal layer conforms to European Union Council Directive 78/142/EEC.  Additionally, an infrared reflectance spectrum was obtained to confirm the identity of the material. Detailed information pertaining to the blisters is described in 3.2.P.7.&quot;/>
                <packaging>
                    <!--type>
                        
                    </type-->
                    <!-- technically this is a property of the &quot;foil complex&quot; -->
                    <property>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                <code value=&quot;Quality Standard&quot;/>
                                <display value=&quot;Quality Standard&quot;/>
                            </coding>
                        </type>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                <code value=&quot;EU1935-2004&quot;/>
                                <display value=&quot;European Commission Regulation 1935/2004&quot;/>
                            </coding>
                        </valueCodeableConcept>
                    </property>
                    <!-- technically this is a property of the &quot;heat seal layer&quot; -->
                    <property>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                <code value=&quot;Quality Standard&quot;/>
                                <display value=&quot;Quality Standard&quot;/>
                            </coding>
                        </type>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                <code value=&quot;EU78-142&quot;/>
                                <display value=&quot;European Union Council Directive 78/142/EEC&quot;/>
                            </coding>
                        </valueCodeableConcept>
                    </property>
                    <packaging>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/container-closure-type&quot;/>
                                <code value=&quot;Blister&quot;/>
                                <display value=&quot;Blister&quot;/>
                                <!-- the actual blister -->
                            </coding>
                        </type>
                        <quantity value=&quot;2&quot;/>
                        <material>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/package-material&quot;/>
                                <code value=&quot;200000003222&quot;/>
                                <display value=&quot;PolyVinyl Chloride&quot;/>
                            </coding>
                        </material>
                        <manufacturer>
                            <display value=&quot;Plastics of America&quot;/>
                        </manufacturer>
                        <property>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                    <code value=&quot;Thickness&quot;/>
                                    <display value=&quot;Thickness&quot;/>
                                </coding>
                            </type>
                            <valueQuantity>
                                <value value=&quot;150&quot;/>
                                <unit value=&quot;µm&quot;/>
                                <!-- todo ucum -->
                            </valueQuantity>
                        </property>
                        <property>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                    <code value=&quot;Quality Standard&quot;/>
                                    <display value=&quot;Quality Standard&quot;/>
                                </coding>
                            </type>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                    <code value=&quot;USP&quot;/>
                                    <display value=&quot;USP <661> Plastic Packaging Systems and Their Materials of Construction&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </property>
                        <property>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                    <code value=&quot;Quality Standard&quot;/>
                                    <display value=&quot;Quality Standard&quot;/>
                                </coding>
                            </type>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                    <code value=&quot;PhEur3111&quot;/>
                                    <display value=&quot;Materials Based on Non-Plasticised Poly Vinyl Chloride for Containers for Solid Dosage Forms and Oral Administration&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </property>
                        <property>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                    <code value=&quot;Quality Standard&quot;/>
                                    <display value=&quot;Quality Standard&quot;/>
                                </coding>
                            </type>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                    <code value=&quot;PhEur322&quot;/>
                                    <display value=&quot;Plastic Containers and Closures for Pharmaceutical Use&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </property>
                        <containedItem>
                            <item>
                                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/data-absent-reason&quot;>
                                    <valueCode value=&quot;unsupported&quot;/>
                                </extension>
                            </item>
                            <amount>
                                <value value=&quot;14&quot;/>
                                <unit value=&quot;tablets&quot;/>
                            </amount>
                        </containedItem>
                        <packaging>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/container-closure-type&quot;/>
                                    <code value=&quot;Blister Foil Lidding&quot;/>
                                    <display value=&quot;Blister Foil Lidding&quot;/>
                                </coding>
                            </type>
                            <componentPart value=&quot;true&quot;/>
                            <material>
                                <coding>
                                    <system value=&quot;http://hl7.org/fhir/package-material&quot;/>
                                    <code value=&quot;200000003200&quot;/>
                                    <display value=&quot;Aluminium&quot;/>
                                </coding>
                            </material>
                            <manufacturer>
                                <display value=&quot;Reynolds Wrap USA&quot;/>
                            </manufacturer>
                            <property>
                                <type>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                        <code value=&quot;Quality Standard&quot;/>
                                        <display value=&quot;Quality Standard&quot;/>
                                    </coding>
                                </type>
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                        <code value=&quot;USP&quot;/>
                                        <display value=&quot;USP <661> Plastic Packaging Systems and Their Materials of Construction&quot;/>
                                    </coding>
                                </valueCodeableConcept>
                            </property>
                            <property>
                                <type>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                        <code value=&quot;Quality Standard&quot;/>
                                        <display value=&quot;Quality Standard&quot;/>
                                    </coding>
                                </type>
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                        <code value=&quot;EU10-2011&quot;/>
                                        <display value=&quot;European Union Regulation 10/2011&quot;/>
                                    </coding>
                                </valueCodeableConcept>
                            </property>
                            <property>
                                <type>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                        <code value=&quot;Thickness&quot;/>
                                        <display value=&quot;Thickness&quot;/>
                                    </coding>
                                </type>
                                <valueQuantity>
                                    <value value=&quot;10&quot;/>
                                    <unit value=&quot;µm&quot;/>
                                    <!-- todo ucum -->
                                </valueQuantity>
                            </property>
                        </packaging>
                    </packaging>
                </packaging>
            </PackagedProductDefinition>
        </resource>
    </entry>" id="Bundle-bundle-container-closure-system-pq-ex1-prod">Bundle</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/bundle.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/bundle.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/bundle.html#tt-uml">R6</a>]</span><div class="debugOff">id: bundle-container-closure-system-pq-ex1-prod</div>
<div class="debugOff"></div>
<div class="debugOff"><span title="
<Bundle>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-container-closure-system-pq&quot;>">Profile: </span><span title="
<Bundle>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-container-closure-system-pq&quot;>">http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-container-closure-system-pq</span></div>
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
<div class="indent mpd summaryUnit"><a class="plainLink"><span class="bold" title="MedicinalProductDefinition (id: medicinalproductdefinition-drug-product-dxpq-ex1)(fullUrl: urn:uuid:a0694a7a-aafa-4cbe-8135-c788a9a4d3d5)

<Bundle>
    <entry>
        <resource>
            <MedicinalProductDefinition>
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
<div class="indent ppd summaryUnit"><sup class="rotate-left" title="arrow indicates that this PackagedProductDefinition resource points back to the parent MedicinalProductDefinition, instead of being linked forwards from it - via PackagedProductDefinition.packageFor">↸</sup><span class="debugOff">arrow indicates that this PackagedProductDefinition resource points back to the parent MedicinalProductDefinition, instead of being linked forwards from it - via PackagedProductDefinition.packageFor<br></span><span class="bold" title="PackagedProductDefinition (id: packagedproductdefinition-dxpq-ex1)(fullUrl: urn:uuid:88a068e2-1d97-337b-3b9c-4b3f14bc3923)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/PackagedProductDefinition-drug-pq 

<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <id value=&quot;packagedproductdefinition-dxpq-ex1&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/PackagedProductDefinition-drug-pq&quot;/>
                </meta>
                <packageFor>
                    <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                </packageFor>
                <containedItemQuantity>
                    <value value=&quot;28&quot;/>
                    <unit value=&quot;tablets&quot;/>
                </containedItemQuantity>
                <description value=&quot;The container closure system consists of a bottle and closure.  The bottle is manufactured from white high-density polyethylene (HDPE). The 2-piece child-resistant closure is manufactured from polypropylene (PP) and contains a multi-layer aluminum foil seal liner for tamper evidence.  The bottle and closure provide an adequate barrier to moisture and light, which protect the drug product.  The container closure system has demonstrated suitability for storage of the drug product based on stability studies shown in 3.2.P.8.3.      The HDPE bottle has demonstrated compliance with USP <661> Plastic Packaging Systems and Their Materials of Construction and PhEur 3.1.3 Polyolefins.  The product contacting aluminum foil seal liner has demonstrated compliance with USP <661>. The vendor has confirmed compliance with 21 CFR 175.300, in addition to compliance with limitation of heavy metals per EU 94/62/EC, Article 11. The container closure system has demonstrated child resistance in compliance with 16 CFR 1700. Detailed information pertaining to the bottle and closure is described in 3.2.P.7.&quot;/>
                <packaging>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/packaging-type&quot;/>
                            <code value=&quot;100000073497&quot;/>
                            <display value=&quot;Bottle&quot;/>
                        </coding>
                    </type>
                    <material>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/package-material&quot;/>
                            <code value=&quot;200000003215&quot;/>
                            <display value=&quot;High Density PolyEthylene&quot;/>
                        </coding>
                    </material>
                    <manufacturer>
                        <display value=&quot;Container Co. of America&quot;/>
                    </manufacturer>
                    <property>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                <code value=&quot;Color&quot;/>
                                <display value=&quot;Color&quot;/>
                            </coding>
                        </type>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/drug-substance-or-product-color&quot;/>
                                <code value=&quot;white&quot;/>
                                <display value=&quot;White&quot;/>
                            </coding>
                        </valueCodeableConcept>
                    </property>
                    <property>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                <code value=&quot;Quality Standard&quot;/>
                                <display value=&quot;Quality Standard&quot;/>
                            </coding>
                        </type>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                <code value=&quot;USP&quot;/>
                                <display value=&quot;USP <661> Plastic Packaging Systems and Their Materials of Construction&quot;/>
                            </coding>
                        </valueCodeableConcept>
                    </property>
                    <property>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                <code value=&quot;Quality Standard&quot;/>
                                <display value=&quot;Quality Standard&quot;/>
                            </coding>
                        </type>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                <code value=&quot;PhEur&quot;/>
                                <display value=&quot;PhEur 3.1.3 Polyolefins&quot;/>
                            </coding>
                        </valueCodeableConcept>
                    </property>
                    <packaging>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/container-closure-type&quot;/>
                                <code value=&quot;Child Proof Cap&quot;/>
                                <display value=&quot;Child Proof Cap&quot;/>
                            </coding>
                        </type>
                        <componentPart value=&quot;true&quot;/>
                        <material>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/package-material&quot;/>
                                <code value=&quot;200000003219&quot;/>
                                <display value=&quot;PolyPropylene&quot;/>
                            </coding>
                        </material>
                        <property>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                    <code value=&quot;Quality Standard&quot;/>
                                    <display value=&quot;Quality Standard&quot;/>
                                </coding>
                            </type>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                    <code value=&quot;16CFR1700&quot;/>
                                    <display value=&quot;16 CFR 1700&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </property>
                        <packaging>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/container-closure-type&quot;/>
                                    <code value=&quot;Multi-layer Foil Seal Liner&quot;/>
                                    <display value=&quot;Multi-layer Foil Seal Liner&quot;/>
                                </coding>
                            </type>
                            <componentPart value=&quot;true&quot;/>
                            <material>
                                <coding>
                                    <system value=&quot;http://hl7.org/fhir/package-material&quot;/>
                                    <code value=&quot;200000003200&quot;/>
                                    <display value=&quot;Aluminium&quot;/>
                                </coding>
                            </material>
                            <property>
                                <type>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                        <code value=&quot;Quality Standard&quot;/>
                                        <display value=&quot;Quality Standard&quot;/>
                                    </coding>
                                </type>
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                        <code value=&quot;21CFR175.300&quot;/>
                                        <display value=&quot;21 CFR 175.300&quot;/>
                                    </coding>
                                </valueCodeableConcept>
                            </property>
                            <property>
                                <type>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                        <code value=&quot;Quality Standard&quot;/>
                                        <display value=&quot;Quality Standard&quot;/>
                                    </coding>
                                </type>
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                        <code value=&quot;EU-94-62-EC&quot;/>
                                        <display value=&quot;EU 94/62/EC&quot;/>
                                    </coding>
                                </valueCodeableConcept>
                            </property>
                        </packaging>
                    </packaging>
                </packaging>" id="PackagedProductDefinition-packagedproductdefinition-dxpq-ex1"><a class="plainLink">Package</a> (1 of 2)</span><span class="summaryShowsOff"></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/packagedproductdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/packagedproductdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/packagedproductdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: packagedproductdefinition-dxpq-ex1</div>
<div class="debugOff"> fullUrl: urn:uuid:88a068e2-1d97-337b-3b9c-4b3f14bc3923</div>
<div class="debugOff"></div>
<div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/PackagedProductDefinition-drug-pq&quot;>">Profile: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/PackagedProductDefinition-drug-pq&quot;>">http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/PackagedProductDefinition-drug-pq</span></div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                ...
                <description value=&quot;The container closure system consists of a bottle and closure.  The bottle is manufactured from white high-density polyethylene (HDPE). The 2-piece child-resistant closure is manufactured from polypropylene (PP) and contains a multi-layer aluminum foil seal liner for tamper evidence.  The bottle and closure provide an adequate barrier to moisture and light, which protect the drug product.  The container closure system has demonstrated suitability for storage of the drug product based on stability studies shown in 3.2.P.8.3.      The HDPE bottle has demonstrated compliance with USP <661> Plastic Packaging Systems and Their Materials of Construction and PhEur 3.1.3 Polyolefins.  The product contacting aluminum foil seal liner has demonstrated compliance with USP <661>. The vendor has confirmed compliance with 21 CFR 175.300, in addition to compliance with limitation of heavy metals per EU 94/62/EC, Article 11. The container closure system has demonstrated child resistance in compliance with 16 CFR 1700. Detailed information pertaining to the bottle and closure is described in 3.2.P.7.&quot;>">Description: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                ...
                <description value=&quot;The container closure system consists of a bottle and closure.  The bottle is manufactured from white high-density polyethylene (HDPE). The 2-piece child-resistant closure is manufactured from polypropylene (PP) and contains a multi-layer aluminum foil seal liner for tamper evidence.  The bottle and closure provide an adequate barrier to moisture and light, which protect the drug product.  The container closure system has demonstrated suitability for storage of the drug product based on stability studies shown in 3.2.P.8.3.      The HDPE bottle has demonstrated compliance with USP <661> Plastic Packaging Systems and Their Materials of Construction and PhEur 3.1.3 Polyolefins.  The product contacting aluminum foil seal liner has demonstrated compliance with USP <661>. The vendor has confirmed compliance with 21 CFR 175.300, in addition to compliance with limitation of heavy metals per EU 94/62/EC, Article 11. The container closure system has demonstrated child resistance in compliance with 16 CFR 1700. Detailed information pertaining to the bottle and closure is described in 3.2.P.7.&quot;>">The container closure system consists of a bottle and closure.  The bottle is manufactured from white high-density polyethylene (HDPE). The 2-piece child-resistant closure is manufactured from polypropylene (PP) and contains a multi-layer aluminum foil seal liner for tamper evidence.  The bottle and closure provide an adequate barrier to moisture and light, which protect the drug product.  The container closure system has demonstrated suitability for storage of the drug product based on stability studies shown in 3.2.P.8.3.      The HDPE bottle has demonstrated compliance with USP <661> Plastic Packaging Systems and Their Materials of Construction and PhEur 3.1.3 Polyolefins.  The product contacting aluminum foil seal liner has demonstrated compliance with USP <661>. The vendor has confirmed compliance with 21 CFR 175.300, in addition to compliance with limitation of heavy metals per EU 94/62/EC, Article 11. The container closure system has demonstrated child resistance in compliance with 16 CFR 1700. Detailed information pertaining to the bottle and closure is described in 3.2.P.7.</span></div>
</div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                ...
                <containedItemQuantity>
                    <value value=&quot;28&quot;/>
                    <unit value=&quot;tablets&quot;/>">Contained Items: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                ...
                <containedItemQuantity>
                    <value value=&quot;28&quot;/>
                    <unit value=&quot;tablets&quot;/>">28 tablets</span></div>
<div class="indent ppdpackage summaryUnit"><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                ...
                <packaging>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/packaging-type&quot;/>
                            <code value=&quot;100000073497&quot;/>
                            <display value=&quot;Bottle&quot;/>
                        </coding>
                    </type>
                    <material>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/package-material&quot;/>
                            <code value=&quot;200000003215&quot;/>
                            <display value=&quot;High Density PolyEthylene&quot;/>
                        </coding>
                    </material>
                    <manufacturer>
                        <display value=&quot;Container Co. of America&quot;/>
                    </manufacturer>
                    <property>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                <code value=&quot;Color&quot;/>
                                <display value=&quot;Color&quot;/>
                            </coding>
                        </type>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/drug-substance-or-product-color&quot;/>
                                <code value=&quot;white&quot;/>
                                <display value=&quot;White&quot;/>
                            </coding>
                        </valueCodeableConcept>
                    </property>
                    <property>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                <code value=&quot;Quality Standard&quot;/>
                                <display value=&quot;Quality Standard&quot;/>
                            </coding>
                        </type>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                <code value=&quot;USP&quot;/>
                                <display value=&quot;USP <661> Plastic Packaging Systems and Their Materials of Construction&quot;/>
                            </coding>
                        </valueCodeableConcept>
                    </property>
                    <property>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                <code value=&quot;Quality Standard&quot;/>
                                <display value=&quot;Quality Standard&quot;/>
                            </coding>
                        </type>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                <code value=&quot;PhEur&quot;/>
                                <display value=&quot;PhEur 3.1.3 Polyolefins&quot;/>
                            </coding>
                        </valueCodeableConcept>
                    </property>
                    <packaging>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/container-closure-type&quot;/>
                                <code value=&quot;Child Proof Cap&quot;/>
                                <display value=&quot;Child Proof Cap&quot;/>
                            </coding>
                        </type>
                        <componentPart value=&quot;true&quot;/>
                        <material>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/package-material&quot;/>
                                <code value=&quot;200000003219&quot;/>
                                <display value=&quot;PolyPropylene&quot;/>
                            </coding>
                        </material>
                        <property>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                    <code value=&quot;Quality Standard&quot;/>
                                    <display value=&quot;Quality Standard&quot;/>
                                </coding>
                            </type>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                    <code value=&quot;16CFR1700&quot;/>
                                    <display value=&quot;16 CFR 1700&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </property>
                        <packaging>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/container-closure-type&quot;/>
                                    <code value=&quot;Multi-layer Foil Seal Liner&quot;/>
                                    <display value=&quot;Multi-layer Foil Seal Liner&quot;/>
                                </coding>
                            </type>
                            <componentPart value=&quot;true&quot;/>
                            <material>
                                <coding>
                                    <system value=&quot;http://hl7.org/fhir/package-material&quot;/>
                                    <code value=&quot;200000003200&quot;/>
                                    <display value=&quot;Aluminium&quot;/>
                                </coding>
                            </material>
                            <property>
                                <type>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                        <code value=&quot;Quality Standard&quot;/>
                                        <display value=&quot;Quality Standard&quot;/>
                                    </coding>
                                </type>
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                        <code value=&quot;21CFR175.300&quot;/>
                                        <display value=&quot;21 CFR 175.300&quot;/>
                                    </coding>
                                </valueCodeableConcept>
                            </property>
                            <property>
                                <type>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                        <code value=&quot;Quality Standard&quot;/>
                                        <display value=&quot;Quality Standard&quot;/>
                                    </coding>
                                </type>
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                        <code value=&quot;EU-94-62-EC&quot;/>
                                        <display value=&quot;EU 94/62/EC&quot;/>
                                    </coding>
                                </valueCodeableConcept>
                            </property>
                        </packaging>
                    </packaging>">Packaging</span><span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/packaging-type&quot;/>
                            <code value=&quot;100000073497&quot;/>
                            <display value=&quot;Bottle&quot;/>">Bottle<span class="greyOff"> [100000073497]</span><span class="greyOff"> (http://hl7.org/fhir/packaging-type)</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/packaging-type&quot;/>
                            <code value=&quot;100000073497&quot;/>
                            <display value=&quot;Bottle&quot;/>
                        </coding>">Type: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/packaging-type&quot;/>
                            <code value=&quot;100000073497&quot;/>
                            <display value=&quot;Bottle&quot;/>">Bottle<span class="greyOff"> [100000073497]</span><span class="greyOff"> (http://hl7.org/fhir/packaging-type)</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    ...
                    <material>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/package-material&quot;/>
                            <code value=&quot;200000003215&quot;/>
                            <display value=&quot;High Density PolyEthylene&quot;/>
                        </coding>">Material: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <material>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/package-material&quot;/>
                            <code value=&quot;200000003215&quot;/>
                            <display value=&quot;High Density PolyEthylene&quot;/>">High Density PolyEthylene<span class="greyOff"> [200000003215]</span><span class="greyOff"> (http://hl7.org/fhir/package-material)</span></span></div>
<div class="indent ppdl3"><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    ...
                    <manufacturer>
                        <display value=&quot;Container Co. of America&quot;/>">Manufacturer</span><div class="indent org"><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <manufacturer>
                        <display value=&quot;Container Co. of America&quot;>">Display: Container Co. of America</span></div>
</div>
<div class="summaryHiddenOff">
<div class="indent ppdl3"><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    ...
                    <property>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                <code value=&quot;Color&quot;/>
                                <display value=&quot;Color&quot;/>
                            </coding>
                        </type>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/drug-substance-or-product-color&quot;/>
                                <code value=&quot;white&quot;/>
                                <display value=&quot;White&quot;/>
                            </coding>
                        </valueCodeableConcept>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <property>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                <code value=&quot;Color&quot;/>
                                <display value=&quot;Color&quot;/>
                            </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <property>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                <code value=&quot;Color&quot;/>
                                <display value=&quot;Color&quot;/>">Color<span class="greyOff"> [Color]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/package-property)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <property>
                        ...
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/drug-substance-or-product-color&quot;/>
                                <code value=&quot;white&quot;/>
                                <display value=&quot;White&quot;/>
                            </coding>">Value: <span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <property>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/drug-substance-or-product-color&quot;/>
                                <code value=&quot;white&quot;/>
                                <display value=&quot;White&quot;/>">White<span class="greyOff"> [white]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/drug-substance-or-product-color)</span></span></span></div>
</div>
</div>
<div class="summaryHiddenOff">
<div class="indent ppdl3"><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    ...
                    <property>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                <code value=&quot;Quality Standard&quot;/>
                                <display value=&quot;Quality Standard&quot;/>
                            </coding>
                        </type>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                <code value=&quot;USP&quot;/>
                                <display value=&quot;USP <661> Plastic Packaging Systems and Their Materials of Construction&quot;/>
                            </coding>
                        </valueCodeableConcept>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <property>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                <code value=&quot;Quality Standard&quot;/>
                                <display value=&quot;Quality Standard&quot;/>
                            </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <property>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                <code value=&quot;Quality Standard&quot;/>
                                <display value=&quot;Quality Standard&quot;/>">Quality Standard<span class="greyOff"> [Quality Standard]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/package-property)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <property>
                        ...
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                <code value=&quot;USP&quot;/>
                                <display value=&quot;USP <661> Plastic Packaging Systems and Their Materials of Construction&quot;/>
                            </coding>">Value: <span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <property>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                <code value=&quot;USP&quot;/>
                                <display value=&quot;USP <661> Plastic Packaging Systems and Their Materials of Construction&quot;/>">USP &lt;661&gt; Plastic Packaging Systems and Their Materials of Construction<span class="greyOff"> [USP]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/package-grade)</span></span></span></div>
</div>
</div>
<div class="summaryHiddenOff">
<div class="indent ppdl3"><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    ...
                    <property>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                <code value=&quot;Quality Standard&quot;/>
                                <display value=&quot;Quality Standard&quot;/>
                            </coding>
                        </type>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                <code value=&quot;PhEur&quot;/>
                                <display value=&quot;PhEur 3.1.3 Polyolefins&quot;/>
                            </coding>
                        </valueCodeableConcept>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <property>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                <code value=&quot;Quality Standard&quot;/>
                                <display value=&quot;Quality Standard&quot;/>
                            </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <property>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                <code value=&quot;Quality Standard&quot;/>
                                <display value=&quot;Quality Standard&quot;/>">Quality Standard<span class="greyOff"> [Quality Standard]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/package-property)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <property>
                        ...
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                <code value=&quot;PhEur&quot;/>
                                <display value=&quot;PhEur 3.1.3 Polyolefins&quot;/>
                            </coding>">Value: <span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <property>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                <code value=&quot;PhEur&quot;/>
                                <display value=&quot;PhEur 3.1.3 Polyolefins&quot;/>">PhEur 3.1.3 Polyolefins<span class="greyOff"> [PhEur]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/package-grade)</span></span></span></div>
</div>
</div>
</div>
<div class="indent ppdpackageitem"><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    ...
                    <packaging>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/container-closure-type&quot;/>
                                <code value=&quot;Child Proof Cap&quot;/>
                                <display value=&quot;Child Proof Cap&quot;/>
                            </coding>
                        </type>
                        <componentPart value=&quot;true&quot;/>
                        <material>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/package-material&quot;/>
                                <code value=&quot;200000003219&quot;/>
                                <display value=&quot;PolyPropylene&quot;/>
                            </coding>
                        </material>
                        <property>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                    <code value=&quot;Quality Standard&quot;/>
                                    <display value=&quot;Quality Standard&quot;/>
                                </coding>
                            </type>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                    <code value=&quot;16CFR1700&quot;/>
                                    <display value=&quot;16 CFR 1700&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </property>
                        <packaging>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/container-closure-type&quot;/>
                                    <code value=&quot;Multi-layer Foil Seal Liner&quot;/>
                                    <display value=&quot;Multi-layer Foil Seal Liner&quot;/>
                                </coding>
                            </type>
                            <componentPart value=&quot;true&quot;/>
                            <material>
                                <coding>
                                    <system value=&quot;http://hl7.org/fhir/package-material&quot;/>
                                    <code value=&quot;200000003200&quot;/>
                                    <display value=&quot;Aluminium&quot;/>
                                </coding>
                            </material>
                            <property>
                                <type>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                        <code value=&quot;Quality Standard&quot;/>
                                        <display value=&quot;Quality Standard&quot;/>
                                    </coding>
                                </type>
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                        <code value=&quot;21CFR175.300&quot;/>
                                        <display value=&quot;21 CFR 175.300&quot;/>
                                    </coding>
                                </valueCodeableConcept>
                            </property>
                            <property>
                                <type>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                        <code value=&quot;Quality Standard&quot;/>
                                        <display value=&quot;Quality Standard&quot;/>
                                    </coding>
                                </type>
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                        <code value=&quot;EU-94-62-EC&quot;/>
                                        <display value=&quot;EU 94/62/EC&quot;/>
                                    </coding>
                                </valueCodeableConcept>
                            </property>
                        </packaging>">Packaging (part)</span><span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/container-closure-type&quot;/>
                                <code value=&quot;Child Proof Cap&quot;/>
                                <display value=&quot;Child Proof Cap&quot;/>">Child Proof Cap<span class="greyOff"> [Child Proof Cap]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/container-closure-type)</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/container-closure-type&quot;/>
                                <code value=&quot;Child Proof Cap&quot;/>
                                <display value=&quot;Child Proof Cap&quot;/>
                            </coding>">Type: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/container-closure-type&quot;/>
                                <code value=&quot;Child Proof Cap&quot;/>
                                <display value=&quot;Child Proof Cap&quot;/>">Child Proof Cap<span class="greyOff"> [Child Proof Cap]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/container-closure-type)</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        ...
                        <componentPart value=&quot;true&quot;>">Component Part: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        ...
                        <componentPart value=&quot;true&quot;>"><span>true</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        ...
                        <material>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/package-material&quot;/>
                                <code value=&quot;200000003219&quot;/>
                                <display value=&quot;PolyPropylene&quot;/>
                            </coding>">Material: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <material>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/package-material&quot;/>
                                <code value=&quot;200000003219&quot;/>
                                <display value=&quot;PolyPropylene&quot;/>">PolyPropylene<span class="greyOff"> [200000003219]</span><span class="greyOff"> (http://hl7.org/fhir/package-material)</span></span></div>
<div class="summaryHiddenOff">
<div class="indent ppdl3"><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        ...
                        <property>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                    <code value=&quot;Quality Standard&quot;/>
                                    <display value=&quot;Quality Standard&quot;/>
                                </coding>
                            </type>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                    <code value=&quot;16CFR1700&quot;/>
                                    <display value=&quot;16 CFR 1700&quot;/>
                                </coding>
                            </valueCodeableConcept>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <property>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                    <code value=&quot;Quality Standard&quot;/>
                                    <display value=&quot;Quality Standard&quot;/>
                                </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <property>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                    <code value=&quot;Quality Standard&quot;/>
                                    <display value=&quot;Quality Standard&quot;/>">Quality Standard<span class="greyOff"> [Quality Standard]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/package-property)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <property>
                            ...
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                    <code value=&quot;16CFR1700&quot;/>
                                    <display value=&quot;16 CFR 1700&quot;/>
                                </coding>">Value: <span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <property>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                    <code value=&quot;16CFR1700&quot;/>
                                    <display value=&quot;16 CFR 1700&quot;/>">16 CFR 1700<span class="greyOff"> [16CFR1700]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/package-grade)</span></span></span></div>
</div>
</div>
</div>
<div class="indent ppdpackageitem"><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        ...
                        <packaging>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/container-closure-type&quot;/>
                                    <code value=&quot;Multi-layer Foil Seal Liner&quot;/>
                                    <display value=&quot;Multi-layer Foil Seal Liner&quot;/>
                                </coding>
                            </type>
                            <componentPart value=&quot;true&quot;/>
                            <material>
                                <coding>
                                    <system value=&quot;http://hl7.org/fhir/package-material&quot;/>
                                    <code value=&quot;200000003200&quot;/>
                                    <display value=&quot;Aluminium&quot;/>
                                </coding>
                            </material>
                            <property>
                                <type>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                        <code value=&quot;Quality Standard&quot;/>
                                        <display value=&quot;Quality Standard&quot;/>
                                    </coding>
                                </type>
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                        <code value=&quot;21CFR175.300&quot;/>
                                        <display value=&quot;21 CFR 175.300&quot;/>
                                    </coding>
                                </valueCodeableConcept>
                            </property>
                            <property>
                                <type>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                        <code value=&quot;Quality Standard&quot;/>
                                        <display value=&quot;Quality Standard&quot;/>
                                    </coding>
                                </type>
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                        <code value=&quot;EU-94-62-EC&quot;/>
                                        <display value=&quot;EU 94/62/EC&quot;/>
                                    </coding>
                                </valueCodeableConcept>
                            </property>">Packaging (part)</span><span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <packaging>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/container-closure-type&quot;/>
                                    <code value=&quot;Multi-layer Foil Seal Liner&quot;/>
                                    <display value=&quot;Multi-layer Foil Seal Liner&quot;/>">Multi-layer Foil Seal Liner<span class="greyOff"> [Multi-layer Foil Seal Liner]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/container-closure-type)</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <packaging>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/container-closure-type&quot;/>
                                    <code value=&quot;Multi-layer Foil Seal Liner&quot;/>
                                    <display value=&quot;Multi-layer Foil Seal Liner&quot;/>
                                </coding>">Type: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <packaging>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/container-closure-type&quot;/>
                                    <code value=&quot;Multi-layer Foil Seal Liner&quot;/>
                                    <display value=&quot;Multi-layer Foil Seal Liner&quot;/>">Multi-layer Foil Seal Liner<span class="greyOff"> [Multi-layer Foil Seal Liner]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/container-closure-type)</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <packaging>
                            ...
                            <componentPart value=&quot;true&quot;>">Component Part: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <packaging>
                            ...
                            <componentPart value=&quot;true&quot;>"><span>true</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <packaging>
                            ...
                            <material>
                                <coding>
                                    <system value=&quot;http://hl7.org/fhir/package-material&quot;/>
                                    <code value=&quot;200000003200&quot;/>
                                    <display value=&quot;Aluminium&quot;/>
                                </coding>">Material: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <packaging>
                            <material>
                                <coding>
                                    <system value=&quot;http://hl7.org/fhir/package-material&quot;/>
                                    <code value=&quot;200000003200&quot;/>
                                    <display value=&quot;Aluminium&quot;/>">Aluminium<span class="greyOff"> [200000003200]</span><span class="greyOff"> (http://hl7.org/fhir/package-material)</span></span></div>
<div class="summaryHiddenOff">
<div class="indent ppdl3"><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <packaging>
                            ...
                            <property>
                                <type>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                        <code value=&quot;Quality Standard&quot;/>
                                        <display value=&quot;Quality Standard&quot;/>
                                    </coding>
                                </type>
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                        <code value=&quot;21CFR175.300&quot;/>
                                        <display value=&quot;21 CFR 175.300&quot;/>
                                    </coding>
                                </valueCodeableConcept>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <packaging>
                            <property>
                                <type>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                        <code value=&quot;Quality Standard&quot;/>
                                        <display value=&quot;Quality Standard&quot;/>
                                    </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <packaging>
                            <property>
                                <type>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                        <code value=&quot;Quality Standard&quot;/>
                                        <display value=&quot;Quality Standard&quot;/>">Quality Standard<span class="greyOff"> [Quality Standard]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/package-property)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <packaging>
                            <property>
                                ...
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                        <code value=&quot;21CFR175.300&quot;/>
                                        <display value=&quot;21 CFR 175.300&quot;/>
                                    </coding>">Value: <span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <packaging>
                            <property>
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                        <code value=&quot;21CFR175.300&quot;/>
                                        <display value=&quot;21 CFR 175.300&quot;/>">21 CFR 175.300<span class="greyOff"> [21CFR175.300]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/package-grade)</span></span></span></div>
</div>
</div>
<div class="summaryHiddenOff">
<div class="indent ppdl3"><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <packaging>
                            ...
                            <property>
                                <type>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                        <code value=&quot;Quality Standard&quot;/>
                                        <display value=&quot;Quality Standard&quot;/>
                                    </coding>
                                </type>
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                        <code value=&quot;EU-94-62-EC&quot;/>
                                        <display value=&quot;EU 94/62/EC&quot;/>
                                    </coding>
                                </valueCodeableConcept>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <packaging>
                            <property>
                                <type>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                        <code value=&quot;Quality Standard&quot;/>
                                        <display value=&quot;Quality Standard&quot;/>
                                    </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <packaging>
                            <property>
                                <type>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                        <code value=&quot;Quality Standard&quot;/>
                                        <display value=&quot;Quality Standard&quot;/>">Quality Standard<span class="greyOff"> [Quality Standard]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/package-property)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <packaging>
                            <property>
                                ...
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                        <code value=&quot;EU-94-62-EC&quot;/>
                                        <display value=&quot;EU 94/62/EC&quot;/>
                                    </coding>">Value: <span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <packaging>
                            <property>
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                        <code value=&quot;EU-94-62-EC&quot;/>
                                        <display value=&quot;EU 94/62/EC&quot;/>">EU 94/62/EC<span class="greyOff"> [EU-94-62-EC]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/package-grade)</span></span></span></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="indent ppd summaryUnit"><sup class="rotate-left" title="arrow indicates that this PackagedProductDefinition resource points back to the parent MedicinalProductDefinition, instead of being linked forwards from it - via PackagedProductDefinition.packageFor">↸</sup><span class="debugOff">arrow indicates that this PackagedProductDefinition resource points back to the parent MedicinalProductDefinition, instead of being linked forwards from it - via PackagedProductDefinition.packageFor<br></span><span class="bold" title="PackagedProductDefinition (id: packagedproductdefinition-dxpq-ex2)(fullUrl: urn:uuid:88a068e2-1d97-337b-3b9c-4b3f24bc3923)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/PackagedProductDefinition-drug-pq 

<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <id value=&quot;packagedproductdefinition-dxpq-ex2&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/PackagedProductDefinition-drug-pq&quot;/>
                </meta>
                <packageFor>
                    <reference value=&quot;MedicinalProductDefinition/medicinalproductdefinition-drug-product-dxpq-ex1&quot;/>
                </packageFor>
                <containedItemQuantity>
                    <value value=&quot;28&quot;/>
                    <unit value=&quot;tablets&quot;/>
                </containedItemQuantity>
                <description value=&quot;The container closure system consists of a blister film of 150 µm thick polyvinyl chloride (PVC) and a blister lidding of 10 µm hard temper push-through aluminum foil with a product contact heat seal layer of polyvinyl chloride (PVC) laminated in Aclar. The PVC blister film effectively seals with the aluminum foil heat seal layer during final packaging.  The blister film and foil materials have demonstrated suitability for product storage based on stability studies shown in 3.2.P.8.3 and additional testing.                The film has demonstrated compliance with USP <661> Plastic Packaging Systems and Their Materials of Construction,  PhEur 3.1.11 Materials Based on Non-Plasticised Poly Vinyl Chloride for Containers for Solid Dosage Forms and Oral Administration, and PhEur 3.2.2 Plastic Containers and Closures for Pharmaceutical Use. Additionally, the film conforms to European Union Regulation 10/2011.                 The lidding foil has demonstrated compliance with USP <661> Plastic Packaging Systems and Their Materials of Construction.  The foil complex is stated to conform to European Commission Regulation 1935/2004 and the heat seal layer conforms to European Union Council Directive 78/142/EEC.  Additionally, an infrared reflectance spectrum was obtained to confirm the identity of the material. Detailed information pertaining to the blisters is described in 3.2.P.7.&quot;/>
                <packaging>
                    <!--type>
                        
                    </type-->
                    <!-- technically this is a property of the &quot;foil complex&quot; -->
                    <property>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                <code value=&quot;Quality Standard&quot;/>
                                <display value=&quot;Quality Standard&quot;/>
                            </coding>
                        </type>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                <code value=&quot;EU1935-2004&quot;/>
                                <display value=&quot;European Commission Regulation 1935/2004&quot;/>
                            </coding>
                        </valueCodeableConcept>
                    </property>
                    <!-- technically this is a property of the &quot;heat seal layer&quot; -->
                    <property>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                <code value=&quot;Quality Standard&quot;/>
                                <display value=&quot;Quality Standard&quot;/>
                            </coding>
                        </type>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                <code value=&quot;EU78-142&quot;/>
                                <display value=&quot;European Union Council Directive 78/142/EEC&quot;/>
                            </coding>
                        </valueCodeableConcept>
                    </property>
                    <packaging>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/container-closure-type&quot;/>
                                <code value=&quot;Blister&quot;/>
                                <display value=&quot;Blister&quot;/>
                                <!-- the actual blister -->
                            </coding>
                        </type>
                        <quantity value=&quot;2&quot;/>
                        <material>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/package-material&quot;/>
                                <code value=&quot;200000003222&quot;/>
                                <display value=&quot;PolyVinyl Chloride&quot;/>
                            </coding>
                        </material>
                        <manufacturer>
                            <display value=&quot;Plastics of America&quot;/>
                        </manufacturer>
                        <property>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                    <code value=&quot;Thickness&quot;/>
                                    <display value=&quot;Thickness&quot;/>
                                </coding>
                            </type>
                            <valueQuantity>
                                <value value=&quot;150&quot;/>
                                <unit value=&quot;µm&quot;/>
                                <!-- todo ucum -->
                            </valueQuantity>
                        </property>
                        <property>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                    <code value=&quot;Quality Standard&quot;/>
                                    <display value=&quot;Quality Standard&quot;/>
                                </coding>
                            </type>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                    <code value=&quot;USP&quot;/>
                                    <display value=&quot;USP <661> Plastic Packaging Systems and Their Materials of Construction&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </property>
                        <property>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                    <code value=&quot;Quality Standard&quot;/>
                                    <display value=&quot;Quality Standard&quot;/>
                                </coding>
                            </type>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                    <code value=&quot;PhEur3111&quot;/>
                                    <display value=&quot;Materials Based on Non-Plasticised Poly Vinyl Chloride for Containers for Solid Dosage Forms and Oral Administration&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </property>
                        <property>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                    <code value=&quot;Quality Standard&quot;/>
                                    <display value=&quot;Quality Standard&quot;/>
                                </coding>
                            </type>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                    <code value=&quot;PhEur322&quot;/>
                                    <display value=&quot;Plastic Containers and Closures for Pharmaceutical Use&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </property>
                        <containedItem>
                            <item>
                                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/data-absent-reason&quot;>
                                    <valueCode value=&quot;unsupported&quot;/>
                                </extension>
                            </item>
                            <amount>
                                <value value=&quot;14&quot;/>
                                <unit value=&quot;tablets&quot;/>
                            </amount>
                        </containedItem>
                        <packaging>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/container-closure-type&quot;/>
                                    <code value=&quot;Blister Foil Lidding&quot;/>
                                    <display value=&quot;Blister Foil Lidding&quot;/>
                                </coding>
                            </type>
                            <componentPart value=&quot;true&quot;/>
                            <material>
                                <coding>
                                    <system value=&quot;http://hl7.org/fhir/package-material&quot;/>
                                    <code value=&quot;200000003200&quot;/>
                                    <display value=&quot;Aluminium&quot;/>
                                </coding>
                            </material>
                            <manufacturer>
                                <display value=&quot;Reynolds Wrap USA&quot;/>
                            </manufacturer>
                            <property>
                                <type>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                        <code value=&quot;Quality Standard&quot;/>
                                        <display value=&quot;Quality Standard&quot;/>
                                    </coding>
                                </type>
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                        <code value=&quot;USP&quot;/>
                                        <display value=&quot;USP <661> Plastic Packaging Systems and Their Materials of Construction&quot;/>
                                    </coding>
                                </valueCodeableConcept>
                            </property>
                            <property>
                                <type>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                        <code value=&quot;Quality Standard&quot;/>
                                        <display value=&quot;Quality Standard&quot;/>
                                    </coding>
                                </type>
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                        <code value=&quot;EU10-2011&quot;/>
                                        <display value=&quot;European Union Regulation 10/2011&quot;/>
                                    </coding>
                                </valueCodeableConcept>
                            </property>
                            <property>
                                <type>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                        <code value=&quot;Thickness&quot;/>
                                        <display value=&quot;Thickness&quot;/>
                                    </coding>
                                </type>
                                <valueQuantity>
                                    <value value=&quot;10&quot;/>
                                    <unit value=&quot;µm&quot;/>
                                    <!-- todo ucum -->
                                </valueQuantity>
                            </property>
                        </packaging>
                    </packaging>
                </packaging>" id="PackagedProductDefinition-packagedproductdefinition-dxpq-ex2"><a class="plainLink">Package</a> (2 of 2)</span><span class="summaryShowsOff"></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/packagedproductdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/packagedproductdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/packagedproductdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: packagedproductdefinition-dxpq-ex2</div>
<div class="debugOff"> fullUrl: urn:uuid:88a068e2-1d97-337b-3b9c-4b3f24bc3923</div>
<div class="debugOff"></div>
<div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/PackagedProductDefinition-drug-pq&quot;>">Profile: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/PackagedProductDefinition-drug-pq&quot;>">http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/PackagedProductDefinition-drug-pq</span></div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                ...
                <description value=&quot;The container closure system consists of a blister film of 150 µm thick polyvinyl chloride (PVC) and a blister lidding of 10 µm hard temper push-through aluminum foil with a product contact heat seal layer of polyvinyl chloride (PVC) laminated in Aclar. The PVC blister film effectively seals with the aluminum foil heat seal layer during final packaging.  The blister film and foil materials have demonstrated suitability for product storage based on stability studies shown in 3.2.P.8.3 and additional testing.                The film has demonstrated compliance with USP <661> Plastic Packaging Systems and Their Materials of Construction,  PhEur 3.1.11 Materials Based on Non-Plasticised Poly Vinyl Chloride for Containers for Solid Dosage Forms and Oral Administration, and PhEur 3.2.2 Plastic Containers and Closures for Pharmaceutical Use. Additionally, the film conforms to European Union Regulation 10/2011.                 The lidding foil has demonstrated compliance with USP <661> Plastic Packaging Systems and Their Materials of Construction.  The foil complex is stated to conform to European Commission Regulation 1935/2004 and the heat seal layer conforms to European Union Council Directive 78/142/EEC.  Additionally, an infrared reflectance spectrum was obtained to confirm the identity of the material. Detailed information pertaining to the blisters is described in 3.2.P.7.&quot;>">Description: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                ...
                <description value=&quot;The container closure system consists of a blister film of 150 µm thick polyvinyl chloride (PVC) and a blister lidding of 10 µm hard temper push-through aluminum foil with a product contact heat seal layer of polyvinyl chloride (PVC) laminated in Aclar. The PVC blister film effectively seals with the aluminum foil heat seal layer during final packaging.  The blister film and foil materials have demonstrated suitability for product storage based on stability studies shown in 3.2.P.8.3 and additional testing.                The film has demonstrated compliance with USP <661> Plastic Packaging Systems and Their Materials of Construction,  PhEur 3.1.11 Materials Based on Non-Plasticised Poly Vinyl Chloride for Containers for Solid Dosage Forms and Oral Administration, and PhEur 3.2.2 Plastic Containers and Closures for Pharmaceutical Use. Additionally, the film conforms to European Union Regulation 10/2011.                 The lidding foil has demonstrated compliance with USP <661> Plastic Packaging Systems and Their Materials of Construction.  The foil complex is stated to conform to European Commission Regulation 1935/2004 and the heat seal layer conforms to European Union Council Directive 78/142/EEC.  Additionally, an infrared reflectance spectrum was obtained to confirm the identity of the material. Detailed information pertaining to the blisters is described in 3.2.P.7.&quot;>">The container closure system consists of a blister film of 150 µm thick polyvinyl chloride (PVC) and a blister lidding of 10 µm hard temper push-through aluminum foil with a product contact heat seal layer of polyvinyl chloride (PVC) laminated in Aclar. The PVC blister film effectively seals with the aluminum foil heat seal layer during final packaging.  The blister film and foil materials have demonstrated suitability for product storage based on stability studies shown in 3.2.P.8.3 and additional testing.                The film has demonstrated compliance with USP <661> Plastic Packaging Systems and Their Materials of Construction,  PhEur 3.1.11 Materials Based on Non-Plasticised Poly Vinyl Chloride for Containers for Solid Dosage Forms and Oral Administration, and PhEur 3.2.2 Plastic Containers and Closures for Pharmaceutical Use. Additionally, the film conforms to European Union Regulation 10/2011.                 The lidding foil has demonstrated compliance with USP <661> Plastic Packaging Systems and Their Materials of Construction.  The foil complex is stated to conform to European Commission Regulation 1935/2004 and the heat seal layer conforms to European Union Council Directive 78/142/EEC.  Additionally, an infrared reflectance spectrum was obtained to confirm the identity of the material. Detailed information pertaining to the blisters is described in 3.2.P.7.</span></div>
</div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                ...
                <containedItemQuantity>
                    <value value=&quot;28&quot;/>
                    <unit value=&quot;tablets&quot;/>">Contained Items: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                ...
                <containedItemQuantity>
                    <value value=&quot;28&quot;/>
                    <unit value=&quot;tablets&quot;/>">28 tablets</span></div>
<div class="indent ppdpackage summaryUnit"><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                ...
                <packaging>
                    <!--type>
                        
                    </type-->
                    <!-- technically this is a property of the &quot;foil complex&quot; -->
                    <property>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                <code value=&quot;Quality Standard&quot;/>
                                <display value=&quot;Quality Standard&quot;/>
                            </coding>
                        </type>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                <code value=&quot;EU1935-2004&quot;/>
                                <display value=&quot;European Commission Regulation 1935/2004&quot;/>
                            </coding>
                        </valueCodeableConcept>
                    </property>
                    <!-- technically this is a property of the &quot;heat seal layer&quot; -->
                    <property>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                <code value=&quot;Quality Standard&quot;/>
                                <display value=&quot;Quality Standard&quot;/>
                            </coding>
                        </type>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                <code value=&quot;EU78-142&quot;/>
                                <display value=&quot;European Union Council Directive 78/142/EEC&quot;/>
                            </coding>
                        </valueCodeableConcept>
                    </property>
                    <packaging>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/container-closure-type&quot;/>
                                <code value=&quot;Blister&quot;/>
                                <display value=&quot;Blister&quot;/>
                                <!-- the actual blister -->
                            </coding>
                        </type>
                        <quantity value=&quot;2&quot;/>
                        <material>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/package-material&quot;/>
                                <code value=&quot;200000003222&quot;/>
                                <display value=&quot;PolyVinyl Chloride&quot;/>
                            </coding>
                        </material>
                        <manufacturer>
                            <display value=&quot;Plastics of America&quot;/>
                        </manufacturer>
                        <property>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                    <code value=&quot;Thickness&quot;/>
                                    <display value=&quot;Thickness&quot;/>
                                </coding>
                            </type>
                            <valueQuantity>
                                <value value=&quot;150&quot;/>
                                <unit value=&quot;µm&quot;/>
                                <!-- todo ucum -->
                            </valueQuantity>
                        </property>
                        <property>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                    <code value=&quot;Quality Standard&quot;/>
                                    <display value=&quot;Quality Standard&quot;/>
                                </coding>
                            </type>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                    <code value=&quot;USP&quot;/>
                                    <display value=&quot;USP <661> Plastic Packaging Systems and Their Materials of Construction&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </property>
                        <property>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                    <code value=&quot;Quality Standard&quot;/>
                                    <display value=&quot;Quality Standard&quot;/>
                                </coding>
                            </type>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                    <code value=&quot;PhEur3111&quot;/>
                                    <display value=&quot;Materials Based on Non-Plasticised Poly Vinyl Chloride for Containers for Solid Dosage Forms and Oral Administration&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </property>
                        <property>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                    <code value=&quot;Quality Standard&quot;/>
                                    <display value=&quot;Quality Standard&quot;/>
                                </coding>
                            </type>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                    <code value=&quot;PhEur322&quot;/>
                                    <display value=&quot;Plastic Containers and Closures for Pharmaceutical Use&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </property>
                        <containedItem>
                            <item>
                                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/data-absent-reason&quot;>
                                    <valueCode value=&quot;unsupported&quot;/>
                                </extension>
                            </item>
                            <amount>
                                <value value=&quot;14&quot;/>
                                <unit value=&quot;tablets&quot;/>
                            </amount>
                        </containedItem>
                        <packaging>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/container-closure-type&quot;/>
                                    <code value=&quot;Blister Foil Lidding&quot;/>
                                    <display value=&quot;Blister Foil Lidding&quot;/>
                                </coding>
                            </type>
                            <componentPart value=&quot;true&quot;/>
                            <material>
                                <coding>
                                    <system value=&quot;http://hl7.org/fhir/package-material&quot;/>
                                    <code value=&quot;200000003200&quot;/>
                                    <display value=&quot;Aluminium&quot;/>
                                </coding>
                            </material>
                            <manufacturer>
                                <display value=&quot;Reynolds Wrap USA&quot;/>
                            </manufacturer>
                            <property>
                                <type>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                        <code value=&quot;Quality Standard&quot;/>
                                        <display value=&quot;Quality Standard&quot;/>
                                    </coding>
                                </type>
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                        <code value=&quot;USP&quot;/>
                                        <display value=&quot;USP <661> Plastic Packaging Systems and Their Materials of Construction&quot;/>
                                    </coding>
                                </valueCodeableConcept>
                            </property>
                            <property>
                                <type>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                        <code value=&quot;Quality Standard&quot;/>
                                        <display value=&quot;Quality Standard&quot;/>
                                    </coding>
                                </type>
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                        <code value=&quot;EU10-2011&quot;/>
                                        <display value=&quot;European Union Regulation 10/2011&quot;/>
                                    </coding>
                                </valueCodeableConcept>
                            </property>
                            <property>
                                <type>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                        <code value=&quot;Thickness&quot;/>
                                        <display value=&quot;Thickness&quot;/>
                                    </coding>
                                </type>
                                <valueQuantity>
                                    <value value=&quot;10&quot;/>
                                    <unit value=&quot;µm&quot;/>
                                    <!-- todo ucum -->
                                </valueQuantity>
                            </property>
                        </packaging>
                    </packaging>">Packaging</span><span class="summaryShowsOff"></span><div class="summaryHiddenOff">
<div class="summaryHiddenOff">
<div class="indent ppdl3"><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <property>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                <code value=&quot;Quality Standard&quot;/>
                                <display value=&quot;Quality Standard&quot;/>
                            </coding>
                        </type>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                <code value=&quot;EU1935-2004&quot;/>
                                <display value=&quot;European Commission Regulation 1935/2004&quot;/>
                            </coding>
                        </valueCodeableConcept>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <property>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                <code value=&quot;Quality Standard&quot;/>
                                <display value=&quot;Quality Standard&quot;/>
                            </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <property>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                <code value=&quot;Quality Standard&quot;/>
                                <display value=&quot;Quality Standard&quot;/>">Quality Standard<span class="greyOff"> [Quality Standard]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/package-property)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <property>
                        ...
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                <code value=&quot;EU1935-2004&quot;/>
                                <display value=&quot;European Commission Regulation 1935/2004&quot;/>
                            </coding>">Value: <span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <property>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                <code value=&quot;EU1935-2004&quot;/>
                                <display value=&quot;European Commission Regulation 1935/2004&quot;/>">European Commission Regulation 1935/2004<span class="greyOff"> [EU1935-2004]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/package-grade)</span></span></span></div>
</div>
</div>
<div class="summaryHiddenOff">
<div class="indent ppdl3"><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    ...
                    <property>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                <code value=&quot;Quality Standard&quot;/>
                                <display value=&quot;Quality Standard&quot;/>
                            </coding>
                        </type>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                <code value=&quot;EU78-142&quot;/>
                                <display value=&quot;European Union Council Directive 78/142/EEC&quot;/>
                            </coding>
                        </valueCodeableConcept>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <property>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                <code value=&quot;Quality Standard&quot;/>
                                <display value=&quot;Quality Standard&quot;/>
                            </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <property>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                <code value=&quot;Quality Standard&quot;/>
                                <display value=&quot;Quality Standard&quot;/>">Quality Standard<span class="greyOff"> [Quality Standard]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/package-property)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <property>
                        ...
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                <code value=&quot;EU78-142&quot;/>
                                <display value=&quot;European Union Council Directive 78/142/EEC&quot;/>
                            </coding>">Value: <span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <property>
                        <valueCodeableConcept>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                <code value=&quot;EU78-142&quot;/>
                                <display value=&quot;European Union Council Directive 78/142/EEC&quot;/>">European Union Council Directive 78/142/EEC<span class="greyOff"> [EU78-142]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/package-grade)</span></span></span></div>
</div>
</div>
</div>
<div class="indent ppdpackage summaryUnit"><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    ...
                    <packaging>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/container-closure-type&quot;/>
                                <code value=&quot;Blister&quot;/>
                                <display value=&quot;Blister&quot;/>
                                <!-- the actual blister -->
                            </coding>
                        </type>
                        <quantity value=&quot;2&quot;/>
                        <material>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/package-material&quot;/>
                                <code value=&quot;200000003222&quot;/>
                                <display value=&quot;PolyVinyl Chloride&quot;/>
                            </coding>
                        </material>
                        <manufacturer>
                            <display value=&quot;Plastics of America&quot;/>
                        </manufacturer>
                        <property>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                    <code value=&quot;Thickness&quot;/>
                                    <display value=&quot;Thickness&quot;/>
                                </coding>
                            </type>
                            <valueQuantity>
                                <value value=&quot;150&quot;/>
                                <unit value=&quot;µm&quot;/>
                                <!-- todo ucum -->
                            </valueQuantity>
                        </property>
                        <property>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                    <code value=&quot;Quality Standard&quot;/>
                                    <display value=&quot;Quality Standard&quot;/>
                                </coding>
                            </type>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                    <code value=&quot;USP&quot;/>
                                    <display value=&quot;USP <661> Plastic Packaging Systems and Their Materials of Construction&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </property>
                        <property>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                    <code value=&quot;Quality Standard&quot;/>
                                    <display value=&quot;Quality Standard&quot;/>
                                </coding>
                            </type>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                    <code value=&quot;PhEur3111&quot;/>
                                    <display value=&quot;Materials Based on Non-Plasticised Poly Vinyl Chloride for Containers for Solid Dosage Forms and Oral Administration&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </property>
                        <property>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                    <code value=&quot;Quality Standard&quot;/>
                                    <display value=&quot;Quality Standard&quot;/>
                                </coding>
                            </type>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                    <code value=&quot;PhEur322&quot;/>
                                    <display value=&quot;Plastic Containers and Closures for Pharmaceutical Use&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </property>
                        <containedItem>
                            <item>
                                <extension url=&quot;http://hl7.org/fhir/StructureDefinition/data-absent-reason&quot;>
                                    <valueCode value=&quot;unsupported&quot;/>
                                </extension>
                            </item>
                            <amount>
                                <value value=&quot;14&quot;/>
                                <unit value=&quot;tablets&quot;/>
                            </amount>
                        </containedItem>
                        <packaging>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/container-closure-type&quot;/>
                                    <code value=&quot;Blister Foil Lidding&quot;/>
                                    <display value=&quot;Blister Foil Lidding&quot;/>
                                </coding>
                            </type>
                            <componentPart value=&quot;true&quot;/>
                            <material>
                                <coding>
                                    <system value=&quot;http://hl7.org/fhir/package-material&quot;/>
                                    <code value=&quot;200000003200&quot;/>
                                    <display value=&quot;Aluminium&quot;/>
                                </coding>
                            </material>
                            <manufacturer>
                                <display value=&quot;Reynolds Wrap USA&quot;/>
                            </manufacturer>
                            <property>
                                <type>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                        <code value=&quot;Quality Standard&quot;/>
                                        <display value=&quot;Quality Standard&quot;/>
                                    </coding>
                                </type>
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                        <code value=&quot;USP&quot;/>
                                        <display value=&quot;USP <661> Plastic Packaging Systems and Their Materials of Construction&quot;/>
                                    </coding>
                                </valueCodeableConcept>
                            </property>
                            <property>
                                <type>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                        <code value=&quot;Quality Standard&quot;/>
                                        <display value=&quot;Quality Standard&quot;/>
                                    </coding>
                                </type>
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                        <code value=&quot;EU10-2011&quot;/>
                                        <display value=&quot;European Union Regulation 10/2011&quot;/>
                                    </coding>
                                </valueCodeableConcept>
                            </property>
                            <property>
                                <type>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                        <code value=&quot;Thickness&quot;/>
                                        <display value=&quot;Thickness&quot;/>
                                    </coding>
                                </type>
                                <valueQuantity>
                                    <value value=&quot;10&quot;/>
                                    <unit value=&quot;µm&quot;/>
                                    <!-- todo ucum -->
                                </valueQuantity>
                            </property>
                        </packaging>">Packaging</span><span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/container-closure-type&quot;/>
                                <code value=&quot;Blister&quot;/>
                                <display value=&quot;Blister&quot;/>
                                <!-- the actual blister -->">Blister<span class="greyOff"> [Blister]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/container-closure-type)</span></span>, <span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        ...
                        <quantity value=&quot;2&quot;>">2</span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/container-closure-type&quot;/>
                                <code value=&quot;Blister&quot;/>
                                <display value=&quot;Blister&quot;/>
                                <!-- the actual blister -->
                            </coding>">Type: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/container-closure-type&quot;/>
                                <code value=&quot;Blister&quot;/>
                                <display value=&quot;Blister&quot;/>
                                <!-- the actual blister -->">Blister<span class="greyOff"> [Blister]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/container-closure-type)</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        ...
                        <quantity value=&quot;2&quot;>">Quantity: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        ...
                        <quantity value=&quot;2&quot;>">2</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        ...
                        <material>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/package-material&quot;/>
                                <code value=&quot;200000003222&quot;/>
                                <display value=&quot;PolyVinyl Chloride&quot;/>
                            </coding>">Material: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <material>
                            <coding>
                                <system value=&quot;http://hl7.org/fhir/package-material&quot;/>
                                <code value=&quot;200000003222&quot;/>
                                <display value=&quot;PolyVinyl Chloride&quot;/>">PolyVinyl Chloride<span class="greyOff"> [200000003222]</span><span class="greyOff"> (http://hl7.org/fhir/package-material)</span></span></div>
<div class="indent ppdl3"><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        ...
                        <manufacturer>
                            <display value=&quot;Plastics of America&quot;/>">Manufacturer</span><div class="indent org"><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <manufacturer>
                            <display value=&quot;Plastics of America&quot;>">Display: Plastics of America</span></div>
</div>
<div class="summaryHiddenOff">
<div class="indent ppdl3"><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        ...
                        <property>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                    <code value=&quot;Thickness&quot;/>
                                    <display value=&quot;Thickness&quot;/>
                                </coding>
                            </type>
                            <valueQuantity>
                                <value value=&quot;150&quot;/>
                                <unit value=&quot;µm&quot;/>
                                <!-- todo ucum -->
                            </valueQuantity>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <property>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                    <code value=&quot;Thickness&quot;/>
                                    <display value=&quot;Thickness&quot;/>
                                </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <property>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                    <code value=&quot;Thickness&quot;/>
                                    <display value=&quot;Thickness&quot;/>">Thickness<span class="greyOff"> [Thickness]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/package-property)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <property>
                            ...
                            <valueQuantity>
                                <value value=&quot;150&quot;/>
                                <unit value=&quot;µm&quot;/>
                                <!-- todo ucum -->">Value: <span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <property>
                            ...
                            <valueQuantity>
                                <value value=&quot;150&quot;/>
                                <unit value=&quot;µm&quot;/>
                                <!-- todo ucum -->">150 µm</span></span></div>
</div>
</div>
<div class="summaryHiddenOff">
<div class="indent ppdl3"><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        ...
                        <property>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                    <code value=&quot;Quality Standard&quot;/>
                                    <display value=&quot;Quality Standard&quot;/>
                                </coding>
                            </type>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                    <code value=&quot;USP&quot;/>
                                    <display value=&quot;USP <661> Plastic Packaging Systems and Their Materials of Construction&quot;/>
                                </coding>
                            </valueCodeableConcept>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <property>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                    <code value=&quot;Quality Standard&quot;/>
                                    <display value=&quot;Quality Standard&quot;/>
                                </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <property>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                    <code value=&quot;Quality Standard&quot;/>
                                    <display value=&quot;Quality Standard&quot;/>">Quality Standard<span class="greyOff"> [Quality Standard]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/package-property)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <property>
                            ...
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                    <code value=&quot;USP&quot;/>
                                    <display value=&quot;USP <661> Plastic Packaging Systems and Their Materials of Construction&quot;/>
                                </coding>">Value: <span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <property>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                    <code value=&quot;USP&quot;/>
                                    <display value=&quot;USP <661> Plastic Packaging Systems and Their Materials of Construction&quot;/>">USP &lt;661&gt; Plastic Packaging Systems and Their Materials of Construction<span class="greyOff"> [USP]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/package-grade)</span></span></span></div>
</div>
</div>
<div class="summaryHiddenOff">
<div class="indent ppdl3"><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        ...
                        <property>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                    <code value=&quot;Quality Standard&quot;/>
                                    <display value=&quot;Quality Standard&quot;/>
                                </coding>
                            </type>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                    <code value=&quot;PhEur3111&quot;/>
                                    <display value=&quot;Materials Based on Non-Plasticised Poly Vinyl Chloride for Containers for Solid Dosage Forms and Oral Administration&quot;/>
                                </coding>
                            </valueCodeableConcept>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <property>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                    <code value=&quot;Quality Standard&quot;/>
                                    <display value=&quot;Quality Standard&quot;/>
                                </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <property>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                    <code value=&quot;Quality Standard&quot;/>
                                    <display value=&quot;Quality Standard&quot;/>">Quality Standard<span class="greyOff"> [Quality Standard]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/package-property)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <property>
                            ...
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                    <code value=&quot;PhEur3111&quot;/>
                                    <display value=&quot;Materials Based on Non-Plasticised Poly Vinyl Chloride for Containers for Solid Dosage Forms and Oral Administration&quot;/>
                                </coding>">Value: <span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <property>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                    <code value=&quot;PhEur3111&quot;/>
                                    <display value=&quot;Materials Based on Non-Plasticised Poly Vinyl Chloride for Containers for Solid Dosage Forms and Oral Administration&quot;/>">Materials Based on Non-Plasticised Poly Vinyl Chloride for Containers for Solid Dosage Forms and Oral Administration<span class="greyOff"> [PhEur3111]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/package-grade)</span></span></span></div>
</div>
</div>
<div class="summaryHiddenOff">
<div class="indent ppdl3"><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        ...
                        <property>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                    <code value=&quot;Quality Standard&quot;/>
                                    <display value=&quot;Quality Standard&quot;/>
                                </coding>
                            </type>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                    <code value=&quot;PhEur322&quot;/>
                                    <display value=&quot;Plastic Containers and Closures for Pharmaceutical Use&quot;/>
                                </coding>
                            </valueCodeableConcept>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <property>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                    <code value=&quot;Quality Standard&quot;/>
                                    <display value=&quot;Quality Standard&quot;/>
                                </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <property>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                    <code value=&quot;Quality Standard&quot;/>
                                    <display value=&quot;Quality Standard&quot;/>">Quality Standard<span class="greyOff"> [Quality Standard]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/package-property)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <property>
                            ...
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                    <code value=&quot;PhEur322&quot;/>
                                    <display value=&quot;Plastic Containers and Closures for Pharmaceutical Use&quot;/>
                                </coding>">Value: <span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <property>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                    <code value=&quot;PhEur322&quot;/>
                                    <display value=&quot;Plastic Containers and Closures for Pharmaceutical Use&quot;/>">Plastic Containers and Closures for Pharmaceutical Use<span class="greyOff"> [PhEur322]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/package-grade)</span></span></span></div>
</div>
</div>
</div>
<div class="indent ppdpackageitem"><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        ...
                        <packaging>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/container-closure-type&quot;/>
                                    <code value=&quot;Blister Foil Lidding&quot;/>
                                    <display value=&quot;Blister Foil Lidding&quot;/>
                                </coding>
                            </type>
                            <componentPart value=&quot;true&quot;/>
                            <material>
                                <coding>
                                    <system value=&quot;http://hl7.org/fhir/package-material&quot;/>
                                    <code value=&quot;200000003200&quot;/>
                                    <display value=&quot;Aluminium&quot;/>
                                </coding>
                            </material>
                            <manufacturer>
                                <display value=&quot;Reynolds Wrap USA&quot;/>
                            </manufacturer>
                            <property>
                                <type>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                        <code value=&quot;Quality Standard&quot;/>
                                        <display value=&quot;Quality Standard&quot;/>
                                    </coding>
                                </type>
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                        <code value=&quot;USP&quot;/>
                                        <display value=&quot;USP <661> Plastic Packaging Systems and Their Materials of Construction&quot;/>
                                    </coding>
                                </valueCodeableConcept>
                            </property>
                            <property>
                                <type>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                        <code value=&quot;Quality Standard&quot;/>
                                        <display value=&quot;Quality Standard&quot;/>
                                    </coding>
                                </type>
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                        <code value=&quot;EU10-2011&quot;/>
                                        <display value=&quot;European Union Regulation 10/2011&quot;/>
                                    </coding>
                                </valueCodeableConcept>
                            </property>
                            <property>
                                <type>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                        <code value=&quot;Thickness&quot;/>
                                        <display value=&quot;Thickness&quot;/>
                                    </coding>
                                </type>
                                <valueQuantity>
                                    <value value=&quot;10&quot;/>
                                    <unit value=&quot;µm&quot;/>
                                    <!-- todo ucum -->
                                </valueQuantity>
                            </property>">Packaging (part)</span><span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <packaging>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/container-closure-type&quot;/>
                                    <code value=&quot;Blister Foil Lidding&quot;/>
                                    <display value=&quot;Blister Foil Lidding&quot;/>">Blister Foil Lidding<span class="greyOff"> [Blister Foil Lidding]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/container-closure-type)</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <packaging>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/container-closure-type&quot;/>
                                    <code value=&quot;Blister Foil Lidding&quot;/>
                                    <display value=&quot;Blister Foil Lidding&quot;/>
                                </coding>">Type: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <packaging>
                            <type>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/container-closure-type&quot;/>
                                    <code value=&quot;Blister Foil Lidding&quot;/>
                                    <display value=&quot;Blister Foil Lidding&quot;/>">Blister Foil Lidding<span class="greyOff"> [Blister Foil Lidding]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/container-closure-type)</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <packaging>
                            ...
                            <componentPart value=&quot;true&quot;>">Component Part: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <packaging>
                            ...
                            <componentPart value=&quot;true&quot;>"><span>true</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <packaging>
                            ...
                            <material>
                                <coding>
                                    <system value=&quot;http://hl7.org/fhir/package-material&quot;/>
                                    <code value=&quot;200000003200&quot;/>
                                    <display value=&quot;Aluminium&quot;/>
                                </coding>">Material: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <packaging>
                            <material>
                                <coding>
                                    <system value=&quot;http://hl7.org/fhir/package-material&quot;/>
                                    <code value=&quot;200000003200&quot;/>
                                    <display value=&quot;Aluminium&quot;/>">Aluminium<span class="greyOff"> [200000003200]</span><span class="greyOff"> (http://hl7.org/fhir/package-material)</span></span></div>
<div class="indent ppdl3"><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <packaging>
                            ...
                            <manufacturer>
                                <display value=&quot;Reynolds Wrap USA&quot;/>">Manufacturer</span><div class="indent org"><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <packaging>
                            <manufacturer>
                                <display value=&quot;Reynolds Wrap USA&quot;>">Display: Reynolds Wrap USA</span></div>
</div>
<div class="summaryHiddenOff">
<div class="indent ppdl3"><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <packaging>
                            ...
                            <property>
                                <type>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                        <code value=&quot;Quality Standard&quot;/>
                                        <display value=&quot;Quality Standard&quot;/>
                                    </coding>
                                </type>
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                        <code value=&quot;USP&quot;/>
                                        <display value=&quot;USP <661> Plastic Packaging Systems and Their Materials of Construction&quot;/>
                                    </coding>
                                </valueCodeableConcept>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <packaging>
                            <property>
                                <type>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                        <code value=&quot;Quality Standard&quot;/>
                                        <display value=&quot;Quality Standard&quot;/>
                                    </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <packaging>
                            <property>
                                <type>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                        <code value=&quot;Quality Standard&quot;/>
                                        <display value=&quot;Quality Standard&quot;/>">Quality Standard<span class="greyOff"> [Quality Standard]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/package-property)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <packaging>
                            <property>
                                ...
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                        <code value=&quot;USP&quot;/>
                                        <display value=&quot;USP <661> Plastic Packaging Systems and Their Materials of Construction&quot;/>
                                    </coding>">Value: <span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <packaging>
                            <property>
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                        <code value=&quot;USP&quot;/>
                                        <display value=&quot;USP <661> Plastic Packaging Systems and Their Materials of Construction&quot;/>">USP &lt;661&gt; Plastic Packaging Systems and Their Materials of Construction<span class="greyOff"> [USP]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/package-grade)</span></span></span></div>
</div>
</div>
<div class="summaryHiddenOff">
<div class="indent ppdl3"><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <packaging>
                            ...
                            <property>
                                <type>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                        <code value=&quot;Quality Standard&quot;/>
                                        <display value=&quot;Quality Standard&quot;/>
                                    </coding>
                                </type>
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                        <code value=&quot;EU10-2011&quot;/>
                                        <display value=&quot;European Union Regulation 10/2011&quot;/>
                                    </coding>
                                </valueCodeableConcept>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <packaging>
                            <property>
                                <type>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                        <code value=&quot;Quality Standard&quot;/>
                                        <display value=&quot;Quality Standard&quot;/>
                                    </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <packaging>
                            <property>
                                <type>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                        <code value=&quot;Quality Standard&quot;/>
                                        <display value=&quot;Quality Standard&quot;/>">Quality Standard<span class="greyOff"> [Quality Standard]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/package-property)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <packaging>
                            <property>
                                ...
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                        <code value=&quot;EU10-2011&quot;/>
                                        <display value=&quot;European Union Regulation 10/2011&quot;/>
                                    </coding>">Value: <span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <packaging>
                            <property>
                                <valueCodeableConcept>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-grade&quot;/>
                                        <code value=&quot;EU10-2011&quot;/>
                                        <display value=&quot;European Union Regulation 10/2011&quot;/>">European Union Regulation 10/2011<span class="greyOff"> [EU10-2011]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/package-grade)</span></span></span></div>
</div>
</div>
<div class="summaryHiddenOff">
<div class="indent ppdl3"><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <packaging>
                            ...
                            <property>
                                <type>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                        <code value=&quot;Thickness&quot;/>
                                        <display value=&quot;Thickness&quot;/>
                                    </coding>
                                </type>
                                <valueQuantity>
                                    <value value=&quot;10&quot;/>
                                    <unit value=&quot;µm&quot;/>
                                    <!-- todo ucum -->
                                </valueQuantity>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <packaging>
                            <property>
                                <type>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                        <code value=&quot;Thickness&quot;/>
                                        <display value=&quot;Thickness&quot;/>
                                    </coding>">Type: <span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <packaging>
                            <property>
                                <type>
                                    <coding>
                                        <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                        <code value=&quot;Thickness&quot;/>
                                        <display value=&quot;Thickness&quot;/>">Thickness<span class="greyOff"> [Thickness]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/package-property)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <packaging>
                            <property>
                                ...
                                <valueQuantity>
                                    <value value=&quot;10&quot;/>
                                    <unit value=&quot;µm&quot;/>
                                    <!-- todo ucum -->">Value: <span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <packaging>
                            <property>
                                ...
                                <valueQuantity>
                                    <value value=&quot;10&quot;/>
                                    <unit value=&quot;µm&quot;/>
                                    <!-- todo ucum -->">10 µm</span></span></div>
</div>
</div>
</div>
</div>
<div class="indent ppdpackageitem" title=""><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <packaging>
                        <containedItem>
                            ...
                            <amount>
                                <value value=&quot;14&quot;/>
                                <unit value=&quot;tablets&quot;/>">Amount: </span><span>14 tablets</span></div>
</div>
</div>
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
		First resource in bundle:MedicinalProductDefinition
		Single resource bundle:false
		Single resource bundle Not Patient Or Bundle:false
		Single resource Not Patient:false
		Patient document:false
		General Bundle:false
		Not patient related:true
		=>Patient Centric Mode:false
		SubstanceDef Centric Mode:false
		Assumed profile:-->
</html>
