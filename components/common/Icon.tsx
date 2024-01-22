import { ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"img"> {
  name: string;
}

export default function Icon({ name, ...props }: Props) {
  return <img src={'/assets/Icon/eye-off.svg'} alt='눈알 아이콘' />;
}