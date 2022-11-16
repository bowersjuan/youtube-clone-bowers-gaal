import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <Link to={"/"}>
        <h3>404 Sorry!, There was an error. Click to return Home</h3>
      </Link>
    </div>
  );
};
export default Error;
