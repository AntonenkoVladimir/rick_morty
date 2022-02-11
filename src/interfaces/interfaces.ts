export interface INewObj {
  status?: string,
  species?: string,
  gender?: string,
  type?: string
}

export interface IFilters {
  0?: number,
  1?: number,
  item?: string[]
};

export interface ICharacter {
  typename: string,
  name: string,
  id: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  image: string,
  location: { name: string },
  episode: { name: string }[]
};
