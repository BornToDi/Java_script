
var numbers = [["naeem",3],["omi",4],["afis",1],["muniya",2],["zihadul",1]];

var playername = numbers[0][0];
var Maxplayerscore = numbers[0][1];

function playerInfo(numbers){
for( let x=1; x<numbers.length; x++){
   if(Maxplayerscore<numbers[x][1]){
      Maxplayerscore= numbers[x][1];
      playername = numbers [x][0];
   }
}
return playername;
}

var x = playerInfo(numbers);
document.write(x);


