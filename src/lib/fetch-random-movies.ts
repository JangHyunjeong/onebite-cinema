import { MovieDataType } from "@/type";

export default async function fetchRandomMovies(): Promise<MovieDataType[]> {
  const url = `https://onebite-cinema-api-phi.vercel.app/movie/random`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error();
    return await response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}
