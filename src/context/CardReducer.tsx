import { CardState, CategoryService, Service } from '../interfaces/CardInterfaces'
import { INITIAL_STATE } from './CardProvider'

type CardAction =
    | { type: 'addService', payload: Service }
    | { type: 'editService', payload:string}
    | { type: 'deleteService', payload:string}
    | { type: 'resetEdit'}
    | { type: 'saveEdit', payload:{id:string, service:Service}}
    | { type: 'serviceForCategory', payload:CategoryService}
    | { type: 'allServices'}

export const CardReducer = (state: CardState, action: CardAction): CardState => {
  switch (action.type) {
    case 'addService':
      return {
        ...state,
        services: [...state.services, action.payload]
      }
    case 'editService':
      return {
        ...state,
        serviceToEdit: state.services.filter(service => service.id === action.payload)[0]
      }
    case 'saveEdit':
      return {
        ...state,
        services: [...state.services.filter(service => service.id !== action.payload.id), action.payload.service]
      }

    case 'resetEdit':
      return {
        ...state,
        serviceToEdit: INITIAL_STATE.serviceToEdit
      }
    case 'deleteService':
      return {
        ...state,
        services: [...state.services.filter(service => service.id !== action.payload)]
      }
    case 'serviceForCategory':
      return {
        ...state,
        serviceFiltered: [...state.services.filter(service => service.category === action.payload)]
      }
    case 'allServices':
      return {
        ...state,
        serviceFiltered: INITIAL_STATE.serviceFiltered
      }

    default:
      return state
  }
}
