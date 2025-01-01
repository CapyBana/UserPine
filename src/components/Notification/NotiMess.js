import React from 'react';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import { Card, StatusIcon, Title, Message, SubMessage, Button } from './NotiMess.style';

const StatusCard = ({ success }) => (
    <Card>
        <StatusIcon success={success}>{success ? <AiOutlineCheckCircle /> : <AiOutlineCloseCircle />}</StatusIcon>
        <Title success={success}>{success ? 'SUCCESS' : 'ERROR'}</Title>
        <Message>
            {success ? (
                <>
                    Thank you for your request.
                    <br />
                    We are working hard to find the best service and deals for you.
                </>
            ) : (
                <>Unfortunately, we are unable to process your request at this time.</>
            )}
        </Message>
        <SubMessage>
            {success
                ? 'Shortly you will find a confirmation in your email.'
                : 'Please try again or contact support if the issue persists.'}
        </SubMessage>
        <Button success={success}>{success ? 'Continue' : 'Try Again'}</Button>
    </Card>
);

export default StatusCard;
