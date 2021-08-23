---
title: Manipulate XML
emoji: 📝
tags:
  - js
  - xml
link: https://github.com/Leonidas-from-XIV/node-xml2js
created: 2021-08-13T16:29:25.000Z
modified: 2021-08-13T16:29:25.000Z
---

[Example](https://runkit.com/lkcozy/6116afd1870c05001b7d910f)

[xml2js](https://www.npmjs.com/package/xml2js) is a simple XML to JavaScript object converter.

```js
const xml2js = require("xml2js");
const xmlData = `<?xml version='1.0' ?><data id="890c6db3-baf6-417b-9665-08e0bbc275b1" version="3.0.2" xmlns:odk="http://www.opendatakit.org/xforms" xmlns:h="http://www.w3.org/1999/xhtml" xmlns:jr="http://openrosa.org/javarosa"><datetime>2021-08-11T18:43:00.000-06:00</datetime><leak_geopoint>51.1538756 -114.0812764 1106.0412764874213 13.462</leak_geopoint><selfie_image>1628729068123.jpg</selfie_image><mood_select>ok</mood_select><meta><instanceID>uuid:aa826908-ca20-4937-b20b-fa8e2915a8af</instanceID></meta></data>`;

const parseXml = (xml) => {
  const parser = new xml2js.Parser();
  return parser.parseStringPromise(xml);
};

const obj = await parseXml(xmlData);
console.log(obj);

// update value
obj.data.mood_select = "yes";
var builder = new xml2js.Builder();
var xml = builder.buildObject(obj);
console.log(xml);

// rebuild xml
const obj2 = await parseXml(xml);
console.log(obj2);
```
