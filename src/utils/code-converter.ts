export type CodeFormat = 'react' | 'vue';

/**
 * Convert React JSX/TSX code to Vue template string (browser-friendly).
 */
export function convertReactToVue(reactCode: string): string {
    let code = reactCode;

    // 1. className → class
    code = code.replace(/className=/g, 'class=');

    // 2. style={{ ... }} → :style="{ ... }" with single quotes and trimmed values
    code = code.replace(/style={{([\s\S]*?)}}/g, (_match: string, p1: string) => {
        const styleContent = p1
            .replace(/\n\s*/g, ' ')       // remove line breaks
            .trim()                        // trim leading/trailing whitespace
            .replace(/[`"]/g, `'`)         // replace backticks/double quotes with single quotes
            .replace(/\s*,?\s*$/, '')      // remove trailing comma & spaces
            .replace(/\s+/g, ' ')          // collapse multiple spaces
            .replace(/:\s*/g, ': ')        // normalize spacing around colon
            // Trim each value inside the object literal
            .replace(/'([^']*)'/g, (_m: string, val: string) => `'${val.trim()}'`);

        return `:style="{ ${styleContent} }"`;
    });

    // 3. JSX comments {/* ... */} → Vue comments <!-- ... -->
    code = code.replace(/{\/\*([\s\S]*?)\*\/}/g, (_match: string, p1: string) => `<!--${p1}-->`);

    // 4. Event handlers onClick → @click, onMouseEnter → @mouseenter, etc.
    code = code.replace(/on([A-Z]\w*)=/g, (_match: string, eventName: string) => `@${eventName.toLowerCase()}=`);

    return `<template>\n${code}\n</template>`;
}

/**
 * Get code in the specified format
 */
export function getCodeForFormat(reactCode: string, format: CodeFormat): string {
    return format === 'vue' ? convertReactToVue(reactCode) : reactCode;
}
