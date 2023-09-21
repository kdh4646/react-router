/*
    Link:

    1. Render <a> element
    2. Listens clicks for the element
    3. Prevents the brower default sending a http request
    4. Update the pages accordingly, load the contents
*/
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="/products">the list of products</Link>.
      </p>
    </>
  );
};

export default HomePage;
