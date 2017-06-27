import React, { Component} from 'react';

export default class Nuevo extends Component {
  render(){
    return(
      <div className="row">
        <div className="col-sm-9">
          <div className="form-group row">
                <label for="example-text-input" className="col-2 col-form-label">Nombre</label>
                <div className="col-10">
                  <input className="form-control" type="text"/>
                </div>
              </div>
              <div className="form-group row">
                <label for="example-search-input" className="col-2 col-form-label">Apellido</label>
                <div className="col-10">
                  <input className="form-control" type="text" />
                </div>
              </div>
              <div className="form-group row">
                <label for="example-email-input" className="col-2 col-form-label">Legajo</label>
                <div className="col-10">
                  <input className="form-control" type="text"/>
                </div>
              </div>
              <div className="form-group row">
                <label for="example-url-input" className="col-2 col-form-label">DNI</label>
                <div className="col-10">
                  <input className="form-control" type="text"/>
                </div>
              </div>
              <div className="form-group row">
                <label for="example-tel-input" className="col-2 col-form-label">Tipo</label>
                <div className="col-10">
                  <input className="form-control" type="text"/>
                </div>
              </div>
              <div className="form-group row">
                <label for="example-tel-input" className="col-2 col-form-label">Email</label>
                <div className="col-10">
                  <form className="form-inline">
                    <label className="sr-only" for="inlineFormInput">Name</label>
                    <input type="text" className="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder=""/>

                    <label className="sr-only" for="inlineFormInputGroup">Username</label>
                    <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                      <div className="input-group-addon">@</div>
                      <input type="text" className="form-control" id="inlineFormInputGroup" placeholder=""/>
                    </div>
                  </form>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-2 col-form-label">Activo</label>
                <div className="col-10">
                  <div className="form-group">
                    <select className="form-control">
                      <option>Si</option>
                      <option>No</option>
                    </select>
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-2 col-form-label">Rol</label>
              <div className="col-10">
                <div className="form-group">
                  <select className="form-control">
                    <option>Admin</option>
                    <option>Empleado web</option>
                    <option>Empleado de caller</option>
                  </select>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-2 col-form-label">Zona</label>
            <div className="col-10">
              <div className="form-group">
                <select className="form-control">
                  <option>Ejemplo 1</option>
                  <option>Ejemplo 2</option>
                </select>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}
