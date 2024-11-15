# Mark Options vs Channels in Observable Plot: Simple Explanation

## Mark Options

Think of mark options as the general rules for how things look in your chart.

- They apply to all items of the same type.
- They don't change based on your data.
- They control things like color, size, or shape for all items.

Example:
```javascript
Plot.dot(data, {stroke: "blue", strokeWidth: 2})
```
This makes all dots have a blue outline that's 2 pixels wide.

## Channels

Channels are ways to make your chart items look different based on your data.

- They change how each item looks depending on the data it represents.
- They connect your data to how things look in the chart.
- They can control position, color, size, or other visual aspects.

Example:
```javascript
Plot.dot(data, {x: "age", y: "height", color: "gender"})
```
This puts dots on the chart based on age and height, and colors them based on gender.

## Key Difference

- Mark options set one look for all items.
- Channels make items look different based on your data.

