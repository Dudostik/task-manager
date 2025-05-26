export type Note = {
  id: number;
  title: string;
  content: string;
};

export const initialNotes: Note[] = [
  { id: 1, title: "Покупки", content: "Купить хлеб, молоко и сыр" },
  { id: 2, title: "Работа", content: "Закончить задачу по проекту" },
  { id: 3, title: "Идеи", content: "Приложение для учёта привычек" },
];
