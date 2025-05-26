import { Note } from "../data/notes.ts";
import styles from "./styles/NoteCardStyle.module.css";

export const NoteCard = (props: {
  note: Note;
  onDelete: (id: number) => void;
  onEdit: (note: Note) => void;
}) => {
  const { note, onDelete, onEdit } = props;

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{note.title}</h3>
      <p className={styles.content}>{note.content}</p>
      <div className={styles.actions}>
        <button
          className={`${styles.button} ${styles.editButton}`}
          onClick={() => onEdit(note)}
        >
          Редактировать
        </button>
        <button
          className={`${styles.button} ${styles.deleteButton}`}
          onClick={() => onDelete(note.id)}
        >
          Удалить
        </button>
      </div>
    </div>
  );
};
