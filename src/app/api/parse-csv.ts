// // pages/api/parse-csv.js

// import fs from "fs";
// import path from "path";
// import csv from "csv-parser";
// // import { NextRequest, NextResponse } from "next/server";
// import { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse
// ) {
//     if (req.method === "GET") {
//         const results = [];

//         fs.createReadStream("path-to-your-csv-file.csv")
//             .pipe(csv())
//             .on("data", (data) => results.push(data))
//             .on("end", () => {
//                 res.status(200).json(results);
//             });
//     } else {
//         res.status(405).json({ message: "Method not allowed" });
//     }
// }
