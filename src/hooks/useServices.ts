import { useContext } from 'react'
import { CardContext } from '../context/CardContext'

export const useServices = () => {
  const { cardState, addService, editService, deleteService, resetEdit, saveEdit, serviceForCategory, allServices } = useContext(CardContext)
  const { services, serviceToEdit, serviceFiltered } = cardState

  return {
    services,
    addService,
    editService,
    serviceToEdit,
    deleteService,
    resetEdit,
    saveEdit,
    serviceFiltered,
    serviceForCategory,
    allServices
  }
}
