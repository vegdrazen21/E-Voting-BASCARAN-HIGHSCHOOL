import React, { useState } from "react";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import VotingPage from "./components/VotingPage";

// Sample data (frontend-only demo)
const SAMPLE_POSITIONS = [
  {
    id: "pres",
    title: "President",
    voteNumber: 1,
    candidates: [
      { id: "c1", name: "John Doe", age: 45, gender: "Male", photo: "https://i.pravatar.cc/150?img=12", bio: "Incumbent, focused on sustainability." },
      { id: "c2", name: "Jane Smith", age: 38, gender: "Female", photo: "https://i.pravatar.cc/150?img=47", bio: "Community organizer and educator." }
    ]
  },
  {
    id: "bm",
    title: "Business Manager",
    voteNumber: 2,
    candidates: [
      { id: "c3", name: "Alice Johnson", age: 29, gender: "Female", photo: "https://i.pravatar.cc/150?img=32", bio: "Finance background, aims for transparency." },
      { id: "c4", name: "Jim Brown", age: 54, gender: "Male", photo: "https://i.pravatar.cc/150?img=5", bio: "Experienced operations manager." }
    ]
  }
];

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedVotes, setSelectedVotes] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Handle login
  const handleLogin = (formData) => {
    if (formData.lrn.length === 12 && formData.token.length === 6) {
      setLoggedIn(true);
    } else {
      alert("Invalid LRN or Token. Please try again.");
    }
  };

  // Handle logout
  const handleLogout = () => {
    setLoggedIn(false);
    setSelectedVotes({});
    setSubmitted(false);
  };

  // Handle vote submission
  const handleSubmitVotes = () => {
    setSubmitted(true);
    setTimeout(() => {
      alert("Vote submitted successfully!");
    }, 200);
  };

  return (
    <div className="app-card">
      {!loggedIn ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <>
          <Header electionTitle="Student Election 2025" endDate="May 23, 2025, 11:59 PM" />
          <VotingPage
            positions={SAMPLE_POSITIONS}
            selectedVotes={selectedVotes}
            onChange={setSelectedVotes}
            onSubmit={handleSubmitVotes}
            onLogout={handleLogout}
            disabled={submitted}
          />
          {submitted && (
            <div style={{ marginTop: 12, color: "#0f5132", fontWeight: 600 }}>
              Thank you, your votes were recorded.
            </div>
          )}
        </>
      )}
    </div>
  );
}
