The HTML rendering below shows a synthetic Quality data example for Common Technical Document (CTD) Module 3: Quality, section 3.2.S.6 Container Closure System.
<html>
<body>
<div class="divBody">
<p>
						This is the same data as in the example files here in <a href="Bundle-bundle-container-closure-system-pq-ex2-sub.xml.html">xml</a> and in <a href="Bundle-bundle-container-closure-system-pq-ex2-sub.json.html">json</a>, presented for easier viewing.
						Hovering on words below will show the corresponding sections of the underlying data.
					</p>
</div>
<div class="greyable">
<div class="divBody">
<div style="position:relative" class="summaryUnit">
<div class="debugOffBorder">
<div class="bundleBorder">
<div class="debugOff">
<div class="bundle"><a class="plainLink"><span class="bold" title="Bundle (id: bundle-container-closure-system-pq-ex2-sub)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-container-closure-system-pq 

<Bundle>
    <id value=&quot;bundle-container-closure-system-pq-ex2-sub&quot;/>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-container-closure-system-pq&quot;/>
    </meta>
    <type value=&quot;collection&quot;/>
    <entry>
        <fullUrl value=&quot;urn:uuid:878c2849-792c-6469-21a2-c2b920930962&quot;/>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;substance1&quot;/>
                <name>
                    <name value=&quot;Stelbatolol&quot;/>
                </name>
            </SubstanceDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:b107a2ba-32d8-0124-7855-4096057c52a9&quot;/>
        <resource>
            <PackagedProductDefinition>
                <id value=&quot;packageDefinition&quot;/>
                <!-- no product referenced, instead link works via the contained manufactured item -->
                <description value=&quot;Any textual comments that describe the sum of container closure system (CCS) components that together contain and protect the dosage form or drug substance.&quot;/>
                <!-- secondary packaging -->
                <packaging>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/packaging-type&quot;/>
                            <code value=&quot;100000073493&quot;/>
                            <display value=&quot;Bag&quot;/>
                        </coding>
                    </type>
                    <material>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/package-material&quot;/>
                            <code value=&quot;200000003216&quot;/>
                            <display value=&quot;Low Density PolyEthylene&quot;/>
                        </coding>
                    </material>
                    <property>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                <code value=&quot;Quality Specification&quot;/>
                                <display value=&quot;Quality Specification&quot;/>
                            </coding>
                        </type>
                        <valueCodeableConcept>
                            <text value=&quot;Complies with FDA 21 CFR 177.1520 (c) 2.2 (olefin polymers)&quot;/>
                        </valueCodeableConcept>
                    </property>
                    <property>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                <code value=&quot;Quality Specification&quot;/>
                                <display value=&quot;Quality Specification&quot;/>
                            </coding>
                        </type>
                        <valueCodeableConcept>
                            <text value=&quot;Complies with Commission Regulation (EU) No. 10/2011 including its amendments EU 321/2011, EU  1282/2011, EU 1183/2012, EU 202/2014 and EU 2015/174 Complies with Ph. Eur. 3.2.2&quot;/>
                        </valueCodeableConcept>
                    </property>
                    <containedItem>
                        <item>
                            <reference>
                                <reference value=&quot;ManufacturedItemDefinition/manufactureditemdefinition-drug-pq-ex1&quot;/>
                            </reference>
                        </item>
                    </containedItem>
                    <!-- closure for secondary
                        packaging -->
                </packaging>
            </PackagedProductDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:b107a2ba-32d8-0124-7855-4096057c52b9&quot;/>
        <resource>
            <PackagedProductDefinition>
                <id value=&quot;packageDefinition2&quot;/>
                <!-- no product referenced, instead link works via the contained manufactured item -->
                <description value=&quot;Any textual comments that describe the sum of container closure system (CCS) components that together contain and protect the dosage form or drug substance.&quot;/>
                <!-- secondary packaging -->
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
                    <containedItem>
                        <item>
                            <reference>
                                <reference value=&quot;ManufacturedItemDefinition/manufactureditemdefinition-drug-pq-ex1&quot;/>
                            </reference>
                        </item>
                    </containedItem>
                    <!-- closure for secondary
                        packaging -->
                </packaging>
            </PackagedProductDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:1531c777-50c3-047d-2798-de3d001d2c44&quot;/>
        <resource>
            <ManufacturedItemDefinition>
                <id value=&quot;manufactureditemdefinition-drug-pq-ex1&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/ManufacturedItemDefinition-drug-pq&quot;/>
                </meta>
                <status value=&quot;active&quot;/>
                <manufacturedDoseForm>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/data-absent-reason&quot;>
                        <valueCode value=&quot;unsupported&quot;/>
                    </extension>
                </manufacturedDoseForm>
            </ManufacturedItemDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:f26b997a-3ab9-7552-a6cc-fd771d1f1863&quot;/>
        <resource>
            <!-- ingredient is only needed to link substance to packaging, via manufactured item -->
            <Ingredient>
                <id value=&quot;ingredient1&quot;/>
                <status value=&quot;active&quot;/>
                <for>
                    <reference value=&quot;ManufacturedItemDefinition/manufactureditemdefinition-drug-pq-ex1&quot;/>
                </for>
                <role>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/data-absent-reason&quot;>
                        <valueCode value=&quot;not-applicable&quot;/>
                    </extension>
                </role>
                <substance>
                    <code>
                        <reference>
                            <!-- this links this to the substance -->
                            <reference value=&quot;SubstanceDefinition/substance1&quot;/>
                            <display value=&quot;WizzoSubstance&quot;/>
                        </reference>
                    </code>
                </substance>
            </Ingredient>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763f&quot;/>
        <resource>
            <PlanDefinition>
                <id value=&quot;packagingSpecification-unlinked&quot;/>
                <!--extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tabulateBatchesInRows-biologic&quot;>
                    <valueBoolean value=&quot;true&quot;/>
                </extension-->
                <url value=&quot;http://example-server.com/fhir/PlanDefinition/2138e4c7-22b8-4c56-2d28-6c077648763f&quot;/>
                <title value=&quot;Specification and Analytical Procedures&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/plan-definition-type&quot;/>
                        <code value=&quot;workflow-definition&quot;/>
                        <display value=&quot;Workflow Definition&quot;/>
                    </coding>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-plan-type&quot;/>
                        <code value=&quot;container-specification&quot;/>
                        <display value=&quot;Container Specification&quot;/>
                    </coding>
                </type>
                <status value=&quot;active&quot;/>
                <subjectReference>
                    <reference value=&quot;PackagedProductDefinition/packageDefinition&quot;/>
                </subjectReference>
                <description value=&quot;Packaging components are sampled, tested, and examined for conformance with written specifications.                The specification for the primary packaging component are provided in Table 1.&quot;/>
                <action>
                    <title value=&quot;Container Specification&quot;/>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-specification-type-pq-example&quot;/>
                            <code value=&quot;Container Specification&quot;/>
                            <display value=&quot;Container Specification&quot;/>
                        </coding>
                        <text value=&quot;Container Specification&quot;/>
                    </code>
                    <action>
                        <description value=&quot;Container Type&quot;/>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <!--definitionCanonical value=&quot;ObservationDefinition/VisualInspection&quot;/-->
                        <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/64525b3c-5134-448a-9d19-939ce1958524&quot;/>
                    </action>
                    <action>
                        <description value=&quot;Material Identification&quot;/>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <!--definitionCanonical value=&quot;ObservationDefinition/InfraredSpectroscopy&quot;/-->
                        <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/64525b3c-5134-448a-9d19-939ce1958525&quot;/>
                    </action>
                    <action>
                        <description value=&quot;Material Conformity&quot;/>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <!--definitionCanonical value=&quot;ObservationDefinition/SupplierCertificateofAnalysis&quot;/-->
                        <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/64525b3c-5134-448a-9d19-939ce1958535&quot;/>
                    </action>
                </action>
            </PlanDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:64525b3c-5134-448a-9d19-939ce1958524&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;VisualInspection&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/64525b3c-5134-448a-9d19-939ce1958524&quot;/>
                <title value=&quot;Visual Inspection&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;VisualInspection&quot;/>
                        <display value=&quot;VisualInspection&quot;/>
                    </coding>
                </code>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;Corresponds&quot;/>
                    </extension>
                </qualifiedValue>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:64525b3c-5134-448a-9d19-939ce1958525&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;InfraredSpectroscopy&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/64525b3c-5134-448a-9d19-939ce1958525&quot;/>
                <title value=&quot;Infrared Spectroscopy&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;InfraredSpectroscopy&quot;/>
                        <display value=&quot;InfraredSpectroscopy&quot;/>
                    </coding>
                </code>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;Corresponds with reference&quot;/>
                    </extension>
                </qualifiedValue>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:64525b3c-5134-448a-9d19-939ce1958535&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;SupplierCertificateofAnalysis&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/64525b3c-5134-448a-9d19-939ce1958535&quot;/>
                <title value=&quot;Supplier Certificate of Analysis&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;SupplierCertificateofAnalysis&quot;/>
                        <display value=&quot;SupplierCertificateofAnalysis&quot;/>
                    </coding>
                </code>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;Corresponds&quot;/>
                    </extension>
                </qualifiedValue>
            </ObservationDefinition>
        </resource>
    </entry>" id="Bundle-bundle-container-closure-system-pq-ex2-sub">Bundle</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/bundle.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/bundle.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/bundle.html#tt-uml">R6</a>]</span><div class="debugOff">id: bundle-container-closure-system-pq-ex2-sub</div>
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
<div class="indent sbd summaryUnit">
<div class="debugOff"><span>Found a parent (Ingredient/code, id: ingredient1 fullUrl: urn:uuid:f26b997a-3ab9-7552-a6cc-fd771d1f1863)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: substance1)(fullUrl: urn:uuid:878c2849-792c-6469-21a2-c2b920930962)

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;substance1&quot;/>
                <name>
                    <name value=&quot;Stelbatolol&quot;/>
                </name>" id="SubstanceDefinition-substance1">Substance</span></a><span class="summaryShowsOff"><b> - Stelbatolol</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substancedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: substance1</div>
