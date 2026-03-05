# TriLateral Voice (TLV) Builder's Manual

---
## Document Information

| Field | Value |
|-------|-------|
| **Version Number** | RC0001.1 |
| **Release Status** | Release Candidate |
| **Language Version** | US English |
| **Version Date** | 03/15/2026 |
| **Document Type** | BUILDER's MANUAL |
| **License** | CC BY-NC-SA 4.0 |
| **Related Documents** | See: `../RC0001.1-Bill-of-Materials.md` |

---


## Executive Summary

This manual provides the framework and guidelines for **creating, validating, and sustaining methodologies within the TLV ecosystem.**

It's designed for people who recognize a problem, interrogate their thinking about it, and want to formalize their approach into a replicable, testable, documentable methodology that others can use.

**Core Principle:** Methodologies aren't handed down from experts. They emerge from practitioners solving real problems, then are formalized, tested, and shared.

**Who this is for:**

- People developing new TLV protocols or SOPs
- Communities adapting TLV methods for different contexts
- Organizations integrating TLV into their governance
- Researchers empirically testing TLV effectiveness
- Translators bringing TLV to other languages and cultures

---

## Mission

To enable practitioners to develop, test, refine, and sustainably maintain methodologies that serve real problems and improve thinking, communication, and decision-making at individual, community, and organizational levels.

---

## Core Understanding

The best methodologies emerge bottom-up, not top-down. They're built by people:
- Facing real problems
- Trying solutions iteratively
- Documenting what works and what doesn't
- Sharing openly with others
- Refining based on feedback and use

This manual captures how to do that systematically, with quality assurance and community governance built in from the start.

---

## Part One: Methodology Development Framework

### 1.1 The Emergence Process

