let xValues = ["day1", "day2", "day3", "day4", "day5", "day6", "day7"];
var yValues = [2.5, 1.35, 2.1, 1.25, 3.0, 1.5, 2.5];
let day1 = 0;
let day2 = 0;
let day3 = 0;
let day4 = 0;
let day5 = 0;
let day6 = 0;
let day7 = 0;

let barColors = ["red", "orange", "yellow", "green","blue", "darkslateblue", "blueviolet"];

const loadMemberDetail = () => {
  const currentMemberID = localStorage.getItem("currentMember");
  const getTeamTime = localStorage.getItem("teamTime");
  const {memberTime} = JSON.parse(getTeamTime);

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  
  var dateToday = dd + '/' + mm + '/' + yyyy;
  console.log(dateToday)

  dd= String(today.getDate()-1).padStart(2, '0');
  var dateOneDayAgo = dd + '/' + mm + '/' + yyyy;
  
  dd= String(today.getDate()-2).padStart(2, '0');
  var dateTwoDayAgo = dd + '/' + mm + '/' + yyyy;
  
  dd= String(today.getDate()-3).padStart(2, '0');
  var dateThreeDayAgo = dd + '/' + mm + '/' + yyyy;
  
  dd= String(today.getDate()-4).padStart(2, '0');
  var dateFourDayAgo = dd + '/' + mm + '/' + yyyy;
  
  dd= String(today.getDate()-5).padStart(2, '0');
  var dateFiveDayAgo = dd + '/' + mm + '/' + yyyy;
  
  dd= String(today.getDate()-6).padStart(2, '0');
  var dateSixDayAgo = dd + '/' + mm + '/' + yyyy;
  
  memberTime.map((memberTimeTrack) => {
    if(memberTimeTrack.id = currentMemberID){
      if(memberTimeTrack.hasOwnProperty(dateToday)){
        day7=memberTimeTrack[dateToday];
        day7=day7/3600;
      }
      if(memberTimeTrack.hasOwnProperty(dateOneDayAgo)){
        day6=memberTimeTrack[dateOneDayAgo];
        day6=day6/3600;
      }
      if(memberTimeTrack.hasOwnProperty(dateTwoDayAgo)){
        day5=memberTimeTrack[dateTwoDayAgo];
        day5=day5/3600;
      }
      if(memberTimeTrack.hasOwnProperty(dateThreeDayAgo)){
        day4=memberTimeTrack[dateThreeDayAgo];
        day4=day4/3600;
      }
      if(memberTimeTrack.hasOwnProperty(dateFourDayAgo)){
        day3=memberTimeTrack[dateFourDayAgo];
        day3=day3/3600;
      }
      if(memberTimeTrack.hasOwnProperty(dateFiveDayAgo)){
        day2=memberTimeTrack[dateFiveDayAgo];
        day2=day2/3600;
      }
      if(memberTimeTrack.hasOwnProperty(dateSixDayAgo)){
        day1=memberTimeTrack[dateSixDayAgo];
        day1=day1/3600;
      }
      yValues = [day1, day2, day3, day4, day5, day6, day7];
    }

  });

};
loadMemberDetail();
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
