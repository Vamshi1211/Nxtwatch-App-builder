import {Component} from 'react'
import ThemeContext from '../../context/ThemeContext'
import {
  LightThemeContainer,
  LightThemeCardContainer,
  ThemeImage,
  FormContainer,
  InputContainer,
  LightLabelText,
  LightInputElement,
  CheckBoxContainer,
  CheckBoxElement,
  LightCheckBoxLabelText,
  LoginButton,
  //   DarkThemeContainer,
  //   DarkThemeCardContainer,
  //   DarkLabelText,
} from './styledComponents'

class LoginRoute extends Component {
  //   darkThemeView = () => (
  //       <DarkThemeContainer>
  //           <DarkThemeCardContainer>
  //             <ThemeImage
  //           src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
  //           alt="website logo"
  //         />

  //         <FormContainer>
  //           <InputContainer>
  //             <DarkLabelText htmlFor="usernameId">USERNAME</DarkLabelText>
  //             <DarkInputElement
  //               type="text"
  //               id="usernameId"
  //               placeholder="Username"
  //             />
  //           </InputContainer>
  //           <InputContainer>
  //             <LightLabelText htmlFor="passwordId">PASSWORD</LightLabelText>
  //             <LightInputElement
  //               type="password"
  //               id="passwordId"
  //               placeholder="Password"
  //             />
  //           </InputContainer>
  //           <CheckBoxContainer>
  //             <CheckBoxElement type="checkbox" id="checkboxId" />
  //             <LightCheckBoxLabelText htmlFor="checkboxId">
  //               Show Password
  //             </LightCheckBoxLabelText>
  //           </CheckBoxContainer>
  //           <LoginButton type="button">Login</LoginButton>
  //         </FormContainer>
  //           </DarkThemeCardContainer>
  //       </DarkThemeContainer>
  //   )

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <LightThemeContainer isDarkTheme={isDarkTheme}>
                <LightThemeCardContainer isDarkTheme={isDarkTheme}>
                  {isDarkTheme ? (
                    <ThemeImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                      alt="website logo"
                    />
                  ) : (
                    <ThemeImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="website logo"
                    />
                  )}

                  <FormContainer>
                    <InputContainer>
                      <LightLabelText
                        isDarkTheme={isDarkTheme}
                        htmlFor="usernameId"
                      >
                        USERNAME
                      </LightLabelText>
                      <LightInputElement
                        type="text"
                        id="usernameId"
                        placeholder="Username"
                        isDarkTheme={isDarkTheme}
                      />
                    </InputContainer>
                    <InputContainer>
                      <LightLabelText
                        isDarkTheme={isDarkTheme}
                        htmlFor="passwordId"
                      >
                        PASSWORD
                      </LightLabelText>
                      <LightInputElement
                        type="password"
                        id="passwordId"
                        placeholder="Password"
                        isDarkTheme={isDarkTheme}
                      />
                    </InputContainer>
                    <CheckBoxContainer>
                      <CheckBoxElement type="checkbox" id="checkboxId" />
                      <LightCheckBoxLabelText
                        isDarkTheme={isDarkTheme}
                        htmlFor="checkboxId"
                      >
                        Show Password
                      </LightCheckBoxLabelText>
                    </CheckBoxContainer>
                    <LoginButton type="button">Login</LoginButton>
                  </FormContainer>
                </LightThemeCardContainer>
              </LightThemeContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default LoginRoute
