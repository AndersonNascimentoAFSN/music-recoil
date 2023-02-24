export type TypesSearchSpotify =
  | "album"
  | "artist"
  | "playlist"
  | "track"
  | "show"
  | "episode";

export type ParamsSearchSpotify = {
  q: string;
  type: TypesSearchSpotify[];
  market?: string;
  limit?: string;
  offset?: string;
};
