import { useState, useContext, createContext } from "react";
import data from "./data";
import List from "./List";

export const NavBarContext = createContext();

export const useAppContext = () => useContext(NavBarContext);

const App = () => {
  // const { id, name, age, image } = data[0];
  const [people, setPeople] = useState(data);

  const clearAll = () => {
    setPeople([]);
  };

  const clearItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const resetData = () => {
    setPeople(data);
  };

  return (
    <NavBarContext.Provider value={{ clearItem }}>
      <section className="container">
        <h3>{people.length} Birthdays Today </h3>
        <List people={people} />

        {people.length < 1 ? (
          <button className="btn btn-block" btn-block onClick={resetData}>
            Reset
          </button>
        ) : (
          <button className="btn btn-block" onClick={clearAll}>
            Clear All
          </button>
        )}
      </section>
    </NavBarContext.Provider>
  );
};
export default App;
