/**
 * Created by Seth on 5/18/2017.
 */
angular.module('myApp').service('mainService', function() {

this.data = [
    {
        section: 'Population',
        totalPop: 79801
    },
    {
        section: 'Population Breakdown',
        male: 40061,
        female: 39741,
        maleBreakDown: [
            {
                ageGroup: "0 to 4",
                pop: 7820,
                percentage: 9.8
            },
            {
                ageGroup: "5 to 11",
                pop: 9097,
                percentage: 11.4
            },
            {
                ageGroup: "12 to 17",
                pop: 5905,
                percentage: 7.4
            },
            {
                ageGroup: "18 to 59",
                pop: 16359,
                percentage: 20.5
            },
            {
                ageGroup: "60 plus",
                pop: 878,
                percentage: 1.1
            }
        ],
        femaleBreakDown:[
            {
                ageGroup: "0 to 4",
                pop: 7820,
                percentage: 9.2
            },
            {
                ageGroup: "5 to 11",
                pop: 9097,
                percentage: 10.8
            },
            {
                ageGroup: "12 to 17",
                pop: 5905,
                percentage: 7.1
            },
            {
                ageGroup: "18 to 59",
                pop: 16359,
                percentage: 21.1
            },
            {
                ageGroup: "60 plus",
                pop: 878,
                percentage: 1.6
            }
        ]
    }
];

console.log("what the crap is going on??");

});