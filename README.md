# ProofShift

**Turn Your Web2 Identity into a Web3 Proof Card**

ProofShift is a decentralized identity transformation tool designed to help developers and creatives move away from static, easily spoofed CVs and portfolios. It utilizes AI to extract relevant traits from traditional "Web2" files and mints a simulated "Web3-verifiable" user identity holding authenticated proof badges.

![ProofShift Overview](https://via.placeholder.com/1200x600?text=ProofShift+-+Web2+to+Web3+Identity)

## Problem Solved

Current professional identity exists entirely on centralized platforms (LinkedIn, Twitter, institutional PDFs). You do not own your specific employment data, endorsements, or certificates—the platform does. Verification logic is completely manual, forcing recruiters and employers to "trust" the CV.

## Why Web2 → Web3 Matters

The internet is shifting from "read/write" (Web2) to "read/write/own" (Web3). By moving credentials from PDF databases to decentralized verifiable credentials, people completely own their reputation. ProofShift demonstrates how frictionless this transition can be:

| Feature Dimension    | Web2 Paradigm           | Web3 Reality            |
| -------------------- | ----------------------- | ----------------------- |
| Storage              | Platform Silos          | Decentralized Wallets   |
| Trust                | Manual Background Check | Cryptographic Proof     |
| Identity Composition | Static File             | Dynamic Programmable ID |

## How Gemini AI is Used

*(Simulated within `lib/mockGemini.ts` for this Proof of Concept)*

When the user uploads a resume, certificate, or provides a URL, the Gemini API extracts raw text, structures the underlying skills securely, maps past experiences to verification thresholds, and calculates an absolute "Credibility Score." This parsed data directly drives the configuration of the simulated zero-knowledge proof credentials.

## Architecture Diagram

```
Upload → AI Extraction → Proof Generation → Identity Card → Share
```

## Accessibility (a11y)

The project adheres to modern web accessibility standards, ensuring inclusivity:
- Keyboard navigability using focus-visible states across all interactive elements.
- Semantic HTML tags (`<section>`, `<main>`) structure to assist screen reading navigation.
- Minimum WCAG compliant contrast ratios on the dark cyperpunk palette.
- Descriptive `aria-label` tags embedded within upload dropzones and core CTAs.

## Security

ProofShift is constructed securely:
- **Client-Side Validation:** Upload types are strictly guarded.
- **Graceful Error Logic:** If AI processing fails or API quotas drop, a fallback state is rendered elegantly.
- **No API Leakage:** Safe env-driven deployment patterns strictly partition client actions from AI processing logic (if connected to real Gemini).

## Future Improvements

- Connect to an actual Smart Contract (e.g., EAS - Ethereum Attestation Service) to permanently mint credentials on-chain.
- Introduce zero-knowledge elements (zk-SNARKs) so users can prove they hold a certificate without strictly exposing personal data.
- Plug live Gemini multimodal logic to process visual certificates dynamically.

---

*Built for the Google Antigravity Challenge*

