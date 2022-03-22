import React from 'react'
import burger from "../assets/burger.svg"
import ActiveLink from './ActiveLink'

export default function HeaderButtons(props) {
    const { theme, toggleTheme } = props
    const redirectToAstri = () => {
        // eslint-disable-next-line no-restricted-globals
        confirm('This will open a new page. Proceed?') &&
            window.open('https://www.prodastri.com', '_blank');

    }
    return (
        <div>
            <button onClick={toggleTheme}>
                {theme === 'dark' ? "set light theme" : "set dark theme"}
            </button>

            {props.isWide ?
                <div>
                {/* adding the classname and activeclass prop is optional, will default to "navLink" and "selected" */}
                <ActiveLink path='/' inner='Home' classname={`navLink ${theme}`} activeclass='selected'></ActiveLink>
                <ActiveLink path='/projects' classname={`navLink ${theme}`} inner='Projects' ></ActiveLink>
                   
                    <button onClick={redirectToAstri} className={theme}>prodastri</button>
                </div>
                :
                <img src={burger} alt='menu icon' style={{ width: '20px' }} className={theme}/>
            }
        </div>)
}

// const styles = StyleSheet.create({})