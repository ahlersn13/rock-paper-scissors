
function Game(){
  // Generate two random numbers in the range of 1 - 3
  let random1 = Math.floor(Math.random() * 3) + 1; // 1-3
  let random2 = Math.floor(Math.random() * 3) + 1; // 1-3

  // Assign the appropriate image
  let randomImageName = "rock.png" // Update this randomly
  let ImageSource1 = "img/" + randomImageName; // imgs/rock.png or  imgs/scissors.png or  imgs/paper.png

  randomImageName = "hand.png" // Update this randomly
  let ImageSource2 = "img/" + randomImageName; // imgs/rock.png or  imgs/scissors.png or  imgs/paper.png



  // Update images
  //document.querySelectorAll("img")[0].setAttribute("src", "img/hand.png");
  document.querySelectorAll("img")[0].setAttribute("src", ImageSource1);
  document.querySelectorAll("img")[1].setAttribute("src", ImageSource2);

  // Print the winner. Use if statement or other appropriate logic.
  document.querySelector("h1").innerHTML = "Play 2 Wins!";
}
