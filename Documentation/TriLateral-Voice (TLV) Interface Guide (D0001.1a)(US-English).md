# TriLateral Voice (TLV) Interface Guide — Protocol Orchestration and Multi-Protocol Pipeline Design

---

## Document Information

| Field | Value |
|-------|-------|
| **Version Number** | D0001.1a |
| **Release Status** | Release Candidate |
| **Language Version** | US English |
| **Version Date** | 03/08/2026 |
| **Document Type** | USER GUIDE |
| **License** | CC BY-NC-SA 4.0 |
| **Related Documents** | See: `../RC0001.1-Bill-of-Materials.md` |
| **Supersedes** | Interface Guide D0001.1 (03/04/2026) |

---

## Changelog: D0001.1 → D0001.1a

| Change | Type | Origin |
|--------|------|--------|
| Added **SOP-ER** (Methods for Effective Research) to Component Inventory, Connection Matrix, SOP Selection Guide, and all relevant sections | NEW | SOP-ER RC0001.1 (03/15/2026) |
| Added **SOP-DN** (Methods for Deconstruction of Presenting Narratives) to Component Inventory, Connection Matrix, SOP Selection Guide, and all relevant sections | NEW | SOP-DN RC0001.1 (03/15/2026) |
| Added **SOP-SP** (Schema Priming) to Component Inventory, Connection Matrix, SOP Selection Guide, and all relevant sections | NEW | SOP-SP RC0001.1 (03/15/2026) |
| Updated **Biography Protocol** reference from RC0001.1 → RC0001.1a | MODIFIED | BIO RC0001.1a (03/06/2026) |
| Added **Data Flow Pattern E** — Schema → Research → Produce | NEW | SOP-ER + SOP-SP integration |
| Added **Data Flow Pattern F** — Capture → Deconstruct → Reconstruct | NEW | SOP-DN integration |
| Added **Pipeline Template 3.8** — The Evidence-Based Research Pipeline | NEW | SOP-ER + SOP-SP |
| Added **Pipeline Template 3.9** — The Narrative Deconstruction Pipeline | NEW | SOP-DN |
| Added **Law 6** — Schema-First Principle to Interface Design Principles | NEW | SOP-SP mandate |
| Updated **Three-Layer Architecture** — Layer 3 now includes research and schema infrastructure | MODIFIED | SOP-ER + SOP-SP + SOP-DN |
| Updated **Connection Matrix** with all new SOPs | MODIFIED | All new SOPs |
| Updated **SOP Selection Guide** with all new SOPs | MODIFIED | All new SOPs |
| Updated **Minimum Interrogation Requirements** for all pipeline templates | MODIFIED | SOP-ER + SOP-DN integration |
| Updated **AI Agent Instructions** with new document loading requirements | MODIFIED | All new SOPs |
| Updated **Critical Analysis (Takedown) pipeline** to reference SOP-ER, SOP-DN, SOP-SP | MODIFIED | SOP integration |
| Updated **Historical Recovery pipeline** to reference SOP-ER and SOP-SP | MODIFIED | SOP integration |
| Updated **Diplomatic Bridge pipeline** with Phase 0 (Schema Priming) | MODIFIED | SOP-SP mandate |
| Updated **Quick Reference** and **Decision Tree** with all new components | MODIFIED | All new components |
| Updated **EFV count** from 999+ to 8,000+ | MODIFIED | Introduction RC0001.1 |
| Updated **Biography count** from 8 to 10 (added King David, King Solomon) | MODIFIED | New biographies |
| Updated **Release Status** from Public Draft to Release Candidate | MODIFIED | Repo maturity |

**What Stayed:** All original pipeline templates, connection types, data flow patterns A–D, five laws of protocol composition, handoff checklist, quality assurance framework, three-tier review structure, worked example (Diplomatic Bridge), pipeline design process, and core architectural insights. The structure is sound. This revision adds components and hardens integration.

**Why This Revision Exists:** Between D0001.1 (03/04/2026) and D0001.1a (03/08/2026), the TLV ecosystem gained three new Standard Operating Procedures (SOP-ER, SOP-DN, SOP-SP), a major Biography Protocol revision (RC0001.1a), two new field-test biographies (King David, King Solomon), a unified Introduction (replacing the White Paper, Blue Paper, and Common Speech), and an updated Emotional and Feeling Vocabulary now exceeding 8,000 terms. These additions significantly change how protocols connect — particularly by introducing schema priming as a mandatory pre-pipeline step, research methodology as a formal SOP, and narrative deconstruction as a convergence capability. The Interface Guide must document these new edges in the network.

---

## Purpose

This document serves a specific function: **to make explicit the connective tissue between TLV's protocols, SOPs, and infrastructure components — showing practitioners how to compose, chain, and orchestrate them into multi-protocol pipelines that address complex, real-world problems.**

TLV's protocols are not mono-structures. They were never designed to operate in isolation. Each protocol solves a specific problem within a specific domain. But the power of TLV — the thing that makes it an *infrastructure* rather than a collection of tools — is that these protocols are **composable, interoperable, and mutually reinforcing.**

A biography requires transcription. A transcription gains depth through interpretation. An interpretation across languages requires translation. A translation into a conflict zone requires mediation. A mediation builds on biographies of the parties. A critical analysis of any narrative requires schema priming, effective research, and narrative deconstruction. Every protocol can call every other protocol. The Interface Guide documents **when, why, and how.**

### Why This Document Exists

RC0001.1 shipped with 10 protocols, 7 SOPs, an 8,000+ term emotional vocabulary, a Genesis Protocol, and a Builder's Manual. Each document is internally complete. But there was no document that showed:

- **How protocols connect** — Which protocols call which, and at what points?
- **How to design pipelines** — How do you chain protocols for a specific use case?
- **What the interface logic is** — When do you invoke one protocol from within another?
- **What composability patterns exist** — What recurring combinations solve recurring problems?
- **How schema priming and research methodology integrate** — When SOP-SP, SOP-ER, and SOP-DN provide mandatory pre-pipeline infrastructure

The TLV Takedown Video Analysis Workflow Guide (D0001.1) demonstrated this for one domain: chaining Biography + Audio Description + Captioning + Transcription + Interpretation + Interrogation SOP into a five-phase critical analysis pipeline. That document proved the concept.

This Interface Guide generalizes the concept. It provides the meta-framework for designing *any* multi-protocol TLV pipeline.

### What This Document Is

- A **map of interconnections** between all TLV protocols and SOPs
- A **design guide** for building multi-protocol workflows
- A **library of pipeline templates** for common use cases
- A **reference architecture** showing composability patterns
- A **practical tool** for practitioners assembling TLV solutions

### What This Document Is Not

- Not a replacement for individual protocol documentation (each protocol stands alone)
- Not a software specification (though it informs software design)
- Not exhaustive (new combinations will emerge as TLV grows)
- Not prescriptive (practitioners adapt pipelines to their context)

---

## Core Insight: TLV Is Fractal Infrastructure

The Genesis Protocol identified the key architectural principle:

> "TLV's dimensional framework is fractal — it applies at every scale while preserving the core structure."

This means:

- **At individual scale:** The Communication & Speech Protocol enables one person to witness their own three-voiced communication.
- **At interpersonal scale:** The Conflict Mediation Protocol applies three voices to disputes between parties, with a trained Witness.
- **At group scale:** The Discourse Mediation & Support Protocol extends three voices to multi-party deliberation with a Nuance Engine.
- **At historical scale:** The Interpretation Protocol applies three voices retroactively to existing documents and speeches across time.
- **At cross-cultural scale:** The Translation Protocol preserves three voices across linguistic and cultural boundaries.
- **At analytical scale:** The Interrogation SOPs provide quality assurance across all protocols by interrogating the thinking within them.
- **At research scale:** The Effective Research SOP provides schema-integrated, citation-traced methodology for systematic investigation within any protocol.
- **At deconstructive scale:** The Narrative Deconstruction SOP applies all TLV methods convergently to dismantle and analyze any presenting narrative.

**Each protocol is a node in a network. This guide documents the edges.**

---

## Part One: The Protocol Ecosystem — Components and Functions

### 1.1 Complete Component Inventory

TLV RC0001.1/RC0001.1a contains the following composable components:

#### Protocols (Operational Processes)

| Protocol | Code | Version | Domain | Primary Function |
|----------|------|---------|--------|--------------------|
| Communication & Speech | COMM | RC0001.1 | Individual | Framework for understanding and producing three-voiced communication |
| Transcription | TRANS | RC0001.1 | Documentation | Capturing spoken communication with full dimensionality |
| Translation | XLATE | RC0001.1 | Cross-linguistic | Preserving dimensionality across languages and cultures |
| Biography | BIO | **RC0001.1a** | Life documentation | Reconstructing lives using three-voice framework across time |
| Interpretation | INTERP | RC0001.1 | Retroactive analysis | Extracting meaning from existing speech, text, and artifacts |
| Conflict Mediation | CMED | D0001.1 | Interpersonal | Documenting and resolving conflicts through witnessed truth-telling |
| Discourse Mediation & Support | DMED | D0001.1 | Group | Facilitating multi-party discourse with Nuance Engine support |
| Audio Description | AD | D0001.1 | Visual documentation | Three-voiced documentation of visual/environmental elements |
| Captioning | CAP | D0001.1 | Accessibility | Dimensional captioning preserving emotional and contextual layers |
| Genesis | GEN | RC0001.1 | Meta-methodology | Philosophical foundation and protocol generation pattern |

#### Standard Operating Procedures (Cross-Cutting Quality and Methodology Layers)

| SOP | Code | Version | Domain | Primary Function |
|-----|------|---------|--------|--------------------|
| Methods for the Interrogation of Thought | SOP-IOT | RC0001.1 | Cognitive QA | Seven-phase systematic examination of thinking |
| Interrogation Methods | SOP-IM | RC0001.1 | Micro-techniques | Six methods and five question types for surfacing meaning |
| Collaborative Interrogation | SOP-CI | RC0001.1 | Group QA | Multi-person interrogation methods (10 methods) |
| Self-Interrogation | SOP-SI | RC0001.1 | Personal QA | Solo practice methods for self-knowledge (6 methods) |
| **Methods for Effective Research** | **SOP-ER** | **RC0001.1** | **Research methodology** | **Eight-phase schema-integrated research workflow with citation tracing and reliability tiering** |
| **Methods for Deconstruction of Presenting Narratives** | **SOP-DN** | **RC0001.1** | **Narrative analysis** | **Eleven-phase systematic narrative deconstruction with evidentiary audit and rhetorical forensics** |
| **Methods for Schema Priming** | **SOP-SP** | **RC0001.1** | **Cognitive infrastructure** | **Three-step, six-method schema construction for pre-pipeline evidence mapping and gap flagging** |

