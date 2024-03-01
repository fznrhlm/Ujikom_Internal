import React, { useState } from "react";
import Project from "./Project";

const ProjectForm = ({ project: initialProject, onSave, onCancel }) => {
  const [project, setProject] = useState(initialProject);
  const [errors, setErrors] = useState({
    strCategory: "",
    strCategoryDescription: "",
    price: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid()) return;
    onSave(project);
  };

  const handleChange = (event) => {
    const { type, name, value } = event.target;

    let updatedValue = value;

    if (type === "number") {
      updatedValue = Number(updatedValue);
    }

    const change = {
      [name]: updatedValue,
    };

    let updatedProject;

    setProject((p) => {
      updatedProject = new Project({ ...p, ...change });
      return updatedProject;
    });

    setErrors(() => validate(updatedProject));
  };

  const validate = (project) => {
    let errors = { strCategory: "", strCategoryDescription: "", price: "" };

    if (project.strCategory.length === 0) {
      errors.strCategory = "Name is required";
    } else if (project.strCategory.length < 3) {
      errors.strCategory = "Name needs to be more than 3 characters";
    }

    if (project.strCategoryDescription.length === 0) {
      errors.strCategoryDescription = "Description is required";
    }

    if (project.price <= 0) {
      errors.price = "Price must be more than Rp 0";
    }

    return errors;
  };

  const isValid = () => {
    return (
      errors.strCategory.length === 0 &&
      errors.strCategoryDescription.length === 0 &&
      errors.price.length === 0
    );
  };

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <h2>Menu</h2>
      <div className="form-group">
        <label htmlFor="strCategory">Project Name</label>
        <input
          type="text"
          name="strCategory"
          placeholder="Enter Name"
          value={project.strCategory}
          onChange={handleChange}
        />
        {errors.strCategory.length > 0 && (
          <p className="error">{errors.strCategory}</p>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="strCategoryDescription">Project Description</label>
        <textarea
          name="strCategoryDescription"
          placeholder="Enter Description"
          cols="30"
          rows="1"
          value={project.strCategoryDescription}
          onChange={handleChange}
        />
        {errors.strCategoryDescription.length > 0 && (
          <p className="error">{errors.strCategoryDescription}</p>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="price">Project Price</label>
        <input
          type="number"
          name="price"
          placeholder="Enter Price"
          value={project.price}
          onChange={handleChange}
        />
        {errors.price.length > 0 && <p className="error">{errors.price}</p>}
      </div>
      <div className="button-group">
        <button className="primary medium" type="submit">
          Save
        </button>
        <button className="secondary medium" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ProjectForm;