// "use client"
// import React, { useState } from 'react';

// const RenderContent = () => {
//     const [walletConnected, setWalletConnected] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const [candidates, setCandidates] = useState([]);
//     const [electionState, setElectionState] = useState(null);
//     const [userRole, setUserRole] = useState(null);
//     const [newCandidateName, setNewCandidateName] = useState("");
//     const [voterAddress, setVoterAddress] = useState("");
//     const [selectedCandidateId, setSelectedCandidateId] = useState("");

//     const startElection = () => { /* Your implementation */ };
//     const endElection = () => { /* Your implementation */ };
//     const addCandidate = () => { /* Your implementation */ };
//     const addVoter = () => { /* Your implementation */ };
//     const removeCandidate = (id) => { /* Your implementation */ };
//     const removeVoter = (address) => { /* Your implementation */ };
//     const vote = () => { /* Your implementation */ };

//     return (
//         <div className="space-y-6">
//             <div className="bg-white shadow-md rounded p-4">
//                 <p className="text-lg font-semibold text-gray-700">Wallet connected</p>
//                 <p className="text-lg text-gray-700">Election State: <span className="font-bold">{electionState}</span></p>
//                 <p className="text-lg text-gray-700">Your Role: <span className="font-bold">{userRole === 1 ? "Owner" : userRole === 2 ? "Voter" : "Non-voter"}</span></p>
//             </div>

//             {userRole === 1 && (
//                 <div className="bg-white shadow-md rounded p-4 space-y-4">
//                     <h2 className="text-xl font-bold text-gray-700">Owner Actions:</h2>
//                     <button
//                         onClick={startElection}
//                         disabled={electionState !== "Not Started"}
//                         className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-200 disabled:opacity-50"
//                     >
//                         Start Election
//                     </button>
//                     <button
//                         onClick={endElection}
//                         disabled={electionState !== "In Progress"}
//                         className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-200 disabled:opacity-50"
//                     >
//                         End Election
//                     </button>
//                     <div className="space-y-2">
//                         <input
//                             type="text"
//                             value={newCandidateName}
//                             onChange={(e) => setNewCandidateName(e.target.value)}
//                             placeholder="New Candidate Name"
//                             className="border p-2 rounded w-full"
//                         />
//                         <button onClick={addCandidate} className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-200">
//                             Add Candidate
//                         </button>
//                     </div>
//                     <div className="space-y-2">
//                         <input
//                             type="text"
//                             value={voterAddress}
//                             onChange={(e) => setVoterAddress(e.target.value)}
//                             placeholder="Voter Address"
//                             className="border p-2 rounded w-full"
//                         />
//                         <button onClick={addVoter} className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-200">
//                             Add Voter
//                         </button>
//                     </div>
//                     <div className="space-y-2">
//                         <input
//                             type="text"
//                             value={selectedCandidateId}
//                             onChange={(e) => setSelectedCandidateId(e.target.value)}
//                             placeholder="Candidate ID to Remove"
//                             className="border p-2 rounded w-full"
//                         />
//                         <button onClick={() => removeCandidate(selectedCandidateId)} className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-200">
//                             Remove Candidate
//                         </button>
//                     </div>
//                     <div className="space-y-2">
//                         <input
//                             type="text"
//                             value={voterAddress}
//                             onChange={(e) => setVoterAddress(e.target.value)}
//                             placeholder="Voter Address to Remove"
//                             className="border p-2 rounded w-full"
//                         />
//                         <button onClick={() => removeVoter(voterAddress)} className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-200">
//                             Remove Voter
//                         </button>
//                     </div>
//                 </div>
//             )}

//             {userRole === 2 && electionState === "In Progress" && (
//                 <div className="bg-white shadow-md rounded p-4 space-y-4">
//                     <h2 className="text-xl font-bold text-gray-700">Vote:</h2>
//                     <select
//                         value={selectedCandidateId}
//                         onChange={(e) => setSelectedCandidateId(e.target.value)}
//                         className="border p-2 rounded w-full"
//                     >
//                         <option value="">Select a candidate</option>
//                         {candidates.map((candidate) => (
//                             <option key={candidate.id} value={candidate.id}>
//                                 {candidate.name}
//                             </option>
//                         ))}
//                     </select>
//                     <button onClick={vote} className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-200">
//                         Vote
//                     </button>
//                 </div>
//             )}
//             <div className="bg-white shadow-md rounded p-4">
//                 <h2 className="text-xl font-bold text-gray-700 mb-4">Candidates:</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                     {candidates.map((candidate) => (
//                         <div key={candidate.id} className="border p-4 rounded shadow-sm">
//                             <p className="text-lg font-semibold text-gray-700">{candidate.name}</p>
//                             <p className="text-md text-gray-600">Votes: {candidate.voteCount}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// const Result = () => {
//     return (
//         <div>
//             <div className="container mx-auto p-6">
//                 <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Election Dapp</h1>
//                 <RenderContent />
//             </div>
//         </div>
//     );
// };