#### Infrastructure Components

| Component | Code | Function |
|-----------|------|----------|
| Emotional & Feeling Vocabulary | EFV | 8,000+ terms providing precision for emotional/somatic documentation |
| Builder's Manual | BM | Framework for creating new methodologies |
| Genesis Protocol | GEN | Protocol generation pattern (10 phases) |
| Protocol Template | PT | Standardized template for new protocol documents |
| Introduction | INTRO | Unified three-voiced introduction (replaces White Paper, Blue Paper, Common Speech) |

### 1.2 The Three-Layer Architecture

Every TLV pipeline operates on three layers simultaneously:

**Layer 1 — Foundation:** The three-voice framework (Speaker's Voice / Emotional-Somatic Voice / Observer's Voice) applied to the specific domain. This is the bedrock. Every protocol shares this foundation.

**Layer 2 — Operations:** The specific protocol(s) governing *how* the work is done — transcription accuracy standards, translation cultural bridging, mediation safety protocols, research methodology, narrative deconstruction phases, etc.

**Layer 3 — Quality Assurance and Evidence Infrastructure:** The Interrogation SOPs (SOP-IOT, SOP-IM, SOP-CI, SOP-SI) functioning as the immune system — checking for projection, assumption, false certainty, and methodological drift at every critical juncture. The Research and Schema SOPs (SOP-ER, SOP-SP) functioning as the evidentiary skeleton — ensuring every claim is sourced, every source is evaluated, and every gap is visible. The Narrative Deconstruction SOP (SOP-DN) functioning as the analytical convergence layer — applying all methods simultaneously to dismantle presenting narratives.

**Interface logic:** Protocols connect at Layer 2 (one protocol's output becomes another's input). Quality assurance and evidence infrastructure from Layer 3 operates across all Layer 2 connections. Layer 1 ensures coherence across the entire pipeline. SOP-SP provides mandatory pre-pipeline schema construction for any pipeline involving research or investigation.

### 1.3 The New SOP Triad: How SOP-ER, SOP-DN, and SOP-SP Change Everything

The addition of three new SOPs fundamentally expands TLV's operational capability. Understanding their relationship is critical for pipeline design:

**SOP-SP (Schema Priming)** operates as the **cognitive ignition system**. It builds the evidence map *before* any sustained work begins. Three steps (Scope, Hypothesize, Prep Future Self), six methods (Syntopical Scoping, Smart Skimming, Detail Coding, Hypothesis Mapping, Gap Flagging, Schema Assembly), one output: the Resource Directory (Type S) — a living document that tracks sources, claims, hypotheses, gaps, reliability tiers, and connections across the entire project.

**SOP-ER (Effective Research)** operates as the **research engine**. Eight phases (Question Formulation → Schema Development → Literature Hunt → Critical Evaluation → Knowledge Organization → Deep Reading → Active Synthesis → Reflection). SOP-ER does not merely reference SOP-SP — it embeds SOP-SP as Phase 2, making schema development an integral, recursive step. The Resource Directory is initialized in Phase 2 and updated in every subsequent phase. The Three-Link Citation Chain ensures every output claim traces → Claim-ID → SE-ID → original source with full provenance.

**SOP-DN (Narrative Deconstruction)** operates as the **convergence product**. Eleven phases (Schema & Prep → Surface Capture → Layer Separation → Assumption Excavation → Evidentiary Audit → Rhetorical Forensics → Omission Mapping → Interest Analysis → Counter-Narrative Construction → Analyst Self-Interrogation → Synthesis). SOP-DN calls every other SOP at specific points: SOP-SP in Phase 1, SOP-ER in Phase 5, SOP-IOT at every phase boundary, SOP-IM throughout, SOP-SI in Phase 10, SOP-CI when team-based. Its output is the Deconstruction Ledger (Type D) with nine sections tracking claims, assumptions, rhetorical techniques, omissions, interests, evidence, counter-narratives, and analyst bias.

**The relationship between them:**
- SOP-SP is the **pre-processor** — builds the map before the work begins
- SOP-ER is the **processor** — conducts the systematic investigation
- SOP-DN is the **analyzer** — deconstructs what the investigation surfaces
- SOP-IOT, SOP-IM, SOP-SI, SOP-CI remain the **quality assurance layer** — checking the thinking within all of the above

---

## Part Two: The Interface Architecture — How Protocols Connect

### 2.1 Connection Types

Protocols connect in four distinct ways:

**Type 1 — Sequential (Pipeline):** Output of Protocol A becomes input to Protocol B.
- Example: Transcription → Interpretation (transcribed text becomes material for meaning extraction)
- Signal: "First do X, then do Y with X's output"

**Type 2 — Embedded (Invocation):** Protocol A calls Protocol B at a specific point within its process.
- Example: Biography invokes Interrogation SOP at each phase checkpoint; SOP-ER embeds SOP-SP as Phase 2
- Signal: "While doing X, use Y at this juncture"

**Type 3 — Parallel (Simultaneous):** Protocols A and B operate on the same material simultaneously, producing complementary outputs.
- Example: Captioning + Transcription operating on the same audio/video source
- Signal: "Do X and Y at the same time on the same material"

**Type 4 — Recursive (Self-Referential):** Protocol A's output is fed back through Protocol A (or the pipeline) for iterative refinement.
- Example: Discourse Mediation's lockout-synthesis-reflection-continuation cycle; SOP-ER's schema→search→evidence→updated schema loop
- Signal: "Run X, assess output, run X again with updated input"

### 2.2 The Universal Interfaces

#### The Interrogation Layer

The Methods for the Interrogation of Thought SOP is **not** a protocol. It is an SOP — a Standard Operating Procedure — because it functions as a **cross-cutting quality assurance mechanism for all protocols.**

Every protocol in TLV can (and should) invoke the Interrogation SOP at critical junctures. The Interface Guide formalizes this:

| Protocol/SOP | When to Invoke Interrogation SOP | Which Phase(s) Most Critical |
|----------|----------------------------------|------------------------------|
| COMM | During self-reflection practice | Phase 1 (Articulate), Phase 6 (Recursive) |
| TRANS | When emotional/somatic observations feel uncertain | Phase 2 (Map Assumptions), Phase 3 (Test Falsifiability) |
| XLATE | When cultural bridge assumptions are untested | Phase 4 (Contextualize), Phase 5 (Alternatives) |
| BIO | At every phase checkpoint (mandatory, with Functional Interrogation Verification) | All 7 phases — full interrogation at each life phase |
| INTERP | At each of four interpretation phases (mandatory) | Phase 1 (Articulate), Phase 3 (Falsifiability), Phase 4 (Context) |
| CMED | During Witness self-assessment, before Voicing | Phase 2 (Assumptions), Phase 6 (Recursive) |
| DMED | During lockout synthesis, at tier promotions | Phase 5 (Alternatives), Phase 7 (Synthesis) |
| AD | When distinguishing staging from incidental | Phase 1 (Articulate), Phase 3 (Falsifiability) |
| CAP | When emotional/tonal notation feels interpretive | Phase 2 (Assumptions), Phase 4 (Context) |
| **SOP-ER** | **At every phase checkpoint throughout the eight-phase research process** | **Phase 4 (Critical Evaluation), Phase 7 (Active Synthesis)** |
| **SOP-DN** | **At every phase boundary of the eleven-phase deconstruction** | **Phase 4 (Assumption Excavation), Phase 5 (Evidentiary Audit), Phase 10 (Analyst Self-Interrogation)** |
| **SOP-SP** | **During hypothesis formation and gap flagging** | **Phase 2 (Map Assumptions), Phase 5 (Alternatives)** |

**The Interrogation SOP is the connective tissue.** It ensures that every protocol-to-protocol handoff maintains epistemic discipline. When Protocol A's output becomes Protocol B's input, the Interrogation SOP checks: *Are we carrying assumptions from A into B? Are we projecting? Is our interpretation grounded?*

#### The Schema Layer

SOP-SP now provides a **second universal interface** — the evidence infrastructure layer. Any pipeline involving research, investigation, or sustained analysis should invoke SOP-SP as Phase 0 to construct the Resource Directory before the primary pipeline begins. The Resource Directory then serves as the shared evidence map that all subsequent phases read from and write to.

| Protocol/SOP | How SOP-SP Integrates |
|---|---|
| BIO | Schema priming replaces implicit source awareness with formal, structured scoping of the biographical landscape |
| INTERP | Schema provides evidence base for Contextual Constraint Mapping (INTERP Phase 2) |
| SOP-ER | SOP-SP is embedded as Phase 2; the Schema is the recursive connective tissue within research |
| SOP-DN | SOP-SP initializes the deconstruction landscape in Phase 1 |
| XLATE | Schema identifies relevant cultural contexts and available cross-cultural sources |
| CMED | Schema maps the "three truths" evidence base before mediation begins |
| DMED | Schema scopes the discourse landscape before designing discourse architecture |

### 2.3 The Connection Matrix

This matrix shows which protocols and SOPs directly interface with which others. **●** = Direct connection documented. **○** = Connection possible but not yet formally documented.

| | COMM | TRANS | XLATE | BIO | INTERP | CMED | DMED | AD | CAP | SOP-IOT | SOP-IM | SOP-CI | SOP-SI | SOP-ER | SOP-DN | SOP-SP | EFV |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **COMM** | — | ● | ● | ● | ● | ● | ● | ○ | ○ | ● | ● | ● | ● | ○ | ○ | ○ | ● |
| **TRANS** | ● | — | ● | ● | ● | ● | ● | ● | ● | ● | ● | ○ | ○ | ○ | ● | ○ | ● |
| **XLATE** | ● | ● | — | ● | ● | ● | ● | ○ | ● | ● | ● | ○ | ○ | ○ | ○ | ● | ● |
| **BIO** | ● | ● | ● | — | ● | ● | ○ | ● | ○ | ● | ● | ○ | ○ | ● | ● | ● | ● |
| **INTERP** | ● | ● | ● | ● | — | ● | ● | ● | ○ | ● | ● | ○ | ○ | ● | ● | ● | ● |
| **CMED** | ● | ● | ● | ○ | ● | — | ● | ○ | ○ | ● | ● | ● | ● | ○ | ○ | ● | ● |
| **DMED** | ● | ● | ● | ○ | ● | ● | — | ○ | ○ | ● | ● | ● | ○ | ○ | ○ | ● | ● |
| **AD** | ○ | ● | ○ | ● | ● | ○ | ○ | — | ● | ● | ● | ○ | ○ | ○ | ○ | ○ | ● |
| **CAP** | ○ | ● | ● | ○ | ○ | ○ | ○ | ● | — | ● | ○ | ○ | ○ | ○ | ○ | ○ | ● |
| **SOP-ER** | ○ | ○ | ○ | ● | ● | ○ | ○ | ○ | ○ | ● | ● | ● | ● | — | ● | ● | ○ |
| **SOP-DN** | ○ | ● | ○ | ● | ● | ○ | ○ | ○ | ○ | ● | ● | ● | ● | ● | — | ● | ○ |
| **SOP-SP** | ○ | ○ | ● | ● | ● | ● | ● | ○ | ○ | ● | ○ | ● | ● | ● | ● | — | ○ |

