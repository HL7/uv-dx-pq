The HTML rendering below shows a synthetic Quality data example for Common Technical Document (CTD) Module 3: Quality, section 3.2.S.6 Container Closure System.
<html>
<body>
<div class="greyable">
<div class="controls remove"><span> </span><span class="button" onclick="toggleSummary(this)" title="summary view">summary on</span><span> </span><span class="button" onclick="toggleCodes(this)" title="details of code systems">show codes</span><span> </span><span class="button" onclick="toggleDebug(this)" title="extra technical info">show debug</span><span style="float:right; margin-right:3px;"><span class="buttonNoUnderlineHidden" onclick="toggleLowerControls(this)"><sup title="expand this"> v </sup></span><span class="buttonNoUnderline" onclick="toggleRemove(this)"><sup title="close this">x</sup></span></span><span> </span><span class="button" onclick="toggleRemoveTask(this)" title="details of tasks for changes">hide task</span><span> </span><span class="button" onclick="toggleRemoveProvenance(this)" title="details of provenance for changes">hide provenance</span><span> </span><span class="button" onclick="toggleRemoveTables(this)" title="tabular data">hide tables</span><br><span> </span><span class="button" onclick="toggleDarkMode(this)" title="darkened display">dark mode</span><span> </span><span class="button" onclick="toggleApplyGreyscale(this)" title="grey and white display">greyscale</span><span> </span><span class="button" onclick="toggleBlackAndWhite(this,false)" title="black and white display">b&amp;w</span><span> </span><span class="button" onclick="togglePlainMode(this);" title="plain text display">text only</span></div>
<div class="divBody">
<div style="position:relative" class="summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOffBorder">
<div class="bundleBorder">
<div class="debugOff">
<div class="bundle"><a class="plainLink"><span class="bold" title="Bundle (id: bundle-container-closure-system-dxpq-ex2-sub)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-container-closure-system-dxpq 

