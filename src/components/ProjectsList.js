import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import projectsData from "../projects-data.json"

export default function ProjectsList() {
    const [projects] = useState(projectsData);

    return (
        // using View instead of a div already changes the appearence
        <View style={styles.container}>
            <h2> Projects List</h2>
            {projects.map(project => {
                return (
                    <div key={project._id}>
                        <h3>{project.name}</h3>
                        {project.locations.map(location => {
                           return <small key={project._id + location}>{location}</small>
                        })}
                    </div>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffeeee"
    }
});