export const SET_EXPERIMENT = 'set_experiment'

const DEFAULT_STATE = {
  currentExperiment: ''
}

const setExperiment = (state, action) => {
  const newState = {}
  Object.assign(newState, state, { currentExperiment: action.currentExperiment })
  return newState
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_EXPERIMENT:
      return setExperiment(state, action)
    default:
      return state
  }
}

export default rootReducer