<div class="debugOff"> fullUrl: urn:uuid:878c2849-792c-6469-21a2-c2b920930962</div>
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
<div class="indent sbddetails"><span title="SubstanceDefinition (id: substance1)(fullUrl: urn:uuid:878c2849-792c-6469-21a2-c2b920930962)

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;substance1&quot;/>
                <name>
                    <name value=&quot;Stelbatolol&quot;/>
                </name>">Used as</span><div class="indent ing summaryUnit"><a class="plainLink"><span class="bold" title="Ingredient (id: ingredient1)(fullUrl: urn:uuid:f26b997a-3ab9-7552-a6cc-fd771d1f1863)

<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <id value=&quot;ingredient1&quot;/>
                <status value=&quot;active&quot;/>
                <for>
                    <reference value=&quot;ManufacturedItemDefinition/manufactureditemdefinition-drug-pq-ex1&quot;/>
                </for>
                <role>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/data-absent-reason&quot;>
                        <valueCode value=&quot;not-applicable&quot;/>
                    </extension>
                </role>
                <substance>
                    <code>
                        <reference>
                            <!-- this links this to the substance -->
                            <reference value=&quot;SubstanceDefinition/substance1&quot;/>
                            <display value=&quot;WizzoSubstance&quot;/>
                        </reference>
                    </code>
                </substance>" id="Ingredient-ingredient1">Ingredient</span></a><span class="summaryShowsOff"></span><div class="summaryHiddenOff"><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/ingredient.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/ingredient.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/ingredient.html#tt-uml">R6</a>]</span><div class="debugOff">id: ingredient1</div><div class="debugOff"> fullUrl: urn:uuid:f26b997a-3ab9-7552-a6cc-fd771d1f1863</div><div class="debugOff"><span title="
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
                <status value=&quot;active&quot;>"><span>active</span></span></div></div><div class="indent ingsub"><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                ...
                <substance>
                    <code>
                        <reference>
                            <!-- this links this to the substance -->
                            <reference value=&quot;SubstanceDefinition/substance1&quot;/>
                            <display value=&quot;WizzoSubstance&quot;/>
                        </reference>
                    </code>" class="summaryHiddenOff">Substance</span>: Stelbatolol (<a href="#SubstanceDefinition-substance1" title="click to see target - id=substance1">SubstanceDefinition</a>)<span class="debugOff"> id: substance1</span><div class="summaryHiddenOff"></div></div><div class="indent ingsub"><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                ...
                <for>
                    <reference value=&quot;ManufacturedItemDefinition/manufactureditemdefinition-drug-pq-ex1&quot;/>">For</span><div class="indent man summaryUnit"><div class="debugOff"><span>Found a parent (PackagedProductDefinition/item, id: packageDefinition fullUrl: urn:uuid:b107a2ba-32d8-0124-7855-4096057c52a9)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (PackagedProductDefinition/item, id: packageDefinition2 fullUrl: urn:uuid:b107a2ba-32d8-0124-7855-4096057c52b9)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Ingredient/for, id: ingredient1 fullUrl: urn:uuid:f26b997a-3ab9-7552-a6cc-fd771d1f1863)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="ManufacturedItemDefinition (id: manufactureditemdefinition-drug-pq-ex1)(fullUrl: urn:uuid:1531c777-50c3-047d-2798-de3d001d2c44)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/ManufacturedItemDefinition-drug-pq 

