import { useRouter } from "next/router";
import SearchableLayout from "../components/searchable-layout";
import { ReactNode } from "react";
import MovieItem from "../components/movie-item";
import movieData from "@/mock/dummy.json";
import style from "./index.module.css";

export default function Search() {
  const router = useRouter();
  const { q } = router.query;
  const movies =
    (movieData || []).filter(({ title }) => title?.includes(q)) || [];
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
