import { useRecoilState, useRecoilValue } from "recoil";

import { HomeFilters } from "@/components/HomeFilters";
import { Items } from "@/components/Items";

import { spotifyTokenResponseAtom } from "@/store/auth/atoms";
import { spotifyResultSongsAtom, searchTextAtom } from "@/store/songs/atoms";
import { filterTypeSelector } from "@/store/songs/selectors";

import { spotifySearchCall } from "@/utils/spotifySearchCall";

import seekerImage from "@/assets/images/seeker.png";

export function Home() {
  const [searchText, setSearchText] = useRecoilState(searchTextAtom);

  const tokenResponse = useRecoilValue(spotifyTokenResponseAtom);
  const [searchResponse, setSearchResponse] = useRecoilState(
    spotifyResultSongsAtom
  );

  const types = useRecoilValue(filterTypeSelector);

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

  const tracks = searchResponse?.tracks?.items.map((item) => ({
    id: item?.id,
    name: item?.name,
    artist: item?.artists[0]?.name,
    handleClick: (externalUrl: string) => window.open(externalUrl, "_blank"),
    externalUrl: item?.external_urls?.spotify,
    imageUrl: item?.album?.images[0]?.url,
    releaseDate: new Intl.DateTimeFormat("pt-BR", {
      year: "numeric",
    }).format(new Date(item?.album?.release_date)),
  }));

  const albums = searchResponse?.albums?.items.map((item) => ({
    id: item?.id,
    name: item?.name,
    artist: item?.artists[0]?.name,
    handleClick: (externalUrl: string) => window.open(externalUrl, "_blank"),
    externalUrl: item?.external_urls?.spotify,
    imageUrl: item?.images[0]?.url,
    releaseDate: new Intl.DateTimeFormat("pt-BR", {
      year: "numeric",
    }).format(new Date(item?.release_date)),
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
        Busque sua canção favorita
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
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          marginBottom: "30px",
        }}
      >
        {tracks?.length > 0 && <Items items={tracks} title="Canções" />}
        {albums?.length > 0 && <Items items={albums} title="Álbuns" />}
      </div>
    </div>
  );
}
