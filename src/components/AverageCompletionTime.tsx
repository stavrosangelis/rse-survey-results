import { LineChart } from "@mui/x-charts/LineChart";
import moment from "moment";

type Properties = {
  data: string[];
  index: number;
};

export const AverageCompletionTime = (props: Properties) => {
  const { data, index } = props;
  const durations: number[] = [];
  for (const row of data) {
    const pieces = row.split('-');
    const start = moment(pieces[0], "DD/MM/YYYY HH:mm");
    const end = moment(pieces[1], "DD/MM/YYYY HH:mm");
    const duration = moment.duration(end.diff(start));
    const minutes = duration.asMinutes();
    durations.push(minutes);
  }
  const xAxisData = [];
  for (let i = 0; i < data.length; i += 1) {
    xAxisData.push(i + 1);
  }
  const average = (values: number[]) =>
    values.reduce((a, b) => a + b) / values.length;
  return (
    <>
      <h3>
        {index}. Average completion time <small>(in minutes)</small>
      </h3>
      <p style={{ paddingBottom: "15px" }}>{average(durations)} minutes</p>
      <h3>
        Survey completion time <small>(in minutes)</small>
      </h3>
      <LineChart
        xAxis={[{ data: xAxisData }]}
        series={[
          {
            data: durations,
          },
        ]}
        width={400}
        height={200}
      />
    </>
  );
};
