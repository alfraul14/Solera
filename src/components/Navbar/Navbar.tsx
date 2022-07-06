import { Li, NavLink, NavBar, NavContainer, Ul, Wrapper } from './styles'

export const Navbar = () => {
  return (
    <NavContainer>
      <Wrapper>
        <NavBar>
          <Ul>
            <Li>
              <NavLink to='/'>
                Todos
              </NavLink>
            </Li>
            <Li>
              <NavLink to='/autos'>
                Autos
              </NavLink>
            </Li>
            <Li>
              <NavLink to='/salud'>
                Salud
              </NavLink>
            </Li>
            <Li>
              <NavLink to='/hogar'>
                Hogar
              </NavLink>
            </Li>
          </Ul>
        </NavBar>
      </Wrapper>
    </NavContainer>
  )
}
