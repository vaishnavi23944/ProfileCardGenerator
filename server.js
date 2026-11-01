const express = require("express");
const { Low } = require("lowdb");
const { JSONFile } = require("lowdb/node");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const file = path.join(__dirname, "profiles.json");
const adapter = new JSONFile(file);
const db = new Low(adapter, { profiles: [] });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/create-profile", async (req, res) => {
    try {
        const { name, bio, skills, social } = req.body;

        await db.read();

        db.data.profiles.push({
            id: Date.now(),
            name,
            bio,
            skills,
            social
        });

        await db.write();

        res.send(`
            <h1>Profile Created Successfully!</h1>
            <h2>${name}</h2>
            <p>${bio}</p>
            <p>Skills: ${skills}</p>
            <a href="/">Create Another Profile</a>
        `);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error saving profile.");
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});