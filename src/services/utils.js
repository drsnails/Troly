


export const utils = {
    makeId,
    calculateDays,
    createMat,
    getDateDay
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
    end= new Date(end)
    start= new Date(start)
    var difference = end.getTime() - start.getTime();
    var daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
    return daysDifference
}
function createMat(cols, rows) {
    const mat = []
    for (let i = 0; i < rows; i++) {
        mat[i] = []
        for (let j = 0; j < cols; j++) {
            mat[i][j] = {}
        }
    }

    return mat
}

function getDateDay(timeStamp) {
    const time = new Date(timeStamp);
    return time.getDate()
}