import { DefaultTheme } from 'react-native-paper';

export const theme = {
    ...DefaultTheme,
    roundness: 8,
    colors: {
        ...DefaultTheme.colors,
        primary: '#BB86FC',
        secondary: "#42a5f5",
        accent: '#c62828',
        background: "#121212",
        surface: "#212121",
        contained: '#000000',
        disabled: "#bdbdbd"
    },
    dark: true
};
