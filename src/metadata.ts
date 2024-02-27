import { MIDUFACE } from './logos.ts';
import type { Config } from "./types.d.ts";

export const MIDU_LINKS = {
    website: "https://midu.dev",
    twitch: "https://twitch.tv/midudev",
    youtube: "https://youtube.com/midudev",
    twitter: "https://twitter.com/midudev",
    github: "https://github.com/midudev",
}

export const ABOUT_THE_AUTHOR = (lang = "en") => lang === 'en' ? `
${MIDUFACE}

Miguel Ángel Durán García, also known as Midudev is a Software Engineer
with more than 15 years of experience in the industry. He is now focused on
creating content for developers and helping them to grow in their careers,
mostly in the Latin American community.

He is streaming on Twitch from Monday to Thursday at 12:00 PM (UTC-5) and
creating content on YouTube and other platforms. He is also a Google Developer
Expert in Web Technologies and a GitHub Star.

You can find him on:
` : `
${MIDUFACE}

Miguel Ángel Durán García, también conocido como Midudev es un Ingeniero de
Software con más de 15 años de experiencia en la industria. Ahora está enfocado
en crear contenido para desarrolladores y ayudarlos a crecer en sus carreras,
principalmente en la comunidad latinoamericana.

Está transmitiendo en Twitch de lunes a jueves a las 12:00 PM (UTC-5) y
creando contenido en YouTube y otras plataformas. También es un Google Developer
Expert en Tecnologías Web y una GitHub Star.

Puedes encontrarlo en:
`;

export const DESCRIPTION = (lang = 'en') => lang === 'en' ? `

The Advent JS is an iniatitive by @midudev

Check out the official website: https://adventjs.dev/

This is CLI is designed to test your solutions locally before submitting them to the platform.
Your code will be tested against the public test cases and in some cases against some random test cases.
You can use wheter JavaScript or TypeScript to solve the problems.
This description will be shown once the CLI is executed for the first time, after that, you
can choose the option to create a config file for the CLI with this option disabled by default.

This CLI will help you to:
- Create a new problem solution template to fast start
- Read the problem description
- Test your solution
- Focus on solving the problem in a local environment before submitting it to the platform
- Avoid code overhead by setting up a repository to share your solutions
` : `
El Advent JS es una iniciativa de @midudev - Midudev

Echa un vistazo al sitio web oficial: https://adventjs.dev/

Esta CLI está diseñada para probar tus soluciones localmente antes de enviarlas a la plataforma.
Tu código será probado contra los casos de prueba públicos y en algunos casos contra algunos casos de prueba aleatorios.
Puedes usar JavaScript o TypeScript para resolver los problemas.
Esta descripción se mostrará una vez que se ejecute la CLI por primera vez, después de eso, puedes
elegir la opción de crear un archivo de configuración para la CLI con esta opción deshabilitada de forma predeterminada.

Esta CLI te ayudará a:
- Crear una nueva plantilla de solución de problemas para comenzar rápidamente
- Leer la descripción del problema
- Probar tu solución
- Enfocarte en resolver el problema en un entorno local antes de enviarlo a la plataforma
- Evitar exceso de código al configurar un repositorio para compartir tus soluciones
`;

export const INITIAL_CONFIG = (lang = 'en'): Config => lang === 'en'
    ? {
        language: "es",
        version: "2023",
        flavor: "js",
        showDescription: true,
    }
    : {
        language: "es",
        version: "2023",
        flavor: "js",
        showDescription: true,
    };

import { DOMParser } from "https://deno.land/x/deno_dom@v0.1.45/deno-dom-wasm.ts";
import { assert } from "https://deno.land/std@0.217.0/assert/mod.ts";
import type { ProblemDescription } from "./types.d.ts";

const BASE_URL = (lang = 'en') => `https://adventjs.dev/${lang === 'en'
    ? '' : 'es/'}challenges/2023/`;

export const FETCH_PROBLEM_DATA = async ({
    lang = 'en',
    problem = 1,
}): Promise<ProblemDescription> => {
    const url = `${BASE_URL(lang)}${problem}`;
    const response = await fetch(url);
    const text = await response.text();
    // get the #challenge div
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/html");
    assert(doc);
    const challenge = doc.querySelector('#challenge');
    assert(challenge);
    // span with class "block truncate" inside header
    // contains the problem title
    const title = doc.querySelector('header span.block.truncate');
    assert(title);
    // Get the first 3 CamelCase words from challenge
    // remove them, and get the last one to display the problem level
    const RGX = /([A-Z][a-z]+){3}/g;
    const ABC = challenge.textContent.match(RGX);
    assert(ABC);
    const [dsc_msg, _r, level] = ABC[0].split(/([A-Z][a-z]+)/).filter(Boolean);
    return {
        title: title.textContent,
        level,
        description: `${dsc_msg}\n\n${challenge.textContent.replace(RGX, '')}`
    };
}
