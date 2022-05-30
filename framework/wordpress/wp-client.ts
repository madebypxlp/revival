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
  const body = JSON.stringify({ variables, query })
  const headers = { 'Content-Type': 'application/json' }
  const res = await fetch(url!, { method, body, headers })

  if (res.ok) {
    const { data } = await res.json()
    return data
  }
  console.error(await res.text())
  throw res.text()
}

export default wpFetcher
