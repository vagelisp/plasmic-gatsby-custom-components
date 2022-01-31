
   
import { initPlasmicLoader } from "@plasmicapp/loader-gatsby"
import {
	TestComponent,
	VComp,
} from "./components/plasmic"

export function initPlasmicLoaderWithRegistrations(plasmicOptions: any) {
  const PLASMIC = initPlasmicLoader(plasmicOptions)

  PLASMIC.registerComponent(TestComponent, {
    name: "TestComponent",
    props: {},
  })

	
	PLASMIC.registerComponent(VComp, {
	name: "VComp",
    props: {},
  })
  

  return PLASMIC
}