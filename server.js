const express = require('express')
const app = express()

app.get("/", (request, response) => {
    console.log("visitor on main route")
    response.status(404)
    response.send("Hello! My name is Remy.")

} )

app.get("/movies", (request, response) => {
    console.log(request.ip + "visited /movies")
    const movies = ["Stepbrothers", "Talledega Knights", "Elf"]
    response.send(movies)
} )

app.post("/poll", (request, respponse) => {
    
})

//starts a web server listening on port 3000
app.listen(3000)