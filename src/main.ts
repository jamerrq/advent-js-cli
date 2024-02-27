import { Number, Select } from "https://deno.land/x/cliffy@v1.0.0-rc.3/prompt/mod.ts";
import { delay } from 'https://deno.land/x/delay@v0.2.0/mod.ts';
import { colors, } from "https://deno.land/x/cliffy@v1.0.0-rc.3/ansi/mod.ts";
import * as mod from "https://deno.land/std@0.217.0/fs/mod.ts";
import { printHighlight } from 'https://deno.land/x/speed_highlight_js@v1.2.6/src/terminal.js';

import { ADVENT_JS_LOGO, ALTERNATIVE_LOGO } from './logos.ts';
import {
    DESCRIPTION, INITIAL_CONFIG, ABOUT_THE_AUTHOR, MIDU_LINKS,
} from './metadata.ts';
import { FETCH_PROBLEM_DATA } from './aux.ts';

import type { Config } from "./types.d.ts";

// Environment configuration
const CONFIG = {
    ...INITIAL_CONFIG("es"),
}

/**
 * Read the config file
 * @returns The content of the config file
 */
async function readConfigFile(): Promise<Record<string, string>> {
    // Check if the file exists If it does, read the file and return the content
    // If it doesn't, return an empty object
    if (await mod.exists("advent-js-config.json")) {
        const content = await Deno.readTextFile("advent-js-config.json");
        return JSON.parse(content);
    }
    return {};
}

/**
 * Print the Advent JS flag
 * @param bn optional use black and white mode
 * @param delayEffect optional use delay effect
 * @param useAlternative optional use alternative logo
 * @returns void
 */
async function printFlag({
    bn = false,
    delayEffect = true,
    useAlternative = false
}: {
    bn?: boolean;
    delayEffect?: boolean;
    useAlternative?: boolean;
}): Promise<void> {
    const trimmed = (useAlternative ? ALTERNATIVE_LOGO : ADVENT_JS_LOGO).trim();
    if (bn && !delayEffect) {
        console.log(`\n${trimmed}\n`);
        return;
    }
    const logoLines = trimmed.split("\n");
    if (bn) {
        let delayTime = 100;
        for (const line of logoLines) {
            console.log(line);
            await delay(delayTime);
            delayTime *= 0.9;
        }
        return;
    }
    const OUTSIDE_CHARS = "#@%";
    for (const line of logoLines) {
        let print = "";
        for (const char of line) {
            if (!OUTSIDE_CHARS.includes(char)) {
                if ("CONSLEDIT".includes(char)) {
                    print += colors.bgRgb24(
                        colors.rgb24(colors.bold(char), 0xFFED00), 0x24408E);
                } else print += colors.rgb24(colors.bold('█'), 0xFFED00);
            } else {
                print += colors.rgb24(colors.bold('█'), 0x24408E);
            }
        }
        console.log(print);
    }
}

/**
 * Print the description of the CLI
 * @returns void
*/
function printDescription(lang: string): void {
    if (!CONFIG.showDescription) return;
    console.log(DESCRIPTION(lang));
}

/**
 * Choose the edition of the Advent JS
 * @returns void
 */
async function chooseEdition(lang: string = "en"): Promise<void> {
    CONFIG.version = await Select.prompt({
        message: lang === "es"
            ? "Elige la edición del Advent JS [2023]:"
            : "Choose the edition of Advent JS [2023]:",
        options: ["2023"],
        default: "2023",
    }) as unknown as '2023';
}

async function chooseFlavor(lang: string = "en"): Promise<void> {
    CONFIG.flavor = await Select.prompt({
        message: lang === "es"
            ? "Elige el lenguaje para la solución de los problemas:"
            : "Choose the language to solve the problems:",
        options: ["JavaScript", "TypeScript"],
        default: "JavaScript",
    }) === "JavaScript" ? "js" : "ts";
}

/**
 * Choose the language to solve the problems
 * @returns void
 * */
async function chooseLang(lang = "en"): Promise<void> {
    CONFIG.language = await Select.prompt({
        message: lang === "español"
            ? "Elige el lenguaje para la CLI:"
            : "Choose the language for the CLI:",
        options: ["español", "english"],
        default: lang === "es" ? "español" : "english",
    }) === "español" ? "es" : "en";
}

/**
 * Create the config file
 * @param config The configuration to write in the file
 * @returns void
 * */
async function createConfigFile(config: Config): Promise<void> {
    await Deno.writeTextFile("advent-js-config.json", JSON.stringify(config));
}

/**
 * Show the current config
 * @returns void
 * */