**Key insight from the matrix:** Every protocol connects to the Interrogation SOPs and the Emotional Vocabulary — these remain the two original universal interfaces (quality assurance and precision language). SOP-SP now functions as a **third universal interface** — the evidence infrastructure layer — with direct connections to every protocol and SOP that involves sustained investigation. SOP-DN has the most SOP connections because it is a convergence product that calls every other SOP. The Transcription Protocol retains the most protocol connections because it remains the foundational capture mechanism from which most other protocols draw their raw material.

### 2.4 Data Flow Patterns

**Pattern A — Capture → Analyze → Apply**

The most common pipeline pattern:

```
Raw Communication (speech, text, video, event)
    ↓
CAPTURE: TRANS + CAP + AD (as applicable)
    ↓ [SOP-IOT checkpoint]
ANALYZE: INTERP and/or BIO
    ↓ [SOP-IOT checkpoint]
APPLY: XLATE, CMED, DMED, or domain-specific action
    ↓ [SOP-IOT checkpoint]
OUTPUT: Deliverable(s) appropriate to use case
```

**Pattern B — Understand → Document → Bridge**

For cross-cultural or cross-temporal communication:

```
Source Communication (in Language/Culture A, or Time Period A)
    ↓
UNDERSTAND: INTERP (extract meaning in original context)
    ↓ [SOP-IOT checkpoint]
DOCUMENT: TRANS + CAP (create dimensional record)
    ↓ [SOP-IOT checkpoint]
BRIDGE: XLATE (translate with cultural bridging)
    ↓ [SOP-IOT checkpoint]
OUTPUT: Communication preserved across boundaries
```

**Pattern C — Investigate → Witness → Resolve**

For conflict and discourse contexts:

```
Conflict or Discourse Situation
    ↓
INVESTIGATE: BIO (who are the parties?) + COMM (what's their communication pattern?)
    ↓ [SOP-IOT + SOP-CI checkpoint]
WITNESS: CMED or DMED (structured mediation with three-voice documentation)
    ↓ [SOP-IOT checkpoint]
RESOLVE: Voicing Ceremony (CMED) or Lockout Synthesis (DMED)
    ↓ [SOP-IOT checkpoint]
OUTPUT: Resolution, shared understanding, or documented irreconcilable difference
```

**Pattern D — Interrogate → Understand → Act**

For personal and organizational decision-making:

```
Decision, Belief, or Pattern
    ↓
INTERROGATE: SOP-IOT (7 phases) + SOP-IM (6 methods) + SOP-SI (self-reflection)
    ↓
UNDERSTAND: INTERP (what does this actually mean?) + COMM (three-voice self-witnessing)
    ↓
ACT: Conscious choice based on interrogated understanding
    ↓
ITERATE: Monitor outcome → feed back through pipeline
```

**Pattern E — Schema → Research → Produce** *(NEW in D0001.1a)*

For systematic investigation of any topic:

```
Research Question or Investigative Target
    ↓
SCHEMA: SOP-SP (build cognitive map — scope, hypothesize, prep)
    ↓ → Resource Directory (Type S) INITIALIZED
FORMULATE: SOP-ER Phase 1 (refine question)
    ↓
DEVELOP: SOP-ER Phase 2 (SOP-SP embedded — schema becomes recursive)
    ↓ [SOP-IOT checkpoint at every phase]
HUNT: SOP-ER Phase 3 (find and collect sources — backward + forward citation tracing)
    ↓ → Schema UPDATED with source map
EVALUATE: SOP-ER Phase 4 (five-tier reliability system — assign tiers to all sources)
    ↓ → Schema UPDATED with reliability matrix
ORGANIZE: SOP-ER Phase 5 (progressive summarization, theme identification)
    ↓ → Schema UPDATED with themes and connections
READ: SOP-ER Phase 6 (three-voice reading with SOP-IM methods)
    ↓ → Schema UPDATED with deep insights
SYNTHESIZE: SOP-ER Phase 7 (produce output — Three-Link Citation Chain verified)
    ↓ [SOP-IOT checkpoint]
REFLECT: SOP-ER Phase 8 (three questions, session log, SOP-SI integration)
    ↓ → Schema UPDATED with gaps and next priorities
OUTPUT: Evidence-based deliverable with auditable citation chain
```

**Pattern F — Capture → Deconstruct → Reconstruct** *(NEW in D0001.1a)*

For systematic narrative deconstruction:

```
Presenting Narrative (speech, article, documentary, institutional communication, claim)
    ↓
SCHEMA: SOP-SP + SOP-DN Phase 1 (map the narrative landscape before cutting)
    ↓ → Deconstruction Ledger (Type D) INITIALIZED
CAPTURE: SOP-DN Phase 2 (Surface Capture — verbatim, medium-aware, claim extraction)
    ↓
SEPARATE: SOP-DN Phase 3 (Layer Separation — What / How / Why using SOP-IM Method 1)
    ↓ [SOP-IOT checkpoint]
EXCAVATE: SOP-DN Phase 4 (Assumption Excavation — explicit, implicit, categorized, dependency-mapped)
    ↓ [SOP-IOT checkpoint]
AUDIT: SOP-DN Phase 5 (Evidentiary Audit — SOP-ER Phases 3–5 applied to narrative claims)
    ↓ → Claim verification status: VERIFIED / PARTIALLY / FALSIFIED / UNFALSIFIABLE
FORENSICS: SOP-DN Phase 6 (Rhetorical Forensics — technique taxonomy applied)
    ↓
MAP OMISSIONS: SOP-DN Phase 7 (five omission types identified and assessed)
    ↓
ANALYZE INTERESTS: SOP-DN Phase 8 (beneficiary mapping, incentive structures)
    ↓ [SOP-IOT checkpoint]
COUNTER-NARRATE: SOP-DN Phase 9 (alternative narrative from same verified facts)
    ↓
SELF-INTERROGATE: SOP-DN Phase 10 (SOP-SI — analyst bias surfaced)
    ↓
SYNTHESIZE: SOP-DN Phase 11 (Deconstruction Brief with epistemic humility statement)
    ↓ → Three-Link Citation Chain verified against Deconstruction Ledger
OUTPUT: Deconstruction Brief — Known / Unknown / Unknowable classified
```

---

## Part Three: Pipeline Templates — Common Multi-Protocol Configurations

### 3.1 Pipeline Template: The Diplomatic Bridge

**Use Case:** A speaker delivers a policy address in Language A. The address must be understood, translated, and communicated to a different audience in Language B, potentially in a context where the policy shift may cause conflict between groups.

**This is the power scenario described in TLV's vision: biography → transcription → translation → interpretation → explanation → conflict resolution.**

#### Phase 0: Schema Priming *(NEW in D0001.1a)*

**Governing SOP:** SOP-SP

**Purpose:** Before any analysis begins, construct the cognitive map of the evidence landscape — the speaker, the policy domain, the target audience, the existing narratives, and the available sources.

**Process:**
1. **Syntopical Scoping** (SOP-SP Method 1): Rapidly survey all source categories — speaker's prior statements, policy documents, media coverage, stakeholder positions, cultural context for both Language A and B audiences.
2. **Detail Coding** (SOP-SP Method 3): Classify what type of evidence each source provides (factual, testimonial, analytical, promotional, legal, financial, emotional).
3. **Hypothesis Mapping** (SOP-SP Method 4): Form 3–5 provisional hypotheses about the speaker's intent, the policy's likely impact, and potential conflict points.
4. **Gap Flagging** (SOP-SP Method 5): Identify evidence gaps, source gaps, contradiction gaps, access gaps, and competence gaps.
5. **Schema Assembly** (SOP-SP Method 6): Compile Resource Directory (Type S) with Source Registry, Claim Registry, Detail Code Map, Connection Map, Hypothesis Tracker, Gap Registry, and Phase Update Log.

**Output:** Resource Directory (Type S) — the evidence infrastructure for the entire pipeline

**Estimated effort:** 2–4 hours

---

#### Phase 1: Speaker Documentation

**Governing Protocols:** BIO (RC0001.1a) + COMM

**Purpose:** Before analyzing the speech, establish who the speaker is — their dimensional reality, their communication patterns, their context, their credibility, their biases.

**Process:**
1. **Biographical Research** (BIO RC0001.1a): Construct three-voiced portrait of the speaker using the 8-section biographical architecture — fundamentals, evolution of consciousness, formation, peer perception, internal contradiction, written legacy, impact assessment, synthesis. Apply Epistemic Status System — tag all claims. Apply Source Ecosystem Detection Rule. Apply Adversarial Observer Voice requirement.
2. **Communication Baseline** (COMM): Establish the speaker's communication patterns — their typical three-voice profile, emotional vocabulary, rhetorical tendencies, cultural communication tradition.
3. **Pre-Analysis Interrogation** (SOP-IOT, Phase 1-2): Interrogate your own assumptions about this speaker before proceeding. What projections are you carrying? What do you expect to find?
4. **Schema Update:** Register all new sources in Resource Directory (S.1), update hypotheses (S.5), flag new gaps (S.6).

**Output:** Speaker Portrait — biographical context + communication baseline + documented analyst projections + Functional Interrogation Verification deltas

**Estimated effort:** 10–30 hours

---

#### Phase 2: Dimensional Capture

**Governing Protocols:** TRANS + CAP + AD

**Purpose:** Create a complete, multi-dimensional record of the speech event — what was said, what was shown, what was heard, what was felt.

