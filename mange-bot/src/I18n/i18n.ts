import { createI18n } from "vue-i18n";
import PtBrTranslantions from './pt_br.json';
import EnTranslantions from './en.json';

export type AvailableLanguages = 
    'en' | 'br';


export const i18nApplication = createI18n({
    legacy: false,
    locale: 'en',
    messages: {
        en: EnTranslantions,
        br:  PtBrTranslantions
    }
});

export const changeLanguage = (locale: AvailableLanguages)=> {
    i18nApplication.global.locale.value = locale;
}