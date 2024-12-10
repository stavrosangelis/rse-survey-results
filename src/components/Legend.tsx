"use client";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Square as SquareIcon } from "@mui/icons-material";

type LegendItemType = {
  color: string;
  label: string;
};

type DataType = (LegendItemType & { id: string, value: number })[];

const LegendItem = ({ color, label }: LegendItemType) => {
  return (
    <ListItem disablePadding>
      <ListItemIcon>
        <SquareIcon sx={{ color }} />
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItem>
  );
};

export const Legend = ({ data }: { data: DataType }) => {
  data.sort((a, b) => b.value - a.value);
  return (
    <List sx={{ maxHeight: "300px", overflowY: "auto" }}>
      {data.map((item) => {
        const { id, label, color } = item;
        return <LegendItem key={id} label={label} color={color} />;
      })}
    </List>
  );
};