async function showCurrentConfig(): Promise<void> {
    const config = await readConfigFile();
    console.log(CONFIG.language === "es"
        ? "Configuración actual:" : "Current config:");
    console.table(config);
    // wait for the user to press a key
    console.log(CONFIG.language === "es"
        ? "Presiona una tecla para continuar"
        : "Press a key to continue");
    await Deno.stdin.read(new Uint8Array(1));
}

/**
 * Show the about the author of the Advent JS
 * @returns void
 * */
async function showAboutAuthor(): Promise<void> {
    console.log(ABOUT_THE_AUTHOR(CONFIG.language));
    console.table(MIDU_LINKS);
    // wait for the user to press a key
    console.log(CONFIG.language === "es"
        ? "Presiona una tecla para continuar"
        : "Press a key to continue");
    await Deno.stdin.read(new Uint8Array(1));
}

/**
 * Show the problem information
 * @returns void
 * */
async function showProblem(): Promise<void> {
    // ask for the problem number to show (1-25)
    const problemNumber = await Number.prompt({
        message: CONFIG.language === "es"
            ? "Número del problema (1-25):"
            : "Problem number (1-25):",
        min: 1,
        max: 25,
        default: 1,
    });
    // get the problem description
    const problem = await FETCH_PROBLEM_DATA({
        lang: CONFIG.language,
        problem: problemNumber,
    });
    // show the problem description
    const { title, level, description, dsc_msg, code, ref, lvl_code } = problem;
    console.log(`\n${title}`);
    const colorsMap = {
        0: colors.green,
        1: colors.yellow,
        2: colors.red,
    };
    console.log(`\n${colorsMap[lvl_code](level)}`);
    console.log(colors.yellow(`\n${dsc_msg}`));
    console.log(`\n${description}`);
    if (code) {
        console.log(colors.green(CONFIG.language === "es"
            ? "\nAlgunos ejemplos:\n" : "\nSome examples:\n"));
        await printHighlight(code, 'js');
    }
    console.log(colors.blue(ref));
    // wait for the user to press a key
    console.log(CONFIG.language === "es"
        ? "〉 Presiona una tecla para continuar"
        : "〉 Press a key to continue");
    await Deno.stdin.read(new Uint8Array(1));
}

/**
 * Show the menu
 * @returns void
 * */
async function menu(): Promise<void | 1> {
    // yellow blue title
    console.log(colors.bgRgb24(colors.rgb24(" ADVENT JS console edition ", 0xFFED00), 0x24408E));
    console.log();
    const option = await Select.prompt({
        message: CONFIG.language === "es"
            ? "Elige una opción:" : "Choose an option:",
        options: CONFIG.language === "es"
            ? [
                "Explora los retos",
                "Mostrar configuración actual",
                "Cambiar configuración",
                "Sobre @midudev",
                "Salir"
            ]
            : [
                "Explore challenges",
                "Show current config",
                "Change config",
                "About @midudev",
                "Exit"
            ],
    });
    switch (option) {
        case "Explora los retos":
        case "Explore challenges":
            await showProblem();
            break;
        case "Mostrar configuración actual":
        case "Show current config":
            await showCurrentConfig();
            break;
        case "Cambiar configuración":
        case "Change config":
            await setup(true);
            break;
        case "Sobre @midudev":
        case "About @midudev":
            await showAboutAuthor();
            break;
        case "Salir":
        case "Exit":
            return 1;
    }
}

/**
 * Setup the CLI
 * @returns void
 * */
async function setup(override = false): Promise<void> {

    if (!override && await mod.exists("advent-js-config.json")) {
        const config = await readConfigFile();
        CONFIG.language = config.language === "es" ? "es" : "en";
        CONFIG.version = +config.version as unknown as '2023';
        CONFIG.flavor = config.flavor === "js" ? "js" : "ts";
        CONFIG.showDescription = Boolean(config.showDescription);
        return;
    }

    // Welcome message
    await printFlag({ bn: false });
    console.log("\n");

    // Choose language
    await chooseLang(CONFIG.language);

    // Print description
    printDescription(CONFIG.language);

    // Choose edition
    await chooseEdition(CONFIG.language);

    // Choose flavor
    await chooseFlavor(CONFIG.language);

    // Save changes
    await createConfigFile(CONFIG);
}

/**
 * Main function
 * @returns void
 * */
async function main(): Promise<void> {
    console.clear();
    while (true) {
        console.clear();
        const result = await menu();
        if (result) break;
    }
}

if (import.meta.main) {
    await setup();
    await main();
}