<Bundle>
    <id value=&quot;bundle-container-closure-system-dxpq-ex2-sub&quot;/>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-container-closure-system-dxpq&quot;/>
    </meta>
    <type value=&quot;collection&quot;/>
    <entry>
        <fullUrl value=&quot;urn:uuid:878c2849-792c-6469-21a2-c2b920930962&quot;/>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;substance1&quot;/>
                <name>
                    <name value=&quot;Stelbatolol&quot;/>
                    <!-- #4 -->
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
                <!-- #176 -->
                <description value=&quot;Any textual comments that describe the sum of container closure system (CCS) components that together contain and protect the dosage form or drug substance.&quot;/>
                <!-- secondary packaging -->
                <packaging>
                    <!-- #189 -->
                    <type>
                        <!-- #191 -->
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/packaging-type&quot;/>
                            <code value=&quot;100000073493&quot;/>
                            <display value=&quot;Bag&quot;/>
                        </coding>
                    </type>
                    <material>
                        <!-- #192 -->
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/package-material&quot;/>
                            <code value=&quot;200000003216&quot;/>
                            <display value=&quot;Low Density PolyEthylene&quot;/>
                        </coding>
                    </material>
                    <property>
                        <type>
                            <coding>
                                <system value=&quot;http://accumulus.org/fhir/code/packageProperty&quot;/>
                                <code value=&quot;xxxx&quot;/>
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
                                <system value=&quot;http://accumulus.org/fhir/code/packageProperty&quot;/>
                                <code value=&quot;xxxx&quot;/>
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
                                <reference value=&quot;ManufacturedItemDefinition/manufactureditemdefinition-dxpq-ex1&quot;/>
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
                <!-- #176 -->
                <description value=&quot;Any textual comments that describe the sum of container closure system (CCS) components that together contain and protect the dosage form or drug substance.&quot;/>
                <!-- secondary packaging -->
                <packaging>
                    <!-- #189 -->
                    <type>
                        <!-- #191 -->
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/packaging-type&quot;/>
                            <code value=&quot;100000073497&quot;/>
                            <display value=&quot;Bottle&quot;/>
                        </coding>
                    </type>
                    <material>
                        <!-- #192 -->
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/package-material&quot;/>
                            <code value=&quot;200000003215&quot;/>
                            <display value=&quot;High Density PolyEthylene&quot;/>
                        </coding>
                    </material>
                    <containedItem>
                        <item>
                            <reference>
                                <reference value=&quot;ManufacturedItemDefinition/manufactureditemdefinition-dxpq-ex1&quot;/>
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
                <id value=&quot;manufactureditemdefinition-dxpq-ex1&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/ManufacturedItemDefinition-dxpq&quot;/>
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
                    <reference value=&quot;ManufacturedItemDefinition/manufactureditemdefinition-dxpq-ex1&quot;/>
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
                        <system value=&quot;http://accumulus.org/fhir/code/planType&quot;/>
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
                            <system value=&quot;http://temp.hl7.org/fhir/CodeSystem/specification-type&quot;/>
                            <code value=&quot;ContainerSpecification&quot;/>
                            <display value=&quot;Container Specification&quot;/>
                        </coding>
                        <text value=&quot;Container Specification&quot;/>
                    </code>
                    <action>
                        <description value=&quot;Container Type&quot;/>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/VisualInspection&quot;/>
                    </action>
                    <action>
                        <description value=&quot;Material Identification&quot;/>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/InfraredSpectroscopy&quot;/>
                    </action>
                    <action>
                        <description value=&quot;Material Conformity&quot;/>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/SupplierCertificateofAnalysis&quot;/>
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
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;VisualInspection&quot;/>
                    </coding>
                </code>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-dxpq&quot;>
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
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;InfraredSpectroscopy&quot;/>
                    </coding>
                </code>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-dxpq&quot;>
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
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;SupplierCertificateofAnalysis&quot;/>
                    </coding>
                </code>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-dxpq&quot;>
                        <valueString value=&quot;Corresponds&quot;/>
                    </extension>
                </qualifiedValue>
            </ObservationDefinition>
        </resource>
    </entry>" id="Bundle-bundle-container-closure-system-dxpq-ex2-sub">Bundle</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/bundle.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/bundle.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/bundle.html#tt-uml">R6</a>]</span><div class="debugOff">id: bundle-container-closure-system-dxpq-ex2-sub</div>
<div class="debugOff"></div>
<div class="debugOff"><span title="
<Bundle>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-container-closure-system-dxpq&quot;>">Profile: </span><span>http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-container-closure-system-dxpq</span></div>
<div><span title="
<Bundle>
    ...
    <type value=&quot;collection&quot;>">Type: </span><span><span>collection</span></span></div>
</div>
</div>
<div>
<div class="indent sbd summaryUnit" ondblclick="summaryHandler(event)">
<div class="debugOff"><span>Found a parent (Ingredient/code, id: ingredient1 fullUrl: urn:uuid:f26b997a-3ab9-7552-a6cc-fd771d1f1863)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: substance1)(fullUrl: urn:uuid:878c2849-792c-6469-21a2-c2b920930962)

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;substance1&quot;/>
                <name>
                    <name value=&quot;Stelbatolol&quot;/>
                    <!-- #4 -->
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
                    <name value=&quot;Stelbatolol&quot;>">Name: </span><span><span>Stelbatolol</span></span></div>
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
                    <!-- #4 -->
                </name>">Used as</span><div class="indent ing summaryUnit" ondblclick="summaryHandler(event)"><a class="plainLink"><span class="bold" title="Ingredient (id: ingredient1)(fullUrl: urn:uuid:f26b997a-3ab9-7552-a6cc-fd771d1f1863)

