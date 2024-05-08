import React, { useState } from 'react';
import { Button } from '@mui/material';
import VuiBox from 'components/VuiBox'; // Corrected import
import VuiTypography from 'components/VuiTypography'; // Corrected import
import { colors } from 'assets/theme/base/colors';

function UploadImageButton() {
 const [selectedFile, setSelectedFile] = useState(null);

 const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
 };

 const handleUpload = () => {
    if (selectedFile) {
      // Handle the file upload logic here
      console.log('Uploading file:', selectedFile);
    } else {
      console.log('No file selected');
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
        <Button variant="contained" component="span" color="primary">
          Upload Image
        </Button>
      </label>
      {selectedFile && (
        <VuiTypography variant="button" color="text" sx={{ mt: 2 }}>
          Selected file: {selectedFile.name}
        </VuiTypography>
      )}
    </VuiBox>
 );
}

export default UploadImageButton;
