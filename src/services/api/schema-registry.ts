import postSchema from './post'
import todoSchema from './todo'

export const apiSchemas = {
	...todoSchema,
	...postSchema,
} as const
