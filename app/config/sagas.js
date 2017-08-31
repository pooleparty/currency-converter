import { takeEvery, select, call, put } from 'redux-saga/effects';

// 1. Swap currency
// 2. Change base currency
// 3. Initial app load
import {
  SWAP_CURRENCY,
  CHANGE_BASE_CURRENCY,
  GET_INITIAL_CONVERSION,
  CONVERSION_RESULT,
  CONVERSION_ERROR,
} from '../actions/currencies';

const getLatestRate = currency => fetch(`http://api.fixer.io/latest?base=${currency}`);

const fetchLatestConversionRates = function* fetchLatestConversionRates(action) {
  let currency = action.currency;
  if (currency === undefined) {
    currency = yield select(state => state.currencies.baseCurrency);
  }

  try {
    const response = yield call(getLatestRate, currency);
    const result = yield response.json();

    if (result.error) {
      yield put({ type: CONVERSION_ERROR, error: result.error });
    } else {
      yield put({ type: CONVERSION_RESULT, result });
    }
  } catch (e) {
    yield put({ type: CONVERSION_ERROR, error: e.message });
  }
};

const rootSaga = function* rootSaga() {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
  yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);
};

export default rootSaga;
