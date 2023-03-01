import { selector } from "recoil";
import {
  albumAtom,
  artistAtom,
  episodeAtom,
  playlistAtom,
  trackAtom,
  showAtom,
} from "@/store/songs/atoms";

export const filterTypeSelector = selector({
  key: "filterType",
  get: ({ get }) => {
    const atoms = [
      get(albumAtom),
      get(artistAtom),
      get(episodeAtom),
      get(playlistAtom),
      get(trackAtom),
      get(showAtom),
    ];
    const notNullAtoms = atoms.filter((item) => !!item);
    return notNullAtoms.length ? notNullAtoms.join(",") : "track";
  },
  set: ({ set }) => {
    set(albumAtom, null);
    set(artistAtom, null);
    set(episodeAtom, null);
    set(playlistAtom, null);
    set(trackAtom, null);
    set(showAtom, null);
  },
});