<Bundle>
    <entry>
        <resource>
            <ManufacturedItemDefinition>
                <id value=&quot;manufactureditemdefinition-drug-pq-ex1&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/ManufacturedItemDefinition-drug-pq&quot;/>
                </meta>
                <status value=&quot;active&quot;/>
                <manufacturedDoseForm>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/data-absent-reason&quot;>
                        <valueCode value=&quot;unsupported&quot;/>
                    </extension>
                </manufacturedDoseForm>" id="ManufacturedItemDefinition-manufactureditemdefinition-drug-pq-ex1">Manufactured Item</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/manufactureditemdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/manufactureditemdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/manufactureditemdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: manufactureditemdefinition-drug-pq-ex1</div><div class="debugOff"> fullUrl: urn:uuid:1531c777-50c3-047d-2798-de3d001d2c44</div><div class="debugOff"></div><div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ManufacturedItemDefinition>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/ManufacturedItemDefinition-drug-pq&quot;>">Profile: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ManufacturedItemDefinition>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/ManufacturedItemDefinition-drug-pq&quot;>">http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/ManufacturedItemDefinition-drug-pq</span></div><span class="summaryShowsOff"></span><div class="summaryHiddenOff"><div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ManufacturedItemDefinition>
                ...
                <status value=&quot;active&quot;>">Status: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ManufacturedItemDefinition>
                ...
                <status value=&quot;active&quot;>"><span>active</span></span></div></div><div class="indent manl2"><span title="ManufacturedItemDefinition (id: manufactureditemdefinition-drug-pq-ex1)(fullUrl: urn:uuid:1531c777-50c3-047d-2798-de3d001d2c44)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/ManufacturedItemDefinition-drug-pq 

