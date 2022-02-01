export type DragonType = {
  createdAt: Date | string;
  name: string;
  type: string;
  histories: string | string[];
  id: string;
};

export type DragonsType = DragonType[];
