import { Container } from "./styles";

export function Ingredients ({title, ...rest}) {
  return (
    <Container {...rest}>
      {title}
    </Container>
  )
};