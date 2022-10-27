import React from "react";
import "./main.scss";

const Introduction = () => {
  return (
    <div className="intoContainer">
      <grid>
        <div className="highLight">
          Increase <span className="topic">React Js Preformance</span> During
          API Call's
        </div>
      </grid>
      <grid>
        <section className="">
          <div className="headerNormalApprocah">
            Issue with normal implementation!
          </div>
          <p>
            While going with normal approach ,we have to handle multiple states.
            Due to multiple states it becomes complicated and hard to handle
            react app.
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
        </section>
        <section>
          <div className="headerNormalApprocah">
            Ways to deal this above issue ?
          </div>
          <div>Caching techinques can be used to save us from above issue</div>
          <div>React Query can use used &#128640;</div>
        </section>
      </grid>
    </div>
  );
};

export default Introduction;
