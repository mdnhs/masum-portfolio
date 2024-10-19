// utils/cleanHtml.ts

export const cleanHtml = (html: string): string => {
    // Create a temporary DOM element to parse the HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;

    // Use a recursive function to clean up the HTML
    const removeStyles = (node: Node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element; // Assert node as Element
            // Remove style attribute
            element.removeAttribute('style');
        }

        // Recursively process child nodes
        for (let i = 0; i < node.childNodes.length; i++) {
            removeStyles(node.childNodes[i]);
        }
    };

    // Start cleaning from the temporary div
    removeStyles(tempDiv);

    // Return the cleaned HTML
    return tempDiv.innerHTML;
};
