import React, { useState } from 'react';
import './FormComponentc.css';
import AutoTyping from './AutoTyping';

const FormComponent = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [textInput, setTextInput] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(URL.createObjectURL(selectedFile));
      setFileName(selectedFile.name);
    }
  };

  const handleTextChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submission logic here
    setSubmitted(true);
    // Reset file and file name after submission
    setFile(null);
    setFileName('');
    // Reset text input after submission
    setTextInput('');
  };

  return (
    <div className="form-container">
      {/* <AutoTyping /> */}
      <h2>Please, write product name or you can upload an ingredients list image to generate your product score</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter Product Name"
            className="text-field"
            value={textInput}
            onChange={handleTextChange}
          />
        </div>
        <div className="or-option">-OR-</div>
        <div className="input-container">
          <input
            type="file"
            id="file"
            accept="image/*"
            className="file-input"
            onChange={handleFileChange}
          />
          <label htmlFor="file" className="file-label">
            Upload Photo
          </label>
        </div>
        {file && (
          <div className="image-preview">
            <img src={file} alt="Uploaded" className="preview-image" />
            {/* <span className="file-name">{fileName}</span> */}
          </div>
        )}
        <button type="submit" className="submit-button">
          {submitted ? 'Submitted' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
