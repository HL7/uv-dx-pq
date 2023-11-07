The Quality sections of regulatory applications are organized into a table of contents that includes sections and sub-sections under the titles “Drug Substance” and “Drug Product”. The structure is defined in the *Common Technical Document for the Registration of Pharmaceuticals for Human Use*, or CTD (see [References](best_practices.html)). This structure is designed for unstructured PDF and Word documents.

Rather than recreating the legacy table of contents format in FHIR, pharmaceutical quality data represented by FHIR in this guide are organized into 14 new domains (see figure below). These 14 domains are designed to maximize the use of structured data and deliver benefits in terms of flexibility, efficiency, and data reuse.

Each domain has a page that describes its objective and provides a component diagram (where applicable), description of components, and examples.

***Figure: Pharmaceutical Quality (PQ) FHIR IG Data Domains:*** The 14 PQ domains and their supporting sub-domains, in which each domain is based on a major PQ concept, such as Stability or Container Closure System. The subdomains contain individual data elements (not pictured) which capture the desired level of granularity needed for effective data exchange and communication of data across multiple parties.
<table><tr><td><img src="all-domains-dx-PQ.png" usemap="#hotspots"/></td></tr></table>

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
    <th class="tg-0lax"><b>Drug Product</b></th>
        <th class="tg-0lax"><b>Drug Substance</b></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0lax">1. Identification</td>
    <td class="tg-0lax">3.2.P.2 Pharmaceutical Development
        <br>&nbsp;&nbsp;&nbsp;3.2.P.2.2 Drug Product 
        <br>&nbsp;&nbsp;&nbsp;3.2.P.2.5 Microbiological Attributes
    <br>3.2.P.4 Control of Excipients  
        <br>&nbsp;&nbsp;&nbsp;3.2.P.4.5 Excipients of Human or Animal Origin 
        <br>&nbsp;&nbsp;&nbsp;3.2.P.4.6 Novel Excipients</td>
    <td class="tg-0lax">3.2.S.1 General Information
        <br>&nbsp;&nbsp;&nbsp;3.2.S.1.3 – General Properties
    <br>3.2.S.3 Characterisation
        <br>&nbsp;&nbsp;&nbsp;3.2.S.3.1 – Elucidation of Structure and Other Characteristics</td>
  </tr>
  <tr>
    <td class="tg-0lax">2. Composition</td>
    <td class="tg-0lax">3.2.P.1 Description and Composition of the Drug Product<br>3.2.P.6 Reference Standards or Materials</td>
    <td class="tg-0lax">3.2.S.5 Reference Standards or Materials</td>
  </tr>
  <tr>
    <td class="tg-0lax">3. Impurities</td>
    <td class="tg-0lax">3.2.P.5 Control of Drug Product
    <br>&nbsp;&nbsp;&nbsp;3.2.P.5.5 Characterisation of Impurities</td>
    <td class="tg-0lax">3.2.S.3 Characterisation
    <br>&nbsp;&nbsp;&nbsp;3.2.S.3.2 Impurities</td>
  </tr>
  <tr>
    <td class="tg-0lax">4. Organizations</td>
    <td class="tg-0lax">3.2.P.3 Manufacture
    <br>&nbsp;&nbsp;&nbsp;3.2.P.3.1 Manufacturer(s)</td>
    <td class="tg-0lax">3.2.S.2 Manufacture
    <br>&nbsp;&nbsp;&nbsp;3.2.S.2.1 Manufacturer(s)</td>
  </tr>
  <tr>
    <td class="tg-0lax">5. Batch or Lot Information</td>
    <td class="tg-0lax">3.2.P.5 Control of Drug Product
    <br>&nbsp;&nbsp;&nbsp;3.2.P.5.4 Batch Analyses</td>
    <td class="tg-0lax">3.2.S.4 Control of Drug Substance
    <br>&nbsp;&nbsp;&nbsp;3.2.S.4.4 Batch Analyses</td>
  </tr>
  <tr>
    <td class="tg-0lax">6. Batch Analysis</td>
    <td class="tg-0lax">3.2.P.5 Control of Drug Product
    <br>&nbsp;&nbsp;&nbsp;3.2.P.5.4 Batch Analyses</td>
    <td class="tg-0lax">3.2.S.4 Control of Drug Substance
    <br>&nbsp;&nbsp;&nbsp;3.2.S.4.4 Batch Analyses</td>
  </tr>
  <tr>
    <td class="tg-0lax">7. Batch Formula</td>
    <td class="tg-0lax">3.2.P.3 Manufacture
    <br>&nbsp;&nbsp;&nbsp;3.2.P.3.2 Batch Formula</td>
    <td class="tg-0lax"><i>Not Applicable</i></td>
  </tr>
  <tr>
    <td class="tg-0lax">8. Manufacturing Process</td>
    <td class="tg-0lax">3.2.P.3 Manufacture
    <br>&nbsp;&nbsp;&nbsp;3.2.P.3.3 Description of Manufacturing Process and Process Controls</td>
    <td class="tg-0lax">3.2.S.2 Manufacture
    <br>&nbsp;&nbsp;&nbsp;3.2.S.2.2 Description of Manufacturing Process and Process Controls</td>
  </tr>
  <tr>
    <td class="tg-0lax">9. Process Validation</td>
    <td class="tg-0lax">3.2.P.3 Manufacture
    <br>&nbsp;&nbsp;&nbsp;3.2.P.3.5 Process Validation and/or Evaluation</td>
    <td class="tg-0lax">3.2.S.2 Manufacture
    <br>&nbsp;&nbsp;&nbsp;3.2.S.2.5 Process Validation and/or Evaluation</td>
  </tr>
  <tr>
    <td class="tg-0lax">10. Analytical Procedures</td>
    <td class="tg-0lax">3.2.P.5 Control of Drug Product
    <br>&nbsp;&nbsp;&nbsp;3.2.P.5.2 Analytical Procedures</td>
    <td class="tg-0lax">3.2.S.4 Control of Drug Substance
    <br>&nbsp;&nbsp;&nbsp;3.2.S.4.2 Analytical Procedures</td>
  </tr>
  <tr>
    <td class="tg-0lax">11. Container Closure System</td>
    <td class="tg-0lax">3.2.P.7 Container Closure System</td>
    <td class="tg-0lax">3.2.S.6 Container Closure System</td>
  </tr>
  <tr>
    <td class="tg-0lax">12. Stability Study</td>
    <td class="tg-0lax">3.2.P.8 Stability
    <br>&nbsp;&nbsp;&nbsp;3.2.P.8.3 Stability Data</td>
    <td class="tg-0lax">3.2.S.7 Stability
    <br>&nbsp;&nbsp;&nbsp;3.2.S.7.3 Stability Data</td>
  </tr>
  <tr>
    <td class="tg-0lax">13. Drug Specifications</td>
    <td class="tg-0lax">3.2.P.5 Control of Drug Product
    <br>&nbsp;&nbsp;&nbsp;3.2.P.5.1 Specification(s)</td>
    <td class="tg-0lax">3.2.S.4 Control of Drug Substance
    <br>&nbsp;&nbsp;&nbsp;3.2.S.4.1 Specification</td>
  </tr>
  <tr>
    <td class="tg-0lax">14. Compatibility</td>
    <td class="tg-0lax">3.2.P.2 Pharmaceutical Development
    <br>&nbsp;&nbsp;&nbsp;3.2.P.2.6 Compatibility</td>
    <td class="tg-0lax"><i>Not Applicable</i></td>
  </tr>
