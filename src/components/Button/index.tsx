import { Text } from "../Text";
import { Container } from "./styles";
interface ButtonProps {
  children: string
  onPress: () => void
  disabled?: boolean
}

function Button({ children, onPress, disabled }: ButtonProps) {
  return (
    <Container onPress={onPress} disabled={disabled}>
      <Text weight={600} color={"#ffffff"}>
        {children}
      </Text>
    </Container>
  );
}
export { Button };
