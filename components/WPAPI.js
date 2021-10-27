import React from 'react'


const BASE_URL = 'https://jualuc1.dreamhosters.com/wp-json/';


export function posts () {
    fetch(`${BASE_URL}wp/v2/posts`).then(response => response.json())
    
    .then(data => console.log(data));
    // // then(data => data);
    // return response.json
}

export function users (){
    fetch(`${BASE_URL}wp/v2/users`).then(response => response.json()).then(data => console.log(data));
 }

