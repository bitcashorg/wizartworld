import { faker } from '@faker-js/faker'

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
    },
  })
  return { response }
}
