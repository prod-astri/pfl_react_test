// import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import burger from "../assets/burger.svg"

export default function HeaderButtons(props) {
  
  return (
    props.isWide ?
        <div>
            <button>btn</button>
            <button>btn</button>
            <button>btn</button>
        </div>
        :
        <img src={burger} alt='menu icon' style={{ width: '20px' }} />
  )
}

// const styles = StyleSheet.create({})