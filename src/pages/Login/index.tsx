import { useCallback, useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useLocation, useNavigate } from "react-router-dom";

import {
  isAuthenticatedAtom,
  spotifyRefreshTokenAtom,
  spotifyTokenResponseAtom,
} from "@/store/auth/atoms";
import { spotifyAuthCall } from "@/utils/spotifyAuthCall";

import homeImage from "@/assets/images/home.png";

const spotifyUrl = `https://accounts.spotify.com/authorize?client_id=${
  import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID
}&response_type=code&redirect_uri=${
  import.meta.env.VITE_SPOTIFY_HOST
}&scope=user-read-private`;

export function Login() {
  const [isAuthenticated, setIsAuthenticated] = useRecoilState(isAuthenticatedAtom);
  const [spotifyRefreshToken, setSpotifyRefreshToken] = useRecoilState(
    spotifyRefreshTokenAtom
  );
  const [spotifyTokenResponse, setSpotifyTokenResponse] = useRecoilState(
    spotifyTokenResponseAtom
  );

  const location = useLocation();
  const navigate = useNavigate();

  const authenticateUser = useCallback(
    async (spotifyCode: string | null) => {
      try {
        let response;

        if (spotifyRefreshToken) {
          response = await spotifyAuthCall({
            refresh_token: spotifyRefreshToken,
            grant_type: "refresh_token",
          });
        } else {
          response = await spotifyAuthCall({
            code: spotifyCode,
            grant_type: "authorization_code",
          });
        }

        if (response.access_token) {
          setSpotifyRefreshToken(response?.refresh_token);
          setSpotifyTokenResponse(response);
          setIsAuthenticated(true);

          navigate("/home");
        } else {
          throw new Error("Usuário não foi autenticado!");
        }
      } catch (error) {
        console.log(error);
        setSpotifyTokenResponse(undefined);
        setSpotifyTokenResponse(undefined);
      }
    },
    [
      setSpotifyRefreshToken,
      setSpotifyTokenResponse,
      setIsAuthenticated,
      spotifyRefreshToken,
    ]
  );

  function handleLogin() {
    window.location.replace(spotifyUrl);
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const spotifyCode = urlParams.get("code");

    if (spotifyCode || isAuthenticated) authenticateUser(spotifyCode);
  }, [location.search]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
          minWidth: "400px",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: "4rem",
          paddingRight: "4rem",
        }}
      >
        <h3
          style={{
            fontWeight: 800,
            lineHeight: "50px",
            fontSize: "3.3rem",
            margin: 0,
          }}
        >
          Bem-vindo de novo
        </h3>
        <h6 style={{ marginTop: "6%", marginBottom: "6%", fontSize: "1.5rem" }}>
          Identifique-se para encontrar sua música favorita
        </h6>
        <button
          style={{
            border: "none",
            backgroundColor: "#1DB954",
            width: "328px",
            height: "52px",
            borderRadius: "10px",
            cursor: "pointer",
            color: "#FFFFFF",
            fontSize: "1.3rem",
            fontWeight: 700,
          }}
          onClick={handleLogin}
        >
          Iniciar sessão
        </button>
      </div>

      <div
        style={{
          backgroundImage: `url(${homeImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "60%",
        }}
      />
    </div>
  );
}
