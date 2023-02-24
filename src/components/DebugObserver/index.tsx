import { useRecoilTransactionObserver_UNSTABLE } from "recoil";

export const keysAbleToSave = ["spotifyRefreshToken", "spotifyTokenResponse", "isAuthenticated"];

export function DebugObserver() {
  useRecoilTransactionObserver_UNSTABLE(({ snapshot }) => {
    for (const modifiedAtom of snapshot.getNodes_UNSTABLE({
      isModified: true,
    })) {
      const atom = snapshot.getLoadable(modifiedAtom);
      // const error = atom.contents?.error ?? atom.contents?.error;

      if (
        atom.state === "hasValue" &&
        atom.contents !== undefined /* !error &&  */ &&
        keysAbleToSave.indexOf(modifiedAtom.key) !== -1
      ) {
        localStorage.setItem(
          modifiedAtom.key,
          JSON.stringify({ value: atom.contents })
        );
      }
    }
  });
  return null;
}
