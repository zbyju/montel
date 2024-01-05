import type { Moment } from "moment";
import { data } from "./data/babyboxData";
import moment from "moment";

export type Record = {
  rank: number;
  datetime: Moment;
  name: string;
  location: string;
  sex: "M" | "F" | "U";
};

function getData(): string {
  return data;
}

function parseData(data: string): Record[] {
  return data.split("\n").map((l) => {
    const split = l.split(",");
    const rank = parseInt(split[0]);
    const date = split[1];
    const time = split[2];
    const name = split[3];
    const location = split[4];
    const sex = split[5] === "M" ? "M" : split[5] === "F" ? "F" : "U";

    const datetime = moment(date + " " + time, "D.M.YYYY HH:mm");

    return { rank, datetime, name, location, sex };
  });
}

export function getRecords(): Record[] {
  return parseData(getData());
}

export type StatsTotal = { id: string; value: number }[];

export function calculateTotal(records: Record[]): StatsTotal {
  return records.reduce(
    (acc, r) => {
      return r.sex === "M"
        ? [{ id: acc[0].id, value: acc[0].value + 1 }, acc[1]]
        : r.sex === "F"
          ? [acc[0], { id: acc[1].id, value: acc[1].value + 1 }]
          : acc;
    },
    [
      { id: "Kluci", value: 0 },
      { id: "Holky", value: 0 },
    ],
  );
}

export type StatsBy = {
  x: string;
  Kluci: number;
  Holky: number;
}[];

export function calculateChildrenByDay(records: Record[]): StatsBy {
  return records.reduce(
    (acc, r) => {
      const di = moment(r.datetime).isoWeekday() - 1;
      return acc.map((d, i) => {
        if (di != i) return d;
        return r.sex === "M"
          ? { ...d, Kluci: d.Kluci + 1 }
          : r.sex === "F"
            ? { ...d, Holky: d.Holky + 1 }
            : d;
      });
    },
    [
      { x: "Pondělí", Kluci: 0, Holky: 0 },
      { x: "Úterý", Kluci: 0, Holky: 0 },
      { x: "Středa", Kluci: 0, Holky: 0 },
      { x: "Čtvrtek", Kluci: 0, Holky: 0 },
      { x: "Pátek", Kluci: 0, Holky: 0 },
      { x: "Sobota", Kluci: 0, Holky: 0 },
      { x: "Neděle", Kluci: 0, Holky: 0 },
    ],
  );
}

export function calculateChildrenByMonth(records: Record[]): StatsBy {
  return records.reduce(
    (acc, r) => {
      const mi = moment(r.datetime).month();
      return acc.map((d, i) => {
        if (mi != i) return d;
        return r.sex === "M"
          ? { ...d, Kluci: d.Kluci + 1 }
          : r.sex === "F"
            ? { ...d, Holky: d.Holky + 1 }
            : d;
      });
    },
    [
      "Leden",
      "Únor",
      "Březen",
      "Duben",
      "Květen",
      "Červen",
      "Červenec",
      "Srpen",
      "Září",
      "Říjen",
      "Listopad",
      "Prosinec",
    ].map((m) => ({ x: m, Kluci: 0, Holky: 0 })),
  );
}

function createArrayFromTo(start: number, end: number): number[] {
  const result: number[] = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}

export type StatsByYear = {
  x: number;
  y: number;
};

export function calculateChildrenByYear(records: Record[]): StatsByYear[][] {
  return records.reduce(
    (acc, r) => {
      const y = moment(r.datetime).year();
      if (r.sex === "M") {
        return [
          acc[0].map((d) => {
            if (y !== d.x) return d;
            return { ...d, y: d.y + 1 };
          }),
          acc[1],
        ];
      } else if (r.sex === "F") {
        return [
          acc[0],
          acc[1].map((d) => {
            if (y !== d.x) return d;
            return { ...d, y: d.y + 1 };
          }),
        ];
      } else {
        return acc;
      }
    },
    [
      createArrayFromTo(2006, moment().year()).map((y) => ({ x: y, y: 0 })),
      createArrayFromTo(2006, moment().year()).map((y) => ({ x: y, y: 0 })),
    ],
  );
}

export function calculateChildrenByHour(records: Record[]): StatsBy {
  return records
    .reduce(
      (acc, r) => {
        const hi = moment(r.datetime).hour();
        return acc.map((d, i) => {
          if (hi != i) return d;
          return r.sex === "M"
            ? { ...d, Kluci: d.Kluci + 1 }
            : r.sex === "F"
              ? { ...d, Holky: d.Holky + 1 }
              : d;
        });
      },
      Array.from(Array(24).keys()).map((h) => ({ x: h, Kluci: 0, Holky: 0 })),
    )
    .map((x) => {
      const hour = x.x.toString().padStart(2, "0");
      return { ...x, x: `${hour}:00-${hour}:59` };
    });
}
