import { selector } from "recoil";

import {
  albumAtom,
  artistAtom,
  episodeAtom,
  playlistAtom,
  trackAtom,
  showAtom,
} from "@/store/songs/atoms";

// import { spotifyTokenResponseAtom } from "@/store/auth/atoms";
// import { spotifySearchCall } from "@/utils/spotifySearchCall";

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

// export const searchResponseSelector = selector({
//   key: "searchResponseSelector",
//   get: async ({ get }) => {
//     const tokenResponse = get(spotifyTokenResponseAtom);
//     const types = get(filterTypeSelector);
//     const searchText = "Viva La Vida";

//     if (tokenResponse) {
//       const result = await spotifySearchCall({
//         params: {
//           q: searchText,
//           type: types,
//           offset: "50",
//         },
//         token: tokenResponse?.access_token,
//       });

//       return result;
//     }
//   },
//   // set: ({ set }) => {
//   //   set(albumAtom, null);
//   // },
// });
