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
          if (piece) {
            if (!unique.includes(piece)) {
              // create new entry
              results.push({ id: Number(unique.length), value: 1, label: piece });
              unique.push(piece);
            } else {
              // update existing
              const index = results.findIndex((r) => r.label === piece);
              const existing = results.find((r) => r.label === piece);
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
    let type = 'pie';
    let note = '';
    switch (column) {
      case '﻿Id':
      case 'Email':
      case 'Name':
      case 'Completion time':
      case 'Please enter your email address (this will not be connected with your answers) (optional)':
      case 'Please enter your name (this will not be connected with your answers) (optional)':
      case `Can we add your email address to a list run by the UK-IE CIG for AH RSEs? We'd like to share information on community events, learning and networking opportunities (optional)`:
        type = 'skip';
        break;
      case 'Start time':
        type = 'completion-time';
        break;
      case 'What are the barriers for someone to choose a job as an Arts/Humanities Research Software Engineer (AH RSE)? Please rank each of the following items in order of importance with #1(top) being the most ':
      case 'What would you hope to get out of such an organisation? Please rank each of the following items in order of importance with #1(top) being the most important object to #3(last) being the least importan':
        type = 'order';
        break;
      case 'Describe briefly your team structure':
      case 'Any other comments? ':
        type = 'open-response';
        break;
      case 'What is the bus factor of your most important software project? (The bus factor designates the minimal number of developers that have to be hit by a bus (or quit) before a project is incapacitated)\n':
        type = 'pie';
        note = 'Normalisation of results needed';
        break;
      default:
        type = 'pie';
    }
    const field = {
      label: column,
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
      const findField = fields.find((f) => f.label === key);
      if (findField) {
        if (findField.label !== 'Start time') {
          findField.data.push(row[key as keyof CSVRecord]);
        } else {
          findField.data.push(`${row['Start time']}-${row['Completion time']}`);
        }

      }
    }
  }
  return fields;
}


export { addColorsToData, generateRandomColorArray, prepareOrderedResponsesData, preparePieData, produceFields };