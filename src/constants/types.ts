// #region -- API Types --

export interface PodcastsResultData {
  feed: {
    author: {
      name: Label;
      uri: Label;
    };
    entry: Podcast[];
    updated: Label;
    rights: Label;
    title: Label;
    icon: Label;
    link: Link[];
    id: Label;
  };
}

interface Label {
  label: string;
}

export interface Podcast {
  'im:name': Label;
  'im:image': Image[];
  summary: Label;
  'im:price': ImPrice;
  'im:contentType': {
    attributes: ContentTypeAttributes;
  };
  rights?: Label;
  title: Label;
  link: Link;
  id: Id;
  'im:artist': Artist;
  category: {
    attributes: CategoryAttributes;
  };
  'im:releaseDate': {
    attributes: Label;
  };
}

interface Image extends Label {
  attributes: {
    height: string;
  };
}

interface ImPrice extends Label {
  attributes: {
    amount: string;
    currency: string;
  };
}

interface ContentTypeAttributes extends Label {
  term: string;
}

interface Link {
  attributes: {
    rel: string;
    type?: string;
    href: string;
  };
}

interface Id extends Label {
  attributes: {
    'im:id': string;
  };
}

interface Artist extends Label {
  attributes?: {
    href: string;
  };
}

interface CategoryAttributes extends Label {
  'im:id': string;
  term: string;
  scheme: string;
}

export interface PodcastDetailResultData {
  resultCount: number;
  results: Array<PodcastDetail | Episode>;
}

interface Artwork {
  artworkUrl30?: string; // only for podcast detail
  artworkUrl60: string;
  artworkUrl100?: string; // only for podcast detail
  artworkUrl160?: string; // only for episodes
  artworkUrl600: string;
}

interface Collection {
  collectionId: number;
  collectionName: string;
  collectionViewUrl: string;

  // only for podcast detail
  collectionCensoredName?: string;
  collectionExplicitness?: string;
  collectionHdPrice?: number;
  collectionPrice: number;
}

interface Track {
  trackId: number;
  trackName: string;
  trackTimeMillis?: number;
  trackViewUrl: string;

  // only for podcast detail
  trackCensoredName?: string;
  trackCount?: number;
  trackExplicitness?: string;
  trackPrice?: number;
  trackRentalPrice?: number;
}

interface DetailItem extends Artwork, Collection, Track {
  artistViewUrl: string;
  contentAdvisoryRating: string;
  country: string;
  feedUrl: string;
  releaseDate: string;
}

export interface PodcastDetail extends DetailItem {
  artistId: number;
  artistName: string;
  currency: string;
  genreIds: string[];
  genres: string[];
  kind: 'podcast';
  primaryGenreName: string;
  wrapperType: 'track';
}

export interface Episode extends DetailItem {
  artistIds: any[];
  closedCaptioning: string;
  description: string;
  episodeContentType: string;
  episodeFileExtension: string;
  episodeGuid: string;
  episodeUrl: string;
  genres: EpisodeGenre[];
  kind: 'podcast-episode';
  previewUrl: string;
  shortDescription: string;
  wrapperType: 'podcastEpisode';
}

interface EpisodeGenre {
  name: string;
  id: string;
}

// #endregion -- API Types --
