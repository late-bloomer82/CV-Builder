function PersonalDetails({ formData, setFormData }) {
  // State to manage input values

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <form id="personal-section" onSubmit={handleSubmit}>
      <h1>Personal Details</h1>
      <div className="input">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Enter first and last name"
          value={formData.fullName}
          onChange={handleChange}
        />
      </div>
      <div className="input">
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter email address"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="input">
        <label htmlFor="phoneNumber">Phone number</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="Enter phone number"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </div>
      <div className="input">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="City, Country"
          value={formData.address}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}

export default PersonalDetails;
