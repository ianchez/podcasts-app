import { useParams } from 'react-router-dom';

const EpisodeDetailSection: React.FC = () => {
  const { id } = useParams();

  return (
    <div
      style={{
        alignSelf: 'flex-start',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
        borderRadius: '4px',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        marginBottom: '4vw',
        padding: '10px 16px',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        height: '100%',
        width: '72%',
      }}
    >
      <h4
        style={{
          marginTop: 10,
          marginBottom: 10,
          padding: 0,
        }}
      >
        Episode {id}
      </h4>
      <p><i>Episode description</i></p>
    </div>
  );
}

export default EpisodeDetailSection;
