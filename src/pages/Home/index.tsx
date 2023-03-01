import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { spotifyTokenResponseAtom } from "@/store/auth/atoms";
import {
  albumAtom,
  artistAtom,
  episodeAtom,
  playlistAtom,
  showAtom,
  trackAtom,
  spotifyResultSongsAtom,
} from "@/store/songs/atoms";

import { spotifySearchCall } from "@/utils/spotifySearchCall";

import { HomeFilters } from "@/components/HomeFilters";

import seekerImage from "@/assets/images/seeker.png";
import { filterTypeSelector } from "@/store/songs/selectors";
import { Track } from "@/components/Track";
import { TrackType } from "@/types/Track";

export function Home() {
  const [searchText, setSearchText] = useState("");
  const tokenResponse = useRecoilValue<{ access_token: string } | undefined>(
    spotifyTokenResponseAtom
  );
  const [searchResponse, setSearchResponse] = useRecoilState(
    spotifyResultSongsAtom
  );

  const [types, setTypes] = useRecoilState(filterTypeSelector);

  async function handleSearchClick() {
    if (tokenResponse) {
      const result = await spotifySearchCall({
        params: {
          q: searchText,
          type: types,
          offset: "50",
        },
        token: tokenResponse?.access_token,
      });

      setSearchResponse(result);
    }
  }

  const tracks = searchResponse?.tracks?.items.map((item: TrackType) => ({
    id: item?.id,
    name: item?.name,
    artist: item?.artists[0]?.name,
    handleClick: (externalUrl: string) => console.log(externalUrl),
    externalUrl: item?.external_urls?.spotify,
    imageUrl: item?.album?.images[0]?.url,
    releaseDate: new Intl.DateTimeFormat("pt-BR", {
      year: "numeric",
    }).format(new Date(item?.album?.release_date)),
  }));

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          background: `url(${seekerImage}) no-repeat content-box`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "272px",
        }}
      />

      <h2
        style={{
          fontSize: "48px",
          fontWeight: 800,
          fontFamily: "Montserrat",
          textAlign: "center",
        }}
      >
        Buscar sua canção favorita
      </h2>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "14px",
        }}
      >
        <input
          type="text"
          style={{
            padding: "8px 20px",
            background: "#F0F0F0",
            borderRadius: "8px",
            minWidth: "380px",
            border: "1px solid #b3b3b3",
            fontFamily: "Montserrat, sans-serif",
          }}
          value={searchText}
          onChange={({ target: { value } }) => setSearchText(value)}
        />
        <button
          type="button"
          style={{
            cursor: "pointer",
            borderRadius: "8px",
            backgroundColor: "#1DB954",
            color: "#fff",
            fontWeight: 700,
            fontSize: "18px",
            fontFamily: "Montserrat, sans-serif",
            padding: "8px 20px",
            border: "none",
          }}
          onClick={handleSearchClick}
        >
          Buscar
        </button>
      </div>

      <HomeFilters />

      <div
        style={{
          background: "#F4F4F4",
          // margin: '2rem 5rem',
          maxWidth: "1200px",
          borderRadius: "25px",
          margin: "0 auto",
          padding: "2rem 3rem",
          overflowX: "scroll",
        }}
      >
        <h3 style={{ fontWeight: "bold" }}>Canções</h3>
        <div style={{ display: "flex" }}>
          {tracks?.length > 0 &&
            tracks.map((track) => <Track key={track.id} {...track} />)}
        </div>
      </div>
    </div>
  );
}
