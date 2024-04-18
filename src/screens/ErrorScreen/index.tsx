import React from 'react';
import { useRouteError } from 'react-router-dom'

const ErrorScreen: React.FC<{}> = () => {
  const { statusText, message } = useRouteError() as any

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{statusText ?? message}</i>
      </p>
    </div>
  );
};

export default ErrorScreen;
