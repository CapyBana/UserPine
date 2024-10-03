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

const Printer = styled.div`
    height: 2000px;
    overflow-y: scroll;
`;
function PrinterPage() {
    return (
        <Printer>
            <Button>Click Me!</Button>
        </Printer>
    );
}

export default PrinterPage;
