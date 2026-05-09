Instance: composition-drug-pq-formulation
InstanceOf: Composition
Usage: #example
* meta.profile = "http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/Composition-drug-pq"
* status = #final
* type.text = "Product Note - Formulation Development"
* subject = Reference(MedicinalProductDefinition/medicinalproductdefinition-drug-product-pq-ex1)
* date = "2023-10-01"
* author = Reference(organization-drug-pq-ex1)
* title = "3.2.P.2.2.1 - Formulation Development"
* section[0].title = "3.2.P.2.2.1.1 - Formulation History"
* section[=].text.status = #additional
* section[=].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><ul><li>Drug product description including difference or similarity between the drug product and reference product, if applicable</li><li>Propose route of administration (include any dilution or reconstitution necessary)</li><li>Choice of manufacturing process, explain choice if alternative process could have been applicable (e.g. aseptic processing instead of terminal sterilization, direct compression instead of granulation). If different processes were used for different formulation highlight and explain differences, refer at 3.2.P.2.3. If no change in the process occurred refer to 3.3.P.3.3 and avoid duplication data.</li></ul><p>Table 1 - Formulation history for Stelbatolol</p><table><tr><th>Formulation Identifier</th><th>Composition</th><th>Change</th><th>Development phase</th></tr><tr><td>1233545</td><td>Composition 1a</td><td>Changes made are listed here</td><td>Pre-clinical phase</td></tr></table></div>"
* section[+].title = "3.2.P.2.2.1.2 - Formulation Development Studies"
* section[=].text.status = #additional
* section[=].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p>Summary of the formulation developmental studies conducted are provided in Table 2</p><p>Table 2 - Formulation Development Studies</p><table><tr><th>Study</th><th>Formulation identifier </th><th>Objective</th><th>Quality attribute evaluated</th><th>Study design</th><th>Study result</th></tr><tr><td>Study Name</td><td>12234a</td><td>Short description of the study objective</td><td>CQA information</td><td>Short description of the design</td><td>Reference to the table showing study results</td></tr></table></div>"
* section[+].title = "3.2.P.2.2.4 - Summary for Risk Assessment of Elemental Impurities in Drug Product"
* section[=].text.status = #additional
* section[=].text.div = "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p>Summary of the risk assessment for product...</p></div>"