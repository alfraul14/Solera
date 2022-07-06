export interface Service {
    id:string
    title: string
    description: string
    category:CategoryService
}
export interface CardState{
    services:Service[],
    serviceToEdit:Service,
    serviceFiltered:Service[],
}
export type CategoryService = '/' | '/autos' | '/salud' | '/hogar';
