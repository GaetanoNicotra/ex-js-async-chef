
async function getChefBirthday(id) {
    const response = await fetch(`https://dummyjson.com/recipes/${id}`);
    const obj = await response.json();
    const response2 = await fetch(`https://dummyjson.com/users/${obj.userId}`)
    const birthday = await response2.json();
    return birthday
}


getChefBirthday(20)
    .then(birthday => console.log("Data di nascita dello chef:", birthday.birthDate))
    .catch(error => console.error("Errore:", error.message));