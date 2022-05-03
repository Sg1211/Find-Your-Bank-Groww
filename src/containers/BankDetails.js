import React, {useEffect, useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowBack } from "@material-ui/icons";

const BankDetails = () => {
  const [details, setDetails] = useState({})
  const location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    setDetails(location.state);
  }, [location])


  const _onBackClick = () => {
    navigate(-1);
  }

  return (
    <div className="detailsContainer">
     <div className="bankHeading">
      <div className="backArrow" onClick={_onBackClick}><ArrowBack/></div>
      Bank Details
     </div>
     <div className="text">
      Bank Address : {details.address}
     </div>
     <div className="text">
      Bank Name : {details.bank_name}
     </div>
     <div className="text">
      Branch Name : {details.branch}
     </div>
     <div className="text">
      City : {details.city}
     </div>
     <div className="text">
      District : {details.district}
     </div>
     <div className="text">
      IFSC : {details.ifsc}
     </div>
     <div className="text">
      State : {details.state}
     </div>
    </div>
     
  );
}

export default BankDetails;
