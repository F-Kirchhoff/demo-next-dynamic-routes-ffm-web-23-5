import Link from "next/link";
import { movies } from "../../lib/data";
import { useRouter } from "next/router";

export default function Movie() {
  const router = useRouter();

  const currentSlug = router.query.movieName;

  const currentMovie = movies.find((movie) => movie.slug === currentSlug);

  const currentIndex = movies.findIndex((movie) => movie.slug === currentSlug);
  const nextMovieSlug = movies[(currentIndex + 1) % movies.length].slug;

  if (!currentMovie) {
    return <h1>This movie doesn't exist</h1>;
  }

  const { title, description, year } = currentMovie;

  return (
    <>
      <h1>
        {title} <small>{year}</small>
      </h1>
      <p>{description}</p>
      <Link href="/movies">← Back to all movies</Link>
      <br />
      <Link href={`/movies/${nextMovieSlug}`}>next movie</Link>
    </>
  );
}