// export default Result;




"use client"
import React, { useState } from 'react';

const RenderContent = () => {
    const [walletConnected, setWalletConnected] = useState(true); // Simulate wallet connected
    const [loading, setLoading] = useState(false);
    const [candidates, setCandidates] = useState([
        { id: 1, name: 'Candidate 1', voteCount: 10 },
        { id: 2, name: 'Candidate 2', voteCount: 20 }
    ]); // Add some dummy candidates
    const [electionState, setElectionState] = useState("Not Started"); 
    const [userRole, setUserRole] = useState(1); // 1 for Owner, 2 for Voter, for testing
    const [newCandidateName, setNewCandidateName] = useState("");
    const [voterAddress, setVoterAddress] = useState("");
    const [selectedCandidateId, setSelectedCandidateId] = useState("");

    const startElection = () => { /* Your implementation */ };
    const endElection = () => { /* Your implementation */ };
    const addCandidate = () => { /* Your implementation */ };
    const addVoter = () => { /* Your implementation */ };
    const removeCandidate = (id) => { /* Your implementation */ };
    const removeVoter = (address) => { /* Your implementation */ };
    const vote = () => { /* Your implementation */ };

    return (
        <div className="space-y-6">
            <div className="bg-white shadow-md rounded p-4">
                <p className="text-lg font-semibold text-gray-700">Wallet connected</p>
                <p className="text-lg text-gray-700">Election State: <span className="font-bold">{electionState}</span></p>
                <p className="text-lg text-gray-700">Your Role: <span className="font-bold">{userRole === 1 ? "Owner" : userRole === 2 ? "Voter" : "Non-voter"}</span></p>
            </div>

            {userRole === 1 && (
                <div className="bg-white shadow-md rounded p-4 space-y-4">
                    <h2 className="text-xl font-bold text-gray-700">Owner Actions:</h2>
                    <button
                        onClick={startElection}
                        disabled={electionState !== "Not Started"}
                        className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-200 disabled:opacity-50"
                    >
                        Start Election
                    </button>
                    <button
                        onClick={endElection}
                        disabled={electionState !== "In Progress"}
                        className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-200 disabled:opacity-50"
                    >
                        End Election
                    </button>
                    <div className="space-y-2">
                        <input
                            type="text"
                            value={newCandidateName}
                            onChange={(e) => setNewCandidateName(e.target.value)}
                            placeholder="New Candidate Name"
                            className="border p-2 rounded w-full"
                        />
                        <button onClick={addCandidate} className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-200">
                            Add Candidate
                        </button>
                    </div>
                    <div className="space-y-2">
                        <input
                            type="text"
                            value={voterAddress}
                            onChange={(e) => setVoterAddress(e.target.value)}
                            placeholder="Voter Address"
                            className="border p-2 rounded w-full"
                        />
                        <button onClick={addVoter} className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-200">
                            Add Voter
                        </button>
                    </div>
                    <div className="space-y-2">
                        <input
                            type="text"
                            value={selectedCandidateId}
                            onChange={(e) => setSelectedCandidateId(e.target.value)}
                            placeholder="Candidate ID to Remove"
                            className="border p-2 rounded w-full"
                        />
                        <button onClick={() => removeCandidate(selectedCandidateId)} className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-200">
                            Remove Candidate
                        </button>
                    </div>
                    <div className="space-y-2">
                        <input
                            type="text"
                            value={voterAddress}
                            onChange={(e) => setVoterAddress(e.target.value)}
                            placeholder="Voter Address to Remove"
                            className="border p-2 rounded w-full"
                        />
                        <button onClick={() => removeVoter(voterAddress)} className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-200">
                            Remove Voter
                        </button>
                    </div>
                </div>
            )}

            {userRole === 2 && electionState === "In Progress" && (
                <div className="bg-white shadow-md rounded p-4 space-y-4">
                    <h2 className="text-xl font-bold text-gray-700">Vote:</h2>
                    <select
                        value={selectedCandidateId}
                        onChange={(e) => setSelectedCandidateId(e.target.value)}
                        className="border p-2 rounded w-full"
                    >
                        <option value="">Select a candidate</option>
                        {candidates.map((candidate) => (
                            <option key={candidate.id} value={candidate.id}>
                                {candidate.name}
                            </option>
                        ))}
                    </select>
                    <button onClick={vote} className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-200">
                        Vote
                    </button>
                </div>
            )}
            <div className="bg-white shadow-md rounded p-4">
                <h2 className="text-xl font-bold text-gray-700 mb-4">Candidates:</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {candidates.map((candidate) => (
                        <div key={candidate.id} className="border p-4 rounded shadow-sm">
                            <p className="text-lg font-semibold text-gray-700">{candidate.name}</p>
                            <p className="text-md text-gray-600">Votes: {candidate.voteCount}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Result = () => {
    return (
        <div>
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Election Dapp</h1>
                <RenderContent />
            </div>
        </div>
    );
};

export default Result;
