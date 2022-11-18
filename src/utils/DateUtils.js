import Moment from 'moment';

Moment.locale('vi');
const DATE_MESSAGE_DURATION = 30 * 60 * 1000;
export default {
    formatDate(format, date) {
        return Moment(date).format(format);
    },
    getDateFromString(format, dateStr) {
        let date = Moment(dateStr, format);
        return new Date(date.year(), date.month(), date.date());
    },
    addYear(date, value) {
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        return new Date(year + value, month, day);
    },
    addDay(date, value) {
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        return new Date(year, month, day + value);
    },
    getValidateTime() {
        return this.addDay(new Date(), 0.5).getTime();
    },
    getCurrentDate() {
        return new Date().getTime();
    },
    compareDate(date1, date2) {
        return date1.getTime() - date2.getTime();
    },
    trimDate(dateStr) {
        return dateStr === undefined ? '' : dateStr.substr(0, 10);
    },
    isSameMessageCluster(dateStr1, dateStr2) {
        return (
            Math.abs(new Moment(dateStr2) - new Moment(dateStr1)) <
            DATE_MESSAGE_DURATION
        );
    },
    isToday(dateStr) {
        return Moment(dateStr).isSame(Moment(), 'day');
    },
    isYesterday(dateStr) {
        return Moment(dateStr).isSame(Moment().subtract(1, 'day'), 'day');
    },
};
