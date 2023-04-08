// Challenge 3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

// create function to see who wins the trophy
function AveScore(Score1, Score2, Score3) {

    // calculate average team score
    TeamScore = (Score1 + Score2 + Score3) / 3;

    //if team score is less than 100, it doesn't count, so give it a dummy value
    if (TeamScore < 100) {
        TeamScore = 1
    };

    return TeamScore;
};

function CheckResult(Team1, TeamScore1, Team2, TeamScore2) {

    if (TeamScore1 > TeamScore2 & TeamScore1 >= 100) {
        console.log(Team1 + " win!");
    } else if (TeamScore2 > TeamScore1 & TeamScore2 >= 100) {
        console.log(Team2 + " win!");
    } else if (TeamScore1 == TeamScore2 & TeamScore1 >= 100 & TeamScore2 >= 100) {
        console.log("It's a draw!");
    } else if (TeamScore1 == TeamScore2 & TeamScore1 == 1 & TeamScore2 == 1) {
        console.log("No one wins.");
    } else {
        console.log("Check for error.");
    }
};


// Result 1
DolphinScore = AveScore(96, 108, 89)
KoalaScore = AveScore(88, 91, 110)
CheckResult("Dolphins", DolphinScore, "Koalas", KoalaScore)

// Result 2
DolphinScore = AveScore(97, 112, 101)
KoalaScore = AveScore(109, 95, 123)
CheckResult("Dolphins", DolphinScore, "Koalas", KoalaScore)

// Result 3
DolphinScore = AveScore(97, 112, 101)
KoalaScore = AveScore(109, 95, 106)
CheckResult("Dolphins", DolphinScore, "Koalas", KoalaScore)