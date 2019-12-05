import React from 'react'
import DisciplineMenu from './discipline-menu'
import ScheduleMenu from './schedule-menu'

export default function ContainerDiscipline() {
    const styles = { extern: { display: "inline-block", paddingLeft: '1rem' }, intern: { width: '34vw', padding: '1rem' } }
    return (
        <div className="disciplines container__disciplines">
            <DisciplineMenu />
            <ScheduleMenu styles={styles} />
        </div>
    )
}
