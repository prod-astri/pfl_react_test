import React from 'react'
import {ReactComponent as Burger} from "../assets/burger.svg"
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
            <button onClick={toggleTheme} className='headerBtn'>
                {theme === 'dark' ? "set light theme" : "set dark theme"}
            </button>

            {props.isWide ?
                <>
                {/* adding the classname and activeclass prop is optional, will default to "navLink" and "selected" */}
                <ActiveLink path='/' inner='Home' classname='headerBtn' activeclass='selected'></ActiveLink>
                <ActiveLink path='/projects' inner='Projects' classname='headerBtn'></ActiveLink>
                   
                    <button className='headerBtn' onClick={redirectToAstri} >prodastri</button>
                </>
                :
                <Burger />
            }
        </div>)
}

// const styles = StyleSheet.create({})