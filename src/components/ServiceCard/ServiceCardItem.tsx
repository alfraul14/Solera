import { useServices } from '../../hooks/useServices'
import { BoxButtons, BoxButtonsContainer, BoxContainer, CardBody, CardText, CardTitle } from './styles'
import { useFunctionServices } from '../../hooks/useFunctionServices'

export const ServiceCardItem = () => {
  const { services, editService, serviceFiltered } = useServices()
  const { handleDeleteServices } = useFunctionServices({ })
  let servicesdata
  if (serviceFiltered[0].title !== '') {
    servicesdata = serviceFiltered
  } else {
    servicesdata = services
  }
  return (
    <>
      {servicesdata.map((service) => (
        <BoxContainer key={service.id}>
          <CardBody>
            <CardTitle>{service.title}</CardTitle>
            <CardText>{service.description} </CardText>
          </CardBody>
          <BoxButtonsContainer>
            <BoxButtons onClick={() => editService(service.id)}>Editar</BoxButtons>
            <BoxButtons onClick={() => handleDeleteServices(service.id)}>Eliminar</BoxButtons>
          </BoxButtonsContainer>
        </BoxContainer>
      ))}
    </>

  )
}
