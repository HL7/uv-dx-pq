Instance: composition-drug-pq-risk
InstanceOf: Composition
Usage: #example
* meta.profile = "http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Composition-drug-pq"
* status = #final
* type.text = "Product Note - Summary for Risk of Impurities"
* subject = Reference(MedicinalProductDefinition/medicinalproductdefinition-drug-product-pq-ex1)
* date = "2023-10-01"
* author = Reference(organization-drug-pq-ex1)
* title = "3.2.P.2.2.4 - Summary for Risk of Impurities"
* section.text.status = #additional
* section.text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p>Text for the risk assessment of elemental impurities in the product</p></div>"