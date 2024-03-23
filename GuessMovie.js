const Favmovie = "ironman";

let guessmovie = prompt("guess a favorite movie");
while((guessmovie != Favmovie) && (guessmovie !="quit"))
{
    guessmovie= prompt("wrong guess.please try again.");
}
if(guessmovie == Favmovie)
{
    console.log("Kudos you guess a right movie! Hurayyyy");
}
else
{
     console.log("You Quit the Game!");
}