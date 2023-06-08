import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>NotFound</h1>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default NotFound;