**Process:**
1. **Visual Documentation** (AD): With sound off, document the visual environment — setting, staging, wardrobe, camera work, body language baseline. Three-voice visual analysis distinguishing deliberate staging from incidental elements.
2. **Verbatim Transcription** (TRANS): Full line-by-line transcription with speaker profile and baseline establishment, intensity mapping, three-voice layering (Speaker's Voice / Emotional-Somatic Voice / Observer's Voice). ≥98% accuracy for clear audio.
3. **Dimensional Captioning** (CAP): TLV-enhanced captioning notation — emotional/tonal markers, paralinguistic notation, silence documentation, audience response capture.
4. **Integration Checkpoint** (SOP-IOT, Phase 3): Test the transcription against the visual record. Do the words match the delivery? Where do contradictions appear?
5. **Schema Update:** Register captured material in Resource Directory, update claims, log new observations.

**Output:** Dimensional Record — verbatim transcription + visual world analysis + enhanced captioning + integration notes

**Estimated effort:** 10–20 hours per hour of source material

---

#### Phase 3: Meaning Extraction

**Governing Protocol:** INTERP + SOP-IOT + SOP-ER (as needed)

**Purpose:** Systematically extract both surface and hidden meanings from the captured record. What is the speaker *actually* communicating — not just what they appear to be saying?

**Process:**
1. **Observation and Signal Extraction** (INTERP Phase 1): Working from the Phase 2 dimensional record, list core claims, examples, implicit connections, tone, affect. Separate signal from noise.
2. **Contextual Constraint Mapping** (INTERP Phase 2): Map the problems the speaker claims to diagnose/solve. Historical, cultural, political context. What knowledge was available? What power structures are in play? Critical question: diagnostic or prescriptive? Use Resource Directory (Type S) for source lookup.
3. **Pattern Recognition** (INTERP Phase 3): Cross-reference against the Phase 1 biography. What patterns recur? What rhetorical devices? Where does this fit in the speaker's evolution?
4. **Problem Extraction** (INTERP Phase 4): What problems are real? What solutions are proposed? What is being presented vs. what is being communicated?
5. **If claims require verification:** Invoke SOP-ER Phases 3–5 (Literature Hunt, Critical Evaluation, Knowledge Organization) to trace claims to primary sources and assign reliability tiers.
6. **Full SOP checkpoint at each phase** (SOP-IOT, Phases 1-4 minimum)

**Output:** Meaning Extraction Report — surface meaning + hidden meaning + contextual analysis + evidence-traced interpretations + reliability-tiered claims

**Estimated effort:** 8–20 hours

---

#### Phase 4: Cross-Cultural Translation

**Governing Protocol:** XLATE + EFV

**Purpose:** Translate the speech — and its full dimensional documentation — into Language B, preserving not just words but felt experience and cultural significance.

**Process:**
1. **Cultural Assessment** (XLATE): Identify what translates directly, what requires cultural bridging, what has no equivalent, and what carries different weight in the target culture.
2. **Three-Voice Translation** (XLATE): Translate each voice:
   - **Speaker's Voice:** Meaning-for-meaning (not word-for-word) with cultural integrity. Note culturally weighted words.
   - **Emotional/Somatic Voice:** Translate emotional states with awareness that emotions may be expressed and experienced differently across cultures. Recalibrate intensity for target cultural norms.
   - **Observer's Voice (Cultural Bridge):** Build the bridge — cultural context, historical framing, power dynamics, translator's position, what the target audience needs to understand.
3. **Translator's Notes** (XLATE): Document what was untranslatable, what required adaptation, what cultural gaps exist, and what risks of misunderstanding remain.
4. **Cultural Bridge Interrogation** (SOP-IOT, Phase 4): Am I projecting my cultural context? Am I reshaping the source for target convenience? Am I preserving or distorting?

**Output:** Translated Dimensional Record — three-voiced translation + cultural bridge notes + translator's interrogation

**Estimated effort:** 15–40 hours per language

---

#### Phase 5: Audience Preparation and Conflict Prevention

**Governing Protocols:** DMED + CMED + SOP-CI

**Purpose:** Before delivering the translated policy address to Audience B, prepare for the human reality: the policy shift may generate conflict, resistance, confusion, or harm. Use TLV's mediation infrastructure to create conditions for productive reception.

**Process:**
1. **Stakeholder Analysis** (DMED): Identify groups within Audience B. Map their existing positions, interests, and potential reactions using the Underlying Interests method (SOP-CI, Method 7).
2. **Pre-Discourse Education** (DMED, Nuance Engine principles): If deploying in a discourse platform, activate pre-submission analysis to help audience members interrogate their responses *before* reacting publicly. Tier-appropriate onboarding.
3. **Conflict Anticipation** (CMED, Risk Assessment framework): Use the Conflict Mediation Protocol's risk assessment structure to identify potential escalation points, safety concerns, and de-escalation strategies.
4. **Facilitated Discourse** (DMED): Structure the reception of the translated policy using:
   - Lockout-synthesis cycles (does this matter? what have we learned?)
   - Three-voice documentation at discourse scale
   - Facilitator + Nuance Engine support for collective sense-making
5. **If Conflict Emerges** (CMED): Deploy the full Conflict Mediation Protocol — Voice Gathering, Life of the Conflict construction, Voicing Ceremony — for specific disputes arising from the policy communication.

**Output:** Reception Documentation — stakeholder analysis + discourse synthesis + conflict resolution records (if needed) + collective learning

**Estimated effort:** Variable — 20–100+ hours depending on scale and conflict intensity

---

#### Phase 6: Integration and Archive

**Governing Protocols:** GEN (pattern) + SOP-IOT (final audit) + SOP-ER Phase 8 (reflection)

**Purpose:** Synthesize the entire pipeline into an integrated record. Archive for future reference. Extract learning for TLV methodology improvement.

**Process:**
1. **Integrated Brief:** Synthesize Phases 0–5 into a unified document. Every claim cites specific phase, document, and evidence. Three-Link Citation Chain verified against Resource Directory.
2. **Pipeline Assessment** (SOP-IOT, Phase 7): Classify findings — Known / Unknown / Unknowable. State confidence levels. Identify revision triggers.
3. **Reflection** (SOP-ER, Phase 8): Three Questions — What did I learn? What's unclear? What's my next step? Session Log entry in Resource Directory.
4. **Methodology Learning** (GEN, Phase 10 — Abstraction and Integration): What did this pipeline teach about TLV? How does it refine existing protocols? What new patterns emerged?
5. **Archive:** Version-controlled storage of all deliverables with source material and Resource Directory.

**Output:** Integrated Record + Methodology Learning Report + Finalized Resource Directory

---

### 3.2 Pipeline Template: The Historical Recovery

**Use Case:** Recovering and preserving the full dimensional meaning of historical documents, speeches, or artifacts for contemporary understanding.

| Phase | Protocol(s) | Purpose | Output |
|-------|-------------|---------|--------|
| 0. Schema Priming *(NEW)* | SOP-SP | Scope the historical evidence landscape before analysis | Resource Directory (Type S) |
| 1. Contextualization | BIO (RC0001.1a) + INTERP (Phase 2) + SOP-ER (Phases 3–4) | Establish who created this, when, where, why, under what constraints; research sources with reliability tiering | Contextual Framework with tiered sources |
| 2. Dimensional Reconstruction | TRANS + CAP (if audio/video exists) + INTERP (Phase 1) | Reconstruct three voices from available evidence | Dimensional Record |
| 3. Meaning Extraction | INTERP (Phases 2-4) + SOP-IOT | Extract surface and hidden meanings; separate diagnostic from prescriptive | Interpretation Report |
| 4. Contemporary Bridge | XLATE (if cross-linguistic) + COMM | Translate/communicate findings to contemporary audience | Bridged Document |
| 5. Integration | SOP-IOT (Phase 7) + SOP-ER (Phase 8) | Classify Known/Unknown/Unknowable; archive with confidence markers; reflection | Archived Interpretation + Finalized Resource Directory |

**Demonstrated by:** TLV's 10 biographical analyses (David through Solomon) and 3 speech transcriptions (MLK, JFK, Mandela).

**Estimated total effort:** 20–80 hours depending on available source material.

---

### 3.3 Pipeline Template: The Organizational Decision Audit

**Use Case:** Before a major organizational decision, interrogate the collective thinking that produced it.

| Phase | Protocol(s) | Purpose | Output |
|-------|-------------|---------|--------|
| 1. Decision Capture | TRANS + COMM | Transcribe the decision-making conversations with three voices | Decision Record |
| 2. Assumption Surface | SOP-CI (Methods 2, 6, 7) + SOP-IOT | Use Collective Descent, Ladder of Inference, Underlying Interests | Assumption Map |
| 3. Pre-Mortem | SOP-CI (Method 10) | Imagine catastrophic failure; identify unspoken risks | Risk Assessment |
| 4. Interpretation | INTERP | Extract what's actually driving the decision vs. stated rationale | Decision Interpretation |
| 5. Synthesis | SOP-IOT (Phase 7) | Known/Unknown/Unknowable classification; confidence-marked recommendation | Audit Report |

**Estimated total effort:** 15–40 hours.

---

### 3.4 Pipeline Template: The Critical Analysis (Takedown)

**Use Case:** Objective, evidence-based, court-defensible critical examination of public figures or claims.

**This pipeline is fully documented in the TLV Takedown Video Analysis Workflow Guide (D0001.1).** It chains:

| Phase | Protocol(s) | Output |
|-------|-------------|--------|
| 0. Schema Priming *(NEW)* | SOP-SP | Resource Directory (Type S) — evidence infrastructure for entire takedown |
| 1. Target Biography | BIO (RC0001.1a) | Type A — Full dimensional portrait with Epistemic Status tags |
| 2. World Capture | AD | Type B — Visual world analysis |
| 3. Verbatim Record | CAP + TRANS | Type C — Court-ready transcription |
| 4. Meaning Extraction | INTERP + SOP-ER (Phases 3–5 for claim verification) | Type D — Meaning extraction report with reliability-tiered claims |
| 5. Narrative Deconstruction *(NEW)* | SOP-DN | Type E — Full narrative deconstruction with Deconstruction Ledger |
| 6. Viewer Impact | SOP-IOT | Type F — Viewer impact analysis |
| 7. Synthesis | GEN (pattern) + SOP-ER (Phase 7–8) | Type G — Integrated takedown brief with Three-Link Citation Chain |

**See:** `TLV Takedown Video Analysis Workflow Guide D0001.1` for complete documentation.

**Note (D0001.1a):** The addition of SOP-SP (Phase 0), SOP-ER (claim verification in Phase 4, synthesis in Phase 7), and SOP-DN (full narrative deconstruction as Phase 5) significantly strengthens the Takedown pipeline. SOP-DN provides the systematic methodology for dismantling the target's presenting narrative — surfacing assumptions, auditing evidence, cataloging rhetorical techniques, mapping omissions, and analyzing interests — that was previously handled through ad hoc application of SOP-IOT and SOP-IM. The Takedown Workflow Guide should be updated to reflect these integrations.

