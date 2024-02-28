import { Select } from "@cliffy-prompt";
import { delay } from '@delay';
import { colors, } from "@cliffy-ansi";
import * as mod from "@fs";
import { printHighlight } from '@speedHighlight';

import { ADVENT_JS_LOGO, ALTERNATIVE_LOGO } from './src/logos.ts';
import {
    DESCRIPTION, INITIAL_CONFIG, ABOUT_THE_AUTHOR, MIDU_LINKS,
    PROBLEMS, TEMPLATES as _TEMPLATES
} from './src/metadata.ts';

import type { Config, ProblemDescription } from "./src/types.d.ts";

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
    // wait for the user to 〉 Press enter
    console.log(CONFIG.language === "es"
        ? "〉 Presiona enter para continuar"
        : "〉 Press enter to continue");
    await Deno.stdin.read(new Uint8Array(1));
}

/**
 * Show the about the author of the Advent JS
 * @returns void
 * */
async function showAboutAuthor(): Promise<void> {
    console.log(ABOUT_THE_AUTHOR(CONFIG.language));
    console.table(MIDU_LINKS);
    // wait for the user to 〉 Press enter
    console.log(CONFIG.language === "es"
        ? "〉 Presiona enter para continuar"
        : "〉 Press enter to continue");
    await Deno.stdin.read(new Uint8Array(1));
}

/**
 * Check if a problem exists
 * @param problemIndex The problem index
 * @returns boolean
 *
 *
*/
async function problemExists(problemIndex: number): Promise<boolean> {
    return await mod.exists(`src/in/${problemIndex}.${CONFIG.flavor}`);
}

/**
 * Create a new problem solution template
 * @param problemIndex The problem index
 * @returns void
 * */
async function createProblemTemplate({
    problemIndex = 1
}): Promise<void> {
    // If no src/challenges/ folder exists, create it
    if (!await mod.exists("src/in")) {
        await Deno.mkdir("src/in", { recursive: true });
    }
    // Create the problem file
    // check if the file already exists
    if (await mod.exists(`src/in/${problemIndex}.${CONFIG.flavor}`)) {
        // ask the user if they want to overwrite the file
        const overwrite = await Select.prompt({
            message: CONFIG.language === "es"
                ? `El archivo src/in/${problemIndex}.${CONFIG.flavor} ya existe. ¿Quieres sobreescribirlo?`
                : `The file src/in/${problemIndex}.${CONFIG.flavor} already exists. Do you want to overwrite it?`,
            options: ["Sí", "No"],
            default: "No",
        });
        if (overwrite === "No") return;
    }

    // in the templates/js folder there are the templates for the problems
    const template = await Deno.readTextFile(`src/templates/js/${problemIndex}.js`);
    await Deno.writeTextFile(
        `src/in/${problemIndex}.${CONFIG.flavor}`,
        template
    );
    console.log(colors.green(CONFIG.language === "es"
        ? `\n ✓ Se creó un archivo para el problema ${problemIndex} en src/in/${problemIndex}.${CONFIG.flavor}\n`
        : `\n ✓ A file was created for the problem in src/in/${problemIndex}.${CONFIG.flavor}\n`));

    // // option to open the file using vi
    // const openFile = await Select.prompt({
    //     message: CONFIG.language === "es"
    //         ? "¿Quieres abrir el archivo con tu editor de código?"
    //         : "Do you want to open the file with your code editor?",
    //     options: ["Sí", "No"],
    //     default: "Sí",
    // });
    // if (openFile === "Sí") {
    //     const command = new Deno.Command(Deno.execPath(), {
    //         args: [
    //             'code',
    //             `src/in/${problemIndex}.${CONFIG.flavor}`,
    //         ]
    //     });
    //     await command.output();
    // }
    // wait for the user to 〉 Press enter

    console.log(CONFIG.language === "es"
        ? "〉 Presiona enter para continuar"
        : "〉 Press enter to continue");
    await Deno.stdin.read(new Uint8Array(1));
}

const GET_PROBLEM_DATA = ({
    lang = 'en',
    problem = 1,
}): ProblemDescription => {
    const lgCode = lang === "es" ? "es" : "en";
    return {
        title: PROBLEMS[problem].title[lgCode],
        level: PROBLEMS[problem].level[lgCode],
        lvl_code: PROBLEMS[problem].lvl_code,
        dsc_msg: PROBLEMS[problem].dsc_msg[lgCode],
        description: PROBLEMS[problem].description[lgCode],
        code: PROBLEMS[problem].code,
        ref: PROBLEMS[problem].ref[lgCode],
    };
}

async function problemMenu({
    problemIndex = 1
}): Promise<void> {
    // Options
    // 1. Create a new problem solution template to fast start
    // 2. Test your solution

    const exists = await problemExists(problemIndex);
    const option = await Select.prompt({
        message: CONFIG.language === "es"
            ? "Elige una opción:" : "Choose an option:",
        options: CONFIG.language === "es"
            ? [
                !exists
                    ? "Crear una nueva plantilla de solución"
                    : "Probar tu solución",
                // "Ir al sitio web de Advent JS",
                "Volver"
            ]
            : [
                !exists
                    ? "Create a new problem solution template"
                    : "Test your solution",
                // "Go to the Advent JS website",
                "Go back"
            ],
    });

    switch (option) {
        case "Crear una nueva plantilla de solución":
        case "Create a new problem solution template":
            await createProblemTemplate({ problemIndex });
            break;
        case "Probar tu solución":
        case "Test your solution":
            // await testSolution({ problemIndex });
            break;
        case "Volver":
        case "Go back":
            return;
    }
}

/**
 * Show the problem information
 * @returns void
 * */
async function showProblem(): Promise<void> {
    // ask for the problem number to show (1-25)
    const problemNumber = await Select.prompt({
        message: CONFIG.language === "es"
            ? "Elige un problema:"
            : "Choose a problem:",
        options: Array.from({ length: 25 }, (_, i) => {
            return {
                value: `${i + 1}`,
                name: `${PROBLEMS[i + 1].title[CONFIG.language]}`
            };
        }),
    }) as unknown as number;
    // get the problem description
    const problem = GET_PROBLEM_DATA({
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

    // show the problem menu
    await problemMenu({ problemIndex: problemNumber });
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
