import React from 'react'
import { Paper, Typography, Divider, Card, CardActionArea, CardContent, Button, CardActions } from '@material-ui/core'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { orderConflicts } from '../../../actions'

import '../../registration/registration-main/registration.css'

import BottomRegistrationMain from '../registration-main/components/bottom'
import DraggableList from './draggable'

function Banner(props) {
    return (
        <Card>
            <CardContent style={{ paddingBottom: '0' }}>
                <Typography gutterBottom variant="h6" component="h2">
                    Disciplinas Conflitantes
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    As disciplinas abaixo apresentam conflito de horário. Escolha qual terá maior prioridade para ser matriculada
                    clicando e arrastando
                </Typography>
            </CardContent>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button size="small" color="primary" onClick={() => props.dismissBanner()}>
                    OK
                </Button>
            </div>
        </Card>
    )
}

function getFromSessionStorage(name) {
    return JSON.parse(window.sessionStorage.getItem(name))
}

function setSessionStorage(name, object) {
    window.sessionStorage.setItem(name, JSON.stringify(object))
}

function handleConflict() {
    const ordered = getFromSessionStorage('orderedState')
    if (ordered) {
        return ordered
    }

    const conflict = getFromSessionStorage('disciplinesState').conflictDisciplines

    const list = [...new Set(conflict.map(obj => obj.discipline))]

    const finalList = list.map(obj => {
        return obj.split(' | ')
    })
    return finalList
}

const getItems = function(elements) {
    return elements.map(obj => {
        return {
            id: obj,
            content: obj,
        }
    })
}

function PriorityOrder(props) {
    const [state, setState] = React.useState({
        render: props.conflict,
        hide: false,
    })

    function changePosition(objects, index) {
        const render = [...state.render]
        render[index] = objects.map(elem => elem.content)
        setState({ ...state, render })
        setSessionStorage('orderedState', [...render])
    }

    function dismissBanner() {
        setState({ ...state, hide: true })
    }

    return (
        <>
            <div className="container__head">
                <Typography className="container-title">Ordenar Prioridade de Matérias conflitantes</Typography>
            </div>
            <Paper className="container-fluid">
                {state.hide ? null : <Banner dismissBanner={dismissBanner.bind(this)} />}

                <div className="disciplines ">
                    {state.render.map((conflictElement, index) => {
                        return (
                            <div key={index}>
                                <Typography style={{ width: '15%' }}>Conflito #{index + 1}</Typography>
                                <Divider style={{ background: '#76ff03', height: '2px', width: '21%' }} />
                                <DraggableList
                                    elements={getItems(conflictElement)}
                                    index={index}
                                    changePosition={changePosition.bind(this)}
                                />
                            </div>
                        )
                    })}
                </div>
            </Paper>
            <BottomRegistrationMain currentLocation={3} />
        </>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({ orderConflicts }, dispatch)
export default connect(
    null,
    mapDispatchToProps,
)(() => {
    const conflict = handleConflict()
    return <PriorityOrder conflict={conflict} />
})
