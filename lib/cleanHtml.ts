export const cleanHtml = (html: string): string => {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;

  const removeStyles = (node: Node) => {
    if (node.nodeType === Node.ELEMENT_NODE) {
      const element = node as Element;
      element.removeAttribute("style");
    }

    for (const element of node.childNodes) {
      removeStyles(element);
    }
  };

  removeStyles(tempDiv);

  return tempDiv.innerHTML;
};
