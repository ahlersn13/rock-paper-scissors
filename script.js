
function Game(){
  // Generate two random numbers in the range of 1 - 3
  let random1 = Math.floor(Math.random() * 3) + 1; // 1-3
  let random2 = Math.floor(Math.random() * 3) + 1; // 1-3

  // Assign the appropriate image
  let ImageSource1 = '';
  let ImageSource2 = '';
  let randomImageName1 = '';
  let randomImageName2 ='';


  if (random1 === 1) {
    randomImageName1 = "rock.png"
    ImageSource1 = "img/" + randomImageName1; // imgs/rock.png or  imgs/scissors.png or  imgs/paper.png
  } 
  else if (random1 === 2) {
    randomImageName1 = "hand.png" // Update this randomly
    ImageSource1 = "img/" + randomImageName1; 
  }
    else {
    randomImageName1 = "scissors.png" // Update this randomly
    ImageSource1 = "img/" + randomImageName1; // imgs/rock.png or  imgs/scissors.png or  imgs/paper.png
  }

  if (random2 === 1) {
    randomImageName2 = "rock.png"
    ImageSource2 = "img/" + randomImageName2
  }
  else if (random2 ===2) {
    randomImageName2 = "hand.png" // Update this randomly
    ImageSource2 = "img/" + randomImageName2
  }
  else {
    randomImageName2 = "scissors.png" // Update this randomly
    ImageSource2 = "img/" + randomImageName2
  }
  // Update images
  //document.querySelectorAll("img")[0].setAttribute("src", "img/hand.png");
  document.querySelectorAll("img")[0].setAttribute("src", ImageSource1);
  document.querySelectorAll("img")[1].setAttribute("src", ImageSource2);
 

  // Print the winner. Use if statement or other appropriate logic.
  let result ='';
  if (random1 === random2) {
    result = "It's a tie"
  } 
  else if (
    (random1 === 1 && random2 === 3) || // Rock > Scissors
    (random1 == 2 && random2 == 1) || //Paper > Rock
    (random1 == 3 && random2 == 2) //Scissors > Paper
  ) {
    result = "Player 1 Wins"
  } else {
    result = "Player 2 Wins"
  }
  document.querySelector("h1").innerHTML = result;
}
