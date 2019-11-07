export default {
  transfer(originalTime) {
    let period = Date.now() - Date.parse(originalTime);
    let periodByHour = Math.round(period / 1000 / 3600);
    if (Math.round(period / 1000 / 60) < 1) {
      return "just now";
    } else if (periodByHour < 1) {
      return `${Math.round(period / 1000 / 60)} minutes ago`;
    } else if (periodByHour < 24) {
      return periodByHour < 2 ? "an hour ago" : `${periodByHour} hours ago`;
    } else if (periodByHour < 48) {
      return `yesterday`;
    } else {
      return `${Math.round(periodByHour / 24)} days ago`;
    }
  },
  transferDate(original) {
    return original.toISOString().substring(0, 10);
  }
};
