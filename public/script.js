const form = document.querySelector("form");

const nameInput = document.querySelector('input[name="name"]');
const bioInput = document.querySelector('textarea[name="bio"]');
const skillsInput = document.querySelector('input[name="skills"]');
const socialInput = document.querySelector('input[name="social"]');

const card = document.querySelector(".profile-card");

function updatePreview() {
    const name = nameInput.value.trim() || "Your Name";
    const bio = bioInput.value.trim() || "Your bio will appear here.";
    const skills = skillsInput.value.trim() || "Your skills";
    const social = socialInput.value.trim();

    card.innerHTML = `
        <div class="avatar">👤</div>
        <h2></h2>
        <p class="bio"></p>
        <p><strong>Skills:</strong> <span class="skills"></span></p>
        <p><strong>Social:</strong> <span class="social"></span></p>
    `;

    card.querySelector("h2").textContent = name;
    card.querySelector(".bio").textContent = bio;
    card.querySelector(".skills").textContent = skills;
    card.querySelector(".social").textContent = social || "Not provided";
}

form.addEventListener("input", updatePreview);

updatePreview();