<Bundle>
    <entry>
        <resource>
            <ManufacturedItemDefinition>
                <id value=&quot;manufactureditemdefinition-drug-pq-ex1&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/ManufacturedItemDefinition-drug-pq&quot;/>
                </meta>
                <status value=&quot;active&quot;/>
                <manufacturedDoseForm>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/data-absent-reason&quot;>
                        <valueCode value=&quot;unsupported&quot;/>
                    </extension>
                </manufacturedDoseForm>">Packaged in</span><div class="indent ppdpackage summaryUnit"><a title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                ...
                <packaging>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/packaging-type&quot;/>
                            <code value=&quot;100000073493&quot;/>
                            <display value=&quot;Bag&quot;/>
                        </coding>
                    </type>
                    <material>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/package-material&quot;/>
                            <code value=&quot;200000003216&quot;/>
                            <display value=&quot;Low Density PolyEthylene&quot;/>
                        </coding>
                    </material>
                    <property>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                <code value=&quot;Quality Specification&quot;/>
                                <display value=&quot;Quality Specification&quot;/>
                            </coding>
                        </type>
                        <valueCodeableConcept>
                            <text value=&quot;Complies with FDA 21 CFR 177.1520 (c) 2.2 (olefin polymers)&quot;/>
                        </valueCodeableConcept>
                    </property>
                    <property>
                        <type>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/package-property&quot;/>
                                <code value=&quot;Quality Specification&quot;/>
                                <display value=&quot;Quality Specification&quot;/>
                            </coding>
                        </type>
                        <valueCodeableConcept>
                            <text value=&quot;Complies with Commission Regulation (EU) No. 10/2011 including its amendments EU 321/2011, EU  1282/2011, EU 1183/2012, EU 202/2014 and EU 2015/174 Complies with Ph. Eur. 3.2.2&quot;/>
                        </valueCodeableConcept>
                    </property>
                    <containedItem>
                        <item>
                            <reference>
                                <reference value=&quot;ManufacturedItemDefinition/manufactureditemdefinition-drug-pq-ex1&quot;/>
                            </reference>
                        </item>
                    </containedItem>
                    <!-- closure for secondary
                        packaging -->" id="PackagedProductDefinition-packageDefinition">Packaging</a><span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/packaging-type&quot;/>
                            <code value=&quot;100000073493&quot;/>
                            <display value=&quot;Bag&quot;/>">Bag<span class="greyOff"> [100000073493]</span><span class="greyOff"> (http://hl7.org/fhir/packaging-type)</span></span></span><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/packaging-type&quot;/>
                            <code value=&quot;100000073493&quot;/>
                            <display value=&quot;Bag&quot;/>
                        </coding>">Type: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/packaging-type&quot;/>
                            <code value=&quot;100000073493&quot;/>
                            <display value=&quot;Bag&quot;/>">Bag<span class="greyOff"> [100000073493]</span><span class="greyOff"> (http://hl7.org/fhir/packaging-type)</span></span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    ...
                    <material>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/package-material&quot;/>
                            <code value=&quot;200000003216&quot;/>
                            <display value=&quot;Low Density PolyEthylene&quot;/>
                        </coding>">Material: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <material>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/package-material&quot;/>
                            <code value=&quot;200000003216&quot;/>
                            <display value=&quot;Low Density PolyEthylene&quot;/>">Low Density PolyEthylene<span class="greyOff"> [200000003216]</span><span class="greyOff"> (http://hl7.org/fhir/package-material)</span></span></div><div class="summaryHiddenOff"><div class="indent ppdl3"><span title="
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
                                <code value=&quot;Quality Specification&quot;/>
                                <display value=&quot;Quality Specification&quot;/>
                            </coding>
                        </type>
                        <valueCodeableConcept>
                            <text value=&quot;Complies with FDA 21 CFR 177.1520 (c) 2.2 (olefin polymers)&quot;/>
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
                                <code value=&quot;Quality Specification&quot;/>
                                <display value=&quot;Quality Specification&quot;/>
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
                                <code value=&quot;Quality Specification&quot;/>
                                <display value=&quot;Quality Specification&quot;/>">Quality Specification<span class="greyOff"> [Quality Specification]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/package-property)</span></span></span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <property>
                        ...
                        <valueCodeableConcept>
                            <text value=&quot;Complies with FDA 21 CFR 177.1520 (c) 2.2 (olefin polymers)&quot;/>">Value: <span style="white-space:normal;">Complies with FDA 21 CFR 177.1520 (c) 2.2 (olefin polymers)</span></span></div></div></div><div class="summaryHiddenOff"><div class="indent ppdl3"><span title="
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
                                <code value=&quot;Quality Specification&quot;/>
                                <display value=&quot;Quality Specification&quot;/>
                            </coding>
                        </type>
                        <valueCodeableConcept>
                            <text value=&quot;Complies with Commission Regulation (EU) No. 10/2011 including its amendments EU 321/2011, EU  1282/2011, EU 1183/2012, EU 202/2014 and EU 2015/174 Complies with Ph. Eur. 3.2.2&quot;/>
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
                                <code value=&quot;Quality Specification&quot;/>
                                <display value=&quot;Quality Specification&quot;/>
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
                                <code value=&quot;Quality Specification&quot;/>
                                <display value=&quot;Quality Specification&quot;/>">Quality Specification<span class="greyOff"> [Quality Specification]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/package-property)</span></span></span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <property>
                        ...
                        <valueCodeableConcept>
                            <text value=&quot;Complies with Commission Regulation (EU) No. 10/2011 including its amendments EU 321/2011, EU  1282/2011, EU 1183/2012, EU 202/2014 and EU 2015/174 Complies with Ph. Eur. 3.2.2&quot;/>">Value: <span style="white-space:normal;">Complies with Commission Regulation (EU) No. 10/2011 including its amendments EU 321/2011, EU  1282/2011, EU 1183/2012, EU 202/2014 and EU 2015/174 Complies with Ph. Eur. 3.2.2</span></span></div></div></div></div></div><div class="indent ppdpackage summaryUnit"><a title="
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
                    <containedItem>
                        <item>
                            <reference>
                                <reference value=&quot;ManufacturedItemDefinition/manufactureditemdefinition-drug-pq-ex1&quot;/>
                            </reference>
                        </item>
                    </containedItem>
                    <!-- closure for secondary
                        packaging -->" id="PackagedProductDefinition-packageDefinition2">Packaging</a><span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <type>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/packaging-type&quot;/>
                            <code value=&quot;100000073497&quot;/>
                            <display value=&quot;Bottle&quot;/>">Bottle<span class="greyOff"> [100000073497]</span><span class="greyOff"> (http://hl7.org/fhir/packaging-type)</span></span></span><div class="summaryHiddenOff"><div><span title="
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
                            <display value=&quot;Bottle&quot;/>">Bottle<span class="greyOff"> [100000073497]</span><span class="greyOff"> (http://hl7.org/fhir/packaging-type)</span></span></div><div><span title="
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
                            <display value=&quot;High Density PolyEthylene&quot;/>">High Density PolyEthylene<span class="greyOff"> [200000003215]</span><span class="greyOff"> (http://hl7.org/fhir/package-material)</span></span></div></div></div></div></div></div><div class="summaryHiddenOff"></div></div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
