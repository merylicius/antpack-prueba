
// endpoint to get users
export const getUsers = async () => {

    const url = "https://jsonplaceholder.typicode.com/users";

    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log(error)
        return alert("error en consulta")
    }
}


