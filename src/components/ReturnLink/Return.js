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
                fontSize: isComputer ? '40px' : '30px',
                marginRight: '20px'
            }} />
            <div style={{
                fontSize: isComputer ? '28px' : '21px'
            }}>
                {message}
            </div>
        </Return>
    );
}

export default ReturnBlock;