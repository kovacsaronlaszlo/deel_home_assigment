import { mockData } from "../data/data";
import { Car } from "../types/types";

export const fetchSuggestions = async (input: string): Promise<Car[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          mockData.filter((item) =>
            item.name.toLowerCase().includes(input.toLowerCase())
          )
        );
      }, 500);
    });
  };
  