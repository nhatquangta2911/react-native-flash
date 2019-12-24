export default {
  generate(type, amount, ingredient, time) {
    switch (type) {
      case 'Single-choice':
        return `Which one did you eat ${time}?`;
        break;
      case 'Multi-choice':
        return `Did you eat any of these ${time}?`;
        break;
      case 'Yes/No':
        return `Did you ${
          [
            'Water',
            'Mineral Water',
            'Milk Coffee',
            'Oolong Tea',
            'Coke'
          ].includes(ingredient)
            ? 'drink'
            : ingredient === 'Running'
            ? 'run'
            : ingredient === 'Walking'
            ? 'walk'
            : 'eat'
        } ${
          amount < 10
            ? ` ${amount}`
            : amount < 121
            ? `${amount} minutes`
            : `${amount}ml`
        }${
          ingredient === 'Running' || ingredient === 'Walking'
            ? ''
            : ` ${ingredient}`
        } ${time}?`;
        break;
      case 'Dropdown List':
        return `Select food that you ate ${time}`;
        break;
      default:
    }
  }
};
