import React, {useState, useEffect} from "react";
import axios from "axios";

import SearchFilter from '../components/SearchFilter';
import BanksList from '../components/BanksList';
import Pagination from '../components/Pagination';

const AllBanks = () => {
    const [loading, setLoading] = useState(true);
    const [city, setCity] = useState("JAIPUR");    // default city
    const [category, setCategory] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const [bankList, setBankList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [paginatedList, setPaginatedList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
      setLoading(true)
        axios.get(
          `https://vast-shore-74260.herokuapp.com/banks?city=${city}`,
        )
        .then((resp) => {
            setBankList(resp.data)
            setFilteredList(resp.data)
            setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });

    }, [city])

    useEffect(() => {
        setFilteredList(bankList);
        if (searchQuery !== "" && category !=="") {
          setFilteredList(
            bankList.filter((bank) => {
              return bank[category].toLowerCase().startsWith(searchQuery.toLowerCase());
            })
          );
        }
      }, [bankList, category, searchQuery]);


    useEffect(() => {
        const lastPageIndex = currentPage * 10;   //  Number of banks on each page : default 10 //
        const firstPageIndex = lastPageIndex - 10;
        const modilyList = filteredList.slice(firstPageIndex, lastPageIndex);
        setPaginatedList(modilyList);
      }, [filteredList, currentPage]);

    
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

   return (
    <div className="allBanksContainer">
        <div className="searchFilter">
        <div className="heading">
            All Banks
        </div>
          <SearchFilter
           city={city}
           category={category}
           selectedCity={setCity}
           selectedCategory={setCategory}
           selectedSearchQuery={setSearchQuery}
          />
        </div>
        <div className="banksList">
          <BanksList
           banksList={paginatedList}
           loading={loading}
           />
        </div>
        <div className="pagination">
          <Pagination
            totalLength={filteredList.length}
            paginate={paginate}
          />
        </div>
    </div>
  );
}

export default AllBanks;