**Phase 1: Problem Recognition** (You notice something's broken)
- A gap in existing approaches
- A recurring failure pattern
- A problem that needs solving
- An insight that needs systematizing

**Phase 2: Iterative Exploration** (You try things, document results)
- Informal experimentation
- Recursive conversation
- Testing approaches on real problems
- Noticing what works and what doesn't
- Refining as you go

**Phase 3: Formalization** (You structure what you've learned)
- Document the process
- Identify core principles
- Create operational steps
- Build in quality checks
- Write it so others can use it

**Phase 4: Testing and Validation** (Others try it, provide feedback)
- Release as draft or candidate
- Gather real-world feedback
- Identify failure modes
- Test across different contexts
- Refine based on evidence

**Phase 5: Sustainment** (You maintain and evolve it)
- Version control and semantic versioning
- Community governance
- Regular audits and updates
- Cultural adaptations
- Documentation of changes

**Phase 6: Integration** (Others build on it)
- Other methodologies reference yours
- Communities adapt it locally
- New use cases emerge
- Knowledge compounds
- Ecosystem strengthens

### 1.2 Building with Interrogation and Interpretation

**The Two-Layer Approach:**

Your new methodology should integrate:

1. **Interrogation methods** (quality checks at each step)
   - "Are we thinking clearly about this?"
   - "What are we assuming?"
   - "Is this valid in this context?"

2. **Interpretation principles** (how to extract meaning)
   - "What was actually observed vs. inferred?"
   - "What context shaped this?"
   - "What patterns recur vs. what's specific?"

**In Practice:**

If you're building a **governance protocol**, embed:
- Decision points where people interrogate their own thinking (SOP checkpoints)
- Interpretation processes for understanding stakeholder feedback (Protocol phases)
- Recursive questioning before major decisions (Phase 6 of SOP)
- Pattern recognition across organizational history (Phase 3 of Protocol)

If you're building a **communication method**, embed:
- Assumption-checking before critiques (Phase 2 of SOP)
- Contextual understanding of what others meant (Phase 2 of Protocol)
- Falsifiability testing of interpretations (Phase 3 of Protocol)
- Emotional awareness in recursive questioning (Phase 6 of SOP)

**The integration happens naturally if you start with real problems and interrogate your solutions.**

---

## Part Two: Documentation and Formatting Standards

### 2.1 Baseline Structure

**Every TLV methodology should include:**

**Header Block:**
```
# [Full Title]: RC[version].1

---

## Document Information

**Version Number:** RC[version].1  
**Release Status:** [Public Draft | Release Candidate | Stable]  
**Language Version:** US English  
**Version Date:** MM/DD/YYYY  
**Document Type:** [Protocol | SOP | Manual | Origin Story]  
**License:** CC BY-NC-SA 4.0  

**Related Documents:**
- [List other RC versions and related docs]
```

**Core Sections:**
- **Executive Summary** (what this does, why it matters)
- **Mission** (grounded, clear statement of purpose)
- **Core Understanding** (the fundamental insight)
- **Theoretical Foundations** (why this approach works)
- **Operational Framework** (how to actually use it)
- **Quality Assurance** (how to know it's working)
- **Appendix** (checklists, templates, quick reference)

**Footer Block:**
```
© 2025 The TriLateral Voice (TLV) Foundation Series

Licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International 
[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)

**Non-commercial use is free.** Commercial use requires a license.  
For details, email: licensing@tlvfoundation.org
```

### 2.2 Tone and Voice Standards

TLV documents maintain a consistent tone across versions and contexts:

**Core Characteristics:**
- **Grounded:** Practical examples, not abstract theory
- **Clear:** Accessible to non-specialists without sacrificing precision
- **Honest:** Acknowledges limitations and unknowns
- **Direct:** No grandeur, flowery language, or false certainty
- **Modular:** Hierarchical structure (# ## ### ####)
- **Concrete:** Real-world examples, not hypotheticals
- **Humble:** "We've found" not "We've discovered"; "appears to" not "definitively"

**Lexicon Rules:**
- Use "TriLateral Voice (TLV)" first mention; then "TLV"
- Use "three voices" or specific voice names (Speaker's Voice, Emotional/Somatic Voice, Observer's Voice)
- Prefer "context/constraints" over "situation"
- Use "falsifiability," "epistemic humility," "dimensionality"
- Avoid "revolutionary," "transcendent," "definitively," "always/never"
- Use bracketed asides [like this] for clarifications or in-development status

**Structure Rules:**
- Use descriptive headers with minimal special characters (avoid "/" in headings)
- Include inline citations if researched, not footnotes
- Provide concrete examples before abstract principles
- Build from problem → solution → implementation → validation
- End each section with interrogation checkpoints

### 2.3 Version Control and Semantic Versioning

**Numbering:** RC[version].1

- **RC0001.1** = First release candidate, 0001 series
- **RC0001.2** = First release candidate, 0001 series, second iteration (minor fixes)
- **RC0002.1** = Second release candidate, significant revisions
- **1.0** = Stable release (after RC feedback incorporated)

**When to bump version:**
- **Patch (0.0.1 → 0.0.2):** Grammar, clarity, typo fixes; no conceptual change
- **Minor (0.1 → 0.2):** New section, new checkpoint, new example; structure unchanged
- **Major (1.0 → 2.0):** Fundamental rethinking, new phases, core principle shift

**Release status categories:**
- **Draft:** Early, untested, "we're trying this out"
- **Candidate (RC):** Near-complete, field-tested, seeking feedback
- **Stable:** Tested, documented, ready for production use
- **Deprecated:** Replaced by newer version, archived for reference

---

## Part Three: Testing and Validation

### 3.1 Empirical Testing Framework

Before a methodology moves from RC to 1.0, it should pass:

**Phase 1: Internal Validation**
- [ ] Does it solve the problem it claims to solve?
- [ ] Can it be applied by someone other than the creator?
- [ ] Are the steps clear and replicable?
- [ ] Do quality checks actually work?
- [ ] What failure modes emerge in real use?

**Phase 2: Cross-Context Testing**
- [ ] Does it work in different organizational contexts?
- [ ] Does it work across different personality types?
- [ ] Does it work across different cultural contexts?
- [ ] What adaptations are necessary?
- [ ] Where does it break?

**Phase 3: Comparative Effectiveness**
- [ ] Does it outperform existing approaches?
- [ ] What specific metrics demonstrate effectiveness?
- [ ] Are improvements statistically significant?
- [ ] What's the cost-benefit ratio?
- [ ] For whom is it most effective?

**Phase 4: Longitudinal Testing**
- [ ] Does it work over time (not just in initial novelty)?
- [ ] How does it perform with experienced practitioners?
- [ ] What refinements emerge after 3-6 months of use?
- [ ] Are outcomes sustainable?
- [ ] What maintenance is required?

### 3.2 Failure Mode Analysis

Every methodology should document:

**Known Failure Modes:**
- When it doesn't work
- What goes wrong
- What causes the failure
- How to recognize it happening

**Example Format:**
```
**Failure Mode 1: [Name]**
- Problem: [What happens]
- Cause: [Why it happens]
- Recognition: [How to spot it]
- Prevention: [How to avoid it]
- Recovery: [How to fix it if it occurs]
```

**Collection Method:**
- Gather from early users
- Document in real time
- Include in version updates
- Share openly with community

### 3.3 Community Feedback Integration

**Feedback Collection:**
- Email: feedback@tlvfoundation.org
- GitHub issues and discussions
- Community calls and workshops
- Written case studies
- Adapted implementations

**Feedback Evaluation:**
- Does it reveal a real problem?
- Is it broadly applicable or context-specific?
- Does it change the fundamental methodology or is it an adaptation?
- What evidence supports the feedback?
- How does it interact with other components?

**Integration Decision Process:**
1. Acknowledge feedback publicly
2. Interrogate the underlying thinking (use SOP)
3. Test the proposed change
4. Document decision and reasoning
5. Incorporate or explain why not
6. Update version and documentation

---

## Part Four: Sustainment and Evolution

### 4.1 Maintenance Schedule

**Monthly:**
- Review community feedback and questions
- Document emerging patterns
- Fix typos, clarity issues, broken links

**Quarterly:**
- Gather user data on effectiveness
- Identify recurring failure modes
- Plan documentation updates
- Review version compatibility with ecosystem

**Annually:**
- Major audit against original problem statement
- Comparative testing against alternatives
- Cultural adaptation updates
- Strategic revision planning
- Community governance update

### 4.2 Community Governance

**Who makes decisions:**
- **Original creators:** Propose changes, guide direction
- **Active practitioners:** Implement, report results, provide feedback
- **Community council:** [Establish governance structure for your community]

**Decision-making process:**
1. Proposal (anyone can propose)
2. Interrogation (apply SOP to the proposal)
3. Testing (does it work in practice?)
4. Feedback (gather community input)
5. Decision (creators + council)
6. Implementation (document and version)

**Conflict resolution:**
- Start with Interrogation SOP (Phase 6: Recursive questioning)
- Use Interpretation Protocol (Phase 2: Context mapping)
- Bring in neutral third party if needed
- Document reasoning transparently

### 4.3 Cultural Adaptation and Translation

**Principles:**
- Meaning before literal translation
- Context-appropriateness before format consistency
- Community input before top-down adaptation
- Quality assurance before release

**Process:**
1. **Identify adaptation needs** (different language, culture, context)
2. **Assemble local team** (speakers, practitioners, cultural advisors)
3. **Interrogate adaptations** (SOP Phase 4: Context mapping)
4. **Test locally** (Phase 1 internal validation)
5. **Gather feedback** (compare to original; identify gaps)
6. **Document changes** (version as RC[version].1-[Language-Code])
7. **Share back** (inform original community of adaptations)

**Example:**
- RC0001.1-ES (Spanish version, Spain context)
- RC0001.1-PT (Portuguese version, Brazil adaptation)
- RC0001.1-JA (Japanese version, organizational context)

---

## Part Five: Building Your First Methodology

### 5.1 Starter Template

**Step 1: Define the Problem** (1 page)
- What's broken or missing?
- Why does it matter?
- Who suffers from this problem?
- What existing approaches fall short?

**Step 2: Design Your Solution** (2-3 pages)
- What's your core insight?
- How does it address the problem?
- What's the fundamental approach?
- Why should this work?

**Step 3: Create Your Operational Framework** (3-5 pages)
- What are the actual steps?
- In what order do they happen?
- Where are the decision points?
- What does quality look like?

**Step 4: Build in Quality Checks** (1-2 pages)
- Where could this fail?
- How will you know it's working?
- What are the interrogation checkpoints?
- What gets documented?

**Step 5: Test It** (iterative)
- Apply it to the problem
- Document what works and what doesn't
- Refine before formalizing
- Test with someone other than you

**Step 6: Write It Down** (1-2 weeks)
- Use the baseline structure from 2.1
- Follow tone and voice standards from 2.2
- Create the full documentation
- Have others review for clarity

**Step 7: Release and Iterate** (ongoing)
- Release as RC0001.1
- Gather feedback
- Revise based on evidence
- Version appropriately
- Move toward 1.0 when ready

### 5.2 Common Pitfalls

**Pitfall 1: Solving for yourself, not the problem**
- *Risk:* Your methodology only works for your context
- *Check:* Have someone else apply it to a similar problem
- *Fix:* Generalize principles; add context adaptation section

**Pitfall 2: Missing the quality assurance layer**
- *Risk:* People use it mechanically without thinking
- *Check:* Do your checkpoints actually catch errors?
- *Fix:* Embed Interrogation SOP explicitly; make checkpoints mandatory

**Pitfall 3: False certainty**
- *Risk:* Claiming your method is universal/definitive
- *Check:* Does it acknowledge limits? Known failure modes?
- *Fix:* Add epistemic humility language; document where it breaks

**Pitfall 4: Not learning from failures**
- *Risk:* People don't report when it doesn't work
- *Check:* Do you have explicit failure mode feedback channels?
- *Fix:* Create safe way for people to report problems

**Pitfall 5: Doctrinal drift**
- *Risk:* Your methodology becomes dogma people follow rote
- *Check:* Are people interrogating the methodology itself?
- *Fix:* Build in self-interrogation; encourage adaptations; stay humble

---

## Part Six: Ecosystem Integration

### 6.1 How Your Methodology Fits

**Every new TLV methodology should:**

1. **Reference the Interrogation SOP**
   - At quality checkpoints
   - In failure mode prevention
   - In community governance

2. **Use the Interpretation Protocol**
   - For understanding stakeholder/user feedback
   - For analyzing what went wrong
   - For adapting to new contexts

3. **Connect to the Genesis story**
   - Show how your problem was recognized
   - Document your iteration process
   - Share what you learned

4. **Serve the TLV ecosystem**
   - Other methodologies might build on yours
   - Your insights inform future development
   - Your feedback improves the core tools

### 6.2 Contributing Back

**When to contribute back:**
- You discover a limitation in core SOP or Protocol
- Your methodology reveals a gap in the ecosystem
- You adapt something that helps others
- You test something and get surprising results

**How to contribute:**
- Email: contribute@tlvfoundation.org
- GitHub pull requests
- Community forums and discussions
- Research papers and case studies

**What happens:**
- Your contribution gets reviewed (using SOP and Protocol)
- Community feedback is gathered
- Integration decisions are made transparently
- You're credited and version-tracked
- The ecosystem improves for everyone

---

## Part Seven: Real-World Examples

[In the full manual, each of these would include detailed walkthroughs]

**Example 1: Organizational Decision-Making Protocol**
- Problem: Executives make decisions on incomplete information
- Solution: Decision framework using Interrogation SOP checkpoints
- Result: Better decisions; fewer reversals; faster implementation

**Example 2: Family/Relationship Communication Method**
- Problem: Conflicts escalate because no one understands each other's context
- Solution: Communication method using Interpretation Protocol phases
- Result: Deeper understanding; fewer repeated arguments; stronger relationships

**Example 3: Research Validation Framework**
- Problem: Research communities disagree on methodology validity
- Solution: Validation framework using both SOP and Protocol
- Result: Shared standards; faster consensus; better research quality

**Example 4: Nonprofit Governance Adaptation**
- Problem: Nonprofits struggle with volunteer coordination and decision-making
- Solution: Adapted version of governance protocol for resource-limited settings
- Result: Better volunteer retention; clearer decisions; more sustainable organizations

---

## Part Eight: The Commitment

Building and maintaining a methodology is a long-term commitment:

**What you're promising:**
- To stay connected to the real problem it solves
- To stay humble about what you don't know
- To interrogate your own methodology regularly
- To gather and integrate feedback from practitioners
- To document changes transparently
- To help others adapt and improve it
- To contribute back to the ecosystem

**What the community promises:**
- To test your methodology rigorously
- To provide honest feedback
- To acknowledge your work
- To help maintain and evolve it
- To adapt it locally when helpful
- To share what they learn

**The virtuous cycle:**
- You create something useful
- Others use it and improve it
- Improvements flow back
- Community strengthens
- Better solutions emerge for everyone

---

## Document Version: 1.0

**Date:** January 2, 2026  
**Status:** Foundational Guide - Ready for Use  
**Integration:** With Interrogation SOP RC0001.1 and Interpretation Protocol RC0001.1  
**Next:** Case Studies and Worked Examples from Early Adopters  

---

## Appendix: Builder's Checklist

**Before You Start:**
- [ ] Can you articulate the core problem in one sentence?
- [ ] Have you tried existing approaches? What fell short?
- [ ] Do you understand why this problem exists?
- [ ] Can you commit to this long-term?

**During Development:**
- [ ] Are you interrogating your assumptions as you build?
- [ ] Have you tested it on someone other than you?
- [ ] Are you documenting as you iterate?
- [ ] Do you know where it fails?
- [ ] Can someone else apply it?

**Before Release:**
- [ ] Have you followed formatting standards?
- [ ] Does it include quality assurance checkpoints?
- [ ] Have you embedded Interrogation SOP?
- [ ] Have you included failure mode documentation?
- [ ] Have you gotten external feedback?
- [ ] Is your tone consistent and grounded?

**After Release:**
- [ ] Are you gathering feedback systematically?
- [ ] Are you interrogating your methodology?
- [ ] Are you documenting failure modes?
- [ ] Are you maintaining the documentation?
- [ ] Are you helping people adapt it?
- [ ] Are you staying connected to the original problem?

---

© 2025 The TriLateral Voice (TLV) Foundation Series

Licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)

**Non-commercial use is free.** Commercial use requires a license.  
For details, email: licensing@tlvfoundation.org

**Trademarks:** "TriLateral Voice" and "TLV" are trademarks of The TLV Foundation Series.  
See trademark guidelines, email: info@tlvfoundation.org
