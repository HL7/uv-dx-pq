Profile: BundleAnalyticalProcedurePq
Parent: Bundle
Id: Bundle-analytical-procedure-pq
Title: "Bundle – Analytical Procedure PQ"
Description: "Analytical Procedure domain: This Bundle profile represents the structured data used in CTD section 3.2.P.5 Control of Drug Product, subsection 3.2.P.5.2 Analytical Procedures and section 3.2.S.4 Control of Drug Substance, subsection 3.2.S.4.2 Analytical Procedures."
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
    Product-Identification 0..1 and
    Component-Substance 1..* and
    Specimen-Definition 1..* and
    Protocol 1..1 and
    Test-Method 1..* and
    Test-Device 0..* and
    Image 0..*
* entry[Product-Identification].resource only MedicinalProductDefinitionDrugProductPq
* entry[Component-Substance].resource only SubstanceDefinitionComponentSubstanceDrugPq
* entry[Specimen-Definition].resource only SpecimenDefinitionDrugPq
* entry[Protocol].resource only PlanDefinitionDrugPq
* entry[Test-Method].resource only ObservationDefinitionTestMethodPq
* entry[Test-Device] ^min = 0
* entry[Test-Device].resource only DeviceDefinitionDrugPq
* entry[Image] ^min = 0
* entry[Image].resource only Binary
* entry[Image].resource MS