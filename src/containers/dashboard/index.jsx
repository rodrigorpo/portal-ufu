import React from 'react'
import { Carousel } from 'react-bootstrap'
import { Paper, Typography, Card, CardContent, CardActionArea, Avatar } from '@material-ui/core'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Dashboard() {
    const [index, setIndex] = React.useState(0)
    const [direction, setDirection] = React.useState(null)

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex)
        setDirection(e.direction)
    }
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                <Carousel style={{ width: '35vw' }} activeIndex={index} direction={direction} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img className="d-block w-100" src="images/carousel-1.jpg" alt="First slide" />
                        <Carousel.Caption>
                            <h5>UFU assina convênio com ONG SOS Mulher e amplia ações de combate à violência</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="images/carousel-2.jpg" alt="Third slide" />

                        <Carousel.Caption>
                            <h5>Veja como funcionará a Rede de Laboratórios Multiusuários da UFU</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="images/carousel-3.jpg" alt="Third slide" />

                        <Carousel.Caption>
                            <h5>UFU realiza mutirão para plantio de mudas no Campus Glória</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                <Paper elevation={1} style={{ width: '50vw' }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Card style={{ width: '20%', display: 'inline-block', margin: '1rem' }}>
                            <CardActionArea>
                                <CardContent style={{ display: 'flex', justifyContent: 'center' }}>
                                    <div style={{ display: 'inline-block' }}>
                                        <Avatar alt="Remy Sharp" src="/images/moodle.png" style={{ marginLeft: '0.5rem' }} />
                                        <Typography variant="subtitle1">Moodle</Typography>
                                    </div>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card style={{ width: '20%', display: 'inline-block', margin: '1rem' }}>
                            <CardActionArea>
                                <CardContent style={{ display: 'flex', justifyContent: 'center' }}>
                                    <div style={{ display: 'inline-block' }}>
                                        <Avatar alt="Remy Sharp" src="/images/mail.png" style={{ marginLeft: '0.8rem' }} />
                                        <Typography variant="subtitle1">Mail UFU</Typography>
                                    </div>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card style={{ width: '20%', display: 'inline-block', margin: '1rem' }}>
                            <CardActionArea>
                                <CardContent style={{ display: 'flex', justifyContent: 'center' }}>
                                    <div style={{ display: 'inline-block' }}>
                                        <Avatar alt="Remy Sharp" src="/images/library.png" style={{ marginLeft: '0.9rem' }} />
                                        <Typography variant="subtitle1">Biblioteca</Typography>
                                    </div>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Card style={{ width: '20%', display: 'inline-block', margin: '1rem' }}>
                            <CardActionArea>
                                <CardContent style={{ display: 'flex', justifyContent: 'center' }}>
                                    <div style={{ display: 'inline-block' }}>
                                        <Avatar alt="Remy Sharp" src="/images/ru.png" style={{ marginLeft: '1.5rem' }} />
                                        <Typography variant="subtitle1">Restaurante</Typography>
                                    </div>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card style={{ width: '20%', height: '30%', display: 'inline-block', margin: '1rem' }}>
                            <CardActionArea>
                                <CardContent style={{ display: 'flex', justifyContent: 'center' }}>
                                    <div style={{ display: 'inline-block' }}>
                                        <Avatar alt="Remy Sharp" src="/images/bus.png" style={{ marginLeft: '1.2rem' }} />
                                        <Typography variant="subtitle1">Intercampi</Typography>
                                    </div>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card style={{ width: '20%', height: '20%', display: 'inline-block', margin: '1rem' }}>
                            <CardActionArea>
                                <CardContent style={{ display: 'flex', justifyContent: 'center' }}>
                                    <div style={{ display: 'inline-block' }}>
                                        <Avatar alt="Remy Sharp" src="/images/calendar.jpg" style={{ marginLeft: '2rem' }} />
                                        <Typography variant="subtitle1">Grade Horária</Typography>
                                    </div>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </Paper>
            </div>
        </>
    )
}
