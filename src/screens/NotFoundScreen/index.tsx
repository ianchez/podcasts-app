import { Link } from 'react-router-dom';

const NotFoundScreen = () => {
  return (
    <div className='screen'>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
      <h3>Not found</h3>
    </div>
  );
}

export default NotFoundScreen;