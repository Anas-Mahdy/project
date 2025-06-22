const person = {
    id : 456847,
    firstName : "Anas",
    address : {
        city : "Cairo",
        country : "Egypt"
    },
    hobbies : ["football","tennis"],
    sayHi : function(){
        console.log("hi");    
    },
   
    m : function(){
        t = 5,
        g = 6,
        console.log(t == g);
        {
            h = 7
            l = 8
            console.log(t + g + h +l);    
        }
    }
    
}
person.firstName = "islam"
console.log(person);
person.sayHi()
person.m()
function print(text){
    console.log(text);
}
print("anas")
