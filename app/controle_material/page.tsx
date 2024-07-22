'use client'
import { Button, IconButton, TextField } from '@mui/material'
import React from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import {Card, CardBody} from 'react-bootstrap'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Collapse from '@mui/material/Collapse';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import DisplayData from './component/displayData';
import Loading from './component/Loading';
import { motion } from "framer-motion"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsIcon from '@mui/icons-material/Settings';
import { WidthFull } from '@mui/icons-material';

function Page() {
    const [data, setData] = React.useState<any[]>([]);
    const [visible, setVisible] = React.useState(-1);
    const [edit, setEdit] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [filter, setFilter] = React.useState("");
    const [update, setUpdate] = React.useState(false);
 
    React.useEffect(()=>{
        fetch("https://json-server-test2-rww2.onrender.com/materiais").
        then((response) => response.json()).
        then((data: any) => {setData(data); setLoading(false)})
    },[])

    let filteredData: any = [];

    if (filter !== "") {
        filteredData = data?.filter(({ material } : {material : string}) =>
            material.toLowerCase().includes(filter.toLowerCase())
        );
    } else {
        filteredData = data;
    }

    React.useEffect(() => {setUpdate(false)}, [update])

    function updateData(data : object) {

        const pattern = Object.entries(data).filter((item, index) => { return index === 1})[0][0];

        const regexPattern: string = `\\{[^{}]*"${pattern}"[^{}]*\\}`;

        const regex: RegExp = new RegExp(regexPattern);
        
        let newdata = JSON.stringify(filteredData[visible]).replace(regex, JSON.stringify(data));

        filteredData[visible] = JSON.parse(newdata);

        setData(filteredData);

        setUpdate(true);

    }
    
    function handleDelete(item: string) {
        setData(data.filter(({ material } : {material : string}) => material !== (item)));
    } 

    function handleEdit(item: number){
        if(item === visible && edit === false)
        {
            setEdit(true);
        } else if (item === visible && edit === true) {
            setEdit(false);
            setVisible(-1);
        } else {
            setEdit(true);
            setVisible(item);
        }
    }

  if(loading === true){
    return (
    <motion.div
    initial={{opacity: 1}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{ delay: 10}}
    >
        <Loading/>
    </motion.div>
    )
  } else {
  return (
    <>
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
        <header style={{borderBottom: "2px solid black"}}>
            <div style={{display: "flex", justifyContent: "flex-end", borderBottom: "1px solid black"}}>
            <AccountCircleIcon style={{width: 60, height: 80}}></AccountCircleIcon>
            </div>
        </header>
        <main style={{ display: "flex", flex: "no-wrap", justifyContent: "flex-start", backgroundImage: "linear-gradient(rgb(47,25,84),rgb(74,34,119),rgb(132,106,160),rgb(164,138,188),rgb(152,128,181),rgb(101,65,141),rgb(94,62,127),rgb(107,92,137),rgb(80,62,106))", width: "100%", height: visible !== -1 ? "auto" : "100vh"}}>
        <Collapse orientation={"horizontal"} in={true} timeout={"auto"} style={{ marginLeft: "0px", padding: "5px", borderRight: "5px solid black", borderTopRightRadius: "1cap", borderBottomRightRadius: "1cap", width: "27cap", height: "10cap", position: "fixed", backgroundColor: "white"}}>
                <Card className="mt-3">
                    <CardBody>
                    <div style={{display: "inline-block", verticalAlign: "top"}}>
                        <div style={{display: "flex", alignItems: "center", justifyContent: "start", cursor: "pointer", marginBottom: "5px"}}>
                        <HomeIcon></HomeIcon> <span><strong>HOME</strong></span>
                        </div>
                        <div style={{display: "flex", alignItems: "center",  justifyContent: "start", cursor: "pointer", marginBottom: "5px"}}>
                        <AccountBoxIcon></AccountBoxIcon> <span><strong>ACCOUNT</strong></span>
                        </div>
                        <div style={{display: "flex", alignItems: "center",  justifyContent: "start", cursor: "pointer", marginBottom: "5px"}}>
                        <SettingsIcon></SettingsIcon> <span><strong>SETTINGS</strong></span>
                        </div>
                    </div>
                    </CardBody>
                </Card>
            </Collapse>
            <div style={{marginLeft: "30cap"}}>
                <div style={{ margin: "5px", padding: "5px", width: "100cap", border: "5px solid black", borderRadius: "1cap", backgroundColor: "white"}}>
                    <div style={{display: 'flex', justifyContent: "space-between", marginBottom: "5px"}}>
                        <h3 style={{borderBottom: "1px solid black", padding: "5px", margin:"5px", textAlign: "center"}}>
                            <strong style={{color: "rgb(33,23,60)", fontSize: "24px"}}>Controle de Materiais</strong>
                        </h3>
                        <Button sx={{ display: "flex", alignItems: "center", border: "2px solid black", backgroundColor: "rgb(33,23,60)", 
                            '&:hover': {
                            background: "rgb(33,23,60)",
                            }, color: "white" }} startIcon={<AddBoxIcon/>}>Adcionar</Button>
                    </div>
                    <div style={{display: 'flex', justifyContent: "space-between", borderTop: "2px solid black", borderBottom: "2px solid black"}}>
                        <TextField id="standard-basic" label="Pesquisa por nomenclatura" variant="standard" onChange={(e) => {setFilter(e.target.value)}}/>
                        <div style={{display: "flex", margin: "5px", padding: "5px"}}>
                            <Button sx={{ display: "flex", alignItems: "center", border: "1px solid black", marginLeft: "2px" }} endIcon={<ArrowDropDownIcon/>}>Filtro</Button>
                            <Button sx={{ display: "flex", alignItems: "center", border: "1px solid black", marginLeft: "2px" }} endIcon={<ArrowDropDownIcon/>}>Filtro</Button>
                            <Button sx={{ display: "flex", alignItems: "center", border: "1px solid black", marginLeft: "2px" }} endIcon={<ArrowDropDownIcon/>}>Filtro</Button>
                        </div>
                    </div>
                    <div style={{padding: "16px", marginTop: "5px"}}>
                        <ul>
                            {Object.entries(data).filter(([key, value]) => value.material.toLowerCase().includes(filter.toLowerCase()) || filter === '').map(([key, value] : any, index) => {
                                return (
                                <li style={{borderTop: "1px solid black", margin: "5px"}} key={value.id}>
                                    <div style={{display: 'flex', flex: 'no-wrap', alignContent: "center", alignItems: "center", justifyContent: "space-between", justifyItems: "center"}}>
                                        <div style={{margin: "2px"}}>
                                            <span style={{margin: "5px"}}><strong>NOMENCLATURA:</strong> {value.material}</span>
                                            <span style={{margin: "5px"}}><strong>NORMA:</strong> {value.norma}</span>
                                            <span style={{margin: "5px"}}><strong>NÚMERO DIN:</strong> {value.numero_din}</span>
                                            <span style={{margin: "5px"}}><strong>ISO:</strong> {value.iso}</span>
                                            <span style={{margin: "5px"}}><strong>ORIGEM:</strong> {value.origem}</span>
                                        </div>
                                        <div>
                                            <IconButton sx={{border: "2px solid black", borderRadius: "100px", padding: "5px", margin: "5px", color: "white", backgroundColor: "rgb(33,23,60)", '&:hover': {background: "rgb(33,23,60)",}}} onClick={() => {setEdit(false), setVisible(visible === index ? -1: index)}}>
                                                {visible === index ? (<ArrowDropUpIcon/>) : (<ArrowDropDownIcon/>)}
                                            </IconButton>
                                            <IconButton sx={{border: "2px solid black", borderRadius: "100px", padding: "5px", margin: "5px", color: "white", backgroundColor: "rgb(33,23,60)", '&:hover': {background: "rgb(33,23,60)",}}} onClick={()=>{handleEdit(index)}}>
                                                <EditIcon></EditIcon>
                                            </IconButton>
                                            <IconButton sx={{border: "2px solid black", borderRadius: "100px", padding: "5px", margin: "5px", color: "white", backgroundColor: "rgb(33,23,60)", '&:hover': {background: "rgb(33,23,60)",}}} onClick={()=>{setEdit(false), handleDelete(value.material)}}>
                                                <DeleteIcon></DeleteIcon>
                                            </IconButton>
                                        </div>
                                    </div>
                                    <Collapse in={visible === index} timeout={"auto"} unmountOnExit>
                                        <Card className="mt-3" style={{borderLeft: "2px solid rgb(33,23,60)"}}>
                                            <CardBody style={{marginLeft: "2px"}}>
                                            <div>
                                                <strong>Observações:</strong><br/>
                                                <textarea style={{background: edit === false ? "rgba(0,0,0,0)" : "",
                                                     border: edit === false ? "none" : "1px solid black",
                                                     outline: edit === false ? 0 : "", cursor: edit === false ? "text" : "",
                                                      resize: edit === false ? "none" : "vertical", minWidth: "100%" }} 
                                                      readOnly={!edit} defaultValue={value.observações}>
                                                    </textarea><br/>
                                            </div>
                                            <div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center", marginTop: "20px", marginBottom: "10px"}}>
                                                <DisplayData value={value.tipos_de_fornecimento.forma} condition={"visual"} name={"Forma"} edit={edit} updateData={updateData}></DisplayData>
                                                <DisplayData value={value.tipos_de_fornecimento.processo} condition={"visual"} name={"Processo"} edit={edit} updateData={updateData}></DisplayData>
                                            </div>    
                                            <div style={{marginTop: "10px", marginBottom: "10px"}}>
                                                <DisplayData value={value.composicao_quimica} condition={"visual_quim"} name={"Composição Química"} edit={edit} updateData={updateData}></DisplayData>
                                            </div> 
                                            <div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center", marginBottom: "10px"}}>
                                                <DisplayData value={value.caracteristicas_mecanicas.tensao_de_ruptura} condition={"numerical"} name={"Tensão de Ruptura"} edit={edit} updateData={updateData}></DisplayData>
                                                <DisplayData value={value.caracteristicas_mecanicas.tensao_de_escoamento} condition={"numerical"} name={"Tensão de Escoamento"} edit={edit} updateData={updateData}></DisplayData>
                                                <DisplayData value={value.caracteristicas_mecanicas.limite_elastico} condition={"numerical"} name={"Limite Elastico"} edit={edit} updateData={updateData}></DisplayData>
                                            </div>
                                            <div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center", marginBottom: "10px"}}>
                                                <DisplayData value={value.caracteristicas_mecanicas.modulo_de_elasticidade} condition={"numerical"} name={"Modulo de Elasticidade"} edit={edit} updateData={updateData}></DisplayData>
                                                <DisplayData value={value.caracteristicas_mecanicas.dilatacao_termica} condition={"numerical"} name={"Dilatação Termica"} edit={edit} updateData={updateData}></DisplayData>
                                                <DisplayData value={value.caracteristicas_mecanicas.alongamento} condition={"numerical"} name={"Alongamento"} edit={edit} updateData={updateData}></DisplayData>
                                            </div>
                                            <div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center", marginBottom: "10px"}}>
                                                <DisplayData value={value.caracteristicas_mecanicas.reducao_de_area} condition={"numerical"} name={"Redução de Area"} edit={edit} updateData={updateData}></DisplayData>
                                                <DisplayData value={value.caracteristicas_mecanicas.dureza_brinell} condition={"numerical"} name={"Dureza Brinell"} edit={edit} updateData={updateData}></DisplayData>
                                            </div>
                                            <div style={{display: "flex", alignItems: 'center', justifyContent: "center", alignContent: "center", marginTop: "10px", marginBottom: "10px"}}>
                                                <DisplayData value={value.caracteristicas_mecanicas.tratamentos_termicos} condition={"visual"} name={"Tratamentos Termicos"} edit={edit} updateData={updateData}></DisplayData>
                                            </div> 
                                            <div style={{display: "flex", justifyContent: "space-evenly", marginTop: "10px", marginBottom: "10px"}}>
                                                <DisplayData value={value.escopo_de_fornecimento.inspecao_ensaios_e_certificados} condition={"visual"} name={"Escopo de Fornecimento"} edit={edit} updateData={updateData}></DisplayData>
                                            </div>
                                            <div style={{display: "flex", justifyContent: "space-evenly", marginTop: "10px", marginBottom: "10px"}}>
                                                <DisplayData value={value.aplicação.valvula_de_emergencia} condition={"visual"} name={"Valvula de Emergencia"} edit={edit} updateData={updateData}></DisplayData>
                                            </div>
                                            <div style={{display: "flex", justifyContent: "space-evenly", marginTop: "10px", marginBottom: "10px"}}>
                                                <DisplayData value={value.aplicação.valvula_de_regulagem} condition={"visual"} name={"Valvula de Regulagem"} edit={edit} updateData={updateData}></DisplayData>
                                            </div>
                                            <div style={{display: "flex", justifyContent: "space-evenly", marginTop: "10px", marginBottom: "10px"}}>
                                                <DisplayData value={value.aplicação.carcacas} condition={"visual"} name={"Carcaças"} edit={edit} updateData={updateData}></DisplayData>
                                            </div>
                                            <div style={{display: "flex", justifyContent: "space-evenly", marginTop: "10px", marginBottom: "10px"}}>
                                                <DisplayData value={value.tvl.fitas_de_selagem} condition={"visual"} name={"TVL"} edit={edit} updateData={updateData}></DisplayData>
                                            </div>
                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                </li>   
                                )
                            })}
                        </ul>
                    </div>
                    <div style={{display: "flex", alignContent: "flex-end", justifyContent: "flex-end", bottom: 0}}>
                    <IconButton sx={{border: "2px solid black", borderRadius: "100px", padding: "5px", margin: "5px", color: "white", backgroundColor: "rgb(33,23,60)", '&:hover': {background: "rgb(33,23,60)",}}}>
                        <ArrowLeftIcon></ArrowLeftIcon>
                    </IconButton>
                    <IconButton sx={{border: "2px solid black", borderRadius: "100px", padding: "5px", margin: "5px", color: "white", backgroundColor: "rgb(33,23,60)", '&:hover': {background: "rgb(33,23,60)",}}}>
                        <ArrowRightIcon></ArrowRightIcon>
                    </IconButton>
                    </div>
                </div>
            </div>
            </main>
        <footer>
            <div style={{textAlign: "center"}}>
                Feito por Orlando Fonseca Ravagnani Disperati &copy; 2024 - Todos os Direitos Reservados.
            </div>
        </footer>
    </motion.div>
    </>
  )
 }   
}

export default Page