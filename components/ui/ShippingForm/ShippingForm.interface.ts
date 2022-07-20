export default interface IShippingForm {
  firstName: string
  lastName: string
  company: string
  country: string
  addressOne: string
  addressTwo: string
  city: string
  stateProvince: string
  postalCode: string
  phoneNumber: string
  comments: string
  onSubmit: (data: any) => any
}