---

### 3.5 Pipeline Template: The Personal Practice

**Use Case:** Individual using TLV for self-understanding, emotional processing, and conscious communication.

| Phase | Protocol(s) | Purpose | Output |
|-------|-------------|---------|--------|
| 1. Awareness | COMM (Self-Reflection Practice) | Develop Observer's Voice through structured self-inquiry | Self-awareness baseline |
| 2. Processing | SOP-SI (6 methods) | Process emotions, patterns, decisions through solo practice | Journal entries (Three-Voice format) |
| 3. Understanding | SOP-IOT (7 phases) | Full interrogation of persistent patterns or high-stakes decisions | Interrogation record |
| 4. Communication | COMM + TRANS | Practice three-voiced communication; transcribe significant conversations | Communication record |
| 5. Growth | SOP-SI (Timeline method) | Track patterns over time; recognize evolution | Growth documentation |

**Effort:** 15–30 minutes daily (morning + evening practice); 60 minutes weekly (deep dive).

---

### 3.6 Pipeline Template: The Accessibility Bridge

**Use Case:** Making spoken or visual communication fully accessible across sensory modalities while preserving dimensionality.

| Phase | Protocol(s) | Purpose | Output |
|-------|-------------|---------|--------|
| 1. Visual Capture | AD | Three-voiced description of visual elements for visually impaired audiences | Audio description script |
| 2. Auditory Capture | TRANS + CAP | Full transcription + dimensional captioning for hearing-impaired audiences | Captioned transcript |
| 3. Translation | XLATE | Cross-linguistic accessibility for non-native speakers | Translated dimensional record |
| 4. Integration | All above | Multi-modal accessible document preserving full dimensionality | Integrated accessible record |

**Key principle:** Accessibility is not reduction. Each modality receives the full three-voice treatment. A captioned video isn't "words on screen" — it's dimensional documentation of what was said, how it felt, and why it matters, in a format accessible to those who cannot hear.

---

### 3.7 Pipeline Template: The Mediated Discourse

**Use Case:** Facilitating productive multi-party discourse on contentious topics (policy deliberation, community decision-making, organizational change).

| Phase | Protocol(s) | Purpose | Output |
|-------|-------------|---------|--------|
| 1. Context Setting | BIO (abbreviated) + INTERP + SOP-SP | Understand stakeholders' backgrounds and positions; schema-prime the discourse landscape | Stakeholder profiles + Resource Directory |
| 2. Participant Onboarding | COMM + SOP-SI | Teach participants three-voice self-witnessing before discourse begins | Onboarded participants |
| 3. Active Discourse | DMED (6-phase lifecycle) | Nuance Engine pre-submission support, tiered participation, real-time mapping | Discourse record |
| 4. Lockout & Synthesis | DMED + SOP-CI | Lockout point: "Does this matter? What have we learned?" | Life of the Discourse synthesis |
| 5. Conflict Resolution | CMED (if needed) | For specific disputes that emerge, deploy full mediation | Resolution records |
| 6. Integration | INTERP + SOP-IOT | What did we learn? What patterns emerged? What changed? | Discourse Integration Report |

---

### 3.8 Pipeline Template: The Evidence-Based Research Pipeline *(NEW in D0001.1a)*

**Use Case:** Systematic investigation of any topic — from personal learning to academic research to litigation-grade evidentiary work — using schema-first methodology with auditable citation chains.

**This pipeline operationalizes SOP-ER as the primary engine, with SOP-SP embedded as Phase 2 and all other Interrogation SOPs providing quality assurance.**

| Phase | SOP(s) | Purpose | Output | Schema Interaction |
|-------|--------|---------|--------|--------------------|
| 1. Question Formulation | SOP-ER Phase 1 | Narrow from topic to specific, falsifiable research question | Research question (provisional) | Schema: not yet initialized |
| 2. Schema Development | SOP-SP (embedded as SOP-ER Phase 2) | Build cognitive map — syntopical scoping, hypothesis mapping, gap flagging | Resource Directory (Type S) **INITIALIZED** | Schema: **INITIALIZED** |
| 3. Literature Hunt | SOP-ER Phase 3 | Find and collect sources using backward + forward citation tracing | Populated Source Registry (S.1) | Schema: updated with source map |
| 4. Critical Evaluation | SOP-ER Phase 4 + SOP-IOT | Assign five-tier reliability to all sources; apply evaluation checklist | Reliability Matrix (S.5) | Schema: updated with reliability tiers |
| 5. Knowledge Organization | SOP-ER Phase 5 | Progressive summarization, theme identification, connection mapping | Theme structure + Connection Map (S.6) | Schema: updated with themes |
| 6. Deep Reading | SOP-ER Phase 6 + SOP-IM | Three-voice reading of key sources; deploy Descent, Contradiction, Reframe, Pattern, Counterfactual | Deep insights + updated claims | Schema: updated with deep insights |
| 7. Active Synthesis | SOP-ER Phase 7 + SOP-IOT Phase 7 | Produce output; verify Three-Link Citation Chain | Evidence-based deliverable | Schema: validated against output |
| 8. Reflection | SOP-ER Phase 8 + SOP-SI | Three Questions; session log; SOP-SI integration for longer projects | Reflection record + updated priorities | Schema: updated with gaps and next steps |

**Key outputs:**
- **Resource Directory (Type S)** — living document with 7 sections tracking sources, claims, hypotheses, gaps, reliability, connections, and session history
- **Three-Link Citation Chain** — every output claim traces → Claim-ID (S.2) → SE-ID (S.1) → original source with full provenance
- **Five-Tier Reliability System** — Tier 1 (Gold Standard) through Tier 5 (Flagged) applied to all sources

**Scaling:**

| Research Type | Schema (Phase 2) | Hunt → Synthesis (Phases 3–7) | Total |
|---------------|-------------------|-------------------------------|-------|
| Quick personal learning | 10 min | 30–60 min | 1 hour |
| Standard professional research | 30–60 min | 4–8 hours | 5–9 hours |
| Academic/litigation-grade | 2–4 hours | 20–60 hours | 22–64 hours |
| TLV Takedown research component | 2–4 hours | 40–100 hours | 42–104 hours |

**Estimated total effort:** 1–100+ hours depending on scope.

---

### 3.9 Pipeline Template: The Narrative Deconstruction Pipeline *(NEW in D0001.1a)*

**Use Case:** Systematic, evidence-based deconstruction of any presenting narrative — media, institutional, political, interpersonal, marketing, legal — to surface hidden architecture, test claims, map omissions, and identify interests.

**This pipeline operationalizes SOP-DN as the primary engine, calling SOP-SP, SOP-ER, SOP-IOT, SOP-IM, SOP-SI, and SOP-CI at specific points.**

| Phase | SOP(s) Called | Purpose | Output |
|-------|-------------|---------|--------|
| 1. Schema & Prep | SOP-SP + SOP-ER Phase 2 | Map the narrative landscape before cutting | Deconstruction Ledger (Type D) initialized + D.1 populated |
| 2. Surface Capture | — (Transcription Voice) | Capture narrative verbatim; extract all claims | D.2 populated (all claims UNVERIFIED) |
| 3. Layer Separation | SOP-IM Method 1 (The Descent) | What / How / Why separation | D.4 started (rhetorical techniques) |
| 4. Assumption Excavation | SOP-IOT Phases 2–3 | Surface explicit and implicit assumptions; categorize and dependency-map | D.3 populated (Assumption Map) |
| 5. Evidentiary Audit | SOP-ER Phases 3–5 | Verify/falsify claims; trace to primary sources; assign reliability tiers | D.2 updated, D.7 populated (Evidence Audit Trail) |
| 6. Rhetorical Forensics | SOP-IM Methods 2–5 | Identify and catalog all rhetorical techniques | D.4 complete |
| 7. Omission Mapping | SOP-IOT Phase 5 | Identify five types of omission; assess cause | D.5 populated (Omission Register) |
| 8. Interest Analysis | SOP-IOT Phase 4 | Map beneficiaries, incentive structures, alignment | D.6 populated (Interest Map) |
| 9. Counter-Narrative | SOP-IOT Phase 5 | Construct alternative narrative from verified facts | D.8 populated |
| 10. Analyst Self-Interrogation | SOP-SI | Surface deconstructor's own biases; Mirror Rule (minimum 3 biases identified) | D.9 populated (Analyst Bias Log) |
| 11. Synthesis | SOP-IOT Phase 7 | Produce Deconstruction Brief with epistemic humility statement | Brief with Known/Unknown/Unknowable |

**Key outputs:**
- **Deconstruction Ledger (Type D)** — 9-section structured document tracking claims, assumptions, rhetorical techniques, omissions, interests, evidence, counter-narratives, and analyst bias
- **Deconstruction Brief** — final synthesis with epistemic humility statement and confidence classification

**Three Laws of Narrative Deconstruction:**
1. **Every Narrative is a Construction** — No narrative is "just the facts." Recognizing this is structural awareness, not cynicism.
2. **Deconstruction is Reflexive** — Any deconstruction that does not interrogate the deconstructor is incomplete.
3. **Deconstruction is Not Destruction** — The goal is to make architecture visible so audiences can make informed choices.

**Scaling:**

| Deconstruction Type | Phases Used | Time Investment |
|---------------------|-------------|-----------------|
| Quick narrative check (social media post, headline) | Phases 2–4 (abbreviated) | 10–30 minutes |
| Article/speech deconstruction | Phases 1–8 | 2–6 hours |
| Documentary/series deconstruction | All phases, multiple iterations | 10–40 hours |
| Institutional narrative deconstruction (Takedown grade) | All phases, full depth, team-based | 40–100+ hours |

**Estimated total effort:** 10 minutes to 100+ hours depending on scope.

---

## Part Four: Interface Design Principles

### 4.1 The Six Laws of Protocol Composition

These principles govern how TLV protocols connect:

**Law 1 — Output Integrity:** The output of Protocol A must meet its own quality standards *before* becoming input to Protocol B. Don't pass garbage downstream.

**Law 2 — Interrogation at Handoff:** Every protocol-to-protocol handoff requires an Interrogation SOP checkpoint. The question at each handoff: "Are we carrying assumptions, projections, or false certainties from the previous phase?"

**Law 3 — Three-Voice Preservation:** When data moves between protocols, all three voices must be preserved. If the Transcription Protocol captured an Emotional/Somatic Voice marker, the Translation Protocol must translate it — not discard it.

