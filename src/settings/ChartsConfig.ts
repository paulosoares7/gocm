const tooltipEnable = {
  enabled: true, // <-- this option disables tooltip
};

//options
export const firstChartOptions = {
  type: "Bubble",
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: {
      display: true,
      position: "bottom" as const,
      align: "start" as const,

      labels: {
        color: "#008B8B",

        usePointStyle: true,
        pointStyle: "circle",
        textAlign: "left" as const,
      },
    },
    tooltip: {
      enabled: false,
    },
  },

  scales: {
    y: {
      ticks: {
        color: "#61DAFB",
      },
      grid: {
        tickColor: "#06647e",
        tickLength: 7,
        color: "#444444",
      },
      title: {
        color: "#04D361",
        display: true,
        text: "y (m)",
      },
    },
    x: {
      ticks: {
        color: "#61DAFB",
      },
      grid: {
        tickColor: "#06647e",
        tickLength: 7,
        color: "#444444",
      },
      title: {
        color: "#04D361",
        display: true,
        text: "x (m)",
      },
    },
  },
  layout: {
    padding: 2,
  },
};
export const secondChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      ticks: {
        color: "#61DAFB",
      },
      grid: {
        tickColor: "#06647e",
        tickLength: 7,
        color: "#444444",
      },
      title: {
        color: "#04D361",
        display: true,
        text: "y (m)",
      },
    },
    x: {
      ticks: {
        color: "#61DAFB",
      },
      grid: {
        tickColor: "#06647e",
        tickLength: 7,
        color: "#444444",
      },
      title: {
        color: "#04D361",
        display: true,
        text: "x (m)",
      },
    },
  },
  layout: {
    padding: 2,
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};
export const EMChartOptions = {
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: {
      display: false,

      labels: {
        color: "#008B8B",

        usePointStyle: true,
        pointStyle: "circle",
        textAlign: "left" as const,
      },
    },
    tooltip: tooltipEnable,
  },

  scales: {
    y: {
      ticks: {
        color: "#61DAFB",
      },
      grid: {
        tickColor: "#06647e",
        tickLength: 7,
        color: "#444444",
      },
      title: {
        color: "#04D361",
        display: true,
        text: "Energia (J)",
      },
    },
    x: {
      ticks: {
        color: "#61DAFB",
      },
      grid: {
        tickColor: "#06647e",
        tickLength: 7,
        color: "#444444",
      },
      title: {
        color: "#04D361",
        display: true,
        text: "Tempo (s)",
      },
    },
  },
  layout: {
    padding: 2,
  },
};
export const positionChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: tooltipEnable,
  },  
  scales: {
    y: {
      ticks: {
        color: "#61DAFB",
      },
      grid: {
        tickColor: "#06647e",
        tickLength: 7,
        color: "#444444",
      },
      title: {
        color: "#04D361",
        display: true,
        text: "Posição (m)",
      },
    },
    x: {
      ticks: {
        color: "#61DAFB",
      },
      grid: {
        tickColor: "#06647e",
        tickLength: 7,
        color: "#444444",
      },
      title: {
        color: "#04D361",
        display: true,
        text: "Tempo (s)",
      },
    },
  },
    layout: {
    padding: 2,
  },

};
export const velocityChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      ticks: {
        color: "#61DAFB",
      },
      grid: {
        tickColor: "#06647e",
        tickLength: 7,
        color: "#444444",
      },
      title: {
        color: "#04D361",
        display: true,
        text: "Velocidade (m/s)",
      },
    },
    x: {
      ticks: {
        color: "#61DAFB",
      },
      grid: {
        tickColor: "#06647e",
        tickLength: 7,
        color: "#444444",
      },
      title: {
        color: "#04D361",
        display: true,
        text: "Tempo (s)",
      },
    },
  },
  layout: {
    padding: 2,
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: tooltipEnable,
  },
};
export const acelerationChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      ticks: {
        color: "#61DAFB",
      },
      grid: {
        tickColor: "#06647e",
        tickLength: 7,
        color: "#444444",
      },
      title: {
        color: "#04D361",
        display: true,
        text: "Aceleração (m/s²)",
      },
    },
    x: {
      ticks: {
        color: "#61DAFB",
      },
      grid: {
        tickColor: "#06647e",
        tickLength: 7,
        color: "#444444",
      },
      title: {
        color: "#04D361",
        display: true,
        text: "Tempo (s)",
      },
    },
  },
  layout: {
    padding: 2,
  },
  plugins: {
    legend: {
      display: false,
    },

    tooltip: tooltipEnable,
  },
};
//block options
