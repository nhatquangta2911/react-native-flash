export default {
  transfer(originalTime) {
    let period = Date.parse(originalTime);
    let periodByHour = Math.round(period / 1000 / 3600);
    if (Math.round(period / 1000 / 60) < 1) {
      return 'just now';
    } else if (periodByHour < 1) {
      return `${Math.round(period / 1000 / 60)} minutes ago`;
    } else if (periodByHour < 24) {
      return periodByHour < 2 ? 'an hour ago' : `${periodByHour} hours ago`;
    } else if (periodByHour < 48) {
      return `yesterday`;
    } else {
      return `${Math.round(periodByHour / 24)} days ago`;
    }
  },
  simpleTransfer(originalTime) {
    // let period = Date.parse(originalTime);
    // let periodByHour = Math.round(period / 1000 / 3600);
    let time = new Date(originalTime);
    let periodByHour = time.getHours();
    if (periodByHour >= 4 && periodByHour <= 10) {
      return 'this morning';
    } else if (periodByHour > 10 && periodByHour <= 17) {
      return 'this afternoon';
    } else return 'this evening';
  },
  transferDate(original) {
    return original.toISOString().substring(0, 10);
  }
};
