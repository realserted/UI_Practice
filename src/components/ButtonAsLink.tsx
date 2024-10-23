import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

type ButtonAsLinkProps = {
  to: string;
  label: string;
};

const ButtonAsLink: React.FC<ButtonAsLinkProps> = ({ to, label }) => {
  return (
    <NavLink to={to} style={{ textDecoration: "none" }}>
      {({ isActive }) => (
        <Button variant={isActive ? "default" : "secondary"}>{label}</Button>
      )}
    </NavLink>
  );
};

export default ButtonAsLink;
