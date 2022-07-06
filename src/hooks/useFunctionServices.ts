import { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { CategoryService, Service } from '../interfaces/CardInterfaces'
import { generateUUID } from '../utilities/utilities'
import { useServices } from './useServices'

export const useFunctionServices = <T extends Object>(initstate:T) => {
  const Location = useLocation()
  const pathCategory:CategoryService|string = Location.pathname
  const { addService, serviceToEdit, resetEdit, saveEdit, serviceForCategory, allServices, deleteService } = useServices()
  const [formulario, setFormulario] = useState(initstate)
  const handleChangue = ({ target }:ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target
    setFormulario({
      ...formulario,
      [name]: value
    }
    )
  }

  const handleAddService = (e:FormEvent<HTMLFormElement>, title:string, description:string) => {
    e.preventDefault()
    const newService:Service = {
      title,
      description,
      category: pathCategory as CategoryService,
      id: generateUUID()
    }
    addService(newService)
    if (pathCategory !== '/') {
      serviceForCategory(pathCategory as CategoryService)
    }
    setFormulario({
      ...formulario,
      title: '',
      description: ''
    }
    )
  }
  const handleCancelar = () => {
    resetEdit()
    setFormulario({
      ...formulario,
      title: '',
      description: ''
    }
    )
  }
  const handleSaveEdit = (e:FormEvent<HTMLFormElement>, title:string, description:string) => {
    e.preventDefault()
    const editService:Service = {
      title,
      description,
      category: serviceToEdit.category,
      id: serviceToEdit.id
    }
    saveEdit(serviceToEdit.id, editService)
    resetEdit()
    if (pathCategory !== '/') {
      serviceForCategory(pathCategory as CategoryService)
    }
  }
  const handleDeleteServices = (id:string) => {
    deleteService(id)
    if (pathCategory !== '/') {
      serviceForCategory(pathCategory as CategoryService)
    }
    resetEdit()
  }
  useEffect(() => {
    setFormulario({
      ...formulario,
      title: serviceToEdit.title,
      description: serviceToEdit.description
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serviceToEdit])
  useEffect(() => {
    if (pathCategory !== '/') {
      return serviceForCategory(pathCategory as CategoryService)
    }
    allServices()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathCategory])

  return ({
    formulario, handleChangue, handleAddService, handleCancelar, ...formulario, handleSaveEdit, handleDeleteServices
  })
}
