import { apiCall } from "@/services/apiCall";
import { ParamsSearchSpotify } from "@/types/ParamsSearchSpotify";

export const spotifySearchCall = async (
  params: ParamsSearchSpotify,
  token: string
) => {
  try {
    const url = new URL("https://api.spotify.com/v1/search");

    for (const item of Object.entries(params)) {
      const [key, value] = item;
      url.searchParams.append(key, value);
    }

    const spotifyCall = await apiCall({
      method: "GET",
      url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return await spotifyCall.json();
  } catch (error) {
    console.log(error);
  }
};
