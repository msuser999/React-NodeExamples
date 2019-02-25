import React from 'react'
import axios from 'axios'

/* Component structure: 
    class Name extends React.Compoenent {
        methods, variables..
        render() {
            return(
                >> JSX here <<
            )
        }
    }
*/
class ExampleApp extends React.Component {  
    constructor() { // cons.(props) needed??
        super()
        this.state = {  // Init. class variables here
            note: "this is a note"
        }
    }

    // Send a string from the form to the backend
    sendString = (event) => {
        event.preventDefault() // Prevent the default action of sending form (..?)
        const message = event.target.elements.message.value // Get the input field string
        axios
        .post('http://localhost:3001/msg', {'message_value': message})  // 'message_value' is referenced in the backend
        .then(response => {
          const notes = response.data
          console.log(notes)
        })   
    }

    render() {
        return (
            <div>
                <h3>Forms</h3>
                <form onSubmit={this.sendString}>
                    <input
                        name="message"  // Input field 
                    />
                    <button type="submit">tallenna</button>
                </form>
            </div>
        )
  }
}

export default ExampleApp