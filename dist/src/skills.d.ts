export {};
declare global {
    function use_skill(name: "use_hp" | "use_mp"): void;
    /** For destination, it's an array of [x, y] */
    function use_skill(name: "blink", destination: [number, number]): Promise<any>;
    /** The string is the ID of the target, the number is how much mana to spend on the attack */
    function use_skill(name: "cburst", targets: [string, number][]): Promise<any>;
    function use_skill(name: "magiport", target: string): Promise<any>;
    function use_skill(name: "use_town"): Promise<any>;
}
