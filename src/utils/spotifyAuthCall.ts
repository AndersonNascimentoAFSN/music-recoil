import qs from "qs";
import { apiCall, requester } from "@/services/apiCall";

const commonParams = {
  redirect_uri: import.meta.env.VITE_SPOTIFY_HOST,
  client_id: import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID,
  client_secret: import.meta.env.VITE_APP_SPOTIFY_CLIENT_SECRET,
};

export const spotifyAuthCall = async (code: string) => {
  try {
    const params = {
      code,
      grant_type: "authorization_code",
      ...commonParams,
    };

    // const searchParams = Object.keys(params)
    //   .map(
    //     (key) =>
    //       encodeURIComponent(key) +
    //       "=" +
    //       encodeURIComponent(params[key as keyof typeof params])
    //   )
    //   .join("&");

    const searchParams = qs.stringify(params);

    // const spotifyCall = await requester(
    //   {
    //     baseURL: "https://accounts.spotify.com",
    //   },
    //   "application/x-www-form-urlencoded"
    // ).post("/api/token", searchParams);
    // console.log(spotifyCall);
    // return spotifyCall;

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
