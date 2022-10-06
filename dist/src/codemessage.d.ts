export declare type CodeMessageEvent<T> = {
    /** The name of the character who sent the message */
    name: string;
    /** The message sent */
    message: T;
    /** The date the message was sent */
    date: Date;
    /** Whether the message was sent locally */
    local: boolean;
};
