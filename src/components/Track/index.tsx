import { memo } from "react";

import { ListMusic } from "@/components/ListMusic";

type TrackProps = {
  id: string;
  name: string;
  artist: string;
  onClick: string;
  imageUrl: string;
  handleClick: (externalUrl: string) => void;
  releaseDate: string;
  externalUrl: string;
};

export const Track = memo(function (props: TrackProps) {
  return (
    <div>
      <ListMusic {...props} />
    </div>
  );
});
