import Link from "next/link";
import { movies } from "@/lib/data";

export default function Movies() {
  return (
    <>
      <h1>List of Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.slug}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
