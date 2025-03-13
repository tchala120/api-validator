import ky from 'ky'

import { findZodSchemaByURL } from './helpers'

export const fetch = ky.create({
	prefixUrl: import.meta.env.VITE_API_URL,
	hooks: {
		beforeRequest: [
			async (request) => {
				const accessToken = localStorage.getItem('token')

				if (accessToken) {
					request.headers.set('Authorization', `Bearer ${accessToken}`)
				}
			},
		],
		afterResponse: [
			async (request, _, response) => {
				const schema = findZodSchemaByURL(request.url)

				if (schema == null) {
					return response
				}

				const data = await response.json()

				const result = schema.safeParse(data)

				if (result.success) {
					return response
				}

				throw new Error(result.error.errors.map((error) => error.message).join('\n'))
			},
		],
	},
})
