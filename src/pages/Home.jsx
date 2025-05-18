import { Link } from "react-router";
export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2 bg-white p-2 rounded-2xl">
        <h1>Welcome!</h1>
        <h3>To continue please Sign In</h3>
        <span className="border-solid border-2 p-1 rounded-md">
          <Link
            className="text-sm text-gray-700 border-solid hover:border-b-1"
            to={"/sign-in"}
          >
            Sign In
          </Link>
        </span>
      </div>
    </>
  );
}
