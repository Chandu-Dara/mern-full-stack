const greet = (name)=>{
    console.log(`hello friends,${name}!`);
}
function processName(calback){
const name ="anurag";
calback(name);
} 
processName(greet);