export {};
declare global {
  var buttons: {
    [id: string]: {
      value: any;
      fn: Function;
      place: "top" | "bottom";
    };
  };
  function add_top_button(id: string, text: string, fn: () => unknown): void;
  function add_bottom_button(id: string, text: string, fn: () => unknown): void;
  function set_button_value(id: string, text: string): void;
  function clear_buttons(): void;

  interface AdventurelandClient {
    buttons: typeof buttons;
    add_top_button: typeof add_top_button;
    add_bottom_button: typeof add_bottom_button;
    set_button_value: typeof set_button_value;
    clear_buttons: typeof clear_buttons;
  }
}
