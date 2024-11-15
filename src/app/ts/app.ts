export interface StockData {
    Date: string;
    Open: number;
    High: number;
    Low: number;
    Close: number;
    "Adj Close": number;
    Volume: number;
}

export const linedata = [
    { hour: 0, value: 8, sensor: "A" },
    { hour: 0, value: 6, sensor: "B" },
    { hour: 1, value: 7, sensor: "A" },
    { hour: 1, value: 5, sensor: "B" },
    { hour: 2, value: 3, sensor: "A" },
    { hour: 2, value: 0, sensor: "B" },
    { hour: 3, value: 9, sensor: "A" },
    { hour: 3, value: 2, sensor: "B" },
];

export const timeseries = [
    { year: 2014, population: 7295.290765 },
    { year: 2015, population: 7379.797139 },
    { year: 2016, population: 7464.022049 },
    { year: 2017, population: 7547.858925 },
    { year: 2019, population: 7713.4681 },
    { year: 2021, population: 7794.798739 },
    { year: 2022, population: 7894.798739 },
    { year: 2023, population: 7994.798739 },
    { year: 2024, population: 8094.798739 },
    { year: 2025, population: 8194.798739 },
    { year: 2026, population: 8294.798739 },
    { year: 2027, population: 8394.798739 },
    // { year: 2028, population: 8494.798739 },
    { year: 2029, population: 8594.798739 },
    { year: 2030, population: 8694.798739 },
    { year: 2031, population: 8794.798739 },
    { year: 2032, population: 8894.798739 },
];

export const fruits = [
    { fruit: "Apple", sales: 200, sweetness: 7 },
    { fruit: "Banana", sales: 150, sweetness: 8 },
    { fruit: "Cherry", sales: 100, sweetness: 6 },
    { fruit: "Date", sales: 50, sweetness: 9 },
    { fruit: "Elderberry", sales: 75, sweetness: 5 },
];
