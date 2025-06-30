import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import style from "./[id].module.css";
import fetchMovie from "@/lib/fetch-movie";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context.params!.id;
  const movie = await fetchMovie(Number(id));

  return {
    props: {
      movie,
    },
  };
};

export default function Movie({
  movie,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!movie) return <>조회된 결과가 없습니다.</>;

  const {
    posterImgUrl,
    title,
    releaseDate,
    runtime,
    company,
    subTitle,
    description,
  } = movie;

  return (
    <>
      <div
        className={style.thumbWrap}
        style={
          {
            "--poster-img-url": `url(${posterImgUrl})`,
          } as React.CSSProperties
        }
      >
        <img src={posterImgUrl} alt={title} />
      </div>
      <div className={style.content}>
        <p className={style.title}>{title}</p>
        <div className={style.infos}>
          <p>
            {releaseDate} / {releaseDate} / {runtime}분
          </p>
          <p>{company}</p>
        </div>

        <p className={style.subTitle}>{subTitle}</p>
        <p className={style.desc}>{description}</p>
      </div>
    </>
  );
}
