import { Card } from '@mui/material';
import { React, useState } from 'react';
import style from './cardContainer.module.scss';
import { Delete, Edit } from '@mui/icons-material';
export default function PrinterContainer() {
    return (
        <Card className={style.cardContainer}>
            <Delete className={style.logo}></Delete>
            <Edit className={style.logo}></Edit>
            Alpha
        </Card>
    );
}
