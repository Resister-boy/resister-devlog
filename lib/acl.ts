import { PageProps } from './types'

export async function pageAcl({ site, recordMap, pageId }: PageProps): Promise<PageProps> {
  if (!site) {
    const error = {
      statusCode: 404,
      message: 'Unable to resolve notion site'
    }
    return {  error: error }
  }

  if (!recordMap) {
    const error = {
      statusCode: 404,
      message: `Unable to resolve page for domain "${site.domain}". Notion page "${pageId}" not found.`
    }
    return { error: error }
  }

  const keys = Object.keys(recordMap.block)
  const rootKey = keys[0]

  if (!rootKey) {
    const error = {
      statusCode: 404,
      message: `Unable to resolve page for domain "${site.domain}". Notion page "${pageId}" invalid data.`
    }
    return { error: error }
  }

  const rootValue = recordMap.block[rootKey]?.value
  const rootSpaceId = rootValue?.space_id

  if (
    rootSpaceId &&
    site.rootNotionSpaceId &&
    rootSpaceId !== site.rootNotionSpaceId
  ) {
    if (process.env.NODE_ENV) {
      const error = {
        statusCode: 404,
        message: `Notion page "${pageId}" doesn't belong to the Notion workspace owned by "${site.domain}".`
      }
      return { error: error }
    }
  }
}
