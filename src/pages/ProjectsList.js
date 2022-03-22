import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import projectsData from "../projects-data.json"
import ProjectCard from "../components/ProjectCard";

export default function ProjectsList() {
    const [projects] = useState(projectsData);

    return (
        // using View instead of a div already changes the appearence
        <View style={styles.container}>
            <h2> Projects List</h2>
            {projects.map(project => <ProjectCard key={project._id} project={project}/>)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffeeee",
        padding:"5px "
    }
});