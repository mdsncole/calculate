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



//Calculate percent to sales goal.
planCalc.addEventListener("click", function (e) {
    let planResult = Number((todaysSales.value / planSales.value) * 100 - 100).toFixed(2);
    document.querySelector("#plan").innerHTML = `Plan Comp = </br> ${planResult}`;
});

//Calculate percent to last years sales.
lyCalc.addEventListener("click", function (e) {
    let lyResult = Number((tySales.value / lySales.value) * 100 - 100).toFixed(2);
    document.querySelector("#ly").innerHTML = `LY Comp = </br> ${lyResult}`;
});

// //Calculate spread. With traffic percent from this year compared to last years traffic, subtracted from sales percent compared to last year.
// spreadCalc.addEventListener("click", function (e) {
//     // let trafficResult = Number((tyTraffic.value / lyTraffic.value) * 100 - 100).toFixed(2);
//     let spreadResult = Number(lyResult-(tyTraffic.value / lyTraffic.value) * 100 - 100).toFixed(2);
//     document.querySelector("#spread").innerHTML = `Spread = </br> ${spreadResult}`;
// }); 
