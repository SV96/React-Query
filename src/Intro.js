import React from 'react'
import './main.scss'
import DiffrentApprocah from './Images/DiffrentApprocah.png'
import cachedImg from './Images/cachedImg.png'

const Introduction = () => {
  return (
    <>
      <div className='intoContainer'>
        {/* Main Header */}
        <div className='intoItemsMainHeader'>
          <p className='headerNormalApprocah'>
            Why to use <span className='topic'>React Query?</span>
          </p>
          <p>
            Data-fetching library with fetching, caching, synchronizing, and
            updating server state for React.
          </p>
        </div>
      </div>
      <div className='container'>
        {/* Normal apporoach section */}
        <div className='intoItemsApproach'>
          <p className='headerNormalApprocah'>
            Issue with normal implementation!
          </p>
          <p>
            While going with normal approach during API calls,we have to handle
            multiple states. Due to multiple states it becomes complicated and
            hard to handle react app.
          </p>
          <p>** States required while calling an API.</p>
          <ul>
            <li>
              Loading:
              <span>
                {' '}
                To check weather API call is completed and stop page loader.
              </span>
            </li>
            <li>
              Error:<span> Show error on page is API call fails.</span>
            </li>
            <li>
              Data:<span> Show data on page accordingly.</span>
            </li>
          </ul>
          <p>
            While using normal approach API call will be made after rendering of
            component.
          </p>
          <p>
            Another issue with normal approach is that when we re-renders the
            page API call will be made again and again. That will make out slow
            to render.
          </p>
        </div>
        {/* React query apporoach section */}
        <div className='intoItemsRectQueryApproach'>
          <p className='headerNormalApprocah'>
            Ways to deal this above issue ?
          </p>

          <div>Caching techinques can be used to save us from above issue.</div>
          <div className='sectionMargin'>
            React Query can be used &#128640;.
          </div>
          <div>What react-query provides ?</div>
          <p>
            While using react-query we don't need to have multiple different
            states such as Loading, Error, Data.
          </p>
          <code className='codeBlock'>
            const {' { isError, isSuccess, isLoading, data, error } '} =
            useQuery( ['products'], fetchProducts, '{' staleTime: 3000 '}' )
          </code>
          <p>
            React-query by default provides all states required during an api
            call and mantain a Component.
          </p>
          <p>
            <span className='codePart'>['products']</span> is nothing just
            unique name given to paticular data.
          </p>
          <p>
            <span className='codePart'>fetchProducts</span> is function where
            API call is written.
          </p>
          <p>
            <span className='codePart'>staleTime</span> means ,after how long
            time we want to call API againg to fetch data. It terms for
            freshness of data.
          </p>
          <p>
            One good thing about react query is that it makes an API called
            before component is rended. Using this API is called just before the
            actual paint of component on screen.
          </p>
        </div>

        {/* approcah diffrence code */}
        <div className='intoItemsDisplayImg'>
          <img src={DiffrentApprocah} alt='diffrent-approach' loading='lazy' />
        </div>

        {/* Taking data from cache */}
        <div className='intoItemsCacheData'>
          <p className='headerNormalApprocah'>
            Fetching Data From React Query Cache
          </p>
          <p>
            Default cache time is 5 minutes. We can also change it using{' '}
            <span className='codePart'>cacheTime</span>.
          </p>
          <code className='codeBlock'>
            const queryClient = useQueryClient();
            <br />
            const cacheData = queryClient.getQueryData(["products"]);
          </code>
        </div>

        {/* approcah diffrence code */}
        <div className='intoItemsDisplayImg'>
          <br />
          <img className='' src={cachedImg} alt='cache' />
        </div>

        <div className='introItemsDevTools'>
          <p className='headerNormalApprocah'>React Query Dev Tools</p>
          <p>
            React Query Dev Tools can be used to see data that is stored inside
            react query.It help visualize all of the inner workings of React
            Query and will likely save you hours of debugging.
          </p>
          <p>How it works?</p>
          <code className='codeBlock'>
            <span>npm i @tanstack/react-query-devtools</span>
          </code>
          <p>Install above dependency</p>

          <code className='codeBlock'>
            {
              'import  { ReactQueryDevtools } from "@tanstack/react-query-devtools" '
            }{' '}
            <br />
            {'<ReactQueryDevtools initialIsOpen={false} />'}
          </code>
          <p>
            It can be any Component where the above code can be written but
            prefer way is to write it in the main app.js or router file. So that
            dev tools can be accessed on all pages.
          </p>
        </div>

        <div className='introItemsConfig'>
          <p className='headerNormalApprocah'>React Query Config</p>
          <code className='codeBlock'>
            const {' { isError, isSuccess, isLoading, data, error } '} =
            useQuery( ['products','arguments to fetchProducts'], fetchProducts,
            {
              // eslint-disable-next-line
              '{staleTime: 3000 , cacheTime:5000, onSuccess: (data) => {console.log(`Data fetched ${data}`)}, onError: ()=>  {console.log("Error in Data fetched")}}'
            }
            )
          </code>
          <p>
            <span className='codePart'>arguments to fetchProducts</span> any
            arguments can be passed to fetch function using this way.
          </p>
          <p>
            <span className='codePart'>staleTime: 3000</span> No matter
            component mounts or unmounts, I don't want an API call for 2 mins
            after the first time get data. That is what staleTime is doing.
            staleTime tells you how fresh you data is. It is very similar to
            Cache-Control: max-age=120.
          </p>
          <p>
            <span className='codePart'>cacheTime:5000</span> cacheTime is
            something totally different. Think about it as a garbage-collect
            time. It basically describes how long data should be kept in the
            cache before it can be garbage collected. This is only relevant for
            unused queries, because active queries can per definition not be
            garbage collected.
          </p>
          <p>
            <span className='codePart'>onSuccess</span> The onSuccess callback
            function is called only when the data has been retrieved from the
            query.
          </p>
          <p>
            <span className='codePart'>onError</span> At first glance, it looks
            like the onError callback is exactly what we need to perform a side
            effect if a fetch fails, and it will also work.
          </p>
        </div>

        {/* Github code link */}
        <div>
          <br />
          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
            <path
              fillRule='evenodd'
              d='M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 012.496-.336 9.554 9.554 0 012.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z'
              clipRule='evenodd'
            ></path>
          </svg>{' '}
          <a
            href='https://github.com/SV96/React-Query'
            target='_blank'
            rel='noreferrer'
          >
            Github Link To Code
          </a>
        </div>
      </div>
    </>
  )
}

export default Introduction
