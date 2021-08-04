---
title: Mapbox Static Images API
emoji: 🌍
tags:
  - gis
  - mapbox
link: "https://docs.mapbox.com/api/maps/static-images/"
created: 2021-03-26T20:36:09.000Z
modified: 2021-04-12T19:04:15.000Z
---

The Mapbox Static Images API serves standalone, static map images generated from Mapbox Studio styles. These images can be displayed on web and mobile devices without the aid of a mapping library or API. They look like an embedded map, but do not have interactivity or controls.

## [MapBox Static Images API Playground](https://docs.mapbox.com/playground/static/)

![](https://assets.website-files.com/5f2a93fe880654a977c51043/6065d017ad1315f7422ae324_Static%20images%20playground_hero-p-2000.jpeg)

`MapBox Static Images API Playground is an interactive image builder with full api support and live preview.`

Before, developers needed to read API documentation and implement features in code to work with the Static Images API. Now, developers can see how Static Images API responses will look based on the position, resolution, padding, overlays, and any style parameters using just a few clicks in the Static Playground.

Developers can test with a variety of inputs, then copy the Static Image API URL directly into mobile apps, emails, or websites to easily add dynamic maps.

## [PADDING & BOUNDING BOX IN THE STATIC IMAGES API](https://www.mapbox.com/blog/padding-bounding-box-in-the-static-images-api)

## Retrieve a static map from a style

```sh
/styles/v1/{username}/{style_id}/static/{overlay}/{lon},{lat},{zoom},{bearing},{pitch}|{bbox}|{auto}/{width}x{height}{@2x}
```

```js
const encodeGeoJsonOverlay = (geojson) => {
  return `geojson(${encodeURIComponent(JSON.stringify(geojson))})`;
};

const arrayBufferToBase64 = (buffer) => {
  const bytes = [].slice.call(new Uint8Array(buffer));
  const binary = bytes.map((b) => String.fromCharCode(b)).join("");
  return window.btoa(binary);
};

const getGeojsonThumbnailContentAndType = async ({
  geojson,
  width = 620,
  height = 210,
  mapboxAccessToken,
  baseMapStyle = "satellite-v9",
  style = { fill: "#1991EA", "fill-opacity": 0.78 },
}) => {
  const styledGeojson = _.merge(geojson, { properties: style });
  const encodedOverlays = encodeGeoJsonOverlay(styledGeojson);
  const requestURL = `https://api.mapbox.com/styles/v1/mapbox/${baseMapStyle}/static/${encodedOverlays}/auto/${width}x${height}?access_token=${mapboxAccessToken}&attribution=false&logo=false`;
  const result = await fetch(requestURL)
    .then(async (r) => {
      if (!r.ok) {
        const error = await r.json();
        throw new Error(error.message);
      }
      return r;
    })
    .then((r) => r.arrayBuffer())
    .then((buffer) => {
      const base64Flag = "data:image/jpeg;base64,";
      const imageStr = arrayBufferToBase64(buffer);
      return `${base64Flag}${imageStr}`;
    });
  return result;
};
```

## [simplestyle-spec](https://github.com/mapbox/simplestyle-spec/tree/master/1.1.0)

```json
// COLOR RULES
// Colors can be in short form:
//   "#ace"
// or long form
//   "#aaccee"
// with or without the # prefix.
// Colors are interpreted the same as in CSS,
// in #RRGGBB and #RGB order.
// But other color formats or named colors
// are not supported
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [0, 0]
      },
      "properties": {
        // OPTIONAL: default ""
        // A title to show when this item is clicked or
        // hovered over
        "title": "A title",

        // OPTIONAL: default ""
        // A description to show when this item is clicked or
        // hovered over
        "description": "A description",

        // OPTIONAL: default "medium"
        // specify the size of the marker. sizes
        // can be different pixel sizes in different
        // implementations
        // Value must be one of
        // "small"
        // "medium"
        // "large"
        "marker-size": "medium",

        // OPTIONAL: default ""
        // a symbol to position in the center of this icon
        // if not provided or "", no symbol is overlaid
        // and only the marker is shown
        // Allowed values include
        // - Icon ID
        // - An integer 0 through 9
        // - A lowercase character "a" through "z"
        "marker-symbol": "bus",

        // OPTIONAL: default "7e7e7e"
        // the marker's color
        //
        // value must follow COLOR RULES
        "marker-color": "#fff",

        // OPTIONAL: default "555555"
        // the color of a line as part of a polygon, polyline, or
        // multigeometry
        //
        // value must follow COLOR RULES
        "stroke": "#555555",

        // OPTIONAL: default 1.0
        // the opacity of the line component of a polygon, polyline, or
        // multigeometry
        //
        // value must be a floating point number greater than or equal to
        // zero and less or equal to than one
        "stroke-opacity": 1.0,

        // OPTIONAL: default 2
        // the width of the line component of a polygon, polyline, or
        // multigeometry
        //
        // value must be a floating point number greater than or equal to 0
        "stroke-width": 2,

        // OPTIONAL: default "555555"
        // the color of the interior of a polygon
        //
        // value must follow COLOR RULES
        "fill": "#555555",

        // OPTIONAL: default 0.6
        // the opacity of the interior of a polygon. Implementations
        // may choose to set this to 0 for line features.
        //
        // value must be a floating point number greater than or equal to
        // zero and less or equal to than one
        "fill-opacity": 0.5
      }
    }
  ]
}
```
