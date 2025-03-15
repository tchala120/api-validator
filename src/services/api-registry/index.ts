import { ZodType } from 'zod'

interface API<T = ZodType> {
	method: 'get' | 'post' | 'put' | 'patch' | 'delete'
	path: string
	response: T
}

type APIs = API[]

export class APIRegistry {
	private basePath: string
	private apis: APIs

	constructor(basePath: string, apis: APIs) {
		this.basePath = basePath
		this.apis = apis
	}
}
