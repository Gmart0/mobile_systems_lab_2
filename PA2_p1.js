let studentsStr = 'Бортнік Василь - ІВ-72; Чередніченко Владислав - ІВ-73; Гуменюк Олександр - ІВ-71; Корнійчук Ольга - ІВ-71; Киба Олег - ІВ-72; Капінус Артем - ІВ-73; Овчарова Юстіна - ІВ-72; Науменко Павло - ІВ-73; Трудов Антон - ІВ-71; Музика Олександр - ІВ-71; Давиденко Костянтин - ІВ-73; Андрющенко Данило - ІВ-71; Тимко Андрій - ІВ-72; Феофанов Іван - ІВ-71; Гончар Юрій - ІВ-73'

console.log('Task 1');
var studentsGroups = {};
arr1 = studentsStr.split(';');
arr2 = arr1.map(function(elem) { return elem.trim().split(' ') });

for (let i = 0; i < arr2.length; ++i) {
    studentsGroups[arr2[i][3]] = [];
}


for (let i = 0; i < arr2.length; ++i) {
    studentsGroups[arr2[i][3]].push(arr2[i][0] + ' ' + arr2[i][1]);
}

let groups = Object.keys(studentsGroups);
for (group of groups) {
    studentsGroups[group] = studentsGroups[group].sort();
}
console.log('studentsGroups:');
console.log(studentsGroups);
console.log('===========================================');

console.log('Task 2');

function randomValue(maxValue) {
    switch (Math.floor(Math.random() * 6)) {
        case 1:
            return Math.ceil(maxValue * 0.7);
        case 2:
            return Math.ceil(maxValue * 0.9);
        case 3:
        case 4:
        case 5:
            return maxValue;
        default:
            return 0;
    }
}

function create_random_arr(len, maxValue) {
    arr = new Array(len);
    for (let i = 0; i < len; ++i)
        arr[i] = randomValue(maxValue);
    return arr;
}
let studentPoints = {};
const numOfPoints = 9,
    maxValue = 9;
for (group of groups) {
    studentPoints[group] = {};
    for (student of studentsGroups[group]) {
        studentPoints[group][student] = create_random_arr(numOfPoints, maxValue);
    }

}
console.log('studentPoints');
console.log(studentPoints);
console.log('===========================================');

console.log('Task 3');

function sum_of_arr(arr) {
    return arr.reduce((accum, currentVal) => accum + currentVal);
}
sumPoints = Object.assign(studentPoints);
for (group of Object.keys(sumPoints)) {
    for (student of Object.keys(sumPoints[group]))
        sumPoints[group][student] = sum_of_arr(sumPoints[group][student]);
}
console.log('studentPoints:');
console.log(studentPoints);
console.log('===========================================');

console.log('Task 4');
let groupAvg = JSON.parse(JSON.stringify(sumPoints));

for (group of Object.keys(sumPoints)) {
    let pointsArr = Object.values(sumPoints[group]);
    groupAvg[group] = sum_of_arr(pointsArr) / pointsArr.length;

}
console.log('groupAvg:');
console.log(groupAvg);
console.log('===========================================');

console.log('Task 5');
passedPerGroup = {};

for (group of groups) {
    passedPerGroup[group] = [];
    for (student of Object.keys(sumPoints[group])) {
        if (sumPoints[group][student] >= 60) passedPerGroup[group].push(student);
    }
}
console.log('passedPerGroup:');
console.log(passedPerGroup);