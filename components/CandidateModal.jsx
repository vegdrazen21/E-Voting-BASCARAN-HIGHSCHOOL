import React from "react";

export default function CandidateModal({ candidate, onClose }){
  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <h5 style={{margin:0}}>{candidate.name}</h5>
          <button className="btn btn-sm btn-outline-secondary" onClick={onClose}>Close</button>
        </div>
        <hr />
        <div style={{display:"flex", gap:16, alignItems:"flex-start"}}>
          <img src={candidate.photo} alt={candidate.name} style={{width:96, height:96, borderRadius:12, objectFit:"cover"}} />
          <div>
            <div style={{fontWeight:600}}>{candidate.age} • {candidate.gender}</div>
            <p style={{marginTop:10, color:"var(--muted)"}}>{candidate.bio || "No additional info provided."}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const overlayStyle = {
  position: "fixed",
  inset: 0,
  background: "rgba(10,15,25,0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1200
};

const modalStyle = {
  width: "420px",
  background: "#fff",
  borderRadius: 12,
  padding: 18,
  boxShadow: "0 10px 40px rgba(2,6,23,0.3)"
};
