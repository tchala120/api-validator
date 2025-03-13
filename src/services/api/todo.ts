import { z } from 'zod'

import { fetch } from 'services/fetch'

export const todoSchema = z.object({
	userId: z.boolean(),
	id: z.number(),
	title: z.string(),
	completed: z.boolean(),
})

export const todoListSchema = z.array(todoSchema)

export const getTodos = () => fetch.get<z.infer<typeof todoListSchema>>('todos').json()

export const getTodo = (id: string | number) => fetch.get<z.infer<typeof todoSchema>>(`todos/${id}`).json()

const schema = {
	'/todos': todoListSchema,
	'/todos/:id': todoSchema,
} as const

export default schema
