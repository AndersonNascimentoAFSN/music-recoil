export type TrackType = {
  id: string;
  artists: { name: string }[];
  name: string;
  external_urls: {
    spotify: string;
  };
  album: {
    images: { url: string }[];
    release_date: string;
  };
};
