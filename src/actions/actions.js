const API2 = 'https://hn.algolia.com/api/v1/search?query=';
const API = 'https://itunes.apple.com/search?term=rock&media=music';
const DEFAULT_QUERY = 'redux';

export function fetchResults() {
  return dispatch => {
    dispatch(fetchResultsBegin());
    fetch(API)
    .then(response => response.json())
    .then(json => {
        dispatch(fetchResultsSuccess(json.results));
        return json.results;
      })
      .catch(error =>
        dispatch(fetchResultsFailure(error))
      );
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const FETCH_RESULTS_BEGIN = "FETCH_RESULTS_BEGIN";
export const FETCH_RESULTS_SUCCESS =
  "FETCH_RESULTS_SUCCESS";
export const FETCH_RESULTS_FAILURE =
  "FETCH_RESULTS_FAILURE";

export const fetchResultsBegin = () => ({
  type: FETCH_RESULTS_BEGIN
});

export const fetchResultsSuccess = results => ({
  type: FETCH_RESULTS_SUCCESS,
  payload: { results }
});

export const fetchResultsFailure = error => ({
  type: FETCH_RESULTS_FAILURE,
  payload: { error }
});
