export default {
    generate(type, amount, ingredient, time) {
        switch(type) {
            case 'Single-choice':
                return `Which one did you eat ${time}?`
                break;
            case 'Multi-choice':
                return `Did you eat any of these ${time}?`
                break;
            case 'Yes/No':
                return `Did you eat ${amount} ${ingredient} ${time}?`
                break;
            case 'Dropdown List':
                return `Select food that you ate ${time}`
                break;
            default:
        }
    }
}