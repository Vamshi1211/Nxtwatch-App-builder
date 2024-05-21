import {Component} from 'react'
import ThemeContext from './context/ThemeContext'
import LoginRoute from './components/LoginRoute'
import './App.css'

class App extends Component {
  state = {isDarkTheme: false}

  themeChange = () => {}

  render() {
    const {isDarkTheme} = this.state
    return (
      <ThemeContext.Provider
        value={{isDarkTheme, themeChange: this.themeChange}}
      >
        <LoginRoute />
      </ThemeContext.Provider>
    )
  }
}

export default App
