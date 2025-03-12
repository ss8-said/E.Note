// Note.jsx
import React from "react";

export default function Notes({ id, title, content, onDelete }) {
    const handleClick = () => onDelete(id);
    
    return (
      <div className="note">
        <h1>{title}</h1>
        <hr />
        <p>{content}</p>
        <span className="material-symbols-outlined" onClick={handleClick}>
          delete
        </span>
      </div>
    );
  }

