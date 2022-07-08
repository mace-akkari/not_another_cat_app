const DropDownMenu = ({ breeds }) => {
  return (
    <div className="drop_down">
      <select>
        <option> 🐱 - Select a breed - 🐱 </option>
        {breeds.map((breed) => (
          <option key={breed.id} value={breed.value}>
            {breed.breeds[0].name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default DropDownMenu;
