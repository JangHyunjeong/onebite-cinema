import React, { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import style from "./searchable-layout.module.css";

export default function SearchableLayout({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const { q } = router.query;
  const [search, setSearch] = useState("");
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    const value = Array.isArray(q) ? q[0] || "" : q || "";
    setSearch(value);
  }, [q]);

  const onSubmit = () => {
    if (q === search || !search) return;
    router.push(`/search?q=${search}`);
  };
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onSubmit();
  };
  return (
    <>
      <div className={style.container}>
        <input
          type="text"
          onChange={onChangeSearch}
          value={search}
          placeholder="검색어를 입력하세요"
          onKeyDown={onKeyDown}
        />
        <button type="button" onClick={onSubmit}>
          검색
        </button>
      </div>
      {children}
    </>
  );
}
