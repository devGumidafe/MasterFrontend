export const apiGithub = {
    baseUrl: 'https://api.github.com',
    org: (org: string, per_page: number, page: number) => `/orgs/${org}/members?per_page=${per_page}&page=${page}`,
}

export const apiRickAndMorty = {
    baseUrl: 'https://rickandmortyapi.com/api',
    characterList: (name: string, page: number) => `/character?name=${name}&page=${page}`,
}


