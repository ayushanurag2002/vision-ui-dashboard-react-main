import React, { useState } from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import VuiBox from 'components/VuiBox';
import VuiTypography from 'components/VuiTypography';
import { colors } from 'assets/theme/base/colors';

function UploadImageButton() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const [responseData, setResponseData] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setResponseData(null); // Reset response data when file changes
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      try {
        const response = await fetch('http://localhost:5000/predict_brain', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const responseData = await response.json();
        console.log('Upload successful:', responseData);
        setResponseData(responseData.data); // Update response data state
        setUploadStatus('Upload successful'); // Update upload status
      } catch (error) {
        console.error('Upload failed:', error);
        setUploadStatus('Upload failed'); // Update upload status
      }
    } else {
      console.log('No file selected');
      setUploadStatus('No file selected'); // Update upload status
    }
  };

  const handleSubmit = () => {
    if (selectedFile) {
      // Call handleUpload to hit the API
      handleUpload();
    } else {
      console.log('No file selected');
      setUploadStatus('No file selected'); // Update upload status
    }
  };

  return (
    <VuiBox>
      <input
        accept="image/*"
        style={{ display: 'none' }}
        id="contained-button-file"
        type="file"
        onChange={handleFileChange}
      />
      <label htmlFor="contained-button-file">
        <Button
          variant="contained"
          component="span"
          color="primary"
        >
          Upload Image
        </Button>
      </label>
      {selectedFile && (
        <VuiTypography variant="button" color="text" sx={{ mt: 2 }}>
          Selected file: {selectedFile.name}
        </VuiTypography>
      )}
      
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit} // Call handleSubmit when Submit button is clicked
        disabled={!selectedFile} // Disable Submit button if no file is selected
        sx={{ mt: 2 }}
      >
        Submit
      </Button>
      {uploadStatus && (
        <VuiTypography variant="button" color="text" sx={{ mt: 2 }}>
          Upload status: {uploadStatus}
        </VuiTypography>
      )}
      {responseData && (
        <Card variant="outlined" sx={{ mt: 4, borderColor: 'rgba(255, 255, 255, 0.5)' }}>
          <CardContent>
            <Typography variant="h5" component="div">
              Prediction Result
            </Typography>
         <Typography
               variant="body1"
               color="white"
               sx={{ mt: 2, color: 'white' }} 
            >
         Confidence: {responseData.confidence}
          <br />
          Predicted label: {responseData.predicted_label}
        </Typography>
          </CardContent>
        </Card>
      )}
    </VuiBox>
  );
}

export default UploadImageButton;
