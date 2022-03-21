// import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import burger from "../assets/burger.svg"

export default function HeaderButtons(props) {
    const { theme, toggleTheme } = props
    return (
        <div>
            {props.isWide ?
                <div>
                    <button>btn</button>
                    <button>btn</button>
                    <button>btn</button>
                </div>
                :
                <img src={burger} alt='menu icon' style={{ width: '20px' }} />
            }
            <button className={theme} onClick={toggleTheme}>
                {theme === 'dark' ? "set light theme" : "set dark theme"}
            </button>
        </div>)
}

// const styles = StyleSheet.create({})