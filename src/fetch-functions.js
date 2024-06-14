import { FetchError } from "node-fetch";

let userUrl = 'https://jsonplaceholder.typicode.com/users'

export const checkResponseStatus = () => {
    return fetch(userUrl)
        .then(response => {
            return {
                status: response.status,
                ok: response.ok,
                url: response.url
            }
        })
};

console.log(checkResponseStatus());

export const getUsers = () => {
    return fetch(userUrl)
        .then(response => response.json())

};

export const getUserPosts = (userId, maxNumPost = 3) => {
    userUrl = `https://jsonplaceholder.typicode.com/users/${userId}/posts`
    return fetch(userUrl)
        .then(response => response.json())
        .then(responseData => responseData.splice(0, maxNumPost))

};

export const createNewUser = (newUserData) => {
    // let newUserData = { username: '', email: '' }
    const postOption = {
        method: "POST",                      // The type of HTTP request
        body: JSON.stringify(newUserData),       // The data to be sent to the API
        headers: {
            "Content-Type": "application/json" // The format of the body's data
        }
    }

    userUrl = 'https://jsonplaceholder.typicode.com/users'
    return fetch(userUrl, postOption)
        .then(response => response.json())
}

