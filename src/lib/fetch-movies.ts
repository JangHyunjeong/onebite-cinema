import { MovieDataType } from "@/type";

export default async function fetchMovies(
  q?: string
): Promise<MovieDataType[]> {
  let url = `https://onebite-cinema-api-phi.vercel.app/movie`;
  if (q) {
    url += `/search?q=${q}`;
  }
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error();
    return await response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}
