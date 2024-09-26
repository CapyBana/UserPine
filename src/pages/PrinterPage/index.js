import styled from 'styled-components';

const Button = styled.button`
    background-color: blue;
    color: white;
    font-size: 16px;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: darkblue;
    }
`;

function PrinterPage() {
    return (
        <div>
            <Button>Click Me!</Button>
        </div>
    );
}

export default PrinterPage;
