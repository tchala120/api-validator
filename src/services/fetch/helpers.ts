import { match } from 'path-to-regexp'
import { ZodType } from 'zod'

import { apiSchemas } from 'services/api/schema-registry'

export const findZodSchemaByURL = (requestURL: string): ZodType | undefined => {
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
