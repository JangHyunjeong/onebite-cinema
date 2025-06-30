import { useRouter } from "next/router";
import style from "./[id].module.css";
import movieData from "@/mock/dummy.json";
import type { MovieDataType } from "@/type";

export default function Movie() {
  const router = useRouter();
  const { id } = router.query;
  const movie = (movieData as MovieDataType[]).find(
    (item) => String(id) === String(item.id)
  );

  if (!movie) return <>데이터 오류!</>;
  else {
    return (
      <>
        <div
          className={style.thumbWrap}
          style={
            {
              "--poster-img-url": `url(${movie.posterImgUrl})`,
            } as React.CSSProperties
          }
        >
          <img src={movie.posterImgUrl} alt={movie.title} />
        </div>
        <div className={style.content}>
          <p className={style.title}>{movie.title}</p>
          <div className={style.infos}>
            <p>
              {movie.releaseDate} / {movie.genres} / {movie.runtime}분
            </p>
            <p>{movie.company}</p>
          </div>

          <p className={style.subTitle}>{movie.subTitle}</p>
          <p className={style.desc}>{movie.description}</p>
        </div>
      </>
    );
  }
}
