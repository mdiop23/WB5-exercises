"use strict"

let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
   
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
   ];
   
   for (let member of academyMembers){
    if ( member.memID == 187 ){
        console.log(`This actor whose memID is 187 is ${member.name}`)
    }
   }

let member2= academyMembers.find(member => member.memID == 187)
 console.log (`${member2.name} memId is 187`)

 let atleastThreeFilms=academyMembers.filter(member => member.films.length >= 3)
  atleastThreeFilms.forEach((actor) => console.log(actor.name))

let actorsNamedBob=academyMembers.filter((member) => member.name.includes ("Bob"))
for(let member of actorsNamedBob)
{
  console.log(member.name)
}

for(let actor of academyMembers){
    
}