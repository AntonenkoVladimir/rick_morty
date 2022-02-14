export interface IDetails {
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  image: string,
  location: { name: string },
  episode: { name: string }[]
}
