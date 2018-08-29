//console.log("test");
window.onload = function(){
    var funkyfunctions = {
        salsa: function(){
            var danceMoves = [3,2,1,5,6];
            var numSteps = 0;
            for (let i = 0; i<danceMoves.length; i++){
                numSteps += danceMoves[i];
            }
            return numSteps;
        },

        chickenDance: function(){
            var numClucks = 0;
            for (let i = 0; i<6; i++){
                numClucks += 5;
            }
            var chicken = {
                funky1: function(){
                    numClucks += 10;
                    return numClucks;
                },

                funky2: function(){
                    return chicken.funky1();
                }
            }
            return chicken.funky2();
        },
        
        shuffle: function(){
            var type = ['melbourne', 'electronic', 'hardstyle'];
            var myShuffle = {
                type: type[1],
                isPopular: "true",
                numClaps: 300,
                }
            if(myShuffle.isPopular){
            return myShuffle.numClaps;
            }
        }
    }

var getSalsa = funkyfunctions.salsa();
console.log("salsa", getSalsa);
var getChicken = funkyfunctions.chickenDance();
console.log("chickendance", getChicken);
var getShuffle = funkyfunctions.shuffle();
console.log("shuffle", getShuffle);

console.log("funkyfunctions SUM", getSalsa+getChicken+getShuffle);
}