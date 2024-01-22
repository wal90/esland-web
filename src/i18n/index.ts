import catalan from './ca.json'
import spanish from './es.json'

const LANGUAGES = {
    CATALAN: 'ca',
    SPANISH: 'es'
}

export const getI18N = ({ currentLocale }) => {
    switch (currentLocale) {
        case LANGUAGES.CATALAN:
            return catalan;
        case LANGUAGES.SPANISH:
            return spanish;
        default:
            return spanish
    }
}