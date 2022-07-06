import { createContext } from 'react'
import { Service, CardState, CategoryService } from '../interfaces/CardInterfaces'

export type CardContextProps={
    cardState:CardState;
    addService:(service:Service) => void;
    editService:(id:string) => void
    deleteService:(id:string) => void
    resetEdit:()=>void
    saveEdit:(id:string, service:Service)=>void
    serviceForCategory:(id:CategoryService)=>void
    allServices:()=>void
}
export const CardContext = createContext<CardContextProps>({}as CardContextProps)
