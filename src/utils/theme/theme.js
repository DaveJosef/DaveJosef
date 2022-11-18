const colors = {
    DARKER: "40, 40, 40",
    DARK: "89, 89, 89",
    DARK2: "100, 100, 100",
    LIGHT: "109, 109, 109",
    LIGHT2: "220, 220, 220",
    LIGHT3: "240, 240, 240",
    PRIMARY: "33, 132, 235",
    SECONDARY: "36, 96, 158",
    RED_DARK: "158, 31, 22",
    RED_LIGHT: "235, 68, 56",
    SEA_GREEN_CRAYOLA: "3, 252, 186",
    INTERNATIONAL_ORANGE_AEROSPACE: "251, 80, 18",
    MOUNTBATTEN_PINK: "139, 114, 142",
    TURQUOISE_GREEN: "192, 229, 200",
    ACID_GREEN: "184, 180, 45",
    CG_RED: "221, 64, 58",
};

const colorPairs = () => {
    const {
        PRIMARY,
        RED_LIGHT,
        SEA_GREEN_CRAYOLA,
        INTERNATIONAL_ORANGE_AEROSPACE,
        MOUNTBATTEN_PINK,
        TURQUOISE_GREEN,
        ACID_GREEN,
        CG_RED,
    } = colors;

    return {
        A: {
            PRIMARY, RED_LIGHT
        },
        B: {
            SEA_GREEN_CRAYOLA, INTERNATIONAL_ORANGE_AEROSPACE
        },
        C: {
            MOUNTBATTEN_PINK, TURQUOISE_GREEN
        },
        D: {
            ACID_GREEN, CG_RED
        },
    };
};

const pair = () => {
    const pairsArray = Object.values(colorPairs());

    const randomIndex = Math.random() * pairsArray.length;

    return pairsArray[Math.floor(randomIndex)];
}

const randomPair = pair();
const colorA = Object.values(randomPair)[0];
const colorB = Object.values(randomPair)[1];

const lightTheme = {
    background: colors.LIGHT3,
    foreground: colors.DARK,
    foregroundB: colors.DARK2,
    colorA,
    colorB
};

const darkTheme = {
    dark: true,
    foreground: colors.LIGHT3,
    foregroundB: colors.LIGHT2,
    background: colors.DARK,
    colorA,
    colorB
};

export { lightTheme, darkTheme, colors };