<Bundle>
    <entry>
        <resource>
            <Ingredient>
                <id value=&quot;ingredient1&quot;/>
                <status value=&quot;active&quot;/>
                <for>
                    <reference value=&quot;ManufacturedItemDefinition/manufactureditemdefinition-dxpq-ex1&quot;/>
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
                <status value=&quot;active&quot;>">Status: </span><span>active</span></div></div><div class="indent ingsub"><span title="
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
                    </code>">Substance</span>: Stelbatolol (<a href="#SubstanceDefinition-substance1" title="click to see target - id=substance1">SubstanceDefinition</a>)<span class="debugOff"> id: substance1</span><div class="summaryHiddenOff"></div></div><div class="indent ingsub"><span title="
<Bundle>
    <entry>
        <resource>
            <Ingredient>
                ...
                <for>
                    <reference value=&quot;ManufacturedItemDefinition/manufactureditemdefinition-dxpq-ex1&quot;/>">For</span><div class="indent man summaryUnit" ondblclick="summaryHandler(event)"><div class="debugOff"><span>Found a parent (PackagedProductDefinition/item, id: packageDefinition fullUrl: urn:uuid:b107a2ba-32d8-0124-7855-4096057c52a9)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (PackagedProductDefinition/item, id: packageDefinition2 fullUrl: urn:uuid:b107a2ba-32d8-0124-7855-4096057c52b9)<br>which is linked to this by resource.id</span></div><div class="debugOff"><span>Found a parent (Ingredient/for, id: ingredient1 fullUrl: urn:uuid:f26b997a-3ab9-7552-a6cc-fd771d1f1863)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="ManufacturedItemDefinition (id: manufactureditemdefinition-dxpq-ex1)(fullUrl: urn:uuid:1531c777-50c3-047d-2798-de3d001d2c44)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/ManufacturedItemDefinition-dxpq 

<Bundle>
    <entry>
        <resource>
            <ManufacturedItemDefinition>
                <id value=&quot;manufactureditemdefinition-dxpq-ex1&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/ManufacturedItemDefinition-dxpq&quot;/>
                </meta>
                <status value=&quot;active&quot;/>
                <manufacturedDoseForm>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/data-absent-reason&quot;>
                        <valueCode value=&quot;unsupported&quot;/>
                    </extension>
                </manufacturedDoseForm>" id="ManufacturedItemDefinition-manufactureditemdefinition-dxpq-ex1">Manufactured Item</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/manufactureditemdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/manufactureditemdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/manufactureditemdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: manufactureditemdefinition-dxpq-ex1</div><div class="debugOff"> fullUrl: urn:uuid:1531c777-50c3-047d-2798-de3d001d2c44</div><div class="debugOff"></div><div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ManufacturedItemDefinition>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/ManufacturedItemDefinition-dxpq&quot;>">Profile: </span><span>http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/ManufacturedItemDefinition-dxpq</span></div><span class="summaryShowsOff"></span><div class="summaryHiddenOff"><div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ManufacturedItemDefinition>
                ...
                <status value=&quot;active&quot;>">Status: </span><span>active</span></div></div><div class="indent manl2"><span title="ManufacturedItemDefinition (id: manufactureditemdefinition-dxpq-ex1)(fullUrl: urn:uuid:1531c777-50c3-047d-2798-de3d001d2c44)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/ManufacturedItemDefinition-dxpq 

