### How to Use This IG 
This implementation guide is designed to rely on example templates as a priority. Profiles were designed with an extra degree of flexibility to facilitate implementation by early adopters. Profiles will be refined and progressively become stricter as implementers gain practical experience with production environments.

This approach is being adopted as a result of implementation experience gained to date by the Electronic Medicinal Product Information (ePI) FHIR Implementation Guide project. Early experience by ePI implementers identified a greater value and dependence on ePI templates rather than the profiles. As a result, the ePI IG is being updated to relax profile constraints and significantly increase the number and variety of example templates to facilitate implementation.

These lessons learned from the ePI project are being adapted for the PQ (Industry) project to facilitate implementation.

### Terminology
This IG prioritizes international standards where they exist. In this case, ISO IDMP is the relevant international standard. It has designated EDQM as the standard for dose form, route of administration, unit of presentation, pack type, closure type. Therefore, to maintain alignment with IDMP, this IG will reference EDQM as the preferred terminology for the aforementioned topics. 

This has the added benefit of supporting industry’s intended use case for data alignment/reuse across PQ, clinical, ePI, artwork, and defect reporting to name a few. This also facilitates industry’s implementation since most regulatory information management (RIM) software developers are already pre-loading their systems with this terminology to facilitate compliance with the EMA’s IDMP implementation through their SPOR program.

### Cross Version Analysis

{% include cross-version-analysis.xhtml %}

### Dependency Table

{% include dependency-table.xhtml %}

### Global Profiles Table

{% include globals-table.xhtml %}

### IP Statements

{% include ip-statements.xhtml %}