The HTML rendering below shows a synthetic Quality data example for Common Technical Document (CTD) Module 3: Quality, section 3.2.S.4 Control of Drug Substance, subsection 3.2.S.4.2 Analytical Procedures.
<html>
<body>
<div class="divBody">
<p>
						This is the same data as in the example files here in <a href="Bundle-bundle-analytical-procedure-pq-ex2-sub.xml.html">xml</a> and in <a href="Bundle-bundle-analytical-procedure-pq-ex2-sub.json.html">json</a>, presented for easier viewing.
						Hovering on words below will show the corresponding sections of the underlying data.
					</p>
</div>
<div class="greyable">
<div class="divBody">
<div style="position:relative" class="summaryUnit">
<div class="debugOffBorder">
<div class="bundleBorder">
<div class="debugOff">
<div class="bundle"><a class="plainLink"><span class="bold" title="Bundle (id: bundle-analytical-procedure-pq-ex2-sub)
Profile: http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-analytical-procedure-pq 

<Bundle>
    <id value=&quot;bundle-analytical-procedure-pq-ex2-sub&quot;/>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-analytical-procedure-pq&quot;/>
    </meta>
    <type value=&quot;collection&quot;/>
    <entry>
        <fullUrl value=&quot;urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763f&quot;/>
        <resource>
            <PlanDefinition>
                <id value=&quot;analyticalProcedure&quot;/>
                <url value=&quot;http://example-server.com/fhir/PlanDefinition/2138e4c7-22b8-4c56-2d28-6c077648763f&quot;/>
                <title value=&quot;Analytical Procedure&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/plan-definition-type&quot;/>
                        <code value=&quot;workflow-definition&quot;/>
                        <display value=&quot;Workflow Definition&quot;/>
                    </coding>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-plan-type&quot;/>
                        <code value=&quot;analytical-procedure&quot;/>
                        <display value=&quot;Analytical Procedure&quot;/>
                    </coding>
                </type>
                <status value=&quot;active&quot;/>
                <subjectReference>
                    <reference value=&quot;SubstanceDefinition/substance1&quot;/>
                </subjectReference>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                    <code value=&quot;OPTICAL&quot;/>
                                    <display value=&quot;Optical properties&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;valueText&quot;>
                            <valueString value=&quot;Same as for blue light&quot;/>
                        </extension>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                    <code value=&quot;THEORY&quot;/>
                                    <display value=&quot;Theory&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;valueText&quot;>
                            <valueString value=&quot;MIE&quot;/>
                        </extension>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                    <code value=&quot;STIR&quot;/>
                                    <display value=&quot;Stir Time&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;1&quot;/>
                                <unit value=&quot;minute&quot;/>
                                <!-- todo ucum -->
                            </valueQuantity>
                        </extension>
                    </extension>
                    <title value=&quot;Determination of Particle Size of Stelbat by Laser Diffraction (G1112)&quot;/>
                    <!-- can have device here or as ObsDef.device -->
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/dispersant&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Dispersant&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                <code value=&quot;dispersant&quot;/>
                                <display value=&quot;Dispersant&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/resultingMaterial&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Resulting material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                <code value=&quot;ResultingMaterial&quot;/>
                                <display value=&quot;Resulting Material&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <action>
                        <title value=&quot;Sample Preparation&quot;/>
                        <action>
                            <title value=&quot;Instructions&quot;/>
                            <description value=&quot;Vortex approximately 30 seconds. Mix briefly by vortexing immediately before use.&quot;/>
                        </action>
                    </action>
                    <action>
                        <title value=&quot;Sample Analysis&quot;/>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--definitionCanonical value=&quot;ObservationDefinition/ParticleSize&quot;/-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4136-3c1f-b8ba6a7d046e&quot;/>
                        </action>
                    </action>
                    <action>
                        <title value=&quot;Sample Calculation&quot;/>
                        <description value=&quot;The particle size result is calculated automatically by the instrument software for each sample.&quot;/>
                        <code>
                            <text value=&quot;Calculation&quot;/>
                        </code>
                    </action>
                    <action>
                        <title value=&quot;Reporting&quot;/>
                        <description value=&quot;Report the average value as per specification&quot;/>
                        <code>
                            <text value=&quot;Reporting&quot;/>
                        </code>
                    </action>
                </action>
            </PlanDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:c458791f-7cb8-428e-83f7-8a205f821152&quot;/>
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
        <fullUrl value=&quot;urn:uuid:9f69ec9c-5fd1-30d2-0790-9e8135565f82&quot;/>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;dispersant&quot;/>
                <property>
                    <type>
                        <text value=&quot;Shelf life&quot;/>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Refer to local laboratory expiration date (may be extended with supporting data)&quot;/>
                    </valueCodeableConcept>
                </property>
                <name>
                    <name value=&quot;0.1% Sorbitan monooleate (Span 80) in hexanes (m/v)&quot;/>
                </name>
            </SubstanceDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:9f69ec9c-5fd1-30d2-0790-9e8035565f82&quot;/>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;resultingMaterial&quot;/>
                <name>
                    <name value=&quot;Stelbat in dispersant (approximately 10 mg/mL)&quot;/>
                </name>
            </SubstanceDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:12e7e672-40a6-4136-3c1f-b8ba6a7d046e&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;ParticleSize&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4136-3c1f-b8ba6a7d046e&quot;/>
                <title value=&quot;Particle Size&quot;/>
                <status value=&quot;active&quot;/>
                <description value=&quot;Number of Analyses: 1 replicate for each sample preparation&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/data-absent-reason&quot;>
                        <valueCode value=&quot;unsupported&quot;/>
                    </extension>
                </code>
                <specimen>
                    <reference value=&quot;SpecimenDefinition/specimendefinition&quot;/>
                </specimen>
                <device>
                    <reference value=&quot;DeviceDefinition/laser&quot;/>
                </device>
                <hasMember>
                    <reference value=&quot;ObservationDefinition/ParticleSizeObscuration&quot;/>
                </hasMember>
                <hasMember>
                    <reference value=&quot;ObservationDefinition/ParticleRI&quot;/>
                </hasMember>
                <hasMember>
                    <reference value=&quot;ObservationDefinition/ParticleSizeRSD&quot;/>
                </hasMember>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:12e7e672-40a6-4036-3c1f-b8ba6a7d045e&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;ParticleSizeObscuration&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4036-3c1f-b8ba6a7d045e&quot;/>
                <title value=&quot;Obscuration&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Obscuration&quot;/>
                        <display value=&quot;Obscuration&quot;/>
                    </coding>
                    <text value=&quot;Obscuration (%)&quot;/>
                </code>
                <qualifiedValue>
                    <range>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-target-pq&quot;>
                            <valueQuantity>
                                <value value=&quot;15&quot;/>
                                <unit value=&quot;%&quot;/>
                            </valueQuantity>
                        </extension>
                        <low>
                            <value value=&quot;10&quot;/>
                            <unit value=&quot;%&quot;/>
                        </low>
                        <high>
                            <value value=&quot;30&quot;/>
                            <unit value=&quot;%&quot;/>
                        </high>
                    </range>
                </qualifiedValue>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:12e7e672-41a6-4036-3c1f-b8ba6a7d045e&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;ParticleRI&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/12e7e672-41a6-4036-3c1f-b8ba6a7d045e&quot;/>
                <title value=&quot;Particle refractive index&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Refractive index&quot;/>
                        <display value=&quot;Refractive index&quot;/>
                    </coding>
                    <text value=&quot;Particle refractive index&quot;/>
                </code>
                <qualifiedValue>
                    <range>
                        <low>
                            <value value=&quot;1.75&quot;/>
                            <!-- unitless -->
                        </low>
                        <high>
                            <value value=&quot;1.75&quot;/>
                            <!-- unitless -->
                        </high>
                    </range>
                </qualifiedValue>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:12e7e672-40a6-4036-3c1f-b8ba6a7d046e&quot;/>
        <resource>
            <ObservationDefinition>
                <id value=&quot;ParticleSizeRSD&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4036-3c1f-b8ba6a7d046e&quot;/>
                <title value=&quot;Particle Size RSD&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Particle Size RSD&quot;/>
                        <display value=&quot;Particle Size RSD&quot;/>
                    </coding>
                    <text value=&quot;Particle Size RSD&quot;/>
                </code>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;The %RSD for the D(v, 0.9) must be not more than 15%&quot;/>
                    </extension>
                </qualifiedValue>
            </ObservationDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:3a0cde98-4a73-6d67-1dfc-08e3fc9646a2&quot;/>
        <resource>
            <SpecimenDefinition>
                <id value=&quot;specimendefinition&quot;/>
                <url value=&quot;http://example-server.com/fhir/SpecimenDefinition/3a0cde98-4a73-6d67-1dfc-08e3fc9646a2&quot;/>
                <status value=&quot;active&quot;/>
                <description value=&quot;Number of Preparations: 3&quot;/>
            </SpecimenDefinition>
        </resource>
    </entry>
    <entry>
        <fullUrl value=&quot;urn:uuid:82a39a18-91cf-a19d-76c1-a9e8bad9495c&quot;/>
        <resource>
            <DeviceDefinition>
                <id value=&quot;laser&quot;/>
                <description value=&quot;Analyzer with disperser and temperature control accessory, or equivalent&quot;/>
                <classification>
                    <type>
                        <text value=&quot;Particle Size Analyzer with Laser Diffraction&quot;/>
                    </type>
                </classification>
            </DeviceDefinition>
        </resource>
    </entry>" id="Bundle-bundle-analytical-procedure-pq-ex2-sub">Bundle</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/bundle.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/bundle.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/bundle.html#tt-uml">R6</a>]</span><div class="debugOff">id: bundle-analytical-procedure-pq-ex2-sub</div>
