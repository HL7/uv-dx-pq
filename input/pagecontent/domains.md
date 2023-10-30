The Quality section of regulatory applications are organized into a table of contents that includes sections and sub-sections under the titles “Drug Substance” and “Drug Product”. This structure is designed for unstructured PDF and Word documents.

Rather than recreating the legacy table of contents format in FHIR, pharmaceutical quality data represented by FHIR in this guide are organized into 14 new domains (see figure). These 14 domains are designed to maximize the use of structured data and deliver benefits in terms of flexibility, efficiency, and data reuse.

Each domain has a page that describes its objective and provides a component diagram (where applicable), description of components, and examples.

<table>
<tr><td><b><i>Figure: Pharmaceutical Quality (PQ) FHIR IG Data Domains</i></b></td></tr>
<tr><td>The 14 PQ domains and their supporting sub-domains, in which each domain is based on a major PQ concept, such as Stability or Container Closure System. The subdomains contain individual data elements (not pictured) which capture the desired level of granularity needed for effective data exchange and communication of data across multiple parties.</td></tr>
<tr><td><img src="all-domains-dx-PQ.png" width="850"/></td></tr>
</table>

**Table: Mapping the legacy CTD Drug Substance and Drug Product sections to the new FHIR Quality Domains****

<table>
<thead>
  <tr>
    <th>FHIR IG Domain</th>
    <th>Drug Substance</th>
    <th>Drug Product</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>1. Identification</td>
    <td>3.2.S.1 General Information</td>
    <td>3.2.P.1 Description and Composition of the Drug Product</td>
  </tr>
  <tr>
    <td>2. Composition</td>
    <td>3.2.S.5 Reference Standards or Materials</td>
    <td>3.2.P.6 Reference Standards or Materials</td>
  </tr>
  <tr>
    <td>3. Impurities</td>
    <td>3.2.S.3 Characterisation
    <br>   3.2.S.3.2 Impurities</td>
    <td>3.2.P.5 Control of Drug Product
    <br>   3.2.P.5.5 Characterisation of Impurities</td>
  </tr>
  <tr>
    <td>4. Organizations</td>
    <td>3.2.S.2 Manufacture
    <br>   3.2.S.2.1 Manufacturer(s)</td>
    <td>3.2.P.3 Manufacture
    <br>   3.2.P.3.1 Manufacturer(s)</td>
  </tr>
  <tr>
    <td>5. Batch or Lot Information</td>
    <td>3.2.S.4.4 Batch Analyses</td>
    <td>3.2.P.5.4 Batch Analyses</td>
  </tr>
  <tr>
    <td>6. Batch Analysis</td>
    <td>3.2.S.4 Control of Drug Substance
    <br>   3.2.S.4.4 Batch Analyses</td>
    <td>3.2.P.5 Control of Drug Product
    <br>   3.2.P.5.4 Batch Analyses</td>
  </tr>
  <tr>
    <td>7. Batch Formula</td>
    <td><i>Not Applicable</i></td>
    <td>3.2.P.3 Manufacture
    <br>   3.2.P.3.2 Batch Formula</td>
  </tr>
  <tr>
    <td>8. Manufacturing Process</td>
    <td>3.2.S.2 Manufacture
    <br>   3.2.S.2.2 Description of Manufacturing Process and Process Controls</td>
    <td>3.2.P.3 Manufacture
    <br>   3.2.P.3.3 Description of Manufacturing Process and Process Controls</td>
  </tr>
  <tr>
    <td>9. Process Validation</td>
    <td>3.2.S.2 Manufacture
    <br>   3.2.S.2.5 Process Validation and/or Evaluation</td>
    <td>3.2.P.3 Manufacture
    <br>   3.2.P.3.5 Process Validation and/or Evaluation</td>
  </tr>
  <tr>
    <td>10. Analytical Procedures</td>
    <td>3.2.S.4 Control of Drug Substance
    <br>   3.2.S.4.2 Analytical Procedures</td>
    <td>3.2.P.5 Control of Drug Product
    <br>   3.2.P.5.2 Analytical Procedures</td>
  </tr>
  <tr>
  <tr>
    <td>11. Container Closure System</td>
    <td>3.2.S.6 Container Closure System</td>
    <td>3.2.P.7 Container Closure System</td>
  </tr>
  <tr>
    <td>12. Stability Study</td>
    <td>3.2.S.7 Stability
    <br>   3.2.S.7.3 Stability Data</td>
    <td>3.2.P.8 Stability
    <br>   3.2.P.8.3 Stability Data</td>
  </tr>
  <tr>
    <td>13. Drug Specifications</td>
    <td>3.2.S.4 Control of Drug Substance
    <br>   3.2.S.4.1 Specification</td>
    <td>3.2.P.5 Control of Drug Product
    <br>   3.2.P.5.1 Specification(s)</td>
  </tr>
  <tr>
    <td>14. Compatibility</td>
    <td><i>Not Applicable</i></td>
    <td>3.2.P.2 Pharmaceutical Development
    <br>   3.2.P.2.6 Compatibility</td>
  </tr>
</tbody>
</table>