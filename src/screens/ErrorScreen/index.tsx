import { useRouteError } from 'react-router-dom'

const ErrorScreen = () => {
  const { statusText, message } = useRouteError() as any

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{statusText ?? message}</i>
      </p>
    </div>
  );
};

export default ErrorScreen;
