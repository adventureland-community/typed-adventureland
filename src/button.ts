export {};
declare global {
  const buttons: {
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
}
