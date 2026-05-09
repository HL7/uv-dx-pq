Profile: DocumentReferenceDrugPq
Parent: DocumentReference
Id: DocumentReference-drug-pq
Title: "DocumentReference - Drug PQ"
Description: "This DocumentReference profile references a document of any kind, including a diagram or image, that is necessary for pharmaceutical quality (PQ) data exchange."
* ^status = #active
* identifier MS
* status MS
* type only CodeableConcept
* type MS
* type from VsDiagramTypePQ (preferred)
* content MS
* content.attachment MS