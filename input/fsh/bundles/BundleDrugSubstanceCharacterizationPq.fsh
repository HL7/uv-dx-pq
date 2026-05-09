Profile: BundleDrugSubstanceCharacterizationPq
Parent: Bundle
Id: Bundle-drug-substance-characterization-pq
Title: "Bundle – Drug Substance Characterization PQ"
Description: "Identification domain: This Bundle profile represents the structured data used in CTD section 3.2.S.3 Characterisation, subsection 3.2.S.3.1 – Elucidation of Structure and Other Characteristics."
* identifier MS
* type = #collection
* type MS
* type ^short = "collection"
* timestamp MS
* entry MS
* entry ^slicing.discriminator.type = #type
* entry ^slicing.discriminator.path = "resource"
* entry ^slicing.rules = #open
* entry contains
    Component-Substance 1..* and
    Actual-Batch-Substance 1..* and
    Protocol 1..1 and
    Test-Method 1..* and
    Report 1..* and
    Result-Observations 1..* and
    Organization 1..*
* entry[Component-Substance].resource only SubstanceDefinitionComponentSubstanceDrugPq
* entry[Actual-Batch-Substance].resource only SubstanceDrugPq
* entry[Protocol].resource only PlanDefinitionDrugPq
* entry[Test-Method].resource only ObservationDefinitionTestMethodPq
* entry[Report].resource only DiagnosticReportAnalysisDrugPQ
* entry[Result-Observations].resource only ObservationTestResultDrugPq
* entry[Organization].resource only OrganizationDrugPq