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
import { BackgroundImage, LoginContainer, SessionContainer } from "./styles";
import { Heading } from "@/components/Heading";
import { Button } from "@/components/Button";

const spotifyUrl = `https://accounts.spotify.com/authorize?client_id=${
  import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID
}&response_type=code&redirect_uri=${
  import.meta.env.VITE_SPOTIFY_HOST
}&scope=user-read-private`;

export function Login() {
  const [isAuthenticated, setIsAuthenticated] =
    useRecoilState(isAuthenticatedAtom);
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
    <LoginContainer>
      <SessionContainer>
        <Heading size="lg" as="h1">
          Bem-vindo!
        </Heading>

        <Heading size="md" as="h2" css={{ marginBottom: "10px" }}>
          Identifique-se para encontrar sua música favorita
        </Heading>

        <Button onClick={handleLogin}>Iniciar sessão</Button>
      </SessionContainer>

      <BackgroundImage />
    </LoginContainer>
  );
}
