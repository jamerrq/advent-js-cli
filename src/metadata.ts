import { MIDUFACE } from './logos.ts';
import type { Config, BiProblemDescription } from "./types.d.ts";

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

The Advent JS is an iniatitive by @midudev, Miguel Ángel Durán García

Check out the official website: https://adventjs.dev/

This version is designed to test your solutions locally before submitting them to the platform.
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
El Advent JS es una iniciativa de @midudev, Miguel Ángel Durán García

Echa un vistazo al sitio web oficial: https://adventjs.dev/

Esta versión está diseñada para probar tus soluciones localmente antes de enviarlas a la plataforma.
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

export const PROBLEMS: Record<number, BiProblemDescription> = {
    1: {
        "title": {
            "en": "Challenge #1: 🎁 First gift repeated!",
            "es": "Reto #1: 🎁 ¡Primer regalo repetido!"
        },
        "level": {
            "en": "Level: Easy",
            "es": "Nivel: Fácil"
        },
        "lvl_code": 0,
        "dsc_msg": {
            "en": "Instructions",
            "es": "Instrucciones"
        },
        "description": {
            "en": "In the toy factory of the North Pole, each toy has a unique identification numbe\nr.\nHowever, due to an error in the toy machine, some numbers have been assigned to \nmore than one toy.\nFind the first identification number that has been repeated, where the second oc\ncurrence has the smallest index!\nIn other words, if there is more than one repeated number, you must return the n\number whose second occurrence appears first in the list. If there are no repeate\nd numbers, return -1.\n\nWatch out! The elves say this is a Google technical test.",
            "es": "En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identi\nficación único.\nSin embargo, debido a un error en la máquina de juguetes, algunos números se han\n asignado a más de un juguete.\n¡Encuentra el primer número de identificación que se ha repetido, donde la segun\nda ocurrencia tenga el índice más pequeño!\nEn otras palabras, si hay más de un número repetido, debes devolver el número cu\nya segunda ocurrencia aparezca primero en la lista. Si no hay números repetidos,\n devuelve -1.\n\n¡Ojo! Los elfos dicen que esto es una prueba técnica de Google."
        },
        "code": "const giftIds = [2, 1, 3, 5, 3, 2]\nconst firstRepeatedId = findFirstRepeated(giftIds)\nconsole.log(firstRepeatedId) // 3\n// Even though 2 and 3 are repeated\n// 3 appears second time first\n\nconst giftIds2 = [1, 2, 3, 4]\nconst firstRepeatedId2 = findFirstRepeated(giftIds2)\nconsole.log(firstRepeatedId2) // -1\n// It is -1 since no number is repeated\n\nconst giftIds3 = [5, 1, 5, 1]\nconst firstRepeatedId3 = findFirstRepeated(giftIds3)\nconsole.log(firstRepeatedId3) // 5\n",
        "ref": {
            "en": "\nReference: https://adventjs.dev/challenges/2023/1\n",
            "es": "\nReferencia: https://adventjs.dev/es/challenges/2023/1\n"
        }
    },
    2: {
        "title": {
            "en": "Challenge #2: 🏭 We start the factory",
            "es": "Reto #2: 🏭 Ponemos en marcha la fábrica"
        },
        "level": {
            "en": "Level: Easy",
            "es": "Nivel: Fácil"
        },
        "lvl_code": 0,
        "dsc_msg": {
            "en": "Instructions",
            "es": "Instrucciones"
        },
        "description": {
            "en": "In Santa's workshop, the elves have a gift list they wish to make and a limited \nset of materials.\nGifts are strings of text and materials are characters. Your task is to write a \nfunction that, given a list of gifts and the available materials, returns a list\n of the gifts that can be made.\nA gift can be made if we have all the necessary materials to make it.\n",
            "es": "En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar\n y un conjunto limitado de materiales.\nLos regalos son cadenas de texto y los materiales son caracteres. Tu tarea es es\ncribir una función que, dada una lista de regalos y los materiales disponibles, \ndevuelva una lista de los regalos que se pueden fabricar.\nUn regalo se puede fabricar si contamos con todos los materiales necesarios para\n fabricarlo.\n"
        },
        "code": "const gifts = ['tren', 'oso', 'pelota']\nconst materials = 'tronesa'\n\nmanufacture(gifts, materials) // [\"tren\", \"oso\"]\n\nconst gifts = ['juego', 'puzzle']\nconst materials = 'jlepuz'\n\nmanufacture(gifts, materials) // [\"puzzle\"]\n\nconst gifts = ['libro', 'ps5']\nconst materials = 'psli'\n\nmanufacture(gifts, materials) // []\n",
        "ref": {
            "en": "\nReference: https://adventjs.dev/challenges/2023/2\n",
            "es": "\nReferencia: https://adventjs.dev/es/challenges/2023/2\n"
        }
    },
    3: {
        "title": {
            "en": "Challenge #3: 😏 The naughty elf",
            "es": "Reto #3: 😏 El elfo travieso"
        },
        "level": {
            "en": "Level: Easy",
            "es": "Nivel: Fácil"
        },
        "lvl_code": 0,
        "dsc_msg": {
            "en": "Instructions",
            "es": "Instrucciones"
        },
        "description": {
            "en": "In Santa's workshop, a mischievous elf has been playing around with the gift pro\nduction line, adding or removing an unplanned step.\nYou have the original sequence of original manufacturing steps and the modified \nmodified sequence that may include an extra step or be missing a step.\nYour task is to write a function that identifies and returns the first extra ste\np that was added or removed in the manufacturing chain. If there is no differenc\ne between the sequences, return an empty string.\n\nPlease, keep in mind:\n\nThere will always be one different step or none.\nThe modification can occur anywhere in the string.\nThe original steps could be empty\n",
            "es": "En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabric\nación de regalos, añadiendo o eliminando un paso no planificado.\nTienes la secuencia original de pasos en la fabricación original y la secuencia \nmodificada modified que puede incluir un paso extra o faltar un paso.\nTu tarea es escribir una función que identifique y devuelva el primer paso extra\n que se ha añadido o eliminado en la cadena de fabricación. Si no hay ninguna di\nferencia entre las secuencias, devuelve una cadena vacía.\n\nA tener en cuenta:\n\nSiempre habrá un paso de diferencia o ninguno.\nLa modificación puede ocurrir en cualquier lugar de la cadena.\nLa secuencia original puede estar vacía\n"
        },
        "code": "const original = 'abcd'\nconst modified = 'abcde'\nfindNaughtyStep(original, modified) // 'e'\n\nconst original = 'stepfor'\nconst modified = 'stepor'\nfindNaughtyStep(original, modified) // 'f'\n\nconst original = 'abcde'\nconst modified = 'abcde'\nfindNaughtyStep(original, modified) // ''\n",
        "ref": {
            "en": "\nReference: https://adventjs.dev/challenges/2023/3\n",
            "es": "\nReferencia: https://adventjs.dev/es/challenges/2023/3\n"
        }
    },
    4: {
        "title": {
            "en": "Challenge #4: 😵‍💫 Turn the parentheses around",
            "es": "Reto #4: 😵‍💫 Dale la vuelta a los paréntesis"
        },
        "level": {
            "en": "Level: Medium",
            "es": "Nivel: Medio"
        },
        "lvl_code": 1,
        "dsc_msg": {
            "en": "Instructions",
            "es": "Instrucciones"
        },
        "description": {
            "en": "In 🎅 Santa's workshop, some Christmas messages have been written in a peculiar \nway: the words within the brackets must be read backwards.\nSanta needs these messages to be correctly formatted. Your task is to write a fu\nnction that takes a string and reverses the characters within each pair of paren\ntheses, removing the parentheses as well.\nHowever, bear in mind that there may be nested parentheses, so you should revers\ne the characters in the correct order.\n\nNotes:\n\nThe input strings will always be well formed with parentheses that match correct\nly, you do not need to validate them.\nThere should not be any parentheses left in the final message.\nThe maximum nesting level is 2.\n",
            "es": "En el taller de Santa 🎅, algunos mensajes navideños han sido escritos de manera\n peculiar: las letras dentro de los paréntesis deben ser leídas al revés\nSanta necesita que estos mensajes estén correctamente formateados. Tu tarea es e\nscribir una función que tome una cadena de texto y revierta los caracteres dentr\no de cada par de paréntesis, eliminando los paréntesis en el mensaje final.\nEso sí, ten en cuenta que pueden existir paréntesis anidados, por lo que debes i\nnvertir los caracteres en el orden correcto.\n\nNotas:\n\nLas cadenas de entrada siempre estarán bien formadas con paréntesis que coincide\nn correctamente, no necesitas validarlos.\nEn el mensaje final no deben quedar paréntesis.\nEl nivel máximo de anidamiento es 2.\n"
        },
        "code": "const a = decode('hola (odnum)')\nconsole.log(a) // hola mundo\n\nconst b = decode('(olleh) (dlrow)!')\nconsole.log(b) // hello world!\n\nconst c = decode('sa(u(cla)atn)s')\nconsole.log(c) // santaclaus\n\n// Step by step:\n// 1. Reverse the nested -> sa(ualcatn)s\n// 2. Reverse the remaining one -> santaclaus\n",
        "ref": {
            "en": "\nReference: https://adventjs.dev/challenges/2023/4\n",
            "es": "\nReferencia: https://adventjs.dev/es/challenges/2023/4\n"
        }
    },
    5: {
        "title": {
            "en": "Challenge #5: 🛷 Santa's CyberTruck",
            "es": "Reto #5: 🛷 El CyberTruck de Santa"
        },
        "level": {
            "en": "Level: Medium",
            "es": "Nivel: Medio"
        },
        "lvl_code": 1,
        "dsc_msg": {
            "en": "Instructions",
            "es": "Instrucciones"
        },
        "description": {
            "en": "Santa 🎅 is testing his new electric sled, the CyberReindeer, on a North Pole ro\nad. The road is represented by a string of characters, where:\n\n. = Road\nS = Santa's Sled\n* = Open barrier\n| = Closed barrier\n\nExample of a road: S...|....|.....\nEach unit of time, the sled moves one position to the right. If it encounters a \nclosed barrier, it stops until the barrier opens. If it is open, it goes through\n directly.\nAll barriers start closed, but after 5 units of time, they all open forever.\nCreate a function that simulates the sled's movement for a given time and return\ns an array of strings representing the state of the road at each unit of time:\n\nThe result is an array where each element shows the road at each unit of time.\nTake into account that if the sled is in the same position as a barrier, then it\n takes its place in the array.\nThe elves were inspired by this Code Wars challenge.",
            "es": "Santa 🎅 está probando su nuevo trineo eléctrico, el CyberReindeer, en una carre\ntera del Polo Norte. La carretera se representa con una cadena de caracteres, do\nnde:\n\n. = Carretera\nS = Trineo de Santa\n* = Barrera abierta\n| = Barrera cerrada\n\nEjemplo de carretera: S...|....|.....\nCada unidad de tiempo, el trineo avanza una posición a la derecha. Si encuentra \nuna barrera cerrada, se detiene hasta que la barrera se abra. Si está abierta, l\na atraviesa directamente.\nTodas las barreras empiezan cerradas, pero después de 5 unidades de tiempo, se a\nbren todas para siempre.\nCrea una función que simule el movimiento del trineo durante un tiempo dado y de\nvuelva un array de cadenas representando el estado de la carretera en cada unida\nd de tiempo:\n\nEl resultado es un array donde cada elemento muestra la carretera en cada unidad\n de tiempo.\nTen en cuenta que si el trineo está en la misma posición que una barrera, entonc\nes toma su lugar en el array.\nLos elfos se inspiraron en este reto de Code Wars."
        },
        "code": "const road = 'S..|...|..'\nconst time = 10 // units of time\nconst result = cyberReindeer(road, time)\n\n/* -> result:\n[\n  'S..|...|..', // initial state\n  '.S.|...|..', // sled advances on the road\n  '..S|...|..', // sled advances on the road\n  '..S|...|..', // sled stops at the barrier\n  '..S|...|..', // sled stops at the barrier\n  '...S...*..', // barrier opens, sled advances\n  '...*S..*..', // sled advances on the road\n  '...*.S.*..', // sled advances on the road\n  '...*..S*..', // sled advances on the road\n  '...*...S..', // passes through the open barrier\n]\n*/\n",
        "ref": {
            "en": "\nReference: https://adventjs.dev/challenges/2023/5\n",
            "es": "\nReferencia: https://adventjs.dev/es/challenges/2023/5\n"
        }
    },
    6: {
        "title": {
            "en": "Challenge #6: 🦌 The reindeer on trial",
            "es": "Reto #6: 🦌 Los renos a prueba"
        },
        "level": {
            "en": "Level: Easy",
            "es": "Nivel: Fácil"
        },
        "lvl_code": 0,
        "dsc_msg": {
            "en": "Instructions",
            "es": "Instrucciones"
        },
        "description": {
            "en": "The elves are cataloging Santa's reindeer 🦌 based on the distance they can trav\nel.\nFor this, they have a text string movements where each character represents the \ndirection of the reindeer's movement:\n\n> = Moves to the right\n< = Moves to the left\n* = Can move forward or backward\n\nFor example, if the movement is >>*<, it goes to the right twice, then it can go\n either left or right (whichever maximizes the final traveled distance) and then\n left.\nThe elves want to know what the maximum distance the reindeer travels is after c\nompleting all movements.\nIn the previous example, the maximum distance the reindeer travels is 2. It goes\n to the right twice +2, then with the * it can go to the right again to maximize\n the distance +1 and then it goes to the left -1.\nCreate a maxDistance function that takes the text string movements and returns t\nhe maximum distance that the reindeer can travel in any direction:\n\nKeep in mind that it doesn't matter whether it is to the left or right, the dist\nance is the absolute value of the maximum distance traveled at the end of the mo\nvements.",
            "es": "Los elfos están catalogando los renos de Santa 🦌 según la distancia que pueden \nrecorrer.\nPara ello tienen una cadena de texto movements donde cada caracter representa la\n dirección del movimiento del reno:\n\n> = Avanza a la derecha\n< = Avanza a la izquierda\n* = Puede avanzar o retroceder\n\nPor ejemplo, si el movimiento es >>*<, va hacia la derecha dos veces, luego pued\ne ir a derecha o izquierda (lo que maximice la distancia recorrida final) y lueg\no ir a la izquierda.\nLos elfos quieren saber cuál es la máxima distancia que recorre el reno al final\nizar todos los movimientos.\nEn el ejemplo anterior, la máxima distancia que recorre el reno es 2. Va a la de\nrecha dos veces +2, luego con el * puede ir a la derecha otra vez para maximizar\n la distancia +1 y luego va a la izquierda -1.\nCrea una función maxDistance que reciba la cadena de texto movements y devuelva \nla máxima distancia que puede recorrer el reno en cualquier dirección:\n\nTen en cuenta que no importa si es a la izquierda o la derecha, la distancia es \nel valor absoluto de la distancia recorrida máxima al finalizar los movimientos."
        },
        "code": "const movements = '>>*<'\nconst result = maxDistance(movements)\nconsole.log(result) // -> 2\n\nconst movements2 = '<<<>'\nconst result2 = maxDistance(movements2)\nconsole.log(result2) // -> 2\n\nconst movements3 = '>***>'\nconst result3 = maxDistance(movements3)\nconsole.log(result3) // -> 5\n",
        "ref": {
            "en": "\nReference: https://adventjs.dev/challenges/2023/6\n",
            "es": "\nReferencia: https://adventjs.dev/es/challenges/2023/6\n"
        }
    },
    7: {
        "title": {
            "en": "Challenge #7: 📦 The 3D boxes",
            "es": "Reto #7: 📦 Las cajas en 3D"
        },
        "level": {
            "en": "Level: Easy",
            "es": "Nivel: Fácil"
        },
        "lvl_code": 0,
        "dsc_msg": {
            "en": "Instructions",
            "es": "Instrucciones"
        },
        "description": {
            "en": "Santa is experimenting with new gift designs and he needs your help to visualize\n them in 3D.\nYour task is to write a function that, given a size n (integer), generates a dra\nwing of a 3D gift using ASCII characters.\nThe lines of the gifts are drawn with # and the faces with the symbol passed to \nus as a parameter:\n\nImportant: We have been told that there is always to leave a newline at the end \nof the drawing.",
            "es": "Santa está experimentando con nuevos diseños de regalos y necesita tu ayuda para\n visualizarlos en 3D.\nTu tarea es escribir una función que, dado un tamaño n (entero), genere un dibuj\no de un regalo en 3D utilizando caracteres ASCII.\nLas líneas de los regalos se dibujan con # y las caras con el símbolo que nos pa\nsan como parámetro:\n\nImportante: Nos han dicho que siempre hay que dejar un salto de línea al final d\nel dibujo.\nNota: Ten en cuenta que, en los tests, la primera línea se ve empujada por el ca\nracter \"."
        },
        "code": "drawGift(4, '+')\n\n/*\n   ####\n  #++##\n #++#+#\n####++#\n#++#+#\n#++##\n####\n*/\n\ndrawGift(5, '*')\n/*\n    #####\n   #***##\n  #***#*#\n #***#**#\n#####***#\n#***#**#\n#***#*#\n#***##\n#####\n*/\n\ndrawGift(1, '^')\n/*\n#\n*/\n",
        "ref": {
            "en": "\nReference: https://adventjs.dev/challenges/2023/7\n",
            "es": "\nReferencia: https://adventjs.dev/es/challenges/2023/7\n"
        }
    },
    8: {
        "title": {
            "en": "Challenge #8: 🏬 Sorting the warehouse",
            "es": "Reto #8: 🏬 Ordenando el almacén"
        },
        "level": {
            "en": "Level: Medium",
            "es": "Nivel: Medio"
        },
        "lvl_code": 1,
        "dsc_msg": {
            "en": "Instructions",
            "es": "Instrucciones"
        },
        "description": {
            "en": "The elves are very busy in Santa Claus' workshop organizing gifts 🎁 for Christm\nas Eve 🎄.\nThe input format is special, as it indicates the number of gifts and the type of\n gift with letters from a to z. For example, '66a11b' means 66 a gifts and 11 b \ngifts.\nThe elves have a special system for organizing the gifts:\n\nEvery 10 gifts of the same type are packed in a box, represented by {x}. For exa\nmple, 20 type a gifts are packed in two boxes like this: {a}{a}.\nEvery 5 boxes are stacked on a pallet, represented by [x]. For example, 10 a box\nes are stacked on 2 pallets in this way: [a][a]\nAny additional gift is placed in a bag, represented by () and all of them are pl\naced inside. For example, 4 b gifts are placed in a bag like this (bbbb)\n\nThe gifts are then placed in the following order: pallets, boxes and bags. And t\nhe gifts appear in the same order as the input string.\nYour task is to write a function organizeGifts that takes a string of gifts as a\nn argument and returns a string representing the warehouse.\n",
            "es": "Los elfos están muy ocupados en el taller de Santa Claus organizando regalos 🎁 \npara la víspera de Navidad 🎄.\nEl formato de entrada es especial, ya que indica el número de regalos y el tipo \nde regalo con letras de la a a la z. Por ejemplo, '66a11b' significa 66 regalos \na y 11 regalos b.\nLos elfos tienen un sistema especial para organizar los regalos:\n\nCada 10 regalos del mismo tipo se empaquetan en una caja, representada por {x}. \nPor ejemplo, 20 regalos tipo a se empaquetan en 2 cajas así: {a}{a}.\nCada 5 cajas se apilan en un palé, representado por [x]. Por ejemplo, 10 cajas d\ne a se apilan en 2 palés de esta manera: [a][a]\nCualquier regalo adicional se coloca en una bolsa, representada por () y se colo\ncan todas dentro. Por ejemplo 4 regalos de b se colocan en una bolsa así (bbbb)\n\nLos regalos luego se colocan en el siguiente orden: palés, cajas y bolsas. Y los\n regalos aparecen en el mismo orden que la cadena de entrada.\nTu tarea es escribir una función organizeGifts que tome una cadena de regalos co\nmo argumento y devuelva una cadena representando el almacén.\n"
        },
        "code": "const result1 = organizeGifts('76a11b')\nconsole.log(result1)\n// `[a]{a}{a}(aaaaaa){b}(b)`\n\n/* Explanation:\n\n  76a: 76 gifts type 'a' would be packed in 7 boxes and 6 gifts would be left, resulting in 1 pallet [a] (for the first 5 boxes), 2 loose boxes {a}{a} and a bag with 6 gifts (aaaaaa)\n\n  11b: 11 gifts type 'b' would be packed in 1 box and 1 gift would be left, resulting in 1 loose box {b} and a bag with 1 gift (b)\n",
        "ref": {
            "en": "\nReference: https://adventjs.dev/challenges/2023/8\n",
            "es": "\nReferencia: https://adventjs.dev/es/challenges/2023/8\n"
        }
    },
    9: {
        "title": {
            "en": "Challenge #9: 🚦 Switch the lights",
            "es": "Reto #9: 🚦 Alterna las luces"
        },
        "level": {
            "en": "Level: Easy",
            "es": "Nivel: Fácil"
        },
        "lvl_code": 0,
        "dsc_msg": {
            "en": "Instructions",
            "es": "Instrucciones"
        },
        "description": {
            "en": "They are turning on the Christmas lights 🎄 in the city and, as every year, they\n have to be fixed!\nThe lights are of two colors: 🔴 and 🟢 . For the effect to be appropriate, they\n must always alternate. That is, if the first light is red, the second must be g\nreen, the third red, the fourth green, etc.\nWe have been asked to write a function adjustLights that, given an array of stri\nngs with the color of each light, return the minimum number of lights that need \nto be changed for the colors to alternate.\n",
            "es": "Están encendiendo las luces de Navidad 🎄 en la ciudad y, como cada año, ¡hay qu\ne arreglarlas!\nLas luces son de dos colores: 🔴 y 🟢 . Para que el efecto sea el adecuado, siem\npre deben estar alternadas. Es decir, si la primera luz es roja, la segunda debe\n ser verde, la tercera roja, la cuarta verde, etc.\nNos han pedido que escribamos una función adjustLights que, dado un array de str\nings con el color de cada luz (representados con los emojis 🔴 para el rojo y 🟢\n para el verde), devuelva el número mínimo de luces que hay que cambiar para que\n estén los colores alternos.\n"
        },
        "code": "adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])\n// -> 1 (you change the fourth light to 🔴)\n\nadjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])\n// -> 2 (you change the second light to 🟢 and the third to 🔴)\n\nadjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])\n// -> 0 (they are already alternating)\n\nadjustLights(['🔴', '🔴', '🔴'])\n// -> 1 (you change the second light to 🟢)\n",
        "ref": {
            "en": "\nReference: https://adventjs.dev/challenges/2023/9\n",
            "es": "\nReferencia: https://adventjs.dev/es/challenges/2023/9\n"
        }
    },
    10: {
        "title": {
            "en": "Challenge #10: 🎄 Create your own Christmas tree",
            "es": "Reto #10: 🎄 Crea tu propio árbol de navidad"
        },
        "level": {
            "en": "Level: Easy",
            "es": "Nivel: Fácil"
        },
        "lvl_code": 0,
        "dsc_msg": {
            "en": "Instructions",
            "es": "Instrucciones"
        },
        "description": {
            "en": "What an idea Sam Elfman has had! He wants to offer a service that creates a cust\nomized Christmas tree 🎄 in a matter of seconds.\nTo create it, we are given a string to form the tree and a number that indicates\n its height.\nEach character of the string represents an ornament of the tree, and we use them\n cyclically until we reach the indicated height. At least, they will always pass\n us one.\nWe must return a multiline string with the Christmas tree made with the ornament\ns, the indicated height plus a final line with the trunk formed by the character\n | in the center and, finally, a newline \\n.\nFor example, if we receive the string \"123\" and the number 4 as height, we would\n have to build this tree:\n\nIf we receive the string *@o and the number 3, the tree we should return is:\n  *\n @ o\n* @ o\n  |\n\nNote:\n\nThe tree should always be centered, for that reason add blank spaces to the left\n of each line.\nCreate spaces only to the left of each line of the tree. Do not leave blank spac\nes to the right.\nThe ornaments have a white space between them for separation.\n",
            "es": "¡Vaya idea ha tenido Sam Elfman! Quiere ofrecer un servicio que te crea un árbol\n de Navidad 🎄 personalizado en cuestión de segundos.\nPara crearlo nos pasan una cadena de caracteres para formar el árbol y un número\n que indica la altura del mismo.\nCada carácter de la cadena representa un adorno del árbol, y vamos utilizándolos\n de forma cíclica hasta llegar a la altura indicada. Como mínimo siempre nos pas\narán uno.\nDebemos devolver un string multilínea con el árbol de Navidad formado con los ad\nornos, la altura indicada más una última línea con el tronco formado por el cará\ncter | en el centro y, finalmente, un salto de línea \\n.\nPor ejemplo si recibimos la cadena \"123\" y el número 4 como altura, tendríamos q\nue construir este árbol:\n\nSi recibimos la cadena *@o y el número 3, el árbol que debemos devolver es:\n  *\n @ o\n* @ o\n  |\n\nNota:\n\nEl árbol siempre debe estar centrado, para ello añade espacios en blanco a la iz\nquierda de cada línea.\nCrea espacios sólo a la izquierda de cada línea del árbol. No dejes espacios en \nblanco a la derecha.\nLos adornos tienen un espacio en blanco entre ellos de separación.\nSi te fallan los tests y visualmente parece que el árbol está bien, comprueba qu\ne no haya espacios en blanco que sobren, especialmente a la derecha de cada líne\na.\n"
        },
        "code": "   1\n  2 3\n 1 2 3\n1 2 3 1\n   |\n",
        "ref": {
            "en": "\nReference: https://adventjs.dev/challenges/2023/10\n",
            "es": "\nReferencia: https://adventjs.dev/es/challenges/2023/10\n"
        }
    },
    11: {
        "title": {
            "en": "Challenge #11: 📖 The studious elves",
            "es": "Reto #11: 📖 Los elfos estudiosos"
        },
        "level": {
            "en": "Level: Medium",
            "es": "Nivel: Medio"
        },
        "lvl_code": 1,
        "dsc_msg": {
            "en": "Instructions",
            "es": "Instrucciones"
        },
        "description": {
            "en": "In Santa's workshop, the elves love puzzles 🧠. This year, they have created a s\npecial one: a challenge to form a Christmas palindrome.\nA palindrome is a word that reads the same forwards and backwards. The elves wan\nt to know if it is possible to form a palindrome by making, at most, one exchang\ne of letters.\nCreate a function get that receives a string and returns:\n\nIf it is already a palindrome, an empty array.\nIf it is not possible, null.\nIf a palindrome can be formed with one change, an array with the two positions (\nindexes) that must be swapped to create it.\n\nFor example:\n\nIf the palindrome can be formed with different swaps, always return the first on\ne found.",
            "es": "En el taller de Santa, los elfos aman los acertijos 🧠. Este año, han creado uno\n especial: un desafío para formar un palíndromo navideño.\nUn palíndromo es una palabra que se lee igual hacia adelante y hacia atrás. Los \nelfos quieren saber si es posible formar un palíndromo haciendo, como mucho, un \nintercambio de letras.\nCrea una función get que reciba una cadena de caracteres y devolverá:\n\nSi ya es un palíndromo, un array vacío.\nSi no es posible, null.\nSi se puede formar un palíndromo con un cambio, un array con las dos posiciones \n(índices) que se deben intercambiar para poder crearlo.\n\nPor ejemplo:\n\nSi se puede formar el palíndromo con diferentes intercambios, siempre se debe de\nvolver el primero que se encuentre."
        },
        "code": "getIndexsForPalindrome('anna') // []\ngetIndexsForPalindrome('abab') // [0, 1]\ngetIndexsForPalindrome('abac') // null\ngetIndexsForPalindrome('aaaaaaaa') // []\ngetIndexsForPalindrome('aaababa') // [1, 3]\ngetIndexsForPalindrome('caababa') // null\n",
        "ref": {
            "en": "\nReference: https://adventjs.dev/challenges/2023/11\n",
            "es": "\nReferencia: https://adventjs.dev/es/challenges/2023/11\n"
        }
    },
    12: {
        "title": {
            "en": "Challenge #12: 📸 Is it a valid copy?",
            "es": "Reto #12: 📸 ¿Es una copia válida?"
        },
        "level": {
            "en": "Level: Medium",
            "es": "Nivel: Medio"
        },
        "lvl_code": 1,
        "dsc_msg": {
            "en": "Instructions",
            "es": "Instrucciones"
        },
        "description": {
            "en": "In the North Pole they still use paper photocopiers. Elves use them to copy the \nletters that children send to Santa, so they can send them to all the gift depar\ntments.\nHowever, they are very old and do not work very well. Every time they make a cop\ny, the quality of the copy slightly decreases, a phenomenon known as generation \nloss.\nYou need to detect if a letter is a copy of another. The letters are very long a\nnd you can't read them, but you can compare them with an algorithm.\nThere is a high probability that a character will degrade with each copy (it doe\nsn't always happen!). And when it happens, the rule it follows is:\n\nThe characters from A to Z degrade from capital letters to lower-case letters (A\n-Z ⇒ a-z)\nLetters degrade in a series of characters in this order: a-z ⇒ # ⇒ + ⇒ : ⇒ . ⇒ \nOnce the letters have degraded into the symbols, they can continue to degrade.\nNote that the last one is a blank space, not an empty character.\nCharacters that are not letters (like digits) do not degrade.\n\nKnowing this and receiving two letters. The supposed original and the copy. You \nmust determine if the copy is a copy of the other.\n\nTo understand how photocopiers and their degradation work, look at this example:\noriginal:  'Santa Claus'\n1st copy:  'santa cla#s'\n2nd copy:  'sa#t# cl#+s'\n3rd copy:  'sa+## c#+:s'\n4th copy:  's#++. c+:.s'\n5th copy:  's#+:. c:. s'\n\nTherefore s#+:. c+:++ is a valid copy of Santa Claus. And, as you see, the degra\ndation of the letters does not occur in a specific order, it is random.\nBased on the CodeWars challenge Photocopy decay",
            "es": "En el Polo Norte todavía usan fotocopiadoras de papel. Los elfos las usan para c\nopiar las cartas que los niños envían a Santa y así poder enviarlas a todos los \ndepartamentos de regalos.\nSin embargo ya son muy viejas y no funcionan muy bien. Cada vez que hacen una co\npia, la calidad de la copia disminuye ligeramente, un fenómeno conocido como pér\ndida generacional.\nNecesitas detectar si una carta es una copia de otra. Las cartas son muy largas \ny no puedes leerlas, pero puedes compararlas con un algoritmo.\nExiste una gran probabilidad de que un caracter se degrade en cada copia (¡no pa\nsa siempre!). Y al ocurrir, la regla que sigue es:\n\nLos caracteres de la A a la Z se degradan de mayúsculas a minúsculas (A-Z ⇒ a-z)\nLas letras se degradan en una serie de caracteres en este orden: a-z ⇒ # ⇒ + ⇒ :\n ⇒ . ⇒ \nUna vez degradadas las letras en los símbolos, se pueden continuar degradando.\nTen en cuenta que el último es un espacio en blanco, no un caracter vacío.\nLos caracteres que no son letras (como los dígitos) no se degradan.\n\nSabiendo esto y recibiendo dos cartas. La supuesta original y la copia. Debes de\nterminar si la copia es una copia de la otra.\n\nPara entender cómo funcionan las fotocopiadoras y su degradación, mira este ejem\nplo:\noriginal:  'Santa Claus'\n1ª copia:  'santa cla#s'\n2ª copia:  'sa#t# cl#+s'\n3ª copia:  'sa+## c#+:s'\n4ª copia:  's#++. c+:.s'\n5ª copia:  's#+:. c:. s'\n\nPor lo tanto s#+:. c+:++ es una copia válida de Santa Claus. Y, como ves, la deg\nradación de las letras no se produce en un orden específico, es aleatorio.\nBasado en el desafío de CodeWars Photocopy decay"
        },
        "code": "checkIsValidCopy(\n  'Santa Claus is coming',\n  'sa#ta Cl#us i+ comin#'\n) // true\ncheckIsValidCopy(\n  's#nta Cla#s is coming',\n  'p#nt: cla#s #s c+min#'\n) // false (due to the initial p)\ncheckIsValidCopy('Santa Claus', 's#+:. c:. s') // true\ncheckIsValidCopy('Santa Claus', 's#+:.#c:. s') // false (there is a # where it shouldn't be)\n",
        "ref": {
            "en": "\nReference: https://adventjs.dev/challenges/2023/12\n",
            "es": "\nReferencia: https://adventjs.dev/es/challenges/2023/12\n"
        }
    },
    13: {
        "title": {
            "en": "Challenge #13: ⌚️ Calculating the time",
            "es": "Reto #13: ⌚️ Calculando el tiempo"
        },
        "level": {
            "en": "Level: Easy",
            "es": "Nivel: Fácil"
        },
        "lvl_code": 0,
        "dsc_msg": {
            "en": "Instructions",
            "es": "Instrucciones"
        },
        "description": {
            "en": "The elves are preparing for Christmas Eve and they need your help to determine i\nf they have enough time or not ⏳.\nFor this, they give you an array with the duration of each delivery. The format \nof the duration is HH:mm:ss, the deliveries start at 00:00:00 and the time limit\n is 07:00:00.\nYour function must return the time they will lack or the time they will have lef\nt over in order to finish the deliveries. The format of the returned duration sh\nould be HH:mm:ss.\nIf they finish before 07:00:00, the remaining time until 07:00:00 should be disp\nlayed with a negative sign. For example, if they have 1 hour and 30 minutes left\n over, return -01:30:00\n",
            "es": "Los elfos están preparando la víspera de Navidad y necesitan tu ayuda para calcu\nlar si van sobrados o no de tiempo ⏳.\nPara ello te pasan un array con la duración de cada entrega. El formato de la du\nración es HH:mm:ss, las entregas empiezan a las 00:00:00 y el límite de tiempo e\ns 07:00:00.\nTu función debe devolver el tiempo que les faltará o el tiempo que les sobrará p\nara terminar las entregas. El formato de la duración devuelta debe ser HH:mm:ss.\nSi terminan antes de las 07:00:00, el tiempo restante hasta las 07:00:00 debe se\nr mostrado con un signo negativo. Por ejemplo, si sobran 1 hora y 30 minutos, de\nvuelve -01:30:00\n"
        },
        "code": "calculateTime(['00:10:00', '01:00:00', '03:30:00'])\n// '-02:20:00'\n\ncalculateTime(['02:00:00', '05:00:00', '00:30:00'])\n// '00:30:00'\n\ncalculateTime([\n  '00:45:00',\n  '00:45:00',\n  '00:00:30',\n  '00:00:30'\n]) // '-05:29:00'\n",
        "ref": {
            "en": "\nReference: https://adventjs.dev/challenges/2023/13\n",
            "es": "\nReferencia: https://adventjs.dev/es/challenges/2023/13\n"
        }
    },
    14: {
        "title": {
            "en": "Challenge #14: 🚨 Avoid the alarm",
            "es": "Reto #14: 🚨 Evita la alarma"
        },
        "level": {
            "en": "Level: Medium",
            "es": "Nivel: Medio"
        },
        "lvl_code": 1,
        "dsc_msg": {
            "en": "Instructions",
            "es": "Instrucciones"
        },
        "description": {
            "en": "With the rise of social media, Santa Claus is terrified that children might wake\n up while he is delivering gifts in their homes, use their phone to record him a\nnd go viral on TikTok. \nHe wants to avoid this at all costs. Each house on that street has a number of p\nrepared gifts. However, the houses have a security system connected between adja\ncent houses, so he can't leave gifts in two consecutive houses, or the alarm wil\nl be triggered and alert the children.\nGiven an array of non-negative integers gifts that represents the number of gift\ns in each house, your task is to help Santa Claus determine the maximum number o\nf gifts he can deliver in one night without setting off any alarms.\n",
            "es": "Con el tema de las redes sociales, Santa Claus tiene pánico que los niños se des\npierten mientras él está repartiendo regalos en sus casos, usen el móvil para gr\nabarlo y se haga viral en TikTok.\nQuiere evitarlo a toda costa. Cada casa en esa calle tiene un número de regalos \npreparados. Sin embargo, las casas tienen un sistema de seguridad conectado entr\ne casas adyacentes, por lo que no puede dejar los regalos en dos casas seguidas,\n o se activará la alarma que alertará a los niños.\nDada un array de enteros no negativos regalos que representa la cantidad de rega\nlos en cada casa, tu tarea es ayudar a Papá Noel a determinar la máxima cantidad\n de regalos que puede entregar en una noche sin activar ninguna alarma.\n"
        },
        "code": "maxGifts([2, 4, 2]) // 4 (4)\nmaxGifts([5, 1, 1, 5]) // 10 (5 + 5)\nmaxGifts([4, 1, 1, 4, 2, 1]) // 9 (4 + 4 + 1)\nmaxGifts([1, 3, 1, 3, 100]) // 103 (3 + 100)\n",
        "ref": {
            "en": "\nReference: https://adventjs.dev/challenges/2023/14\n",
            "es": "\nReferencia: https://adventjs.dev/es/challenges/2023/14\n"
        }
    },
    15: {
        "title": {
            "en": "Challenge #15: ↔️ Autonomous robot",
            "es": "Reto #15: ↔️ Robot autónomo"
        },
        "level": {
            "en": "Level: Medium",
            "es": "Nivel: Medio"
        },
        "lvl_code": 1,
        "dsc_msg": {
            "en": "Instructions",
            "es": "Instrucciones"
        },
        "description": {
            "en": "We are programming some robots called giftbot 🤖🎁 that autonomously navigate gi\nft warehouses.\nWe are creating a function to which we pass: the warehouse 🏬 they must navigate\n and the movements ↔️ they can make.\nThe warehouse is represented as an array of text strings, where:\n\n. means there is a clear path.\n* means there is an obstacle.\n! is the robot's initial position.\n\nThe movements are an array of text strings, where:\n\nR moves the robot one position to the right.\nL moves the robot one position to the left.\nU moves the robot one position upwards.\nD moves the robot one position downwards.\n\nIt must be taken into account that the robot cannot overcome obstacles or the wa\nrehouse boundaries.\nGiven a warehouse and the movements, we need to return the array with the robot'\ns final position.\n\nKeep in mind that the store is an array that can have a number of rows ranging f\nrom 1 to 100, as we have warehouses of all sizes.\nAlso note that the robot might end up in its initial position if it can't move o\nr if it's going around in circles.",
            "es": "Estamos programando unos robots llamados giftbot 🤖🎁 que navegan de forma autón\noma por los almacenes de regalos.\nEstamos creando una función a la que le pasamos: el almacén 🏬 que deben navegar\n y los movimientos ↔️ que pueden realizar.\nEl almacén se representa como un array de cadenas de texto, donde:\n\n. significa que hay vía libre.\n* significa que hay un obstáculo.\n! es la posición inicial del robot.\n\nLos movimientos son un array de cadenas de texto, donde:\n\nR mueve al robot una posición a la derecha.\nL mueve al robot una posición a la izquierda.\nU mueve al robot una posición hacia arriba.\nD mueve al robot una posición hacia abajo.\n\nHay que tener en cuenta que el robot no puede superar los obstáculos ni los lími\ntes del almacén.\nDados un almacén y los movimientos, debemos devolver el array con la posición fi\nnal de nuestro robot.\n\nTen en cuenta que la store es un array que puede ser de un número de filas que v\na de 1 a 100, ya que tenemos almacenes de todos los tamaños.\nTambién que el robot es posible que termine en su posición inicial si no puede m\noverse o si está dando vueltas."
        },
        "code": "const store = ['..!....', '...*.*.']\n\nconst movements = ['R', 'R', 'D', 'L']\nconst result = autonomousDrive(store, movements)\nconsole.log(result)\n/*\n[\n  \".......\",\n  \"...*!*.\"\n]\n*/\n\n// The last movement is to the left, but it cannot move because there is an obstacle.\n",
        "ref": {
            "en": "\nReference: https://adventjs.dev/challenges/2023/15\n",
            "es": "\nReferencia: https://adventjs.dev/es/challenges/2023/15\n"
        }
    },
    16: {
        "title": {
            "en": "Challenge #16: ❌ Friday deployment",
            "es": "Reto #16: ❌ Despliegue en viernes"
        },
        "level": {
            "en": "Level: Easy",
            "es": "Nivel: Fácil"
        },
        "lvl_code": 0,
        "dsc_msg": {
            "en": "Instructions",
            "es": "Instrucciones"
        },
        "description": {
            "en": "Yesterday, someone did a production deployment and the application for assemblin\ng Christmas trees broke. We've been asked to fix it as soon as possible.\nThe problem is that the format of the trees has changed. It's an array of number\ns… but it should be an object! For example, the tree: [3, 1, 0, 8, 12, null, 1] \nlooks like this:\n\nWhat we need is to transform the array into an object where each node of the tre\ne has value, left, and right properties.\nFor example, running your transformTree function with [3, 1, 0, 8, 12, null, 1] \nshould return this:\n{\n  value: 3,\n  left: {\n    value: 1,\n    left: {\n      value: 8,\n      left: null,\n      right: null\n    },\n    right: {\n      value: 12,\n      left: null,\n      right: null\n    }\n  },\n  right: {\n    value: 0,\n    left: null,\n    right: {\n      value: 1,\n      left: null,\n      right: null\n    }\n  }\n}\n\nThe elf on duty who tried to solve the problem before going home, left us some c\nlues:\n\nIf a node doesn't have a value, it's represented with null. Therefore, if a node\n has a null value, it won't have any children.\nThe root node is at index 0 in the array.\nThere's a relationship between the index of a node and the index of its children\n. Look for the pattern!\n",
            "es": "Ayer viernes alguien hizo despliegue a producción y se rompió la aplicación de m\nontaje de árboles de Navidad. Nos han pedido que lo arreglemos lo antes posible.\nEl problema es que el formato de los árboles ha cambiado. Es un array de números\n… ¡pero debería ser un objeto! Por ejemplo el árbol: [3, 1, 0, 8, 12, null, 1] s\ne ve así:\n\nLo que necesitamos es transformar el array en un objeto donde cada nodo del árbo\nl tiene las propiedades value, left y right.\nPor ejemplo, al ejecutar tu función transformTree con [3, 1, 0, 8, 12, null, 1] \ndebería devolver esto:\n{\n  value: 3,\n  left: {\n    value: 1,\n    left: {\n      value: 8,\n      left: null,\n      right: null\n    },\n    right: {\n      value: 12,\n      left: null,\n      right: null\n    }\n  },\n  right: {\n    value: 0,\n    left: null,\n    right: {\n      value: 1,\n      left: null,\n      right: null\n    }\n  }\n}\n\nEl elfo que está de guardia y que intentó solucionar el problema antes de irse a\n casa, nos ha dejado algunas pistas:\n\nSi un nodo no tiene valor, se representa con null. Por lo tanto, si un nodo tien\ne valor null, no tendrá hijos.\nEl nodo raíz se encuentra en el índice 0 del array.\nExiste una relación entre el índice de un nodo y el índice de sus hijos. ¡Busca \nel patrón!\n"
        },
        "code": "//        3\n//      /   \\\n//     1     0\n//    / \\     \\\n//   8  12     1\n",
        "ref": {
            "en": "\nReference: https://adventjs.dev/challenges/2023/16\n",
            "es": "\nReferencia: https://adventjs.dev/es/challenges/2023/16\n"
        }
    },
    17: {
        "title": {
            "en": "Challenge #17: 🛷 Optimizing the rental",
            "es": "Reto #17: 🛷 Optimizando el alquiler"
        },
        "level": {
            "en": "Level: Easy",
            "es": "Nivel: Fácil"
        },
        "lvl_code": 0,
        "dsc_msg": {
            "en": "Instructions",
            "es": "Instrucciones"
        },
        "description": {
            "en": "In Rovaniemi, Finland 🇫🇮, sleds 🛷 are rented by time intervals. Each interval\n is represented as an array of two elements, where the first element is the star\nt of the rental and the second one is the end.\nFor example, the array [2, 7] represents a rental that begins at hour 2 and ends\n at hour 7. The problem is that sometimes the intervals overlap with each other,\n making it confusing to figure out from what time to what time the sled was rent\ned.\nWe're asked to, in order to simplify the task of calculating the total rental ti\nme, write a function that merges all overlapping intervals and returns an array \nof sorted intervals:\n\nYou can assume that the first element of each interval is always less than or eq\nual to the second element. But the intervals are not necessarily sorted.\nThe hour numbers can go up to the figure 9999.",
            "es": "En Rovaniemi, Finlandia 🇫🇮, los trineos 🛷 se alquilan por intervalos de tiemp\no. Cada intervalo se representa como un array de dos elementos, donde el primer \nelemento es el inicio del alquiler y el segundo es el final.\nPor ejemplo, el array [2, 7] representa un alquiler que comienza en la hora 2 y \ntermina en la hora 7. El problema es que a veces los intervalos se superponen en\ntre sí, haciendo que sea un lío entender de qué hora a qué hora se alquiló el tr\nineo.\nNos piden que, para simplificar la tarea de calcular el tiempo total de alquiler\n, escribamos una función que fusione todos los intervalos superpuestos y devolve\nr un array de intervalos ordenados:\n\nPuedes asumir que el primer elemento de cada intervalo siempre es menor o igual \nque el segundo elemento. Pero los intervalos no están necesariamente ordenados.\nLos números de horas pueden llegar hasta la cifra 9999."
        },
        "code": "optimizeIntervals([\n  [5, 8],\n  [2, 7],\n  [3, 4]\n]) // [[2, 8]]\n\noptimizeIntervals([\n  [1, 3],\n  [8, 10],\n  [2, 6]\n]) // [[1, 6], [8, 10]]\n\noptimizeIntervals([\n  [3, 4],\n  [1, 2],\n  [5, 6]\n]) // [[1, 2], [3, 4], [5, 6]]\n",
        "ref": {
            "en": "\nReference: https://adventjs.dev/challenges/2023/17\n",
            "es": "\nReferencia: https://adventjs.dev/es/challenges/2023/17\n"
        }
    },
    18: {
        "title": {
            "en": "Challenge #18: 🔢 The digital clock",
            "es": "Reto #18: 🔢 El reloj digital"
        },
        "level": {
            "en": "Level: Hard",
            "es": "Nivel: Dif"
        },
        "lvl_code": 2,
        "dsc_msg": {
            "en": "Instructions",
            "es": "Instrucciones"
        },
        "description": {
            "en": "In the toy factory, the elves are programming a digital clock to keep them on sc\nhedule with gift production. However, they have encountered an interesting progr\namming challenge. They need a function that, given a time in 'HH:MM' format, cre\nates a visual representation of this time on a digital clock by returning an arr\nay of arrays of characters.\nThe clock screen has 7 rows and 17 columns, and each digit of the time takes up \n7 rows and 3 columns. The digits are composed of asterisks (*) and blank spaces \n(). There is an empty column between each digit.\nThe colon separating hours and minutes is drawn using two asterisks (*) and is a\nlways placed in the same position, in rows 2 and 4, in column 9, respectively (n\note: row and column indexing starts at 0).\nFor example, if the function receives 01:30, it should return:\n\nTo know how to draw each digit, we have been given the following image. As you c\nan see, each digit is composed of 7 rows and 3 columns. We will represent the pi\nxels in red with an asterisk (*), and the white pixels with a space ():\n",
            "es": "En la fábrica de juguetes, los elfos están programando un reloj digital para man\ntenerse en horario con la producción de regalos. Sin embargo, se han encontrado \ncon un desafío de programación interesante. Necesitan una función que, dada una \nhora en formato 'HH:MM', cree una representación visual de esta hora en un reloj\n digital devolviendo un array de arrays de caracteres.\nLa pantalla del reloj tiene 7 filas y 17 columnas, y cada dígito de la hora ocup\na 7 filas y 3 columnas. Los dígitos están compuestos por asteriscos (*) y espaci\nos en blanco (). Entre cada dígito hay una columna vacía.\nLos dos puntos para separar horas y minutos se dibujan usando dos asteríscos (*)\n y siempre se colocan en la misma posición, en las filas 2 y 4, en la columna 9,\n respectivamente (nota: la indexación de filas y columnas comienza en 0).\nPor ejemplo, si la función recibe 01:30 debe devolver:\n\nPara saber cómo dibujar cada dígito, nos han pasado la siguiente imagen. Como ve\ns, cada dígito está compuesto por 7 filas y 3 columnas. Los píxeles en rojo, nos\notros lo representaremos con un asterisco (*), y los píxeles en blanco, con un e\nspacio ():\n"
        },
        "code": "drawClock('01:30') // ⬇️\n\n[\n  ['*', '*', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*'],\n  ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],\n  ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],\n  ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', ' ', '*'],\n  ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],\n  ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],\n  ['*', '*', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*']\n]\n",
        "ref": {
            "en": "\nReference: https://adventjs.dev/challenges/2023/18\n",
            "es": "\nReferencia: https://adventjs.dev/es/challenges/2023/18\n"
        }
    },
    19: {
        "title": {
            "en": "Challenge #19: 💣 Face the sabotage",
            "es": "Reto #19: 💣 Enfrenta el sabotaje"
        },
        "level": {
            "en": "Level: Medium",
            "es": "Nivel: Medio"
        },
        "lvl_code": 1,
        "dsc_msg": {
            "en": "Instructions",
            "es": "Instrucciones"
        },
        "description": {
            "en": "Alert at Santa's toy factory! The Grinch 😈 has infiltrated the warehouse and sa\nbotaged some of the toys 💣.\nThe elves need help to find the sabotaged toys and remove them before Christmas \ncomes. For this, we have the warehouse map 🗺️, which is a matrix.\nThe * represent the sabotaged toys, and empty cells with a blank space  are safe\n places.\nYour task is to write a function that returns the same matrix but, at each posit\nion, shows us the number of sabotaged toys in the adjacent cells.\nIf a cell contains a sabotaged toy, it should remain the same. If a cell does no\nt touch any sabotaged toy, it should contain a blank space .\n\nKeep in mind that…\n\nDiagonal cells are also considered adjacent.\nThe board will always have at least one empty cell  and a sabotaged toy *.\nThe board can be of any size.\nThe numbers are strings.\n",
            "es": "¡Alerta en la fábrica de juguetes de Santa! El Grinch 😈 se ha infiltrado en el \nalmacén y ha saboteado algunos de los juguetes 💣.\nLos elfos necesitan ayuda para encontrar los juguetes saboteados y eliminarlos a\nntes de que llegue la Navidad. Para ello tenemos el mapa 🗺️ del almacén, que es\n una matriz.\nLos * representan los juguetes saboteados y las celdas vacías con un espacio en \nblanco  son los lugares seguros.\nTu tarea es escribir una función que devuelva la misma matriz pero, en cada posi\nción, nos indique el número de juguetes saboteados que hay en las celdas adyacen\ntes.\nSi una celda contiene un juguete saboteado, debe permanecer igual. Si una celda \nno toca ningún juguete saboteado, debe contener un espacio en blanco .\n\nTen en cuenta que…\n\nLas celdas diagonales también se consideran adyacentes.\nEl tablero siempre tendrá al menos una celda vacía  y un juguete saboteado *.\nEl tablero puede tener cualquier tamaño.\nLos números son cadenas de texto.\n"
        },
        "code": "const store = [\n  ['*', ' ', ' ', ' '],\n  [' ', ' ', '*', ' '],\n  [' ', ' ', ' ', ' '],\n  ['*', ' ', ' ', ' ']\n]\n\nconsole.log(revealSabotage(board))\n/* Should display:\n[\n    ['*', '2', '1', '1'],\n    ['1', '2', '*', '1'],\n    ['1', '2', '1', '1'],\n    ['*', '1', ' ', ' ']\n]\n*/\n",
        "ref": {
            "en": "\nReference: https://adventjs.dev/challenges/2023/19\n",
            "es": "\nReferencia: https://adventjs.dev/es/challenges/2023/19\n"
        }
    },
    20: {
        "title": {
            "en": "Challenge #20: 🏋️‍♂️ Distribute the weight",
            "es": "Reto #20: 🏋️‍♂️ Distribuye el peso"
        },
        "level": {
            "en": "Level: Hard",
            "es": "Nivel: Dif"
        },
        "lvl_code": 2,
        "dsc_msg": {
            "en": "Instructions",
            "es": "Instrucciones"
        },
        "description": {
            "en": "We're having trouble loading the toys onto Santa's 🎅 sleigh 🛷! It seems like t\nhe toy distribution isn't quite right and the sleigh can't take off. Could you h\nelp us solve this problem?\nTo solve it we've decided to use a method similar to that of an image filter. At\n each position, we're going to distribute the load of the toys based on the numb\ner of toys in the neighboring positions.\nA neighboring position is one that is above, below, to the left, or to the right\n of the current position. Therefore, positions diagonally are not considered nei\nghbors.\nWrite a function distributeGifts that receives a matrix of numbers representing \nthe toys in the sleigh and returns another matrix of the same size and number of\n elements but where each element is the average of its original value and the va\nlues of its neighbors.\nBear in mind that there are positions that are null and that won't count for the\n average as a neighbor but will indeed be replaced by the average value of its n\neighbors.\nFor example, let's look at a complete example:\n\nPlease note:\n\nMatrices are not always square, they can have more rows than columns or vice ver\nsa.\nTo round off the values, you should use the Math.round() function from JavaScrip\nt.\nNull values are not counted for calculating the average but they are replaced by\n the average value of their neighbors.\nThe edges of the matrix have fewer possible neighbors than the rest of the posit\nions.\nThey are always positive integers.\n",
            "es": "¡Tenemos problemas con la carga de los juguetes en el trineo 🛷 de Santa 🎅! Par\nece que la distribución de los juguetes no es la adecuada y el trineo no puede d\nespegar. ¿Podrías ayudarnos a resolver este problema?\nPara solucionarlo hemos decidido utilizar un método similar al de un filtro de i\nmágenes. En cada posición, vamos a distribuir la carga de los juguetes en funció\nn del número de juguetes de las posiciones vecinas.\nUna posición vecina es aquella que está encima, abajo, a la izquierda o a la der\necha de la posición actual. Por lo tanto, no se consideran vecinas las posicione\ns en diagonal.\nEscribe una función distributeGifts que reciba una matriz de números representan\ndo los juguetes en el trineo y devuelva otra matriz con el mismo tamaño y número\n de elementos pero donde cada elemento es el promedio de su valor original y los\n valores de sus vecinos.\nTen en cuenta que hay posiciones que son null y que no contarán para el promedio\n como vecino pero sí se sustituirá por el valor promedio de sus vecinos.\nPor ejemplo, vamos a ver un ejemplo completo:\n\nTen en cuenta:\n\nLas matrices no siempre son cuadradas, pueden tener más filas que columnas o vic\neversa.\nPara redondear los valores, debes utilizar la función Math.round() de JavaScript\n.\nLos valores null no se tienen en cuenta para el cálculo del promedio pero sí se \nsustituyen por el valor promedio de sus vecinos.\nLos bordes de la matriz tienen menos vecinos posibles que el resto de posiciones\n.\nSiempre son números enteros positivos.\n"
        },
        "code": "const input = [\n  [4, 5, 1],\n  [6, null, 3],\n  [8, null, 4]\n]\n\ndistributeGifts(input)\n\n// Step by step result of the first few calculations:\n\n// At position [0][0] we have the value 4\n// Its neighbors are the values 5 and 6\n// (4 + 5 + 6) / 3 = 5\n\n// At position [0][1] we have the value 5\n// Its neighbors are the values 4 and 1\n// (5 + 4 + 1) / 3 = 3.33\n// Math.round(3.33) = 3\n\n// At position [0][2] we have the value 1\n// Its neighbors are the values 5 and 3\n// (1 + 5 + 3) / 3 = 3\n\n// At position [1][0] we have the value 6\n// Its neighbors are the values 4, 8\n// (6 + 4 + 8 ) / 3 = 6\n\n// At position [1][1] we have the value null\n// Its neighbors are the values 5, 6 and 3\n// (5 + 6 + 3) / 3 = 4.66\n// Math.round(4.66) = 5\n// ... and so on with the rest of the positions\n[\n  [(4 + 5 + 6) / 3, (5 + 4 + 1) / 3, (1 + 5 + 3) / 3],\n  [(6 + 4 + 8) / 3, (5 + 6 + 3) / 3, (3 + 1 + 4) / 3],\n  [(8 + 6) / 2, (8 + 4) / 2, (4 + 3) / 2]\n]\n\n// Final result after rounding with Math.round()\n[\n  [5, 3, 3],\n  [6, 5, 3],\n  [7, 6, 4]\n]\n",
        "ref": {
            "en": "\nReference: https://adventjs.dev/challenges/2023/20\n",
            "es": "\nReferencia: https://adventjs.dev/es/challenges/2023/20\n"
        }
    },
    21: {
        "title": {
            "en": "Challenge #21: 🪐 Binary message",
            "es": "Reto #21: 🪐 Mensaje binario"
        },
        "level": {
            "en": "Level: Medium",
            "es": "Nivel: Medio"
        },
        "lvl_code": 1,
        "dsc_msg": {
            "en": "Instructions",
            "es": "Instrucciones"
        },
        "description": {
            "en": "The elves are receiving strange binary messages from Mars 🪐. Are the aliens try\ning to communicate with them? 👽\nThe message that arrives is an array of 0s and 1s. It seems they have found a pa\nttern… To make sure, they want to find the longest segment of the string where t\nhe number of 0s and 1s is equal.\n\nKeep in mind that if there is more than one balanced pattern, you should return \nthe longest and the first one you find from left to right.\nThey say that if they find the pattern, they will be able to send a message back\n to Mars 🚀. It seems that they have to send it to https://mars.codes.",
            "es": "Los elfos están recibiendo mensajes binarios extraños desde Marte 🪐. ¿Los extra\nterrestres están tratando de comunicarse con ellos? 👽\nEl mensaje que llega es un array de 0s y 1s. Parece que han encontrado un patrón\n… Para asegurarse, quieren encontrar el segmento más largo de la cadena donde el\n número de 0s y 1s sea igual.\n\nTen en cuenta que si hay más de un patrón equilibrado, debes devolver el más lar\ngo y el primero que encuentres de izquierda a derecha.\nDicen que si encuentran el patrón, podrán enviar un mensaje de vuelta a Marte 🚀\n. Parece ser que tienen que enviarlos a https://mars.codes."
        },
        "code": "findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1])\n//                         |________|\n// position of segment:    [2, 5]\n// longest balanced\n// of 0s and 1s\n\nfindBalancedSegment([1, 1, 0])\n//                      |__|\n//                     [1, 2]\n\nfindBalancedSegment([1, 1, 1])\n// no balanced segments: []\n",
        "ref": {
            "en": "\nReference: https://adventjs.dev/challenges/2023/21\n",
            "es": "\nReferencia: https://adventjs.dev/es/challenges/2023/21\n"
        }
    },
    22: {
        "title": {
            "en": "Challenge #22: 🚂 Programming language",
            "es": "Reto #22: 🚂 Lenguaje de programación"
        },
        "level": {
            "en": "Level: Easy",
            "es": "Nivel: Fácil"
        },
        "lvl_code": 0,
        "dsc_msg": {
            "en": "Instructions",
            "es": "Instrucciones"
        },
        "description": {
            "en": "In Santa's toy factory, the elves are developing a programming language called S\nanta.js 👨‍💻👩‍💻 based on symbols to control their toy machines 🚂.\nThey have created a simple instruction system and need your help to build a comp\niler that interprets these symbols.\nThe compiler works with a counter that initially has a value of 0. The instructi\nons will modify the value of this counter.\nElves' language instructions based on symbols:\n\n+: Increments the counter value by 1.\n*: Multiplies the counter value by 2.\n-: Subtracts 1 from the counter value.\n%: Mark a return point. Does not modify the counter.\n<: Go back once to the last instruction with the % symbol it has seen. If there \nis no previous %, it does nothing.\n¿: Starts a conditional block that executes if the counter is greater than 0.\n?: Ends a conditional block.\n\nCreate a compile function that receives a string with the language instructions \nand returns the result of executing them. Here are some examples:\n",
            "es": "En la fábrica de juguetes de Santa, los elfos están desarrollando un lenguaje de\n programación llamado Santa.js 👨‍💻👩‍💻 basado en símbolos para controlar sus \nmáquinas de juguetes 🚂.\nHan creado un sistema de instrucciones simple y necesitan tu ayuda para construi\nr un compilador que interprete estos símbolos.\nEl compilador trabaja con un contador que inicialmente tiene un valor de 0. Las \ninstrucciones modificarán el valor de este contador.\nInstrucciones del lenguaje de los elfos en base a símbolos:\n\n+: Incrementa en 1 el valor del contador.\n*: Multiplica por 2 el valor del contador.\n-: Resta 1 al valor del contador.\n%: Marca un punto de retorno. No modifica el contador.\n<: Vuelve atrás una vez a la última instrucción con el símbolo % que haya visto.\n Si no hay un % previo, no hace nada.\n¿: Inicia un bloque condicional que se ejecuta si el contador es mayor a 0.\n?: Finaliza un bloque condicional.\n\nCrea una función compile que reciba un string con las instrucciones del lenguaje\n y devuelve el resultado de ejecutarlas. Aquí tienes algunos ejemplos:\n"
        },
        "code": "compile('++*-') // 3\n// (1 + 1) * 2 - 1 = 3\n\ncompile('++%++<') // 6\n// 1 + 1 + 1 + 1 + 1 + 1 = 6\n\ncompile('++<--') // 0\n// 1 + 1 - 1 - 1 = 0\n\ncompile('++¿+?') // 3\n// 1 + 1 + 1 = 3\n\ncompile('--¿+++?') // -2\n// - 1 - 1 = -2\n",
        "ref": {
            "en": "\nReference: https://adventjs.dev/challenges/2023/22\n",
            "es": "\nReferencia: https://adventjs.dev/es/challenges/2023/22\n"
        }
    },
    23: {
        "title": {
            "en": "Challenge #23: 🍽️ Christmas dinner",
            "es": "Reto #23: 🍽️ La comida de Navidad"
        },
        "level": {
            "en": "Level: Easy",
            "es": "Nivel: Fácil"
        },
        "lvl_code": 0,
        "dsc_msg": {
            "en": "Instructions",
            "es": "Instrucciones"
        },
        "description": {
            "en": "Santa 🎅 is organizing a big Christmas dinner 🫓 and wants to ensure that all di\nshes are unique and varied!\nHe gives you a list of Christmas dishes where each element consists of a list of\n strings that start with the name of the dish, followed by all the ingredients u\nsed for its preparation.\nYou have to write a function that groups the dishes by ingredients whenever ther\ne are at least 2 dishes that contain them.\nSo we return an array of arrays where the first position is the name of the ingr\nedient and the rest are the names of the dishes.\nBoth the list of ingredients and the dishes should be alphabetically ordered.\n\nKeep in mind that:\n\nAll the names of the dishes are different.\nThe names of the ingredients for a given dish are different from each other.\nIf there are no repeated ingredients, we return an empty array.\n",
            "es": "¡Santa 🎅 está organizando una gran cena navideña 🫓 y quiere asegurarse de que \ntodos los platos sean únicos y variados!\nTe da una lista de platos navideños donde cada elemento consiste en una lista de\n strings que comienza con el nombre del plato, seguido de todos los ingredientes\n utilizados para su preparación.\nTienes que escribir una función que agrupe los platos por ingredientes siempre q\nue haya al menos 2 platos que los contengan.\nAsí que devolvemos un array de arrays donde la primera posición es el nombre del\n ingrediente y el resto los nombres de los platos.\nTanto la lista de ingredientes como los platos deben estar ordenados alfabéticam\nente.\n\nTen en cuenta que:\n\nTodos los nombres de los platos son diferentes.\nLos nombres de los ingredientes para un plato dado son distintos entre sí.\nSi no hay ingredientes repetidos, devolvemos un array vacío.\n"
        },
        "code": "const dishes = [\n  [\"christmas turkey\", \"turkey\", \"sauce\", \"herbs\"],\n  [\"cake\", \"flour\", \"sugar\", \"egg\"],\n  [\"hot chocolate\", \"chocolate\", \"milk\", \"sugar\"],\n  [\"pizza\", \"sauce\", \"tomato\", \"cheese\", \"ham\"],\n]\n\norganizeChristmasDinner(dishes)\n\n/*\n\n\"sauce\" is in 2 dishes: \"christmas turkey\" and \"pizza\".\n\"sugar\" is in 2 dishes: \"cake\" and \"hot chocolate\".\nThe rest of the ingredients only appear in one dish, so we do not show them.\n\nWe show \"sauce\" first because alphabetically it comes before \"sugar\".\nAnd the dishes of each ingredient are also alphabetically ordered.\n\n[\n  [\"sauce\", \"christmas turkey\", \"pizza\"],\n  [\"sugar\", \"cake\", \"hot chocolate\"]\n]\n*/\n",
        "ref": {
            "en": "\nReference: https://adventjs.dev/challenges/2023/23\n",
            "es": "\nReferencia: https://adventjs.dev/es/challenges/2023/23\n"
        }
    },
    24: {
        "title": {
            "en": "Challenge #24: 🪜 Jump on the stairs",
            "es": "Reto #24: 🪜 Brincos en la escalera"
        },
        "level": {
            "en": "Level: Medium",
            "es": "Nivel: Medio"
        },
        "lvl_code": 1,
        "dsc_msg": {
            "en": "Instructions",
            "es": "Instrucciones"
        },
        "description": {
            "en": "In the village of Santa, there is a magic staircase that leads to the toy factor\ny 🧸. The elves, always looking to get exercise and have fun 🏃‍♂️, decide to ju\nmp the steps of the staircase.\nThey give us steps as the number of steps on the staircase and the maximum numbe\nr of steps maxJump that an elf can jump in a single jump.\nYour task is to help the elves find all the possible sequences of jumps they can\n make to go up the staircase, sorted from least to most. Considering that the el\nves can jump at most maxJump steps in a single jump (but they can jump fewer ste\nps if they wish).\nFor example, if there is a staircase of steps = 4 and maxJump = 2 is the maximum\n number of steps that an elf can jump in a single jump, then there are five poss\nible jumping sequences:\n\n[1, 1, 1, 1] (jumps 1 step 4 times)\n[1, 1, 2] (jumps 1 step 2 times and then 2 steps)\n[1, 2, 1] (jumps 1 step, then 2 steps and then 1 step)\n[2, 1, 1] (jumps 2 steps, then 1 step and then 1 step)\n[2, 2] (jumps 2 steps 2 times)\n\nMore examples:\n",
            "es": "En la aldea de Santa, hay una escalera mágica que lleva a la fábrica de juguetes\n 🧸. Los elfos, siempre buscando hacer ejercicio y divertirse 🏃‍♂️, deciden sal\ntar los peldaños de la escalera.\nNos dan steps como el número de peldaños de la escalera y el número máximo de pe\nldaños maxJump que un elfo puede saltar en un solo salto.\nTu tarea es ayudar a los elfos a encontrar todas las posibles secuencias de salt\nos que pueden hacer para subir la escalera, ordenadas de menos a más. Teniendo e\nn cuenta que los elfos pueden saltar como máximo maxJump peldaños en un solo sal\nto (pero pueden saltar menos peldaños si así lo desean).\nPor ejemplo, si hay una escalera de steps = 4 y maxJump = 2 es el número máximo \nde peldaños que un elfo puede saltar en un solo salto, entonces hay cinco secuen\ncias de saltos posibles:\n\n[1, 1, 1, 1] (salta 1 peldaño 4 veces)\n[1, 1, 2] (salta 1 peldaño 2 veces y luego 2 peldaños)\n[1, 2, 1] (salta 1 peldaño, luego 2 peldaños y luego 1 peldaño)\n[2, 1, 1] (salta 2 peldaños, luego 1 peldaño y luego 1 peldaño)\n[2, 2] (salta 2 peldaños 2 veces)\n\nMás ejemplos:\n"
        },
        "code": "getStaircasePaths(2, 1) // [[1, 1]]\ngetStaircasePaths(3, 3) // [[1, 1, 1], [1, 2], [2, 1], [3]]\ngetStaircasePaths(5, 1) // [[1, 1, 1, 1, 1]]\ngetStaircasePaths(5, 2)\n/*\n[\n  [1, 1, 1, 1, 1],\n  [1, 1, 1, 2],\n  [1, 1, 2, 1],\n  [1, 2, 1, 1],\n  [1, 2, 2],\n  [2, 1, 1, 1],\n  [2, 1, 2],\n  [2, 2, 1],\n]\n*/\n",
        "ref": {
            "en": "\nReference: https://adventjs.dev/challenges/2023/24\n",
            "es": "\nReferencia: https://adventjs.dev/es/challenges/2023/24\n"
        }
    },
    25: {
        "title": {
            "en": "Challenge #25: 🗺️ Calculating distances",
            "es": "Reto #25: 🗺️ Calculando distancias"
        },
        "level": {
            "en": "Level: Medium",
            "es": "Nivel: Medio"
        },
        "lvl_code": 1,
        "dsc_msg": {
            "en": "Instructions",
            "es": "Instrucciones"
        },
        "description": {
            "en": "Santa Claus 🎅 has already delivered all the gifts to the children but they want\n to see if they can improve for next year.\nThe elves want to know how many moves Santa Claus 🛷 made to deliver all the gif\nts. For this, they give you a map of the city with the location of each child an\nd Santa.\nThe map is a multiline text string where each character represents a square. The\n children are represented by numbers from 1 to 9 and Santa Claus by the letter S\n. The rest of the squares are .\nSanta Claus can only move up, down, left, or right, and each move counts as 1 km\n. In addition, he always starts at the S position and must deliver the gifts in \norder, from 1 to 9.\n\nWrite a travelDistance function that receives a map and returns the total distan\nce Santa Claus has traveled according to the position of the children.\nTake into account that:\n\nThe map doesn't have to be square.\nThe map will always have at least one child.\nThe map will always have an initial position for Santa Claus.\nThe numbers of the kids never repeat.\n",
            "es": "Ya ha entregado Santa Claus 🎅 todos los regalos a los niños pero quieren revisa\nr si pueden mejorar de cara al año que viene.\nLos elfos quieren saber cuántos movimientos ha hecho Santa Claus 🛷 para entrega\nr todos los regalos. Para ello, te dan un mapa de la ciudad con la ubicación de \ncada niño y de Santa.\nEl mapa es una cadena de texto multi línea donde cada caracter representa una ca\nsilla. Los niños se representan por números del 1 al 9 y Santa Claus por la letr\na S. El resto de casillas son .\nSanta Claus sólo puede moverse hacia arriba, abajo, izquierda o derecha, y cada \nmovimiento cuenta como 1 km. Además, siempre empieza en la posición S y debe ent\nregar los regalos en orden, del 1 al 9.\n\nEscribe una función travelDistance que reciba un mapa y devuelva la distancia to\ntal que ha recorrido Santa Claus según la posición de los niños.\nTen en cuenta que:\n\nEl mapa no tiene por qué ser cuadrado.\nEl mapa siempre tendrá al menos un niño.\nEl mapa siempre tendrá una posición inicial para Santa Claus.\nLos números de los niños nunca se repiten.\n"
        },
        "code": "const map = `.....1....\n..S.......\n..........\n....3.....\n......2...`\n\nconst result = travelDistance(map)\nconsole.log(result) // -> 12 km\n/*\nFrom S to kid 1: 4 moves\nFrom kid 1 to 2: 5 moves\nFrom kid 2 to 3: 3 moves\nTotal: 12 moves\n*/\n\nconst result2 = travelDistance(`..S.1...`)\nconsole.log(result2) // -> 2\n",
        "ref": {
            "en": "\nReference: https://adventjs.dev/challenges/2023/25\n",
            "es": "\nReferencia: https://adventjs.dev/es/challenges/2023/25\n"
        }
    }
}

