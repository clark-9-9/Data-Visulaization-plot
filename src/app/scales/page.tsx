"use client";
import * as d3 from "d3";
import * as Plot from "@observablehq/plot";
import PlotFigure from "../PlotFigure";
import { fruits } from "../ts/app";
import gistemp from "../Data/gistemp.json";
import aapl from "../Data/aapl.json";
import temperatures from "../Data/sf-temperatures.json";
import { Fragment } from "react";
// import CsvFileInput from "./CsvFileInput";

export default function Page() {
    const parseDate = (dateString: string) => new Date(dateString);
    // const formatTime = d3.utcFormat("%B %d, %Y");
    // const formatTime = d3.utcFormat("%b %e, %Y");
    // const formatTime = d3.timeFormat("%b %e");

    // const [datas, setData] = useState<any[]>([]);
    // const handleFileLoad = (csvData: any) => {
    //     setData(csvData);
    //     console.log(csvData);
    // };

    return (
        <div className="Scales_Container flex flex-col items-center justify-center gap-12 py-5">
            {/* <CsvFileInput onFileLoad={handleFileLoad} /> */}
            <PlotFigure
                options={{
                    x: { label: "Sales" },
                    y: { label: "Sweetness (1-10)" },
                    color: { legend: true },
                    marks: [
                        (() => {
                            type FruitType1 = ReturnType<
                                () => (typeof fruits)[number]
                            >;
                            // type FruitType2 = (typeof fruits)[number];

                            const marks = Plot.marks(
                                Plot.dot(fruits, {
                                    x: (d: FruitType1) => d.sales,
                                    y: "sweetness",
                                    fill: "fruit",
                                    r: (d) => d.sales / 2,
                                    tip: true,
                                    title: (d) =>
                                        `Sales: ${d.sales} , Sweetness: ${d.sweetness}`,
                                })
                            );

                            return marks;
                        })(),
                    ],
                }}
            />

            <PlotFigure
                options={{
                    marks: [
                        Plot.barY(fruits, {
                            x: "fruit",
                            y: "sales",
                            fill: "sweetness",
                            sort: { x: "y", reverse: true },
                            tip: true,
                        }),

                        Plot.crosshair(fruits, {
                            x: "fruit",
                            y: "sales",
                        }),
                    ],
                    x: { label: "Fruit" },
                    y: { label: "Sales" },
                    color: {
                        type: "linear",
                        range: ["yellow", "red", "green"],
                        label: "Sweetness",
                    },
                }}
            />

            <PlotFigure
                options={{
                    marks: [
                        (() => {
                            return Plot.ruleX(gistemp, {
                                x: "Date",
                                stroke: "Anomaly",
                            });
                        })(),
                    ],
                }}
            />

            <PlotFigure
                options={{
                    x: {
                        domain: [0, 100],
                        grid: true,
                    },
                }}
            />

            <PlotFigure
                options={{
                    x: {
                        domain: [100, 30],
                        grid: true,
                        reverse: true,
                    },
                }}
            />

            <PlotFigure
                options={{
                    x: {
                        domain: [1609459200000, 1640995200000],
                        grid: true,
                        type: "utc",
                    },
                }}
            />

            <PlotFigure
                options={{
                    x: {
                        domain: [
                            new Date("2021-01-01"),
                            new Date("2022-01-01"),
                        ],
                        grid: true,
                        type: "time",
                    },
                }}
            />

            <PlotFigure
                options={{
                    x: {
                        // new Date(2021, 0, 1),
                        domain: [new Date(2021, 5, 1), new Date("2022-01-01")],
                        grid: true,
                    },
                }}
            />

            <PlotFigure
                options={{
                    x: {
                        type: "log",
                        domain: [1, 1e5] /* 1e5 = 10^5 = 100,000 */,
                        grid: true,
                        tickFormat: ",",
                    },
                }}
            />

            <PlotFigure
                options={{
                    x: {
                        domain: [1, 1e5] /* 1e5 = 10^5 = 100,000 */,
                        grid: true,
                        // tickFormat: ",",
                    },
                }}
            />

            <PlotFigure
                options={{
                    x: {
                        type: "log",
                        base: 2, // 2^1, 2^2, 2^3, 2^4, 2^5 etc...
                        domain: [1, 1e4],
                        // ticks: 5,
                        grid: true,
                        // tickSpacing: 27,
                        tickSize: -20,
                    },
                }}
            />

            <PlotFigure
                options={{
                    x: {
                        type: "symlog", // bi-symmetric log
                        domain: [-20, 20],
                        grid: true,
                    },
                }}
            />

            <PlotFigure
                options={{
                    x: {
                        type: "symlog", // bi-symmetric log
                        domain: [-20, 20],
                        grid: true,
                    },
                }}
            />

            <PlotFigure
                options={{
                    x: {
                        type: "sqrt",
                        domain: [0, 100],
                        grid: true,
                        // exponent: 0.5, default
                    },
                }}
            />

            <PlotFigure
                options={{
                    x: {
                        type: "pow",
                        domain: [0, 20],
                        grid: true,
                        exponent: 1,
                        // ticks: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                    },
                    y: {
                        domain: [0, 20],
                        grid: true,
                        // range: [0, 1],
                    },
                    style: {
                        fontSize: 13,
                    },
                }}
            />
            {(() => {
                /* 
                    - Discrete scales
                    Sadly, not all data is continuous: some data is merely ordinal, such as t-shirt sizes; and some categorical (a.k.a. nominal), such as brands of clothing. 
                    To encode such data as position, a point or band scale is required.
                    The main difference between `point` and `band` scales is the way they represent data:
                    
                    **Point Scale:**
                    - Represents individual data points or values
                    * Can be used for scatterplots, histograms, etc.
                    * Each point is a unique value

                    **Band Scale:**
                    - Represents a range or interval of values
                    * Can be used for bar charts, heatmaps, etc.
                    * Each band represents a group of values

                    - In other words, `point` scales focus on individual values, while `band` scales focus on ranges or groups of values.

                    While both can be used for ordinal data, the key difference is that `point` scales are more suitable for individual values, while `band` scales are more suitable for ranges or categories.
                    So, while they share some similarities, they are not the same, and the choice between them depends on the type of data and the visualization you want to create.
                */
                return [
                    <PlotFigure
                        key={Math.random()}
                        options={{
                            x: {
                                type: "point", // A point scale divides space into uniformly-spaced discrete values. It is commonly used for scatterplots (a dot mark) of ordinal data. It is the default scale type for ordinal data on the x and y scale.
                                domain: "ABCDEFGHIJ",
                                grid: true,
                            },
                        }}
                    />,
                    <PlotFigure
                        key={Math.random()}
                        options={{
                            // insetLeft: 20,
                            // insetRight: 20,
                            // padding: 0.2,
                            x: {
                                type: "band", // A band scale divides space into uniformly-spaced and -sized discrete intervals. It is commonly used for bar charts (bar marks). To show the bands below, we use a cell instead of a grid.
                                domain: "ABCDEFGHIJ",
                                grid: true,
                                // padding: 0.9,
                                // align: 0.9,
                                // round: false, Positions scales also have a round option which forces the scale to snap to integer pixels. This defaults to true for point and band scales, and false for quantitative scales.
                            },
                            marks: [
                                Plot.frame({
                                    strokeOpacity: 0.4,
                                }),
                                Plot.cell("ADEGHJ", {
                                    // x: Plot.identity,
                                    stroke: "red",
                                    // fill: "white",
                                    strokeWidth: 2,
                                }),
                            ],
                        }}
                    />,
                ].map((Element, index) => {
                    return <Fragment key={index}>{Element}</Fragment>;
                });
            })()}

            {(() => {
                /* 
                    + Color scales
                        - You can implement a custom color scheme by specifying the scale’s range, or by passing an interpolate function that takes a parameter t in [0, 1]. The interpolate option can specify a color space such as rgb, or a two-argument function that takes a pair of values from the range.
                        - Diverging color scales are intended to show positive and negative values, or more generally values above or below some pivot value. Diverging color scales default to the RdBu (red–blue) color scheme. The pivot defaults to zero, but you can change it with the pivot option, which should ideally be a value near the middle of the domain.
                */

                return [
                    <PlotFigure
                        key={Math.random()}
                        options={{
                            color: {
                                // type: "diverging",
                                // scheme: "BuRd",
                                // scheme: "rdylbu",
                                scheme: "ylorrd",
                            },
                            marks: [
                                Plot.ruleX(gistemp, {
                                    x: (d) => parseDate(d.Date),
                                    stroke: "Anomaly",
                                }),
                            ],
                        }}
                    />,

                    <PlotFigure
                        key={Math.random()}
                        options={{
                            grid: true,
                            color: {
                                // type: "diverging",
                                // scheme: "BuRd",
                                // scheme: "PuRd",
                                // scheme: d3.interpolateRgb.gamma(2),
                                // range: [
                                //     "#ff69b4",
                                //     "#ff99cc",
                                //     "#ff66cc",
                                //     "#ff33cc",
                                //     "#ff00cc",
                                //     "#cc00cc",
                                //     "#9900cc",
                                //     "#6600cc",
                                //     "#3300cc",
                                // ],
                                // type: "diverging",
                                // scheme: "buylrd",
                                // scheme: "Set1",
                                scheme: "Observable10",
                                // scheme: "Set1",
                                // scheme: "Set1",
                                // scheme: "Set1",
                                // interpolate: d3.interpolateRgb.gamma(2),
                                // interpolate: d3.interpolateHslLong(
                                //     "red",
                                //     "purple"
                                // ),
                                // interpolate: d3.interpolateLab("red", "blue"),
                            },
                            y: {
                                // grid: true,
                                tickFormat: "+f",
                                label: "↑ Surface temperature anomaly (°C)",
                            },
                            x: {
                                // ti,
                            },
                            marks: [
                                Plot.ruleY([0]),
                                Plot.dot(gistemp, {
                                    x: (d) => parseDate(d.Date),
                                    y: "Anomaly",
                                    stroke: "Anomaly",
                                }),
                            ],
                        }}
                    />,

                    <PlotFigure
                        key={Math.random()}
                        options={{
                            x: {
                                domain: "ABCDEFGHIJ",
                            },
                            color: {
                                scheme: "BuPu",
                            },

                            marks: [
                                Plot.cell(
                                    Array.from("ABCDEFGHIJ", (d, i) => ({
                                        letter: d,
                                        value: i,
                                    })),
                                    {
                                        x: "letter",
                                        fill: "value", // Use 'value' to differentiate colors
                                        // fill: "letter", // Use 'value' to differentiate colors
                                    }
                                ),
                            ],
                        }}
                    />,
                ].map((Element, index) => {
                    return <Fragment key={index}>{Element}</Fragment>;
                });
            })()}

            {(() => {
                /* 
                    + Other scales
                    But wait, there’s more! 😅 Plot has opacity, r, symbol, and length scales, too. 
                    For example, the r scale type defaults to sqrt such that when used with the dot mark, the resulting area is proportional to the r channel value. 
                    You can adjust the effective dot size by specifying an explicit range, as below.

                */

                // console.log(d3.range(1, 11)); // (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                // console.log(
                //     d3.range(1, 11).map((d, i) => [{ dots: d, id: i }])
                // );

                // console.log(
                //     d3.range(1, 11).map((d, i) => ({ dots: d, id: i }))
                // );

                return [
                    <PlotFigure
                        key={Math.random()}
                        options={{
                            // opacity: { range: [0.2, 1] }, // Adjusts transparency of dots
                            // symbol: {
                            //     type: "categorical",
                            //     range: ["circle", "square", "diamond"],
                            // }, // Different shapes for dots
                            // length: { range: [0, 100] }, // For use with line or arrow marks; example included below

                            r: { range: [4, 15] },
                            color: {
                                scheme: "BuPu",
                            },
                            marks: [
                                Plot.dot(
                                    d3
                                        .range(1, 11)
                                        .map((d, i) => ({ dots: d, id: i })),
                                    {
                                        // x: Plot.identity,
                                        // r: Plot.identity,
                                        x: (d) => d.dots,
                                        // y: (d) => d.id,
                                        r: (d) => d.dots,
                                        fill: "dots",
                                        // fill: (d) => d --> for just d3.range(1, 11),
                                    }
                                ),
                            ],
                        }}
                    />,
                ].map((Element, index) => {
                    return <Fragment key={index}>{Element}</Fragment>;
                });
            })()}

            {(() => {
                /* 
                    + Scale transforms
                    The transform scale option allows you to apply a function to all values before they are passed through the scale. 
                    This is convenient for transforming a scale’s data, say to convert to thousands or between temperature units.
                    ----------------------------------------------------------------------------------------------------------------------
                    GPT
                    In the `transform: (f)` function within `y`, the value of `f` represents the data values that are mapped to the `y` scale. Here's how it works:

                    1. **`Plot.ruleY([32])`**: 
                    - Here, `f` will be `32` because the `ruleY` mark is using a constant value of `32` as the input, so the `transform` will convert `32` from Fahrenheit to Celsius. 
                    - The result is `0°C`, which means the line will be drawn at `0°C` on the chart.

                    2. **`Plot.lineY(sftemp, Plot.windowY(7, {x: "date", y: "high"}))`**:
                    - For this, `f` will be each `high` temperature value in the `sftemp` dataset. 
                    - Each of these `high` values will be passed to the `transform` function, converting each Fahrenheit temperature to Celsius.
                    - For example, if `high` is `68°F`, the transform function will convert it to `20°C`.

                    So, `f` represents each value from the data that's being mapped to the `y` axis, whether it's a constant (like `32` from `ruleY`) or varying data points from a dataset (like `high` values from `sftemp`).
                    ----------------------------------------------------------------------------------------------------------------------
                    - The percent scale option is shorthand for a transform that multiplies values by 100; it also adds a percent symbol (%) to the default label.
                    - The interval scale option ^0.5.1 sets an ordinal scale’s domain to the start of every interval within the extent of the data. 
                        * In addition, it implicitly sets the transform of the scale to interval.floor, rounding values down to the start of each interval. 
                        * For example, below we generate a time-series bar chart; when an interval is specified, missing days are visible.



                */

                const k = 50;

                return [
                    <PlotFigure
                        key={Math.random()}
                        options={{
                            y: {
                                grid: true,
                                label: "Temperature (°C)",
                                transform: (f) => (f - 32) * (5 / 9), // convert Fahrenheit to Celsius
                            },
                            marks: [
                                Plot.ruleY([65], { stroke: "red" }), // 32°F -> convert to Celsius
                                Plot.areaY(temperatures, {
                                    x: "date",
                                    y1: "low",
                                    y2: "high",
                                    fillOpacity: 0.3,
                                }),
                                Plot.lineY(
                                    temperatures,
                                    Plot.windowY(k, {
                                        x: "date",
                                        y: "low",
                                        stroke: "blue",
                                    })
                                ),
                                Plot.lineY(
                                    temperatures,
                                    Plot.windowY(k, {
                                        x: "date",
                                        y: "high",
                                        stroke: "red",
                                    })
                                ),
                            ],
                        }}
                    />,

                    <PlotFigure
                        key={Math.random()}
                        options={{
                            y: { percent: true }, // convert proportion [0, 1] to percent [0, 100]
                            color: { scheme: "BuRd" },
                            marks: [
                                Plot.ruleY([0]),
                                Plot.rectY(
                                    gistemp,
                                    Plot.binX(
                                        { y: "proportion", fill: "x" },
                                        { x: "Anomaly" /* fill: "Anomaly" */ }
                                    )
                                ),
                            ],
                        }}
                    />,

                    <PlotFigure
                        key={Math.random()}
                        options={{
                            marginBottom: 100,
                            marginTop: 50,
                            x: {
                                tickRotate: -90,
                                // interval: true ? "day" : null,
                                interval: "day",
                                // interval: "month",
                                // interval: "year",
                                // tickFormat: "%b %Y", // Format for date ticks (e.g., "Jan 2023")
                                // tickFormat: (d) => new Date(d.date),
                                padding: 0.2,
                            },
                            y: {
                                transform: (d) => d / 1e6,
                                label: "Daily trade volume (millions)",
                            },
                            style: {
                                fontSize: "12px",
                            },

                            marks: [
                                Plot.barY(aapl.slice(-30), {
                                    // Plot.rectY(aapl.slice(-30), {
                                    x: (d) => parseDate(d.Date),
                                    // x: (d) => formatTime(parseDate(d.Date)),
                                    y: "Volume",
                                    // interval: "day",
                                }),
                                Plot.ruleY([0]),
                            ],
                        }}
                    />,
                ].map((element, index) => {
                    return <Fragment key={index}>{element}</Fragment>;
                });
            })()}
        </div>
    );
}
