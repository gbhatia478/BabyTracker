
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".tracker-container");

    // Inline JSON data
    const data = {
        "currentStage": 2,
        "stages": [
            {
                "id": "stage1",
                "icon": "🥖",
                "title": "Preparing the Dough",
                "description": "Getting ready for labor—final touches being made!",
                "completed": true
            },
            {
                "id": "stage2",
                "icon": "🧀",
                "title": "Adding the Toppings",
                "description": "Contractions are starting, but we’re not quite ready yet.",
                "completed": true
            },
            {
                "id": "stage3",
                "icon": "🔥",
                "title": "In the Oven",
                "description": "Things are heating up—active labor is underway!",
                "completed": false
            },
            {
                "id": "stage4",
                "icon": "🚗",
                "title": "Out for Delivery",
                "description": "We’re heading to the hospital. Almost there!",
                "completed": false
            },
            {
                "id": "stage5",
                "icon": "🎉",
                "title": "Delivered!",
                "description": "Baby is here! Welcome to the world, little one.",
                "completed": false
            }
        ]
    };

    container.innerHTML = ""; // Clear container

    // Add stages from JSON
    data.stages.forEach((stage, index) => {
        const stageDiv = document.createElement("div");
        stageDiv.className = "stage";
        stageDiv.id = stage.id;

        // Set the styling based on stage status
        if (stage.completed) {
            stageDiv.style.backgroundColor = "#e0ffe0"; // Light green for completed
        } else if (index === data.currentStage) {
            stageDiv.style.backgroundColor = "#fffbe0"; // Highlight active stage
        } else {
            stageDiv.style.opacity = "0.5"; // Gray out inactive stages
        }

        stageDiv.innerHTML = `
            <div class="icon">${stage.icon}</div>
            <h2>${stage.title}</h2>
            <p>${stage.description}</p>
        `;
        container.appendChild(stageDiv);
    });
});
