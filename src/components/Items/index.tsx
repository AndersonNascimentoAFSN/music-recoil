import { memo } from "react";

import { ListItem } from "@/components/ListItem";

type ItemsProps = {
  title: string;
  items: {
    id: string;
    name: string;
    artist: string;
    onClick: string;
    imageUrl: string;
    handleClick: (externalUrl: string) => void;
    releaseDate: string;
    externalUrl: string;
  }[];
};

export const Items = memo(function ({ items, title }: ItemsProps) {
  return (
    <div
      style={{
        background: "#F4F4F4",
        // margin: '2rem 5rem',
        maxWidth: "1200px",
        width: "60%",
        borderRadius: "25px",
        margin: "0 auto",
        padding: "2rem 3rem",
        overflowX: "scroll",
        marginBottom: "40px",
        // minHeight: "480px",
        // flex: 1,
      }}
    >
      <h3 style={{ fontWeight: "bold" }}>{title}</h3>
      <div style={{ display: "flex" }}>
        {items.map((item) => (
          <ListItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
});
