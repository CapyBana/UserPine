import { Return } from "./Return.style";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function ReturnBlock({backmessage}) {
    return (
        <Return>
            <ArrowBackIcon style={{ fontSize:'40px', marginRight:'20px' }} />
            <div className='back'>{backmessage}</div>
        </Return>
    );
}