export interface IPet {
  name: string
  type: string
  gender: string
  breed: string[]
  weight: string
  birthday: string
  birthMonth: string
  birthYear: string
  medication?: string[]
  allergies?: string[]
  existingCondition?: string[]
}

export type IClinic = {
  clinic: string
  address: string
  phone: string
}

export interface FlowState {
  displayFlowModal: boolean
  modalFlowView: string
  contactVetForMe: boolean
  emailPrescriptionMyself: boolean
  petData: IPet[]
  clinicData: IClinic[]
}

export const initialStateFlow = {
  displayFlowModal: false,
  modalFlowView: 'NO_VIEW',
  contactVetForMe: false,
  emailPrescriptionMyself: false,
  petData: [],
  clinicData: [],
}

export type FlowAction =
  | {
      flowType: 'OPEN_FLOW_MODAL'
    }
  | {
      flowType: 'CLOSE_FLOW_MODAL'
    }
  | {
      flowType: 'SET_FLOW_MODAL_VIEW'
      flowView: MODAL_FLOW_VIEWS
    }
  | {
      flowType: 'ADD_PET_DATA'
      petData: IPet
    }
  | {
      flowType: 'ADD_CLINIC_DATA'
      clinicData: IClinic
    }
  | {
      flowType: 'SET_CONTACT_VET'
    }
  | {
      flowType: 'SET_EMAIL_MYSELF'
    }

export type MODAL_FLOW_VIEWS =
  | 'CLINIC_INFO_VIEW'
  | 'ADD_NEW_PET_VIEW'
  | 'ADD_VET_CLINIC_VIEW'

export function FlowReducer(state: FlowState, action: FlowAction) {
  // eslint-disable-next-line default-case
  switch (action.flowType) {
    case 'OPEN_FLOW_MODAL': {
      return {
        ...state,
        displayFlowModal: true,
        modalFlowView: 'CLINIC_INFO_VIEW',
      }
    }
    case 'CLOSE_FLOW_MODAL': {
      return {
        ...state,
        displayFlowModal: false,
      }
    }
    case 'SET_FLOW_MODAL_VIEW': {
      return {
        ...state,
        modalFlowView: action.flowView,
      }
    }
    case 'ADD_PET_DATA': {
      return {
        ...state,
        petData: [...state.petData, action.petData],
        modalFlowView: 'CLINIC_INFO_VIEW',
      }
    }

    case 'ADD_CLINIC_DATA': {
      return {
        ...state,
        clinicData: [...state.clinicData, action.clinicData],
        modalFlowView: 'CLINIC_INFO_VIEW',
      }
    }

    case 'SET_CONTACT_VET': {
      return {
        ...state,
        contactVetForMe: true,
        emailPrescriptionMyself: false,
      }
    }
    case 'SET_EMAIL_MYSELF': {
      return {
        ...state,
        contactVetForMe: false,
        emailPrescriptionMyself: true,
      }
    }
  }
}
