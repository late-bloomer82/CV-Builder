import mailIcon from "../../assets/email-outline.svg";
import phoneIcon from "../../assets/phone.svg";
import mapIcon from "../../assets/map-marker.svg";

function CvSection({ educations, experiences, formData }) {
  return (
    <section id="cv-section">
      <header className="cv-header">
        <h1>{formData.fullName}</h1>
        <div className="contact-info">
          <div className="contact-box">
            <img src={mailIcon} alt="" className="cv-icon" />
            {formData.email}
          </div>
          <div className="contact-box">
            <img src={phoneIcon} alt="" className="cv-icon" />
            {formData.phoneNumber}
          </div>
          <div className="contact-box">
            <img src={mapIcon} alt="" className="cv-icon" />
            {formData.address}
          </div>
        </div>
      </header>
      <div className="cv-content">
        <div className="education-section">
          <h3 className="cv-content-headers">Education</h3>
          {educations.map((education, index) => (
            <div className="education-info" key={index}>
              <div className="education-info-group">
                <p>
                  {education.startDate} – {education.endDate}
                </p>
                <p>{education.location}</p>
              </div>
              <div className="education-info-group">
                <h4>{education.school}</h4>
                <p>{education.degree}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="experience-section">
          <h3 className="cv-content-headers">Professional Experience</h3>
          {experiences.map((experience, index) => (
            <div className="professional-experience-info" key={index}>
              <div className="experience-info-content">
                <p>
                  {experience.startDate} – {experience.endDate}
                </p>
                <p>{experience.location}</p>
              </div>
              <div className="experience-info-content">
                <h4>{experience.companyName}</h4>
                <p>{experience.positionTitle}</p>
                <p>{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CvSection;
