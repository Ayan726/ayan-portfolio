import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="flex flex-col min-h-screen w-full justify-center items-center gap-4 text-white font-poppins"
    >
      <h1 className="text-3xl font-bold text-center">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-xl font-semibold">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
