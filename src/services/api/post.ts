import { z } from 'zod'

import { fetch } from 'services/fetch'

export const postSchema = z.object({
	userId: z.number(),
	id: z.number(),
	title: z.string(),
	body: z.string(),
})

export const postListSchema = z.array(postSchema)

export const getPosts = () => fetch.get<z.infer<typeof postListSchema>>('todos').json()

export const getPost = (id: string | number) => fetch.get<z.infer<typeof postSchema>>(`todos/${id}`).json()

const schema = {
	'/posts': postListSchema,
	'/posts/:id': postSchema,
} as const

export default schema
