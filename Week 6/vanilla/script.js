const submitButton = document.getElementById("submit")
const itemInput = document.getElementById("item")
const cardSection = document.getElementById("cards")

function markComplete(event) {
    const { target } = event
    const { checked } = target
    const card = target.parentElement.parentElement
    const text = card.querySelector("p")
    text.style.textDecoration = checked ? "line-through" : "none";
}

function deleteCard(event) {
    const { target } = event
    const card = target.parentElement.parentElement
    card.remove()
}

function createCard() {
    const text = itemInput.value;
    const cardTemplate = document.querySelector("template")
    const card = cardTemplate.content.cloneNode(true)
    card.querySelector("button:nth-of-type(2)").addEventListener("click", deleteCard);
    card.querySelector("p").textContent = text
    card.querySelector("input").addEventListener("change", markComplete)

    cardSection.appendChild(card);
}



submitButton.addEventListener("click", createCard)