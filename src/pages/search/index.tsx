import SearchableLayout from "../components/searchable-layout";
import { ReactNode } from "react";
import MovieItem from "../components/movie-item";
import style from "./index.module.css";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import fetchMovies from "@/lib/fetch-movies";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { q } = context.query;
  const movies = await fetchMovies(q as string);

  return {
    props: {
      movies,
    },
  };
};

export default function Search({
  movies,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <div>
        <div
          className={style.movieList}
          style={{ "--items-per-row": "3" } as React.CSSProperties}
        >
          {movies.map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    </>
  );
}

Search.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
