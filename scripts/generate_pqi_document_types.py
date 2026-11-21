"""Generate PQI document-type terminology and the M4Q(R1) Type 1 skeleton examples (FSH)."""
import uuid, os, sys

OUT = sys.argv[1]
NS = uuid.UUID("6f1c2a5e-6b0b-4c55-9f0e-3a1d1b2c7e11")
def uid(s): return "urn:uuid:" + str(uuid.uuid5(NS, s))

# ICH M4Q(R1) headings (code, display). Order = template order. Parent = longest code prefix in list.
H = [
 ("2.3", "Quality Overall Summary"),
 ("2.3.INTRO", "Introduction"),
 ("2.3.S", "Drug Substance"),
 ("2.3.S.1", "General Information"), ("2.3.S.2", "Manufacture"), ("2.3.S.3", "Characterisation"),
 ("2.3.S.4", "Control of Drug Substance"), ("2.3.S.5", "Reference Standards or Materials"),
 ("2.3.S.6", "Container Closure System"), ("2.3.S.7", "Stability"),
 ("2.3.P", "Drug Product"),
 ("2.3.P.1", "Description and Composition of the Drug Product"), ("2.3.P.2", "Pharmaceutical Development"),
 ("2.3.P.3", "Manufacture"), ("2.3.P.4", "Control of Excipients"), ("2.3.P.5", "Control of Drug Product"),
 ("2.3.P.6", "Reference Standards or Materials"), ("2.3.P.7", "Container Closure System"), ("2.3.P.8", "Stability"),
 ("2.3.A", "Appendices"),
 ("2.3.A.1", "Facilities and Equipment"), ("2.3.A.2", "Adventitious Agents Safety Evaluation"), ("2.3.A.3", "Excipients"),
 ("2.3.R", "Regional Information"),
 ("3.2.S", "Drug Substance"),
 ("3.2.S.1", "General Information"),
 ("3.2.S.1.1", "Nomenclature"), ("3.2.S.1.2", "Structure"), ("3.2.S.1.3", "General Properties"),
 ("3.2.S.2", "Manufacture"),
 ("3.2.S.2.1", "Manufacturer(s)"), ("3.2.S.2.2", "Description of Manufacturing Process and Process Controls"),
 ("3.2.S.2.3", "Control of Materials"), ("3.2.S.2.4", "Controls of Critical Steps and Intermediates"),
 ("3.2.S.2.5", "Process Validation and/or Evaluation"), ("3.2.S.2.6", "Manufacturing Process Development"),
 ("3.2.S.3", "Characterisation"),
 ("3.2.S.3.1", "Elucidation of Structure and other Characteristics"), ("3.2.S.3.2", "Impurities"),
 ("3.2.S.4", "Control of Drug Substance"),
 ("3.2.S.4.1", "Specification"), ("3.2.S.4.2", "Analytical Procedures"), ("3.2.S.4.3", "Validation of Analytical Procedures"),
 ("3.2.S.4.4", "Batch Analyses"), ("3.2.S.4.5", "Justification of Specification"),
 ("3.2.S.5", "Reference Standards or Materials"),
 ("3.2.S.6", "Container Closure System"),
 ("3.2.S.7", "Stability"),
 ("3.2.S.7.1", "Stability Summary and Conclusions"),
 ("3.2.S.7.2", "Post-approval Stability Protocol and Stability Commitment"), ("3.2.S.7.3", "Stability Data"),
 ("3.2.P", "Drug Product"),
 ("3.2.P.1", "Description and Composition of the Drug Product"),
 ("3.2.P.2", "Pharmaceutical Development"),
 ("3.2.P.2.1", "Components of the Drug Product"),
 ("3.2.P.2.1.1", "Drug Substance"), ("3.2.P.2.1.2", "Excipients"),
 ("3.2.P.2.2", "Drug Product"),
 ("3.2.P.2.2.1", "Formulation Development"), ("3.2.P.2.2.2", "Overages"), ("3.2.P.2.2.3", "Physicochemical and Biological Properties"),
 ("3.2.P.2.3", "Manufacturing Process Development"), ("3.2.P.2.4", "Container Closure System"),
 ("3.2.P.2.5", "Microbiological Attributes"), ("3.2.P.2.6", "Compatibility"),
 ("3.2.P.3", "Manufacture"),
 ("3.2.P.3.1", "Manufacturer(s)"), ("3.2.P.3.2", "Batch Formula"),
 ("3.2.P.3.3", "Description of Manufacturing Process and Process Controls"),
 ("3.2.P.3.4", "Controls of Critical Steps and Intermediates"), ("3.2.P.3.5", "Process Validation and/or Evaluation"),
 ("3.2.P.4", "Control of Excipients"),
 ("3.2.P.4.1", "Specifications"), ("3.2.P.4.2", "Analytical Procedures"), ("3.2.P.4.3", "Validation of Analytical Procedures"),
 ("3.2.P.4.4", "Justification of Specifications"), ("3.2.P.4.5", "Excipients of Human or Animal Origin"), ("3.2.P.4.6", "Novel Excipients"),
 ("3.2.P.5", "Control of Drug Product"),
 ("3.2.P.5.1", "Specification(s)"), ("3.2.P.5.2", "Analytical Procedures"), ("3.2.P.5.3", "Validation of Analytical Procedures"),
 ("3.2.P.5.4", "Batch Analyses"), ("3.2.P.5.5", "Characterisation of Impurities"), ("3.2.P.5.6", "Justification of Specification(s)"),
 ("3.2.P.6", "Reference Standards or Materials"),
 ("3.2.P.7", "Container Closure System"),
 ("3.2.P.8", "Stability"),
 ("3.2.P.8.1", "Stability Summary and Conclusion"),
 ("3.2.P.8.2", "Post-approval Stability Protocol and Stability Commitment"), ("3.2.P.8.3", "Stability Data"),
 ("3.2.A", "Appendices"),
 ("3.2.A.1", "Facilities and Equipment"), ("3.2.A.2", "Adventitious Agents Safety Evaluation"), ("3.2.A.3", "Excipients"),
 ("3.2.R", "Regional Information"),
]
CODES = [c for c, _ in H]
DISP = dict(H)

