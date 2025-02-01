interface Translation {
    nav: {
        me: string;
        experience: string;
        education: string;
        projects: string;
        skills: string;
    };
    buttons: {
        explore: string;
    };
    timeline: {
        actual: string;
    };
    badges?: {
        intern: string;
    };
}

interface I18n {
    [key: string]: Translation;
}

export const i18n: I18n = {
    en: {
        nav: {
            me: "Me",
            experience: "Experience",
            education: "Education",
            projects: "Projects",
            skills: "Skills",
        },
        buttons: {
            explore: "Explore",
        },
        timeline: {
            actual: "Actual",
        }
    },
    es: {
        nav: {
            me: "Yo",
            experience: "Experiencia",
            education: "Educación",
            projects: "Proyectos",
            skills: "Habilidades",
        },
        buttons: {
            explore: "Explorar",
        },
        timeline: {
            actual: "Actual",
        }
    },
    it: {
        nav: {
            me: "Io",
            experience: "Esperienza",
            education: "Educazione",
            projects: "Progetti",
            skills: "Competenze",
        },
        buttons: {
            explore: "Esplora",
        },
        badges: {
            intern: "Tirocinante"
        },
        timeline: {
            actual: "Attuale",
        }
    },
    pt: {
        nav: {
            me: "Eu",
            experience: "Experiência",
            education: "Educação",
            projects: "Projetos",
            skills: "Habilidades",
        },
        buttons: {
            explore: "Explorar",
        },
        timeline: {
            actual: "Atual",
        }
    },
    ru: {
        nav: {
            me: "Я",
            experience: "Опыт",
            education: "Образование",
            projects: "Проекты",
            skills: "Навыки",
        },
        buttons: {
            explore: "Исследовать",
        },
        timeline: {
            actual: "Актуально",
        }
    }
};
