let boxes=document.querySelectorAll(".box");
let resetbutton=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-game");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
// let resetbtn=document.querySelector("#reset-btn")

let turn0=true;//player x,player 0
//2-d array
// let arr2=[["lichi","banana"],["potato","onion"],["shirt","paint"]];
// console.log(arr2);
// console.log(arr2[0][1]);//banana

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgame=()=>{
    turn0=true;
    enabledboxes();
    msgcontainer.classList.add("hide");
};
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box clicked");
        // box.innerText="abcd";
        if(turn0){//player 0
            box.innerText="0";
            turn0=false;
        }

        else{//player x
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
    
});
const disabledboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enabledboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner=(Winner)=>{
msg.innerText=`Congratulations ,winner is ${Winner}`;
msgcontainer.classList.remove("hide");
};


const checkWinner=()=>{
    for(pattern of winPatterns){
        
            let pos1val=boxes[pattern[0]].innerText;
         let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!==""&&pos2val!=="" &&pos3val!==""){
            if(pos1val===pos2val&&pos2val===pos3val)
                // console.log("winner",pos1val)
            showWinner(pos1val);
            disabledboxes();
        }
    }
};
newgamebtn.addEventListener("click",resetgame);
resetbutton.addEventListener("click",resetgame);




