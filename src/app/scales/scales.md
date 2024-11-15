```html
<select data-np-intersection-state="visible">
    <optgroup label="sequential, single-hue">
        <option value="blues">Blues</option>
        <option value="greens">Greens</option>
        <option value="greys">Greys</option>
        <option value="purples">Purples</option>
        <option value="reds">Reds</option>
        <option value="oranges">Oranges</option>
    </optgroup>

    <optgroup label="sequential, multi-hue">
        <option value="turbo" selected="">Turbo</option>
        <option value="viridis">Viridis</option>
        <option value="magma">Magma</option>
        <option value="inferno">Inferno</option>
        <option value="plasma">Plasma</option>
        <option value="cividis">Cividis</option>
        <option value="cubehelix">Cubehelix</option>
        <option value="warm">Warm</option>
        <option value="cool">Cool</option>
        <option value="bugn">BuGn</option>
        <option value="bupu">BuPu</option>
        <option value="gnbu">GnBu</option>
        <option value="orrd">OrRd</option>
        <option value="pubugn">PuBuGn</option>
        <option value="pubu">PuBu</option>
        <option value="purd">PuRd</option>
        <option value="rdpu">RdPu</option>
        <option value="ylgnbu">YlGnBu</option>
        <option value="ylgn">YlGn</option>
        <option value="ylorbr">YlOrBr</option>
        <option value="ylorrd">YlOrRd</option>
    </optgroup>

    <optgroup label="cyclical">
        <option value="rainbow">Rainbow</option>
        <option value="sinebow">Sinebow</option>
    </optgroup></select
>;
```

```html
<select data-np-intersection-state="visible">
    <optgroup label="diverging">
        <option value="brbg">BrBG</option>
        <option value="prgn">PRGn</option>
        <option value="piyg">PiYG</option>
        <option value="puor">PuOr</option>
        <option value="rdbu" selected="">RdBu</option>
        <option value="rdgy">RdGy</option>
        <option value="rdylbu">RdYlBu</option>
        <option value="rdylgn">RdYlGn</option>
        <option value="spectral">Spectral</option>
        <option value="burd">BuRd</option>
        <option value="buylrd">BuYlRd</option>
    </optgroup></select
>;
```

```html
<select data-np-intersection-state="visible">
    <optgroup label="categorical">
        <option>Accent</option>
        <option>Category10</option>
        <option>Dark2</option>
        <option>Observable10</option>
        <option>Paired</option>
        <option>Pastel1</option>
        <option>Pastel2</option>
        <option>Set1</option>
        <option>Set2</option>
        <option>Set3</option>
        <option>Tableau10</option>
    </optgroup>
    <optgroup label="sequential, single-hue">
        <option value="blues">Blues</option>
        <option value="greens">Greens</option>
        <option value="greys">Greys</option>
        <option value="purples">Purples</option>
        <option value="reds">Reds</option>
        <option value="oranges">Oranges</option>
    </optgroup>
    <optgroup label="sequential, multi-hue">
        <option value="turbo" selected="">Turbo</option>
        <option value="viridis">Viridis</option>
        <option value="magma">Magma</option>
        <option value="inferno">Inferno</option>
        <option value="plasma">Plasma</option>
        <option value="cividis">Cividis</option>
        <option value="cubehelix">Cubehelix</option>
        <option value="warm">Warm</option>
        <option value="cool">Cool</option>
        <option value="bugn">BuGn</option>
        <option value="bupu">BuPu</option>
        <option value="gnbu">GnBu</option>
        <option value="orrd">OrRd</option>
        <option value="pubugn">PuBuGn</option>
        <option value="pubu">PuBu</option>
        <option value="purd">PuRd</option>
        <option value="rdpu">RdPu</option>
        <option value="ylgnbu">YlGnBu</option>
        <option value="ylgn">YlGn</option>
        <option value="ylorbr">YlOrBr</option>
        <option value="ylorrd">YlOrRd</option>
    </optgroup>
    <optgroup label="cyclical">
        <option value="rainbow">Rainbow</option>
        <option value="sinebow">Sinebow</option>
    </optgroup>
</select>
```

---

## Date and Time Format Specifiers:

