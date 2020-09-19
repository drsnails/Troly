


export const utils = {
    makeId,
    calculateDays,
    createMat,
    getDateDay,
    getWeekDay,
    getTimeDayStr,
    getRandomInt,
}

function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function calculateDays(start, end) {
    end = new Date(end)
    start = new Date(start)
    var difference = end.getTime() - start.getTime();
    var daysDifference = Math.ceil(difference / 1000 / 60 / 60 / 24);
    return daysDifference
}






function createMat(cols, rows) {
    const mat = []
    for (let i = 0; i < rows; i++) {
        mat[i] = []
        for (let j = 0; j < cols; j++) {
            mat[i][j] = {}
            if (j===0) {
                mat[i][j] = {col: 0}
            }
        }
    }

    return mat
}

function getDateDay(timeStamp) {
    const time = new Date(timeStamp);
    return time.getDate()
}


function getWeekDay(timeStamp) {
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const time = new Date(timeStamp);
    return days[time.getDay()]
}

function getTimeDayStr(timeStamp) {
    let time = new Date(timeStamp)
    let hours = _get2DigTime(time.getHours());
    let minuets = _get2DigTime(time.getMinutes());
    return `${hours}:${minuets}`
}

function _get2DigTime(num) {
    if ((num + '').length === 1) return '0' + num
    return num
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
