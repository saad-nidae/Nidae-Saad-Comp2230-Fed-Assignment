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
                nextQuestion = "Your boat made from the shipwreck wood is not sturdy and collapses in the middle of the sea. You crash and the adventure ends here.";
                questionElement.textContent = nextQuestion;
                answersList = {"End Game": "game_over", "restart": "game_start"};
                AddAnswerButton(answersList);
                break;

            case "canes_boat":
                nextQuestion = "You successfully build a boat using the lightweight canes. You set sail and continue your adventure.";
                questionElement.textContent = nextQuestion;
                answersList = {};
                AddAnswerButton(answersList);
                break;
            // Add more cases for different states of the game as needed
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
        });
});
