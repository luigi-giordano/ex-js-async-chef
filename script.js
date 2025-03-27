async function getChefBirthday(id) {
  try {
    // Recupero la ricetta
    const ricetta = await fetch(`https://dummyjson.com/recipes/${id}`);
    const response = await ricetta.json();
    if (!response.userId) throw new Error("ID utente non trovato nella ricetta");

    // Estrazione userId dalla ricetta
    const userId = response.userId;

    // Recupero le informazioni dello chef
    const userResponse = await fetch(`https://dummyjson.com/users/${userId}`);
    const user = await userResponse.json();
    if (!user.birthDate) throw new Error("Data di nascita non trovata per lo chef");

    // Restituisco la data di nascita dello chef
    return user.birthDate;
  } catch (error) {
    console.error(error.message);
    throw new Error("Errore nel recupero dei dati: ", error.message);
  }
}

getChefBirthday(1)
  .then(birthDate => console.log("Data di nascita dello chef:", birthDate))
  .catch(error => console.log("Errore:", error.message));
