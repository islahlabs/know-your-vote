// TypeScript interfaces for Know Your Vote data files

// Base interface for issues with priority ranking
export interface Issue {
  issue: string;
  priorityRank: number;
  description: string;
  examples: string[];
  sources: string[];
}

// Interface for Muslim voter issues
export interface MuslimVoterIssue {
  topic: string;
  priorityRank: number;
  description: string;
  focusAreas: string[];
}

// Interface for overlap analysis between candidates and Muslim voter issues
export interface CandidateOverlap {
  aligned: true | 'partial' | 'low';
  issue: string;
  priorityRank: number;
  notes: string;
}

export interface MuslimIssueOverlap {
  topic: string;
  muslimVoterPriorityRank: number;
  overlap: {
    AlexPadilla: CandidateOverlap;
    AdamSchiff: CandidateOverlap;
  };
}

// Export the data types
export type AdamSchiffIssues = Issue[];
export type AlexPadillaIssues = Issue[];
export type MuslimVoterIssues = MuslimVoterIssue[];
export type MuslimIssuesOverlap = MuslimIssueOverlap[];

// Utility types for easier usage
export type CandidateName = 'AlexPadilla' | 'AdamSchiff';
export type AlignmentLevel = true | 'partial' | 'low';

// Interface for comparing candidates on specific issues
export interface IssueComparison {
  issue: string;
  alexPadilla: {
    priorityRank: number;
    description: string;
    examples: string[];
  };
  adamSchiff: {
    priorityRank: number;
    description: string;
    examples: string[];
  };
}

// Interface for search and filtering
export interface IssueFilter {
  candidate?: CandidateName;
  priorityRange?: [number, number];
  keywords?: string[];
  alignmentLevel?: AlignmentLevel;
}
