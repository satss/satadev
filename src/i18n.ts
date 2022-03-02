import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

const resources = {
    en: {
        translation: {
            'general.nameTitle': "I'm Satarupa Chakravarty",
            'general.info': 'I am Passionate about building software, electronics. I work as an engineer in software industry. ' +
                'I am bit opiniated towards typed languages. I blog about engineering, Golang, Java, GCP, AWS, Typescript etc.',
            'general.linkedIn': 'Check out my',
            'general.resumeDownload': 'For more info or download my',
            'general.resume': ' resume.'
        }
    },
    de: {
        translation: {
            'general.nameTitle': 'Ich bin Satarupa Chakravarty',
            'general.info': 'Ich bin leidenschaftlich über die Erstellung von Software, Elektronik. Ich arbeite als Ingenieur in der Softwareindustrie. ' +
                'Ich habe eine Vorliebe für typisierte Sprachen. Ich blogge über Technik, Golang, Java, GCP, AWS, Typescript usw.',
            'general.linkedIn': 'Schauen Sie sich mein',
            'general.resumeDownload': 'für weitere Informationen oder laden Sie meinen',
            'general.resume': ' Lebenslauf.'
        }
    }
};


i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        keySeparator: false, // we do not use keys in form messages.welcome
        interpolation: {
            escapeValue: false // react already safes from xss
        },
        supportedLngs: ["en", "de"],
    });

export default i18n