The `tickFormat` in Observable Plot allows you to specify how dates (or numbers) should be displayed on the axis. The format strings are similar to those used in [D3.js's `timeFormat`](https://github.com/d3/d3-time-format). Here are some common format specifiers you can use:

### **Date and Time Format Specifiers:**

| Format | Example Output            | Description                                       |
| ------ | ------------------------- | ------------------------------------------------- |
| `%a`   | `Mon`                     | Abbreviated weekday name                          |
| `%A`   | `Monday`                  | Full weekday name                                 |
| `%b`   | `Jan`                     | Abbreviated month name                            |
| `%B`   | `January`                 | Full month name                                   |
| `%d`   | `01`, `15`                | Day of the month, zero-padded (01–31)             |
| `%e`   | `1`, `15`                 | Day of the month, space-padded ( 1–31)            |
| `%m`   | `01`, `12`                | Month as a number, zero-padded (01–12)            |
| `%y`   | `23`                      | Year without century (00–99)                      |
| `%Y`   | `2023`                    | Full year                                         |
| `%H`   | `00`, `23`                | Hour (24-hour clock), zero-padded (00–23)         |
| `%I`   | `01`, `12`                | Hour (12-hour clock), zero-padded (01–12)         |
| `%p`   | `AM`, `PM`                | AM or PM                                          |
| `%M`   | `00`, `59`                | Minute, zero-padded (00–59)                       |
| `%S`   | `00`, `59`                | Second, zero-padded (00–59)                       |
| `%f`   | `000000`                  | Microseconds (000000–999999)                      |
| `%Z`   | `GMT`, `EST`              | Time zone abbreviation                            |
| `%j`   | `001`, `365`              | Day of the year (001–365)                         |
| `%U`   | `00`, `52`                | Week number (Sunday as the first day of the week) |
| `%W`   | `00`, `52`                | Week number (Monday as the first day of the week) |
| `%c`   | `Mon Jan 1 00:00:00 2023` | Locale-specific date and time                     |
| `%x`   | `01/01/23`                | Locale-specific date                              |
| `%X`   | `00:00:00`                | Locale-specific time                              |
| `%%`   | `%`                       | Literal percent sign                              |

### **Examples for `tickFormat`:**

-   **`"%b %Y"`** → `Jan 2023`: Shows abbreviated month and full year.
-   **`"%d %b"`** → `01 Jan`: Shows day and abbreviated month.
-   **`"%a %d %b"`** → `Mon 01 Jan`: Shows abbreviated weekday, day, and abbreviated month.
-   **`"%H:%M"`** → `14:30`: Shows hour and minute in a 24-hour format.
-   **`"%I:%M %p"`** → `02:30 PM`: Shows hour and minute in a 12-hour format with AM/PM.
-   **`"%Y-%m-%d"`** → `2023-01-01`: Full date in `YYYY-MM-DD` format.

You can mix and match these specifiers to customize how the tick labels are formatted on your plot's axis.

---

```plain
locale.format(specifier)
js
d3.timeFormat("%b %d")
Source · Returns a new formatter for the given string specifier. The specifier string may contain the following directives:

%a - abbreviated weekday name.*
%A - full weekday name.*
%b - abbreviated month name.*
%B - full month name.*
%c - the locale’s date and time, such as %x, %X.*
%d - zero-padded day of the month as a decimal number [01,31].
%e - space-padded day of the month as a decimal number [ 1,31]; equivalent to %_d.
%f - microseconds as a decimal number [000000, 999999].
%g - ISO 8601 week-based year without century as a decimal number [00,99].
%G - ISO 8601 week-based year with century as a decimal number.
%H - hour (24-hour clock) as a decimal number [00,23].
%I - hour (12-hour clock) as a decimal number [01,12].
%j - day of the year as a decimal number [001,366].
%m - month as a decimal number [01,12].
%M - minute as a decimal number [00,59].
%L - milliseconds as a decimal number [000, 999].
%p - either AM or PM.*
%q - quarter of the year as a decimal number [1,4].
%Q - milliseconds since UNIX epoch.
%s - seconds since UNIX epoch.
%S - second as a decimal number [00,61].
%u - Monday-based (ISO 8601) weekday as a decimal number [1,7].
%U - Sunday-based week of the year as a decimal number [00,53].
%V - ISO 8601 week of the year as a decimal number [01, 53].
%w - Sunday-based weekday as a decimal number [0,6].
%W - Monday-based week of the year as a decimal number [00,53].
%x - the locale’s date, such as %-m/%-d/%Y.*
%X - the locale’s time, such as %-I:%M:%S %p.*
%y - year without century as a decimal number [00,99].
%Y - year with century as a decimal number, such as 1999.
%Z - time zone offset, such as -0700, -07:00, -07, or Z.
%% - a literal percent sign (%).
```

---

### Scale options

Each scale’s options are specified as a nested options object with the corresponding scale name within the top-level plot options:

```
x - horizontal position
y - vertical position
r - radius (size)
color - fill or stroke
opacity - fill or stroke opacity
length - linear length (for vectors)
symbol - categorical symbol (for dots)
For example, to set the domain for the x scale:
```

---

### Color scale options

The normal scale types — linear, sqrt, pow, log, symlog, and ordinal — can be used to encode color. In addition, Plot supports special scale types for color:

```
categorical - like ordinal, but defaults to observable10
sequential - like linear
cyclical - like linear, but defaults to rainbow
threshold - discretizes using thresholds given as the domain; defaults to rdylbu
quantile - discretizes by computing quantile thresholds; defaults to rdylbu
quantize - discretizes by computing uniform thresholds; defaults to rdylbu ^0.4.3
diverging - like linear, but with a pivot; defaults to rdbu
diverging-log - like log, but with a pivot that defaults to 1; defaults to rdbu
diverging-pow - like pow, but with a pivot; defaults to rdbu
diverging-sqrt - like sqrt, but with a pivot; defaults to rdbu
diverging-symlog - like symlog, but with a pivot; defaults to rdbu

Color scales support two additional options:

scheme - a named color scheme in lieu of a range, such as reds
interpolate - in conjunction with a range, how to interpolate colors
```

---

```js
function _4(Plot) {
    return Plot.plot({ x: { domain: [100, 0], grid: true } });
}

function _5(Plot) {
    return Plot.plot({ x: { domain: [0, 100], reverse: true, grid: true } });
}

function _6(Plot) {
    return Plot.plot({
        x: {
            domain: [new Date("2021-01-01"), new Date("2022-01-01")],
            grid: true,
        },
    });
}

function _7(Plot) {
    return Plot.plot({
        x: { type: "utc", domain: [1609459200000, 1640995200000], grid: true },
    });
}

function _8(Plot) {
    return Plot.plot({
        x: {
            type: "time",
            domain: [new Date(2021, 0, 1), new Date(2022, 0, 1)],
            grid: true,
        },
    });
}

function _9(Plot) {
    return Plot.plot({ x: { type: "log", domain: [1, 1e5], grid: true } });
}

function _10(Plot) {
    return Plot.plot({
        x: { type: "log", domain: [1, 1e5], tickFormat: ",", grid: true },
    });
}

function _11(Plot) {
    return Plot.plot({
        x: { type: "log", base: 2, domain: [1, 1e4], ticks: 20, grid: true },
    });
}

function _12(Plot) {
    return Plot.plot({ x: { type: "symlog", domain: [-10, 10], grid: true } });
}

function _13(Plot) {
    return Plot.plot({ x: { type: "sqrt", domain: [0, 100], grid: true } });
}

function _14(Plot) {
    return Plot.plot({
        x: { type: "pow", exponent: 1 / 3, domain: [0, 100], grid: true },
    });
}
```

---

### all Scale options docs

Each scale’s options are specified as a nested options object with the corresponding scale name within the top-level plot options:

x - horizontal position
y - vertical position
r - radius (size)
color - fill or stroke
opacity - fill or stroke opacity
length - linear length (for vectors)
symbol - categorical symbol (for dots)
For example, to set the domain for the x scale:

1880
1900
1920
1940
1960
1980
2000
js
Plot.plot({x: {domain: [new Date("1880-01-01"), new Date("2016-11-01")]}})
Plot supports many scale types. Some scale types are for quantitative data: values that can be added or subtracted, such as temperature or time. Other scale types are for ordinal or categorical data: unquantifiable values that can only be ordered, such as t-shirt sizes, or values with no inherent order that can only be tested for equality, such as types of fruit. Some scale types are further intended for specific visual encodings: for example, as position or color.

You can set the scale type explicitly via the type scale option, though typically the scale type is inferred automatically. Some marks mandate a particular scale type: for example, barY requires that the x scale is a band scale. Some scales have a default type: for example, the r (radius) scale defaults to sqrt and the opacity scale defaults to linear. Most often, the scale type is inferred from associated data, pulled either from the domain (if specified) or from associated channels. Strings and booleans imply an ordinal scale; dates imply a UTC scale; and anything else is linear. Unless they represent text, we recommend explicitly converting strings to more specific types when loading data (e.g., with d3.autoType or Observable’s FileAttachment). For simplicity’s sake, Plot assumes that data is consistently typed; type inference is based solely on the first non-null, non-undefined value.

For quantitative data (i.e. numbers), a mathematical transform may be applied to the data by changing the scale type:

linear (default) - linear transform (translate and scale)
pow - power (exponential) transform
sqrt - square-root transform (pow transform with exponent = 0.5)
log - logarithmic transform
symlog - bi-symmetric logarithmic transform per Webber et al.
The appropriate transform depends on the data’s distribution and what you wish to know. A sqrt transform exaggerates differences between small values at the expense of large values; it is a special case of the pow transform which has a configurable scale.exponent (0.5 for sqrt). A log transform is suitable for comparing orders of magnitude and can only be used when the domain does not include zero. The base defaults to 10 and can be specified with the scale.base option; note that this only affects the axis ticks and not the scale’s behavior. A symlog transform is more elaborate, but works well with wide-range values that include zero; it can be configured with the scale.constant option (default 1).

For temporal data (i.e. dates), two variants of a linear scale are also supported:

utc (default, recommended) - UTC time
time - local time
UTC is recommended over local time as charts in UTC time are guaranteed to appear consistently to all viewers whereas charts in local time will depend on the viewer’s time zone. Due to limitations in JavaScript’s Date class, Plot does not yet support an explicit time zone other than UTC.

For ordinal data (e.g., strings), use the ordinal scale type or the point or band position scale types. The categorical scale type is also supported; it is equivalent to ordinal except as a color scale, where it provides a different default color scheme. (Since position is inherently ordinal or even quantitative, categorical data must be assigned an effective order when represented as position, and hence categorical and ordinal may be considered synonymous in context.)

You can opt-out of a scale using the identity scale type. This is useful if you wish to specify literal colors or pixel positions within a mark channel rather than relying on the scale to convert abstract values into visual values. For position scales (x and y), an identity scale is still quantitative and may produce an axis, yet unlike a linear scale the domain and range are fixed based on the plot layout.

TIP

To opt-out of a scale for a single channel, you can specify the channel values as a {value, scale} object; see mark options.

Quantitative scales, as well as identity position scales, coerce channel values to numbers; both null and undefined are coerced to NaN. Similarly, time scales coerce channel values to dates; numbers are assumed to be milliseconds since UNIX epoch, while strings are assumed to be in ISO 8601 format.

A scale’s domain (the extent of its inputs, abstract values) and range (the extent of its outputs, visual values) are typically inferred automatically. You can set them explicitly using these options:

domain - typically [min, max], or an array of ordinal or categorical values
range - typically [min, max], or an array of ordinal or categorical values
unknown - the desired output value (defaults to undefined) for invalid input values
reverse - reverses the domain (or the range), say to flip the chart along x or y
interval - an interval or time interval (for interval data; see below)
For most quantitative scales, the default domain is the [min, max] of all values associated with the scale. For the radius and opacity scales, the default domain is [0, max] to ensure a meaningful value encoding. For ordinal scales, the default domain is the set of all distinct values associated with the scale in natural ascending order; for a different order, set the domain explicitly or add a sort option to an associated mark. For threshold scales, the default domain is [0] to separate negative and non-negative values. For quantile scales, the default domain is the set of all defined values associated with the scale. If a scale is reversed, it is equivalent to setting the domain as [max, min] instead of [min, max].

The default range depends on the scale: for position scales (x, y, fx, and fy), the default range depends on the plot’s size and margins. For color scales, there are default color schemes for quantitative, ordinal, and categorical data. For opacity, the default range is [0, 1]. And for radius, the default range is designed to produce dots of “reasonable” size assuming a sqrt scale type for accurate area representation: zero maps to zero, the first quartile maps to a radius of three pixels, and other values are extrapolated. This convention for radius ensures that if the scale’s data values are all equal, dots have the default constant radius of three pixels, while if the data varies, dots will tend to be larger.

The behavior of the unknown scale option depends on the scale type. For quantitative and temporal scales, the unknown value is used whenever the input value is undefined, null, or NaN. For ordinal or categorical scales, the unknown value is returned for any input value outside the domain. For band or point scales, the unknown option has no effect; it is effectively always equal to undefined. If the unknown option is set to undefined (the default), or null or NaN, then the affected input values will be considered undefined and filtered from the output.

For data at regular intervals, such as integer values or daily samples, the interval option can be used to enforce uniformity. The specified interval — such as d3.utcMonth — must expose an interval.floor(value), interval.offset(value), and interval.range(start, stop) functions. The option can also be specified as a number, in which case it will be promoted to a numeric interval with the given step. The option can alternatively be specified as a string (second, minute, hour, day, week, month, quarter, half, year, monday, tuesday, wednesday, thursday, friday, saturday, sunday) ^0.6.2 naming the corresponding time interval, or a skip interval consisting of a number followed by the interval name (possibly pluralized), such as 3 months or 10 years. This option sets the default scale.transform to the given interval’s interval.floor function. In addition, the default scale.domain is an array of uniformly-spaced values spanning the extent of the values associated with the scale.

Quantitative scales can be further customized with additional options:

clamp - if true, clamp input values to the scale’s domain
nice - if true (or a tick count), extend the domain to nice round values
zero - if true, extend the domain to include zero if needed
percent - if true, transform proportions in [0, 1] to percentages in [0, 100]
Clamping is typically used in conjunction with setting an explicit domain since if the domain is inferred, no values will be outside the domain. Clamping is useful for focusing on a subset of the data while ensuring that extreme values remain visible, but use caution: clamped values may need an annotation to avoid misinterpretation. Top-level clamp, nice, and zero options are supported as shorthand for setting the respective option on all scales.

The transform option allows you to apply a function to all values before they are passed through the scale. This is convenient for transforming a scale’s data, say to convert to thousands or between temperature units.

js
Plot.plot({
y: {
label: "Temperature (°F)",
transform: (f) => f \* 9 / 5 + 32 // convert Celsius to Fahrenheit
},
marks: …
})
Color scale options
The normal scale types — linear, sqrt, pow, log, symlog, and ordinal — can be used to encode color. In addition, Plot supports special scale types for color:

categorical - like ordinal, but defaults to observable10
sequential - like linear
cyclical - like linear, but defaults to rainbow
threshold - discretizes using thresholds given as the domain; defaults to rdylbu
quantile - discretizes by computing quantile thresholds; defaults to rdylbu
quantize - discretizes by computing uniform thresholds; defaults to rdylbu ^0.4.3
diverging - like linear, but with a pivot; defaults to rdbu
diverging-log - like log, but with a pivot that defaults to 1; defaults to rdbu
diverging-pow - like pow, but with a pivot; defaults to rdbu
diverging-sqrt - like sqrt, but with a pivot; defaults to rdbu
diverging-symlog - like symlog, but with a pivot; defaults to rdbu
For a threshold scale, the domain represents n (typically numeric) thresholds which will produce a range of n + 1 output colors; the ith color of the range applies to values that are smaller than the ith element of the domain and larger or equal to the i - 1th element of the domain. For a quantile scale, the domain represents all input values to the scale, and the n option specifies how many quantiles to compute from the domain; n quantiles will produce n - 1 thresholds, and an output range of n colors. For a quantize scale, the domain will be transformed into approximately n quantized values, where n is an option that defaults to 5.

By default, all diverging color scales are symmetric around the pivot; set symmetric to false if you want to cover the whole extent on both sides.

Color scales support two additional options:

scheme - a named color scheme in lieu of a range, such as reds
interpolate - in conjunction with a range, how to interpolate colors
For quantile and quantize color scales, the scheme option is used in conjunction with n, which determines how many quantiles or quantized values to compute, and thus the number of elements in the scale’s range; it defaults to 5 (for quintiles in the case of a quantile scale).

The following sequential scale schemes are supported for both quantitative and ordinal data:

Blues
BuGn
BuPu
Cividis
Cool
Cubehelix
GnBu
Greens
Greys
Inferno
Magma
OrRd
Oranges
Plasma
PuBu
PuBuGn
PuRd
Purples
RdPu
Reds
Turbo
Viridis
Warm
YlGn
YlGnBu
YlOrBr
YlOrRd
The default color scheme, turbo, was chosen primarily to ensure high-contrast visibility. Color schemes such as blues make low-value marks difficult to see against a white background, for better or for worse. To use a subset of a continuous color scheme (or any single-argument interpolate function), set the scale.range property to the corresponding subset of [0, 1]; for example, to use the first half of the rainbow color scheme, use a range of [0, 0.5]. By default, the full range [0, 1] is used. If you wish to encode a quantitative value without hue, consider using opacity rather than color (e.g., use Plot.dot’s strokeOpacity instead of stroke).

The following diverging scale schemes are supported:

BrBG
BuRd
BuYlRd
PRGn
PiYG
PuOr
RdBu
RdGy
RdYlBu
RdYlGn
Spectral
Picking a diverging color scheme name defaults the scale type to diverging; set the scale type to linear to treat the color scheme as sequential instead. Diverging color scales support a scale.pivot option, which defaults to zero. Values below the pivot will use the lower half of the color scheme (e.g., reds for the rdgy scheme), while values above the pivot will use the upper half (grays for rdgy).

The following cylical color schemes are supported:

rainbow
sinebow
The following categorical color schemes are supported:

Accent
Category10
Dark2
Observable10
Paired
Pastel1
Pastel2
Set1
Set2
Set3
Tableau10
The following color interpolators are supported:

rgb - RGB (red, green, blue)
hsl - HSL (hue, saturation, lightness)
lab - CIELAB (a.k.a. “Lab”)
hcl - CIELChab (a.k.a. “LCh” or “HCL”)
Position scale options
The position scales (x, y, fx, and fy) support additional options:

inset - inset the default range by the specified amount in pixels
round - round the output value to the nearest integer (whole pixel)
The x and fx scales support asymmetric insets for more precision. Replace inset by:

insetLeft - insets the start of the default range by the specified number of pixels
insetRight - insets the end of the default range by the specified number of pixels
Similarly, the y and fy scales support asymmetric insets with:

insetTop - insets the top of the default range by the specified number of pixels
insetBottom - insets the bottom of the default range by the specified number of pixels
The inset scale options can provide “breathing room” to separate marks from axes or the plot’s edge. For example, in a scatterplot with a Plot.dot with the default 3-pixel radius and 1.5-pixel stroke width, an inset of 5 pixels prevents dots from overlapping with the axes. The scale.round option is useful for crisp edges by rounding to the nearest pixel boundary.

In addition to the generic ordinal scale type, which requires an explicit output range value for each input domain value, Plot supports special point and band scale types for encoding ordinal data as position. These scale types accept a [min, max] range similar to quantitative scales, and divide this continuous interval into discrete points or bands based on the number of distinct values in the domain (i.e., the domain’s cardinality). If the associated marks have no effective width along the ordinal dimension — such as a dot, rule, or tick — then use a point scale; otherwise, say for a bar, use a band scale.

Ordinal position scales support additional options, all specified as proportions in [0, 1]:

padding - how much of the range to reserve to inset first and last point or band
align - where to distribute points or bands (0 = at start, 0.5 = at middle, 1 = at end)
For a band scale, you can further fine-tune padding:

paddingInner - how much of the range to reserve to separate adjacent bands
paddingOuter - how much of the range to reserve to inset first and last band
Align defaults to 0.5 (centered). Band scale padding defaults to 0.1 (10% of available space reserved for separating bands), while point scale padding defaults to 0.5 (the gap between the first point and the edge is half the distance of the gap between points, and likewise for the gap between the last point and the opposite edge). Note that rounding and mark insets (e.g., for bars and rects) also affect separation between adjacent marks.

Plot implicitly generates an axis mark for position scales if one is not explicitly declared. (For more control, declare the axis mark explicitly.) The following axis mark options are also available as scale options, applying to the implicit axis:

axis - the axis anchor: top, bottom (x or fx); left, right (y or fy); both; null to suppress
ticks - the approximate number of ticks to generate, or interval, or array of values
tickSpacing - the approximate number of pixels between ticks (if ticks is not specified)
tickSize - the length of each tick (in pixels; default 6 for x and y, or 0 for fx and fy)
tickPadding - the separation between the tick and its label (in pixels; default 3)
tickFormat - either a function or specifier string to format tick values; see Formats
tickRotate - whether to rotate tick labels (an angle in degrees clockwise; default 0)
fontVariant - the font-variant attribute; defaults to tabular-nums if quantitative
label - a string to label the axis
labelAnchor - the label anchor: top, right, bottom, left, or center
labelArrow - the label arrow: auto (default), up, right, down, left, none, or true ^0.6.7
labelOffset - the label position offset (in pixels; default depends on margins and orientation)
ariaLabel - a short label representing the axis in the accessibility tree
ariaDescription - a textual description for the axis
For an implicit grid mark, use the grid option. For an implicit frame mark along one edge of the frame, use the line option.

grid - whether to draw grid lines across the plot for each tick
line - if true, draw the axis line (only for x and y)
Top-level options are also supported as shorthand: grid (for x and y only; see facets), label, axis, inset, round, align, and padding. If the grid option is true, show a grid using currentColor; if specified as a string, show a grid with the specified color; if an approximate number of ticks, an interval, or an array of tick values, show corresponding grid lines.
