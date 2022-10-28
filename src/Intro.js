import React from "react";
import "./main.scss";
import DiffrentApprocah from "./Images/DiffrentApprocah.png";

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
      </div>
    </>
  );
};

export default Introduction;