**Law 4 — Explicit Boundary Marking:** When Protocol A reaches the boundary of its competence, it must explicitly hand off to Protocol B. The Biography Protocol, for example, explicitly states that when a subject's communication requires cross-cultural interpretation, the Translation Protocol should be invoked.

**Law 5 — Recursive Improvement:** Every completed pipeline feeds learning back to the Genesis Protocol. What did this combination teach us? How does it refine the individual protocols? What new interface patterns emerged?

**Law 6 — Schema-First Principle** *(NEW in D0001.1a)***: Any pipeline involving research, investigation, sustained analysis, or narrative deconstruction must invoke SOP-SP (Schema Priming) before the primary pipeline begins. The Resource Directory is constructed first. The analytical work operates within the Resource Directory. Nothing enters the pipeline without being registered. Nothing exits the pipeline without a provenance chain. Research without schema is scrolling with extra steps.**

### 4.2 The Handoff Checklist

Use this at every protocol-to-protocol transition:

- [ ] Does the output of Protocol A meet its own quality standards?
- [ ] Have you run an Interrogation SOP checkpoint on the output?
- [ ] Are all three voices preserved and documented?
- [ ] Is the boundary between Protocol A's work and Protocol B's work clearly marked?
- [ ] Is uncertainty from Protocol A explicitly passed to Protocol B (not hidden)?
- [ ] Is the evidence chain intact? (Every interpretation in Protocol B traceable to specific evidence in Protocol A)
- [ ] Has the handoff been documented for the integrated record?
- [ ] Has the Resource Directory been updated with any new sources, claims, or gaps discovered during this phase? *(NEW in D0001.1a)*

### 4.3 Depth vs. Breadth: Scaling Pipeline Intensity

Not every use case requires maximum depth. TLV pipelines can be scaled:

**Light Touch (Hours):** Use 2–3 protocols for focused tasks.
- Example: TRANS + INTERP for analyzing a single speech
- Depth: Surface meaning extraction; basic three-voice documentation
- When: Low stakes, time-constrained, preliminary analysis

**Standard (Days):** Use 4–6 protocols for comprehensive tasks.
- Example: BIO + TRANS + INTERP + XLATE for documented cross-cultural communication
- Depth: Full three-voice documentation with interrogation checkpoints
- When: Professional contexts, moderate stakes, quality requirements

**Deep (Weeks):** Use full protocol suite for high-stakes, complex tasks.
- Example: Complete Diplomatic Bridge pipeline or full Takedown workflow with SOP-ER, SOP-DN, and SOP-SP
- Depth: Maximum dimensional documentation; court-defensible; comprehensive; Three-Link Citation Chain verified
- When: Legal, diplomatic, historical, or conflict contexts where accuracy is existential

**The decision framework:** How much is at stake? Who is affected? What are the consequences of error? The higher the stakes, the more protocols in the pipeline, the more interrogation checkpoints, the deeper the documentation, the more rigorous the schema and citation chain.

---

## Part Five: The Interrogation Layer — Quality Assurance Across All Interfaces

### 5.1 SOP Selection Guide

Different pipeline phases call for different interrogation and methodology approaches:

| Context | Recommended SOP(s) | Why |
|---------|---------------------|-----|
| Solo analysis or documentation work | SOP-IOT (7 phases) + SOP-SI (self-methods) | You need to interrogate your own thinking; self-methods access embodied knowledge |
| Team-based analysis or multi-analyst pipeline | SOP-CI (collaborative methods) | Multiple perspectives triangulate blind spots; prevents groupthink |
| Textual or historical analysis | SOP-IM (micro-techniques) + SOP-IOT | Descent, Contradiction, Pattern, and Counterfactual methods surface hidden layers in text |
| Conflict or mediation context | SOP-CI (Methods 5-7) + SOP-IOT | Looping, Ladder of Inference, Underlying Interests specifically designed for conflict |
| High-stakes decision points | Full SOP-IOT (all 7 phases) | Maximum rigor for irreversible choices |
| Daily practice and personal growth | SOP-SI + SOP-IOT (quick checks) | Sustainable daily practice building observer capacity |
| **Systematic research or investigation** | **SOP-ER (8 phases) + SOP-SP (embedded)** | **Schema-first methodology ensures every claim is sourced, every source is evaluated, and every gap is visible** |
| **Narrative analysis or media deconstruction** | **SOP-DN (11 phases) + SOP-ER (for evidentiary audit)** | **Convergence methodology applies all TLV tools to dismantle and analyze any presenting narrative** |
| **Pre-pipeline evidence scoping** | **SOP-SP (standalone or embedded in SOP-ER)** | **Builds the cognitive map before the work begins; prevents the "empty map problem"** |
| **Ancient, religious, or legendary figure analysis** | **BIO (RC0001.1a) + SOP-ER + SOP-SP** | **Epistemic Status System, Source Provenance Architecture, and Source Ecosystem Detection Rule prevent theological deference bias** |

### 5.2 Minimum Interrogation Requirements by Pipeline Type

| Pipeline Template | Minimum Interrogation Checkpoints |
|-------------------|-----------------------------------|
| Diplomatic Bridge | 7 (one per phase including Phase 0 schema + final audit) |
| Historical Recovery | 5 (schema + contextualization + each interpretation phase + final) |
| Organizational Decision Audit | 5 (capture + each assumption method + synthesis) |
| Critical Analysis (Takedown) | 10 (schema + per Takedown Workflow specification + narrative deconstruction boundaries) |
| Personal Practice | 1 per session (minimum; more as capacity builds) |
| Accessibility Bridge | 3 (each modality + integration) |
| Mediated Discourse | Variable — 1 per lockout cycle minimum |
| **Evidence-Based Research** | **8 (one per SOP-ER phase — every phase has an Interrogation Checkpoint)** |
| **Narrative Deconstruction** | **11 (one at every phase boundary of SOP-DN — all phases have mandatory checkpoints)** |

---

## Part Six: Worked Example — The Diplomatic Bridge in Action

### Scenario

A United Nations representative delivers a policy address in English proposing a significant shift in refugee resettlement policy. The address must be:
1. Documented with full dimensionality
2. Translated into Arabic for affected populations
3. Communicated to community leaders who may resist the policy
4. Used to facilitate discourse between resettlement agencies and host communities

### Phase-by-Phase Walkthrough

**Phase 0 — Schema Priming** *(NEW in D0001.1a)*

The analyst constructs the Resource Directory before any analysis begins:
- **Syntopical Scoping:** Rapidly survey UN resettlement policy history, the representative's prior statements, host community demographics, Arabic-language media coverage, relevant NGO reports, academic research on resettlement outcomes, and existing stakeholder position papers. Each source registered with SE-ID.
- **Hypothesis Mapping:** "This policy likely redistributes burden from Country A to Country B" (H-001). "Host communities will resist due to resource scarcity, not xenophobia" (H-002). "The representative's bureaucratic delivery style will read as indifference in Arabic discourse norms" (H-003).
- **Gap Flagging:** No Arabic-language community survey data found (Gap-001, Type: Source). Representative's track record on implementation follow-through unclear (Gap-002, Type: Evidence). Cultural mediation expertise needed for Arabic discourse facilitation (Gap-003, Type: Competence).

*SOP-IOT Checkpoint:* "Am I scoping widely enough? Am I including sources critical of UN resettlement policy, or only institutional sources?"

**Phase 1 — Speaker Documentation:**

The analyst builds a biographical portrait of the UN representative using the Biography Protocol (RC0001.1a). Key elements:
- **Speaker's Voice:** Their career trajectory, public statements, prior policy positions, stated values. All claims tagged with epistemic status.
- **Emotional/Somatic Voice:** How do they typically communicate? What's their emotional baseline? Where have they shown vulnerability or calculation?
- **Observer's Voice:** What structural forces shape this person? What power dynamics are they operating within? What's their track record of follow-through? **Adversarial perspective:** How would a displaced community leader who has experienced broken UN promises describe this representative?
- **Schema Update:** New sources registered; hypotheses updated; gaps resolved or flagged.

*SOP-IOT Checkpoint:* "Am I projecting admiration (they're a UN official, they must be trustworthy) or contempt (politicians always lie) onto this speaker? What evidence would change my assessment?"

*Functional Interrogation Verification:* "What changed? I downgraded my confidence in H-001 after finding the representative has a track record of modifying proposals based on stakeholder feedback. Added H-004: 'The final policy may differ significantly from the presented address.'"

**Phase 2 — Dimensional Capture:**

Full TLV transcription of the policy address:
- **Transcription Protocol:** Verbatim record at ≥98% accuracy. Speaker profile with baseline vocal characteristics, gesture patterns, emotional baseline.
- **Audio Description Protocol:** The visual staging — formal podium, flags, suit, scripted vs. extemporaneous delivery — all documented with three voices. What "world" does the staging construct?
- **Captioning Protocol:** Enhanced notation capturing pauses, emphasis, emotional shifts, audience responses.

*SOP-IOT Checkpoint:* "My transcription captured the speaker saying 'we must act with compassion.' Their tone was flat, reading from prepared text. The Emotional/Somatic Voice records incongruence. Am I interpreting that correctly, or projecting cynicism?"

**Phase 3 — Meaning Extraction:**

Using the Interpretation Protocol's four phases:
- **Phase 1 (Observation):** Core claims: refugee resettlement is shifting from country A to country B. Implicit assumption: host communities will accept this.
- **Phase 2 (Context):** Political pressures on the speaker. Funding realities. Historical precedent for this type of policy shift. What knowledge was available to the speaker? Resource Directory consulted for source lookup.
- **Phase 3 (Patterns):** This policy follows a recurring pattern in UN resettlement — concentrate populations in willing host nations, then redistribute when capacity is overwhelmed.
- **Phase 4 (Problems):** The real problem: resettlement demand exceeds capacity. The proposed solution: redistribution. The gap: host communities weren't consulted.
- **Claim Verification (SOP-ER Phases 3–5):** Key statistical claims traced to primary sources. The "40% increase in displacement" claim traces to UNHCR data (Tier 1). The "successful integration outcomes" claim traces to a single government report from the beneficiary country (Tier 3 — credible but not independent).

*SOP-IOT Checkpoint:* "Am I reading this as a diagnostic statement ('here's the problem we face') or as prescriptive wisdom ('here's what should happen')? The Interpretation Protocol warns against conflating the two."

**Phase 4 — Cross-Cultural Translation:**

