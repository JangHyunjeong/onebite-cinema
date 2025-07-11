import Link from "next/link";
import style from "./movie-item.module.css";
import type { MovieDataType } from "@/type";

export default function MovieItem({ id, title, posterImgUrl }: MovieDataType) {
  return (
    <div className={style.container}>
      <Link href={`/movie/${id}`}>
        <img src={posterImgUrl} alt={title} />
        <p className={style.title}>{title}</p>
      </Link>
    </div>
  );
}
