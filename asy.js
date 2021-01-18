// What is Async JavaScript

// Making a request object
const getTodos = (resource) => {
    return new Promise((resolve, reject)=>{
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', ()=>{
            // console.log(request, request.readyState);
            // when ready status = 4 (data completed download or error)
            if (request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText)
                resolve(data);
            } 
            else if(request.readyState===4){
                reject('error getting resource');
            }
        });
        // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
        // request.open('GET', 'todos.json');
        request.open('GET', resource);
        request.send();
    });
};

getTodos('todos/todos.json').then((data)=>{
    console.log(data);//resolved
}).catch(err=>{
    console.log(err);//rejected
})