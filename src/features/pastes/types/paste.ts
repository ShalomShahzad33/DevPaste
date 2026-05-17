export type Paste = {
  id: string;
  title: string;
  content: string;
};

export type CreatePasteType = Omit<Paste, "id">;
