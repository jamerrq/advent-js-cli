export interface Config {
    language: 'es' | 'en';
    version: '2023';
    flavor: 'js' | 'ts';
    showDescription: boolean;
}

export interface ProblemDescription {
    title: string;
    level: string;
    lvl_code: 0 | 1 | 2;
    dsc_msg: string;
    description: string;
    code: string;
    ref: string;
}

export interface BiProblemDescription {
    title: {
        es: string;
        en: string;
    };
    level: {
        es: string;
        en: string;
    };
    lvl_code: 0 | 1 | 2;
    dsc_msg: {
        es: string;
        en: string;
    };
    description: {
        es: string;
        en: string;
    };
    code: string;
    ref: {
        es: string;
        en: string;
    };
}
