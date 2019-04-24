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

let checkString = (input) => {
    if (input === true || input === false || input === 0) {
        return input.toString();
    } else if (!input || input === "" || input === 1) {
        return "true";
    }
}

module.exports = {
    error: function(content, bool) {
        let string = checkString(bool);
        let logText = string === "true" ? `${colors.bgRed(`[ERROR!]`)} ${colors.red(`${logDate()}:`)} ${content}` : `${colors.bgRed(`[ERROR!]`)}${colors.red(`:`)} ${content}`;    
        
        console.log(logText);
    },

    info: function(content, bool) {
        let string = checkString(bool);
        let logText = string === "true" ? `${colors.bgCyan(`[INFO]`)} ${colors.cyan(`${logDate()}:`)} ${content}` : `${colors.bgCyan(`[INFO]`)}${colors.cyan(`:`)} ${content}`;
        
        console.log(logText);
    },

    warn: function(content, bool) {
        let string = checkString(bool);
        let logText = string === "true" ? `${colors.bgYellow.black(`[WARN!]`)} ${colors.yellow(`${logDate()}:`)} ${content}` : `${colors.bgYellow.black(`[WARN!]`)}${colors.yellow(`:`)} ${content}`;
    
        console.log(logText);
    },

    completed: function(content, bool) {
        let string = checkString(bool);
        let logText = string === "true" ? `${colors.bgGreen.black(`[COMPLETED]`)} ${colors.green(`${logDate()}:`)} ${content}` : `${colors.bgGreen.black(`[COMPLETED]`)}${colors.green(`:`)} ${content}`;
    
        console.log(logText);
    }
}