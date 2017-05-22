/**
 * Created by Seth on 5/18/2017.
 */
angular.module('myApp').controller('mainCtrl', function($scope, mainService){

    var dataset = [];                        //Initialize empty array

    function cool() {
        for (var i = 0; i < 25; i++) {           //Loop 25 times
            var newNumber = Math.round(Math.random() * 30);
            dataset.push(newNumber);             //Add new number to array
        }
    }

    setTimeout(cool(), 5000);
    // dataset.sort(function(a,b){
    //     return a - b;
    // });

    d3.select(".bar-container")
        .selectAll("div")
        .data(dataset)
        .enter()
        .append("div")
        .attr("class", "bar")
        .style("height", function(d){
            var barHeight = d * 5 + 10;
            return barHeight + "px";
        })
        .append("p")
        .text(function(d){
            return d;
        });

    var circles = d3.select(".circle-container")
        .selectAll("div")
        .data(dataset)
        .enter()
        .append("div")
        .attr("class", "circle")
        .style("height", function(d){
            var circleHeight = d * 2;
            return circleHeight + "px";
        }).text(function(d){
            return d
        });

    circles.style("width", function(d){
        return d * 2 + "px";
    })


});