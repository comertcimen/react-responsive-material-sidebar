import { NavLink } from "react-router-dom";
import { styled } from "@material-ui/core/styles";

const StyledLink = styled(NavLink, {
  shouldForwardProp: (prop) => prop,
})(({ theme }) => ({
  textDecoration: "none",
  color: "inherit",
  "&:focus, &:hover, &:visited, &:link, &:active": {
    textDecoration: "none",
  },
}));

export default StyledLink;