</div>
<div class="htmlTableRemove"><br style="line-height:6px;"><div class="indent-no-border">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <title value=&quot;Container Specification&quot;>">Table 1: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <title value=&quot;Container Specification&quot;>">Container Specification</span></div><br style="line-height:6px;"><br style="line-height:6px;"><table class="rounded-corners white" id="tabularModeTable" style="width:70%">
<tr>
<th rowspan="1">Attribute</th><th rowspan="1">Analytical Procedure</th><th colspan="0">Acceptance Criteria</th>
</tr>
<tr>
<td><a href="#urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763f" title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <description value=&quot;Container Type&quot;>" class="noUnderline">Container Type</a></td>
<td class="centred"><a href="#ObservationDefinition-VisualInspection" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Visual Inspection&quot;>" class="noUnderline">Visual Inspection</a></td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;Corresponds&quot;>">Corresponds</span></td>
</tr>
<tr>
<td><a href="#urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763f" title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <description value=&quot;Material Identification&quot;>" class="noUnderline">Material Identification</a></td>
<td class="centred"><a href="#ObservationDefinition-InfraredSpectroscopy" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Infrared Spectroscopy&quot;>" class="noUnderline">Infrared Spectroscopy</a></td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;Corresponds with reference&quot;>">Corresponds with reference</span></td>
</tr>
<tr>
<td><a href="#urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763f" title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <description value=&quot;Material Conformity&quot;>" class="noUnderline">Material Conformity</a></td>
<td class="centred"><a href="#ObservationDefinition-SupplierCertificateofAnalysis" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Supplier Certificate of Analysis&quot;>" class="noUnderline">Supplier Certificate of Analysis</a></td>
<td class="centred"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;Corresponds&quot;>">Corresponds</span></td>
</tr>
</table>
</div><br style="line-height:6px;"></div>
<div class="indent plan summaryUnit"><a class="plainLink"><span class="bold" title="PlanDefinition (id: packagingSpecification-unlinked)(fullUrl: urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763f)

<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <id value=&quot;packagingSpecification-unlinked&quot;/>
                <!--extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tabulateBatchesInRows-biologic&quot;>
                    <valueBoolean value=&quot;true&quot;/>
                </extension-->
                <url value=&quot;http://example-server.com/fhir/PlanDefinition/2138e4c7-22b8-4c56-2d28-6c077648763f&quot;/>
                <title value=&quot;Specification and Analytical Procedures&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/plan-definition-type&quot;/>
                        <code value=&quot;workflow-definition&quot;/>
                        <display value=&quot;Workflow Definition&quot;/>
                    </coding>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-plan-type&quot;/>
                        <code value=&quot;container-specification&quot;/>
                        <display value=&quot;Container Specification&quot;/>
                    </coding>
                </type>
                <status value=&quot;active&quot;/>
                <subjectReference>
                    <reference value=&quot;PackagedProductDefinition/packageDefinition&quot;/>
                </subjectReference>
                <description value=&quot;Packaging components are sampled, tested, and examined for conformance with written specifications.                The specification for the primary packaging component are provided in Table 1.&quot;/>
                <action>
                    <title value=&quot;Container Specification&quot;/>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-specification-type-pq-example&quot;/>
                            <code value=&quot;Container Specification&quot;/>
                            <display value=&quot;Container Specification&quot;/>
                        </coding>
                        <text value=&quot;Container Specification&quot;/>
                    </code>
                    <action>
                        <description value=&quot;Container Type&quot;/>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <!--definitionCanonical value=&quot;ObservationDefinition/VisualInspection&quot;/-->
                        <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/64525b3c-5134-448a-9d19-939ce1958524&quot;/>
                    </action>
                    <action>
                        <description value=&quot;Material Identification&quot;/>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <!--definitionCanonical value=&quot;ObservationDefinition/InfraredSpectroscopy&quot;/-->
                        <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/64525b3c-5134-448a-9d19-939ce1958525&quot;/>
                    </action>
                    <action>
                        <description value=&quot;Material Conformity&quot;/>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <!--definitionCanonical value=&quot;ObservationDefinition/SupplierCertificateofAnalysis&quot;/-->
                        <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/64525b3c-5134-448a-9d19-939ce1958535&quot;/>
                    </action>
                </action>" id="PlanDefinition-packagingSpecification-unlinked">Plan</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/plandefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/plandefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/plandefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: packagingSpecification-unlinked</div>
