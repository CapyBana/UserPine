import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material";
import { Return } from "./Return.style";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const theme = createTheme()

const ReturnBlock = ({backmessage}) => {
    return (
        <ThemeProvider theme={theme}>
            <ResponsiveReturnBlock message={backmessage} />
        </ThemeProvider>
    );
}

const ResponsiveReturnBlock = ({message}) => {
    const isComputer = useMediaQuery(theme => theme.breakpoints.up("lg"));

    return (
        <Return>
            <ArrowBackIcon style={{
                fontSize: isComputer ? '20px' : '16px',
                marginRight: '12px'
            }} />
            <div style={{
                fontSize: isComputer ? '1.2rem' : '1rem'
            }}>
                {message}
            </div>
        </Return>
    );
}

export default ReturnBlock;