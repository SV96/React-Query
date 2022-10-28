import React from "react";
import "./main.scss";
import DiffrentApprocah from "./Images/DiffrentApprocah.png";
import cachedImg from "./Images/cachedImg.png";

const Introduction = () => {
  return (
    <>
      <div className="intoContainer">
        {/* Main Header */}
        <div className="intoItemsMainHeader">
          <p className="headerNormalApprocah">
            Why to use <span className="topic">React Query?</span>
          </p>
          <p>Basically React Query is used during API calls.</p>
        </div>
      </div>
      <div className="container">
        {/* Normal apporoach section */}
        <div className="intoItemsApproach">
          <p className="headerNormalApprocah">
            Issue with normal implementation!
          </p>
          <p>
            While going with normal approach during API calls,we have to handle
            multiple states. Due to multiple states it becomes complicated and
            hard to handle react app.
          </p>
          <p>** States required while calling an API</p>
          <ul>
            <li>
              Loading:
              <span>
                {" "}
                To check weather API call is completed and stop page loader
              </span>
            </li>
            <li>
              Error:<span>Show error on page is API call fails</span>
            </li>
            <li>
              Data:<span>Show data on page accordingly</span>
            </li>
          </ul>
          <p>
            While using normal approach API call will be made after rendering of
            component. Even if API call is made inside useEffect.
          </p>
          <p>
            Another issue with normal approach is that when we re renders the
            page API call will be made again and again. That will make out slow
            to render
          </p>
        </div>
        {/* React query apporoach section */}
        <div className="intoItemsRectQueryApproach">
          <p className="headerNormalApprocah">
            Ways to deal this above issue ?
          </p>

          <div>Caching techinques can be used to save us from above issue</div>
          <div className="sectionMargin">
            React Query can be used &#128640;.
          </div>
          <div>What react-query provides ?</div>
          <p>
            While using react-query we don't need to have multiple different
            states such as Loading, Error,Data
          </p>
          <code className="codeBlock">
            const {" { isError, isSuccess, isLoading, data, error } "} =
            useQuery( ['products'], fetchProducts, '{" staleTime: 3000 "}' )
          </code>
          <p>
            React-query by default provides all states required during an api
            call and mantain a Component
          </p>
          <p>
            <span className="codePart">['products']</span> is nothing just
            unique name given to paticular data.
          </p>
          <p>
            <span className="codePart">fetchProducts</span> is function where
            API call is written.
          </p>
          <p>
            <span className="codePart">staleTime</span> means ,how long we want
            to keep data cached.
          </p>
          <p>
            One good thing about react query is that it makes an API called
            before component is rended. Using this API is called just before the
            actual paint of component on screen.
          </p>
        </div>

        {/* approcah diffrence code */}
        <div className="intoItemsDisplayImg">
          <img className="" src={DiffrentApprocah} alt="diif-approach-image" />
        </div>

        {/* Taking data from cache */}
        <div className="intoItemsCacheData">
          <p className="headerNormalApprocah">
            Fetching Data From React Query Cache
          </p>
          <p>
            As we have defined <span className="codePart">staleTime</span> ,So
            it will allow us to use cache data until 3 seconds.
          </p>
          <code className="codeBlock">
            const queryClient = useQueryClient();
            <br />
            const cacheData = queryClient.getQueryData(["products"]);
          </code>
        </div>

        {/* approcah diffrence code */}
        <div className="intoItemsDisplayImg">
          <br />
          <img className="" src={cachedImg} alt="diif-approach-image" />
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path
              fillRule="evenodd"
              d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 012.496-.336 9.554 9.554 0 012.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Introduction;
