import {
  albumAtom,
  artistAtom,
  episodeAtom,
  playlistAtom,
  showAtom,
  spotifyResultSongsAtom,
  trackAtom,
} from "@/store/songs/atoms";
import { useRecoilState } from "recoil";

export function HomeFilters() {
  const [album, setAlbum] = useRecoilState(albumAtom);
  const [artist, setArtist] = useRecoilState(artistAtom);
  const [episode, setEpisode] = useRecoilState(episodeAtom);
  const [playlist, setPlaylist] = useRecoilState(playlistAtom);
  const [show, setShow] = useRecoilState(showAtom);
  const [track, setTrack] = useRecoilState(trackAtom);

  const [spotify, setSpotify] = useRecoilState(spotifyResultSongsAtom);

  console.log(album, artist, episode, playlist, show, track);

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
      <label>
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

      <label>
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

      <label>
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

      <label>
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

      <label>
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

      <label>
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
    </div>
  );
}
