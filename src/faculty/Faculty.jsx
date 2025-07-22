import useQuery from "../api/useQuery";

export default function Faculty() {
  const { data: faculty, loading, error } = useQuery("/faculty", "faculty");
  if (loading || !faculty) return <p>Loading...</p>;
  if (error) return <p>Sorry! {error}</p>;
  console.log(faculty);

  return (
    <>
      <h1>Faculty</h1>
    </>
  );
}
