//User input
const todaysSales = document.querySelector("#todays-sales");
const planSales = document.querySelector("#plan-sales");
const tySales = document.querySelector("#ty-sales");
const lySales = document.querySelector("#ly-sales");
const tyTraffic = document.querySelector("#ty-traffic");
const lyTraffic = document.querySelector("#ly-traffic");

//Calculator submit buttons and results
const planCalc = document.querySelector("#plan-calc");
const lyCalc = document.querySelector("#ly-calc");
const spreadCalc = document.querySelector("#spread-calc");
const planResult = document.querySelector("#plan-result");
const lyResult = document.querySelector("#ly-result");
const spreadResult = document.querySelector("#spread-result");




 planCalc.addEventListener("click", function (e) {
     let planResult = Number((todaysSales.value / planSales.value) * 100 - 100);
     planResult.innerText = `Result:${planResult}`;
     console.log(planResult);
 });


lyCalc.addEventListener("click", function (e) {
    let lyResult = Number((tySales.value/lySales.value) * 100 - 100);
    lyResult.innerText = `Result:${lyResult}`;
    console.log(lyResult);
});

spreadCalc.addEventListener("click", function (e) {
    let trafficResult = Number((tyTraffic.value / lyTraffic.value) * 100 - 100);
    let spreadResult = lyCalc-trafficResult;
    spreadResult.innerText = `${spreadResult}`;
    console.log(spreadResult);
    
});





//% difference of this years traffic from last years traffic
// const trafficPercent = (tyTraffic, lyTraffic) => (
//   (tyTraffic / lyTraffic) * 100 - 100
// );

// //% difference from this years sales to last years sales
// const salesPercent = (tySales, lySales) => (
//   (tySales / lySales) * 100 - 100
// );

// //finding spread from TY/LY sales to TY/LY traffic
// const spread = (salesPercent, trafficPercent) => (
//   salesPercent - trafficPercent
// );

// Testing
// console.log(trafficPercent(123, 213));