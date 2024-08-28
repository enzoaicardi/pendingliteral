/**
 * tag function waiting internal promises to be resolved before building the string
 * @param strings literal strings array
 * @param values literal values array
 * @returns {Promise<string>}
 */
const pendingLiteral = (
    strings: TemplateStringsArray,
    ...values: any[]
): Promise<string> =>
    Promise.all(values).then((resolvedValues) =>
        reduceLiteral(strings, resolvedValues)
    );

/**
 * function waiting internal promises to be resolved before returning the merged array
 * @param array the array to join()
 * @param char character used to join() the array
 * @returns
 */
const pendingMerge = (array: any[], char: string = ""): Promise<string> =>
    Promise.all(array).then((resolvedValues) => resolvedValues.join(char));

const reduceLiteral = (strings: TemplateStringsArray, values: any[]): string =>
    strings.reduce(
        (accumulator, string, index) =>
            accumulator + string + (values[index] != null ? values[index] : ""),
        ""
    );

export { pendingLiteral, pendingMerge };
