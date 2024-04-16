type Image = {
  label: string;
  attributes: {
    height: string;
  }
}

export type Podcast = {
  'im:artist': {
    label: string;
    attributes: { href: string }
  };
  'im:contentType': {
    attributes: {
      term: string;
      label: string;
    }
  };
  'im:image': Image[];
  'im:name': { label: string };
  'im:releaseDate': {
    label: string;
    attributes: { label: string }
  };
  'im:price': {
    label: string;
    attributes: {
      amount: string;
      currency: string;
    }
  };

  category: {
    attributes: {
      'im:id': string;
      term: string;
      scheme: string;
      label: string;
    }
  };
  id: {
    label: string;
    attributes: {
      'im:id': string;
    }
  };
  link: {
    attributes: {
      rel: string;
      type: string;
      href: string;
    }
  };
  rights: { label: string };
  summary: { label: string };
  title: { label: string };
}