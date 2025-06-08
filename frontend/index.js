const colorDiv = document.getElementById('color-div')
const askButton = document.getElementById('ask-button')
const ansDiv = document.getElementById('answer-div')

colorDiv.style.backgroundColor = "green"

console.log(askButton)

const askAnswerT = () => {
    alert('button T')
}


askButton.onclick = askAnswer


async function askAnswer() {
    const setFetch = { method: "GET", headers: { "Content-Type": "application/json" } }
    const answerFromServer = await fetch(`http://localhost:8080/ans`, setFetch)
    if (answerFromServer.ok) {
        console.log(answerFromServer)
        const cleanAnswer = await answerFromServer.json()
        console.log(cleanAnswer)
        ansDiv.innerHTML = cleanAnswer.Res

    }
    else {
        console.log(answerFromServer)
    }
}