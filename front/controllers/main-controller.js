/**
 * Created by Seth on 5/18/2017.
 */
angular.module('myApp').controller('mainCtrl', function($scope, mainService){

    var data = mainService.data,
        totalPopPer = [
            {
                num: .502,
                gender: "m"
            },
            {
                num: .498,
                gender: "f"
            }
        ],
        maleData = data[1].maleBreakDown,
        femaleData = data[1].femaleBreakDown,
        dummyData = [1],

        popData = function(dat){

                var dataCont = d3.select(".pop-data"),
                     h = document.getElementsByClassName("pop-data")[0].clientHeight,
                    w = document.getElementsByClassName("pop-data")[0].clientWidth,
                    svg = dataCont
                        .append("svg")
                        .attr("width", w)
                        .attr("height", h);


                    svg.selectAll("rect")
                        .data(dat)
                        .enter()
                        .append("rect")
                        .attr("x", 0)
                        .attr("y", function (d,i) {
                            if(d.gender === "m"){
                                return 0
                            } else {
                                return "40%"
                            }
                        })
                        .attr("width", function(d){
                            return w * d.num;
                        })
                        .attr("height", h / 3)
                        .attr("fill", function(d,i){
                            if(d.gender === "m"){
                                return "red"
                            } else {
                                return "darkred"
                            }
                        });

            svg.selectAll("rectOpp")
                .data(dat)
                .enter()
                .append("rect")
                .attr("x", function(d){
                    return d.num * w;
                })
                .attr("y", function (d,i) {
                    if(d.gender === "m"){
                        return 0
                    } else {
                        return "40%"
                    }
                })
                .attr("width", function(d){
                    return w * (1 - d.num);
                })
                .attr("height", h / 3)
                .attr("fill", function(d,i){
                    if(d.gender === "m"){
                        return "red"
                    } else {
                        return "darkred"
                    }
                })
                .attr("opacity", "0.2");

                        svg.selectAll("text")
                            .data(dat)
                            .enter()
                            .append("text")
                            .text(function(d){
                            if(d.gender === "m"){
                                        return "Men make up 50.2%";
                                    } else {
                                        return "Women make up 49.8%";
                                    }
                                })
                            .attr("x", "20%")
                            .attr("y",function (d) {
                                if(d.gender === "m"){
                                    return "20%"
                                } else {
                                    return "60%"
                                }
                            })
                            .attr("text-anchor", "middle")
                            .attr("font-family", "Julius Sans One")
                            .attr("font-size", "medium")
                            .attr("font-weight", "bold")
                            .attr("fill", "black");

    };

    var malePop = function(dat){

        var dataContainer = d3.select(".male-data-container"),
            h = document.getElementsByClassName("male-data-container")[0].clientHeight,
            w = document.getElementsByClassName("male-data-container")[0].clientWidth,
            svg = dataContainer
                .append("svg")
                .attr("width", w)
                .attr("height", h);

            svg.selectAll("rect")
                .data(dat)
                .enter()
                .append("rect")
                .attr("x", function(d,i){
                    return i * (w / (dat.length));
                })
                .attr("y", 0)
                .attr("height", function(d){
                    return h * (d.percentage * 0.01);
                })
                .attr("width", (w - 100) / dat.length + 5)
                .attr("fill", "red");


        svg.selectAll("rectOpp")
            .data(dat)
            .enter()
            .append("rect")
            .attr("x", function(d,i){
                return i * (w / (dat.length));
            })
            .attr("y", function(d){
                return h * (d.percentage * 0.01);
            })
            .attr("height", function(d){
                return h * (1 - (d.percentage * 0.01));
            })
            .attr("width", (w - 100) / dat.length + 5)
            .attr("fill", "red")
            .attr("opacity", "0.3");


        svg.selectAll("text")
            .data(dat)
            .enter()
            .append("text")
            .text(function(d){
                return "Males ages " + d.ageGroup + " comprise " + d.percentage + "% of the population";
            })
            .attr("x", h - (h * 1.5))
            .attr("y", function(d, i) {
                return  (w / dat.length) * i + 70;
            })
            .attr("text-anchor", "middle")
            .attr("class", "male-pop-text")
            .attr("font-family", "Julius Sans One")
            .attr("font-size", "large")
            .attr("fill", "white")
            .attr("class", "male-data-text");

    };

    var femalePop = function(dat){

        var dataContainer = d3.select(".female-data-container"),
            h = document.getElementsByClassName("female-data-container")[0].clientHeight,
            w = document.getElementsByClassName("female-data-container")[0].clientWidth,
            svg = dataContainer
                .append("svg")
                .attr("width", w)
                .attr("height", h);

        svg.selectAll("rect")
            .data(dat)
            .enter()
            .append("rect")
            .attr("x", function(d,i){
                return i * (w / (dat.length));
            })
            .attr("y", 0)
            .attr("height", function(d){
                return h * (d.percentage * 0.01);
            })
            .attr("width", (w - 100) / dat.length + 5)
            .attr("fill", "darkred");

        svg.selectAll("rectOpp")
            .data(dat)
            .enter()
            .append("rect")
            .attr("x", function(d,i){
                return i * (w / (dat.length));
            })
            .attr("y", function(d){
                return h * (d.percentage * 0.01);
            })
            .attr("height", function(d){
                return h * (1 - (d.percentage * 0.01));
            })
            .attr("width", (w - 100) / dat.length + 5)
            .attr("fill", "red")
            .attr("opacity", "0.2");

        svg.selectAll("text")
            .data(dat)
            .enter()
            .append("text")
            .text(function(d){
                return "Males ages " + d.ageGroup + " comprise " + d.percentage + "% of the population";
            })
            .attr("x", h - (h * 1.5))
            .attr("y", function(d, i) {
                return  (w / dat.length) * i + 70;
            })
            .attr("text-anchor", "middle")
            .attr("class", "male-pop-text")
            .attr("font-family", "Julius Sans One")
            .attr("font-size", "large")
            .attr("fill", "white")
            .attr("class", "male-data-text");

    };


    popData(totalPopPer);
    malePop(maleData);
    femalePop(femaleData);


});