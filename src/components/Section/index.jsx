import { Container } from "./styles";

export function Section ({title, children, ...rest}) {
  return (
    <Container
      {...rest}
    >
    <span>{title}</span>
    
    {children}
    </Container>
  )
};