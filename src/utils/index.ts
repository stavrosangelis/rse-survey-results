import type { CSVRecord, Field, InputData } from '@/types';

function cleanString(text: string): string {
  if (text) {
    return text.trim().toLocaleLowerCase();
  }
  return '';
}

function preparePieData(data: string[]): InputData[] {
  const results: InputData[] = [];
  const unique: string[] = [];
  for (const item of data) {
    const clean = cleanString(item);
    if (clean) {
      if (clean.includes(';')) {
        const pieces = clean.split(';');
        for (const piece of pieces) {
          const cleanedPiece = cleanString(piece);
          if (cleanedPiece) {
            if (!unique.includes(cleanedPiece)) {
              // create new entry
              results.push({ id: Number(unique.length), value: 1, label: cleanedPiece });
              unique.push(cleanedPiece);
            } else {
              // update existing
              const index = results.findIndex((r) => r.label === cleanedPiece);
              const existing = results.find((r) => r.label === cleanedPiece);
              if (index > -1 && existing) {
                const copy = { ...existing };
                const { value } = existing;
                copy.value = value + 1;
                results[index] = copy;
              }
            }
          }
        }
      } else {
        if (!unique.includes(clean)) {
          // create new entry
          results.push({ id: Number(unique.length), value: 1, label: clean });
          unique.push(clean);
        } else {
          // update existing
          const index = results.findIndex((r) => r.label === clean);
          const existing = results.find((r) => r.label === clean);
          if (index > -1 && existing) {
            const copy = { ...existing };
            const { value } = existing;
            copy.value = value + 1;
            results[index] = copy;
          }
        }
      }
    }
  }
  return results;
}

function prepareOrderedResponsesData(data: string[]): InputData[] {
  const results: InputData[] = [];
  const unique: string[] = [];
  for (const item of data) {
    const clean = cleanString(item);
    if (clean) {
      const pieces = clean.split(';');
      let length = 0;
      for (const piece of pieces) {
        if (piece) length += 1;
      }
      for (const piece of pieces) {
        if (piece) {
          if (!unique.includes(piece)) {
            results.push({ id: Number(unique.length), value: 1, label: piece });
            unique.push(piece);
          } else {
            // update existing
            const index = results.findIndex((r) => r.label === piece);
            const existing = results.find((r) => r.label === piece);
            if (index > -1 && existing) {
              const copy = { ...existing };
              const { value } = existing;
              copy.value = value + length - index;
              results[index] = copy;
            }
          }
        }
      }
    }
  }
  results.sort((a, b) => b.value - a.value);
  return results;
}

function getRandomHexColor(): string {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomRgbColor(): string {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function generateRandomColorArray(length: number, format: 'hex' | 'rgb' = 'hex'): string[] {
  const colors: string[] = [];
  for (let i = 0; i < length; i += 1) {
    colors.push(format === 'hex' ? getRandomHexColor() : getRandomRgbColor());
  }
  return colors;
}
/* eslint-disable  @typescript-eslint/no-explicit-any */
function addColorsToData({ data }: { data: any }) {
  const { length } = data;
  const colors = generateRandomColorArray(length);
  const copy = [];
  for (let i = 0; i < length; i += 1) {
    const item = data[i];
    item.color = colors[i];
    copy.push(item);
  }
  return copy;
}

function produceFields(data: CSVRecord[]): Field[] {
  const columns = Object.keys(data[0]);
  const fields: Field[] = [];
  for (const column of columns) {
    const matchType = column.match(/[^[\]]+(?=])/g);
    const type = matchType && matchType.length > 0 ? matchType[0] : 'skip';
    const note = '';
    const label = column.replace(`[${type}]`, '').trim();
    const field = {
      label,
      type,
      note,
      data: [],
      answersNumber: 0,
    }
    if (type !== 'skip') {
      fields.push(field);
    }
  }
  for (const row of data) {
    for (const key of Object.keys(row)) {
      const label = key.replace(/\[.*?\]/g, '').trim();
      const findField = fields.find((f) => f.label === label);
      if (findField) {
        if (findField.label !== 'Start time') {
          findField.data.push(row[key as any]);
        } else {
          findField.data.push(`${row['Start time[completion-time]']}-${row['Completion time[skip]']}`);
        }

      }
    }
  }
  return fields;
}


export { addColorsToData, generateRandomColorArray, prepareOrderedResponsesData, preparePieData, produceFields };