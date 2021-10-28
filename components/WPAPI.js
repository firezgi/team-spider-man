import React from 'react'


const BASE_URL = 'https://jualuc1.dreamhosters.com/wp-json';


export const posts= ()=> {
    return fetch(`${BASE_URL}/wp/v2/posts`).then(response => response.json())
    
    // .then(data => data)
    // .catch(error=>error)
}

export const users =()=>{
    return fetch(`${BASE_URL}/wp/v2/users`).then(response => response.json())
    .then(data => console.log(data))
    // .catch(error=>error)
}

