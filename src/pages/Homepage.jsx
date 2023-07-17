import { Link } from "react-router-dom";
import PageNave from "../components/PageNave";
import AppNav from "../components/AppNav";

function Homepage() {
  return (
    <div>
      <PageNave />
      <AppNav />
      <h1>Home</h1>
      <Link to="/app">Go to the app</Link>
    </div>
  );
}

export default Homepage;
