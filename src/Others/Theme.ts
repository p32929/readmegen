import { createTheme } from '@material-ui/core/styles';
import { blue, green, red } from '@material-ui/core/colors';

// Create a theme instance.
export const theme = createTheme({
    palette: {
        primary: blue,
        secondary: green,
        error: red,
    },
});
