import { memo } from "react";

import { ListMusic } from "@/components/ListMusic";

type TrackProps = {
  items: {
    id: string;
    name: string;
    artist: string;
    onClick: string;
    imageUrl: string;
    handleClick: (externalUrl: string) => void;
    releaseDate: string;
    externalUrl: string;
  }
};

export const Track = memo(function ({ items }: TrackProps[]) {
  return (
    <>
      <h3 style={{ fontWeight: "bold" }}>Canções</h3>
      <div style={{ display: "flex" }}>
        {items.map((item) => (
          <ListMusic key={item.id} {...item} />
        ))}
      </div>
    </>
  );
});
