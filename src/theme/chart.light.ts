export const lightChartTheme = {
  colors: ['#5353C5', '#3333a4'],
  chart: {
      backgroundColor: {
          linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
          stops: [
              [0, '#f8f8f8']
          ]
      },
      style: {
          fontFamily: '\'Unica One\', sans-serif'
      },
      plotBorderColor: '#606063'
  },
  title: {
      style: {
          color: '#6c5580',
          textTransform: 'uppercase',
          fontSize: '20px'
      }
  },
  subtitle: {
      style: {
          color: '#6c5580',
          textTransform: 'uppercase'
      }
  },
  xAxis: {
      gridLineColor: '#707073',
      labels: {
          style: {
              color: '#6c5580'
          }
      },
      lineColor: '#707073',
      minorGridLineColor: '#505053',
      tickColor: '#707073',
      title: {
          style: {
              color: '#A0A0A3'

          }
      }
  },
  yAxis: {
      gridLineColor: '#707073',
      labels: {
          style: {
              color: '#6c5580'
          }
      },
      lineColor: '#707073',
      minorGridLineColor: '#505053',
      tickColor: '#707073',
      tickWidth: 1,
      title: {
          style: {
              color: '#A0A0A3'
          }
      }
  },
  tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      style: {
          color: '#F0F0F0'
      }
  },
  plotOptions: {
      series: {
          dataLabels: {
              color: '#B0B0B3'
          },
          marker: {
              lineColor: '#333'
          }
      },
      boxplot: {
          fillColor: '#505053'
      },
      candlestick: {
          lineColor: 'white'
      },
      errorbar: {
          color: 'white'
      }
  },
  legend: {
      itemStyle: {
          color: '#6c5580'
      },
      itemHoverStyle: {
          color: '#FFF'
      },
      itemHiddenStyle: {
          color: '#606063'
      }
  },
  credits: {
    enabled: false
  },
  labels: {
      style: {
          color: '#707073'
      }
  },

  drilldown: {
      activeAxisLabelStyle: {
          color: '#F0F0F3'
      },
      activeDataLabelStyle: {
          color: '#F0F0F3'
      }
  },

  navigation: {
      buttonOptions: {
          
          theme: {
              fill: '#505053'
          }
      }
  },

  // scroll charts
  rangeSelector: {
      buttonTheme: {
          fill: '#505053',
          stroke: '0',
          style: {
              color: '#CCC'
          },
          states: {
              hover: {
                  fill: '#707073',
                  stroke: '0',
                  style: {
                      color: 'white'
                  }
              },
              select: {
                  fill: '#000003',
                  stroke: '0',
                  style: {
                      color: 'white'
                  }
              }
          }
      },
      inputBoxBorderColor: '#505053',
      inputStyle: {
          backgroundColor: '#333',
          color: 'silver'
      },
      labelStyle: {
          color: 'silver'
      }
  },

  navigator: {
      handles: {
          backgroundColor: '#666',
          borderColor: '#AAA'
      },
      outlineColor: '#CCC',
      maskFill: 'rgba(255,255,255,0.1)',
      series: {
          color: '#7798BF',
          lineColor: '#A6C7ED'
      },
      xAxis: {
          gridLineColor: '#505053'
      }
  },

  scrollbar: {
      barBackgroundColor: '#808083',
      barBorderColor: '#808083',
      buttonArrowColor: '#CCC',
      buttonBackgroundColor: '#606063',
      buttonBorderColor: '#606063',
      rifleColor: '#FFF',
      trackBackgroundColor: '#404043',
      trackBorderColor: '#404043'
  },

  // special colors for some of the
  legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
  background2: '#505053',
  dataLabelsColor: '#B0B0B3',
  textColor: '#C0C0C0',
  contrastTextColor: '#F0F0F3',
  maskColor: 'rgba(255,255,255,0.3)'
};


export const globalLightChartTheme = {
    colors: ['#02D3ED','#0297ed', '#02b2ed', '#02caed', '#0264ed'],
    chart: {
        backgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
            stops: [
              [0, '#ffffff']
            ]
        },
        style: {
            fontFamily: '\'Unica One\', sans-serif'
        },
        plotBorderColor: '#606063'
    },
    title: {
        style: {
            color: '#6c5580',
            textTransform: 'uppercase',
            fontSize: '20px'
        }
    },
    subtitle: {
        style: {
            color: '#6c5580',
            textTransform: 'uppercase'
        }
    },
    xAxis: {
        gridLineColor: '#707073',
        labels: {
            style: {
                color: '#6c5580'
            }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        title: {
            style: {
                color: '#A0A0A3'

            }
        }
    },
    yAxis: {
        gridLineColor: '#707073',
        labels: {
            style: {
                color: '#6c5580'
            }
        },
        lineColor: '#707073',
        minorGridLineColor: '#505053',
        tickColor: '#707073',
        tickWidth: 1,
        title: {
            style: {
                color: '#A0A0A3'
            }
        }
    },
    tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        style: {
            color: '#F0F0F0'
        }
    },
    plotOptions: {
        series: {
            dataLabels: {
                color: '#B0B0B3'
            },
            marker: {
                lineColor: '#333'
            }
        },
        boxplot: {
            fillColor: '#505053'
        },
        candlestick: {
            lineColor: 'white'
        },
        errorbar: {
            color: 'white'
        }
    },
    legend: {
        itemStyle: {
            color: '#6c5580'
        },
        itemHoverStyle: {
            color: '#FFF'
        },
        itemHiddenStyle: {
            color: '#606063'
        }
    },
    credits: {
        style: {
            color: '#666'
        }
    },
    labels: {
        style: {
            color: '#707073'
        }
    },

    drilldown: {
        activeAxisLabelStyle: {
            color: '#F0F0F3'
        },
        activeDataLabelStyle: {
            color: '#F0F0F3'
        }
    },

    navigation: {
        buttonOptions: {
            
            theme: {
                fill: '#505053'
            }
        }
    },

    // scroll charts
    rangeSelector: {
        buttonTheme: {
            fill: '#505053',
            stroke: '0',
            style: {
                color: '#CCC'
            },
            states: {
                hover: {
                    fill: '#707073',
                    stroke: '0',
                    style: {
                        color: 'white'
                    }
                },
                select: {
                    fill: '#000003',
                    stroke: '0',
                    style: {
                        color: 'white'
                    }
                }
            }
        },
        inputBoxBorderColor: '#505053',
        inputStyle: {
            backgroundColor: '#333',
            color: 'silver'
        },
        labelStyle: {
            color: 'silver'
        }
    },

    navigator: {
        handles: {
            backgroundColor: '#0264ed',
            borderColor: '#0264ed'
        },
        outlineColor: '#CCC',
        maskFill: 'rgba(255,255,255,0.1)',
        series: {
            color: '#0264ed',
            lineColor: '#0264ed'
        },
        xAxis: {
            gridLineColor: '#505053'
        }
    },

    scrollbar: {
        barBackgroundColor: '#808083',
        barBorderColor: '#808083',
        buttonArrowColor: '#CCC',
        buttonBackgroundColor: '#0264ed',
        buttonBorderColor: '#606063',
        rifleColor: '#0264ed',
        trackBackgroundColor: '#404043',
        trackBorderColor: '#404043'
    },

    // special colors for some of the
    legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
    background2: '#ffffff',
    dataLabelsColor: '#0264ed',
    textColor: '#0264ed',
    contrastTextColor: '#F0F0F3',
    maskColor: 'rgba(255,255,255,0.3)'
};
