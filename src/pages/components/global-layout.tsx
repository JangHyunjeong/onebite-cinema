import Link from "next/link";
import { ReactNode } from "react";
import style from "./global-layout.module.css";

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <Link href="/">ONEBITE CINEMA</Link>
      </header>
      <main className={style.main}>
        <div>{children}</div>
      </main>
      <footer className={style.footer}>@lulullu</footer>
    </div>
  );
}