<Bundle>
    <entry>
        <resource>
            <ManufacturedItemDefinition>
                <id value=&quot;manufactureditemdefinition-dxpq-ex1&quot;/>
                <meta>
                    <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/ManufacturedItemDefinition-dxpq&quot;/>
                </meta>
                <status value=&quot;active&quot;/>
                <manufacturedDoseForm>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/data-absent-reason&quot;>
                        <valueCode value=&quot;unsupported&quot;/>
                    </extension>
                </manufacturedDoseForm>">Packaged in</span><div class="indent ppdpackage summaryUnit" ondblclick="summaryHandler(event)"><a title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                ...
                <packaging>
                    <!-- #189 -->
                    <type>
                        <!-- #191 -->
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/packaging-type&quot;/>
                            <code value=&quot;100000073493&quot;/>
                            <display value=&quot;Bag&quot;/>
                        </coding>
                    </type>
                    <material>
                        <!-- #192 -->
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/package-material&quot;/>
                            <code value=&quot;200000003216&quot;/>
                            <display value=&quot;Low Density PolyEthylene&quot;/>
                        </coding>
                    </material>
                    <property>
                        <type>
                            <coding>
                                <system value=&quot;http://accumulus.org/fhir/code/packageProperty&quot;/>
                                <code value=&quot;xxxx&quot;/>
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
                                <system value=&quot;http://accumulus.org/fhir/code/packageProperty&quot;/>
                                <code value=&quot;xxxx&quot;/>
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
                                <reference value=&quot;ManufacturedItemDefinition/manufactureditemdefinition-dxpq-ex1&quot;/>
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
                        <!-- #191 -->
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
                        <!-- #192 -->
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
                                <system value=&quot;http://accumulus.org/fhir/code/packageProperty&quot;/>
                                <code value=&quot;xxxx&quot;/>
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
                                <system value=&quot;http://accumulus.org/fhir/code/packageProperty&quot;/>
                                <code value=&quot;xxxx&quot;/>
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
                                <system value=&quot;http://accumulus.org/fhir/code/packageProperty&quot;/>
                                <code value=&quot;xxxx&quot;/>
                                <display value=&quot;Quality Specification&quot;/>">Quality Specification<span class="greyOff"> [xxxx]</span><span class="greyOff"> (http://accumulus.org/fhir/code/packageProperty)</span></span></span></div><div><span title="
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
                                <system value=&quot;http://accumulus.org/fhir/code/packageProperty&quot;/>
                                <code value=&quot;xxxx&quot;/>
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
                                <system value=&quot;http://accumulus.org/fhir/code/packageProperty&quot;/>
                                <code value=&quot;xxxx&quot;/>
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
                                <system value=&quot;http://accumulus.org/fhir/code/packageProperty&quot;/>
                                <code value=&quot;xxxx&quot;/>
                                <display value=&quot;Quality Specification&quot;/>">Quality Specification<span class="greyOff"> [xxxx]</span><span class="greyOff"> (http://accumulus.org/fhir/code/packageProperty)</span></span></span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                <packaging>
                    <property>
                        ...
                        <valueCodeableConcept>
                            <text value=&quot;Complies with Commission Regulation (EU) No. 10/2011 including its amendments EU 321/2011, EU  1282/2011, EU 1183/2012, EU 202/2014 and EU 2015/174 Complies with Ph. Eur. 3.2.2&quot;/>">Value: <span style="white-space:normal;">Complies with Commission Regulation (EU) No. 10/2011 including its amendments EU 321/2011, EU  1282/2011, EU 1183/2012, EU 202/2014 and EU 2015/174 Complies with Ph. Eur. 3.2.2</span></span></div></div></div></div></div><div class="indent ppdpackage summaryUnit" ondblclick="summaryHandler(event)"><a title="
<Bundle>
    <entry>
        <resource>
            <PackagedProductDefinition>
                ...
                <packaging>
                    <!-- #189 -->
                    <type>
                        <!-- #191 -->
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/packaging-type&quot;/>
                            <code value=&quot;100000073497&quot;/>
                            <display value=&quot;Bottle&quot;/>
                        </coding>
                    </type>
                    <material>
                        <!-- #192 -->
                        <coding>
                            <system value=&quot;http://hl7.org/fhir/package-material&quot;/>
                            <code value=&quot;200000003215&quot;/>
                            <display value=&quot;High Density PolyEthylene&quot;/>
                        </coding>
                    </material>
                    <containedItem>
                        <item>
                            <reference>
                                <reference value=&quot;ManufacturedItemDefinition/manufactureditemdefinition-dxpq-ex1&quot;/>
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
                        <!-- #191 -->
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
                        <!-- #192 -->
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
                    <title value=&quot;Container Specification&quot;>">Table 1: </span><span>Container Specification</span></div><br style="line-height:6px;"><br style="line-height:6px;"><table class="rounded-corners white" id="tabularModeTable" style="width:70%">
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
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-dxpq&quot;>
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
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-dxpq&quot;>
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
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-dxpq&quot;>
                        <valueString value=&quot;Corresponds&quot;>">Corresponds</span></td>
