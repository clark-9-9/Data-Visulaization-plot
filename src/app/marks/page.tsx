"use client";
// import * as d3 from "d3";
import * as Plot from "@observablehq/plot";
import PlotFigure from "../PlotFigure";
import gistemp from "../Data/gistemp.json";
import aapl from "../Data/aapl.json";
import penguins from "../Data/penguins.json";
import goog from "../Data/goog.json";
import bls from "../Data/bls-metro-unemployment.json";
import { linedata, timeseries } from "../ts/app";

export default function Page() {
    const parseDate = (dateString: string) => new Date(dateString);

    return (
        <div className="flex flex-col items-center justify-center gap-12 py-5">
            <PlotFigure
                options={{
                    inset: 20,
                    x: {
                        type: "time",
                        tickSize: 10,
                        labelOffset: 10,
                        label: "Date",
                    },
                    y: {
                        tickSize: 10,
                        labelOffset: 10,
                        label: "Anomaly",
                    },
                    style: {
                        fontSize: "12px",
                    },

                    height: 500,
                    width: 1200,
                    marks: [
                        Plot.dot(gistemp, {
                            x: (d) => parseDate(d.Date),
                            y: "Anomaly",
                            stroke: "red",
                        }),
                    ],
                }}
            />

            <PlotFigure
                options={{
                    height: 500,
                    width: 1200,
                    inset: 20,
                    marks: [
                        Plot.dot(penguins, {
                            x: "culmen_length_mm",
                            y: "culmen_depth_mm",
                            stroke: "sex",
                        }),
                        Plot.crosshair(penguins, {
                            x: "culmen_length_mm",
                            y: "culmen_depth_mm",
                        }),
                    ],
                }}
            />

            <PlotFigure
                options={{
                    inset: 20,
                    x: {
                        type: "time",
                    },

                    height: 500,
                    width: 1200,
                    marks: [
                        Plot.lineY(gistemp, {
                            x: (d) => parseDate(d.Date),
                            y: "Anomaly",
                            stroke: "red",
                        }),
                    ],
                }}
            />

            <PlotFigure
                options={{
                    height: 500,
                    width: 1200,
                    inset: 10,
                    x: {
                        type: "time",
                    },
                    style: {
                        fontSize: "12px",
                        fontWeight: "bold",
                    },

                    marks: [
                        Plot.ruleY([0]),
                        Plot.areaY(aapl, {
                            x: (d) => parseDate(d.Date),
                            y: "Close",
                            fillOpacity: 0.2,
                        }),
                        Plot.lineY(aapl, {
                            x: (d) => parseDate(d.Date),
                            y: "Close",
                            strokeWidth: 2.4,
                            tip: "xy",
                            title: (d) => `$${d.Close.toFixed(2)}`,
                        }),

                        // Plot.dot(aapl, {
                        //     className: "dot-marks",
                        //     x: (d) => parseDate(d.Date),
                        //     y: "Close",
                        //     tip: {
                        //         format: {
                        //             y: (y) => `$${y.toFixed(2)}`,
                        //         },
                        //     },
                        //     r: 1.4,
                        //     title: (d) => `$${d.Close.toFixed(2)}`,
                        //     fill: "lightblue",
                        // }),
                    ],
                }}
            />

            <PlotFigure
                options={{
                    inset: 20,
                    height: 500,
                    width: 1200,
                    x: {
                        type: "time",
                    },
                    color: { legend: true },
                    marks: [
                        [goog, aapl].map((stock) =>
                            Plot.lineY(stock, {
                                x: (d) => parseDate(d.Date),
                                y: "Close",
                                stroke: stock === goog ? "red" : "blue",
                                // stroke: "Date",
                                // stroke: "Close",
                            })
                        ),
                    ],
                }}
            />

            <PlotFigure
                options={{
                    height: 500,
                    width: 1200,
                    y: {
                        type: "log",
                        // type: "linear",
                        domain: [30, 300],
                        // grid: true,
                        // ticks: 15,
                        // ticks: d3.scaleLog().domain([30, 300]).nice().ticks(40),
                    },
                    marks: [Plot.lineY(aapl, { x: "Date", y: "Close" })],
                }}
            />

            <PlotFigure
                options={{
                    height: 500,
                    width: 1200,
                    x: {
                        type: "time",
                    },
                    marks: [
                        Plot.lineY(bls, {
                            x: (d) => parseDate(d.date),
                            y: "unemployment",
                            z: "division",
                        }),
                    ],
                }}
            />

            {/* 
                Another common way to extract a column from tabular data is an accessor function. 
                This function is invoked for each element in the data (each row), 
                and returns the corresponding observed value, as with array.map.
            */}

            <PlotFigure
                options={{
                    inset: 5,
                    marks: [
                        Plot.lineY(linedata, {
                            x: (d) => d.hour,
                            y: (d) => {
                                // console.log(d.value);
                                return d.value;
                            },
                            stroke: (d) => d.sensor,
                        }),
                    ],
                }}
            />

            {/* 
                In particular, beware the simple “bar”! A bar mark is used for a bar chart, but a rect mark is needed for a histogram. Plot has four different mark types for drawing rectangles:
                use rect when both x and y are quantitative
                use barX when x is quantitative and y is ordinal
                use barY when x is ordinal and y is quantitative
                use cell when both x and y are ordinal
            */}

            <PlotFigure
                options={{
                    x: { tickFormat: "" },
                    marks: [
                        Plot.barY(timeseries, { x: "year", y: "population" }),
                    ],
                }}
            />

            <PlotFigure
                options={{
                    x: { tickFormat: "" },
                    marks: [
                        Plot.rectY(timeseries, {
                            x: "year",
                            y: "population",
                            interval: 1,
                            // fill: "population",
                            fill: (d) => d.population,
                            rx: 20,
                        }),
                    ],
                }}
            />

            <PlotFigure
                options={{
                    className: "plot-marks",
                    inset: 20,
                    insetLeft: 50,
                    height: 500,
                    width: 1200,
                    marginBottom: 50,
                    style: {
                        fontSize: "16px",
                    },

                    marks: [
                        (() => {
                            const marks = Plot.marks(
                                Plot.areaY(aapl, {
                                    x: (d) => parseDate(d.Date),
                                    y: "Close",
                                    opacity: 0.3,
                                    tip: true,
                                    // stroke: { value: "High", scale: "color" },
                                    // stroke: "Close",
                                    title: (d) => `$${d.Close.toFixed(2)}`,
                                })
                                // Plot.dot(aapl, {
                                //     x: (d) => parseDate(d.Date),
                                //     y: "Close",
                                //     r: 1.4,

                                //     tip: {
                                //         // opacity(d, i) {
                                //         //     console.log(d, i);
                                //         //     return 0.5;
                                //         // },
                                //     },
                                //     stroke: { value: "High", scale: "color" },
                                //     title: (d) => `$${d.Close.toFixed(2)}`,
                                // })
                            );
                            return marks;
                        })(),
                    ],
                }}
            />
        </div>
    );
}
