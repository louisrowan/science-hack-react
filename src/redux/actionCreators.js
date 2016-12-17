import { SET_EXPERIMENT } from './reducers'

export function setExperiment(currentExperiment) {
  return { type: SET_EXPERIMENT, currentExperiment}
}