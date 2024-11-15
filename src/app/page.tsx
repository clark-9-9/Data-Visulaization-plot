"use client";
import * as d3 from "d3";
import * as Plot from "@observablehq/plot";
import { useEffect, useState } from "react";
import goog from "./Data/goog.json";
import PlotFigure from "./PlotFigure";
import penguins from "./Data/penguins.json";
import aapl from "./Data/aapl.json";
import alphabet from "./Data/alphabet.json";
// import Data from "./test";
// import { StockData } from "./ts/app";

// const lineData = [
//     ["AAPL", aapl],
//     ["GOOG", goog],
// ].flatMap(([Symbol, values]) => {
//     return values.map((d: StockData) => {
//         return { Symbol, ...d };
//     });
// });

export default function Page() {
    // const parseDate = (dateString: string) => new Date(dateString);
    const [margins, setMargins] = useState({
        top: 20,
        right: 100,
        bottom: 30,
        left: 100,
    });

    const handleMarginChange =
        (margin: keyof typeof margins) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setMargins((prev) => ({
                ...prev,
                [margin]: parseInt(e.target.value),
            }));
        };

    useEffect(() => {
        const markPlotDiv = document.querySelector(".mark-plot-div");

        const markPlot = Plot.barY(alphabet, {
            x: "letter",
            y: "frequency",
        }).plot({ height: 200 });

        if (markPlotDiv) {
            markPlotDiv.appendChild(markPlot);
        }

        // const color = markPlot.scale("color");
        // const legend = markPlot.legend("color");
        // console.log(color?.range);
        // console.log(legend?.cloneNode(true));

        // Data();

        return () => {
            markPlot.remove();
        };
    }, []);

    return (
        <div className="flex flex-col items-center justify-center gap-12 py-5">
            {/* <div id="myplot"></div> */}

            <PlotFigure
                options={{
                    marks: [
                        Plot.rectY(
                            { length: 10000 },
                            // { length: 1000 },
                            Plot.binX({ y: "count" }, { x: Math.random })
                        ),
                    ],
                }}
            />

            <PlotFigure
                options={{
                    marks: [
                        Plot.frame(),
                        Plot.text(["Hello, world!"], {
                            frameAnchor: "middle",
                            fontSize: "20px",
                        }),
                    ],
                }}
            />

            <PlotFigure
                options={{
                    marks: [
                        Plot.auto(penguins, {
                            x: "body_mass_g",
                            y: "flipper_length_mm",
                        }),
                    ],
                }}
            />

            <PlotFigure
                options={{
                    marks: [
                        Plot.dot(penguins, {
                            x: "culmen_length_mm",
                            y: "culmen_depth_mm",
                        }),
                    ],
                }}
            />

            <PlotFigure
                options={{
                    marks: [
                        Plot.rectY(
                            { length: 10000 },
                            // d3.randomNormal(): Returns a function for generating random numbers with a normal (Gaussian) distribution. The expected value of the generated numbers is mu, with the given standard deviation sigma. If mu is not specified, it defaults to 0; if sigma is not specified, it defaults to 1.
                            Plot.binX(
                                { y: "count" },
                                {
                                    x: d3.randomNormal() /* thresholds: 50 */,
                                    // fill: "red",
                                    // stroke: "white  ",
                                }
                            )
                        ),
                    ],
                }}
            />

            <PlotFigure
                options={{
                    title: "Lines",
                    color: { legend: true },
                    x: {
                        label: "Date",
                        type: "time", // Specify that this is a time axis
                        tickFormat: "%b %Y", // Format for date ticks (e.g., "Jan 2023")
                    },
                    y: { label: "Close Price" },

                    marks: [
                        Plot.ruleY([50], { stroke: "yellow" }),
                        Plot.ruleY([0], { stroke: "white" }),
                        Plot.ruleY([190], { stroke: "yellow" }),
                        // Plot.lineY(lineData, {
                        //     // x: "Date",
                        //     x: (d) => parseDate(d.Date),
                        //     y: "Close",
                        //     stroke: "Symbol",
                        // }),
                        Plot.lineY(goog, {
                            x: "Date",
                            y: "Close",
                            stroke: "red",
                        }),
                        Plot.lineY(aapl, {
                            x: "Date",
                            y: "Close",
                            stroke: "blue",
                        }),
                    ],
                }}
            />

            <PlotFigure
                options={{
                    height: 400,
                    // axis: null,
                    grid: true,
                    title: "Title",
                    marks: [
                        Plot.lineY(
                            [
                                { x: 1, y: 10 },
                                { x: 1.9, y: 14 },
                                { x: 2, y: 20 },
                                { x: 3, y: 15 },
                            ],
                            { x: "x", y: "y" }
                        ),
                    ],
                }}
            />

            <PlotFigure
                options={{
                    x: { padding: 0.4 },

                    marks: [
                        // Plot.rectY(alphabet, { x: "letter", y: "frequency" }),
                        Plot.barY(alphabet, {
                            x: "letter",
                            y: "frequency",
                            fill: "white",
                            dx: 2,
                            dy: 2,
                        }),
                        Plot.barY(alphabet, {
                            x: "letter",
                            y: "frequency",
                            fill: "#2fa8a0",
                            dx: -2,
                            dy: -2,
                        }),
                    ],
                }}
            />

            <div>
                <div className="w-full max-w-md">
                    <div className="mb-2">
                        <label className="mr-2">Top: {margins.top}</label>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={margins.top}
                            onChange={handleMarginChange("top")}
                        />
                    </div>
                    <div className="mb-2">
                        <label className="mr-2">Right: {margins.right}</label>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={margins.right}
                            onChange={handleMarginChange("right")}
                        />
                    </div>
                    <div className="mb-2">
                        <label className="mr-2">Bottom: {margins.bottom}</label>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={margins.bottom}
                            onChange={handleMarginChange("bottom")}
                        />
                    </div>
                    <div className="mb-2">
                        <label className="mr-2">Left: {margins.left}</label>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={margins.left}
                            onChange={handleMarginChange("left")}
                        />
                    </div>
                </div>

                <br />

                <PlotFigure
                    options={{
                        marginTop: margins.top,
                        marginRight: margins.right,
                        marginBottom: margins.bottom,
                        marginLeft: margins.left,
                        grid: true,
                        marks: [
                            Plot.barY(alphabet, {
                                x: "letter",
                                y: "frequency",
                                fill: "green",
                            }),
                            Plot.frame(),
                        ],
                    }}
                />
            </div>

            <PlotFigure
                options={{
                    grid: true,
                    inset: 10,
                    aspectRatio: 0.8,
                    color: { legend: true },

                    x: {
                        domain: [30, 60],
                        label: "Culmen Length (mm)",
                    },
                    y: {
                        domain: [12, 22],
                    },
                    marks: [
                        Plot.ruleX([45], { stroke: "red" }),
                        Plot.frame(),
                        Plot.dot(penguins, {
                            x: "culmen_length_mm",
                            y: "culmen_depth_mm",
                            stroke: "species",
                            tip: "xy",
                            // color: "species",
                            title: (d) =>
                                `Species: ${d.species} , Island: ${d.island} \n\n X:${d.culmen_length_mm} Y:${d.culmen_depth_mm} `,
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
                    height: 150,
                    width: 550,
                    title: "For charts, an informative title",
                    subtitle: "Subtitle to follow with additional context",
                    caption:
                        "Figure 1. A chart with a title, subtitle, and caption.",
                    style: {
                        fontFamily: "Arial, sans-serif",
                        color: "#333",
                        padding: "20px",
                    },

                    marks: [
                        Plot.frame(),
                        Plot.text(
                            [
                                "Titles, subtitles, captions, and annotations assist inter­pretation by telling the reader what’s interesting. Don’t make the reader work to find what you already know.",
                            ],
                            {
                                lineWidth: 30,
                                frameAnchor: "middle",
                                fontSize: "1.2rem",
                            }
                        ),
                    ],
                }}
            />

            <h2>Without Clipping</h2>

            <PlotFigure
                options={{
                    width: 400,
                    height: 300,
                    x: { domain: [0, 10], interval: 3 },
                    y: { domain: [0, 10], interval: 3.5 },
                    marks: [
                        Plot.frame(),
                        Plot.line(
                            [
                                { x: 0, y: 0 },
                                { x: 5, y: 5 },
                                { x: 10, y: 20 }, // This point is outside the y-domain
                            ],
                            {
                                x: "x",
                                y: "y",
                                stroke: "red",
                                strokeWidth: 2,
                            }
                        ),
                    ],
                }}
            />

            <h2>With Clipping</h2>

            <PlotFigure
                options={{
                    width: 400,
                    height: 300,
                    className: "my-custom-plot-class",
                    x: { domain: [0, 10] },
                    y: { domain: [0, 10] },
                    clip: true, // Enable clipping
                    marks: [
                        Plot.frame(),
                        Plot.line(
                            [
                                { x: 0, y: 0 },
                                { x: 5, y: 5 },
                                { x: 10, y: 20 }, // This point is outside the y-domain
                            ],
                            { x: "x", y: "y", stroke: "red", strokeWidth: 2 }
                        ),
                    ],
                }}
            />

            <PlotFigure
                options={{
                    height: 200,
                    marks: [
                        Plot.barY(alphabet, {
                            x: "letter",
                            y: "frequency",
                        }),
                    ],
                }}
            />

            <div className="mark-plot-div"></div>
        </div>
    );
}

/* 
export default function Page() {
    const plotRef = useRef<HTMLDivElement>(null);
    const isPlotCreated = useRef(false);

    useEffect(() => {
        if (!plotRef.current || isPlotCreated.current) return;

        const plot = Plot.rectY(
            { length: 10000 },
            Plot.binX({ y: "count" }, { x: Math.random })
        ).plot();

        plotRef.current.appendChild(plot);
        isPlotCreated.current = true;

        return () => {
            plot.remove();
            isPlotCreated.current = false;
        };
    }, []);

    return (
        <Fragment>
            <h1>Penguins</h1>
            <div ref={plotRef}></div>
        </Fragment>
    );
}

---------------------------------------------

    const plotRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const plot = Plot.rectY(
            { length: 10000 },
            Plot.binX({ y: "count" }, { x: Math.random })
        ).plot();

        // const div = document.querySelector("#myplot");
        if (plotRef.current) {
            // plotRef.current.append(plot);
        }

        return () => {
            plot.remove();
        };
    }, []);

*/
