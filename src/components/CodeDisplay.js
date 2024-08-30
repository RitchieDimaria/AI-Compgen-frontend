import React, { useEffect, useRef, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-jsx';
import { ClipboardIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';

const CodeDisplay = ({ code }) => {
  const codeRef = useRef(null);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000); // Reset after 3 seconds
    });
  };

  return (
    <div className="mt-12 relative">
      <h2 className="text-2xl font-semibold mb-2">Generated Component:</h2>
      <button
        onClick={copyToClipboard}
        className="absolute top-0 right-0 bg-blue-500 text-white p-4 rounded-md hover:bg-blue-600 transition duration-300 flex items-center"
        aria-label="Copy code to clipboard"
      >
        {isCopied ? (
          <>
            <ClipboardDocumentCheckIcon className="h-5 w-5 mr-1" />
            Copied!
          </>
        ) : (
          <>
            <ClipboardIcon className="h-5 w-5 mr-1" />
            Copy
          </>
        )}
      </button>
      <pre className="bg-gray-800 p-6 rounded-lg overflow-x-auto mt-2">
        <code ref={codeRef} className="language-jsx text-sm">
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeDisplay;