/*  --- EXAMPLE NODE APP ---
    1. Create folder (ex. .../node-test/)
    2. npm init - this creates package.json etc. = root folder
    3. create .js file (ex. node-test/src/app.js)
    4. in package.json, update "main" field and add __ "start": "node src/app.js" __ to use __ npm start __ script (to start the app) 
    5. in root (.../node-test/), npm install express --save. In JSON dependencies field, 
        "express": "^4.16.4" means that when project depend. are updated, this ver. is atleast this but can be 4.X.Y, but not 5.X.Y
        __ npm install __ updates the needed dependencies if project is started on another computer (after git clone?)
    6. npm install --savedev nodemon - make sure nodemon is in package.JSON in dev-dependencies block
        Add new script - node_modules/.bin/nodemon src/app.js
        nodemon allows you to just refresh page to see changes
        run the script with __ npm run watch __
    7. npm install cors --save - cross-origin resource sharing
*/

/*  http://expressjs.com/en/4x/api.html
    .res.end() - Ends the response process. This method actually comes from Node core, specifically the response.end() method of http.ServerResponse.
*/
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors()) //not working ?

// Define 2 _routes_, handles incoming GET requests
app.get('/', (req, res) => {
    res.send('<h1>Hello Worssld!</h1>')
})
app.get('/json', (req, res) => {
    res.json(notes)
})

// GET with parameters
app.get('/notes/:id', (request, response) => {
    const id = Number(request.params.id)  // request.params.id is a string, so this is needed  
    const note = notes.find(note => note.id === id)
    response.json(note)
})

// Receiving data with POST
/*  See __ post_json.rest __    */
app.post('/notes', (request, response) => {
  const body = request.body
  if (body.content === undefined) {
    return response.status(400).json({error: 'content missing'})
  }
  const note = {
    content: body.content,
    important: body.important|| false,
    date: new Date(),
    id: generateId()
  }
  notes = notes.concat(note)
  response.json(notes)
})
const generateId = () => {
  const maxId = notes.length > 0 ? notes.map(n => n.id).sort().reverse()[0] : 1
  return maxId + 1
}

// form post test
app.post("/msg", (request, response) => {
  const msg = request.body.message_value
  response.send(msg)
})

const port = 3001
app.listen(port)
console.log(`Server running on port ${port}`)

// JSON data for examples
let notes = [
    {
      id: 1,
      content: 'HTML on helppoa',
      date: '2017-12-10T17:30:31.098Z',
      important: true
    },
    {
      id: 2,
      content: 'Selain pystyy suorittamaan vain javascriptiä',
      date: '2017-12-10T18:39:34.091Z',
      important: false
    },
    {
      id: 3,
      content: 'HTTP-protokollan tärkeimmät metodit ovat GET ja POST',
      date: '2017-12-10T19:20:14.298Z',
      important: true
    }
  ]