"use client";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

type Properties = {
  title: string;
  data: string[];
};

export const OpenResponses = (props: Properties) => {
  const { data, title } = props;
  return (
    <>
      <h3>{title}</h3>
      <List sx={{ maxHeight: "300px", overflowY: "auto" }}>
        {data.map((item, index) => {
          return (
            (item && (
              <ListItem disablePadding key={index}>
                <ListItemButton>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            )) ||
            null
          );
        })}
      </List>
    </>
  );
};
