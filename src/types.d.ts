export interface Config {
    language: 'es' | 'en';
    version: '2023';
    flavor: 'js' | 'ts';
    showDescription: boolean;
}

export interface Problem {
    name: string;
    emoji: string;
    args: string;
    longName: {
        en: string;
        es: string;
    };
    description: {
        en: string;
        es: string;
    };
}

export interface ProblemDescription {
    title: string;
    level: string;
    description: string;
}
