import goog from "./Data/goog.json";
import aapl from "./Data/aapl.json";
// import penguins from "./Data/penguins.json";
// import weather from "./Data/weather.json";
// import alphabet from "./Data/alphabet.json";
import amzn from "./Data/amzn.json";
import ibm from "./Data/ibm.json";
import { StockData } from "./ts/app";

function Data() {
    const stocks = [
        ["AAPL", aapl],
        ["AMZN", amzn],
        ["GOOG", goog],
        ["IBM", ibm],
        // ].flatMap(([Symbol, values]) => values.map((d) => ({ Symbol, ...d })));
    ].flatMap(([Symbol, values]) => {
        // ].flatMap((d) => {
        // console.log(Symbol);
        // console.log(values);
        // console.log(d);
        return values.map((d: StockData) => {
            // console.log(d);
            return { Symbol, ...d };
        });
    });

    console.log(stocks);
}

export default Data;
/* 
with map

[Array(1260), Array(1260), Array(1260), Array(1260)]

    INDEX 0
    
    [
        {
            Symbol: "AAPL",
            Date: "2013-05-13",
            Open: 64.501427,
            High: 65.414284,
            Low: 64.5,
        },
        {
            Symbol: "AAPL",
            Date: "2013-05-14",
            Open: 64.835716,
            High: 65.028572,
            Low: 64.5,
        },
    ]
];

------------------------
with flatMap
(5040) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

[
    {
        Symbol: "AAPL",
        Date: "2013-05-13",
        Open: 64.501427,
        High: 65.414284,
        Low: 64.5,
    },
    {
        Symbol: "AAPL",
        Date: "2013-05-14",
        Open: 64.835716,
        High: 65.028572,
        Low: 64.5,
    },
]


*/
