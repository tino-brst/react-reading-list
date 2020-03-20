export class Action<T extends string, P> {
  constructor(readonly type: T, readonly payload: P) {}
}

export class ActionWithoutPayload<T extends string> {
  constructor(readonly type: T) {}
}