</tr>
</table>
</div><br style="line-height:6px;"></div>
<div class="indent plan summaryUnit" ondblclick="summaryHandler(event)"><a class="plainLink"><span class="bold" title="PlanDefinition (id: packagingSpecification-unlinked)(fullUrl: urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763f)

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
                        <system value=&quot;http://accumulus.org/fhir/code/planType&quot;/>
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
                            <system value=&quot;http://temp.hl7.org/fhir/CodeSystem/specification-type&quot;/>
                            <code value=&quot;ContainerSpecification&quot;/>
                            <display value=&quot;Container Specification&quot;/>
                        </coding>
                        <text value=&quot;Container Specification&quot;/>
                    </code>
                    <action>
                        <description value=&quot;Container Type&quot;/>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/VisualInspection&quot;/>
                    </action>
                    <action>
                        <description value=&quot;Material Identification&quot;/>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/InfraredSpectroscopy&quot;/>
                    </action>
                    <action>
                        <description value=&quot;Material Conformity&quot;/>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/SupplierCertificateofAnalysis&quot;/>
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
                <description value=&quot;Packaging components are sampled, tested, and examined for conformance with written specifications.                The specification for the primary packaging component are provided in Table 1.&quot;>">Description: </span><span>Packaging components are sampled, tested, and examined for conformance with written specifications.                The specification for the primary packaging component are provided in Table 1.</span></div>
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
                        <system value=&quot;http://accumulus.org/fhir/code/planType&quot;/>
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
                        <system value=&quot;http://accumulus.org/fhir/code/planType&quot;/>
                        <code value=&quot;container-specification&quot;/>
                        <display value=&quot;Container Specification&quot;/>">Container Specification<span class="greyOff"> [container-specification]</span><span class="greyOff"> (http://accumulus.org/fhir/code/planType)</span></span></div>
<div class="summaryHiddenOff">
<div class="debugOff"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <status value=&quot;active&quot;>">Status: </span><span>active</span></div>
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
                        <system value=&quot;http://accumulus.org/fhir/code/planType&quot;/>
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
                            <system value=&quot;http://temp.hl7.org/fhir/CodeSystem/specification-type&quot;/>
                            <code value=&quot;ContainerSpecification&quot;/>
                            <display value=&quot;Container Specification&quot;/>
                        </coding>
                        <text value=&quot;Container Specification&quot;/>
                    </code>
                    <action>
                        <description value=&quot;Container Type&quot;/>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/VisualInspection&quot;/>
                    </action>
                    <action>
                        <description value=&quot;Material Identification&quot;/>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/InfraredSpectroscopy&quot;/>
                    </action>
                    <action>
                        <description value=&quot;Material Conformity&quot;/>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/SupplierCertificateofAnalysis&quot;/>
                    </action>
                </action>">Subject: </span>Packaged Product Definition (<a href="#PackagedProductDefinition-packageDefinition" title="click to see target - id=packageDefinition">PackagedProductDefinition</a>)<span class="debugOff"> id: packageDefinition</span></span><div class="indent summaryUnit planl2" ondblclick="summaryHandler(event)"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <action>
                    <title value=&quot;Container Specification&quot;/>
                    <code>
                        <coding>
                            <system value=&quot;http://temp.hl7.org/fhir/CodeSystem/specification-type&quot;/>
                            <code value=&quot;ContainerSpecification&quot;/>
                            <display value=&quot;Container Specification&quot;/>
                        </coding>
                        <text value=&quot;Container Specification&quot;/>
                    </code>
                    <action>
                        <description value=&quot;Container Type&quot;/>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/VisualInspection&quot;/>
                    </action>
                    <action>
                        <description value=&quot;Material Identification&quot;/>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/InfraredSpectroscopy&quot;/>
                    </action>
                    <action>
                        <description value=&quot;Material Conformity&quot;/>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/SupplierCertificateofAnalysis&quot;/>
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
                            <system value=&quot;http://temp.hl7.org/fhir/CodeSystem/specification-type&quot;/>
                            <code value=&quot;ContainerSpecification&quot;/>
                            <display value=&quot;Container Specification&quot;/>">Container Specification<span class="greyOff"> [ContainerSpecification]</span><span class="greyOff"> (http://temp.hl7.org/fhir/CodeSystem/specification-type)</span></span><span style="white-space:normal;"> - Text: Container Specification</span></span></span><div class="summaryHiddenOff">
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
                            <system value=&quot;http://temp.hl7.org/fhir/CodeSystem/specification-type&quot;/>
                            <code value=&quot;ContainerSpecification&quot;/>
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
                            <system value=&quot;http://temp.hl7.org/fhir/CodeSystem/specification-type&quot;/>
                            <code value=&quot;ContainerSpecification&quot;/>
                            <display value=&quot;Container Specification&quot;/>">Container Specification<span class="greyOff"> [ContainerSpecification]</span><span class="greyOff"> (http://temp.hl7.org/fhir/CodeSystem/specification-type)</span></span><span style="white-space:normal;"> - Text: Container Specification</span></div>
