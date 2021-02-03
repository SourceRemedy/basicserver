const $submit = document.getElementById("submit_min_wage")
$submit.onclick = sendAnswer

function sendAnswer() {
    fetch("/poll", {
        method: "POST"
    })
}