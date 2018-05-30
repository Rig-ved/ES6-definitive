/*
@Author: Anirban Bhattacharya
@Desc : ES6 ideas
*/


/**

****** The declaration of const let and var : 
inclusion and exclusion from both block and inline level scopes*******88

*/

// Template Strings

function perDetails()
{



    const name="John",age=16,position="manager";
    console.log(`His name is ${name} and his age is ${age} and works as a ${position}`)

    // string Raw 
    console.log("Hello worlds");

    const ul = document.querySelector(".nav-bar");
    const players=[

    {jersey:56,name:"Novak Djokovic",rank:1},
    {jersey:34,name:"Rafal Nadal",rank:2},
    {jersey:21,name:"Roger Federer",rank:3},
    {jersey:21,name:"Andy Murray",rank:4},
    ]
    let list ="";
    let filteredList=""
    const playersList=players.forEach(function(player, index) {
        // statements
        list +=`<li class="nav-items">${player.name} is ranked at ${player.rank}</li>`;
        
    });

    const filteredPlayerList=players.filter(function(player,index){
        if (player.jersey == 21){
            filteredList +=`<li class="nav-items">${player.name} has jersey ${player.jersey}</li>`; 
        }
    
    });
    
    ul.insertAdjacentHTML("afterend",filteredList)    ;
    ul.insertAdjacentHTML("afterbegin",list);
   
}
perDetails();


/*
***********    Array Declarative syntax as well as helpers ************************
  covered map, forEach, filter and reduce
*/
const mapArtists=()=>
{
    const artists = [
        
         {artist:"ACDC",song:"Still Loving You"},
        {artist:"ACDC",song:"Highway to Hell"},
        {artist:"Scorpions",song:"Coming back to life"},
       
        {artist:"Scorpions",song:"Smoke on the water"}

    ];
    
    const artistsMapSerialised=artists.map(function(artist){
        let template ="";
        template +=`<li style='color:red;margin-left:30px'>The song ${artist.song} is played by ${artist.artist}</li>`
        return template;
    });

    const artistFind = artists.find((artist)=>{
        return artist.artist==="ACDC"
    })

    const artistReduce=artists.reduce((start,artist)=>{
            return (artist.artist=="Scorpions") ? ({ACDC:start.ACDC,Scorpions:start.Scorpions+1}):({ACDC:start.ACDC+1,Scorpions:start.Scorpions})
    },{ACDC:0,Scorpions:0})

    console.log(artistReduce);
    console.log(artistFind);
    console.log(artistsMapSerialised);

}
mapArtists();

/*
*************************** Fat Arrow Functions **********************************
*/


const fatArrow = (name,value) =>{
    name += " How are you?"
    return `Welcome ${name} your current oustanding value is ${value}`
}

console.log(fatArrow("Rick",12));
/*Rest and spread operators*/




/*Classes In ES6*/

/*Default Arguments Ends*/
/*Classes In ES6*/
class Car{
    constructor(brand="Nissan",status="Available",neat="Indeed"){
        this.brand=brand;
        this.status=status;
        this.neat=neat;
        this.checkNeat=()=>{
            return `${this.brand} is ${this.neat} a neat car`
        }

    }
    avail(){
        console.log( `${this.brand} is ${this.status}`)
    }
}


class Ford extends Car{
    constructor(...args){
        super(args[0].brand,args[0].status,args[0].neat);

    }
    ignition(){
        console.dir(`${this.brand} is turned on`)

    }

}

let newCar=new Car();

let newFord= new Ford({
    brand:"Ford",
    status:"Not Available",
    neat:"Not Neat"

});

console.log(newCar);
console.log(newFord);