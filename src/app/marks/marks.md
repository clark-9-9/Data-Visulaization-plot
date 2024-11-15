All marks support the following style options:

fill - fill color
fillOpacity - fill opacity (a number between 0 and 1)
stroke - stroke color
strokeWidth - stroke width (in pixels)
strokeOpacity - stroke opacity (a number between 0 and 1)
strokeLinejoin - how to join lines (bevel, miter, miter-clip, or round)
strokeLinecap - how to cap lines (butt, round, or square)
strokeMiterlimit - to limit the length of miter joins
strokeDasharray - a comma-separated list of dash lengths (typically in pixels)
strokeDashoffset - the stroke dash offset (typically in pixels)
opacity - object opacity (a number between 0 and 1)
mixBlendMode - the blend mode (e.g., multiply)
imageFilter - a CSS filter (e.g., blur(5px)) ^0.6.7
shapeRendering - the shape-rendering mode (e.g., crispEdges)
paintOrder - the paint order (e.g., stroke)
dx - horizontal offset (in pixels; defaults to 0)
dy - vertical offset (in pixels; defaults to 0)
target - link target (e.g., “\_blank” for a new window); for use with the href channel
className - the class attribute, if any (defaults to null) ^0.6.16
ariaDescription - a textual description of the mark’s contents
ariaHidden - if true, hide this content from the accessibility tree
pointerEvents - the pointer events (e.g., none)
clip - whether and how to clip the mark
tip - whether to generate an implicit pointer tip ^0.6.7

If the clip option is frame (or equivalently true), the mark is clipped to the frame’s dimensions; if the clip option is null (or equivalently false), the mark is not clipped. If the clip option is sphere, then a geographic projection is required and the mark will be clipped to the projected sphere (e.g., the front hemisphere when using the orthographic projection).

If the tip option is true, a tip mark with the pointer transform will be derived from this mark and placed atop all other marks, offering details on demand. If the tip option is set to an options object, these options will be passed to the derived tip mark. If the tip option (or, if an object, its pointer option) is set to x, y, or xy, pointerX, pointerY, or pointer will be used, respectively; otherwise the pointing mode will be chosen automatically. (If the tip mark option is truthy, the title channel is no longer applied using an SVG title element as this would conflict with the tip mark.)

For all marks except text, the dx and dy options are rendered as a transform property, possibly including a 0.5px offset on low-density screens.

All marks support the following optional channels:

fill - a fill color; bound to the color scale
fillOpacity - a fill opacity; bound to the opacity scale
stroke - a stroke color; bound to the color scale
strokeOpacity - a stroke opacity; bound to the opacity scale
strokeWidth - a stroke width (in pixels)
opacity - an object opacity; bound to the opacity scale
title - an accessible, short-text description (a string of text, possibly with newlines)
href - a URL to link to
ariaLabel - a short label representing the value in the accessibility tree
The fill, fillOpacity, stroke, strokeWidth, strokeOpacity, and opacity options can be specified as either channels or constants. When the fill or stroke is specified as a function or array, it is interpreted as a channel; when the fill or stroke is specified as a string, it is interpreted as a constant if a valid CSS color and otherwise it is interpreted as a column name for a channel. Similarly when the fill opacity, stroke opacity, object opacity, stroke width, or radius is specified as a number, it is interpreted as a constant; otherwise it is interpreted as a channel.

The scale associated with any channel can be overridden by specifying the channel as an object with a value property specifying the channel values and a scale property specifying the desired scale name or null for an unscaled channel. For example, to force the stroke channel to be unscaled, interpreting the associated values as literal color strings:

js
Plot.dot(data, {stroke: {value: "fieldName", scale: null}})
To instead force the stroke channel to be bound to the color scale regardless of the provided values, say:

js
Plot.dot(data, {stroke: {value: "fieldName", scale: "color"}})
The color channels (fill and stroke) are bound to the color scale by default, unless the provided values are all valid CSS color strings or nullish, in which case the values are interpreted literally and unscaled.

In addition to functions of data, arrays, and column names, channel values can be specified as an object with a transform method; this transform method is passed the mark’s array of data and must return the corresponding array of channel values. (Whereas a channel value specified as a function is invoked repeatedly for each element in the mark’s data, similar to array.map, the transform method is invoked only once being passed the entire array of data.) For example, to pass the mark’s data directly to the x channel, equivalent to Plot.identity:

js
Plot.dot(numbers, {x: {transform: (data) => data}})
The title, href, and ariaLabel options can only be specified as channels. When these options are specified as a string, the string refers to the name of a column in the mark’s associated data. If you’d like every instance of a particular mark to have the same value, specify the option as a function that returns the desired value, e.g. () => "Hello, world!".

For marks that support the frameAnchor option, it may be specified as one of the four sides (top, right, bottom, left), one of the four corners (top-left, top-right, bottom-right, bottom-left), or the middle of the frame.

All marks support the following transform options:

filter - apply the filter transform
sort - apply the sort transform
reverse - apply the reverse transform
transform - apply a custom transform
initializer - apply a custom initializer
The sort option, when not specified as a channel value (such as a field name or an accessor function), can also be used to impute ordinal scale domains.

Insets
Rect-like marks support insets: a positive inset moves the respective side in (towards the opposing side), whereas a negative inset moves the respective side out (away from the opposing side). Insets are specified in pixels using the following options:

inset - shorthand for all four insets
insetTop - inset the top edge
insetRight - inset the right edge
insetBottom - inset the bottom edge
insetLeft - inset the left edge
Insets default to zero. Insets are commonly used to create a one-pixel gap between adjacent bars in histograms; the bin transform provides default insets. (Note that the band scale padding defaults to 0.1 as an alternative to insets.)

Rounded corners
Rect-like marks support rounded corners. Each corner (or side) is individually addressable ^0.6.16 using the following options:

r - the radius for all four corners
rx1 - the radius for the x1-y1 and x1-y2 corners
rx2 - the radius for the x2-y1 and x2-y2 corners
ry1 - the radius for the x1-y1 and x2-y1 corners
ry2 - the radius for the x1-y2 and x2-y2 corners
rx1y1 - the radius for the x1-y1 corner
rx1y2 - the radius for the x1-y2 corner
rx2y1 - the radius for the x2-y1 corner
rx2y2 - the radius for the x2-y2 corner
rx - the x-radius for elliptical corners
ry - the y-radius for elliptical corners
Corner radii are specified in either pixels or, for rx and ry, as percentages (strings) or the keyword auto. If the corner radii are too big, they are reduced proportionally.

marks(...marks) ^0.2.0

js
Plot.marks(
Plot.ruleY([0]),
Plot.areaY(data, {fill: color, fillOpacity, ...options}),
Plot.lineY(data, {stroke: color, ...options})
)
A convenience method for composing a mark from a series of other marks. Returns an array of marks that implements the mark.plot function. See the box mark implementation for an example.

---

```js
Plot.barX(timeseries, {
    x: "population",
    y: "year",
    fill: (d) => (d.year & 1 ? "odd" : "even"),
}).plot({ y: { label: null, tickFormat: "" }, color: { legend: true } });

timeseries = [
    { year: 2014, population: 7295.290765 },
    { year: 2015, population: 7379.797139 },
    { year: 2016, population: 7464.022049 },
    { year: 2017, population: 7547.858925 },
    { year: 2019, population: 7713.4681 },
    { year: 2020, population: 7794.798739 },
];
```
