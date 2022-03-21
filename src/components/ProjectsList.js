import React from "react";
import { StyleSheet, View } from "react-native";

export default function ProjectsList(props) {
    return (
        // using View instead of a div already changes the appearence
        <View style={styles.container}>
            <h2> Projects </h2>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffeeee"
      }
});