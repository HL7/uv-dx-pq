Instance: devicedefinition-drug-pq-ex1
InstanceOf: DeviceDefinition
Usage: #example
* meta.profile = "http://hl7.org/fhir/uv/pharm-quality/StructureDefinition/DeviceDefinition-drug-pq"
* deviceName.name = "Rotating Impeller with 1.5mm screen"
* deviceName.type = #registered-name
* property.type.coding = $device-property#"Maximum Speed" "Maximum Speed"
* property.valueQuantity.value = 5000
* property.valueQuantity.unit = "RPM"