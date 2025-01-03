import Education from "./Education";
import Experience from "./Experience";
import PersonalDetails from "./PersonalDetails";
import ResumeOptions from "./ResumeActions";

function InputSection({
  educations,
  updateEducations,
  experiences,
  updateExperiences,
  formData,
  setFormData,
  clearAll,
  loadAll,
}) {
  return (
    <section id="input-section">
      <ResumeOptions clearAll={clearAll} loadAll={loadAll} />
      <PersonalDetails formData={formData} setFormData={setFormData} />
      <Education educations={educations} updateEducations={updateEducations} />
      <Experience
        experiences={experiences}
        updateExperiences={updateExperiences}
      />
    </section>
  );
}

export default InputSection;
