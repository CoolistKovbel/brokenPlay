interface Window {
    window: Window & typeof globalThis;
    ethereum?: any; // Define ethereum as an optional property
    request?: any;
  }