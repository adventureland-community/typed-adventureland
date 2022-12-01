export type KeysOfType<Terface, Filter, K extends keyof Terface = keyof Terface> = K extends (
  Terface[K] extends Filter ? K : never
)
  ? K
  : never;

export type PickMembers<Terface, K extends keyof Terface> = { [P in K]: Terface[P] };

export type PickMembersOfType<Terface, Filter> = PickMembers<Terface, KeysOfType<Terface, Filter>>;

export type PickVoidMembers<Terface> = PickMembersOfType<Terface, void>;

export interface TypedEventEmitter<
  Events,
  VoidKeys extends KeysOfType<Events, void> = KeysOfType<Events, void>,
  NotVoidKeys extends Exclude<keyof Events, VoidKeys> = Exclude<keyof Events, VoidKeys>
> {
  on<K extends NotVoidKeys>(eventName: K, callback: (payload: Events[K]) => void): void;
  on<K extends VoidKeys>(eventName: K, callback: () => void): void;

  once<K extends NotVoidKeys>(eventName: K, callback: (payload: Events[K]) => void): void;
  once<K extends VoidKeys>(eventName: K, callback: () => void): void;

  off<K extends NotVoidKeys>(eventName: K, callback: (payload: Events[K]) => void): void;
  off<K extends VoidKeys>(eventName: K, callback: () => void): void;

  /** Removes all listeners for event `eventName` */
  off<K extends keyof Events>(eventName: K): void;

  /** Removes all event listeners */
  off(): void;

  emit<K extends NotVoidKeys>(eventName: K, payload: Events[K]): void;
  emit<K extends VoidKeys>(eventName: K): void;
}

export type StrictEventEmitter<Events, EventEmitter> = TypedEventEmitter<Events> &
  PickMembers<EventEmitter, Exclude<keyof EventEmitter, keyof TypedEventEmitter<Events>>>;

export type StrictEventEmitterPicked<
  Events,
  EventEmitter,
  Picked extends keyof TypedEventEmitter<Events>,
  TEE extends TypedEventEmitter<Events> = TypedEventEmitter<Events>
> = PickMembers<TEE, Extract<keyof TEE, Picked>> &
  PickMembers<EventEmitter, Exclude<keyof EventEmitter, keyof Pick<TEE, Picked>>>;
