"use client";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { prepareOrderedResponsesData } from "@/utils";

type Properties = {
  title: string;
  data: string[];
};

export const OrderResponses = (props: Properties) => {
  const { data, title } = props;
  const preparedData = prepareOrderedResponsesData(data);
  return (
    <>
      <h3>{title}</h3>
      <List sx={{ maxHeight: "300px", overflowY: "auto" }}>
        {preparedData.map((item, index) => {
          return (
            (item && (
              <ListItem disablePadding key={index}>
                <ListItemButton>
                  <ListItemText primary={`${index + 1}. ${item.label}`} />
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
