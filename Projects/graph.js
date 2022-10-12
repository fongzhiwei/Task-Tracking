let xValues = ["day1", "day2", "day3", "day4", "day5", "day6", "day7"];
let yValues = [2.5, 1.35, 2.1, 1.25, 3.0, 1.5, 2.5];
let barColors = ["red", "orange", "yellow", "green","blue", "darkslateblue", "blueviolet"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
        xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'date'
            }
          }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Working hours'
          }
        }]
      },
    title: {
      display: true,
      text: "Total Working Hours of Last 7 Days"
    }
  }
});

/*
function draw() {
    var chart = new CanvasJS.Chart("chartContainer",
    {

      axisX:{
       title: "axisX Title"
      },

      axisY:{
        title: "axisX Title"
       },

      data: [
      {
        type: "column",
        dataPoints: [
        { x: "day1", y: 1.5 },
        { x: "day2", y: 1.3},
        { x: "day3", y: 2.4 },
        { x: "day4", y: 2.32 },
        { x: "day5", y: 1.26 },
        { x: "day6", y: 3 },
        { x: "day7", y: 3.1 }
        ]
      }
      ]
    });

    chart.render();
  } */