<div class="debugOff"> fullUrl: urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763f</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/PlanDefinition/2138e4c7-22b8-4c56-2d28-6c077648763f</div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <title value=&quot;Specification and Analytical Procedures&quot;>">Title: </span><span>Specification and Analytical Procedures</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <description value=&quot;Packaging components are sampled, tested, and examined for conformance with written specifications.                The specification for the primary packaging component are provided in Table 1.&quot;>">Description: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <description value=&quot;Packaging components are sampled, tested, and examined for conformance with written specifications.                The specification for the primary packaging component are provided in Table 1.&quot;>">Packaging components are sampled, tested, and examined for conformance with written specifications.                The specification for the primary packaging component are provided in Table 1.</span></div>
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
                        <code value=&quot;container-specification&quot;/>
                        <display value=&quot;Container Specification&quot;/>
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
                        <code value=&quot;container-specification&quot;/>
                        <display value=&quot;Container Specification&quot;/>">Container Specification<span class="greyOff"> [container-specification]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/pharmaceutical-plan-type)</span></span></div>
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
                <id value=&quot;packagingSpecification-unlinked&quot;/>
                <!--extension url=&quot;http://nprogram.co.uk/fhir/extension/viewer/tabulateBatchesInRows-biologic&quot;>
                    <valueBoolean value=&quot;true&quot;/>
                </extension-->
                <url value=&quot;http://example-server.com/fhir/PlanDefinition/2138e4c7-22b8-4c56-2d28-6c077648763f&quot;/>
                <title value=&quot;Specification and Analytical Procedures&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/plan-definition-type&quot;/>
                        <code value=&quot;workflow-definition&quot;/>
                        <display value=&quot;Workflow Definition&quot;/>
                    </coding>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-plan-type&quot;/>
                        <code value=&quot;container-specification&quot;/>
                        <display value=&quot;Container Specification&quot;/>
                    </coding>
                </type>
                <status value=&quot;active&quot;/>
                <subjectReference>
                    <reference value=&quot;PackagedProductDefinition/packageDefinition&quot;/>
                </subjectReference>
                <description value=&quot;Packaging components are sampled, tested, and examined for conformance with written specifications.                The specification for the primary packaging component are provided in Table 1.&quot;/>
                <action>
                    <title value=&quot;Container Specification&quot;/>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-specification-type-pq-example&quot;/>
                            <code value=&quot;Container Specification&quot;/>
                            <display value=&quot;Container Specification&quot;/>
                        </coding>
                        <text value=&quot;Container Specification&quot;/>
                    </code>
                    <action>
                        <description value=&quot;Container Type&quot;/>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <!--definitionCanonical value=&quot;ObservationDefinition/VisualInspection&quot;/-->
                        <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/64525b3c-5134-448a-9d19-939ce1958524&quot;/>
                    </action>
                    <action>
                        <description value=&quot;Material Identification&quot;/>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <!--definitionCanonical value=&quot;ObservationDefinition/InfraredSpectroscopy&quot;/-->
                        <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/64525b3c-5134-448a-9d19-939ce1958525&quot;/>
                    </action>
                    <action>
                        <description value=&quot;Material Conformity&quot;/>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <!--definitionCanonical value=&quot;ObservationDefinition/SupplierCertificateofAnalysis&quot;/-->
                        <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/64525b3c-5134-448a-9d19-939ce1958535&quot;/>
                    </action>
                </action>">Subject: </span>Packaged Product Definition (<a href="#PackagedProductDefinition-packageDefinition" title="click to see target - id=packageDefinition">PackagedProductDefinition</a>)<span class="debugOff"> id: packageDefinition</span></span><div class="indent summaryUnit planl2"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <action>
                    <title value=&quot;Container Specification&quot;/>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-specification-type-pq-example&quot;/>
                            <code value=&quot;Container Specification&quot;/>
                            <display value=&quot;Container Specification&quot;/>
                        </coding>
                        <text value=&quot;Container Specification&quot;/>
                    </code>
                    <action>
                        <description value=&quot;Container Type&quot;/>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <!--definitionCanonical value=&quot;ObservationDefinition/VisualInspection&quot;/-->
                        <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/64525b3c-5134-448a-9d19-939ce1958524&quot;/>
                    </action>
                    <action>
                        <description value=&quot;Material Identification&quot;/>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <!--definitionCanonical value=&quot;ObservationDefinition/InfraredSpectroscopy&quot;/-->
                        <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/64525b3c-5134-448a-9d19-939ce1958525&quot;/>
                    </action>
                    <action>
                        <description value=&quot;Material Conformity&quot;/>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <!--definitionCanonical value=&quot;ObservationDefinition/SupplierCertificateofAnalysis&quot;/-->
                        <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/64525b3c-5134-448a-9d19-939ce1958535&quot;/>
                    </action>"><a id="urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763f"><span>Action</span></a><span class="summaryShowsOff"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <title value=&quot;Container Specification&quot;>"> - Container Specification</span> - <span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-specification-type-pq-example&quot;/>
                            <code value=&quot;Container Specification&quot;/>
                            <display value=&quot;Container Specification&quot;/>">Container Specification<span class="greyOff"> [Container Specification]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-specification-type-pq-example)</span></span><span style="white-space:normal;"> - Text: Container Specification</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <title value=&quot;Container Specification&quot;>">Title: </span><span>Container Specification</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-specification-type-pq-example&quot;/>
                            <code value=&quot;Container Specification&quot;/>
                            <display value=&quot;Container Specification&quot;/>
                        </coding>
                        <text value=&quot;Container Specification&quot;/>">Code: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <code>
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-specification-type-pq-example&quot;/>
                            <code value=&quot;Container Specification&quot;/>
                            <display value=&quot;Container Specification&quot;/>">Container Specification<span class="greyOff"> [Container Specification]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-specification-type-pq-example)</span></span><span style="white-space:normal;"> - Text: Container Specification</span></div>
