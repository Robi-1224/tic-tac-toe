


let players =["X","O"];
let currentPlayer; 
let playerWin = false;
let ghost;
let pacMan;

let cells = 3;
let sizeBoard;
let rows =3;
let board =[];
let winWay;
let winnerText;




function setup() {
  createCanvas(700, 700);
  background(18, 17, 17);
  

  currentPlayer = players[floor(random(2))];
  

  for(let i=0; i<cells; i++){
    board[i]=[];

    for(let j=0; j<rows; j++){

      board[i][j] = 0;
    }
  }
  
  stroke(22,69,245);
  strokeWeight(5);
  sizeBoard =width/cells;
  
 


 
}

function draw() {
  drawBoard();
  drawPlayerWin();
};

  

  function drawBoard(){
    for(let i =0; i<cells;  i++){
       for(let j =0; j<rows; j++){
        
        fill	(0,0,0);
        rect(i*sizeBoard,j*sizeBoard,sizeBoard,sizeBoard);

        if(board[i][j]!=0){

          stroke(	240,241,78)
          textSize(100);
          textAlign(CENTER);
          text(board[i][j], sizeBoard/2 + i*sizeBoard, sizeBoard/2 + j*sizeBoard);
        };
      }
    }


  }

  function mousePressed(){
    
    let index = [floor(mouseX/sizeBoard),floor( mouseY/sizeBoard)]
      move(index[0],index[1]);
      winner();
}

  function move(xPos,yPos){
     if(board[xPos][yPos] == 0){
         board[xPos][yPos] = currentPlayer;

      
      winnerText = currentPlayer;

      if(currentPlayer == "X"){
        
        currentPlayer= "O"

      }else {
        
        currentPlayer = "X"
      }

      }else{

        print("already used!");

      }
    }

    function winner(){
      for(let i=0; i<cells; i++){
        
        
        if(board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][0]!=0){
            playerWin = true;
            winWay = [1, i];
        }
      }

      for( let i=0; i<rows; i++){
        if(board[0][i] == board[1][i] && board[1][i] == board[2][i] && board[0][i]!=0){

        playerWin = true;
        winWay = [2, 1];
      }
    }

      
        if(board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0]!=0){

        playerWin=true;
        winWay = [3,0];
      }

      if(board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[2][0]!=0){

        playerWin=true;
        winWay=[4,0];
      }
      print(playerWin);
    }

    function drawPlayerWin(){
      stroke (218,0,255);
      strokeWeight(5);

      if(playerWin){
        
        textAlign(CENTER);
        textSize(100);
        text(winnerText + " " + "Clapped you!",width/2, height/2);
        
        if(winWay[0] == 1){
         
          //vertical lines
          line(sizeBoard/2 + winWay[1]*sizeBoard, sizeBoard/2 + 0*sizeBoard, sizeBoard/2 + winWay[1]*sizeBoard, sizeBoard/2 + 2*sizeBoard)

        }else if (winWay[0] ==2){
          // I couldn't figure out the math for horizontal lines

         
          //diagonal line
        }else if(winWay[0] ==3){
          line(sizeBoard/2,sizeBoard/2,sizeBoard/2+2*sizeBoard,sizeBoard/2+2*sizeBoard)

          // diagonal line 2
        }else if (winWay[0]== 4){
          line(sizeBoard/2+2*sizeBoard,sizeBoard/2,sizeBoard/2,sizeBoard/2+2*sizeBoard)

        }
      }
    }

    
    

  
    