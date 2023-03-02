import { atom } from "recoil";

export const searchTextAtom = atom({
  key: "searchTextAtom",
  default: "",
});

export const spotifyResultSongsAtom = atom({
  key: "spotifyResultSongs",
  default: undefined,
});

export const albumAtom = atom<"album" | null>({
  key: "album",
  default: null,
});

export const artistAtom = atom<"artist" | null>({
  key: "artist",
  default: null,
});

export const playlistAtom = atom<"playlist" | null>({
  key: "playlist",
  default: null,
});

export const trackAtom = atom<"track" | null>({
  key: "track",
  default: null,
});

export const episodeAtom = atom<"episode" | null>({
  key: "episode",
  default: null,
});

export const showAtom = atom<"show" | null>({
  key: "show",
  default: null,
});
