import { useState } from "react";
import Icon from "@mdi/react";
import { mdiEyeOffOutline, mdiEyeOutline, mdiDelete } from "@mdi/js";
import educationIcon from "../../assets/school.svg";
import arrowIcon from "../../assets/chevron-down.svg";

function Education({ educations, updateEducations }) {
  const [isVisible, setIsVisible] = useState(false);
  // const [iconHiddenStates, setIconHiddenStates] = useState({});

  // Add new education
  const addEducation = () => {
    const newEducation = {
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
      visible: true,
    };
    updateEducations([...educations, newEducation]);
  };

  // Toggle form visibility
  const toggleFormVisibility = (index) => {
    const newEducations = educations.map((education, i) => ({
      ...education,
      isFormVisible:
        i === index ? !education.isFormVisible : education.isFormVisible,
    }));
    updateEducations(newEducations);
  };

  // Handle input changes
  const handleInputChange = (index, field, value) => {
    const newEducations = [...educations];
    newEducations[index][field] = value;
    updateEducations(newEducations);
  };

  // Remove an education
  const removeEducation = (index) => {
    const newEducations = educations.filter((_, i) => i !== index);
    updateEducations(newEducations);
  };

  const toggleEducationVisibility = (e, index) => {
    // Toggle the `visible` property for the clicked education item
    e.stopPropagation();
    const updatedEducations = educations.map((education, i) =>
      i === index ? { ...education, visible: !education.visible } : education
    );
    updateEducations(updatedEducations);
  };

  return (
    <div id="education-section">
      <button
        className="expand-section"
        onClick={() => setIsVisible(!isVisible)}
      >
        <h2 className="expand-section-header">
          <img src={educationIcon} className="education-icon" alt="" />
          Education
        </h2>
        <img src={arrowIcon} alt="" className="arrow-icon" />
      </button>
      <div className={`education-content ${isVisible ? "visible" : ""}`}>
        <div className="forms-container">
          {educations.map((education, index) => (
            <div className="education-wrapper" key={index}>
              <button
                className="section-form"
                onClick={() => toggleFormVisibility(index)}
              >
                <p className="section-form-text">
                  {education.school || "New Education"}
                </p>
                <Icon
                  className="show-icon"
                  path={education.visible ? mdiEyeOutline : mdiEyeOffOutline}
                  size={1}
                  onClick={(e) => toggleEducationVisibility(e, index)}
                />
              </button>
              {education.isFormVisible && (
                <form className="education-form">
                  <div className="input-group">
                    <label htmlFor={`school-name-${index}`}>School:</label>
                    <input
                      type="text"
                      id={`school-name-${index}`}
                      placeholder="Enter school/university name"
                      value={education.school}
                      onChange={(e) =>
                        handleInputChange(index, "school", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor={`degree-${index}`}>Degree</label>
                    <input
                      type="text"
                      id={`degree-${index}`}
                      placeholder="Enter degree"
                      value={education.degree}
                      onChange={(e) =>
                        handleInputChange(index, "degree", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div className="dates-group">
                    <div className="input-group">
                      <label htmlFor={`start-date-${index}`}>Start Date</label>
                      <input
                        type="text"
                        id={`start-date-${index}`}
                        placeholder="Enter start date"
                        value={education.startDate}
                        onChange={(e) =>
                          handleInputChange(index, "startDate", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="input-group">
                      <label htmlFor={`end-date-${index}`}>End Date</label>
                      <input
                        type="text"
                        id={`end-date-${index}`}
                        placeholder="Enter end date"
                        value={education.endDate}
                        onChange={(e) =>
                          handleInputChange(index, "endDate", e.target.value)
                        }
                        required
                      />
                    </div>
                  </div>
                  <div className="input-group">
                    <label htmlFor={`location-${index}`}>Location</label>
                    <input
                      type="text"
                      id={`location-${index}`}
                      placeholder="Enter location"
                      value={education.location}
                      onChange={(e) =>
                        handleInputChange(index, "location", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div className="buttons-group">
                    <button
                      className="delete"
                      type="button"
                      onClick={() => removeEducation(index)}
                    >
                      <Icon path={mdiDelete} size={1} />
                      Delete
                    </button>
                    <div className="buttons-container">
                      <button
                        className="cancel"
                        type="button"
                        onClick={() => toggleFormVisibility(index)}
                      >
                        Cancel
                      </button>
                      <button
                        className="save"
                        type="submit"
                        onClick={() => toggleFormVisibility(index)}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          ))}
        </div>
        <button className="create-form" onClick={addEducation}>
          + Education
        </button>
      </div>
    </div>
  );
}

export default Education;
