import {URLSearchParamsInit, useNavigate, useParams, useSearchParams} from "react-router-dom";
import {FC} from "react";
import {filterList, filterListKeys} from "../../utils/constans";
import GetChar from "../GetChar/GetChar";
import {IFilters, INewObj} from "../../interfaces/interfaces";
import {gql, useQuery} from "@apollo/client";
import "./Main.scss";

const Main: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const params = useParams();
  const filterKeys = filterListKeys;

  const filterFunc = (filter: "status" | "species" | "gender" | "type", value: string) => {
    const newObj: INewObj = {};

    filterKeys.forEach(key => {
      if (key !== filter && value !== "Without sort") {
        const currentValue = searchParams.get(key)
        if (currentValue) newObj[key] = currentValue;
      }
    });

    if (value !== "Without sort") newObj[filter] = value;
    setSearchParams(newObj as URLSearchParamsInit);
  };

  const getSearch = () => {
    const isFilters = window.location.href.split("?")[1];
    return isFilters ? `?${isFilters}` : "";
  }

  const selectVal = (filter: "status" | "species" | "gender" | "type") => {
    const searchFilter = searchParams.get(filter);
    return searchFilter ? searchFilter : "Without sort"
  }

  const getFilters = () => {
    const newArr: object[] = [];
    filterKeys.map(key => {
      if (searchParams.get(key)) newArr.push([key, searchParams.get(key)]);
    })
    return newArr;
  }
  const filters: IFilters[] = getFilters();
  let filter = "";
  if (filters.length > 0) {
    filter += ", filter:{"
    filters.map((item, index) => {
      if (index !== 0) filter += ", "
      filter += `${item[0]}: "${item[1]}"`
    })
    filter += "}"
  }
  const getCharacters = gql`
    query {
      characters(page: ${params.page} ${filter}){
        results{
          id,
          name,
          status,
          species,
          type,
          gender,
          image,
          location{
            name
          },
          episode{
            name
          }
        }
        info{
          next
        }
      } 
    }
    `;
  const {loading, error, data} = useQuery(getCharacters);

  if(error) navigate(`/main/1${getSearch()}`)

  return (
    <div className="main-page">
      <div className="main-page-sort">
        {
          filterKeys.map(filter => (
            <div key={`select-key-${filter}`}>
              <label>{filter}</label>
              <select
                onChange={(e) => filterFunc(filter, e.target.value)}
                value={selectVal(filter)}
              >
                <option>Without sort</option>
                {
                  filterList[filter].map(value => (
                    <option key={`option-key-${filter}-${value}`}>{value}</option>
                  ))
                }
              </select>
            </div>
          ))
        }
      </div>
      <div className="main-page-pagination">
        <button
          disabled={Number(params.page) > 1 ? false : true}
          onClick={() => navigate(`/main/${Number(params.page) - 1}${getSearch()}`)}
        >
          Предыдущая страница
        </button>
        <button
          disabled={data? data.characters["info"].next ? false : true : false}
          onClick={() => navigate(`/main/${Number(params.page) + 1}${getSearch()}`)}
        >
          Следующая страница
        </button>
      </div>
      <GetChar
      loading={loading}
      error={error}
      data={data}
      />
    </div>
  );
};

export default Main;
