"use client";
import { LineChart } from "@mui/x-charts/LineChart";
import moment from "moment";

type Properties = {
  data: string[];
  index: number;
};

const formatDurationOutput = (durationInMinutes: moment.Duration) => {
  const days = Math.floor(durationInMinutes.asDays());
  const hours = durationInMinutes.hours();
  const minutes = durationInMinutes.minutes();

  return `${days > 0 ? `${days} day${days > 1 ? `s` : ``} ` : ""}${
    (hours > 0 && `${hours} hour${hours > 1 ? `s` : ``} `) || ""
  }${minutes} minutes`;
};

export const AverageCompletionTime = (props: Properties) => {
  const { data, index } = props;
  const { length } = data;
  const durations: number[] = [];
  for (const row of data) {
    const pieces = row.split("-");
    const start = moment(pieces[0], "DD/MM/YYYY HH:mm");
    const end = moment(pieces[1], "DD/MM/YYYY HH:mm");
    const duration = moment.duration(end.diff(start));
    const minutes = duration.asMinutes();
    durations.push(minutes);      
  }

  const xAxisData = [];
  for (let i = 0; i < length; i += 1) {
    xAxisData.push(i + 1);
  }
  const average = (values: number[]) =>
    values.reduce((a, b) => a + b) / values.length;
  const averageDuration = moment.duration(average(durations), "minutes");
  const averageOutput = formatDurationOutput(averageDuration);

  return (
    <>
      <h3>{index}. Average completion time</h3>
      <p style={{ paddingBottom: "15px" }}>{averageOutput}</p>
      <h3>
        Survey completion time <small>(in minutes)</small>
      </h3>
      <LineChart
        xAxis={[{ data: xAxisData, label: "Survey answers" }]}
        yAxis={[{ label: "Minutes" }]}
        series={[
          {
            data: durations,
            valueFormatter: (value) => {
              const duration = moment.duration(value, "minutes");
              return formatDurationOutput(duration);
            },
          },
        ]}
        width={400}
        height={200}
        sx={{
          [`.MuiChartsAxis-directionY .MuiChartsAxis-label`]: {
            transform: "translate(-4px, 60px)",
          },
        }}
      />
    </>
  );
};
