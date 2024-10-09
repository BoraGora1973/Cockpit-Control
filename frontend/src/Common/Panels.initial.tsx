import * as Interface from './Panels.interface'

export const CMDSInitialValues: Interface.CMDSInterface['input'] = {
     "RWR_SWITCH_IN":	"",
     "JMR_SWITCH_IN":	"",
     "MWS_SWITCH_IN":	"",
     "SWITCH_01_IN":	"",
     "SWITCH_02_IN":	"",
     "SWITCH_CH_IN":	"",
     "SWITCH_FL_IN":	"",
     "SWITCH_JETT_IN":	"",
     "KNOB_PRGM_IN":	"",
     "KNOB_MODE_IN":	"",
     "DISPENSE_IN":	"",
     "RDY_IN":	"",
     "FLR_QTY_IN":	"",
     "CH_QTY_IN":	"",
}

export const LANDINGGEARInitialValues: Interface.LANDINGGEARInterface['input'] = {
     "STORES_CONFIG_IN":	"",
     "LIGHT_DEMO_IN":	"",
     "NEEDLE_DEMO_IN":	"",
}

export const initialValues: { [K in keyof Interface.InterfaceMap]: Interface.InterfaceMap[K]['input'] } = {
	"CMDS":	CMDSInitialValues,
	"LANDINGGEAR":	LANDINGGEARInitialValues,
}

