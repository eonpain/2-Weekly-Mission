import { ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"img"> {
  name: string;
}

export default function Icon({ name, ...props }: Props) {
//   const iconURL = https://res.cloudinary.com/divjslgco/image/upload/v1698465629/codeit/icons/${name}.svg;
  return <img src={'/assets/Icon/eye-off.svg'} alt='눈알 아이콘' />;
}