const strPadLeft = (n) => {
    if (n < 10) {
        return `0${n}`;
    }
    return n.toString();
};
export const toHHMMSS = (str) => {
    const secNum = parseInt(str, 10);
    if (isNaN(secNum)) {
        return '';
    }
    const hours = Math.floor(secNum / 3600);
    const minutes = Math.floor((secNum - hours * 3600) / 60);
    const seconds = secNum - hours * 3600 - minutes * 60;
    return `${strPadLeft(hours)}:${strPadLeft(minutes)}:${strPadLeft(seconds)}`;
};
export const toMMSS = (str) => {
    const secNum = parseInt(str, 10);
    if (isNaN(secNum)) {
        return '';
    }
    const minutes = Math.floor(secNum / 60);
    const seconds = secNum - minutes * 60;
    return `${strPadLeft(minutes)}:${strPadLeft(seconds)}`;
};
//# sourceMappingURL=TimeUtils.js.map