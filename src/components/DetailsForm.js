import React, { useState } from 'react';

const DetailsForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    designDetails: '',
    interactivity: '',
    stateManagement: '',
    libraries: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="designDetails" className="block text-sm font-medium text-gray-700 mb-1">
          Design Details
        </label>
        <textarea
          id="designDetails"
          name="designDetails"
          rows="3"
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Describe the component's design (colors, layout, dimensions, etc.)"
          value={formData.designDetails}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <div>
        <label htmlFor="interactivity" className="block text-sm font-medium text-gray-700 mb-1">
          Interactivity
        </label>
        <textarea
          id="interactivity"
          name="interactivity"
          rows="2"
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Specify any interactive elements (hover effects, click actions, etc.)"
          value={formData.interactivity}
          onChange={handleChange}
        ></textarea>
      </div>

      <div>
        <label htmlFor="stateManagement" className="block text-sm font-medium text-gray-700 mb-1">
          State Management
        </label>
        <textarea
          id="stateManagement"
          name="stateManagement"
          rows="2"
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Describe any state management needs"
          value={formData.stateManagement}
          onChange={handleChange}
        ></textarea>
      </div>

      <div>
        <label htmlFor="libraries" className="block text-sm font-medium text-gray-700 mb-1">
          Preferred Libraries/Frameworks
        </label>
        <input
          type="text"
          id="libraries"
          name="libraries"
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="e.g., Tailwind CSS, styled-components"
          value={formData.libraries}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Generate Component
      </button>
    </form>
  );
};

export default DetailsForm;