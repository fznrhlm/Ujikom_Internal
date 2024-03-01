import React from 'react'
import { Link } from 'react-router-dom'

const FormatDescription = (description) => {
    return description.substring(0, 50) + "..."
}

const ProjectCard = (props) => {
    const { project, onEdit } = props

    const handleEditClick = (projectBeingEdited) => {
        onEdit(projectBeingEdited)
    }

    return (
        <div className='card'>
            <img src={project.strCategoryThumb} alt={project.strCategory}className='projectImg'/>
            <section className="section-dark">
                <Link to={"/projects/" + project.id}>

                    <h5 className='strong'>
                        <strong>{project.strCategory}</strong>
                    </h5>
                    <p>{FormatDescription(project.strCategoryDescription)}</p>
                    <p> price: {project.price.toLocaleString()}</p>

                </Link>
                <button onClick={ () => handleEditClick(project)}>
                    <span className="icon-edit"></span>
                    Edit
                </button>   
            </section>
        </div>
    )
}


export default ProjectCard