import React, { useState } from 'react';
import axios from 'axios';
import ImageUploader from './components/ImageUploader';
import DetailsForm from './components/DetailsForm';
import CodeDisplay from './components/CodeDisplay';
import LoadingBar from './components/LoadingBar';
const url = process.env.REACT_APP_INTERNAL_BACKEND_URL || 'http://localhost:3001';
const App = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [generatedComponent, setGeneratedComponent] = useState(null);

  const handleImageUpload = (file) => {
    setUploadedImage(file);
  };

  const handleDetailsSubmit = async (details) => {
    if (!uploadedImage) {
      alert('Please upload an image first.');
      return;
    }

    setIsLoading(true);

    const formData = new FormData();
    formData.append('image', uploadedImage);
    formData.append('designDetails', details.designDetails);
    formData.append('interactivity', details.interactivity);
    formData.append('stateManagement', details.stateManagement);
    formData.append('libraries', details.libraries);

    try {
      console.log(url);
      console.log(process.env)
      const response = await axios.post(url+'/generate-component', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setGeneratedComponent(response.data.component);
    } catch (error) {
      console.error('Error generating component:', error);
      alert('An error occurred while generating the component. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">UI Component Generator</h1>
      
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-2">Step 1: Upload Image</h2>
          <p className="text-gray-600 mb-4">Upload a PNG or JPEG image of the UI component you want to generate code for.</p>
          <ImageUploader onImageUpload={handleImageUpload} />
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-px bg-gray-200 mx-4"></div>

        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-2">Step 2: Provide Details</h2>
          <p className="text-gray-600 mb-4">Describe the component's design, interactivity, and any specific requirements.</p>
          <DetailsForm onSubmit={handleDetailsSubmit} />
        </div>
      </div>
      
      {isLoading && <LoadingBar />}
      
      {generatedComponent && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-2">Step 3: Review Generated Code</h2>
          <p className="text-gray-600 mb-4">Here's the React component code based on your input. You can copy and use this in your project.</p>
          <CodeDisplay code={generatedComponent} />
        </div>
      )}
    </div>
  );
};

export default App;