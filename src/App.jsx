// App.jsx
import { useState, useEffect } from "react";
import Header from "./components/Headr";
import Notes from "./components/Notes";
import AddNoteForm from "./components/AddNoteForm";
import './App.css';

export default function App() {
  const [notes, setNotes] = useState([]);

  // Chargement initial
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) setNotes(savedNotes);
  }, []);

  // Sauvegarde des notes
  useEffect(() => {
    if (notes.length > 0){
    localStorage.setItem("notes", JSON.stringify(notes));
    }
  }, [notes]);

  const addNote = (newNote) => {
    setNotes(prev => [...prev, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(prev => prev.filter((_, index) => index !== id));
  };

  return (
    <div>
      <Header />
      <AddNoteForm onAdd={addNote} />
      <div className="notes-container">
        {notes.map((note, index) => (
          <Notes
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        ))}
      </div>
    </div>
  );
}