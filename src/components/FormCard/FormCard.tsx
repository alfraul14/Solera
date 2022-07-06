import { useFunctionServices } from '../../hooks/useFunctionServices'
import { FormBody, FormButtonContainer, FormButtonsReject, FormButtonsSuccess, FormContainer, FormGroup, FormTitle, Input, Label } from './styles'
import { useServices } from '../../hooks/useServices'

interface formData {
  title:string,
  description:string,
}
export const FormCard = () => {
  const { serviceToEdit } = useServices()
  const { title, description, handleChangue, handleAddService, handleCancelar, handleSaveEdit } = useFunctionServices<formData>({
    title: '',
    description: ''
  })

  return (

    <FormContainer>
      <form onSubmit={(e) => serviceToEdit.title !== '' ? handleSaveEdit(e, title, description) : handleAddService(e, title, description)}>
        <FormBody>
          <FormTitle>{serviceToEdit.title !== '' ? 'Editar Servicio' : 'Agregar Servicio'}</FormTitle>
          <FormGroup>
            <Label>Nombre</Label>
            <Input
              name='title'
              value={title}
              onChange={handleChangue}
              required
              type='text'
            />
          </FormGroup>
          <FormGroup>
            <Label>Descripción</Label>
            <Input
              name='description'
              value={description}
              onChange={handleChangue}
              required
              type='text'
            />
          </FormGroup>
        </FormBody>
        <FormButtonContainer>
          <FormButtonsSuccess type='submit'>{serviceToEdit.title !== '' ? 'Guardar Edición' : 'Grabar'}</FormButtonsSuccess>
          <FormButtonsReject onClick={handleCancelar} type='reset'>Cancelar</FormButtonsReject>
        </FormButtonContainer>
      </form>
    </FormContainer>

  )
}
