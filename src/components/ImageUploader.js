import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { CloudArrowUpIcon } from '@heroicons/react/24/outline';

const ImageUploader = ({ onImageUpload }) => {
  const [preview, setPreview] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    onImageUpload(file);
    setPreview(URL.createObjectURL(file));
  }, [onImageUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*',
    multiple: false
  });

  return (
    <div className="max-w-xl mx-auto mt-8">
      <div
        {...getRootProps()}
        className={`p-8 border-2 border-dashed rounded-lg text-center cursor-pointer transition duration-300 ease-in-out ${
          isDragActive ? 'border-blue-400 bg-blue-50' : 'border-gray-300 hover:border-gray-400'
        }`}
      >
        <input {...getInputProps()} />
        <CloudArrowUpIcon className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2 text-sm text-gray-600">
          {isDragActive
            ? "Drop the image here"
            : "Drag 'n' drop an image here, or click to select one"}
        </p>
      </div>
      {preview && (
        <div className="mt-4">
          <img src={preview} alt="Preview" className="max-w-full h-auto rounded-lg shadow-md" />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;