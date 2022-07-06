import { FormCard } from '../components/FormCard/FormCard'
import { ServiceCardItem } from '../components/ServiceCard/ServiceCardItem'
import { ContainerCards, ContainerForm, WrapperServices } from './styles'

export const Services = () => {
  return (
    <>

      <WrapperServices>
        <ContainerCards>
          <ServiceCardItem />
        </ContainerCards>
        <ContainerForm>
          <FormCard />
        </ContainerForm>
      </WrapperServices>
    </>
  )
}
