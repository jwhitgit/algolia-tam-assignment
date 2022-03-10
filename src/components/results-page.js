import algoliasearch from 'algoliasearch';
import instantsearch from 'instantsearch.js';
import {
  searchBox,
  hits,
  pagination,
  refinementList,
} from 'instantsearch.js/es/widgets';

import resultHit from '../templates/result-hit';
import aa from 'search-insights';
import { createInsightsMiddleware } from 'instantsearch.js/es/middlewares';

/**
 * @class ResultsPage
 * @description Instant Search class to display content on main page
 */
class ResultPage {
  constructor() {
    this._registerClient();
    this._registerWidgets();
    this._startSearch();
  }

  clickView = () => {
    aa('clickedObjectIDs', {
      userToken: 'user-1',
      index: 'tam',
      eventName: 'view-object',
      objectIDs: [''],
    });
  };

  clickAddToCart = () => {
    aa('clickedObjectIDs', {
      userToken: 'user-1',
      index: 'tam',
      eventName: 'view-object',
      objectIDs: [''],
    });
  };

  /**
   * @private
   * Handles creating the search client and creating an instance of instant search
   * @return {void}
   */
  _registerClient() {
    this._searchClient = algoliasearch(
      process.env.ALGOLIA_APP_ID,
      process.env.ALGOLIA_API_KEY
    );
    aa('init', {
      appId: process.env.ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_API_KEY,
    });

    this._searchInstance = instantsearch({
      indexName: process.env.ALGOLIA_INDEX,
      searchClient: this._searchClient,
    });

    aa('setUserToken', 'user-1');
    const insightsMiddleware = createInsightsMiddleware({
      insightsClient: aa,
    });
    this._searchInstance.use(insightsMiddleware);
  }

  /**
   * @private
   * Adds widgets to the Algolia instant search instance
   * @return {void}
   */
  _registerWidgets() {
    this._searchInstance.addWidgets([
      searchBox({
        container: '#searchbox',
      }),
      hits({
        container: '#hits',
        templates: {
          item: resultHit,
        },
      }),
      pagination({
        container: '#pagination',
      }),
      refinementList({
        container: '#brand-facet',
        attribute: 'brand',
      }),
      refinementList({
        container: '#categories-facet',
        attribute: 'categories',
      }),
    ]);
  }

  /**
   * @private
   * Starts instant search after widgets are registered
   * @return {void}
   */
  _startSearch() {
    this._searchInstance.start();
  }
}

export default ResultPage;
