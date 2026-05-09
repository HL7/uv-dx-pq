ValueSet: VsTestCategoryPQ
Id: vs-testCategory-pq
Title: "Test Category"
Description: "This value set contains codes for test category."
* ^status = #active
* ^experimental = false
* include codes from system CsPharmTestCategory

ValueSet: VsSpecificationTypePQ
Id: vs-specification-type-pq
Title: "Specification Type"
Description: "This value set contains example codes for specification type in pharmaceutical quality industry."
* ^status = #active
* ^experimental = false
* include codes from system CsSpecificationTypePQ

ValueSet: VsClosureTypesPQ
Id: vs-closureTypes-pq
Title: "Closure Types"
Description: "This value set contains codes for closure types."
* ^status = #active
* ^experimental = false
* include codes from system CsClosureType

ValueSet: VsManufacturingParticipantRolePQ
Id: vs-manufacturingParticipantRole-pq
Title: "Manufacturing Participant Role"
Description: "This value set contains codes for manufacturing participant."
* ^status = #active
* ^experimental = false
* include codes from system CsManufacturingParticipantRole

ValueSet: VsPlanTypePQ
Id: vs-planType-pq
Title: "Plan Type"
Description: "This value set contains codes for pharmaceutical plan type."
* ^status = #active
* ^experimental = false
* include codes from system CsPharmPlanType

ValueSet: MedicineDoseFormEDQM
Id: vs-medicine-doseform
Title: "Medicine Dose Form EDQM"
Description: """EDQM (European Directorate for the Quality of Medicines and Healthcare) Dose Form codes.  This Value Set includes all the EDQM Standard Terms having:
	
[Concept Status] = ‘Current’ AND
	
[Concept Class] IN (‘PDF’, ‘CMT’, ‘CDF’, ‘PFT') AND
	
[Domain] = 'Human and Veterinary'
	

PDF = 'Pharmaceutical dose form'; CMT = 'Combined terms'; CDF = 'Combined pharmaceutical dose form'; PFT = 'Patient Friendly'"""
* ^version = "1"
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 International"
* ^contact.name = "HL7 International"
* ^contact.telecom[0].system = #phone
* ^contact.telecom[=].value = "+1 734 677 7777"
* ^contact.telecom[+].system = #fax
* ^contact.telecom[=].value = "+1 734 677 6622"
* ^contact.telecom[+].system = #email
* ^contact.telecom[=].value = "info@hl7.org"
* ^immutable = false
* ^copyright = "This artifact includes content from EDQM Standard Terms. EDQM Standard Terms are copyright European Directorate for the Quality of Medicines. Terms & Conditions in https://www.edqm.eu/en/standard-terms-database"
* include codes from system $standardterms
    where status = "Current" and
    class = "PDF" and
    domain = "Human and Veterinary"
* include codes from system $standardterms
    where status = "Current" and
    class = "CMT" and
    domain = "Human and Veterinary"
* include codes from system $standardterms
    where status = "Current" and
    class = "CDF" and
    domain = "Human and Veterinary"
* include codes from system $standardterms
    where status = "Current" and
    class = "PFT" and
    domain = "Human and Veterinary"

ValueSet: VsSubstancePropertyValuePQ
Id: vs-substance-property-value-pq
Title: "Substance Property Value"
Description: "This value set contains example codes for substance property values in pharmaceutical quality industry."
* ^status = #active
* ^experimental = false
* include codes from system CsSubstancePropertyValuePQ

ValueSet: VsProcessParameterPQ
Id: vs-processParameter-pq
Title: "Process Parameter"
Description: "This value set contains codes for process parameter."
* ^status = #active
* ^experimental = false
* include codes from system CsProcessParameter

ValueSet: MedicineRouteOfAdministrationEDQM
Id: vs-medicine-route-of-administration
Title: "Medicine Route of Administration EDQM"
Description: """EDQM (European Directorate for the Quality of Medicines and Healthcare) Route of Administration codes.  This Value Set includes all the EDQM Standard Terms having:
	
[Concept Status] = ‘Current’ AND
	
[Concept Class] = 'ROA' AND
	
[Domain] = 'Human and Veterinary'
	

ROA = 'Route of administration'"""
* ^version = "1"
* ^status = #active
* ^experimental = false
* ^publisher = "HL7 International"
* ^contact.name = "HL7 International"
* ^contact.telecom[0].system = #phone
* ^contact.telecom[=].value = "+1 734 677 7777"
* ^contact.telecom[+].system = #fax
* ^contact.telecom[=].value = "+1 734 677 6622"
* ^contact.telecom[+].system = #email
* ^contact.telecom[=].value = "info@hl7.org"
* ^immutable = false
* ^copyright = "This artifact includes content from EDQM Standard Terms. EDQM Standard Terms are copyright European Directorate for the Quality of Medicines. Terms & Conditions in https://www.edqm.eu/en/standard-terms-database"
* include codes from system $standardterms
    where status = "Current" and
    class = "ROA" and
    domain = "Human and Veterinary"

