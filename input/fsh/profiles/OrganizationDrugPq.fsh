Profile: OrganizationDrugPq
Parent: Organization
Id: Organization-drug-pq
Title: "Organization - Drug PQ"
Description: "This Organization profile represents information about a pharmaceutical company or site that performed drug testing or manufacturing."
* ^meta.versionId = "4"
* ^meta.lastUpdated = "2022-12-21T15:57:57.213+00:00"
* ^meta.source = "#QicMqLtZtYG0gwZK"
* ^status = #active
* identifier 1..
* identifier.system 1..
* identifier.value 1..
* active ^short = "Whether this organization's record is in active use"
* type 1.. MS
* type from PharmaceuticalOrganizationType (preferred)
* name ^short = "Organization's legal name"
* alias ^short = "A list of alternate names for this organization"
* description ^short = "Additional details about the Organization"
* contact.telecom ^slicing.discriminator.type = #value
* contact.telecom ^slicing.discriminator.path = "system"
* contact.telecom ^slicing.rules = #open
* contact.telecom contains
    phone 0..* and
    email 0..* and
    url 0..*
* contact.telecom[phone] ^short = "Phone"
* contact.telecom[phone] ^definition = "Corporate phone contact information for the local representative of the marketing authorization holder. International dialling code followed by the area code and telephone number."
* contact.telecom[phone].system 1..
* contact.telecom[phone].system = #phone
* contact.telecom[email] ^short = "email"
* contact.telecom[email] ^definition = "Corporate email contact information for the local representative of the marketing authorization holder."
* contact.telecom[email].system 1..
* contact.telecom[email].system = #email
* contact.telecom[url] ^short = "Web Site"
* contact.telecom[url] ^definition = "Website of the local health authority and market authorization holder website"
* contact.telecom[url].system 1..
* contact.telecom[url].system = #url
* contact.address.use = #work
* contact.address.use ^short = "home | work | temp | old | billing"
* contact.address.type ^short = "postal|physical|both"
* contact.address.text ^short = "Text representation of the address."
* contact.address.line 1..
* contact.address.city 1..
* contact.address.country 1..
* contact.address.country from VsCountryPQ (preferred)