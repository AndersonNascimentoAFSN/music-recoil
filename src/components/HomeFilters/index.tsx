import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";

import {
  albumAtom,
  artistAtom,
  episodeAtom,
  playlistAtom,
  searchTextAtom,
  showAtom,
  spotifyResultSongsAtom,
  trackAtom,
} from "@/store/songs/atoms";
import { filterTypeSelector } from "@/store/songs/selectors";

export function HomeFilters() {
  const [album, setAlbum] = useRecoilState(albumAtom);
  const [artist, setArtist] = useRecoilState(artistAtom);
  const [episode, setEpisode] = useRecoilState(episodeAtom);
  const [playlist, setPlaylist] = useRecoilState(playlistAtom);
  const [show, setShow] = useRecoilState(showAtom);
  const [track, setTrack] = useRecoilState(trackAtom);

  const setSearchText = useSetRecoilState(searchTextAtom);

  const resetFilters = useResetRecoilState(filterTypeSelector);

  const setSearchResponse = useSetRecoilState(spotifyResultSongsAtom);

  function handleResetFilters() {
    resetFilters();
    setSearchResponse(undefined);
    setSearchText("");
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        margin: "2rem auto",
        width: "60%",
        gap: "20px",
        minWidth: "500px",
      }}
    >
      <label style={{ cursor: "pointer" }}>
        Álbum
        <input
          type="checkbox"
          name="album"
          onChange={({ target: { checked } }) =>
            setAlbum(checked ? "album" : null)
          }
          checked={!!album}
        />
      </label>

      <label style={{ cursor: "pointer" }}>
        Artista
        <input
          type="checkbox"
          name="artist"
          onChange={({ target: { checked } }) =>
            setArtist(checked ? "artist" : null)
          }
          checked={!!artist}
        />
      </label>

      <label style={{ cursor: "pointer" }}>
        Playlist
        <input
          type="checkbox"
          name="playlist"
          onChange={({ target: { checked } }) =>
            setPlaylist(checked ? "playlist" : null)
          }
          checked={!!playlist}
        />
      </label>

      <label style={{ cursor: "pointer" }}>
        Canção
        <input
          type="checkbox"
          name="track"
          onChange={({ target: { checked } }) =>
            setTrack(checked ? "track" : null)
          }
          checked={!!track}
        />
      </label>

      <label style={{ cursor: "pointer" }}>
        Episódio
        <input
          type="checkbox"
          name="episode"
          onChange={({ target: { checked } }) =>
            setEpisode(checked ? "episode" : null)
          }
          checked={!!episode}
        />
      </label>

      <label style={{ cursor: "pointer" }}>
        Show
        <input
          type="checkbox"
          name="show"
          onChange={({ target: { checked } }) =>
            setShow(checked ? "show" : null)
          }
          checked={!!show}
        />
      </label>

      <button onClick={handleResetFilters}>Limpar Filtros</button>
    </div>
  );
}
