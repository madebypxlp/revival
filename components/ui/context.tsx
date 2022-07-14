import React, { FC, useMemo } from 'react'
import { ThemeProvider } from 'next-themes'
import {
  FlowAction,
  initialStateFlow,
  FlowState,
  FlowReducer,
  MODAL_FLOW_VIEWS,
  IPet,
  IClinic,
} from './ModalFlowComponent/ModalFlowContext'

export interface State {
  displaySidebar: boolean
  displayDropdown: boolean
  displayModal: boolean
  displayToast: boolean
  modalView: string
  toastText: string
  userAvatar: string
}

const initialState = {
  displaySidebar: false,
  displayDropdown: false,
  displayModal: false,
  modalView: 'LOGIN_VIEW',
  displayToast: false,
  toastText: '',
  userAvatar: '',
}

type Action =
  | {
      type: 'OPEN_SIDEBAR'
    }
  | {
      type: 'CLOSE_SIDEBAR'
    }
  | {
      type: 'OPEN_TOAST'
    }
  | {
      type: 'CLOSE_TOAST'
    }
  | {
      type: 'SET_TOAST_TEXT'
      text: ToastText
    }
  | {
      type: 'OPEN_DROPDOWN'
    }
  | {
      type: 'CLOSE_DROPDOWN'
    }
  | {
      type: 'OPEN_MODAL'
    }
  | {
      type: 'CLOSE_MODAL'
    }
  | {
      type: 'SET_MODAL_VIEW'
      view: MODAL_VIEWS
    }
  | {
      type: 'SET_USER_AVATAR'
      value: string
    }

type MODAL_VIEWS =
  | 'SIGNUP_VIEW'
  | 'LOGIN_VIEW'
  | 'FORGOT_VIEW'
  | 'NEW_SHIPPING_ADDRESS'
  | 'NEW_PAYMENT_METHOD'
type ToastText = string

export const UIContext = React.createContext<State | any>(initialState)

UIContext.displayName = 'UIContext'

// eslint-disable-next-line consistent-return
function uiReducer(state: State, action: Action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'OPEN_SIDEBAR': {
      return {
        ...state,
        displaySidebar: true,
      }
    }
    case 'CLOSE_SIDEBAR': {
      return {
        ...state,
        displaySidebar: false,
      }
    }
    case 'OPEN_DROPDOWN': {
      return {
        ...state,
        displayDropdown: true,
      }
    }
    case 'CLOSE_DROPDOWN': {
      return {
        ...state,
        displayDropdown: false,
      }
    }
    case 'OPEN_MODAL': {
      return {
        ...state,
        displayModal: true,
        displaySidebar: false,
      }
    }
    case 'CLOSE_MODAL': {
      return {
        ...state,
        displayModal: false,
      }
    }
    case 'OPEN_TOAST': {
      return {
        ...state,
        displayToast: true,
      }
    }
    case 'CLOSE_TOAST': {
      return {
        ...state,
        displayToast: false,
      }
    }
    case 'SET_MODAL_VIEW': {
      return {
        ...state,
        modalView: action.view,
      }
    }
    case 'SET_TOAST_TEXT': {
      return {
        ...state,
        toastText: action.text,
      }
    }
    case 'SET_USER_AVATAR': {
      return {
        ...state,
        userAvatar: action.value,
      }
    }
  }
}

export const UIProvider: FC = (props) => {
  const [authState, dispatch] = React.useReducer(uiReducer, initialState)
  const [flowState, flowDispatch] = React.useReducer(
    FlowReducer,
    initialStateFlow
  )
  const openSidebar = () => dispatch({ type: 'OPEN_SIDEBAR' })
  const closeSidebar = () => dispatch({ type: 'CLOSE_SIDEBAR' })
  const toggleSidebar = () =>
    authState.displaySidebar
      ? dispatch({ type: 'CLOSE_SIDEBAR' })
      : dispatch({ type: 'OPEN_SIDEBAR' })
  const closeSidebarIfPresent = () =>
    authState.displaySidebar && dispatch({ type: 'CLOSE_SIDEBAR' })

  const openDropdown = () => dispatch({ type: 'OPEN_DROPDOWN' })
  const closeDropdown = () => dispatch({ type: 'CLOSE_DROPDOWN' })

  const openModal = () => dispatch({ type: 'OPEN_MODAL' })
  const closeModal = () => dispatch({ type: 'CLOSE_MODAL' })

  const openToast = () => dispatch({ type: 'OPEN_TOAST' })
  const closeToast = () => dispatch({ type: 'CLOSE_TOAST' })

  const setUserAvatar = (value: string) =>
    dispatch({ type: 'SET_USER_AVATAR', value })

  const setModalView = (view: MODAL_VIEWS) =>
    dispatch({ type: 'SET_MODAL_VIEW', view })

  // Flow Dispatches
  const openModalFlow = () => flowDispatch({ flowType: 'OPEN_FLOW_MODAL' })
  const closeModalFlow = () => flowDispatch({ flowType: 'CLOSE_FLOW_MODAL' })
  const setModalFlowView = (flowView: MODAL_FLOW_VIEWS) =>
    flowDispatch({ flowType: 'SET_FLOW_MODAL_VIEW', flowView })
  const addPetData = (petData: IPet) =>
    flowDispatch({ flowType: 'ADD_PET_DATA', petData })
  const addClinicData = (clinicData: IClinic) =>
    flowDispatch({ flowType: 'ADD_CLINIC_DATA', clinicData })
  const setContactClinicBoolean = () =>
    flowDispatch({ flowType: 'SET_CONTACT_VET' })
  const setEmailMyselfBoolean = () =>
    flowDispatch({ flowType: 'SET_EMAIL_MYSELF' })
  //

  const state = { ...authState, ...flowState }

  const value = useMemo(() => {
    return {
      ...state,
      // ModalFlow
      openModalFlow,
      closeModalFlow,
      setModalFlowView,
      addPetData,
      addClinicData,
      setContactClinicBoolean,
      setEmailMyselfBoolean,
      // UI
      openSidebar,
      closeSidebar,
      toggleSidebar,
      closeSidebarIfPresent,
      openDropdown,
      closeDropdown,
      openModal,
      closeModal,
      setModalView,
      openToast,
      closeToast,
      setUserAvatar,
    }
  }, [state])

  return <UIContext.Provider value={value} {...props} />
}

export const useUI = () => {
  const context = React.useContext(UIContext)
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`)
  }
  return context
}

export const ManagedUIContext: FC = ({ children }) => (
  <UIProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </UIProvider>
)