</div>
<div class="indent summaryUnit planl2"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <action>
                        <description value=&quot;Container Type&quot;/>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <!--definitionCanonical value=&quot;ObservationDefinition/VisualInspection&quot;/-->
                        <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/64525b3c-5134-448a-9d19-939ce1958524&quot;/>"><a id="urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763f"><span>Action</span></a><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        ...
                        <code>
                            <text value=&quot;Test&quot;/>">Code: </span><span style="white-space:normal;">Test</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <description value=&quot;Container Type&quot;>">Description: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <description value=&quot;Container Type&quot;>">Container Type</span></div>
<div class="indent summaryUnit obsDef">
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: packagingSpecification-unlinked fullUrl: urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763furl (canonical): http://example-server.com/fhir/PlanDefinition/2138e4c7-22b8-4c56-2d28-6c077648763f)<br>which is linked to this by canonical resource.url</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: VisualInspection)(fullUrl: urn:uuid:64525b3c-5134-448a-9d19-939ce1958524)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;VisualInspection&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/64525b3c-5134-448a-9d19-939ce1958524&quot;/>
                <title value=&quot;Visual Inspection&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;VisualInspection&quot;/>
                        <display value=&quot;VisualInspection&quot;/>
                    </coding>
                </code>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;Corresponds&quot;/>
                    </extension>
                </qualifiedValue>" id="ObservationDefinition-VisualInspection">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;VisualInspection&quot;/>
                        <display value=&quot;VisualInspection&quot;/>">VisualInspection<span class="greyOff"> [VisualInspection]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: VisualInspection</div>
<div class="debugOff"> fullUrl: urn:uuid:64525b3c-5134-448a-9d19-939ce1958524</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/64525b3c-5134-448a-9d19-939ce1958524</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Visual Inspection&quot;>">Title: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Visual Inspection&quot;>">Visual Inspection</span></div>
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
                        <code value=&quot;VisualInspection&quot;/>
                        <display value=&quot;VisualInspection&quot;/>
                    </coding>">Code: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;VisualInspection&quot;/>
                        <display value=&quot;VisualInspection&quot;/>
                    </coding>"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;VisualInspection&quot;/>
                        <display value=&quot;VisualInspection&quot;/>">VisualInspection<span class="greyOff"> [VisualInspection]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span></div>
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
                        <valueString value=&quot;Corresponds&quot;/>
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
                        <valueString value=&quot;Corresponds&quot;/>
                    </extension>">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;Corresponds&quot;/>">Text: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;Corresponds&quot;/>"><span>Corresponds</span></span></div>
</div>
</div>
<div class="summaryHiddenOff"></div>
</div>
</div>
</div>
<div class="indent summaryUnit planl2"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <action>
                        <description value=&quot;Material Identification&quot;/>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <!--definitionCanonical value=&quot;ObservationDefinition/InfraredSpectroscopy&quot;/-->
                        <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/64525b3c-5134-448a-9d19-939ce1958525&quot;/>"><a id="urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763f"><span>Action</span></a><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        ...
                        <code>
                            <text value=&quot;Test&quot;/>">Code: </span><span style="white-space:normal;">Test</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <description value=&quot;Material Identification&quot;>">Description: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <description value=&quot;Material Identification&quot;>">Material Identification</span></div>
