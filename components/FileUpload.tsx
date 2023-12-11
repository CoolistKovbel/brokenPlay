// components/FileUpload.tsx

import { useState } from 'react';
import axios from 'axios';

interface FullUploadProps {
  channelImage: File | null;
}

export async function FileUpload({ channelImage }: FullUploadProps) {
  try {
    console.log(channelImage, "in file upload");
    const formData = new FormData();

    if (channelImage !== null) {
      formData.append('channelImage', channelImage);
    } 
    const res = await axios.post('/api/uploadFile', formData);
    // 
    console.log('File uploaded:', res.data);
    return res.data
    // 
  } catch (error) {
    console.error('File upload failed:', error);
    // Handle error state
  }
}
