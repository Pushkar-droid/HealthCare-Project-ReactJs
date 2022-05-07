import React from 'react'
import Country_Select from '../../../Components/Country_Select'

function Location() {
  return (
    <form className="form-horizontal">
    <div className="form-group required">
      <label htmlFor="input-country" className="col-sm-2 control-label">Country</label>
      <Country_Select />
    </div>
    <div className="form-group required">
      <label htmlFor="input-zone" className="col-sm-2 control-label">Region / State</label>
      <div className="col-sm-10">
        <select className="form-control" id="input-zone" name="zone_id">
          <option value> --- Please Select --- </option>
          <option value={3513}>Aberdeen</option>
          <option value={3514}>Aberdeenshire</option>
          <option value={3515}>Anglesey</option>
          <option value={3516}>Angus</option>
          <option value={3517}>Argyll and Bute</option>
          <option value={3518}>Bedfordshire</option>
          <option value={3519}>Berkshire</option>
          <option value={3520}>Blaenau Gwent</option>
          <option value={3521}>Bridgend</option>
          <option value={3522}>Bristol</option>
          <option value={3523}>Buckinghamshire</option>
          <option value={3524}>Caerphilly</option>
          <option value={3525}>Cambridgeshire</option>
          <option value={3526}>Cardiff</option>
          <option value={3527}>Carmarthenshire</option>
          <option value={3528}>Ceredigion</option>
          <option value={3529}>Cheshire</option>
          <option value={3530}>Clackmannanshire</option>
          <option value={3531}>Conwy</option>
          <option value={3532}>Cornwall</option>
          <option value={3949}>County Antrim</option>
          <option value={3950}>County Armagh</option>
          <option value={3951}>County Down</option>
          <option value={3952}>County Fermanagh</option>
          <option value={3953}>County Londonderry</option>
          <option value={3954}>County Tyrone</option>
          <option value={3955}>Cumbria</option>
          <option value={3533}>Denbighshire</option>
          <option value={3534}>Derbyshire</option>
          <option value={3535}>Devon</option>
          <option value={3536}>Dorset</option>
          <option value={3537}>Dumfries and Galloway</option>
          <option value={3538}>Dundee</option>
          <option value={3539}>Durham</option>
          <option value={3540}>East Ayrshire</option>
          <option value={3541}>East Dunbartonshire</option>
          <option value={3542}>East Lothian</option>
          <option value={3543}>East Renfrewshire</option>
          <option value={3544}>East Riding of Yorkshire</option>
          <option value={3545}>East Sussex</option>
          <option value={3546}>Edinburgh</option>
          <option value={3547}>Essex</option>
          <option value={3548}>Falkirk</option>
          <option value={3549}>Fife</option>
          <option value={3550}>Flintshire</option>
          <option value={3551}>Glasgow</option>
          <option value={3552}>Gloucestershire</option>
          <option value={3553}>Greater London</option>
          <option value={3554}>Greater Manchester</option>
          <option value={3555}>Gwynedd</option>
          <option value={3556}>Hampshire</option>
          <option value={3557}>Herefordshire</option>
          <option value={3558}>Hertfordshire</option>
          <option value={3559}>Highlands</option>
          <option value={3560}>Inverclyde</option>
          <option value={3561}>Isle of Wight</option>
          <option value={3562}>Kent</option>
          <option value={3563}>Lancashire</option>
          <option value={3564}>Leicestershire</option>
          <option value={3565}>Lincolnshire</option>
          <option value={3566}>Merseyside</option>
          <option value={3567}>Merthyr Tydfil</option>
          <option value={3568}>Midlothian</option>
          <option value={3569}>Monmouthshire</option>
          <option value={3570}>Moray</option>
          <option value={3571}>Neath Port Talbot</option>
          <option value={3572}>Newport</option>
          <option value={3573}>Norfolk</option>
          <option value={3574}>North Ayrshire</option>
          <option value={3575}>North Lanarkshire</option>
          <option value={3576}>North Yorkshire</option>
          <option value={3577}>Northamptonshire</option>
          <option value={3578}>Northumberland</option>
          <option value={3579}>Nottinghamshire</option>
          <option value={3580}>Orkney Islands</option>
          <option value={3581}>Oxfordshire</option>
          <option value={3582}>Pembrokeshire</option>
          <option value={3583}>Perth and Kinross</option>
          <option value={3584}>Powys</option>
          <option value={3585}>Renfrewshire</option>
          <option value={3586}>Rhondda Cynon Taff</option>
          <option value={3587}>Rutland</option>
          <option value={3588}>Scottish Borders</option>
          <option value={3589}>Shetland Islands</option>
          <option value={3590}>Shropshire</option>
          <option value={3591}>Somerset</option>
          <option value={3592}>South Ayrshire</option>
          <option value={3593}>South Lanarkshire</option>
          <option value={3594}>South Yorkshire</option>
          <option value={3595}>Staffordshire</option>
          <option value={3596}>Stirling</option>
          <option value={3597}>Suffolk</option>
          <option value={3598}>Surrey</option>
          <option value={3599}>Swansea</option>
          <option value={3600}>Torfaen</option>
          <option value={3601}>Tyne and Wear</option>
          <option value={3602}>Vale of Glamorgan</option>
          <option value={3603}>Warwickshire</option>
          <option value={3604}>West Dunbartonshire</option>
          <option value={3605}>West Lothian</option>
          <option value={3606}>West Midlands</option>
          <option value={3607}>West Sussex</option>
          <option value={3608}>West Yorkshire</option>
          <option value={3609}>Western Isles</option>
          <option value={3610}>Wiltshire</option>
          <option value={3611}>Worcestershire</option>
          <option value={3612}>Wrexham</option>
        </select>
      </div>
    </div>
    <div className="form-group required">
      <label htmlFor="input-postcode" className="col-sm-2 control-label">Post Code</label>
      <div className="col-sm-10">
        <input type="text" className="form-control" id="input-postcode" placeholder="Post Code" defaultValue name="postcode" />
      </div>
    </div>
    <input type="button" className="btn pull-right" data-loading-text="Loading..." id="button-quote" defaultValue="Get Quotes" />
  </form>
  )
}

export default Location
