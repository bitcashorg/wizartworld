import { faker } from '@faker-js/faker'
import { everything } from '@genql/runtime'

import { getClientGraphQLSdk } from '~/graphql'

export async function mint() {
  // await getClientGraphQLSdk().mutation({
  //   mintNFTModel: {},
  // })
}

export async function createNFTSet() {
  const response = getClientGraphQLSdk().mutation({
    createNFTSet: {
      __args: {
        data: {
          title: faker.random.words(3),
          attributes: {
            json: 'attributes',
            property: {
              bag: 'of',
              values: 1,
            },
          },
        },
      },
      ...everything,
    },
  })
  return { response }
}

export async function getNiftoryApps() {
  return getClientGraphQLSdk().query({
    app: everything,
  })
}
export async function getAppUser() {
  return getClientGraphQLSdk().query({
    appUser: everything,
  })
}