<div class="debugOff"></div>
<div class="debugOff"><span title="
<Bundle>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-analytical-procedure-pq&quot;>">Profile: </span><span title="
<Bundle>
    <meta>
        <profile value=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-analytical-procedure-pq&quot;>">http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Bundle-analytical-procedure-pq</span></div>
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
<div class="debugOff"><span>Found a parent (PlanDefinition/subjectReference, id: analyticalProcedure fullUrl: urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763furl (canonical): http://example-server.com/fhir/PlanDefinition/2138e4c7-22b8-4c56-2d28-6c077648763f)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: substance1)(fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821152)

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;substance1&quot;/>
                <name>
                    <name value=&quot;Stelbatolol&quot;/>
                </name>" id="SubstanceDefinition-substance1">Substance</span></a><span class="summaryShowsOff"><b> - Stelbatolol</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substancedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: substance1</div>
<div class="debugOff"> fullUrl: urn:uuid:c458791f-7cb8-428e-83f7-8a205f821152</div>
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
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff">
<div class="indent plan summaryUnit"><sup class="rotate-left" title="arrow indicates that this PlanDefinition resource points back to the parent SubstanceDefinition, instead of being linked forwards from it - via PlanDefinition.subjectReference">↸</sup><span class="debugOff">arrow indicates that this PlanDefinition resource points back to the parent SubstanceDefinition, instead of being linked forwards from it - via PlanDefinition.subjectReference<br></span><a class="plainLink"><span class="bold" title="PlanDefinition (id: analyticalProcedure)(fullUrl: urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763f)

<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <id value=&quot;analyticalProcedure&quot;/>
                <url value=&quot;http://example-server.com/fhir/PlanDefinition/2138e4c7-22b8-4c56-2d28-6c077648763f&quot;/>
                <title value=&quot;Analytical Procedure&quot;/>
                <type>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/plan-definition-type&quot;/>
                        <code value=&quot;workflow-definition&quot;/>
                        <display value=&quot;Workflow Definition&quot;/>
                    </coding>
                    <coding>
                        <system value=&quot;http://terminology.hl7.org/CodeSystem/pharmaceutical-plan-type&quot;/>
                        <code value=&quot;analytical-procedure&quot;/>
                        <display value=&quot;Analytical Procedure&quot;/>
                    </coding>
                </type>
                <status value=&quot;active&quot;/>
                <subjectReference>
                    <reference value=&quot;SubstanceDefinition/substance1&quot;/>
                </subjectReference>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                    <code value=&quot;OPTICAL&quot;/>
                                    <display value=&quot;Optical properties&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;valueText&quot;>
                            <valueString value=&quot;Same as for blue light&quot;/>
                        </extension>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                    <code value=&quot;THEORY&quot;/>
                                    <display value=&quot;Theory&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;valueText&quot;>
                            <valueString value=&quot;MIE&quot;/>
                        </extension>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                    <code value=&quot;STIR&quot;/>
                                    <display value=&quot;Stir Time&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;1&quot;/>
                                <unit value=&quot;minute&quot;/>
                                <!-- todo ucum -->
                            </valueQuantity>
                        </extension>
                    </extension>
                    <title value=&quot;Determination of Particle Size of Stelbat by Laser Diffraction (G1112)&quot;/>
                    <!-- can have device here or as ObsDef.device -->
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/dispersant&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Dispersant&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                <code value=&quot;dispersant&quot;/>
                                <display value=&quot;Dispersant&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/resultingMaterial&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Resulting material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                <code value=&quot;ResultingMaterial&quot;/>
                                <display value=&quot;Resulting Material&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <action>
                        <title value=&quot;Sample Preparation&quot;/>
                        <action>
                            <title value=&quot;Instructions&quot;/>
                            <description value=&quot;Vortex approximately 30 seconds. Mix briefly by vortexing immediately before use.&quot;/>
                        </action>
                    </action>
                    <action>
                        <title value=&quot;Sample Analysis&quot;/>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--definitionCanonical value=&quot;ObservationDefinition/ParticleSize&quot;/-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4136-3c1f-b8ba6a7d046e&quot;/>
                        </action>
                    </action>
                    <action>
                        <title value=&quot;Sample Calculation&quot;/>
                        <description value=&quot;The particle size result is calculated automatically by the instrument software for each sample.&quot;/>
                        <code>
                            <text value=&quot;Calculation&quot;/>
                        </code>
                    </action>
                    <action>
                        <title value=&quot;Reporting&quot;/>
                        <description value=&quot;Report the average value as per specification&quot;/>
                        <code>
                            <text value=&quot;Reporting&quot;/>
                        </code>
                    </action>
                </action>" id="PlanDefinition-analyticalProcedure">Plan</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/plandefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/plandefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/plandefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: analyticalProcedure</div>
<div class="debugOff"> fullUrl: urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763f</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/PlanDefinition/2138e4c7-22b8-4c56-2d28-6c077648763f</div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <title value=&quot;Analytical Procedure&quot;>">Title: </span><span>Analytical Procedure</span></div>
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
                        <code value=&quot;analytical-procedure&quot;/>
                        <display value=&quot;Analytical Procedure&quot;/>
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
                        <code value=&quot;analytical-procedure&quot;/>
                        <display value=&quot;Analytical Procedure&quot;/>">Analytical Procedure<span class="greyOff"> [analytical-procedure]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/pharmaceutical-plan-type)</span></span></div>
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
<div class="indent summaryUnit planl2"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                ...
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                    <code value=&quot;OPTICAL&quot;/>
                                    <display value=&quot;Optical properties&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;valueText&quot;>
                            <valueString value=&quot;Same as for blue light&quot;/>
                        </extension>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                    <code value=&quot;THEORY&quot;/>
                                    <display value=&quot;Theory&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;valueText&quot;>
                            <valueString value=&quot;MIE&quot;/>
                        </extension>
                    </extension>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                    <code value=&quot;STIR&quot;/>
                                    <display value=&quot;Stir Time&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;1&quot;/>
                                <unit value=&quot;minute&quot;/>
                                <!-- todo ucum -->
                            </valueQuantity>
                        </extension>
                    </extension>
                    <title value=&quot;Determination of Particle Size of Stelbat by Laser Diffraction (G1112)&quot;/>
                    <!-- can have device here or as ObsDef.device -->
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/dispersant&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Dispersant&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                <code value=&quot;dispersant&quot;/>
                                <display value=&quot;Dispersant&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/resultingMaterial&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Resulting material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                <code value=&quot;ResultingMaterial&quot;/>
                                <display value=&quot;Resulting Material&quot;/>
                            </coding>
                        </role>
                    </participant>
                    <action>
                        <title value=&quot;Sample Preparation&quot;/>
                        <action>
                            <title value=&quot;Instructions&quot;/>
                            <description value=&quot;Vortex approximately 30 seconds. Mix briefly by vortexing immediately before use.&quot;/>
                        </action>
                    </action>
                    <action>
                        <title value=&quot;Sample Analysis&quot;/>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--definitionCanonical value=&quot;ObservationDefinition/ParticleSize&quot;/-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4136-3c1f-b8ba6a7d046e&quot;/>
                        </action>
                    </action>
                    <action>
                        <title value=&quot;Sample Calculation&quot;/>
                        <description value=&quot;The particle size result is calculated automatically by the instrument software for each sample.&quot;/>
                        <code>
                            <text value=&quot;Calculation&quot;/>
                        </code>
                    </action>
                    <action>
                        <title value=&quot;Reporting&quot;/>
                        <description value=&quot;Report the average value as per specification&quot;/>
                        <code>
                            <text value=&quot;Reporting&quot;/>
                        </code>
                    </action>"><a id="urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763f"><span>Action</span></a><span class="summaryShowsOff"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <title value=&quot;Determination of Particle Size of Stelbat by Laser Diffraction (G1112)&quot;>"> - Determination of Particle Size of Stelbat by Laser Diffraction (G1112)</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <title value=&quot;Determination of Particle Size of Stelbat by Laser Diffraction (G1112)&quot;>">Title: </span><span>Determination of Particle Size of Stelbat by Laser Diffraction (G1112)</span></div>
<div class="indent planl3 summaryHiddenOff" title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                    <code value=&quot;OPTICAL&quot;/>
                                    <display value=&quot;Optical properties&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;valueText&quot;>
                            <valueString value=&quot;Same as for blue light&quot;/>
                        </extension>">
					Parameters
					<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                    <code value=&quot;OPTICAL&quot;/>
                                    <display value=&quot;Optical properties&quot;/>
                                </coding>
                            </valueCodeableConcept>">Parameter: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                    <code value=&quot;OPTICAL&quot;/>
                                    <display value=&quot;Optical properties&quot;/>
                                </coding>
                            </valueCodeableConcept>"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                    <code value=&quot;OPTICAL&quot;/>
                                    <display value=&quot;Optical properties&quot;/>">Optical properties<span class="greyOff"> [OPTICAL]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/process-parameter)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        ...
                        <extension url=&quot;valueText&quot;>
                            <valueString value=&quot;Same as for blue light&quot;/>">Value Text: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        ...
                        <extension url=&quot;valueText&quot;>
                            <valueString value=&quot;Same as for blue light&quot;/>"><span>Same as for blue light</span></span></div>
</div>
<div class="indent planl3 summaryHiddenOff" title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                    <code value=&quot;THEORY&quot;/>
                                    <display value=&quot;Theory&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;valueText&quot;>
                            <valueString value=&quot;MIE&quot;/>
                        </extension>">
					Parameters
					<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                    <code value=&quot;THEORY&quot;/>
                                    <display value=&quot;Theory&quot;/>
                                </coding>
                            </valueCodeableConcept>">Parameter: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                    <code value=&quot;THEORY&quot;/>
                                    <display value=&quot;Theory&quot;/>
                                </coding>
                            </valueCodeableConcept>"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                    <code value=&quot;THEORY&quot;/>
                                    <display value=&quot;Theory&quot;/>">Theory<span class="greyOff"> [THEORY]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/process-parameter)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        ...
                        <extension url=&quot;valueText&quot;>
                            <valueString value=&quot;MIE&quot;/>">Value Text: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        ...
                        <extension url=&quot;valueText&quot;>
                            <valueString value=&quot;MIE&quot;/>"><span>MIE</span></span></div>
</div>
<div class="indent planl3 summaryHiddenOff" title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                    <code value=&quot;STIR&quot;/>
                                    <display value=&quot;Stir Time&quot;/>
                                </coding>
                            </valueCodeableConcept>
                        </extension>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;1&quot;/>
                                <unit value=&quot;minute&quot;/>
                                <!-- todo ucum -->
                            </valueQuantity>
                        </extension>">
					Parameters
					<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                    <code value=&quot;STIR&quot;/>
                                    <display value=&quot;Stir Time&quot;/>
                                </coding>
                            </valueCodeableConcept>">Parameter: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                    <code value=&quot;STIR&quot;/>
                                    <display value=&quot;Stir Time&quot;/>
                                </coding>
                            </valueCodeableConcept>"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;parameter&quot;>
                            <valueCodeableConcept>
                                <coding>
                                    <system value=&quot;http://terminology.hl7.org/CodeSystem/process-parameter&quot;/>
                                    <code value=&quot;STIR&quot;/>
                                    <display value=&quot;Stir Time&quot;/>">Stir Time<span class="greyOff"> [STIR]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/process-parameter)</span></span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;1&quot;/>
                                <unit value=&quot;minute&quot;/>
                                <!-- todo ucum -->">Value Quantity: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-process-parameters-pq&quot;>
                        <extension url=&quot;value&quot;>
                            <valueQuantity>
                                <value value=&quot;1&quot;/>
                                <unit value=&quot;minute&quot;/>
                                <!-- todo ucum -->">1 minute</span></div>
</div>
<div class="indent planl3"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/dispersant&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Dispersant&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                <code value=&quot;dispersant&quot;/>
                                <display value=&quot;Dispersant&quot;/>
                            </coding>
                        </role>">Participant</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <participant>
                        ...
                        <role>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                <code value=&quot;dispersant&quot;/>
                                <display value=&quot;Dispersant&quot;/>
                            </coding>">Role: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <participant>
                        ...
                        <role>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                <code value=&quot;dispersant&quot;/>
                                <display value=&quot;Dispersant&quot;/>
                            </coding>"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <participant>
                        <role>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                <code value=&quot;dispersant&quot;/>
                                <display value=&quot;Dispersant&quot;/>">Dispersant<span class="greyOff"> [dispersant]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/manufacturing-participant-role)</span></span></span></div>
<div>
<div class="indent org"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <participant>
                        <typeReference>
                            ...
                            <display value=&quot;Dispersant&quot;>">Display: Dispersant</span></div>
</div>
<div class="indent sbd summaryUnit">
<div class="debugOff"><span>Found a parent (PlanDefinition/valueReference, id: analyticalProcedure fullUrl: urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763furl (canonical): http://example-server.com/fhir/PlanDefinition/2138e4c7-22b8-4c56-2d28-6c077648763f)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: dispersant)(fullUrl: urn:uuid:9f69ec9c-5fd1-30d2-0790-9e8135565f82)

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;dispersant&quot;/>
                <property>
                    <type>
                        <text value=&quot;Shelf life&quot;/>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Refer to local laboratory expiration date (may be extended with supporting data)&quot;/>
                    </valueCodeableConcept>
                </property>
                <name>
                    <name value=&quot;0.1% Sorbitan monooleate (Span 80) in hexanes (m/v)&quot;/>
                </name>" id="SubstanceDefinition-dispersant">Substance</span></a><span class="summaryShowsOff"><b> - 0.1% Sorbitan monooleate (Span 80) in hexanes (m/v)</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substancedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: dispersant</div>
<div class="debugOff"> fullUrl: urn:uuid:9f69ec9c-5fd1-30d2-0790-9e8135565f82</div>
<div class="summaryHiddenOff">
<div class="indent sbddetails">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <name>
                    <name value=&quot;0.1% Sorbitan monooleate (Span 80) in hexanes (m/v)&quot;>">Name: </span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <name>
                    <name value=&quot;0.1% Sorbitan monooleate (Span 80) in hexanes (m/v)&quot;>"><span>0.1% Sorbitan monooleate (Span 80) in hexanes (m/v)</span></span></div>
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
                        <text value=&quot;Shelf life&quot;/>
                    </type>
                    <valueCodeableConcept>
                        <text value=&quot;Refer to local laboratory expiration date (may be extended with supporting data)&quot;/>
                    </valueCodeableConcept>">Property</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    <type>
                        <text value=&quot;Shelf life&quot;/>">Type: <span style="white-space:normal;">Shelf life</span></span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <property>
                    ...
                    <valueCodeableConcept>
                        <text value=&quot;Refer to local laboratory expiration date (may be extended with supporting data)&quot;/>">Value: <span style="white-space:normal;">Refer to local laboratory expiration date (may be extended with supporting data)</span></span></div>
</div>
</div>
</div>
<div class="summaryHiddenOff"></div>
</div>
</div>
<div class="indent planl3"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    ...
                    <participant>
                        <typeReference>
                            <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-manufacturing-participant-pq&quot;>
                                <valueReference>
                                    <reference value=&quot;SubstanceDefinition/resultingMaterial&quot;/>
                                </valueReference>
                            </extension>
                            <display value=&quot;Resulting material&quot;/>
                        </typeReference>
                        <role>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                <code value=&quot;ResultingMaterial&quot;/>
                                <display value=&quot;Resulting Material&quot;/>
                            </coding>
                        </role>">Participant</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <participant>
                        ...
                        <role>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                <code value=&quot;ResultingMaterial&quot;/>
                                <display value=&quot;Resulting Material&quot;/>
                            </coding>">Role: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <participant>
                        ...
                        <role>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                <code value=&quot;ResultingMaterial&quot;/>
                                <display value=&quot;Resulting Material&quot;/>
                            </coding>"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <participant>
                        <role>
                            <coding>
                                <system value=&quot;http://terminology.hl7.org/CodeSystem/manufacturing-participant-role&quot;/>
                                <code value=&quot;ResultingMaterial&quot;/>
                                <display value=&quot;Resulting Material&quot;/>">Resulting Material<span class="greyOff"> [ResultingMaterial]</span><span class="greyOff"> (http://terminology.hl7.org/CodeSystem/manufacturing-participant-role)</span></span></span></div>
<div>
<div class="indent org"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <participant>
                        <typeReference>
                            ...
                            <display value=&quot;Resulting material&quot;>">Display: Resulting material</span></div>
</div>
<div class="indent sbd summaryUnit">
<div class="debugOff"><span>Found a parent (PlanDefinition/valueReference, id: analyticalProcedure fullUrl: urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763furl (canonical): http://example-server.com/fhir/PlanDefinition/2138e4c7-22b8-4c56-2d28-6c077648763f)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="SubstanceDefinition (id: resultingMaterial)(fullUrl: urn:uuid:9f69ec9c-5fd1-30d2-0790-9e8035565f82)

<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <id value=&quot;resultingMaterial&quot;/>
                <name>
                    <name value=&quot;Stelbat in dispersant (approximately 10 mg/mL)&quot;/>
                </name>" id="SubstanceDefinition-resultingMaterial">Substance</span></a><span class="summaryShowsOff"><b> - Stelbat in dispersant (approximately 10 mg/mL)</b></span><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/substancedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/substancedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/substancedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: resultingMaterial</div>
<div class="debugOff"> fullUrl: urn:uuid:9f69ec9c-5fd1-30d2-0790-9e8035565f82</div>
<div class="summaryHiddenOff">
<div class="indent sbddetails">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <name>
                    <name value=&quot;Stelbat in dispersant (approximately 10 mg/mL)&quot;>">Name: </span><span title="
<Bundle>
    <entry>
        <resource>
            <SubstanceDefinition>
                <name>
                    <name value=&quot;Stelbat in dispersant (approximately 10 mg/mL)&quot;>"><span>Stelbat in dispersant (approximately 10 mg/mL)</span></span></div>
</div>
</div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
<div class="summaryHiddenOff"></div>
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
                        <title value=&quot;Sample Preparation&quot;/>
                        <action>
                            <title value=&quot;Instructions&quot;/>
                            <description value=&quot;Vortex approximately 30 seconds. Mix briefly by vortexing immediately before use.&quot;/>
                        </action>"><a id="urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763f"><span>Action</span></a><span class="summaryShowsOff"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <title value=&quot;Sample Preparation&quot;>"> - Sample Preparation</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <title value=&quot;Sample Preparation&quot;>">Title: </span><span>Sample Preparation</span></div>
</div>
<div class="indent summaryUnit planl2"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        ...
                        <action>
                            <title value=&quot;Instructions&quot;/>
                            <description value=&quot;Vortex approximately 30 seconds. Mix briefly by vortexing immediately before use.&quot;/>"><a id="urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763f"><span>Action</span></a><span class="summaryShowsOff"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <action>
                            <title value=&quot;Instructions&quot;>"> - Instructions</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <action>
                            <title value=&quot;Instructions&quot;>">Title: </span><span>Instructions</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <action>
                            ...
                            <description value=&quot;Vortex approximately 30 seconds. Mix briefly by vortexing immediately before use.&quot;>">Description: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <action>
                            ...
                            <description value=&quot;Vortex approximately 30 seconds. Mix briefly by vortexing immediately before use.&quot;>">Vortex approximately 30 seconds. Mix briefly by vortexing immediately before use.</span></div>
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
                        <title value=&quot;Sample Analysis&quot;/>
                        <action>
                            <code>
                                <text value=&quot;Test&quot;/>
                            </code>
                            <!--definitionCanonical value=&quot;ObservationDefinition/ParticleSize&quot;/-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4136-3c1f-b8ba6a7d046e&quot;/>
                        </action>"><a id="urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763f"><span>Action</span></a><span class="summaryShowsOff"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <title value=&quot;Sample Analysis&quot;>"> - Sample Analysis</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <title value=&quot;Sample Analysis&quot;>">Title: </span><span>Sample Analysis</span></div>
</div>
<div class="indent summaryUnit planl2"><span title="
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
                            <!--definitionCanonical value=&quot;ObservationDefinition/ParticleSize&quot;/-->
                            <definitionCanonical value=&quot;http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4136-3c1f-b8ba6a7d046e&quot;/>"><a id="urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763f"><span>Action</span></a><span class="summaryShowsOff"> - <span style="white-space:normal;">Test</span></span></span><div class="summaryHiddenOff">
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
<div class="indent summaryUnit obsDef">
<div class="debugOff"><span>Found a parent (PlanDefinition/action, id: analyticalProcedure fullUrl: urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763furl (canonical): http://example-server.com/fhir/PlanDefinition/2138e4c7-22b8-4c56-2d28-6c077648763f)<br>which is linked to this by canonical resource.url</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: ParticleSize)(fullUrl: urn:uuid:12e7e672-40a6-4136-3c1f-b8ba6a7d046e)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;ParticleSize&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4136-3c1f-b8ba6a7d046e&quot;/>
                <title value=&quot;Particle Size&quot;/>
                <status value=&quot;active&quot;/>
                <description value=&quot;Number of Analyses: 1 replicate for each sample preparation&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/data-absent-reason&quot;>
                        <valueCode value=&quot;unsupported&quot;/>
                    </extension>
                </code>
                <specimen>
                    <reference value=&quot;SpecimenDefinition/specimendefinition&quot;/>
                </specimen>
                <device>
                    <reference value=&quot;DeviceDefinition/laser&quot;/>
                </device>
                <hasMember>
                    <reference value=&quot;ObservationDefinition/ParticleSizeObscuration&quot;/>
                </hasMember>
                <hasMember>
                    <reference value=&quot;ObservationDefinition/ParticleRI&quot;/>
                </hasMember>
                <hasMember>
                    <reference value=&quot;ObservationDefinition/ParticleSizeRSD&quot;/>
                </hasMember>" id="ObservationDefinition-ParticleSize">Observation Definition<span class="summaryShowsOff"> - <div style="display: inline"> (<span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/data-absent-reason&quot;>
                        <valueCode value=&quot;unsupported&quot;/>">Data Absent Reason: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/data-absent-reason&quot;>
                        <valueCode value=&quot;unsupported&quot;/>"><span>unsupported</span></span>)</div></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: ParticleSize</div>
<div class="debugOff"> fullUrl: urn:uuid:12e7e672-40a6-4136-3c1f-b8ba6a7d046e</div>
<div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4136-3c1f-b8ba6a7d046e</div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Particle Size&quot;>">Title: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Particle Size&quot;>">Particle Size</span></div>
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
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/data-absent-reason&quot;>
                        <valueCode value=&quot;unsupported&quot;/>
                    </extension>">Code: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/data-absent-reason&quot;>
                        <valueCode value=&quot;unsupported&quot;/>
                    </extension>"><div style="display: inline"> (<span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/data-absent-reason&quot;>
                        <valueCode value=&quot;unsupported&quot;/>">Data Absent Reason: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/data-absent-reason&quot;>
                        <valueCode value=&quot;unsupported&quot;/>"><span>unsupported</span></span>)</div></span></div>
<div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <description value=&quot;Number of Analyses: 1 replicate for each sample preparation&quot;>">Description: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <description value=&quot;Number of Analyses: 1 replicate for each sample preparation&quot;>">Number of Analyses: 1 replicate for each sample preparation</span></div>
</div>
<div class="summaryHiddenOff"></div>
<div class="indent obsDefl2"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <specimen>
                    <reference value=&quot;SpecimenDefinition/specimendefinition&quot;/>">Specimen</span><div class="indent org summaryUnit"><a class="plainLink"><span class="bold" title="SpecimenDefinition (id: specimendefinition)(fullUrl: urn:uuid:3a0cde98-4a73-6d67-1dfc-08e3fc9646a2)

<Bundle>
    <entry>
        <resource>
            <SpecimenDefinition>
                <id value=&quot;specimendefinition&quot;/>
                <url value=&quot;http://example-server.com/fhir/SpecimenDefinition/3a0cde98-4a73-6d67-1dfc-08e3fc9646a2&quot;/>
                <status value=&quot;active&quot;/>
                <description value=&quot;Number of Preparations: 3&quot;/>" id="SpecimenDefinition-specimendefinition">Specimen Definition</span><div></div></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/specimendefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/specimendefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/specimendefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: specimendefinition</div><div class="debugOff"> fullUrl: urn:uuid:3a0cde98-4a73-6d67-1dfc-08e3fc9646a2</div><div class="debugOff">url (canonical): http://example-server.com/fhir/SpecimenDefinition/3a0cde98-4a73-6d67-1dfc-08e3fc9646a2</div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <SpecimenDefinition>
                ...
                <status value=&quot;active&quot;>">Status: </span><span title="
<Bundle>
    <entry>
        <resource>
            <SpecimenDefinition>
                ...
                <status value=&quot;active&quot;>"><span>active</span></span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <SpecimenDefinition>
                ...
                <description value=&quot;Number of Preparations: 3&quot;>">Description: </span><span title="
<Bundle>
    <entry>
        <resource>
            <SpecimenDefinition>
                ...
                <description value=&quot;Number of Preparations: 3&quot;>">Number of Preparations: 3</span></div></div>
</div>
<div class="summaryHiddenOff">
<div></div><span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;ParticleSize&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4136-3c1f-b8ba6a7d046e&quot;/>
                <title value=&quot;Particle Size&quot;/>
                <status value=&quot;active&quot;/>
                <description value=&quot;Number of Analyses: 1 replicate for each sample preparation&quot;/>
                <code>
                    <extension url=&quot;http://hl7.org/fhir/StructureDefinition/data-absent-reason&quot;>
                        <valueCode value=&quot;unsupported&quot;/>
                    </extension>
                </code>
                <specimen>
                    <reference value=&quot;SpecimenDefinition/specimendefinition&quot;/>
                </specimen>
                <device>
                    <reference value=&quot;DeviceDefinition/laser&quot;/>
                </device>
                <hasMember>
                    <reference value=&quot;ObservationDefinition/ParticleSizeObscuration&quot;/>
                </hasMember>
                <hasMember>
                    <reference value=&quot;ObservationDefinition/ParticleRI&quot;/>
                </hasMember>
                <hasMember>
                    <reference value=&quot;ObservationDefinition/ParticleSizeRSD&quot;/>
                </hasMember>">Device</span><div class="indent devd summaryUnit"><div class="debugOff"><span>Found a parent (ObservationDefinition/device, id: ParticleSize fullUrl: urn:uuid:12e7e672-40a6-4136-3c1f-b8ba6a7d046eurl (canonical): http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4136-3c1f-b8ba6a7d046e)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="DeviceDefinition (id: laser)(fullUrl: urn:uuid:82a39a18-91cf-a19d-76c1-a9e8bad9495c)

<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                <id value=&quot;laser&quot;/>
                <description value=&quot;Analyzer with disperser and temperature control accessory, or equivalent&quot;/>
                <classification>
                    <type>
                        <text value=&quot;Particle Size Analyzer with Laser Diffraction&quot;/>
                    </type>
                </classification>" id="DeviceDefinition-laser">Device</span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/devicedefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/devicedefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/devicedefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: laser</div><div class="debugOff"> fullUrl: urn:uuid:82a39a18-91cf-a19d-76c1-a9e8bad9495c</div><div class="summaryHiddenOff"></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                ...
                <description value=&quot;Analyzer with disperser and temperature control accessory, or equivalent&quot;>">Description: </span><span title="
<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                ...
                <description value=&quot;Analyzer with disperser and temperature control accessory, or equivalent&quot;>">Analyzer with disperser and temperature control accessory, or equivalent</span></div><div><span title="
<Bundle>
    <entry>
        <resource>
            <DeviceDefinition>
                <classification>
                    <type>
                        <text value=&quot;Particle Size Analyzer with Laser Diffraction&quot;/>">Type: </span><span style="white-space:normal;">Particle Size Analyzer with Laser Diffraction</span></div><div class="summaryHiddenOff"></div></div></span></div>
<div class="indent obsDefl2 summaryUnit"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <hasMember>
                    <reference value=&quot;ObservationDefinition/ParticleSizeObscuration&quot;/>
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <hasMember>
                    <reference value=&quot;ObservationDefinition/ParticleRI&quot;/>
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <hasMember>
                    <reference value=&quot;ObservationDefinition/ParticleSizeRSD&quot;/>">Member</span><div class="indent summaryUnit obsDef"><div class="debugOff"><span>Found a parent (ObservationDefinition/hasMember, id: ParticleSize fullUrl: urn:uuid:12e7e672-40a6-4136-3c1f-b8ba6a7d046eurl (canonical): http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4136-3c1f-b8ba6a7d046e)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: ParticleSizeObscuration)(fullUrl: urn:uuid:12e7e672-40a6-4036-3c1f-b8ba6a7d045e)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;ParticleSizeObscuration&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4036-3c1f-b8ba6a7d045e&quot;/>
                <title value=&quot;Obscuration&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Obscuration&quot;/>
                        <display value=&quot;Obscuration&quot;/>
                    </coding>
                    <text value=&quot;Obscuration (%)&quot;/>
                </code>
                <qualifiedValue>
                    <range>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-target-pq&quot;>
                            <valueQuantity>
                                <value value=&quot;15&quot;/>
                                <unit value=&quot;%&quot;/>
                            </valueQuantity>
                        </extension>
                        <low>
                            <value value=&quot;10&quot;/>
                            <unit value=&quot;%&quot;/>
                        </low>
                        <high>
                            <value value=&quot;30&quot;/>
                            <unit value=&quot;%&quot;/>
                        </high>
                    </range>
                </qualifiedValue>" id="ObservationDefinition-ParticleSizeObscuration">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Obscuration&quot;/>
                        <display value=&quot;Obscuration&quot;/>">Obscuration<span class="greyOff"> [Obscuration]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: Obscuration (%)</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: ParticleSizeObscuration</div><div class="debugOff"> fullUrl: urn:uuid:12e7e672-40a6-4036-3c1f-b8ba6a7d045e</div><div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4036-3c1f-b8ba6a7d045e</div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Obscuration&quot;>">Title: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Obscuration&quot;>">Obscuration</span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div class="debugOff"><span title="
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
                <status value=&quot;active&quot;>"><span>active</span></span></div></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Obscuration&quot;/>
                        <display value=&quot;Obscuration&quot;/>
                    </coding>
                    <text value=&quot;Obscuration (%)&quot;/>">Code: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Obscuration&quot;/>
                        <display value=&quot;Obscuration&quot;/>
                    </coding>
                    <text value=&quot;Obscuration (%)&quot;/>"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Obscuration&quot;/>
                        <display value=&quot;Obscuration&quot;/>">Obscuration<span class="greyOff"> [Obscuration]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: Obscuration (%)</span></span></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="indent obsDefl2" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <qualifiedValue>
                    <range>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-target-pq&quot;>
                            <valueQuantity>
                                <value value=&quot;15&quot;/>
                                <unit value=&quot;%&quot;/>
                            </valueQuantity>
                        </extension>
                        <low>
                            <value value=&quot;10&quot;/>
                            <unit value=&quot;%&quot;/>
                        </low>
                        <high>
                            <value value=&quot;30&quot;/>
                            <unit value=&quot;%&quot;/>
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
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-target-pq&quot;>
                            <valueQuantity>
                                <value value=&quot;15&quot;/>
                                <unit value=&quot;%&quot;/>
                            </valueQuantity>
                        </extension>
                        <low>
                            <value value=&quot;10&quot;/>
                            <unit value=&quot;%&quot;/>
                        </low>
                        <high>
                            <value value=&quot;30&quot;/>
                            <unit value=&quot;%&quot;/>
                        </high>
                    </range>"><div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-target-pq&quot;>
                            <valueQuantity>
                                <value value=&quot;15&quot;/>
                                <unit value=&quot;%&quot;/>
                            </valueQuantity>
                        </extension>
                        <low>
                            <value value=&quot;10&quot;/>
                            <unit value=&quot;%&quot;/>
                        </low>
                        <high>
                            <value value=&quot;30&quot;/>
                            <unit value=&quot;%&quot;/>
                        </high>">Range: </span>from <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        ...
                        <low>
                            <value value=&quot;10&quot;/>
                            <unit value=&quot;%&quot;/>">10%</span> to <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        ...
                        <high>
                            <value value=&quot;30&quot;/>
                            <unit value=&quot;%&quot;/>">30%</span><div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-target-pq&quot;>
                            <valueQuantity>
                                <value value=&quot;15&quot;/>
                                <unit value=&quot;%&quot;/>">Target: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-target-pq&quot;>
                            <valueQuantity>
                                <value value=&quot;15&quot;/>
                                <unit value=&quot;%&quot;/>">15%</span></div></div></div></div><div class="summaryHiddenOff"></div></div><div class="indent summaryUnit obsDef"><div class="debugOff"><span>Found a parent (ObservationDefinition/hasMember, id: ParticleSize fullUrl: urn:uuid:12e7e672-40a6-4136-3c1f-b8ba6a7d046eurl (canonical): http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4136-3c1f-b8ba6a7d046e)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: ParticleRI)(fullUrl: urn:uuid:12e7e672-41a6-4036-3c1f-b8ba6a7d045e)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;ParticleRI&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/12e7e672-41a6-4036-3c1f-b8ba6a7d045e&quot;/>
                <title value=&quot;Particle refractive index&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Refractive index&quot;/>
                        <display value=&quot;Refractive index&quot;/>
                    </coding>
                    <text value=&quot;Particle refractive index&quot;/>
                </code>
                <qualifiedValue>
                    <range>
                        <low>
                            <value value=&quot;1.75&quot;/>
                            <!-- unitless -->
                        </low>
                        <high>
                            <value value=&quot;1.75&quot;/>
                            <!-- unitless -->
                        </high>
                    </range>
                </qualifiedValue>" id="ObservationDefinition-ParticleRI">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Refractive index&quot;/>
                        <display value=&quot;Refractive index&quot;/>">Refractive index<span class="greyOff"> [Refractive index]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: Particle refractive index</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: ParticleRI</div><div class="debugOff"> fullUrl: urn:uuid:12e7e672-41a6-4036-3c1f-b8ba6a7d045e</div><div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/12e7e672-41a6-4036-3c1f-b8ba6a7d045e</div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Particle refractive index&quot;>">Title: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Particle refractive index&quot;>">Particle refractive index</span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div class="debugOff"><span title="
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
                <status value=&quot;active&quot;>"><span>active</span></span></div></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Refractive index&quot;/>
                        <display value=&quot;Refractive index&quot;/>
                    </coding>
                    <text value=&quot;Particle refractive index&quot;/>">Code: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Refractive index&quot;/>
                        <display value=&quot;Refractive index&quot;/>
                    </coding>
                    <text value=&quot;Particle refractive index&quot;/>"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Refractive index&quot;/>
                        <display value=&quot;Refractive index&quot;/>">Refractive index<span class="greyOff"> [Refractive index]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: Particle refractive index</span></span></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="indent obsDefl2" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <qualifiedValue>
                    <range>
                        <low>
                            <value value=&quot;1.75&quot;/>
                            <!-- unitless -->
                        </low>
                        <high>
                            <value value=&quot;1.75&quot;/>
                            <!-- unitless -->
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
                        <low>
                            <value value=&quot;1.75&quot;/>
                            <!-- unitless -->
                        </low>
                        <high>
                            <value value=&quot;1.75&quot;/>
                            <!-- unitless -->
                        </high>
                    </range>"><div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        <low>
                            <value value=&quot;1.75&quot;/>
                            <!-- unitless -->
                        </low>
                        <high>
                            <value value=&quot;1.75&quot;/>
                            <!-- unitless -->
                        </high>">Range: </span>from <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        <low>
                            <value value=&quot;1.75&quot;/>
                            <!-- unitless -->">1.75</span> to <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <range>
                        ...
                        <high>
                            <value value=&quot;1.75&quot;/>
                            <!-- unitless -->">1.75</span></div></div></div><div class="summaryHiddenOff"></div></div><div class="indent summaryUnit obsDef"><div class="debugOff"><span>Found a parent (ObservationDefinition/hasMember, id: ParticleSize fullUrl: urn:uuid:12e7e672-40a6-4136-3c1f-b8ba6a7d046eurl (canonical): http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4136-3c1f-b8ba6a7d046e)<br>which is linked to this by resource.id</span></div><a class="plainLink"><span class="bold" title="ObservationDefinition (id: ParticleSizeRSD)(fullUrl: urn:uuid:12e7e672-40a6-4036-3c1f-b8ba6a7d046e)

<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <id value=&quot;ParticleSizeRSD&quot;/>
                <url value=&quot;http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4036-3c1f-b8ba6a7d046e&quot;/>
                <title value=&quot;Particle Size RSD&quot;/>
                <status value=&quot;active&quot;/>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Particle Size RSD&quot;/>
                        <display value=&quot;Particle Size RSD&quot;/>
                    </coding>
                    <text value=&quot;Particle Size RSD&quot;/>
                </code>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;The %RSD for the D(v, 0.9) must be not more than 15%&quot;/>
                    </extension>
                </qualifiedValue>" id="ObservationDefinition-ParticleSizeRSD">Observation Definition<span class="summaryShowsOff"> - <span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Particle Size RSD&quot;/>
                        <display value=&quot;Particle Size RSD&quot;/>">Particle Size RSD<span class="greyOff"> [Particle Size RSD]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: Particle Size RSD</span></span></span></a><span class="debugOff"> [documentation <a target="_blank" href="http://hl7.org/fhir/R4/observationdefinition.html#tt-uml">R4</a> <a target="_blank" href="http://hl7.org/fhir/observationdefinition.html#tt-uml">R5</a> <a target="_blank" href="http://build.fhir.org/observationdefinition.html#tt-uml">R6</a>]</span><div class="debugOff">id: ParticleSizeRSD</div><div class="debugOff"> fullUrl: urn:uuid:12e7e672-40a6-4036-3c1f-b8ba6a7d046e</div><div class="debugOff">url (canonical): http://example-server.com/fhir/ObservationDefinition/12e7e672-40a6-4036-3c1f-b8ba6a7d046e</div><div class="summaryHiddenOff"><div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Particle Size RSD&quot;>">Title: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <title value=&quot;Particle Size RSD&quot;>">Particle Size RSD</span></div></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"><div class="debugOff"><span title="
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
                <status value=&quot;active&quot;>"><span>active</span></span></div></div><div class="summaryHiddenOff"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Particle Size RSD&quot;/>
                        <display value=&quot;Particle Size RSD&quot;/>
                    </coding>
                    <text value=&quot;Particle Size RSD&quot;/>">Code: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Particle Size RSD&quot;/>
                        <display value=&quot;Particle Size RSD&quot;/>
                    </coding>
                    <text value=&quot;Particle Size RSD&quot;/>"><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <code>
                    <coding>
                        <system value=&quot;http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example&quot;/>
                        <code value=&quot;Particle Size RSD&quot;/>
                        <display value=&quot;Particle Size RSD&quot;/>">Particle Size RSD<span class="greyOff"> [Particle Size RSD]</span><span class="greyOff"> (http://hl7.org/fhir/uv/pharm-quality/CodeSystem/cs-local-codes-drug-pq-example)</span></span><span style="white-space:normal;"> - Text: Particle Size RSD</span></span></div><div class="summaryHiddenOff"></div><div class="summaryHiddenOff"></div><div class="indent obsDefl2" title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                ...
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;The %RSD for the D(v, 0.9) must be not more than 15%&quot;/>
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
                        <valueString value=&quot;The %RSD for the D(v, 0.9) must be not more than 15%&quot;/>
                    </extension>"><div><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;The %RSD for the D(v, 0.9) must be not more than 15%&quot;/>">Text: </span><span title="
<Bundle>
    <entry>
        <resource>
            <ObservationDefinition>
                <qualifiedValue>
                    <extension url=&quot;http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Extension-qualified-value-text-pq&quot;>
                        <valueString value=&quot;The %RSD for the D(v, 0.9) must be not more than 15%&quot;/>"><span>The %RSD for the D(v, 0.9) must be not more than 15%</span></span></div></div></div><div class="summaryHiddenOff"></div></div>
</div>
</div>
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
                        <title value=&quot;Sample Calculation&quot;/>
                        <description value=&quot;The particle size result is calculated automatically by the instrument software for each sample.&quot;/>
                        <code>
                            <text value=&quot;Calculation&quot;/>
                        </code>"><a id="urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763f"><span>Action</span></a><span class="summaryShowsOff"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <title value=&quot;Sample Calculation&quot;>"> - Sample Calculation</span> - <span style="white-space:normal;">Calculation</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <title value=&quot;Sample Calculation&quot;>">Title: </span><span>Sample Calculation</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        ...
                        <code>
                            <text value=&quot;Calculation&quot;/>">Code: </span><span style="white-space:normal;">Calculation</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        ...
                        <description value=&quot;The particle size result is calculated automatically by the instrument software for each sample.&quot;>">Description: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        ...
                        <description value=&quot;The particle size result is calculated automatically by the instrument software for each sample.&quot;>">The particle size result is calculated automatically by the instrument software for each sample.</span></div>
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
                        <title value=&quot;Reporting&quot;/>
                        <description value=&quot;Report the average value as per specification&quot;/>
                        <code>
                            <text value=&quot;Reporting&quot;/>
                        </code>"><a id="urn:uuid:2138e4c7-22b8-4c56-2d28-6c077648763f"><span>Action</span></a><span class="summaryShowsOff"><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <title value=&quot;Reporting&quot;>"> - Reporting</span> - <span style="white-space:normal;">Reporting</span></span></span><div class="summaryHiddenOff">
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        <title value=&quot;Reporting&quot;>">Title: </span><span>Reporting</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        ...
                        <code>
                            <text value=&quot;Reporting&quot;/>">Code: </span><span style="white-space:normal;">Reporting</span></div>
<div><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        ...
                        <description value=&quot;Report the average value as per specification&quot;>">Description: </span><span title="
<Bundle>
    <entry>
        <resource>
            <PlanDefinition>
                <action>
                    <action>
                        ...
                        <description value=&quot;Report the average value as per specification&quot;>">Report the average value as per specification</span></div>
</div>
</div>
</div>
</div>
</div>
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
		First resource in bundle:PlanDefinition
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