def parent(c):
    best = None
    for p in CODES:
        if p != c and c.startswith(p + ".") and (best is None or len(p) > len(best)):
            best = p
    return best

def children(c): return [x for x in CODES if parent(x) == c]
def descendants(c):
    out = []
    for ch in children(c):
        out.append(ch); out += descendants(ch)
    return out

ROOTS = [c for c in CODES if c.startswith("3.2.") and c.count(".") == 3] + ["3.2.R"]
REPEATABLE = ["2.3.S", "2.3.P"]
REPLACEABLE = ["3.2.S.1.1", "3.2.S.1.2", "3.2.S.1.3", "3.2.S.2.1", "3.2.S.4.1", "3.2.S.4.4", "3.2.S.5", "3.2.S.6",
               "3.2.S.7.3", "3.2.P.1", "3.2.P.3.1", "3.2.P.3.2", "3.2.P.5.1", "3.2.P.5.4", "3.2.P.6", "3.2.P.7", "3.2.P.8.3"]
for c in ROOTS + REPEATABLE + REPLACEABLE: assert c in CODES, c

def q(s): return s.replace('"', '\\"')

# ---------------- terminology ----------------
t = []
t.append("""// Generated by the PQI maturity-type generator. Edit the heading list in the generator, not this file.

CodeSystem: CtdSectionPq
Id: ctd-section-pq
Title: "CTD Quality Section Headings PQ"
Description: \"\"\"Codes for the ICH M4Q(R1) headings of CTD Module 2.3 (Quality Overall Summary) and Module 3.2 (Body of Data),
used to code Composition.section in PQI documents. M4Q(R2) headings will be added once ICH finalizes M4Q(R2).
Only the top-level 3.2.R (Regional Information) heading is coded: regional sub-headings are defined by each regulator.
The code pqi-product-data identifies the non-CTD Product data section used in PQI Types 2 to 4.
This CodeSystem is defined in this IG as an example; moving it to terminology.hl7.org is a later step.\"\"\"
* ^status = #active
* ^experimental = false
* ^caseSensitive = true
* ^hierarchyMeaning = #part-of
* ^content = #complete""")
def emit(c, depth):
    t.append("  " * depth + f'* #{c} "{q(DISP[c])}"')
    for ch in children(c): emit(ch, depth + 1)
for c in CODES:
    if parent(c) is None: emit(c, 0)
