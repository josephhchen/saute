const lightMode = {
    background: "white",
    text: "black",
    button: 'black',
    buttonText: 'white',
}

const darkMode = {
    background: "black",
    text: "white",
    button: "white",
    buttonText: "black"
}

export const theme = (mode) => (mode === "light" ? lightMode : darkMode)