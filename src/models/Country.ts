import { Recipe } from "./Recipe";

export type Country = {
  id?: string;
  name: string;
  recipes: Recipe[];
};
