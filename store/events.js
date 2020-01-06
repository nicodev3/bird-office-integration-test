import EventService from '@/services/EventService.js'

/* state is equivalent to data
 * the object contains all
 * reactive datas
 */
export const state = () => ({
  events: [],
  event: {}
})

/* MUTATIONS are responsible for the state changes */
export const mutations = {
  SET_EVENTS(state, events) {
    state.events = events
  },
  SET_EVENT(state, event) {
    state.event = event
  },
  SET_EVENT_CART(state, event) {
    state.eventCart = event.counter++
  }
}

/* ACTIONS are responsible for when the MUTATIONS should fire */
export const actions = {
  fetchEvents({ commit }) {
    return EventService.getEvents().then((response) => {
      commit('SET_EVENTS', response.data)
    })
  },
  fetchEvent({ commit }, id) {
    return EventService.getEvent(id).then((response) => {
      commit('SET_EVENT', response.data)
    })
  },
  fetchEventCart({ commit }, id) {
    return EventService.getEvent(id).then((response) => {
      commit('SET_EVENT_CART', response.data)
    })
  }
}
