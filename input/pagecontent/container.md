Details about primary and secondary packaging components for drug substance and drug product.

### Product 

<table>
<tr><td><img src="container_closure_system.png" width="350"/></td></tr>
</table>
#### Resources
<table>
<tr><td>MedicinalProductDefinition</td><td>The drug product (Stelbat tablets, 20mg)</td></tr> 


<tr><td>PackagedProductDefinition</td><td>Information about the packaging for the drug product</td></tr>

</table>

#### Examples
**CTD section synthetic source data samples** (PDF):
- <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.P.7_Container_Closure_System.pdf ">3.2.P.7 Container Closure System</a>

**XML and JSON examples** of synthetic quality data:
- <a href="Bundle-bundle-container-closure-system-pq-ex1-prod.xml.html">Product Container Closure example XML</a>
- <a href="Bundle-bundle-container-closure-system-pq-ex1-prod.json.html">Product Container Closure example JSON</a>

**HTML presentation example** of synthetic quality data:
- <a href="container_rend_p.html">Product Container Closure System</a>  - Note that HTML examples represent ways to create human-readable output using structured quality data (see section 1.2 Scope).

### Substance
<table>
<tr><td><img src="container_closure_substance.png" width="425"/></td></tr>
</table>
 
#### Resources
<table>
<tr><td>Substance Definition</td><td>Definition of this drug substance itself (Stelbatolol)</td></tr> 
<tr><td>Ingredient</td><td>Connection to the substance as something manufactured (used here mainly for linkage)</td></tr> 
<tr><td>ManufacturedItem Definition</td><td>The substance as a physical type of substance that can be packaged (used here mainly for linkage)</td></tr> 
<tr><td>PackagedProductDefinition</td><td>Information about the packaging for the drug substance</td></tr> 
</table>


#### Examples
**CTD section synthetic source data samples** (PDF):
- <a href="https://github.com/HL7/uv-dx-pq/raw/master/input/examples-pdf/3.2.S.6_Container_Closure_System.pdf ">3.2.S.6 Container Closure System</a>

**XML and JSON examples** of synthetic quality data:
- <a href="Bundle-bundle-container-closure-system-pq-ex2-sub.xml.html">Substance Container Closure example XML</a>
- <a href="Bundle-bundle-container-closure-system-pq-ex2-sub.json.html">Substance  Container Closure example JSON</a>

**HTML presentation example** of synthetic quality data:
- <a href="container_rend_s.html">Substance Container Closure System</a>  - Note that HTML examples represent ways to create human-readable output using structured quality data (see section 1.2 Scope).

### Profiles 
See [Artifacts Index: Domain Bundle Profiles](artifacts.html#domain-bundle-profiles)