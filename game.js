class Game{
    constructor(){

    }

    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        }) 
    
      }
    
      update(state){
        database.ref('/').update({
          gameState: state
        });
      }
    
    async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          form = new Form()
          form.display();
          
        }
    }

    order(){
      for(var i=0;i<5;i++){
        var j=Math.round(random(0,4))
        while(ord1.indexOf(j)!==-1){
          j=Math.round(random(0,4))
        }
        ord1[i]=j
      }
      console.log(ord1);
    }

    play(){
        form.hide()
        console.log("we are in play state")

        Player.getInfo()
        if(player.index===1){
          line(900,10,900,790);
          textAlign(CENTER)
          var button= createButton('Hint 1')
          var button1= createButton('Hint 2')
          var submit= createButton('Submit')
          var textBox= createInput('Answer')
          button.position(400,450)
          button1.position(480,450)
          submit.position(420,550)
          textBox.position(300,350)
          textBox.size(300,50)
          submit.size(100,50)

          // button.mousePressed(()=>{
          //   text(hint1[ord1[player.level]])
          // })

          // button1.mousePressed(()=>{
          //   text(hint2[ord1[player.level]])
          // })
          // submit.mousePressed(()=>{
          //   var ans=textBox.input()
          //   if(ans===answers[ord1[player.level]]){
          //     console.log("answer is correct")
          //   }
          // })

          // text(questions[ord1[player.level]],750,400)

        }
        else{
          line(450,10,450,790);
          textAlign(CENTER)
          var button= createButton('Hint 1')
          var button1= createButton('Hint 2')
          var submit= createButton('Submit')
          var textBox= createInput('Answer')
          button.position(860,450)
          button1.position(940,450)
          submit.position(870,550)
          textBox.position(750,350)
          textBox.size(300,50)
          submit.size(100,50)

          // text(questions[ord1[player.level]],1150,400)
           // button.mousePressed(()=>{
          //   text(hint1[ord1[player.level]])
          // })

          // button1.mousePressed(()=>{
          //   text(hint2[ord1[player.level]])
          // })
          // submit.mousePressed(()=>{
          //   var ans=textBox.input()
          //   if(ans===answers[ord1[player.level]]){
          //     console.log("answer is correct")
          //   }
          // })

          // text(questions[ord1[player.level]],750,400)
        }

      if(getSecondsToday===endTimer2){
        gameState=3
        console.log("end state")
      }
    }

    rules(){
        form.hide()
        textSize(30)
        textAlign(CENTER)
        fill(0,0,0)
        text("RULES",650,50)
        fill(76,0,153)
        text("Read the following rules to understand how to play the game",650,100)
        text("You have 30 seconds to read the rules after which the game will automatically start.",650,150)
        textAlign(LEFT)
        fill(0,102,51)
        text("1. As soon as the game starts, a timer will also start.",30,250)
        text("2. Your main objective is to solve the given riddles in less than 5 Minutes!",30,300)
        text("3. You will have a total of 5 questions and so will your opponent.",30,350)
        text("4. To answer the question you will need to type the answer in the text box.",30,400)
        text("5. You will be given 2 Hints per question and using it will deduct 30 seconds from your clock. ", 30,450)
        text("6. Giving a wrong answer will deduct 1 Minute to your timer.",30,500)
        textAlign(CENTER)
        fill(102,0,21)
        text(" REMEMBER- You need to try to answer the questions as quick as possible",650,600)
        text("ALL THE BEST :)",650,650)

        // console.log("time is :"+ getSecondsToday())
        if(getSecondsToday()===endTimer){
          gameState=2
          console.log("gameState changed")
        }

    }

}
          //  switch(player.level){
          //    case 0: text(questions[ord1[0]],750,400)
          //    break;
          //    case 1: text(questions[ord1[1]],750,400)
          //    break;
          //    case 2: text(questions[ord1[2]],750,400)
          //    break;
          //    case 3: text(questions[ord1[3]],750,400)
          //    break;
          //    case 4: text(questions[ord1[4]],750,400)
          //    break;
          //  } 