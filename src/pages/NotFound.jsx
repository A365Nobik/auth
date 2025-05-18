import { Link } from "react-router";
export default function NotFound() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2 bg-white text-black p-3 rounded-2xl">
        <h1>Page Not Found!</h1>
        <span className="border-solid border-2 p-1 rounded-md">
          <Link
            className=" hover:border-b-1"
            to={"/home"}
          >
            Home
          </Link>
        </span>
      </div>
    </>
  );
}
