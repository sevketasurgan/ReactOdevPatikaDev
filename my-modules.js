import axios from "axios";
const checkType = (arg) => {
    return (typeof arg) === "number" ? true : typeof arg === "undefined" ? false : false;
}
async function getData(id) {
    if (checkType(id)) {
        const { data: users } = await axios("https://jsonplaceholder.typicode.com/users/" + id).then(log => { return log });
        const { data: posts } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + id).then(log => { return log });
        return { users: users, posts: posts };
    }

}

export default getData;