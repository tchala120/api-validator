import { match } from 'path-to-regexp'

import { apiSchemas } from 'services/api/schema-registry'

export const findZodSchemaByURL = (requestURL: string) => {
	const url = new URL(requestURL)

	for (const path in apiSchemas) {
		const pathKey = path as keyof typeof apiSchemas

		const matcher = match(path, {
			decode: decodeURIComponent,
		})

		const isPathMatched = matcher(url.pathname)

		if (isPathMatched) {
			return apiSchemas[pathKey]
		}
	}
}
