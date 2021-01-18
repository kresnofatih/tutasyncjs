// fetch api

// fetch('todos/todos2.json').then((response)=>{
//     console.log(response);//resolved
//     return response.json();
// }).then(data=>{
//     console.log(data);
// }).catch(err=>{
//     console.log(err);//reject
// });

console.log(1);
console.log(2);
console.log(3);

// async-await function
const getTodos = async () => {
    const response = await fetch('todos/todos4.json');
    if(response.status!==200){
        throw new Error('Cannot fetch data');
    }
    const data = await response.json();
    // console.log(data);
    return data;
};
getTodos()
    .then(data=>{
        console.log(data);
    })
    .catch(err=>{
        console.log(err.message);
    });
console.log(4);