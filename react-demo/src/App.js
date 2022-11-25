import "./App.css"
import { useState } from "react"
import { numbers, upperCaseLetters, lowerCaseLetters, specialCharacters} from "./characters"

function App() {
  const [password, setPassword] = useState('')
  const [passwordLength, setPasswordLength] = useState(15)
  const [includeUppercase, setIncludeUppercase] = useState(false)
  const [includeLowercase, setIncludeLowercase] = useState(false)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)

  const handleGeneratorPassword = (e) => {
    let charactersList = ""

    if(includeUppercase){
      charactersList = charactersList + upperCaseLetters
    }

    if(includeLowercase){
      charactersList = charactersList + lowerCaseLetters
    }

    if(includeNumbers){
      charactersList = charactersList + numbers
    }

    if(includeSymbols){
      charactersList = charactersList + specialCharacters
    }

    setPassword(createpassword(charactersList))
  } 

  const createpassword = (charactersList) => {
    let password = ""
    const charactersLength = charactersList.length;

    for (let i = 0; i < passwordLength; i++ ){
      const charactersIndex = Math.random() * charactersLength
      password = password + charactersList.charAt(charactersIndex)
    }
    return password;
  }

  const copyToClipboard = () => {
    const newTextArea = document.createElement("textarea")
    newTextArea.innerText = password;
    document.body.appendChild(newTextArea)
    newTextArea.select()
    document.execCommand("copy")
    newTextArea.remove()
  }

  const handleCopyPassword = (e) => {
    copyToClipboard()
  }

return(
  <div className="App">
    <div className="container">
      <div className="generator-container">
        <h2 className="pass-generator-header">Generator Password</h2>
        <div className="pass-generator"><h3>{password}</h3><button onClick={handleCopyPassword} className="copy-btn">Copy</button></div>

        <div className="form-group">
          <label htmlFor="password-strength">Password length</label>
          <input defaultValue={passwordLength} onChange={(e) => setPasswordLength(e.target.value)} type="number" id="password-strength" name="password-strength" max="20" min="10"></input>
        </div>


        <div className="form-group">
          <label htmlFor="uppercase-letters">Include Uppercase Letters</label>
          <input checked={includeUppercase} onChange={(e) => setIncludeUppercase(e.target.checked)} type="checkbox"  id="password-strength" name="password-strength"></input>
        </div>


        <div className="form-group">
          <label htmlFor="lowercase-letters">Include Lowercase Letters</label>
          <input checked={includeLowercase} onChange={(e) => setIncludeLowercase(e.target.checked)} type="checkbox" id="password-strength" name="password-strength"></input>
        </div>


        <div className="form-group">
          <label htmlFor="include-numbers">Include Numbers</label>
          <input checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} type="checkbox" id="include-numbers" name="include-numbers"></input>
        </div>


        <div className="form-group">
          <label htmlFor="include-symbols">Include Symbols</label>
          <input checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} type="checkbox" id="include-symbols" name="include-symbols"></input>
        </div>


        <button onClick={handleGeneratorPassword} className="generator-btn">Generator Password</button>
      </div>
    </div>
  </div>
)


}

export default App