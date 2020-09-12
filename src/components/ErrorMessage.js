import React from 'react';

const ErrorMessage = ({ errorDescription }) => {
  return (
    <div className="alert alert-danger" role="alert">
      {errorDescription}
    </div>
  );
};

export default ErrorMessage;
