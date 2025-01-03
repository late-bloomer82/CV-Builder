import "./App.css";
import CvSection from "./components/CV/CvSection";
import InputSection from "./components/Inputs/InputSection";
import OptionSection from "./components/Options/OptionSection";
import { useState } from "react";

function App() {
  // Initial Data for Educations, Experiences, and FormData
  const initialEducations = [
    {
      school: "London City University",
      degree: "Bachelors in Economics",
      startDate: "08/2020",
      endDate: "present",
      location: "New York City, US",
      visible: true,
    },
    {
      school: "Hidden University",
      degree: "Master's Degree in Math",
      startDate: "08/2020",
      endDate: "present",
      location: "New York City, US",
      visible: true,
    },
  ];

  const initialExperiences = [
    {
      companyName: "Umbrella Inc.",
      positionTitle: "UX & UI Designer",
      startDate: "08/2020",
      endDate: "present",
      location: "New York City, US",
      description:
        "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",
      visible: true,
    },
    {
      companyName: "Black Mesa Labs",
      positionTitle: "UX Research Assistant",
      startDate: "04/2018",
      endDate: "02/2019",
      location: "Berlin, Germany",
      description:
        "Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.",
      visible: true,
    },
  ];

  const initialFormData = {
    fullName: "Zoe Lancaster",
    email: "finalzoe@gg.com",
    phoneNumber: "123-456-7890",
    address: "7th Avenue Henesys Road",
  };

  // States for Educations, Experiences, and FormData
  const [educations, setEducations] = useState(initialEducations);
  const [experiences, setExperiences] = useState(initialExperiences);
  const [formData, setFormData] = useState(initialFormData);

  // Function to update educations
  const updateEducations = (updatedEducations) => {
    setEducations(updatedEducations);
  };

  // Function to update experiences
  const updateExperiences = (updatedExperiences) => {
    setExperiences(updatedExperiences);
  };

  // Function to clear all data
  const clearAllData = () => {
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      address: "",
    });
    setEducations([]);
    setExperiences([]);
  };

  // Function to load the initial data
  const loadAll = () => {
    setFormData(initialFormData);
    setEducations(initialEducations);
    setExperiences(initialExperiences);
  };

  return (
    <div id="app">
      <OptionSection />
      {/* Pass educations state, update function, and other props to InputSection */}
      <InputSection
        educations={educations}
        updateEducations={updateEducations}
        experiences={experiences}
        updateExperiences={updateExperiences}
        formData={formData}
        setFormData={setFormData}
        clearAll={clearAllData}
        loadAll={loadAll}
      />
      {/* Pass educations state to CvSection to display */}
      <CvSection
        educations={educations.filter((edu) => edu.visible)}
        experiences={experiences.filter((exp) => exp.visible)}
        formData={formData}
      />
    </div>
  );
}

export default App;
