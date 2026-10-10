document.addEventListener("DOMContentLoaded", (event) => {
    let currentState = "game_start";
    let nextQuestion;
    let answersList;
    const answersContainer = document.getElementById("answers");

    function renderQuestion(value) {
        const questionContainer = document.getElementById("question-container")
        const questionElement = document.getElementById("question");
        answersContainer.innerHTML = "";

        switch (value) {
            case "game_start":
                nextQuestion =  "You wake up on a sandy beach, surrounded by pieces of the shipwreck. You are alone. A dense forest lies behind you and the open sea stretches ahead.";
                questionElement.textContent = nextQuestion;
                answersList = {"Build a boat": "build_a_boat", "Explore the forest": "explore_forest", "light a signal fire": "signal_fire"};
                AddAnswerButton(answersList);
                break;

            case "build_a_boat":
                nextQuestion =  "You decide to build a boat. You can use the broken pieces of wood from the shipwreck or lightweight canes that grow on the island.";
                questionElement.textContent = nextQuestion;
                answersList = {"Use the shipwreck wood": "ending_crash", "Use the lightweight canes": "canes_boat"};
                AddAnswerButton(answersList);
                break;

            case "ending_crash":
                nextQuestion = "Your boat made from the shipwreck wood is not sturdy and collapses in the middle of the sea. You crash and the adventure ends here";
                questionElement.textContent = nextQuestion;
                answersList = {"End Game": "game_over", "restart": "game_start"};
                AddAnswerButton(answersList);
                break;

            case "canes_boat":
                nextQuestion = "Your cane boat floats well. At the horizon, you see calm water but to the east but endless, and dark storm clouds to the west but a safer land is behind it.";
                questionElement.textContent = nextQuestion;
                answersList = {"Paddle east": "ending_escape", "Paddle west": "ending_storm"};
                AddAnswerButton(answersList);
                break;
            
            case "ending_escape":
                nextQuestion = "You Win ! You paddle east and successfully navigate through the calm waters, escaping the storm and finding a safe haven!";
                questionElement.textContent = nextQuestion;
                answersList = {"End Game": "game_over", "restart": "game_start"};
                AddAnswerButton(answersList);
                break;

            case "ending_storm":
                nextQuestion = "You head towards the storm and your boat is overwhelmed by the rough seas. The adventure ends here";
                questionElement.textContent = nextQuestion;
                answersList = {"End Game": "game_over", "restart": "game_start"};
                AddAnswerButton(answersList);
                break;

            case "explore_forest":
                nextQuestion = "The forest is thick and noisy. You find the entrance to a dark cave but you also hear growling deeper in the trees.";
                questionElement.textContent = nextQuestion;
                answersList = {"Keep exploring the forest dispite the growling": "ending_tiger", "Enter the cave despite the creatures": "cave"};
                AddAnswerButton(answersList);
                break;
            
            case "ending_tiger":
                nextQuestion = "You are attacked by a tiger in the forest. The adventure ends here!";
                questionElement.textContent = nextQuestion;
                answersList = {"End Game": "game_over", "restart": "game_start"};
                AddAnswerButton(answersList);
                break;

            case "cave":
                nextQuestion = "Atthe back of the cave you find a treasure chest with an old map showing an escape plan lying on top of it. But snakes, spiders, and scorpions crawl all around them.";
                questionElement.textContent = nextQuestion;
                answersList = {"Face your fear and take both the treasure and the map": "ending_treasure", "Give in to your fear and run out to light a signal fire": "signal_fire"};
                AddAnswerButton(answersList);
                break;

            case "ending_treasure":
                nextQuestion = "Congratulations! You take the treasure and escape the island safely. You have successfully completed the adventure.";
                questionElement.textContent = nextQuestion;
                answersList = {"End Game": "game_over", "restart": "game_start"};
                AddAnswerButton(answersList);
                break;

            case "signal_fire":
                nextQuestion = "You decide to make a fire big enough to be seen from the sea. You need fuel, and you only have one match to light.";
                questionElement.textContent = nextQuestion;
                answersList = {"Use damp shipwreck wood": "ending_nosmoke", "Use palm leaves and driftwood": "fire_lit"};
                AddAnswerButton(answersList);
                break;

            case "ending_nosmoke":
                nextQuestion = "You use the damp shipwreck wood, but it produces barely any smoke. The signal is not seen, and you remain stranded on the island.";
                questionElement.textContent = nextQuestion;
                answersList = {"End Game": "game_over", "restart": "game_start"};
                AddAnswerButton(answersList);
                break;

            case "fire_lit":
                nextQuestion = "The fire burns brightly as night falls. A ship's lights appear far away.";
                questionElement.textContent = nextQuestion;
                answersList = {"Stay awake": "ending_rescued", "Have some rest untill a rescue comes": "ending_fire_out"};
                AddAnswerButton(answersList);
                break;

            case "ending_rescued":
                nextQuestion = "You win !You stay awake and keep feeding the fire. The ship notices the signal and rescues you. You are safe!";
                questionElement.textContent = nextQuestion;
                answersList = {"End Game": "game_over", "restart": "game_start"};
                AddAnswerButton(answersList);
                break;

            case "ending_fire_out":
                nextQuestion = "You decide to rest, and the fire eventually goes out. The ship passes by without noticing you, and you remain stranded on the island!";
                questionElement.textContent = nextQuestion;
                answersList = {"End Game": "game_over", "restart": "game_start"};
                AddAnswerButton(answersList);
                break;

            case "game_over":
                nextQuestion = "Game Over. Thank you for playing!";
                questionElement.textContent = nextQuestion;
                //answersList = {"End Game": "game_over", "restart": "game_start"};
                //AddAnswerButton(answersList);
                break;
        }
    }

    function AddAnswerButton(list) {

        list = Object.entries(list);
        list.forEach(([key, value]) => {
            const answerBtn = document.createElement("input");
            answerBtn.type = "radio";
            answerBtn.name = "answer";
            answerBtn.value = value;
            const label = document.createElement("label");
            label.appendChild(answerBtn);
            label.append(key);
            answersContainer.appendChild(label);
            answerBtn.addEventListener("change", () => {
                currentState = answerBtn.value;
            });
        });
    }

        const nextBtn = document.getElementById("next-btn");
        nextBtn.addEventListener("click", (event) => {
            if (currentState === "game_start") {
                 renderQuestion(currentState);
            }
            if (currentState === "build_a_boat") {
                 renderQuestion(currentState);
            }
            if (currentState === "ending_crash") {
                 renderQuestion(currentState);
            }
            if (currentState === "canes_boat") {    
                 renderQuestion(currentState);
            }
            if (currentState === "ending_escape") {
                 renderQuestion(currentState);
            }   
            if (currentState === "ending_storm") {
                 renderQuestion(currentState);
            }  
            if (currentState === "explore_forest") {
                 renderQuestion(currentState);
            }   
            if (currentState === "ending_tiger") {
                 renderQuestion(currentState);
            }  
            if (currentState === "cave") {
                renderQuestion(currentState);
            }
            if (currentState === "ending_treasure") {
                renderQuestion(currentState);
            }
            if (currentState === "signal_fire") {
                renderQuestion(currentState);
            }
            if (currentState === "ending_nosmoke") {
                renderQuestion(currentState);
            }
            if (currentState === "fire_lit") {
                renderQuestion(currentState);
            }
            if (currentState === "signal_fire") {
                renderQuestion(currentState);
            }
            if (currentState === "ending_nosmoke") {
                renderQuestion(currentState);
            }
            if (currentState === "ending_rescued") {
                renderQuestion(currentState);
            }                   
            if (currentState === "ending_fire_out") {
                 renderQuestion(currentState);
            }
            if (currentState === "game_over") {
                 renderQuestion(currentState);
                 location.reload();
            }
         
        });
});
