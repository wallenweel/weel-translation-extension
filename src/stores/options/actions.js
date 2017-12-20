import { sendMessage } from '@/functions/runtime'
import {
  INITIAL_FROM_BACKGROUND,
  UPDATE_STORAGE_STATE,
  REQUEST_TRANSLATION
} from '@/types'
import * as mocks from '@/api/mocks'

const __ = {}

__[INITIAL_FROM_BACKGROUND] = async ({ state, commit }) => {
  let success = false

  await sendMessage({
    type: INITIAL_FROM_BACKGROUND
  }).then(({
    api,
    storage,
    current_service_id,
    settings,
    preferences,
    sources
  }) => {
    state = Object.assign(state, {
      api,
      storage,
      current_service_id,
      settings,
      preferences,
      sources
    })

    commit('currentServiceSource', api[current_service_id])

    success = true
  }, error => {
    success = false

    console.error(
      `Options Page Dose Not Initial Success, Because:`,
      error
    )
  })

  return success
}

__[UPDATE_STORAGE_STATE] = ({ state }, { type, key }) => {
  sendMessage({
    type: UPDATE_STORAGE_STATE,
    payload: {
      type,
      key,
      value: state[key]
    }
  }).then(over => {
    // TODO: update storage over
    // do something here, maybe an alert
  })
}

__[REQUEST_TRANSLATION] = ({ state }, { q, from, to }) => {
  sendMessage({
    payload: { q, from, to },
    type: REQUEST_TRANSLATION
  }).then(result => {
    state.result = result
    state.result.over = true
  })

  state.result.over = true
}

__['testRequest'] = ({ state, commit }) => {
  const text = state.temp.api.query.text({ q: 'hello', from: 'en', to: 'zh-cn' })
  console.log(text)
  fetch(text, {
    mode: 'no-cors'
  })
  .then(res => {
    if (res.ok) {
      return res.json()
    } else {
      return mocks.response
    }
  })
  .then(data => {
    // console.log(data)
    // console.log(JSON.parse(data))
    commit('tempResponse', JSON.parse(data))
  })
}

export default __
