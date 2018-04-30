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
  	 console.log(String.raw`His name is \n ${name} and age is ${age}`);
  	 console.log(String.raw`World hello`);
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
    	return filteredList;
    });
    
    ul.insertAdjacentHTML("afterbegin",filteredList)	;
    ul.insertAdjacentHTML("afterbegin",list);
   
}
perDetails();


/*
***********    Array Declarative syntax as well as helpers ************************
  covered map, forEach, filter and reduce
*/
function mapArtists()
{
	
	
	const artists = [
	
		{artist:"ACDC",song:"Highway to Hell"},
		{artist:"Pink Floyd",song:"Coming back to life"},
		{artist:"Scorpions",song:"Still Loving You"},
		{artist:"Deep Purple",song:"Smoke on the water"}

	];
	let ul = document.querySelector(".nav-bar");

	const artistsSerialised=artists.map(function(artist){
		let template ="";
		template +=`<li style='color:red;margin-left:30px'>The song ${artist.song} is played by ${artist.artist}</li>`
		return template;
	})
	ul.insertAdjacentHTML("afterbegin",artistsSerialised);

}
mapArtists();




