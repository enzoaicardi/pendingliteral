declare module "@enzoaicardi/pendingliteral" {
    /**
     * tag function waiting internal promises to be resolved before building the string
     * @param strings literal strings array
     * @param values literal values array
     * @returns {Promise<string>}
     */
    const pendingLiteral: (strings: TemplateStringsArray, ...values: any[]) => Promise<string>;
    /**
     * function waiting internal promises to be resolved before returning the merged array
     * @param array the array to join()
     * @param char character used to join() the array
     * @returns
     */
    const pendingJoin: (array: any[], char?: string) => Promise<string>;
    export { pendingLiteral, pendingJoin };
}
