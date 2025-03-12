// AddNoteForm.jsx
import React, { useState } from "react";

export default function AddNoteForm({ onAdd }) {
  const [note, setNote] = useState({ title: "", content: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(note);
    setNote({ title: "", content: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Titre"
        value={note.title}
        onChange={handleChange}
      />
      <hr />
      <textarea
        name="content"
        placeholder="Prendre note"
        rows="3"
        value={note.content}
        onChange={handleChange}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}