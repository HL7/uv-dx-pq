Profile: DeviceDefinitionDrugPq
Parent: DeviceDefinition
Id: DeviceDefinition-drug-pq
Title: "DeviceDefinition - Drug PQ"
Description: "This DeviceDefinition profile represents information about devices and equipment used in pharmaceutical quality (PQ) data gathering."
* ^status = #active
* deviceName MS
* classification MS
* classification.type MS
* classification.type from VsDeviceTypePQ (preferred)
* property MS
* property.type MS
* property.type from VsDevicePropertyPQ (preferred)
* property.value[x] only Quantity or CodeableConcept or string or boolean or integer or Range or Attachment
* property.value[x] MS