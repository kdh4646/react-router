/*
    Link:

    1. Render <a> element
    2. Listens clicks for the element
    3. Prevents the brower default sending a http request
    4. Update the pages accordingly, load the contents
*/
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  //switch to another route
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/products");
  };

  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="/products">the list of products</Link>.
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
};

export default HomePage;
