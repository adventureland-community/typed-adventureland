export type CodeMessageEvent<T> = {
  /** The name of the character who sent the message */
  name: string;
  /** The message sent */
  message: T;
  /** The date the message was sent */
  date: Date; // TODO: is this really a date or a string?
  /** Whether the message was sent locally */
  local: boolean;
};
