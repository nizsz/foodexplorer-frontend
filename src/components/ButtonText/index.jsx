import {Container} from "./styles"
import {RiArrowLeftSLine} from "react-icons/ri"

export function ButtonText ({title, ...rest}) {
  return (
    <Container
      {...rest}
      type="button"
    >
      <RiArrowLeftSLine size={34}/>
      {title}
    </Container>
  )
};