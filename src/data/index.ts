// Data exports with TypeScript typing
import { 
  AdamSchiffIssues, 
  AlexPadillaIssues, 
  MuslimVoterIssues, 
  MuslimIssuesOverlap,
  SenatorStances
} from '../types';

// Import JSON data
import adamSchiffIssuesData from './adam-schiff-issues.json';
import alexPadillaIssuesData from './alex-padilla-issues.json';
import muslimVoterIssuesData from './muslim-voter-issues.json';
import muslimIssuesOverlapData from './muslim-issues-overlap-schiff-padilla.json';
import senatorStancesData from './senator-stances-exposed.json';

// Export typed data
export const adamSchiffIssues: AdamSchiffIssues = adamSchiffIssuesData;
export const alexPadillaIssues: AlexPadillaIssues = alexPadillaIssuesData;
export const muslimVoterIssues: MuslimVoterIssues = muslimVoterIssuesData;
export const muslimIssuesOverlap: MuslimIssuesOverlap = muslimIssuesOverlapData as MuslimIssuesOverlap;
export const senatorStances: SenatorStances = senatorStancesData;

// Utility functions for data manipulation
export const getIssuesByCandidate = (candidate: 'AlexPadilla' | 'AdamSchiff') => {
  return candidate === 'AlexPadilla' ? alexPadillaIssues : adamSchiffIssues;
};

export const getIssuesByPriority = (issues: AdamSchiffIssues | AlexPadillaIssues, minPriority: number, maxPriority: number) => {
  return issues.filter(issue => 
    issue.priorityRank >= minPriority && issue.priorityRank <= maxPriority
  );
};

export const getTopIssues = (issues: AdamSchiffIssues | AlexPadillaIssues, count: number = 5) => {
  return issues
    .sort((a, b) => a.priorityRank - b.priorityRank)
    .slice(0, count);
};

export const searchIssues = (issues: AdamSchiffIssues | AlexPadillaIssues, query: string) => {
  const lowerQuery = query.toLowerCase();
  return issues.filter(issue => 
    issue.issue.toLowerCase().includes(lowerQuery) ||
    issue.description.toLowerCase().includes(lowerQuery) ||
    issue.examples.some(example => example.toLowerCase().includes(lowerQuery))
  );
};
