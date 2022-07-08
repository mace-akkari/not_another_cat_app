const Card = ({ cat }) => {
  console.log("key:", cat);
  return (
    <div>
      {cat.map((data) => (
        <div key={data.id} className="card_container">
          {
            data.breeds.map((breed) => (
              // make this a table
              <div>
                <img src={data.url} alt="cat pic" />
                <h3>I come from the {breed.name} family</h3>
                <h4> I weigh {breed.weight.metric} kg</h4>
                <h4>About me: {breed.description}</h4>
                {/* make it a terary operator */}
                <h4>My temperament(s): {breed.temperament}</h4>
              </div>
            ))[0]
          }
        </div>
      ))}
    </div>
  );
};
export default Card;
