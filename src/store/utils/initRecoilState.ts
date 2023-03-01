import { MutableSnapshot } from "recoil";

import { keysAbleToSave } from "@/store/utils/DebugObserver";
import {
  spotifyRefreshTokenAtom,
  spotifyTokenResponseAtom,
  isAuthenticatedAtom,
} from "@/store/auth/atoms";

const atomsToSave = [
  {
    key: keysAbleToSave[0],
    atom: spotifyRefreshTokenAtom,
  },
  {
    key: keysAbleToSave[1],
    atom: spotifyTokenResponseAtom,
  },
  {
    key: keysAbleToSave[2],
    atom: isAuthenticatedAtom,
  },
];

export const initRecoilState = ({ set }: MutableSnapshot) => {
  const localStorageLength = localStorage.length;

  for (let i = 0; i < localStorageLength; i += 1) {
    const locaStorageKey = localStorage.key(i);
    const indexOfKey = keysAbleToSave.indexOf(locaStorageKey || "");

    if (indexOfKey !== -1) {
      const atom = atomsToSave[indexOfKey].atom;
      set(
        atom,
        JSON.parse(localStorage.getItem(locaStorageKey || "") || "")?.value ??
          undefined
      );
    }
  }
};
