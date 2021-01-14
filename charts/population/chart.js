let chart = {
  "config": {
    "view": {"continuousWidth": 400, "continuousHeight": 300, "strokeWidth": 0},
    "axis": {
      "domain": false,
      "gridColor": "#81858C",
      "gridDash": [0.25, 1, 0.25],
      "gridWidth": 0.5,
      "labelColor": "#494F59",
      "labelFont": "Ubuntu Mono",
      "labelFontSize": 11,
      "labelPadding": 5,
      "ticks": false,
      "titleColor": "#494F59",
      "titleFont": "Ubuntu Mono"
    },
    "text": {"color": "#494F59", "font": "Ubuntu Mono", "fontSize": 11},
    "title": {"anchor": "start"}
  },
  "vconcat": [
    {
      "hconcat": [
        {
          "mark": {"type": "bar", "opacity": 0, "width": 2.5},
          "encoding": {
            "x": {
              "type": "quantitative",
              "axis": {
                "domainOpacity": 0,
                "format": "f",
                "gridOpacity": 0,
                "labelOpacity": 0,
                "tickOpacity": 0,
                "title": null,
                "values": [1989, 2019]
              },
              "field": "x",
              "scale": {"domain": [1988, 2020], "nice": false}
            },
            "y": {
              "type": "quantitative",
              "axis": {
                "domainOpacity": 0,
                "grid": false,
                "labelOpacity": 0,
                "tickOpacity": 0,
                "title": null
              },
              "field": "y",
              "scale": {"domain": [-13, 5]}
            }
          },
          "height": 85,
          "width": 100
        },
        {
          "layer": [
            {
              "mark": {"type": "bar", "color": "#2b8cbe", "width": 2.5},
              "encoding": {
                "color": {
                  "condition": {
                    "value": "#35978f90",
                    "test": "(datum.rate > 0)"
                  },
                  "value": "#c51b7d90"
                },
                "opacity": {
                  "condition": {"value": 1, "selection": "selector058"},
                  "value": 0.1
                },
                "tooltip": [
                  {
                    "type": "nominal",
                    "field": "rate",
                    "format": ".1f",
                    "title": "приріст/скорочення населення, на 1000 осіб"
                  },
                  {"type": "nominal", "field": "region", "title": "регіон"},
                  {"type": "nominal", "field": "year", "title": "рік"}
                ],
                "x": {
                  "type": "quantitative",
                  "axis": {
                    "format": "f",
                    "title": null,
                    "values": [1989, 2019]
                  },
                  "field": "year",
                  "scale": {"domain": [1988, 2020], "nice": false}
                },
                "y": {
                  "type": "quantitative",
                  "axis": {"title": null},
                  "field": "rate",
                  "scale": {"domain": [-13, 5]}
                }
              },
              "height": 85,
              "selection": {
                "selector058": {"type": "interval", "encodings": ["x"]}
              },
              "width": 100
            },
            {
              "mark": {"type": "text", "dy": -47.5},
              "encoding": {
                "text": {
                  "type": "nominal",
                  "aggregate": "max",
                  "field": "region"
                }
              }
            }
          ],
          "data": {"name": "data-28e08d0b220f6e49ab2796358c9f02c2"},
          "transform": [{"filter": "(datum.region === 'Волинська')"}]
        },
        {
          "data": {"values": [{"x": 1989, "y": -10}, {"x": 2019, "y": -10}]},
          "mark": {"type": "bar", "opacity": 0, "width": 2.5},
          "encoding": {
            "x": {
              "type": "quantitative",
              "axis": {
                "domainOpacity": 0,
                "format": "f",
                "gridOpacity": 0,
                "labelOpacity": 0,
                "tickOpacity": 0,
                "title": null,
                "values": [1989, 2019]
              },
              "field": "x",
              "scale": {"domain": [1988, 2020], "nice": false}
            },
            "y": {
              "type": "quantitative",
              "axis": {
                "domainOpacity": 0,
                "grid": false,
                "labelOpacity": 0,
                "tickOpacity": 0,
                "title": null
              },
              "field": "y",
              "scale": {"domain": [-13, 5]}
            }
          },
          "height": 85,
          "width": 100
        },
        {
          "data": {"values": [{"x": 1989, "y": -10}, {"x": 2019, "y": -10}]},
          "mark": {"type": "bar", "opacity": 0, "width": 2.5},
          "encoding": {
            "x": {
              "type": "quantitative",
              "axis": {
                "domainOpacity": 0,
                "format": "f",
                "gridOpacity": 0,
                "labelOpacity": 0,
                "tickOpacity": 0,
                "title": null,
                "values": [1989, 2019]
              },
              "field": "x",
              "scale": {"domain": [1988, 2020], "nice": false}
            },
            "y": {
              "type": "quantitative",
              "axis": {
                "domainOpacity": 0,
                "grid": false,
                "labelOpacity": 0,
                "tickOpacity": 0,
                "title": null
              },
              "field": "y",
              "scale": {"domain": [-13, 5]}
            }
          },
          "height": 85,
          "width": 100
        },
        {
          "layer": [
            {
              "mark": {"type": "bar", "color": "#2b8cbe", "width": 2.5},
              "encoding": {
                "color": {
                  "condition": {
                    "value": "#35978f90",
                    "test": "(datum.rate > 0)"
                  },
                  "value": "#c51b7d90"
                },
                "opacity": {
                  "condition": {"value": 1, "selection": "selector058"},
                  "value": 0.1
                },
                "tooltip": [
                  {
                    "type": "nominal",
                    "field": "rate",
                    "format": ".1f",
                    "title": "приріст/скорочення населення, на 1000 осіб"
                  },
                  {"type": "nominal", "field": "region", "title": "регіон"},
                  {"type": "nominal", "field": "year", "title": "рік"}
                ],
                "x": {
                  "type": "quantitative",
                  "axis": {
                    "format": "f",
                    "title": null,
                    "values": [1989, 2019]
                  },
                  "field": "year",
                  "scale": {"domain": [1988, 2020], "nice": false}
                },
                "y": {
                  "type": "quantitative",
                  "axis": {"title": null},
                  "field": "rate",
                  "scale": {"domain": [-13, 5]}
                }
              },
              "height": 85,
              "selection": {
                "selector058": {"type": "interval", "encodings": ["x"]}
              },
              "width": 100
            },
            {
              "mark": {"type": "text", "dy": -47.5},
              "encoding": {
                "text": {
                  "type": "nominal",
                  "aggregate": "max",
                  "field": "region"
                }
              }
            }
          ],
          "data": {"name": "data-28e08d0b220f6e49ab2796358c9f02c2"},
          "transform": [{"filter": "(datum.region === 'м. Київ')"}]
        },
        {
          "layer": [
            {
              "mark": {"type": "bar", "color": "#2b8cbe", "width": 2.5},
              "encoding": {
                "color": {
                  "condition": {
                    "value": "#35978f90",
                    "test": "(datum.rate > 0)"
                  },
                  "value": "#c51b7d90"
                },
                "opacity": {
                  "condition": {"value": 1, "selection": "selector058"},
                  "value": 0.1
                },
                "tooltip": [
                  {
                    "type": "nominal",
                    "field": "rate",
                    "format": ".1f",
                    "title": "приріст/скорочення населення, на 1000 осіб"
                  },
                  {"type": "nominal", "field": "region", "title": "регіон"},
                  {"type": "nominal", "field": "year", "title": "рік"}
                ],
                "x": {
                  "type": "quantitative",
                  "axis": {
                    "format": "f",
                    "title": null,
                    "values": [1989, 2019]
                  },
                  "field": "year",
                  "scale": {"domain": [1988, 2020], "nice": false}
                },
                "y": {
                  "type": "quantitative",
                  "axis": {"title": null},
                  "field": "rate",
                  "scale": {"domain": [-13, 5]}
                }
              },
              "height": 85,
              "selection": {
                "selector058": {"type": "interval", "encodings": ["x"]}
              },
              "width": 100
            },
            {
              "mark": {"type": "text", "dy": -47.5},
              "encoding": {
                "text": {
                  "type": "nominal",
                  "aggregate": "max",
                  "field": "region"
                }
              }
            }
          ],
          "data": {"name": "data-28e08d0b220f6e49ab2796358c9f02c2"},
          "transform": [{"filter": "(datum.region === 'Чернігівська')"}]
        },
        {
          "layer": [
            {
              "mark": {"type": "bar", "color": "#2b8cbe", "width": 2.5},
              "encoding": {
                "color": {
                  "condition": {
                    "value": "#35978f90",
                    "test": "(datum.rate > 0)"
                  },
                  "value": "#c51b7d90"
                },
                "opacity": {
                  "condition": {"value": 1, "selection": "selector058"},
                  "value": 0.1
                },
                "tooltip": [
                  {
                    "type": "nominal",
                    "field": "rate",
                    "format": ".1f",
                    "title": "приріст/скорочення населення, на 1000 осіб"
                  },
                  {"type": "nominal", "field": "region", "title": "регіон"},
                  {"type": "nominal", "field": "year", "title": "рік"}
                ],
                "x": {
                  "type": "quantitative",
                  "axis": {
                    "format": "f",
                    "title": null,
                    "values": [1989, 2019]
                  },
                  "field": "year",
                  "scale": {"domain": [1988, 2020], "nice": false}
                },
                "y": {
                  "type": "quantitative",
                  "axis": {"title": null},
                  "field": "rate",
                  "scale": {"domain": [-13, 5]}
                }
              },
              "height": 85,
              "selection": {
                "selector058": {"type": "interval", "encodings": ["x"]}
              },
              "width": 100
            },
            {
              "mark": {"type": "text", "dy": -47.5},
              "encoding": {
                "text": {
                  "type": "nominal",
                  "aggregate": "max",
                  "field": "region"
                }
              }
            }
          ],
          "data": {"name": "data-28e08d0b220f6e49ab2796358c9f02c2"},
          "transform": [{"filter": "(datum.region === 'Сумська')"}]
        },
        {
          "data": {"values": [{"x": 1989, "y": -10}, {"x": 2019, "y": -10}]},
          "mark": {"type": "bar", "opacity": 0, "width": 2.5},
          "encoding": {
            "x": {
              "type": "quantitative",
              "axis": {
                "domainOpacity": 0,
                "format": "f",
                "gridOpacity": 0,
                "labelOpacity": 0,
                "tickOpacity": 0,
                "title": null,
                "values": [1989, 2019]
              },
              "field": "x",
              "scale": {"domain": [1988, 2020], "nice": false}
            },
            "y": {
              "type": "quantitative",
              "axis": {
                "domainOpacity": 0,
                "grid": false,
                "labelOpacity": 0,
                "tickOpacity": 0,
                "title": null
              },
              "field": "y",
              "scale": {"domain": [-13, 5]}
            }
          },
          "height": 85,
          "width": 100
        }
      ]
    },
    {
      "hconcat": [
        {
          "layer": [
            {
              "mark": {"type": "bar", "color": "#2b8cbe", "width": 2.5},
              "encoding": {
                "color": {
                  "condition": {
                    "value": "#35978f90",
                    "test": "(datum.rate > 0)"
                  },
                  "value": "#c51b7d90"
                },
                "opacity": {
                  "condition": {"value": 1, "selection": "selector058"},
                  "value": 0.1
                },
                "tooltip": [
                  {
                    "type": "nominal",
                    "field": "rate",
                    "format": ".1f",
                    "title": "приріст/скорочення населення, на 1000 осіб"
                  },
                  {"type": "nominal", "field": "region", "title": "регіон"},
                  {"type": "nominal", "field": "year", "title": "рік"}
                ],
                "x": {
                  "type": "quantitative",
                  "axis": {
                    "format": "f",
                    "title": null,
                    "values": [1989, 2019]
                  },
                  "field": "year",
                  "scale": {"domain": [1988, 2020], "nice": false}
                },
                "y": {
                  "type": "quantitative",
                  "axis": {"title": null},
                  "field": "rate",
                  "scale": {"domain": [-13, 5]}
                }
              },
              "height": 85,
              "selection": {
                "selector058": {"type": "interval", "encodings": ["x"]}
              },
              "width": 100
            },
            {
              "mark": {"type": "text", "dy": -47.5},
              "encoding": {
                "text": {
                  "type": "nominal",
                  "aggregate": "max",
                  "field": "region"
                }
              }
            }
          ],
          "transform": [{"filter": "(datum.region === 'Львівська')"}]
        },
        {
          "layer": [
            {
              "mark": {"type": "bar", "color": "#2b8cbe", "width": 2.5},
              "encoding": {
                "color": {
                  "condition": {
                    "value": "#35978f90",
                    "test": "(datum.rate > 0)"
                  },
                  "value": "#c51b7d90"
                },
                "opacity": {
                  "condition": {"value": 1, "selection": "selector058"},
                  "value": 0.1
                },
                "tooltip": [
                  {
                    "type": "nominal",
                    "field": "rate",
                    "format": ".1f",
                    "title": "приріст/скорочення населення, на 1000 осіб"
                  },
                  {"type": "nominal", "field": "region", "title": "регіон"},
                  {"type": "nominal", "field": "year", "title": "рік"}
                ],
                "x": {
                  "type": "quantitative",
                  "axis": {
                    "format": "f",
                    "title": null,
                    "values": [1989, 2019]
                  },
                  "field": "year",
                  "scale": {"domain": [1988, 2020], "nice": false}
                },
                "y": {
                  "type": "quantitative",
                  "axis": {"title": null},
                  "field": "rate",
                  "scale": {"domain": [-13, 5]}
                }
              },
              "height": 85,
              "selection": {
                "selector058": {"type": "interval", "encodings": ["x"]}
              },
              "width": 100
            },
            {
              "mark": {"type": "text", "dy": -47.5},
              "encoding": {
                "text": {
                  "type": "nominal",
                  "aggregate": "max",
                  "field": "region"
                }
              }
            }
          ],
          "transform": [{"filter": "(datum.region === 'Тернопільська')"}]
        },
        {
          "layer": [
            {
              "mark": {"type": "bar", "color": "#2b8cbe", "width": 2.5},
              "encoding": {
                "color": {
                  "condition": {
                    "value": "#35978f90",
                    "test": "(datum.rate > 0)"
                  },
                  "value": "#c51b7d90"
                },
                "opacity": {
                  "condition": {"value": 1, "selection": "selector058"},
                  "value": 0.1
                },
                "tooltip": [
                  {
                    "type": "nominal",
                    "field": "rate",
                    "format": ".1f",
                    "title": "приріст/скорочення населення, на 1000 осіб"
                  },
                  {"type": "nominal", "field": "region", "title": "регіон"},
                  {"type": "nominal", "field": "year", "title": "рік"}
                ],
                "x": {
                  "type": "quantitative",
                  "axis": {
                    "format": "f",
                    "title": null,
                    "values": [1989, 2019]
                  },
                  "field": "year",
                  "scale": {"domain": [1988, 2020], "nice": false}
                },
                "y": {
                  "type": "quantitative",
                  "axis": {"title": null},
                  "field": "rate",
                  "scale": {"domain": [-13, 5]}
                }
              },
              "height": 85,
              "selection": {
                "selector058": {"type": "interval", "encodings": ["x"]}
              },
              "width": 100
            },
            {
              "mark": {"type": "text", "dy": -47.5},
              "encoding": {
                "text": {
                  "type": "nominal",
                  "aggregate": "max",
                  "field": "region"
                }
              }
            }
          ],
          "transform": [{"filter": "(datum.region === 'Рівненська')"}]
        },
        {
          "layer": [
            {
              "mark": {"type": "bar", "color": "#2b8cbe", "width": 2.5},
              "encoding": {
                "color": {
                  "condition": {
                    "value": "#35978f90",
                    "test": "(datum.rate > 0)"
                  },
                  "value": "#c51b7d90"
                },
                "opacity": {
                  "condition": {"value": 1, "selection": "selector058"},
                  "value": 0.1
                },
                "tooltip": [
                  {
                    "type": "nominal",
                    "field": "rate",
                    "format": ".1f",
                    "title": "приріст/скорочення населення, на 1000 осіб"
                  },
                  {"type": "nominal", "field": "region", "title": "регіон"},
                  {"type": "nominal", "field": "year", "title": "рік"}
                ],
                "x": {
                  "type": "quantitative",
                  "axis": {
                    "format": "f",
                    "title": null,
                    "values": [1989, 2019]
                  },
                  "field": "year",
                  "scale": {"domain": [1988, 2020], "nice": false}
                },
                "y": {
                  "type": "quantitative",
                  "axis": {"title": null},
                  "field": "rate",
                  "scale": {"domain": [-13, 5]}
                }
              },
              "height": 85,
              "selection": {
                "selector058": {"type": "interval", "encodings": ["x"]}
              },
              "width": 100
            },
            {
              "mark": {"type": "text", "dy": -47.5},
              "encoding": {
                "text": {
                  "type": "nominal",
                  "aggregate": "max",
                  "field": "region"
                }
              }
            }
          ],
          "transform": [{"filter": "(datum.region === 'Житомирська')"}]
        },
        {
          "layer": [
            {
              "mark": {"type": "bar", "color": "#2b8cbe", "width": 2.5},
              "encoding": {
                "color": {
                  "condition": {
                    "value": "#35978f90",
                    "test": "(datum.rate > 0)"
                  },
                  "value": "#c51b7d90"
                },
                "opacity": {
                  "condition": {"value": 1, "selection": "selector058"},
                  "value": 0.1
                },
                "tooltip": [
                  {
                    "type": "nominal",
                    "field": "rate",
                    "format": ".1f",
                    "title": "приріст/скорочення населення, на 1000 осіб"
                  },
                  {"type": "nominal", "field": "region", "title": "регіон"},
                  {"type": "nominal", "field": "year", "title": "рік"}
                ],
                "x": {
                  "type": "quantitative",
                  "axis": {
                    "format": "f",
                    "title": null,
                    "values": [1989, 2019]
                  },
                  "field": "year",
                  "scale": {"domain": [1988, 2020], "nice": false}
                },
                "y": {
                  "type": "quantitative",
                  "axis": {"title": null},
                  "field": "rate",
                  "scale": {"domain": [-13, 5]}
                }
              },
              "height": 85,
              "selection": {
                "selector058": {"type": "interval", "encodings": ["x"]}
              },
              "width": 100
            },
            {
              "mark": {"type": "text", "dy": -47.5},
              "encoding": {
                "text": {
                  "type": "nominal",
                  "aggregate": "max",
                  "field": "region"
                }
              }
            }
          ],
          "transform": [{"filter": "(datum.region === 'Київська')"}]
        },
        {
          "layer": [
            {
              "mark": {"type": "bar", "color": "#2b8cbe", "width": 2.5},
              "encoding": {
                "color": {
                  "condition": {
                    "value": "#35978f90",
                    "test": "(datum.rate > 0)"
                  },
                  "value": "#c51b7d90"
                },
                "opacity": {
                  "condition": {"value": 1, "selection": "selector058"},
                  "value": 0.1
                },
                "tooltip": [
                  {
                    "type": "nominal",
                    "field": "rate",
                    "format": ".1f",
                    "title": "приріст/скорочення населення, на 1000 осіб"
                  },
                  {"type": "nominal", "field": "region", "title": "регіон"},
                  {"type": "nominal", "field": "year", "title": "рік"}
                ],
                "x": {
                  "type": "quantitative",
                  "axis": {
                    "format": "f",
                    "title": null,
                    "values": [1989, 2019]
                  },
                  "field": "year",
                  "scale": {"domain": [1988, 2020], "nice": false}
                },
                "y": {
                  "type": "quantitative",
                  "axis": {"title": null},
                  "field": "rate",
                  "scale": {"domain": [-13, 5]}
                }
              },
              "height": 85,
              "selection": {
                "selector058": {"type": "interval", "encodings": ["x"]}
              },
              "width": 100
            },
            {
              "mark": {"type": "text", "dy": -47.5},
              "encoding": {
                "text": {
                  "type": "nominal",
                  "aggregate": "max",
                  "field": "region"
                }
              }
            }
          ],
          "transform": [{"filter": "(datum.region === 'Полтавська')"}]
        },
        {
          "layer": [
            {
              "mark": {"type": "bar", "color": "#2b8cbe", "width": 2.5},
              "encoding": {
                "color": {
                  "condition": {
                    "value": "#35978f90",
                    "test": "(datum.rate > 0)"
                  },
                  "value": "#c51b7d90"
                },
                "opacity": {
                  "condition": {"value": 1, "selection": "selector058"},
                  "value": 0.1
                },
                "tooltip": [
                  {
                    "type": "nominal",
                    "field": "rate",
                    "format": ".1f",
                    "title": "приріст/скорочення населення, на 1000 осіб"
                  },
                  {"type": "nominal", "field": "region", "title": "регіон"},
                  {"type": "nominal", "field": "year", "title": "рік"}
                ],
                "x": {
                  "type": "quantitative",
                  "axis": {
                    "format": "f",
                    "title": null,
                    "values": [1989, 2019]
                  },
                  "field": "year",
                  "scale": {"domain": [1988, 2020], "nice": false}
                },
                "y": {
                  "type": "quantitative",
                  "axis": {"title": null},
                  "field": "rate",
                  "scale": {"domain": [-13, 5]}
                }
              },
              "height": 85,
              "selection": {
                "selector058": {"type": "interval", "encodings": ["x"]}
              },
              "width": 100
            },
            {
              "mark": {"type": "text", "dy": -47.5},
              "encoding": {
                "text": {
                  "type": "nominal",
                  "aggregate": "max",
                  "field": "region"
                }
              }
            }
          ],
          "transform": [{"filter": "(datum.region === 'Харківська')"}]
        },
        {
          "layer": [
            {
              "mark": {"type": "bar", "color": "#2b8cbe", "width": 2.5},
              "encoding": {
                "color": {
                  "condition": {
                    "value": "#35978f90",
                    "test": "(datum.rate > 0)"
                  },
                  "value": "#c51b7d90"
                },
                "opacity": {
                  "condition": {"value": 1, "selection": "selector058"},
                  "value": 0.1
                },
                "tooltip": [
                  {
                    "type": "nominal",
                    "field": "rate",
                    "format": ".1f",
                    "title": "приріст/скорочення населення, на 1000 осіб"
                  },
                  {"type": "nominal", "field": "region", "title": "регіон"},
                  {"type": "nominal", "field": "year", "title": "рік"}
                ],
                "x": {
                  "type": "quantitative",
                  "axis": {
                    "format": "f",
                    "title": null,
                    "values": [1989, 2019]
                  },
                  "field": "year",
                  "scale": {"domain": [1988, 2020], "nice": false}
                },
                "y": {
                  "type": "quantitative",
                  "axis": {"title": null},
                  "field": "rate",
                  "scale": {"domain": [-13, 5]}
                }
              },
              "height": 85,
              "selection": {
                "selector058": {"type": "interval", "encodings": ["x"]}
              },
              "width": 100
            },
            {
              "mark": {"type": "text", "dy": -47.5},
              "encoding": {
                "text": {
                  "type": "nominal",
                  "aggregate": "max",
                  "field": "region"
                }
              }
            }
          ],
          "transform": [{"filter": "(datum.region === 'Луганська')"}]
        }
      ],
      "data": {"name": "data-28e08d0b220f6e49ab2796358c9f02c2"}
    },
    {
      "hconcat": [
        {
          "layer": [
            {
              "mark": {"type": "bar", "color": "#2b8cbe", "width": 2.5},
              "encoding": {
                "color": {
                  "condition": {
                    "value": "#35978f90",
                    "test": "(datum.rate > 0)"
                  },
                  "value": "#c51b7d90"
                },
                "opacity": {
                  "condition": {"value": 1, "selection": "selector058"},
                  "value": 0.1
                },
                "tooltip": [
                  {
                    "type": "nominal",
                    "field": "rate",
                    "format": ".1f",
                    "title": "приріст/скорочення населення, на 1000 осіб"
                  },
                  {"type": "nominal", "field": "region", "title": "регіон"},
                  {"type": "nominal", "field": "year", "title": "рік"}
                ],
                "x": {
                  "type": "quantitative",
                  "axis": {
                    "format": "f",
                    "title": null,
                    "values": [1989, 2019]
                  },
                  "field": "year",
                  "scale": {"domain": [1988, 2020], "nice": false}
                },
                "y": {
                  "type": "quantitative",
                  "axis": {"title": null},
                  "field": "rate",
                  "scale": {"domain": [-13, 5]}
                }
              },
              "height": 85,
              "selection": {
                "selector058": {"type": "interval", "encodings": ["x"]}
              },
              "width": 100
            },
            {
              "mark": {"type": "text", "dy": -47.5},
              "encoding": {
                "text": {
                  "type": "nominal",
                  "aggregate": "max",
                  "field": "region"
                }
              }
            }
          ],
          "transform": [{"filter": "(datum.region === 'Закарпатська')"}]
        },
        {
          "layer": [
            {
              "mark": {"type": "bar", "color": "#2b8cbe", "width": 2.5},
              "encoding": {
                "color": {
                  "condition": {
                    "value": "#35978f90",
                    "test": "(datum.rate > 0)"
                  },
                  "value": "#c51b7d90"
                },
                "opacity": {
                  "condition": {"value": 1, "selection": "selector058"},
                  "value": 0.1
                },
                "tooltip": [
                  {
                    "type": "nominal",
                    "field": "rate",
                    "format": ".1f",
                    "title": "приріст/скорочення населення, на 1000 осіб"
                  },
                  {"type": "nominal", "field": "region", "title": "регіон"},
                  {"type": "nominal", "field": "year", "title": "рік"}
                ],
                "x": {
                  "type": "quantitative",
                  "axis": {
                    "format": "f",
                    "title": null,
                    "values": [1989, 2019]
                  },
                  "field": "year",
                  "scale": {"domain": [1988, 2020], "nice": false}
                },
                "y": {
                  "type": "quantitative",
                  "axis": {"title": null},
                  "field": "rate",
                  "scale": {"domain": [-13, 5]}
                }
              },
              "height": 85,
              "selection": {
                "selector058": {"type": "interval", "encodings": ["x"]}
              },
              "width": 100
            },
            {
              "mark": {"type": "text", "dy": -47.5},
              "encoding": {
                "text": {
                  "type": "nominal",
                  "aggregate": "max",
                  "field": "region"
                }
              }
            }
          ],
          "transform": [{"filter": "(datum.region === 'Івано-Франківська')"}]
        },
        {
          "layer": [
            {
              "mark": {"type": "bar", "color": "#2b8cbe", "width": 2.5},
              "encoding": {
                "color": {
                  "condition": {
                    "value": "#35978f90",
                    "test": "(datum.rate > 0)"
                  },
                  "value": "#c51b7d90"
                },
                "opacity": {
                  "condition": {"value": 1, "selection": "selector058"},
                  "value": 0.1
                },
                "tooltip": [
                  {
                    "type": "nominal",
                    "field": "rate",
                    "format": ".1f",
                    "title": "приріст/скорочення населення, на 1000 осіб"
                  },
                  {"type": "nominal", "field": "region", "title": "регіон"},
                  {"type": "nominal", "field": "year", "title": "рік"}
                ],
                "x": {
                  "type": "quantitative",
                  "axis": {
                    "format": "f",
                    "title": null,
                    "values": [1989, 2019]
                  },
                  "field": "year",
                  "scale": {"domain": [1988, 2020], "nice": false}
                },
                "y": {
                  "type": "quantitative",
                  "axis": {"title": null},
                  "field": "rate",
                  "scale": {"domain": [-13, 5]}
                }
              },
              "height": 85,
              "selection": {
                "selector058": {"type": "interval", "encodings": ["x"]}
              },
              "width": 100
            },
            {
              "mark": {"type": "text", "dy": -47.5},
              "encoding": {
                "text": {
                  "type": "nominal",
                  "aggregate": "max",
                  "field": "region"
                }
              }
            }
          ],
          "transform": [{"filter": "(datum.region === 'Хмельницька')"}]
        },
        {
          "layer": [
            {
              "mark": {"type": "bar", "color": "#2b8cbe", "width": 2.5},
              "encoding": {
                "color": {
                  "condition": {
                    "value": "#35978f90",
                    "test": "(datum.rate > 0)"
                  },
                  "value": "#c51b7d90"
                },
                "opacity": {
                  "condition": {"value": 1, "selection": "selector058"},
                  "value": 0.1
                },
                "tooltip": [
                  {
                    "type": "nominal",
                    "field": "rate",
                    "format": ".1f",
                    "title": "приріст/скорочення населення, на 1000 осіб"
                  },
                  {"type": "nominal", "field": "region", "title": "регіон"},
                  {"type": "nominal", "field": "year", "title": "рік"}
                ],
                "x": {
                  "type": "quantitative",
                  "axis": {
                    "format": "f",
                    "title": null,
                    "values": [1989, 2019]
                  },
                  "field": "year",
                  "scale": {"domain": [1988, 2020], "nice": false}
                },
                "y": {
                  "type": "quantitative",
                  "axis": {"title": null},
                  "field": "rate",
                  "scale": {"domain": [-13, 5]}
                }
              },
              "height": 85,
              "selection": {
                "selector058": {"type": "interval", "encodings": ["x"]}
              },
              "width": 100
            },
            {
              "mark": {"type": "text", "dy": -47.5},
              "encoding": {
                "text": {
                  "type": "nominal",
                  "aggregate": "max",
                  "field": "region"
                }
              }
            }
          ],
          "transform": [{"filter": "(datum.region === 'Вінницька')"}]
        },
        {
          "layer": [
            {
              "mark": {"type": "bar", "color": "#2b8cbe", "width": 2.5},
              "encoding": {
                "color": {
                  "condition": {
                    "value": "#35978f90",
                    "test": "(datum.rate > 0)"
                  },
                  "value": "#c51b7d90"
                },
                "opacity": {
                  "condition": {"value": 1, "selection": "selector058"},
                  "value": 0.1
                },
                "tooltip": [
                  {
                    "type": "nominal",
                    "field": "rate",
                    "format": ".1f",
                    "title": "приріст/скорочення населення, на 1000 осіб"
                  },
                  {"type": "nominal", "field": "region", "title": "регіон"},
                  {"type": "nominal", "field": "year", "title": "рік"}
                ],
                "x": {
                  "type": "quantitative",
                  "axis": {
                    "format": "f",
                    "title": null,
                    "values": [1989, 2019]
                  },
                  "field": "year",
                  "scale": {"domain": [1988, 2020], "nice": false}
                },
                "y": {
                  "type": "quantitative",
                  "axis": {"title": null},
                  "field": "rate",
                  "scale": {"domain": [-13, 5]}
                }
              },
              "height": 85,
              "selection": {
                "selector058": {"type": "interval", "encodings": ["x"]}
              },
              "width": 100
            },
            {
              "mark": {"type": "text", "dy": -47.5},
              "encoding": {
                "text": {
                  "type": "nominal",
                  "aggregate": "max",
                  "field": "region"
                }
              }
            }
          ],
          "transform": [{"filter": "(datum.region === 'Черкаська')"}]
        },
        {
          "layer": [
            {
              "mark": {"type": "bar", "color": "#2b8cbe", "width": 2.5},
              "encoding": {
                "color": {
                  "condition": {
                    "value": "#35978f90",
                    "test": "(datum.rate > 0)"
                  },
                  "value": "#c51b7d90"
                },
                "opacity": {
                  "condition": {"value": 1, "selection": "selector058"},
                  "value": 0.1
                },
                "tooltip": [
                  {
                    "type": "nominal",
                    "field": "rate",
                    "format": ".1f",
                    "title": "приріст/скорочення населення, на 1000 осіб"
                  },
                  {"type": "nominal", "field": "region", "title": "регіон"},
                  {"type": "nominal", "field": "year", "title": "рік"}
                ],
                "x": {
                  "type": "quantitative",
                  "axis": {
                    "format": "f",
                    "title": null,
                    "values": [1989, 2019]
                  },
                  "field": "year",
                  "scale": {"domain": [1988, 2020], "nice": false}
                },
                "y": {
                  "type": "quantitative",
                  "axis": {"title": null},
                  "field": "rate",
                  "scale": {"domain": [-13, 5]}
                }
              },
              "height": 85,
              "selection": {
                "selector058": {"type": "interval", "encodings": ["x"]}
              },
              "width": 100
            },
            {
              "mark": {"type": "text", "dy": -47.5},
              "encoding": {
                "text": {
                  "type": "nominal",
                  "aggregate": "max",
                  "field": "region"
                }
              }
            }
          ],
          "transform": [{"filter": "(datum.region === 'Кіровоградська')"}]
        },
        {
          "layer": [
            {
              "mark": {"type": "bar", "color": "#2b8cbe", "width": 2.5},
              "encoding": {
                "color": {
                  "condition": {
                    "value": "#35978f90",
                    "test": "(datum.rate > 0)"
                  },
                  "value": "#c51b7d90"
                },
                "opacity": {
                  "condition": {"value": 1, "selection": "selector058"},
                  "value": 0.1
                },
                "tooltip": [
                  {
                    "type": "nominal",
                    "field": "rate",
                    "format": ".1f",
                    "title": "приріст/скорочення населення, на 1000 осіб"
                  },
                  {"type": "nominal", "field": "region", "title": "регіон"},
                  {"type": "nominal", "field": "year", "title": "рік"}
                ],
                "x": {
                  "type": "quantitative",
                  "axis": {
                    "format": "f",
                    "title": null,
                    "values": [1989, 2019]
                  },
                  "field": "year",
                  "scale": {"domain": [1988, 2020], "nice": false}
                },
                "y": {
                  "type": "quantitative",
                  "axis": {"title": null},
                  "field": "rate",
                  "scale": {"domain": [-13, 5]}
                }
              },
              "height": 85,
              "selection": {
                "selector058": {"type": "interval", "encodings": ["x"]}
              },
              "width": 100
            },
            {
              "mark": {"type": "text", "dy": -47.5},
              "encoding": {
                "text": {
                  "type": "nominal",
                  "aggregate": "max",
                  "field": "region"
                }
              }
            }
          ],
          "transform": [{"filter": "(datum.region === 'Дніпропетровська')"}]
        },
        {
          "layer": [
            {
              "mark": {"type": "bar", "color": "#2b8cbe", "width": 2.5},
              "encoding": {
                "color": {
                  "condition": {
                    "value": "#35978f90",
                    "test": "(datum.rate > 0)"
                  },
                  "value": "#c51b7d90"
                },
                "opacity": {
                  "condition": {"value": 1, "selection": "selector058"},
                  "value": 0.1
                },
                "tooltip": [
                  {
                    "type": "nominal",
                    "field": "rate",
                    "format": ".1f",
                    "title": "приріст/скорочення населення, на 1000 осіб"
                  },
                  {"type": "nominal", "field": "region", "title": "регіон"},
                  {"type": "nominal", "field": "year", "title": "рік"}
                ],
                "x": {
                  "type": "quantitative",
                  "axis": {
                    "format": "f",
                    "title": null,
                    "values": [1989, 2019]
                  },
                  "field": "year",
                  "scale": {"domain": [1988, 2020], "nice": false}
                },
                "y": {
                  "type": "quantitative",
                  "axis": {"title": null},
                  "field": "rate",
                  "scale": {"domain": [-13, 5]}
                }
              },
              "height": 85,
              "selection": {
                "selector058": {"type": "interval", "encodings": ["x"]}
              },
              "width": 100
            },
            {
              "mark": {"type": "text", "dy": -47.5},
              "encoding": {
                "text": {
                  "type": "nominal",
                  "aggregate": "max",
                  "field": "region"
                }
              }
            }
          ],
          "transform": [{"filter": "(datum.region === 'Донецька')"}]
        }
      ],
      "data": {"name": "data-28e08d0b220f6e49ab2796358c9f02c2"}
    },
    {
      "hconcat": [
        {
          "mark": {"type": "bar", "opacity": 0, "width": 2.5},
          "encoding": {
            "x": {
              "type": "quantitative",
              "axis": {
                "domainOpacity": 0,
                "format": "f",
                "gridOpacity": 0,
                "labelOpacity": 0,
                "tickOpacity": 0,
                "title": null,
                "values": [1989, 2019]
              },
              "field": "x",
              "scale": {"domain": [1988, 2020], "nice": false}
            },
            "y": {
              "type": "quantitative",
              "axis": {
                "domainOpacity": 0,
                "grid": false,
                "labelOpacity": 0,
                "tickOpacity": 0,
                "title": null
              },
              "field": "y",
              "scale": {"domain": [-13, 5]}
            }
          },
          "height": 85,
          "width": 100
        },
        {
          "layer": [
            {
              "mark": {"type": "bar", "color": "#2b8cbe", "width": 2.5},
              "encoding": {
                "color": {
                  "condition": {
                    "value": "#35978f90",
                    "test": "(datum.rate > 0)"
                  },
                  "value": "#c51b7d90"
                },
                "opacity": {
                  "condition": {"value": 1, "selection": "selector058"},
                  "value": 0.1
                },
                "tooltip": [
                  {
                    "type": "nominal",
                    "field": "rate",
                    "format": ".1f",
                    "title": "приріст/скорочення населення, на 1000 осіб"
                  },
                  {"type": "nominal", "field": "region", "title": "регіон"},
                  {"type": "nominal", "field": "year", "title": "рік"}
                ],
                "x": {
                  "type": "quantitative",
                  "axis": {
                    "format": "f",
                    "title": null,
                    "values": [1989, 2019]
                  },
                  "field": "year",
                  "scale": {"domain": [1988, 2020], "nice": false}
                },
                "y": {
                  "type": "quantitative",
                  "axis": {"title": null},
                  "field": "rate",
                  "scale": {"domain": [-13, 5]}
                }
              },
              "height": 85,
              "selection": {
                "selector058": {"type": "interval", "encodings": ["x"]}
              },
              "width": 100
            },
            {
              "mark": {"type": "text", "dy": -47.5},
              "encoding": {
                "text": {
                  "type": "nominal",
                  "aggregate": "max",
                  "field": "region"
                }
              }
            }
          ],
          "data": {"name": "data-28e08d0b220f6e49ab2796358c9f02c2"},
          "transform": [{"filter": "(datum.region === 'Чернівецька')"}]
        },
        {
          "data": {"values": [{"x": 1989, "y": -10}, {"x": 2019, "y": -10}]},
          "mark": {"type": "bar", "opacity": 0, "width": 2.5},
          "encoding": {
            "x": {
              "type": "quantitative",
              "axis": {
                "domainOpacity": 0,
                "format": "f",
                "gridOpacity": 0,
                "labelOpacity": 0,
                "tickOpacity": 0,
                "title": null,
                "values": [1989, 2019]
              },
              "field": "x",
              "scale": {"domain": [1988, 2020], "nice": false}
            },
            "y": {
              "type": "quantitative",
              "axis": {
                "domainOpacity": 0,
                "grid": false,
                "labelOpacity": 0,
                "tickOpacity": 0,
                "title": null
              },
              "field": "y",
              "scale": {"domain": [-13, 5]}
            }
          },
          "height": 85,
          "width": 100
        },
        {
          "layer": [
            {
              "mark": {"type": "bar", "color": "#2b8cbe", "width": 2.5},
              "encoding": {
                "color": {
                  "condition": {
                    "value": "#35978f90",
                    "test": "(datum.rate > 0)"
                  },
                  "value": "#c51b7d90"
                },
                "opacity": {
                  "condition": {"value": 1, "selection": "selector058"},
                  "value": 0.1
                },
                "tooltip": [
                  {
                    "type": "nominal",
                    "field": "rate",
                    "format": ".1f",
                    "title": "приріст/скорочення населення, на 1000 осіб"
                  },
                  {"type": "nominal", "field": "region", "title": "регіон"},
                  {"type": "nominal", "field": "year", "title": "рік"}
                ],
                "x": {
                  "type": "quantitative",
                  "axis": {
                    "format": "f",
                    "title": null,
                    "values": [1989, 2019]
                  },
                  "field": "year",
                  "scale": {"domain": [1988, 2020], "nice": false}
                },
                "y": {
                  "type": "quantitative",
                  "axis": {"title": null},
                  "field": "rate",
                  "scale": {"domain": [-13, 5]}
                }
              },
              "height": 85,
              "selection": {
                "selector058": {"type": "interval", "encodings": ["x"]}
              },
              "width": 100
            },
            {
              "mark": {"type": "text", "dy": -47.5},
              "encoding": {
                "text": {
                  "type": "nominal",
                  "aggregate": "max",
                  "field": "region"
                }
              }
            }
          ],
          "data": {"name": "data-28e08d0b220f6e49ab2796358c9f02c2"},
          "transform": [{"filter": "(datum.region === 'Одеська')"}]
        },
        {
          "layer": [
            {
              "mark": {"type": "bar", "color": "#2b8cbe", "width": 2.5},
              "encoding": {
                "color": {
                  "condition": {
                    "value": "#35978f90",
                    "test": "(datum.rate > 0)"
                  },
                  "value": "#c51b7d90"
                },
                "opacity": {
                  "condition": {"value": 1, "selection": "selector058"},
                  "value": 0.1
                },
                "tooltip": [
                  {
                    "type": "nominal",
                    "field": "rate",
                    "format": ".1f",
                    "title": "приріст/скорочення населення, на 1000 осіб"
                  },
                  {"type": "nominal", "field": "region", "title": "регіон"},
                  {"type": "nominal", "field": "year", "title": "рік"}
                ],
                "x": {
                  "type": "quantitative",
                  "axis": {
                    "format": "f",
                    "title": null,
                    "values": [1989, 2019]
                  },
                  "field": "year",
                  "scale": {"domain": [1988, 2020], "nice": false}
                },
                "y": {
                  "type": "quantitative",
                  "axis": {"title": null},
                  "field": "rate",
                  "scale": {"domain": [-13, 5]}
                }
              },
              "height": 85,
              "selection": {
                "selector058": {"type": "interval", "encodings": ["x"]}
              },
              "width": 100
            },
            {
              "mark": {"type": "text", "dy": -47.5},
              "encoding": {
                "text": {
                  "type": "nominal",
                  "aggregate": "max",
                  "field": "region"
                }
              }
            }
          ],
          "data": {"name": "data-28e08d0b220f6e49ab2796358c9f02c2"},
          "transform": [{"filter": "(datum.region === 'Миколаївська')"}]
        },
        {
          "layer": [
            {
              "mark": {"type": "bar", "color": "#2b8cbe", "width": 2.5},
              "encoding": {
                "color": {
                  "condition": {
                    "value": "#35978f90",
                    "test": "(datum.rate > 0)"
                  },
                  "value": "#c51b7d90"
                },
                "opacity": {
                  "condition": {"value": 1, "selection": "selector058"},
                  "value": 0.1
                },
                "tooltip": [
                  {
                    "type": "nominal",
                    "field": "rate",
                    "format": ".1f",
                    "title": "приріст/скорочення населення, на 1000 осіб"
                  },
                  {"type": "nominal", "field": "region", "title": "регіон"},
                  {"type": "nominal", "field": "year", "title": "рік"}
                ],
                "x": {
                  "type": "quantitative",
                  "axis": {
                    "format": "f",
                    "title": null,
                    "values": [1989, 2019]
                  },
                  "field": "year",
                  "scale": {"domain": [1988, 2020], "nice": false}
                },
                "y": {
                  "type": "quantitative",
                  "axis": {"title": null},
                  "field": "rate",
                  "scale": {"domain": [-13, 5]}
                }
              },
              "height": 85,
              "selection": {
                "selector058": {"type": "interval", "encodings": ["x"]}
              },
              "width": 100
            },
            {
              "mark": {"type": "text", "dy": -47.5},
              "encoding": {
                "text": {
                  "type": "nominal",
                  "aggregate": "max",
                  "field": "region"
                }
              }
            }
          ],
          "data": {"name": "data-28e08d0b220f6e49ab2796358c9f02c2"},
          "transform": [{"filter": "(datum.region === 'Херсонська')"}]
        },
        {
          "layer": [
            {
              "mark": {"type": "bar", "color": "#2b8cbe", "width": 2.5},
              "encoding": {
                "color": {
                  "condition": {
                    "value": "#35978f90",
                    "test": "(datum.rate > 0)"
                  },
                  "value": "#c51b7d90"
                },
                "opacity": {
                  "condition": {"value": 1, "selection": "selector058"},
                  "value": 0.1
                },
                "tooltip": [
                  {
                    "type": "nominal",
                    "field": "rate",
                    "format": ".1f",
                    "title": "приріст/скорочення населення, на 1000 осіб"
                  },
                  {"type": "nominal", "field": "region", "title": "регіон"},
                  {"type": "nominal", "field": "year", "title": "рік"}
                ],
                "x": {
                  "type": "quantitative",
                  "axis": {
                    "format": "f",
                    "title": null,
                    "values": [1989, 2019]
                  },
                  "field": "year",
                  "scale": {"domain": [1988, 2020], "nice": false}
                },
                "y": {
                  "type": "quantitative",
                  "axis": {"title": null},
                  "field": "rate",
                  "scale": {"domain": [-13, 5]}
                }
              },
              "height": 85,
              "selection": {
                "selector058": {"type": "interval", "encodings": ["x"]}
              },
              "width": 100
            },
            {
              "mark": {"type": "text", "dy": -47.5},
              "encoding": {
                "text": {
                  "type": "nominal",
                  "aggregate": "max",
                  "field": "region"
                }
              }
            }
          ],
          "data": {"name": "data-28e08d0b220f6e49ab2796358c9f02c2"},
          "transform": [{"filter": "(datum.region === 'Запорізька')"}]
        },
        {
          "data": {"values": [{"x": 1989, "y": -10}, {"x": 2019, "y": -10}]},
          "mark": {"type": "bar", "opacity": 0, "width": 2.5},
          "encoding": {
            "x": {
              "type": "quantitative",
              "axis": {
                "domainOpacity": 0,
                "format": "f",
                "gridOpacity": 0,
                "labelOpacity": 0,
                "tickOpacity": 0,
                "title": null,
                "values": [1989, 2019]
              },
              "field": "x",
              "scale": {"domain": [1988, 2020], "nice": false}
            },
            "y": {
              "type": "quantitative",
              "axis": {
                "domainOpacity": 0,
                "grid": false,
                "labelOpacity": 0,
                "tickOpacity": 0,
                "title": null
              },
              "field": "y",
              "scale": {"domain": [-13, 5]}
            }
          },
          "height": 85,
          "width": 100
        }
      ],
      "data": {"values": [{"x": 1989, "y": -10}, {"x": 2019, "y": -10}]}
    },
    {
      "hconcat": [
        {
          "mark": {"type": "bar", "opacity": 0, "width": 2.5},
          "encoding": {
            "x": {
              "type": "quantitative",
              "axis": {
                "domainOpacity": 0,
                "format": "f",
                "gridOpacity": 0,
                "labelOpacity": 0,
                "tickOpacity": 0,
                "title": null,
                "values": [1989, 2019]
              },
              "field": "x",
              "scale": {"domain": [1988, 2020], "nice": false}
            },
            "y": {
              "type": "quantitative",
              "axis": {
                "domainOpacity": 0,
                "grid": false,
                "labelOpacity": 0,
                "tickOpacity": 0,
                "title": null
              },
              "field": "y",
              "scale": {"domain": [-13, 5]}
            }
          },
          "height": 85,
          "width": 100
        },
        {
          "mark": {"type": "bar", "opacity": 0, "width": 2.5},
          "encoding": {
            "x": {
              "type": "quantitative",
              "axis": {
                "domainOpacity": 0,
                "format": "f",
                "gridOpacity": 0,
                "labelOpacity": 0,
                "tickOpacity": 0,
                "title": null,
                "values": [1989, 2019]
              },
              "field": "x",
              "scale": {"domain": [1988, 2020], "nice": false}
            },
            "y": {
              "type": "quantitative",
              "axis": {
                "domainOpacity": 0,
                "grid": false,
                "labelOpacity": 0,
                "tickOpacity": 0,
                "title": null
              },
              "field": "y",
              "scale": {"domain": [-13, 5]}
            }
          },
          "height": 85,
          "width": 100
        },
        {
          "mark": {"type": "bar", "opacity": 0, "width": 2.5},
          "encoding": {
            "x": {
              "type": "quantitative",
              "axis": {
                "domainOpacity": 0,
                "format": "f",
                "gridOpacity": 0,
                "labelOpacity": 0,
                "tickOpacity": 0,
                "title": null,
                "values": [1989, 2019]
              },
              "field": "x",
              "scale": {"domain": [1988, 2020], "nice": false}
            },
            "y": {
              "type": "quantitative",
              "axis": {
                "domainOpacity": 0,
                "grid": false,
                "labelOpacity": 0,
                "tickOpacity": 0,
                "title": null
              },
              "field": "y",
              "scale": {"domain": [-13, 5]}
            }
          },
          "height": 85,
          "width": 100
        },
        {
          "mark": {"type": "bar", "opacity": 0, "width": 2.5},
          "encoding": {
            "x": {
              "type": "quantitative",
              "axis": {
                "domainOpacity": 0,
                "format": "f",
                "gridOpacity": 0,
                "labelOpacity": 0,
                "tickOpacity": 0,
                "title": null,
                "values": [1989, 2019]
              },
              "field": "x",
              "scale": {"domain": [1988, 2020], "nice": false}
            },
            "y": {
              "type": "quantitative",
              "axis": {
                "domainOpacity": 0,
                "grid": false,
                "labelOpacity": 0,
                "tickOpacity": 0,
                "title": null
              },
              "field": "y",
              "scale": {"domain": [-13, 5]}
            }
          },
          "height": 85,
          "width": 100
        },
        {
          "layer": [
            {
              "mark": {"type": "bar", "color": "#2b8cbe", "width": 2.5},
              "encoding": {
                "color": {
                  "condition": {
                    "value": "#35978f90",
                    "test": "(datum.rate > 0)"
                  },
                  "value": "#c51b7d90"
                },
                "opacity": {
                  "condition": {"value": 1, "selection": "selector058"},
                  "value": 0.1
                },
                "tooltip": [
                  {
                    "type": "nominal",
                    "field": "rate",
                    "format": ".1f",
                    "title": "приріст/скорочення населення, на 1000 осіб"
                  },
                  {"type": "nominal", "field": "region", "title": "регіон"},
                  {"type": "nominal", "field": "year", "title": "рік"}
                ],
                "x": {
                  "type": "quantitative",
                  "axis": {
                    "format": "f",
                    "title": null,
                    "values": [1989, 2019]
                  },
                  "field": "year",
                  "scale": {"domain": [1988, 2020], "nice": false}
                },
                "y": {
                  "type": "quantitative",
                  "axis": {"title": null},
                  "field": "rate",
                  "scale": {"domain": [-13, 5]}
                }
              },
              "height": 85,
              "selection": {
                "selector058": {"type": "interval", "encodings": ["x"]}
              },
              "width": 100
            },
            {
              "mark": {"type": "text", "dy": -47.5},
              "encoding": {
                "text": {
                  "type": "nominal",
                  "aggregate": "max",
                  "field": "region"
                }
              }
            }
          ],
          "data": {"name": "data-28e08d0b220f6e49ab2796358c9f02c2"},
          "transform": [{"filter": "(datum.region === 'м. Севастополь')"}]
        },
        {
          "layer": [
            {
              "mark": {"type": "bar", "color": "#2b8cbe", "width": 2.5},
              "encoding": {
                "color": {
                  "condition": {
                    "value": "#35978f90",
                    "test": "(datum.rate > 0)"
                  },
                  "value": "#c51b7d90"
                },
                "opacity": {
                  "condition": {"value": 1, "selection": "selector058"},
                  "value": 0.1
                },
                "tooltip": [
                  {
                    "type": "nominal",
                    "field": "rate",
                    "format": ".1f",
                    "title": "приріст/скорочення населення, на 1000 осіб"
                  },
                  {"type": "nominal", "field": "region", "title": "регіон"},
                  {"type": "nominal", "field": "year", "title": "рік"}
                ],
                "x": {
                  "type": "quantitative",
                  "axis": {
                    "format": "f",
                    "title": null,
                    "values": [1989, 2019]
                  },
                  "field": "year",
                  "scale": {"domain": [1988, 2020], "nice": false}
                },
                "y": {
                  "type": "quantitative",
                  "axis": {"title": null},
                  "field": "rate",
                  "scale": {"domain": [-13, 5]}
                }
              },
              "height": 85,
              "selection": {
                "selector058": {"type": "interval", "encodings": ["x"]}
              },
              "width": 100
            },
            {
              "mark": {"type": "text", "dy": -47.5},
              "encoding": {
                "text": {
                  "type": "nominal",
                  "aggregate": "max",
                  "field": "region"
                }
              }
            }
          ],
          "data": {"name": "data-28e08d0b220f6e49ab2796358c9f02c2"},
          "transform": [{"filter": "(datum.region === 'АР Крим')"}]
        },
        {
          "data": {"values": [{"x": 1989, "y": -10}, {"x": 2019, "y": -10}]},
          "mark": {"type": "bar", "opacity": 0, "width": 2.5},
          "encoding": {
            "x": {
              "type": "quantitative",
              "axis": {
                "domainOpacity": 0,
                "format": "f",
                "gridOpacity": 0,
                "labelOpacity": 0,
                "tickOpacity": 0,
                "title": null,
                "values": [1989, 2019]
              },
              "field": "x",
              "scale": {"domain": [1988, 2020], "nice": false}
            },
            "y": {
              "type": "quantitative",
              "axis": {
                "domainOpacity": 0,
                "grid": false,
                "labelOpacity": 0,
                "tickOpacity": 0,
                "title": null
              },
              "field": "y",
              "scale": {"domain": [-13, 5]}
            }
          },
          "height": 85,
          "width": 100
        },
        {
          "data": {"values": [{"x": 1989, "y": -10}, {"x": 2019, "y": -10}]},
          "mark": {"type": "bar", "opacity": 0, "width": 2.5},
          "encoding": {
            "x": {
              "type": "quantitative",
              "axis": {
                "domainOpacity": 0,
                "format": "f",
                "gridOpacity": 0,
                "labelOpacity": 0,
                "tickOpacity": 0,
                "title": null,
                "values": [1989, 2019]
              },
              "field": "x",
              "scale": {"domain": [1988, 2020], "nice": false}
            },
            "y": {
              "type": "quantitative",
              "axis": {
                "domainOpacity": 0,
                "grid": false,
                "labelOpacity": 0,
                "tickOpacity": 0,
                "title": null
              },
              "field": "y",
              "scale": {"domain": [-13, 5]}
            }
          },
          "height": 85,
          "width": 100
        }
      ],
      "data": {"values": [{"x": 1989, "y": -10}, {"x": 2019, "y": -10}]}
    }
  ],
  "background": "#f9f9f9",
  "data": {"values": [{"x": 1989, "y": -10}, {"x": 2019, "y": -10}]},
  "padding": 40,
  "title": {
    "text": "У всіх регіонах України смертність переважає народжуваність",
    "color": "#3E454F",
    "font": "Ubuntu Mono",
    "fontSize": 32,
    "subtitle": [
      "Природний приріст/скорочення населення в Україні, на 1000 осіб",
      " "
    ],
    "subtitleColor": "#3E454F",
    "subtitleFont": "Ubuntu Mono",
    "subtitleFontSize": 16
  },
  "$schema": "https://vega.github.io/schema/vega-lite/v4.8.1.json",
  "datasets": {
    "data-28e08d0b220f6e49ab2796358c9f02c2": [
      {"year": 1989, "region": "АР Крим", "rate": "3.9"},
      {"year": 1990, "region": "АР Крим", "rate": "2.5"},
      {"year": 1991, "region": "АР Крим", "rate": "0.9"},
      {"year": 1992, "region": "АР Крим", "rate": "-0.7"},
      {"year": 1993, "region": "АР Крим", "rate": "-2.7"},
      {"year": 1994, "region": "АР Крим", "rate": "-4.3"},
      {"year": 1995, "region": "АР Крим", "rate": "-5.8"},
      {"year": 1996, "region": "АР Крим", "rate": "-5.8"},
      {"year": 1997, "region": "АР Крим", "rate": "-5.1"},
      {"year": 1998, "region": "АР Крим", "rate": "-5.6"},
      {"year": 1999, "region": "АР Крим", "rate": "-5.5"},
      {"year": 2000, "region": "АР Крим", "rate": "-6.6"},
      {"year": 2001, "region": "АР Крим", "rate": "-6.7"},
      {"year": 2002, "region": "АР Крим", "rate": "-6.7"},
      {"year": 2003, "region": "АР Крим", "rate": "-6.5"},
      {"year": 2004, "region": "АР Крим", "rate": "-6.1"},
      {"year": 2005, "region": "АР Крим", "rate": "-6.7"},
      {"year": 2006, "region": "АР Крим", "rate": "-5.3"},
      {"year": 2007, "region": "АР Крим", "rate": "-4.8"},
      {"year": 2008, "region": "АР Крим", "rate": "-3.7"},
      {"year": 2009, "region": "АР Крим", "rate": "-2.5"},
      {"year": 2010, "region": "АР Крим", "rate": "-2.7"},
      {"year": 2011, "region": "АР Крим", "rate": "-2.1"},
      {"year": 2012, "region": "АР Крим", "rate": "-1.1"},
      {"year": 2013, "region": "АР Крим", "rate": "-1.5"},
      {"year": 1989, "region": "Вінницька", "rate": "-0.9"},
      {"year": 1990, "region": "Вінницька", "rate": "-2.1"},
      {"year": 1991, "region": "Вінницька", "rate": "-3.2"},
      {"year": 1992, "region": "Вінницька", "rate": "-3.7"},
      {"year": 1993, "region": "Вінницька", "rate": "-5.4"},
      {"year": 1994, "region": "Вінницька", "rate": "-6.2"},
      {"year": 1995, "region": "Вінницька", "rate": "-6.7"},
      {"year": 1996, "region": "Вінницька", "rate": "-7"},
      {"year": 1997, "region": "Вінницька", "rate": "-7"},
      {"year": 1998, "region": "Вінницька", "rate": "-7.3"},
      {"year": 1999, "region": "Вінницька", "rate": "-7.7"},
      {"year": 2000, "region": "Вінницька", "rate": "-8.4"},
      {"year": 2001, "region": "Вінницька", "rate": "-8.3"},
      {"year": 2002, "region": "Вінницька", "rate": "-8.1"},
      {"year": 2003, "region": "Вінницька", "rate": "-8.5"},
      {"year": 2004, "region": "Вінницька", "rate": "-7.9"},
      {"year": 2005, "region": "Вінницька", "rate": "-9.2"},
      {"year": 2006, "region": "Вінницька", "rate": "-7.7"},
      {"year": 2007, "region": "Вінницька", "rate": "-7.5"},
      {"year": 2008, "region": "Вінницька", "rate": "-6.3"},
      {"year": 2009, "region": "Вінницька", "rate": "-5.3"},
      {"year": 2010, "region": "Вінницька", "rate": "-5.5"},
      {"year": 2011, "region": "Вінницька", "rate": "-4.6"},
      {"year": 2012, "region": "Вінницька", "rate": "-4.2"},
      {"year": 2013, "region": "Вінницька", "rate": "-5"},
      {"year": 2014, "region": "Вінницька", "rate": "-4.9"},
      {"year": 2015, "region": "Вінницька", "rate": "-5.7"},
      {"year": 2016, "region": "Вінницька", "rate": "-5.8"},
      {"year": 2017, "region": "Вінницька", "rate": "-6.3"},
      {"year": 2018, "region": "Вінницька", "rate": "-7.4"},
      {"year": 2019, "region": "Вінницька", "rate": "-7.9"},
      {"year": 1989, "region": "Волинська", "rate": "5.2"},
      {"year": 1990, "region": "Волинська", "rate": "4"},
      {"year": 1991, "region": "Волинська", "rate": "2"},
      {"year": 1992, "region": "Волинська", "rate": "2.4"},
      {"year": 1993, "region": "Волинська", "rate": "1.4"},
      {"year": 1994, "region": "Волинська", "rate": "0.2"},
      {"year": 1995, "region": "Волинська", "rate": "-1.1"},
      {"year": 1996, "region": "Волинська", "rate": "-1"},
      {"year": 1997, "region": "Волинська", "rate": "-1.5"},
      {"year": 1998, "region": "Волинська", "rate": "-1.3"},
      {"year": 1999, "region": "Волинська", "rate": "-2.7"},
      {"year": 2000, "region": "Волинська", "rate": "-2.8"},
      {"year": 2001, "region": "Волинська", "rate": "-3.1"},
      {"year": 2002, "region": "Волинська", "rate": "-3"},
      {"year": 2003, "region": "Волинська", "rate": "-3.4"},
      {"year": 2004, "region": "Волинська", "rate": "-2.6"},
      {"year": 2005, "region": "Волинська", "rate": "-3.2"},
      {"year": 2006, "region": "Волинська", "rate": "-1.8"},
      {"year": 2007, "region": "Волинська", "rate": "-1.4"},
      {"year": 2008, "region": "Волинська", "rate": "-0.2"},
      {"year": 2009, "region": "Волинська", "rate": "0.7"},
      {"year": 2010, "region": "Волинська", "rate": "0.4"},
      {"year": 2011, "region": "Волинська", "rate": "0.8"},
      {"year": 2012, "region": "Волинська", "rate": "1.6"},
      {"year": 2013, "region": "Волинська", "rate": "1"},
      {"year": 2014, "region": "Волинська", "rate": "0.9"},
      {"year": 2015, "region": "Волинська", "rate": "-0.4"},
      {"year": 2016, "region": "Волинська", "rate": "-0.5"},
      {"year": 2017, "region": "Волинська", "rate": "-1.6"},
      {"year": 2018, "region": "Волинська", "rate": "-2.3"},
      {"year": 2019, "region": "Волинська", "rate": "-2.8"},
      {"year": 1989, "region": "Дніпропетровська", "rate": "1.7"},
      {"year": 1990, "region": "Дніпропетровська", "rate": "0.5"},
      {"year": 1991, "region": "Дніпропетровська", "rate": "-0.8"},
      {"year": 1992, "region": "Дніпропетровська", "rate": "-2.7"},
      {"year": 1993, "region": "Дніпропетровська", "rate": "-4.4"},
      {"year": 1994, "region": "Дніпропетровська", "rate": "-5.8"},
      {"year": 1995, "region": "Дніпропетровська", "rate": "-7.2"},
      {"year": 1996, "region": "Дніпропетровська", "rate": "-7.8"},
      {"year": 1997, "region": "Дніпропетровська", "rate": "-7.9"},
      {"year": 1998, "region": "Дніпропетровська", "rate": "-7.4"},
      {"year": 1999, "region": "Дніпропетровська", "rate": "-8.6"},
      {"year": 2000, "region": "Дніпропетровська", "rate": "-9.2"},
      {"year": 2001, "region": "Дніпропетровська", "rate": "-8.8"},
      {"year": 2002, "region": "Дніпропетровська", "rate": "-8.6"},
      {"year": 2003, "region": "Дніпропетровська", "rate": "-8.4"},
      {"year": 2004, "region": "Дніпропетровська", "rate": "-8.1"},
      {"year": 2005, "region": "Дніпропетровська", "rate": "-9"},
      {"year": 2006, "region": "Дніпропетровська", "rate": "-7.5"},
      {"year": 2007, "region": "Дніпропетровська", "rate": "-7.4"},
      {"year": 2008, "region": "Дніпропетровська", "rate": "-6.7"},
      {"year": 2009, "region": "Дніпропетровська", "rate": "-5.2"},
      {"year": 2010, "region": "Дніпропетровська", "rate": "-5.7"},
      {"year": 2011, "region": "Дніпропетровська", "rate": "-4.8"},
      {"year": 2012, "region": "Дніпропетровська", "rate": "-4.3"},
      {"year": 2013, "region": "Дніпропетровська", "rate": "-4.6"},
      {"year": 2014, "region": "Дніпропетровська", "rate": "-5"},
      {"year": 2015, "region": "Дніпропетровська", "rate": "-6.3"},
      {"year": 2016, "region": "Дніпропетровська", "rate": "-6.8"},
      {"year": 2017, "region": "Дніпропетровська", "rate": "-7.3"},
      {"year": 2018, "region": "Дніпропетровська", "rate": "-8.5"},
      {"year": 2019, "region": "Дніпропетровська", "rate": "-8.9"},
      {"year": 1989, "region": "Донецька", "rate": "0.1"},
      {"year": 1990, "region": "Донецька", "rate": "-1.2"},
      {"year": 1991, "region": "Донецька", "rate": "-2.5"},
      {"year": 1992, "region": "Донецька", "rate": "-4.3"},
      {"year": 1993, "region": "Донецька", "rate": "-6.2"},
      {"year": 1994, "region": "Донецька", "rate": "-7.5"},
      {"year": 1995, "region": "Донецька", "rate": "-9.7"},
      {"year": 1996, "region": "Донецька", "rate": "-9.8"},
      {"year": 1997, "region": "Донецька", "rate": "-9.6"},
      {"year": 1998, "region": "Донецька", "rate": "-8.7"},
      {"year": 1999, "region": "Донецька", "rate": "-9.9"},
      {"year": 2000, "region": "Донецька", "rate": "-10.9"},
      {"year": 2001, "region": "Донецька", "rate": "-10.3"},
      {"year": 2002, "region": "Донецька", "rate": "-10.6"},
      {"year": 2003, "region": "Донецька", "rate": "-10.3"},
      {"year": 2004, "region": "Донецька", "rate": "-9.9"},
      {"year": 2005, "region": "Донецька", "rate": "-10.3"},
      {"year": 2006, "region": "Донецька", "rate": "-9.2"},
      {"year": 2007, "region": "Донецька", "rate": "-9.1"},
      {"year": 2008, "region": "Донецька", "rate": "-8.3"},
      {"year": 2009, "region": "Донецька", "rate": "-7.1"},
      {"year": 2010, "region": "Донецька", "rate": "-7.3"},
      {"year": 2011, "region": "Донецька", "rate": "-6.7"},
      {"year": 2012, "region": "Донецька", "rate": "-6.3"},
      {"year": 2013, "region": "Донецька", "rate": "-6.5"},
      {"year": 1989, "region": "Житомирська", "rate": "1.5"},
      {"year": 1990, "region": "Житомирська", "rate": "-0.3"},
      {"year": 1991, "region": "Житомирська", "rate": "-1"},
      {"year": 1992, "region": "Житомирська", "rate": "-1.7"},
      {"year": 1993, "region": "Житомирська", "rate": "-2.8"},
      {"year": 1994, "region": "Житомирська", "rate": "-4"},
      {"year": 1995, "region": "Житомирська", "rate": "-4.9"},
      {"year": 1996, "region": "Житомирська", "rate": "-5.4"},
      {"year": 1997, "region": "Житомирська", "rate": "-5.9"},
      {"year": 1998, "region": "Житомирська", "rate": "-5.9"},
      {"year": 1999, "region": "Житомирська", "rate": "-7.3"},
      {"year": 2000, "region": "Житомирська", "rate": "-7.5"},
      {"year": 2001, "region": "Житомирська", "rate": "-8.5"},
      {"year": 2002, "region": "Житомирська", "rate": "-8.2"},
      {"year": 2003, "region": "Житомирська", "rate": "-8.5"},
      {"year": 2004, "region": "Житомирська", "rate": "-8.5"},
      {"year": 2005, "region": "Житомирська", "rate": "-9"},
      {"year": 2006, "region": "Житомирська", "rate": "-8"},
      {"year": 2007, "region": "Житомирська", "rate": "-7.6"},
      {"year": 2008, "region": "Житомирська", "rate": "-7"},
      {"year": 2009, "region": "Житомирська", "rate": "-5.3"},
      {"year": 2010, "region": "Житомирська", "rate": "-5.2"},
      {"year": 2011, "region": "Житомирська", "rate": "-4.1"},
      {"year": 2012, "region": "Житомирська", "rate": "-4.1"},
      {"year": 2013, "region": "Житомирська", "rate": "-4.6"},
      {"year": 2014, "region": "Житомирська", "rate": "-4.8"},
      {"year": 2015, "region": "Житомирська", "rate": "-5.7"},
      {"year": 2016, "region": "Житомирська", "rate": "-5.8"},
      {"year": 2017, "region": "Житомирська", "rate": "-6.8"},
      {"year": 2018, "region": "Житомирська", "rate": "-7.8"},
      {"year": 2019, "region": "Житомирська", "rate": "-8.5"},
      {"year": 1989, "region": "Закарпатська", "rate": "8"},
      {"year": 1990, "region": "Закарпатська", "rate": "7.6"},
      {"year": 1991, "region": "Закарпатська", "rate": "6.4"},
      {"year": 1992, "region": "Закарпатська", "rate": "5.8"},
      {"year": 1993, "region": "Закарпатська", "rate": "4.4"},
      {"year": 1994, "region": "Закарпатська", "rate": "2.9"},
      {"year": 1995, "region": "Закарпатська", "rate": "1.8"},
      {"year": 1996, "region": "Закарпатська", "rate": "1.7"},
      {"year": 1997, "region": "Закарпатська", "rate": "1.4"},
      {"year": 1998, "region": "Закарпатська", "rate": "1.2"},
      {"year": 1999, "region": "Закарпатська", "rate": "-0.3"},
      {"year": 2000, "region": "Закарпатська", "rate": "0.4"},
      {"year": 2001, "region": "Закарпатська", "rate": "-0.4"},
      {"year": 2002, "region": "Закарпатська", "rate": "-0.6"},
      {"year": 2003, "region": "Закарпатська", "rate": "-0.1"},
      {"year": 2004, "region": "Закарпатська", "rate": "0"},
      {"year": 2005, "region": "Закарпатська", "rate": "-0.6"},
      {"year": 2006, "region": "Закарпатська", "rate": "0.5"},
      {"year": 2007, "region": "Закарпатська", "rate": "0.2"},
      {"year": 2008, "region": "Закарпатська", "rate": "1.7"},
      {"year": 2009, "region": "Закарпатська", "rate": "2.1"},
      {"year": 2010, "region": "Закарпатська", "rate": "2.7"},
      {"year": 2011, "region": "Закарпатська", "rate": "3.1"},
      {"year": 2012, "region": "Закарпатська", "rate": "3.3"},
      {"year": 2013, "region": "Закарпатська", "rate": "2.9"},
      {"year": 2014, "region": "Закарпатська", "rate": "2.8"},
      {"year": 2015, "region": "Закарпатська", "rate": "1"},
      {"year": 2016, "region": "Закарпатська", "rate": "0.5"},
      {"year": 2017, "region": "Закарпатська", "rate": "-0.4"},
      {"year": 2018, "region": "Закарпатська", "rate": "-1.2"},
      {"year": 2019, "region": "Закарпатська", "rate": "-2"},
      {"year": 1989, "region": "Запорізька", "rate": "2"},
      {"year": 1990, "region": "Запорізька", "rate": "0.5"},
      {"year": 1991, "region": "Запорізька", "rate": "-0.7"},
      {"year": 1992, "region": "Запорізька", "rate": "-2.5"},
      {"year": 1993, "region": "Запорізька", "rate": "-4.1"},
      {"year": 1994, "region": "Запорізька", "rate": "-5.2"},
      {"year": 1995, "region": "Запорізька", "rate": "-6.9"},
      {"year": 1996, "region": "Запорізька", "rate": "-7"},
      {"year": 1997, "region": "Запорізька", "rate": "-6.9"},
      {"year": 1998, "region": "Запорізька", "rate": "-7.2"},
      {"year": 1999, "region": "Запорізька", "rate": "-8.1"},
      {"year": 2000, "region": "Запорізька", "rate": "-8.7"},
      {"year": 2001, "region": "Запорізька", "rate": "-8.6"},
      {"year": 2002, "region": "Запорізька", "rate": "-8.4"},
      {"year": 2003, "region": "Запорізька", "rate": "-8.4"},
      {"year": 2004, "region": "Запорізька", "rate": "-7.8"},
      {"year": 2005, "region": "Запорізька", "rate": "-8"},
      {"year": 2006, "region": "Запорізька", "rate": "-7.2"},
      {"year": 2007, "region": "Запорізька", "rate": "-7.1"},
      {"year": 2008, "region": "Запорізька", "rate": "-6.2"},
      {"year": 2009, "region": "Запорізька", "rate": "-5.4"},
      {"year": 2010, "region": "Запорізька", "rate": "-5.8"},
      {"year": 2011, "region": "Запорізька", "rate": "-4.9"},
      {"year": 2012, "region": "Запорізька", "rate": "-4.2"},
      {"year": 2013, "region": "Запорізька", "rate": "-4.7"},
      {"year": 2014, "region": "Запорізька", "rate": "-5.1"},
      {"year": 2015, "region": "Запорізька", "rate": "-6.5"},
      {"year": 2016, "region": "Запорізька", "rate": "-7.1"},
      {"year": 2017, "region": "Запорізька", "rate": "-7.8"},
      {"year": 2018, "region": "Запорізька", "rate": "-8.9"},
      {"year": 2019, "region": "Запорізька", "rate": "-9.6"},
      {"year": 1989, "region": "Івано-Франківська", "rate": "5.4"},
      {"year": 1990, "region": "Івано-Франківська", "rate": "5.1"},
      {"year": 1991, "region": "Івано-Франківська", "rate": "3.7"},
      {"year": 1992, "region": "Івано-Франківська", "rate": "3.1"},
      {"year": 1993, "region": "Івано-Франківська", "rate": "2.4"},
      {"year": 1994, "region": "Івано-Франківська", "rate": "1.5"},
      {"year": 1995, "region": "Івано-Франківська", "rate": "0.8"},
      {"year": 1996, "region": "Івано-Франківська", "rate": "0.3"},
      {"year": 1997, "region": "Івано-Франківська", "rate": "-0.3"},
      {"year": 1998, "region": "Івано-Франківська", "rate": "-0.5"},
      {"year": 1999, "region": "Івано-Франківська", "rate": "-2"},
      {"year": 2000, "region": "Івано-Франківська", "rate": "-1.8"},
      {"year": 2001, "region": "Івано-Франківська", "rate": "-2.7"},
      {"year": 2002, "region": "Івано-Франківська", "rate": "-2.8"},
      {"year": 2003, "region": "Івано-Франківська", "rate": "-3.2"},
      {"year": 2004, "region": "Івано-Франківська", "rate": "-2.2"},
      {"year": 2005, "region": "Івано-Франківська", "rate": "-2.7"},
      {"year": 2006, "region": "Івано-Франківська", "rate": "-1.9"},
      {"year": 2007, "region": "Івано-Франківська", "rate": "-1.9"},
      {"year": 2008, "region": "Івано-Франківська", "rate": "-1"},
      {"year": 2009, "region": "Івано-Франківська", "rate": "-0.1"},
      {"year": 2010, "region": "Івано-Франківська", "rate": "-0.9"},
      {"year": 2011, "region": "Івано-Франківська", "rate": "-0.1"},
      {"year": 2012, "region": "Івано-Франківська", "rate": "0.2"},
      {"year": 2013, "region": "Івано-Франківська", "rate": "-0.5"},
      {"year": 2014, "region": "Івано-Франківська", "rate": "-0.6"},
      {"year": 2015, "region": "Івано-Франківська", "rate": "-1.5"},
      {"year": 2016, "region": "Івано-Франківська", "rate": "-1.9"},
      {"year": 2017, "region": "Івано-Франківська", "rate": "-2.9"},
      {"year": 2018, "region": "Івано-Франківська", "rate": "-3.5"},
      {"year": 2019, "region": "Івано-Франківська", "rate": "-4"},
      {"year": 1989, "region": "Київська", "rate": "1.3"},
      {"year": 1990, "region": "Київська", "rate": "-0.8"},
      {"year": 1991, "region": "Київська", "rate": "-2.4"},
      {"year": 1992, "region": "Київська", "rate": "-3.4"},
      {"year": 1993, "region": "Київська", "rate": "-5.1"},
      {"year": 1994, "region": "Київська", "rate": "-5.9"},
      {"year": 1995, "region": "Київська", "rate": "-6.9"},
      {"year": 1996, "region": "Київська", "rate": "-6.9"},
      {"year": 1997, "region": "Київська", "rate": "-7.2"},
      {"year": 1998, "region": "Київська", "rate": "-7.6"},
      {"year": 1999, "region": "Київська", "rate": "-8.5"},
      {"year": 2000, "region": "Київська", "rate": "-8.9"},
      {"year": 2001, "region": "Київська", "rate": "-9.4"},
      {"year": 2002, "region": "Київська", "rate": "-9"},
      {"year": 2003, "region": "Київська", "rate": "-8.9"},
      {"year": 2004, "region": "Київська", "rate": "-8.6"},
      {"year": 2005, "region": "Київська", "rate": "-9"},
      {"year": 2006, "region": "Київська", "rate": "-8"},
      {"year": 2007, "region": "Київська", "rate": "-7.6"},
      {"year": 2008, "region": "Київська", "rate": "-6.2"},
      {"year": 2009, "region": "Київська", "rate": "-4.7"},
      {"year": 2010, "region": "Київська", "rate": "-5"},
      {"year": 2011, "region": "Київська", "rate": "-3.9"},
      {"year": 2012, "region": "Київська", "rate": "-3.6"},
      {"year": 2013, "region": "Київська", "rate": "-3.9"},
      {"year": 2014, "region": "Київська", "rate": "-4.3"},
      {"year": 2015, "region": "Київська", "rate": "-4.7"},
      {"year": 2016, "region": "Київська", "rate": "-5.3"},
      {"year": 2017, "region": "Київська", "rate": "-6.3"},
      {"year": 2018, "region": "Київська", "rate": "-7.6"},
      {"year": 2019, "region": "Київська", "rate": "-8.1"},
      {"year": 1989, "region": "Кіровоградська", "rate": "-1.1"},
      {"year": 1990, "region": "Кіровоградська", "rate": "-1.9"},
      {"year": 1991, "region": "Кіровоградська", "rate": "-2.8"},
      {"year": 1992, "region": "Кіровоградська", "rate": "-3.8"},
      {"year": 1993, "region": "Кіровоградська", "rate": "-5.6"},
      {"year": 1994, "region": "Кіровоградська", "rate": "-6.4"},
      {"year": 1995, "region": "Кіровоградська", "rate": "-7.7"},
      {"year": 1996, "region": "Кіровоградська", "rate": "-8"},
      {"year": 1997, "region": "Кіровоградська", "rate": "-8.5"},
      {"year": 1998, "region": "Кіровоградська", "rate": "-8.3"},
      {"year": 1999, "region": "Кіровоградська", "rate": "-9.7"},
      {"year": 2000, "region": "Кіровоградська", "rate": "-10.1"},
      {"year": 2001, "region": "Кіровоградська", "rate": "-9.8"},
      {"year": 2002, "region": "Кіровоградська", "rate": "-10"},
      {"year": 2003, "region": "Кіровоградська", "rate": "-9.9"},
      {"year": 2004, "region": "Кіровоградська", "rate": "-9.7"},
      {"year": 2005, "region": "Кіровоградська", "rate": "-10.5"},
      {"year": 2006, "region": "Кіровоградська", "rate": "-8.8"},
      {"year": 2007, "region": "Кіровоградська", "rate": "-8.8"},
      {"year": 2008, "region": "Кіровоградська", "rate": "-8.4"},
      {"year": 2009, "region": "Кіровоградська", "rate": "-6.7"},
      {"year": 2010, "region": "Кіровоградська", "rate": "-7"},
      {"year": 2011, "region": "Кіровоградська", "rate": "-6.1"},
      {"year": 2012, "region": "Кіровоградська", "rate": "-5.5"},
      {"year": 2013, "region": "Кіровоградська", "rate": "-6"},
      {"year": 2014, "region": "Кіровоградська", "rate": "-6.3"},
      {"year": 2015, "region": "Кіровоградська", "rate": "-6.9"},
      {"year": 2016, "region": "Кіровоградська", "rate": "-7.7"},
      {"year": 2017, "region": "Кіровоградська", "rate": "-8.1"},
      {"year": 2018, "region": "Кіровоградська", "rate": "-8.9"},
      {"year": 2019, "region": "Кіровоградська", "rate": "-9.6"},
      {"year": 1989, "region": "Луганська", "rate": "0.6"},
      {"year": 1990, "region": "Луганська", "rate": "-0.6"},
      {"year": 1991, "region": "Луганська", "rate": "-1.7"},
      {"year": 1992, "region": "Луганська", "rate": "-4"},
      {"year": 1993, "region": "Луганська", "rate": "-5.9"},
      {"year": 1994, "region": "Луганська", "rate": "-7.5"},
      {"year": 1995, "region": "Луганська", "rate": "-9"},
      {"year": 1996, "region": "Луганська", "rate": "-10.1"},
      {"year": 1997, "region": "Луганська", "rate": "-10"},
      {"year": 1998, "region": "Луганська", "rate": "-9"},
      {"year": 1999, "region": "Луганська", "rate": "-10.7"},
      {"year": 2000, "region": "Луганська", "rate": "-11.4"},
      {"year": 2001, "region": "Луганська", "rate": "-10.9"},
      {"year": 2002, "region": "Луганська", "rate": "-10.6"},
      {"year": 2003, "region": "Луганська", "rate": "-10.7"},
      {"year": 2004, "region": "Луганська", "rate": "-10.6"},
      {"year": 2005, "region": "Луганська", "rate": "-10.9"},
      {"year": 2006, "region": "Луганська", "rate": "-9.5"},
      {"year": 2007, "region": "Луганська", "rate": "-9.1"},
      {"year": 2008, "region": "Луганська", "rate": "-8.5"},
      {"year": 2009, "region": "Луганська", "rate": "-7.6"},
      {"year": 2010, "region": "Луганська", "rate": "-7.8"},
      {"year": 2011, "region": "Луганська", "rate": "-7"},
      {"year": 2012, "region": "Луганська", "rate": "-6.4"},
      {"year": 2013, "region": "Луганська", "rate": "-6.8"},
      {"year": 1989, "region": "Львівська", "rate": "4.7"},
      {"year": 1990, "region": "Львівська", "rate": "3.6"},
      {"year": 1991, "region": "Львівська", "rate": "2.4"},
      {"year": 1992, "region": "Львівська", "rate": "2"},
      {"year": 1993, "region": "Львівська", "rate": "1.1"},
      {"year": 1994, "region": "Львівська", "rate": "0"},
      {"year": 1995, "region": "Львівська", "rate": "-0.8"},
      {"year": 1996, "region": "Львівська", "rate": "-1.1"},
      {"year": 1997, "region": "Львівська", "rate": "-1.9"},
      {"year": 1998, "region": "Львівська", "rate": "-1.5"},
      {"year": 1999, "region": "Львівська", "rate": "-3.3"},
      {"year": 2000, "region": "Львівська", "rate": "-3.3"},
      {"year": 2001, "region": "Львівська", "rate": "-3.7"},
      {"year": 2002, "region": "Львівська", "rate": "-3.8"},
      {"year": 2003, "region": "Львівська", "rate": "-3.8"},
      {"year": 2004, "region": "Львівська", "rate": "-3"},
      {"year": 2005, "region": "Львівська", "rate": "-3.6"},
      {"year": 2006, "region": "Львівська", "rate": "-2.9"},
      {"year": 2007, "region": "Львівська", "rate": "-2.9"},
      {"year": 2008, "region": "Львівська", "rate": "-2.4"},
      {"year": 2009, "region": "Львівська", "rate": "-1.1"},
      {"year": 2010, "region": "Львівська", "rate": "-1.6"},
      {"year": 2011, "region": "Львівська", "rate": "-0.9"},
      {"year": 2012, "region": "Львівська", "rate": "-0.6"},
      {"year": 2013, "region": "Львівська", "rate": "-0.9"},
      {"year": 2014, "region": "Львівська", "rate": "-0.9"},
      {"year": 2015, "region": "Львівська", "rate": "-2"},
      {"year": 2016, "region": "Львівська", "rate": "-2"},
      {"year": 2017, "region": "Львівська", "rate": "-2.8"},
      {"year": 2018, "region": "Львівська", "rate": "-3.8"},
      {"year": 2019, "region": "Львівська", "rate": "-4.3"},
      {"year": 1989, "region": "Миколаївська", "rate": "2.5"},
      {"year": 1990, "region": "Миколаївська", "rate": "1.7"},
      {"year": 1991, "region": "Миколаївська", "rate": "0.2"},
      {"year": 1992, "region": "Миколаївська", "rate": "-0.8"},
      {"year": 1993, "region": "Миколаївська", "rate": "-2.4"},
      {"year": 1994, "region": "Миколаївська", "rate": "-3.7"},
      {"year": 1995, "region": "Миколаївська", "rate": "-4.9"},
      {"year": 1996, "region": "Миколаївська", "rate": "-5.5"},
      {"year": 1997, "region": "Миколаївська", "rate": "-5.6"},
      {"year": 1998, "region": "Миколаївська", "rate": "-6.4"},
      {"year": 1999, "region": "Миколаївська", "rate": "-7"},
      {"year": 2000, "region": "Миколаївська", "rate": "-7.7"},
      {"year": 2001, "region": "Миколаївська", "rate": "-7.5"},
      {"year": 2002, "region": "Миколаївська", "rate": "-8.1"},
      {"year": 2003, "region": "Миколаївська", "rate": "-7.6"},
      {"year": 2004, "region": "Миколаївська", "rate": "-7.3"},
      {"year": 2005, "region": "Миколаївська", "rate": "-7.7"},
      {"year": 2006, "region": "Миколаївська", "rate": "-6.2"},
      {"year": 2007, "region": "Миколаївська", "rate": "-6.4"},
      {"year": 2008, "region": "Миколаївська", "rate": "-5.4"},
      {"year": 2009, "region": "Миколаївська", "rate": "-4.7"},
      {"year": 2010, "region": "Миколаївська", "rate": "-5"},
      {"year": 2011, "region": "Миколаївська", "rate": "-3.8"},
      {"year": 2012, "region": "Миколаївська", "rate": "-3.2"},
      {"year": 2013, "region": "Миколаївська", "rate": "-3.7"},
      {"year": 2014, "region": "Миколаївська", "rate": "-4"},
      {"year": 2015, "region": "Миколаївська", "rate": "-5.5"},
      {"year": 2016, "region": "Миколаївська", "rate": "-5.8"},
      {"year": 2017, "region": "Миколаївська", "rate": "-6"},
      {"year": 2018, "region": "Миколаївська", "rate": "-7.1"},
      {"year": 2019, "region": "Миколаївська", "rate": "-8.1"},
      {"year": 1989, "region": "Одеська", "rate": "1.4"},
      {"year": 1990, "region": "Одеська", "rate": "0.2"},
      {"year": 1991, "region": "Одеська", "rate": "-1.2"},
      {"year": 1992, "region": "Одеська", "rate": "-1.9"},
      {"year": 1993, "region": "Одеська", "rate": "-3.2"},
      {"year": 1994, "region": "Одеська", "rate": "-4.7"},
      {"year": 1995, "region": "Одеська", "rate": "-6.1"},
      {"year": 1996, "region": "Одеська", "rate": "-6.1"},
      {"year": 1997, "region": "Одеська", "rate": "-5.8"},
      {"year": 1998, "region": "Одеська", "rate": "-5.8"},
      {"year": 1999, "region": "Одеська", "rate": "-6.4"},
      {"year": 2000, "region": "Одеська", "rate": "-7.2"},
      {"year": 2001, "region": "Одеська", "rate": "-7"},
      {"year": 2002, "region": "Одеська", "rate": "-7.2"},
      {"year": 2003, "region": "Одеська", "rate": "-7"},
      {"year": 2004, "region": "Одеська", "rate": "-6.4"},
      {"year": 2005, "region": "Одеська", "rate": "-6.7"},
      {"year": 2006, "region": "Одеська", "rate": "-5.8"},
      {"year": 2007, "region": "Одеська", "rate": "-5"},
      {"year": 2008, "region": "Одеська", "rate": "-3.9"},
      {"year": 2009, "region": "Одеська", "rate": "-2.9"},
      {"year": 2010, "region": "Одеська", "rate": "-3.1"},
      {"year": 2011, "region": "Одеська", "rate": "-1.9"},
      {"year": 2012, "region": "Одеська", "rate": "-1.4"},
      {"year": 2013, "region": "Одеська", "rate": "-1.9"},
      {"year": 2014, "region": "Одеська", "rate": "-2"},
      {"year": 2015, "region": "Одеська", "rate": "-2.9"},
      {"year": 2016, "region": "Одеська", "rate": "-3"},
      {"year": 2017, "region": "Одеська", "rate": "-3.4"},
      {"year": 2018, "region": "Одеська", "rate": "-4.4"},
      {"year": 2019, "region": "Одеська", "rate": "-5.1"},
      {"year": 1989, "region": "Полтавська", "rate": "-1.3"},
      {"year": 1990, "region": "Полтавська", "rate": "-2.5"},
      {"year": 1991, "region": "Полтавська", "rate": "-3.4"},
      {"year": 1992, "region": "Полтавська", "rate": "-4.9"},
      {"year": 1993, "region": "Полтавська", "rate": "-6.7"},
      {"year": 1994, "region": "Полтавська", "rate": "-7.6"},
      {"year": 1995, "region": "Полтавська", "rate": "-8.1"},
      {"year": 1996, "region": "Полтавська", "rate": "-8.3"},
      {"year": 1997, "region": "Полтавська", "rate": "-9.1"},
      {"year": 1998, "region": "Полтавська", "rate": "-8.4"},
      {"year": 1999, "region": "Полтавська", "rate": "-9.9"},
      {"year": 2000, "region": "Полтавська", "rate": "-10.9"},
      {"year": 2001, "region": "Полтавська", "rate": "-11.1"},
      {"year": 2002, "region": "Полтавська", "rate": "-11"},
      {"year": 2003, "region": "Полтавська", "rate": "-11.2"},
      {"year": 2004, "region": "Полтавська", "rate": "-10.9"},
      {"year": 2005, "region": "Полтавська", "rate": "-11.2"},
      {"year": 2006, "region": "Полтавська", "rate": "-9.3"},
      {"year": 2007, "region": "Полтавська", "rate": "-9.8"},
      {"year": 2008, "region": "Полтавська", "rate": "-8.7"},
      {"year": 2009, "region": "Полтавська", "rate": "-8"},
      {"year": 2010, "region": "Полтавська", "rate": "-8"},
      {"year": 2011, "region": "Полтавська", "rate": "-6.8"},
      {"year": 2012, "region": "Полтавська", "rate": "-6.6"},
      {"year": 2013, "region": "Полтавська", "rate": "-6.8"},
      {"year": 2014, "region": "Полтавська", "rate": "-7.1"},
      {"year": 2015, "region": "Полтавська", "rate": "-7.7"},
      {"year": 2016, "region": "Полтавська", "rate": "-8.4"},
      {"year": 2017, "region": "Полтавська", "rate": "-8.7"},
      {"year": 2018, "region": "Полтавська", "rate": "-9.6"},
      {"year": 2019, "region": "Полтавська", "rate": "-9.9"},
      {"year": 1989, "region": "Рівненська", "rate": "6.6"},
      {"year": 1990, "region": "Рівненська", "rate": "5.2"},
      {"year": 1991, "region": "Рівненська", "rate": "3.9"},
      {"year": 1992, "region": "Рівненська", "rate": "3.5"},
      {"year": 1993, "region": "Рівненська", "rate": "3.1"},
      {"year": 1994, "region": "Рівненська", "rate": "2.1"},
      {"year": 1995, "region": "Рівненська", "rate": "1"},
      {"year": 1996, "region": "Рівненська", "rate": "0.4"},
      {"year": 1997, "region": "Рівненська", "rate": "0.7"},
      {"year": 1998, "region": "Рівненська", "rate": "0.4"},
      {"year": 1999, "region": "Рівненська", "rate": "-0.7"},
      {"year": 2000, "region": "Рівненська", "rate": "-1.3"},
      {"year": 2001, "region": "Рівненська", "rate": "-1.6"},
      {"year": 2002, "region": "Рівненська", "rate": "-1.8"},
      {"year": 2003, "region": "Рівненська", "rate": "-1.7"},
      {"year": 2004, "region": "Рівненська", "rate": "-1.1"},
      {"year": 2005, "region": "Рівненська", "rate": "-1.7"},
      {"year": 2006, "region": "Рівненська", "rate": "-0.3"},
      {"year": 2007, "region": "Рівненська", "rate": "-0.3"},
      {"year": 2008, "region": "Рівненська", "rate": "0.7"},
      {"year": 2009, "region": "Рівненська", "rate": "1.8"},
      {"year": 2010, "region": "Рівненська", "rate": "1.8"},
      {"year": 2011, "region": "Рівненська", "rate": "3"},
      {"year": 2012, "region": "Рівненська", "rate": "3.5"},
      {"year": 2013, "region": "Рівненська", "rate": "2.5"},
      {"year": 2014, "region": "Рівненська", "rate": "2.1"},
      {"year": 2015, "region": "Рівненська", "rate": "1.2"},
      {"year": 2016, "region": "Рівненська", "rate": "1"},
      {"year": 2017, "region": "Рівненська", "rate": "-0.2"},
      {"year": 2018, "region": "Рівненська", "rate": "-1"},
      {"year": 2019, "region": "Рівненська", "rate": "-1.6"},
      {"year": 1989, "region": "Сумська", "rate": "-1.7"},
      {"year": 1990, "region": "Сумська", "rate": "-3.1"},
      {"year": 1991, "region": "Сумська", "rate": "-4"},
      {"year": 1992, "region": "Сумська", "rate": "-5.3"},
      {"year": 1993, "region": "Сумська", "rate": "-7.5"},
      {"year": 1994, "region": "Сумська", "rate": "-8.1"},
      {"year": 1995, "region": "Сумська", "rate": "-8.2"},
      {"year": 1996, "region": "Сумська", "rate": "-9.1"},
      {"year": 1997, "region": "Сумська", "rate": "-9.4"},
      {"year": 1998, "region": "Сумська", "rate": "-9.2"},
      {"year": 1999, "region": "Сумська", "rate": "-10.3"},
      {"year": 2000, "region": "Сумська", "rate": "-11.1"},
      {"year": 2001, "region": "Сумська", "rate": "-11.2"},
      {"year": 2002, "region": "Сумська", "rate": "-11.3"},
      {"year": 2003, "region": "Сумська", "rate": "-11.3"},
      {"year": 2004, "region": "Сумська", "rate": "-11.5"},
      {"year": 2005, "region": "Сумська", "rate": "-12.1"},
      {"year": 2006, "region": "Сумська", "rate": "-10.1"},
      {"year": 2007, "region": "Сумська", "rate": "-10.2"},
      {"year": 2008, "region": "Сумська", "rate": "-9.6"},
      {"year": 2009, "region": "Сумська", "rate": "-8.9"},
      {"year": 2010, "region": "Сумська", "rate": "-8.4"},
      {"year": 2011, "region": "Сумська", "rate": "-7.2"},
      {"year": 2012, "region": "Сумська", "rate": "-6.9"},
      {"year": 2013, "region": "Сумська", "rate": "-7.8"},
      {"year": 2014, "region": "Сумська", "rate": "-8"},
      {"year": 2015, "region": "Сумська", "rate": "-8.2"},
      {"year": 2016, "region": "Сумська", "rate": "-8.9"},
      {"year": 2017, "region": "Сумська", "rate": "-8.7"},
      {"year": 2018, "region": "Сумська", "rate": "-9.9"},
      {"year": 2019, "region": "Сумська", "rate": "-10.2"},
      {"year": 1989, "region": "Тернопільська", "rate": "2"},
      {"year": 1990, "region": "Тернопільська", "rate": "1.4"},
      {"year": 1991, "region": "Тернопільська", "rate": "0.4"},
      {"year": 1992, "region": "Тернопільська", "rate": "-0.1"},
      {"year": 1993, "region": "Тернопільська", "rate": "-1.2"},
      {"year": 1994, "region": "Тернопільська", "rate": "-1.7"},
      {"year": 1995, "region": "Тернопільська", "rate": "-1.7"},
      {"year": 1996, "region": "Тернопільська", "rate": "-2.4"},
      {"year": 1997, "region": "Тернопільська", "rate": "-3.3"},
      {"year": 1998, "region": "Тернопільська", "rate": "-3"},
      {"year": 1999, "region": "Тернопільська", "rate": "-4.7"},
      {"year": 2000, "region": "Тернопільська", "rate": "-4.4"},
      {"year": 2001, "region": "Тернопільська", "rate": "-5.4"},
      {"year": 2002, "region": "Тернопільська", "rate": "-5.2"},
      {"year": 2003, "region": "Тернопільська", "rate": "-5.6"},
      {"year": 2004, "region": "Тернопільська", "rate": "-4.5"},
      {"year": 2005, "region": "Тернопільська", "rate": "-5.2"},
      {"year": 2006, "region": "Тернопільська", "rate": "-4.4"},
      {"year": 2007, "region": "Тернопільська", "rate": "-4.5"},
      {"year": 2008, "region": "Тернопільська", "rate": "-3.5"},
      {"year": 2009, "region": "Тернопільська", "rate": "-2.9"},
      {"year": 2010, "region": "Тернопільська", "rate": "-3.5"},
      {"year": 2011, "region": "Тернопільська", "rate": "-2.6"},
      {"year": 2012, "region": "Тернопільська", "rate": "-2.5"},
      {"year": 2013, "region": "Тернопільська", "rate": "-2.7"},
      {"year": 2014, "region": "Тернопільська", "rate": "-3.3"},
      {"year": 2015, "region": "Тернопільська", "rate": "-4.2"},
      {"year": 2016, "region": "Тернопільська", "rate": "-4.7"},
      {"year": 2017, "region": "Тернопільська", "rate": "-5.2"},
      {"year": 2018, "region": "Тернопільська", "rate": "-6.2"},
      {"year": 2019, "region": "Тернопільська", "rate": "-6.6"},
      {"year": 1989, "region": "Харківська", "rate": "-0.1"},
      {"year": 1990, "region": "Харківська", "rate": "-1.4"},
      {"year": 1991, "region": "Харківська", "rate": "-2.9"},
      {"year": 1992, "region": "Харківська", "rate": "-4.1"},
      {"year": 1993, "region": "Харківська", "rate": "-6.2"},
      {"year": 1994, "region": "Харківська", "rate": "-7.6"},
      {"year": 1995, "region": "Харківська", "rate": "-8.5"},
      {"year": 1996, "region": "Харківська", "rate": "-8.3"},
      {"year": 1997, "region": "Харківська", "rate": "-8.4"},
      {"year": 1998, "region": "Харківська", "rate": "-7.8"},
      {"year": 1999, "region": "Харківська", "rate": "-8.9"},
      {"year": 2000, "region": "Харківська", "rate": "-9.6"},
      {"year": 2001, "region": "Харківська", "rate": "-9"},
      {"year": 2002, "region": "Харківська", "rate": "-8.9"},
      {"year": 2003, "region": "Харківська", "rate": "-8.8"},
      {"year": 2004, "region": "Харківська", "rate": "-8.4"},
      {"year": 2005, "region": "Харківська", "rate": "-8.6"},
      {"year": 2006, "region": "Харківська", "rate": "-7.6"},
      {"year": 2007, "region": "Харківська", "rate": "-7.2"},
      {"year": 2008, "region": "Харківська", "rate": "-6.4"},
      {"year": 2009, "region": "Харківська", "rate": "-5.5"},
      {"year": 2010, "region": "Харківська", "rate": "-5.7"},
      {"year": 2011, "region": "Харківська", "rate": "-5"},
      {"year": 2012, "region": "Харківська", "rate": "-4.7"},
      {"year": 2013, "region": "Харківська", "rate": "-4.7"},
      {"year": 2014, "region": "Харківська", "rate": "-5.2"},
      {"year": 2015, "region": "Харківська", "rate": "-6.4"},
      {"year": 2016, "region": "Харківська", "rate": "-6.7"},
      {"year": 2017, "region": "Харківська", "rate": "-7.2"},
      {"year": 2018, "region": "Харківська", "rate": "-8.6"},
      {"year": 2019, "region": "Харківська", "rate": "-8.4"},
      {"year": 1989, "region": "Херсонська", "rate": "3.7"},
      {"year": 1990, "region": "Херсонська", "rate": "2.7"},
      {"year": 1991, "region": "Херсонська", "rate": "1.5"},
      {"year": 1992, "region": "Херсонська", "rate": "0.5"},
      {"year": 1993, "region": "Херсонська", "rate": "-1.2"},
      {"year": 1994, "region": "Херсонська", "rate": "-2.7"},
      {"year": 1995, "region": "Херсонська", "rate": "-4.3"},
      {"year": 1996, "region": "Херсонська", "rate": "-5"},
      {"year": 1997, "region": "Херсонська", "rate": "-4.6"},
      {"year": 1998, "region": "Херсонська", "rate": "-5.3"},
      {"year": 1999, "region": "Херсонська", "rate": "-6.3"},
      {"year": 2000, "region": "Херсонська", "rate": "-7"},
      {"year": 2001, "region": "Херсонська", "rate": "-7.3"},
      {"year": 2002, "region": "Херсонська", "rate": "-7.3"},
      {"year": 2003, "region": "Херсонська", "rate": "-6.7"},
      {"year": 2004, "region": "Херсонська", "rate": "-6.4"},
      {"year": 2005, "region": "Херсонська", "rate": "-7.2"},
      {"year": 2006, "region": "Херсонська", "rate": "-5.7"},
      {"year": 2007, "region": "Херсонська", "rate": "-5.9"},
      {"year": 2008, "region": "Херсонська", "rate": "-5"},
      {"year": 2009, "region": "Херсонська", "rate": "-4.2"},
      {"year": 2010, "region": "Херсонська", "rate": "-3.7"},
      {"year": 2011, "region": "Херсонська", "rate": "-3.5"},
      {"year": 2012, "region": "Херсонська", "rate": "-3"},
      {"year": 2013, "region": "Херсонська", "rate": "-3.5"},
      {"year": 2014, "region": "Херсонська", "rate": "-3.6"},
      {"year": 2015, "region": "Херсонська", "rate": "-4.9"},
      {"year": 2016, "region": "Херсонська", "rate": "-5.3"},
      {"year": 2017, "region": "Херсонська", "rate": "-5.6"},
      {"year": 2018, "region": "Херсонська", "rate": "-6.8"},
      {"year": 2019, "region": "Херсонська", "rate": "-7.4"},
      {"year": 1989, "region": "Хмельницька", "rate": "0.2"},
      {"year": 1990, "region": "Хмельницька", "rate": "-0.6"},
      {"year": 1991, "region": "Хмельницька", "rate": "-1.7"},
      {"year": 1992, "region": "Хмельницька", "rate": "-2.2"},
      {"year": 1993, "region": "Хмельницька", "rate": "-3.6"},
      {"year": 1994, "region": "Хмельницька", "rate": "-4.4"},
      {"year": 1995, "region": "Хмельницька", "rate": "-4.8"},
      {"year": 1996, "region": "Хмельницька", "rate": "-5.3"},
      {"year": 1997, "region": "Хмельницька", "rate": "-6.2"},
      {"year": 1998, "region": "Хмельницька", "rate": "-6"},
      {"year": 1999, "region": "Хмельницька", "rate": "-6.5"},
      {"year": 2000, "region": "Хмельницька", "rate": "-7.1"},
      {"year": 2001, "region": "Хмельницька", "rate": "-7.7"},
      {"year": 2002, "region": "Хмельницька", "rate": "-7.7"},
      {"year": 2003, "region": "Хмельницька", "rate": "-7.9"},
      {"year": 2004, "region": "Хмельницька", "rate": "-7.4"},
      {"year": 2005, "region": "Хмельницька", "rate": "-8.4"},
      {"year": 2006, "region": "Хмельницька", "rate": "-7.3"},
      {"year": 2007, "region": "Хмельницька", "rate": "-6.9"},
      {"year": 2008, "region": "Хмельницька", "rate": "-6"},
      {"year": 2009, "region": "Хмельницька", "rate": "-5.3"},
      {"year": 2010, "region": "Хмельницька", "rate": "-4.9"},
      {"year": 2011, "region": "Хмельницька", "rate": "-4.3"},
      {"year": 2012, "region": "Хмельницька", "rate": "-4.2"},
      {"year": 2013, "region": "Хмельницька", "rate": "-4.6"},
      {"year": 2014, "region": "Хмельницька", "rate": "-4.4"},
      {"year": 2015, "region": "Хмельницька", "rate": "-5.2"},
      {"year": 2016, "region": "Хмельницька", "rate": "-5.6"},
      {"year": 2017, "region": "Хмельницька", "rate": "-6.3"},
      {"year": 2018, "region": "Хмельницька", "rate": "-7.1"},
      {"year": 2019, "region": "Хмельницька", "rate": "-7.5"},
      {"year": 1989, "region": "Черкаська", "rate": "-0.7"},
      {"year": 1990, "region": "Черкаська", "rate": "-2.1"},
      {"year": 1991, "region": "Черкаська", "rate": "-3.3"},
      {"year": 1992, "region": "Черкаська", "rate": "-4.1"},
      {"year": 1993, "region": "Черкаська", "rate": "-6.2"},
      {"year": 1994, "region": "Черкаська", "rate": "-6.7"},
      {"year": 1995, "region": "Черкаська", "rate": "-7.5"},
      {"year": 1996, "region": "Черкаська", "rate": "-8"},
      {"year": 1997, "region": "Черкаська", "rate": "-8.1"},
      {"year": 1998, "region": "Черкаська", "rate": "-8.3"},
      {"year": 1999, "region": "Черкаська", "rate": "-8.8"},
      {"year": 2000, "region": "Черкаська", "rate": "-9.9"},
      {"year": 2001, "region": "Черкаська", "rate": "-10"},
      {"year": 2002, "region": "Черкаська", "rate": "-10.2"},
      {"year": 2003, "region": "Черкаська", "rate": "-9.9"},
      {"year": 2004, "region": "Черкаська", "rate": "-10.4"},
      {"year": 2005, "region": "Черкаська", "rate": "-10.9"},
      {"year": 2006, "region": "Черкаська", "rate": "-9.4"},
      {"year": 2007, "region": "Черкаська", "rate": "-9.3"},
      {"year": 2008, "region": "Черкаська", "rate": "-8.4"},
      {"year": 2009, "region": "Черкаська", "rate": "-7.2"},
      {"year": 2010, "region": "Черкаська", "rate": "-7.2"},
      {"year": 2011, "region": "Черкаська", "rate": "-6.6"},
      {"year": 2012, "region": "Черкаська", "rate": "-6.1"},
      {"year": 2013, "region": "Черкаська", "rate": "-6.6"},
      {"year": 2014, "region": "Черкаська", "rate": "-6.8"},
      {"year": 2015, "region": "Черкаська", "rate": "-7"},
      {"year": 2016, "region": "Черкаська", "rate": "-7.8"},
      {"year": 2017, "region": "Черкаська", "rate": "-8.4"},
      {"year": 2018, "region": "Черкаська", "rate": "-9.5"},
      {"year": 2019, "region": "Черкаська", "rate": "-10"},
      {"year": 1989, "region": "Чернівецька", "rate": "4.2"},
      {"year": 1990, "region": "Чернівецька", "rate": "3.8"},
      {"year": 1991, "region": "Чернівецька", "rate": "2.9"},
      {"year": 1992, "region": "Чернівецька", "rate": "2"},
      {"year": 1993, "region": "Чернівецька", "rate": "0.9"},
      {"year": 1994, "region": "Чернівецька", "rate": "0.3"},
      {"year": 1995, "region": "Чернівецька", "rate": "-0.3"},
      {"year": 1996, "region": "Чернівецька", "rate": "-0.7"},
      {"year": 1997, "region": "Чернівецька", "rate": "-1.1"},
      {"year": 1998, "region": "Чернівецька", "rate": "-0.9"},
      {"year": 1999, "region": "Чернівецька", "rate": "-2.2"},
      {"year": 2000, "region": "Чернівецька", "rate": "-2.4"},
      {"year": 2001, "region": "Чернівецька", "rate": "-2.9"},
      {"year": 2002, "region": "Чернівецька", "rate": "-3.3"},
      {"year": 2003, "region": "Чернівецька", "rate": "-3.7"},
      {"year": 2004, "region": "Чернівецька", "rate": "-2.5"},
      {"year": 2005, "region": "Чернівецька", "rate": "-3.2"},
      {"year": 2006, "region": "Чернівецька", "rate": "-2.3"},
      {"year": 2007, "region": "Чернівецька", "rate": "-2.6"},
      {"year": 2008, "region": "Чернівецька", "rate": "-1.3"},
      {"year": 2009, "region": "Чернівецька", "rate": "-0.7"},
      {"year": 2010, "region": "Чернівецька", "rate": "-0.8"},
      {"year": 2011, "region": "Чернівецька", "rate": "0.1"},
      {"year": 2012, "region": "Чернівецька", "rate": "0.3"},
      {"year": 2013, "region": "Чернівецька", "rate": "-0.1"},
      {"year": 2014, "region": "Чернівецька", "rate": "0"},
      {"year": 2015, "region": "Чернівецька", "rate": "-1.2"},
      {"year": 2016, "region": "Чернівецька", "rate": "-1.5"},
      {"year": 2017, "region": "Чернівецька", "rate": "-2"},
      {"year": 2018, "region": "Чернівецька", "rate": "-2.8"},
      {"year": 2019, "region": "Чернівецька", "rate": "-3.1"},
      {"year": 1989, "region": "Чернігівська", "rate": "-2.1"},
      {"year": 1990, "region": "Чернігівська", "rate": "-4"},
      {"year": 1991, "region": "Чернігівська", "rate": "-5.7"},
      {"year": 1992, "region": "Чернігівська", "rate": "-6.7"},
      {"year": 1993, "region": "Чернігівська", "rate": "-8.5"},
      {"year": 1994, "region": "Чернігівська", "rate": "-9.9"},
      {"year": 1995, "region": "Чернігівська", "rate": "-10.7"},
      {"year": 1996, "region": "Чернігівська", "rate": "-10.6"},
      {"year": 1997, "region": "Чернігівська", "rate": "-10.7"},
      {"year": 1998, "region": "Чернігівська", "rate": "-10.8"},
      {"year": 1999, "region": "Чернігівська", "rate": "-12.2"},
      {"year": 2000, "region": "Чернігівська", "rate": "-12.9"},
      {"year": 2001, "region": "Чернігівська", "rate": "-13.1"},
      {"year": 2002, "region": "Чернігівська", "rate": "-13"},
      {"year": 2003, "region": "Чернігівська", "rate": "-13.2"},
      {"year": 2004, "region": "Чернігівська", "rate": "-13.2"},
      {"year": 2005, "region": "Чернігівська", "rate": "-14.1"},
      {"year": 2006, "region": "Чернігівська", "rate": "-13"},
      {"year": 2007, "region": "Чернігівська", "rate": "-13.1"},
      {"year": 2008, "region": "Чернігівська", "rate": "-12.2"},
      {"year": 2009, "region": "Чернігівська", "rate": "-10.5"},
      {"year": 2010, "region": "Чернігівська", "rate": "-10.5"},
      {"year": 2011, "region": "Чернігівська", "rate": "-9.2"},
      {"year": 2012, "region": "Чернігівська", "rate": "-9.3"},
      {"year": 2013, "region": "Чернігівська", "rate": "-9.4"},
      {"year": 2014, "region": "Чернігівська", "rate": "-10.2"},
      {"year": 2015, "region": "Чернігівська", "rate": "-10.3"},
      {"year": 2016, "region": "Чернігівська", "rate": "-10.3"},
      {"year": 2017, "region": "Чернігівська", "rate": "-11"},
      {"year": 2018, "region": "Чернігівська", "rate": "-12.3"},
      {"year": 2019, "region": "Чернігівська", "rate": "-12.5"},
      {"year": 1989, "region": "м. Київ", "rate": "5.3"},
      {"year": 1990, "region": "м. Київ", "rate": "3.4"},
      {"year": 1991, "region": "м. Київ", "rate": "1.8"},
      {"year": 1992, "region": "м. Київ", "rate": "0.2"},
      {"year": 1993, "region": "м. Київ", "rate": "-1.7"},
      {"year": 1994, "region": "м. Київ", "rate": "-2.7"},
      {"year": 1995, "region": "м. Київ", "rate": "-3.5"},
      {"year": 1996, "region": "м. Київ", "rate": "-3.2"},
      {"year": 1997, "region": "м. Київ", "rate": "-2.5"},
      {"year": 1998, "region": "м. Київ", "rate": "-2.8"},
      {"year": 1999, "region": "м. Київ", "rate": "-2.9"},
      {"year": 2000, "region": "м. Київ", "rate": "-2.9"},
      {"year": 2001, "region": "м. Київ", "rate": "-3"},
      {"year": 2002, "region": "м. Київ", "rate": "-2.5"},
      {"year": 2003, "region": "м. Київ", "rate": "-1.9"},
      {"year": 2004, "region": "м. Київ", "rate": "-0.9"},
      {"year": 2005, "region": "м. Київ", "rate": "-1.4"},
      {"year": 2006, "region": "м. Київ", "rate": "-0.7"},
      {"year": 2007, "region": "м. Київ", "rate": "-1"},
      {"year": 2008, "region": "м. Київ", "rate": "0.7"},
      {"year": 2009, "region": "м. Київ", "rate": "1.5"},
      {"year": 2010, "region": "м. Київ", "rate": "1.2"},
      {"year": 2011, "region": "м. Київ", "rate": "1.8"},
      {"year": 2012, "region": "м. Київ", "rate": "2.2"},
      {"year": 2013, "region": "м. Київ", "rate": "1.9"},
      {"year": 2014, "region": "м. Київ", "rate": "1.7"},
      {"year": 2015, "region": "м. Київ", "rate": "1.8"},
      {"year": 2016, "region": "м. Київ", "rate": "2"},
      {"year": 2017, "region": "м. Київ", "rate": "1.6"},
      {"year": 2018, "region": "м. Київ", "rate": "0.8"},
      {"year": 2019, "region": "м. Київ", "rate": "-0.2"},
      {"year": 1989, "region": "м. Севастополь", "rate": "..."},
      {"year": 1990, "region": "м. Севастополь", "rate": "3.2"},
      {"year": 1991, "region": "м. Севастополь", "rate": "1.7"},
      {"year": 1992, "region": "м. Севастополь", "rate": "-0.7"},
      {"year": 1993, "region": "м. Севастополь", "rate": "-2.7"},
      {"year": 1994, "region": "м. Севастополь", "rate": "-4.4"},
      {"year": 1995, "region": "м. Севастополь", "rate": "-6.9"},
      {"year": 1996, "region": "м. Севастополь", "rate": "-5.6"},
      {"year": 1997, "region": "м. Севастополь", "rate": "-4.8"},
      {"year": 1998, "region": "м. Севастополь", "rate": "-5.5"},
      {"year": 1999, "region": "м. Севастополь", "rate": "-5.6"},
      {"year": 2000, "region": "м. Севастополь", "rate": "-6.3"},
      {"year": 2001, "region": "м. Севастополь", "rate": "-6.1"},
      {"year": 2002, "region": "м. Севастополь", "rate": "-5.6"},
      {"year": 2003, "region": "м. Севастополь", "rate": "-5.4"},
      {"year": 2004, "region": "м. Севастополь", "rate": "-4.8"},
      {"year": 2005, "region": "м. Севастополь", "rate": "-5.8"},
      {"year": 2006, "region": "м. Севастополь", "rate": "-5"},
      {"year": 2007, "region": "м. Севастополь", "rate": "-5"},
      {"year": 2008, "region": "м. Севастополь", "rate": "-4.6"},
      {"year": 2009, "region": "м. Севастополь", "rate": "-3.3"},
      {"year": 2010, "region": "м. Севастополь", "rate": "-3.7"},
      {"year": 2011, "region": "м. Севастополь", "rate": "-2.9"},
      {"year": 2012, "region": "м. Севастополь", "rate": "-1.7"},
      {"year": 2013, "region": "м. Севастополь", "rate": "-2.2"}
    ]
  }
}