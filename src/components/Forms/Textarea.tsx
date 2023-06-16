import React from "react";
import { Textarea as TextareaChakra } from "@chakra-ui/react";
import Field, { PropsField } from "./Field";
type Props = React.ComponentProps<typeof TextareaChakra> & PropsField;
const Textarea = (props: Props) => {
  return <Field rows={6} resize="none" {...props} Input={TextareaChakra} />;
};

export default Textarea;