t.append('* #pqi-product-data "Product data" "Non-CTD section of a PQI Type 2-4 document that lists the product, organization, substance and authorization resources not referenced from a CTD section."')

def vs(name, vid, title, desc, codes=None, whole=False):
    t.append(f"\nValueSet: {name}\nId: {vid}\nTitle: \"{title}\"\nDescription: \"{q(desc)}\"\n* ^status = #active\n* ^experimental = false")
    if whole:
        t.append("* include codes from system CtdSectionPq")
    else:
        for c in codes: t.append(f'* CtdSectionPq#{c} "{q(DISP.get(c, c))}"')

vs("VsCtdSectionPq", "vs-ctd-section-pq", "CTD Quality Section Headings PQ (all)",
   "All codes in the CTD Quality Section Headings PQ CodeSystem. Bound (extensible) to Composition.section.code in PQI documents.", whole=True)
vs("VsCtdM23R1Pq", "vs-ctd-m23-r1", "CTD Module 2.3 Headings, M4Q(R1)",
   "The ICH M4Q(R1) Module 2.3 Quality Overall Summary template headings.", [c for c in CODES if c.startswith("2.3")])
vs("VsCtdM32R1Pq", "vs-ctd-m32-r1", "CTD Module 3.2 Headings, M4Q(R1)",
   "The ICH M4Q(R1) Module 3.2 Body of Data template headings.", [c for c in CODES if c.startswith("3.2")])
vs("VsCtdRepeatablePq", "vs-ctd-repeatable-pq", "CTD Repeatable Headings PQ",
   "Headings that may repeat inside one PQI document (one per drug substance or drug product) and may carry Composition.section.focus.", REPEATABLE)
vs("VsCtdDocumentRootPq", "vs-ctd-document-root-pq", "CTD Module 3.2 Document Root Headings PQ",
   "The level-3 Module 3.2 headings (plus 3.2.R) that are the single top-level section of a Module 3.2 PQI document.", ROOTS)
vs("VsCtdReplaceablePq", "vs-ctd-replaceable-pq", "CTD Replaceable Headings PQ",
   "Headings whose content can be fully carried by PQI resources, so that a PQI Type 4 document may omit their authored narrative.", REPLACEABLE)

t.append("""
CodeSystem: PqiDocumentType
Id: pqi-document-type
Title: "PQI Document Type"
Description: "The CTD template a PQI document follows."
* ^status = #active
* ^experimental = false
* ^caseSensitive = true
* ^content = #complete
* #m2-3-qos "Module 2.3 Quality Overall Summary" "A CTD Module 2.3 Quality Overall Summary document."
* #m3-2-quality "Module 3.2 Body of Data document" "A CTD Module 3.2 document covering one level-3 heading (or 3.2.R for one region)."

ValueSet: VsPqiDocumentType
Id: vs-pqi-document-type
Title: "PQI Document Type"
Description: "All PQI document types."
* ^status = #active
* ^experimental = false
* include codes from system PqiDocumentType

CodeSystem: PqiMaturityType
Id: pqi-maturity-type
Title: "PQI Maturity Type"
Description: "The maturity type of a PQI document, from a structured document (Type 1) to a data-first document (Type 4)."
* ^status = #active
* ^experimental = false
* ^caseSensitive = true
* ^content = #complete
* #type-1 "PQI Type 1" "Structured document: narrative under coded CTD headings, images as Binary + DocumentReference entries."
* #type-2 "PQI Type 2" "Type 1 plus structured product, packaging, organization, substance and authorization resources."
* #type-3 "PQI Type 3" "Type 2 plus section entries linked to spans of the narrative."
* #type-4 "PQI Type 4" "Type 3 where replaceable sections are carried by resources instead of authored narrative."

ValueSet: VsPqiMaturityType
Id: vs-pqi-maturity-type
Title: "PQI Maturity Type"
Description: "All PQI maturity types."
* ^status = #active
* ^experimental = false
* include codes from system PqiMaturityType
""")
open(os.path.join(OUT, "terminology.fsh"), "w").write("\n".join(t) + "\n")

# ---------------- skeleton examples ----------------
DIV = '<div xmlns=\\"http://www.w3.org/1999/xhtml\\"><p>[To be completed]</p></div>'
R_DIV = '<div xmlns=\\"http://www.w3.org/1999/xhtml\\"><p>[Regional information. Sub-sections use the headings defined by the regulator of the region.]</p></div>'
DATE = "2026-11-21"

