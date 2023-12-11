// components/FileUpload.tsx

import { useState } from 'react';
import axios from 'axios';

interface FullUploadProps {
  channelImage: File;
}

export async function FileUpload({ channelImage }: FullUploadProps) {
    const handleFileUpload = async () => {
        const formData = new FormData();
        formData.append('channelImage', channelImage);
    
        try {
          const response = await axios.post('/api/uploadFile', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          console.log('File uploaded:', response.data.filePath);
          // Handle the file upload response accordingly
        } catch (error) {
          console.error('File upload failed:', error);
          // Handle error state
        }
      };
  const xxx = await handleFileUpload()
  return xxx
}