</tbody>
</table>

<map name="hotspots">
  <area shape='rect' coords='43,45,451,192' title='Identification' href='identification.html' alt='Identification' />
			<area shape='rect' coords='-4,201,301,312' title='Composition' href='composition.html' alt='Composition' />
			<area shape='rect' coords='21,325,368,394' title='Impurities' href='impurities.html' alt='Impurities' />
			<area shape='rect' coords='144,401,416,517' title='Organization' href='organizations.html' alt='Organization' />
			<area shape='rect' coords='48,522,404,596' title='Batch / Lot Information' href='batch_info.html' alt='Batch / Lot Information' />
			<area shape='rect' coords='49,603,403,678' title='Batch Analysis' href='batch_anal.html' alt='Batch Analysis' />
			<area shape='rect' coords='746,42,1096,193' title='Manufacturing' href='mnf_process.html' alt='Manufacturing' />
			<area shape='rect' coords='90,684,418,759' title='Batch Formula' href='batch_formula.html' alt='Batch Formula' />
			<area shape='rect' coords='746,199,1078,276' title='Process Validation' href='process_valid.html' alt='Process Validation' />
			<area shape='rect' coords='746,289,1100,364' title='Analytical Procedures' href='anal_proc.html' alt='Analytical Procedures' />
			<area shape='rect' coords='801,367,1233,460' title='Container Closure System' href='container.html' alt='Container Closure System' />
			<area shape='rect' coords='787,463,1104,571' title='Stability Study' href='stability.htm' alt='Stability Study' />
			<area shape='rect' coords='809,579,1120,659' title='Specification' href='drug_specification.html' alt='Specification' />
			<area shape='rect' coords='780,662,1115,754' title='Compatibility' href='compatibility.html' alt='Compatibility' />
			<area shape='rect' coords='453,41,745,754' title='Click on the sections' href='domains.html' />
  
  
</map>