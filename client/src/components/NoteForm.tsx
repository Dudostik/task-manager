import { useState, useEffect } from "react";
import { Note } from "../data/notes.ts";
import styles from "./styles/NoteFormStyle.module.css";

export const NoteForm = (props: {
  onSubmit: (title: string, content: string) => void;
  onCancel?: () => void;
  initialData?: Note;
  isEditing?: boolean;
}) => {
  const { onSubmit, onCancel, initialData, isEditing = false } = props;

  const [title, setTitle] = useState(initialData?.title || "");
  const [content, setContent] = useState(initialData?.content || "");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setContent(initialData.content);
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputGroup}>
        <label className={styles.label} htmlFor="title">
          Заголовок:
        </label>
        <input
          id="title"
          type="text"
          className={styles.input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className={styles.inputGroup}>
        <label className={styles.label} htmlFor="content">
          Содержание:
        </label>
        <textarea
          id="content"
          className={styles.textarea}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <div className={styles.formActions}>
        <button type="submit" className={styles.submitButton}>
          {isEditing ? "Обновить заметку" : "Добавить заметку"}
        </button>
        {isEditing && onCancel && (
          <button
            type="button"
            className={styles.cancelButton}
            onClick={onCancel}
          >
            Отмена
          </button>
        )}
      </div>
    </form>
  );
};