export const TEMPLATES = {
    1: "export function findFirstRepeated(gifts) {\n    // Code here\n    return 0\n}\n",
    2: "export function manufacture(gifts, materials) {\n    // Code here\n    return []\n}\n",
    3: "export function findNaughtyStep(original, modified) {\n    // Code here\n    return ''\n}\n",
    4: "export function findNaughtyStep(original, modified) {\n    // Code here\n    return ''\n}\n",
    5: "export function cyberReindeer(road, time) {\n    // Code here\n    return []\n}\n",
    6: "export function maxDistance(movements) {\n    // Code here\n    return 0\n}\n",
    7: "export function maxDistance(movements) {\n    // Code here\n    return 0\n}\n",
    8: "export function organizeGifts(gifts) {\n    // Code here\n    return ''\n}\n",
    9: "export function adjustLights(lights) {\n    // Code here\n    return 0\n}\n",
    10: "export function createChristmasTree(ornaments, height) {\n    return '|'\n}\n",
    11: "export function getIndexsForPalindrome(word) {\n    return [0, 0]\n}\n",
    12: "export function checkIsValidCopy(original, copy) {\n    return true\n}\n",
    13: "export function calculateTime(deliveries) {\n    return '00:00:00'\n}\n",
    14: "export function maxGifts(houses) {\n    return 0\n}\n",
    15: "export function autonomousDrive(store, movements) {\n    return store\n}\n",
    16: "export function transformTree(tree) {\n    return tree\n}\n",
    17: "export function optimizeIntervals(intervals) {\n    return []\n}\n",
    18: "export function drawClock(time) {\n    return []\n}\n",
    19: "export function revealSabotage(store) {\n    return []\n}\n",
    20: "export function distributeGifts(weights) {\n    return weights\n}\n",
    21: "export function findBalancedSegment(message) {\n    return []\n}\n",
    22: "export function compile(code) {\n    return 0\n}\n",
    23: "export function organizeChristmasDinner(dishes) {\n    return []\n}\n",
    24: "export function getStaircasePaths(steps, maxJump) {\n    return []\n}\n",
    25: "export function travelDistance(map) {\n    return 0\n}\n"
}
