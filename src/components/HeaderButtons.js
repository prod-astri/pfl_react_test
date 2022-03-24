import React from 'react'
import { ReactComponent as Burger } from "../assets/burger.svg"
import ActiveLink from './ActiveLink'

export default function HeaderButtons(props) {
    const { theme, toggleTheme, dropDown } = props
    const redirectToAstri = () => {
        // eslint-disable-next-line no-restricted-globals
        confirm('This will open a new page. Proceed?') &&
            window.open('https://www.prodastri.com', '_blank');

    }

    function makeButtons(className) {
        return <>
            {/* adding the classname and activeclass prop is optional, will default to "navLink" and "selected" */}
            <ActiveLink path='/' inner='Home' classname={className} activeclass='selected'></ActiveLink>
            <ActiveLink path='/projects' inner='Projects' classname={className}></ActiveLink>
            <button onClick={toggleTheme} className={className}>
                {theme === 'dark' ? "set light theme" : "set dark theme"}
            </button>
            <button className={className} onClick={redirectToAstri} >prodastri</button>
        </>
    }

    return (
        <div className='headerButtons'>


            {props.isWide ?
                makeButtons('headerBtn')
                :
                <Burger />
            }

            {dropDown && <div className='dropDown'>
                {makeButtons('dropDownBtn')}
            </div>}
        </div>)
}

// const styles = StyleSheet.create({})