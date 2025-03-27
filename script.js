async function getChefBirthday(id) {
  try {
    // Recupero la ricetta
    const rispostaRicetta = await fetch(`https://dummyjson.com/recipes/${id}`);
    const ricetta = await rispostaRicetta.json();
    if (!ricetta.userId) throw new Error("ID utente non trovato nella ricetta");

    // Estrazione userId dalla ricetta
    const userId = ricetta.userId;

    // Recupero le informazioni dello chef
    const chefResponse = await fetch(`https://dummyjson.com/users/${userId}`);
    const chef = await chefResponse.json();
    if (!chef.birthDate) throw new Error("Data di nascita non trovata per lo chef");

    // Restituisco la data di nascita dello chef
    return chef.birthDate;
  } catch (error) {
    console.error(error.message);
    throw new Error("Errore nel recupero dei dati: ", error.message);
  }
}

getChefBirthday(1)
  .then(birthDate => console.log("Data di nascita dello chef:", birthDate))
  .catch(error => console.log("Errore:", error.message));
