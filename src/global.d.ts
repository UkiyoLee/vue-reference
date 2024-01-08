declare global {
  type Ignore<T, N> = T extends N ? never : T;

  interface String {
    /**
     * return a string 
     * @param sign 
     * @returns 
     */
    toUpperCamelCase: (sign?: string) => string;
    /**
     * 
     * @param sign the slice sign, the function is based on this to slice the original string.
     * @returns 
     */
    toLowerCamelCase: (sign?: string) => string;
  }

  interface Object {
    equals: (obj: Object) => boolean;
  }
}

export {};