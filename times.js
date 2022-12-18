const times = (num, func) => {
    if (num === 0) {
        return [];
    }
    if (func ) {
        const empArr = [];
        for (let i = 0; i < num; i++) {
            func(empArr);
        }
        return empArr;
    }
}

module.exports = times