Translation into Arabic using the Translation Protocol:
- **Speaker's Voice:** "Compassion" in English carries different weight than رحمة (rahma) in Arabic — rahma carries religious and familial connotations not present in the bureaucratic English usage. Translator's note documents this gap.
- **Emotional/Somatic Voice:** The speaker's flat, bureaucratic delivery would read as disrespectful indifference in Arabic-speaking cultures where emotional engagement signals sincerity. Cultural bridge note explains this.
- **Observer's Voice:** Translator builds explicit bridge — "In the context of UN policy communication, this register is standard and does not carry the emotional indifference it may signal in Arabic discourse norms."

*SOP-IOT Checkpoint:* "Am I preserving the source meaning or reshaping it for the target audience's comfort? Am I being honest about what was communicated, even when that honesty reveals that the communication was bureaucratically hollow?"

**Phase 5 — Conflict Prevention and Discourse:**

Before presenting the translated policy to host community leaders:
- **Stakeholder Analysis:** Host community leaders fear cultural displacement. Resettlement agencies fear capacity overload. Refugee populations fear rejection.
- **Discourse Facilitation:** Structured lockout-synthesis cycles: "The UN proposes X. Here's what the speaker said, how it felt, what it means in context. Does this capture the reality? What's missing? Where do we agree? Where do we disagree? What do we need?"
- **If Conflict Emerges:** Full Conflict Mediation Protocol for specific disputes — Voice Gathering from each party, Life of the Conflict construction, Voicing Ceremony.

*SOP-CI Checkpoint:* "Are all parties' underlying interests being heard? Position conflict (we don't want more refugees vs. we need resettlement) may mask shared interest (both want community stability)."

---

## Part Seven: Building Your Own Pipeline

### 7.1 The Pipeline Design Process

Following the Genesis Protocol's 10-phase pattern:

**Step 1 — Problem Identification:**
- What specific communication problem needs a multi-protocol solution?
- Why doesn't a single protocol suffice?
- What value does combining protocols create?

**Step 2 — Protocol Selection:**
- Which protocols address the core problem?
- Which support protocols add necessary quality or depth?
- Does this pipeline require research (invoke SOP-ER), narrative analysis (invoke SOP-DN), or pre-pipeline scoping (invoke SOP-SP)?
- What's the minimum viable pipeline (fewest protocols that solve the problem)?

**Step 3 — Sequence Design:**
- What's the logical order? (Usually: Schema → Capture → Analyze → Apply)
- Which connections are sequential? Embedded? Parallel? Recursive?
- Where are the handoff points?

**Step 4 — Interrogation Placement:**
- At which handoffs is interrogation critical?
- Which SOP methods are most appropriate for this pipeline?
- What's the minimum interrogation requirement?

**Step 5 — Output Definition:**
- What deliverable does each phase produce?
- What does the integrated output look like?
- What quality standards apply?
- Is a Resource Directory or Deconstruction Ledger required?

**Step 6 — Effort Estimation:**
- How many hours per phase?
- What's the total pipeline effort at light/standard/deep depth?
- What skills are required at each phase?

**Step 7 — Documentation:**
- Write it down using this Interface Guide's template structure
- Include: governing protocols, purpose, process, output, checkpoints, effort estimate per phase
- Document it so someone else can run the pipeline

**Step 8 — Test and Iterate:**
- Run the pipeline on a real problem
- Document what works and what doesn't
- Refine handoffs, interrogation placement, and sequence
- Update the Resource Directory with methodology learning

### 7.2 Pipeline Design Template

```
# [Pipeline Name] — [Brief Description]

## Use Case
[What specific problem does this pipeline solve?]

## Protocols Used
[List all protocols and SOPs in the pipeline]

## Pipeline Phases

### Phase 0: Schema Priming (if applicable)
- **Governing SOP:** SOP-SP
- **Purpose:** [What evidence landscape is being mapped?]
- **Output:** Resource Directory (Type S)
- **Estimated Effort:** [Hours]

### Phase [N]: [Phase Name]
- **Governing Protocol(s):** [Which protocol(s)]
- **Purpose:** [Why this phase exists]
- **Process:** [Step-by-step]
- **SOP Checkpoint:** [What interrogation occurs here]
- **Schema Update:** [What changes in the Resource Directory]
- **Output:** [What this phase produces]
- **Estimated Effort:** [Hours]
- **Handoff to Next Phase:** [What moves forward]

[Repeat for each phase]

## Quality Assurance
[Checklist for the complete pipeline]

## Estimated Total Effort
[Light / Standard / Deep estimates]

## Notes and Variations
[Context-specific adaptations]
```

---

## Part Eight: Quality Assurance for Interface Operations

### 8.1 Pipeline-Level Quality Standards

Beyond individual protocol quality standards, multi-protocol pipelines must also meet:

**Coherence Standard:**
- [ ] The three-voice framework is consistently applied across all phases
- [ ] Terminology is consistent across protocols (same words mean same things)
- [ ] The integrated output reads as a unified document, not a patchwork

**Evidence Chain Standard:**
- [ ] Every interpretation in later phases is traceable to specific evidence in earlier phases
- [ ] Source → Capture → Analysis → Application chain is documented and verifiable
- [ ] Uncertainty from earlier phases is explicitly carried forward (not hidden)
- [ ] If a Resource Directory exists, the Three-Link Citation Chain has been verified for all output claims *(NEW in D0001.1a)*
- [ ] All sources in the Resource Directory carry reliability tier assignments *(NEW in D0001.1a)*

**Interrogation Compliance Standard:**
- [ ] Minimum interrogation checkpoints completed at each handoff
- [ ] Analyst's own projections documented at pipeline entry and exit
- [ ] Known/Unknown/Unknowable classification present in final output
- [ ] For BIO (RC0001.1a): All Functional Interrogation Verification deltas documented; no "nothing changed" deltas without re-execution *(NEW in D0001.1a)*

**Dimensional Preservation Standard:**
- [ ] All three voices are present in every phase (or explicitly noted as absent with reasoning)
- [ ] Emotional/Somatic data was not stripped during protocol transitions
- [ ] Observer's Voice maintains both internal (self-witnessing) and external (documentary) functions

**Epistemic Integrity Standard** *(NEW in D0001.1a)*:
- [ ] All factual claims carry epistemic status tags (for BIO RC0001.1a)
- [ ] No claim tagged `[TEXTUAL CLAIM]`, `[TRADITION]`, or `[UNVERIFIED-PARTISAN]` serves as an analytical premise
- [ ] Source Provenance Architecture applied for ancient/religious figure claims
- [ ] Source Ecosystem Detection Rule applied; imbalances documented and counter-weighted

### 8.2 Three-Tier Review for Pipelines

Adapted from the Takedown Workflow's review structure:

**Tier 1 — Self-Review (Pipeline Operator):**
- Complete all phases
- Run quality checklists per phase AND pipeline-level
- Verify evidence chain end-to-end
- Confirm own projections documented
- Verify Resource Directory is current and complete (if applicable)

**Tier 2 — Peer Review (Another TLV Practitioner):**
- Verify handoff quality between phases
- Check three-voice preservation across transitions
- Test: Does the integrated output hold together?
- Test: Are interrogation checkpoints genuine (not performative)?
- Spot-check Three-Link Citation Chain (select 5 random claims, trace to source)

**Tier 3 — Specialist Review (Domain Expert + TLV Expert):**
- Domain expert verifies accuracy within their field (legal, medical, diplomatic, etc.)
- TLV expert verifies protocol compliance and dimensional integrity
- Combined review ensures the pipeline serves both TLV rigor AND domain requirements

---

## Part Nine: AI Agent Instructions for Multi-Protocol Pipelines

### 9.1 Required Inputs

An AI agent executing a multi-protocol TLV pipeline needs:

1. **This Interface Guide** (pipeline design and composition logic)
2. **All protocol documents relevant to the selected pipeline** (individual protocols for each phase)
3. **All relevant SOP documents** (interrogation methods for quality checkpoints, **including SOP-ER, SOP-DN, and SOP-SP when the pipeline involves research, narrative analysis, or sustained investigation**)
4. **TLV Emotional and Feeling Vocabulary** (precision language for emotional documentation)
5. **Source material** (the speech, text, video, conflict, or situation being analyzed)
6. **Pipeline template** (which pipeline pattern to follow, or a custom design)
7. **Resource Directory template** (for pipelines invoking SOP-SP or SOP-ER) *(NEW in D0001.1a)*
8. **Deconstruction Ledger template** (for pipelines invoking SOP-DN) *(NEW in D0001.1a)*

### 9.2 AI Agent Quality Standards

In addition to individual protocol AI standards:

- **Pipeline coherence:** Maintain consistent three-voice application across all phases
- **Handoff discipline:** Complete each phase before proceeding; don't skip interrogation checkpoints
- **Dimensional preservation:** Carry emotional/somatic data forward through transitions — do not strip
- **Uncertainty propagation:** If Phase N produces uncertain output, Phase N+1 must acknowledge and work with that uncertainty
- **Projection honesty:** AI agents should document where they lack human embodied response (especially in Emotional/Somatic Voice and conflict contexts)
- **No hallucination:** If a phase cannot be completed due to insufficient data, state the limitation clearly rather than fabricating
- **Evidence tracing:** Every claim in later phases must cite specific evidence from earlier phases
- **Schema discipline:** When a Resource Directory exists, register all new sources and claims as discovered; update hypothesis and gap statuses at every phase; log all modifications in the Phase Update Log *(NEW in D0001.1a)*
- **Citation chain compliance:** For pipelines using SOP-ER, verify the Three-Link Citation Chain before finalizing any output *(NEW in D0001.1a)*
- **Epistemic tagging:** For BIO (RC0001.1a) work, apply epistemic status tags to all factual claims; never use `[TEXTUAL CLAIM]` or lower as analytical premises *(NEW in D0001.1a)*
- **Functional interrogation:** For BIO (RC0001.1a) checkpoints, document specific deltas — what changed — not just that interrogation occurred *(NEW in D0001.1a)*

### 9.3 Execution Order

For any pipeline, the AI agent follows this meta-process:

1. **Load pipeline template** (from this guide or custom design)
2. **Identify all required protocols and SOPs** for the selected pipeline
3. **Load all required documents** into context (including SOP-ER, SOP-DN, SOP-SP as applicable)
4. **Execute Phase 0 (Schema Priming)** if the pipeline involves research or investigation — produce Resource Directory
5. **Execute Phase 1** — Produce output meeting that protocol's quality standards
6. **Run handoff checklist** before proceeding to Phase 2 — update Resource Directory
7. **Execute Phase 2** — Using Phase 1 output as input
8. **Continue through all phases** with handoff checklists and Resource Directory updates at each transition
9. **Produce integrated output** synthesizing all phases
10. **Verify Three-Link Citation Chain** (if SOP-ER was invoked)
11. **Run pipeline-level quality standards** on the integrated output
12. **Document methodology learning** (what did this pipeline run teach?)

