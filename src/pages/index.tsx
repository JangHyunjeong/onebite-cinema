import { ReactNode } from "react";
import SearchableLayout from "./components/searchable-layout";
import style from "./index.module.css";
import MovieItem from "./components/movie-item";
import { InferGetStaticPropsType } from "next";
import fetchMovies from "@/lib/fetch-movies";
import fetchRandomMovies from "@/lib/fetch-random-movies";

export const getStaticProps = async () => {
  const [allMovies, randomMovies] = await Promise.all([
    fetchMovies(),
    fetchRandomMovies(),
  ]);

  return {
    props: {
      allMovies,
      randomMovies,
    },
    revalidate: 3,
  };
};

export default function Home({
  allMovies,
  randomMovies,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <div className={style.container}>
        <h2 className={style.title}>지금 가장 추천하는 영화</h2>
        <div
          className={style.movieList}
          style={{ "--items-per-row": "3" } as React.CSSProperties}
        >
          {randomMovies?.map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </div>
      </div>

      <div className={style.container}>
        <h2 className={style.title}>등록된 모든 영화</h2>
        <div
          className={style.movieList}
          style={{ "--items-per-row": "5" } as React.CSSProperties}
        >
          {allMovies?.map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
