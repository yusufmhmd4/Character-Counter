import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import './App.css'

class App extends Component {
  state = {characterList: [], textInput: ''}

  onSubmitForm = event => {
    event.preventDefault()
    const {textInput} = this.state
    const newValue = {
      id: uuidV4(),
      textInput,
    }
    this.setState(prevState => ({
      characterList: [...prevState.characterList, newValue],
      textInput: '',
    }))
  }

  onchangeInput = event => {
    this.setState({
      textInput: event.target.value,
    })
  }

  render() {
    const {characterList, textInput} = this.state

    return (
      <div className="app-container">
        <div className="character-container">
          <div className="character-count-container">
            <div className="character-count-container-heading-container">
              <h1 className="character-count-container-heading">
                {' '}
                Count the characters like a Boss...
              </h1>
            </div>
            {characterList.length > 0 ? (
              <ul className="character-list-container">
                {characterList.map(each => (
                  <li key={each.id}>
                    <p className="list-element">
                      {each.textInput} : {each.textInput.length}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                className="no-output"
                alt="no user inputs"
              />
            )}
          </div>
          <div className="character-input-container">
            <h1 className="input-container-heading">Character Counter</h1>
            <form className="form-container" onSubmit={this.onSubmitForm}>
              <input
                type="text"
                className="input"
                placeholder="Enter the Characters here"
                value={textInput}
                onChange={this.onchangeInput}
              />
              <button type="submit" className="button">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default App
