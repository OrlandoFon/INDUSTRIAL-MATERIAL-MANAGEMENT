import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import styled from 'styled-components';
import { Button, IconButton, TextField } from '@mui/material'

const StyledTextArea = styled.textarea`
    border: 1px solid black;
    resize: vertical; 
    text-align: justify;
`;

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ height: "20%", width: '100%', typography: 'body1', background: "white", border: "1px solid black", borderRadius: "1cap"}}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Características Gerais" value="1" />
            <Tab label="Tipo de fornecimento" value="2" />
            <Tab label="Composição Quimica (%)" value="3" />
            <Tab label="Características Mecânicas" value="4" />
            <Tab label="Escopo de fornecimento" value="5" />
            <Tab label="Aplicação (1CWN001865)" value="6" />
            <Tab label="TLV" value="7" />
          </TabList>
        </Box>
        <form action="">
            <TabPanel value="1">
                <div>                 
                        <ul style={{margin: "1cap", display: "grid", gridTemplateColumns: "200px 200px 200px 200px 200px", gridGap: "50px"}}>
                            <li style={{margin: "1cap"}}><strong>Material</strong>: <StyledTextArea rows={1}></StyledTextArea></li>
                            <li style={{margin: "1cap"}}><strong>Norma</strong>: <StyledTextArea rows={1}></StyledTextArea></li>
                            <li style={{margin: "1cap"}}><strong>Chave de Material</strong>: <StyledTextArea rows={1}></StyledTextArea></li>
                            <li style={{margin: "1cap"}}><strong>Número DIN</strong>: <StyledTextArea rows={1}></StyledTextArea></li>
                            <li style={{margin: "1cap"}}><strong>ISO</strong>: <StyledTextArea rows={1}></StyledTextArea></li>
                            <li style={{margin: "1cap"}}><strong>Origem</strong>: <StyledTextArea rows={1}></StyledTextArea></li>
                            <li style={{margin: "1cap"}}><strong>Observações</strong>: <StyledTextArea rows={1}></StyledTextArea></li>
                            <li style={{margin: "1cap"}}><strong>Aplicação</strong>: <StyledTextArea rows={1}></StyledTextArea></li>
                            <li style={{margin: "1cap"}}><strong>Equivalência</strong>: <StyledTextArea rows={1}></StyledTextArea></li>
                            <li style={{margin: "1cap"}}><strong>Similar</strong>: <StyledTextArea rows={1}></StyledTextArea></li>
                        </ul>
                </div>
            </TabPanel>
            <TabPanel value="2">
                <div>                 
                        <ul style={{margin: "1cap", display: "grid", gridTemplateColumns: "200px", gridGap: "50px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                            <li style={{margin: "1cap"}}><strong>Forma</strong>: 
                            <div style={{margin: "1cap", display: "grid", gridTemplateColumns: "200px 200px 200px 200px", gridGap: "50px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Barra Retangular" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Barra Retangular (l X H)</label>
                                    <br />
                                    <input type="checkbox" name="Barra Retangular" id="" />
                                </div>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Chapa" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Chapa (#l X L X L)</label>
                                    <br />
                                    <input type="checkbox" name="Chapa" id="" />
                                </div>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Perfil Comercial" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Perfil Comercial</label>
                                    <br />
                                    <input type="checkbox" name="Perfil Comercial" id="" />
                                </div>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Perfil Especial" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Perfil Especial</label>
                                    <br />
                                    <input type="checkbox" name="Perfil Especial" id="" />
                                </div>              
                            </div>
                            </li>
                            <li style={{margin: "1cap"}}><strong>Processo</strong>: 
                            <div style={{margin: "1cap", display: "grid", gridTemplateColumns: "200px 200px 200px 200px", gridGap: "50px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Laminado" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Laminado</label>
                                    <br />
                                    <input type="checkbox" name="Laminado" id="" />
                                </div>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Trefilado" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Trefilado</label>
                                    <br />
                                    <input type="checkbox" name="Trefilado" id="" />
                                </div>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Forjado" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Forjado</label>
                                    <br />
                                    <input type="checkbox" name="Forjado" id="" />
                                </div>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Fundido" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Fundido</label>
                                    <br />
                                    <input type="checkbox" name="Fundido" id="" />
                                </div>              
                            </div>
                            </li>
                        </ul>
                </div>
            </TabPanel>
            <TabPanel value="3">Composição Quimica (%)</TabPanel>
            <TabPanel value="4">
            <div style={{maxHeight: "30vh",
            overflowY: "auto",
            overflowX: "hidden"}}>                 
                        <ul style={{margin: "1cap", display: "grid", gridTemplateColumns: "200px", gridGap: "50px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                            <li style={{margin: "1cap", textAlign: "center"}}><strong>Tensão de Ruptura</strong>: 
                            <div style={{margin: "1cap", display: "grid", gridTemplateColumns: "200px 200px 200px 200px", gridGap: "50px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Anel de pistão" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Anel de pistão</label>
                                    <br />
                                    <StyledTextArea rows={1}></StyledTextArea>
                                </div>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Sede de Valvula" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Sede de Valvula</label>
                                    <br />
                                    <StyledTextArea rows={1}></StyledTextArea>
                                </div>        
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Mola" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Mola</label>
                                    <br />
                                    <StyledTextArea rows={1}></StyledTextArea>
                                </div>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Prisioneiros" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Prisioneiros</label>
                                    <br />
                                    <StyledTextArea rows={1}></StyledTextArea>
                                </div>
                            </div>
                            </li>
                            <li style={{margin: "1cap", textAlign: "center"}}><strong>Valvula de Regulagem</strong>: 
                            <div style={{margin: "1cap", display: "grid", gridTemplateColumns: "200px 200px 200px 200px 200px 200px", gridGap: "50px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Haste" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Haste</label>
                                    <br />
                                    <input type="checkbox" name="Haste" id="" />
                                </div>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Cone" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Cone</label>
                                    <br />
                                    <input type="checkbox" name="Cone" id="" />
                                </div>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Cesto" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Cesto</label>
                                    <br />
                                    <input type="checkbox" name="Cesto" id="" />
                                </div>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Sede" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Sede</label>
                                    <br />
                                    <input type="checkbox" name="Sede" id="" />
                                </div>   
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Guias" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Guias</label>
                                    <br />
                                    <input type="checkbox" name="Guias" id="" />
                                </div>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Buchas" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Buchas</label>
                                    <br />
                                    <input type="checkbox" name="Buchas" id="" />
                                </div>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Molas" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Molas</label>
                                    <br />
                                    <input type="checkbox" name="Molas" id="" />
                                </div>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Prisioneiros" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Prisioneiros</label>
                                    <br />
                                    <input type="checkbox" name="Prisioneiros" id="" />
                                </div>   
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Gaxetas e selagem" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Gaxetas e selagem</label>
                                    <br />
                                    <input type="checkbox" name="Gaxetas e selagem" id="" />
                                </div>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Flange Guia" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Flange Guia</label>
                                    <br />
                                    <input type="checkbox" name="Flange Guia" id="" />
                                </div>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Conexões" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Conexões</label>
                                    <br />
                                    <input type="checkbox" name="Conexões" id="" />
                                </div>
                            </div>
                            </li>
                            <li style={{margin: "1cap", textAlign: "center"}}><strong>Injetores</strong>: 
                            <div style={{margin: "1cap", display: "grid", gridTemplateColumns: "200px 200px 200px", gridGap: "50px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Valvula" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Valvula</label>
                                    <br />
                                    <input type="checkbox" name="Valvula" id="" />
                                </div>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Conjuntor Injetor" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Conjuntor Injetor</label>
                                    <br />
                                    <input type="checkbox" name="Conjuntor Injetor" id="" />
                                </div>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Anel" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Anel</label>
                                    <br />
                                    <input type="checkbox" name="Anel" id="" />
                                </div>       
                            </div>
                            </li>
                            <li style={{margin: "1cap", textAlign: "center"}}><strong>Carcaças</strong>: 
                            <div style={{margin: "1cap", display: "grid", gridTemplateColumns: "200px 200px", gridGap: "50px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Carcaça da Turbina" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Carcaça da Turbina</label>
                                    <br />
                                    <input type="checkbox" name="Carcaça da Turbina" id="" />
                                </div>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Valvula De Regulagem" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Valvula De Regulagem</label>
                                    <br />
                                    <input type="checkbox" name="Valvula De Regulagem" id="" />
                                </div>
                            </div>
                            </li>
                        </ul>
                </div>
            </TabPanel>
            <TabPanel value="5">                
                <div>                 
                        <ul style={{margin: "1cap", display: "grid", gridTemplateColumns: "200px", gridGap: "50px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                            <li style={{margin: "1cap", textAlign: "center"}}><strong>Escopo de Fornecimento</strong>: 
                            <div style={{margin: "1cap", display: "grid", gridTemplateColumns: "200px 200px 200px 200px 200px", gridGap: "50px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Composição Quimica" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Composição Quimica</label>
                                    <br />
                                    <input type="checkbox" name="Composição Quimica" id="" />
                                </div>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Ensaio de Tração" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Ensaio de Tração</label>
                                    <br />
                                    <input type="checkbox" name="Ensaio de Tração" id="" />
                                </div>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Ensaio de Torção" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Ensaio de Torção</label>
                                    <br />
                                    <input type="checkbox" name="Ensaio de Torção" id="" />
                                </div>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Ensaio de Compressão" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Ensaio de Compressão</label>
                                    <br />
                                    <input type="checkbox" name="Ensaio de Compressão" id="" />
                                </div>          
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Ensaio de Impacto Charpy" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Ensaio de Impacto Charpy</label>
                                    <br />
                                    <input type="checkbox" name="Ensaio de Impacto Charpy" id="" />
                                </div>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Ultrassom" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Ultrassom</label>
                                    <br />
                                    <input type="checkbox" name="Ultrassom" id="" />
                                </div>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Liquido Penetrante" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Liquido Penetrante</label>
                                    <br />
                                    <input type="checkbox" name="Liquido Penetrante" id="" />
                                </div>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Raio X" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Raio X</label>
                                    <br />
                                    <input type="checkbox" name="Raio X" id="" />
                                </div>   
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Outros" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Outros</label>
                                    <br />
                                    <input type="checkbox" name="Outros" id="" />
                                </div>                 
                            </div>
                            </li>
                        </ul>
                </div>
                </TabPanel>
            <TabPanel value="6">
            <div style={{maxHeight: "30vh",
            overflowY: "auto",
            overflowX: "hidden"}}>                 
                        <ul style={{margin: "1cap", display: "grid", gridTemplateColumns: "200px", gridGap: "50px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                            <li style={{margin: "1cap", textAlign: "center"}}><strong>Valvula de Emergencia</strong>: 
                            <div style={{margin: "1cap", display: "grid", gridTemplateColumns: "200px 200px 200px", gridGap: "50px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Anel de pistão" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Anel de pistão</label>
                                    <br />
                                    <input type="checkbox" name="Anel de pistão" id="" />
                                </div>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Sede de Valvula" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Sede de Valvula</label>
                                    <br />
                                    <input type="checkbox" name="Sede de Valvula" id="" />
                                </div>        
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Mola" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Mola</label>
                                    <br />
                                    <input type="checkbox" name="Mola" id="" />
                                </div>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Prisioneiros" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Prisioneiros</label>
                                    <br />
                                    <input type="checkbox" name="Prisioneiros" id="" />
                                </div>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Peneira" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Peneira</label>
                                    <br />
                                    <input type="checkbox" name="Peneira" id="" />
                                </div>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Hastes" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Hastes</label>
                                    <br />
                                    <input type="checkbox" name="Hastes" id="" />
                                </div>                    
                            </div>
                            </li>
                            <li style={{margin: "1cap", textAlign: "center"}}><strong>Valvula de Regulagem</strong>: 
                            <div style={{margin: "1cap", display: "grid", gridTemplateColumns: "200px 200px 200px 200px 200px 200px", gridGap: "50px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Haste" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Haste</label>
                                    <br />
                                    <input type="checkbox" name="Haste" id="" />
                                </div>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Cone" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Cone</label>
                                    <br />
                                    <input type="checkbox" name="Cone" id="" />
                                </div>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Cesto" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Cesto</label>
                                    <br />
                                    <input type="checkbox" name="Cesto" id="" />
                                </div>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Sede" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Sede</label>
                                    <br />
                                    <input type="checkbox" name="Sede" id="" />
                                </div>   
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Guias" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Guias</label>
                                    <br />
                                    <input type="checkbox" name="Guias" id="" />
                                </div>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Buchas" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Buchas</label>
                                    <br />
                                    <input type="checkbox" name="Buchas" id="" />
                                </div>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Molas" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Molas</label>
                                    <br />
                                    <input type="checkbox" name="Molas" id="" />
                                </div>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Prisioneiros" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Prisioneiros</label>
                                    <br />
                                    <input type="checkbox" name="Prisioneiros" id="" />
                                </div>   
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Gaxetas e selagem" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Gaxetas e selagem</label>
                                    <br />
                                    <input type="checkbox" name="Gaxetas e selagem" id="" />
                                </div>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Flange Guia" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Flange Guia</label>
                                    <br />
                                    <input type="checkbox" name="Flange Guia" id="" />
                                </div>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Conexões" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Conexões</label>
                                    <br />
                                    <input type="checkbox" name="Conexões" id="" />
                                </div>
                            </div>
                            </li>
                            <li style={{margin: "1cap", textAlign: "center"}}><strong>Injetores</strong>: 
                            <div style={{margin: "1cap", display: "grid", gridTemplateColumns: "200px 200px 200px", gridGap: "50px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Valvula" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Valvula</label>
                                    <br />
                                    <input type="checkbox" name="Valvula" id="" />
                                </div>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Conjuntor Injetor" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Conjuntor Injetor</label>
                                    <br />
                                    <input type="checkbox" name="Conjuntor Injetor" id="" />
                                </div>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Anel" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Anel</label>
                                    <br />
                                    <input type="checkbox" name="Anel" id="" />
                                </div>       
                            </div>
                            </li>
                            <li style={{margin: "1cap", textAlign: "center"}}><strong>Carcaças</strong>: 
                            <div style={{margin: "1cap", display: "grid", gridTemplateColumns: "200px 200px", gridGap: "50px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Carcaça da Turbina" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Carcaça da Turbina</label>
                                    <br />
                                    <input type="checkbox" name="Carcaça da Turbina" id="" />
                                </div>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Valvula De Regulagem" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Valvula De Regulagem</label>
                                    <br />
                                    <input type="checkbox" name="Valvula De Regulagem" id="" />
                                </div>
                            </div>
                            </li>
                        </ul>
                </div>
            </TabPanel>
            <TabPanel value="7">
            <div>                 
                        <ul style={{margin: "1cap", display: "grid", gridTemplateColumns: "200px", gridGap: "50px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                            <li style={{margin: "1cap", textAlign: "center"}}><strong>TVL</strong>: 
                            <div style={{margin: "1cap", display: "grid", gridTemplateColumns: "200px", gridGap: "50px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                <div style={{display: "grid", gridTemplateColumns: "200px", alignItems: "center", alignContent: "center", justifyContent: "center"}}>
                                    <label htmlFor="Fita de Selagem" style={{borderBottom: "1px solid black", marginBottom: "1cap", textAlign: "center"}}>Fita de Selagem</label>
                                    <br />
                                    <input type="checkbox" name="Fita de Selagem" id="" />
                                </div>
                            </div>
                            </li>
                        </ul>
                </div>
            </TabPanel>
        </form>
        <div style={{display: 'flex', justifyContent: "flex-end"}}>
                <Button style={{border:"1px solid black", borderRadius: "1cap", margin: "1cap", padding: "1cap", color:"white", backgroundColor: "rgb(33,23,60)"}}><strong>Adicionar</strong></Button>
            </div>
      </TabContext>

    </Box>
  );
}