//console.log("It's working!");

let jonSnowAttack = 25;
let jamieLannisterAttack = 35;
let jonSnowHealth = 50;
let jamieLannisterHealth = 50;
let jonSnowDefense = 0;
let jamieLannisterDefense = 20;

/*
if(jonSnowAttack < jamieLannisterAttack){
	console.log("Jamie has the stronger attack!");
}else if(jonSnowAttack > jamieLannisterAttack){
	console.log("Jon has the stronger attack!");
}else{
	console.log("The attacks are equally powerful.");
}
*/

jonSnowDefense += 25;

/*
if(jonSnowHealth <= 0){
	console.log("Jon Snow has perished in battle");
}else{
	jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense);
//use ` backtick for ${}	
	console.log(`Jon's health is ${jonSnowHealth}`);
}
*/

for(let i = 0; i < 3; i++){
	if(jonSnowHealth <= 0){
		console.log("Jon Snow has perished in battle");
	}else{
		jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense);
		console.log(`Jon's health is ${jonSnowHealth}`);
	}
}


