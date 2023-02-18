import qs from "qs";
import { apiCall } from "@/services/apiCall";

const commonParams = {
  redirect_uri: import.meta.env.VITE_SPOTIFY_HOST,
  client_id: import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID,
  client_secret: import.meta.env.VITE_APP_SPOTIFY_CLIENT_SECRET,
};

export const spotifyAuthCall = async (
  requiredParams: { code: string } | { refresh_token: string }
) => {
  try {
    const params = {
      ...requiredParams,
      grant_type: "authorization_code",
      ...commonParams,
    };

    const searchParams = qs.stringify(params);

    const spotifyCall = await apiCall({
      method: "POST",
      url: "https://accounts.spotify.com/api/token",
      body: searchParams,
      headers: { "Content-type": "application/x-www-form-urlencoded" },
    });

    return spotifyCall.json();
  } catch (error) {
    console.log(error);
  }
};
