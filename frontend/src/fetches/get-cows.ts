import { Cow } from "../types/cow.type";

export const getCowsFetch = (): Promise<Cow[]> => {
  return fetch("http://localhost:3000/cows").then((response) =>
    response.json()
  );
};
