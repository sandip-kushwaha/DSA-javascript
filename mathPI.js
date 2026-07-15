
// const pi_value = Math.PI;
// console.log(`PI value: ${pi_value}`);

//  Math.PI = 4;
// console.log(Math.PI)


const descripter =  Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descripter);


const student = {
    name:"sandip",
    rollno:1,
    address:"Bara"
}
const studentDescriptor = Object.getOwnPropertyDescriptor(student, "name");
console.log(studentDescriptor);

const newstudent = Object.defineProperty(student, "name",{
    writable:false,
    enumerable:false,
    configurable: false
})
console.log(Object.getOwnPropertyDescriptor(newstudent, "name"))