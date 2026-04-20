export interface IdentityProfile {
  name: string;
  skills: string[];
  credibility: number;
  proofBadges: string[];
  walletStyleId: string;
  resumeDetected: string;
  linkedInDetected: boolean;
}

export interface ReviewData {
  jobMatch: number;
  strengths: string[];
  missingSkills: string[];
  weakAreas: string[];
  recommendations: string[];
  note: string;
  roadmap?: {
    "7days": string[];
    "30days": string[];
  };
}

export interface AdvancedIdentityData {
  profile: IdentityProfile;
  review: ReviewData;
}

export async function generateIdentityAndReview(input: {
  resumeName?: string;
  linkedinUrl?: string;
  jobDescription?: string;
}): Promise<AdvancedIdentityData> {
  
  // Simulate AI delay
  await new Promise((resolve) => setTimeout(resolve, 3000));
  
  const hasLinkedIn = !!input.linkedinUrl?.includes("linkedin.com/");
  
  return {
    profile: {
      name: "Alex Johnson",
      skills: ["React", "UI Design", "Team Projects", "Blockchain", "TypeScript"],
      credibility: hasLinkedIn ? 87 : 72,
      proofBadges: hasLinkedIn ? ["Verified Portfolio", "Verified LinkedIn", "Verified Code"] : ["Verified Portfolio", "Verified Code"],
      walletStyleId: "0xA91F...2C1",
      resumeDetected: input.resumeName || "No resume uploaded",
      linkedInDetected: hasLinkedIn,
    },
    review: {
      jobMatch: hasLinkedIn ? 68 : 58,
      strengths: ["React", "UI Design", "Problem Solving"],
      missingSkills: ["Solidity", "Docker", "Firebase"],
      weakAreas: [
        "No deployment experience shown in portfolio",
        "No backend projects identified",
        "Projects lack measurable, quantified impact"
      ],
      recommendations: [
        "Learn core Solidity concepts",
        "Deploy a mini-project using Docker + Cloud Run",
        "Rewrite your resume to include measurable results"
      ],
      note: hasLinkedIn
        ? "Your LinkedIn profile improves trust, but your portfolio still lacks clear deployment and Web3 integration work."
        : "Adding a valid LinkedIn profile is heavily recommended to improve your baseline trust and visibility.",
      roadmap: {
        "7days": [
          "Complete a Solidity crash course",
          "Add business metrics to your existing resume projects",
          "Build a simple wallet connection interface"
        ],
        "30days": [
          "Create a full-stack Web3 mini project with a backend",
          "Learn Firebase and build an auth-gated app",
          "Package and deploy your app via Docker"
        ]
      }
    }
  };
}
