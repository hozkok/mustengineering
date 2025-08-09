import { Link } from "react-router";

function ErrorComponent() {
  return (
    <div>
      <p>ERÖR</p>
      <Link to={"/"}>go back</Link>
    </div>
  );
}

export default ErrorComponent;