def section_rules(code, path):
    r = [f'* {path}.title = "{q(DISP[code])}"', f'* {path}.code = CtdSectionPq#{code} "{q(DISP[code])}"']
    kids = children(code)
    if not kids:
        r += [f"* {path}.text.status = #additional", f'* {path}.text.div = "{R_DIV if code.endswith(".R") else DIV}"']
    for i, k in enumerate(kids):
        r += section_rules(k, f"{path}.section[{i}]")
    return r

def slug(c): return c.lower().replace(".", "-")

ex = ["// Generated by the PQI maturity-type generator: M4Q(R1) PQI Type 1 skeletons (starter files).\n"]

def composition(cid, title, doc_type, subject, top):
    r = [f"Instance: {cid}", "InstanceOf: CompositionType1Pq", "Usage: #inline",
         "* status = #preliminary", f"* type = PqiDocumentType#{doc_type}", "* category = PqiMaturityType#type-1",
         f'* date = "{DATE}"', '* author.display = "[Applicant]"', f'* subject.display = "{subject}"', f'* title = "{q(title)}"']
    for i, c in enumerate(top): r += section_rules(c, f"section[{i}]")
    return "\n".join(r) + "\n"

def bundle(bid, cid, usage, title=None, desc=None):
    r = [f"Instance: {bid}", "InstanceOf: BundleDocumentType1Pq", f"Usage: {usage}"]
    if title: r += [f'Title: "{q(title)}"', f'Description: "{q(desc)}"']
    r += ['* identifier.system = "urn:ietf:rfc:3986"', f'* identifier.value = "{uid(bid)}"', "* type = #document",
          f'* timestamp = "{DATE}T00:00:00Z"', f'* entry[composition].fullUrl = "{uid(cid)}"', f"* entry[composition].resource = {cid}"]
    return "\n".join(r) + "\n"

# Module 2.3 skeleton (one document)
top23 = [c for c in CODES if c.startswith("2.3") and parent(c) is None]
ex.append(composition("composition-type1-pq-m23-r1-skeleton", "Module 2.3 Quality Overall Summary (M4Q(R1) skeleton)",
                      "m2-3-qos", "[Drug product name, dosage form]", top23))
ex.append(bundle("bundle-document-type1-pq-m23-r1-skeleton", "composition-type1-pq-m23-r1-skeleton", "#example",
                 "PQI Type 1 skeleton: Module 2.3 (M4Q(R1))",
                 "Starter file: an empty PQI Type 1 Module 2.3 Quality Overall Summary document with every M4Q(R1) heading coded."))

# Module 3.2 skeleton: one document per root heading, packaged in a collection
coll = ["Instance: bundle-document-collection-pq-m32-r1-skeleton", "InstanceOf: BundleDocumentCollectionPq", "Usage: #example",
        'Title: "PQI Type 1 skeleton: Module 3.2 (M4Q(R1)) document collection"',
        'Description: "Starter file: one empty PQI Type 1 document per level-3 Module 3.2 heading (plus 3.2.R), packaged in a PQI document collection."',
        '* identifier.system = "urn:ietf:rfc:3986"', f'* identifier.value = "{uid("coll-m32")}"', "* type = #collection",
        f'* timestamp = "{DATE}T00:00:00Z"']
for i, root in enumerate(ROOTS):
    cid = f"composition-type1-pq-m32-r1-skeleton-{slug(root)}"
    bid = f"bundle-document-type1-pq-m32-r1-skeleton-{slug(root)}"
    subj = "[Drug substance name, manufacturer]" if ".S" in root else "[Drug product name, dosage form]"
    if root.startswith("3.2.A") or root == "3.2.R": subj = "[Drug product name, dosage form]"
    ex.append(composition(cid, f"{root} {DISP[root]} (M4Q(R1) skeleton)", "m3-2-quality", subj, [root]))
    ex.append(bundle(bid, cid, "#inline"))
    coll += [f'* entry[{i}].fullUrl = "{uid(bid)}"', f"* entry[{i}].resource = {bid}"]
ex.append("\n".join(coll) + "\n")
open(os.path.join(OUT, "examples-skeleton.fsh"), "w").write("\n".join(ex))
print("codes", len(CODES), "roots", len(ROOTS))