<div class="indent summaryUnit obsDef">
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: packagingSpecification-unlinked fullUrl: urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763furl (canonical): http://example-server.com/fhir/PlanDefinition/2138e4c7-22b8-4c56-2d28-6c077648763f)<br>which is linked to this by canonical resource.url</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: InfraredSpectroscopy)(fullUrl: urn:uuid:64525b3c-5134-448a-9d19-939ce1958525)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;InfraredSpectroscopy&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/64525b3c-5134-448a-9d19-939ce1958525&quot;/>
                <title value=&quot;Infrared Spectroscopy&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;InfraredSpectroscopy&quot;/>
                        <display value=&quot;InfraredSpectroscopy&quot;/>
                    </coding>
                </code>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;Corresponds with reference&quot;/>
                    </extension>
                </qualifiedValue>" id="ObservationDefinition-InfraredSpectroscopy">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;InfraredSpectroscopy&quot;/>
                        <display value=&quot;InfraredSpectroscopy&quot;/>">InfraredSpectroscopy<span class="greyOff"> [InfraredSpectroscopy]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: InfraredSpectroscopy</div>
<div class="debugOff"> fullUrl: urn:uuid:64525b3c-5134-448a-9d19-939ce1958525</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/64525b3c-5134-448a-9d19-939ce1958525</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Infrared Spectroscopy&quot;>">Title: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Infrared Spectroscopy&quot;>">Infrared Spectroscopy</span></div>
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
                        <code value=&quot;InfraredSpectroscopy&quot;/>
                        <display value=&quot;InfraredSpectroscopy&quot;/>
                    </coding>">Code: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;InfraredSpectroscopy&quot;/>
                        <display value=&quot;InfraredSpectroscopy&quot;/>
                    </coding>"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;InfraredSpectroscopy&quot;/>
                        <display value=&quot;InfraredSpectroscopy&quot;/>">InfraredSpectroscopy<span class="greyOff"> [InfraredSpectroscopy]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span></div>
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
                        <valueString value=&quot;Corresponds with reference&quot;/>
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
                        <valueString value=&quot;Corresponds with reference&quot;/>
                    </extension>">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;Corresponds with reference&quot;/>">Text: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;Corresponds with reference&quot;/>"><span>Corresponds with reference</span></span></div>
</div>
</div>
<div class="summaryHiddenOff"></div>
</div>
</div>
</div>
<div class="indent summaryUnit planl2"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <action>
                        <description value=&quot;Material Conformity&quot;/>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <!--definitionCanonical value=&quot;ObservationDefinition/SupplierCertificateofAnalysis&quot;/-->
                        <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/64525b3c-5134-448a-9d19-939ce1958535&quot;/>"><a id="urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763f"><span>Action</span></a><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        ...
                        <code>
                            <text value=&quot;Test&quot;/>">Code: </span><span style="white-space:normal;">Test</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <description value=&quot;Material Conformity&quot;>">Description: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <description value=&quot;Material Conformity&quot;>">Material Conformity</span></div>
<div class="indent summaryUnit obsDef">
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: packagingSpecification-unlinked fullUrl: urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763furl (canonical): http://example-server.com/fhir/PlanDefinition/2138e4c7-22b8-4c56-2d28-6c077648763f)<br>which is linked to this by canonical resource.url</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: SupplierCertificateofAnalysis)(fullUrl: urn:uuid:64525b3c-5134-448a-9d19-939ce1958535)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;SupplierCertificateofAnalysis&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/64525b3c-5134-448a-9d19-939ce1958535&quot;/>
                <title value=&quot;Supplier Certificate of Analysis&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;SupplierCertificateofAnalysis&quot;/>
                        <display value=&quot;SupplierCertificateofAnalysis&quot;/>
                    </coding>
                </code>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;Corresponds&quot;/>
                    </extension>
                </qualifiedValue>" id="ObservationDefinition-SupplierCertificateofAnalysis">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;SupplierCertificateofAnalysis&quot;/>
                        <display value=&quot;SupplierCertificateofAnalysis&quot;/>">SupplierCertificateofAnalysis<span class="greyOff"> [SupplierCertificateofAnalysis]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: SupplierCertificateofAnalysis</div>
<div class="debugOff"> fullUrl: urn:uuid:64525b3c-5134-448a-9d19-939ce1958535</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/64525b3c-5134-448a-9d19-939ce1958535</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Supplier Certificate of Analysis&quot;>">Title: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Supplier Certificate of Analysis&quot;>">Supplier Certificate of Analysis</span></div>
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
                        <code value=&quot;SupplierCertificateofAnalysis&quot;/>
                        <display value=&quot;SupplierCertificateofAnalysis&quot;/>
                    </coding>">Code: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;SupplierCertificateofAnalysis&quot;/>
                        <display value=&quot;SupplierCertificateofAnalysis&quot;/>
                    </coding>"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;SupplierCertificateofAnalysis&quot;/>
                        <display value=&quot;SupplierCertificateofAnalysis&quot;/>">SupplierCertificateofAnalysis<span class="greyOff"> [SupplierCertificateofAnalysis]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span></span></div>
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
                        <valueString value=&quot;Corresponds&quot;/>
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
                        <valueString value=&quot;Corresponds&quot;/>
                    </extension>">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;Corresponds&quot;/>">Text: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;Corresponds&quot;/>"><span>Corresponds</span></span></div>
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
		Single resource bundle:false
		Single resource bundle Not Patient Or Bundle:false
		Single resource Not Patient:false
		Patient document:false
		General Bundle:false
		Not patient related:true
		=>Patient Centric Mode:false
		SubstanceDef Centric Mode:true
		Assumed profile:-->
</html>
