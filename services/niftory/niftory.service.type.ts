import { CreateFileOptionsInput } from '~/graphql/generated'

export interface CreateFileUploadUrlParams {
  /** A friendly name for the file. */
  name: string
  /** Description about the file. If specified, and uploadToIpfs=true, this description will be added to the IPFS file metadata. */
  description: string
  /** The app ID this file should be uploaded to. Only supported if calling with admin credentials. */
  appId: string
  /** File upload options, such as whether to upload to IPFS. */
  options?: CreateFileOptionsInput
}
