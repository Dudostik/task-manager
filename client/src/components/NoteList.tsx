import { useState } from "react";
import { initialNotes, Note } from "../data/notes";
import { NoteCard } from "./NoteCard";
import { NoteForm } from "./NoteForm";
import styles from "./styles/NoteListStyle.module.css";

export const NoteList = () => {
  const [notes, setNotes] = useState<Note[]>(initialNotes);
  const [editingNote, setEditingNote] = useState<Note | null>(null);

  const handleAddNote = (title: string, content: string) => {
    if (editingNote) {
      setNotes(
        notes.map((note) =>
          note.id === editingNote.id ? { ...note, title, content } : note
        )
      );
      setEditingNote(null);
    } else {
      const newNote: Note = {
        id: Math.max(0, ...notes.map((n) => n.id)) + 1,
        title,
        content,
      };
      setNotes([...notes, newNote]);
    }
  };

  const handleDeleteNote = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className={styles.container}>
      <h1>Мои заметки</h1>
      <NoteForm
        onSubmit={handleAddNote}
        initialData={editingNote || undefined}
        onCancel={editingNote ? () => setEditingNote(null) : undefined}
        isEditing={editingNote != null}
      />

      {/* Убираем лишнюю обертку и оставляем только notesGrid */}
      <div className={styles.notesGrid}>
        {notes.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            onDelete={handleDeleteNote}
            onEdit={setEditingNote}
          />
        ))}
      </div>
    </div>
  );
};
