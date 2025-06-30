import { MovieDataType } from "@/type";

export default async function fetchMovie(
  id: number
): Promise<MovieDataType | null> {
  const url = `https://onebite-cinema-api-phi.vercel.app/movie/${id}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error();
    return await response.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}
