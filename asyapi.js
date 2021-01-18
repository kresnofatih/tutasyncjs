// fetch api

fetch('todos/todos2.json').then((response)=>{
    console.log(response);//resolved
    return response.json();
}).then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);//reject
});