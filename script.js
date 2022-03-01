// this page will promt name from users which should be start with upper case letter using reg. expression

let re = /^[A-Z]/;

let name = prompt("Enter your name:");

if(re.test(name)){
    alert(`Hello ${name}!`);
}
else{
    alert("Name must be started with capital letter!");
}
