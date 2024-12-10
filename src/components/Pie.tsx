"use client";
import { useEffect, useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import Grid from "@mui/material/Grid2";
import { Legend } from "./Legend";
import { addColorsToData } from "@/utils";
import type { InputData } from "@/types";

type Properties = {
  answersNumber: number;
  title: string;
  data: InputData[];
};

export const Pie = (props: Properties) => {
  const { answersNumber, data, title } = props;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [coloredData, setColoredData] = useState<any[]>([]);

  useEffect(() => {
    const newColoredData = addColorsToData({ data });
    setColoredData(newColoredData);
  }, [data]);
  return (
    <>
      <h3>{title}</h3>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <PieChart
            series={[
              {
                arcLabel: (item) => `${item.value}`,
                data: coloredData,
                valueFormatter: (v) => {
                  const { value } = v;
                  const percentage = (value / answersNumber) * 100;
                  return ` value: ${value},\n percentage: ${percentage.toFixed(2)}%`;
                },
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
