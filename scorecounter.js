// JavaScript Filevar scoreOne=0;
var scoreTwo=0;
var teamOneName="consabor";
var teamTwoName="sinsabor";
var threePointShot=3;
var twoPointShot=2;
var freeThrow=1;

console.log(scoreOne);

































updateTeams();
var scoreOne;
var scoreTwo;
var teamOneName;
var teamTwoName;
var threePointShot;
var twoPointShot;
var freeThrow;
/*global$*/("button").click(function(){
    var team;
    team = /*global$*/(this).attr("team");
    
    var points;
    points = /*global$*/(this).attr("class");
    
    updateScore(team, points);
});

function updateScore(myTeam, myPoints){
    if(myTeam === "one"){
        if(myPoints === "twoPt"){
            scoreOne += twoPointShot;
        } else if(myPoints === "threePt"){
            scoreOne += threePointShot;
        } else if(myPoints === "freeThrow"){
            scoreOne += freeThrow;
        }
        /*global$*/(".scoreOne").text(scoreOne);
    } else if (myTeam === "two"){
        if(myPoints === "twoPt"){
            scoreTwo += twoPointShot;
        } else if(myPoints === "threePt"){
            scoreTwo += threePointShot;
        } else if(myPoints === "freeThrow"){
            scoreTwo += freeThrow;
        }
        /*global$*/(".scoreTwo").text(scoreTwo);
    }
}

function updateTeams(){
    /*global$*/(".teamOne").text(teamOneName);
    /*global$*/(".teamTwo").text(teamTwoName);
}

