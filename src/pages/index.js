import React, { useState } from 'react';
import logoImg from '../images/logo.png';
import { Container, Grid, Typography, TextField, Button } from '@material-ui/core';

import './styles.css';

function Principal() {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState('');

    const calculateImc = () => {
        const alturam = altura/100
        setImc((peso/(alturam*alturam)).toFixed(2))
    }

    const verifyImc = () => {
        if (imc < 18.5) return "Magreza"
        if (imc < 24.9) return "Peso normal"
        if (imc < 29.9) return "Sobrepeso"
        if (imc < 39.9) return "Obesidade"
        if (imc > 40.0) return "Obesidade Grave"
        return "Indefinido"
    }

    return (
        <div id="page">
            <Container fixed>
                <Grid container justify="center" alignItems="center" spacing={5}>
                    <Grid item xs={12} sm={6}>
                        <div className="logo-container">
                            <img src={logoImg} alt="Logo"/>

                            <p>O IMC (índice de massa corporal) é uma medida internacional usada para calcular se uma pessoa está no peso ideal.</p>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <div className="infos">
                            <Container>
                                <Grid container direction="column" spacing={4}>
                                <Typography variant="h2">Calcule seu IMC</Typography>
                                    <Grid item>
                                        <TextField 
                                            label="Altura em cm  ex(168)" 
                                            variant="outlined"
                                            fullWidth type="number"
                                            value={altura}
                                            onChange={({ target }) => setAltura(target.value)} 
                                        />
                                    </Grid>
                                    <Grid item>
                                        <TextField 
                                            label="Peso em kg  ex(53,8)" 
                                            variant="outlined"
                                            fullWidth type="number"
                                            value={peso}
                                            onChange={({ target }) => setPeso(target.value)} 
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Button 
                                            variant="contained"
                                            color="primary"
                                            fullWidth onClick={() => calculateImc()}
                                        >Calcular</Button>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="p">O seu IMC é: {imc} kg/m2 - {verifyImc()} </Typography>
                                    </Grid>
                                </Grid>
                            </Container>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Principal;