</div>
<div class="indent summaryUnit planl2" ondblclick="summaryHandler(event)"><span title="
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
                        <definitionCanonical value=&quot;ObservationDefinition/VisualInspection&quot;/>"><a id="urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763f"><span>Action</span></a><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
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
                        <description value=&quot;Container Type&quot;>">Description: </span><span>Container Type</span></div>
<div ondblclick="summaryHandler(event)" class="indent summaryUnit obsDef">
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: packagingSpecification-unlinked fullUrl: urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763furl (canonical): http://example-server.com/fhir/PlanDefinition/2138e4c7-22b8-4c56-2d28-6c077648763f)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: VisualInspection)(fullUrl: urn:uuid:64525b3c-5134-448a-9d19-939ce1958524)

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
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;VisualInspection&quot;/>
                    </coding>
                </code>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-dxpq&quot;>
                        <valueString value=&quot;Corresponds&quot;/>
                    </extension>
                </qualifiedValue>" id="ObservationDefinition-VisualInspection">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;VisualInspection&quot;/>">VisualInspection<span class="greyOff"> [XXX]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: VisualInspection</div>
<div class="debugOff"> fullUrl: urn:uuid:64525b3c-5134-448a-9d19-939ce1958524</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/64525b3c-5134-448a-9d19-939ce1958524</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Visual Inspection&quot;>">Title: </span><span>Visual Inspection</span></div>
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
                <status value=&quot;active&quot;>">Status: </span><span>active</span></div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;VisualInspection&quot;/>
                    </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;VisualInspection&quot;/>">VisualInspection<span class="greyOff"> [XXX]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="indent obsDefl2" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-dxpq&quot;>
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
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-dxpq&quot;>
                        <valueString value=&quot;Corresponds&quot;/>
                    </extension>">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-dxpq&quot;>
                        <valueString value=&quot;Corresponds&quot;/>">Text: </span><span>Corresponds</span></div>
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
                    ...
                    <action>
                        <description value=&quot;Material Identification&quot;/>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/InfraredSpectroscopy&quot;/>"><a id="urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763f"><span>Action</span></a><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
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
                        <description value=&quot;Material Identification&quot;>">Description: </span><span>Material Identification</span></div>
