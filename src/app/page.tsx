import fs from "fs";
import path from "path";
import { Box, Container, Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { parse } from "csv-parse";
import {
  AverageCompletionTime,
  OpenResponses,
  OrderResponses,
  Pie,
} from "@/components";
import { preparePieData, produceFields } from "@/utils";

import type { CSVRecord, Field } from "@/types";

async function getData(): Promise<CSVRecord[]> {
  const filePath = path.join(process.cwd(), "public/data", "data.csv");
  const csvContent = fs.readFileSync(filePath, "utf8");

  return new Promise((resolve, reject) => {
    parse(csvContent, { columns: true }, (err, result: CSVRecord[]) => {
      if (err) reject(err);
      resolve(result);
    });
  });
}

const OutputChart = (props: Field & { index: number }) => {
  const { data, index, label, note, type } = props;
  let output: JSX.Element | null = null;
  if (type === "pie") {
    const outputData = preparePieData(data);
    output = (
      <Grid size={{ xs: 12, sm: 6 }}>
        <Paper sx={{ padding: "15px" }}>
          {note && <i>{note}</i>}
          <Pie data={outputData} title={`${index + 1}. ${label}`} />
        </Paper>
      </Grid>
    );
  } else if (type === "completion-time") {
    output = (
      <Grid size={{ xs: 12, sm: 6 }}>
        <Paper sx={{ padding: "15px" }}>
          <AverageCompletionTime data={data} index={index + 1} />
        </Paper>
      </Grid>
    );
  } else if (type === "open-response") {
    output = (
      <Grid size={{ xs: 12, sm: 6 }}>
        <Paper sx={{ padding: "15px" }}>
          {note && <i>{note}</i>}
          <OpenResponses data={data} title={`${index + 1}. ${label}`} />
        </Paper>
      </Grid>
    );
  } else if (type === "order") {
    output = (
      <Grid size={{ xs: 12, sm: 6 }}>
        <Paper sx={{ padding: "15px" }}>
          {note && <i>{note}</i>}
          <OrderResponses data={data} title={`${index + 1}. ${label}`} />
        </Paper>
      </Grid>
    );
  }
  return output;
};

export default async function Home() {
  const data = await getData();
  const fields = produceFields(data);
  const { length } = data;
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          <Paper sx={{ padding: "15px" }}>
            <h1>Research Software Engineering in the Arts and Humanities</h1>
            <h2>Community Interest Group Survey</h2>
            <h3>
              Number of participants: <small>{length}</small>
            </h3>
          </Paper>
        </Grid>
        {fields.map((field, index) => (
          <OutputChart
            key={index}
            index={index}
            {...field}
          />
        ))}
      </Grid>
      <Box sx={{ height: "100px" }} />
    </Container>
  );
}
