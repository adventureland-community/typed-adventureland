export type ServerToClient_limitdcreport = {
  /** How many of each call you made */
  mcalls: {
    auth?: number;
    bank?: number;
    buy?: number;
    code?: number;
    equip?: number;
    leave?: number;
    loaded?: number;
    merchant?: number;
    move?: number;
    "o:home"?: number;
    party?: number;
    ping_trig?: number;
    players?: number;
    property?: number;
    render?: number;
    secondhands?: number;
    send?: number;
    send_updates?: number;
    skill?: number;
    stop?: number;
    target?: number;
    transport?: number;
    unequip?: number;
    use?: number;
  };
  /** Call cost limit. It's lower for comm sockets. */
  climit?: number;
  /** Total number of socket messages sent */
  total?: number;
};
