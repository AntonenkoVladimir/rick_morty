import {FC} from "react";
import {URLSearchParamsInit, useNavigate, useParams, useSearchParams} from "react-router-dom";
import {gql, useQuery} from "@apollo/client";
import {filterList, filterListKeys} from "../../../utils/constans";
import {INewObj} from "./types";
import GetChar from "../../GetChar/GetChar";
import Error from "../../Error/Error";
import "./Main.scss";

const Main: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const params = useParams();
  const filterKeys = filterListKeys;

  const filterFunc = (filter: "status" | "species" | "gender" | "type", value: string) => {
    const newObj: INewObj = {};

    filterKeys.forEach(key => {
      if (!(key === filter && value === "Without sort")) {
        const currentValue = searchParams.get(key)
        if (currentValue) newObj[key] = currentValue;
      }
    });

    if (value !== "Without sort") newObj[filter] = value;
    setSearchParams(newObj as URLSearchParamsInit);
    navigate(`/main/1${getSearch()}`);
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
    const newArr: (string | null)[][] = [];

    filterKeys.map(key => {
      if (searchParams.get(key)) newArr.push([key, searchParams.get(key)]);
    })
    return newArr;
  }

  const filters = getFilters();
  let filter = "";
  if (!!filters.length) {
    filter += ", filter:{"
    filters.map((item, index) => {
      if (!!index) filter += ", "
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
            disabled={!(Number(params.page) > 1)}
            onClick={() => navigate(`/main/${Number(params.page) - 1}${getSearch()}`)}
          >
            Предыдущая страница
          </button>
          <button
            disabled={!!!data?.characters["info"].next}
            onClick={() => navigate(`/main/${Number(params.page) + 1}${getSearch()}`)}
          >
            Следующая страница
          </button>
        </div>
        {error ?
          <Error />
          :
          <GetChar
          loading={loading}
          data={data}
          />}
    </div>
  );
};

export default Main;
