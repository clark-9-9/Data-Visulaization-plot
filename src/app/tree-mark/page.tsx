"use client";

import { Fragment } from "react";
import PlotFigure from "../PlotFigure";
import * as Plot from "@observablehq/plot";
import aapl from "../Data/aapl.json";

export default function Page() {
    return (
        <div className="Scales_Container flex flex-col items-center justify-center gap-12 py-5">
            {(() => {
                const trees = [
                    "Chaos/Gaia/Mountains",
                    "Chaos/Gaia/Pontus",
                    "Chaos/Gaia/Uranus",
                    "Chaos/Eros",
                    "Chaos/Erebus",
                    "Chaos/Tartarus",
                    "first/second/third",
                    "first/1.5",
                    "first/second/2.5",
                    "first/second/third/3.5",
                ];

                return [
                    <PlotFigure
                        key={Math.random()}
                        options={{
                            className: "TreeMark",
                            axis: null,
                            margin: 10,
                            marginLeft: 40,
                            marginRight: 120,
                            // width: 288,
                            // height: 1200,

                            marks: [
                                Plot.tree(trees, {
                                    textStroke: "black" /* none */,
                                    // treeSort: "node:height",
                                }),
                            ],
                        }}
                    />,
                    <PlotFigure
                        key={Math.random()}
                        options={{
                            className: "TreeMark",
                            axis: null,
                            margin: 10,
                            marginLeft: 40,
                            marginRight: 120,
                            width: 12000,
                            // height: 16000,

                            marks: [
                                Plot.cluster(trees, {
                                    textStroke: "black" /* none */,
                                }),
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
