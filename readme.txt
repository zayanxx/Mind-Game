html
        
        {
    
    
    html is used 
    
    
    {
        * font awesome icons
        * google fonts
        * heading tag
        * para tag
        * button
    }
        
         }


CSS      
  
  [
    
            css style major {
                        
                         * linear
                         * rwd{responsive};
                         * card colors
                            }
  
  ]

Java Script {
    
    
    major method and properties used in game {

                                           

        * prompt method [to get the data in user side]
        * alert method [to display alert messege]
        * getElementById => [get the id]
        * innerText => [show text output in browser]
        * boolean => [true or false method]
        * createElement => [create element in js method]
        * if else
        * setTimeout => [dom async function]
        * Function
        * addEvent listner => [DOM method]
        * innerHTML => [show html value in browser]
        * appendChild [ end of item]
        * remove [remove element]
        * add method
        * Array & Array Method
        * call back method
        
        
     }

        Firs store or create the duplicate value...........
         example;

         {  
            const cardValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
         let cardDeck = [...cardValues, ...cardValues];
         let firstCard, secondCard;
         let lockBoard = false;
         let matchedPairs = 0;
         
         }
        
        I'll Get The Data in html file.........

        Example :-

        {
            const gameBoard = document.getElementById('game-board');
            const restartButton = document.getElementById('restart-button');
        }

        To get the data in ---- user
        {

            example :-

            function nameTitle() {
                let username=prompt("Please Enter Your Name");
                     if (username != null) {
                         document.getElementById("show-greet").innerText =
                              "Hiiii...." + username +"..." + " All The Best..!";
                                   }  
                                 }
                                    }

         use arryay method and sort the given array in a  shuffle array method........



         {
            example :-

            function shuffle(array) {
                     array.sort(() => Math.random() - 0.5);
                         }
         }                         
}