// What is Async JavaScript

// Making a request object
const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', ()=>{
        // console.log(request, request.readyState);
        // when ready status = 4 (data completed download or error)
        if (request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText)
            // console.log(request, request.responseText);
            callback(undefined, data);
        } 
        else if(request.readyState===4){
            // console.log('cant fetch data');
            callback('cant fetch data', undefined);
        }
    });
    // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    // request.open('GET', 'todos.json');
    request.open('GET', resource);
    request.send();
};
console.log(1);
console.log(2);
getTodos('todos/todos.json', (err, data)=>{
    // console.log('callback fired');
    console.log(data);
    getTodos('todos/todos2.json', (err, data)=>{
        console.log(data);
        getTodos('todos/todos3.json', (err, data)=>{
            console.log(data);
        })
    })
    // console.log(err, data);
    // if(err){
    //     console.log(err);
    // } else {
    //     console.log(data);
    // }
});
console.log(3);
console.log(4);