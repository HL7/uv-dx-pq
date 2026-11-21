### Who this is for

Sponsors with a RIM or IDMP system that already holds product master data. PQI Type 2 keeps the Type 1 narrative unchanged and adds the identity and regulatory context a reviewer or a RIM system needs before reading any CMC detail.

### What you need

* A [Type 1](build_type1.html) document.
* An export of the product master data from a RIM or IDMP/SPOR system.

### Resources added

| Content | Profile |
|---|---|
| Drug product identity, strength, dose form, route | [MedicinalProductDefinitionDrugProductPq](StructureDefinition-MedicinalProductDefinition-drug-product-pq.html) |
| Manufactured item (e.g. tablet core and coat) | [ManufacturedItemDefinitionDrugPq](StructureDefinition-ManufacturedItemDefinition-drug-pq.html) |
| Administrable product (dose form and route as given, including reconstitution); optional | [AdministrableProductDefinitionPq](StructureDefinition-AdministrableProductDefinition-drug-pq.html) |
| Packaging and container closure | [PackagedProductDefinitionDrugPq](StructureDefinition-PackagedProductDefinition-drug-pq.html) |
| Qualitative and quantitative composition | [IngredientDrugPq](StructureDefinition-Ingredient-drug-pq.html) |
| Drug substance, excipients, impurities | [SubstanceDefinitionComponentSubstanceDrugPq](StructureDefinition-SubstanceDefinition-component-substance-drug-pq.html) |
| Applicant, manufacturers, test sites, packagers | [OrganizationDrugPq](StructureDefinition-Organization-drug-pq.html) |
| Marketing authorization or application | [RegulatedAuthorizationPq](StructureDefinition-RegulatedAuthorization-drug-pq.html) |

### Steps

1. Start from the Type 1 document and set `Composition.category` to `type-2`.
2. Point `Composition.subject` at the `MedicinalProductDefinition` (or, in a 3.2.S document, at the drug substance `SubstanceDefinition`), and `Composition.author` at the applicant `Organization`.
3. Add a first top-level section coded `pqi-product-data`. Its `entry` lists every other product data resource, and its `text` is generated (`status = generated`), e.g. a summary table of product, packs, sites and authorizations.
4. Leave the CTD sections as in Type 1: they still reference only image DocumentReferences.
5. Where 2.3.S or 2.3.P repeats in the Module 2.3 document, set `section.focus` on each repeat to its drug substance or drug product.
6. Add the resources to the Bundle. Use the same identifiers in every document that carries the same resource.

### Reuse

The same `MedicinalProductDefinition`, `PackagedProductDefinition`, `AdministrableProductDefinition` and `Organization` instances can be shared with IDMP submissions, so the product data is maintained once.

### Profiles and rules

* [BundleDocumentType2Pq](StructureDefinition-Bundle-document-type2-pq.html) and [CompositionType2Pq](StructureDefinition-Composition-type2-pq.html)
* Invariants: the Type 1 set (except `pqi-t1-1`), plus `pqi-foc-1`, `pqi-foc-2`, `pqi-foc-3`, `pqi-t2-1`

### Checklist

- [ ] `subject` and `author` reference resources in the Bundle
- [ ] One Product data section, first, with generated narrative, listing every product data resource
- [ ] CTD sections reference only image DocumentReferences
- [ ] Repeated 2.3.S / 2.3.P sections carry `section.focus`
- [ ] Shared resources keep the same identifiers across documents

### Moving to the next type

[Type 3](build_type3.html) links the narrative to the data, section by section.
