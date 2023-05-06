import Pet from "./Pet";

const Results = ({ pets }) => {
  if (pets.length === 0) {
    return <h1>No pets found</h1>;
  } else {
    return pets.map((pet) => {
      return (
        <Pet
          key={pet.id}
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
        />
      );
    });
  }
};

export default Results;
