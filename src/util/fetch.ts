import { Car } from "../types/types";

export const fetchSuggestions = async (input: string): Promise<Car[]> => {
  if (!input) return [];

  const response = await fetch(
    `http://localhost:3000/cars?name=${encodeURIComponent(input)}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
