import React from 'react'
import burger from "../assets/burger.svg"
import { Link } from 'react-router-dom';

export default function HeaderButtons(props) {
    const { theme, toggleTheme } = props
    return (
        <div>
            <button className={theme} onClick={toggleTheme}>
                {theme === 'dark' ? "set light theme" : "set dark theme"}
            </button>
            
            {props.isWide ?
                <div>
                    <button>{<Link to="/projects"> Projects </Link> }</button>
                    <button>{<Link to="/"> Home </Link> }</button>
                </div>
                :
                <img src={burger} alt='menu icon' style={{ width: '20px' }} />
            }
        </div>)
}

// const styles = StyleSheet.create({})