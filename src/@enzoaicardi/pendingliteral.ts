/**
 * tag function used to join template literal strings and values
 * @param {TemplateStringsArray} strings
 * @param {any[]} values
 * @returns {string}
 */
const reduceLiteral = (strings: TemplateStringsArray, values: any[]): string =>
    strings.reduce(
        (accumulator, string, index) =>
            accumulator + string + (values[index] != null ? values[index] : ""),
        ""
    );

/**
 * tag function waiting internal promises to be resolved before building the string
 * @param {TemplateStringsArray} strings literal strings array
 * @param {any[]} values literal values array
 * @returns {Promise<string>}
 */
const pendingLiteral = (
    strings: TemplateStringsArray,
    ...values: any[]
): Promise<string> =>
    Promise.all(values).then((resolvedValues) =>
        reduceLiteral(strings, resolvedValues)
    );

export { pendingLiteral };
