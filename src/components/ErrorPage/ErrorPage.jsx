import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {/* <p>
        <i>{error.statusText || error.message}</i>
      </p> */}
      <Link to="/">
        <button className="btn btn-success">Go Back To Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
