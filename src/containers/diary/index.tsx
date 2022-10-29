import { Path } from "@boxfox/next-utils";

export default function DiaryPage() {
  const id = Path.get("id");

  return (
    <iframe
      src={`https://master.dplfe2jat1ig2.amplifyapp.com/diary/${id}`}
      style={{ flex: 1, minHeight: "100vh", width: "100%" }}
    />
  );
}
