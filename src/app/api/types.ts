export type FetchStatuses = "init" | "loading" | "fulfilled" | "error"

export type InitState = {
  status: "init"
  response: undefined
}

export type LoadingState = {
  status: "loading"
  response: undefined
}

export type ErrorState = {
  status: "error"
  response: undefined
  error: string
}

export type FulfilledState<Response = unknown> = {
  status: "fulfilled"
  response: Response
}

export type StateFromApi<Response = unknown> =
  | InitState
  | LoadingState
  | FulfilledState<Response>
  | ErrorState

export const InitialState: InitState = { status: "init", response: undefined }
