import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import NavBar from '../components/NavBar';

import 'react-datepicker/dist/react-datepicker.css';
import './Styles/BlastDetail.css';
import blastImage from '../images/blast.svg';
import useBlasting from '../hooks/useBlasting';
import ErrorMessage from '../components/ErrorMessage';
import BlastDetailLoader from '../components/Loaders/BlastDetailLoader';

const BlastDetail = (props) => {
  const blastId = props.match.params.blastId;
  const { blastingData, loadingState, error } = useBlasting(blastId);

  const [startDate, setStartDate] = useState(new Date());

  const loadingContent = loadingState ? <BlastDetailLoader /> : null;
  const errorMessage = error ? (
    <ErrorMessage errorDescription="No se pudo obtener la información del servidor" />
  ) : null;

  let blastContent = null;
  if (blastingData) {
    const {
      nombre: name,
      tiposVoladura: { nombre: type },
      anio: year,
      nivel: level,
      tipoCota: surphaceType,
      gridPiso: grid,
      tienePrecorte: preq,
      pala: shovel,
      panel: pannel,
      manto: seam,
      patron: pattern,
      alturaBanco: holeLength,
      comentario: comment,
    } = blastingData;

    blastContent = (
      <>
        <div className="BlastDetail__Title">
          <div className="BlastDetail__Name">{name}</div>
          <div className="BlastDetail__Type">{type}</div>
        </div>
        <div className="BlastDetail__Heading">
          <div className="BlastDetail__Image">
            <img src={blastImage} alt="Blast" />
          </div>
          <div className="BlastDetail__HeadingText">
            <div>
              <span>Año:</span> {year}
            </div>
            <div>
              <span>Nivel:</span> {level}
            </div>
            <div>
              <span>Tipo de Cota:</span> {surphaceType}
            </div>
            <div>
              <span>Grid de Piso:</span> {grid}
            </div>
            <div>
              <span>Tiene Precorte:</span> {preq ? 'Si' : 'No'}
            </div>
            <div>
              <span>Pala:</span> {shovel}
            </div>
            <div>
              <span>Panel:</span> {pannel}
            </div>
            <div>
              <span>Manto:</span> {seam}
            </div>
            <div>
              <span>Patrón:</span> {pattern}
            </div>
            <div>
              <span>Altura de Banco (metros):</span> {holeLength}
            </div>
          </div>
        </div>
        <div className="BlastDetail__CurrentProcess">
          <div className="BlastDetail__CurrentProcess__Title">
            <span>Estado</span>
            <div>Subir Voladura a Modular</div>
          </div>
          <div>
            <span>Comentario:</span> {comment}
          </div>
        </div>
        <div className="BlastDetail__CurrentProcess__Form">
          <form>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect2">Realizado ?</label>
              <select className="form-control" id="exampleFormControlSelect2">
                <option>No</option>
                <option>Si</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect2">Fecha de Cargue a Modular:</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa"
              />
            </div>
          </form>
        </div>
      </>
    );
  }
  return (
    <>
      <NavBar />
      <div className="BlastDetail__Container">
        {loadingContent}
        {errorMessage}
        {blastContent}
      </div>
    </>
  );
};

export default BlastDetail;
