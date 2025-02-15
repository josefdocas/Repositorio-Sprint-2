import moment from 'moment';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const CrearPartidoFormulario= ({callback, errores, editar, pfecha="", pnombreLocal="", pnombreVisitante="", pidLocal="0", pidVisitante="0", pgolesLocal="0", pgolesVisitante="0" })=>{

    const [fecha, setFecha]= useState(pfecha)
    const [equipoLocal, setEquipoLocal]= useState(pidLocal)
    const [equipoVisitante, setEquipoVisitante]= useState(pidVisitante)
    // const [nombreLocal, setNombreLocal]= useState(pnombreLocal)
    // const [nombreVisitante, setNombreVisitante]= useState(pnombreVisitante)
    const [golesLocal, setGolesLocal]= useState(pgolesLocal)
    const [golesVisitante, setGolesVisitante]= useState(pgolesVisitante)

    const enviarFormulario= (e)=>{
        e.preventDefault();
        (!editar) ? callback({fecha, equipoLocal, equipoVisitante}) : callback({golesLocal, golesVisitante})
    }

  return (
    <Form onSubmit={enviarFormulario}>
      {!editar &&
        <Form.Group className="mb-3" controlId="fecha">
          <Form.Label>Fecha</Form.Label>
          <Form.Control type="date" value={moment(fecha).format("YYYY-MM-DD")}  min={moment().format("YYYY-MM-DD")} onChange={e=> setFecha(e.target.value)} isInvalid={errores.fecha} />

          <Form.Control.Feedback type='invalid'>
              {errores.fecha}
          </Form.Control.Feedback>

        </Form.Group>
      }
      {!editar &&
        <Form.Group className="mb-3" controlId="equipoLocal">
          <Form.Label>Equipo Local</Form.Label>
          <Form.Control as="select" type="select" value={equipoLocal} onChange={e=> setEquipoLocal(e.target.value)} required >
            <option value="">Seleccione</option>
            <option value="1">Alemania</option>
            <option value="2">Arabia Saudita</option>
            <option value="3">Argentina</option>
            <option value="4">Australia</option>
            <option value="5">Belgica</option>
            <option value="6">Brasil</option>
            <option value="7">Camerun</option>
            <option value="8">Canada</option>
            <option value="9">Corea del Sur</option>
            <option value="10">Costa Rica</option>
            <option value="11">Croacia</option>
            <option value="12">Dinamarca</option>
            <option value="13">Ecuador</option>
            <option value="14">España</option>
            <option value="15">estados Unidos</option>
            <option value="16">Francia</option>
            <option value="17">Gales</option>
            <option value="18">Ghana</option>
            <option value="19">Inglaterra</option>
            <option value="20">Iran</option>
            <option value="21">Japon</option>
            <option value="22">Marruecos</option>
            <option value="23">Mexico</option>
            <option value="24">Paises Bajos</option>
            <option value="25">Polonia</option>
            <option value="26">Portugal</option>
            <option value="27">Qatar</option>
            <option value="28">Senegal</option>
            <option value="29">Serbia</option>
            <option value="30">Suiza</option>
            <option value="31">Tunez</option>
            <option value="32">Uruguaty</option>
          </Form.Control>
          <Form.Control.Feedback type='invalid'>
              {errores.equipoLocal}
          </Form.Control.Feedback>
        </Form.Group>
      }
      {!editar &&
        <Form.Group className="mb-3" controlId="equipoVisitante">
          <Form.Label>Equipo Visitante</Form.Label>
          <Form.Control as="select" type="select" value={equipoVisitante} onChange={e=> setEquipoVisitante(e.target.value)} required >
            <option value="">Seleccione</option>
            <option value="1">Alemania</option>
            <option value="2">Arabia Saudita</option>
            <option value="3">Argentina</option>
            <option value="4">Australia</option>
            <option value="5">Belgica</option>
            <option value="6">Brasil</option>
            <option value="7">Camerun</option>
            <option value="8">Canada</option>
            <option value="9">Corea del Sur</option>
            <option value="10">Costa Rica</option>
            <option value="11">Croacia</option>
            <option value="12">Dinamarca</option>
            <option value="13">Ecuador</option>
            <option value="14">España</option>
            <option value="15">estados Unidos</option>
            <option value="16">Francia</option>
            <option value="17">Gales</option>
            <option value="18">Ghana</option>
            <option value="19">Inglaterra</option>
            <option value="20">Iran</option>
            <option value="21">Japon</option>
            <option value="22">Marruecos</option>
            <option value="23">Mexico</option>
            <option value="24">Paises Bajos</option>
            <option value="25">Polonia</option>
            <option value="26">Portugal</option>
            <option value="27">Qatar</option>
            <option value="28">Senegal</option>
            <option value="29">Serbia</option>
            <option value="30">Suiza</option>
            <option value="31">Tunez</option>
            <option value="32">Uruguaty</option>
          </Form.Control>
          <Form.Control.Feedback type='invalid'>
              {errores.equipoVisitante}
          </Form.Control.Feedback>
        </Form.Group>
      }
      {editar &&
          <Form.Group className="mb-3" controlId="golesLocal">
            <Form.Label>Goles Equipo Local</Form.Label>
            <Form.Control type="number" min="0" max="20" value={golesLocal} onChange={e=> setGolesLocal(e.target.value)} isInvalid={errores.golesLocal} />
    
            <Form.Control.Feedback type='invalid'>
                {errores.golesLocal}
            </Form.Control.Feedback>
    
          </Form.Group>
      }
      {editar &&
          <Form.Group className="mb-3" controlId="golesVisitante">
            <Form.Label>Goles Equipo Visitante</Form.Label>
            <Form.Control type="number" min="0" max="20" value={golesVisitante} onChange={e=> setGolesVisitante(e.target.value)} isInvalid={errores.golesVisitante} />
    
            <Form.Control.Feedback type='invalid'>
                {errores.golesVisitante}
            </Form.Control.Feedback>
    
          </Form.Group>
      }
      <Button variant="primary" type="submit" className='mt-3'>
       {!editar ? "Crear" : "Editar"} Partido
      </Button>
    </Form>
  );
}

export default CrearPartidoFormulario;