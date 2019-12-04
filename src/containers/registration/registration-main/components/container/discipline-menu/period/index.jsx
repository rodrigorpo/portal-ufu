import React from 'react'

import { Typography } from '@material-ui/core'
import Discipline from '../discpline'

function SinglePeriod(props) {
    return (
        <div className="period__single" draggable="false">
            <Typography
                style={{ textAlign: 'center', border: 'solid black 1px', borderRadius: '4%' }}
                className="period__title-title"
            >
                {props.periodPack.name}
            </Typography>
            <div className="period__list-item">
                {props.periodPack.chainDisciplines.map(disciplines => {
                    return <Discipline key={disciplines.id} disciplineObj={disciplines} />
                })}
            </div>
        </div>
    )
}

export default function Period() {
    const [periodState, setPeriodState] = React.useState([
        {
            name: '3º Período',
            chainDisciplines: [
                {
                    id: '1',
                    disciplines: [
                        {
                            name: 'MM',
                            schedule: ['Seg 8:50 - 10:40', 'Ter 8:50 - 10:40'],
                        },
                    ],
                },
                {
                    id: '2',
                    disciplines: [
                        {
                            name: 'CE1',
                            schedule: ['Seg 8:50 - 10:40', 'Ter 8:50 - 10:40'],
                        },
                        { name: 'EXP-CE1', schedule: ['Ter 13:10 - 14:50'] },
                    ],
                },
                {
                    id: '3',
                    disciplines: [
                        {
                            name: 'CTM',
                            schedule: ['Seg 7:10 - 8:50', 'Sex 7:10 - 8:50'],
                        },
                        { name: 'EXP-CTM', schedule: ['Ter 13:10 - 14:50'] },
                    ],
                },
                {
                    id: '4',
                    disciplines: [
                        {
                            name: 'ESOF',
                            schedule: ['Ter 7:10 - 8:50', 'Qua 8:50 - 10:40'],
                        },
                    ],
                },
                {
                    id: '5',
                    disciplines: [
                        {
                            name: 'F3',
                            schedule: ['Qua 14:50 - 16:50', 'Qui 14:50 - 16:50'],
                        },
                        { name: 'EXP-F3', schedule: ['Qua 13:10 - 14:50'] },
                    ],
                },
                {
                    id: '6',
                    disciplines: [
                        {
                            name: 'SISII',
                            schedule: ['Ter 16:50 - 18:30', 'Qui 16:50 - 18:30'],
                        },
                    ],
                },
            ],
        },
        {
            name: '4º Período',
            chainDisciplines: [
                {
                    id: '1',
                    disciplines: [
                        {
                            name: 'MM',
                            schedule: ['Seg 8:50 - 10:40', 'Ter 8:50 - 10:40'],
                        },
                    ],
                },
                {
                    id: '2',
                    disciplines: [
                        {
                            name: 'CE1',
                            schedule: ['Seg 8:50 - 10:40', 'Ter 8:50 - 10:40'],
                        },
                        { name: 'EXP-CE1', schedule: ['Ter 13:10 - 14:50'] },
                    ],
                },
                {
                    id: '3',
                    disciplines: [
                        {
                            name: 'CTM',
                            schedule: ['Seg 7:10 - 8:50', 'Sex 7:10 - 8:50'],
                        },
                        { name: 'EXP-CTM', schedule: ['Ter 13:10 - 14:50'] },
                    ],
                },
                {
                    id: '4',
                    disciplines: [
                        {
                            name: 'ESOF',
                            schedule: ['Ter 7:10 - 8:50', 'Qua 8:50 - 10:40'],
                        },
                    ],
                },
                {
                    id: '5',
                    disciplines: [
                        {
                            name: 'F3',
                            schedule: ['Qua 14:50 - 16:50', 'Qui 14:50 - 16:50'],
                        },
                        { name: 'EXP-F3', schedule: ['Qua 13:10 - 14:50'] },
                    ],
                },
                {
                    id: '6',
                    disciplines: [
                        {
                            name: 'SISII',
                            schedule: ['Ter 16:50 - 18:30', 'Qui 16:50 - 18:30'],
                        },
                    ],
                },
            ],
        },
    ])

    return (
        <div className="period__list" draggable="false">
            {periodState.map(obj => (
                <SinglePeriod key={obj.name} periodPack={obj} />
            ))}
        </div>
    )
}
