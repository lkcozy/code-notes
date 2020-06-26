---
title: Datapane
emoji: 🐍
tags:
  - python
link: https://github.com/datapane/datapane/
---

![Report Example](https://camo.githubusercontent.com/ba9c05164dafde230fd6c3edbad1129ca2c892ed/68747470733a2f2f692e696d6775722e636f6d2f52477037527a4d2e706e67)

Datapane is a Python library which makes it simple to build reports from the common objects in your data analysis, such as pandas DataFrames, plots from Python visualization libraries, and Markdown.

Reports can be exported as standalone HTML documents, with rich components which allow data to be explored and visualizations to be used interactively.

For example, if you wanted to create a report with a table viewer and an interactive plot:

```python
import pandas as pd
import altair as alt
import datapane as dp

df = pd.read_csv('https://query1.finance.yahoo.com/v7/finance/download/GOOG?period2=1585222905&interval=1mo&events=history')

chart = alt.Chart(df).encode(
    x='Date:T',
    y='Open'
).mark_line().interactive()

r = dp.Report(dp.Table(df), dp.Plot(chart))
r.save(path='report.html', open=True)
```

## Components

Datapane currently contains the following components.

| Component | Description                                                                    | Supported Formats                                  | Example                      |
| --------- | ------------------------------------------------------------------------------ | -------------------------------------------------- | ---------------------------- |
| Table     | A searchable, sortable table component for datasets. Supports up to 10m cells. | Pandas DataFrames, JSON documents, Local CSV files | `Table(df)`                  |
| Plot      | A wrapper for plots from Python visualisation libraries.                       | Altair, Bokeh, Matplotlib, SVG                     | `Plot(altair_chart)`         |
| Markdown  | A simple Markdown component to document your report.                           | Markdown, Text                                     | `Markdown("# My fun title")` |

## Datapane.com

In addition to the this local library, Datapane.com provides an API and hosted platform which allows you to:

1. Upload Jupyter Notebooks and Python scripts, so that other people can run them in their browser with parameters to generate reports dynamically
2. Share and embed reports online -- either publicly, or privately within your team
