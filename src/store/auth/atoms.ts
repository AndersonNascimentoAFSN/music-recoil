import { atom } from "recoil";

export const isAuthenticatedAtom = atom({
  key: "isAuthenticated",
  default: false,
});

export const spotifyRefreshTokenAtom = atom({
  key: "spotifyRefreshToken",
  default: undefined,
});

export const spotifyTokenResponseAtom = atom<{ access_token: string } | undefined>({
  key: "spotifyTokenResponse",
  default: undefined,
});
