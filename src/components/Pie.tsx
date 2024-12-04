"use client";

import { PieChart } from "@mui/x-charts/PieChart";
import Grid from "@mui/material/Grid2";
import { Legend } from "./Legend";
import { addColorsToData, generateRandomColorArray } from "@/utils";
import type { InputData } from "@/types";

type Properties = {
  title: string;
  data: InputData[];
};

export const Pie = (props: Properties) => {
  const { data, title } = props;
  const { length } = data;
  const colorsArray = generateRandomColorArray(length);
  const coloredData = addColorsToData({ colors: colorsArray, data });
  return (
    <>
      <h3>{title}</h3>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <PieChart
            series={[
              {
                arcLabel: (item) => `${item.value}`,
                data,
                highlightScope: { fade: "global", highlight: "item" },
                faded: {
                  innerRadius: 30,
                  additionalRadius: -30,
                  color: "gray",
                },
              },
            ]}
            width={300}
            height={300}
            slotProps={{
              legend: {
                hidden: true,
              },
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Legend data={coloredData} />
        </Grid>
      </Grid>
    </>
  );
};
