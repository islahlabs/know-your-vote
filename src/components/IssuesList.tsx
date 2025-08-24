import React, { useState } from 'react';
import { 
  adamSchiffIssues, 
  alexPadillaIssues, 
  muslimVoterIssues,
  senatorStances,
  openSecretsAlexPadilla,
  getTopIssues,
  searchIssues
} from '../data';
import { type CandidateName } from '../types';

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
  const [stancesSearchTerm, setStancesSearchTerm] = useState('');

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

      {/* Senator Stances Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Senator Stances Comparison</h2>
        
        {/* Topic Filter */}
        <div className="mb-6 space-y-4">
          <div className="flex gap-4">
            <select 
              onChange={(e) => setStancesSearchTerm(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Topics</option>
              {Array.from(new Set(senatorStances.map(stance => stance.Topic))).map(topic => (
                <option key={topic} value={topic}>{topic}</option>
              ))}
            </select>
            
            <input
              type="text"
              placeholder="Search stances..."
              value={stancesSearchTerm}
              onChange={(e) => setStancesSearchTerm(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Stances List */}
        <div className="space-y-4">
          {senatorStances
            .filter(stance => {
              if (!stancesSearchTerm) return true;
              const searchLower = stancesSearchTerm.toLowerCase();
              return (
                stance.Topic.toLowerCase().includes(searchLower) ||
                stance.Senator.toLowerCase().includes(searchLower) ||
                stance["Stance based on voting records"].toLowerCase().includes(searchLower) ||
                stance["Stance based on public statements"].toLowerCase().includes(searchLower)
              );
            })
            .map((stance, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900">{stance.Topic}</h3>
                <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
                  {stance.Senator}
                </span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-medium text-red-800 mb-2">Voting Record Stance</h4>
                  <p className="text-red-700">{stance["Stance based on voting records"]}</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">Public Statements Stance</h4>
                  <p className="text-blue-700">{stance["Stance based on public statements"]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Campaign Finance Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Campaign Finance - Alex Padilla</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-700">Total Receipts</h3>
              <p className="text-2xl font-bold text-green-600">
                ${(openSecretsAlexPadilla.total_receipts / 1000000).toFixed(1)}M
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-700">Total Disbursements</h3>
              <p className="text-2xl font-bold text-red-600">
                ${(openSecretsAlexPadilla.total_disbursements / 1000000).toFixed(1)}M
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-700">Cash on Hand</h3>
              <p className="text-2xl font-bold text-blue-600">
                ${(openSecretsAlexPadilla.cash_on_hand / 1000000).toFixed(1)}M
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-700">Debt</h3>
              <p className="text-2xl font-bold text-orange-600">
                ${openSecretsAlexPadilla.debt.toLocaleString()}
              </p>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              <span className="font-medium">Party:</span> {openSecretsAlexPadilla.party} | 
              <span className="font-medium"> State:</span> {openSecretsAlexPadilla.state}
            </p>
          </div>
        </div>

        {/* Top Contributors */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Top Contributors</h3>
          <div className="space-y-3">
            {openSecretsAlexPadilla.contributions
              .filter(contribution => contribution.contributor && contribution.contributor.trim() !== '')
              .sort((a, b) => b.amount - a.amount)
              .slice(0, 10)
              .map((contribution, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">{contribution.contributor}</span>
                  <span className="text-green-600 font-semibold">
                    ${contribution.amount.toLocaleString()}
                  </span>
                </div>
              ))}
          </div>
        </div>

        {/* Top Expenditures */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Top Expenditures</h3>
          <div className="space-y-3">
            {openSecretsAlexPadilla.expenditures
              .filter(expenditure => expenditure.recipient && expenditure.recipient.trim() !== '')
              .sort((a, b) => b.amount - a.amount)
              .slice(0, 10)
              .map((expenditure, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                  <div>
                    <span className="font-medium text-gray-700">{expenditure.recipient}</span>
                    {expenditure.purpose && (
                      <p className="text-sm text-gray-500">{expenditure.purpose}</p>
                    )}
                  </div>
                  <span className="text-red-600 font-semibold">
                    ${expenditure.amount.toLocaleString()}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>

      {filteredIssues.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No issues found matching your criteria.
        </div>
      )}
    </div>
  );
};