---

## Part Ten: The Living Architecture

### 10.1 How This Guide Evolves

This Interface Guide is version D0001.1a — a Release Candidate. It will evolve as:

- **New protocols are developed** (each adds new interface possibilities)
- **New SOPs are developed** (SOP-ER, SOP-DN, and SOP-SP demonstrate the pattern — future SOPs will add new edges)
- **New pipeline templates are discovered** (practitioners will find combinations not yet documented)
- **Implementation experience accumulates** (some interfaces will prove more important than others)
- **Failure modes are identified** (some combinations may not work as expected)
- **Protocol revisions occur** (BIO RC0001.1a demonstrates the pattern — field-tested revisions feed back into the ecosystem)

### 10.2 Contributing New Pipeline Templates

If you design a multi-protocol pipeline that solves a real problem, document it using the template in Section 7.2 and submit it for inclusion in future versions of this guide.

**What to document:**
- The problem you were solving
- Which protocols you combined and why
- What worked well at the interfaces
- What didn't work (and what you did about it)
- The quality standards you applied
- How the Resource Directory evolved across the pipeline (if applicable)
- What you learned about TLV through the process

### 10.3 The Recursive Nature of Interface Design

This Interface Guide was itself built using TLV principles:

- **Speaker's Voice:** Here is what the guide says — the architecture, the templates, the standards.
- **Emotional/Somatic Voice:** Here is what it feels like to use TLV as infrastructure — the satisfaction of protocols clicking together, the frustration when handoffs fail, the power of seeing a complete dimensional record emerge from a multi-phase pipeline.
- **Observer's Voice:** Here is why this matters — because TLV is not a collection of isolated tools. It is an ecosystem. And ecosystems need ecology — a map of relationships, dependencies, and flows. This guide is that ecology.

The Interface Guide connects to every other document in TLV. It is the document that makes the whole greater than the sum of its parts.

### 10.4 What This Reveals About TLV

The existence of this Interface Guide proves something the Genesis Protocol predicted:

> "TLV's dimensional framework is fractal — it applies at every scale while preserving the core structure."

At the scale of a single person witnessing their own thought: three voices.
At the scale of two people in conflict: three voices, with a Witness.
At the scale of a community deliberating: three voices, at collective scale.
At the scale of a multi-protocol pipeline: three voices, orchestrated across domains.
At the scale of systematic research: three voices, with schema infrastructure and citation chains.
At the scale of narrative deconstruction: three voices, applied convergently to dismantle and understand.
At the scale of the TLV ecosystem itself: three voices — the protocols (what TLV does), the experience of using them (how it feels), and the Interface Guide (why the connections matter).

**It's turtles all the way down — and the turtles are learning from each other.**

---

## Document Version History

**D0001.1a (Release Candidate) — March 8, 2026:**
- Added SOP-ER, SOP-DN, SOP-SP to all relevant sections
- Updated Biography Protocol reference to RC0001.1a
- Added Data Flow Patterns E (Schema → Research → Produce) and F (Capture → Deconstruct → Reconstruct)
- Added Pipeline Templates: Evidence-Based Research (3.8) and Narrative Deconstruction (3.9)
- Added Law 6 (Schema-First Principle) to Interface Design Principles
- Updated Connection Matrix, SOP Selection Guide, Minimum Interrogation Requirements
- Updated AI Agent Instructions with new document loading and quality standards
- Updated all existing pipeline templates with SOP-ER, SOP-DN, SOP-SP integration points
- Added Epistemic Integrity Standard to Quality Assurance
- Updated Quick Reference and Decision Tree with all new components

**D0001.1 (Public Draft) — March 4, 2026:**
- Initial Interface Guide
- Established connection types, matrix, and data flow patterns
- Documented 7 pipeline templates
- Interface design principles and handoff checklist
- AI agent instructions for multi-protocol execution
- Worked example: The Diplomatic Bridge

**Next Review:** Upon completion of first major multi-protocol pipeline implementation using D0001.1a + SOP-ER/SOP-DN/SOP-SP integration

**Maintained By:** TLV Foundation

---

## Appendix A: Quick Reference — Protocol and SOP Interface Codes

| Code | Full Name | Type | Version |
|------|-----------|------|---------|
| COMM | Communication & Speech Protocol | Protocol | RC0001.1 |
| TRANS | Transcription Protocol | Protocol | RC0001.1 |
| XLATE | Translation Protocol | Protocol | RC0001.1 |
| BIO | Biography Protocol | Protocol | **RC0001.1a** |
| INTERP | Interpretation Protocol | Protocol | RC0001.1 |
| CMED | Conflict Mediation Protocol | Protocol | D0001.1 |
| DMED | Discourse Mediation & Support Protocol | Protocol | D0001.1 |
| AD | Audio Description Protocol | Protocol | D0001.1 |
| CAP | Captioning Protocol | Protocol | D0001.1 |
| GEN | Genesis Protocol | Meta-Protocol | RC0001.1 |
| SOP-IOT | Methods for the Interrogation of Thought | SOP | RC0001.1 |
| SOP-IM | Interrogation Methods | SOP | RC0001.1 |
| SOP-CI | Collaborative Interrogation | SOP | RC0001.1 |
| SOP-SI | Self-Interrogation | SOP | RC0001.1 |
| **SOP-ER** | **Methods for Effective Research** | **SOP** | **RC0001.1** |
| **SOP-DN** | **Methods for Deconstruction of Presenting Narratives** | **SOP** | **RC0001.1** |
| **SOP-SP** | **Methods for Schema Priming** | **SOP** | **RC0001.1** |
| EFV | Emotional & Feeling Vocabulary | Infrastructure | RC0001 |
| BM | Builder's Manual | Infrastructure | RC0001.1 |
| PT | Protocol Template | Infrastructure | RC0001.1 |
| INTRO | Unified Introduction | Infrastructure | RC0001.1 |

---

## Appendix B: Pipeline Quick-Start Decision Tree

```
What are you trying to do?
│
├─ Document a speech or conversation?
│  └─ TRANS + CAP → Single speaker? Done.
│     └─ Need meaning extraction? → Add INTERP
│     └─ Need cross-language? → Add XLATE
│     └─ Need biographical context? → Add BIO (RC0001.1a)
│
├─ Understand a historical document?
│  └─ Historical Recovery pipeline (Section 3.2)
│     └─ Start with SOP-SP (schema prime the historical landscape)
│
├─ Resolve a conflict?
│  └─ Two parties? → CMED
│  └─ Multiple parties? → DMED
│  └─ Need background on parties? → Add BIO (RC0001.1a)
│  └─ Cross-cultural? → Add XLATE
│  └─ Complex stakeholder landscape? → Add SOP-SP
│
├─ Analyze a public figure or claims?
│  └─ Critical Analysis (Takedown) pipeline (Section 3.4)
│     └─ Start with SOP-SP → Add SOP-DN for narrative deconstruction
│
├─ Research a topic systematically?
│  └─ Evidence-Based Research pipeline (Section 3.8)
│     └─ SOP-SP (schema) → SOP-ER (8 phases) → Output with citation chain
│
├─ Deconstruct a narrative (media, institutional, political)?
│  └─ Narrative Deconstruction pipeline (Section 3.9)
│     └─ SOP-SP + SOP-DN (11 phases) → Deconstruction Brief
│
├─ Make a major decision?
│  └─ Personal? → SOP-IOT + SOP-SI
│  └─ Organizational? → Organizational Decision Audit (Section 3.3)
│
├─ Communicate across cultures?
│  └─ Diplomatic Bridge pipeline (Section 3.1)
│     └─ Start with SOP-SP (Phase 0)
│
├─ Make content accessible?
│  └─ Accessibility Bridge pipeline (Section 3.6)
│
├─ Facilitate group discourse?
│  └─ Mediated Discourse pipeline (Section 3.7)
│     └─ Start with SOP-SP for stakeholder landscape scoping
│
└─ Something else?
   └─ Design your own pipeline (Section 7.1)
   └─ Use the Pipeline Design Template (Section 7.2)
   └─ If it involves research: start with SOP-SP
```

---

## Appendix C: SOP Relationship Map *(NEW in D0001.1a)*

The seven SOPs relate to each other as follows:

```
                    ┌─────────────┐
                    │   SOP-SP    │ ← Cognitive ignition (builds the map)
                    │Schema Priming│
                    └──────┬──────┘
                           │ embeds into
                           ▼
                    ┌─────────────┐
                    │   SOP-ER    │ ← Research engine (walks the map)
                    │  Effective  │
                    │  Research   │
                    └──────┬──────┘
                           │ provides evidence to
                           ▼
                    ┌─────────────┐
                    │   SOP-DN    │ ← Convergence product (applies everything)
                    │  Narrative  │
                    │Deconstruction│
                    └──────┬──────┘
                           │
            ┌──────────────┼──────────────┐
            ▼              ▼              ▼
      ┌──────────┐  ┌──────────┐  ┌──────────┐
      │ SOP-IOT  │  │ SOP-IM   │  │ SOP-SI   │
      │Interroga-│  │Interroga-│  │  Self-    │
      │tion of   │  │tion      │  │Interroga-│
      │ Thought  │  │ Methods  │  │  tion     │
      └──────────┘  └──────────┘  └──────────┘
            │              │              │
            └──────────────┼──────────────┘
                           ▼
                    ┌──────────┐
                    │ SOP-CI   │
                    │Collabora-│
                    │tive      │
                    │Interroga-│
                    │  tion    │
                    └──────────┘

SOP-IOT = Quality assurance at every phase of every SOP
SOP-IM  = Micro-techniques deployed within every SOP
SOP-SI  = Self-reflection within solo work
SOP-CI  = Team methods when work is collaborative
SOP-SP  = Evidence infrastructure before sustained work
SOP-ER  = Research methodology embedding SOP-SP
SOP-DN  = Convergence calling ALL other SOPs
```

---

© 2026 The TriLateral Voice (TLV) Foundation Series

Licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)

**Non-commercial use is free.** Commercial use requires a license.
For details, email: licensing@tlvfoundation.org

**Trademarks:** "TriLateral Voice" and "TLV" are trademarks of The TLV Foundation Series.
See trademark guidelines, email: info@tlvfoundation.org
