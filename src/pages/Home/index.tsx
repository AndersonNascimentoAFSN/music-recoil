import { useState } from "react";
import { useRecoilValue } from "recoil";

import { spotifyTokenResponseAtom } from "@/store/auth/atoms";
import { spotifySearchCall } from "@/utils/spotifySearchCall";

import seekerImage from "@/assets/images/seeker.png";

export function Home() {
  const [searchText, setSearchText] = useState("");
  const tokenResponse = useRecoilValue<{ access_token: string } | undefined>(
    spotifyTokenResponseAtom
  );

  async function handleSearchClick() {
    if (tokenResponse) {
      const searchResponse = await spotifySearchCall({
        params: {
          q: searchText,
          type: ["track", "artist"],
          offset: "50",
        },
        token: tokenResponse?.access_token,
      });
      console.log(searchResponse);
    }
  }

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
    </div>
  );
}
