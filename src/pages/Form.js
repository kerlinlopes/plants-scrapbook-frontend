import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = ({ initialPlant, handleSubmit, buttonLabel }) => {
  const navigate = useNavigate();

  // The Form State
  const [formData, setFormData] = useState(initialPlant);

  // Handle Change to Update State when Input changes
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // HandleSubmit for when the form submited
  const handleSubmission = (event) => {
    // prevent the page from refresh
    event.preventDefault();
    // pass the formData to the handleSubmit function passes as props
    handleSubmit(formData);
    //push user back to main page
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmission}>
      <input
        type="text"
        id="name"
        onChange={handleChange}
        value={formData.name}
        placeholder="PLANT TITLE"
        name="name"
      />
      <textarea
        type="text"
        id="description"
        onChange={handleChange}
        value={formData.description}
        placeholder="PLANT DESCRIPTION"
        name="description"
      />
      <input
        type="text"
        id="image"
        onChange={handleChange}
        value={formData.image}
        placeholder="IMAGE URL"
        name="image"
      />
      <input type="submit" id="new-button" value={buttonLabel} />

    </form>
  );
};

export default Form;
