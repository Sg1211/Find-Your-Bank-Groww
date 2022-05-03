import React , {useEffect} from "react";
import { useNavigate } from "react-router-dom";


const NotFound = () => {
  let navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/all-banks');
    }, 5000);
  }, [navigate]);

  return (
    <div className="notFound">
      <h1>Page not Found</h1>
      <h2>You will be redirected to all banks page in 5 secs</h2>
    </div>
  );
}

export default NotFound;