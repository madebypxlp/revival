export default interface IPaginateChildren {
  perPage: number
  currentPage?: number
  totalPages?: number
  onChange?: (arg0: number) => any
}
