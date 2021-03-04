---
title: Tabulator
emoji: "\U0001F4DD"
tags:
  - javascript
link: 'http://www.tabulator.info/'
created: 2020-08-13T05:34:28.000Z
modified: 2020-08-13T05:34:28.000Z
---

Tabulator is an easy to use interactive table generation JavaScript library

![](https://camo.githubusercontent.com/9c2d6ef191915ab62b8ebebd89b872117d50fb3a/687474703a2f2f746162756c61746f722e696e666f2f696d616765732f746162756c61746f725f7461626c652e6a7067)

## Features

![](https://camo.githubusercontent.com/a53666e350066bb06923290b7576b8b02784b45e/687474703a2f2f6f6c69666f6c6b6572642e6769746875622e696f2f746162756c61746f722f696d616765732f666561747572656c6973745f73686172652e706e67)

```js
var table = new Tabulator("#example-table", {
  data: tabledata, //load row data from array
  layout: "fitColumns", //fit columns to width of table
  responsiveLayout: "hide", //hide columns that dont fit on the table
  tooltips: true, //show tool tips on cells
  addRowPos: "top", //when adding a new row, add it to the top of the table
  history: true, //allow undo and redo actions on the table
  pagination: "local", //paginate the data
  paginationSize: 7, //allow 7 rows per page of data
  movableColumns: true, //allow column order to be changed
  resizableRows: true, //allow row order to be changed
  initialSort: [
    //set the initial sort order of the data
    { column: "name", dir: "asc" },
  ],
  columns: [
    //define the table columns
    { title: "Name", field: "name", editor: "input" },
    {
      title: "Task Progress",
      field: "progress",
      hozAlign: "left",
      formatter: "progress",
      editor: true,
    },
    {
      title: "Gender",
      field: "gender",
      width: 95,
      editor: "select",
      editorParams: { values: ["male", "female"] },
    },
    {
      title: "Rating",
      field: "rating",
      formatter: "star",
      hozAlign: "center",
      width: 100,
      editor: true,
    },
    { title: "Color", field: "col", width: 130, editor: "input" },
    {
      title: "Date Of Birth",
      field: "dob",
      width: 130,
      sorter: "date",
      hozAlign: "center",
    },
    {
      title: "Driver",
      field: "car",
      width: 90,
      hozAlign: "center",
      formatter: "tickCross",
      sorter: "boolean",
      editor: true,
    },
  ],
});
```

## [XLSX Download](http://tabulator.info/docs/4.7/download#xlsx)

The XLSX downloader requires that the SheetJS Library be included on your site, this can be included with the following script tag.

```html
<script
  type="text/javascript"
  src="https://oss.sheetjs.com/sheetjs/xlsx.full.min.js"
></script>
```

### Multi Table Download

You can pull the data from multiple Tabulators into one xlsx file, using the sheets property of the options object.

This accepts an object, with the keys of each property being the sheet name, and the values being the tables to draw the data from, this can either be

- a string representing the query selector,
- or a DOM Node. If you pass a value of true it will use the current table.

The order of the keys determines the order of the sheets

```js
var sheets = {
  "Accounts Data": "#accounts-table", //first tab with table set using a query selector
  "Example Data": true, //second tab, generated from this table
  "Finance Data": financeTable, //third tab with table set to DOM Node
};

table.download("xlsx", "AllData.xlsx", { sheets: sheets }); //download a Xlsx file that has a tab for each table
```

‼️ [Download xlsx with multiple sheets does not allow you to use the selector for the current table](https://github.com/olifolkerd/tabulator/issues/1939#issuecomment-479604622)

> It isn't a bug, you have to specify that the current table is used somewhere in the list as this function cannot be used to generate a download of tables unrelated to the current table.

As it is possible to define two tables using the same selector. It would create a great deal of confusion and lead to inconsistent results if that was used to select the current table.

and also a selector isn't needed as the table knows what it is so it doesn't need to go through the process of looking itself up.