ValueSet: VsManufacturingStepPQ
Id: vs-manufacturingStep-pq
Title: "Manufacturing Step"
Description: "This value set contains codes for manufacturing step."
* ^status = #active
* ^experimental = false
* include codes from system CsManufacturingStep

ValueSet: VsEquipmentClassPQ
Id: vs-equipmentClass-pq
Title: "Equipment Classes"
Description: "This value set contains codes for manufacturing equipment class."
* ^status = #active
* ^experimental = false
* include codes from system CsPharmMnfEquipmentClass

ValueSet: MedicinalProductCharacteristicType
Id: vs-medicinalproduct-characteristic-type
Title: "MedicinalProduct Characteristic Type"
Description: "Example codes for MedicinalProduct.characteristic.type"
* ^version = "1"
* ^status = #active
* ^experimental = true
* ^publisher = "HL7 International"
* ^contact.name = "HL7 International"
* ^contact.telecom[0].system = #phone
* ^contact.telecom[=].value = "+1 734 677 7777"
* ^contact.telecom[+].system = #fax
* ^contact.telecom[=].value = "+1 734 677 6622"
* ^contact.telecom[+].system = #email
* ^contact.telecom[=].value = "info@hl7.org"
* ^immutable = false
* CsLocalCodesDrugPQ#ionic-strength "Ionic Strength"
* CsLocalCodesDrugPQ#physicochemical "Physicochemical properties"
* CsLocalCodesDrugPQ#pH "pH"
* CsSubstancePropertyPQ#solubility-water "Solubility purified water"
* CsSubstancePropertyPQ#water-content "Water content"

ValueSet: VsManufacturedItemPropertyPQ
Id: vs-manufactured-item-property-pq
Title: "Manufactured Item Property"
Description: "This value set contains example codes for manufactured item property in pharmaceutical quality industry."
* ^status = #active
* ^experimental = false
* include codes from system CsManufacturedItemPropertyPQ

ValueSet: VsProductSiteUtilizationPQ
Id: vs-productSiteUtilizationType-pq
Title: "Product Site Utilization"
Description: "This value set contains codes for product site utilization type."
* ^status = #active
* ^experimental = false
* include codes from system CsProductSiteUtilizationType

ValueSet: VsProductNameTypePQ
Id: vs-productNameType-pq
Title: "Product Name Type"
Description: "This value set contains example codes for product name type in pharmaceutical quality industry."
* ^status = #active
* ^experimental = false
* include codes from system CsProductNameTypePQ

ValueSet: VsGradePQ
Id: vs-grade-pq
Title: "Grades"
Description: "This value set contains codes for package grade."
* ^status = #active
* ^experimental = false
* include codes from system CsPackageGrade

ValueSet: VsManufacturingStepScalePQ
Id: vs-manufacturingStepScale-pq
Title: "Manufacturing Step Scale"
Description: "This value set contains codes for manufacturing step scale."
* ^status = #active
* ^experimental = false
* include codes from system CsManufacturingStepScale

ValueSet: VsImpurityOriginPQ
Id: vs-impurity-origin-pq
Title: "Impurity Origins"
Description: "This value set contains codes for impurity origin."
* ^status = #active
* ^experimental = false
* include codes from system CsImpurityOrigin

ValueSet: VsContainerOrientationPQ
Id: vs-containerOrientation-pq
Title: "Container Orientations"
Description: "This value set contains codes for container orientation."
* ^status = #active
* ^experimental = false
* include codes from system CsContainerOrientation

ValueSet: PharmaceuticalOrganizationType
Id: vs-pharmaceutical-organization-type
Title: "Pharmaceutical Organization Type"
Description: "This value set contains codes for pharmaceutical organization types."
* ^status = #active
* ^experimental = false
* include codes from system CsPharmOrganizationType

