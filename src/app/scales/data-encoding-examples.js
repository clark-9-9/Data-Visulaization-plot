// Sample dataset
const data = [
  { fruit: "Apple", sales: 200, sweetness: 7 },
  { fruit: "Banana", sales: 150, sweetness: 8 },
  { fruit: "Cherry", sales: 100, sweetness: 6 },
  { fruit: "Date", sales: 50, sweetness: 9 },
  { fruit: "Elderberry", sales: 75, sweetness: 5 }
];

// Basic scatter plot
Plot.plot({
  marks: [
    Plot.dot(data, {
      x: "sales",        // Map 'sales' to x-position
      y: "sweetness",    // Map 'sweetness' to y-position
      fill: "fruit",     // Map 'fruit' to color
      r: d => d.sales / 2 // Map 'sales' to dot size
    })
  ],
  x: { label: "Sales" },
  y: { label: "Sweetness (1-10)" },
  color: { legend: true }
})

// Bar chart with encoded data
Plot.plot({
  marks: [
    Plot.barY(data, {
      x: "fruit",        // Map 'fruit' to x-position
      y: "sales",        // Map 'sales' to bar height
      fill: "sweetness", // Map 'sweetness' to color
      sort: { x: "y", reverse: true } // Sort bars by height
    })
  ],
  x: { label: "Fruit" },
  y: { label: "Sales" },
  color: { 
    type: "linear", 
    range: ["yellow", "red"],
    label: "Sweetness" 
  }
})
