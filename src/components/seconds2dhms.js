function seconds2dhms (seconds) {
    seconds = Number(seconds);

    var d = Math.floor(seconds / (3600 * 24));

    var h = Math.floor((seconds % (3600 * 24)) / 3600);

    var m = Math.floor((seconds % 3600) / 60);

    var s = Math.floor(seconds % 60);

    /*var dDisplay = d > 0 ? d + (d === 1 ? ' day, ' : ' days, ') : '';
    var hDisplay = h > 0 ? h + (h === 1 ? ' hour, ' : ' hours, ') : '';
    var mDisplay = m > 0 ? m + (m === 1 ? ' minute, ' : ' minutes, ') : '';
    var sDisplay = s > 0 ? s + (s === 1 ? ' second' : ' seconds') : '';*/

    var dDisplay = d > 0 ? d + 'd, ' : '';
    var hDisplay = h > 0 ? h + 'h, ' : '';
    var mDisplay = m > 0 ? m + 'm, ' : '';
    var sDisplay = s > 0 ? s + 's' : '';

    /*return without trailing commas*/
    return (dDisplay + hDisplay + mDisplay + sDisplay).replace(/,\s*$/, '');
}

export default seconds2dhms;