ValueSet: VsDevicePropertyPQ
Id: vs-deviceProperty-pq
Title: "Device Properties"
Description: "This value set contains codes for device property."
* ^status = #active
* ^experimental = false
* include codes from system CsDeviceProperty

ValueSet: VsGoalPriorityPQ
Id: vs-goalPriority-pq
Title: "Goal Priority"
Description: "This value set contains example codes for goal priority used in pharmaceutical quality industry."
* ^status = #active
* ^experimental = false
* include codes from system CsGoalPriorityPQ

ValueSet: VsBatchDesignationPQ
Id: vs-batch-designation-pq
Title: "Batch Designation"
Description: "This value set contains codes for batch designation."
* ^status = #active
* ^experimental = false
* include codes from system CsBatchDesignationPQ

ValueSet: VsColorPQ
Id: vs-color-pq
Title: "Colors"
Description: "This value set contains codes for drug substance or product color."
* ^status = #active
* ^experimental = false
* include codes from system CsDrugSubstanceProductColor

ValueSet: VsDiagramTypePQ
Id: vs-diagramType-pq
Title: "Diagram Types"
Description: "This value set contains codes for diagram type."
* ^status = #active
* ^experimental = false
* include codes from system CsDiagramType

ValueSet: VsIngredientFunctionPQ
Id: vs-ingredientFunction-pq
Title: "Ingredient Function"
Description: "This value set contains codes for ingredient function."
* ^status = #active
* ^experimental = false
* include codes from system CsIngredientFunction

ValueSet: VsCharacterizationStepPQ
Id: vs-characterizationStep-pq
Title: "Characterization Steps"
Description: "This value set contains codes for structure characterization technique."
* ^status = #active
* ^experimental = false
* include codes from system CsStructureCharacterizationTechnique

ValueSet: VsTestMethodPQ
Id: vs-test-method-pq
Title: "Test Method"
Description: "This value set contains example codes for test methods in pharmaceutical quality industry."
* ^status = #active
* ^experimental = false
* include codes from system CsLocalCodesDrugPQ

ValueSet: VsCountryPQ
Id: vs-country-pq
Title: "ISO Country two letter codes"
Description: "This value set contains codes for ISO Country two letter codes."
* ^status = #active
* ^experimental = false
* include codes from valueset Country2

ValueSet: VsSubstancePropertyPQ
Id: vs-substance-property-pq
Title: "Substance Property"
Description: "This value set contains example codes for substance property types in pharmaceutical quality industry."
* ^status = #active
* ^experimental = false
* include codes from system CsSubstancePropertyPQ

ValueSet: VsQualifiedValueCriticalityPQ
Id: vs-qualifiedValueCriticality-pq
Title: "Qualified Value Criticality"
Description: "This value set contains example codes for observation qualified value criticality."
* ^status = #active
* ^experimental = false
* include codes from system CsObsQualifiedValueCriticalityPQ

ValueSet: VsDeviceTypePQ
Id: vs-deviceType-pq
Title: "Device Type"
Description: "This value set contains example codes for device type in pharmaceutical quality industry."
* ^status = #active
* ^experimental = false
* include codes from system CsDeviceTypePQ

ValueSet: VsImpurityTypePQ
Id: vs-impurity-type-pq
Title: "Impurity Types"
Description: "This value set contains codes for impurity type."
* ^status = #active
* ^experimental = false
* include codes from system CsImpurityType

ValueSet: VsProcessValidationProcedurePQ
Id: vs-process-validation-procedure-pq
Title: "Process Validation Procedure"
Description: "This value set contains example process validation procedure codes for use in pharmaceutical quality industry."
* ^status = #active
* ^experimental = false
* include codes from system CsLocalCodesDrugPQ

ValueSet: VsTimePointDescriptionPQ
Id: vs-timePointDescription-pq
Title: "Time Point Description"
Description: "This value set contains codes for time point description."
* ^status = #active
* ^experimental = false
* include codes from system CsTimePointDescription

ValueSet: VsPackagePropertyPQ
Id: vs-packageProperty-pq
Title: "Package Property"
Description: "This value set contains codes for package property."
* ^status = #active
* ^experimental = false
* include codes from system CsPackageProperty

ValueSet: VsReportTypePQ
Id: vs-reportType-pq
Title: "Report Type"
Description: "This value set contains codes for pharmaceutical report type."
* ^status = #active
* ^experimental = false
* include codes from system CsPharmReportType

