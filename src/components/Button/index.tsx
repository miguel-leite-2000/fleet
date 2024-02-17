import React from "react";
import { Container, Loading, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  title: string;
  isLoading?: boolean;
};

export function Button({ title, isLoading = false, ...props }: Props) {
  return (
    <Container activeOpacity={0.7} disabled={isLoading} {...props}>
      {isLoading ? <Loading /> : <Title>{title}</Title>}
    </Container>
  );
}
