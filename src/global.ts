import { Entity } from "./entity";

export {}; // this is done to make global a module
declare global {
  /* eslint-disable no-var, vars-on-top */
  var handle_command: undefined | ((command: string, args: string) => void);
  var on_cm: undefined | ((from: string, data: any) => void);
  // var on_map_click: undefined | ((x: number, y: number) => boolean);

  /**
   *
   */
  var on_party_invite: undefined | ((from: string) => void);

  /**
   * called by the inviter's name
   * request = someone requesting to join your existing party
   */
  var on_party_request: undefined | ((from: string) => void);

  var on_disappear: undefined | ((entity: Entity, data: unknown) => void);

  /**
   * called by the mage's name in PVE servers,
   * in PVP servers magiport either succeeds or fails without consent
   */
  var on_magiport: undefined | ((from: string) => void);

  /**
   * if true is returned, the default move is cancelled
   */
  var on_map_click: undefined | ((x: number, y: number) => void);

  /**
   * called just before the CODE is destroyed
   */
  var on_destroy: undefined | (() => void);

  /**
   * the game calls this function at the best place in each game draw frame,
   * so if you are playing the game at 60fps, this function gets called 60 times per second
   */
  var on_draw: undefined | (() => void);
  /* eslint-enable no-var, vars-on-top */
  interface AdventurelandClient {
    handle_command: typeof handle_command;
    on_cm: typeof on_cm;
    on_party_invite: typeof on_party_invite;
    on_party_request: typeof on_party_request;
    on_disappear: typeof on_disappear;
    on_magiport: typeof on_magiport;
    on_map_click: typeof on_map_click;
    on_destroy: typeof on_destroy;
    on_draw: typeof on_draw;
  }
}
