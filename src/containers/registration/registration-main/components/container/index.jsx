import React from 'react'
import DisciplineMenu from './discipline-menu'
import ScheduleMenu from './schedule-menu'

function apply() {
    
}

export default function ContainerDiscipline() {
    return (
        <div className="disciplines container__disciplines">
            <DisciplineMenu />
            <ScheduleMenu />
        </div>
    )
}
