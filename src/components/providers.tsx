'use client'

import { useState } from "react";
import { ChildrenProps } from "../types";
import { MenuContext } from "./blocks/menu";

export function Providers({ children }: ChildrenProps) {
  const [menu, setMenu] = useState(false)
  return (
    <MenuContext.Provider value={{ value: menu, setValue: setMenu }}>
      {children}
    </MenuContext.Provider>
  )
}