export default {
    transfer(originalTime) {
        let period = Date.now() - Date.parse(originalTime);
        let periodByHour = Math.round(period / 1000 / 3600);
        if(periodByHour < 24) {
            return periodByHour < 2 ? 'an hour ago' : `${periodByHour} hours ago`;
        } else if(periodByHour < 48) {
            return `yesterday`;
        } else {
            return `${Math.round(periodByHour / 24)} days ago`;
        }
    }
};