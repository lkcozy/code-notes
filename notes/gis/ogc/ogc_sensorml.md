---
title: >-
  OGC SensorML (Sensor Model Language)-Describe sensors, actuators, and
  processes
emoji: "\U0001F30D"
tags:
  - ogc
  - gis
  - swe
link: 'https://www.ogc.org/standards/sensorml'
created: 2021-04-21T21:25:10.000Z
modified: 2021-04-21T21:25:10.000Z
---

- Provide a robust and semantically-tied means of defining processes and processing components associated with the measurement and post-measurement transformation of observations.
- Includes
  - the process of measurement by sensors
  - instructions for deriving higher-level information from observations.
- Provide `a provider-centric view of information` in a sensor web, which is complemented by Observations and Measurements which provides `a user-centric view`.
- SensorML can be used to describe a wide range of sensors, including both dynamic and stationary platforms and both in-situ and remote sensors.
- Processes described in SensorML are discoverable and executable. All processes define their inputs, outputs, parameters, and method, as well as provide relevant metadata. SensorML models detectors and sensors as processes that convert real phenomena to data.
- Does not encode measurements taken by sensors
- A component of the OGC Sensor Web Enablement (SWE)

## Examples of supported sensors are

- stationary, in-situ – chemical “sniffer”, thermometer, gravity meter
- stationary, remote – stream velocity profiler, atmospheric profiler, Doppler - radar
- dynamic, in-situ – aircraft mounted ozone “sniffer”, GPS unit, dropsonde
- dynamic, remote – satellite radiometer, airborne camera, soldier-mounted video

## Example

```json
{
  "type“:”PhysicalComponent",
  "id“:”MY_SENSOR",
  "description“:”Thermometer on the window of the Cass Building, Room 315",
  "identifier“:”urn:icd:stations:FR8766",
  "identification": [
    {
      "type“:”IdentifierList",
      "identifier": [
        {
          "type“:”Term",
          "definition“:”http://sensorml.com/ont/swe/property/ShortName",
          "label“:”Short Name",
          "value“:”Thermometer FR8766"
        },
        {
          "type“:”Term",
          "definition“:”http://sensorml.com/ont/swe/property/Manufacturer",
          "label“:”Manufacturer Name",
          "value“:”ACME Inc"
        },
        {
          "type“:”Term",
          "definition“:”http://sensorml.com/ont/swe/property/ModelNumber",
          "label“:”Manufacturer Model",
          "value“:”T911"
        },
        {
          "type“:”Term",
          "definition“:”http://sensorml.com/ont/swe/property/SerialNumber",
          "label“:”Serial Number",
          "value“:”FT5743456566-997"
        }
      ]
    }
  ],
  "classification": [
    {
      "type“:”ClassifierList",
      "classifier": [
        {
          "type“:”Term",
          "definition“:”http://sensorml.com/ont/swe/property/IntendedApplication",
          "label“:”Intended Application",
          "value“:”Atmospheric Temperature"
        }
      ]
    }
  ],
  "outputs": {
    "type“:”OutputList",
    "output": [
      {
        "name“:”temp",
        "type“:”Quantity",
        "definition“:”http://sweet.jpl.nasa.gov/2.2/quanTemperature.owl#Temperature",
        "uom“: {”code“:”Cel" }
      }
    ]
  },
  "position": [
    {
      "type“:”Point",
      "id“:”stationLocation",
      "srsName“:”http://www.opengis.net/def/crs/EPSG/0/4326",
      "srsDimension“:”2",
      "pos“:”47.8 88.56"
    }
  ]
}
```
