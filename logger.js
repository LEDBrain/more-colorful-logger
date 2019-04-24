const colors = require("colors");

let logDate = () => {
    const date = new Date();

    let hourD = date.getHours(),
        minD  = date.getMinutes(),
        secD  = date.getSeconds();

    let h = (hourD < 10 ? "0" : "") + hourD,
        m = (minD < 10 ? "0" : "") + minD,
        s = (secD < 10 ? "0": "") + secD;

    return `[${h}:${m}:${s}]`;
}

module.exports = {
    error: function(content) {
        console.log(`${colors.bgRed("[ERROR!]")} ${colors.red(`${logDate()}:`)} ${content}`);
    },

    info: function(content) {
        console.log(`${colors.bgCyan("[INFO]")} ${colors.cyan(`${logDate()}:`)} ${content}`);
    },

    warn: function(content) {
        console.log(`${colors.bgYellow("[WARN!]")} ${colors.yellow(`${logDate()}:`)} ${content}`);
    }
}