import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FileUp, CheckCircle2, XCircle } from 'lucide-react';

interface FileUploadProps {
  onFileUpload: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [fileName, setFileName] = useState<string>('');

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setFileName(file.name);
      setUploadStatus('success');
      onFileUpload(file);
    }
  }, [onFileUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/csv': ['.csv']
    },
    multiple: false
  });

  const getStatusColor = () => {
    switch (uploadStatus) {
      case 'success':
        return 'border-green-400 bg-green-400/20';
      case 'error':
        return 'border-red-400 bg-red-400/20';
      default:
        return isDragActive ? 'border-blue-400 bg-blue-400/20' : 'border-white/20 hover:border-white/40';
    }
  };

  const getStatusIcon = () => {
    switch (uploadStatus) {
      case 'success':
        return <CheckCircle2 className="w-4 h-4 text-green-400" />;
      case 'error':
        return <XCircle className="w-4 h-4 text-red-400" />;
      default:
        return isDragActive ? <FileUp className="w-4 h-4 text-blue-400" /> : <Upload className="w-4 h-4 text-white" />;
    }
  };

  return (
    <div
      {...getRootProps()}
      className={`relative group cursor-pointer transition-all duration-200
        ${uploadStatus === 'idle' ? 'hover:-translate-y-0.5' : ''}
        rounded-lg border-2 border-dashed ${getStatusColor()}`}
    >
      <input {...getInputProps()} />
      <div className="px-4 py-3 flex items-center space-x-2">
        {getStatusIcon()}
        <span className={`text-sm ${
          uploadStatus === 'success' 
            ? 'text-green-400' 
            : uploadStatus === 'error' 
              ? 'text-red-400' 
              : 'text-white'
        }`}>
          {uploadStatus === 'success' ? (
            <span className="flex items-center">
              <span className="truncate max-w-[100px]">{fileName}</span>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setUploadStatus('idle');
                  setFileName('');
                }}
                className="ml-2 text-white/60 hover:text-white"
              >
                <XCircle className="w-4 h-4" />
              </button>
            </span>
          ) : isDragActive ? (
            'Drop CSV here...'
          ) : (
            'Upload CSV'
          )}
        </span>
      </div>
      
      {/* Hover tooltip */}
      {uploadStatus === 'idle' && (
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
          opacity-0 group-hover:opacity-100 transition-opacity
          text-xs bg-white/10 backdrop-blur-sm text-white px-2 py-1 rounded whitespace-nowrap">
          Click or drag to upload
        </div>
      )}
    </div>
  );
};

export default FileUpload;