<div ondblclick="summaryHandler(event)" class="indent summaryUnit obsDef">
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: packagingSpecification-unlinked fullUrl: urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763furl (canonical): http://example-server.com/fhir/PlanDefinition/2138e4c7-22b8-4c56-2d28-6c077648763f)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: InfraredSpectroscopy)(fullUrl: urn:uuid:64525b3c-5134-448a-9d19-939ce1958525)

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
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;InfraredSpectroscopy&quot;/>
                    </coding>
                </code>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-dxpq&quot;>
                        <valueString value=&quot;Corresponds with reference&quot;/>
                    </extension>
                </qualifiedValue>" id="ObservationDefinition-InfraredSpectroscopy">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;InfraredSpectroscopy&quot;/>">InfraredSpectroscopy<span class="greyOff"> [XXX]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: InfraredSpectroscopy</div>
<div class="debugOff"> fullUrl: urn:uuid:64525b3c-5134-448a-9d19-939ce1958525</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/64525b3c-5134-448a-9d19-939ce1958525</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Infrared Spectroscopy&quot;>">Title: </span><span>Infrared Spectroscopy</span></div>
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
                <status value=&quot;active&quot;>">Status: </span><span>active</span></div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;InfraredSpectroscopy&quot;/>
                    </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;InfraredSpectroscopy&quot;/>">InfraredSpectroscopy<span class="greyOff"> [XXX]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="indent obsDefl2" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-dxpq&quot;>
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
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-dxpq&quot;>
                        <valueString value=&quot;Corresponds with reference&quot;/>
                    </extension>">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-dxpq&quot;>
                        <valueString value=&quot;Corresponds with reference&quot;/>">Text: </span><span>Corresponds with reference</span></div>
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
                    ...
                    <action>
                        <description value=&quot;Material Conformity&quot;/>
                        <code>
                            <text value=&quot;Test&quot;/>
                        </code>
                        <definitionCanonical value=&quot;ObservationDefinition/SupplierCertificateofAnalysis&quot;/>"><a id="urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763f"><span>Action</span></a><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
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
                        <description value=&quot;Material Conformity&quot;>">Description: </span><span>Material Conformity</span></div>
<div ondblclick="summaryHandler(event)" class="indent summaryUnit obsDef">
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: packagingSpecification-unlinked fullUrl: urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763furl (canonical): http://example-server.com/fhir/PlanDefinition/2138e4c7-22b8-4c56-2d28-6c077648763f)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: SupplierCertificateofAnalysis)(fullUrl: urn:uuid:64525b3c-5134-448a-9d19-939ce1958535)

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
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;SupplierCertificateofAnalysis&quot;/>
                    </coding>
                </code>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-dxpq&quot;>
                        <valueString value=&quot;Corresponds&quot;/>
                    </extension>
                </qualifiedValue>" id="ObservationDefinition-SupplierCertificateofAnalysis">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;SupplierCertificateofAnalysis&quot;/>">SupplierCertificateofAnalysis<span class="greyOff"> [XXX]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: SupplierCertificateofAnalysis</div>
<div class="debugOff"> fullUrl: urn:uuid:64525b3c-5134-448a-9d19-939ce1958535</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/64525b3c-5134-448a-9d19-939ce1958535</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Supplier Certificate of Analysis&quot;>">Title: </span><span>Supplier Certificate of Analysis</span></div>
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
                <status value=&quot;active&quot;>">Status: </span><span>active</span></div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;SupplierCertificateofAnalysis&quot;/>
                    </coding>">Code: </span><span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://dummy.loinc.org&quot;/>
                        <code value=&quot;XXX&quot;/>
                        <display value=&quot;SupplierCertificateofAnalysis&quot;/>">SupplierCertificateofAnalysis<span class="greyOff"> [XXX]</span><span class="greyOff"> (http://dummy.loinc.org)</span></span></span></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="indent obsDefl2" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-dxpq&quot;>
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
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-dxpq&quot;>
                        <valueString value=&quot;Corresponds&quot;/>
                    </extension>">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-dxpq&quot;>
                        <valueString value=&quot;Corresponds&quot;/>">Text: </span><span>Corresponds</span></div>
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
