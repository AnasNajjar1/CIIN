import { Link as LinkReactRouter } from "react-router-dom";

const Link = ({
  children,
  ...rest
}: React.ComponentProps<typeof LinkReactRouter>) => {
  return (
    <LinkReactRouter
      style={{
        color: "#5E8CBA",
        textDecoration: "underline",
        fontSize: "16px",
      }}
      {...rest}
    >
      {children}
    </LinkReactRouter>
  );
};

export default Link;
