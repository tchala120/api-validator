export type ExtractRouteParams<T extends string> = T extends `${string}:${infer Param}/${infer Rest}`
	? Record<Param, string> | ExtractRouteParams<Rest>
	: T extends `${string}:${infer Param}`
		? Record<Param, string>
		: never
