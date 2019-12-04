import React from 'react'
import SingleDiscipline from './single-discipline'


export default function Discipline(props) {
    return (
        <div className="discipline__item">
            {props.disciplineObj.disciplines.map(discipline => {
                return <SingleDiscipline key={discipline.name} discipline={discipline} />
            })}
        </div>
    )
}
