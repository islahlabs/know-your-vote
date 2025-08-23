import React, { useState } from 'react';
import { 
  adamSchiffIssues, 
  alexPadillaIssues, 
  muslimVoterIssues,
  getTopIssues,
  searchIssues,
  type CandidateName 
} from '../data';

interface IssuesListProps {
  candidate?: CandidateName;
  showTopIssues?: boolean;
  searchQuery?: string;
}

export const IssuesList: React.FC<IssuesListProps> = ({ 
  candidate, 
  showTopIssues = false, 
  searchQuery = '' 
}) => {
  const [selectedCandidate, setSelectedCandidate] = useState<CandidateName | 'both'>(candidate || 'both');
  const [searchTerm, setSearchTerm] = useState(searchQuery);

  // Get issues based on selection
  const getIssues = () => {
    if (selectedCandidate === 'AlexPadilla') {
      return alexPadillaIssues;
    } else if (selectedCandidate === 'AdamSchiff') {
      return adamSchiffIssues;
    } else {
      return [...alexPadillaIssues, ...adamSchiffIssues];
    }
  };

  // Filter issues based on search and top issues preference
  const getFilteredIssues = () => {
    let issues = getIssues();
    
    if (searchTerm) {
      issues = searchIssues(issues, searchTerm);
    }
    
    if (showTopIssues) {
      issues = getTopIssues(issues, 5);
    }
    
    return issues;
  };

  const filteredIssues = getFilteredIssues();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6 space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Candidate Issues</h2>
        
        {/* Candidate Selection */}
        <div className="flex gap-4">
          <button
            onClick={() => setSelectedCandidate('both')}
            className={`px-4 py-2 rounded-lg ${
              selectedCandidate === 'both' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Both Candidates
          </button>
          <button
            onClick={() => setSelectedCandidate('AlexPadilla')}
            className={`px-4 py-2 rounded-lg ${
              selectedCandidate === 'AlexPadilla' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Alex Padilla
          </button>
          <button
            onClick={() => setSelectedCandidate('AdamSchiff')}
            className={`px-4 py-2 rounded-lg ${
              selectedCandidate === 'AdamSchiff' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Adam Schiff
          </button>
        </div>

        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search issues..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Issues List */}
      <div className="space-y-4">
        {filteredIssues.map((issue, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-900">{issue.issue}</h3>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                Priority {issue.priorityRank}
              </span>
            </div>
            
            <p className="text-gray-600 mb-4">{issue.description}</p>
            
            {issue.examples && issue.examples.length > 0 && (
              <div className="mb-4">
                <h4 className="font-medium text-gray-700 mb-2">Examples:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {issue.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex}>{example}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {issue.sources && issue.sources.length > 0 && (
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Sources:</h4>
                <div className="space-y-1">
                  {issue.sources.map((source, sourceIndex) => (
                    <a
                      key={sourceIndex}
                      href={source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm block"
                    >
                      {source}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredIssues.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No issues found matching your criteria.
        </div>
      )}
    </div>
  );
};
