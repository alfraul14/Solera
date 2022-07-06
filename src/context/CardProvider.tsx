import { useReducer } from 'react'
import { CardContext } from './CardContext'
import { Service, CardState, CategoryService } from '../interfaces/CardInterfaces'
import { CardReducer } from './CardReducer'

export const INITIAL_STATE: CardState = {

  services: [
    {
      id: '1',
      title: 'Electricidad',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      category: '/hogar'
    },
    {
      id: '2',
      title: 'Auxilio Mecanico',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      category: '/autos'
    },
    {
      id: '3',
      title: 'Chofer Remplazo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      category: '/autos'
    },
    {
      id: '4',
      title: 'Medico a domicilio',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      category: '/salud'
    },
    {
      id: '5',
      title: 'Ambulancia',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      category: '/salud'
    },
    {
      id: '6',
      title: 'Gasfitero',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      category: '/hogar'
    }
  ],
  serviceToEdit:
  {
    id: '',
    title: '',
    description: '',
    category: '/'
  },
  serviceFiltered:
  [{
    id: '',
    title: '',
    description: '',
    category: '/'
  }]

}

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const CardProvider = ({ children }:Props) => {
  const [cardState, dispatch] = useReducer(CardReducer, INITIAL_STATE)

  const addService = (service:Service) => {
    dispatch({ type: 'addService', payload: service })
  }
  const editService = (id:string) => {
    dispatch({ type: 'editService', payload: id })
  }
  const deleteService = (id:string) => {
    dispatch({ type: 'deleteService', payload: id })
  }
  const resetEdit = () => {
    dispatch({ type: 'resetEdit' })
  }
  const saveEdit = (id:string, service:Service) => {
    dispatch({ type: 'saveEdit', payload: { id, service } })
  }
  const serviceForCategory = (id:CategoryService) => {
    dispatch({ type: 'serviceForCategory', payload: id })
  }
  const allServices = () => {
    dispatch({ type: 'allServices' })
  }

  return (
    <CardContext.Provider value={{
      cardState, addService, editService, deleteService, resetEdit, saveEdit, serviceForCategory, allServices
    }}
    >
      {children}
    </CardContext.Provider>
  )
}
