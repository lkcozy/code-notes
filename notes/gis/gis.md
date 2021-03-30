---
title: GIS(Geographic Information System)
emoji: "\U0001F30D"
tags:
  - gis
link: "https://www.esri.com/en-us/what-is-gis/overview"
created: 2020-07-20T00:06:59.000Z
modified: 2020-09-01T22:22:09.000Z
---

## What is GIS?

> A framework to organize, communicate, and understand the science of our world. GIS isn’t just for geographers, it’s for everyone.

A geographic information system (GIS) is a framework for gathering, managing, and analyzing data. Rooted in the science of geography, GIS integrates many types of data. It analyzes spatial location and organizes layers of information into visualizations using maps and 3D scenes. ​With this unique capability, GIS reveals deeper insights into data, such as patterns, relationships, and situations—helping users make smarter decisions.

Hundreds of thousands of organizations in virtually every field are using GIS to make maps that communicate, perform analysis, share information, and solve complex problems around the world. This is changing the way the world works.

### Identify problems

## How GIS Works

GIS technology applies geographic science with tools for understanding and collaboration. It helps people reach a common goal: to gain actionable intelligence from all types of data.

### [Maps](https://learn.arcgis.com/en/arcgis-book/chapter2/)

![](https://www.esri.com/content/dam/esrisites/en-us/arcgis/what-is-gis/images/overview-how-maps.png)

Maps are the geographic container for the data layers and analytics you want to work with. GIS maps are easily shared and embedded in apps, and accessible by virtually everyone, everywhere.

## [Geospatial analysis](https://learn.arcgis.com/en/arcgis-book/chapter5/)

Spatial analysis allows you to solve complex location-oriented problems and better understand where and what is occurring in your world. It goes beyond mere mapping to let you study the characteristics of places and the relationships between them. Spatial analysis lends new perspectives to your decision-making.

Here are some of the foundational spatial analyses and examples of how they are applied in the real world.

- Determine relationships
- Understand and describe locations and events
- Detect and quantify patterns
- Make predictions
- Find best locations and paths

## Who uses GIS

Modern GIS is about participation, sharing, and collaboration. Discover how the technology is strengthening relationships, driving efficiencies, and opening communications channels in your community.

## Tutorials

- [Automating GIS and remote sensing workflows with open python libraries](https://towardsdatascience.com/automating-gis-and-remote-sensing-workflows-with-open-python-libraries-e71dd6b049ee)

![](https://cdn-images-1.medium.com/fit/t/1600/480/1*8Lw11QZOFqw5kH-LAL8bYw.gif)

A hands-on guide for implementing some of the most beloved tools in the spatial python community

## Resources

### Trends

- [GIS Lounge](https://www.gislounge.com/)

GIS Lounge is an information site covering research and case studies about the applications of geographic information systems, geospatial technologies, and cartography. The purpose of this site is to provide introductory text for issues relating to GIS as well as interesting news items, tips, and resources for the geospatial field.

- [Geography Realm](https://www.geographyrealm.com/)

Geography Realm is an information site about all things geography. Find information here about physical and human geography as well as guides for learning about geography and developing a career in geography.

- [GEOSPATIAL PR](https://www.geospatialpr.com/)

Geospatial PR is a site that publishes press releases from GIS and geospatial companies.

- [Directions Magazine](https://www.directionsmag.com/)

An interactive and engaged community of geospatial professionals, teaching and learning from one another.

- [The Esri Newsroom](https://www.esri.com/about/newsroom/overview/)

Thought-provoking stories on location intelligence and critical technology trends

- [Mango GIS Tutorials](https://mangomap.com/what-is-gis)

- [The MapScaping Podcast](https://mapscaping.com/)

The MapScaping Podcast is a weekly podcast featuring interesting people doing amazing work in the geospatial world. During each podcast, they interview experts and feature people that will help you learn more about GIS, geospatial, remote sensing and earth observation.

### Tools

- [Mapshaper](https://github.com/mbloch/mapshaper)

![](https://handsondataviz.org/images/13-transform/mapshaper-edit-annotated.png)

Mapshaper is software for editing Shapefile, GeoJSON, TopoJSON, CSV and several other data formats, written in JavaScript.

Mapshaper supports essential map making tasks like `simplifying shapes, editing attribute data, clipping, erasing, dissolving, filtering` and more.

Mapshaper includes several command line programs, which can be run under Mac OS X, Linux and Windows.

- `mapshaper` Runs mapshaper commands.
- `mapshaper-xl` Works the same as mapshaper, but runs with more RAM to support larger files.
- `mapshaper-gui` Runs the mapshaper Web interface locally.

- [GeoJSON.js](https://github.com/caseycesari/GeoJSON.js)

```js
var singleobject = { name: 'Location A', category: 'Store', street: 'Market', lat: 39.984, lng: -75.343, alt: 1024.76 }

GeoJSON.parse(singleobject, {Point: ['lat', 'lng', 'alt']});

  {
    "type": "Feature",
    "geometry": {"type": "Point", "coordinates": [-75.343, 39.984, 1024.76]},
    "properties": {
      "name": "Location A",
      "category": "Store"
    }
  }
```

Turn your geo data into GeoJSON.

### Data

- [OpenTopography](https://portal.opentopography.org/datasets)

![](https://i0.wp.com/www.gislounge.com/wp-content/uploads/2020/08/opentopography-map.png?w=1000&ssl=1)

OpenTopography is a portal that provides access to open sources of topographical datasets and processing tools.
