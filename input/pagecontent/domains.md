The Quality sections of regulatory applications are organized into a table of contents that includes sections and sub-sections under the titles “Drug Substance” and “Drug Product”. This structure is designed for unstructured PDF and Word documents.

Rather than recreating the legacy table of contents format in FHIR, pharmaceutical quality data represented by FHIR in this guide are organized into 14 new domains (see Figure below). These 14 domains are designed to maximize the use of structured data and deliver benefits in terms of flexibility, efficiency, and data reuse.

Each domain has a page that describes its objective and provides a component diagram (where applicable), description of components, and examples.

***Figure: Pharmaceutical Quality (PQ) FHIR IG Data Domains:*** The 14 PQ domains and their supporting sub-domains, in which each domain is based on a major PQ concept, such as Stability or Container Closure System. The subdomains contain individual data elements (not pictured) which capture the desired level of granularity needed for effective data exchange and communication of data across multiple parties.
<table><tr><td><img src="all-domains-dx-PQ.png" /></td></tr></table>

***Table: Mapping the legacy CTD Drug Substance and Drug Product sections to the new FHIR Quality Domains***
<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-0lax{text-align:left;vertical-align:top}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-0lax"><b>FHIR IG Domain</b></th>
    <th class="tg-0lax"><b>Drug Substance</b></th>
    <th class="tg-0lax"><b>Drug Product</b></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0lax">1. Identification</td>
    <td class="tg-0lax">3.2.S.1 General Information</td>
    <td class="tg-0lax">3.2.P.1 Description and Composition of the Drug Product</td>
  </tr>
  <tr>
    <td class="tg-0lax">2. Composition</td>
    <td class="tg-0lax">3.2.S.5 Reference Standards or Materials</td>
    <td class="tg-0lax">3.2.P.6 Reference Standards or Materials</td>
  </tr>
  <tr>
    <td class="tg-0lax">3. Impurities</td>
    <td class="tg-0lax">3.2.S.3.2 Impurities (in 3.2.S.3 Characterisation)</td>
    <td class="tg-0lax">3.2.P.5.5 Characterisation of Impurities (in 3.2.P.5 Control of Drug Product)</td>
  </tr>
  <tr>
    <td class="tg-0lax">4. Organizations</td>
    <td class="tg-0lax">3.2.S.2.1 Manufacturer(s) (in 3.2.S.2 Manufacture)</td>
    <td class="tg-0lax">3.2.P.3.1 Manufacturer(s) (in 3.2.P.3 Manufacture)</td>
  </tr>
  <tr>
    <td class="tg-0lax">5. Batch or Lot Information</td>
    <td class="tg-0lax">3.2.S.4.4 Batch Analyses</td>
    <td class="tg-0lax">3.2.P.5.4 Batch Analyses</td>
  </tr>
  <tr>
    <td class="tg-0lax">6. Batch Analysis</td>
    <td class="tg-0lax">3.2.S.4.4 Batch Analyses (in 3.2.S.4 Control of Drug Substance)</td>
    <td class="tg-0lax">3.2.P.5.4 Batch Analyses (in 3.2.P.5 Control of Drug Product)</td>
  </tr>
  <tr>
    <td class="tg-0lax">7. Batch Formula</td>
    <td class="tg-0lax"><i>Not Applicable</i></td>
    <td class="tg-0lax">3.2.P.3.2 Batch Formula (in 3.2.P.3 Manufacture)</td>
  </tr>
  <tr>
    <td class="tg-0lax">8. Manufacturing Process</td>
    <td class="tg-0lax">3.2.S.2.2 Description of Manufacturing Process and Process Controls (in 3.2.S.2 Manufacture)</td>
    <td class="tg-0lax">3.2.P.3.3 Description of Manufacturing Process and Process Controls (in 3.2.P.3 Manufacture)</td>
  </tr>
  <tr>
    <td class="tg-0lax">9. Process Validation</td>
    <td class="tg-0lax">3.2.S.2.5 Process Validation and/or Evaluation (in 3.2.S.2 Manufacture)</td>
    <td class="tg-0lax">3.2.P.3.5 Process Validation and/or Evaluation (in 3.2.P.3 Manufacture)</td>
  </tr>
  <tr>
    <td class="tg-0lax">10. Analytical Procedures</td>
    <td class="tg-0lax">3.2.S.4.2 Analytical Procedures (in 3.2.S.4 Control of Drug Substance)</td>
    <td class="tg-0lax">3.2.P.5.2 Analytical Procedures (in 3.2.P.5 Control of Drug Product)</td>
  </tr>
  <tr>
    <td class="tg-0lax">11. Container Closure System</td>
    <td class="tg-0lax">3.2.S.6 Container Closure System</td>
    <td class="tg-0lax">3.2.P.7 Container Closure System</td>
  </tr>
  <tr>
    <td class="tg-0lax">12. Stability Study</td>
    <td class="tg-0lax">3.2.S.7.3 Stability Data (in 3.2.S.7 Stability)</td>
    <td class="tg-0lax">3.2.P.8.3 Stability Data (in 3.2.P.8 Stability)</td>
  </tr>
  <tr>
    <td class="tg-0lax">13. Drug Specifications</td>
    <td class="tg-0lax">3.2.S.4.1 Specification (in 3.2.S.4 Control of Drug Substance)</td>
    <td class="tg-0lax">3.2.P.5.1 Specification(s) (in 3.2.P.5 Control of Drug Product)</td>
  </tr>
  <tr>
    <td class="tg-0lax">14. Compatibility</td>
    <td class="tg-0lax"><i>Not Applicable</i></td>
    <td class="tg-0lax">3.2.P.2.6 Compatibility (in 3.2.P.2 Pharmaceutical Development)
</td>
  </tr>
</tbody>
</table>

