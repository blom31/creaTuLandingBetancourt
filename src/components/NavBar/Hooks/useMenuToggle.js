import { useState } from "react";

export function useMenuToggle() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => setIsActive((prev) => !prev);
  const closeMenu = () => setIsActive(false);

  return { isActive, toggleMenu, closeMenu };
}
