import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/pricing">Pricing</Link>
    </div>
  );
}

export default Homepage;
