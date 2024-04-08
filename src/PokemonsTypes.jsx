import { useEffect, useState } from "react";

const PokemonsTypes = () => {
  const [typesFromApi, setTypesFromApi] = useState(null);

  // UseEffect permet de préciser quand executer une fonctionnalité
  // Soit au premier chargement du composant avec [] en second parametre
  // soit à chaque chargement du composant si on ne met pas de second parametre
  // soit quand certaines variables changes (à voir plus tard)
  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/types")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTypesFromApi(data);
      });
  }, []);

  console.log("render");

  return (
    <section>
      <h2>Les types de pokemons :</h2>

      {typesFromApi ? (
        <>
          {typesFromApi.map((type) => {
            return (
              <article>
                <p>{type.name}</p>
              </article>
            );
          })}
        </>
      ) : (
        <p>En cours de chargement</p>
      )}
    </section>
  );
};

export default PokemonsTypes;
