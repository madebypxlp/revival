const wpFetcher = async ({
  url = process.env.WP_GRAPHQL_API,
  method = 'POST',
  variables,
  query,
}: {
  url?: string
  method?: string
  query?: any
  variables?: any
}) => {
  const body =
    method === 'POST' ? JSON.stringify({ variables, query }) : undefined
  const headers = { 'Content-Type': 'application/json' }
  const res = await fetch(url!, { method, body, headers })
  if (res.ok) {
    const json = await res.json()
    const { data, errors, ...rest } = json
    if (errors) {
      throw new Error(JSON.stringify(errors))
    }
    return data || json
  }
  console.error(await res.text())
  throw res.text()
}

export default wpFetcher
