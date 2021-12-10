// Import Our Components
import AllPosts from "./pages/AllPosts";
import SinglePost from "./pages/SinglePost";
import Form from "./pages/Form";
import AboutPost from "./pages/AboutPost";
import Guide from "./pages/Guide";


// Import Hooks from React
import { useState, useEffect } from "react";

// Import Router 6 Component (Route -> Route, Switch -> Routes)
import { Route, Routes, Link, useNavigate } from "react-router-dom";

function App() {
  ///////////////////////////
  // State and Other Variables
  ///////////////////////////

  const navigate = useNavigate();

  const url = "https://plants-scrapbook-backend.herokuapp.com/plants/";

  // state to hold list of plants
  const [posts, setPosts] = useState([]);

  // an empty plant for initializing the create form
  const nullPlant = {
    name: "",
    description: "",
    image: "",
  };

  const [targetPlant, setTargetPlant] = useState(nullPlant);

  //////////////////////////////////////////
  // Functions
  //////////////////////////////////////////

  // function to get list of plants from API
  const getPlants = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPosts(data);
  };

  // function to add plants
  const addPlants = async (newPlant) => {
    await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    });

    //update the list of plants
    getPlants();
  };

  // to select a plant to edit
  const getTargetPlant = (plant) => {
    setTargetPlant(plant);
    navigate("/edit");
  };

  // update plant for our handlesubmit prop
  const updatePlant = async (plant) => {
    await fetch(url + plant.id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plant),
    });

    //update our plant
    getPlants();
  };

  const deletePlant = async (plant) => {
    await fetch(url + plant.id, {
      method: "delete",
    });

    getPlants();
    navigate("/");
  };

  //////////////////////////////////////////
  // useEffects
  //////////////////////////////////////////

  useEffect(() => {
    getPlants();
  }, []);

  //////////////////////////////////////////
  // Returned JSX
  //////////////////////////////////////////

  return (
    <div>
      <Link to="/">
        <h1 className="Title">My Plant Scrapbook</h1>
      </Link>
      <div className="header">
        
      <Link to="/new">
        <h1 className="plant-link">Plant</h1>
      </Link>

      <Link to="/zodiac">
        <h1 className="plant-link">Zodiac</h1>
      </Link>

      <Link to="/guide">
        <h1 className="plant-link">Guide</h1>
      </Link>

      </div>
      <Routes>
        <Route path="/" element={<AllPosts posts={posts} />} />
        <Route
          path="/post/:id"
          element={
            <SinglePost
              posts={posts}
              edit={getTargetPlant}
              deletePlant={deletePlant}
            />
          }
        />
        <Route
          path="/new"
          element={
            <Form
              initialPlant={nullPlant}
              handleSubmit={addPlants}
              buttonLabel="Create Plant"
            />
          }
        />
        <Route
          path="/edit"
          element={
            <Form
              initialPlant={targetPlant}
              handleSubmit={updatePlant}
              buttonLabel="Update Plant"
            />
          }
        />
        <Route
          path="/zodiac"
          element={
            <AboutPost
            />
          }
        />
        <Route
          path="/guide"
          element={
            <Guide
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
