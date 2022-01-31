import React, { createContext, ReactNode, useContext } from "react"
import { repeatedElement } from "@plasmicapp/host"

export function TestComponent({ className }: { className?: string }) {
  return <div className={className}>TESTING</div>
}
export function VComp({ className }: { className?: string }) {
   return <div className={className}>TESTING</div>
}