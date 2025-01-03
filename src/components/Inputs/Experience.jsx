import experienceIcon from "../../assets/briefcase-variant.svg";
import arrowIcon from "../../assets/chevron-down.svg";
import { useState } from "react";
import Icon from "@mdi/react";
import { mdiEyeOffOutline, mdiEyeOutline, mdiDelete } from "@mdi/js";

function Experience({ experiences, updateExperiences }) {
  const [isExpandVisible, setIsExpandVisible] = useState(false);

  const handleInputChange = (index, field, value) => {
    const newExperiences = [...experiences];
    newExperiences[index][field] = value;
    updateExperiences(newExperiences);
  };

  const addExperience = () => {
    const newExperience = {
      companyName: "",
      positionTitle: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
      visible: true,
    };
    updateExperiences([...experiences, newExperience]);
  };

  const removeExperience = (index) => {
    const newExperiences = experiences.filter((_, i) => i !== index);
    updateExperiences(newExperiences);
  };

  const toggleFormVisibility = (index) => {
    const newExperiences = experiences.map((experience, i) => ({
      ...experience,
      isFormVisible:
        i === index ? !experience.isFormVisible : experience.isFormVisible,
    }));
    updateExperiences(newExperiences);
  };
  const toggleExperienceVisibility = (e, index) => {
    e.stopPropagation();
    // Toggle the `visible` property for the clicked experience item
    const updatedExperiences = experiences.map((experience, i) =>
      i === index ? { ...experience, visible: !experience.visible } : experience
    );
    updateExperiences(updatedExperiences);
  };

  return (
    <div id="experience-section">
      <button
        className="expand-section"
        onClick={() => {
          setIsExpandVisible(!isExpandVisible);
        }}
      >
        <h2 className="expand-section-header">
          <img src={experienceIcon} className="experience-icon" alt="" />
          Experience
        </h2>
        <img src={arrowIcon} alt="" className="arrow-icon" />
      </button>
      <div className={`experience-content ${isExpandVisible ? "visible" : ""}`}>
        <div className="forms-container">
          {experiences.map((experience, index) => (
            <div className="experience-wrapper" key={index}>
              <button
                className="section-form"
                onClick={() => toggleFormVisibility(index)}
              >
                <p className="section-form-text">
                  {experience.companyName || "New Experience"}
                </p>
                <Icon
                  className="show-icon"
                  path={experience.visible ? mdiEyeOutline : mdiEyeOffOutline}
                  size={1}
                  onClick={(e) => toggleExperienceVisibility(e, index)}
                />
              </button>
              {experience.isFormVisible && (
                <form className="experience-form">
                  <div className="input-group">
                    <label htmlFor={`company-name-${index}`}>Company:</label>
                    <input
                      type="text"
                      id={`company-name-${index}`}
                      placeholder="Enter company name"
                      value={experience.companyName}
                      onChange={(e) =>
                        handleInputChange(index, "companyName", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor={`position-title-${index}`}>
                      Position Title
                    </label>
                    <input
                      type="text"
                      id={`position-title-${index}`}
                      placeholder="Enter position title"
                      value={experience.positionTitle}
                      onChange={(e) =>
                        handleInputChange(
                          index,
                          "positionTitle",
                          e.target.value
                        )
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
                        value={experience.startDate}
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
                        value={experience.endDate}
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
                      value={experience.location}
                      onChange={(e) =>
                        handleInputChange(index, "location", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor={`description-${index}`}>Description</label>
                    <textarea
                      id={`description-${index}`}
                      placeholder="Enter description"
                      value={experience.description}
                      onChange={(e) =>
                        handleInputChange(index, "description", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div className="buttons-group">
                    <button
                      className="delete"
                      type="button"
                      onClick={() => removeExperience(index)}
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
                        onClick={(e) => {
                          e.preventDefault();
                          toggleFormVisibility(index);
                        }}
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
        <button className="create-form" onClick={addExperience}>
          + Experience
        </button>
      </div>
    </div>
  );
}

export default Experience;
