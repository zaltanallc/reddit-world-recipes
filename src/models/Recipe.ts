import { Tag } from "./Tag";

export type Recipe = {
  name: string;
  count: number;
  description: string;
  tags: Tag[];
};
