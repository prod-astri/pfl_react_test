import React from "react";
import { StyleSheet } from "react-native";

export default function ProjectsList(props) {
    return (
        <div style={styles.container}>
            <h2> Projects </h2>
            {props.children}
        </div>
    )
}

const styles = {
    container: {
        backgroundColor: "#ffeeee"
      }
}