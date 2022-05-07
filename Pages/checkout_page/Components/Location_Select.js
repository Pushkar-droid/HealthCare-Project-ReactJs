import React from "react";
import Country_Select from "../../../Components/Country_Select";

function Location_Select() {
  return (
    <>
      <Country_Select />
      <div className="form-group required">
        <label htmlFor="input-payment-zone" className="col-sm-2 control-label">
          Region / State
        </label>
        <div className="col-sm-10">
          <select
            className="form-control"
            id="input-shipping-zone"
            name="zone_id"
          >
            <option value> --- Please Select --- </option>
            <option select="selected" value={3121}>
              Al Hasakah
            </option>
            <option value={3122}>Al Ladhiqiyah</option>
            <option value={3123}>Al Qunaytirah</option>
            <option value={3124}>Ar Raqqah</option>
            <option value={3125}>As Suwayda</option>
            <option value={3126}>Dara</option>
            <option value={3127}>Dayr az Zawr</option>
            <option value={3128}>Dimashq</option>
            <option value={3129}>Halab</option>
            <option value={3130}>Hamah</option>
            <option value={3131}>Hims</option>
            <option value={3132}>Idlib</option>
            <option value={3133}>Rif Dimashq</option>
            <option value={3134}>Tartus</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default Location_Select;
