# TypeScript Interfaces for Know Your Vote Data

This directory contains TypeScript interfaces that provide type safety for all the JSON data files used in the Know Your Vote application.

## Available Interfaces

### Core Data Types

- **`Issue`** - Base interface for candidate issues with priority ranking
- **`MuslimVoterIssue`** - Interface for Muslim voter priority issues
- **`CandidateOverlap`** - Interface for analyzing candidate alignment with Muslim voter issues
- **`MuslimIssueOverlap`** - Interface for the overlap analysis data structure
- **`SenatorStance`** - Interface for senator voting records and public statements
- **`OpenSecretsData`** - Interface for campaign finance data from OpenSecrets
- **`CampaignContribution`** - Interface for individual campaign contributions
- **`CampaignExpenditure`** - Interface for individual campaign expenditures

### Type Aliases

- **`AdamSchiffIssues`** - Array of Adam Schiff's issues
- **`AlexPadillaIssues`** - Array of Alex Padilla's issues
- **`MuslimVoterIssues`** - Array of Muslim voter priority issues
- **`MuslimIssuesOverlap`** - Array of overlap analysis data
- **`SenatorStances`** - Array of senator stance data
- **`OpenSecretsAlexPadilla`** - Campaign finance data for Alex Padilla

### Utility Types

- **`CandidateName`** - Union type for candidate names ('AlexPadilla' | 'AdamSchiff')
- **`AlignmentLevel`** - Union type for alignment levels ('true' | 'partial' | 'low')

## Usage Examples

### Basic Import

```typescript
import { 
  adamSchiffIssues, 
  alexPadillaIssues, 
  muslimVoterIssues,
  openSecretsAlexPadilla,
  type Issue,
  type CandidateName,
  type OpenSecretsData
} from '../data';
```

### Using Typed Data

```typescript
// Type-safe access to issue properties
const topIssue: Issue = adamSchiffIssues[0];
console.log(topIssue.issue); // TypeScript knows this is a string
console.log(topIssue.priorityRank); // TypeScript knows this is a number
console.log(topIssue.examples); // TypeScript knows this is string[]

// Type-safe candidate selection
const getCandidateIssues = (candidate: CandidateName): Issue[] => {
  return candidate === 'AlexPadilla' ? alexPadillaIssues : adamSchiffIssues;
};

// Type-safe access to campaign finance data
const campaignData: OpenSecretsData = openSecretsAlexPadilla;
console.log(campaignData.total_receipts); // TypeScript knows this is a number
console.log(campaignData.contributions); // TypeScript knows this is CampaignContribution[]

// Working with contributions
const topContributor = campaignData.contributions
  .filter(c => c.contributor && c.contributor.trim() !== '')
  .sort((a, b) => b.amount - a.amount)[0];

console.log(`${topContributor.contributor}: $${topContributor.amount.toLocaleString()}`);
```

### Utility Functions

The data module provides several utility functions:

```typescript
import { 
  getTopIssues, 
  searchIssues, 
  getIssuesByPriority 
} from '../data';

// Get top 5 priority issues
const topIssues = getTopIssues(adamSchiffIssues, 5);

// Search issues by keyword
const searchResults = searchIssues(alexPadillaIssues, 'climate');

// Filter by priority range
const mediumPriorityIssues = getIssuesByPriority(adamSchiffIssues, 3, 7);
```

### Component Usage

```typescript
import React from 'react';
import { adamSchiffIssues, openSecretsAlexPadilla, type Issue, type OpenSecretsData } from '../data';

const IssueCard: React.FC<{ issue: Issue }> = ({ issue }) => {
  return (
    <div>
      <h3>{issue.issue}</h3>
      <p>Priority: {issue.priorityRank}</p>
      <p>{issue.description}</p>
      {/* TypeScript provides autocomplete and type checking */}
    </div>
  );
};

const CampaignFinanceCard: React.FC<{ data: OpenSecretsData }> = ({ data }) => {
  return (
    <div>
      <h3>{data.candidate_name}</h3>
      <p>Total Receipts: ${(data.total_receipts / 1000000).toFixed(1)}M</p>
      <p>Cash on Hand: ${(data.cash_on_hand / 1000000).toFixed(1)}M</p>
      {/* TypeScript provides autocomplete and type checking */}
    </div>
  );
};

const IssuesList: React.FC = () => {
  return (
    <div>
      {adamSchiffIssues.map((issue, index) => (
        <IssueCard key={index} issue={issue} />
      ))}
      <CampaignFinanceCard data={openSecretsAlexPadilla} />
    </div>
  );
};
```

## Benefits

1. **Type Safety** - Catch errors at compile time instead of runtime
2. **IntelliSense** - Get autocomplete and documentation in your IDE
3. **Refactoring** - Safely rename properties and update references
4. **Documentation** - Interfaces serve as living documentation of data structure
5. **Maintainability** - Easier to understand and modify data structures

## Data Structure

All interfaces are designed to match the exact structure of the JSON files:

- `src/data/adam-schiff-issues.json` → `AdamSchiffIssues`
- `src/data/alex-padilla-issues.json` → `AlexPadillaIssues`
- `src/data/muslim-voter-issues.json` → `MuslimVoterIssues`
- `src/data/muslim-issues-overlap-schiff-padilla.json` → `MuslimIssuesOverlap`
- `src/data/senator-stances-exposed.json` → `SenatorStances`
- `src/data/opensecrets-alex-padilla.json` → `OpenSecretsAlexPadilla`

## Adding New Data

When adding new JSON data files:

1. Create a new interface in `src/types/data.ts`
2. Add the data export in `src/data/index.ts`
3. Update this README with usage examples
4. Ensure the interface matches the JSON structure exactly
