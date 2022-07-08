import { useState, useEffect } from "react";
import Card from "./Card";
import DropDownMenu from "./DropDownMenu";
import Loader from "./Loader";

const ApiKey = `97e3e826-9d2a-4145-8250-38c1fecf54cd`;
const BENG = "beng";
const URL = `https://api.thecatapi.com/v1/images/search?breed_id=${BENG}`;
//const URL = `https://api.thecatapi.com/images/search?breed_id=${selected_breed.id}`; // pass breed.id as a param

const catData = async () => {
  try {
    const response = await fetch(URL, {
      headers: {
        "x-api-key": ApiKey,
      },
    });

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    alert(
      "There has been an error with your request. Please refresh your browser and try again."
    );
  }
};

const Cats = () => {
  const [cat, setCat] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setCat(await catData());
      setLoading(false);
    })();
  }, []);
  if (loading) return <Loader />;
  if (!cat) return <h2>No Cats Found</h2>;

  return (
    <div>
      <h2 className="screen_header">I'm So Pawsome </h2>
      <Card cat={cat} />
      <DropDownMenu breeds={cat} />
      <button
        onClick={async () => {
          setLoading(true);
          setCat(await catData());
          setLoading(false);
        }}
      >
        here
      </button>
    </div>
  );
};

export default Cats;
