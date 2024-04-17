// #region -- API Types --

export interface PodcastsResultData {
  feed: {
    author: {
      name: Label
      uri: Label
    };
    entry: Podcast[];
    updated: Label;
    rights: Label;
    title: Label;
    icon: Label;
    link: Link[];
    id: Label;
  }
};

interface Label {
  label: string
}

export interface Podcast {
  "im:name": Label
  "im:image": Image[]
  summary: Label
  "im:price": ImPrice
  "im:contentType": {
    attributes: ContentTypeAttributes
  }
  rights?: Label
  title: Label
  link: Link
  id: Id
  "im:artist": Artist
  category: {
    attributes: CategoryAttributes
  }
  "im:releaseDate": {
    attributes: Label
  }
}

interface Image extends Label {
  attributes: {
    height: string
  }
}

interface ImPrice extends Label {
  attributes: {
    amount: string
    currency: string
  }
}

interface ContentTypeAttributes extends Label {
  term: string
}

interface Link {
  attributes: {
    rel: string
    type?: string
    href: string
  }
}

interface Id extends Label {
  attributes: {
    "im:id": string
  }
}

interface Artist extends Label {
  attributes?: {
    href: string
  }
}

interface CategoryAttributes extends Label {
  "im:id": string
  term: string
  scheme: string
}

// #endregion -- API Types --