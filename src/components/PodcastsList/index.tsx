import { useNavigate } from "react-router-dom";
import { Podcast } from "../../constants/types";

type PodcastListProps = {
  podcasts: Podcast[];
  filter: string;
};

const PodcastList: React.FC<PodcastListProps> = ({
  podcasts,
  filter = ''
}) => {

  const filteredPodcasts: any[] = podcasts?.filter((podcast: any) => 
    podcast['im:name'].label.toLowerCase().includes(filter.toLowerCase())
  ) || [];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: '8%',
        columnGap: '1vw',
        rowGap: '6vw',
        width: '100%',
      }}
    >
      {filteredPodcasts.map((podcast: Podcast) =>
        <PodcastCard key={podcast.id.attributes['im:id']} podcast={podcast} />
      )}
    </div>
  );
}

const PodcastCard: React.FC<{podcast: Podcast}> = ({podcast}) => {
  const navigate = useNavigate();

  const id = podcast.id.attributes['im:id'] || '';

  const onEpisodeClickHandler = (id: string) => {
    navigate(`/podcast/${id}`);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        padding: 0,
        height: "100%",
        minWidth: '200px',
        width: '23%',
      }}
    >
      <div style={{ height: '100px', width: '100%' }}></div>
      <div
        className="pressable"
        onClick={() => onEpisodeClickHandler(id)}
        style={{
          boxShadow: '0px 0px 8px 0px #ccc',
          boxSizing: 'border-box',
          padding: '0px 1vw 1vw 1vw',
          height: '100%',
          width: '100%',
        }}
      >
        <img
          src={podcast['im:image'][2].label}
          alt={podcast['im:name'].label}
          style={{
            boxSizing: 'border-box',
            border: '1px solid #f2f2f2',
            borderRadius: '50%',
            position: 'relative',
            margin: '0vw 3vw',
            top: '-7vw',
            width: 'calc(100% - 6vw)',
          }}
        />
        <h5 style={{ marginTop: '-7vw', textTransform: 'uppercase' }}>{podcast['im:name'].label}</h5>
        <p style={{ fontSize: '0.7em'}}>Author: {podcast['im:artist'].label}</p>
      </div>
    </div>
  );
}

export default PodcastList;
