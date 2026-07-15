//Try....Catch

// async function getAlluser() {
    
//  try{
//    const response = await fetch("https://jsonplaceholder.typicode.com/users");
//    const data = await response.json();
//    console.log(data);

//  }catch(error){
//     console.log(`Error:${error}`)
//  }
  
// }
// getAlluser()


//Then.....Catch

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json();
})
.then((data)=>{console.log(data)})
.catch((error)=>{console.log(`E:${error}`);
})



