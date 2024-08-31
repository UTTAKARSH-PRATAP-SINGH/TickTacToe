let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg =document.querySelector("#msg");

let turn0 = true;
//playerx, player0
 const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
 ];

 const resetGame = () =>{
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
 };

 boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if(turn0){//player 0
            box.innerText = "o";
            turn0 = false;
        }else{//player x
            box.innerText = "x"
            turn0 = true;
        }
        box.disabled = true;//used for not repeting
        checkWinner();
    });
 });
 const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
 };
 const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
 };
 const showWinner = (winner) =>{
    msg.innerText = `Congraulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
 };
 const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;


        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val); //code for winner
            }
        }
    }
 };

        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText);//or pattern for array disclosing  yeh boxes ki vallues ke liye



newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);


      
            
    