async function getChefBirthday(id) {
    try {
        const response = await fetch(`https://dummyjson.com/recipes/${id}`);
        const obj = await response.json();
        const response2 = await fetch(`https://dummyjson.com/users/${obj.userId}`)
        const birthday = await response2.json();
        const dateBirthday = dayjs(birthday.birthDate).format("MM-DD-YYYY")
        return dateBirthday
    } catch (error) {
        console.error(error)
    }
}

// esempi di utilizzo
(async () => {
    try {
        const birthday = await getChefBirthday(20);
        console.log('Ecco la data di nascita dello chef:', birthday);
    } catch (error) {
        console.error(error);
    }
})();
