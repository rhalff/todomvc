// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux'

import type { TodosState, TodosAction } from './todos'
import type { FilterState, FilterAction } from './filter'

export type ReduxInitAction = { type: '@@INIT' }

export type State = TodosState & FilterState

export type Action = ReduxInitAction | TodosAction | FilterAction

export type Store = ReduxStore<State, Action>

export type Dispatch = ReduxDispatch<Action>

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void
  }
}

declare var require: any
