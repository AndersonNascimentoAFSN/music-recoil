import { memo } from "react";

type ListMusicProps = {
  id: string;
  name: string;
  artist: string;
  onClick: string;
  imageUrl: string;
  handleClick: (externalUrl: string) => void;
  releaseDate: string;
  externalUrl: string;
};

export const ListMusic = memo(function ({
  id,
  name,
  artist,
  imageUrl,
  handleClick,
  releaseDate,
  externalUrl,
}: ListMusicProps) {
  return (
    <div
      style={{
        padding: "2rem",
        cursor: "pointer",
        marginTop: "10px",
        transition: "all 0.3s ease",

        // "&:hover": {
        //   backgroundColor: "#bbb",
        // },
      }}
      onClick={() => handleClick(externalUrl)}
    >
      <img
        src={imageUrl}
        alt={id}
        style={{ width: "180px", height: "180px" }}
      />
      <h3 style={{ fontWeight: "bold", marginTop: "5px", marginBottom: "2px" }}>
        {name}
      </h3>
      <p style={{ margin: 0, fontSize: "0.9rem" }}>{artist}</p>
      <p style={{ margin: 0, fontSize: "0.9rem" }}>{releaseDate}</p>
    </div>
  );
});
