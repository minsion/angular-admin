export const initialState = {
    isDarkMode: false,
    mainLayout: 'app',
    theme: 'light',
    menu: 'vertical',
    layout: 'full',
    rtlClass: 'ltr',
    animation: '',
    navbar: 'navbar-sticky',
    locale: 'en',
    sidebar: false,
    languageList: [
        { code: 'zh', name: 'Chinese' },
        { code: 'da', name: 'Danish' },
        { code: 'en', name: 'English' },
        { code: 'fr', name: 'French' },
        { code: 'de', name: 'German' },
        { code: 'el', name: 'Greek' },
        { code: 'hu', name: 'Hungarian' },
        { code: 'it', name: 'Italian' },
        { code: 'ja', name: 'Japanese' },
        { code: 'pl', name: 'Polish' },
        { code: 'pt', name: 'Portuguese' },
        { code: 'ru', name: 'Russian' },
        { code: 'es', name: 'Spanish' },
        { code: 'sv', name: 'Swedish' },
        { code: 'tr', name: 'Turkish' },
        { code: 'ae', name: 'Arabic' },
    ],
    isShowMainLoader: true,
    semidark: false,
};

export function indexReducer(state = initialState, action: any) {
    const type = action.type;
    let payload = action.payload;
    if (type === 'toggleDirection') {
        localStorage.setItem('direction', payload);
        document.querySelector('html')?.setAttribute('dir', payload || 'ltr');
        return { ...state, ...{ direction: payload } };
    } else if (type === 'toggleMainLoader') {
        return { ...state, ...{ isShowMainLoader: payload } };
    }

    if (type === 'setMainLayout') {
        return { ...state, ...{ mainLayout: payload } }; //app , auth
    } else if (type === 'toggleTheme') {
        payload = payload || state.theme; // light|dark|system
        localStorage.setItem('theme', payload);
        let isDarkMode = state.isDarkMode || false;
        if (payload == 'light') {
            isDarkMode = false;
        } else if (payload == 'dark') {
            isDarkMode = true;
        } else if (payload == 'system') {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                isDarkMode = true;
            } else {
                isDarkMode = false;
            }
        }

        if (isDarkMode) {
            document.querySelector('body')?.classList.add('dark');
        } else {
            document.querySelector('body')?.classList.remove('dark');
        }
        return { ...state, ...{ theme: payload, isDarkMode: isDarkMode } };
    } else if (type === 'toggleMenu') {
        payload = payload || state.menu; // vertical, collapsible-vertical, horizontal
        localStorage.setItem('menu', payload);
        return { ...state, ...{ sidebar: false, menu: payload } };
    } else if (type === 'toggleLayout') {
        payload = payload || state.layout; // full, boxed-layout
        localStorage.setItem('layout', payload);
        return { ...state, ...{ layout: payload } };
    } else if (type === 'toggleRTL') {
        payload = payload || state.rtlClass; // rtl, ltr
        localStorage.setItem('rtlClass', payload);
        const rtlClass = payload;
        document.querySelector('html')?.setAttribute('dir', rtlClass || 'ltr');
        return { ...state, ...{ rtlClass: rtlClass } };
    } else if (type === 'toggleAnimation') {
        payload = payload; // animate__fadeIn, animate__fadeInDown, animate__fadeInUp, animate__fadeInLeft, animate__fadeInRight, animate__slideInDown, animate__slideInLeft, animate__slideInRight, animate__zoomIn
        payload = payload?.trim();
        localStorage.setItem('animation', payload);
        if (payload) {
            const eleanimation: any = document.querySelector('.animation');
            eleanimation?.classList.add('animate__animated');
            eleanimation?.classList.add(payload);
        }
        return { ...state, ...{ animation: payload } };
    } else if (type === 'toggleNavbar') {
        payload = payload || state.navbar; // navbar-sticky, navbar-floating, navbar-static
        localStorage.setItem('navbar', payload);
        return { ...state, ...{ navbar: payload } };
    } else if (type === 'toggleSemidark') {
        payload = payload || false;
        localStorage.setItem('semidark', payload);
        return { ...state, ...{ semidark: payload } };
    } else if (type === 'toggleLocale') {
        payload = payload || state.locale;
        // i18n.global.locale.value = payload;
        localStorage.setItem('i18n_locale', payload);
        return { ...state, ...{ locale: payload } };
    } else if (type === 'toggleSidebar') {
        return { ...state, ...{ sidebar: !state.sidebar } };
    }

    return state;
}
