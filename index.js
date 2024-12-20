import express from 'express';
const app = express();
const port = 3000;

app.use(express.static('public'));


// Function to get the message based on the day
function getMessage(day) {
    const messages = [
        "It's Sunday! Reflect on the past week and plan for a great one ahead!",
        "It's Monday! A fresh start and a new week ahead. Let's make it amazing!",
        "It's Tuesday! Keep the momentum going and you'll conquer the week!",
        "It's Hump Day! Halfway to the weekend. Keep pushing forward!",
        "It's Thursday! The weekend is just around the corner. Stay focused!",
        "It's Friday! Time to wrap up the week and look forward to some relaxation!",
        "It's Saturday! Enjoy your well-deserved break and recharge for the week ahead!"
    ];
    return messages[day] || "Enjoy your day!";
}

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const message = getMessage(dayOfWeek);

    res.render("index.ejs", {day: dayOfWeek,   advice: message });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});





