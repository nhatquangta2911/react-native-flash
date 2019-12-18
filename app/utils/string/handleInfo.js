export default {
  transferActivityLevel(level) {
    switch (level) {
      case 1:
        return 'Sedentary';
        break;
      case 2:
        return 'Lightly Active';
        break;
      case 3:
        return 'Moderately Active';
        break;
      case 4:
        return 'Very Active';
        break;
      case 5:
        return 'Extremely Active';
        break;
      default:
        return 'Unknown';
    }
  },
  transferBodyFat(level) {
    switch (level) {
      case 0:
        return 'Low';
        break;
      case 1:
        return 'Medium';
        break;
      case 2:
        return 'High';
        break;
      default:
        return 'Unknown';
    }
  }
};
