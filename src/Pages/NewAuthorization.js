import React, { useState } from 'react';

import './Styles/NewAutorization.css';
import autorizacionesApi from '../api/autorizacionesApi';

import NavBar from '../components/NavBar';
import ErrorMessage from '../components/ErrorMessage';

const SHOVELS = [
  'E21',
  'E22',
  'E23',
  'E24',
  'E25',
  'E26',
  'K01',
  'K02',
  'I01',
  'I02',
  'I03',
  'Q01',
  'Q02',
  'Q04',
  'Q05',
];
const BLAST_TYPES = [
  'Contorno Footwall',
  'Optimización de 60 grados',
  'Optimización de 70 grados Primer Nivel',
  'Optimización de 70 grados Segundo Nivel',
  'Optimización de 70 grados Tercer Nivel',
  'Optimización de 70 grados Cuarto Nivel',
];

const NewAuthorization = () => {
  const initialState = {
    blasting: '',
    seams: '',
    shovel: SHOVELS[0],
    blastType: BLAST_TYPES[0],
  };

  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [serverRes, setServerRes] = useState(null);

  const submitFormHandler = async (event) => {
    event.preventDefault();
    const { blasting, seams, shovel, blastType } = formData;
    if (blasting === '' || seams === '' || shovel === '' || blastType === '') {
      return setError({ message: 'Favor revise la información. Hay datos sin llenar' });
    }

    const body = {
      blastingName: blasting.toUpperCase(),
      seam: seams,
      shovel,
      blastType,
    };

    try {
      setLoading(true);
      await autorizacionesApi.post('/new-blast-authorization', body);
      setServerRes({ message: `Proceso de la voladura ${blasting} creado correctamente` });
      setFormData(initialState);
      setLoading(false);
    } catch (error) {
      console.log('error:', error);
      setServerRes(null);
      setLoading(false);
      setError({ message: 'Error al procesar la informacion en el servidor' });
    }
  };

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = name === 'blasting' ? event.target.value.toUpperCase() : event.target.value;
    setServerRes(null);
    setError(null);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const selectOptionsShovel = (
    <select
      className="form-control"
      id="formControlShovels"
      name="shovel"
      onChange={changeHandler}
      value={formData.shovel}
    >
      {SHOVELS.map((p) => (
        <option key={p}>{p}</option>
      ))}
    </select>
  );

  const selectOptionsType = (
    <select
      className="form-control"
      id="formControlType"
      name="blastType"
      onChange={changeHandler}
      value={formData.blastType}
    >
      {BLAST_TYPES.map((p) => (
        <option key={p}>{p}</option>
      ))}
    </select>
  );

  const errorMensage = error ? <ErrorMessage errorDescription={error.message} /> : null;
  const spinner = loading ? (
    <div className="text-center">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  ) : null;

  const successMessage = serverRes ? (
    <div className="alert alert-success" role="alert">
      {serverRes.message}
    </div>
  ) : null;

  return (
    <>
      <NavBar />
      <div className="NewAuthorization__Container">
        <div className="NewAuthorization__Content">
          <div className="NewAuthorization__Heading">Crear Nueva Autorización</div>
          <div className="NewAuthorization__Form">
            <form onSubmit={submitFormHandler}>
              <div className="form-group">
                <label htmlFor="blastingInput">Voladura</label>
                <input
                  type="text"
                  className="form-control"
                  name="blasting"
                  id="blastingInput"
                  placeholder="Escriba el nombre de la voladura"
                  value={formData.blasting}
                  onChange={changeHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="seamsInput">Mantos</label>
                <input
                  type="text"
                  className="form-control"
                  id="seamsInput"
                  name="seams"
                  value={formData.seams}
                  onChange={changeHandler}
                />
                <small id="emailHelp" className="form-text text-muted">
                  Digite los mantos separados por guiones
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="formControlShovels">Pala</label>
                {selectOptionsShovel}
              </div>
              <div className="form-group">
                <label htmlFor="formControlType">Tipo de Voladura</label>
                {selectOptionsType}
              </div>
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? 'Espere...' : 'Crear Autorización'}
              </button>
            </form>
            {spinner}

            <div className="NewAuthorization__Error">
              {errorMensage}
              {successMessage}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewAuthorization;
