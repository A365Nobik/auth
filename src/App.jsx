import { Routes, Route, } from "react-router";
import SignIn from "./pages/sign-in/SignIn";
import SignUp from "./pages/sign-up/SignUp"
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
}
