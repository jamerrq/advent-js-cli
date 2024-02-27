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
    const RGX = /([A-ZÁÉÍÓÚÑ][a-záéíóúñ]+){3}/g;
    const ABC = challenge.textContent.match(RGX);
    assert(ABC);
    const [dsc_msg, _r, level] = ABC[0].split(/([A-Z][a-z]+)/).filter(Boolean);
    // remove the code block from the challenge
    const codeBlock = challenge.querySelector('pre');
    if (codeBlock) {
        codeBlock.remove();
    }
    const description = balanceText(
        `${challenge.textContent.replace(RGX, '')}`
    )
    const lvl_code = ({
        'Easy': 0,
        'Fácil': 0,
        'Medium': 1,
        'Medio': 1,
        'Hard': 2,
        'Difícil': 2,
    }[level] ?? 0) as 0 | 1 | 2;
    return {
        title: title.textContent,
        level: lang === 'en' ? `Level: ${level}` : `Nivel: ${level}`,
        dsc_msg,
        description,
        ref: `\n${lang === 'en' ? 'Reference: ' : 'Referencia: '}${url}\n`,
        code: codeBlock?.textContent || '',
        lvl_code,
    };
}

export const balanceText = (text: string, max = 80): string => {
    const lines = text.split('\n');
    const balanced = lines.map((line) => {
        if (line.length > max) {
            return line.match(new RegExp(`.{1,${max}}`, 'g'))!.join('\n');
        }
        return line;
    });
    return balanced.join('\n');
}
