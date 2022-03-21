
export default function ProjectCard(props) {
    const {project} = props
    return (
        <div>
            <h3>{project.name}</h3>
            {project.locations.map(location => {
               return <small key={project._id + location}>{location}</small>
            })}
        </div>
    )
  
}
