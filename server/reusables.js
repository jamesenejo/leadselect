const reusables = {
    genRandomNumber: upperBoundary => Math.floor(Math.random() * upperBoundary),
    getNextFriday: () => {
        const monthArray = [
            'Nil', 'Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];
        let formDateFormat;

        const nextFriday = new Date(new Date().getTime() + 604800000);
        const [weekDay, month, date, year] = nextFriday.toDateString().split(' ');

        weekDay.toString(); // Just to avoid eslint error

        const monthIndex = monthArray.indexOf(month);

        if (monthIndex > 9) {
            formDateFormat = `${year}-${monthIndex}-${date}`;
        } else {
            formDateFormat = `${year}-0${monthIndex}-${date}`;
        }
        return formDateFormat;
    }
};

export default reusables;
