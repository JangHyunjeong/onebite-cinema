import { useRouter } from "next/router";

export default function Movie() {
  const router = useRouter();
  const { id = "" } = router.query;

  return (
    <>
      <h2>{id} 영화 상세 페이지</h2>
    </>
  );
}
